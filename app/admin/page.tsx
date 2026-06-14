import Link from "next/link";
import { requireUser } from "@/lib/session";
import { prisma } from "@/lib/db";

type Stat = { label: string; href: string; total: number; published: number; draft: number };

async function statFor(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  model: any,
  label: string,
  href: string
): Promise<Stat> {
  const [total, published, draft] = await Promise.all([
    model.count({ where: { deletedAt: null } }),
    model.count({ where: { deletedAt: null, status: "published" } }),
    model.count({ where: { deletedAt: null, status: "draft" } }),
  ]);
  return { label, href, total, published, draft };
}

export default async function AdminHome() {
  const user = await requireUser();

  const stats = await Promise.all([
    statFor(prisma.post, "Blog Posts", "/admin/blog"),
    statFor(prisma.tour, "Tours", "/admin/tours"),
    statFor(prisma.destination, "Destinations", "/admin/destinations"),
    statFor(prisma.hotel, "Hotels", "/admin/hotels"),
    statFor(prisma.tip, "Travel Tips", "/admin/travel-tips"),
  ]);

  const recent = await prisma.post.findMany({
    where: { deletedAt: null },
    orderBy: { updatedAt: "desc" },
    take: 6,
  });

  return (
    <>
      <div className="adm__top">
        <div>
          <h1>Welcome back, {(user.name || "").split(" ")[0] || "there"}</h1>
          <div className="sub">Here&apos;s what&apos;s happening across your site.</div>
        </div>
        <Link href="/" className="abtn abtn--ghost" target="_blank">View site ↗</Link>
      </div>

      <div className="adm__body">
        <div className="adm__stats">
          {stats.map((s) => (
            <Link key={s.href} href={s.href} className="stat-tile">
              <div className="lab">{s.label}</div>
              <div className="num">{s.total}</div>
              <div className="meta">
                <b>{s.published}</b> published · {s.draft} draft{s.draft === 1 ? "" : "s"}
              </div>
            </Link>
          ))}
        </div>

        <div className="panel">
          <div className="panel__head">
            <div>
              <h2>Recent blog activity</h2>
              <div className="sub">Your most recently edited posts.</div>
            </div>
            <Link href="/admin/blog" className="abtn abtn--sm">Manage blog</Link>
          </div>
          {recent.length === 0 ? (
            <div className="empty"><h3>No posts yet</h3><p>Create your first blog post to get started.</p></div>
          ) : (
            <table className="dtable">
              <thead>
                <tr><th>Title</th><th>Status</th><th>Updated</th><th></th></tr>
              </thead>
              <tbody>
                {recent.map((p) => {
                  const d = p.data as unknown as { title: string; category?: string };
                  return (
                    <tr key={p.id}>
                      <td className="t-title">{d.title}<small>/{p.slug}</small></td>
                      <td><span className={`badge badge--${p.status}`}>{p.status}</span></td>
                      <td style={{ color: "var(--muted)", fontSize: 13 }}>{p.updatedAt.toLocaleDateString()}</td>
                      <td className="t-actions"><Link href={`/admin/blog/${p.id}`} className="abtn abtn--sm">Edit</Link></td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </>
  );
}
