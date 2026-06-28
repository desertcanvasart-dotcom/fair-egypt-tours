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
import { getDestination, getDestinationSlugs, getTour, getTours, getHotels, getPage } from "@/lib/cms";
import { getLocale } from "@/lib/locale";
import { localize } from "@/lib/localize";
import { localeHref } from "@/lib/i18n";
import { t } from "@/lib/messages";
import { destinationsI18n } from "@/lib/destinations-i18n";
import { toursI18n } from "@/lib/tours-i18n";
import { homeTranslations } from "@/lib/home-i18n";
import { Pin, Clock, BadgeCheck, ArrowRight, Whatsapp } from "@/components/icons";

const fill = (s: string, vars: Record<string, string | number> = {}) =>
  Object.entries(vars).reduce((acc, [k, v]) => acc.replaceAll(`{${k}}`, String(v)), s);

export function generateStaticParams() {
  return getDestinationSlugs().then((slugs) => slugs.map((slug) => ({ slug })));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string; slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const raw = await getDestination(slug);
  if (!raw) return {};
  const locale = await getLocale();
  const d = localize(raw, locale === "en" ? undefined : destinationsI18n[slug]?.[locale]);
  const metaDesc = d.metaDescription ?? d.summary ?? d.intro;
  const metaTitle = d.metaTitle?.trim();
  const url = localeHref(locale, `/destinations/${d.slug}`);
  return {
    title: metaTitle ? { absolute: metaTitle } : `${d.name} Travel Guide`,
    description: metaDesc,
    alternates: { canonical: url },
    openGraph: {
      title: `${d.name} | Fair Egypt Tours`,
      description: metaDesc,
      url,
      images: [{ url: d.heroImage }],
    },
  };
}

