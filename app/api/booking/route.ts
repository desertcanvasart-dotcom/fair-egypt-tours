import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";

/* eslint-disable @typescript-eslint/no-explicit-any */
const str = (v: any, max: number) => (v == null ? null : String(v).trim().slice(0, max) || null);
const num = (v: any) => {
  const n = Number(v);
  return Number.isFinite(n) ? Math.max(0, Math.min(99, Math.round(n))) : null;
};

// Public endpoint: saves a booking / quote request from the site's forms.
export async function POST(req: Request) {
  try {
    const b = await req.json().catch(() => null);
    if (!b || typeof b !== "object") return NextResponse.json({ ok: false }, { status: 400 });

    // Honeypot — silently accept and drop obvious bots.
    if (b.company) return NextResponse.json({ ok: true });

    const name = str(b.name, 120);
    if (!name && !b.phone && !b.email) return NextResponse.json({ ok: false }, { status: 400 });

    const places = Array.isArray(b.places)
      ? b.places.map((p: any) => String(p).slice(0, 120)).slice(0, 40)
      : [];

    await prisma.booking.create({
      data: {
        kind: b.kind === "tour" ? "tour" : "quote",
        name: name || "—",
        email: str(b.email, 160),
        phone: str(b.phone, 60),
        tourSlug: str(b.tourSlug, 120),
        tourTitle: str(b.tourTitle, 200),
        places: places.length ? JSON.stringify(places) : null,
        days: str(b.days, 60),
        adults: num(b.adults),
        children: num(b.children),
        dates: str(b.dates, 120),
        notes: str(b.notes, 2000),
        source: str(b.source, 200),
      },
    });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
