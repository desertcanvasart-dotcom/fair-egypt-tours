/**
 * Seeds the database from the existing hardcoded content in lib/*.ts so no
 * content is lost when we switch the site over to the database.
 * Idempotent: upserts by slug, so it's safe to run repeatedly.
 *
 * Run with:  npx tsx prisma/seed.ts
 */
import bcrypt from "bcryptjs";
import { prisma } from "../lib/db";
import { tours } from "../lib/tours";
import { tourCategories } from "../lib/tour-categories";
import { destinations } from "../lib/destinations";
import { hotels } from "../lib/hotels";
import { tips } from "../lib/tips";
import { posts } from "../lib/blog";
import { pageDefaults } from "../lib/page-content";

async function seedCollection<T extends { slug: string; category?: string; featured?: boolean }>(
  label: string,
  items: T[],
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  model: any,
  // refresh: update existing records from the lib source (code is the source
  //   of truth). Otherwise create-only-if-missing so dashboard edits survive.
  // prune: also delete DB rows whose slug is no longer in the code list — used
  //   for fully code-authored collections (destinations, hotels) so removed
  //   entries (e.g. the old red-sea destination, placeholder hotels) disappear.
  refresh = false,
  prune = false
) {
  let created = 0;
  let updated = 0;
  let i = 0;
  for (const item of items) {
    const exists = await model.findUnique({ where: { slug: item.slug }, select: { id: true } });
    const payload = {
      status: "published",
      category: item.category ?? null,
      featured: item.featured ?? false,
      sortOrder: i,
      data: item as object,
    };
    if (!exists) {
      await model.create({ data: { slug: item.slug, ...payload } });
      created++;
    } else if (refresh) {
      await model.update({ where: { slug: item.slug }, data: payload });
      updated++;
    }
    i++;
  }
  let removed = 0;
  if (prune) {
    const slugs = items.map((x) => x.slug);
    const res = await model.deleteMany({ where: { slug: { notIn: slugs } } });
    removed = res.count;
  }
  if (refresh || prune) {
    console.log(`  ${label}: ${created} created, ${updated} refreshed, ${removed} removed`);
  } else {
    console.log(`  ${label}: ${created} created, ${items.length - created} already existed`);
  }
}

// Old placeholder tours (from the first launch) that were replaced by the
// dashboard-authored catalogue. Removed by slug — never touches new tours.
const RETIRED_TOUR_SLUGS = [
  "pyramids-sphinx-museum",
  "valley-of-the-kings-karnak",
  "abu-simbel-nile-sail",
  "nile-cruise-coast-escape",
  "islamic-coptic-cairo",
  "alexandria-day-trip",
];

async function main() {
  console.log("Seeding from lib/*.ts ...");
  const retired = await prisma.tour.deleteMany({ where: { slug: { in: RETIRED_TOUR_SLUGS } } });
  if (retired.count) console.log(`  tours: removed ${retired.count} retired placeholder tours`);
  await seedCollection("tours", tours, prisma.tour);
  await seedCollection("tour-categories", tourCategories, prisma.tourCategory);
  // Destinations and hotels are fully code-authored (the city guides and the
  // curated hotel list live in lib/*.ts), so we refresh from code and prune
  // anything no longer listed.
  await seedCollection("destinations", destinations, prisma.destination, true, true);
  await seedCollection("hotels", hotels, prisma.hotel, true, true);
  await seedCollection("tips", tips, prisma.tip);
  // Blog posts are code-authored in lib/blog.ts, so refresh + prune: anything
  // not listed there is removed (currently empty — all posts were cleared for
  // a rewrite).
  await seedCollection("posts", posts, prisma.post, true, true);

  // Static page singletons (home, about, site). Created only if missing so
  // dashboard edits are never overwritten by a re-seed.
  for (const key of ["site", "home", "about"] as const) {
    const existing = await prisma.pageContent.findUnique({ where: { key } });
    if (!existing) {
      await prisma.pageContent.create({ data: { key, data: pageDefaults[key] as object } });
      console.log(`  pageContent: created "${key}"`);
    } else {
      console.log(`  pageContent: "${key}" already exists (unchanged)`);
    }
  }

  // Admin account. Password is only set on first creation — re-seeding never
  // overwrites it, so a changed password is preserved.
  const adminEmail = (process.env.ADMIN_EMAIL || "desertcanvasart@gmail.com").toLowerCase();
  const defaultPassword = process.env.ADMIN_PASSWORD || "FairEgypt!2026";
  const existing = await prisma.user.findUnique({ where: { email: adminEmail } });
  if (!existing) {
    await prisma.user.create({
      data: {
        email: adminEmail,
        name: "Site Admin",
        role: "admin",
        passwordHash: bcrypt.hashSync(defaultPassword, 10),
      },
    });
    console.log(`  user: created admin ${adminEmail} (temp password: ${defaultPassword} — change after login)`);
  } else {
    console.log(`  user: admin ${adminEmail} already exists (password unchanged)`);
  }

  console.log("Done.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
