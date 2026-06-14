import { homeDefault } from "@/lib/page-content";

export default function HowItWorks({ steps = homeDefault.steps }: { steps?: typeof homeDefault.steps }) {
  return (
    <section className="sec how">
      <div className="shell">
        <div className="sec-top">
          <div className="kicker reveal"><i>05</i> <span>How It Works</span> <span className="ln" /></div>
          <div className="sec-top__row">
            <h2 className="display reveal" data-delay="1">A fair trip in three simple steps.</h2>
            <p className="reveal" data-delay="2">No pushy sales, no confusing packages. Just tell us what you want.</p>
          </div>
        </div>
        <div className="timeline">
          {steps.map((s, i) => (
            <div className="tl reveal" data-delay={i + 1} key={s.n}>
              <div className="node">{s.n}</div>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
