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
import { destinations } from "../lib/destinations";
import { hotels } from "../lib/hotels";
import { tips } from "../lib/tips";
import { posts } from "../lib/blog";
import { pageDefaults } from "../lib/page-content";

async function seedCollection<T extends { slug: string; category?: string; featured?: boolean }>(
  label: string,
  items: T[],
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  model: any
) {
  let i = 0;
  for (const item of items) {
    await model.upsert({
      where: { slug: item.slug },
      update: {
        data: item as object,
        category: item.category ?? null,
        featured: item.featured ?? false,
        sortOrder: i,
      },
      create: {
        slug: item.slug,
        status: "published",
        category: item.category ?? null,
        featured: item.featured ?? false,
        sortOrder: i,
        data: item as object,
      },
    });
    i++;
  }
  console.log(`  ${label}: ${items.length} upserted`);
}

async function main() {
  console.log("Seeding from lib/*.ts ...");
  await seedCollection("tours", tours, prisma.tour);
  await seedCollection("destinations", destinations, prisma.destination);
  await seedCollection("hotels", hotels, prisma.hotel);
  await seedCollection("tips", tips, prisma.tip);
  await seedCollection("posts", posts, prisma.post);

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
