import { NextResponse } from "next/server";
import { auth } from "@/auth";
import { prisma } from "@/lib/db";

/** Lists uploaded media for the library picker (most recent first). */
export async function GET() {
  const session = await auth();
  if (!session?.user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const items = await prisma.media.findMany({
    orderBy: { createdAt: "desc" },
    take: 200,
    select: { url: true, filename: true, createdAt: true },
  });
  return NextResponse.json({ items });
}
