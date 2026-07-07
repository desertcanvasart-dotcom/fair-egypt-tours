import "./admin.css";
import type { Metadata } from "next";
import { requireUser } from "@/lib/session";
import { prisma } from "@/lib/db";
import { LogoMarkLight } from "@/components/icons";
import AdminNav from "@/components/admin/AdminNav";
import { doSignOut } from "./auth-actions";

export const metadata: Metadata = {
  title: "Dashboard — Fair Egypt Tours",
  robots: { index: false, follow: false },
};

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  const user = await requireUser();

  const live = { deletedAt: null };
  const [posts, tours, tourCats, dests, hotels, tips, newBookings] = await Promise.all([
    prisma.post.count({ where: live }),
    prisma.tour.count({ where: live }),
    prisma.tourCategory.count({ where: live }),
    prisma.destination.count({ where: live }),
    prisma.hotel.count({ where: live }),
    prisma.tip.count({ where: live }),
    prisma.booking.count({ where: { status: "new" } }),
  ]);

  const counts: Record<string, number> = {
    "/admin/blog": posts,
    "/admin/tours": tours,
    "/admin/tour-categories": tourCats,
    "/admin/destinations": dests,
    "/admin/hotels": hotels,
    "/admin/travel-tips": tips,
    "/admin/bookings": newBookings,
  };

  const initial = (user.name || user.email || "?").charAt(0).toUpperCase();

  return (
    <div className="adm">
      <aside className="adm__side">
        <div className="adm__brand">
          <LogoMarkLight size={36} />
          <div><b>Fair Egypt</b><span>Dashboard</span></div>
        </div>

        <AdminNav role={user.role} counts={counts} />

        <div className="adm__side-foot">
          <div className="adm__who">
            <span className="av">{initial}</span>
            <div><b>{user.name}</b><span>{user.role}</span></div>
          </div>
          <form action={doSignOut}>
            <button
              type="submit"
              className="abtn abtn--ghost abtn--block adm__signout"
              style={{ color: "#fff", borderColor: "rgba(255,255,255,.22)" }}
            >
              Sign out
            </button>
          </form>
        </div>
      </aside>

      <div className="adm__main">{children}</div>
    </div>
  );
}
