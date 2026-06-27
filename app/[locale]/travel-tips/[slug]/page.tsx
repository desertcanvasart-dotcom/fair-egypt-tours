import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import Cta from "@/components/Cta";
import Prose from "@/components/Prose";
import TipCard from "@/components/TipCard";
import JsonLdScript from "@/components/JsonLdScript";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import { ORG_ID } from "@/components/JsonLd";
import { getTip, getTips, getTipSlugs } from "@/lib/cms";
import { site } from "@/lib/data";
import { Clock, Calendar, ArrowRight } from "@/components/icons";

export async function generateStaticParams() {
  return (await getTipSlugs()).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string; slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const t = await getTip(slug);
  if (!t) return {};
  return {
    title: t.title,
    description: t.excerpt,
    alternates: { canonical: `/travel-tips/${t.slug}` },
    openGraph: {
      title: `${t.title} | Fair Egypt Tours`,
      description: t.excerpt,
      url: `/travel-tips/${t.slug}`,
      type: "article",
      images: [{ url: t.image }],
    },
  };
}

export default async function TipPage({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { slug } = await params;
  const t = await getTip(slug);
  if (!t) notFound();

  const related = (await getTips()).filter((x) => x.slug !== t.slug).slice(0, 3);

  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: t.title,
    description: t.excerpt,
    image: t.image,
    author: { "@id": ORG_ID },
    publisher: { "@id": ORG_ID },
    mainEntityOfPage: `${site.url}/travel-tips/${t.slug}`,
  };

  return (
    <>
      <JsonLdScript data={schema} />
      <BreadcrumbJsonLd items={[{ name: "Travel Tips", url: "/travel-tips" }, { name: t.title }]} />
      <Header />
      <PageHero
        kicker={`Travel Tips · ${t.category}`}
        title={t.title}
        subtitle={t.excerpt}
        image={t.image}
        crumbs={[{ label: "Travel Tips", href: "/travel-tips" }, { label: t.title }]}
        meta={[
          { icon: <Clock size={16} />, label: t.readTime },
          { icon: <Calendar size={16} />, label: `Updated ${t.updated}` },
        ]}
      />

      <section className="sec">
        <div className="shell">
          <div style={{ maxWidth: 760, margin: "0 auto" }}>
            <Prose sections={t.body} />
          </div>
        </div>
      </section>

      <section className="sec" style={{ background: "var(--sand)", paddingTop: 0 }}>
        <div className="shell" style={{ paddingTop: "clamp(72px,9vw,120px)" }}>
          <div className="sec-top">
            <div className="kicker reveal"><i>—</i> <span>More travel tips</span> <span className="ln" /></div>
            <div className="sec-top__row">
              <h2 className="display reveal" data-delay="1">Keep planning.</h2>
              <Link className="btn btn--outline reveal" data-delay="2" href="/travel-tips">All tips <ArrowRight size={16} /></Link>
            </div>
          </div>
          <div className="bgrid">
            {related.map((x, i) => <TipCard key={x.slug} tip={x} delay={(i % 3) + 1} />)}
          </div>
        </div>
      </section>

      <Cta />
      <Footer />
    </>
  );
}
