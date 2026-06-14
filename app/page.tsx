import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
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

export default async function Home() {
  const home = await getPage("home");
  return (
    <>
      <Header overHero />
      <main id="top">
        <Hero hero={home.hero} />
        <Marquee />
        <Tours />
        <Destinations />
        <About />
        <HowItWorks steps={home.steps} />
        <Promise included={home.included} promise={home.promise} />
        <Reviews reviews={home.reviews} />
        <Faq faqs={home.faqs} />
        <Cta heading={home.cta.heading} text={home.cta.text} />
      </main>
      <Footer />
    </>
  );
}
