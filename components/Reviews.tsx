import { homeDefault } from "@/lib/page-content";
import { Stars, BadgeCheck } from "./icons";
import { getLocale } from "@/lib/locale";
import { t } from "@/lib/messages";

export default async function Reviews({ reviews = homeDefault.reviews }: { reviews?: typeof homeDefault.reviews }) {
  const m = t(await getLocale()).home;
  return (
    <section className="sec reviews" id="reviews">
      <div className="shell">
        <div className="sec-top">
          <div className="kicker reveal"><i>07</i> <span>{m.reviewsKicker}</span> <span className="ln" /></div>
          <div className="sec-top__row">
            <h2 className="display reveal" data-delay="1">{m.reviewsHeading}</h2>
            <div className="reveal" data-delay="2">
              <div className="rev-banner">
                <Stars count={5} size={17} />
                <b>4.9</b>
                <span>{m.reviewsCount}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="tgrid">
          {reviews.map((r, i) => (
            <article className="tq reveal" data-delay={i + 1} key={r.name}>
              <div className="tq__top">
                <Stars count={5} size={15} />
                <span className="tq__vf"><BadgeCheck size={14} />{m.verified}</span>
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
