"use client";

import { Fragment, useEffect, useState } from "react";
import Link from "next/link";
import { Menu, Whatsapp, Phone, ArrowRight } from "./icons";

type Nav = { href: string; label: string; children?: { href: string; label: string }[] };

export default function MobileNav({
  nav,
  cta,
  ctaHref,
  phone,
  phoneHref,
  whatsapp,
}: {
  nav: Nav[];
  cta: string;
  ctaHref: string;
  phone: string;
  phoneHref: string;
  whatsapp: string;
}) {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  // Lock body scroll + close on Escape while open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      <button
        className="hdr__burger"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        {open ? (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d="M6 6l12 12M18 6L6 18" />
          </svg>
        ) : (
          <Menu size={20} />
        )}
      </button>

      <div className={`mmenu${open ? " open" : ""}`} role="dialog" aria-modal="true" aria-hidden={!open}>
        <nav className="mmenu__links" aria-label="Mobile">
          {nav.map((l, i) => (
            <Fragment key={l.href}>
              <Link href={l.href} onClick={close} style={{ transitionDelay: `${0.06 * i + 0.05}s` }}>
                {l.label}
              </Link>
              {l.children?.map((c) => (
                <Link key={c.href} className="mmenu__sub" href={c.href} onClick={close} style={{ transitionDelay: `${0.06 * i + 0.09}s` }}>
                  {c.label}
                </Link>
              ))}
            </Fragment>
          ))}
        </nav>
        <div className="mmenu__foot">
          <a href={phoneHref} className="mmenu__contact" onClick={close}><Phone size={18} /> {phone}</a>
          <a href={whatsapp} className="btn btn--solid" onClick={close}><Whatsapp size={16} /> WhatsApp us</a>
          <Link href={ctaHref} className="btn btn--nile" onClick={close}>{cta} <ArrowRight size={16} /></Link>
        </div>
      </div>
    </>
  );
}
