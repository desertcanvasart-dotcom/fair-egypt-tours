"use client";

import { useEffect, useMemo, useRef, useState } from "react";

// Searchable multi-select for "what would you like to visit?". Renders hidden
// inputs so the surrounding form picks the selections up via FormData.
export default function PlacesSelect({
  name,
  options,
  placeholder,
}: {
  name: string;
  options: string[];
  placeholder: string;
}) {
  const [selected, setSelected] = useState<string[]>([]);
  const [q, setQ] = useState("");
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const filtered = useMemo(
    () => options.filter((o) => !selected.includes(o) && o.toLowerCase().includes(q.trim().toLowerCase())),
    [options, selected, q],
  );

  useEffect(() => {
    const onDown = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onDown);
    return () => document.removeEventListener("mousedown", onDown);
  }, []);

  const add = (o: string) => { setSelected((s) => [...s, o]); setQ(""); };
  const remove = (o: string) => setSelected((s) => s.filter((x) => x !== o));

  return (
    <div className={`msel${open ? " is-open" : ""}`} ref={ref}>
      <div className="msel__box" onClick={() => setOpen(true)}>
        {selected.map((o) => (
          <span className="msel__chip" key={o}>
            {o}
            <button type="button" onClick={(e) => { e.stopPropagation(); remove(o); }} aria-label={`Remove ${o}`}>×</button>
          </span>
        ))}
        <input
          className="msel__input"
          value={q}
          onChange={(e) => { setQ(e.target.value); setOpen(true); }}
          onFocus={() => setOpen(true)}
          onKeyDown={(e) => { if (e.key === "Enter" && filtered.length) { e.preventDefault(); add(filtered[0]); } }}
          placeholder={selected.length ? "" : placeholder}
        />
      </div>
      {open && filtered.length > 0 ? (
        <div className="msel__menu">
          {filtered.slice(0, 10).map((o) => (
            <button type="button" className="msel__opt" key={o} onMouseDown={(e) => { e.preventDefault(); add(o); }}>
              {o}
            </button>
          ))}
        </div>
      ) : null}
      {selected.map((o) => <input type="hidden" name={name} value={o} key={o} />)}
    </div>
  );
}
