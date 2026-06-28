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
  /** Answer-first 1–2 sentence summary for AI extraction & meta description. */
  summary?: string;
  /** SEO title tag override (falls back to "<name> Travel Guide"). */
  metaTitle?: string;
  /** SEO meta description override (falls back to summary/intro). */
  metaDescription?: string;
  quickFacts: { label: string; value: string }[];
  overview: Section[];
  history: string[];
  gettingThere: string[];
  whereToStay: { area: string; note: string }[];
  thingsToDo: { title: string; text: string; image?: string }[];
  bestTime: string;
  /** Specific, self-contained Q&As — powers the FAQ section + FAQPage schema. */
  faqs?: { q: string; a: string }[];
  gallery: string[];
  tourSlugs: string[];
};

/** Local image path helper — files live under public/img/dest/<slug>/. */
const img = (slug: string, name: string) => `/img/dest/${slug}/${name}`;

export const destinations: Destination[] = [
  /* ============================ CAIRO & GIZA ============================ */
  {
    slug: "cairo",
    name: "Cairo & Giza",
    region: "Lower Egypt",
    tagline: "The last ancient wonder, the world's greatest pharaonic museum, and a thousand-year-old city in between.",
    heroImage: img("cairo", "hero.jpg"),
    cardImage: img("cairo", "card.jpg"),
    tourCount: 6,
    intro:
      "Cairo and Giza are where almost every Egypt trip begins: the 4,500-year-old Pyramids of Giza and the Great Sphinx sit on the city's western edge, and the Grand Egyptian Museum — the largest museum on earth devoted to one civilisation — opened beside them in November 2025. Two to four days covers the headline sights without rushing.",
    summary:
      "Cairo & Giza pair the Pyramids and the Great Sphinx with the new Grand Egyptian Museum and a thousand years of Islamic and Coptic history. Plan two to four days.",
    metaTitle: "Cairo & Giza Travel Guide: Pyramids & GEM | Fair Egypt Tours",
    metaDescription:
      "Plan Cairo & Giza: the Pyramids and Great Sphinx, the new Grand Egyptian Museum, Saqqara, the Citadel and Khan el-Khalili — with real hotels and honest, first-hand advice.",
    quickFacts: [
      { label: "Best for", value: "First-time visitors" },
      { label: "Ideal stay", value: "2–4 days" },
      { label: "Best months", value: "October–April" },
      { label: "Signature", value: "Pyramids + Grand Egyptian Museum" },
      { label: "Airport", value: "Cairo International (CAI)" },
    ],
    overview: [
      {
        heading: "Why visit Cairo & Giza?",
        paras: [
          "Cairo and Giza hold the single greatest concentration of ancient sites in Egypt. On the western edge of the city, the pyramids of Khufu, Khafre and Menkaure rise straight out of the desert a short drive from your hotel, and the Grand Egyptian Museum now shows the complete Tutankhamun collection two kilometres away. No other city lets you stand beside a 4,500-year-old wonder in the morning and walk a 14th-century bazaar the same evening.",
          "Beyond Giza, the city stacks era on era: the Step Pyramid at Saqqara where pyramid-building was invented, the medieval Citadel of Salah al-Din, the old churches of Coptic Cairo, and the lantern-lit lanes of Khan el-Khalili. We tell first-timers to treat Cairo as the opening chapter of the trip, not a box to tick on the way to the Nile.",
        ],
      },
      {
        heading: "How many days do you need?",
        paras: [
          "Two full days is the sensible minimum for Cairo and Giza, and three or four make it rewarding rather than rushed. One day covers Giza and the Grand Egyptian Museum; a second adds Saqqara and Memphis or Islamic and Coptic Cairo; a third leaves room for the Egyptian Museum in Tahrir, Khan el-Khalili, and an unhurried lunch by the Nile.",
          "The most common mistake we see is trying to do everything in a single overloaded day. Cairo's traffic is real, so we plan days by geography rather than wish-list — clustering the desert sites together and saving the walkable old city for the cooler afternoon.",
        ],
      },
      {
        heading: "How we plan a Cairo stay",
        paras: [
          "We shape Cairo days around pace, heat, opening times and where your hotel sits, not a fixed checklist. Early starts go to the open-air desert sites before the midday sun; museums and shaded old-city walks fill the afternoon; evenings stay soft by the river.",
          "Every multi-day plan includes a private driver and a licensed Egyptologist guide, so you skip taxi haggling and get the context that turns separate monuments into one connected story.",
        ],
      },
    ],
    history: [
      "Giza's pyramids were built during the Fourth Dynasty, around 2600–2500 BC, as tombs for the pharaohs Khufu, Khafre and Menkaure. The Great Pyramid of Khufu stood as the tallest human-made structure on earth for nearly 4,000 years, and the Great Sphinx has guarded the plateau ever since.",
      "Just south at Saqqara stands the Step Pyramid of Djoser (around 2670 BC) — the world's oldest large stone building and the prototype from which the true pyramids evolved. The nearby fields of Memphis were Egypt's first capital.",
      "Cairo itself is far younger, founded in 969 AD by the Fatimid dynasty. It grew into the largest city of the medieval Islamic world, and Salah al-Din (Saladin) fortified it with the great Citadel in the 1170s, leaving the skyline of minarets and madrasas that still defines Old Cairo.",
    ],
    gettingThere: [
      "Cairo International Airport (CAI) is the main gateway, with direct flights from most of Europe, the Gulf and beyond. It sits roughly 45–60 minutes from Giza depending on traffic.",
      "We include a private airport pick-up with every multi-day plan, so a driver and guide meet you at arrivals — no taxi negotiation after a long flight.",
      "Within the city, a private car with a driver is by far the easiest way to move, and ride-hailing apps work well too. Because Cairo traffic can swallow an hour between districts, a route planned by geography saves real time each day; we handle all transfers between sights.",
    ],
    whereToStay: [
      { area: "Giza / Pyramids", note: "Wake to a pyramid view and get the earliest, quietest start on the plateau. Expect a longer drive into central Cairo for museums and the old city." },
      { area: "Zamalek (Nile island)", note: "Leafy, calm and full of cafés, restaurants and galleries — the choice for repeat visitors and softer evenings by the river." },
      { area: "Garden City / Downtown", note: "Classic Nile-side hotels and the most central base, close to the Egyptian Museum, Old Cairo and the river corniche." },
      { area: "New Cairo / Airport", note: "Best for late arrivals or early flights — practical and modern, but less atmospheric for sightseeing." },
    ],
    thingsToDo: [
      {
        title: "Grand Egyptian Museum (GEM)",
        text: "The Grand Egyptian Museum opened beside the pyramids in November 2025 and is the largest archaeological museum devoted to a single civilisation. It shows the complete Tutankhamun collection — the gold mask, nested coffins and over 5,000 objects — together for the first time. Entry is timed and must be booked online, so we secure a morning slot before the Tutankhamun galleries fill.",
        image: img("cairo", "gem.jpg"),
      },
      {
        title: "Pyramids of Giza & the Great Sphinx",
        text: "The three great pyramids of Khufu, Khafre and Menkaure and the Sphinx that guards them are around 4,500 years old and still the reason most people first picture Egypt. You can ride out to the panorama point, go down inside the Great Pyramid on a separate limited ticket, and stand at the foot of the Sphinx. We start at the plateau gate by opening time to beat both the heat and the coaches.",
        image: img("cairo", "pyramids.jpg"),
      },
      {
        title: "Saqqara & the Step Pyramid of Djoser",
        text: "Saqqara is the vast burial ground of ancient Memphis, half an hour south of Giza and far quieter than the main plateau. Its centrepiece, the Step Pyramid of Djoser, is the oldest large stone building in the world, and the Serapeum nearby is a rock-cut tunnel lined with two dozen granite sarcophagi cut from single blocks. We usually pair Saqqara with Giza on the same day for a calmer, more spread-out morning.",
        image: img("cairo", "saqqara.jpg"),
      },
      {
        title: "Citadel of Salah al-Din",
        text: "The Citadel is a medieval fortress begun by Saladin in the 1170s on a hill above the city, the seat of Egypt's rulers for nearly 700 years. Its walls give the widest free view over Cairo, and on a clear day you can pick out the pyramids on the horizon. Inside sits the alabaster Muhammad Ali Mosque, whose twin minarets are visible from much of the city; it closes to visitors during prayer times, so we build in flexibility.",
        image: img("cairo", "citadel.jpg"),
      },
      {
        title: "Khan el-Khalili & Islamic Cairo",
        text: "Khan el-Khalili is a market in the heart of medieval Cairo whose covered lanes have traded since the 1300s, surrounded by historic mosques and old gates. You come here to wander, haggle over lamps, spices and silver, and stop for mint tea at El Fishawy, a mirror-lined café serving in the same alley for over two centuries. It is busiest and best in the late afternoon and evening, when the lanes cool and the lanterns come on.",
        image: img("cairo", "khan.jpg"),
      },
    ],
    bestTime:
      "The best months for Cairo and Giza are October to April, when daytime temperatures sit around 20–27°C and the open-air sites are comfortable. May to September is hot, often above 35°C, so we shift sightseeing to early morning. December and January are the coolest and busiest; March, April, October and November are the sweet spot of warm days and lighter crowds.",
    faqs: [
      { q: "How many days should I spend in Cairo and Giza?", a: "Two full days is the practical minimum and three or four are ideal. Day one covers the Pyramids and the Grand Egyptian Museum, day two adds Saqqara or Islamic and Coptic Cairo, and a third day leaves room for Khan el-Khalili and the Egyptian Museum in Tahrir." },
      { q: "Do I need to book the Grand Egyptian Museum in advance?", a: "Yes. Since opening in November 2025 the Grand Egyptian Museum uses timed entry booked online, with a daily visitor cap and no on-site sales. We reserve a morning slot so you reach the Tutankhamun galleries before they get busy. Budget four to five hours for a full visit." },
      { q: "Can you go inside the Pyramids of Giza?", a: "Yes. A separate, limited daily ticket lets you climb the narrow passage inside the Great Pyramid of Khufu to the empty burial chamber. The smaller pyramids are usually cheaper to enter. Tickets sell out, so we book ahead if going inside matters to you." },
      { q: "What is the best time of year to visit Cairo?", a: "October to April, when days are around 20–27°C and comfortable for the open-air sites. Summer (May–September) often passes 35°C, so we sightsee early. March, April, October and November balance warm weather with lighter crowds than the December–January peak." },
      { q: "Is Cairo safe for tourists?", a: "The main tourist areas — Giza, the museums, Zamalek and the old city — are heavily policed and routinely visited. Normal city caution applies for traffic, crowds and pickpocketing in busy markets. Check your government's current travel advice before booking, and our guides stay with you throughout each day." },
      { q: "How do I get from the airport to the pyramids?", a: "Cairo International Airport is about 45–60 minutes from Giza depending on traffic. We include a private driver and guide who meet you at arrivals on every multi-day plan, so there is no taxi haggling after your flight." },
    ],
    gallery: [
      img("cairo", "pyramids.jpg"),
      img("cairo", "gem.jpg"),
      img("cairo", "saqqara.jpg"),
      img("cairo", "citadel.jpg"),
      img("cairo", "khan.jpg"),
      img("cairo", "g-museum.jpg"),
    ],
    tourSlugs: ["giza-pyramids-day-tour", "grand-egyptian-museum-day-tour", "cairo-city-day-tour", "saqqara-citadel-coptic-cairo-day-tour"],
  },

  /* ================================ LUXOR ================================ */
  {
    slug: "luxor",
    name: "Luxor",
    region: "Upper Egypt · Nile Valley",
    tagline: "The world's greatest open-air museum, split between the temples of the living and the tombs of the kings.",
    heroImage: img("luxor", "hero.jpg"),
    cardImage: img("luxor", "card.jpg"),
    tourCount: 5,
    intro:
      "Luxor, built over ancient Thebes, holds roughly a third of the world's ancient monuments in one stretch of the Nile. The East Bank has the great temples of Karnak and Luxor; the West Bank holds the Valley of the Kings and Hatshepsut's Temple. Two to three days lets you see both banks without rushing.",
    summary:
      "Luxor, ancient Thebes, splits between the East Bank temples of Karnak and Luxor and the West Bank tombs of the Valley of the Kings and Hatshepsut's Temple. Plan two to three days.",
    metaTitle: "Luxor Travel Guide: Valley of the Kings & Karnak | Fair Egypt",
    metaDescription:
      "Plan Luxor: the Valley of the Kings, Karnak and Luxor temples, Hatshepsut's Temple and the Luxor Museum — with real hotels, timing tips and first-hand advice.",
    quickFacts: [
      { label: "Best for", value: "Temples & tombs" },
      { label: "Ideal stay", value: "2–3 days" },
      { label: "Best months", value: "October–April" },
      { label: "Signature", value: "Valley of the Kings + Karnak" },
      { label: "Airport", value: "Luxor International (LXR)" },
    ],
    overview: [
      {
        heading: "Why visit Luxor?",
        paras: [
          "Luxor sits on the site of ancient Thebes, the capital of Egypt at the height of the New Kingdom, and it packs more standing temples and painted tombs into a few square miles than anywhere else on earth. The Nile splits the city in two: the East Bank, where the living built the temples of Karnak and Luxor, and the West Bank, where the dead were buried in the Valley of the Kings.",
          "Where Cairo gives you the pyramids, Luxor gives you the colour and detail of ancient Egypt up close — 3,000-year-old paint still bright on tomb walls, columns you can walk between, and reliefs you can read. We treat it as the heart of any serious Nile trip.",
        ],
      },
      {
        heading: "How many days do you need in Luxor?",
        paras: [
          "Two days is enough to see the headline sites: one morning on the West Bank for the Valley of the Kings and Hatshepsut's Temple, and a second split between Karnak and Luxor Temple on the East Bank. A third day adds quieter West Bank tombs, the Luxor Museum, or a dawn hot-air balloon over the necropolis.",
          "Luxor gets fiercely hot by late morning, so our guides start West Bank visits at opening time, around 6am, and keep the air-conditioned Luxor Museum and the floodlit Luxor Temple for later in the day.",
        ],
      },
      {
        heading: "How we plan a Luxor stay",
        paras: [
          "We split Luxor by bank and by clock. The West Bank tombs come first, before the heat and the coaches; Karnak follows early on a separate morning; Luxor Temple is saved for after dark, when it is lit and noticeably cooler. Many travellers reach Luxor as part of a Nile cruise, and we time the temple visits around the ship's schedule.",
          "Every Luxor plan includes a licensed Egyptologist guide, because the tombs and temples reward someone who can read the walls — the difference between pretty stone and a story you remember.",
        ],
      },
    ],
    history: [
      "As Thebes, Luxor was the religious and political capital of Egypt during the New Kingdom (around 1550–1070 BC), when pharaohs such as Hatshepsut, Ramesses II and Tutankhamun ruled. The god Amun-Ra was worshipped here, and the wealth of empire was poured into temples on a colossal scale.",
      "On the west bank, where the sun set, the pharaohs cut their tombs deep into the hills of the Valley of the Kings to hide them from robbers. More than 60 tombs have been found, including Tutankhamun's, discovered nearly intact by Howard Carter in 1922.",
      "The Greeks later called the city Thebes and marvelled at its scale; today its monuments are a single UNESCO World Heritage Site that draws travellers from around the world.",
    ],
    gettingThere: [
      "Luxor International Airport (LXR) has direct domestic flights from Cairo (about 1 hour) plus some seasonal international routes. The airport is roughly 15 minutes from the East Bank hotels.",
      "Many travellers arrive by Nile cruise between Luxor and Aswan, or by the comfortable day and sleeper trains from Cairo (around 9–10 hours). We arrange flights, cruises or trains to fit the rest of your route.",
      "In Luxor itself, distances are short but the heat is not, so a private car with a guide is the easiest way to move between banks; the West Bank is reached by bridge or local ferry across the Nile.",
    ],
    whereToStay: [
      { area: "East Bank corniche", note: "The central choice, walkable to Luxor Temple and the museum, with the widest range of Nile-view hotels and easy evening strolls along the river." },
      { area: "Around Luxor Temple", note: "Stay in the heart of town for late, cool visits to the floodlit temple and quick access to restaurants and the souk." },
      { area: "West Bank", note: "Quieter, more rural and closer to the tombs and balloon launch sites — a local, low-key base for early starts at the Valley of the Kings." },
      { area: "Nile cruise cabin", note: "If you are sailing to Aswan, your floating hotel docks in the centre and turns transfers into part of the trip." },
    ],
    thingsToDo: [
      {
        title: "Valley of the Kings",
        text: "The Valley of the Kings is where New Kingdom pharaohs were buried in more than 60 rock-cut tombs whose painted walls still hold their colour after 3,000 years. A standard ticket covers three tombs, and which ones are open rotates to limit wear; Tutankhamun, Seti I and Nefertari cost extra. We go at opening time, around 6am, when the tombs are cool and quiet, and pick the three best open that day.",
        image: img("luxor", "valley-kings.jpg"),
      },
      {
        title: "Karnak Temple",
        text: "Karnak is not one temple but a complex enlarged by pharaohs over roughly 2,000 years, the largest religious site of the ancient world. Its Great Hypostyle Hall packs 134 giant columns into tight rows, some tall enough to dwarf anyone beneath them. We visit early, when low light catches the carvings and the avenue of ram-headed sphinxes before the day-trippers arrive.",
        image: img("luxor", "karnak.jpg"),
      },
      {
        title: "Hatshepsut's Temple (Deir el-Bahari)",
        text: "Built for one of Egypt's few female pharaohs, Hatshepsut's mortuary temple rises in three wide terraces straight out of the cliffs at Deir el-Bahari, looking strikingly modern for its 3,500 years. The Punt colonnade inside records a famous trading expedition in carved detail. The terraces have little shade, so we pair it with the nearby Valley of the Kings on one early morning.",
        image: img("luxor", "hatshepsut.jpg"),
      },
      {
        title: "Luxor Temple",
        text: "Luxor Temple stands in the centre of town, built mainly by Amenhotep III and Ramesses II and once linked to Karnak by an avenue of sphinxes nearly two miles long. A single obelisk still guards the entrance; its twin stands in Paris. It is one of the rare sites open into the evening, and we save it for after dark, when the columns are floodlit and the air has cooled.",
        image: img("luxor", "luxor-temple.jpg"),
      },
      {
        title: "Luxor Museum",
        text: "The Luxor Museum, on the corniche overlooking the Nile, is a small, well-lit collection that makes a cool counterpoint to the open-air sites. Pieces are chosen rather than crammed, including statues from the Luxor Temple cache, objects from Tutankhamun's tomb and two royal mummies. We use it for an air-conditioned hour or two in the heat of the afternoon.",
        image: img("luxor", "luxor-museum.jpg"),
      },
    ],
    bestTime:
      "The best months for Luxor are October to April, when days are warm and dry at around 25–30°C — ideal for the open-air tombs and temples. Summer (May–September) regularly tops 40°C, so we confine sightseeing to early morning and evening. Sunrise hot-air balloon flights run year-round, weather permitting, and are at their calmest in the cooler months.",
    faqs: [
      { q: "How many days do you need in Luxor?", a: "Two days covers the highlights: one early morning on the West Bank for the Valley of the Kings and Hatshepsut's Temple, and one day for Karnak and Luxor Temple on the East Bank. A third day adds quieter tombs, the Luxor Museum or a sunrise balloon flight over the necropolis." },
      { q: "How many tombs can you enter in the Valley of the Kings?", a: "A standard ticket admits you to three tombs, chosen from those open that day, as the open set rotates to limit wear. The tombs of Tutankhamun, Seti I and Nefertari (in the nearby Valley of the Queens) need separate premium tickets. We advise three tombs plus one premium if your budget allows." },
      { q: "What is the best time to visit Luxor?", a: "October to April, when days sit around 25–30°C and the open-air sites are bearable. Summer often passes 40°C, so we sightsee at dawn and after dark. The cooler months are also the best for sunrise hot-air balloon flights over the West Bank." },
      { q: "Should I see Luxor by cruise or by land?", a: "Both work well. A Nile cruise between Luxor and Aswan turns transfers into part of the trip and adds Edfu and Kom Ombo en route. Staying in a Luxor hotel suits travellers who want more time at the temples and tombs. We arrange either, or a combination." },
      { q: "Is a guide worth it in Luxor?", a: "Yes — more than almost anywhere in Egypt. The tombs and temples are covered in reliefs and hieroglyphs that mean little without context, and a licensed Egyptologist turns the walls into a story. Every Luxor plan we run includes one, along with timing that avoids the worst heat and crowds." },
      { q: "Can you visit Luxor Temple at night?", a: "Yes. Luxor Temple stays open into the evening, usually until around 9pm or later, which makes it one of the few sites you can see after dark. We save it for the evening, when the columns and statues are floodlit and the temperature has dropped — it is walkable from most East Bank hotels." },
    ],
    gallery: [
      img("luxor", "valley-kings.jpg"),
      img("luxor", "karnak.jpg"),
      img("luxor", "hatshepsut.jpg"),
      img("luxor", "luxor-temple.jpg"),
      img("luxor", "g-tomb.jpg"),
    ],
    tourSlugs: ["valley-of-the-kings-karnak", "nile-cruise-coast-escape"],
  },

  /* ================================ ASWAN ================================ */
  {
    slug: "aswan",
    name: "Aswan",
    region: "Upper Egypt · Nile Valley",
    tagline: "Egypt's gentlest city — island temples, granite quarries and Nubian villages on the bluest stretch of the Nile.",
    heroImage: img("aswan", "hero.jpg"),
    cardImage: img("aswan", "card.jpg"),
    tourCount: 4,
    intro:
      "Aswan is Egypt's southernmost city and its most relaxed, set on a wide, island-dotted stretch of the Nile. Its highlights — the island temple of Philae, the Unfinished Obelisk and the colourful Nubian villages — sit close together, and most travellers spend one to two days here, often as the start or end of a Nile cruise.",
    summary:
      "Aswan is Egypt's calmest city, set on an island-dotted Nile: the temple of Philae, the Unfinished Obelisk, Kitchener's botanical island and Nubian villages. Plan one to two days.",
    metaTitle: "Aswan Travel Guide: Philae, Felucca & Nubia | Fair Egypt Tours",
    metaDescription:
      "Plan Aswan: the island temple of Philae, the Unfinished Obelisk, Kitchener's botanical garden, Elephantine Island and the Nubian villages — with real hotels and felucca tips.",
    quickFacts: [
      { label: "Best for", value: "Slow days & the Nile" },
      { label: "Ideal stay", value: "1–2 days" },
      { label: "Best months", value: "October–April" },
      { label: "Signature", value: "Philae Temple + a felucca sail" },
      { label: "Airport", value: "Aswan International (ASW)" },
    ],
    overview: [
      {
        heading: "Why visit Aswan?",
        paras: [
          "Aswan is where the Nile is at its most beautiful and the pace at its slowest. Granite islands and white-sailed feluccas fill the river, the desert comes right down to the water, and the city has a distinct Nubian character you do not find further north. After the intensity of Cairo and Luxor, most travellers feel the trip exhale here.",
          "It is also the springboard for two of Egypt's great experiences: the temple of Philae, rescued island by island from the rising Nile, and the long day-trip south to Abu Simbel. We often use Aswan as the place to slow down for a day before or after a cruise.",
        ],
      },
      {
        heading: "How many days do you need in Aswan?",
        paras: [
          "One full day covers Aswan's core: Philae Temple by motorboat in the morning, the Unfinished Obelisk, and a felucca sail past Elephantine Island and Kitchener's botanical garden in the late afternoon. A second day adds a Nubian village visit, the Nubian Museum, or the early start to Abu Simbel.",
          "Aswan rewards an unhurried rhythm more than a packed schedule. We build in river time — a sail at sunset, tea in a Nubian house — rather than treating it as a list of monuments.",
        ],
      },
      {
        heading: "How we plan an Aswan stay",
        paras: [
          "We work Aswan around the river and the heat. Island sites and the obelisk come in the cooler morning; the afternoon is for a felucca, when the light is soft and the wind picks up. If Abu Simbel is on your list, we set out before dawn and keep the rest of that day gentle.",
          "Boats are part of almost every Aswan visit, so we agree fares in advance and use trusted local captains — no haggling at the landing, and a guide who knows which villages welcome visitors.",
        ],
      },
    ],
    history: [
      "Aswan stood at Egypt's ancient southern frontier, the trading gateway to Nubia and Africa. Its pink granite quarries supplied the stone for obelisks and statues the length of the Nile, and the Unfinished Obelisk still lies in the bedrock where it cracked.",
      "The temple of Philae, dedicated to the goddess Isis, was one of the last places the old Egyptian religion was practised, well into the Roman era. When the Aswan dams threatened to drown it, a UNESCO project cut it into thousands of blocks in the 1960s and 70s and rebuilt it on higher Agilkia Island.",
      "The building of the High Dam in the 1960s created Lake Nasser and displaced the Nubian people from their ancestral villages, a history still felt strongly in the painted Nubian settlements around the city today.",
    ],
    gettingThere: [
      "Aswan International Airport (ASW) has direct domestic flights from Cairo (about 1.5 hours) and Luxor. The airport is around 25 minutes from the city centre and corniche.",
      "Many travellers arrive by Nile cruise from Luxor, or on the sleeper and day trains from Cairo. We arrange the flights, cruise or train that fit your route, and the transfers at each end.",
      "In Aswan, much of the sightseeing is by boat — motorboat to Philae, public ferry to Elephantine Island, and felucca for the sunset sail. A private car covers the Unfinished Obelisk, the dam and the long road to Abu Simbel.",
    ],
    whereToStay: [
      { area: "Corniche (central)", note: "Riverfront hotels in the heart of town, walking distance to the souk and the boat landings, many with rooftop pools and Nile views." },
      { area: "Nile islands", note: "Resorts on their own green islands, reached by a short boat shuttle — quiet, spacious and surrounded by water on every side." },
      { area: "Elephantine Island", note: "Small Nubian guesthouses among painted houses and palm gardens, a cheap local ferry from the corniche and a real sense of village life." },
      { area: "West bank / Nubian villages", note: "Colourful, low-key Nubian stays for travellers who want sand streets, home cooking and the slowest pace in the city." },
    ],
    thingsToDo: [
      {
        title: "Philae Temple (Temple of Isis)",
        text: "Philae is a graceful temple to the goddess Isis on Agilkia Island, reached by a short motorboat ride from the Shellal landing. It was one of the last places the old religion survived into Roman times, and the whole complex was moved here block by block in the 1960s to save it from the rising Nile. We agree the boat fare before stepping aboard, and the evening sound-and-light show is worth timing for.",
        image: img("aswan", "philae.jpg"),
      },
      {
        title: "The Unfinished Obelisk",
        text: "The Unfinished Obelisk still lies in the granite quarry where it was abandoned, after a crack appeared partway through carving. Had it been raised it would have stood about 42 metres and weighed close to 1,000 tons, larger than any obelisk ever finished. Wooden walkways let you look straight down its length; there is almost no shade, so we visit early with water in hand.",
        image: img("aswan", "obelisk.jpg"),
      },
      {
        title: "Kitchener's Island Botanical Garden",
        text: "Kitchener's Island is a whole small island in the Nile planted as one long botanical garden, with trees and shrubs brought from across Africa and Asia. Shaded paths run between palms and flowering trees while feluccas drift past on both sides, and the birdlife is easy to spot. We reach it by felucca in the late afternoon, when the heat eases and the light turns gold.",
        image: img("aswan", "botanical.jpg"),
      },
      {
        title: "Elephantine Island",
        text: "Elephantine is the largest island at Aswan and one of the oldest inhabited places in the region, holding the Temple of Khnum, an ancient nilometer that measured the flood, and a small museum. Painted Nubian villages sit alongside the ruins, so one walk takes in ancient stone and everyday life. A cheap public ferry crosses from the corniche, so you do not need a private boat.",
        image: img("aswan", "elephantine.jpg"),
      },
      {
        title: "Nubian Village",
        text: "The Nubian villages around Aswan are known for bright painted houses, sand streets and a culture distinct from the rest of Egypt. Families welcome visitors for tea, a home-cooked lunch and a look at crafts and music, and the visit comes with the history of the displacement caused by the High Dam. We arrive by motorboat or camel and bring small cash for tea and handmade goods, as cards are not used.",
        image: img("aswan", "nubian.jpg"),
      },
    ],
    bestTime:
      "The best months for Aswan are October to April, when the days are warm and dry at around 25–30°C and the evenings on the river are cool. Aswan is the hottest city on most Egypt itineraries in summer, regularly above 40°C from May to September, so we keep those months to early-morning sightseeing and sunset sails. The cooler season is also the most comfortable for the long Abu Simbel day-trip.",
    faqs: [
      { q: "How many days do you need in Aswan?", a: "One full day covers Philae Temple, the Unfinished Obelisk and a sunset felucca sail. A second day adds a Nubian village, the Nubian Museum, or the early-morning trip to Abu Simbel. Many travellers spend one night here as part of a Luxor–Aswan Nile cruise." },
      { q: "Can you visit Abu Simbel from Aswan?", a: "Yes. Abu Simbel is about a 3 to 3.5-hour drive south of Aswan, and most visitors go as a long day-trip leaving before dawn, or fly the short hop from Aswan airport. We set out early so you reach the temples in the cooler morning light and keep the rest of the day gentle." },
      { q: "What is a felucca and is it worth doing?", a: "A felucca is a traditional wooden sailing boat, and a sunset sail past Elephantine Island and Kitchener's garden is the classic Aswan experience. It is slow, quiet and one of the prettiest hours on the Nile. We use trusted local captains and agree the fare in advance, so there is no haggling at the landing." },
      { q: "What is the best time to visit Aswan?", a: "October to April, when days are around 25–30°C and the river evenings are cool. Aswan is the hottest stop on most itineraries in summer, often above 40°C, so May to September visits stick to early mornings and sunset sails. The cooler months also suit the Abu Simbel day-trip." },
      { q: "How do you get to Philae Temple?", a: "Philae sits on Agilkia Island and is reached only by a short motorboat ride from the Shellal landing south of the Aswan Low Dam. The boat fare is usually separate from the entry ticket, so we agree it before boarding. Allow a couple of hours, and consider the evening sound-and-light show." },
      { q: "Is Aswan worth visiting beyond the temples?", a: "Yes. Aswan is the most relaxed city on a typical Egypt trip, and much of its appeal is the river itself — the feluccas, the granite islands and the Nubian villages with their painted houses and home cooking. We build in unhurried river time rather than treating it as only a list of monuments." },
    ],
    gallery: [
      img("aswan", "philae.jpg"),
      img("aswan", "nubian.jpg"),
      img("aswan", "botanical.jpg"),
      img("aswan", "obelisk.jpg"),
      img("aswan", "g-nile.jpg"),
    ],
    tourSlugs: ["abu-simbel-nile-sail", "nile-cruise-coast-escape"],
  },

  /* ============================== ABU SIMBEL ============================== */
  {
    slug: "abu-simbel",
    name: "Abu Simbel",
    region: "Nubia · Lake Nasser",
    tagline: "Ramesses II's mountain temples on the shore of Lake Nasser — the greatest rescue in archaeology.",
    heroImage: img("abu-simbel", "hero.jpg"),
    cardImage: img("abu-simbel", "card.jpg"),
    tourCount: 3,
    intro:
      "Abu Simbel is a pair of rock-cut temples carved for Ramesses II in the 13th century BC, near Egypt's southern border on Lake Nasser. In the 1960s a UNESCO team cut both temples into blocks and rebuilt them on higher ground to save them from the rising lake. Most travellers visit as a day-trip from Aswan, about 3 hours' drive each way.",
    summary:
      "Abu Simbel is Ramesses II's pair of rock-cut temples on Lake Nasser, moved block by block in the 1960s to escape the rising water. Visit as a day-trip from Aswan.",
    metaTitle: "Abu Simbel Travel Guide: Ramesses II's Temples | Fair Egypt",
    metaDescription:
      "Plan Abu Simbel: the Great Temple of Ramesses II, Nefertari's temple and the rescued Nubian temples on Lake Nasser — how to visit from Aswan, the sun festival and where to stay.",
    quickFacts: [
      { label: "Best for", value: "Monumental temples" },
      { label: "Ideal stay", value: "Day-trip or 1 night" },
      { label: "Best months", value: "October–April" },
      { label: "Signature", value: "Great Temple of Ramesses II" },
      { label: "Getting there", value: "3-hr drive or short flight from Aswan" },
    ],
    overview: [
      {
        heading: "Why visit Abu Simbel?",
        paras: [
          "Abu Simbel is the most dramatic single sight in Egypt after the pyramids. Four seated statues of Ramesses II, each about 20 metres tall, are cut straight into a cliff above Lake Nasser, and the temple behind them runs deep into the rock. Standing at their feet, with the lake stretching south toward Sudan, is a different kind of awe from the temples of the Nile Valley.",
          "The temples are also a monument to modern engineering. In the 1960s, as Lake Nasser rose behind the High Dam, both were sawn into more than a thousand blocks and rebuilt 65 metres higher — the engineers even preserved the ancient solar alignment almost exactly.",
        ],
      },
      {
        heading: "How do you visit Abu Simbel?",
        paras: [
          "Most people visit Abu Simbel as a day-trip from Aswan, about 3 to 3.5 hours' drive each way, leaving before dawn to arrive in the cooler morning light. A short flight from Aswan is the faster, easier alternative. A handful of travellers stay overnight in the village to see the temples at sunset and dawn with almost no crowds.",
          "The lesser Nubian temples nearby — Amada, Wadi el-Seboua and Kalabsha among them — were rescued in the same UNESCO effort and are usually seen on a Lake Nasser cruise rather than by road.",
        ],
      },
      {
        heading: "How we plan an Abu Simbel visit",
        paras: [
          "We tailor it to your pace. For most travellers that means an early road convoy or a short flight from Aswan, with a guide who brings the rescue story and the carvings to life. For those who want the temples at their quietest, we arrange a night in the village so you have them at sunset and first light.",
          "If you are travelling near 22 February or 22 October, we plan well ahead — on those mornings the rising sun reaches the inner sanctuary and lights the statues, and the village fills.",
        ],
      },
    ],
    history: [
      "Ramesses II carved the two temples of Abu Simbel into the cliffs in the 13th century BC, the Great Temple for himself and the gods, and a smaller one for his queen Nefertari and the goddess Hathor. The Great Temple was built so that twice a year the sun would shine the length of it and light the statues in the sanctuary.",
      "Over the centuries the temples were buried by sand and forgotten, until the Swiss explorer Johann Ludwig Burckhardt found the heads of the colossi protruding from the dune in 1813.",
      "Their most famous chapter is modern. Between 1964 and 1968, as the waters of Lake Nasser rose, a UNESCO-led team cut both temples into blocks and reassembled them on higher ground inside an artificial hill — one of the largest archaeological rescue operations ever undertaken.",
    ],
    gettingThere: [
      "Abu Simbel lies about 280 km south of Aswan, near the Sudanese border. The road trip is around 3 to 3.5 hours each way, traditionally in an early-morning convoy, and is the most common way to visit.",
      "EgyptAir flies the short hop from Aswan to Abu Simbel, which turns a long day into an easy half-day; we arrange the flights and the ground transfers at both ends.",
      "The rescued Nubian temples upstream are reached by Lake Nasser cruise rather than road. If a quiet, sunset-and-dawn visit appeals, we can book one of the few hotels in Abu Simbel village so you avoid the day-trip crowds entirely.",
    ],
    whereToStay: [
      { area: "Abu Simbel village", note: "A handful of lakeside hotels and Nubian eco-lodges let you see the temples at sunset and dawn with almost no one else there — the reason to stay over." },
      { area: "Aswan (day-trip base)", note: "Most visitors sleep in Aswan and come to Abu Simbel for the morning, choosing from the city's full range of Nile-view hotels and island resorts." },
      { area: "Lake Nasser cruise", note: "A cruise links Abu Simbel with the rescued temples of Amada, Wadi el-Seboua and Kalabsha, with the lake as your moving hotel." },
    ],
    thingsToDo: [
      {
        title: "Abu Simbel Great Temple",
        text: "The Great Temple of Ramesses II is fronted by four seated colossi each about 20 metres tall, cut straight into the rock above Lake Nasser. Inside, a pillared hall leads to a sanctuary where, twice a year around 22 February and 22 October, the rising sun reaches in and lights three of the four gods — an alignment the builders set more than 3,000 years ago and the modern engineers preserved. We arrive early, before the day-trip coaches, to stand at the colossi in good light.",
        image: img("abu-simbel", "great-temple.jpg"),
      },
      {
        title: "Temple of Nefertari (the Small Temple)",
        text: "Beside the Great Temple, Ramesses II built a second one for his queen Nefertari and the goddess Hathor. Unusually for the time, the six statues on its facade show the queen the same height as the king, and the carvings inside are softer and more personal. It draws fewer people than its giant neighbour, so we slow down here to look closely at the reliefs.",
        image: img("abu-simbel", "nefertari.jpg"),
      },
      {
        title: "Amada Temple",
        text: "Amada is the oldest temple on Lake Nasser, begun under Thutmose III and Amenhotep II in the 15th century BC. Plain outside, it keeps some of the best-preserved painted carvings in Nubia, with original colour still on the stone. Rather than cut it apart, engineers slid the whole temple 2.5 km to higher ground on rails; it is usually reached by Lake Nasser cruise.",
        image: img("abu-simbel", "amada.jpg"),
      },
      {
        title: "Qasr Ibrim",
        text: "Qasr Ibrim is the one major site that was never moved — a ruined fortress city on a bluff that the rising lake turned into an island. People lived here for thousands of years, through Egyptian, Roman, Christian and Islamic times, and the dry soil preserved rare finds including textiles and documents. You cannot land on it, so it is viewed from the water as a cruise passes; bring binoculars or a zoom lens.",
        image: img("abu-simbel", "qasr-ibrim.jpg"),
      },
      {
        title: "Wadi el-Seboua",
        text: "Wadi el-Seboua, the 'valley of the lions', is named for the avenue of sphinxes leading to a temple of Ramesses II, part free-standing and part cut into the rock. Early Christians later plastered over the Egyptian gods to use it as a church, and in one spot a painted saint now seems to face the old carvings. Two other rescued temples stand close by, so it makes a three-in-one stop on a Lake Nasser cruise.",
        image: img("abu-simbel", "wadi-seboua.jpg"),
      },
      {
        title: "Kalabsha Temple",
        text: "Kalabsha is one of the largest free-standing temples in Nubia, built around 30 BC for a local sun god, Mandulis, and rebuilt on an island near the High Dam — which makes it one of the easiest rescued temples to reach from Aswan. The site also holds the Kiosk of Qertassi and the rock-cut Beit el-Wali temple. Reaching the island means a short motorboat ride, so we agree the fare before setting off.",
        image: img("abu-simbel", "kalabsha.jpg"),
      },
    ],
    bestTime:
      "The best months for Abu Simbel are October to April, when the day-trip from Aswan is comfortable and the temple facade catches good morning light. Summer is very hot, often above 40°C, so an early start or the short flight is essential. The two sun-festival mornings, around 22 February and 22 October, are spectacular but crowded and need booking months ahead.",
    faqs: [
      { q: "How do you get to Abu Simbel from Aswan?", a: "Two ways: a 3 to 3.5-hour drive each way, usually leaving Aswan before dawn, or a short EgyptAir flight from Aswan that turns the trip into an easy half-day. We arrange either, with a guide who brings the temples and the 1960s rescue story to life." },
      { q: "Is Abu Simbel worth the long day-trip?", a: "For most travellers, yes. Abu Simbel is the most monumental sight in Egypt after the pyramids — four 20-metre colossi cut into a cliff above Lake Nasser. If the early start feels like too much, the short flight from Aswan or an overnight in the village makes it far easier." },
      { q: "What is the Abu Simbel sun festival?", a: "Around 22 February and 22 October each year, the rising sun shines the length of the Great Temple and lights the statues in the inner sanctuary — an alignment built over 3,000 years ago. These mornings draw large crowds and higher prices, so we book months in advance for anyone timing their trip to see it." },
      { q: "Can you stay overnight at Abu Simbel?", a: "Yes. The village has a handful of lakeside hotels and Nubian eco-lodges. Staying over lets you see the temples at sunset and dawn with almost no one else there, which is the main reason to do it rather than visiting on the day-trip from Aswan." },
      { q: "What is the best time to visit Abu Simbel?", a: "October to April, when the long day-trip is comfortable and the morning light is good on the colossi. Summer regularly tops 40°C, so an early start or the flight from Aswan is essential. The sun-festival mornings in February and October are dramatic but very busy." },
      { q: "What are the other Nubian temples near Abu Simbel?", a: "Amada, Wadi el-Seboua and Kalabsha are smaller temples rescued in the same UNESCO effort that saved Abu Simbel, along with the cliff-top ruins of Qasr Ibrim. Most are reached by Lake Nasser cruise rather than road, and we can build one into a longer southern itinerary." },
    ],
    gallery: [
      img("abu-simbel", "great-temple.jpg"),
      img("abu-simbel", "nefertari.jpg"),
      img("abu-simbel", "amada.jpg"),
      img("abu-simbel", "g-interior.jpg"),
      img("abu-simbel", "kalabsha.jpg"),
    ],
    tourSlugs: ["abu-simbel-nile-sail"],
  },

  /* ============================== ALEXANDRIA ============================== */
  {
    slug: "alexandria",
    name: "Alexandria",
    region: "Mediterranean Coast",
    tagline: "Egypt's window on the Mediterranean — Greek and Roman layers under a breezy modern port city.",
    heroImage: img("alexandria", "hero.jpg"),
    cardImage: img("alexandria", "card.jpg"),
    tourCount: 3,
    intro:
      "Alexandria is Egypt's second city and its Mediterranean front, founded by Alexander the Great in 331 BC. It trades pyramids for sea breeze, a long curving corniche and layers of Greek, Roman and Ottoman history — the catacombs of Kom el-Shoqafa, Pompey's Pillar and the Qaitbay fort. It makes an easy day-trip or overnight from Cairo, about three hours each way.",
    summary:
      "Alexandria is Egypt's Mediterranean city: the catacombs of Kom el-Shoqafa, Pompey's Pillar, the Qaitbay fort and the revived Library. An easy day-trip or overnight from Cairo.",
    metaTitle: "Alexandria Travel Guide: Catacombs & Qaitbay | Fair Egypt",
    metaDescription:
      "Plan Alexandria: the catacombs of Kom el-Shoqafa, Pompey's Pillar, the Qaitbay Citadel, Montaza Palace and the Greco-Roman Museum — day-trip from Cairo, hotels and tips.",
    quickFacts: [
      { label: "Best for", value: "Greco-Roman history & sea air" },
      { label: "Ideal stay", value: "Day-trip or 1–2 days" },
      { label: "Best months", value: "April–June, September–October" },
      { label: "Signature", value: "Qaitbay Citadel + the catacombs" },
      { label: "Getting there", value: "~3 hrs from Cairo by road or train" },
    ],
    overview: [
      {
        heading: "Why visit Alexandria?",
        paras: [
          "Alexandria feels unlike anywhere else in Egypt. Founded by Alexander the Great and once home to the greatest library of the ancient world, it faces the Mediterranean rather than the desert, and the sea air, the long corniche and the faded grand cafés give it a mood closer to the old Levant than to Cairo.",
          "Its sights are the Greek and Roman layers beneath the modern port: the underground tombs of Kom el-Shoqafa, the lone column of Pompey's Pillar, the Qaitbay fort on the site of the ancient lighthouse, and the reborn Library of Alexandria. It rewards travellers who want history with a change of pace and a plate of fresh seafood.",
        ],
      },
      {
        heading: "Is Alexandria a day-trip or a stay?",
        paras: [
          "Alexandria works well as a long day-trip from Cairo, about three hours each way by road or train, which is how most people see it. One day is enough for the catacombs, Pompey's Pillar, the Qaitbay fort and a seafront lunch.",
          "An overnight turns it into something more relaxed — time for the Greco-Roman Museum, the gardens of Montaza Palace at the eastern end of the city, and an evening walk along the corniche. We suggest staying over if the Mediterranean side of Egypt appeals to you.",
        ],
      },
      {
        heading: "How we plan an Alexandria visit",
        paras: [
          "For a day-trip we leave Cairo early, cluster the ancient sites in the morning before the coastal traffic builds, and finish on the seafront at the Qaitbay fort. For an overnight we slow it down, adding the museum and Montaza and saving the corniche for sunset.",
          "A guide makes the Greco-Roman layers legible — the catacombs in particular blend Egyptian, Greek and Roman styles in one tomb, and the context is what makes them memorable.",
        ],
      },
    ],
    history: [
      "Alexander the Great founded Alexandria in 331 BC, and under the Ptolemies it became the greatest city of the Hellenistic world, home to the famous Library and the Pharos lighthouse, one of the Seven Wonders of the ancient world.",
      "Roman, Christian and Islamic Alexandria layered on top: the catacombs of Kom el-Shoqafa date to the 2nd century AD, and Pompey's Pillar was raised around 297 AD for the emperor Diocletian on the site of the Serapeum temple.",
      "The ancient lighthouse finally collapsed in medieval earthquakes, and in the 1480s Sultan Qaitbay built his fort on the exact spot, reusing some of the fallen stone. In 2002 the modern Bibliotheca Alexandrina opened nearby, reviving the city's ancient role as a place of learning.",
    ],
    gettingThere: [
      "Most travellers reach Alexandria from Cairo, about three hours by road or by the frequent intercity trains. We arrange a private car and guide for the day, or rail tickets with a transfer at each end.",
      "Alexandria has its own airport (Borg El Arab, HBE) with some domestic and regional flights, around 45 minutes west of the city.",
      "Within the city, the sights stretch along the corniche, so a private car is the easiest way to link the catacombs, the fort and Montaza in one visit; the old blue trams are a slow, characterful way to ride the seafront.",
    ],
    whereToStay: [
      { area: "Corniche / Raml Station", note: "Central seafront, walkable to the cafés and the tram, with classic heritage hotels and balconies straight over the Mediterranean." },
      { area: "Roushdy / Saba Pasha", note: "Smarter residential seafront a little east of the centre, with modern hotels, private beaches and a quieter feel." },
      { area: "Montaza (east end)", note: "Beside the palace gardens and the city's nicest beaches — greener and calmer, a short drive from the historic core." },
      { area: "San Stefano", note: "Modern towers and a mall on the seafront for travellers who want contemporary comfort and sea views." },
    ],
    thingsToDo: [
      {
        title: "Catacombs of Kom el-Shoqafa",
        text: "Kom el-Shoqafa is a 2nd-century underground burial complex cut three levels deep into the rock, reached by a spiral staircase once used to lower the dead. It is famous for blending styles in a single tomb — Egyptian gods carved in Roman dress beside Greek detailing — and was found by accident in 1900 when a donkey fell through the ground. The lower level can flood, so how much you see depends on the water table that day.",
        image: img("alexandria", "catacombs.jpg"),
      },
      {
        title: "Pompey's Pillar",
        text: "Pompey's Pillar is a single red granite column about 27 metres tall, raised around 297 AD for the emperor Diocletian — the name is a medieval mistake and has nothing to do with Pompey. It marks the site of the Serapeum, the great temple that once held part of Alexandria's library, and two granite sphinxes sit nearby. The open site is quick to walk, and we pair it with the catacombs close by.",
        image: img("alexandria", "pompey.jpg"),
      },
      {
        title: "Qaitbay Citadel",
        text: "The Qaitbay Citadel is a 15th-century fort on the harbour's edge, built on the exact spot where the ancient Pharos lighthouse stood — some of the lighthouse's fallen stone is reused in its walls. You can climb through the towers onto the ramparts for wide views over the Mediterranean and back across the city. The seafront walk out is exposed and windy, so we time it for a calm part of the day.",
        image: img("alexandria", "qaitbay.jpg"),
      },
      {
        title: "Montaza Palace & gardens",
        text: "Montaza is a 1920s royal palace set in large gardens on a low rise above the sea at the eastern end of the city. The palace is not generally open inside, but the grounds are the draw — pine and palm, walking paths, a small beach and a long Mediterranean view. Locals come to picnic and escape the heat; we visit in the late afternoon, when the light softens over the cove.",
        image: img("alexandria", "montaza.jpg"),
      },
      {
        title: "Greco-Roman Museum",
        text: "The Greco-Roman Museum is the city's main home for the Greek and Roman past that gives Alexandria its name, holding tens of thousands of statues, mosaics, coins and sarcophagi from the city and the Delta. It reopened after a long restoration, so the galleries and lighting are in good shape. We allow an hour or two and pair it with Pompey's Pillar nearby.",
        image: img("alexandria", "greco-roman.jpg"),
      },
    ],
    bestTime:
      "Alexandria is at its best in late spring (April–June) and early autumn (September–October), when the Mediterranean is warm and the city is comfortable. Summer (July–August) is the busy beach season, when Egyptians flock to the coast and hotels fill. Winter is mild but can be wet and windy, with real Mediterranean storms — though the historic sights are fine to visit year-round.",
    faqs: [
      { q: "Is Alexandria worth visiting from Cairo?", a: "Yes, especially if you want a change from the desert and the pharaonic sites. Alexandria is about three hours from Cairo and offers a Mediterranean city with Greek and Roman history — the catacombs, Pompey's Pillar and the Qaitbay fort — plus sea air and fresh seafood. Most people visit on a long day-trip." },
      { q: "Can you see Alexandria in one day?", a: "Yes. A long day-trip from Cairo covers the catacombs of Kom el-Shoqafa, Pompey's Pillar, the Qaitbay Citadel and a seafront lunch. To add the Greco-Roman Museum and the Montaza gardens at a relaxed pace, stay overnight and give the city a full day." },
      { q: "What is Alexandria best known for?", a: "Alexandria was founded by Alexander the Great in 331 BC and was home to the ancient world's greatest library and the Pharos lighthouse, one of the Seven Wonders. Today it is known for its Greco-Roman sites, its long Mediterranean corniche, and the modern Library of Alexandria that revived its name." },
      { q: "What is the best time to visit Alexandria?", a: "Late spring (April–June) and early autumn (September–October), when the sea is warm and the city is comfortable. July and August are the busy Egyptian beach season; winter is mild but can bring real Mediterranean storms. The historic sites are worth visiting in any season." },
      { q: "How do you get from Cairo to Alexandria?", a: "By road it is about three hours via the desert highway, and frequent intercity trains take a similar time. We arrange a private car and guide for a day-trip, or train tickets with transfers. Alexandria also has Borg El Arab airport for occasional domestic and regional flights." },
    ],
    gallery: [
      img("alexandria", "qaitbay.jpg"),
      img("alexandria", "catacombs.jpg"),
      img("alexandria", "pompey.jpg"),
      img("alexandria", "montaza.jpg"),
      img("alexandria", "g-amphitheatre.jpg"),
    ],
    tourSlugs: ["alexandria-day-tour-from-cairo"],
  },

  /* =========================== SHARM EL SHEIKH =========================== */
  {
    slug: "sharm-el-sheikh",
    name: "Sharm El Sheikh",
    region: "South Sinai · Red Sea",
    tagline: "World-class reefs, warm winter sun and easy all-inclusive resorts on the Gulf of Aqaba.",
    heroImage: img("sharm-el-sheikh", "hero.jpg"),
    cardImage: img("sharm-el-sheikh", "card.jpg"),
    tourCount: 4,
    intro:
      "Sharm El Sheikh is Egypt's leading Red Sea resort, on the southern tip of the Sinai Peninsula. It is built for warm-water diving and snorkelling — Ras Muhammad National Park and the Straits of Tiran are among the best reefs on earth — alongside easy all-inclusive resorts. Most travellers stay four to seven nights to relax, dive and take a desert or Mount Sinai day-trip.",
    summary:
      "Sharm El Sheikh is Egypt's top Red Sea resort: world-class reefs at Ras Muhammad and Tiran, all-inclusive hotels and a Mount Sinai sunrise trip. Stay four to seven nights.",
    metaTitle: "Sharm El Sheikh Guide: Diving, Reefs & Resorts | Fair Egypt",
    metaDescription:
      "Plan Sharm El Sheikh: Ras Muhammad National Park, the Straits of Tiran, Naama Bay, the Old Market and a Mount Sinai sunrise trip — best reefs, real resorts and when to go.",
    quickFacts: [
      { label: "Best for", value: "Diving, snorkelling & sun" },
      { label: "Ideal stay", value: "4–7 nights" },
      { label: "Best months", value: "March–May, September–November" },
      { label: "Signature", value: "Ras Muhammad + Tiran reefs" },
      { label: "Airport", value: "Sharm El Sheikh International (SSH)" },
    ],
    overview: [
      {
        heading: "Why visit Sharm El Sheikh?",
        paras: [
          "Sharm El Sheikh is where Egypt swaps temples for the sea. The Red Sea here is warm and clear year-round, and the reefs of Ras Muhammad and the Straits of Tiran are among the richest and most accessible diving and snorkelling sites in the world — coral walls dropping into deep blue water just offshore.",
          "It is also the easiest beach holiday in Egypt: direct charter flights, big all-inclusive resorts and reliable winter sun when much of Europe is grey. We often add a few nights here to the end of a Nile and pyramids trip, so the history comes first and the beach is the reward.",
        ],
      },
      {
        heading: "How many nights do you need?",
        paras: [
          "Four to seven nights suits most people. That is enough for a couple of boat dives or snorkel trips to Ras Muhammad and Tiran, beach and pool days, and a day-trip — either into the desert or the overnight climb of Mount Sinai for sunrise.",
          "Divers and serious snorkellers often stay a week to fit in more sites and a rest day between dives. If you simply want winter sun and a house reef, even a short three or four-night add-on works.",
        ],
      },
      {
        heading: "How we plan a Sharm stay",
        paras: [
          "We match the resort to the trip — a house-reef hotel for divers, a central Naama Bay base for walkers and families, a quieter Nabq Bay resort for pure relaxation — and book the boat trips and dive centre around it.",
          "For the Mount Sinai sunrise climb we use a trusted operator and brief you honestly: it is a roughly 14-hour overnight round-trip with a real climb, rewarding but not for everyone.",
        ],
      },
    ],
    history: [
      "Sharm El Sheikh grew from a small fishing and naval village into Egypt's flagship Red Sea resort from the 1980s onward, as the reefs drew divers and the climate drew sun-seekers.",
      "Its marine life is protected by Ras Muhammad National Park, declared in 1983 at the meeting point of the Gulfs of Aqaba and Suez, which helped make the area a world diving destination.",
      "Inland, the mountains of South Sinai hold far older history — St Catherine's Monastery at the foot of Mount Sinai, one of the oldest working monasteries in the world, built where Moses is said to have seen the burning bush.",
    ],
    gettingThere: [
      "Sharm El Sheikh International Airport (SSH) takes direct charter and scheduled flights from across Europe, plus short domestic hops from Cairo (about 1 hour). Most resorts are 10–30 minutes from the airport.",
      "We arrange airport transfers with every booking, and pair Sharm with the rest of Egypt — a typical plan flies Cairo or Luxor to Sharm for a beach finish.",
      "Around the resort, taxis and hotel shuttles cover Naama Bay and the Old Market; boat trips to the reefs and 4x4 or coach day-trips to the desert and Mount Sinai are all booked locally, which we handle for you.",
    ],
    whereToStay: [
      { area: "Naama Bay", note: "The lively, walkable heart of Sharm, with a beachfront promenade of cafés, dive shops and nightlife — best for first-timers and families who want everything on the doorstep." },
      { area: "Hadaba / Um El Sid", note: "On the cliffs above some of the best house reefs, a short ride from Naama Bay — the choice for divers and snorkellers." },
      { area: "Nabq Bay", note: "Quieter, larger all-inclusive resorts facing the Straits of Tiran, good for a relaxed week with aqua parks and long private beaches." },
      { area: "Sharm El Maya / Old Market", note: "Near the original town and the Old Market, more local and better value for eating out, a short hop from the beaches." },
    ],
    thingsToDo: [
      {
        title: "Ras Muhammad National Park",
        text: "Ras Muhammad, at the southern tip of Sinai, protects some of the best reef in the Red Sea, where coral walls drop straight into deep blue water busy with hundreds of fish species. The Shark and Yolanda reefs offshore are world-famous, and you can visit by boat or from the shore about 40 minutes from town. It is a protected park, so we bring your passport for the checkpoint and aim for the October-to-April calm.",
        image: img("sharm-el-sheikh", "ras-muhammad.jpg"),
      },
      {
        title: "Straits of Tiran",
        text: "The Straits of Tiran, between Sinai and Tiran Island, hold four big reefs — Jackson, Woodhouse, Thomas and Gordon — named after the cartographers who charted them. A full-day boat trip snorkels or dives over clear, colourful coral, and Jackson Reef still has the wreck of a cargo ship visible above the surface. The current can be lively, which is part of why the marine life is so good; we bring sun cover for the long day on the water.",
        image: img("sharm-el-sheikh", "tiran.jpg"),
      },
      {
        title: "Naama Bay",
        text: "Naama Bay is the lively heart of Sharm, a curved beachfront lined with hotels, cafés, dive shops and a pedestrian promenade that fills up after dark. It is an easy place to spend a relaxed day — swim in the morning, walk the seafront in the evening, and eat somewhere different each night — all within walking distance. We base first-timers and families here so they can leave the car behind.",
        image: img("sharm-el-sheikh", "naama-bay.jpg"),
      },
      {
        title: "Mount Sinai & St Catherine's Monastery",
        text: "This is an overnight trip rather than a quick excursion: you leave Sharm late evening, drive into the mountains and climb Mount Sinai in the dark to reach the 2,285-metre summit for sunrise over the bare Sinai peaks. On the way down you visit St Catherine's Monastery, one of the oldest working monasteries in the world, built where Moses is said to have seen the burning bush. It is a roughly 14-hour round-trip, so we send you with warm layers, water and proper shoes.",
        image: img("sharm-el-sheikh", "mount-sinai.jpg"),
      },
      {
        title: "The Old Market (Sharm El Maya)",
        text: "The Old Market is the part of Sharm that feels like a working Egyptian town rather than a resort strip, with narrow lanes of spice stalls, lamps and small cafés around the large El Sahaba Mosque. It is the place to buy souvenirs and eat well for less than Naama Bay, and haggling is expected and friendly. It is liveliest after sunset, when the heat drops and the mosque is lit.",
        image: img("sharm-el-sheikh", "old-market.jpg"),
      },
    ],
    bestTime:
      "Sharm El Sheikh is a year-round resort, but the most comfortable months are March to May and September to November, with warm air around 28–32°C and sea temperatures ideal for diving. Winter (December–February) is mild and sunny by day, around 22°C, and popular for escaping the European cold, though evenings can be cool. High summer (June–August) is very hot, often above 38°C, and best for those who only want the water.",
    faqs: [
      { q: "Is Sharm El Sheikh good for snorkelling and diving?", a: "Yes — it is one of the world's top warm-water diving destinations. Ras Muhammad National Park and the Straits of Tiran offer coral walls and hundreds of fish species, and many resorts sit on their own house reef you can snorkel straight off the beach. We match divers to a house-reef hotel and book the boat trips and dive centre." },
      { q: "How many nights should I spend in Sharm El Sheikh?", a: "Four to seven nights suits most travellers — enough for boat trips to Ras Muhammad and Tiran, beach and pool days, and a desert or Mount Sinai excursion. Divers often stay a full week. A short three or four-night add-on works if you only want winter sun and a house reef." },
      { q: "What is the best time to visit Sharm El Sheikh?", a: "March to May and September to November are the most comfortable, with warm air around 28–32°C and ideal sea temperatures. Winter is mild and sunny by day (about 22°C) and popular for escaping the cold. High summer regularly tops 38°C and suits those who mainly want the water." },
      { q: "Can you climb Mount Sinai from Sharm El Sheikh?", a: "Yes. The Mount Sinai sunrise trip is an overnight excursion: you leave Sharm late evening, climb in the dark to the 2,285-metre summit for sunrise, and visit St Catherine's Monastery on the way down. It is a roughly 14-hour round-trip with a real climb, so we send you prepared with warm layers and proper shoes." },
      { q: "Is Sharm El Sheikh safe and easy for a beach holiday?", a: "Sharm is Egypt's most established beach resort, built for easy all-inclusive holidays with direct charter flights, big resorts and reliable sun. The resort areas are self-contained and well-policed. As anywhere, check your government's current travel advice for the Sinai before booking; we keep transfers and trips with trusted operators." },
    ],
    gallery: [
      img("sharm-el-sheikh", "ras-muhammad.jpg"),
      img("sharm-el-sheikh", "naama-bay.jpg"),
      img("sharm-el-sheikh", "tiran.jpg"),
      img("sharm-el-sheikh", "old-market.jpg"),
      img("sharm-el-sheikh", "g-lagoon.jpg"),
    ],
    tourSlugs: ["nile-cruise-coast-escape"],
  },

  /* ============================== NORTH COAST ============================== */
  {
    slug: "north-coast",
    name: "North Coast",
    region: "Mediterranean Coast",
    tagline: "Egypt's summer riviera — powder-white sand and turquoise Mediterranean water west of Alexandria.",
    heroImage: img("north-coast", "agiba.jpg"),
    cardImage: img("north-coast", "new-alamein.jpg"),
    tourCount: 2,
    intro:
      "Egypt's North Coast, or Sahel, is the Mediterranean shore stretching west of Alexandria toward Marsa Matruh, known for powder-white sand and unusually clear turquoise water. It is a strongly seasonal summer destination — busiest from June to September — anchored by the war history of El Alamein and the beaches of Agiba and Sidi Abdel Rahman.",
    summary:
      "Egypt's North Coast is a summer Mediterranean riviera west of Alexandria — white sand and turquoise water at Agiba and Sidi Abdel Rahman, plus the El Alamein war history. Busiest June–September.",
    metaTitle: "North Coast Egypt Guide: Sahel Beaches & Alamein | Fair Egypt",
    metaDescription:
      "Plan Egypt's North Coast (Sahel): Agiba and Cleopatra beaches, Sidi Abdel Rahman, New Alamein and the El Alamein war cemeteries — best beaches, resorts and when to go.",
    quickFacts: [
      { label: "Best for", value: "Summer beaches" },
      { label: "Ideal stay", value: "3–5 nights (summer)" },
      { label: "Best months", value: "June–September" },
      { label: "Signature", value: "Turquoise Mediterranean beaches" },
      { label: "Getting there", value: "Road from Alexandria or Borg El Arab airport" },
    ],
    overview: [
      {
        heading: "Why visit the North Coast?",
        paras: [
          "The North Coast is where Egyptians go to the beach. The Mediterranean here runs from pale green to deep blue over white sand, and the water is calmer and clearer than most of the country's coast. In summer the strip from Alexandria to Marsa Matruh fills with resort towns, beach clubs and the new seafront city of Alamein.",
          "It is a different Egypt from the temples and the desert — a holiday coast rather than a sightseeing one. The standout cultural stop is El Alamein, where the decisive 1942 desert battle of the Second World War is marked by quiet war cemeteries and a museum above the sea.",
        ],
      },
      {
        heading: "When should you visit?",
        paras: [
          "The North Coast is firmly a summer destination. It comes alive from June to September, when the weather is hot, the sea is warm and the resorts, restaurants and nightlife are fully open. This is also when Egyptians holiday here, so July and August are busy and prices peak.",
          "Outside summer the coast is beautiful but largely shut — many beach clubs, restaurants and seasonal hotels close from October to May. We are honest with travellers planning a winter trip: come for the history at El Alamein and Alexandria rather than the beach.",
        ],
      },
      {
        heading: "How we plan a North Coast stay",
        paras: [
          "We pair the coast with Alexandria, since the two share a road and a season, and choose a resort to match — a Marsa Matruh base for the wild beaches of Agiba and Cleopatra, or Sidi Abdel Rahman and Alamein for the smartest sand and the newest seafront.",
          "Because beach access often depends on which resort or gated community you stay in, we sort that out before you arrive, rather than leaving you to find a public stretch on the day.",
        ],
      },
    ],
    history: [
      "The North Coast's most significant history is military. The two Battles of El Alamein in 1942 halted the Axis advance into Egypt and turned the tide of the North African campaign, in what Churchill marked as a turning point of the war.",
      "Today El Alamein holds the Commonwealth War Cemetery, with more than 7,000 graves in rows above the sea, separate German and Italian memorials, and a military museum of tanks, guns and personal effects.",
      "In recent decades the coast has been transformed by tourism and development, from the resort communities of Sidi Abdel Rahman and Marina to the purpose-built New Alamein City, opened in 2018 with towers, an opera house and a long seafront promenade.",
    ],
    gettingThere: [
      "The North Coast runs west from Alexandria, so most travellers reach it by road from Alexandria or Cairo along the coastal and desert highways. Marsa Matruh, at the western end, is around 3 hours from Alexandria.",
      "Borg El Arab Airport (HBE) near Alexandria, and Marsa Matruh's seasonal airport, give faster access in summer. We arrange flights, private transfers and the drive to your resort.",
      "Along the coast a private car is the practical way to move between beaches and resort towns, which can be spread far apart; many of the best beaches sit inside resort compounds reached from the highway.",
    ],
    whereToStay: [
      { area: "Sidi Abdel Rahman", note: "The postcard stretch of the coast — powder-white sand and turquoise lagoons, with smart resorts and the Marassi community. The choice for the best beaches." },
      { area: "Marsa Matruh", note: "The lively western town, base for the dramatic coves of Agiba and Cleopatra beaches and the most local, affordable stays on the coast." },
      { area: "New Alamein / Marina", note: "Modern seafront living — towers, a long promenade, beach clubs and resorts with everything on site, busiest in peak summer." },
      { area: "Ras El Hekma", note: "Long, clear, less-developed coastline roughly halfway along the coast, beautiful for quiet beach days though increasingly built up." },
    ],
    thingsToDo: [
      {
        title: "Agiba Beach (Marsa Matruh)",
        text: "Agiba means 'miracle', and the name fits this small cove about 24 km west of Marsa Matruh, where clear turquoise water sits trapped between limestone walls and natural caves. You reach the sand by a footpath down from the clifftop, and the view from the clifftop café before the descent frames the whole cove. There are few facilities and no lifeguards, so we bring water and shade and swim with care.",
        image: img("north-coast", "agiba.jpg"),
      },
      {
        title: "El Alamein War Cemeteries & Museum",
        text: "El Alamein, about 130 km west of Alexandria, marks the decisive 1942 desert battle of the Second World War. The Commonwealth War Cemetery holds more than 7,000 graves in quiet rows above the sea, with separate German and Italian memorials and a military museum of tanks, guns and personal effects. It is a sober, moving stop; we go in the morning before the heat, as much of it is outdoors.",
        image: img("north-coast", "el-alamein.jpg"),
      },
      {
        title: "Cleopatra Beach & Cleopatra's Bath",
        text: "A short drive from Marsa Matruh, Cleopatra Beach is known for dramatic rock formations standing out of the shallows, with a natural rock pool — Cleopatra's Bath — that fills with seawater and carries the legend that Cleopatra once bathed here. It is more about scenery and photos than a long swim, as the rocks and surge make open water tricky. We keep to the calmer hours and watch our footing on the slippery rock.",
        image: img("north-coast", "cleopatra-beach.jpg"),
      },
      {
        title: "New Alamein City",
        text: "New Alamein is Egypt's purpose-built coastal city, opened in 2018, with landmark towers, an opera house and museums behind the beach. For visitors the draw is the long seafront promenade, around 14 km, lined with restaurants, cafés and beach clubs, plus the same clear water as the wilder beaches but with full services. It is busiest at sunset in peak summer and much quieter off-season.",
        image: img("north-coast", "new-alamein.jpg"),
      },
      {
        title: "Sidi Abdel Rahman beaches",
        text: "Sidi Abdel Rahman is the postcard stretch of the North Coast: powder-white sand and water running from pale green to deep blue, anchored by resort communities such as Marassi. Its shallow turquoise lagoons are calm and clear enough for easy swimming and wading. Many beaches here sit inside private resorts or gated communities, so we sort beach access through your hotel before you arrive.",
        image: img("north-coast", "agiba.jpg"),
      },
    ],
    bestTime:
      "The North Coast is a summer destination, at its best from June to September, when the weather is hot, the sea is warm and the resorts and beach clubs are fully open. July and August are the busy, pricey Egyptian holiday peak. From October to May much of the coast closes down, so a winter visit is for the history at El Alamein and the city of Alexandria rather than the beach.",
    faqs: [
      { q: "When is the best time to visit Egypt's North Coast?", a: "June to September. The North Coast is firmly a summer destination — that is when the weather is hot, the sea is warm and the resorts, restaurants and beach clubs are fully open. July and August are the busy, expensive Egyptian holiday peak. Outside summer much of the coast closes down." },
      { q: "What is the North Coast (Sahel) known for?", a: "The North Coast is Egypt's summer riviera, famous for powder-white sand and unusually clear turquoise Mediterranean water. Highlights include the beaches of Agiba and Sidi Abdel Rahman, the new seafront city of Alamein, and the El Alamein war cemeteries from the decisive 1942 desert battle." },
      { q: "Is the North Coast worth visiting in winter?", a: "Not for the beach. From October to May much of the coast — beach clubs, seasonal restaurants and hotels — closes down. A winter visit makes sense only for the history at the El Alamein war cemeteries and museum, which pairs naturally with the city of Alexandria nearby." },
      { q: "How do you get to the North Coast?", a: "Most travellers drive from Alexandria or Cairo along the coastal and desert highways; Marsa Matruh at the western end is about three hours from Alexandria. Borg El Arab airport near Alexandria and Marsa Matruh's seasonal airport give faster summer access. We arrange flights, transfers and the drive to your resort." },
      { q: "Can you visit El Alamein from Alexandria?", a: "Yes. El Alamein is about 130 km west of Alexandria, an easy day-trip or a stop on the way along the coast. The Commonwealth War Cemetery and the military museum can be seen in a morning; we go early, as much of the site is open-air and gets hot by midday." },
    ],
    gallery: [
      img("north-coast", "agiba.jpg"),
      img("north-coast", "new-alamein.jpg"),
      img("north-coast", "cleopatra-beach.jpg"),
      img("north-coast", "el-alamein.jpg"),
    ],
    tourSlugs: [],
  },

  /* ================================= SIWA ================================= */
  {
    slug: "siwa",
    name: "Siwa Oasis",
    region: "Western Desert",
    tagline: "A remote Berber oasis of salt lakes, mudbrick ruins and desert springs near the Libyan border.",
    heroImage: img("siwa", "salt-lakes.jpg"),
    cardImage: img("siwa", "shali.jpg"),
    tourCount: 2,
    intro:
      "Siwa is a remote oasis deep in Egypt's Western Desert near the Libyan border, with its own Berber language and culture. It is a long journey — roughly 4 hours from Marsa Matruh or 8 to 10 from Cairo — and that distance is part of its appeal. Travellers come for a few unhurried days of salt lakes, mudbrick ruins, palm groves and the edge of the Great Sand Sea.",
    summary:
      "Siwa is a remote Berber oasis in Egypt's Western Desert: salt lakes you float in, the Shali mudbrick ruins, the Oracle temple and the Great Sand Sea. Plan two to three slow days.",
    metaTitle: "Siwa Oasis Travel Guide: Salt Lakes & Shali | Fair Egypt",
    metaDescription:
      "Plan Siwa Oasis: the Shali fortress, the Temple of the Oracle, Cleopatra's Spring, the floating salt lakes and a Great Sand Sea safari — how to get there, lodges and when to go.",
    quickFacts: [
      { label: "Best for", value: "Remote desert & culture" },
      { label: "Ideal stay", value: "2–3 days" },
      { label: "Best months", value: "October–April" },
      { label: "Signature", value: "Salt lakes + the Great Sand Sea" },
      { label: "Getting there", value: "~4 hrs from Marsa Matruh by road" },
    ],
    overview: [
      {
        heading: "Why visit Siwa?",
        paras: [
          "Siwa feels like its own country. Hundreds of kilometres of desert separate it from the rest of Egypt, and behind that distance it has kept its own Berber language, customs and architecture — mudbrick and salt-clay houses, palm and olive groves, and freshwater springs scattered through the sand. There is nowhere else in Egypt quite like it.",
          "It is a destination for slowing down, not for ticking off monuments. Travellers come to float in turquoise salt lakes, watch the sun set over the Shali ruins, soak in a desert hot spring, and feel a long way from anywhere.",
        ],
      },
      {
        heading: "How do you get to Siwa, and for how long?",
        paras: [
          "Siwa is remote: about 4 hours by road from Marsa Matruh on the coast, or 8 to 10 hours from Cairo, usually broken with an overnight. There is no airport, so the journey is part of the commitment — and the reason the oasis stays unspoiled.",
          "Two to three days is the right length once you arrive. That covers the springs, the salt lakes, the Shali fortress and the Oracle temple, with a half-day safari into the Great Sand Sea — without trying to rush a place whose whole point is its pace.",
        ],
      },
      {
        heading: "How we plan a Siwa trip",
        paras: [
          "We treat Siwa as a proper expedition, not a quick stop. We arrange the long transfer (often via Marsa Matruh), a stay in a traditional kershef lodge, and the licensed local driver you need to enter the military-controlled Great Sand Sea.",
          "Days are shaped around the light and the heat: springs and lakes in the cool of the morning, the Shali ruins and the dunes for sunset. We are upfront that this is a long-haul desert trip best suited to travellers who want somewhere genuinely off the usual route.",
        ],
      },
    ],
    history: [
      "Siwa's fame in the ancient world came from its oracle. In 331 BC Alexander the Great crossed the desert to the Temple of the Oracle of Amun at Aghurmi, where the priests are said to have confirmed him as the son of Amun.",
      "For centuries Siwans lived in the fortified mudbrick town of Shali, built from salt-rich kershef blocks, until heavy rains in 1926 dissolved much of it and the people moved to new houses around its base.",
      "Cut off by desert, Siwa kept a distinct Amazigh (Berber) language and culture that survive today, along with crafts, music and customs you will not find elsewhere in Egypt.",
    ],
    gettingThere: [
      "Siwa has no airport. Most travellers reach it by road from Marsa Matruh on the Mediterranean coast, about 4 hours, or direct from Cairo, a longer 8 to 10-hour drive usually split with an overnight.",
      "We arrange the long transfer in a comfortable private vehicle, often pairing Siwa with a stop on the North Coast or in Alexandria to break the journey.",
      "Within the oasis, distances between the springs, lakes and ruins are short and easily covered by car or bicycle. The Great Sand Sea beyond the town is a military-controlled zone, so a desert safari there must be booked with a licensed local driver, which we organise.",
    ],
    whereToStay: [
      { area: "Siwa town", note: "Central traditional lodges in and around the palm groves below the Shali fortress — walkable to the springs, restaurants and market, at a range of prices." },
      { area: "Kershef eco-lodges", note: "Mudbrick and salt-rock lodges built in the local style, some off-grid and candle-lit, for travellers who want the full Siwan atmosphere." },
      { area: "Near the salt lakes", note: "Lodges on the edge of the oasis close to the salt pools and the desert, quieter and set up for sunrise floats and dune trips." },
      { area: "Budget guesthouses", note: "Simple, friendly central guesthouses with palm gardens for travellers who want an affordable base in the heart of town." },
    ],
    thingsToDo: [
      {
        title: "The salt lakes",
        text: "Siwa's salt lakes are bright turquoise pools cut into white crystalline banks a short drive from town, so salty that you float without any effort, the way you would in the Dead Sea. The contrast of blue water against white salt is the main reason people make the trip, and the minerals leave your skin feeling clean. Salt stings any cut, so we cover small scrapes and rinse off with fresh water afterward.",
        image: img("siwa", "salt-lakes.jpg"),
      },
      {
        title: "Shali Fortress",
        text: "Shali is the old town of Siwa, a tangle of mudbrick and salt-clay buildings that Siwans lived in for centuries until heavy rains in 1926 melted much of it away. You can walk up through the ruins to the top, where the view opens over the palm groves and the desert beyond. It is best in the late afternoon, when the low sun turns the walls gold; the surface is uneven with no railings, so we wear proper shoes.",
        image: img("siwa", "shali.jpg"),
      },
      {
        title: "Temple of the Oracle of Amun",
        text: "The Temple of the Oracle stands on a rocky outcrop in the old village of Aghurmi, a few kilometres from town — the temple where in 331 BC the priests are said to have confirmed Alexander the Great as the son of Amun. There is little signage, so it rewards reading up beforehand or coming with a guide, and the climb gives a fine view across the palms toward the salt lakes. We go early, before the midday heat.",
        image: img("siwa", "oracle.jpg"),
      },
      {
        title: "Great Sand Sea & Bir Wahed",
        text: "West of town the palms give way to the Great Sand Sea, a vast field of dunes crossed by 4x4 on a half-day safari that usually pairs sandboarding with a stop at Bir Wahed, a hot spring on the desert edge warm enough to soak in after dark beside a cold freshwater pool. Drivers time the loop for sunset from the top of a dune. This is a military-controlled zone, so it can only be entered with a licensed local driver, which we book.",
        image: img("siwa", "sand-sea.jpg"),
      },
      {
        title: "Cleopatra's Spring",
        text: "Cleopatra's Spring is a round, stone-rimmed natural pool fed by a constant flow of clear spring water, set among the palm groves on the road to the Oracle temple. The name is tradition rather than fact, but it is the most popular bathing spot in the oasis, with a small café beside it for tea afterward. It gets busy in the afternoons, so we come early for a quieter swim; modest swimwear is the respectful choice.",
        image: img("siwa", "cleopatra-spring.jpg"),
      },
    ],
    bestTime:
      "The best months for Siwa are October to April, when desert days are pleasant and the nights are cool — ideal for the springs, the salt lakes and a Great Sand Sea safari. Summer (May–September) is extremely hot by day and best avoided for the dunes. October, November, March and April are the most comfortable, balancing warm afternoons with cool, clear desert nights.",
    faqs: [
      { q: "How do you get to Siwa Oasis?", a: "Siwa has no airport. The usual route is by road from Marsa Matruh on the Mediterranean coast, about 4 hours, or direct from Cairo, an 8 to 10-hour drive usually split with an overnight. We arrange the transfer in a comfortable private vehicle and often pair it with a North Coast or Alexandria stop." },
      { q: "How many days do you need in Siwa?", a: "Two to three days once you arrive. That covers the salt lakes, Cleopatra's Spring, the Shali fortress and the Oracle temple, plus a half-day safari into the Great Sand Sea. Given the long journey to reach Siwa, it is not worth doing as a rushed overnight." },
      { q: "What is the best time to visit Siwa?", a: "October to April, when desert days are pleasant and nights are cool — ideal for the springs, salt lakes and dune trips. Summer (May–September) is extremely hot by day and best avoided for the Great Sand Sea. October, November, March and April are the most comfortable months." },
      { q: "Can you swim in Siwa's salt lakes?", a: "Yes. Siwa's salt lakes are so salty that you float effortlessly, like in the Dead Sea, and they are one of the oasis's highlights. Rinse off with fresh water afterward and avoid getting the water in your eyes or any cut, as the salt stings. The town's freshwater springs are better for an ordinary swim." },
      { q: "Do you need a guide or permit for the Great Sand Sea?", a: "Yes. The Great Sand Sea west of Siwa is a military-controlled zone, so you can only enter it on a 4x4 safari with a licensed local driver — you cannot drive in yourself. We book the safari through trusted operators, including the sunset dune run and the soak at the Bir Wahed hot spring." },
    ],
    gallery: [
      img("siwa", "salt-lakes.jpg"),
      img("siwa", "shali.jpg"),
      img("siwa", "oracle.jpg"),
      img("siwa", "sand-sea.jpg"),
      img("siwa", "cleopatra-spring.jpg"),
    ],
    tourSlugs: [],
  },
];
