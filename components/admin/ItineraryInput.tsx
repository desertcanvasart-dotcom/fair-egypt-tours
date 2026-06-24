"use client";

import { useEffect, useState } from "react";

type Step = { time: string; title: string; text: string };

/**
 * Structured itinerary editor. Each step is its own block with a time/day, a
 * title and a multi-line description — no more cramming JSON onto one line.
 * Serializes to a hidden JSON input the save action parses as the `itinerary`.
 */
export default function ItineraryInput({
  name,
  defaultValue,
  mode = "time",
}: {
  name: string;
  defaultValue?: string;
  mode?: "time" | "day";
}) {
  // Switch Time/Day automatically based on the sibling "Type" field (Package = day-by-day).
  const [liveMode, setLiveMode] = useState<"time" | "day">(mode);
  useEffect(() => {
    const sel = document.querySelector<HTMLSelectElement>('select[name="type"]');
    if (!sel) return;
    const apply = () => setLiveMode(/package/i.test(sel.value) ? "day" : "time");
    apply();
    sel.addEventListener("change", apply);
    return () => sel.removeEventListener("change", apply);
  }, []);

  const [rows, setRows] = useState<Step[]>(() => {
    try {
      const v = JSON.parse(defaultValue || "[]");
      return Array.isArray(v)
        ? v.map((r) => ({ time: r?.time ?? "", title: r?.title ?? "", text: r?.text ?? "" }))
        : [];
    } catch {
      return [];
    }
  });

  const update = (i: number, patch: Partial<Step>) =>
    setRows((rs) => rs.map((r, idx) => (idx === i ? { ...r, ...patch } : r)));
  const add = () => setRows((rs) => [...rs, { time: "", title: "", text: "" }]);
  const remove = (i: number) => setRows((rs) => rs.filter((_, idx) => idx !== i));
  const move = (i: number, d: number) =>
    setRows((rs) => {
      const j = i + d;
      if (j < 0 || j >= rs.length) return rs;
      const c = [...rs];
      [c[i], c[j]] = [c[j], c[i]];
      return c;
    });

  const isDay = liveMode === "day";
  const colLabel = isDay ? "Day" : "Time";
  const colPlaceholder = isDay ? "Day 1" : "08:00";
  const unit = isDay ? "day" : "stop";

  return (
    <div className="itin">
      <input type="hidden" name={name} value={JSON.stringify(rows)} />

      {rows.length === 0 ? (
        <p className="itin__empty">No {unit}s yet — add the first one below.</p>
      ) : (
        <ol className="itin__list">
          {rows.map((r, i) => (
            <li className="itin__row" key={i}>
              <span className="itin__num">{i + 1}</span>
              <div className="itin__body">
                <div className="itin__top">
                  <label className="itin__f itin__f--time">
                    <span>{colLabel}</span>
                    <input value={r.time} onChange={(e) => update(i, { time: e.target.value })} placeholder={colPlaceholder} />
                  </label>
                  <label className="itin__f itin__f--grow">
                    <span>Title</span>
                    <input value={r.title} onChange={(e) => update(i, { title: e.target.value })} placeholder={isDay ? "Arrive in Luxor" : "Pick-up from your hotel"} />
                  </label>
                </div>
                <label className="itin__f">
                  <span>Details</span>
                  <textarea
                    value={r.text}
                    onChange={(e) => update(i, { text: e.target.value })}
                    placeholder={isDay ? "What this day covers…" : "What happens at this point…"}
                    rows={2}
                  />
                </label>
              </div>
              <div className="itin__ctl">
                <button type="button" onClick={() => move(i, -1)} disabled={i === 0} aria-label="Move up" title="Move up">↑</button>
                <button type="button" onClick={() => move(i, 1)} disabled={i === rows.length - 1} aria-label="Move down" title="Move down">↓</button>
                <button type="button" className="itin__del" onClick={() => remove(i)} aria-label={`Remove ${unit}`} title="Remove">✕</button>
              </div>
            </li>
          ))}
        </ol>
      )}

      <button type="button" className="abtn abtn--sm itin__add" onClick={add}>+ Add {unit}</button>
    </div>
  );
}
