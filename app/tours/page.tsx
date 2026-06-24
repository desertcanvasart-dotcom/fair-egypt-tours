import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import Cta from "@/components/Cta";
import TourCard from "@/components/TourCard";
import { getTours, categoriesOf } from "@/lib/cms";
import { ArrowRight } from "@/components/icons";

export const metadata: Metadata = {
  title: "Egypt Tours & Day Trips",
  description:
    "Browse fair-priced Egypt day tours and travel packages — Pyramids & Giza, Luxor, Aswan, Nile cruises, and more. Every tour shows its real price up front, with licensed guides and private transport.",
  alternates: { canonical: "/tours" },
  openGraph: {
    title: "Egypt Tours & Day Trips | Fair Egypt Tours",
    description:
      "Fair-priced Egypt day tours and travel packages with licensed guides, private transport, and honest pricing.",
    url: "/tours",
  },
};

const HERO =
  "https://images.unsplash.com/photo-1572252009286-268acec5ca0a?auto=format&fit=crop&w=1900&q=85";

// URL slug -> stored type value.
const TYPE_BY_SLUG: Record<string, string> = { "day-tours": "Day Tour", packages: "Package" };

export default async function ToursPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string; type?: string }>;
}) {
  const allTours = await getTours();
  const { category, type } = await searchParams;

  const typeValue = type ? TYPE_BY_SLUG[type] ?? null : null;
  const byType = typeValue ? allTours.filter((t) => t.type === typeValue) : allTours;

  const categories = categoriesOf(byType);
  const active = category && categories.includes(category) ? category : "All";
  const list = active === "All" ? byType : byType.filter((t) => t.category === active);

  const typeLabel = typeValue === "Day Tour" ? "Day Tours" : typeValue === "Package" ? "Travel Packages" : null;
  const typeBase = typeValue ? `/tours?type=${type}` : "/tours";

  const typeTabs = [
    { slug: "", label: "All experiences" },
    { slug: "day-tours", label: "Day Tours" },
    { slug: "packages", label: "Travel Packages" },
  ];

  const catHref = (c: string) =>
    c === "All"
      ? typeBase
      : `/tours?${typeValue ? `type=${type}&` : ""}category=${encodeURIComponent(c)}`;

  return (
    <>
      <Header />
      <PageHero
        kicker={typeLabel ?? "Our Tours"}
        title={typeLabel ? <>{typeLabel}, <em>fairly priced.</em></> : <>Fair-priced trips, <em>fully organised.</em></>}
        subtitle="Every tour shows its real price up front, with a clear list of what's included. Licensed guides, private air-conditioned transport, and no hidden costs."
        image={HERO}
        crumbs={typeLabel ? [{ label: "Tours", href: "/tours" }, { label: typeLabel }] : [{ label: "Tours" }]}
      />

      <section className="sec tours">
        <div className="shell">
          <div className="filters filters--type">
            {typeTabs.map((tt) => {
              const isActive = tt.slug ? type === tt.slug : !typeValue;
              return (
                <a key={tt.slug || "all"} href={tt.slug ? `/tours?type=${tt.slug}` : "/tours"} className={isActive ? "is-active" : ""}>
                  {tt.label}
                </a>
              );
            })}
          </div>

          {categories.length > 1 ? (
            <div className="filters">
              {categories.map((c) => (
                <a key={c} href={catHref(c)} className={c === active ? "is-active" : ""}>{c}</a>
              ))}
            </div>
          ) : null}

          {list.length > 0 ? (
            <div className="tours-grid">
              {list.map((t, i) => (
                <TourCard key={t.slug} tour={t} delay={(i % 4) + 1} />
              ))}
            </div>
          ) : (
            <div className="tours-empty">
              <h3 className="subhead">No {typeLabel ?? "tours"} here yet</h3>
              <p>We&apos;re adding new {typeLabel ?? "experiences"} all the time. Tell us your dates and we&apos;ll plan a custom trip for you.</p>
              <Link href="/#cta" className="btn btn--solid">Get a fair quote <ArrowRight size={16} /></Link>
            </div>
          )}
        </div>
      </section>

      <Cta />
      <Footer />
    </>
  );
}
