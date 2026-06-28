"use client";

import { useState } from "react";
import { Whatsapp, User, Mail, Calendar, ArrowRight, Check } from "./icons";
import type { BookingStrings } from "@/lib/booking-content";

type TourOpt = { title: string; type?: string };

export default function BookingForm({
  s,
  tours,
  whatsapp,
}: {
  s: BookingStrings;
  tours: TourOpt[];
  whatsapp: string;
}) {
  const [mode, setMode] = useState<"tour" | "custom">("tour");

  const dayTours = tours.filter((t) => (t.type || "").toLowerCase().includes("day"));
  const packages = tours.filter((t) => (t.type || "").toLowerCase().includes("package"));
  const other = tours.filter((t) => !dayTours.includes(t) && !packages.includes(t));

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const get = (k: string) => (f.get(k) as string | null)?.trim() || "";

    const lines: string[] = [s.waIntro, ""];
    lines.push(`${s.waMode}: ${mode === "tour" ? s.waModeTour : s.waModeCustom}`);
    if (mode === "tour") {
      if (get("tour")) lines.push(`${s.waTour}: ${get("tour")}`);
    } else {
      if (get("trip")) lines.push(`${s.waTrip}: ${get("trip")}`);
    }
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
      <h3>{s.formTitle}</h3>

      <div className="booktabs" role="tablist" aria-label={s.formTitle}>
        <button type="button" role="tab" aria-selected={mode === "tour"} className={mode === "tour" ? "is-active" : ""} onClick={() => setMode("tour")}>
          <b>{s.tabTour}</b>
          <span>{s.tabTourHint}</span>
        </button>
        <button type="button" role="tab" aria-selected={mode === "custom"} className={mode === "custom" ? "is-active" : ""} onClick={() => setMode("custom")}>
          <b>{s.tabCustom}</b>
          <span>{s.tabCustomHint}</span>
        </button>
      </div>

      {mode === "tour" ? (
        <div className="field">
          <label htmlFor="b-tour">{s.tourLabel}</label>
          <div className="ctl">
            <select id="b-tour" name="tour" defaultValue="">
              <option value="" disabled>{s.tourPlaceholder}</option>
              {dayTours.length > 0 && (
                <optgroup label={s.groupDayTours}>
                  {dayTours.map((t) => <option key={t.title}>{t.title}</option>)}
                </optgroup>
              )}
              {packages.length > 0 && (
                <optgroup label={s.groupPackages}>
                  {packages.map((t) => <option key={t.title}>{t.title}</option>)}
                </optgroup>
              )}
              {other.map((t) => <option key={t.title}>{t.title}</option>)}
            </select>
          </div>
        </div>
      ) : (
        <div className="field">
          <label htmlFor="b-trip">{s.tripLabel}</label>
          <textarea id="b-trip" name="trip" rows={3} placeholder={s.tripPh} />
        </div>
      )}

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
