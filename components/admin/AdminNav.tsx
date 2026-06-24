"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type Item = { href: string; label: string; icon: React.ReactNode; adminOnly?: boolean };
type Group = { group: string | null; links: Item[] };

const I = {
  grid: <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/></svg>,
  post: <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M4 5h16M4 10h16M4 15h10M4 20h7"/></svg>,
  tour: <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 7l6-3 6 3 6-3v13l-6 3-6-3-6 3z"/><path d="M9 4v13M15 7v13"/></svg>,
  tag: <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.6 13.4l-7.2 7.2a2 2 0 01-2.8 0l-7.2-7.2A2 2 0 013 12V5a2 2 0 012-2h7a2 2 0 011.4.6l7.2 7.2a2 2 0 010 2.6z"/><circle cx="7.5" cy="7.5" r="1.3"/></svg>,
  pin: <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 21s-7-5-7-11a7 7 0 0114 0c0 6-7 11-7 11z"/><circle cx="12" cy="10" r="2.5"/></svg>,
  hotel: <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21V5l9-2v18M21 21V9l-9-2M7 8v0M7 12v0M7 16v0"/></svg>,
  tip: <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18h6M10 21h4M12 3a6 6 0 00-4 10c.7.7 1 1.3 1 2h6c0-.7.3-1.3 1-2a6 6 0 00-4-10z"/></svg>,
  page: <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2h9l5 5v15H6z"/><path d="M14 2v6h6"/></svg>,
  media: <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="16" rx="2"/><circle cx="8.5" cy="9.5" r="1.5"/><path d="M21 16l-5-5L5 20"/></svg>,
  user: <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M16 11a4 4 0 10-8 0M4 20a7 7 0 0116 0"/></svg>,
};

const groups: Group[] = [
  { group: null, links: [{ href: "/admin", label: "Dashboard", icon: I.grid }] },
  {
    group: "Content",
    links: [
      { href: "/admin/blog", label: "Blog Posts", icon: I.post },
      { href: "/admin/tours", label: "Tours", icon: I.tour },
      { href: "/admin/tour-categories", label: "Tour Categories", icon: I.tag },
      { href: "/admin/destinations", label: "Destinations", icon: I.pin },
      { href: "/admin/hotels", label: "Hotels", icon: I.hotel },
      { href: "/admin/travel-tips", label: "Travel Tips", icon: I.tip },
    ],
  },
  {
    group: "Site",
    links: [
      { href: "/admin/pages", label: "Static Pages", icon: I.page },
      { href: "/admin/media", label: "Media", icon: I.media },
      { href: "/admin/users", label: "Users", icon: I.user, adminOnly: true },
    ],
  },
];

export default function AdminNav({
  role,
  counts,
}: {
  role?: string;
  counts: Record<string, number>;
}) {
  const pathname = usePathname();
  const isActive = (href: string) =>
    href === "/admin" ? pathname === "/admin" : pathname.startsWith(href);

  return (
    <>
      {groups.map((g, gi) => (
        <div key={gi}>
          {g.group ? <div className="adm__grp">{g.group}</div> : null}
          <nav className="adm__nav">
            {g.links
              .filter((l) => !l.adminOnly || role === "admin")
              .map((l) => (
                <Link key={l.href} href={l.href} className={isActive(l.href) ? "active" : ""}>
                  {l.icon}
                  <span>{l.label}</span>
                  {counts[l.href] != null ? <span className="count">{counts[l.href]}</span> : null}
                </Link>
              ))}
          </nav>
        </div>
      ))}
    </>
  );
}
