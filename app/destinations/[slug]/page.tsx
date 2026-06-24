import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import Cta from "@/components/Cta";
import Prose from "@/components/Prose";
import TourCard from "@/components/TourCard";
import HotelCard from "@/components/HotelCard";
import Gallery from "@/components/Gallery";
import JsonLdScript from "@/components/JsonLdScript";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import { getDestination, getDestinationSlugs, getTour, getTours, getTourCategories, getHotels } from "@/lib/cms";
import { Pin, Clock, BadgeCheck, ArrowRight, Whatsapp } from "@/components/icons";

export function generateStaticParams() {
  return getDestinationSlugs().then((slugs) => slugs.map((slug) => ({ slug })));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const d = await getDestination(slug);
  if (!d) return {};
  const metaDesc = d.metaDescription ?? d.summary ?? d.intro;
  const metaTitle = d.metaTitle?.trim();
  return {
    title: metaTitle ? { absolute: metaTitle } : `${d.name} Travel Guide`,
    description: metaDesc,
    alternates: { canonical: `/destinations/${d.slug}` },
    openGraph: {
      title: `${d.name} Travel Guide | Fair Egypt Tours`,
      description: metaDesc,
      url: `/destinations/${d.slug}`,
      images: [{ url: d.heroImage }],
    },
  };
}

