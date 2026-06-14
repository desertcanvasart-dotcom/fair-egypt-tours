import path from "node:path";
import { PrismaClient } from "./generated/prisma/client";
import { PrismaBetterSqlite3 } from "@prisma/adapter-better-sqlite3";

// Absolute path to the SQLite file (project_root/dev.db — where Prisma's CLI
// created it), resolved from cwd so it works in dev, seed, and production alike.
const dbFile = path.join(process.cwd(), "dev.db").replace(/\\/g, "/");
const adapter = new PrismaBetterSqlite3({ url: `file:${dbFile}` });

// Reuse a single PrismaClient across hot-reloads in dev.
const globalForPrisma = globalThis as unknown as { prisma?: PrismaClient };

export const prisma: PrismaClient =
  globalForPrisma.prisma ?? new PrismaClient({ adapter });

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
