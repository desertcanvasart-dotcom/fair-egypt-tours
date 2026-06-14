"use client";

import { useActionState } from "react";
import Link from "next/link";
import { savePage, type SaveState } from "@/lib/admin-actions";
import { type Field } from "@/lib/collections";
import FieldInput from "./FieldInput";

export default function PageForm({
  pageKey,
  fields,
  data,
}: {
  pageKey: string;
  fields: Field[];
  data: Record<string, unknown>;
}) {
  const action = savePage.bind(null, pageKey);
  const [state, formAction, pending] = useActionState<SaveState, FormData>(action, undefined);

  return (
    <form action={formAction} className="aform aform--wide">
      <div className="aform__grid">
        {fields.map((f) => <FieldInput key={f.name} field={f} data={data} />)}
      </div>

      {state?.error ? <p className="aform__err">{state.error}</p> : null}

      <div className="aform__actions">
        <button type="submit" className="abtn abtn--primary" disabled={pending}>
          {pending ? "Saving…" : "Save changes"}
        </button>
        <Link href="/admin/pages" className="abtn abtn--ghost">Cancel</Link>
      </div>
    </form>
  );
}
