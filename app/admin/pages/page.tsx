import Link from "next/link";
import { requireUser } from "@/lib/session";
import { pageMeta, type PageKey } from "@/lib/page-content";

const ORDER: PageKey[] = ["site", "home", "about"];

export default async function PagesIndex({ searchParams }: { searchParams: Promise<{ saved?: string }> }) {
  await requireUser();
  const sp = await searchParams;

  return (
    <>
      <div className="adm__top">
        <div>
          <h1>Static Pages</h1>
          <div className="sub">Edit the fixed pages and global settings.</div>
        </div>
        <Link href="/" target="_blank" className="abtn abtn--ghost">View site ↗</Link>
      </div>
      <div className="adm__body">
        {sp.saved ? <div className="adm__banner">Saved successfully.</div> : null}
        <div className="adm__stats">
          {ORDER.map((key) => (
            <Link key={key} href={`/admin/pages/${key}`} className="stat-tile">
              <div className="lab">{pageMeta[key].label}</div>
              <p className="meta" style={{ marginTop: 10, fontSize: 13, lineHeight: 1.5 }}>{pageMeta[key].description}</p>
              <span className="abtn abtn--sm" style={{ marginTop: 16 }}>Edit →</span>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
