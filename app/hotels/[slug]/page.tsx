import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import Cta from "@/components/Cta";
import HotelCard from "@/components/HotelCard";
import JsonLdScript from "@/components/JsonLdScript";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import { getHotel, getHotels, getHotelSlugs } from "@/lib/cms";
import { site } from "@/lib/data";
import { Star, Pin, BadgeCheck, Calendar, User, ArrowRight, Whatsapp } from "@/components/icons";

export async function generateStaticParams() {
  return (await getHotelSlugs()).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
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

export default async function HotelPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const h = await getHotel(slug);
  if (!h) notFound();

  const others = (await getHotels()).filter((x) => x.slug !== h.slug).slice(0, 3);

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
    amenityFeature: h.amenities.map((a) => ({ "@type": "LocationFeatureSpecification", name: a, value: true })),
  };

  return (
    <>
      <JsonLdScript data={schema} />
      <BreadcrumbJsonLd items={[{ name: "Destinations", url: "/destinations" }, { name: h.name }]} />
      <Header />
      <PageHero
        kicker={`${h.stars}-Star · ${h.category}`}
        title={h.name}
        subtitle={`${h.area}, ${h.city}`}
        image={h.image}
        crumbs={[{ label: "Destinations", href: "/destinations" }, { label: h.name }]}
        meta={[
          { icon: <Star size={16} />, label: `${h.rating} (${h.reviewCount.toLocaleString()} reviews)` },
          { icon: <Pin size={16} />, label: h.city },
          { icon: <BadgeCheck size={16} />, label: `From $${h.pricePerNight} / night` },
        ]}
      />

      <section className="sec">
        <div className="shell">
          <div className="article">
            <div className="article__main">
              <h2 className="subhead">About this hotel</h2>
              <div className="prose">
                {h.description.map((p, i) => <p key={i}>{p}</p>)}
              </div>

              <h2 className="subhead" style={{ marginTop: 46 }}>Amenities</h2>
              <div className="flist flist--2">
                {h.amenities.map((a) => (
                  <div className="fitem" key={a}>
                    <span className="fi"><BadgeCheck size={20} /></span>
                    <div><b>{a}</b></div>
                  </div>
                ))}
              </div>

              <h2 className="subhead" style={{ marginTop: 46 }}>Gallery</h2>
              <figure style={{ margin: 0 }}>
                <div className="gallery">
                  {h.gallery.map((g, i) => (
                    <div key={i} role="img" aria-label={`${h.name} — photo ${i + 1}`} className={`g${i === 0 ? " g--big" : ""}`} style={{ backgroundImage: `url('${g}')` }} />
                  ))}
                </div>
                <figcaption className="sr-only">Photo gallery of {h.name}, {h.city}.</figcaption>
              </figure>
            </div>

            <aside className="sidecol">
              <form className="sidecard" action="/#cta">
                <div className="price-lg">${h.pricePerNight} <small>/ night</small></div>
                <div className="field" style={{ marginTop: 18 }}>
                  <label htmlFor="checkin">Check-in</label>
                  <div className="ctl"><Calendar size={18} /><input id="checkin" name="checkin" type="text" placeholder="Add date" /></div>
                </div>
                <div className="field">
                  <label htmlFor="checkout">Check-out</label>
                  <div className="ctl"><Calendar size={18} /><input id="checkout" name="checkout" type="text" placeholder="Add date" /></div>
                </div>
                <div className="field">
                  <label htmlFor="guests">Guests</label>
                  <div className="ctl">
                    <User size={18} />
                    <select id="guests" name="guests" defaultValue="2 adults">
                      <option>2 adults</option><option>1 adult</option><option>Family</option><option>Group</option>
                    </select>
                  </div>
                </div>
                <Link href="/#cta" className="btn btn--solid">Request to book <ArrowRight size={16} /></Link>
                <a href={site.whatsapp} className="btn btn--outline" style={{ width: "100%", justifyContent: "center", marginTop: 10 }}>
                  <Whatsapp size={16} /> Ask on WhatsApp
                </a>
                <p style={{ fontSize: 12, color: "var(--muted)", textAlign: "center", marginTop: 12 }}>
                  No charge to enquire · We confirm availability &amp; price first
                </p>
              </form>
            </aside>
          </div>
        </div>
      </section>

      <section className="sec" style={{ background: "var(--sand)" }}>
        <div className="shell">
          <div className="sec-top">
            <div className="kicker reveal"><i>—</i> <span>More stays</span> <span className="ln" /></div>
            <div className="sec-top__row">
              <h2 className="display reveal" data-delay="1">Other hotels you might like.</h2>
              <Link className="btn btn--outline reveal" data-delay="2" href="/destinations">Browse destinations <ArrowRight size={16} /></Link>
            </div>
          </div>
          <div className="hgrid">
            {others.map((x, i) => <HotelCard key={x.slug} hotel={x} delay={(i % 3) + 1} />)}
          </div>
        </div>
      </section>

      <Cta />
      <Footer />
    </>
  );
}
