import { stats as defaultStats } from "@/lib/data";

export default function About({ stats = defaultStats }: { stats?: typeof defaultStats }) {
  return (
    <section className="sec about" id="about">
      <div className="shell">
        <div className="about__in">
          <div className="kicker reveal"><i>04</i> <span>About Fair Egypt Tours</span> <span className="ln" /></div>
          <h2 className="display reveal" data-delay="1">
            A fair price should still come with <span className="hl">real care.</span>
          </h2>
          <p className="about__lede reveal" data-delay="2">
            We&apos;re a local, Egypt-based team who believe affordable doesn&apos;t have to mean careless.
            We explain what&apos;s included, what&apos;s optional, and what might change the price — before you
            ever commit. Then we plan every day around timing, comfort, and a realistic travel flow.
          </p>
        </div>
        <div className="stats reveal" data-delay="2">
          {stats.map((s) => (
            <div className="stat" key={s.label}>
              <b>{s.b}{s.suffix ? <span style={{ fontSize: ".5em" }}>{s.suffix}</span> : null}</b>
              <span>{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
