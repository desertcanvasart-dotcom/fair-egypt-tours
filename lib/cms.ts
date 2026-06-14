import "server-only";
import { prisma } from "./db";
import type { TourDetail } from "./tours";
import type { Destination } from "./destinations";
import type { Hotel } from "./hotels";
import type { Tip } from "./tips";
import type { Post } from "./blog";
import { site as fallbackSite, navLinks as fallbackNav } from "./data";
import { pageDefaults, type PageKey } from "./page-content";

// Only published, non-trashed content is ever served to the public site.
const PUBLISHED = { status: "published", deletedAt: null } as const;
const ORDER = [{ sortOrder: "asc" as const }, { createdAt: "desc" as const }];

/* ----------------------------- Tours ----------------------------- */
export async function getTours(): Promise<TourDetail[]> {
  const rows = await prisma.tour.findMany({ where: PUBLISHED, orderBy: ORDER });
  return rows.map((r) => r.data as unknown as TourDetail);
}
export async function getTour(slug: string): Promise<TourDetail | null> {
  const r = await prisma.tour.findFirst({ where: { slug, ...PUBLISHED } });
  return r ? (r.data as unknown as TourDetail) : null;
}
export async function getTourSlugs(): Promise<string[]> {
  const r = await prisma.tour.findMany({ where: PUBLISHED, select: { slug: true } });
  return r.map((x) => x.slug);
}

/* -------------------------- Destinations -------------------------- */
export async function getDestinations(): Promise<Destination[]> {
  const rows = await prisma.destination.findMany({ where: PUBLISHED, orderBy: ORDER });
  return rows.map((r) => r.data as unknown as Destination);
}
export async function getDestination(slug: string): Promise<Destination | null> {
  const r = await prisma.destination.findFirst({ where: { slug, ...PUBLISHED } });
  return r ? (r.data as unknown as Destination) : null;
}
export async function getDestinationSlugs(): Promise<string[]> {
  const r = await prisma.destination.findMany({ where: PUBLISHED, select: { slug: true } });
  return r.map((x) => x.slug);
}

/* ----------------------------- Hotels ----------------------------- */
export async function getHotels(): Promise<Hotel[]> {
  const rows = await prisma.hotel.findMany({ where: PUBLISHED, orderBy: ORDER });
  return rows.map((r) => r.data as unknown as Hotel);
}
export async function getHotel(slug: string): Promise<Hotel | null> {
  const r = await prisma.hotel.findFirst({ where: { slug, ...PUBLISHED } });
  return r ? (r.data as unknown as Hotel) : null;
}
export async function getHotelSlugs(): Promise<string[]> {
  const r = await prisma.hotel.findMany({ where: PUBLISHED, select: { slug: true } });
  return r.map((x) => x.slug);
}

/* --------------------------- Travel tips -------------------------- */
export async function getTips(): Promise<Tip[]> {
  const rows = await prisma.tip.findMany({ where: PUBLISHED, orderBy: ORDER });
  return rows.map((r) => r.data as unknown as Tip);
}
export async function getTip(slug: string): Promise<Tip | null> {
  const r = await prisma.tip.findFirst({ where: { slug, ...PUBLISHED } });
  return r ? (r.data as unknown as Tip) : null;
}
export async function getTipSlugs(): Promise<string[]> {
  const r = await prisma.tip.findMany({ where: PUBLISHED, select: { slug: true } });
  return r.map((x) => x.slug);
}

/* ------------------------------ Blog ------------------------------ */
export async function getPosts(): Promise<Post[]> {
  const rows = await prisma.post.findMany({ where: PUBLISHED, orderBy: ORDER });
  return rows.map((r) => r.data as unknown as Post);
}
export async function getPost(slug: string): Promise<Post | null> {
  const r = await prisma.post.findFirst({ where: { slug, ...PUBLISHED } });
  return r ? (r.data as unknown as Post) : null;
}
export async function getPostSlugs(): Promise<string[]> {
  const r = await prisma.post.findMany({ where: PUBLISHED, select: { slug: true } });
  return r.map((x) => x.slug);
}

/* -------------------------- Site settings ------------------------- */
export async function getSiteSettings(): Promise<{ site: typeof fallbackSite; navLinks: typeof fallbackNav }> {
  const row = await prisma.pageContent.findUnique({ where: { key: "site" } });
  if (!row) return { site: fallbackSite, navLinks: fallbackNav };
  return row.data as unknown as { site: typeof fallbackSite; navLinks: typeof fallbackNav };
}

/* ----------------------- Sitemap entries -------------------------- */
export async function getSitemapEntries(): Promise<{ path: string; lastModified: Date }[]> {
  const sel = { slug: true, updatedAt: true } as const;
  const [tours, dests, hotels, tips, posts] = await Promise.all([
    prisma.tour.findMany({ where: PUBLISHED, select: sel }),
    prisma.destination.findMany({ where: PUBLISHED, select: sel }),
    prisma.hotel.findMany({ where: PUBLISHED, select: sel }),
    prisma.tip.findMany({ where: PUBLISHED, select: sel }),
    prisma.post.findMany({ where: PUBLISHED, select: sel }),
  ]);
  const map = (rows: { slug: string; updatedAt: Date }[], base: string) =>
    rows.map((r) => ({ path: `${base}/${r.slug}`, lastModified: r.updatedAt }));
  return [
    ...map(tours, "/tours"),
    ...map(dests, "/destinations"),
    ...map(hotels, "/hotels"),
    ...map(tips, "/travel-tips"),
    ...map(posts, "/blog"),
  ];
}

/* ---------------------- Static page content ----------------------- */
export async function getPage<K extends PageKey>(key: K): Promise<(typeof pageDefaults)[K]> {
  const row = await prisma.pageContent.findUnique({ where: { key } });
  const def = pageDefaults[key];
  if (!row) return def;
  return { ...def, ...(row.data as object) } as (typeof pageDefaults)[K];
}

/* ------------------------------ Utils ----------------------------- */
export function categoriesOf<T extends { category?: string }>(items: T[], allLabel = "All") {
  return [allLabel, ...Array.from(new Set(items.map((i) => i.category).filter(Boolean) as string[]))];
}
