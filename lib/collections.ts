// Registry that drives the whole admin CRUD. Each collection is described by a
// field schema; the generic list/new/edit screens + save action read this, so
// there's one implementation for all five collections.

export type FieldType =
  | "text"
  | "textarea"
  | "number"
  | "select"
  | "datalist" // free text with autocomplete suggestions (e.g. category)
  | "checkbox"
  | "lines" // string[] — one per line
  | "json" // nested arrays/objects — edited as JSON
  | "itinerary" // structured day/time steps — { time, title, text }[]
  | "richtext" // WYSIWYG HTML body
  | "image"
  | "date";

export type Field = {
  name: string; // supports dotted paths e.g. "author.name"
  label: string;
  type: FieldType;
  hint?: string;
  options?: string[];
  placeholder?: string;
  full?: boolean; // span both columns
  group?: string; // section heading the field is rendered under
  /** For "itinerary": "time" shows a time column, "day" shows a day column. */
  mode?: "time" | "day";
};

export type Collection = {
  key: string; // URL segment (matches public route base): blog, tours, ...
  model: "post" | "tour" | "destination" | "hotel" | "tip" | "tourCategory";
  singular: string;
  plural: string;
  titleField: string;
  imageField?: string;
  fields: Field[];
};

const SECTIONS_HINT =
  'JSON array of sections. Each: { "heading"?, "paras"?: string[], "list"?: string[], "ordered"?: boolean, "quote"? }';

