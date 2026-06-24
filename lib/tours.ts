export type ItineraryStop = { time: string; title: string; text: string };

export type TourDetail = {
  slug: string;
  title: string;
  place: string;
  /** "Day Tour" | "Package" — the experience type. */
  type?: string;
  /** Destination name this tour belongs to, e.g. "Cairo & Giza". */
  destination?: string;
  /** Named group within the type, e.g. "Cairo Day Tours". */
  category: string;
  /** SEO + image meta. */
  metaTitle?: string;
  metaDescription?: string;
  heroImageAlt?: string;
  cardImageAlt?: string;
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

const D = (s: string) => `/img/dest/${s}`;
const T = (s: string) => `/img/tours/${s}`;

// Standard private-tour inclusions (every tour is private, guided, door-to-door).
const BASE_INCLUDED = [
  "Private hotel pickup & drop-off",
  "Air-conditioned vehicle & professional driver",
  "Licensed private Egyptologist guide",
  "Bottled water",
  "All taxes & service charges",
];
const WITH_LUNCH = [...BASE_INCLUDED, "Lunch at a local restaurant"];
const STD_EXCLUDED = [
  "Entry tickets to the sites",
  "Gratuities (at your discretion)",
  "Personal expenses",
];
const EXCLUDED_OPT_LUNCH = ["Entry tickets to the sites", "Lunch (optional, on request)", "Gratuities (at your discretion)", "Personal expenses"];
const LANGS = "English & Arabic (more on request)";

export const tours: TourDetail[] = [
  /* ───────────────────────── 1. Giza Pyramids ───────────────────────── */
  {
    slug: "giza-pyramids-day-tour",
    title: "Giza Pyramids & Sphinx Day Tour",
    place: "Giza",
    type: "Day Tour",
    destination: "Cairo & Giza",
    category: "Pyramids & Giza Tours",
    metaTitle: "Giza Pyramids & Sphinx Private Day Tour | Fair Egypt Tours",
    metaDescription: "A private half-day tour of the Giza Plateau — the three Great Pyramids, the Sphinx and the Valley Temple, with a licensed guide and door-to-door transfers.",
    duration: "About 6 hours",
    groupSize: "Private",
    languages: LANGS,
    rating: "4.9",
    reviewCount: 142,
    price: 55,
    heroImage: D("cairo/hero.jpg"),
    heroImageAlt: "The Great Pyramids and Sphinx on the Giza Plateau",
    cardImage: D("cairo/card.jpg"),
    cardImageAlt: "The pyramids of Giza at dusk",
    summary:
      "A private half-day on the Giza Plateau — the three Great Pyramids, the Great Sphinx and the Valley Temple of Khafre — with a licensed Egyptologist and hotel pickup and drop-off.",
    overview: [
      "This tour is dedicated entirely to the Giza Plateau, so there's no rushing between distant sites — just the only surviving wonder of the ancient world, at your own pace. Your guide collects you from your hotel and brings you back at the end, so the only thing you handle is the view.",
      "You'll stand beside the pyramids of Khufu, Khafre and Menkaure, look up at the Great Sphinx, and walk through the Valley Temple where the pharaoh's body was prepared for burial. Your guide ties the plateau together — who built what, how, and why — so it reads as one story rather than three piles of stone.",
    ],
    highlights: [
      "The three Great Pyramids — Khufu, Khafre and Menkaure",
      "The Great Sphinx, face to face",
      "The Valley Temple of Khafre",
      "A panoramic viewpoint over the whole plateau",
    ],
    itinerary: [
      { time: "08:00", title: "Hotel pickup", text: "Your guide and driver meet you in your hotel lobby and drive to the Giza Plateau, about 20–40 minutes depending on where you stay." },
      { time: "08:45", title: "The Great Pyramids", text: "Explore the pyramids of Khufu, Khafre and Menkaure up close, with time to go inside one (ticket optional) and to take it all in from the panoramic point." },
      { time: "10:30", title: "The Great Sphinx & Valley Temple", text: "Walk down to the Sphinx and the Valley Temple of Khafre, where your guide explains how the plateau worked as a single funerary complex." },
      { time: "11:30", title: "Optional camel ride & photos", text: "Time for an optional camel or horse ride along the desert edge for the classic pyramids photo, before we head back." },
      { time: "12:30", title: "Return to your hotel", text: "We drive you back to your hotel, with an optional lunch stop on request." },
    ],
    included: BASE_INCLUDED,
    notIncluded: EXCLUDED_OPT_LUNCH,
    gallery: [D("cairo/pyramids.jpg"), T("giza-camel.jpg"), D("cairo/hero.jpg"), T("giza-desert.jpg"), T("giza-inside.jpg"), T("giza-night.jpg")],
  },

  /* ───────────────── 2. Dahshur, Memphis & Saqqara ───────────────── */
  {
    slug: "dahshur-memphis-saqqara-day-tour",
    title: "Dahshur, Memphis & Saqqara Day Tour",
    place: "Giza & Saqqara",
    type: "Day Tour",
    destination: "Cairo & Giza",
    category: "Pyramids & Giza Tours",
    metaTitle: "Dahshur, Memphis & Saqqara Private Day Tour | Fair Egypt",
    metaDescription: "A quiet private day through Egypt's oldest pyramids — the Bent and Red Pyramids at Dahshur, the first capital at Memphis, and the Step Pyramid at Saqqara. Lunch and guide included.",
    duration: "About 8 hours",
    groupSize: "Private",
    languages: LANGS,
    rating: "4.9",
    reviewCount: 96,
    price: 60,
    heroImage: D("cairo/saqqara.jpg"),
    heroImageAlt: "The Step Pyramid of Djoser at Saqqara",
    cardImage: D("cairo/saqqara.jpg"),
    cardImageAlt: "The stepped pyramid complex at Saqqara",
    summary:
      "A calmer, less-crowded private day through the earliest pyramids — the Bent and Red Pyramids at Dahshur, the first capital at Memphis, and the Step Pyramid at Saqqara — with lunch and a licensed guide.",
    overview: [
      "If Giza is the famous chapter, this tour is the origin story. You spend the day at three sites that explain how pyramid-building began, all far quieter than the main plateau, so you often have the monuments almost to yourself.",
      "At Dahshur you see the Bent Pyramid, where the builders changed the angle halfway up, and the Red Pyramid, the first true smooth-sided pyramid. Memphis, Egypt's first capital, is an open-air museum of colossal statues, and Saqqara is crowned by the Step Pyramid of Djoser — the oldest large stone building on earth. Lunch is included before the drive back.",
    ],
    highlights: [
      "The Bent Pyramid & the Red Pyramid at Dahshur",
      "Memphis — Egypt's first capital",
      "The Step Pyramid of Djoser at Saqqara",
      "Far fewer crowds than Giza",
    ],
    itinerary: [
      { time: "08:00", title: "Hotel pickup", text: "Meet your guide and drive south out of the city toward Dahshur." },
      { time: "09:00", title: "Dahshur", text: "Explore the Bent Pyramid and the Red Pyramid — two of Egypt's oldest and best-preserved pyramids, usually wonderfully quiet." },
      { time: "11:00", title: "Memphis", text: "Walk the open-air site of Egypt's first capital, including the colossal statue of Ramesses II and the alabaster sphinx." },
      { time: "12:30", title: "Lunch", text: "A relaxed lunch at a local restaurant." },
      { time: "13:30", title: "Saqqara", text: "Stand before the Step Pyramid of Djoser and explore the surrounding funerary complex with your guide." },
      { time: "15:30", title: "Return to your hotel", text: "We drive you back comfortably to your hotel." },
    ],
    included: WITH_LUNCH,
    notIncluded: STD_EXCLUDED,
    gallery: [D("cairo/saqqara.jpg"), T("dahshur-bent.jpg"), T("dahshur-red.jpg"), T("memphis-ramses.jpg"), T("saqqara-carving.jpg"), T("saqqara-entrance.jpg")],
  },

  /* ─────────────────── 3. Grand Egyptian Museum ─────────────────── */
  {
    slug: "grand-egyptian-museum-day-tour",
    title: "Grand Egyptian Museum (GEM) Day Tour",
    place: "Giza",
    type: "Day Tour",
    destination: "Cairo & Giza",
    category: "Cairo City Tours",
    metaTitle: "Grand Egyptian Museum (GEM) Private Day Tour | Fair Egypt",
    metaDescription: "A private guided tour of the Grand Egyptian Museum at Giza — the world's largest archaeological museum and the complete Tutankhamun collection. Door-to-door transfers included.",
    duration: "About 4–5 hours",
    groupSize: "Private",
    languages: LANGS,
    rating: "5.0",
    reviewCount: 118,
    price: 50,
    heroImage: D("cairo/gem.jpg"),
    heroImageAlt: "The grand staircase and galleries of the Grand Egyptian Museum",
    cardImage: D("cairo/gem.jpg"),
    cardImageAlt: "Inside the Grand Egyptian Museum",
    summary:
      "A private guided visit to the Grand Egyptian Museum — the largest archaeological museum in the world, home to the complete Tutankhamun collection — with hotel pickup and an expert Egyptologist.",
    overview: [
      "The Grand Egyptian Museum opened beside the pyramids in 2025, and it's now the single best place to understand ancient Egypt under one roof. With over 100,000 artefacts, it rewards a guide who can steer you to what matters and skip what doesn't.",
      "The centrepiece is the complete Tutankhamun collection — the gold mask, the nested coffins and thousands of objects shown together for the first time. Your guide brings the galleries to life with the stories behind the statues and treasures, then we return you to your hotel.",
    ],
    highlights: [
      "The Grand Egyptian Museum — the world's largest archaeological museum",
      "The complete Tutankhamun collection",
      "The grand staircase of colossal statues",
      "An expert guide to the highlights",
    ],
    itinerary: [
      { time: "09:00", title: "Hotel pickup", text: "Your guide and air-conditioned vehicle collect you and drive to the museum at the foot of the Giza Plateau." },
      { time: "09:45", title: "The grand galleries", text: "Walk the great atrium and grand staircase, then move through the chronological galleries with your guide." },
      { time: "11:00", title: "The Tutankhamun collection", text: "Spend unhurried time with the complete treasures of Tutankhamun, the highlight of the museum." },
      { time: "12:30", title: "Return to your hotel", text: "We drive you back to your hotel, with an optional lunch stop on request." },
    ],
    included: BASE_INCLUDED,
    notIncluded: EXCLUDED_OPT_LUNCH,
    gallery: [D("cairo/gem.jpg"), D("cairo/g-museum.jpg"), T("museum-mask.jpg"), T("museum-sarcophagus.jpg"), T("museum-statues.jpg"), T("museum-pharaoh.jpg")],
  },

  /* ───────────────────── 4. Alexandria from Cairo ───────────────────── */
  {
    slug: "alexandria-day-tour-from-cairo",
    title: "Alexandria Day Tour from Cairo",
    place: "Alexandria",
    type: "Day Tour",
    destination: "Alexandria",
    category: "Alexandria Day Tours",
    metaTitle: "Alexandria Day Tour from Cairo (Private) | Fair Egypt Tours",
    metaDescription: "A private day trip from Cairo to Alexandria — the Catacombs of Kom el-Shoqafa, Pompey's Pillar, the Qaitbay Citadel and the Mediterranean. Lunch and door-to-door transfers included.",
    duration: "About 12 hours",
    groupSize: "Private",
    languages: LANGS,
    rating: "4.8",
    reviewCount: 87,
    price: 110,
    heroImage: D("alexandria/hero.jpg"),
    heroImageAlt: "The Mediterranean seafront and Library of Alexandria",
    cardImage: D("alexandria/card.jpg"),
    cardImageAlt: "The Corniche of Alexandria",
    summary:
      "A relaxed private day trip from Cairo to Alexandria — the Catacombs of Kom el-Shoqafa, Pompey's Pillar and the Qaitbay Citadel on the Mediterranean — with lunch, a guide and door-to-door transfers.",
    overview: [
      "Alexandria trades pyramids for sea breeze. This private day trip takes you from Cairo to Egypt's Mediterranean city — about 2.5 hours each way in a comfortable air-conditioned vehicle — to see the Greek and Roman layers beneath a busy modern port.",
      "You'll go underground at the Catacombs of Kom el-Shoqafa, stand beneath Pompey's Pillar, and finish on the seafront at the Qaitbay Citadel, built on the site of the ancient Lighthouse. Lunch by the Mediterranean is included, and the modern Library of Alexandria can be added depending on the day (it closes Fridays).",
    ],
    highlights: [
      "Catacombs of Kom el-Shoqafa",
      "Pompey's Pillar",
      "The Qaitbay Citadel on the Mediterranean",
      "Bibliotheca Alexandrina (subject to the day — closed Fridays)",
      "Seafood lunch by the sea",
    ],
    itinerary: [
      { time: "07:00", title: "Early hotel pickup", text: "An early start from your Cairo hotel for the scenic drive to Alexandria, about 2.5 hours." },
      { time: "09:30", title: "Catacombs of Kom el-Shoqafa", text: "Descend into the multi-level Roman-era tombs that blend Egyptian, Greek and Roman styles." },
      { time: "11:00", title: "Pompey's Pillar", text: "Visit the towering red granite column and the Serapeum it once marked." },
      { time: "12:30", title: "Lunch by the sea", text: "A relaxed Mediterranean lunch on the Corniche." },
      { time: "14:00", title: "Qaitbay Citadel", text: "Explore the 15th-century fort on the site of the ancient Lighthouse, with views over the harbour. Library of Alexandria added if the day allows." },
      { time: "16:00", title: "Drive back to Cairo", text: "We return you to your Cairo hotel in the evening." },
    ],
    included: [...WITH_LUNCH, "Return transfers Cairo ↔ Alexandria"],
    notIncluded: STD_EXCLUDED,
    gallery: [D("alexandria/catacombs.jpg"), D("alexandria/pompey.jpg"), D("alexandria/qaitbay.jpg"), D("alexandria/montaza.jpg"), T("alex-library.jpg"), T("alex-amphitheatre.jpg")],
  },

  /* ───────────────────── 5. Fayoum Oasis Adventure ───────────────────── */
  {
    slug: "fayoum-oasis-adventure-day-tour",
    title: "Fayoum Oasis Adventure Day Tour",
    place: "Fayoum (from Cairo)",
    type: "Day Tour",
    destination: "Cairo & Giza",
    category: "Desert & Oasis Adventures",
    metaTitle: "Fayoum Oasis 4x4 Adventure Day Tour from Cairo | Fair Egypt",
    metaDescription: "A private 4x4 desert day trip from Cairo to the Fayoum Oasis — dune driving, the Magic Lake, Wadi El Rayan waterfalls, Bedouin tea and a desert lunch. Transfers included.",
    duration: "About 9 hours",
    groupSize: "Private",
    languages: LANGS,
    rating: "4.9",
    reviewCount: 64,
    price: 115,
    heroImage: T("fayoum-lake.jpg"),
    heroImageAlt: "A turquoise desert lake at the Fayoum Oasis",
    cardImage: T("fayoum-safari.jpg"),
    cardImageAlt: "A 4x4 on the dunes of the Fayoum desert",
    summary:
      "A private nature-and-adventure day from Cairo to the Fayoum Oasis — 4x4 dune driving, the Magic Lake, the Wadi El Rayan waterfalls, Bedouin tea and a desert lunch. About 1 hour 45 each way.",
    overview: [
      "This is the day to trade temples for open desert. The Fayoum Oasis sits less than two hours from Cairo, and it swaps crowds and stone for dunes, lakes and waterfalls — a complete change of pace for nature lovers and anyone travelling with restless kids.",
      "You leave the comfortable vehicle for a rugged 4x4 and head into the sand, with stops to slide down the dunes and take in the view. The day takes in the colour-shifting Magic Lake, the unexpected waterfalls of Wadi El Rayan, a cup of Bedouin tea in the desert, and lunch with the lake as your backdrop before the drive home.",
    ],
    highlights: [
      "4x4 dune drive through the Fayoum desert",
      "The colour-shifting Magic Lake",
      "Wadi El Rayan — Egypt's only natural waterfalls",
      "Bedouin tea and a desert lunch",
    ],
    itinerary: [
      { time: "08:00", title: "Hotel pickup", text: "Leave Cairo for the scenic drive to the Fayoum Oasis, about 1 hour 45." },
      { time: "10:00", title: "4x4 dune safari", text: "Swap into a 4x4 and head into the desert, with stops to slide down the dunes and take photos." },
      { time: "11:30", title: "Magic Lake", text: "Relax at the Magic Lake — wade, swim or just take it in over a cup of Bedouin tea." },
      { time: "13:00", title: "Wadi El Rayan waterfalls", text: "Drive on to Egypt's only natural waterfalls, a surprising sight in the middle of the desert." },
      { time: "14:00", title: "Desert lunch", text: "Lunch served in the desert with the lake as your backdrop." },
      { time: "15:30", title: "Return to Cairo", text: "Head back out of the desert and return to your Cairo hotel." },
    ],
    included: [...WITH_LUNCH, "Return transfers Cairo ↔ Fayoum", "4x4 off-road desert vehicle", "Bedouin tea"],
    notIncluded: STD_EXCLUDED,
    gallery: [T("fayoum-lake.jpg"), T("fayoum-safari.jpg"), T("desert-tea.jpg"), T("desert-buggy.jpg"), T("desert-camel.jpg")],
  },

  /* ───────────────────────── 6. Cairo City ───────────────────────── */
  {
    slug: "cairo-city-day-tour",
    title: "Cairo City Day Tour — Citadel, Coptic Cairo & Bazaar",
    place: "Cairo",
    type: "Day Tour",
    destination: "Cairo & Giza",
    category: "Cairo City Tours",
    metaTitle: "Cairo City Day Tour: Citadel, Coptic Cairo & Bazaar | Fair Egypt",
    metaDescription: "A private full-day Cairo city tour — the Saladin Citadel and Muhammad Ali Mosque, Coptic Cairo and the Church of Abu Serga, and the Khan el-Khalili bazaar. Lunch included.",
    duration: "About 8 hours",
    groupSize: "Private",
    languages: LANGS,
    rating: "4.9",
    reviewCount: 156,
    price: 65,
    heroImage: D("cairo/citadel.jpg"),
    heroImageAlt: "The Saladin Citadel and Muhammad Ali Mosque in Cairo",
    cardImage: D("cairo/khan.jpg"),
    cardImageAlt: "Lantern shops in the Khan el-Khalili bazaar",
    summary:
      "A private full day through Islamic, Coptic and medieval Cairo — the Saladin Citadel and Muhammad Ali Mosque, the old churches of Coptic Cairo, and the Khan el-Khalili bazaar — with lunch.",
    overview: [
      "This tour is the city itself, layer by layer. You move from the medieval fortress that has watched over Cairo for 800 years, to the early-Christian quarter, to one of the oldest markets in the Arab world — three very different sides of the capital in one day.",
      "At the Saladin Citadel you visit the alabaster Muhammad Ali Mosque and look out over the whole skyline to the pyramids. In Coptic Cairo you step into the Church of Abu Serga, built over the cave where the Holy Family is said to have sheltered. The day ends in the lantern-lit lanes of Khan el-Khalili, with lunch included along the way.",
    ],
    highlights: [
      "Saladin Citadel & the Muhammad Ali Mosque",
      "Panoramic views across Cairo",
      "Coptic Cairo & the Church of Abu Serga",
      "The Khan el-Khalili bazaar",
    ],
    itinerary: [
      { time: "08:30", title: "Hotel pickup", text: "Meet your guide and drive to the Saladin Citadel above the city." },
      { time: "09:15", title: "Citadel & Muhammad Ali Mosque", text: "Visit the alabaster mosque and take in the panoramic view across Cairo to Giza." },
      { time: "11:00", title: "Coptic Cairo", text: "Walk the lanes of Old Cairo and the Church of Abu Serga, one of Egypt's oldest churches." },
      { time: "12:45", title: "Lunch", text: "A relaxed lunch at a local restaurant." },
      { time: "14:00", title: "Khan el-Khalili", text: "Wander the medieval bazaar — spices, lanterns, silver and a mint tea at El Fishawy." },
      { time: "16:00", title: "Return to your hotel", text: "We drive you back comfortably to your hotel." },
    ],
    included: WITH_LUNCH,
    notIncluded: STD_EXCLUDED,
    gallery: [D("cairo/citadel.jpg"), D("cairo/khan.jpg"), T("coptic-hanging.jpg"), T("islamic-muizz.jpg"), T("khan-lantern.jpg"), T("coptic-ceiling.jpg")],
  },

  /* ───────────── 7. Cairo City Extended (with NMEC) ───────────── */
  {
    slug: "cairo-city-day-tour-extended-nmec",
    title: "Cairo City Day Tour (Extended) — with the Mummies Museum",
    place: "Cairo",
    type: "Day Tour",
    destination: "Cairo & Giza",
    category: "Cairo City Tours",
    metaTitle: "Cairo City Tour + Royal Mummies (NMEC) Private Day | Fair Egypt",
    metaDescription: "Our Cairo city tour extended with the National Museum of Egyptian Civilization and its hall of 22 royal mummies — plus the Citadel, Coptic Cairo and the bazaar. Lunch included.",
    duration: "About 9 hours",
    groupSize: "Private",
    languages: LANGS,
    rating: "4.9",
    reviewCount: 103,
    price: 80,
    heroImage: D("cairo/citadel.jpg"),
    heroImageAlt: "The Saladin Citadel above Cairo",
    cardImage: D("cairo/g-museum.jpg"),
    cardImageAlt: "Pharaonic statues in a Cairo museum",
    summary:
      "Everything in our Cairo city tour plus the National Museum of Egyptian Civilization and its Royal Mummies Hall — 22 of Egypt's greatest pharaohs and queens — with the Citadel, Coptic Cairo, the bazaar and lunch.",
    overview: [
      "This is the classic Cairo city day with one powerful addition: the National Museum of Egyptian Civilization, where 22 royal mummies rest in a purpose-built hall. Standing face to face with the pharaohs is the kind of moment travellers talk about for years.",
      "Around it you get the full sweep of the city — the Saladin Citadel and Muhammad Ali Mosque, the early churches of Coptic Cairo, and the Khan el-Khalili bazaar. Lunch is included, and your guide threads it all into one story from the pharaohs to the medieval city.",
    ],
    highlights: [
      "National Museum of Egyptian Civilization — 22+ royal mummies",
      "Saladin Citadel & the Muhammad Ali Mosque",
      "Coptic Cairo & the Church of Abu Serga",
      "The Khan el-Khalili bazaar",
    ],
    itinerary: [
      { time: "08:30", title: "Hotel pickup", text: "Meet your guide and drive to the Saladin Citadel." },
      { time: "09:15", title: "Citadel & Muhammad Ali Mosque", text: "The alabaster mosque and the panoramic view across Cairo." },
      { time: "11:00", title: "National Museum of Egyptian Civilization", text: "The centrepiece — the Royal Mummies Hall, face to face with Egypt's greatest pharaohs and queens." },
      { time: "12:45", title: "Lunch", text: "A relaxed lunch at a local restaurant." },
      { time: "14:00", title: "Coptic Cairo", text: "The Church of Abu Serga and the lanes of Old Cairo." },
      { time: "15:30", title: "Khan el-Khalili", text: "The medieval bazaar to finish the day." },
      { time: "17:00", title: "Return to your hotel", text: "We drive you back comfortably to your hotel." },
    ],
    included: WITH_LUNCH,
    notIncluded: STD_EXCLUDED,
    gallery: [D("cairo/citadel.jpg"), T("museum-mask.jpg"), T("museum-sarcophagus.jpg"), D("cairo/khan.jpg"), T("coptic-hanging.jpg"), T("museum-statues.jpg")],
  },

  /* ──────────── 8. Saqqara, Citadel & Coptic Cairo ──────────── */
  {
    slug: "saqqara-citadel-coptic-cairo-day-tour",
    title: "Saqqara, Citadel & Coptic Cairo Day Tour",
    place: "Saqqara & Cairo",
    type: "Day Tour",
    destination: "Cairo & Giza",
    category: "Cairo City Tours",
    metaTitle: "Saqqara, Citadel & Coptic Cairo Private Day Tour | Fair Egypt",
    metaDescription: "A balanced private day from the Step Pyramid at Saqqara to the Saladin Citadel, Coptic Cairo and the Khan el-Khalili bazaar — ancient, Islamic and Christian Cairo in one day. Lunch included.",
    duration: "About 9 hours",
    groupSize: "Private",
    languages: LANGS,
    rating: "4.9",
    reviewCount: 78,
    price: 75,
    heroImage: D("cairo/saqqara.jpg"),
    heroImageAlt: "The Step Pyramid of Djoser at Saqqara",
    cardImage: D("cairo/citadel.jpg"),
    cardImageAlt: "The Muhammad Ali Mosque at the Citadel",
    summary:
      "A balanced private day across Egypt's layers — the Step Pyramid at Saqqara, the Saladin Citadel and Muhammad Ali Mosque, the early churches of Coptic Cairo, and the Khan el-Khalili bazaar — with lunch.",
    overview: [
      "This tour is for travellers who want the full breadth of Cairo's history in a single, well-paced day — ancient, Islamic and Christian, plus the living city of the bazaar.",
      "You start at Saqqara and the Step Pyramid of Djoser, the world's oldest large stone building, then move to the Saladin Citadel and its alabaster mosque, into Coptic Cairo and the Church of Abu Serga over the Cave of the Holy Family, and finish in the medieval lanes of Khan el-Khalili. Lunch is included along the way.",
    ],
    highlights: [
      "The Step Pyramid of Djoser at Saqqara",
      "Saladin Citadel & the Muhammad Ali Mosque",
      "Coptic Cairo, the Church of Abu Serga & the Cave of the Holy Family",
      "The Khan el-Khalili bazaar",
    ],
    itinerary: [
      { time: "08:00", title: "Hotel pickup", text: "Meet your guide and drive south to Saqqara." },
      { time: "09:00", title: "Saqqara", text: "Stand before the Step Pyramid of Djoser and explore the funerary complex with your guide." },
      { time: "11:00", title: "Saladin Citadel", text: "The Muhammad Ali Mosque and the panoramic view over Cairo." },
      { time: "12:45", title: "Lunch", text: "A relaxed lunch at a local restaurant." },
      { time: "14:00", title: "Coptic Cairo", text: "The Church of Abu Serga and the Cave of the Holy Family in Old Cairo." },
      { time: "15:30", title: "Khan el-Khalili", text: "The medieval bazaar to finish the day." },
      { time: "17:00", title: "Return to your hotel", text: "We drive you back comfortably to your hotel." },
    ],
    included: WITH_LUNCH,
    notIncluded: STD_EXCLUDED,
    gallery: [D("cairo/saqqara.jpg"), T("saqqara-carving.jpg"), D("cairo/citadel.jpg"), T("coptic-hanging.jpg"), D("cairo/khan.jpg"), T("islamic-muizz.jpg")],
  },

  /* ─────────── 9. Giza Pyramids, Papyrus & GEM ─────────── */
  {
    slug: "giza-pyramids-papyrus-gem-day-tour",
    title: "Giza Pyramids, Papyrus Institute & GEM Day Tour",
    place: "Giza",
    type: "Day Tour",
    destination: "Cairo & Giza",
    category: "Pyramids & Giza Tours",
    metaTitle: "Giza Pyramids, Papyrus & Grand Egyptian Museum Tour | Fair Egypt",
    metaDescription: "A full private day pairing the Giza Pyramids and Sphinx with a papyrus-making demonstration and the Grand Egyptian Museum. Lunch and door-to-door transfers included.",
    duration: "About 8 hours",
    groupSize: "Private",
    languages: LANGS,
    rating: "4.9",
    reviewCount: 91,
    price: 75,
    heroImage: D("cairo/pyramids.jpg"),
    heroImageAlt: "The Sphinx with the pyramid of Khafre behind",
    cardImage: D("cairo/gem.jpg"),
    cardImageAlt: "The Grand Egyptian Museum galleries",
    summary:
      "A full private day that pairs the Giza Plateau — the pyramids, the Sphinx and the Valley Temple — with a live papyrus-making demonstration and the Grand Egyptian Museum. Lunch included.",
    overview: [
      "This day connects the ancient wonders with two of Cairo's best modern experiences. You start on the Giza Plateau with the pyramids, the Sphinx and the Valley Temple, then see how the world's first paper was made from papyrus reeds — a hands-on link to the scribes who recorded it all.",
      "You finish at the Grand Egyptian Museum, minutes away, where your guide ties the whole day together among the complete Tutankhamun treasures. Lunch is included, and door-to-door transfers mean you never think about logistics.",
    ],
    highlights: [
      "The Great Pyramids, the Sphinx & the Valley Temple",
      "A live papyrus-making demonstration",
      "The Grand Egyptian Museum & the Tutankhamun collection",
      "A connected ancient-to-modern day",
    ],
    itinerary: [
      { time: "08:00", title: "Hotel pickup", text: "Meet your guide and drive to the Giza Plateau." },
      { time: "08:45", title: "Pyramids, Sphinx & Valley Temple", text: "Explore the three Great Pyramids, the Sphinx and the Valley Temple of Khafre." },
      { time: "11:00", title: "Papyrus Institute", text: "Watch a live demonstration of how papyrus paper was made from the reed." },
      { time: "12:00", title: "Lunch", text: "A relaxed lunch at a local restaurant." },
      { time: "13:30", title: "Grand Egyptian Museum", text: "The world's largest archaeological museum and the complete Tutankhamun collection." },
      { time: "16:00", title: "Return to your hotel", text: "We drive you back comfortably to your hotel." },
    ],
    included: WITH_LUNCH,
    notIncluded: STD_EXCLUDED,
    gallery: [D("cairo/pyramids.jpg"), T("giza-camel.jpg"), D("cairo/gem.jpg"), T("museum-mask.jpg"), T("museum-statues.jpg"), D("cairo/g-museum.jpg")],
  },

  /* ───────────────────── 10. Ultimate Pyramids ───────────────────── */
  {
    slug: "ultimate-pyramids-day-tour",
    title: "Ultimate Pyramids Day Tour — Saqqara, Dahshur & Giza",
    place: "Giza, Saqqara & Dahshur",
    type: "Day Tour",
    destination: "Cairo & Giza",
    category: "Pyramids & Giza Tours",
    metaTitle: "Ultimate Pyramids Day Tour: Saqqara, Dahshur & Giza | Fair Egypt",
    metaDescription: "The complete pyramid story in one private day — the Step Pyramid at Saqqara, the Bent and Red Pyramids at Dahshur, and the Great Pyramids and Sphinx at Giza. Lunch included.",
    duration: "About 9 hours",
    groupSize: "Private",
    languages: LANGS,
    rating: "5.0",
    reviewCount: 112,
    price: 85,
    heroImage: T("giza-desert.jpg"),
    heroImageAlt: "The Great Pyramids of Giza across the desert",
    cardImage: D("cairo/saqqara.jpg"),
    cardImageAlt: "The Step Pyramid at Saqqara",
    summary:
      "The whole evolution of the pyramid in one private day — the first one at Saqqara, the experimental pyramids at Dahshur, and the perfected Great Pyramids and Sphinx at Giza. Lunch included.",
    overview: [
      "If you only have one day for pyramids, this is the one that tells the full story. You trace pyramid-building from its very first attempt to its perfection, across three sites and more than 4,700 years, in the right order to actually make sense of it.",
      "You begin at Saqqara with the Step Pyramid of Djoser, move to the quiet pyramid field at Dahshur for the Bent and Red Pyramids, and finish at Giza with Khufu, Khafre, Menkaure and the Sphinx. Dahshur in particular is gloriously uncrowded. Lunch is included before the drive back.",
    ],
    highlights: [
      "The Step Pyramid of Djoser at Saqqara — the first pyramid",
      "The Bent Pyramid & the Red Pyramid at Dahshur",
      "The Great Pyramids of Giza & the Sphinx",
      "The full evolution of pyramid design in one day",
    ],
    itinerary: [
      { time: "08:00", title: "Hotel pickup", text: "Meet your guide and drive south to Saqqara." },
      { time: "09:00", title: "Saqqara", text: "The Step Pyramid of Djoser — where pyramid-building began." },
      { time: "10:30", title: "Dahshur", text: "The Bent Pyramid and the Red Pyramid, usually wonderfully quiet." },
      { time: "12:30", title: "Lunch", text: "A relaxed lunch at a local restaurant." },
      { time: "13:45", title: "Giza Plateau", text: "The grand finale — the three Great Pyramids, the Sphinx and the Valley Temple." },
      { time: "16:00", title: "Return to your hotel", text: "We drive you back comfortably to your hotel." },
    ],
    included: WITH_LUNCH,
    notIncluded: STD_EXCLUDED,
    gallery: [D("cairo/saqqara.jpg"), T("dahshur-bent.jpg"), T("dahshur-red.jpg"), T("giza-desert.jpg"), D("cairo/hero.jpg"), T("giza-camel.jpg")],
  },

  /* ─────────── 11. Memphis, Saqqara & Giza ─────────── */
  {
    slug: "memphis-saqqara-giza-day-tour",
    title: "Memphis, Saqqara & Giza Pyramids Day Tour",
    place: "Memphis, Saqqara & Giza",
    type: "Day Tour",
    destination: "Cairo & Giza",
    category: "Pyramids & Giza Tours",
    metaTitle: "Memphis, Saqqara & Giza Pyramids Private Day Tour | Fair Egypt",
    metaDescription: "A private day from Egypt's first capital at Memphis to the Step Pyramid at Saqqara and the Great Pyramids and Sphinx at Giza — the formative era of ancient Egypt in one day.",
    duration: "About 8 hours",
    groupSize: "Private",
    languages: LANGS,
    rating: "4.9",
    reviewCount: 88,
    price: 70,
    heroImage: D("cairo/hero.jpg"),
    heroImageAlt: "The Great Pyramids and Sphinx at Giza",
    cardImage: D("cairo/saqqara.jpg"),
    cardImageAlt: "The Step Pyramid at Saqqara",
    summary:
      "A private day that connects the origins of ancient Egypt with its icons — the first capital at Memphis, the Step Pyramid at Saqqara, and the Great Pyramids and Sphinx at Giza.",
    overview: [
      "This tour builds from the beginning of pharaonic Egypt to its most famous monuments, in one well-paced day. It starts where the civilisation was founded and ends at the pyramids everyone pictures, so the day has a real sense of build-up.",
      "You begin at Memphis, Egypt's first capital, walk the necropolis of Saqqara and the Step Pyramid of Djoser, and finish at the Giza Plateau with Khufu, Khafre, Menkaure and the Sphinx. Your guide carries the thread the whole way through.",
    ],
    highlights: [
      "Memphis — Egypt's first capital",
      "The Step Pyramid of Djoser at Saqqara",
      "The Great Pyramids of Giza & the Sphinx",
      "The Valley Temple of Khafre",
    ],
    itinerary: [
      { time: "08:00", title: "Hotel pickup", text: "Meet your guide and drive south to Memphis." },
      { time: "09:00", title: "Memphis", text: "The open-air site of Egypt's first capital, including the colossal Ramesses II." },
      { time: "10:30", title: "Saqqara", text: "The Step Pyramid of Djoser and the surrounding complex." },
      { time: "12:30", title: "Lunch (optional)", text: "An optional lunch stop on request before continuing to Giza." },
      { time: "13:45", title: "Giza Plateau", text: "The three Great Pyramids, the Sphinx and the Valley Temple." },
      { time: "16:00", title: "Return to your hotel", text: "We drive you back comfortably to your hotel." },
    ],
    included: BASE_INCLUDED,
    notIncluded: EXCLUDED_OPT_LUNCH,
    gallery: [T("memphis-ramses.jpg"), D("cairo/saqqara.jpg"), T("saqqara-carving.jpg"), D("cairo/hero.jpg"), T("giza-camel.jpg"), T("giza-desert.jpg")],
  },

  /* ─────────────── 12. Giza Desert Safari by Beach Buggy ─────────────── */
  {
    slug: "giza-desert-safari-beach-buggy",
    title: "Giza Desert Safari by Beach Buggy",
    place: "Giza",
    type: "Day Tour",
    destination: "Cairo & Giza",
    category: "Desert & Oasis Adventures",
    metaTitle: "Giza Desert Safari by Beach Buggy (Private) | Fair Egypt Tours",
    metaDescription: "A one-hour private beach-buggy safari through the Giza desert, with all three Great Pyramids in view the whole way. Hotel pickup and drop-off included.",
    duration: "About 3 hours",
    groupSize: "Private",
    languages: LANGS,
    rating: "4.8",
    reviewCount: 57,
    price: 50,
    heroImage: T("desert-buggy.jpg"),
    heroImageAlt: "An off-road buggy on the desert sand near the pyramids",
    cardImage: T("giza-camel.jpg"),
    cardImageAlt: "The pyramids of Giza from the desert at sunset",
    summary:
      "A one-hour private beach-buggy safari through the Giza desert, with all three Great Pyramids in view the whole way — a high-energy alternative to the standard plateau visit. Pickup and drop-off included.",
    overview: [
      "This is the pyramids from a completely different angle. Instead of the usual plateau walk, you ride a beach buggy through the desert that surrounds Giza, reaching viewpoints most visitors never see.",
      "The one-hour ride keeps all three Great Pyramids — Khufu, Khafre and Menkaure — in view as you carve through the sand, which makes for extraordinary photos and a genuine shot of adrenaline. It pairs well with a classic pyramids visit on the same day, or stands alone as a short, memorable adventure.",
    ],
    highlights: [
      "A one-hour beach-buggy safari through the Giza desert",
      "All three Great Pyramids in view throughout",
      "Desert viewpoints most visitors never reach",
      "A fun, active alternative to the standard visit",
    ],
    itinerary: [
      { time: "15:00", title: "Hotel pickup", text: "Your driver collects you and transfers you to the buggy base by the Giza desert." },
      { time: "15:45", title: "Beach-buggy safari", text: "A one-hour ride through the desert with the pyramids in view the whole way — great for sunset light." },
      { time: "17:00", title: "Return to your hotel", text: "We drive you back comfortably to your hotel." },
    ],
    included: ["Private hotel pickup & drop-off", "Air-conditioned vehicle & professional driver", "1-hour beach-buggy desert safari", "Bottled water"],
    notIncluded: ["Guide (optional add-on)", "Gratuities (at your discretion)", "Personal expenses"],
    gallery: [T("desert-buggy.jpg"), T("giza-camel.jpg"), T("giza-desert.jpg"), T("fayoum-safari.jpg"), T("desert-camel.jpg")],
  },
];

export const getTour = (slug: string) => tours.find((t) => t.slug === slug);
