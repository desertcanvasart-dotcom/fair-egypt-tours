// Editable content for the STATIC pages (Home, About) + global Site settings.
// Stored as PageContent singletons (key: "home" | "about" | "site"). Defaults
// below mirror the original hardcoded copy and are used as a safe fallback if a
// field is missing, so the public site can never break.

import { site as siteData, navLinks, steps, included, stats, reviews, faqs } from "./data";
import type { Field } from "./collections";

export type SiteContent = {
  name: string;
  legalName: string;
  tagline: string;
  phone: string;
  phoneHref: string;
  email: string;
  whatsapp: string;
  instagram: string;
  facebook: string;
  linkedin: string;
  youtube: string;
  tripadvisor: string;
  // Brand facts for structured data (omitted from schema when blank).
  positioning: string;
  foundingYear: string;
  founders: string[];
  priceRange: string;
  address: { street: string; locality: string; region: string; postalCode: string; country: string };
  knowsAbout: string[];
  areaServed: string[];
  accreditations: string[];
  awards: string[];
  // Curated copy for llms.txt (editor's voice, not auto-generated).
  llmsIntro: string;
  llmsOffer: string;
  llmsPricing: string;
};

export type HomeContent = {
  hero: { kicker: string; titleLead: string; titleEm: string; subtitle: string; chips: string[] };
  steps: typeof steps;
  included: typeof included;
  reviews: typeof reviews;
  faqs: typeof faqs;
  promise: { heading: string; text: string };
  cta: { heading: string; text: string };
};

export type AboutContent = {
  hero: { kicker: string; titleLead: string; titleEm: string; subtitle: string };
  story: { paras: string[]; image: string };
  stats: typeof stats;
  values: { title: string; text: string }[];
};

export const siteDefault: SiteContent = {
  name: siteData.name,
  legalName: "",
  tagline: siteData.tagline,
  phone: siteData.phone,
  phoneHref: siteData.phoneHref,
  email: siteData.email,
  whatsapp: siteData.whatsapp,
  instagram: "https://www.instagram.com/fairegypttours",
  facebook: "https://www.facebook.com/fairegypttours",
  linkedin: "",
  youtube: "",
  tripadvisor: "",
  // Truthful, editable defaults. Anything left blank is omitted from schema.
  positioning:
    "Affordable, carefully planned Egypt tours with fair, transparent pricing, licensed local guides, and private air-conditioned transport.",
  foundingYear: "",
  founders: [],
  priceRange: "$$",
  address: { street: "", locality: "Cairo", region: "Cairo Governorate", postalCode: "", country: "EG" },
  knowsAbout: [
    "Egypt tours",
    "Nile cruises",
    "Pyramids of Giza",
    "Luxor temples",
    "Aswan and Abu Simbel",
    "Red Sea diving",
    "Egypt travel planning",
  ],
  areaServed: ["Cairo", "Giza", "Luxor", "Aswan", "Red Sea", "Egypt"],
  accreditations: [],
  awards: [],
  llmsIntro:
    "Fair Egypt Tours is a local, Egypt-based tour operator offering affordable, carefully planned trips for travellers who want fair prices without sacrificing comfort or care. We pair transparent, itemised pricing with licensed local guides, private air-conditioned transport, and real human support from first message to final drop-off.",
  llmsOffer:
    "We run private day tours and multi-day packages across Cairo & Giza, Luxor, Aswan, and the Red Sea — including the Pyramids and Sphinx, the Valley of the Kings, Abu Simbel, Nile cruises, and Red Sea getaways. We also arrange hotels, airport transfers, and fully custom itineraries built around a traveller's dates, budget, and interests.",
  llmsPricing:
    "Every tour shows a fair starting price up front. Final pricing depends on dates, group size, hotel standard, and optional extras (entry tickets, meals, activities). Travellers receive a clear, itemised quote with no obligation via message or WhatsApp; bookings are typically confirmed with a small deposit.",
};

