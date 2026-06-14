import type { Author, Section } from "./content";

export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  category: string;
  author: Author;
  date: string;
  isoDate: string;
  readTime: string;
  featured?: boolean;
  body: Section[];
};

const U = (id: string, w = 1200) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`;

const layla: Author = { name: "Layla Hassan", avatar: "https://i.pravatar.cc/120?img=47", role: "Local guide & writer" };
const omar: Author = { name: "Omar El-Sayed", avatar: "https://i.pravatar.cc/120?img=13", role: "Founder, Fair Egypt Tours" };

export const blogCategories = ["All", "Itineraries", "Guides", "Food", "Tips"];

export const posts: Post[] = [
  {
    slug: "7-days-in-egypt-itinerary",
    title: "The Perfect 7 Days in Egypt: A Fair, Unrushed Itinerary",
    excerpt:
      "Cairo, a Nile cruise, and Aswan in one well-paced week — exactly how we'd plan it for a friend.",
    image: U("1572252009286-268acec5ca0a"),
    category: "Itineraries",
    author: layla,
    date: "May 28, 2026",
    isoDate: "2026-05-28",
    readTime: "9 min read",
    featured: true,
    body: [
      {
        paras: [
          "Seven days is the sweet spot for a first trip to Egypt: enough to see the headline sights without sprinting. Here's the itinerary we recommend most often — and why each piece is where it is.",
        ],
      },
      { heading: "Days 1–2: Cairo & Giza", paras: ["Land in Cairo, rest, then dedicate a full day to the Pyramids of Giza, the Sphinx, and the Egyptian Museum. Spend the second morning in Islamic and Coptic Cairo before flying south."] },
      { heading: "Days 3–5: Nile cruise to Aswan", paras: ["Fly to Luxor and board a Nile cruise. Visit Karnak and the Valley of the Kings, then sail south, stopping at Edfu and Kom Ombo, arriving in Aswan refreshed rather than exhausted."] },
      { heading: "Day 6: Abu Simbel & Aswan", paras: ["An early trip to Abu Simbel, then a felucca sail at sunset — the most relaxing day of the week."] },
      { heading: "Day 7: Home or the Red Sea", paras: ["Fly home from Aswan, or extend with a couple of beach days on the Red Sea if you have time."] },
      { heading: "Why this works", quote: "It front-loads the big monuments, then slows down — so you end the week relaxed, not wiped out." },
    ],
  },
  {
    slug: "is-egypt-safe-for-tourists",
    title: "Is Egypt Safe for Tourists? An Honest Answer",
    excerpt: "A calm, realistic look at safety in Egypt's tourist areas — and the simple habits that help.",
    image: U("1568322445389-f64ac2515020"),
    category: "Guides",
    author: omar,
    date: "May 15, 2026",
    isoDate: "2026-05-15",
    readTime: "7 min read",
    body: [
      { paras: ["It's the most common question we get, and it deserves a straight answer: yes, the main tourist areas of Egypt are well-established and visited safely by millions of people every year."] },
      { heading: "What to expect", paras: ["Tourist sites are well-policed, and with a licensed guide and a private driver, getting around is smooth. The most common hassle is persistent sellers at busy sites — friendly but firm works best."] },
      { heading: "Simple habits that help", list: ["Travel with a reputable, licensed operator", "Agree prices before camel rides or extras", "Dress modestly at religious sites", "Keep valuables in your hotel safe", "Drink bottled or filtered water"] },
      { heading: "How we help", paras: ["We stay reachable throughout your trip, our guides know each site, and we handle the logistics so you can relax and enjoy Egypt."] },
    ],
  },
  {
    slug: "top-things-to-do-in-cairo",
    title: "Top 10 Things to Do in Cairo",
    excerpt: "Beyond the pyramids — the museums, markets, and moments that make Cairo unforgettable.",
    image: U("1578321272176-b7bbc0679853"),
    category: "Guides",
    author: layla,
    date: "Apr 30, 2026",
    isoDate: "2026-04-30",
    readTime: "8 min read",
    body: [
      { paras: ["Cairo is so much more than the Giza Plateau. Here are ten experiences we send travellers to again and again."] },
      { heading: "The list", ordered: true, list: ["Pyramids of Giza & the Sphinx", "The Grand Egyptian Museum", "Khan el-Khalili bazaar", "The Citadel & Alabaster Mosque", "Coptic Cairo & the Hanging Church", "A felucca on the Nile at sunset", "Al-Muizz Street after dark", "Koshari at a classic downtown spot", "Coffee at a historic ahwa (café)", "Sunset from a rooftop with a pyramid view"] },
      { heading: "A local tip", paras: ["Give yourself at least two full days. Cairo rewards a slower pace, and the traffic means it's worth grouping sights by neighbourhood — something we build into every itinerary."] },
    ],
  },
  {
    slug: "nile-cruise-guide",
    title: "Nile Cruise Guide: Luxor to Aswan",
    excerpt: "Everything you need to choose the right Nile cruise — routes, boats, and what a day looks like.",
    image: U("1539768942893-daf53e448371"),
    category: "Guides",
    author: omar,
    date: "Apr 12, 2026",
    isoDate: "2026-04-12",
    readTime: "8 min read",
    body: [
      { paras: ["A Nile cruise is the most relaxing way to see Upper Egypt's temples — your hotel moves with you, and the scenery between stops is half the magic."] },
      { heading: "Which direction?", paras: ["Most cruises run between Luxor and Aswan in either direction over 3–4 nights, visiting Edfu and Kom Ombo along the way. Both directions see the same sights."] },
      { heading: "What a day looks like", list: ["Morning temple visit with your guide", "Back on board for lunch as you sail", "Afternoon on the sun deck or by the pool", "Evening dinner and sometimes live music"] },
      { heading: "Choosing a boat", paras: ["Standards range from comfortable to genuinely luxurious. We match the boat to your budget and are upfront about what each level includes — no surprises."] },
    ],
  },
  {
    slug: "best-egyptian-food-to-try",
    title: "10 Egyptian Dishes You Have to Try",
    excerpt: "From koshari to feteer — a friendly tour of Egypt's best-loved, best-value food.",
    image: U("1601050690597-df0568f70950"),
    category: "Food",
    author: layla,
    date: "Mar 22, 2026",
    isoDate: "2026-03-22",
    readTime: "6 min read",
    body: [
      { paras: ["Egyptian food is hearty, affordable, and delicious. Here are the dishes we always tell travellers to seek out."] },
      { heading: "Must-try dishes", ordered: true, list: ["Koshari — the national comfort dish of rice, pasta, and lentils", "Ful medames — slow-cooked fava beans", "Ta'ameya — Egyptian falafel made with fava beans", "Molokhia — a green herb stew", "Feteer meshaltet — flaky layered pastry", "Hawawshi — spiced meat in crisp bread", "Mahshi — stuffed vegetables", "Om Ali — warm bread-and-milk dessert", "Fresh sugarcane juice", "Mint tea, the proper way"] },
      { heading: "Eating well for less", paras: ["Some of the best food in Egypt is the cheapest. We're happy to point you to honest local spots — and can build food stops into your tour."] },
    ],
  },
  {
    slug: "how-much-does-egypt-trip-cost",
    title: "How Much Does a Trip to Egypt Really Cost?",
    excerpt: "A transparent breakdown of budgets, plus where it's worth spending and where to save.",
    image: U("1503177119275-0aa32b3a9368"),
    category: "Tips",
    author: omar,
    date: "Mar 5, 2026",
    isoDate: "2026-03-05",
    readTime: "7 min read",
    body: [
      { paras: ["Egypt has a price for almost every budget. The honest truth is that your hotel choice and whether you cruise will drive most of the cost — the sights themselves are relatively cheap."] },
      { heading: "Sample budgets per person, per day", list: ["Value: $50–80", "Mid-range: $90–150", "Premium: $180+"] },
      { heading: "Worth spending on", paras: ["A licensed guide, a private car, and at least one Nile-view night. These are the things travellers remember most."] },
      { heading: "Easy to save on", paras: ["Local food, trains over flights for shorter hops, and shoulder-season travel. We'll always show you the trade-offs honestly so you choose what's right for you."] },
    ],
  },
];

export const getPost = (slug: string) => posts.find((p) => p.slug === slug);
