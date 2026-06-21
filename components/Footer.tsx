import Link from "next/link";
import { getPage } from "@/lib/cms";
import { LogoMarkLight, Mail, Whatsapp, Instagram, Facebook } from "./icons";

export default async function Footer() {
  const site = await getPage("site");
  return (
    <footer className="footer" id="footer">
      <div className="shell">
        <div className="footer__cta">
          <h3>Ready to see Egypt — fairly?</h3>
          <form className="footer__news" action="#">
            <div className="ctl">
              <Mail size={16} />
              <input type="email" name="email" placeholder="Your email for trip ideas" aria-label="Email" />
            </div>
            <Link href="/#cta" className="btn btn--solid">Subscribe</Link>
          </form>
        </div>

        <div className="footer__cols">
          <div className="footer__brand">
            <div className="fb">
              <LogoMarkLight size={46} />
              <span><b>{site.name}</b><small>{site.tagline.toUpperCase()}</small></span>
            </div>
            <p>Affordable Egypt travel with honesty, organisation, and genuine care.</p>
          </div>
          <div className="footer__col">
            <h5>Explore</h5>
            <Link href="/tours">Tours</Link>
            <Link href="/destinations">Destinations</Link>
            <Link href="/blog">Blog</Link>
          </div>
          <div className="footer__col">
            <h5>Company</h5>
            <Link href="/about">About Us</Link>
            <Link href="/travel-tips">Travel Tips</Link>
            <Link href="/destinations">Travel Guides</Link>
            <Link href="/#faq">FAQ</Link>
          </div>
          <div className="footer__col">
            <h5>Contact</h5>
            <address style={{ fontStyle: "normal", display: "contents" }}>
              <a href={site.whatsapp}>WhatsApp</a>
              <a href={`mailto:${site.email}`}>{site.email}</a>
              <a href={site.phoneHref}>{site.phone}</a>
            </address>
            <Link href="/">Back to top</Link>
          </div>
        </div>

        <div className="footer__word" aria-hidden="true">FAIR EGYPT</div>

        <div className="footer__bot">
          <span>© 2026 <b>{site.name}</b>. All rights reserved.</span>
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
