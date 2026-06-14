import Link from "next/link";
import { notFound } from "next/navigation";
import { getCollection, getPath } from "@/lib/collections";
import { listRecords, filterCounts, type Filter } from "@/lib/admin-data";
import { requireUser } from "@/lib/session";
import { setStatus, toggleFeatured, trashRecord, restoreRecord, destroyRecord } from "@/lib/admin-actions";
import ConfirmButton from "@/components/admin/ConfirmButton";

const FILTERS: { key: Filter; label: string }[] = [
  { key: "all", label: "All" },
  { key: "published", label: "Published" },
  { key: "draft", label: "Drafts" },
  { key: "trash", label: "Trash" },
];

export default async function CollectionListPage({
  params,
  searchParams,
}: {
  params: Promise<{ collection: string }>;
  searchParams: Promise<{ filter?: string; saved?: string }>;
}) {
  const { collection } = await params;
  const col = getCollection(collection);
  if (!col) notFound();
  const user = await requireUser();

  const sp = await searchParams;
  const filter = (FILTERS.some((f) => f.key === sp.filter) ? sp.filter : "all") as Filter;
  const [rows, counts] = await Promise.all([listRecords(collection, filter), filterCounts(collection)]);
  const isTrash = filter === "trash";

  return (
    <>
      <div className="adm__top">
        <div>
          <h1>{col.plural}</h1>
          <div className="sub">{counts.all} item{counts.all === 1 ? "" : "s"} · {counts.published} published · {counts.draft} draft{counts.draft === 1 ? "" : "s"}</div>
        </div>
        <Link href={`/admin/${col.key}/new`} className="abtn abtn--primary">+ New {col.singular}</Link>
      </div>

      <div className="adm__body">
        {sp.saved ? <div className="adm__banner">Saved successfully.</div> : null}

        <div className="adm__toolbar">
          <div className="adm__tabs">
            {FILTERS.map((f) => (
              <Link
                key={f.key}
                href={f.key === "all" ? `/admin/${col.key}` : `/admin/${col.key}?filter=${f.key}`}
                className={filter === f.key ? "active" : ""}
              >
                {f.label}{f.key === "trash" && counts.trash ? ` (${counts.trash})` : ""}
              </Link>
            ))}
          </div>
          <Link href={`/${col.key}`} target="_blank" className="abtn abtn--ghost abtn--sm adm__spacer">View public ↗</Link>
        </div>

        <div className="panel">
          {rows.length === 0 ? (
            <div className="empty">
              <h3>{isTrash ? "Trash is empty" : `No ${col.plural.toLowerCase()} yet`}</h3>
              <p>{isTrash ? "Deleted items will appear here." : "Create your first one to get started."}</p>
            </div>
          ) : (
            <table className="dtable">
              <thead>
                <tr><th>{col.singular}</th><th>Status</th><th>Updated</th><th style={{ textAlign: "right" }}>Actions</th></tr>
              </thead>
              <tbody>
                {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                {rows.map((r: any) => {
                  const data = r.data as Record<string, unknown>;
                  const title = String(getPath(data, col.titleField) ?? r.slug);
                  const thumb = col.imageField ? String(getPath(data, col.imageField) ?? "") : "";
                  return (
                    <tr key={r.id}>
                      <td>
                        <div className="t-row">
                          {thumb ? <span className="t-thumb" style={{ backgroundImage: `url('${thumb}')` }} /> : null}
                          <span className="t-title">{title}<small>/{col.key}/{r.slug}</small></span>
                        </div>
                      </td>
                      <td>
                        <span className={`badge badge--${r.deletedAt ? "trash" : r.status}`}>{r.deletedAt ? "trash" : r.status}</span>
                        {r.featured && !r.deletedAt ? <span className="badge badge--star" style={{ marginLeft: 6 }}>Featured</span> : null}
                      </td>
                      <td style={{ color: "var(--muted)", fontSize: 13 }}>{r.updatedAt.toLocaleDateString()}</td>
                      <td>
                        <div className="t-actions">
                          {isTrash ? (
                            <>
                              <form action={restoreRecord.bind(null, col.key, r.id)}><button className="abtn abtn--sm">Restore</button></form>
                              {user.role === "admin" ? (
                                <ConfirmButton action={destroyRecord.bind(null, col.key, r.id)} label="Delete forever" confirm={`Permanently delete "${title}"? This cannot be undone.`} />
                              ) : null}
                            </>
                          ) : (
                            <>
                              <Link href={`/admin/${col.key}/${r.id}`} className="abtn abtn--sm">Edit</Link>
                              {r.status === "published" ? (
                                <form action={setStatus.bind(null, col.key, r.id, "draft")}><button className="abtn abtn--sm">Unpublish</button></form>
                              ) : (
                                <form action={setStatus.bind(null, col.key, r.id, "published")}><button className="abtn abtn--sm abtn--primary">Publish</button></form>
                              )}
                              <form action={toggleFeatured.bind(null, col.key, r.id)}><button className="abtn abtn--sm" title="Toggle featured">★</button></form>
                              <ConfirmButton action={trashRecord.bind(null, col.key, r.id)} label="Trash" confirm={`Move "${title}" to Trash?`} />
                            </>
                          )}
                        </div>
                      </td>
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
