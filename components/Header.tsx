import Link from "next/link";
import { navLinks } from "@/lib/data";
import { getPage } from "@/lib/cms";
import { LogoMark, Mail, Phone } from "./icons";
import MobileNav from "./MobileNav";

/**
 * overHero=true  → transparent header that sits over a dark hero and turns
 *                  solid on scroll (homepage). Enhanced by Interactions.
 * overHero=false → opaque/solid header from the start (all inner pages).
 */
export default async function Header({ overHero = false }: { overHero?: boolean }) {
  const site = await getPage("site");

  return (
    <>
      <div className="topbar">
        <div className="shell">
          <div className="topbar__in">
            <div className="topbar__l">
              <span>Cairo</span><span className="sep">·</span>
              <span>Luxor</span><span className="sep">·</span>
              <span>Aswan</span><span className="sep">·</span>
              <span>Red Sea</span>
            </div>
            <div className="topbar__r">
              <a href={site.phoneHref}><Phone size={14} /> {site.phone}</a>
              <a className="em" href={`mailto:${site.email}`}><Mail size={14} /> {site.email}</a>
            </div>
          </div>
        </div>
      </div>

      <header className={overHero ? "hdr on-dark" : "hdr solid"} id="hdr" data-over-hero={overHero ? "true" : undefined}>
        <div className="shell">
          <div className="hdr__in">
            <Link href="/" className="hdr__brand">
              <LogoMark size={46} className="logo" />
              <span>
                <b>{site.name}</b>
                <small>{site.tagline}</small>
              </span>
            </Link>
            <nav className="hdr__nav" aria-label="Primary">
              {navLinks.map((l) => (
                <Link key={l.href} href={l.href}>{l.label}</Link>
              ))}
            </nav>
            <div className="hdr__act">
              <a href={site.phoneHref} className="hdr__phone">
                <span className="ic"><Phone size={16} /></span>
                <span>Call us</span>
              </a>
              <MobileNav phone={site.phone} phoneHref={site.phoneHref} whatsapp={site.whatsapp} />
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
