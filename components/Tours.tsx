import Link from "next/link";
import type { TourDetail } from "@/lib/tours";
import TourCard from "./TourCard";
import { ArrowRight } from "./icons";
import { getLocale } from "@/lib/locale";
import { localeHref } from "@/lib/i18n";
import { t } from "@/lib/messages";

export default async function Tours({ tours }: { tours: TourDetail[] }) {
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
          {tours.map((tour, i) => (
            <TourCard key={tour.slug} tour={tour} delay={(i % 4) + 1} />
          ))}
        </div>

        <div className="tours-foot reveal">
          <Link href={localeHref(locale, "/tours")} className="btn btn--nile">{m.viewAll} <ArrowRight size={16} /></Link>
        </div>
      </div>
    </section>
  );
}
