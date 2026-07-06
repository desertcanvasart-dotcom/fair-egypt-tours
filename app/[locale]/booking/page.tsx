import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import BookingForm from "@/components/BookingForm";
import { getLocale } from "@/lib/locale";
import { localeHref } from "@/lib/i18n";
import { bookingContent } from "@/lib/booking-content";
import { getPage } from "@/lib/cms";
import { BadgeCheck, Check } from "@/components/icons";

const HERO =
  "https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?auto=format&fit=crop&w=1900&q=85";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const s = bookingContent[locale];
  const url = localeHref(locale, "/booking");
  return {
    title: s.metaTitle,
    description: s.metaDescription,
    alternates: { canonical: url },
    openGraph: { title: s.ogTitle, description: s.ogDescription, url },
  };
}

export default async function BookingPage() {
  const locale = await getLocale();
  const s = bookingContent[locale];
  const site = await getPage("site");

  return (
    <>
      <Header />
      <PageHero
        kicker={s.heroKicker}
        title={<>{s.heroTitleLead} <em>{s.heroTitleEm}</em></>}
        subtitle={s.heroSub}
        image={HERO}
        crumbs={[{ label: s.crumb }]}
      />

      <section className="sec">
        <div className="shell">
          <div className="bookwrap">
            <div className="bookwrap__form reveal">
              <BookingForm s={s} whatsapp={site.whatsapp} />
            </div>
            <aside className="bookwrap__side reveal" data-delay="1">
              <div className="bookside">
                <h4><BadgeCheck size={18} /> {s.reassureTitle}</h4>
                <ul>
                  {s.reassure.map((r) => (
                    <li key={r}><Check size={14} /> {r}</li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
