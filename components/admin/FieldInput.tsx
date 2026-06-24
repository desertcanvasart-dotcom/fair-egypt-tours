"use client";

import ImageInput from "./ImageInput";
import ItineraryInput from "./ItineraryInput";
import { getPath, type Field } from "@/lib/collections";

export function initialValue(field: Field, data: Record<string, unknown>): string {
  const v = getPath(data, field.name);
  if (v == null) return "";
  if (field.type === "lines") return Array.isArray(v) ? (v as string[]).join("\n") : String(v);
  if (field.type === "json") return JSON.stringify(v, null, 2);
  if (field.type === "itinerary") return JSON.stringify(v);
  return String(v);
}

export default function FieldInput({ field, data }: { field: Field; data: Record<string, unknown> }) {
  const id = `f_${field.name}`;
  const dv = initialValue(field, data);
  return (
    <div className={`afield${field.full ? " afield--full" : ""}`}>
      <label htmlFor={id}>{field.label}</label>
      {field.type === "textarea" ? (
        <textarea id={id} name={field.name} defaultValue={dv} placeholder={field.placeholder} />
      ) : field.type === "lines" ? (
        <textarea id={id} name={field.name} defaultValue={dv} placeholder={field.placeholder} style={{ minHeight: 100 }} />
      ) : field.type === "json" ? (
        <textarea id={id} name={field.name} defaultValue={dv} className="mono" style={{ minHeight: 160 }} spellCheck={false} />
      ) : field.type === "select" ? (
        <select id={id} name={field.name} defaultValue={dv}>
          {(field.options ?? []).map((o) => <option key={o} value={o}>{o}</option>)}
        </select>
      ) : field.type === "datalist" ? (
        <>
          <input id={id} name={field.name} type="text" defaultValue={dv} placeholder={field.placeholder} list={`${id}__opts`} autoComplete="off" />
          <datalist id={`${id}__opts`}>
            {(field.options ?? []).map((o) => <option key={o} value={o} />)}
          </datalist>
        </>
      ) : field.type === "itinerary" ? (
        <ItineraryInput name={field.name} defaultValue={dv} mode={field.mode ?? "time"} />
      ) : field.type === "number" ? (
        <input id={id} name={field.name} type="number" step="any" defaultValue={dv} placeholder={field.placeholder} />
      ) : field.type === "date" ? (
        <input id={id} name={field.name} type="date" defaultValue={dv} />
      ) : field.type === "image" ? (
        <ImageInput name={field.name} defaultValue={dv} />
      ) : (
        <input id={id} name={field.name} type="text" defaultValue={dv} placeholder={field.placeholder} />
      )}
      {field.hint ? <span className="hint">{field.hint}</span> : null}
    </div>
  );
}
