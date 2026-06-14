import Link from "next/link";
import { notFound } from "next/navigation";
import { requireUser } from "@/lib/session";
import { getPage } from "@/lib/cms";
import { pageSchemas, pageMeta, type PageKey } from "@/lib/page-content";
import PageForm from "@/components/admin/PageForm";

const KEYS: PageKey[] = ["site", "home", "about"];

export default async function EditPagePage({ params }: { params: Promise<{ key: string }> }) {
  const { key } = await params;
  if (!KEYS.includes(key as PageKey)) notFound();
  await requireUser();

  const pk = key as PageKey;
  const data = (await getPage(pk)) as unknown as Record<string, unknown>;

  return (
    <>
      <div className="adm__top">
        <div>
          <h1>{pageMeta[pk].label}</h1>
          <div className="sub"><Link href="/admin/pages">← Static Pages</Link> · {pageMeta[pk].description}</div>
        </div>
        <Link href={pk === "about" ? "/about" : "/"} target="_blank" className="abtn abtn--ghost">View ↗</Link>
      </div>
      <div className="adm__body">
        <PageForm pageKey={pk} fields={pageSchemas[pk]} data={data} />
      </div>
    </>
  );
}
