import "server-only";
import { prisma } from "./db";
import { getCollection } from "./collections";

/* eslint-disable @typescript-eslint/no-explicit-any */
export function modelFor(key: string): any {
  switch (getCollection(key)?.model) {
    case "post": return prisma.post;
    case "tour": return prisma.tour;
    case "destination": return prisma.destination;
    case "hotel": return prisma.hotel;
    case "tip": return prisma.tip;
    default: throw new Error(`Unknown collection: ${key}`);
  }
}

export type Filter = "all" | "published" | "draft" | "trash";

export async function listRecords(key: string, filter: Filter = "all") {
  const where =
    filter === "trash"
      ? { deletedAt: { not: null } }
      : {
          deletedAt: null,
          ...(filter === "published" ? { status: "published" } : {}),
          ...(filter === "draft" ? { status: "draft" } : {}),
        };
  return modelFor(key).findMany({ where, orderBy: [{ sortOrder: "asc" }, { updatedAt: "desc" }] });
}

export async function getRecord(key: string, id: string) {
  return modelFor(key).findUnique({ where: { id } });
}

export async function filterCounts(key: string) {
  const m = modelFor(key);
  const [all, published, draft, trash] = await Promise.all([
    m.count({ where: { deletedAt: null } }),
    m.count({ where: { deletedAt: null, status: "published" } }),
    m.count({ where: { deletedAt: null, status: "draft" } }),
    m.count({ where: { deletedAt: { not: null } } }),
  ]);
  return { all, published, draft, trash };
}
