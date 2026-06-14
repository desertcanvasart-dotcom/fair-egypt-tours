import { getPage, getTours } from "@/lib/cms";

const SITE_URL = "https://www.fairegypttours.com";
export const ORG_ID = `${SITE_URL}/#organization`;
const WEBSITE_ID = `${SITE_URL}/#website`;

/* eslint-disable @typescript-eslint/no-explicit-any */
// Site-wide structured data as a connected @graph (Organization + WebSite + FAQ).
// Every value comes from editable Site Settings; anything blank is omitted so no
// unverified facts are ever published.
export default async function JsonLd() {
  const [site, home, tours] = await Promise.all([getPage("site"), getPage("home"), getTours()]);

  const org: any = {
    "@type": "TravelAgency",
    "@id": ORG_ID,
    name: site.name,
    url: `${SITE_URL}/`,
    logo: `${SITE_URL}/logo.png`,
    image: `${SITE_URL}/og-image.jpg`,
    description: site.positioning,
    telephone: site.phone,
    email: site.email,
    priceRange: site.priceRange || "$$",
    currenciesAccepted: "USD, EUR, EGP",
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      telephone: site.phone,
      email: site.email,
      availableLanguage: ["English", "Arabic"],
    },
    geo: { "@type": "GeoCoordinates", latitude: 30.0444, longitude: 31.2357 },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "00:00",
      closes: "23:59",
    },
  };

  if (site.legalName) org.alternateName = site.legalName;
  if (site.foundingYear) org.foundingDate = site.foundingYear;
  if (site.founders?.length) org.founder = site.founders.map((name) => ({ "@type": "Person", name }));

  const a = site.address || ({} as SiteAddr);
  if (a.street || a.locality || a.region || a.postalCode || a.country) {
    org.address = {
      "@type": "PostalAddress",
      ...(a.street ? { streetAddress: a.street } : {}),
      ...(a.locality ? { addressLocality: a.locality } : {}),
      ...(a.region ? { addressRegion: a.region } : {}),
      ...(a.postalCode ? { postalCode: a.postalCode } : {}),
      ...(a.country ? { addressCountry: a.country } : {}),
    };
  }

  if (site.areaServed?.length) org.areaServed = site.areaServed.map((name) => ({ "@type": "Place", name }));
  if (site.knowsAbout?.length) org.knowsAbout = site.knowsAbout;
  if (site.awards?.length) org.award = site.awards;
  if (site.accreditations?.length) org.memberOf = site.accreditations.map((name) => ({ "@type": "Organization", name }));

  const sameAs = [site.instagram, site.facebook, site.linkedin, site.youtube, site.tripadvisor].filter(Boolean);
  if (sameAs.length) org.sameAs = sameAs;

  if (tours.length) {
    org.hasOfferCatalog = {
      "@type": "OfferCatalog",
      name: "Egypt Tours",
      itemListElement: tours.map((t) => ({
        "@type": "Offer",
        itemOffered: { "@type": "TouristTrip", name: t.title },
        price: String(t.price),
        priceCurrency: "USD",
      })),
    };
  }

  const website = {
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    name: site.name,
    url: `${SITE_URL}/`,
    inLanguage: "en",
    publisher: { "@id": ORG_ID },
  };

  const faqPage = {
    "@type": "FAQPage",
    "@id": `${SITE_URL}/#faq`,
    mainEntity: home.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  const graph = { "@context": "https://schema.org", "@graph": [org, website, faqPage] };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }} />;
}

type SiteAddr = { street?: string; locality?: string; region?: string; postalCode?: string; country?: string };
