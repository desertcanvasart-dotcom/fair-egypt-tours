"use client";

import { useEffect, useRef, useState } from "react";

type MediaItem = { url: string; filename: string };

export default function ImageInput({ name, defaultValue }: { name: string; defaultValue?: string }) {
  const [url, setUrl] = useState(defaultValue ?? "");
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState<string | null>(null);
  const [libOpen, setLibOpen] = useState(false);
  const [items, setItems] = useState<MediaItem[] | null>(null);
  const fileRef = useRef<HTMLInputElement>(null);

  async function uploadFile(file: File) {
    setBusy(true);
    setErr(null);
    try {
      const fd = new FormData();
      fd.append("file", file);
      const res = await fetch("/api/admin/upload", { method: "POST", body: fd });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error || "Upload failed");
      setUrl(json.url);
      if (libOpen) loadLibrary();
    } catch (e) {
      setErr(e instanceof Error ? e.message : "Upload failed");
    } finally {
      setBusy(false);
      if (fileRef.current) fileRef.current.value = "";
    }
  }

  async function loadLibrary() {
    setItems(null);
    try {
      const res = await fetch("/api/admin/media");
      const json = await res.json();
      setItems(json.items ?? []);
    } catch {
      setItems([]);
    }
  }

  function openLibrary() {
    setLibOpen(true);
    loadLibrary();
  }

  useEffect(() => {
    if (!libOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setLibOpen(false);
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [libOpen]);

  return (
    <div className="img-input">
      <input type="hidden" name={name} value={url} />
      <div className="img-input__row">
        <input type="text" value={url} onChange={(e) => setUrl(e.target.value)} placeholder="Choose from library, upload, or paste a URL" />
        <button type="button" className="abtn abtn--sm" onClick={openLibrary}>Library</button>
        <label className="abtn abtn--sm img-input__btn">
          {busy ? "Uploading…" : "Upload"}
          <input ref={fileRef} type="file" accept="image/*" hidden disabled={busy}
            onChange={(e) => { const f = e.target.files?.[0]; if (f) uploadFile(f); }} />
        </label>
      </div>
      {err ? <span className="aform__err" style={{ fontSize: 12 }}>{err}</span> : null}
      {url ? <img src={url} alt="" className="img-input__preview" /> : null}

      {libOpen ? (
        <div className="medlib" onClick={() => setLibOpen(false)} role="dialog" aria-modal="true" aria-label="Media library">
          <div className="medlib__panel" onClick={(e) => e.stopPropagation()}>
            <div className="medlib__head">
              <b>Media library</b>
              <div className="medlib__act">
                <label className="abtn abtn--sm">
                  {busy ? "Uploading…" : "Upload new"}
                  <input type="file" accept="image/*" hidden disabled={busy}
                    onChange={(e) => { const f = e.target.files?.[0]; if (f) uploadFile(f); }} />
                </label>
                <button type="button" className="medlib__x" onClick={() => setLibOpen(false)} aria-label="Close">✕</button>
              </div>
            </div>
            <div className="medlib__grid">
              {items === null ? (
                <p className="medlib__msg">Loading…</p>
              ) : items.length === 0 ? (
                <p className="medlib__msg">No uploads yet. Use “Upload new” to add an image.</p>
              ) : (
                items.map((it) => (
                  <button
                    type="button"
                    key={it.url}
                    className={`medlib__item${it.url === url ? " is-sel" : ""}`}
                    onClick={() => { setUrl(it.url); setLibOpen(false); }}
                    title={it.filename}
                  >
                    <img src={it.url} alt={it.filename} loading="lazy" />
                  </button>
                ))
              )}
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