export const collections: Record<string, Collection> = {
  blog: {
    key: "blog",
    model: "post",
    singular: "Post",
    plural: "Blog Posts",
    titleField: "title",
    imageField: "image",
    fields: [
      { name: "title", label: "Title", type: "text", full: true },
      { name: "excerpt", label: "Excerpt", type: "textarea", full: true },
      { name: "image", label: "Cover image", type: "image", full: true },
      { name: "category", label: "Category", type: "text" },
      { name: "readTime", label: "Read time", type: "text", placeholder: "8 min read" },
      { name: "date", label: "Display date", type: "text", placeholder: "May 28, 2026" },
      { name: "isoDate", label: "ISO date", type: "date" },
      { name: "author.name", label: "Author name", type: "text" },
      { name: "author.role", label: "Author role", type: "text" },
      { name: "author.avatar", label: "Author avatar", type: "image" },
      { name: "body", label: "Body", type: "json", full: true, hint: SECTIONS_HINT },
    ],
  },
  tours: {
    key: "tours",
    model: "tour",
    singular: "Tour",
    plural: "Tours",
    titleField: "title",
    imageField: "cardImage",
    fields: [
      // --- Basics ---
      { name: "title", label: "Title", type: "text", full: true, group: "Basics" },
      { name: "type", label: "Type", type: "select", options: ["Day Tour", "Package"], group: "Basics", hint: "Day Tour = single day · Package = multi-day." },
      {
        name: "category", label: "Category", type: "datalist", group: "Basics",
        placeholder: "e.g. Cairo Day Tours",
        hint: "The group this appears under. Pick one or type a new name.",
        options: [
          "Cairo Day Tours", "Giza Day Tours", "Luxor Day Tours", "Aswan Day Tours", "Alexandria Day Tours",
          "Classic Egypt Packages", "Family Holiday Packages", "Luxury Holiday Packages", "Nile Cruise Packages", "Honeymoon Packages",
        ],
      },
      {
        name: "destination", label: "Destination", type: "datalist", group: "Basics",
        placeholder: "Cairo & Giza",
        hint: "Links this tour to a destination page, where it appears automatically.",
        options: ["Cairo & Giza", "Luxor", "Aswan", "Abu Simbel", "Alexandria", "Sharm El Sheikh", "North Coast", "Siwa Oasis"],
      },
      { name: "place", label: "Place / meeting point", type: "text", group: "Basics", placeholder: "Giza" },
      { name: "summary", label: "Short summary", type: "textarea", full: true, group: "Basics", hint: "One or two sentences shown on cards and search." },

      // --- Details ---
      { name: "duration", label: "Duration", type: "text", group: "Details", placeholder: "8 hours / 5 days" },
      { name: "groupSize", label: "Group size", type: "text", group: "Details", placeholder: "Private" },
      { name: "languages", label: "Languages", type: "text", group: "Details", placeholder: "English, Arabic" },
      { name: "price", label: "Price from (USD)", type: "number", group: "Details" },
      { name: "rating", label: "Rating", type: "text", placeholder: "4.9", group: "Details" },
      { name: "reviewCount", label: "Review count", type: "number", group: "Details" },

      // --- Media ---
      { name: "heroImage", label: "Hero image", type: "image", group: "Media" },
      { name: "heroImageAlt", label: "Hero image alt text", type: "text", group: "Media", hint: "Describes the image for SEO & screen readers." },
      { name: "cardImage", label: "Card image", type: "image", group: "Media" },
      { name: "cardImageAlt", label: "Card image alt text", type: "text", group: "Media" },
      { name: "gallery", label: "Gallery image URLs", type: "lines", full: true, group: "Media", hint: "One URL per line (or paste from the media library)." },

      // --- Content ---
      { name: "overview", label: "Overview paragraphs", type: "lines", full: true, group: "Content", hint: "One paragraph per line." },
      { name: "highlights", label: "Highlights", type: "lines", group: "Content", hint: "One per line." },
      { name: "included", label: "What's included", type: "lines", group: "Content", hint: "One per line." },
      { name: "notIncluded", label: "Not included", type: "lines", group: "Content", hint: "One per line." },

      // --- Itinerary ---
      { name: "itinerary", label: "Itinerary", type: "itinerary", full: true, group: "Itinerary", mode: "time" },

      // --- SEO ---
      { name: "metaTitle", label: "Meta title", type: "text", full: true, group: "SEO", hint: "Browser/search title. ~60 characters. Falls back to the tour title." },
      { name: "metaDescription", label: "Meta description", type: "textarea", full: true, group: "SEO", hint: "Search snippet. ~155 characters. Falls back to the summary." },
    ],
  },
  "tour-categories": {
    key: "tour-categories",
    model: "tourCategory",
    singular: "Tour Category",
    plural: "Tour Categories",
    titleField: "name",
    imageField: "cardImage",
    fields: [
      { name: "name", label: "Category name", type: "text", full: true, group: "Basics", hint: "e.g. Cairo Day Tours. Any tour whose Category matches this name appears on this page." },
      { name: "type", label: "Type", type: "select", options: ["Day Tour", "Package"], group: "Basics" },
      {
        name: "destination", label: "Destination", type: "datalist", group: "Basics",
        placeholder: "Cairo & Giza",
        hint: "Links this category to a destination page, where it appears as a card.",
        options: ["Cairo & Giza", "Luxor", "Aswan", "Abu Simbel", "Alexandria", "Sharm El Sheikh", "North Coast", "Siwa Oasis"],
      },
      { name: "intro", label: "Intro / lead", type: "textarea", full: true, group: "Basics", hint: "Lead paragraph shown in the hero and used as the meta-description fallback." },
      { name: "heroImage", label: "Hero image", type: "image", group: "Media" },
      { name: "heroImageAlt", label: "Hero image alt text", type: "text", group: "Media", hint: "Describes the image for SEO & screen readers." },
      { name: "cardImage", label: "Card image", type: "image", group: "Media", hint: "Used where this category is shown as a card." },
      { name: "body", label: "Body paragraphs", type: "lines", full: true, group: "Content", hint: "One paragraph per line. Extra SEO copy shown below the tours." },
      { name: "metaTitle", label: "Meta title", type: "text", full: true, group: "SEO", hint: "~60 characters. Falls back to the category name." },
      { name: "metaDescription", label: "Meta description", type: "textarea", full: true, group: "SEO", hint: "~155 characters. Falls back to the intro." },
    ],
  },
  destinations: {
    key: "destinations",
    model: "destination",
    singular: "Destination",
    plural: "Destinations",
    titleField: "name",
    imageField: "cardImage",
    fields: [
      { name: "name", label: "Name", type: "text", full: true, group: "Basics" },
      { name: "region", label: "Region", type: "text", group: "Basics" },
      { name: "tourCount", label: "Tour count", type: "number", group: "Basics" },
      { name: "tagline", label: "Tagline", type: "text", full: true, group: "Basics" },
      { name: "intro", label: "Intro", type: "textarea", full: true, group: "Basics", hint: "Answer-first summary shown in the hero and as the meta fallback." },
      { name: "heroImage", label: "Hero image", type: "image", group: "Media" },
      { name: "cardImage", label: "Card image", type: "image", group: "Media" },
      { name: "gallery", label: "Gallery URLs", type: "lines", full: true, group: "Media", hint: "One per line." },
      { name: "bestTime", label: "Best time to visit", type: "textarea", full: true, group: "Content" },
      { name: "history", label: "History paragraphs", type: "lines", full: true, group: "Content", hint: "One paragraph per line." },
      { name: "gettingThere", label: "Getting there", type: "lines", full: true, group: "Content", hint: "One paragraph per line." },
      { name: "tourSlugs", label: "Related tour slugs", type: "lines", group: "Content", hint: "One slug per line." },
      { name: "overview", label: "Overview", type: "json", full: true, group: "Content", hint: SECTIONS_HINT },
      { name: "quickFacts", label: "Quick facts", type: "json", full: true, group: "Content", hint: 'JSON array: [{ "label", "value" }]' },
      { name: "whereToStay", label: "Where to stay", type: "json", full: true, group: "Content", hint: 'JSON array: [{ "area", "note" }]' },
      { name: "thingsToDo", label: "Things to do", type: "json", full: true, group: "Content", hint: 'JSON array: [{ "title", "text" }]' },
      { name: "faqs", label: "FAQs", type: "json", full: true, group: "Content", hint: 'JSON array: [{ "q", "a" }]' },
      { name: "metaTitle", label: "Meta title", type: "text", full: true, group: "SEO", hint: "~60 characters. Falls back to '<Name> Travel Guide'." },
      { name: "metaDescription", label: "Meta description", type: "textarea", full: true, group: "SEO", hint: "~155 characters. Falls back to the summary/intro." },
    ],
  },
  hotels: {
    key: "hotels",
    model: "hotel",
    singular: "Hotel",
    plural: "Hotels",
    titleField: "name",
    imageField: "image",
    fields: [
      { name: "name", label: "Name", type: "text", full: true },
      { name: "city", label: "City", type: "text" },
      { name: "area", label: "Area", type: "text" },
      { name: "category", label: "Category", type: "select", options: ["Luxury", "Boutique", "Resort", "Value"] },
      { name: "stars", label: "Stars", type: "number" },
      { name: "rating", label: "Rating", type: "text", placeholder: "4.8" },
      { name: "reviewCount", label: "Review count", type: "number" },
      { name: "pricePerNight", label: "Price / night (USD)", type: "number" },
      { name: "image", label: "Main image", type: "image", full: true },
      { name: "description", label: "Description paragraphs", type: "lines", full: true, hint: "One paragraph per line." },
      { name: "amenities", label: "Amenities", type: "lines", hint: "One per line." },
      { name: "gallery", label: "Gallery URLs", type: "lines", hint: "One per line." },
    ],
  },
  "travel-tips": {
    key: "travel-tips",
    model: "tip",
    singular: "Travel Tip",
    plural: "Travel Tips",
    titleField: "title",
    imageField: "image",
    fields: [
      { name: "title", label: "Title", type: "text", full: true },
      { name: "excerpt", label: "Excerpt", type: "textarea", full: true },
      { name: "image", label: "Cover image", type: "image", full: true },
      { name: "category", label: "Category", type: "text" },
      { name: "readTime", label: "Read time", type: "text" },
      { name: "updated", label: "Updated label", type: "text", placeholder: "May 2026" },
      { name: "body", label: "Body", type: "json", full: true, hint: SECTIONS_HINT },
    ],
  },
};

export function getCollection(key: string): Collection | null {
  return collections[key] ?? null;
}

export function slugify(s: string): string {
  return s
    .toLowerCase()
    .trim()
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 80);
}

/** Read a possibly-dotted path from an object. */
export function getPath(obj: unknown, path: string): unknown {
  return path.split(".").reduce<unknown>((o, k) => (o == null ? undefined : (o as Record<string, unknown>)[k]), obj);
}
