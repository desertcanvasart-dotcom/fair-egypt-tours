"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { prisma } from "./db";
import { requireUser, requireAdmin } from "./session";
import { getCollection, slugify, getPath, type Field } from "./collections";
import { pageSchemas, type PageKey } from "./page-content";
import { modelFor } from "./admin-data";

export type SaveState = { error?: string } | undefined;

/* eslint-disable @typescript-eslint/no-explicit-any */

function setPath(obj: Record<string, any>, path: string, value: any) {
  const parts = path.split(".");
  let o = obj;
  for (let i = 0; i < parts.length - 1; i++) {
    o[parts[i]] = o[parts[i]] ?? {};
    o = o[parts[i]];
  }
  o[parts[parts.length - 1]] = value;
}

function buildData(fields: Field[], formData: FormData): Record<string, any> {
  const data: Record<string, any> = {};
  for (const f of fields) {
    const raw = formData.get(f.name);
    let val: any;
    switch (f.type) {
      case "number": val = raw === null || raw === "" ? undefined : Number(raw); break;
      case "checkbox": val = formData.get(f.name) != null; break;
      case "lines":
        val = String(raw ?? "").split(/\r?\n/).map((s) => s.trim()).filter(Boolean);
        break;
      case "json":
      case "itinerary": {
        const t = String(raw ?? "").trim();
        val = t ? JSON.parse(t) : [];
        break;
      }
      default:
        val = raw === null ? "" : String(raw);
    }
    if (val !== undefined) setPath(data, f.name, val);
  }
  return data;
}

function revalidateFor(key: string, slug?: string) {
  revalidatePath(`/${key}`);
  if (slug) revalidatePath(`/${key}/${slug}`);
  revalidatePath("/");
  revalidatePath("/sitemap.xml");
  revalidatePath(`/admin/${key}`);
}

export async function saveRecord(
  key: string,
  id: string | null,
  _prev: SaveState,
  formData: FormData
): Promise<SaveState> {
  await requireUser();
  const col = getCollection(key);
  if (!col) return { error: "Unknown collection." };

  let data: Record<string, any>;
  try {
    data = buildData(col.fields, formData);
  } catch {
    return { error: "One of the JSON fields contains invalid JSON. Please fix it and try again." };
  }

  const title = String(getPath(data, col.titleField) ?? "").trim();
  let slug = String(formData.get("__slug") ?? "").trim();
  if (!slug) slug = slugify(title);
  if (!slug) return { error: "A title (or slug) is required." };

  const status = String(formData.get("__status") ?? "draft");
  const featured = formData.get("__featured") != null;
  const sortOrderRaw = formData.get("__sortOrder");
  const category = data.category != null ? String(data.category) : null;

  // keep the JSON document in sync with indexed columns
  data.slug = slug;
  data.featured = featured;

  const model = modelFor(key);
  const clash = await model.findFirst({ where: { slug, ...(id ? { NOT: { id } } : {}) }, select: { id: true } });
  if (clash) return { error: `The slug "${slug}" is already in use. Choose a different one.` };

  const base = { slug, status, featured, category, data };
  let savedSlug = slug;

  if (id) {
    const extra = sortOrderRaw != null && sortOrderRaw !== "" ? { sortOrder: Number(sortOrderRaw) } : {};
    const rec = await model.update({ where: { id }, data: { ...base, ...extra } });
    savedSlug = rec.slug;
  } else {
    const count = await model.count();
    await model.create({ data: { ...base, sortOrder: count } });
  }

  revalidateFor(key, savedSlug);
  redirect(`/admin/${key}?saved=1`);
}

export async function setStatus(key: string, id: string, status: string) {
  await requireUser();
  const rec = await modelFor(key).update({ where: { id }, data: { status } });
  revalidateFor(key, rec.slug);
}

export async function toggleFeatured(key: string, id: string) {
  await requireUser();
  const model = modelFor(key);
  const cur = await model.findUnique({ where: { id } });
  const next = !cur.featured;
  const rec = await model.update({
    where: { id },
    data: { featured: next, data: { ...(cur.data as any), featured: next } },
  });
  revalidateFor(key, rec.slug);
}

export async function trashRecord(key: string, id: string) {
  await requireUser();
  const rec = await modelFor(key).update({ where: { id }, data: { deletedAt: new Date() } });
  revalidateFor(key, rec.slug);
}

export async function restoreRecord(key: string, id: string) {
  await requireUser();
  const rec = await modelFor(key).update({ where: { id }, data: { deletedAt: null } });
  revalidateFor(key, rec.slug);
}

export async function destroyRecord(key: string, id: string) {
  await requireAdmin();
  await modelFor(key).delete({ where: { id } });
  revalidatePath(`/admin/${key}`);
}

/* ---------------------- Static page singletons -------------------- */
export async function savePage(key: string, _prev: SaveState, formData: FormData): Promise<SaveState> {
  await requireUser();
  const schema = pageSchemas[key as PageKey];
  if (!schema) return { error: "Unknown page." };

  let data: Record<string, any>;
  try {
    data = buildData(schema, formData);
  } catch {
    return { error: "One of the JSON fields contains invalid JSON. Please fix it and try again." };
  }

  await prisma.pageContent.upsert({ where: { key }, update: { data }, create: { key, data } });

  revalidatePath("/");
  if (key === "about") revalidatePath("/about");
  revalidatePath("/sitemap.xml");
  revalidatePath("/admin/pages");
  redirect("/admin/pages?saved=1");
}
