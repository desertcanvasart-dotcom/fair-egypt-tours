import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import Cta from "@/components/Cta";
import TourCard from "@/components/TourCard";
import { getTours, categoriesOf } from "@/lib/cms";

export const metadata: Metadata = {
  title: "Egypt Tours & Day Trips",
  description:
    "Browse fair-priced Egypt tours and day trips — Pyramids & Giza, Luxor, Aswan, Nile cruises, and more. Every tour shows its real price up front, with licensed guides and private transport.",
  alternates: { canonical: "/tours" },
  openGraph: {
    title: "Egypt Tours & Day Trips | Fair Egypt Tours",
    description:
      "Fair-priced Egypt tours with licensed guides, private transport, and honest pricing. Pyramids, Luxor, Aswan, Nile cruises and more.",
    url: "/tours",
  },
};

const HERO =
  "https://images.unsplash.com/photo-1572252009286-268acec5ca0a?auto=format&fit=crop&w=1900&q=85";

export default async function ToursPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>;
}) {
  const tours = await getTours();
  const categories = categoriesOf(tours);
  const { category } = await searchParams;
  const active = category && categories.includes(category) ? category : "All";
  const list = active === "All" ? tours : tours.filter((t) => t.category === active);

  return (
    <>
      <Header />
      <PageHero
        kicker="Our Tours"
        title={<>Fair-priced trips, <em>fully organised.</em></>}
        subtitle="Every tour shows its real price up front, with a clear list of what's included. Licensed guides, private air-conditioned transport, and no hidden costs."
        image={HERO}
        crumbs={[{ label: "Tours" }]}
      />

      <section className="sec tours">
        <div className="shell">
          <div className="filters">
            {categories.map((c) => (
              <a
                key={c}
                href={c === "All" ? "/tours" : `/tours?category=${encodeURIComponent(c)}`}
                className={c === active ? "is-active" : ""}
              >
                {c}
              </a>
            ))}
          </div>

          <div className="tours-grid">
            {list.map((t, i) => (
              <TourCard key={t.slug} tour={t} delay={(i % 4) + 1} />
            ))}
          </div>
        </div>
      </section>

      <Cta />
      <Footer />
    </>
  );
}
