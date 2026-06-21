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
  model: any,
  // When true, refresh existing records from the lib source (code is the
  // source of truth for this collection). Otherwise create-only-if-missing
  // so dashboard edits are never overwritten by a re-seed.
  refresh = false
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
  if (refresh) {
    console.log(`  ${label}: ${created} created, ${updated} refreshed`);
  } else {
    console.log(`  ${label}: ${created} created, ${items.length - created} already existed`);
  }
}

async function main() {
  console.log("Seeding from lib/*.ts ...");
  await seedCollection("tours", tours, prisma.tour);
  // Destinations are refreshed from code — the full city guides live in
  // lib/destinations.ts and are not edited via the dashboard.
  await seedCollection("destinations", destinations, prisma.destination, true);
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
