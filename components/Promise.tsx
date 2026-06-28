import { homeDefault } from "@/lib/page-content";
import { BadgeCheck, PlusCircle, Check, Plus, ArrowRight } from "./icons";
import { getLocale } from "@/lib/locale";
import { localeHref } from "@/lib/i18n";
import { t } from "@/lib/messages";

export default async function Promise({
  included = homeDefault.included,
  promise = homeDefault.promise,
}: {
  included?: typeof homeDefault.included;
  promise?: typeof homeDefault.promise;
}) {
  const locale = await getLocale();
  const m = t(locale).home;
  return (
    <section className="sec promise">
      <div className="shell">
        <div className="promise__grid">
          <div>
            <div className="kicker reveal"><i>06</i> <span>{m.promiseKicker}</span> <span className="ln" /></div>
            <h2 className="display reveal" data-delay="1">{promise.heading}</h2>
            <p className="reveal" data-delay="1">{promise.text}</p>
            <a href={localeHref(locale, "/#cta")} className="btn btn--solid reveal" data-delay="2">
              {m.promiseBtn} <ArrowRight size={16} />
            </a>
          </div>
          <div>
            <div className="pblock reveal" data-delay="1">
              <h4><BadgeCheck size={18} /> {m.alwaysIncl}</h4>
              <div className="chips">
                {included.always.map((c) => (
                  <span className="chip" key={c}><Check size={14} />{c}</span>
                ))}
              </div>
            </div>
            <div className="pblock reveal" data-delay="2">
              <h4><PlusCircle size={18} /> {m.optionalAddons}</h4>
              <div className="chips">
                {included.optional.map((c) => (
                  <span className="chip chip--opt" key={c}><Plus size={14} />{c}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
