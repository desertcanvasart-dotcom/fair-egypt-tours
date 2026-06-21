import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import Cta from "@/components/Cta";
import Prose from "@/components/Prose";
import TourCard from "@/components/TourCard";
import JsonLdScript from "@/components/JsonLdScript";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import { getDestination, getDestinationSlugs, getTour } from "@/lib/cms";
import { Pin, Clock, Calendar, BadgeCheck, Car, ArrowRight } from "@/components/icons";

export function generateStaticParams() {
  return getDestinationSlugs().then((slugs) => slugs.map((slug) => ({ slug })));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const d = await getDestination(slug);
  if (!d) return {};
  return {
    title: `${d.name} Travel Guide`,
    description: d.intro,
    alternates: { canonical: `/destinations/${d.slug}` },
    openGraph: {
      title: `${d.name} Travel Guide | Fair Egypt Tours`,
      description: d.intro,
      url: `/destinations/${d.slug}`,
      images: [{ url: d.heroImage }],
    },
  };
}

export default async function DestinationPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const d = await getDestination(slug);
  if (!d) notFound();

  const relatedTours = (await Promise.all(d.tourSlugs.map((s) => getTour(s)))).filter(Boolean);
  const idealStay = d.quickFacts.find((f) => /stay|days/i.test(f.label))?.value ?? "2–3 days";
  const highlights = d.thingsToDo.slice(0, 4).map((t) => t.title);

  // FAQ composed from this destination's own content.
  const faqs = [
    { q: `How many days should I spend in ${d.name}?`, a: `We suggest ${idealStay}. ${d.intro}` },
    { q: `What's the best time to visit ${d.name}?`, a: d.bestTime },
    { q: `How do I get to ${d.name}?`, a: d.gettingThere[0] },
    { q: `Where should I stay in ${d.name}?`, a: `${d.whereToStay[0].area} — ${d.whereToStay[0].note} We match the base to the kind of trip you want.` },
    { q: `Do I need a private guide?`, a: `For ${d.name}, a licensed local guide is recommended — the sites are layered and a good guide turns separate stops into one connected story. Every tour includes one.` },
    { q: `Can the days be adjusted for families or a slower pace?`, a: `Yes. Route order, timing, walking, museum pace, and rest stops are all shaped around your comfort and energy.` },
  ];

  const tips = [
    { icon: <Car size={20} />, b: "Getting there", p: d.gettingThere[0] },
    { icon: <Calendar size={20} />, b: "When to go", p: d.bestTime },
    { icon: <BadgeCheck size={20} />, b: "A guide changes the visit", p: `With a licensed local guide, ${d.name}'s sites connect into a story rather than separate stops.` },
    { icon: <Pin size={20} />, b: "A bit of history", p: d.history[0] },
  ];

  const destSchema = {
    "@context": "https://schema.org",
    "@type": "TouristDestination",
    name: d.name,
    description: d.intro,
    image: d.heroImage,
    address: { "@type": "PostalAddress", addressRegion: d.region, addressCountry: "EG" },
    touristType: "Cultural & historical travellers",
    ...(d.thingsToDo?.length
      ? { includesAttraction: d.thingsToDo.map((t) => ({ "@type": "TouristAttraction", name: t.title, description: t.text })) }
      : {}),
  };
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  };

  return (
    <>
      <JsonLdScript data={destSchema} />
      <JsonLdScript data={faqSchema} />
      <BreadcrumbJsonLd items={[{ name: "Destinations", url: "/destinations" }, { name: d.name }]} />
      <Header />

      <PageHero
        kicker="Travel Guide"
        title={d.name}
        subtitle={d.intro}
        image={d.heroImage}
        crumbs={[{ label: "Destinations", href: "/destinations" }, { label: d.name }]}
        meta={[
          { icon: <Pin size={16} />, label: d.region },
          { icon: <Clock size={16} />, label: `Ideal stay: ${idealStay}` },
          { icon: <BadgeCheck size={16} />, label: `${d.tourCount} tours` },
        ]}
        pills={highlights}
      />

      {/* Quick facts */}
      <section className="sec" style={{ paddingBottom: 0 }}>
        <div className="shell">
          <div className="facts reveal">
            {d.quickFacts.map((f) => (
              <div className="fact" key={f.label}><small>{f.label}</small><b>{f.value}</b></div>
            ))}
          </div>
        </div>
      </section>

      {/* Intro + planner */}
      <section className="sec">
        <div className="shell">
          <div className="article">
            <div className="article__main">
              <div className="kicker reveal"><i>—</i> <span>Why {d.name}</span> <span className="ln" /></div>
              <div className="reveal" data-delay="1" style={{ marginTop: 18 }}>
                <Prose sections={d.overview} />
              </div>
            </div>
            <aside className="sidecol">
              <div className="sidecard reveal">
                <h4>Plan your {d.name} stay</h4>
                <div className="row"><span><Clock size={16} /> Ideal stay</span><b>{idealStay}</b></div>
                <div className="row"><span><Pin size={16} /> Region</span><b>{d.region}</b></div>
                <div className="row"><span><BadgeCheck size={16} /> Tours</span><b>{d.tourCount} available</b></div>
                <Link href="/#cta" className="btn btn--solid">Ask for a tailored plan <ArrowRight size={16} /></Link>
              </div>
              <div className="sidecard reveal" data-delay="1">
                <h4>Why book with us</h4>
                <p style={{ fontSize: 14, color: "var(--muted)", lineHeight: 1.7 }}>
                  Licensed local guides, private air-conditioned transport, and honest itemised pricing — with real
                  human support from first message to final drop-off.
                </p>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Things to do */}
      <section className="sec" style={{ background: "var(--sand)" }}>
        <div className="shell">
          <div className="sec-top">
            <div className="kicker reveal"><i>—</i> <span>Things to do</span> <span className="ln" /></div>
            <div className="sec-top__row">
              <h2 className="display reveal" data-delay="1">The experiences that define {d.name}.</h2>
              <p className="reveal" data-delay="2">The places and moments worth building your days around.</p>
            </div>
          </div>
          <div className="xgrid">
            {d.thingsToDo.map((t, i) => (
              <article className="xcard reveal" data-delay={(i % 4) + 1} key={t.title}>
                <span className="n">{String(i + 1).padStart(2, "0")}</span>
                <h3>{t.title}</h3>
                <p>{t.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* How long to stay */}
      <section className="sec">
        <div className="shell">
          <div className="duration reveal">
            <div className="d-copy">
              <div className="kicker"><i>—</i> <span>Suggested duration</span> <span className="ln" /></div>
              <h2>How long should you stay?</h2>
              <p>
                Rushing {d.name} is the most common mistake. Give it room to breathe — early starts, unhurried
                visits, and softer evenings make the whole trip more rewarding. {d.bestTime}
              </p>
            </div>
            <div className="d-stay">
              <b>{idealStay}</b>
              <span>Recommended</span>
            </div>
          </div>
        </div>
      </section>

      {/* Where to stay */}
      <section className="sec" style={{ background: "var(--sand)" }}>
        <div className="shell">
          <div className="sec-top">
            <div className="kicker reveal"><i>—</i> <span>Where to stay</span> <span className="ln" /></div>
            <div className="sec-top__row">
              <h2 className="display reveal" data-delay="1">Pick the base that fits your trip.</h2>
              <p className="reveal" data-delay="2">Where you stay quietly shapes the whole experience — here&apos;s how each area feels.</p>
            </div>
          </div>
          <div className="staygrid">
            {d.whereToStay.map((w, i) => (
              <article className="staycard reveal" data-delay={(i % 2) + 1} key={w.area}>
                <span className="num">{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <h3>{w.area}</h3>
                  <p>{w.note}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Related tours */}
      {relatedTours.length > 0 ? (
        <section className="sec">
          <div className="shell">
            <div className="sec-top">
              <div className="kicker reveal"><i>—</i> <span>Private tours in {d.name}</span> <span className="ln" /></div>
              <div className="sec-top__row">
                <h2 className="display reveal" data-delay="1">Fair-priced trips, better arranged.</h2>
                <Link className="btn btn--outline reveal" data-delay="2" href="/tours">All tours <ArrowRight size={16} /></Link>
              </div>
            </div>
            <div className="tours-grid">
              {relatedTours.map((t, i) => t && <TourCard key={t.slug} tour={t} delay={(i % 4) + 1} />)}
            </div>
          </div>
        </section>
      ) : null}

      {/* Good to know */}
      <section className="sec" style={{ background: "var(--sand)" }}>
        <div className="shell">
          <div className="tipwrap">
            <div>
              <div className="kicker reveal"><i>—</i> <span>Good to know</span> <span className="ln" /></div>
              <h2 className="display reveal" data-delay="1" style={{ marginTop: 18 }}>The practical details matter.</h2>
              <p className="reveal" data-delay="2" style={{ color: "var(--muted)", marginTop: 14, maxWidth: "34ch" }}>
                Small decisions — timing, routing, and where you base yourself — make the biggest difference to how {d.name} feels.
              </p>
            </div>
            <div className="tipgrid">
              {tips.map((t) => (
                <div className="tipcard reveal" key={t.b}>
                  <span className="ti">{t.icon}</span>
                  <div><b>{t.b}</b><p>{t.p}</p></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="sec">
        <div className="shell">
          <h2 className="subhead reveal">{d.name} in pictures</h2>
          <figure style={{ margin: 0 }} className="reveal">
            <div className="gallery">
              {d.gallery.map((g, i) => (
                <div key={i} role="img" aria-label={`${d.name} — photo ${i + 1}`} className={`g${i === 0 ? " g--big" : ""}`} style={{ backgroundImage: `url('${g}')` }} />
              ))}
            </div>
            <figcaption className="sr-only">Photo gallery of {d.name}, {d.region}.</figcaption>
          </figure>
        </div>
      </section>

      {/* FAQ */}
      <section className="sec" style={{ background: "var(--sand)" }}>
        <div className="shell">
          <div className="sec-top">
            <div className="kicker reveal"><i>—</i> <span>FAQ</span> <span className="ln" /></div>
            <div className="sec-top__row">
              <h2 className="display reveal" data-delay="1">Questions travellers ask before {d.name}.</h2>
              <p className="reveal" data-delay="2">Honest answers, drawn from how we actually plan these trips.</p>
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

      <Cta heading={`Tell us your dates — we'll shape the right ${d.name} stay.`} />
      <Footer />
    </>
  );
}
