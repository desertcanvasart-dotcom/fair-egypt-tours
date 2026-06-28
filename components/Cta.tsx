import { getPage } from "@/lib/cms";
import { homeDefault } from "@/lib/page-content";
import { User, Whatsapp, ArrowRight, Check } from "./icons";
import { getLocale } from "@/lib/locale";
import { t } from "@/lib/messages";

export default async function Cta({
  heading = homeDefault.cta.heading,
  text = homeDefault.cta.text,
}: {
  heading?: string;
  text?: string;
}) {
  const site = await getPage("site");
  const m = t(await getLocale()).home;
  return (
    <section className="sec cta" id="cta">
      <div className="shell">
        <div className="cta__grid">
          <div className="cta__l">
            <div className="kicker reveal"><i>09</i> <span>{m.ctaKicker}</span> <span className="ln" /></div>
            <h2 className="reveal" data-delay="1">{heading}</h2>
            <p className="reveal" data-delay="2">{text}</p>
          </div>
          <form className="cta__form reveal" data-delay="1" action={site.whatsapp}>
            <h3>{m.ctaFormTitle}</h3>
            <div className="field">
              <label htmlFor="c-name">{m.yourName}</label>
              <div className="ctl"><User size={18} /><input id="c-name" name="name" type="text" placeholder={m.namePh} /></div>
            </div>
            <div className="field">
              <label htmlFor="c-phone">{m.waPhone}</label>
              <div className="ctl"><Whatsapp size={18} /><input id="c-phone" name="phone" type="tel" placeholder={m.phonePh} /></div>
            </div>
            <a className="btn btn--solid" href={site.whatsapp}>{m.sendReq} <ArrowRight size={16} /></a>
            <div className="fine"><Check size={14} /> {m.fine}</div>
          </form>
        </div>
      </div>
    </section>
  );
}
