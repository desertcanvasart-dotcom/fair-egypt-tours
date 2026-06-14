export type Hotel = {
  slug: string;
  name: string;
  city: string;
  area: string;
  stars: number;
  rating: string;
  reviewCount: number;
  pricePerNight: number;
  image: string;
  gallery: string[];
  description: string[];
  amenities: string[];
  category: "Luxury" | "Boutique" | "Resort" | "Value";
};

const H = (id: string, w = 1200) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

export const hotels: Hotel[] = [
  {
    slug: "nile-pearl-cairo",
    name: "Nile Pearl Hotel",
    city: "Cairo",
    area: "Garden City, Nile-front",
    stars: 5,
    rating: "4.8",
    reviewCount: 1240,
    pricePerNight: 95,
    image: H("photo-1566073771259-6a8506099945"),
    gallery: [H("photo-1566073771259-6a8506099945"), H("photo-1582719478250-c89cae4dc85b"), H("photo-1551882547-ff40c63fe5fa")],
    description: [
      "A polished five-star on the Nile in Garden City, a short drive from the Egyptian Museum and downtown. Rooms are calm and contemporary, many with river views and a balcony.",
      "It's our go-to for travellers who want comfort and a central base after a long day of sightseeing, without a luxury price tag.",
    ],
    amenities: ["Nile-view rooms", "Rooftop pool", "Free Wi-Fi", "Airport transfer", "Breakfast included", "Spa"],
    category: "Luxury",
  },
  {
    slug: "giza-pyramids-view",
    name: "Pyramids View Inn",
    city: "Giza",
    area: "Steps from the Plateau",
    stars: 4,
    rating: "4.7",
    reviewCount: 980,
    pricePerNight: 68,
    image: H("photo-1582719508461-905c673771fd"),
    gallery: [H("photo-1582719508461-905c673771fd"), H("photo-1611892440504-42a792e24d32"), H("photo-1564501049412-61c2a3083791")],
    description: [
      "Wake up to the Great Pyramid framed in your window. This friendly four-star sits right beside the Giza Plateau, with a rooftop terrace built for sunrise photos and tea at sunset.",
      "Unbeatable for first-timers who want the pyramids as their backdrop — and an early, beat-the-crowds start.",
    ],
    amenities: ["Pyramid-view rooms", "Rooftop terrace", "Free Wi-Fi", "Breakfast included", "Family rooms"],
    category: "Boutique",
  },
  {
    slug: "luxor-nile-palace",
    name: "Luxor Nile Palace",
    city: "Luxor",
    area: "East Bank corniche",
    stars: 5,
    rating: "4.9",
    reviewCount: 760,
    pricePerNight: 88,
    image: H("photo-1571896349842-33c89424de2d"),
    gallery: [H("photo-1571896349842-33c89424de2d"), H("photo-1551882547-ff40c63fe5fa"), H("photo-1582719478250-c89cae4dc85b")],
    description: [
      "A grand riverfront hotel on Luxor's East Bank, walking distance from Luxor Temple. Gardens, a large Nile-side pool, and balconies that look across to the West Bank hills.",
      "An easy, comfortable base for exploring both banks, with sunset views that are hard to beat.",
    ],
    amenities: ["Nile-view rooms", "Outdoor pool", "Garden", "Restaurant", "Free Wi-Fi", "Breakfast included"],
    category: "Luxury",
  },
  {
    slug: "aswan-cataract-retreat",
    name: "Aswan Cataract Retreat",
    city: "Aswan",
    area: "Overlooking the islands",
    stars: 5,
    rating: "4.9",
    reviewCount: 540,
    pricePerNight: 110,
    image: H("photo-1520250497591-112f2f40a3f4"),
    gallery: [H("photo-1520250497591-112f2f40a3f4"), H("photo-1566073771259-6a8506099945"), H("photo-1551882547-ff40c63fe5fa")],
    description: [
      "A romantic retreat above the Nile's prettiest stretch, looking out over granite islands and white-sailed feluccas. Timeless terraces, palm gardens, and a famous sunset view.",
      "The most memorable splurge on the river — and still fairly priced through us.",
    ],
    amenities: ["Nile-view terrace", "Pool", "Spa", "Fine dining", "Free Wi-Fi", "Airport transfer"],
    category: "Luxury",
  },
  {
    slug: "hurghada-coral-resort",
    name: "Coral Bay Resort",
    city: "Hurghada",
    area: "Private beach, Red Sea",
    stars: 4,
    rating: "4.6",
    reviewCount: 1510,
    pricePerNight: 72,
    image: H("photo-1582719508461-905c673771fd"),
    gallery: [H("photo-1582719508461-905c673771fd"), H("photo-1520250497591-112f2f40a3f4"), H("photo-1571896349842-33c89424de2d")],
    description: [
      "An all-inclusive beach resort on the Red Sea with a house reef just offshore — snorkel straight from the sand. Pools, watersports, and family-friendly facilities.",
      "The perfect relaxed finish to a Nile itinerary, with diving and boat trips on tap.",
    ],
    amenities: ["Private beach", "House reef", "All-inclusive", "Pools", "Dive centre", "Kids' club"],
    category: "Resort",
  },
  {
    slug: "cairo-budget-stay",
    name: "Downtown Comfort Stay",
    city: "Cairo",
    area: "Central downtown",
    stars: 3,
    rating: "4.5",
    reviewCount: 2030,
    pricePerNight: 34,
    image: H("photo-1611892440504-42a792e24d32"),
    gallery: [H("photo-1611892440504-42a792e24d32"), H("photo-1582719478250-c89cae4dc85b"), H("photo-1566073771259-6a8506099945")],
    description: [
      "A clean, well-run value hotel in the heart of downtown Cairo, close to the museum, cafés, and the metro. Simple, bright rooms and genuinely helpful staff.",
      "Proof that fair prices and good comfort go together — ideal for budget-minded travellers.",
    ],
    amenities: ["Central location", "Free Wi-Fi", "Breakfast included", "24h reception", "Airport transfer"],
    category: "Value",
  },
];

export const getHotel = (slug: string) => hotels.find((h) => h.slug === slug);
