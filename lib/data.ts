// Central content for the homepage. Swap these for a CMS/API later.

export const site = {
  name: "Fair Egypt Tours",
  tagline: "Fair Prices · Carefully Planned",
  phone: "+20 100 000 0000",
  phoneHref: "tel:+201000000000",
  email: "hello@fairegypttours.com",
  whatsapp: "https://wa.me/",
  url: "https://www.fairegypttours.com",
};

export type NavLink = { href: string; label: string; children?: { href: string; label: string }[] };

export const navLinks: NavLink[] = [
  {
    href: "/tours",
    label: "Tours",
    children: [
      { href: "/tours?type=day-tours", label: "Day Tours" },
      { href: "/tours?type=packages", label: "Travel Packages" },
    ],
  },
  { href: "/destinations", label: "Destinations" },
  { href: "/travel-tips", label: "Travel Tips" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
];

export type Tour = {
  place: string;
  rating: string;
  duration: string;
  title: string;
  price: string;
  img: string;
};

export const tours: Tour[] = [
  {
    place: "Giza",
    rating: "4.9",
    duration: "Full day · Private",
    title: "Pyramids, Sphinx & Museum",
    price: "$45",
    img: "https://images.unsplash.com/photo-1572252009286-268acec5ca0a?auto=format&fit=crop&w=900&q=80",
  },
  {
    place: "Luxor",
    rating: "4.8",
    duration: "Full day · Private",
    title: "Valley of the Kings & Karnak",
    price: "$60",
    img: "https://images.unsplash.com/photo-1568322445389-f64ac2515020?auto=format&fit=crop&w=900&q=80",
  },
  {
    place: "Aswan",
    rating: "5.0",
    duration: "Full day · Sunrise",
    title: "Abu Simbel & Nile Sail",
    price: "$70",
    img: "https://images.unsplash.com/photo-1539768942893-daf53e448371?auto=format&fit=crop&w=900&q=80",
  },
  {
    place: "Red Sea",
    rating: "5.0",
    duration: "3–5 days · Half board",
    title: "Nile Cruise & Coast Escape",
    price: "$220",
    img: "https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?auto=format&fit=crop&w=900&q=80",
  },
];

export type Destination = {
  num: string;
  count: string;
  name: string;
  sub: string;
  img: string;
};

export const destinations: Destination[] = [
  {
    num: "01",
    count: "14 tours",
    name: "Cairo & Giza",
    sub: "Pyramids · Museum · Old Cairo",
    img: "https://images.unsplash.com/photo-1572252009286-268acec5ca0a?auto=format&fit=crop&w=800&q=80",
  },
  {
    num: "02",
    count: "9 tours",
    name: "Luxor",
    sub: "Valley of the Kings · Karnak",
    img: "https://images.unsplash.com/photo-1568322445389-f64ac2515020?auto=format&fit=crop&w=800&q=80",
  },
  {
    num: "03",
    count: "7 tours",
    name: "Aswan",
    sub: "Abu Simbel · Nile · Philae",
    img: "https://images.unsplash.com/photo-1539768942893-daf53e448371?auto=format&fit=crop&w=800&q=80",
  },
  {
    num: "04",
    count: "11 tours",
    name: "Red Sea & Coast",
    sub: "Hurghada · Snorkelling · Beach",
    img: "https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?auto=format&fit=crop&w=800&q=80",
  },
];

export const steps = [
  { n: "1", title: "Tell us your plan", text: "Message your dates, budget, and what you'd love to see. We reply with honest advice within hours." },
  { n: "2", title: "Get a clear quote", text: "An itemised plan with route, timing, and exactly what's included — and what's optional." },
  { n: "3", title: "Travel with support", text: "Your guide and driver handle the details, and we stay reachable the whole trip." },
];

export const included = {
  always: ["Licensed private guide", "A/C car & driver", "Hotel pick-up & drop-off", "Bottled water", "24/7 support"],
  optional: ["Entry tickets", "Lunch & meals", "Camel & boat rides", "Extra stops"],
};

export const stats: { b: string; label: string; suffix?: string }[] = [
  { b: "12+", label: "Years guiding in Egypt" },
  { b: "2,140+", label: "Happy travellers" },
  { b: "4.9", suffix: "/5", label: "Average rating" },
  { b: "0", label: "Hidden costs, ever" },
];

export type Review = {
  quote: string;
  name: string;
  place: string;
  tag: string;
  avatar: string;
};

export const reviews: Review[] = [
  {
    quote: "The price was honestly the lowest we found, but nothing felt cheap. Our guide was patient with the kids and the car was spotless. Exactly as quoted.",
    name: "Hannah Vogel",
    place: "Munich, Germany",
    tag: "Giza Day Tour",
    avatar: "https://i.pravatar.cc/120?img=32",
  },
  {
    quote: "What sold me was the quote — every single cost listed up front. On the day there were zero surprises, and they replied to my WhatsApp within minutes.",
    name: "Diego Marchetti",
    place: "Bologna, Italy",
    tag: "Luxor · 3 Days",
    avatar: "https://i.pravatar.cc/120?img=12",
  },
  {
    quote: "They planned our whole 8-day route so the driving never felt rushed. Sunrise at Abu Simbel was unforgettable. Fair price, genuinely kind people.",
    name: "Priya Raghunathan",
    place: "Singapore",
    tag: "Cairo–Aswan · 8 Days",
    avatar: "https://i.pravatar.cc/120?img=45",
  },
];

export const faqs = [
  { q: "Are your prices really cheaper — and what's the catch?", a: "There's no catch. We keep prices fair by being local and cutting out middlemen — not by cutting guides, comfort, or support. Every quote is itemised so you see exactly where your money goes." },
  { q: "Is Egypt safe for tourists right now?", a: "The main tourist areas are well-established and visited safely year-round. You'll have a licensed guide and a private driver with you, and we stay reachable throughout your trip." },
  { q: "Do I need to pay everything up front?", a: "No. Most trips are booked with a small deposit, with the balance settled before or on the day. We'll always confirm the terms in writing before you commit." },
  { q: "Can you build a custom itinerary for my dates?", a: "Absolutely — it's what we do best. Send us your dates, budget, and interests, and we'll design a realistic, comfortable plan around them with a clear price." },
  { q: "What's the best time of year to visit Egypt?", a: "October to April is the most comfortable for sightseeing. Summer is hotter but quieter and cheaper — we adjust timings to early mornings so it's still enjoyable." },
  { q: "How do I get in touch fastest?", a: "WhatsApp is the quickest — a real person usually replies within a few hours, often minutes. You can also call or email; whatever suits you best." },
];
