import Link from "next/link";
import { navLinks } from "@/lib/data";
import { getPage } from "@/lib/cms";
import { ArrowRight } from "./icons";
import MobileNav from "./MobileNav";

/**
 * overHero=true  → transparent header that sits over a dark hero and turns
 *                  solid on scroll (homepage). Enhanced by Interactions.
 * overHero=false → opaque/solid header from the start (all inner pages).
 */
export default async function Header({ overHero = false }: { overHero?: boolean }) {
  const site = await getPage("site");

  return (
    <header className={overHero ? "hdr on-dark" : "hdr solid"} id="hdr" data-over-hero={overHero ? "true" : undefined}>
      <div className="shell">
        <div className="hdr__in">
          <Link href="/" className="hdr__brand">
            <b>{site.name}</b>
          </Link>
          <nav className="hdr__nav" aria-label="Primary">
            {navLinks.map((l) => (
              <Link key={l.href} href={l.href}>{l.label}</Link>
            ))}
          </nav>
          <div className="hdr__act">
            <Link href="/#cta" className="hdr__cta">
              Get a fair quote <ArrowRight size={15} />
            </Link>
            <MobileNav phone={site.phone} phoneHref={site.phoneHref} whatsapp={site.whatsapp} />
          </div>
        </div>
      </div>
    </header>
  );
}
