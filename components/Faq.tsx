import { homeDefault } from "@/lib/page-content";

export default function Faq({ faqs = homeDefault.faqs }: { faqs?: typeof homeDefault.faqs }) {
  return (
    <section className="sec faq" id="faq">
      <div className="shell">
        <div className="sec-top">
          <div className="kicker reveal"><i>08</i> <span>Good To Know</span> <span className="ln" /></div>
          <div className="sec-top__row">
            <h2 className="display reveal" data-delay="1">Questions, answered honestly.</h2>
            <p className="reveal" data-delay="2">Can&apos;t find what you need? Message us — a real person replies.</p>
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
