import Link from "next/link";
import { destinations as defaultDestinations, type Destination } from "@/lib/data";
import { ArrowRight } from "./icons";
import { getLocale } from "@/lib/locale";
import { localeHref } from "@/lib/i18n";
import { t } from "@/lib/messages";

export default async function Destinations({ destinations = defaultDestinations }: { destinations?: Destination[] }) {
  const locale = await getLocale();
  const m = t(locale).home;
  return (
    <section className="sec dest" id="destinations">
      <div className="shell">
        <div className="sec-top">
          <div className="kicker kicker--light reveal"><i>03</i> <span>{m.destStripKicker}</span> <span className="ln" /></div>
          <div className="sec-top__row">
            <h2 className="display reveal" data-delay="1">{m.destStripHeading}</h2>
            <p className="reveal" data-delay="2">{m.destStripSub}</p>
          </div>
        </div>

        <div className="dgrid">
          {destinations.map((d, i) => (
            <Link className="dtile reveal" data-delay={(i % 4) + 1} key={d.name} href={localeHref(locale, "/destinations")}>
              <div className="img" style={{ backgroundImage: `url('${d.img}')` }} />
              <div className="dtile__b">
                <h3>{d.name}</h3>
                <span className="dtile__go">{m.destExplore} <ArrowRight size={14} /></span>
              </div>
            </Link>
          ))}
        </div>

        <div className="dest__foot reveal">
          <Link href={localeHref(locale, "/destinations")} className="btn btn--ghost-l">{m.destExploreAll} <ArrowRight size={16} /></Link>
        </div>
      </div>
    </section>
  );
}
