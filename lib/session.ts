import { redirect } from "next/navigation";
import { auth } from "@/auth";

/** Require any signed-in user (admin or editor). Redirects to /login if not. */
export async function requireUser() {
  const session = await auth();
  if (!session?.user) redirect("/login");
  return session.user;
}

/** Require an admin. Editors are bounced back to the dashboard. */
export async function requireAdmin() {
  const user = await requireUser();
  if (user.role !== "admin") redirect("/admin?denied=1");
  return user;
}
