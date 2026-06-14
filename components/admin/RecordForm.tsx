"use client";

import { useActionState } from "react";
import Link from "next/link";
import { saveRecord, type SaveState } from "@/lib/admin-actions";
import { type Field } from "@/lib/collections";
import FieldInput from "./FieldInput";

type Meta = { slug: string; status: string; featured: boolean; sortOrder: number };

export default function RecordForm({
  collectionKey,
  collectionPlural,
  fields,
  data,
  meta,
  id,
}: {
  collectionKey: string;
  collectionPlural: string;
  fields: Field[];
  data: Record<string, unknown>;
  meta: Meta;
  id: string | null;
}) {
  const action = saveRecord.bind(null, collectionKey, id);
  const [state, formAction, pending] = useActionState<SaveState, FormData>(action, undefined);

  return (
    <form action={formAction} className="aform aform--wide">
      <div className="aform__grid">
        {fields.map((f) => <FieldInput key={f.name} field={f} data={data} />)}
      </div>

      <div className="panel" style={{ padding: 20, marginTop: 8 }}>
        <div className="aform__grid">
          <div className="afield">
            <label htmlFor="__slug">URL slug</label>
            <input id="__slug" name="__slug" type="text" defaultValue={meta.slug} placeholder="auto-from-title" />
            <span className="hint">Leave blank to generate from the title. Used in the page URL.</span>
          </div>
          <div className="afield">
            <label htmlFor="__status">Status</label>
            <select id="__status" name="__status" defaultValue={meta.status}>
              <option value="draft">Draft</option>
              <option value="published">Published</option>
              <option value="archived">Archived</option>
            </select>
          </div>
          <div className="afield">
            <label htmlFor="__sortOrder">Sort order</label>
            <input id="__sortOrder" name="__sortOrder" type="number" defaultValue={meta.sortOrder} />
            <span className="hint">Lower numbers show first.</span>
          </div>
          <div className="afield" style={{ alignSelf: "end" }}>
            <label style={{ display: "flex", alignItems: "center", gap: 10, cursor: "pointer" }}>
              <input name="__featured" type="checkbox" defaultChecked={meta.featured} style={{ width: 18, height: 18 }} />
              Featured
            </label>
            <span className="hint">Highlights this item (e.g. featured blog post).</span>
          </div>
        </div>
      </div>

      {state?.error ? <p className="aform__err">{state.error}</p> : null}

      <div className="aform__actions">
        <button type="submit" className="abtn abtn--primary" disabled={pending}>
          {pending ? "Saving…" : id ? "Save changes" : `Create ${collectionPlural.replace(/s$/, "")}`}
        </button>
        <Link href={`/admin/${collectionKey}`} className="abtn abtn--ghost">Cancel</Link>
      </div>
    </form>
  );
}
