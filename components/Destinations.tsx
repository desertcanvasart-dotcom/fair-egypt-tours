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
            <Link className="dtile reveal" data-delay={(i % 4) + 1} key={d.name} href="/destinations">
              <div className="img" style={{ backgroundImage: `url('${d.img}')` }} />
              <div className="dtile__b">
                <h3>{d.name}</h3>
                <span className="dtile__go">Explore <ArrowRight size={14} /></span>
              </div>
            </Link>
          ))}
        </div>

        <div className="dest__foot reveal">
          <Link href="/destinations" className="btn btn--ghost-l">Explore all destinations <ArrowRight size={16} /></Link>
        </div>
      </div>
    </section>
  );
}