export default async function DestinationPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const d = await getDestination(slug);
  if (!d) notFound();

  // Tours wired to this destination: auto-matched by the tour's `destination`
  // field, plus any explicitly listed in tourSlugs — de-duped by slug.
  const slugTours = (await Promise.all((d.tourSlugs ?? []).map((s) => getTour(s)))).filter(Boolean);
  const destTours = (await getTours()).filter((t) => t.destination === d.name);
  const relatedTours = Array.from(
    new Map([...destTours, ...slugTours].filter(Boolean).map((t) => [t!.slug, t!])).values()
  );

  // Tour categories wired to this destination (shown as cards).
  const destCategories = (await getTourCategories()).filter((c) => c.destination === d.name);
  const idealStay = d.quickFacts.find((f) => /stay|days/i.test(f.label))?.value ?? "2–3 days";

  // Real hotel suggestions for this destination, from the hotels collection.
  // Prefer an explicit destination slug on the hotel; fall back to city-name match.
  const allHotels = await getHotels();
  const cityHotels = allHotels
    .filter((h) =>
      h.destination
        ? h.destination === d.slug || (h.alsoIn?.includes(d.slug) ?? false)
        : d.name.toLowerCase().includes(h.city.toLowerCase())
    )
    .slice(0, 4);

  // Photo pool for the experience bento (real destination imagery).
  const pool = [d.gallery[0], d.gallery[1], d.gallery[2], d.heroImage, d.cardImage].filter(Boolean) as string[];

  const know = [
    { t: "Getting there", p: d.gettingThere[0] },
    { t: "When to go", p: d.bestTime },
    { t: "Why a local guide", p: `In ${d.name}, a licensed local guide ties the sites into one story — handling timing, routing, and the context that turns separate stops into a real understanding of the place.` },
    { t: "A little history", p: d.history[0] },
  ];

  // Prefer hand-written, destination-specific FAQs; fall back to generated ones.
  const faqs = d.faqs?.length
    ? d.faqs
    : [
        { q: `How many days should I spend in ${d.name}?`, a: `We suggest ${idealStay}. ${d.intro}` },
        { q: `What's the best time to visit ${d.name}?`, a: d.bestTime },
        { q: `How do I get to ${d.name}?`, a: d.gettingThere[0] },
        { q: `Where should I stay in ${d.name}?`, a: `${d.whereToStay[0].area} — ${d.whereToStay[0].note} We match the base to the kind of trip you want.` },
        { q: `Do I need a private guide?`, a: `For ${d.name}, a licensed local guide is recommended — the sites are layered and a good guide turns separate stops into one connected story. Every tour includes one.` },
        { q: `Can the days be adjusted for families or a slower pace?`, a: `Yes. Route order, timing, walking, museum pace, and rest stops are all shaped around your comfort and energy.` },
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
      />

      {/* At a glance */}
      <section className="sec" style={{ paddingBottom: 0 }}>
        <div className="shell">
          <div className="atglance reveal">
            {d.quickFacts.map((f) => (
              <div className="ag" key={f.label}><small>{f.label}</small><b>{f.value}</b></div>
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
            </aside>
          </div>
        </div>
      </section>

      {/* Things to do — image bento */}
      <section className="sec" style={{ background: "var(--sand)" }}>
        <div className="shell">
          <div className="sec-top">
            <div className="kicker reveal"><i>—</i> <span>Things to do</span> <span className="ln" /></div>
            <div className="sec-top__row">
              <h2 className="display reveal" data-delay="1">The experiences that define {d.name}.</h2>
              <p className="reveal" data-delay="2">The places and moments worth building your days around.</p>
            </div>
          </div>
          <div className="flipgrid reveal">
            {d.thingsToDo.map((t, i) => (
              <article key={t.title} className="flipcard" tabIndex={0} aria-label={t.title} data-flip>
                <div className="flipcard__inner">
                  <div className="flipcard__front" style={{ backgroundImage: `url('${t.image ?? pool[i % pool.length]}')` }}>
                    <div className="flipcard__face">
                      <span className="k">{String(i + 1).padStart(2, "0")} · {d.name}</span>
                      <h3>{t.title}</h3>
                      <span className="flipcard__hint">Hover or tap for details</span>
                    </div>
                  </div>
                  <div className="flipcard__back">
                    <span className="k">{t.title}</span>
                    <p>{t.text}</p>
                  </div>
                </div>
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
                visits, and softer evenings make the whole trip more rewarding.
              </p>
              <Link href="/#cta" className="d-cta">Plan it day by day <ArrowRight size={16} /></Link>
            </div>
            <div className="d-stay">
              <span className="d-stay__lab">We recommend</span>
              <b>{idealStay}</b>
              <span className="d-stay__sub">to see it without rushing</span>
            </div>
          </div>
        </div>
      </section>

      {/* Where to stay — areas + real hotels */}
      <section className="sec" style={{ background: "var(--sand)" }}>
        <div className="shell">
          <div className="sec-top">
            <div className="kicker reveal"><i>—</i> <span>Where to stay</span> <span className="ln" /></div>
            <div className="sec-top__row">
              <h2 className="display reveal" data-delay="1">Pick the base that fits your trip.</h2>
              <p className="reveal" data-delay="2">Where you stay quietly shapes the whole experience — here&apos;s how each area feels, plus stays we&apos;d actually book.</p>
            </div>
          </div>

          <div className="arealist reveal">
            {d.whereToStay.map((w, i) => (
              <div className="arearow" key={w.area}>
                <span className="ai">{String(i + 1).padStart(2, "0")}</span>
                <div><h3>{w.area}</h3><p>{w.note}</p></div>
              </div>
            ))}
          </div>

          {cityHotels.length > 0 ? (
            <>
              <h3 className="subhead reveal" style={{ marginTop: 52 }}>Where to actually stay in {d.name}</h3>
              <div className="deststay">
                {cityHotels.map((h, i) => <HotelCard key={h.slug} hotel={h} delay={(i % 5) + 1} />)}
              </div>
            </>
          ) : null}
        </div>
      </section>

      {/* Tours & categories wired to this destination */}
      {destCategories.length > 0 || relatedTours.length > 0 ? (
        <section className="sec">
          <div className="shell">
            <div className="sec-top">
              <div className="kicker reveal"><i>—</i> <span>Tours in {d.name}</span> <span className="ln" /></div>
              <div className="sec-top__row">
                <h2 className="display reveal" data-delay="1">Fair-priced trips, better arranged.</h2>
                <Link className="btn btn--outline reveal" data-delay="2" href="/tours">All tours <ArrowRight size={16} /></Link>
              </div>
            </div>

            {destCategories.length > 0 ? (
              <div className="catrow reveal">
                {destCategories.map((c) => (
                  <Link key={c.slug} className="catcard" href={`/tours/category/${c.slug}`}>
                    <div className="img" style={{ backgroundImage: `url('${c.cardImage || c.heroImage}')` }} />
                    <div className="catcard__b">
                      <span className="k">{c.type || "Tours"}</span>
                      <h3>{c.name}</h3>
                      <span className="catcard__go">Explore <ArrowRight size={14} /></span>
                    </div>
                  </Link>
                ))}
              </div>
            ) : null}

            {relatedTours.length > 0 ? (
              <div className="tours-grid" style={{ marginTop: destCategories.length > 0 ? 28 : 0 }}>
                {relatedTours.map((t, i) => t && <TourCard key={t.slug} tour={t} delay={(i % 4) + 1} />)}
              </div>
            ) : null}
          </div>
        </section>
      ) : null}

      {/* Good to know — photo + list */}
      <section className="sec" style={{ background: "var(--sand)" }}>
        <div className="shell">
          <div className="sec-top" style={{ marginBottom: 36 }}>
            <div className="kicker reveal"><i>—</i> <span>Good to know</span> <span className="ln" /></div>
            <div className="sec-top__row">
              <h2 className="display reveal" data-delay="1">The practical details that matter.</h2>
              <p className="reveal" data-delay="2">Small decisions — timing, routing, and where you base yourself — make the biggest difference.</p>
            </div>
          </div>
          <div className="know">
            <div className="know__img reveal" style={{ backgroundImage: `url('${d.gallery[1] || d.heroImage}')` }} role="img" aria-label={`${d.name} scenery`} />
            <div className="reveal" data-delay="1">
              {know.map((k, i) => (
                <div className="know__item" key={k.t}>
                  <span className="ki">{String(i + 1).padStart(2, "0")}</span>
                  <div><b>{k.t}</b><p>{k.p}</p></div>
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
          <div className="reveal">
            <Gallery images={d.gallery} label={d.name} />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="sec" style={{ background: "var(--sand)" }}>
        <div className="shell">
          <div className="qa2">
            <div className="qa2__intro">
              <div className="kicker reveal"><i>—</i> <span>FAQ</span> <span className="ln" /></div>
              <h2 className="display reveal" data-delay="1" style={{ marginTop: 16, fontSize: "clamp(30px,3.6vw,46px)" }}>
                Questions before {d.name}.
              </h2>
              <p className="reveal" data-delay="2" style={{ color: "var(--muted)", marginTop: 14, maxWidth: "34ch" }}>
                Can&apos;t find it here? Message us — a real person replies, usually within a few hours.
              </p>
              <a href="https://wa.me/" className="btn btn--dark reveal" data-delay="2" style={{ marginTop: 22 }}>
                <Whatsapp size={16} /> Ask on WhatsApp
              </a>
            </div>
            <div className="qa2__list reveal" data-delay="1">
              {faqs.map((f) => (
                <div className="qa2__item" key={f.q}>
                  <h4>{f.q}</h4>
                  <p>{f.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Cta heading={`Tell us your dates — we'll shape the right ${d.name} stay.`} />
      <Footer />
    </>
  );
}
