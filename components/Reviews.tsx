import { homeDefault } from "@/lib/page-content";
import { Stars, BadgeCheck } from "./icons";

export default function Reviews({ reviews = homeDefault.reviews }: { reviews?: typeof homeDefault.reviews }) {
  return (
    <section className="sec reviews" id="reviews">
      <div className="shell">
        <div className="sec-top">
          <div className="kicker reveal"><i>07</i> <span>Traveller Reviews</span> <span className="ln" /></div>
          <div className="sec-top__row">
            <h2 className="display reveal" data-delay="1">Real trips, real travellers.</h2>
            <div className="reveal" data-delay="2">
              <div className="rev-banner">
                <Stars count={5} size={17} />
                <b>4.9</b>
                <span>· 2,140+ verified reviews</span>
              </div>
            </div>
          </div>
        </div>

        <div className="tgrid">
          {reviews.map((r, i) => (
            <article className="tq reveal" data-delay={i + 1} key={r.name}>
              <div className="tq__top">
                <Stars count={5} size={15} />
                <span className="tq__vf"><BadgeCheck size={14} />Verified</span>
              </div>
              <blockquote>{r.quote}</blockquote>
              <div className="tq__who">
                <span className="av" style={{ backgroundImage: `url('${r.avatar}')` }} />
                <div><b>{r.name}</b><span>{r.place}</span></div>
                <span className="tag">{r.tag}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
