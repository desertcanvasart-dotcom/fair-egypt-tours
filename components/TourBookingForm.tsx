"use client";

import { Whatsapp, User, Mail, Calendar, ArrowRight } from "./icons";

// Inline "request this tour" form shown in the tour/package sidebar. There's no
// payment gateway — this collects the traveller's details and opens a
// pre-filled WhatsApp request for that specific tour.
export default function TourBookingForm({ tourTitle, whatsapp }: { tourTitle: string; whatsapp: string }) {
  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const get = (k: string) => (f.get(k) as string | null)?.trim() || "";
    const lines: string[] = [`Booking request: ${tourTitle}`, ""];
    if (get("name")) lines.push(`Name: ${get("name")}`);
    if (get("phone")) lines.push(`WhatsApp/Phone: ${get("phone")}`);
    if (get("email")) lines.push(`Email: ${get("email")}`);
    if (get("date")) lines.push(`Travel date: ${get("date")}`);
    if (get("travellers")) lines.push(`Travellers: ${get("travellers")}`);
    if (get("note")) lines.push(`Note: ${get("note")}`);
    const text = encodeURIComponent(lines.join("\n"));
    const base = whatsapp || "https://wa.me/";
    const sep = base.includes("?") ? "&" : "?";
    window.open(`${base}${sep}text=${text}`, "_blank", "noopener,noreferrer");
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
        <div className="ctl"><Whatsapp size={16} /><input id="tb-phone" name="phone" type="tel" placeholder="+20 …" required /></div>
      </div>
      <div className="field">
        <label htmlFor="tb-email">Email</label>
        <div className="ctl"><Mail size={16} /><input id="tb-email" name="email" type="email" placeholder="you@email.com" /></div>
      </div>
      <div className="field">
        <label htmlFor="tb-date">Travel date</label>
        <div className="ctl"><Calendar size={16} /><input id="tb-date" name="date" type="text" placeholder="e.g. 12 March, or flexible" /></div>
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
      <button type="submit" className="btn btn--solid" style={{ width: "100%", justifyContent: "center" }}>
        Request this tour <ArrowRight size={16} />
      </button>
      <a href={whatsapp} className="btn btn--outline" style={{ width: "100%", justifyContent: "center", marginTop: 10 }}>
        <Whatsapp size={16} /> Ask on WhatsApp
      </a>
    </form>
  );
}
