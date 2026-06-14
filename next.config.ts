import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Keep Prisma + the native SQLite driver out of the bundler; load at runtime.
  serverExternalPackages: ["@prisma/client", "better-sqlite3", "@prisma/adapter-better-sqlite3"],
};

export default nextConfig;
