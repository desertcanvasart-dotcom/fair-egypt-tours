import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import HowItWorks from "@/components/HowItWorks";
import Cta from "@/components/Cta";
import { getPage } from "@/lib/cms";
import { Pin, BadgeCheck, User, Star, ArrowRight } from "@/components/icons";

export const metadata: Metadata = {
  title: "About Us — Fair, Local, Honest Egypt Travel",
  description:
    "Fair Egypt Tours is a local, Egypt-based team offering affordable, carefully planned tours with licensed guides, private transport, and honest, itemised pricing. Learn our story and what 'fair' means to us.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Fair Egypt Tours",
    description:
      "A local, Egypt-based team. Affordable tours, licensed guides, private transport, and honest pricing — here's our story.",
    url: "/about",
  },
};

const VALUE_ICONS = [<Pin size={22} key="p" />, <BadgeCheck size={22} key="b" />, <User size={22} key="u" />, <Star size={22} key="s" />];
const ABOUT_HERO_IMG =
  "https://images.unsplash.com/photo-1539768942893-daf53e448371?auto=format&fit=crop&w=1900&q=85";

export default async function AboutPage() {
  const about = await getPage("about");

  return (
    <>
      <Header />
      <PageHero
        kicker={about.hero.kicker}
        title={<>{about.hero.titleLead} <em>{about.hero.titleEm}</em></>}
        subtitle={about.hero.subtitle}
        image={ABOUT_HERO_IMG}
        crumbs={[{ label: "About" }]}
      />

      {/* Story */}
      <section className="sec">
        <div className="shell">
          <div className="split split--media">
            <div className="media reveal" style={{ backgroundImage: `url('${about.story.image}')` }} />
            <div>
              <div className="kicker reveal"><i>—</i> <span>Our Story</span> <span className="ln" /></div>
              <h2 className="display reveal" data-delay="1">A fair price should still come with care.</h2>
              {about.story.paras.map((p, i) => (
                <p className="reveal" data-delay={i + 1} key={i}>{p}</p>
              ))}
              <Link href="/tours" className="btn btn--solid reveal" data-delay="2">
                Browse our tours <ArrowRight size={16} />
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
            <div className="kicker reveal"><i>—</i> <span>What &ldquo;Fair&rdquo; Means</span> <span className="ln" /></div>
            <div className="sec-top__row">
              <h2 className="display reveal" data-delay="1">Four promises behind every trip.</h2>
              <p className="reveal" data-delay="2">The brand should never say &ldquo;cheap.&rdquo; It says clear, balanced, respectful, and well-arranged.</p>
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

      <HowItWorks />
      <Cta />
      <Footer />
    </>
  );
}
