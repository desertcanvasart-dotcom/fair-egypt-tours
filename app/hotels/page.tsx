import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import Cta from "@/components/Cta";
import HotelCard from "@/components/HotelCard";
import { getHotels, categoriesOf } from "@/lib/cms";

export const metadata: Metadata = {
  title: "Egypt Hotels — Book Fair-Priced Stays",
  description:
    "Hand-picked Egypt hotels across Cairo, Giza, Luxor, Aswan and the Red Sea — from value stays to Nile-view luxury. Fair, transparent nightly prices and easy booking.",
  alternates: { canonical: "/hotels" },
  openGraph: {
    title: "Egypt Hotels — Book Fair-Priced Stays | Fair Egypt Tours",
    description:
      "Hand-picked hotels across Egypt, from value to Nile-view luxury. Fair nightly prices and easy booking.",
    url: "/hotels",
  },
};

const HERO =
  "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1900&q=85";

export default async function HotelsPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>;
}) {
  const hotels = await getHotels();
  const categories = categoriesOf(hotels);
  const { category } = await searchParams;
  const active = category && categories.includes(category) ? category : "All";
  const list = active === "All" ? hotels : hotels.filter((h) => h.category === active);

  return (
    <>
      <Header />
      <PageHero
        kicker="Hotels & Stays"
        title={<>Where to stay, <em>fairly priced.</em></>}
        subtitle="Hand-picked hotels we'd actually recommend — from clean value stays to Nile-view luxury. Clear nightly prices, and we'll book any of them as part of your trip."
        image={HERO}
        crumbs={[{ label: "Hotels" }]}
      />

      <section className="sec">
        <div className="shell">
          <div className="filters">
            {categories.map((c) => (
              <a
                key={c}
                href={c === "All" ? "/hotels" : `/hotels?category=${encodeURIComponent(c)}`}
                className={c === active ? "is-active" : ""}
              >
                {c}
              </a>
            ))}
          </div>

          <div className="hgrid">
            {list.map((h, i) => (
              <HotelCard key={h.slug} hotel={h} delay={(i % 3) + 1} />
            ))}
          </div>
        </div>
      </section>

      <Cta />
      <Footer />
    </>
  );
}
