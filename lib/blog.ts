import type { Author, Section } from "./content";

export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  imageAlt?: string;
  category: string;
  author: Author;
  date: string;
  isoDate: string;
  /** Last-updated date (ISO), for freshness signals. Falls back to isoDate. */
  updatedIso?: string;
  readTime: string;
  featured?: boolean;
  /** SEO overrides + extraction. */
  metaTitle?: string;
  metaDescription?: string;
  body: Section[];
  /** Self-contained Q&As → FAQ section + FAQPage schema. */
  faqs?: { q: string; a: string }[];
  /** Internal links into the topic cluster (destinations, tours, categories). */
  related?: { href: string; label: string }[];
};

const U = (id: string, w = 1200) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`;

const layla: Author = { name: "Layla Hassan", avatar: "https://i.pravatar.cc/120?img=47", role: "Local guide & writer" };
const omar: Author = { name: "Omar El-Sayed", avatar: "https://i.pravatar.cc/120?img=13", role: "Founder, Fair Egypt Tours" };

export const blogCategories = ["All", "Itineraries", "Guides", "Food", "Tips"];

export const posts: Post[] = [
  /* ═══════════════════ 1. Grand Egyptian Museum ═══════════════════ */
  {
    slug: "grand-egyptian-museum-guide",
    title: "The Grand Egyptian Museum: A Complete Visitor's Guide",
    excerpt: "Everything you need to plan a visit to the Grand Egyptian Museum — timed tickets, how long you need, and what not to miss.",
    image: "/img/blog/gem.jpg",
    imageAlt: "The grand staircase and atrium of the Grand Egyptian Museum",
    category: "Guides",
    author: layla,
    date: "June 24, 2026",
    isoDate: "2026-06-24",
    updatedIso: "2026-06-24",
    readTime: "8 min read",
    featured: true,
    metaTitle: "Grand Egyptian Museum: Complete Visitor's Guide (2026)",
    metaDescription: "Plan your Grand Egyptian Museum visit — timed tickets, how long you need, the Tutankhamun galleries, how to get there and the best time to go.",
    body: [
      { paras: ["The Grand Egyptian Museum (GEM) opened in November 2025 on the Giza Plateau and is the largest archaeological museum in the world dedicated to a single civilisation. Plan four to five hours, book a timed ticket online in advance, and arrive in the morning. Here's everything you need to know before you go."] },
      { heading: "What is the Grand Egyptian Museum?", paras: ["The GEM sits about two kilometres from the Pyramids of Giza and holds over 100,000 artefacts, with roughly 50,000 on display across vast, daylight-filled galleries. The building itself is part of the experience — a stone-clad atrium, a grand staircase lined with colossal statues, and tall windows that frame the pyramids in the distance.", "It gathers, for the first time in one place, collections that were previously spread across Egypt — most importantly the complete treasures of Tutankhamun."] },
      { heading: "How do you get tickets?", paras: ["Entry is timed and must be booked online in advance — there are no walk-up sales at the gate, and there's a daily visitor cap. You choose a time slot when you book, so it's worth reserving a few days ahead in high season.", "A standard ticket covers the main galleries; the Tutankhamun galleries are included. Children, students and Egyptians pay reduced rates."] },
      { heading: "How long do you need at the GEM?", paras: ["Budget four to five hours for a full visit, or two to three if you only want the highlights. It's genuinely large, so a guide who can steer you to what matters — and skip what doesn't — makes a big difference, especially on a first visit."] },
      { heading: "What should you not miss?", list: ["The complete Tutankhamun collection — the gold mask, the nested coffins, jewellery, chariots and thousands of everyday objects, shown together for the first time", "The grand staircase, lined with colossal royal statues, leading up toward a window onto the pyramids", "The hanging obelisk of Ramesses II at the entrance", "Khufu's reconstructed solar boat", "The towering statue of Ramesses II in the atrium"] },
      { heading: "How do you get there?", paras: ["The museum is at the foot of the Giza Plateau, roughly 45–60 minutes from central Cairo depending on traffic. Because it's right by the pyramids, many travellers pair the two — though doing both properly is a full, busy day. We include private transfers so you skip the taxi haggling."] },
      { heading: "When is the best time to visit?", paras: ["The galleries open daily at around 9am and close near 6pm, with extended evening hours on some days (typically Wednesday and Saturday). Mornings are quietest; the Tutankhamun rooms fill up later in the day. An early slot is the single best tip for a calmer visit."] },
      { heading: "A few practical tips", list: ["Book your timed ticket online before you arrive", "Wear comfortable shoes — there's a lot of walking", "Allow more time than you think; people consistently underestimate it", "Consider a licensed guide for the context behind the objects", "There are cafés and restaurants on site if you want to make a half-day of it"] },
    ],
    faqs: [
      { q: "When did the Grand Egyptian Museum open?", a: "The Grand Egyptian Museum opened to the public in November 2025, after years of anticipation. It is the largest archaeological museum in the world devoted to a single civilisation, on the Giza Plateau about two kilometres from the pyramids." },
      { q: "Do you need to book GEM tickets in advance?", a: "Yes. Entry to the Grand Egyptian Museum is timed and must be booked online in advance — there are no walk-up sales and there's a daily visitor cap. Reserve a morning slot a few days ahead in high season for the quietest visit." },
      { q: "How long do you need at the Grand Egyptian Museum?", a: "Budget four to five hours for a full visit, or two to three hours for the highlights. The museum is very large, so a guide who can prioritise the key galleries is worth it, especially on a first visit." },
      { q: "Is the Tutankhamun collection at the GEM?", a: "Yes. The Grand Egyptian Museum is the first place to display the complete Tutankhamun collection together — the gold mask, the nested coffins, and over 5,000 objects from his tomb — in purpose-built galleries." },
      { q: "How far is the GEM from the pyramids?", a: "The Grand Egyptian Museum is about two kilometres from the Pyramids of Giza, at the foot of the plateau. Many travellers combine the two, though seeing both properly makes for a full, busy day." },
    ],
    related: [
      { href: "/tours/grand-egyptian-museum-day-tour", label: "Grand Egyptian Museum day tour" },
      { href: "/destinations/cairo", label: "Cairo & Giza travel guide" },
      { href: "/tours/category/pyramids-giza-tours", label: "All Pyramids & Giza tours" },
    ],
  },

  /* ═══════════════════ 2. Getting around Egypt ═══════════════════ */
  {
    slug: "getting-around-egypt-transport-guide",
    title: "Getting Around Egypt: A Traveller's Transport Guide",
    excerpt: "Flights, trains, Nile cruises and private cars — how to get around Egypt comfortably, and what each option really costs.",
    image: "/img/blog/transport.jpg",
    imageAlt: "A private aircraft on the tarmac at an Egyptian airport",
    category: "Tips",
    author: omar,
    date: "June 24, 2026",
    isoDate: "2026-06-24",
    updatedIso: "2026-06-24",
    readTime: "9 min read",
    metaTitle: "Getting Around Egypt: Transport Guide for Travellers",
    metaDescription: "How to get around Egypt — domestic flights, sleeper trains, Nile cruises, private cars and ride-hailing — with real travel times and practical tips.",
    body: [
      { paras: ["Egypt's distances are large, so most trips combine a short domestic flight or an overnight train between regions with a private car and driver inside each city. Here's how each option works, when to use it, and what to expect."] },
      { heading: "Domestic flights", paras: ["Flying is the fastest way to cover Egypt's north–south distances. EgyptAir runs frequent flights from Cairo to Luxor and Aswan (about 1–1.5 hours), plus the short hop to Abu Simbel. For a one- or two-week trip, a couple of internal flights save a lot of time. Book a few weeks ahead for the best fares."] },
      { heading: "Trains", paras: ["A sleeper train runs overnight between Cairo, Luxor and Aswan, with private cabins and meals — a comfortable, scenic alternative to flying that also saves a hotel night. There are also air-conditioned day trains. Tourist tickets are usually booked through the sleeper operator or your tour company."] },
      { heading: "Nile cruise", paras: ["Between Luxor and Aswan, a Nile cruise doubles as both transport and sightseeing — you sail to temples you can only reach from the river. For that stretch, it's often the most relaxing way to travel rather than a separate transfer."] },
      { heading: "Private car & driver", paras: ["Within cities and for day trips, a private car with a professional driver is by far the easiest way to move. It avoids the stress of city traffic and lets you plan days by geography rather than guesswork. We don't recommend self-driving for visitors — traffic is intense and the rules of the road are informal. Every multi-day plan we run includes private transfers."] },
      { heading: "Taxis & ride-hailing", paras: ["In Cairo and Alexandria, ride-hailing apps (Uber and Careem) work well and take the haggling out of getting around — fares are set in the app. With street taxis, agree the price before you set off, as meters are often not used."] },
      { heading: "The Cairo metro & local transport", paras: ["Cairo's metro is cheap, fast and a good way to skip traffic on a few routes; there are women-only carriages if you prefer. Beyond that, microbuses and local buses exist but aren't really set up for first-time visitors."] },
      { heading: "What we recommend", paras: ["For most trips: fly or take the sleeper train between regions, use a Nile cruise for the Luxor–Aswan stretch, and keep a private car and guide within each city. That combination is comfortable, efficient and removes the daily logistics so you can focus on the sights."] },
    ],
    faqs: [
      { q: "Is it safe to drive in Egypt as a tourist?", a: "We don't recommend self-driving for visitors. City traffic is intense and the rules of the road are informal, so a private car with a professional driver — or ride-hailing apps in Cairo and Alexandria — is far less stressful and safer." },
      { q: "Should I fly or take the train from Cairo to Luxor?", a: "Both work. Flying takes about an hour and is fastest; the overnight sleeper train takes around 9–10 hours but is comfortable, scenic and saves a hotel night. Many travellers fly one way and take the cruise or train the other." },
      { q: "Does Uber work in Egypt?", a: "Yes. Uber and Careem both operate in Cairo and Alexandria, with fares set in the app, which removes the need to haggle. For longer day trips and sightseeing, a private car with a guide is more practical." },
      { q: "What is the best way to get around Egypt?", a: "For most trips, combine short domestic flights or an overnight train between regions, a Nile cruise for the Luxor–Aswan stretch, and a private car with a driver inside each city. It's the most comfortable, time-efficient mix." },
    ],
    related: [
      { href: "/blog/nile-cruises-in-egypt-guide", label: "Nile cruises in Egypt: the full guide" },
      { href: "/blog/best-time-to-visit-egypt-weather-guide", label: "The best time to visit Egypt" },
      { href: "/destinations", label: "Browse Egypt's destinations" },
    ],
  },

  /* ═══════════════════ 3. Best time to visit ═══════════════════ */
  {
    slug: "best-time-to-visit-egypt-weather-guide",
    title: "The Best Time to Visit Egypt: A Month-by-Month Weather Guide",
    excerpt: "When to visit Egypt for comfortable weather, fewer crowds and fair prices — broken down month by month and region by region.",
    image: "/img/dest/cairo/hero.jpg",
    imageAlt: "The Pyramids of Giza under clear skies",
    category: "Tips",
    author: layla,
    date: "June 24, 2026",
    isoDate: "2026-06-24",
    updatedIso: "2026-06-24",
    readTime: "8 min read",
    metaTitle: "Best Time to Visit Egypt: Month-by-Month Weather Guide",
    metaDescription: "The best time to visit Egypt is October to April. A month-by-month weather guide with regional differences, crowds, prices and Ramadan.",
    body: [
      { paras: ["The best time to visit Egypt is October to April, when daytime temperatures are comfortable for sightseeing. Summer (May to September) is hot, especially in the south around Luxor and Aswan. Here's the full month-by-month picture, and how it changes by region."] },
      { heading: "Egypt's seasons at a glance", paras: ["Egypt has two broad seasons for travellers. The cool, dry season from October to April is the main tourist window — pleasant days, cold-ish desert nights, and the most comfortable conditions for the open-air sites. The hot season from May to September brings high temperatures inland, though it's prime time for the Red Sea, where the sea stays warm and the resorts are built for the heat."] },
      { heading: "Egypt month by month", list: ["October–November: warm, dry and comfortable, with lighter crowds — one of the best windows", "December–January: the coolest months and the busiest, especially around Christmas and New Year; book early", "February–March: still cool and pleasant; March is excellent value before the spring peak", "April: warm and lovely, the last comfortable month before the heat builds", "May–September: hot inland (often 35–45°C in Luxor and Aswan); sightsee early, or focus on the Red Sea"] },
      { heading: "How the weather differs by region", paras: ["Cairo and the north are milder than the south; the Nile Valley around Luxor and Aswan is the hottest part of any itinerary in summer. The Red Sea coast (Hurghada, Sharm El Sheikh) is warm and sunny almost year-round, with the sea comfortable for swimming even in winter. The Mediterranean coast and Alexandria are at their best in late spring and early autumn, and can be wet and windy in winter."] },
      { heading: "Crowds and prices", paras: ["December and January are the peak — the best weather, the highest prices and the busiest sites. The shoulder months of October–November and March–April give you almost the same comfortable weather with fewer crowds and better value. We think those shoulder weeks are the sweet spot."] },
      { heading: "Visiting during Ramadan", paras: ["Ramadan shifts roughly 11 days earlier each year, so check the dates for your trip. Sites stay open, but some hours change and many locals fast during daylight; evenings are lively and festive. It's a fine time to travel if you're aware of the rhythm of the day."] },
    ],
    faqs: [
      { q: "What is the best month to visit Egypt?", a: "October, November, March and April are the sweet spot — comfortable warm weather with lighter crowds and better value than the December–January peak. Any month from October to April is good for sightseeing." },
      { q: "Is Egypt too hot to visit in summer?", a: "Inland Egypt — Cairo and especially Luxor and Aswan — is very hot from May to September, often 35–45°C, so sightseeing is best done early in the day. Summer is, however, an ideal time for the Red Sea coast, which is built for the heat." },
      { q: "What is the best time for a Nile cruise?", a: "October to April, when the daytime heat in Luxor and Aswan is manageable for the temple visits. The cooler months are also the most pleasant for time on deck and felucca sails." },
      { q: "When is the best time for the Red Sea?", a: "The Red Sea is warm and sunny almost year-round. March to May and September to November are the most comfortable on land, while winter is mild and popular for escaping the European cold. High summer is hot but fine if you mainly want the water." },
    ],
    related: [
      { href: "/destinations", label: "Egypt destinations & travel guides" },
      { href: "/blog/nile-cruises-in-egypt-guide", label: "Nile cruises in Egypt" },
      { href: "/blog/getting-around-egypt-transport-guide", label: "Getting around Egypt" },
    ],
  },

  /* ═══════════════════ 4. Luxor travel guide ═══════════════════ */
  {
    slug: "luxor-travel-guide",
    title: "Luxor Travel Guide: Temples, Tombs & How to Plan It",
    excerpt: "A complete guide to Luxor — the Valley of the Kings, Karnak, how many days you need, getting there and where to stay.",
    image: "/img/dest/luxor/hero.jpg",
    imageAlt: "The Great Hypostyle Hall at Karnak Temple, Luxor",
    category: "Guides",
    author: layla,
    date: "June 24, 2026",
    isoDate: "2026-06-24",
    updatedIso: "2026-06-24",
    readTime: "11 min read",
    metaTitle: "Luxor Travel Guide: Temples, Tombs & How to Plan It",
    metaDescription: "A complete Luxor travel guide — the Valley of the Kings, Karnak and Luxor temples, Hatshepsut, how many days, getting there, where to stay and the best time.",
    body: [
      { paras: ["Luxor, built over ancient Thebes, holds roughly a third of the world's ancient monuments in one stretch of the Nile. It splits between the East Bank, with its great temples, and the West Bank, where the pharaohs were buried — and it needs two to three days to do well. Here's how to plan it."] },
      { heading: "Why visit Luxor?", paras: ["Where Cairo gives you the pyramids, Luxor gives you the colour and detail of ancient Egypt up close — 3,000-year-old paint still bright on tomb walls, columns you can walk between, and reliefs you can actually read. It was the capital of Egypt at the height of the New Kingdom, and the wealth of an empire was poured into its temples."] },
      { heading: "East Bank vs West Bank", paras: ["The Nile divides Luxor in two. The East Bank, where the sun rises, is the city side and home to the temples of the living — Karnak and Luxor Temple. The West Bank, where the sun set, was the land of the dead, with the Valley of the Kings, Hatshepsut's Temple and the nobles' tombs. Most itineraries give the West Bank an early morning and the East Bank a separate, cooler part of the day."] },
      { heading: "The top things to do in Luxor", list: ["The Valley of the Kings — painted New Kingdom tombs, including Tutankhamun's", "Karnak Temple — the vast complex and its Great Hypostyle Hall of 134 columns", "Luxor Temple — best after dark, when it's floodlit and cooler", "Hatshepsut's Temple at Deir el-Bahari — three dramatic cliff terraces", "The Luxor Museum — a small, well-curated collection on the corniche", "A sunrise hot-air balloon over the West Bank", "The Colossi of Memnon — two giant seated statues on the way to the tombs"] },
      { heading: "How many days do you need in Luxor?", paras: ["Two days covers the highlights: one early morning on the West Bank for the Valley of the Kings and Hatshepsut's Temple, and a day for Karnak and Luxor Temple. A third day adds quieter tombs, the museum, or a dawn balloon flight, and lets you slow the pace in the heat."] },
      { heading: "How to get to Luxor", paras: ["EgyptAir flies from Cairo in about an hour, and there's a comfortable overnight sleeper train. Many travellers also arrive by Nile cruise from Aswan. The airport is around 15 minutes from the East Bank hotels."] },
      { heading: "Where to stay", paras: ["The East Bank corniche is the central choice — walkable to Luxor Temple and the museum, with the widest range of Nile-view hotels. The West Bank is quieter and more rural, closer to the tombs and the balloon launch sites, for travellers who want a calmer, more local base."] },
      { heading: "Best time to visit & practical tips", paras: ["October to April is the comfortable season; summer regularly tops 40°C, so sightseeing is best at dawn and after dark. A standard Valley of the Kings ticket covers three tombs (Tutankhamun, Seti I and Nefertari cost extra), and the open set rotates. Go early, carry water, and bring a hat — there's little shade on the West Bank."] },
    ],
    faqs: [
      { q: "How many days do you need in Luxor?", a: "Two days covers the highlights — one early morning on the West Bank for the Valley of the Kings and Hatshepsut's Temple, and a day for Karnak and Luxor Temple. A third day adds quieter tombs, the museum or a sunrise balloon flight." },
      { q: "How many tombs can you enter in the Valley of the Kings?", a: "A standard ticket admits you to three tombs, chosen from those open that day, as the open set rotates to limit wear. Tutankhamun, Seti I and Nefertari (in the nearby Valley of the Queens) require separate premium tickets." },
      { q: "Should you see Luxor by cruise or by land?", a: "Both work well. A Nile cruise between Luxor and Aswan turns transfers into part of the trip and adds Edfu and Kom Ombo. Staying in a Luxor hotel suits travellers who want more time at the temples and tombs." },
      { q: "What is the best time to visit Luxor?", a: "October to April, when days sit around 25–30°C and the open-air sites are bearable. Summer often passes 40°C, so visits stick to early morning and after dark. The cooler months are also best for sunrise hot-air balloon flights." },
    ],
    related: [
      { href: "/destinations/luxor", label: "Luxor destination guide" },
      { href: "/blog/nile-cruises-in-egypt-guide", label: "Nile cruises in Egypt" },
      { href: "/blog/aswan-travel-guide", label: "Aswan travel guide" },
    ],
  },

  /* ═══════════════════ 5. Pyramids of Giza ═══════════════════ */
  {
    slug: "pyramids-of-giza-sphinx-guide",
    title: "The Pyramids of Giza & the Great Sphinx: The Complete Guide",
    excerpt: "Everything about visiting the Pyramids of Giza and the Sphinx — history, going inside, tickets, the best time of day and what's nearby.",
    image: "/img/blog/pyramids.jpg",
    imageAlt: "The Great Pyramids of Giza and the Great Sphinx",
    category: "Guides",
    author: layla,
    date: "June 24, 2026",
    isoDate: "2026-06-24",
    updatedIso: "2026-06-24",
    readTime: "10 min read",
    featured: true,
    metaTitle: "Pyramids of Giza & the Sphinx: The Complete Guide",
    metaDescription: "A complete guide to the Pyramids of Giza and the Great Sphinx — history, going inside, tickets and hours, the best time to visit, and nearby Saqqara.",
    body: [
      { paras: ["The Pyramids of Giza — Khufu, Khafre and Menkaure — and the Great Sphinx are about 4,500 years old and sit on a desert plateau at the very edge of Cairo. The site is open roughly 7am to 4pm, and going early is the single best decision you can make. Here's the complete guide to visiting."] },
      { heading: "A short history", paras: ["The pyramids were built during Egypt's Fourth Dynasty, around 2600–2500 BC, as tombs for three pharaohs. The Great Pyramid of Khufu was the tallest human-made structure on earth for nearly 4,000 years, built from over two million blocks. The Great Sphinx, carved from a single ridge of limestone, has guarded the plateau ever since."] },
      { heading: "The three pyramids", paras: ["The Great Pyramid of Khufu is the largest and oldest. The middle pyramid of Khafre looks taller because it stands on higher ground and still keeps a cap of its original smooth casing at the top. The smallest, Menkaure, completes the trio, surrounded by smaller 'queens' pyramids."] },
      { heading: "Can you go inside a pyramid?", paras: ["Yes — a separate, limited daily ticket lets you climb the narrow internal passage of the Great Pyramid to the empty burial chamber. It's a hot, steep, low scramble with little to see at the end except the engineering itself, so it's best for the genuinely curious and not for anyone claustrophobic. The smaller pyramids are usually cheaper to enter and quieter."] },
      { heading: "The Great Sphinx & the Valley Temple", paras: ["Below the pyramids, the Sphinx sits in its own enclosure beside the Valley Temple of Khafre, where the pharaoh's body was prepared for burial. The classic head-on view of the Sphinx with a pyramid rising behind it is from the temple terrace."] },
      { heading: "Tickets and hours", paras: ["The plateau opens around 7am and closes near 4pm (later in Ramadan). A general entry ticket gives you the whole site; going inside the Great Pyramid, the Solar Boat Museum and the smaller pyramids each cost extra. Most gates now take card payment. Budget two to three hours for the site itself."] },
      { heading: "The best time of day to visit", paras: ["Arrive at opening time. You'll beat both the heat and the tour coaches, and the early light is kind for photos. Late afternoon is the second-best window, and there's an evening sound-and-light show if you want to see the pyramids floodlit after dark."] },
      { heading: "What's nearby", paras: ["The pyramid story is bigger than Giza. Half an hour south, Saqqara holds the Step Pyramid of Djoser — the oldest large stone building on earth — and quiet Dahshur has the Bent and Red Pyramids that came just before Giza. The new Grand Egyptian Museum is minutes away, at the foot of the plateau."] },
      { heading: "Tips for a smooth visit", list: ["Go at opening time and carry water and a hat — there's no shade", "Agree the price before any camel or horse ride, and pay at the end", "Wear comfortable, closed shoes for the sand and uneven ground", "A licensed guide turns scattered monuments into one connected story", "Pair Giza with Saqqara or the Grand Egyptian Museum to understand the whole picture"] },
    ],
    faqs: [
      { q: "Can you go inside the Pyramids of Giza?", a: "Yes. A separate, limited daily ticket lets you climb the narrow passage inside the Great Pyramid of Khufu to the empty burial chamber. It's a steep, hot scramble best suited to the genuinely curious. The smaller pyramids are usually cheaper and quieter to enter." },
      { q: "What is the best time of day to visit the pyramids?", a: "Arrive at opening time, around 7am. You beat the heat and the tour coaches, and the early light is best for photos. Late afternoon is the next-best window, and there's an evening sound-and-light show to see the pyramids floodlit." },
      { q: "How long do you need at the Pyramids of Giza?", a: "Budget two to three hours for the plateau itself — the three pyramids, the panorama point and the Sphinx. Add more if you want to go inside a pyramid, ride a camel, or combine it with the Grand Egyptian Museum nearby." },
      { q: "How were the pyramids built?", a: "The Great Pyramid was built around 2560 BC from over two million limestone blocks, hauled and levered into place by an organised, paid workforce over roughly 20 years. They were tombs for the pharaohs, not built by slaves as the old myth suggests." },
      { q: "Can you ride a camel at the pyramids?", a: "Yes, camel and horse rides are available along the desert edge for the classic photo. Agree the price clearly before you start and pay at the end — settling the cost up front avoids the most common hassle at the site." },
    ],
    related: [
      { href: "/tours/giza-pyramids-day-tour", label: "Giza Pyramids & Sphinx day tour" },
      { href: "/tours/category/pyramids-giza-tours", label: "All Pyramids & Giza tours" },
      { href: "/blog/grand-egyptian-museum-guide", label: "Grand Egyptian Museum guide" },
      { href: "/destinations/cairo", label: "Cairo & Giza travel guide" },
    ],
  },

  /* ═══════════════════ 6. Nile cruises ═══════════════════ */
  {
    slug: "nile-cruises-in-egypt-guide",
    title: "Nile Cruises in Egypt: Routes, Best Time & How to Choose",
    excerpt: "How Nile cruises work — the Luxor–Aswan route and its temple stops, when to go, cruise vs dahabiya, and how to choose the right one.",
    image: "/img/blog/nile-cruise.jpg",
    imageAlt: "A Nile cruise boat sailing past the riverbank",
    category: "Guides",
    author: omar,
    date: "June 24, 2026",
    isoDate: "2026-06-24",
    updatedIso: "2026-06-24",
    readTime: "10 min read",
    metaTitle: "Nile Cruises in Egypt: Routes, Best Time & How to Choose",
    metaDescription: "A complete guide to Nile cruises in Egypt — the Luxor–Aswan route and stops, best time to sail, cruise vs dahabiya, how many nights and what's included.",
    body: [
      { paras: ["A Nile cruise sails between Luxor and Aswan, usually over three or four nights, stopping at temples you can only reach easily from the river. It's both your transport and your sightseeing rolled into one, and the best months to sail are October to April. Here's how it works and how to choose the right one."] },
      { heading: "What is a Nile cruise?", paras: ["You stay on a boat that moves between sites while you sleep or relax on deck, then step off for guided visits along the way. It removes the daily packing-and-transfers of land travel, and it's the way Egyptians and travellers have moved through Upper Egypt for thousands of years. For the Luxor–Aswan stretch, it's usually the most relaxing option."] },
      { heading: "The route and its stops", paras: ["The classic cruise runs between Luxor and Aswan in either direction. Along the way you typically visit Karnak and the Valley of the Kings at Luxor, the well-preserved Temple of Horus at Edfu, the double temple of Kom Ombo on the riverbank, and Philae Temple at Aswan. Three- and four-night cruises cover this core; longer seven-night itineraries add more time at each end."] },
      { heading: "Cruise ship vs dahabiya", paras: ["Standard cruise ships are larger floating hotels with 50–100 cabins, pools and full facilities — comfortable, sociable and good value. A dahabiya is a small, traditional sailing boat with just a handful of cabins; it's quieter, more intimate and moves at a gentler pace, stopping at smaller sites the big boats skip. Dahabiyas cost more but feel a world apart."] },
      { heading: "How many nights do you need?", paras: ["Three or four nights is the sweet spot for the Luxor–Aswan route, fitting all the main temples without rushing. The direction matters less than the season and the boat; sailing Luxor to Aswan eases you gently southward, while Aswan to Luxor front-loads the long Abu Simbel option at the start."] },
      { heading: "The best time to cruise", paras: ["October to April is the comfortable window, when the daytime heat in Luxor and Aswan is manageable for the temple visits and the evenings on deck are pleasant. Summer cruises run but are hot, so sightseeing happens early and you spend the afternoons by the pool."] },
      { heading: "What's included (and what isn't)", paras: ["Most cruises are full-board, with all meals and guided excursions to the main temples included. Entry tickets to some sites, drinks, optional tours (like Abu Simbel) and gratuities are usually extra. Always check exactly which excursions and which version of each site are part of your fare."] },
      { heading: "How to choose the right cruise", list: ["Decide on standard ship (value, facilities) vs dahabiya (intimate, slower)", "Pick three to four nights for the core route, or seven for a relaxed pace", "Travel October to April for the most comfortable weather", "Check which temple excursions and tickets are included", "Confirm the boat's standard and recent upkeep, not just the star rating"] },
    ],
    faqs: [
      { q: "How many nights is a Nile cruise?", a: "Three or four nights is the sweet spot for the classic Luxor–Aswan route, covering Karnak, the Valley of the Kings, Edfu, Kom Ombo and Philae without rushing. Longer seven-night cruises add more relaxed time at each end." },
      { q: "Is it better to sail Luxor to Aswan or Aswan to Luxor?", a: "Both cover the same temples; the direction is mostly about pacing. Luxor to Aswan eases you gently southward, while Aswan to Luxor lets you tackle the long Abu Simbel option at the start. Season and the boat itself matter more than direction." },
      { q: "What is the best time for a Nile cruise?", a: "October to April, when the daytime heat in Luxor and Aswan is manageable for the temple visits and the evenings on deck are pleasant. Summer cruises run but are hot, with sightseeing confined to early mornings." },
      { q: "What is the difference between a Nile cruise and a dahabiya?", a: "A standard cruise ship is a large floating hotel with many cabins, pools and facilities — comfortable and good value. A dahabiya is a small traditional sailing boat with only a few cabins; it's quieter, more intimate and slower, stopping at smaller sites the big boats skip." },
      { q: "What is included on a Nile cruise?", a: "Most Nile cruises are full-board, with all meals and the main guided temple excursions included. Entry tickets to some sites, drinks, optional tours such as Abu Simbel, and gratuities are usually extra — always confirm exactly what your fare covers." },
    ],
    related: [
      { href: "/destinations/luxor", label: "Luxor travel guide" },
      { href: "/destinations/aswan", label: "Aswan travel guide" },
      { href: "/blog/best-time-to-visit-egypt-weather-guide", label: "Best time to visit Egypt" },
    ],
  },

  /* ═══════════════════ 7. Aswan travel guide ═══════════════════ */
  {
    slug: "aswan-travel-guide",
    title: "Aswan Travel Guide: Philae, Felucca & the Nubian South",
    excerpt: "A complete guide to Aswan — Philae Temple, a felucca sail, Abu Simbel, how many days you need, and the best time to visit.",
    image: "/img/dest/aswan/hero.jpg",
    imageAlt: "Philae Temple on its island at Aswan",
    category: "Guides",
    author: layla,
    date: "June 24, 2026",
    isoDate: "2026-06-24",
    updatedIso: "2026-06-24",
    readTime: "9 min read",
    metaTitle: "Aswan Travel Guide: Philae, Felucca & the Nubian South",
    metaDescription: "A complete Aswan travel guide — Philae Temple, the Unfinished Obelisk, a felucca sail, Abu Simbel, Nubian villages, how many days and the best time to visit.",
    body: [
      { paras: ["Aswan is Egypt's southernmost and most relaxed city, set on a wide, island-dotted stretch of the Nile that many travellers find the most beautiful in the country. One to two days covers it, often as the start or end of a Nile cruise. Here's how to plan your visit."] },
      { heading: "Why visit Aswan?", paras: ["After the intensity of Cairo and Luxor, Aswan is where a trip exhales. Granite islands and white-sailed feluccas fill the river, the desert comes right down to the water, and the city has a distinct Nubian character you don't find further north. It's also the springboard for the great temples of Philae and Abu Simbel."] },
      { heading: "The top things to do in Aswan", list: ["Philae Temple — a graceful temple to Isis on its own island, reached by motorboat", "The Unfinished Obelisk — a giant obelisk still lying in its ancient granite quarry", "A felucca sail around Elephantine Island and Kitchener's botanical garden at sunset", "A Nubian village visit — bright painted houses, tea and home cooking", "The Nubian Museum — the best introduction to the region's history", "The High Dam and Lake Nasser, which reshaped this whole stretch of the Nile"] },
      { heading: "Visiting Abu Simbel from Aswan", paras: ["Abu Simbel — Ramesses II's colossal rock-cut temples — is about a 3 to 3.5-hour drive south of Aswan, and most visitors go as an early day-trip leaving before dawn, or fly the short hop from Aswan airport. If you can time it for around 22 February or 22 October, the rising sun lights the inner sanctuary during the sun festival, though it draws big crowds."] },
      { heading: "How many days do you need in Aswan?", paras: ["One full day covers the core — Philae, the Unfinished Obelisk and a sunset felucca. A second day adds a Nubian village, the Nubian Museum, or the long trip to Abu Simbel. Aswan rewards an unhurried rhythm more than a packed schedule."] },
      { heading: "How to get to Aswan", paras: ["EgyptAir flies from Cairo in about 1.5 hours, and the sleeper train runs overnight from Cairo via Luxor. Many travellers also arrive by Nile cruise from Luxor. The airport is around 25 minutes from the corniche."] },
      { heading: "Where to stay & the best time to visit", paras: ["Stay on the central corniche for the souk and the boat landings, on one of the Nile islands for a quiet resort feel, or in a Nubian guesthouse on Elephantine Island for village life. The comfortable season is October to April; Aswan is the hottest city on most itineraries in summer, so keep those months to early mornings and sunset sails."] },
    ],
    faqs: [
      { q: "How many days do you need in Aswan?", a: "One full day covers Philae Temple, the Unfinished Obelisk and a sunset felucca sail. A second day adds a Nubian village, the Nubian Museum, or the long day-trip to Abu Simbel. Many travellers spend one night here as part of a Nile cruise." },
      { q: "Can you visit Abu Simbel from Aswan?", a: "Yes. Abu Simbel is about a 3 to 3.5-hour drive south of Aswan; most visitors go as an early day-trip leaving before dawn, or fly the short hop from Aswan airport. Going early means you reach the temples in the cooler morning light." },
      { q: "What is a felucca and is it worth doing in Aswan?", a: "A felucca is a traditional wooden sailing boat, and a sunset sail past Elephantine Island and Kitchener's garden is the classic Aswan experience — slow, quiet and one of the prettiest hours on the Nile. It's well worth doing." },
      { q: "What is the best time to visit Aswan?", a: "October to April, when days are around 25–30°C and the river evenings are cool. Aswan is the hottest stop on most Egypt itineraries in summer, often above 40°C, so May to September visits stick to early mornings and sunset sails." },
    ],
    related: [
      { href: "/destinations/aswan", label: "Aswan destination guide" },
      { href: "/destinations/abu-simbel", label: "Abu Simbel travel guide" },
      { href: "/blog/nile-cruises-in-egypt-guide", label: "Nile cruises in Egypt" },
    ],
  },

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
