import type { Section } from "./content";

export type Destination = {
  slug: string;
  name: string;
  region: string;
  tagline: string;
  heroImage: string;
  cardImage: string;
  tourCount: number;
  intro: string;
  quickFacts: { label: string; value: string }[];
  overview: Section[];
  history: string[];
  gettingThere: string[];
  whereToStay: { area: string; note: string }[];
  thingsToDo: { title: string; text: string }[];
  bestTime: string;
  gallery: string[];
  tourSlugs: string[];
};

const U = (id: string, w = 1200) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`;

export const destinations: Destination[] = [
  {
    slug: "cairo",
    name: "Cairo & Giza",
    region: "Lower Egypt",
    tagline: "The pyramids, the museum, and a thousand years of layered history.",
    heroImage: U("1572252009286-268acec5ca0a", 1900),
    cardImage: U("1572252009286-268acec5ca0a", 800),
    tourCount: 14,
    intro:
      "Egypt's vast capital pairs the last surviving Ancient Wonder with medieval mosques, Coptic churches, and the world's greatest collection of pharaonic treasure.",
    quickFacts: [
      { label: "Best for", value: "First-time visitors" },
      { label: "Ideal stay", value: "2–3 days" },
      { label: "Highlight", value: "Pyramids of Giza" },
      { label: "Airport", value: "Cairo (CAI)" },
    ],
    overview: [
      {
        heading: "Why visit Cairo & Giza",
        paras: [
          "Cairo is where almost every Egypt trip begins. On its western edge, the Pyramids of Giza and the Great Sphinx rise straight out of the desert, a short drive from the city's hotels. It is the only place on earth where you can stand beside a 4,500-year-old wonder in the morning and wander a medieval bazaar by night.",
          "Beyond the pyramids, Cairo rewards curiosity: the Grand Egyptian Museum, the alleys of Islamic Cairo, the hanging churches of Coptic Cairo, and the spice-scented lanes of Khan el-Khalili. It rewards a guide even more — the city is big, busy, and far easier with someone who knows it.",
        ],
      },
    ],
    history: [
      "Giza's pyramids were built during the Fourth Dynasty (around 2600–2500 BC) as tombs for the pharaohs Khufu, Khafre, and Menkaure. The Great Pyramid stood as the tallest human-made structure for nearly 4,000 years.",
      "Cairo itself is far younger, founded in 969 AD by the Fatimid dynasty. Over the centuries it grew into the largest city in the medieval Islamic world, leaving a skyline of minarets, madrasas, and gates that still define Old Cairo today.",
    ],
    gettingThere: [
      "Cairo International Airport (CAI) is the main gateway, with direct flights from most of Europe, the Gulf, and beyond. It sits about 45–60 minutes from Giza depending on traffic.",
      "We include private airport pick-up with every multi-day plan, so a driver meets you at arrivals — no taxi haggling after a long flight.",
      "Within the city, private car with a driver is the easiest way to get around; ride-hailing apps also work well. We handle all transfers between sights on our tours.",
    ],
    whereToStay: [
      { area: "Giza / Pyramids", note: "Wake up to a pyramid view from your window — best for sunrise photos and an early start." },
      { area: "Zamalek", note: "A leafy island district with calmer streets, cafés, and boutique hotels by the Nile." },
      { area: "Downtown / Garden City", note: "Central, walkable, and close to the Egyptian Museum and the river." },
    ],
    thingsToDo: [
      { title: "Pyramids of Giza & the Sphinx", text: "Explore the three great pyramids, go inside one, and meet the Sphinx face to face." },
      { title: "Grand Egyptian Museum", text: "The world's largest archaeological museum, home to Tutankhamun's complete collection." },
      { title: "Khan el-Khalili Bazaar", text: "A 14th-century market for lanterns, spices, silver, and strong mint tea." },
      { title: "Islamic & Coptic Cairo", text: "The Citadel of Saladin, the Hanging Church, and centuries of layered faith." },
    ],
    bestTime:
      "October to April brings comfortable, sunny days ideal for sightseeing. Summer (June–August) is hot, so we start tours early and build in shade and rest.",
    gallery: [U("1572252009286-268acec5ca0a"), U("1578321272176-b7bbc0679853"), U("1601050690597-df0568f70950")],
    tourSlugs: ["pyramids-sphinx-museum", "islamic-coptic-cairo"],
  },
  {
    slug: "luxor",
    name: "Luxor",
    region: "Upper Egypt",
    tagline: "The world's greatest open-air museum, split by the Nile.",
    heroImage: U("1568322445389-f64ac2515020", 1900),
    cardImage: U("1568322445389-f64ac2515020", 800),
    tourCount: 9,
    intro:
      "Ancient Thebes — capital of Egypt at its peak — packs more monuments per square mile than anywhere on earth, from Karnak's columns to the painted tombs of the Valley of the Kings.",
    quickFacts: [
      { label: "Best for", value: "Temples & tombs" },
      { label: "Ideal stay", value: "2 days" },
      { label: "Highlight", value: "Valley of the Kings" },
      { label: "Airport", value: "Luxor (LXR)" },
    ],
    overview: [
      {
        heading: "Why visit Luxor",
        paras: [
          "Luxor is built on the ruins of Thebes, the capital of the New Kingdom when Egypt was at its richest and most powerful. The town divides neatly in two: the East Bank, home to the living and the great temples of Karnak and Luxor; and the West Bank, home to the dead and their royal tombs.",
          "A single day here can take you from the towering hypostyle hall of Karnak to the vivid, painted burial chambers of pharaohs — including the tomb of Tutankhamun. It is the densest concentration of ancient wonders in the country.",
        ],
      },
    ],
    history: [
      "Thebes rose to prominence around 2000 BC and became Egypt's capital during the New Kingdom (1550–1070 BC), the era of Hatshepsut, Ramses II, and Tutankhamun.",
      "The West Bank's Valley of the Kings served as the royal burial ground for around 500 years, hiding more than 60 tombs cut deep into the limestone hills.",
    ],
    gettingThere: [
      "Luxor has its own airport (LXR) with domestic flights from Cairo in about an hour — the fastest option, which we can book as part of a package.",
      "Many travellers arrive by Nile cruise from Aswan, or by comfortable train from Cairo (an overnight sleeper is available).",
      "On the ground, we provide a private guide and air-conditioned car to move between the East and West Banks.",
    ],
    whereToStay: [
      { area: "East Bank (town)", note: "Walkable to Luxor Temple, restaurants, and the corniche along the Nile." },
      { area: "West Bank", note: "Quieter, rural, and closer to the tombs — lovely for a slower pace." },
      { area: "Nile-view resorts", note: "Larger hotels with pools and gardens overlooking the river." },
    ],
    thingsToDo: [
      { title: "Valley of the Kings", text: "Descend into the painted tombs of Egypt's pharaohs, including Tutankhamun." },
      { title: "Karnak Temple", text: "Walk the avenue of rams into the vast forest of carved stone columns." },
      { title: "Hatshepsut's Temple", text: "The dramatic terraced temple of Egypt's most famous female pharaoh." },
      { title: "Hot-air balloon at sunrise", text: "Float over the temples and tombs as the sun rises over the Nile (optional add-on)." },
    ],
    bestTime:
      "October to April is ideal. Luxor gets very hot in summer, so balloon rides and West Bank tombs are best done at dawn.",
    gallery: [U("1568322445389-f64ac2515020"), U("1539768942893-daf53e448371"), U("1572252009286-268acec5ca0a")],
    tourSlugs: ["valley-of-the-kings-karnak", "nile-cruise-coast-escape"],
  },
  {
    slug: "aswan",
    name: "Aswan",
    region: "Upper Egypt",
    tagline: "Egypt's gentlest city — Nubian colour, island temples, and Abu Simbel.",
    heroImage: U("1539768942893-daf53e448371", 1900),
    cardImage: U("1539768942893-daf53e448371", 800),
    tourCount: 7,
    intro:
      "Where the Nile is at its most beautiful: granite islands, white-sailed feluccas, Nubian villages painted in blue and ochre, and the colossal rock temples of Abu Simbel to the south.",
    quickFacts: [
      { label: "Best for", value: "Scenery & relaxing" },
      { label: "Ideal stay", value: "1–2 days" },
      { label: "Highlight", value: "Abu Simbel" },
      { label: "Airport", value: "Aswan (ASW)" },
    ],
    overview: [
      {
        heading: "Why visit Aswan",
        paras: [
          "Aswan is the calmest and arguably the prettiest stop on the Nile. The river here is wide and clean, dotted with granite boulders and green islands, and the pace is wonderfully slow — best enjoyed from the deck of a felucca at sunset.",
          "It is also the launch point for Abu Simbel, the colossal temples Ramses II carved into a cliff face — and which engineers later moved, block by block, to save them from the rising waters of Lake Nasser.",
        ],
      },
    ],
    history: [
      "Ancient Aswan (Swenett) marked Egypt's southern frontier and its gateway to Nubia and Africa. Its quarries supplied the pink granite used in temples and obelisks across the country.",
      "Abu Simbel was built by Ramses II in the 13th century BC. In the 1960s a UNESCO-led project relocated the entire temple complex to higher ground ahead of the Aswan High Dam.",
    ],
    gettingThere: [
      "Aswan Airport (ASW) connects to Cairo in roughly 1.5 hours. Abu Simbel has its own short flight, or we drive there with an early start.",
      "Aswan is the southern start or end point for most Nile cruises to and from Luxor.",
      "Local transport mixes cars, feluccas, and motorboats — we arrange whatever each part of your itinerary needs.",
    ],
    whereToStay: [
      { area: "Nile-view hotels", note: "Riverfront rooms and famous terraces looking over the islands." },
      { area: "Nubian guesthouses", note: "Colourful, family-run stays on Elephantine or the West Bank for a local feel." },
    ],
    thingsToDo: [
      { title: "Abu Simbel temples", text: "Stand beneath the four giant statues of Ramses II at his cliff-cut masterpiece." },
      { title: "Philae Temple", text: "A graceful temple to Isis on its own island, reached by motorboat." },
      { title: "Felucca at sunset", text: "Sail the Nile under a white sail as the light turns gold." },
      { title: "Nubian village", text: "Visit a Nubian community for colour, hospitality, and home-cooked food." },
    ],
    bestTime:
      "October to March is the most comfortable. Aswan is warm and dry year-round and is the mildest winter destination in Egypt.",
    gallery: [U("1539768942893-daf53e448371"), U("1503177119275-0aa32b3a9368"), U("1568322445389-f64ac2515020")],
    tourSlugs: ["abu-simbel-nile-sail", "nile-cruise-coast-escape"],
  },
  {
    slug: "red-sea",
    name: "Red Sea & Coast",
    region: "Eastern Desert",
    tagline: "Coral reefs, warm clear water, and a relaxed end to any Egypt trip.",
    heroImage: U("1503177119275-0aa32b3a9368", 1900),
    cardImage: U("1503177119275-0aa32b3a9368", 800),
    tourCount: 11,
    intro:
      "After the temples and the desert, the Red Sea is where travellers unwind: some of the world's best snorkelling and diving, sandy resorts, and easy day trips back to the Nile.",
    quickFacts: [
      { label: "Best for", value: "Beach & diving" },
      { label: "Ideal stay", value: "2–4 days" },
      { label: "Highlight", value: "Coral reefs" },
      { label: "Airport", value: "Hurghada (HRG)" },
    ],
    overview: [
      {
        heading: "Why visit the Red Sea",
        paras: [
          "The Red Sea coast is Egypt's playground: bath-warm, crystal-clear water teeming with coral and tropical fish, fringed by resort towns like Hurghada and El Gouna. It is the perfect counterweight to a culture-packed Nile itinerary.",
          "You can snorkel straight off a boat, take a beginner dive, or simply lie on the beach — and many of our travellers still slip in a day trip to Luxor or the desert from here.",
        ],
      },
    ],
    history: [
      "The Red Sea has been a trade route for thousands of years, carrying goods between Egypt, Arabia, and the wider Indian Ocean world.",
      "Modern resort tourism took off from the 1980s, turning quiet fishing villages like Hurghada into one of the Mediterranean–Red Sea region's most popular coastlines.",
    ],
    gettingThere: [
      "Hurghada International Airport (HRG) has direct flights from much of Europe, plus quick domestic hops from Cairo.",
      "It is roughly a 4–5 hour drive from Luxor, which makes a Nile-and-sea combination very doable.",
      "Resort transfers, boat trips, and excursions are all arranged for you on our coast packages.",
    ],
    whereToStay: [
      { area: "Hurghada", note: "The biggest choice of resorts, marinas, and dive centres." },
      { area: "El Gouna", note: "A stylish, lagoon-laced town popular with families and watersports fans." },
      { area: "Makadi / Sahl Hasheesh", note: "Calmer, all-inclusive resort bays south of Hurghada." },
    ],
    thingsToDo: [
      { title: "Snorkel the reefs", text: "Boat out to Giftun Island and the house reefs for vivid coral and fish." },
      { title: "Try scuba diving", text: "Beginner-friendly intro dives with certified instructors." },
      { title: "Desert safari", text: "Quad bikes or a jeep into the Eastern Desert for sunset and Bedouin tea." },
      { title: "Day trip to Luxor", text: "Combine sea and history with a long but rewarding day among the temples." },
    ],
    bestTime:
      "The Red Sea is a year-round destination. Spring and autumn are perfect; winter is mild and sunny; summer is hot but the water is glorious.",
    gallery: [U("1503177119275-0aa32b3a9368"), U("1539768942893-daf53e448371"), U("1578321272176-b7bbc0679853")],
    tourSlugs: ["nile-cruise-coast-escape"],
  },
];

export const getDestination = (slug: string) => destinations.find((d) => d.slug === slug);