export default async function DestinationPage({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { slug } = await params;
  const raw = await getDestination(slug);
  if (!raw) notFound();

  const locale = await getLocale();
  const m = t(locale).dest;
  const d = localize(raw, locale === "en" ? undefined : destinationsI18n[slug]?.[locale]);
  const NM = (s: string) => fill(s, { name: d.name });
  const site = await getPage("site");

  // Tours wired to this destination: curated tourSlugs first, then auto-matched
  // by destination — de-duped, capped to 4, and localized for the active locale.
  const localizeTour = (x: NonNullable<Awaited<ReturnType<typeof getTour>>>) =>
    localize(x, locale === "en" ? undefined : toursI18n[x.slug]?.[locale]);
  const slugTours = (await Promise.all((d.tourSlugs ?? []).map((s) => getTour(s)))).filter(Boolean);
  const destTours = (await getTours()).filter((x) => x.destination === raw.name);
  const relatedTours = Array.from(
    new Map([...slugTours, ...destTours].filter(Boolean).map((x) => [x!.slug, x!])).values()
  )
    .slice(0, 4)
    .map((x) => localizeTour(x!));

  // idealStay: match on the English record (stable labels), show the localized value.
  const idealIdx = raw.quickFacts.findIndex((f) => /stay|days/i.test(f.label));
  const idealStay = (idealIdx >= 0 ? d.quickFacts[idealIdx]?.value : undefined) ?? "2–3 days";

  // Real hotel suggestions for this destination, from the hotels collection.
  const allHotels = await getHotels();
  const cityHotels = allHotels
    .filter((h) =>
      h.destination
        ? h.destination === d.slug || (h.alsoIn?.includes(d.slug) ?? false)
        : raw.name.toLowerCase().includes(h.city.toLowerCase())
    )
    .slice(0, 4);

  const pool = [d.gallery[0], d.gallery[1], d.gallery[2], d.heroImage, d.cardImage].filter(Boolean) as string[];

  const know = [
    { t: m.knowGettingThere, p: d.gettingThere[0] },
    { t: m.knowWhenToGo, p: d.bestTime },
    { t: m.knowGuide, p: NM(m.knowGuideText) },
    { t: m.knowHistory, p: d.history[0] },
  ];

  const faqs = d.faqs?.length ? d.faqs : [];

  const destSchema = {
    "@context": "https://schema.org",
    "@type": "TouristDestination",
    name: d.name,
    description: d.intro,
    image: d.heroImage,
    address: { "@type": "PostalAddress", addressRegion: d.region, addressCountry: "EG" },
    touristType: "Cultural & historical travellers",
    ...(d.thingsToDo?.length
      ? { includesAttraction: d.thingsToDo.map((x) => ({ "@type": "TouristAttraction", name: x.title, description: x.text })) }
      : {}),
  };
  const faqSchema = faqs.length
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
      }
    : null;

  return (
    <>
      <JsonLdScript data={destSchema} />
      {faqSchema ? <JsonLdScript data={faqSchema} /> : null}
      <BreadcrumbJsonLd items={[{ name: "Destinations", url: "/destinations" }, { name: d.name }]} />
      <Header />

      <PageHero
        kicker={m.guide}
        title={d.name}
        subtitle={d.intro}
        image={d.heroImage}
        crumbs={[{ label: t(locale).nav.destinations, href: localeHref(locale, "/destinations") }, { label: d.name }]}
        meta={[
          { icon: <Pin size={16} />, label: d.region },
          { icon: <Clock size={16} />, label: fill(m.metaIdeal, { v: idealStay }) },
          { icon: <BadgeCheck size={16} />, label: fill(m.metaTours, { n: d.tourCount }) },
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
              <div className="kicker reveal"><i>—</i> <span>{NM(m.why)}</span> <span className="ln" /></div>
              <div className="reveal" data-delay="1" style={{ marginTop: 18 }}>
                <Prose sections={d.overview} />
              </div>
            </div>
            <aside className="sidecol">
              <div className="sidecard reveal">
                <h4>{NM(m.planTitle)}</h4>
                <div className="row"><span><Clock size={16} /> {m.idealStay}</span><b>{idealStay}</b></div>
                <div className="row"><span><Pin size={16} /> {m.region}</span><b>{d.region}</b></div>
                <div className="row"><span><BadgeCheck size={16} /> {m.toursWord}</span><b>{fill(m.available, { n: d.tourCount })}</b></div>
                <Link href={localeHref(locale, "/booking")} className="btn btn--solid">{m.tailored} <ArrowRight size={16} /></Link>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Things to do — expanding accordion gallery */}
      <section className="sec" style={{ background: "var(--sand)" }}>
        <div className="shell">
          <div className="sec-top">
            <div className="kicker reveal"><i>—</i> <span>{m.thingsKicker}</span> <span className="ln" /></div>
            <div className="sec-top__row">
              <h2 className="display reveal" data-delay="1">{NM(m.thingsTitle)}</h2>
              <p className="reveal" data-delay="2">{m.thingsSub}</p>
            </div>
          </div>
          <div className="expo reveal" data-count={d.thingsToDo.length}>
            {d.thingsToDo.map((x, i) => (
              <article
                key={x.title}
                className={`expo__p${i === 0 ? " is-open" : ""}`}
                tabIndex={0}
                aria-label={x.title}
                style={{ backgroundImage: `url('${x.image ?? pool[i % pool.length]}')` }}
              >
                <span className="expo__rail">
                  <i>{String(i + 1).padStart(2, "0")}</i>
                  <b>{x.title}</b>
                </span>
                <div className="expo__card">
                  <span className="expo__k">{String(i + 1).padStart(2, "0")} · {d.name}</span>
                  <h3>{x.title}</h3>
                  <p>{x.text}</p>
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
              <div className="kicker"><i>—</i> <span>{m.durationKicker}</span> <span className="ln" /></div>
              <h2>{m.durationTitle}</h2>
              <p>{NM(m.durationText)}</p>
              <Link href={localeHref(locale, "/booking")} className="d-cta">{m.durationCta} <ArrowRight size={16} /></Link>
            </div>
            <div className="d-stay">
              <span className="d-stay__lab">{m.weRecommend}</span>
              <b>{idealStay}</b>
              <span className="d-stay__sub">{m.toSee}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Where to stay — areas + real hotels */}
      <section className="sec" style={{ background: "var(--sand)" }}>
        <div className="shell">
          <div className="sec-top">
            <div className="kicker reveal"><i>—</i> <span>{m.stayKicker}</span> <span className="ln" /></div>
            <div className="sec-top__row">
              <h2 className="display reveal" data-delay="1">{m.stayTitle}</h2>
              <p className="reveal" data-delay="2">{m.staySub}</p>
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
              <h3 className="subhead reveal" style={{ marginTop: 52 }}>{NM(m.stayReal)}</h3>
              <div className="deststay">
                {cityHotels.map((h, i) => <HotelCard key={h.slug} hotel={h} delay={(i % 5) + 1} />)}
              </div>
            </>
          ) : null}
        </div>
      </section>

      {/* Tours wired to this destination */}
      {relatedTours.length > 0 ? (
        <section className="sec">
          <div className="shell">
            <div className="sec-top">
              <div className="kicker reveal"><i>—</i> <span>{NM(m.toursInKicker)}</span> <span className="ln" /></div>
              <div className="sec-top__row">
                <h2 className="display reveal" data-delay="1">{m.toursInTitle}</h2>
                <Link className="btn btn--outline reveal" data-delay="2" href={localeHref(locale, "/tours")}>{m.allTours} <ArrowRight size={16} /></Link>
              </div>
            </div>

            <div className="tours-grid">
              {relatedTours.map((x, i) => x && <TourCard key={x.slug} tour={x} delay={(i % 4) + 1} />)}
            </div>
          </div>
        </section>
      ) : null}

      {/* Good to know — photo + list */}
      <section className="sec" style={{ background: "var(--sand)" }}>
        <div className="shell">
          <div className="sec-top" style={{ marginBottom: 36 }}>
            <div className="kicker reveal"><i>—</i> <span>{m.knowKicker}</span> <span className="ln" /></div>
            <div className="sec-top__row">
              <h2 className="display reveal" data-delay="1">{m.knowTitle}</h2>
              <p className="reveal" data-delay="2">{m.knowSub}</p>
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
          <h2 className="subhead reveal">{NM(m.pictures)}</h2>
          <div className="reveal">
            <Gallery images={d.gallery} label={d.name} />
          </div>
        </div>
      </section>

      {/* FAQ */}
      {faqs.length > 0 ? (
        <section className="sec" style={{ background: "var(--sand)" }}>
          <div className="shell">
            <div className="qa2">
              <div className="qa2__intro">
                <div className="kicker reveal"><i>—</i> <span>{m.faqKicker}</span> <span className="ln" /></div>
                <h2 className="display reveal" data-delay="1" style={{ marginTop: 16, fontSize: "clamp(30px,3.6vw,46px)" }}>
                  {NM(m.faqTitle)}
                </h2>
                <p className="reveal" data-delay="2" style={{ color: "var(--muted)", marginTop: 14, maxWidth: "34ch" }}>
                  {m.faqSub}
                </p>
                <a href={site.whatsapp} className="btn btn--dark reveal" data-delay="2" style={{ marginTop: 22 }}>
                  <Whatsapp size={16} /> {m.faqWhatsapp}
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
      ) : null}

      <Cta heading={NM(m.ctaHeading)} text={locale === "en" ? undefined : homeTranslations[locale].cta.text} />
      <Footer />
    </>
  );
}
