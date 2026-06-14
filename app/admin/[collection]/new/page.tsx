import Link from "next/link";
import { notFound } from "next/navigation";
import { getCollection } from "@/lib/collections";
import { requireUser } from "@/lib/session";
import RecordForm from "@/components/admin/RecordForm";

export default async function NewRecordPage({ params }: { params: Promise<{ collection: string }> }) {
  const { collection } = await params;
  const col = getCollection(collection);
  if (!col) notFound();
  await requireUser();

  return (
    <>
      <div className="adm__top">
        <div>
          <h1>New {col.singular}</h1>
          <div className="sub"><Link href={`/admin/${col.key}`}>← Back to {col.plural}</Link></div>
        </div>
      </div>
      <div className="adm__body">
        <RecordForm
          collectionKey={col.key}
          collectionPlural={col.plural}
          fields={col.fields}
          data={{}}
          meta={{ slug: "", status: "draft", featured: false, sortOrder: 0 }}
          id={null}
        />
      </div>
    </>
  );
}