export const homeDefault: HomeContent = {
  hero: {
    kicker: "Affordable Egypt Travel",
    titleLead: "Affordable Egypt Tours,",
    titleEm: "Carefully Planned.",
    subtitle:
      "Fair prices, licensed local guides, private air-conditioned transport, and real human support — from your first message to the final drop-off.",
    chips: ["Pyramids & Giza", "Luxor & Aswan", "Nile Cruises", "Red Sea"],
  },
  steps,
  included,
  reviews,
  faqs,
  promise: {
    heading: "Know exactly what you pay for.",
    text:
      "The biggest fear with affordable travel is hidden costs and rushed tours. So we put it in writing — every quote spells out what's included and what isn't.",
  },
  cta: {
    heading: "Tell us your dates — we'll plan a fair trip.",
    text:
      "Send a message and get a clear, itemised quote with no obligation. Real people reply, usually within a few hours.",
  },
};

export const aboutDefault: AboutContent = {
  hero: {
    kicker: "About Us",
    titleLead: "Affordable doesn't have to mean",
    titleEm: "careless.",
    subtitle:
      "We're a local, Egypt-based team who believe a fair price should still come with real care — the thing that sets us apart from both cheap operators and overpriced luxury agencies.",
  },
  story: {
    paras: [
      "Fair Egypt Tours began with a simple frustration: travellers were forced to choose between cheap trips that felt careless and luxury agencies that charged a fortune for the same sights. We knew there was a better, fairer middle.",
      "So we built it. A local team, transparent itemised pricing, licensed guides, private air-conditioned transport, and real human support from the first message to the final drop-off. Lower prices should never mean poor communication, rushed tours, or hidden costs.",
    ],
    image: "https://images.unsplash.com/photo-1572252009286-268acec5ca0a?auto=format&fit=crop&w=1000&q=80",
  },
  stats,
  values: [
    { title: "We Are Local", text: "Based in Egypt, we know the routes, timing, guides, traffic, and comfort that make a trip work." },
    { title: "We Are Honest", text: "We explain what's included, what's optional, and what might change the price — before you commit." },
    { title: "We Are Responsible", text: "Fair travel means fair treatment for guests, guides, drivers, suppliers, and local communities." },
    { title: "We Deliver Quality", text: "Affordable doesn't mean careless. Communication, punctuality, cleanliness, and support still matter." },
  ],
};

export const pageDefaults = { site: siteDefault, home: homeDefault, about: aboutDefault } as const;
export type PageKey = keyof typeof pageDefaults;
export const navLinksDefault = navLinks;

/* ---- Admin editor field schemas (reuses the collection Field type) ---- */
export const pageMeta: Record<PageKey, { label: string; description: string }> = {
  site: { label: "Site Settings", description: "Brand, contact details and social links used across the whole site." },
  home: { label: "Home Page", description: "Hero, transparency, reviews, FAQ and call-to-action copy." },
  about: { label: "About Page", description: "Hero, story, stats and values on the About page." },
};

