import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import Cta from "@/components/Cta";
import DestinationCard from "@/components/DestinationCard";
import { getDestinations } from "@/lib/cms";

export const metadata: Metadata = {
  title: "Egypt Destinations & Travel Guides",
  description:
    "Explore Egypt region by region — Cairo & Giza, Luxor, Aswan, and the Red Sea. In-depth travel guides with history, how to get there, where to stay, things to do, and the best time to visit.",
  alternates: { canonical: "/destinations" },
  openGraph: {
    title: "Egypt Destinations & Travel Guides | Fair Egypt Tours",
    description:
      "In-depth guides to Cairo, Luxor, Aswan and the Red Sea — history, where to stay, things to do, and the best time to visit.",
    url: "/destinations",
  },
};

const HERO =
  "https://images.unsplash.com/photo-1568322445389-f64ac2515020?auto=format&fit=crop&w=1900&q=85";

export default async function DestinationsPage() {
  const destinations = await getDestinations();
  return (
    <>
      <Header />
      <PageHero
        kicker="Travel Guides"
        title={<>Explore Egypt, <em>region by region.</em></>}
        subtitle="Honest, practical travel guides to Egypt's best regions — history, how to get there, where to stay, what to do, and the best time to go. We handle the routing and comfort behind the scenes."
        image={HERO}
        crumbs={[{ label: "Destinations" }]}
      />

      <section className="sec dest">
        <div className="shell">
          <div className="dgrid">
            {destinations.map((d, i) => (
              <DestinationCard key={d.slug} d={d} index={i} />
            ))}
          </div>
        </div>
      </section>

      <Cta />
      <Footer />
    </>
  );
}
