import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import Cta from "@/components/Cta";
import HotelCard from "@/components/HotelCard";
import { getHotels } from "@/lib/cms";
import { ArrowRight } from "@/components/icons";

// Order and labels for the destination groups on this page. `dest` links to a
// destination page when one exists (Giza & Cairo share the "cairo" page).
const REGIONS: { name: string; dest: string | null }[] = [
  { name: "Giza", dest: "cairo" },
  { name: "Cairo", dest: "cairo" },
  { name: "Alexandria", dest: "alexandria" },
  { name: "Luxor", dest: "luxor" },
  { name: "Aswan", dest: "aswan" },
  { name: "Abu Simbel", dest: "abu-simbel" },
  { name: "Hurghada", dest: null },
  { name: "Sharm El Sheikh", dest: "sharm-el-sheikh" },
  { name: "Siwa", dest: "siwa" },
];

export const metadata: Metadata = {
  title: "Recommended Hotels in Egypt",
  description:
    "A hand-picked, honest shortlist of hotels across Egypt — grouped by destination. From Giza and the Pyramids to Luxor, Aswan and the Red Sea, these are the places we actually use and arrange as part of a tailored trip.",
  alternates: { canonical: "/hotels" },
  openGraph: {
    title: "Recommended Hotels in Egypt | Fair Egypt Tours",
    description:
      "Hand-picked hotels across Egypt, grouped by destination — the places we actually use and arrange as part of a tailored trip.",
    url: "/hotels",
  },
};

const HERO = "/img/hotels/steigenberger-pyramids-cairo-1.jpg";

export default async function HotelsIndexPage() {
  const hotels = await getHotels();

  // Group hotels by region, in the order above.
  const groups: { name: string; dest: string | null; list: typeof hotels }[] = REGIONS
    .map((r) => ({ name: r.name, dest: r.dest, list: hotels.filter((h) => h.region === r.name) }))
    .filter((g) => g.list.length > 0);

  // Anything with an unlisted region.
  const placed = new Set(groups.flatMap((g) => g.list.map((h) => h.slug)));
  const others = hotels.filter((h) => !placed.has(h.slug));
  if (others.length) groups.push({ name: "Elsewhere in Egypt", dest: null, list: others });

  return (
    <>
      <Header />
      <PageHero
        kicker="Where to stay"
        title={<>Recommended <em>hotels.</em></>}
        subtitle="An honest, hand-picked shortlist of the places we actually use — grouped by destination. We arrange any of these as part of a trip we plan around you."
        image={HERO}
        crumbs={[{ label: "Hotels" }]}
      />

      <section className="sec">
        <div className="shell">
          {groups.length === 0 ? (
            <div className="hotels-empty">
              <h2 className="display">Our hotel list is on its way.</h2>
              <p>We&apos;re finishing a fresh, hand-picked selection. In the meantime, tell us your dates and we&apos;ll recommend the right stay for your trip.</p>
              <Link href="/booking" className="btn btn--solid">Get a fair quote <ArrowRight size={16} /></Link>
            </div>
          ) : (
            groups.map((g) => (
              <div key={g.name} className="hotels-group">
                <div className="sec-top">
                  <div className="sec-top__row">
                    <h2 className="display reveal">{g.name}</h2>
                    {g.dest ? (
                      <Link className="btn btn--outline reveal" data-delay="1" href={`/destinations/${g.dest}`}>
                        Visit {g.name} <ArrowRight size={16} />
                      </Link>
                    ) : null}
                  </div>
                </div>
                <div className="hgrid">
                  {g.list.map((h, i) => <HotelCard key={h.slug} hotel={h} delay={(i % 3) + 1} />)}
                </div>
              </div>
            ))
          )}
        </div>
      </section>

      <Cta />
      <Footer />
    </>
  );
}
