import Link from "next/link";
import type { TourDetail } from "@/lib/tours";
import { Star, ArrowUpRight } from "./icons";
import { getLocale } from "@/lib/locale";
import { localeHref } from "@/lib/i18n";
import { t } from "@/lib/messages";

export default async function TourCard({ tour, delay = 1 }: { tour: TourDetail; delay?: number }) {
  const locale = await getLocale();
  const m = t(locale).home;
  return (
    <Link className="rcard reveal" data-delay={delay} href={localeHref(locale, `/tours/${tour.slug}`)}>
      <div className="img" style={{ backgroundImage: `url('${tour.cardImage}')` }} />
      <div className="rcard__top">
        <span className="rcard__place">{tour.place}</span>
        <span className="rcard__rate"><Star size={13} style={{ color: "#DDA45F" }} />{tour.rating}</span>
      </div>
      <div className="rcard__b">
        <span className="dur">{tour.duration}</span>
        <h3>{tour.title}</h3>
        <div className="rcard__foot">
          <div className="pr"><small>{m.priceFrom}</small><b>${tour.price}</b></div>
          <span className="go"><ArrowUpRight size={16} /></span>
        </div>
      </div>
    </Link>
  );
}
