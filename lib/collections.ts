// Registry that drives the whole admin CRUD. Each collection is described by a
// field schema; the generic list/new/edit screens + save action read this, so
// there's one implementation for all five collections.

export type FieldType =
  | "text"
  | "textarea"
  | "number"
  | "select"
  | "checkbox"
  | "lines" // string[] — one per line
  | "json" // nested arrays/objects — edited as JSON
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
};

export type Collection = {
  key: string; // URL segment (matches public route base): blog, tours, ...
  model: "post" | "tour" | "destination" | "hotel" | "tip";
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
      { name: "title", label: "Title", type: "text", full: true },
      { name: "summary", label: "Summary", type: "textarea", full: true },
      { name: "place", label: "Place", type: "text" },
      { name: "category", label: "Category", type: "text", placeholder: "Day Tour" },
      { name: "duration", label: "Duration", type: "text" },
      { name: "groupSize", label: "Group size", type: "text" },
      { name: "languages", label: "Languages", type: "text" },
      { name: "rating", label: "Rating", type: "text", placeholder: "4.9" },
      { name: "reviewCount", label: "Review count", type: "number" },
      { name: "price", label: "Price (USD)", type: "number" },
      { name: "heroImage", label: "Hero image", type: "image" },
      { name: "cardImage", label: "Card image", type: "image" },
      { name: "overview", label: "Overview paragraphs", type: "lines", full: true, hint: "One paragraph per line." },
      { name: "highlights", label: "Highlights", type: "lines", hint: "One per line." },
      { name: "included", label: "Included", type: "lines", hint: "One per line." },
      { name: "notIncluded", label: "Not included", type: "lines", hint: "One per line." },
      { name: "gallery", label: "Gallery image URLs", type: "lines", hint: "One URL per line." },
      { name: "itinerary", label: "Itinerary", type: "json", full: true, hint: 'JSON array: [{ "time", "title", "text" }]' },
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
      { name: "name", label: "Name", type: "text", full: true },
      { name: "region", label: "Region", type: "text" },
      { name: "tourCount", label: "Tour count", type: "number" },
      { name: "tagline", label: "Tagline", type: "text", full: true },
      { name: "intro", label: "Intro", type: "textarea", full: true },
      { name: "heroImage", label: "Hero image", type: "image" },
      { name: "cardImage", label: "Card image", type: "image" },
      { name: "bestTime", label: "Best time to visit", type: "textarea", full: true },
      { name: "history", label: "History paragraphs", type: "lines", full: true, hint: "One paragraph per line." },
      { name: "gettingThere", label: "Getting there", type: "lines", full: true, hint: "One paragraph per line." },
      { name: "gallery", label: "Gallery URLs", type: "lines", hint: "One per line." },
      { name: "tourSlugs", label: "Related tour slugs", type: "lines", hint: "One slug per line." },
      { name: "overview", label: "Overview", type: "json", full: true, hint: SECTIONS_HINT },
      { name: "quickFacts", label: "Quick facts", type: "json", full: true, hint: 'JSON array: [{ "label", "value" }]' },
      { name: "whereToStay", label: "Where to stay", type: "json", full: true, hint: 'JSON array: [{ "area", "note" }]' },
      { name: "thingsToDo", label: "Things to do", type: "json", full: true, hint: 'JSON array: [{ "title", "text" }]' },
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
