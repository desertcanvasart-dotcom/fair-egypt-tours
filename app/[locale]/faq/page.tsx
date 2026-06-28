import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import JsonLdScript from "@/components/JsonLdScript";
import { getLocale } from "@/lib/locale";
import { localeHref } from "@/lib/i18n";
import { faqContent } from "@/lib/faq-content";
import { ArrowRight } from "@/components/icons";

const HERO =
  "https://images.unsplash.com/photo-1568322445389-f64ac2515020?auto=format&fit=crop&w=1900&q=85";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const c = faqContent[locale];
  const url = localeHref(locale, "/faq");
  return {
    title: c.metaTitle,
    description: c.metaDescription,
    alternates: { canonical: url },
    openGraph: { title: c.ogTitle, description: c.ogDescription, url },
  };
}

export default async function FaqPage() {
  const locale = await getLocale();
  const c = faqContent[locale];
  const allItems = c.categories.flatMap((cat) => cat.items);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: allItems.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <JsonLdScript data={faqSchema} />
      <Header />
      <PageHero
        kicker={c.heroKicker}
        title={<>{c.heroTitleLead} <em>{c.heroTitleEm}</em></>}
        subtitle={c.heroSub}
        image={HERO}
        crumbs={[{ label: c.crumb }]}
      />

      <section className="sec">
        <div className="shell faqwrap">
          <p className="faqintro reveal">{c.intro}</p>

          {c.categories.map((cat) => (
            <div className="faqcat reveal" key={cat.title}>
              <h2>{cat.title}</h2>
              <div className="faqlist">
                {cat.items.map((it) => (
                  <details className="faqq" key={it.q}>
                    <summary>
                      <span>{it.q}</span>
                      <svg className="faqq__i" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"><path d="M12 5v14M5 12h14" /></svg>
                    </summary>
                    <div className="faqa"><p>{it.a}</p></div>
                  </details>
                ))}
              </div>
            </div>
          ))}

          <div className="faqcta reveal">
            <h2>{c.ctaHeading}</h2>
            <p>{c.ctaText}</p>
            <Link href={localeHref(locale, "/booking")} className="btn btn--solid">
              {c.ctaButton} <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
