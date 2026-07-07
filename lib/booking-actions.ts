"use server";

import { revalidatePath } from "next/cache";
import { prisma } from "./db";
import { requireUser } from "./session";

export async function setBookingStatus(formData: FormData) {
  await requireUser();
  const id = String(formData.get("id") || "");
  const status = String(formData.get("status") || "new");
  if (id) await prisma.booking.update({ where: { id }, data: { status } });
  revalidatePath("/admin/bookings");
}

export async function deleteBooking(id: string) {
  await requireUser();
  await prisma.booking.delete({ where: { id } });
  revalidatePath("/admin/bookings");
}
