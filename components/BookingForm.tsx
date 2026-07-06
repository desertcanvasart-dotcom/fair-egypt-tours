"use client";

import { Whatsapp, User, Mail, Calendar, ArrowRight, Check } from "./icons";
import type { BookingStrings } from "@/lib/booking-content";

// The global "get a fair quote" form is for custom trips only. Booking a
// specific listed tour happens on that tour's own page.
export default function BookingForm({ s, whatsapp }: { s: BookingStrings; whatsapp: string }) {
  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const get = (k: string) => (f.get(k) as string | null)?.trim() || "";

    const lines: string[] = [s.waIntro, ""];
    if (get("trip")) lines.push(`${s.waTrip}: ${get("trip")}`);
    if (get("name")) lines.push(`${s.waName}: ${get("name")}`);
    if (get("email")) lines.push(`${s.waEmail}: ${get("email")}`);
    if (get("phone")) lines.push(`${s.waPhone}: ${get("phone")}`);
    if (get("dates")) lines.push(`${s.waDates}: ${get("dates")}`);
    if (get("travellers")) lines.push(`${s.waTravellers}: ${get("travellers")}`);
    if (get("notes")) lines.push(`${s.waNotes}: ${get("notes")}`);

    const text = encodeURIComponent(lines.join("\n"));
    const base = whatsapp || "https://wa.me/";
    const sep = base.includes("?") ? "&" : "?";
    window.open(`${base}${sep}text=${text}`, "_blank", "noopener,noreferrer");
  }

  return (
    <form className="bookform" onSubmit={onSubmit}>
      <h3>{s.tabCustom}</h3>
      <p className="bookform__lede">{s.tabCustomHint}</p>

      <div className="field">
        <label htmlFor="b-trip">{s.tripLabel}</label>
        <textarea id="b-trip" name="trip" rows={3} placeholder={s.tripPh} />
      </div>

      <div className="bookgrid">
        <div className="field">
          <label htmlFor="b-name">{s.nameLabel}</label>
          <div className="ctl"><User size={18} /><input id="b-name" name="name" type="text" placeholder={s.namePh} required /></div>
        </div>
        <div className="field">
          <label htmlFor="b-email">{s.emailLabel}</label>
          <div className="ctl"><Mail size={18} /><input id="b-email" name="email" type="email" placeholder={s.emailPh} /></div>
        </div>
        <div className="field">
          <label htmlFor="b-phone">{s.phoneLabel}</label>
          <div className="ctl"><Whatsapp size={18} /><input id="b-phone" name="phone" type="tel" placeholder={s.phonePh} required /></div>
        </div>
        <div className="field">
          <label htmlFor="b-dates">{s.datesLabel}</label>
          <div className="ctl"><Calendar size={18} /><input id="b-dates" name="dates" type="text" placeholder={s.datesPh} /></div>
        </div>
        <div className="field">
          <label htmlFor="b-trav">{s.travellersLabel}</label>
          <div className="ctl"><User size={18} /><input id="b-trav" name="travellers" type="text" placeholder={s.travellersPh} /></div>
        </div>
      </div>

      <div className="field">
        <label htmlFor="b-notes">{s.notesLabel}</label>
        <textarea id="b-notes" name="notes" rows={3} placeholder={s.notesPh} />
      </div>

      <button type="submit" className="btn btn--solid bookform__go">
        {s.submit} <ArrowRight size={16} />
      </button>
      <p className="bookform__alt"><Check size={14} /> {s.altContact}</p>
    </form>
  );
}
