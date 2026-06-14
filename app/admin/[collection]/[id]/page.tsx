import Link from "next/link";
import { notFound } from "next/navigation";
import { getCollection, getPath } from "@/lib/collections";
import { getRecord } from "@/lib/admin-data";
import { requireUser } from "@/lib/session";
import RecordForm from "@/components/admin/RecordForm";

export default async function EditRecordPage({
  params,
}: {
  params: Promise<{ collection: string; id: string }>;
}) {
  const { collection, id } = await params;
  const col = getCollection(collection);
  if (!col) notFound();
  await requireUser();

  const rec = await getRecord(collection, id);
  if (!rec) notFound();

  const data = (rec.data ?? {}) as Record<string, unknown>;
  const title = String(getPath(data, col.titleField) ?? rec.slug);

  return (
    <>
      <div className="adm__top">
        <div>
          <h1>Edit {col.singular}</h1>
          <div className="sub">
            <Link href={`/admin/${col.key}`}>← {col.plural}</Link>
            {rec.status === "published" ? <> · <Link href={`/${col.key}/${rec.slug}`} target="_blank">View live ↗</Link></> : null}
          </div>
        </div>
        <span className={`badge badge--${rec.deletedAt ? "trash" : rec.status}`}>{rec.deletedAt ? "trash" : rec.status}</span>
      </div>
      <div className="adm__body">
        <p style={{ color: "var(--muted)", fontSize: 13, marginBottom: 18 }}>{title}</p>
        <RecordForm
          collectionKey={col.key}
          collectionPlural={col.plural}
          fields={col.fields}
          data={data}
          meta={{ slug: rec.slug, status: rec.status, featured: rec.featured, sortOrder: rec.sortOrder }}
          id={rec.id}
        />
      </div>
    </>
  );
}
