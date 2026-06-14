import { getPage } from "@/lib/cms";
import { homeDefault } from "@/lib/page-content";
import { User, Whatsapp, ArrowRight, Check } from "./icons";

export default async function Cta({
  heading = homeDefault.cta.heading,
  text = homeDefault.cta.text,
}: {
  heading?: string;
  text?: string;
}) {
  const site = await getPage("site");
  return (
    <section className="sec cta" id="cta">
      <div className="shell">
        <div className="cta__grid">
          <div className="cta__l">
            <div className="kicker reveal"><i>09</i> <span>Get Started</span> <span className="ln" /></div>
            <h2 className="reveal" data-delay="1">{heading}</h2>
            <p className="reveal" data-delay="2">{text}</p>
          </div>
          <form className="cta__form reveal" data-delay="1" action={site.whatsapp}>
            <h3>Request a fair quote</h3>
            <div className="field">
              <label htmlFor="c-name">Your name</label>
              <div className="ctl"><User size={18} /><input id="c-name" name="name" type="text" placeholder="e.g. Sarah" /></div>
            </div>
            <div className="field">
              <label htmlFor="c-phone">WhatsApp / Phone</label>
              <div className="ctl"><Whatsapp size={18} /><input id="c-phone" name="phone" type="tel" placeholder="+20 ..." /></div>
            </div>
            <a className="btn btn--solid" href={site.whatsapp}>Send my request <ArrowRight size={16} /></a>
            <div className="fine"><Check size={14} /> No deposit · No hidden costs · No obligation</div>
          </form>
        </div>
      </div>
    </section>
  );
}