export const pageSchemas: Record<PageKey, Field[]> = {
  site: [
    { name: "name", label: "Brand name", type: "text" },
    { name: "legalName", label: "Legal / registered name", type: "text", hint: "Optional. Used as alternateName in schema." },
    { name: "tagline", label: "Tagline", type: "text" },
    { name: "positioning", label: "One-sentence positioning", type: "textarea", full: true, hint: "Used as the brand description in AI structured data." },
    { name: "phone", label: "Phone (display)", type: "text" },
    { name: "phoneHref", label: "Phone link", type: "text", hint: "e.g. tel:+201000000000" },
    { name: "email", label: "Email", type: "text" },
    { name: "whatsapp", label: "WhatsApp number", type: "text", hint: "Just your number with country code — e.g. 20 100 123 4567. Powers every WhatsApp button on the site." },
    { name: "instagram", label: "Instagram URL", type: "text" },
    { name: "facebook", label: "Facebook URL", type: "text" },
    { name: "linkedin", label: "LinkedIn URL", type: "text" },
    { name: "youtube", label: "YouTube URL", type: "text" },
    { name: "tripadvisor", label: "TripAdvisor URL", type: "text" },
    { name: "foundingYear", label: "Founding year", type: "text", hint: "e.g. 2014. Leave blank if you'd rather not state it." },
    { name: "founders", label: "Founder name(s)", type: "lines", hint: "One per line. Shown as Person schema." },
    { name: "priceRange", label: "Price range", type: "select", options: ["$", "$$", "$$$", "$$$$"] },
    { name: "address.street", label: "Street address", type: "text" },
    { name: "address.locality", label: "City", type: "text" },
    { name: "address.region", label: "Region / governorate", type: "text" },
    { name: "address.postalCode", label: "Postal code", type: "text" },
    { name: "address.country", label: "Country code", type: "text", hint: "ISO, e.g. EG" },
    { name: "knowsAbout", label: "Topics we know about", type: "lines", hint: "One per line. Feeds knowsAbout in schema." },
    { name: "areaServed", label: "Areas served", type: "lines", hint: "One per line." },
    { name: "accreditations", label: "Accreditations / memberships", type: "lines", hint: "One per line. Leave blank if none." },
    { name: "awards", label: "Awards / recognition", type: "lines", hint: "One per line. Leave blank if none." },
    { name: "llmsIntro", label: "llms.txt — intro", type: "textarea", full: true, hint: "The curated paragraph AI assistants read first." },
    { name: "llmsOffer", label: "llms.txt — what we offer", type: "textarea", full: true },
    { name: "llmsPricing", label: "llms.txt — pricing & booking", type: "textarea", full: true },
  ],
  home: [
    { name: "hero.kicker", label: "Hero kicker", type: "text" },
    { name: "hero.titleLead", label: "Hero title (lead)", type: "text" },
    { name: "hero.titleEm", label: "Hero title (highlight)", type: "text" },
    { name: "hero.subtitle", label: "Hero subtitle", type: "textarea", full: true },
    { name: "hero.chips", label: "Hero quick-links", type: "lines", hint: "One per line." },
    { name: "promise.heading", label: "Transparency heading", type: "text" },
    { name: "promise.text", label: "Transparency text", type: "textarea", full: true },
    { name: "cta.heading", label: "Call-to-action heading", type: "text" },
    { name: "cta.text", label: "Call-to-action text", type: "textarea", full: true },
    { name: "steps", label: "How it works (steps)", type: "json", full: true, hint: 'JSON: [{ "n", "title", "text" }]' },
    { name: "included.always", label: "Always included", type: "lines", hint: "One per line." },
    { name: "included.optional", label: "Optional add-ons", type: "lines", hint: "One per line." },
    { name: "reviews", label: "Testimonials", type: "json", full: true, hint: 'JSON: [{ "quote", "name", "place", "tag", "avatar" }]' },
    { name: "faqs", label: "FAQ", type: "json", full: true, hint: 'JSON: [{ "q", "a" }]' },
  ],
  about: [
    { name: "hero.kicker", label: "Hero kicker", type: "text" },
    { name: "hero.titleLead", label: "Hero title (lead)", type: "text" },
    { name: "hero.titleEm", label: "Hero title (highlight)", type: "text" },
    { name: "hero.subtitle", label: "Hero subtitle", type: "textarea", full: true },
    { name: "story.image", label: "Story image", type: "image", full: true },
    { name: "story.paras", label: "Story paragraphs", type: "lines", full: true, hint: "One paragraph per line." },
    { name: "stats", label: "Stats", type: "json", full: true, hint: 'JSON: [{ "b", "label", "suffix"? }]' },
    { name: "values", label: "Values", type: "json", full: true, hint: 'JSON: [{ "title", "text" }]' },
  ],
};
