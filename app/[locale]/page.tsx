import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Tours from "@/components/Tours";
import Destinations from "@/components/Destinations";
import About from "@/components/About";
import HowItWorks from "@/components/HowItWorks";
import Promise from "@/components/Promise";
import Reviews from "@/components/Reviews";
import Faq from "@/components/Faq";
import Cta from "@/components/Cta";
import Footer from "@/components/Footer";
import { getPage, getTours, getDestinations } from "@/lib/cms";
import { stats as enStats } from "@/lib/data";
import { getLocale } from "@/lib/locale";
import { localize } from "@/lib/localize";
import { homeTranslations } from "@/lib/home-i18n";
import { toursI18n } from "@/lib/tours-i18n";
import { destinationsI18n } from "@/lib/destinations-i18n";

export default async function Home() {
  // NOTE: the `Promise` component is imported below, which shadows the global,
  // so fetch sequentially rather than using Promise.all.
  const home = await getPage("home");
  const allTours = await getTours();
  const allDestinations = await getDestinations();
  const locale = await getLocale();

  // English: editable content from the DB. es/pt: overlay the translated layer.
  const tr = locale === "en" ? null : homeTranslations[locale];
  const hero = tr?.hero ?? home.hero;
  const steps = tr?.steps ?? home.steps;
  const included = tr?.included ?? home.included;
  const reviews = tr?.reviews ?? home.reviews;
  const faqs = tr?.faqs ?? home.faqs;
  const promise = tr?.promise ?? home.promise;
  const cta = tr?.cta ?? home.cta;
  const stats = tr?.stats ?? enStats;

  // Real tours & destinations from the CMS, localized for the active locale.
  const tours = allTours.slice(0, 4).map((x) => localize(x, locale === "en" ? undefined : toursI18n[x.slug]?.[locale]));
  const destinations = allDestinations.map((x) => localize(x, locale === "en" ? undefined : destinationsI18n[x.slug]?.[locale]));

  return (
    <>
      <Header overHero />
      <main id="top">
        <Hero hero={hero} />
        <Tours tours={tours} />
        <Destinations destinations={destinations} />
        <About stats={stats} />
        <HowItWorks steps={steps} />
        <Promise included={included} promise={promise} />
        <Reviews reviews={reviews} />
        <Faq faqs={faqs} />
        <Cta heading={cta.heading} text={cta.text} />
      </main>
      <Footer />
    </>
  );
}
