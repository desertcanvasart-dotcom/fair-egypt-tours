import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import Cta from "@/components/Cta";
import TourCard from "@/components/TourCard";
import JsonLdScript from "@/components/JsonLdScript";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import { getTourCategory, getTourCategorySlugs, getTours } from "@/lib/cms";
import { site } from "@/lib/data";
import { ArrowRight } from "@/components/icons";

const HERO_FALLBACK =
  "https://images.unsplash.com/photo-1572252009286-268acec5ca0a?auto=format&fit=crop&w=1900&q=85";

export async function generateStaticParams() {
  return (await getTourCategorySlugs()).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const c = await getTourCategory(slug);
  if (!c) return {};
  const metaTitle = c.metaTitle?.trim();
  const description = c.metaDescription?.trim() || c.intro;
  return {
    // Use the meta title exactly as typed (bypass the site title template).
    title: metaTitle ? { absolute: metaTitle } : c.name,
    description,
    alternates: { canonical: `/tours/category/${c.slug}` },
    openGraph: {
      title: metaTitle || `${c.name} | Fair Egypt Tours`,
      description,
      url: `/tours/category/${c.slug}`,
      images: c.heroImage ? [{ url: c.heroImage }] : undefined,
    },
  };
}

export default async function TourCategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const c = await getTourCategory(slug);
  if (!c) notFound();

  const tours = (await getTours()).filter((t) => t.category === c.name);
  const typeSlug = c.type === "Package" ? "packages" : "day-tours";

  const schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: c.metaTitle?.trim() || c.name,
    description: c.metaDescription?.trim() || c.intro,
    ...(c.heroImage ? { image: c.heroImage } : {}),
    url: `${site.url}/tours/category/${c.slug}`,
    ...(tours.length
      ? {
          mainEntity: {
            "@type": "ItemList",
            itemListElement: tours.map((t, i) => ({
              "@type": "ListItem",
              position: i + 1,
              url: `${site.url}/tours/${t.slug}`,
              name: t.title,
            })),
          },
        }
      : {}),
  };

  return (
    <>
      <JsonLdScript data={schema} />
      <BreadcrumbJsonLd
        items={[{ name: "Tours", url: "/tours" }, { name: c.name }]}
      />
      <Header />
      <PageHero
        kicker={c.type || "Tours"}
        title={c.name}
        subtitle={c.intro}
        image={c.heroImage || HERO_FALLBACK}
        crumbs={[
          { label: "Tours", href: "/tours" },
          { label: c.type === "Package" ? "Travel Packages" : "Day Tours", href: `/tours?type=${typeSlug}` },
          { label: c.name },
        ]}
      />

      <section className="sec tours">
        <div className="shell">
          {tours.length > 0 ? (
            <div className="tours-grid">
              {tours.map((t, i) => (
                <TourCard key={t.slug} tour={t} delay={(i % 4) + 1} />
              ))}
            </div>
          ) : (
            <div className="tours-empty">
              <h3 className="subhead">Tours coming soon</h3>
              <p>We&apos;re finalising the {c.name.toLowerCase()}. Tell us your dates and we&apos;ll put together a custom plan.</p>
              <Link href="/#cta" className="btn btn--solid">Get a fair quote <ArrowRight size={16} /></Link>
            </div>
          )}

          {c.body && c.body.length > 0 ? (
            <div className="prose reveal" style={{ maxWidth: "70ch", marginTop: 56 }}>
              {c.body.map((p, i) => <p key={i}>{p}</p>)}
            </div>
          ) : null}
        </div>
      </section>

      <Cta />
      <Footer />
    </>
  );
}
