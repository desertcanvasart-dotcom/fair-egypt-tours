export type ItineraryStop = { time: string; title: string; text: string };

export type TourDetail = {
  slug: string;
  title: string;
  place: string;
  category: string;
  duration: string;
  groupSize: string;
  languages: string;
  rating: string;
  reviewCount: number;
  price: number;
  heroImage: string;
  cardImage: string;
  summary: string;
  overview: string[];
  highlights: string[];
  itinerary: ItineraryStop[];
  included: string[];
  notIncluded: string[];
  gallery: string[];
};

const U = (id: string, w = 1200) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`;

const STD_INCLUDED = [
  "Licensed private Egyptologist guide",
  "Air-conditioned car & professional driver",
  "Hotel pick-up & drop-off",
  "Bottled water",
  "All taxes & service charges",
];
const STD_EXCLUDED = ["Entry tickets (optional add-on)", "Lunch & drinks", "Gratuities (your choice)", "Personal expenses"];

export const tours: TourDetail[] = [
  {
    slug: "pyramids-sphinx-museum",
    title: "Pyramids, Sphinx & Egyptian Museum",
    place: "Giza & Cairo",
    category: "Day Tour",
    duration: "Full day (8 hours)",
    groupSize: "Private",
    languages: "EN · FR · ES · DE",
    rating: "4.9",
    reviewCount: 820,
    price: 45,
    heroImage: U("1572252009286-268acec5ca0a", 1900),
    cardImage: U("1572252009286-268acec5ca0a", 900),
    summary:
      "The classic first day in Egypt: the Giza pyramids, the Great Sphinx, and the treasures of the Egyptian Museum — with a private guide and car.",
    overview: [
      "This is the tour almost everyone comes to Egypt for. You'll spend the morning on the Giza Plateau, standing beneath the Great Pyramid of Khufu, with time to go inside, ride a camel, and meet the Sphinx face to face.",
      "After lunch, your guide brings the story to life at the museum, where the golden mask of Tutankhamun and thousands of artefacts fill in the human detail behind the monuments. Everything is private and paced around you — no rushing, no crowds you don't choose.",
    ],
    highlights: [
      "Stand beside the Great Pyramid of Giza",
      "Meet the Great Sphinx up close",
      "Optional camel ride and panorama viewpoint",
      "See Tutankhamun's treasures with your guide",
    ],
    itinerary: [
      { time: "08:00", title: "Hotel pick-up", text: "Your guide and driver collect you from your Cairo or Giza hotel in a private A/C car." },
      { time: "08:45", title: "Giza Plateau", text: "Explore the three pyramids, with time to enter one and take in the panoramic viewpoint." },
      { time: "11:00", title: "The Sphinx", text: "Visit the Valley Temple and the Great Sphinx, with the pyramids as your backdrop." },
      { time: "13:00", title: "Lunch", text: "Break at a local restaurant (optional) before heading into the city." },
      { time: "14:30", title: "Egyptian Museum", text: "A guided tour of the highlights, including the Tutankhamun collection." },
      { time: "16:30", title: "Drop-off", text: "Return to your hotel, or add an evening bazaar stop on request." },
    ],
    included: STD_INCLUDED,
    notIncluded: STD_EXCLUDED,
    gallery: [U("1572252009286-268acec5ca0a"), U("1578321272176-b7bbc0679853"), U("1601050690597-df0568f70950")],
  },
  {
    slug: "valley-of-the-kings-karnak",
    title: "Valley of the Kings & Karnak",
    place: "Luxor",
    category: "Day Tour",
    duration: "Full day (8 hours)",
    groupSize: "Private",
    languages: "EN · FR · ES",
    rating: "4.8",
    reviewCount: 540,
    price: 60,
    heroImage: U("1568322445389-f64ac2515020", 1900),
    cardImage: U("1568322445389-f64ac2515020", 900),
    summary:
      "Cross both banks of the Nile in Luxor: the royal tombs of the West Bank and the colossal temple of Karnak on the East.",
    overview: [
      "Luxor holds more ancient wonders than anywhere in Egypt, and this full day captures the best of both banks. On the West Bank you'll descend into the painted tombs of the Valley of the Kings and stand before Hatshepsut's dramatic terraced temple.",
      "After lunch, the East Bank delivers Karnak — a vast forest of carved columns built over 1,500 years — and the elegant Luxor Temple, especially magical in the late-afternoon light.",
    ],
    highlights: [
      "Enter the painted royal tombs at the Valley of the Kings",
      "Marvel at the Temple of Hatshepsut",
      "Walk Karnak's great hypostyle hall",
      "Golden-hour visit to Luxor Temple",
    ],
    itinerary: [
      { time: "07:30", title: "Pick-up & ferry", text: "Collect from your hotel and cross to the West Bank." },
      { time: "08:15", title: "Valley of the Kings", text: "Explore three royal tombs cut deep into the hills." },
      { time: "10:30", title: "Hatshepsut's Temple", text: "Visit the striking terraced temple beneath the cliffs." },
      { time: "12:30", title: "Lunch", text: "Relax over a Nile-view lunch (optional)." },
      { time: "14:00", title: "Karnak Temple", text: "Wander the avenue of rams and the giant column hall." },
      { time: "16:00", title: "Luxor Temple", text: "Finish in the golden light before drop-off." },
    ],
    included: STD_INCLUDED,
    notIncluded: STD_EXCLUDED,
    gallery: [U("1568322445389-f64ac2515020"), U("1539768942893-daf53e448371"), U("1572252009286-268acec5ca0a")],
  },
  {
    slug: "abu-simbel-nile-sail",
    title: "Abu Simbel & Nile Felucca Sail",
    place: "Aswan",
    category: "Day Tour",
    duration: "Full day (sunrise start)",
    groupSize: "Private",
    languages: "EN · FR",
    rating: "5.0",
    reviewCount: 310,
    price: 70,
    heroImage: U("1539768942893-daf53e448371", 1900),
    cardImage: U("1539768942893-daf53e448371", 900),
    summary:
      "The colossal rock temples of Ramses II at sunrise, followed by a gentle felucca sail on the Nile in Aswan.",
    overview: [
      "Abu Simbel is one of Egypt's most jaw-dropping sights: four 20-metre statues of Ramses II carved straight into a cliff, later moved stone by stone to escape the rising Nile. An early start means you arrive in soft morning light, before the heat and the crowds.",
      "Back in Aswan, the day winds down the way it should — aboard a felucca, the Nile's traditional white-sailed boat, drifting past granite islands as the sun sinks.",
    ],
    highlights: [
      "Sunrise at the temples of Abu Simbel",
      "The relocated masterpiece of Ramses II",
      "Optional Philae Temple add-on",
      "Sunset felucca sail in Aswan",
    ],
    itinerary: [
      { time: "04:00", title: "Early departure", text: "A pre-dawn start for the drive south to Abu Simbel." },
      { time: "07:30", title: "Abu Simbel", text: "Explore the Great and Small Temples in the morning calm." },
      { time: "12:00", title: "Return to Aswan", text: "Drive back with a rest stop along the way." },
      { time: "16:00", title: "Felucca sail", text: "Glide past Elephantine Island under sail." },
      { time: "17:30", title: "Drop-off", text: "Return to your hotel or cruise boat." },
    ],
    included: STD_INCLUDED,
    notIncluded: STD_EXCLUDED,
    gallery: [U("1539768942893-daf53e448371"), U("1503177119275-0aa32b3a9368"), U("1568322445389-f64ac2515020")],
  },
  {
    slug: "nile-cruise-coast-escape",
    title: "Nile Cruise & Red Sea Escape",
    place: "Luxor · Aswan · Hurghada",
    category: "Multi-Day",
    duration: "5 days / 4 nights",
    groupSize: "Private or small group",
    languages: "EN · FR · ES · DE",
    rating: "5.0",
    reviewCount: 196,
    price: 220,
    heroImage: U("1503177119275-0aa32b3a9368", 1900),
    cardImage: U("1503177119275-0aa32b3a9368", 900),
    summary:
      "Sail the Nile between Luxor and Aswan, then unwind on the Red Sea coast — temples and beaches in one fair-priced plan.",
    overview: [
      "This is our most popular multi-day plan: a relaxed Nile cruise that links Luxor and Aswan, visiting a temple or two each day from the comfort of your floating hotel, followed by a couple of nights on the Red Sea to decompress.",
      "It's the ideal mix for travellers who want the big-hitter monuments without a rushed schedule, plus time to actually relax. Hotel standards, cabins, and routing all flex to your budget.",
    ],
    highlights: [
      "Cruise the Nile between Luxor and Aswan",
      "Temples at Edfu and Kom Ombo en route",
      "Half-board dining on board",
      "Two nights on the Red Sea coast",
    ],
    itinerary: [
      { time: "Day 1", title: "Luxor embarkation", text: "Board your cruise and visit Karnak and Luxor temples." },
      { time: "Day 2", title: "Edfu & Kom Ombo", text: "Riverside temples as you sail south." },
      { time: "Day 3", title: "Aswan", text: "Philae Temple and a felucca sail." },
      { time: "Day 4", title: "Transfer to the coast", text: "Travel to Hurghada and settle into your resort." },
      { time: "Day 5", title: "Red Sea & departure", text: "Free morning to snorkel or relax before your onward journey." },
    ],
    included: [...STD_INCLUDED, "4 nights' accommodation", "Half-board on cruise"],
    notIncluded: STD_EXCLUDED,
    gallery: [U("1503177119275-0aa32b3a9368"), U("1568322445389-f64ac2515020"), U("1539768942893-daf53e448371")],
  },
  {
    slug: "islamic-coptic-cairo",
    title: "Islamic & Coptic Cairo Walk",
    place: "Cairo",
    category: "Day Tour",
    duration: "Half day (5 hours)",
    groupSize: "Private",
    languages: "EN · FR · ES",
    rating: "4.8",
    reviewCount: 274,
    price: 38,
    heroImage: U("1578321272176-b7bbc0679853", 1900),
    cardImage: U("1578321272176-b7bbc0679853", 900),
    summary:
      "A guided walk through old Cairo's mosques, churches, and the lantern-lit lanes of Khan el-Khalili.",
    overview: [
      "This half-day reveals the Cairo that exists beyond the pyramids: the medieval, spiritual heart of the city. You'll visit the Citadel of Saladin and its alabaster mosque, then step into Coptic Cairo to see the Hanging Church and the oldest Christian quarter in Egypt.",
      "It ends where every Cairo evening should — in Khan el-Khalili, the centuries-old bazaar, over a glass of mint tea amid lanterns, spices, and silver.",
    ],
    highlights: [
      "Citadel of Saladin & Alabaster Mosque",
      "The Hanging Church of Coptic Cairo",
      "Khan el-Khalili bazaar",
      "Tea at a historic café",
    ],
    itinerary: [
      { time: "09:00", title: "Pick-up", text: "Collect from your hotel by private car." },
      { time: "09:30", title: "The Citadel", text: "Tour the fortress and the Mosque of Muhammad Ali." },
      { time: "11:30", title: "Coptic Cairo", text: "Visit the Hanging Church and old Christian quarter." },
      { time: "13:00", title: "Khan el-Khalili", text: "Explore the bazaar and stop for tea before drop-off." },
    ],
    included: STD_INCLUDED,
    notIncluded: STD_EXCLUDED,
    gallery: [U("1578321272176-b7bbc0679853"), U("1572252009286-268acec5ca0a"), U("1601050690597-df0568f70950")],
  },
  {
    slug: "alexandria-day-trip",
    title: "Alexandria Mediterranean Day Trip",
    place: "Alexandria",
    category: "Day Tour",
    duration: "Full day (10 hours)",
    groupSize: "Private",
    languages: "EN · FR",
    rating: "4.7",
    reviewCount: 188,
    price: 65,
    heroImage: U("1601050690597-df0568f70950", 1900),
    cardImage: U("1601050690597-df0568f70950", 900),
    summary:
      "Trade the desert for the sea: a full day in Egypt's Mediterranean city, from Roman ruins to the great modern library.",
    overview: [
      "Alexandria is Egypt's window on the Mediterranean — founded by Alexander the Great and once home to the ancient world's greatest library. This day trip from Cairo trades pharaohs for a breezy, Greco-Roman city by the sea.",
      "You'll see the catacombs, Pompey's Pillar, the seafront citadel, and the striking modern Bibliotheca Alexandrina, with a seafood lunch by the harbour along the way.",
    ],
    highlights: [
      "Catacombs of Kom el-Shoqafa",
      "Pompey's Pillar & the Roman ruins",
      "Qaitbay Citadel on the seafront",
      "The modern Library of Alexandria",
    ],
    itinerary: [
      { time: "07:00", title: "Depart Cairo", text: "Early start for the drive to the coast (about 3 hours)." },
      { time: "10:00", title: "Catacombs & Pillar", text: "Explore the Roman catacombs and Pompey's Pillar." },
      { time: "12:30", title: "Seafront & lunch", text: "Qaitbay Citadel and a harbour seafood lunch (optional)." },
      { time: "14:30", title: "Library", text: "Visit the Bibliotheca Alexandrina before returning to Cairo." },
    ],
    included: STD_INCLUDED,
    notIncluded: STD_EXCLUDED,
    gallery: [U("1601050690597-df0568f70950"), U("1578321272176-b7bbc0679853"), U("1572252009286-268acec5ca0a")],
  },
];

export const getTour = (slug: string) => tours.find((t) => t.slug === slug);
