"use client";

import { useState } from "react";
import Link from "next/link";
import { User, Mail, Calendar, ArrowRight, Check } from "./icons";

// Inline "request this tour" form in the tour/package sidebar. Saves the request
// to the dashboard (via /api/booking). Two actions: request this exact tour, or
// jump to the custom-quote page to design your own.
export default function TourBookingForm({ tourSlug, tourTitle }: { tourSlug: string; tourTitle: string }) {
  const [sent, setSent] = useState(false);
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setBusy(true);
    setErr(false);
    const f = new FormData(e.currentTarget);
    const get = (k: string) => (f.get(k) as string | null)?.trim() || "";
    const trav = get("travellers");
    const m = trav.match(/\d+/);
    const payload = {
      kind: "tour",
      tourSlug,
      tourTitle,
      name: get("name"),
      phone: get("phone"),
      email: get("email"),
      dates: get("date"),
      adults: m ? Number(m[0]) : null,
      notes: [trav ? `Travellers: ${trav}` : "", get("note")].filter(Boolean).join(" — "),
      source: typeof window !== "undefined" ? window.location.pathname : "",
      company: get("company"),
    };
    try {
      const r = await fetch("/api/booking", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload) });
      if (!r.ok) throw new Error();
      setSent(true);
    } catch {
      setErr(true);
    } finally {
      setBusy(false);
    }
  }

  if (sent) {
    return (
      <div className="tbook tbook--done">
        <div className="tbook__ok"><Check size={22} /></div>
        <h4>Request received</h4>
        <p>Thanks — we&apos;ve got your request for this tour. A real person from our team will reply soon, usually within a few hours.</p>
      </div>
    );
  }

  return (
    <form className="tbook" onSubmit={onSubmit}>
      <div className="tbook__h">Request this tour</div>

      <div className="field">
        <label htmlFor="tb-name">Your name</label>
        <div className="ctl"><User size={16} /><input id="tb-name" name="name" type="text" placeholder="e.g. Sarah" required /></div>
      </div>
      <div className="field">
        <label htmlFor="tb-phone">WhatsApp / Phone</label>
        <div className="ctl"><User size={16} /><input id="tb-phone" name="phone" type="tel" placeholder="+20 …" required /></div>
      </div>
      <div className="field">
        <label htmlFor="tb-email">Email</label>
        <div className="ctl"><Mail size={16} /><input id="tb-email" name="email" type="email" placeholder="you@email.com" /></div>
      </div>
      <div className="field">
        <label htmlFor="tb-date">Preferred date</label>
        <div className="ctl"><Calendar size={16} /><input id="tb-date" name="date" type="date" /></div>
      </div>
      <div className="field">
        <label htmlFor="tb-trav">Travellers</label>
        <div className="ctl">
          <User size={16} />
          <select id="tb-trav" name="travellers" defaultValue="2 travellers">
            <option>1 traveller</option>
            <option>2 travellers</option>
            <option>3 travellers</option>
            <option>4 travellers</option>
            <option>5–6 travellers</option>
            <option>Group (7+)</option>
          </select>
        </div>
      </div>
      <div className="field">
        <label htmlFor="tb-note">Anything else? (optional)</label>
        <textarea id="tb-note" name="note" rows={2} placeholder="Hotel level, must-sees, dietary needs…" />
      </div>

      <input type="text" name="company" className="hp" tabIndex={-1} autoComplete="off" aria-hidden="true" />
      {err ? <p className="tbook__err">Something went wrong — please try again.</p> : null}

      <button type="submit" className="btn btn--solid tbook__go" disabled={busy}>
        {busy ? "Sending…" : "Request this tour"} <ArrowRight size={16} />
      </button>
      <Link href="/booking" className="btn btn--outline tbook__custom">
        Customize your own tour <ArrowRight size={16} />
      </Link>
    </form>
  );
}
