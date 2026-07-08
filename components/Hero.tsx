import Link from "next/link";
import { ArrowRight } from "./icons";
import { homeDefault, type HomeContent } from "@/lib/page-content";
import { getLocale } from "@/lib/locale";
import { localeHref } from "@/lib/i18n";
import { t } from "@/lib/messages";

const HERO_IMG =
  "https://images.unsplash.com/photo-1539768942893-daf53e448371?auto=format&fit=crop&w=1900&q=85";

// Map a hero quick-link chip to the most relevant page.
function chipHref(chip: string): string {
  const s = chip.toLowerCase();
  if (/luxor/.test(s)) return "/destinations/luxor";
  if (/aswan/.test(s)) return "/destinations/aswan";
  if (/pyramid|giza|cairo/.test(s)) return "/destinations/cairo";
  if (/alex/.test(s)) return "/destinations/alexandria";
  if (/red sea|sharm|sinai|diving|dive/.test(s)) return "/destinations/sharm-el-sheikh";
  if (/siwa|oasis|desert/.test(s)) return "/destinations/siwa";
  if (/cruise|nile|package/.test(s)) return "/tours?type=packages";
  return "/tours";
}

export default async function Hero({ hero = homeDefault.hero }: { hero?: HomeContent["hero"] }) {
  const locale = await getLocale();
  const tt = t(locale);
  return (
    <section
      className="hero"
      style={{
        background: `linear-gradient(180deg,rgba(7,28,40,.5) 0%,rgba(7,28,40,.12) 32%,rgba(7,28,40,.82) 100%), url('${HERO_IMG}') center/cover`,
      }}
    >
      <div className="shell">
        <div className="hero__copy">
          <div className="kicker reveal"><i>01</i> <span>{hero.kicker}</span> <span className="ln" /></div>
          <h1 className="reveal" data-delay="1">
            {hero.titleLead} <em>{hero.titleEm}</em>
          </h1>
          <p className="reveal" data-delay="2">{hero.subtitle}</p>

          <div className="hero__actions reveal" data-delay="3">
            <Link href={localeHref(locale, "/booking")} className="hero__cta">
              {tt.cta}
              <span className="hero__cta-ic"><ArrowRight size={18} /></span>
            </Link>
            <Link href={localeHref(locale, "/tours")} className="hero__cta2">{tt.nav.tours}</Link>
          </div>

          <div className="hero__chips reveal" data-delay="4">
            {hero.chips.map((c) => <a key={c} href={localeHref(locale, chipHref(c))}>{c}</a>)}
          </div>
        </div>
      </div>
    </section>
  );
}
