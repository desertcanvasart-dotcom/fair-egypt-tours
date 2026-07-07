"use client";

import { useState } from "react";
import { Whatsapp, User, Mail, Calendar, Clock, ArrowRight, Check } from "./icons";
import PlacesSelect from "./PlacesSelect";
import type { BookingStrings } from "@/lib/booking-content";

// The global "get a fair quote" form — custom trips only. Saves to the
// dashboard via /api/booking.
export default function BookingForm({ s }: { s: BookingStrings }) {
  const [sent, setSent] = useState(false);
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setBusy(true);
    setErr(false);
    const f = new FormData(e.currentTarget);
    const get = (k: string) => (f.get(k) as string | null)?.trim() || "";
    const payload = {
      kind: "quote",
      name: get("name"),
      email: get("email"),
      phone: get("phone"),
      places: f.getAll("places").map((p) => String(p)),
      days: get("days"),
      adults: get("adults") || null,
      children: get("children") || null,
      dates: get("date"),
      notes: get("notes"),
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
      <div className="bookform bookform--done">
        <div className="bookform__ok"><Check size={28} /></div>
        <h3>{s.successTitle}</h3>
        <p>{s.successText}</p>
      </div>
    );
  }

  return (
    <form className="bookform" onSubmit={onSubmit}>
      <h3>{s.tabCustom}</h3>
      <p className="bookform__lede">{s.tabCustomHint}</p>

      <div className="field">
        <label>{s.placesLabel}</label>
        <PlacesSelect name="places" options={s.placesOptions} placeholder={s.placesPh} />
      </div>

      <div className="bookgrid">
        <div className="field">
          <label htmlFor="b-days">{s.daysLabel}</label>
          <div className="ctl"><Clock size={18} /><select id="b-days" name="days" defaultValue={s.daysOptions[0]}>{s.daysOptions.map((o) => <option key={o}>{o}</option>)}</select></div>
        </div>
        <div className="field">
          <label htmlFor="b-date">{s.dateLabel}</label>
          <div className="ctl"><Calendar size={18} /><input id="b-date" name="date" type="date" /></div>
        </div>
        <div className="field">
          <label htmlFor="b-adults">{s.adultsLabel}</label>
          <div className="ctl"><User size={18} /><input id="b-adults" name="adults" type="number" min="1" max="40" defaultValue="2" /></div>
        </div>
        <div className="field">
          <label htmlFor="b-children">{s.childrenLabel}</label>
          <div className="ctl"><User size={18} /><input id="b-children" name="children" type="number" min="0" max="40" defaultValue="0" /></div>
        </div>
      </div>

      <div className="bookgrid">
        <div className="field">
          <label htmlFor="b-name">{s.nameLabel}</label>
          <div className="ctl"><User size={18} /><input id="b-name" name="name" type="text" placeholder={s.namePh} required /></div>
        </div>
        <div className="field">
          <label htmlFor="b-phone">{s.phoneLabel}</label>
          <div className="ctl"><Whatsapp size={18} /><input id="b-phone" name="phone" type="tel" placeholder={s.phonePh} required /></div>
        </div>
      </div>

      <div className="field">
        <label htmlFor="b-email">{s.emailLabel}</label>
        <div className="ctl"><Mail size={18} /><input id="b-email" name="email" type="email" placeholder={s.emailPh} /></div>
      </div>

      <div className="field">
        <label htmlFor="b-notes">{s.notesLabel}</label>
        <textarea id="b-notes" name="notes" rows={3} placeholder={s.notesPh} />
      </div>

      <input type="text" name="company" className="hp" tabIndex={-1} autoComplete="off" aria-hidden="true" />
      {err ? <p className="tbook__err">Something went wrong — please try again.</p> : null}

      <button type="submit" className="btn btn--solid bookform__go" disabled={busy}>
        {busy ? "Sending…" : s.submit} <ArrowRight size={16} />
      </button>
      <p className="bookform__alt"><Check size={14} /> {s.altContact}</p>
    </form>
  );
}
