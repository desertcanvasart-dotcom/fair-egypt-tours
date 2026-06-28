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
import { getPage } from "@/lib/cms";
import { tours as enTours, destinations as enDestinations, stats as enStats } from "@/lib/data";
import { getLocale } from "@/lib/locale";
import { homeTranslations } from "@/lib/home-i18n";

export default async function Home() {
  const home = await getPage("home");
  const locale = await getLocale();

  // English: editable content from the DB + marketing cards from lib/data.
  // es/pt: overlay the translated data layer.
  const tr = locale === "en" ? null : homeTranslations[locale];
  const hero = tr?.hero ?? home.hero;
  const steps = tr?.steps ?? home.steps;
  const included = tr?.included ?? home.included;
  const reviews = tr?.reviews ?? home.reviews;
  const faqs = tr?.faqs ?? home.faqs;
  const promise = tr?.promise ?? home.promise;
  const cta = tr?.cta ?? home.cta;
  const tours = tr?.tours ?? enTours;
  const destinations = tr?.destinations ?? enDestinations;
  const stats = tr?.stats ?? enStats;

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
