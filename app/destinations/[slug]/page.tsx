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
import type { Section } from "@/lib/content";
import { Pin, Clock, ArrowRight, Calendar, BadgeCheck } from "@/components/icons";

export async function generateStaticParams() {
  return (await getDestinationSlugs()).map((slug) => ({ slug }));
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

  const sections: Section[] = [
    ...d.overview,
    { heading: "A little history", paras: d.history },
    { heading: "Getting there", paras: d.gettingThere },
    { heading: "Best time to visit", paras: [d.bestTime] },
  ];

  const schema = {
    "@context": "https://schema.org",
    "@type": "TouristDestination",
    name: d.name,
    description: d.intro,
    image: d.heroImage,
    address: { "@type": "PostalAddress", addressRegion: d.region, addressCountry: "EG" },
    touristType: "Cultural & historical travellers",
    ...(d.thingsToDo?.length
      ? {
          includesAttraction: d.thingsToDo.map((t) => ({
            "@type": "TouristAttraction",
            name: t.title,
            description: t.text,
          })),
        }
      : {}),
  };

  return (
    <>
      <JsonLdScript data={schema} />
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
          { icon: <Clock size={16} />, label: d.quickFacts[1]?.value ? `Ideal stay: ${d.quickFacts[1].value}` : "" },
          { icon: <BadgeCheck size={16} />, label: `${d.tourCount} tours available` },
        ].filter((m) => m.label)}
      />

      {/* Quick facts */}
      <section className="sec" style={{ paddingBottom: 0 }}>
        <div className="shell">
          <div className="facts reveal">
            {d.quickFacts.map((f) => (
              <div className="fact" key={f.label}>
                <small>{f.label}</small>
                <b>{f.value}</b>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main + sidebar */}
      <section className="sec">
        <div className="shell">
          <div className="article">
            <div className="article__main">
              <Prose sections={sections} />

              <h2 className="subhead" style={{ marginTop: 48 }}>Where to stay</h2>
              <div className="flist flist--2">
                {d.whereToStay.map((w) => (
                  <div className="fitem" key={w.area}>
                    <span className="fi"><Pin size={20} /></span>
                    <div>
                      <b>{w.area}</b>
                      <p>{w.note}</p>
                    </div>
                  </div>
                ))}
              </div>

              <h2 className="subhead" style={{ marginTop: 48 }}>Things to do</h2>
              <div className="flist">
                {d.thingsToDo.map((t) => (
                  <div className="fitem" key={t.title}>
                    <span className="fi"><BadgeCheck size={20} /></span>
                    <div>
                      <b>{t.title}</b>
                      <p>{t.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <aside className="sidecol">
              <div className="sidecard">
                <h4>Plan a trip to {d.name}</h4>
                <div className="row"><span><Calendar size={16} /> Best time</span><b>{d.quickFacts[1]?.value ?? "Flexible"}</b></div>
                <div className="row"><span><Pin size={16} /> Region</span><b>{d.region}</b></div>
                <div className="row"><span><BadgeCheck size={16} /> Tours</span><b>{d.tourCount} available</b></div>
                <Link href="/#cta" className="btn btn--solid">Get a fair quote <ArrowRight size={16} /></Link>
              </div>
              <div className="sidecard">
                <h4>Why book with us</h4>
                <p style={{ fontSize: 14, color: "var(--muted)", lineHeight: 1.7 }}>
                  Licensed local guides, private air-conditioned transport, and honest itemised pricing — with
                  real human support from first message to final drop-off.
                </p>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Related tours */}
      {relatedTours.length > 0 ? (
        <section className="sec" style={{ background: "var(--sand)" }}>
          <div className="shell">
            <div className="sec-top">
              <div className="kicker reveal"><i>—</i> <span>Tours in {d.name}</span> <span className="ln" /></div>
              <div className="sec-top__row">
                <h2 className="display reveal" data-delay="1">Fair-priced trips here.</h2>
                <Link className="btn btn--outline reveal" data-delay="2" href="/tours">All tours <ArrowRight size={16} /></Link>
              </div>
            </div>
            <div className="tours-grid">
              {relatedTours.map((t, i) => t && <TourCard key={t.slug} tour={t} delay={(i % 4) + 1} />)}
            </div>
          </div>
        </section>
      ) : null}

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

      <Cta />
      <Footer />
    </>
  );
}
