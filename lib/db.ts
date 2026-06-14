import path from "node:path";
import { PrismaClient } from "./generated/prisma/client";
import { PrismaBetterSqlite3 } from "@prisma/adapter-better-sqlite3";

// Resolve the SQLite file from DATABASE_URL (falling back to ./dev.db locally).
// Accepts `file:./relative.db`, `file:/abs/path.db`, or a bare path. This lets
// the same code use a local file in dev and a mounted volume in production.
function resolveDbUrl(): string {
  const raw = (process.env.DATABASE_URL || "file:./dev.db").trim();
  const filePart = raw.replace(/^file:/, "");
  const abs = path.isAbsolute(filePart) ? filePart : path.join(process.cwd(), filePart);
  return `file:${abs.replace(/\\/g, "/")}`;
}

const adapter = new PrismaBetterSqlite3({ url: resolveDbUrl() });

// Reuse a single PrismaClient across hot-reloads in dev.
const globalForPrisma = globalThis as unknown as { prisma?: PrismaClient };

export const prisma: PrismaClient =
  globalForPrisma.prisma ?? new PrismaClient({ adapter });

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
