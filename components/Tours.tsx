import Link from "next/link";
import { tours } from "@/lib/data";
import { Star, ArrowUpRight, ArrowRight } from "./icons";

export default function Tours() {
  return (
    <section className="sec tours" id="tours">
      <div className="shell">
        <div className="sec-top">
          <div className="kicker reveal"><i>02</i> <span>Featured Tours</span> <span className="ln" /></div>
          <div className="sec-top__row">
            <h2 className="display reveal" data-delay="1">Fair-priced trips,<br />fully organised.</h2>
            <p className="reveal" data-delay="2">
              Every tour shows its real price up front, with a clear list of what&apos;s included.
            </p>
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
                  <div className="pr"><small>from</small><b>{t.price}</b></div>
                  <span className="go"><ArrowUpRight size={16} /></span>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="tours-foot reveal">
          <Link href="/tours" className="btn btn--nile">View all tours <ArrowRight size={16} /></Link>
        </div>
      </div>
    </section>
  );
}
