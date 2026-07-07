import Link from "next/link";
import { homeDefault } from "@/lib/page-content";
import { ArrowRight, Check } from "./icons";
import { getLocale } from "@/lib/locale";
import { localeHref } from "@/lib/i18n";
import { t } from "@/lib/messages";

export default async function Cta({
  heading = homeDefault.cta.heading,
  text = homeDefault.cta.text,
}: {
  heading?: string;
  text?: string;
}) {
  const locale = await getLocale();
  const tt = t(locale);
  const m = tt.home;
  return (
    <section className="sec cta" id="cta">
      <div className="shell">
        <div className="cta__grid">
          <div className="cta__l">
            <div className="kicker reveal"><i>09</i> <span>{m.ctaKicker}</span> <span className="ln" /></div>
            <h2 className="reveal" data-delay="1">{heading}</h2>
            <p className="reveal" data-delay="2">{text}</p>
          </div>
          <div className="cta__action reveal" data-delay="1">
            <Link href={localeHref(locale, "/booking")} className="btn cta__btn">
              {tt.cta} <ArrowRight size={18} />
            </Link>
            <div className="fine"><Check size={14} /> {m.fine}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
