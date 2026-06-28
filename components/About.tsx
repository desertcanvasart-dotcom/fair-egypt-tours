import { stats as defaultStats } from "@/lib/data";
import { getLocale } from "@/lib/locale";
import { t } from "@/lib/messages";

export default async function About({ stats = defaultStats }: { stats?: typeof defaultStats }) {
  const m = t(await getLocale()).home;
  return (
    <section className="sec about" id="about">
      <div className="shell">
        <div className="about__in">
          <div className="kicker reveal"><i>04</i> <span>{m.aboutKicker}</span> <span className="ln" /></div>
          <h2 className="display reveal" data-delay="1">
            {m.aboutHeadingLead}<span className="hl">{m.aboutHeadingHl}</span>
          </h2>
          <p className="about__lede reveal" data-delay="2">{m.aboutLede}</p>
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
