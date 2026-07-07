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
  {
    slug: "currency-in-egypt",
    title: "Currency in Egypt: A Simple Money Guide",
    excerpt:
      "Cash or card, ATMs, exchanging money, and why you should always keep small notes handy.",
    image: U("1601050690597-df0568f70950"),
    category: "Money",
    readTime: "6 min read",
    updated: "July 2026",
    body: [
      {
        paras: [
          "The local currency is the Egyptian Pound, written as EGP or £E and called the geneih on the street. One pound is made up of 100 piastres, though piastres are mostly a rounding footnote these days. Money in Egypt is genuinely easy once you know two things: carry cash, and keep it in small notes.",
        ],
      },
      {
        heading: "The Egyptian Pound at a glance",
        list: [
          "Banknotes come in 5, 10, 20, 50, 100 and 200 pounds — the 10 and 20 are now smart polymer notes",
          "Coins exist (1 pound, 50 piastres) but you'll rarely need them",
          "Prices at markets and small shops are almost always in pounds, so it pays to recognise the notes quickly",
        ],
      },
      {
        heading: "Cash still rules — cards are the backup",
        paras: [
          "Hotels, larger restaurants, malls and established shops take Visa and Mastercard without a problem. But taxis, local eateries, bazaars, tips and small entry fees are cash-only. Our rule of thumb: pay big bills by card where you can, and keep a comfortable cushion of cash for everything else.",
        ],
      },
      {
        heading: "ATMs and exchanging money",
        list: [
          "ATMs are everywhere in cities and at the airports — stick to bank machines like CIB, NBE, Banque Misr or QNB",
          "Tell your bank you're travelling so your card isn't frozen on the first withdrawal",
          "Exchange cash at banks, official exchange offices or your hotel — never with someone who approaches you on the street",
          "Keep your exchange receipts; they make it easy to change any leftover pounds back before you fly home",
        ],
      },
      {
        heading: "Should you bring US dollars?",
        paras: [
          "It's smart to bring a small amount of US dollars or euros as a backup — crisp, newer notes exchange best. A few tourist services quote in dollars, but for day-to-day spending the pound is simpler and usually better value. Don't change huge sums at once; you can always top up, and the rate can move.",
        ],
      },
      {
        heading: "Keep small notes for baksheesh",
        paras: [
          "The single most useful money habit in Egypt is hoarding small notes — fives, tens and twenties. Tipping is part of daily life here, and breaking a 200 for a 10-pound tip is a daily frustration you can easily avoid. When you exchange or withdraw, ask for smaller denominations.",
        ],
      },
      {
        heading: "How we keep it simple",
        paras: [
          "Every quote we send is itemised in a currency you understand, so you always know what you've paid for up front. On the ground, your guide helps you find fair ATMs, sanity-checks your change at the bazaar, and makes sure you're never caught short for a tip.",
        ],
      },
    ],
  },
  {
    slug: "transportation-in-egypt",
    title: "Transportation in Egypt: How to Get Around",
    excerpt:
      "Flights, trains, cruises, ride-hailing and the metro — the honest way to move around the country.",
    image: U("1568322445389-f64ac2515020"),
    category: "Practical",
    readTime: "7 min read",
    updated: "July 2026",
    body: [
      {
        paras: [
          "Egypt is a big country, and how you move between and within its cities shapes your whole trip. The good news: you have plenty of options, from a one-hour flight to a slow felucca drifting down the Nile. Here's how the pieces fit together.",
        ],
      },
      {
        heading: "Getting between cities",
        list: [
          "Flights — EgyptAir, Nile Air and Air Cairo link Cairo with Luxor, Aswan, Hurghada and Sharm in about an hour; the fastest way to cover long distances",
          "Trains — the Cairo–Alexandria line is quick and easy, and the overnight sleeper to Luxor and Aswan is a comfortable, scenic classic",
          "Nile cruise — the loveliest way to travel between Luxor and Aswan, with temples right on the riverbank",
          "Intercity coaches — Go Bus and Blue Bus run comfortable air-conditioned services to the Red Sea and Alexandria",
        ],
      },
      {
        heading: "Getting around town",
        list: [
          "Ride-hailing — Uber and Careem work brilliantly in Cairo, Alexandria and Hurghada: fixed prices, no haggling, and a map so you know you're going the right way",
          "Taxis — fine in a pinch, but agree the fare before you get in, as meters are often mysteriously out of order",
          "Cairo Metro — cheap, fast and a great way to skip the traffic, with women-only carriages if you prefer",
          "Feluccas and motorboats — the everyday way to cross the Nile in Aswan and Luxor",
        ],
      },
      {
        heading: "Should you drive yourself?",
        paras: [
          "Honestly, we'd steer you away from it. Traffic in Cairo is fast, loud and improvisational, road signs are inconsistent, and parking is a headache. A private driver costs less than you'd expect and turns getting around from a stress into a rest.",
        ],
      },
      {
        heading: "How we handle it",
        paras: [
          "For most trips we mix it up: flights for the long hops to save a precious day, a private driver-guide for sightseeing so you're never negotiating a fare, and a Nile cruise for the stretch between Luxor and Aswan. You just enjoy the view — we handle the logistics, tickets and timings.",
        ],
      },
    ],
  },
  {
    slug: "culinary-journey-in-egypt",
    title: "A Culinary Journey Through Egypt",
    excerpt:
      "Koshari, ful, molokhia and more — what to eat, where to find it, and how to eat safely.",
    image: U("1572252009286-268acec5ca0a"),
    category: "Culture",
    readTime: "7 min read",
    updated: "July 2026",
    body: [
      {
        paras: [
          "Egyptian food is warm, hearty and wonderfully affordable — a cuisine built on beans, bread, fresh vegetables and centuries of Mediterranean and Middle Eastern influence. It's also one of the friendliest kitchens in the world for vegetarians. Come hungry.",
        ],
      },
      {
        heading: "Dishes you have to try",
        list: [
          "Koshari — the beloved national dish of rice, lentils, pasta and chickpeas topped with spiced tomato sauce and crispy fried onions",
          "Ful medames — slow-cooked fava beans, the classic Egyptian breakfast, scooped up with warm bread",
          "Ta'ameya — Egypt's own falafel, made from fava beans rather than chickpeas, greener inside and utterly moreish",
          "Molokhia — a garlicky green jute-leaf stew, usually served over rice with chicken or rabbit",
          "Mahshi — vegetables and vine leaves stuffed with herby, spiced rice",
          "Hawawshi and kofta — spiced minced meat baked into bread or grilled on skewers",
        ],
      },
      {
        heading: "Street food and quick bites",
        list: [
          "Koshari from a busy street kitchen — cheap, filling and fresh",
          "Ta'ameya or ful sandwiches wrapped in warm baladi bread",
          "Feteer — a flaky layered pastry, sweet or savoury",
          "Roasted sweet potato and grilled corn from the winter carts",
        ],
      },
      {
        heading: "Sweets and drinks",
        list: [
          "Om Ali — a comforting warm bread-and-milk pudding with nuts and coconut",
          "Basbousa and konafa — syrup-soaked semolina and shredded-pastry sweets",
          "Shai (tea) and thick Turkish coffee, the fuel of every ahwa (coffeehouse)",
          "Karkade — hibiscus tea served hot or iced, plus fresh sugarcane, mango and guava juices",
        ],
      },
      {
        heading: "Eating safely",
        paras: [
          "Egyptian street food is delicious, and a little common sense keeps it that way. Drink bottled or filtered water, go easy on raw salads and ice for your first day or two, peel your fruit, and favour busy places where the food turns over quickly. A packed koshari joint is usually a very good sign.",
        ],
      },
      {
        heading: "Where we take you",
        paras: [
          "We love pointing travellers to the honest local spots — the koshari counter locals queue at, the ahwa where the mint tea is perfect — rather than the tourist traps with laminated menus. Tell your guide what you're curious about and they'll get you a genuine seat at the table.",
        ],
      },
    ],
  },
  {
    slug: "airports-in-egypt",
    title: "Airports in Egypt: What to Expect on Arrival",
    excerpt:
      "Cairo's hub, the resort and Nile airports, and how arrivals, visas and SIM cards actually work.",
    image: U("1578321272176-b7bbc0679853"),
    category: "Practical",
    readTime: "6 min read",
    updated: "July 2026",
    body: [
      {
        paras: [
          "Egypt is well connected, with a big international hub in Cairo and a scatter of airports serving the Nile Valley and the Red Sea coast. Knowing what to expect at arrivals — visa, SIM card, money, transfer — makes those first jet-lagged hours far smoother.",
        ],
      },
      {
        heading: "Cairo International (CAI) — the main gateway",
        paras: [
          "Cairo International is the country's principal airport, with several terminals; EgyptAir and its Star Alliance partners mostly use Terminals 2 and 3. It sits a fair drive from downtown and Giza, and Cairo traffic is unpredictable, so always leave a generous buffer. Ride-hailing apps work from the airport, but a pre-arranged transfer is the calmest option after a long flight.",
        ],
      },
      {
        heading: "The other airports you might use",
        list: [
          "Luxor (LXR) and Aswan (ASW) — your gateways to the temples and the Nile",
          "Hurghada (HRG) and Marsa Alam (RMF) — for the Red Sea resorts and diving",
          "Sharm El Sheikh (SSH) — for South Sinai and Ras Mohammed",
          "Borg El Arab (HBE) near Alexandria, and the seasonal Abu Simbel (ABS) airport",
        ],
      },
      {
        heading: "At arrivals: visa, SIM and money",
        list: [
          "Visa — most visitors need one; an e-Visa arranged before you fly is the smoothest route, or you can buy a visa sticker from a bank kiosk before immigration",
          "SIM cards — Vodafone, Orange, Etisalat and WE have desks in arrivals; a cheap tourist data SIM is well worth it",
          "Money — there are ATMs and exchange counters in the arrivals hall, so you can pick up pounds before you leave the terminal",
        ],
      },
      {
        heading: "Practical timing tips",
        list: [
          "Arrive about three hours ahead for international departures, two for domestic",
          "Expect a security scan right at the terminal entrance on the way out",
          "Keep your passport and visa handy, and have small notes ready as porters expect a tip",
        ],
      },
      {
        heading: "How we meet you",
        paras: [
          "On our trips you don't face any of this alone. We're waiting past the arrivals gate with a name sign, we help sort the visa formalities, and we drive you straight to your hotel — no taxi haggling, no guesswork, at any hour your flight lands.",
        ],
      },
    ],
  },
  {
    slug: "language-in-egypt",
    title: "Language in Egypt: Will You Get By?",
    excerpt:
      "How far English will take you, plus a handful of Arabic phrases that open every door.",
    image: U("1539768942893-daf53e448371"),
    category: "Culture",
    readTime: "5 min read",
    updated: "July 2026",
    body: [
      {
        paras: [
          "The official language is Arabic, and the Egyptian dialect — Masri — is famous across the Arab world thanks to a century of Egyptian films and music. But you don't need to speak a word to travel here comfortably, though a few phrases will earn you warm smiles everywhere you go.",
        ],
      },
      {
        heading: "Will English get you by?",
        paras: [
          "Yes, comfortably. English is widely spoken in hotels, tourist sites, restaurants and among younger Egyptians, and you'll hear French, German, Italian and Russian around the resorts. Signs at major monuments are in English too, so you'll rarely feel lost.",
        ],
      },
      {
        heading: "A handful of Arabic that goes a long way",
        list: [
          "Salam alaikum — hello (peace be upon you); reply wa alaikum salam",
          "Shukran — thank you; la shukran — no thank you",
          "Aiwa / la'a — yes / no",
          "Min fadlak (to a man) / min fadlik (to a woman) — please",
          "Kam? — how much? (your best friend at the bazaar)",
          "Yalla — let's go; khalas — enough / that's done; ma'a salama — goodbye",
        ],
      },
      {
        heading: "A few cultural cues",
        list: [
          "Use your right hand for eating, giving and receiving",
          "A friendly greeting before you ask for anything goes a long way",
          "Insha'Allah — 'God willing' — peppers everyday speech; it's optimism, not evasion",
        ],
      },
      {
        heading: "Your guide is your bridge",
        paras: [
          "Trying even a couple of Arabic words genuinely delights people here — it turns a transaction into a conversation. And wherever the language does get tricky, your guide bridges it instantly, from reading a hand-written menu to negotiating a fair price with a smile.",
        ],
      },
    ],
  },
  {
    slug: "tipping-in-egypt",
    title: "Tipping in Egypt: The Baksheesh Guide",
    excerpt:
      "Who to tip and how much — a clear, no-pressure guide to baksheesh so you're never guessing.",
    image: U("1503177119275-0aa32b3a9368"),
    category: "Money",
    readTime: "6 min read",
    updated: "July 2026",
    body: [
      {
        paras: [
          "Tipping — baksheesh — is woven into daily life in Egypt. It's not begging; it's a small, customary thank-you for a service, and it's how many people in tourism top up modest wages. Once you understand the rhythm of it, it stops feeling awkward and becomes second nature.",
        ],
      },
      {
        heading: "Who to tip, and how much",
        list: [
          "Restaurants — around 10 percent; even where a service charge is added, a little extra cash reaches the staff directly",
          "Hotel housekeeping — roughly 20–40 pounds a day; a porter, 20–30 pounds a bag",
          "Your guide — about 10–20 US dollars a day per couple, as a thank-you for a great day",
          "Your driver — around 5–10 dollars a day",
          "Cruise crew — usually a pooled tip, roughly 10–15 dollars a day, shared at the end",
          "Small helpers — bathroom attendants, a felucca captain, a camel handler — a few small notes each",
        ],
      },
      {
        heading: "Keep a stash of small notes",
        paras: [
          "The trick to painless tipping is always having fives, tens and twenties in your pocket. Breaking a big note for a small tip is the daily annoyance every traveller runs into — so ask for small denominations when you exchange or withdraw. Pounds are ideal, though small dollar or euro notes are fine for guides.",
        ],
      },
      {
        heading: "When you don't have to tip",
        paras: [
          "You're never obliged to tip for help you didn't ask for. If someone appoints themselves your guide at a site or insists on 'helping', a polite, smiling la shukran — 'no thank you' — is perfectly acceptable. Tipping is appreciation, not a toll.",
        ],
      },
      {
        heading: "Our honest take",
        paras: [
          "We brief every traveller on fair amounts before the trip, so you're never guessing or quietly overpaying. Tips for your guide and driver are always a genuine thank-you for good work — never an obligation, and never hidden inside our price. You'll always know exactly what's included.",
        ],
      },
    ],
  },
];

export const getTip = (slug: string) => tips.find((t) => t.slug === slug);
