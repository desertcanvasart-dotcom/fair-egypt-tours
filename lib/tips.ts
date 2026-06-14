import type { Section } from "./content";

export type Tip = {
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  category: string;
  readTime: string;
  updated: string;
  body: Section[];
};

const U = (id: string, w = 1200) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`;

export const tipCategories = ["All", "Planning", "Money", "Practical", "Culture"];

export const tips: Tip[] = [
  {
    slug: "best-time-to-visit-egypt",
    title: "The Best Time to Visit Egypt",
    excerpt:
      "Month-by-month: when to go for comfortable weather, fewer crowds, or the lowest prices.",
    image: U("1539768942893-daf53e448371"),
    category: "Planning",
    readTime: "6 min read",
    updated: "May 2026",
    body: [
      {
        paras: [
          "Egypt is a year-round destination, but the experience changes a lot with the seasons. The short answer: October to April is the sweet spot for sightseeing, while summer is hot but cheaper and quieter at the monuments.",
        ],
      },
      {
        heading: "October – April: the ideal window",
        paras: [
          "These are the most comfortable months, with warm, sunny days and cool evenings — perfect for walking around temples and the Giza Plateau. It's also the busiest and priciest period, especially around Christmas and New Year, so book ahead.",
        ],
      },
      {
        heading: "May & September: the shoulder season",
        paras: [
          "Warmer than peak season but still very doable, with thinner crowds and better rates. We simply start tours earlier in the day to beat the midday heat.",
        ],
      },
      {
        heading: "June – August: hot but rewarding",
        paras: [
          "Upper Egypt (Luxor, Aswan) gets very hot — 40°C and above — but the Red Sea is glorious and prices drop. With early starts, shade, and water, summer trips are completely manageable, and you'll have the tombs almost to yourself.",
        ],
        list: [
          "Start sightseeing at sunrise; rest at midday",
          "Choose Red Sea time in the hottest months",
          "Stay hydrated and wear sun protection",
        ],
      },
      {
        heading: "Our honest take",
        quote:
          "If you can travel in late October or March, you'll get the best balance of good weather, manageable crowds, and fair prices.",
      },
    ],
  },
  {
    slug: "how-to-visit-egypt-first-time",
    title: "How to Visit Egypt for the First Time",
    excerpt:
      "A simple, no-stress guide to planning your first Egypt trip — routes, days needed, and what to skip.",
    image: U("1572252009286-268acec5ca0a"),
    category: "Planning",
    readTime: "8 min read",
    updated: "Apr 2026",
    body: [
      {
        paras: [
          "Egypt can feel overwhelming to plan, but a great first trip really comes down to a few simple decisions: how long you have, whether you want a Nile cruise, and how you'll get between cities.",
        ],
      },
      {
        heading: "How many days do you need?",
        list: [
          "4–5 days: Cairo, Giza, and a quick flight to Luxor",
          "7 days: add a Nile cruise between Luxor and Aswan",
          "10+ days: add the Red Sea or Abu Simbel for a relaxed pace",
        ],
      },
      {
        heading: "The classic first-timer route",
        paras: [
          "Most travellers start in Cairo for the pyramids and museum, fly south to Luxor, cruise the Nile to Aswan, then either fly home from Aswan or add a few beach days on the Red Sea. It's popular because it works.",
        ],
      },
      {
        heading: "What to skip",
        paras: [
          "Don't try to see everything in one trip — Egypt is bigger than it looks and long drives eat your days. It's better to see a few places well than to rush. A good plan leaves breathing room.",
        ],
      },
      {
        heading: "Do you need a guide?",
        paras: [
          "For the major sites, yes — a licensed Egyptologist turns a pile of old stones into a story, and a private driver removes nearly all the friction of getting around. That's exactly what we arrange, at fair prices.",
        ],
      },
    ],
  },
  {
    slug: "egypt-visa-guide",
    title: "Egypt Visa Guide: What You Need to Know",
    excerpt:
      "Tourist visas, the e-Visa, visa-on-arrival, and how much it costs — explained simply.",
    image: U("1601050690597-df0568f70950"),
    category: "Practical",
    readTime: "5 min read",
    updated: "May 2026",
    body: [
      {
        paras: [
          "Most visitors need a tourist visa for Egypt, and getting one is usually straightforward. Always confirm the latest rules for your nationality before you travel, but here's the general picture.",
        ],
      },
      {
        heading: "Your three main options",
        list: [
          "e-Visa: apply online before you fly — the easiest, recommended option",
          "Visa on arrival: buy a sticker at major airports before passport control",
          "Embassy visa: apply in advance if your nationality requires it",
        ],
      },
      {
        heading: "Good to know",
        list: [
          "A single-entry tourist visa is typically valid for 30 days",
          "Your passport should be valid for at least 6 months",
          "Keep a printed copy of your e-Visa confirmation",
        ],
      },
      {
        heading: "We can help",
        paras: [
          "If you're unsure which option applies to you, just ask — we guide every traveller through the current requirements before arrival as part of planning your trip.",
        ],
      },
    ],
  },
  {
    slug: "what-to-pack-for-egypt",
    title: "What to Pack for Egypt",
    excerpt: "A practical packing list for temples, desert heat, modest dress, and the Red Sea.",
    image: U("1578321272176-b7bbc0679853"),
    category: "Practical",
    readTime: "5 min read",
    updated: "Mar 2026",
    body: [
      {
        paras: [
          "Egypt's climate is hot and dry, and many sites are religious or conservative, so pack light, breathable, and a little modest. Here's what actually matters.",
        ],
      },
      {
        heading: "Clothing",
        list: [
          "Loose, light cotton or linen clothing",
          "A scarf or shawl (useful for mosques and sun)",
          "Comfortable closed walking shoes for uneven ground",
          "A swimsuit for the Red Sea or hotel pools",
          "A light layer for cool desert evenings",
        ],
      },
      {
        heading: "Essentials",
        list: [
          "High-SPF sunscreen, sunglasses, and a hat",
          "Refillable water bottle",
          "Hand sanitiser and tissues",
          "A power bank and universal adapter",
          "Small cash in Egyptian pounds for tips and markets",
        ],
      },
      {
        heading: "Dress code, simply put",
        paras: [
          "For mosques and churches, cover shoulders and knees; women may need to cover their hair in mosques. At Red Sea resorts, normal beachwear is completely fine.",
        ],
      },
    ],
  },
  {
    slug: "egypt-travel-budget",
    title: "How Much Does an Egypt Trip Cost?",
    excerpt:
      "A realistic, transparent breakdown of what a fair Egypt trip costs — and where to save.",
    image: U("1503177119275-0aa32b3a9368"),
    category: "Money",
    readTime: "7 min read",
    updated: "May 2026",
    body: [
      {
        paras: [
          "Egypt can be very affordable or very expensive depending on how you travel. The biggest factors are your hotel standard, whether you cruise, and how you get between cities. Here's a transparent guide.",
        ],
      },
      {
        heading: "Rough daily budgets (per person)",
        list: [
          "Value: $50–80/day — comfortable 3-star stays, group tours, local food",
          "Mid-range: $90–150/day — 4–5-star hotels, private guides, a Nile cruise",
          "Premium: $180+/day — luxury hotels, flights between cities, fine dining",
        ],
      },
      {
        heading: "Where the money goes",
        list: [
          "Accommodation — the single biggest variable",
          "Entry tickets — many sites charge separately (we list these clearly)",
          "Transport — domestic flights save time but cost more than trains",
          "Tips — modest but customary across the trip",
        ],
      },
      {
        heading: "How we keep it fair",
        paras: [
          "We itemise every quote so you can see exactly where your money goes, and we keep prices down by being local — not by cutting guides, comfort, or support. You decide which optional extras are worth it.",
        ],
      },
    ],
  },
];

export const getTip = (slug: string) => tips.find((t) => t.slug === slug);
