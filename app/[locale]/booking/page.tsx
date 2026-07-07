import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import BookingForm from "@/components/BookingForm";
import { getLocale } from "@/lib/locale";
import { localeHref } from "@/lib/i18n";
import { bookingContent } from "@/lib/booking-content";
import { getTour, getPage } from "@/lib/cms";
import { BadgeCheck, Check, Whatsapp } from "@/components/icons";

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

export default async function BookingPage({ searchParams }: { searchParams: Promise<{ tour?: string }> }) {
  const locale = await getLocale();
  const s = bookingContent[locale];

  // If the visitor arrived via "Customize your own tour" on a tour page, carry
  // that tour through so the booking is tagged with where it came from.
  const { tour } = await searchParams;
  const fromTour = tour ? await getTour(tour) : null;
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
              <BookingForm s={s} fromTourSlug={fromTour?.slug} fromTourTitle={fromTour?.title} />
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

              {site.whatsapp && /\d{5,}/.test(site.whatsapp) ? (
                <div className="booktalk">
                  <h4>{s.talkTitle}</h4>
                  <p>{s.talkText}</p>
                  <div className="booktalk__info">
                    {site.phone ? <a href={site.phoneHref}>{site.phone}</a> : null}
                    {site.email ? <a href={`mailto:${site.email}`}>{site.email}</a> : null}
                  </div>
                  <a href={site.whatsapp} target="_blank" rel="noopener" className="booktalk__wa">
                    <Whatsapp size={18} /> {s.talkCta}
                  </a>
                </div>
              ) : null}
            </aside>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
