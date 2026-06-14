import Link from "next/link";
import { destinations } from "@/lib/data";
import { ArrowRight } from "./icons";

export default function Destinations() {
  return (
    <section className="sec dest" id="destinations">
      <div className="shell">
        <div className="sec-top">
          <div className="kicker kicker--light reveal"><i>03</i> <span>Destinations</span> <span className="ln" /></div>
          <div className="sec-top__row">
            <h2 className="display reveal" data-delay="1">Explore Egypt,<br />region by region.</h2>
            <p className="reveal" data-delay="2">
              Browse by place — we handle routing, timing, and comfort behind the scenes.
            </p>
          </div>
        </div>

        <div className="dgrid">
          {destinations.map((d, i) => (
            <article className="dtile reveal" data-delay={i + 1} key={d.name}>
              <div className="img" style={{ backgroundImage: `url('${d.img}')` }} />
              <span className="dnum">{d.num}</span>
              <span className="dcount">{d.count}</span>
              <div className="dtile__b">
                <h3>{d.name}</h3>
                <p>{d.sub}</p>
                <span className="dgo">Explore <span className="c"><ArrowRight size={14} /></span></span>
              </div>
            </article>
          ))}
        </div>

        <div className="dest__foot reveal">
          <Link href="/destinations" className="btn btn--ghost-l">Explore all destinations <ArrowRight size={16} /></Link>
        </div>
      </div>
    </section>
  );
}
