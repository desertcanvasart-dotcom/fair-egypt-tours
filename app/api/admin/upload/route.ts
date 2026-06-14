import { NextResponse } from "next/server";
import path from "node:path";
import { writeFile, mkdir } from "node:fs/promises";
import { auth } from "@/auth";
import { prisma } from "@/lib/db";

const MAX_BYTES = 8 * 1024 * 1024; // 8 MB
const ALLOWED = ["jpg", "jpeg", "png", "webp", "gif", "avif", "svg"];

export async function POST(req: Request) {
  const session = await auth();
  if (!session?.user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const form = await req.formData();
  const file = form.get("file");
  if (!(file instanceof File)) return NextResponse.json({ error: "No file provided." }, { status: 400 });
  if (file.size > MAX_BYTES) return NextResponse.json({ error: "File too large (max 8 MB)." }, { status: 400 });

  const ext = (file.name.split(".").pop() || "jpg").toLowerCase().replace(/[^a-z0-9]/g, "");
  if (!ALLOWED.includes(ext)) return NextResponse.json({ error: "Unsupported image type." }, { status: 400 });

  const base =
    file.name.replace(/\.[^.]+$/, "").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "").slice(0, 40) ||
    "image";
  const fname = `${base}-${Date.now().toString(36)}${Math.random().toString(36).slice(2, 7)}.${ext}`;

  // Stored outside /public (Next's prod server won't serve runtime-added public
  // files) and served via the /media/[...] route handler instead.
  const dir = path.join(process.cwd(), "uploads");
  await mkdir(dir, { recursive: true });
  await writeFile(path.join(dir, fname), Buffer.from(await file.arrayBuffer()));

  const url = `/media/${fname}`;
  await prisma.media.create({ data: { url, filename: file.name } });

  return NextResponse.json({ url });
}
