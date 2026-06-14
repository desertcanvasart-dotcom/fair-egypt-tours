import { NextResponse } from "next/server";
import path from "node:path";
import { readFile } from "node:fs/promises";

const TYPES: Record<string, string> = {
  png: "image/png",
  jpg: "image/jpeg",
  jpeg: "image/jpeg",
  webp: "image/webp",
  gif: "image/gif",
  avif: "image/avif",
  svg: "image/svg+xml",
};

export async function GET(_req: Request, { params }: { params: Promise<{ file: string[] }> }) {
  const { file } = await params;
  const rel = file.join("/");
  if (rel.includes("..")) return new NextResponse("Bad request", { status: 400 });

  const full = path.join(process.cwd(), "uploads", rel);
  try {
    const buf = await readFile(full);
    const ext = (rel.split(".").pop() || "").toLowerCase();
    return new NextResponse(new Uint8Array(buf), {
      headers: {
        "Content-Type": TYPES[ext] || "application/octet-stream",
        "Cache-Control": "public, max-age=31536000, immutable",
      },
    });
  } catch {
    return new NextResponse("Not found", { status: 404 });
  }
}
