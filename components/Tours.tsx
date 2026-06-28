import Link from "next/link";
import { tours as defaultTours, type Tour } from "@/lib/data";
import { Star, ArrowUpRight, ArrowRight } from "./icons";
import { getLocale } from "@/lib/locale";
import { localeHref } from "@/lib/i18n";
import { t } from "@/lib/messages";

export default async function Tours({ tours = defaultTours }: { tours?: Tour[] }) {
  const locale = await getLocale();
  const m = t(locale).home;
  return (
    <section className="sec tours" id="tours">
      <div className="shell">
        <div className="sec-top">
          <div className="kicker reveal"><i>02</i> <span>{m.toursKicker}</span> <span className="ln" /></div>
          <div className="sec-top__row">
            <h2 className="display reveal" data-delay="1">{m.toursHeading}</h2>
            <p className="reveal" data-delay="2">{m.toursSub}</p>
          </div>
        </div>

        <div className="tours-grid">
          {tours.map((t, i) => (
            <article className="rcard reveal" data-delay={(i % 4) + 1} key={t.title}>
              <div className="img" style={{ backgroundImage: `url('${t.img}')` }} />
              <div className="rcard__top">
                <span className="rcard__place">{t.place}</span>
                <span className="rcard__rate"><Star size={13} style={{ color: "#DDA45F" }} />{t.rating}</span>
              </div>
              <div className="rcard__b">
                <span className="dur">{t.duration}</span>
                <h3>{t.title}</h3>
                <div className="rcard__foot">
                  <div className="pr"><small>{m.priceFrom}</small><b>{t.price}</b></div>
                  <span className="go"><ArrowUpRight size={16} /></span>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="tours-foot reveal">
          <Link href={localeHref(locale, "/tours")} className="btn btn--nile">{m.viewAll} <ArrowRight size={16} /></Link>
        </div>
      </div>
    </section>
  );
}
