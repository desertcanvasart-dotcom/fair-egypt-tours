import Link from "next/link";
import { navLinks } from "@/lib/data";
import { getPage } from "@/lib/cms";
import { ArrowRight } from "./icons";
import MobileNav from "./MobileNav";
import LanguageSwitcher from "./LanguageSwitcher";
import { getLocale } from "@/lib/locale";
import { localeHref } from "@/lib/i18n";
import { t } from "@/lib/messages";

/**
 * overHero=true  → transparent header that sits over a dark hero and turns
 *                  solid on scroll (homepage). Enhanced by Interactions.
 * overHero=false → opaque/solid header from the start (all inner pages).
 */
export default async function Header({ overHero = false }: { overHero?: boolean }) {
  const site = await getPage("site");
  const locale = await getLocale();
  const m = t(locale);

  const labelMap: Record<string, string> = {
    "/tours": m.nav.tours,
    "/destinations": m.nav.destinations,
    "/travel-tips": m.nav.travelTips,
    "/blog": m.nav.blog,
    "/about": m.nav.about,
    "/tours?type=day-tours": m.navChildren.dayTours,
    "/tours?type=packages": m.navChildren.travelPackages,
  };
  const nav = navLinks.map((l) => ({
    href: localeHref(locale, l.href),
    label: labelMap[l.href] ?? l.label,
    children: l.children?.map((c) => ({ href: localeHref(locale, c.href), label: labelMap[c.href] ?? c.label })),
  }));

  return (
    <header className={overHero ? "hdr on-dark" : "hdr solid"} id="hdr" data-over-hero={overHero ? "true" : undefined}>
      <div className="shell">
        <div className="hdr__in">
          <Link href={localeHref(locale, "/")} className="hdr__brand">
            <b>{site.name}</b>
          </Link>
          <nav className="hdr__nav" aria-label="Primary">
            {nav.map((l) =>
              l.children?.length ? (
                <div className="hdr__has" key={l.href}>
                  <Link href={l.href} className="hdr__top">
                    {l.label}
                    <svg className="hdr__caret" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9l6 6 6-6" /></svg>
                  </Link>
                  <div className="hdr__drop">
                    {l.children.map((c) => (
                      <Link key={c.href} href={c.href}>{c.label}</Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link key={l.href} href={l.href}>{l.label}</Link>
              )
            )}
          </nav>
          <div className="hdr__act">
            <LanguageSwitcher locale={locale} />
            <Link href={localeHref(locale, "/#cta")} className="hdr__cta">
              {m.cta} <ArrowRight size={15} />
            </Link>
            <MobileNav nav={nav} cta={m.cta} ctaHref={localeHref(locale, "/#cta")} phone={site.phone} phoneHref={site.phoneHref} whatsapp={site.whatsapp} />
          </div>
        </div>
      </div>
    </header>
  );
}
