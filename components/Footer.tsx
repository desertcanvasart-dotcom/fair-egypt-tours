import Link from "next/link";
import { getPage } from "@/lib/cms";
import { getLocale } from "@/lib/locale";
import { localeHref } from "@/lib/i18n";
import { t } from "@/lib/messages";
import { LogoMarkLight, Mail, Whatsapp, Instagram, Facebook } from "./icons";

export default async function Footer() {
  const site = await getPage("site");
  const locale = await getLocale();
  const m = t(locale);
  const L = (p: string) => localeHref(locale, p);
  return (
    <footer className="footer" id="footer">
      <div className="shell">
        <div className="footer__cta">
          <h3>{m.footer.heading}</h3>
          <form className="footer__news" action="#">
            <div className="ctl">
              <Mail size={16} />
              <input type="email" name="email" placeholder={m.footer.emailPh} aria-label="Email" />
            </div>
            <Link href={L("/#cta")} className="btn btn--solid">{m.footer.subscribe}</Link>
          </form>
        </div>

        <div className="footer__cols">
          <div className="footer__brand">
            <div className="fb">
              <LogoMarkLight size={46} />
              <span><b>{site.name}</b><small>{site.tagline.toUpperCase()}</small></span>
            </div>
            <p>{m.footer.brand}</p>
          </div>
          <div className="footer__col">
            <h5>{m.footer.explore}</h5>
            <Link href={L("/tours")}>{m.nav.tours}</Link>
            <Link href={L("/destinations")}>{m.nav.destinations}</Link>
            <Link href={L("/travel-tips")}>{m.nav.travelTips}</Link>
            <Link href={L("/booking")}>{m.links.book}</Link>
            <Link href={L("/blog")}>{m.nav.blog}</Link>
          </div>
          <div className="footer__col">
            <h5>{m.footer.company}</h5>
            <Link href={L("/about")}>{m.footer.aboutUs}</Link>
            <Link href={L("/faq")}>{m.links.faq}</Link>
          </div>
          <div className="footer__col">
            <h5>{m.footer.contact}</h5>
            <address style={{ fontStyle: "normal", display: "contents" }}>
              <a href={site.whatsapp}>WhatsApp</a>
              <a href={`mailto:${site.email}`}>{site.email}</a>
              <a href={site.phoneHref}>{site.phone}</a>
            </address>
            <Link href={L("/")}>{m.footer.backToTop}</Link>
          </div>
        </div>

        <div className="footer__word" aria-hidden="true">FAIR EGYPT</div>

        <div className="footer__bot">
          <span>© 2026 <b>{site.name}</b>. {m.footer.rights}</span>
          <nav className="footer__legal" aria-label={m.links.legal}>
            <Link href={L("/privacy")}>{m.links.privacy}</Link>
            <Link href={L("/terms")}>{m.links.terms}</Link>
            <Link href={L("/cookies")}>{m.links.cookies}</Link>
          </nav>
          <div className="footer__social">
            <a href={site.instagram} aria-label="Instagram"><Instagram size={18} /></a>
            <a href={site.facebook} aria-label="Facebook"><Facebook size={18} /></a>
            <a href={site.whatsapp} aria-label="WhatsApp"><Whatsapp size={18} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
