"use client";

import { useRef, useState } from "react";

export default function ImageInput({ name, defaultValue }: { name: string; defaultValue?: string }) {
  const [url, setUrl] = useState(defaultValue ?? "");
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState<string | null>(null);
  const fileRef = useRef<HTMLInputElement>(null);

  async function onFile(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    setBusy(true);
    setErr(null);
    try {
      const fd = new FormData();
      fd.append("file", file);
      const res = await fetch("/api/admin/upload", { method: "POST", body: fd });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error || "Upload failed");
      setUrl(json.url);
    } catch (e) {
      setErr(e instanceof Error ? e.message : "Upload failed");
    } finally {
      setBusy(false);
      if (fileRef.current) fileRef.current.value = "";
    }
  }

  return (
    <div className="img-input">
      <input type="hidden" name={name} value={url} />
      <div className="img-input__row">
        <input type="text" value={url} onChange={(e) => setUrl(e.target.value)} placeholder="https://… or upload a file" />
        <label className="abtn abtn--sm img-input__btn">
          {busy ? "Uploading…" : "Upload"}
          <input ref={fileRef} type="file" accept="image/*" onChange={onFile} hidden disabled={busy} />
        </label>
      </div>
      {err ? <span className="aform__err" style={{ fontSize: 12 }}>{err}</span> : null}
      {url ? <img src={url} alt="" className="img-input__preview" /> : null}
    </div>
  );
}
