# Fair Egypt Tours

Affordable Egypt tours — a Next.js website with a built-in custom CMS and an AI-readable structured-data layer.

## Stack
- **Next.js 16** (App Router, TypeScript) — server-rendered / statically generated for SEO
- **SQLite + Prisma 7** (via the `better-sqlite3` driver adapter)
- **Auth.js v5** (credentials + roles) for the `/admin` dashboard
- Vanilla CSS (no Tailwind)

## Getting started

```bash
npm install                       # also runs `prisma generate`
cp .env.example .env              # then set AUTH_SECRET (openssl rand -hex 32)
npx prisma migrate dev            # create the SQLite database
npm run db:seed                   # seed content + an admin user
npm run dev                       # http://localhost:3000
```

The seed prints the admin login (default `desertcanvasart@gmail.com` / `FairEgypt!2026` — change it after first login).

## Scripts
- `npm run dev` / `npm run build` / `npm start`
- `npm run db:seed` — seed/refresh content (idempotent; never overwrites edits)
- `npm run db:studio` — Prisma Studio
- `npm run lint`

## Structure
- `app/` — routes (public pages, `/admin` dashboard, `/api`, `llms.txt`, `sitemap.ts`, `robots.ts`)
- `components/` — UI + `components/admin/` dashboard widgets
- `lib/` — `cms.ts` (public reads), `admin-actions.ts` (CRUD), `collections.ts` / `page-content.ts` (content schemas), `db.ts`
- `prisma/` — schema, migrations, seed

## CMS
Sign in at `/admin` to manage Blog, Tours, Destinations, Hotels, and Travel Tips (create / edit / draft / publish / feature / trash-restore), edit the static Home/About pages and Site settings, and upload images.

## Notes
- `dev.db`, `.env`, `uploads/`, and `lib/generated/` are intentionally git-ignored.
- Replace placeholder media (`public/og-image.jpg`, `public/logo.png`) and sample data before production.
