import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Cta from "@/components/Cta";
import HotelCard from "@/components/HotelCard";
import JsonLdScript from "@/components/JsonLdScript";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import { getHotel, getHotels, getHotelSlugs, getPage } from "@/lib/cms";
import { site } from "@/lib/data";
import { Star, Pin, ArrowRight, Check, Whatsapp } from "@/components/icons";
import { getLocale } from "@/lib/locale";
import { localeHref } from "@/lib/i18n";
import { t } from "@/lib/messages";

export async function generateStaticParams() {
  return (await getHotelSlugs()).map((slug) => ({ slug }));
}

// The hotels collection can be empty (no prerendered paths). Render on request
// so an unknown/removed slug resolves to a clean 404 instead of a static-render
// error, and so it still works once real hotels are added back.
export const dynamic = "force-dynamic";

export async function generateMetadata({ params }: { params: Promise<{ locale: string; slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const h = await getHotel(slug);
  if (!h) return {};
  return {
    title: `${h.name} — ${h.city}`,
    description: h.description[0],
    alternates: { canonical: `/hotels/${h.slug}` },
    openGraph: {
      title: `${h.name}, ${h.city} | Fair Egypt Tours`,
      description: h.description[0],
      url: `/hotels/${h.slug}`,
      images: [{ url: h.image }],
    },
  };
}

export default async function HotelPage({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { slug } = await params;
  const h = await getHotel(slug);
  if (!h) notFound();

  const locale = await getLocale();
  const m = t(locale).hotels;
  const cmsSite = await getPage("site");
  const wa = cmsSite.whatsapp;
  const hasWa = !!wa && /\d{5,}/.test(wa);

  // Nearby hotels first (same destination), then fill from the rest.
  const allOthers = (await getHotels()).filter((x) => x.slug !== h.slug);
  const others = [
    ...allOthers.filter((x) => x.destination === h.destination),
    ...allOthers.filter((x) => x.destination !== h.destination),
  ].slice(0, 3);

  const schema = {
    "@context": "https://schema.org",
    "@type": "Hotel",
    name: h.name,
    description: h.description[0],
    image: h.image,
    url: `${site.url}/hotels/${h.slug}`,
    starRating: { "@type": "Rating", ratingValue: h.stars },
    priceRange: "$$",
    address: { "@type": "PostalAddress", addressLocality: h.city, addressCountry: "EG" },
    aggregateRating: { "@type": "AggregateRating", ratingValue: h.rating, reviewCount: h.reviewCount },
    amenityFeature: h.amenities.map((a) => ({ "@type": "LocationFeatureSpecification", name: a, value: true })),
  };

  return (
    <>
      <JsonLdScript data={schema} />
      <BreadcrumbJsonLd items={[{ name: "Destinations", url: "/destinations" }, { name: h.name }]} />
      <Header />

      {/* Immersive hero */}
      <section className="htl-hero" style={{ backgroundImage: `linear-gradient(180deg, rgba(7,28,40,.15) 0%, rgba(7,28,40,.72) 78%, rgba(7,28,40,.9) 100%), url('${h.image}')` }}>
        <div className="shell htl-hero__grid">
          <nav className="htl-hero__crumbs" aria-label="Breadcrumb">
            <Link href={localeHref(locale, "/destinations")}>{m.destinations}</Link>
            <span>/</span>
            <Link href={localeHref(locale, `/destinations/${h.destination ?? ""}`)}>{h.city}</Link>
            <span>/</span>
            <b>{h.name}</b>
          </nav>

          <div className="htl-hero__in">
            <div className="htl-hero__kick">
              <span className="htl-stars" aria-label={`${h.stars} star`}>
                {Array.from({ length: h.stars }).map((_, i) => <Star key={i} size={14} />)}
              </span>
              <span>{h.category}</span>
            </div>
            <h1 className="display">{h.name}</h1>
            <p className="htl-hero__loc"><Pin size={16} /> {h.area}, {h.city}</p>
          </div>

          <div className="htl-hero__rating" aria-label={`Rated ${h.rating} out of 5`}>
            <b>{h.rating}</b>
            <span>{m.guestRating}</span>
            <small>{h.reviewCount} {m.reviews}</small>
          </div>
        </div>
      </section>

      {/* Overlapping facts bar */}
      <div className="shell">
        <div className="htl-bar reveal">
          <div className="htl-bar__facts">
            <div><span>{m.rating}</span><b>{h.rating} <i>/ 5</i></b></div>
            <div><span>{m.classLabel}</span><b>{h.stars}-star {h.category}</b></div>
            <div><span>{m.where}</span><b>{h.area}, {h.city}</b></div>
          </div>
          {hasWa ? (
            <a href={wa} target="_blank" rel="noopener" className="htl-bar__wa">
              <Whatsapp size={17} /> {m.askWhatsapp}
            </a>
          ) : (
            <Link href={localeHref(locale, "/booking")} className="btn btn--solid htl-bar__cta">
              {m.planStay} <ArrowRight size={16} />
            </Link>
          )}
        </div>
      </div>

      {/* Body */}
      <section className="sec htl-sec">
        <div className="shell">
          <div className="htl-wrap">
            <div className="htl-main">
              <div className="kicker reveal"><i>—</i> <span>{m.theStay}</span></div>
              <p className="htl-lede reveal" data-delay="1">{h.description[0]}</p>
              <div className="prose reveal" data-delay="2">
                {h.description.slice(1).map((p, i) => <p key={i}>{p}</p>)}
              </div>

              <h2 className="htl-h2 reveal">{m.whatsHere}</h2>
              <ul className="htl-amen reveal" data-delay="1">
                {h.amenities.map((a) => (
                  <li key={a}><span className="htl-amen__ic"><Check size={14} /></span>{a}</li>
                ))}
              </ul>

              <h2 className="htl-h2 reveal">{m.thePlace}</h2>
              <div className="htl-gal reveal" data-delay="1">
                {h.gallery.slice(0, 5).map((src, i) => (
                  <figure key={i} className={`htl-gal__c htl-gal__c--${i}`}>
                    <img src={src} alt={`${h.name} — view ${i + 1}`} loading="lazy" />
                  </figure>
                ))}
              </div>
            </div>

            <aside className="htl-side">
              <div id="reserve" className="htl-side__sticky">
                <div className="htl-stay">
                  <h4 className="htl-stay__h">{m.interested}</h4>
                  <p className="htl-stay__lede">
                    {(hasWa ? m.messageWa : m.sendEnquiry).replace("{name}", h.name)}
                  </p>
                  {hasWa ? (
                    <a href={wa} target="_blank" rel="noopener" className="htl-stay__wa">
                      <Whatsapp size={17} /> {m.chatWa}
                    </a>
                  ) : (
                    <Link href={localeHref(locale, "/booking")} className="btn btn--solid htl-stay__enq">
                      {m.enquireStay} <ArrowRight size={16} />
                    </Link>
                  )}
                  <p className="htl-stay__fine"><Check size={13} /> {m.noObligation}</p>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {others.length > 0 ? (
        <section className="sec" style={{ background: "var(--sand)" }}>
          <div className="shell">
            <div className="sec-top">
              <div className="kicker reveal"><i>—</i> <span>{m.moreStays}</span> <span className="ln" /></div>
              <div className="sec-top__row">
                <h2 className="display reveal" data-delay="1">{m.otherPlaces}</h2>
                <Link className="btn btn--outline reveal" data-delay="2" href={localeHref(locale, "/destinations")}>{m.browseDest} <ArrowRight size={16} /></Link>
              </div>
            </div>
            <div className="hgrid">
              {others.map((x, i) => <HotelCard key={x.slug} hotel={x} delay={(i % 3) + 1} />)}
            </div>
          </div>
        </section>
      ) : null}

      <Cta />
      <Footer />
    </>
  );
}
