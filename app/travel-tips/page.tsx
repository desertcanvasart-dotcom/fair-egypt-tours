import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import Cta from "@/components/Cta";
import TipCard from "@/components/TipCard";
import { tipCategories } from "@/lib/tips";
import { getTips } from "@/lib/cms";

export const metadata: Metadata = {
  title: "Egypt Travel Tips & Practical Advice",
  description:
    "Honest, practical Egypt travel tips: the best time to visit, how to plan a first trip, visa guidance, what to pack, and realistic budgets. Everything you need to travel Egypt with confidence.",
  alternates: { canonical: "/travel-tips" },
  openGraph: {
    title: "Egypt Travel Tips & Practical Advice | Fair Egypt Tours",
    description:
      "Best time to visit, first-trip planning, visas, packing, and budgets — practical Egypt travel advice.",
    url: "/travel-tips",
  },
};

const HERO =
  "https://images.unsplash.com/photo-1578321272176-b7bbc0679853?auto=format&fit=crop&w=1900&q=85";

export default async function TravelTipsPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>;
}) {
  const tips = await getTips();
  const { category } = await searchParams;
  const active = category && tipCategories.includes(category) ? category : "All";
  const list = active === "All" ? tips : tips.filter((t) => t.category === active);

  return (
    <>
      <Header />
      <PageHero
        kicker="Travel Tips"
        title={<>Travel Egypt with <em>confidence.</em></>}
        subtitle="Straight-talking, practical advice for planning your Egypt trip — when to go, how to plan it, what it costs, and what to pack. No fluff, just what actually helps."
        image={HERO}
        crumbs={[{ label: "Travel Tips" }]}
      />

      <section className="sec">
        <div className="shell">
          <div className="filters">
            {tipCategories.map((c) => (
              <a
                key={c}
                href={c === "All" ? "/travel-tips" : `/travel-tips?category=${encodeURIComponent(c)}`}
                className={c === active ? "is-active" : ""}
              >
                {c}
              </a>
            ))}
          </div>

          <div className="bgrid">
            {list.map((t, i) => (
              <TipCard key={t.slug} tip={t} delay={(i % 3) + 1} />
            ))}
          </div>
        </div>
      </section>

      <Cta />
      <Footer />
    </>
  );
}
