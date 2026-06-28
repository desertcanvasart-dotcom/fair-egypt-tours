import { homeDefault } from "@/lib/page-content";
import { getLocale } from "@/lib/locale";
import { t } from "@/lib/messages";

export default async function Faq({ faqs = homeDefault.faqs }: { faqs?: typeof homeDefault.faqs }) {
  const m = t(await getLocale()).home;
  return (
    <section className="sec faq" id="faq">
      <div className="shell">
        <div className="sec-top">
          <div className="kicker reveal"><i>08</i> <span>{m.faqKicker}</span> <span className="ln" /></div>
          <div className="sec-top__row">
            <h2 className="display reveal" data-delay="1">{m.faqHeading}</h2>
            <p className="reveal" data-delay="2">{m.faqSub}</p>
          </div>
        </div>
        <div className="faq-grid">
          {faqs.map((f, i) => (
            <article className="fcard reveal" data-delay={(i % 2) + 1} key={f.q}>
              <h4><i>Q.</i>{f.q}</h4>
              <p>{f.a}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
