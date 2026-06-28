import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import HowItWorks from "@/components/HowItWorks";
import Cta from "@/components/Cta";
import { getPage } from "@/lib/cms";
import { getLocale } from "@/lib/locale";
import { localeHref } from "@/lib/i18n";
import { t } from "@/lib/messages";
import { aboutTranslations } from "@/lib/about-i18n";
import { homeTranslations } from "@/lib/home-i18n";
import { Pin, BadgeCheck, User, Star, ArrowRight } from "@/components/icons";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const m = t(locale).about;
  const url = localeHref(locale, "/about");
  return {
    title: m.metaTitle,
    description: m.metaDescription,
    alternates: { canonical: url },
    openGraph: { title: m.ogTitle, description: m.ogDescription, url },
  };
}

const VALUE_ICONS = [<Pin size={22} key="p" />, <BadgeCheck size={22} key="b" />, <User size={22} key="u" />, <Star size={22} key="s" />];
const ABOUT_HERO_IMG =
  "https://images.unsplash.com/photo-1539768942893-daf53e448371?auto=format&fit=crop&w=1900&q=85";

export default async function AboutPage() {
  const locale = await getLocale();
  const m = t(locale).about;
  // English: editable content from the DB. es/pt: translation overlay.
  const about = locale === "en" ? await getPage("about") : aboutTranslations[locale];
  // Shared sections reused on this page need their localized data too.
  const tr = locale === "en" ? null : homeTranslations[locale];

  return (
    <>
      <Header />
      <PageHero
        kicker={about.hero.kicker}
        title={<>{about.hero.titleLead} <em>{about.hero.titleEm}</em></>}
        subtitle={about.hero.subtitle}
        image={ABOUT_HERO_IMG}
        crumbs={[{ label: m.crumb }]}
      />

      {/* Story */}
      <section className="sec">
        <div className="shell">
          <div className="split split--media">
            <div className="media reveal" style={{ backgroundImage: `url('${about.story.image}')` }} />
            <div>
              <div className="kicker reveal"><i>—</i> <span>{m.storyKicker}</span> <span className="ln" /></div>
              <h2 className="display reveal" data-delay="1">{m.storyHeading}</h2>
              {about.story.paras.map((p, i) => (
                <p className="reveal" data-delay={i + 1} key={i}>{p}</p>
              ))}
              <Link href={localeHref(locale, "/tours")} className="btn btn--solid reveal" data-delay="2">
                {m.browseTours} <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="sec about" style={{ paddingTop: 0 }}>
        <div className="shell">
          <div className="stats reveal">
            {about.stats.map((s) => (
              <div className="stat" key={s.label}>
                <b>{s.b}{s.suffix ? <span style={{ fontSize: ".5em" }}>{s.suffix}</span> : null}</b>
                <span>{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="sec" style={{ background: "var(--sand)" }}>
        <div className="shell">
          <div className="sec-top">
            <div className="kicker reveal"><i>—</i> <span>{m.valuesKicker}</span> <span className="ln" /></div>
            <div className="sec-top__row">
              <h2 className="display reveal" data-delay="1">{m.valuesHeading}</h2>
              <p className="reveal" data-delay="2">{m.valuesSub}</p>
            </div>
          </div>
          <div className="flist flist--2">
            {about.values.map((v, i) => (
              <div className="fitem reveal" data-delay={(i % 2) + 1} key={v.title}>
                <span className="fi">{VALUE_ICONS[i % VALUE_ICONS.length]}</span>
                <div>
                  <b>{v.title}</b>
                  <p>{v.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <HowItWorks steps={tr?.steps} />
      <Cta heading={tr?.cta.heading} text={tr?.cta.text} />
      <Footer />
    </>
  );
}
