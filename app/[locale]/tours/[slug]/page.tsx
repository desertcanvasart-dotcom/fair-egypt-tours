import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import Cta from "@/components/Cta";
import TourCard from "@/components/TourCard";
import Gallery from "@/components/Gallery";
import JsonLdScript from "@/components/JsonLdScript";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import { ORG_ID } from "@/components/JsonLd";
import { getTour, getTours, getTourSlugs } from "@/lib/cms";
import { site } from "@/lib/data";
import { Clock, User, Star, BadgeCheck, Check, Plus, ArrowRight, Whatsapp, Pin } from "@/components/icons";

export async function generateStaticParams() {
  return (await getTourSlugs()).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string; slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const t = await getTour(slug);
  if (!t) return {};
  const metaTitle = t.metaTitle?.trim();
  const description = t.metaDescription?.trim() || t.summary;
  return {
    title: metaTitle ? { absolute: metaTitle } : `${t.title} — ${t.place}`,
    description,
    alternates: { canonical: `/tours/${t.slug}` },
    openGraph: {
      title: metaTitle || `${t.title} | Fair Egypt Tours`,
      description,
      url: `/tours/${t.slug}`,
      images: [{ url: t.heroImage }],
    },
  };
}

export default async function TourPage({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { slug } = await params;
  const t = await getTour(slug);
  if (!t) notFound();

  const related = (await getTours()).filter((x) => x.slug !== t.slug).slice(0, 3);

  const schema = {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    name: t.title,
    description: t.summary,
    image: t.heroImage,
    touristType: t.category,
    provider: { "@id": ORG_ID },
    ...(t.itinerary?.length
      ? {
          itinerary: {
            "@type": "ItemList",
            itemListElement: t.itinerary.map((s, i) => ({
              "@type": "ListItem",
              position: i + 1,
              name: `${s.time} — ${s.title}`,
              description: s.text,
            })),
          },
        }
      : {}),
    offers: {
      "@type": "Offer",
      price: String(t.price),
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      url: `${site.url}/tours/${t.slug}`,
    },
  };

  return (
    <>
      <JsonLdScript data={schema} />
      <BreadcrumbJsonLd items={[{ name: "Tours", url: "/tours" }, { name: t.title }]} />
      <Header />
      <PageHero
        kicker={t.category}
        title={t.title}
        subtitle={t.summary}
        image={t.heroImage}
        crumbs={[{ label: "Tours", href: "/tours" }, { label: t.title }]}
        meta={[
          { icon: <Clock size={16} />, label: t.duration },
          { icon: <User size={16} />, label: t.groupSize },
          { icon: <Star size={16} />, label: `${t.rating} (${t.reviewCount})` },
          { icon: <Pin size={16} />, label: t.place },
        ]}
      />

      <section className="sec">
        <div className="shell">
          <div className="article">
            <div className="article__main">
              <h2 className="subhead">Overview</h2>
              <div className="prose">
                {t.overview.map((p, i) => <p key={i}>{p}</p>)}
              </div>

              <h2 className="subhead" style={{ marginTop: 46 }}>Highlights</h2>
              <ul className="hlist">
                {t.highlights.map((h, i) => (
                  <li className="hlist__i" key={h}>
                    <span className="hlist__n">{String(i + 1).padStart(2, "0")}</span>
                    <span className="hlist__t">{h}</span>
                  </li>
                ))}
              </ul>

              <h2 className="subhead" style={{ marginTop: 46 }}>{t.type === "Package" ? "Day-by-day itinerary" : "Itinerary"}</h2>
              <div className="itin">
                {t.itinerary.map((s, i) => (
                  <div className="istop" key={i}>
                    <span className="t">{s.time}</span>
                    <h4>{s.title}</h4>
                    <p>{s.text}</p>
                  </div>
                ))}
              </div>

              <h2 className="subhead" style={{ marginTop: 46 }}>What&apos;s included</h2>
              <div className="iogrid">
                <div className="iocard">
                  <div className="ioh ioh--yes"><BadgeCheck size={16} /> Included</div>
                  <ul className="iolist iolist--yes">
                    {t.included.map((x) => <li key={x}><Check size={16} />{x}</li>)}
                  </ul>
                </div>
                <div className="iocard">
                  <div className="ioh ioh--no"><Plus size={16} /> Optional / not included</div>
                  <ul className="iolist iolist--no">
                    {t.notIncluded.map((x) => <li key={x}><Plus size={16} />{x}</li>)}
                  </ul>
                </div>
              </div>

              <h2 className="subhead" style={{ marginTop: 46 }}>Gallery</h2>
              <Gallery images={t.gallery} label={t.title} />
            </div>

            <aside className="sidecol">
              <div className="sidecard">
                <div className="price-lg">${t.price} <small>/ person</small></div>
                <div className="row" style={{ marginTop: 18 }}><span><Clock size={16} /> Duration</span><b>{t.duration}</b></div>
                <div className="row"><span><User size={16} /> Group</span><b>{t.groupSize}</b></div>
                <div className="row"><span><Star size={16} /> Rating</span><b>{t.rating} / 5</b></div>
                <div className="row"><span><BadgeCheck size={16} /> Languages</span><b>{t.languages}</b></div>
                <Link href="/#cta" className="btn btn--solid">Book / get a quote <ArrowRight size={16} /></Link>
                <a href={site.whatsapp} className="btn btn--outline" style={{ width: "100%", justifyContent: "center", marginTop: 10 }}>
                  <Whatsapp size={16} /> Ask on WhatsApp
                </a>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="sec" style={{ background: "var(--sand)" }}>
        <div className="shell">
          <div className="sec-top">
            <div className="kicker reveal"><i>—</i> <span>More tours</span> <span className="ln" /></div>
            <div className="sec-top__row">
              <h2 className="display reveal" data-delay="1">You might also like.</h2>
              <Link className="btn btn--outline reveal" data-delay="2" href="/tours">All tours <ArrowRight size={16} /></Link>
            </div>
          </div>
          <div className="tours-grid">
            {related.map((x, i) => <TourCard key={x.slug} tour={x} delay={(i % 4) + 1} />)}
          </div>
        </div>
      </section>

      <Cta />
      <Footer />
    </>
  );
}
