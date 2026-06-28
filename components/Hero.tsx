import { Pin, Calendar, User, ArrowRight } from "./icons";
import { homeDefault, type HomeContent } from "@/lib/page-content";
import { getLocale } from "@/lib/locale";
import { t } from "@/lib/messages";

const HERO_IMG =
  "https://images.unsplash.com/photo-1539768942893-daf53e448371?auto=format&fit=crop&w=1900&q=85";

export default async function Hero({ hero = homeDefault.hero }: { hero?: HomeContent["hero"] }) {
  const m = t(await getLocale()).home;
  return (
    <section
      className="hero"
      style={{
        background: `linear-gradient(180deg,rgba(7,28,40,.55) 0%,rgba(7,28,40,.15) 35%,rgba(7,28,40,.78) 100%), url('${HERO_IMG}') center/cover fixed`,
      }}
    >
      <div className="shell">
        <div className="hero__grid">
          <div className="hero__copy">
            <div className="kicker reveal"><i>01</i> <span>{hero.kicker}</span> <span className="ln" /></div>
            <h1 className="reveal" data-delay="1">
              {hero.titleLead} <em>{hero.titleEm}</em>
            </h1>
            <p className="reveal" data-delay="2">{hero.subtitle}</p>
            <div className="hero__chips reveal" data-delay="3">
              {hero.chips.map((c) => <a key={c} href="#tours">{c}</a>)}
            </div>
          </div>

          <form className="widget reveal" data-delay="2" action="#cta">
            <h3>{m.planTrip}</h3>
            <span>{m.quoteNote}</span>
            <div className="field">
              <label htmlFor="h-dest">{m.destination}</label>
              <div className="ctl">
                <Pin size={18} />
                <select id="h-dest" name="destination" defaultValue={m.destOptions[0]}>
                  {m.destOptions.map((o) => <option key={o}>{o}</option>)}
                </select>
              </div>
            </div>
            <div className="widget__row">
              <div className="field">
                <label htmlFor="h-date">{m.dates}</label>
                <div className="ctl">
                  <Calendar size={18} />
                  <input id="h-date" name="dates" type="text" placeholder={m.whenPh} />
                </div>
              </div>
              <div className="field">
                <label htmlFor="h-trav">{m.travellers}</label>
                <div className="ctl">
                  <User size={18} />
                  <select id="h-trav" name="travellers" defaultValue={m.travOptions[0]}>
                    {m.travOptions.map((o) => <option key={o}>{o}</option>)}
                  </select>
                </div>
              </div>
            </div>
            <a className="btn btn--solid" href="#cta">
              {m.getQuote} <ArrowRight size={16} />
            </a>
          </form>
        </div>
      </div>
    </section>
  );
}
