/** Editable SEO landing page that groups tours (e.g. "Cairo Day Tours"). */
export type TourCategory = {
  slug: string;
  name: string;
  /** "Day Tour" | "Package". */
  type?: string;
  /** Destination name this category belongs to, e.g. "Cairo & Giza". */
  destination?: string;
  intro: string;
  heroImage: string;
  heroImageAlt?: string;
  cardImage?: string;
  body?: string[];
  metaTitle?: string;
  metaDescription?: string;
};

const D = (s: string) => `/img/dest/${s}`;
const T = (s: string) => `/img/tours/${s}`;

// Starter categories (create-if-missing). The dashboard can add more.
export const tourCategories: TourCategory[] = [
  {
    slug: "pyramids-giza-tours",
    name: "Pyramids & Giza Tours",
    type: "Day Tour",
    destination: "Cairo & Giza",
    intro:
      "Private day tours built around the pyramids — from a focused half-day at Giza to the full evolution of pyramid design across Saqqara, Dahshur and Giza, each with a licensed Egyptologist and door-to-door transfers.",
    heroImage: D("cairo/hero.jpg"),
    heroImageAlt: "The Great Pyramids and Sphinx at Giza",
    cardImage: D("cairo/pyramids.jpg"),
    body: [
      "Giza is where most Egypt trips begin, but the pyramids are a much bigger story than one plateau. These tours let you choose your depth — the icons at Giza, the quieter early pyramids at Saqqara and Dahshur, or the whole evolution in a single day.",
      "Every tour is private and guided, with hotel pickup and air-conditioned transport, and the price you see is the price you pay.",
    ],
    metaTitle: "Pyramids & Giza Day Tours (Private) | Fair Egypt Tours",
    metaDescription: "Private pyramids day tours — the Giza Plateau, Saqqara, Dahshur and Memphis — with licensed guides, door-to-door transfers and fair, up-front pricing.",
  },
  {
    slug: "cairo-city-tours",
    name: "Cairo City Tours",
    type: "Day Tour",
    destination: "Cairo & Giza",
    intro:
      "Private day tours through the layers of Cairo — the medieval Citadel, the early churches of Coptic Cairo, the Grand Egyptian Museum and the royal mummies, and the Khan el-Khalili bazaar.",
    heroImage: D("cairo/citadel.jpg"),
    heroImageAlt: "The Citadel and Muhammad Ali Mosque in Cairo",
    cardImage: D("cairo/khan.jpg"),
    body: [
      "Beyond the pyramids, Cairo is one of the great historic cities — Islamic, Coptic and pharaonic all at once. These tours move through its medieval fortresses, old churches, world-class museums and living bazaars.",
      "Each is private and guided, with lunch and door-to-door transfers, so you see the city without the logistics.",
    ],
    metaTitle: "Cairo City Day Tours (Private) | Fair Egypt Tours",
    metaDescription: "Private Cairo city day tours — the Citadel, Coptic Cairo, the Grand Egyptian Museum, the royal mummies and the Khan el-Khalili bazaar. Guides and lunch included.",
  },
  {
    slug: "desert-oasis-adventures",
    name: "Desert & Oasis Adventures",
    type: "Day Tour",
    destination: "Cairo & Giza",
    intro:
      "Private adventure day trips from Cairo — a 4x4 escape to the lakes and waterfalls of the Fayoum Oasis, or a beach-buggy safari through the Giza desert with the pyramids in view.",
    heroImage: T("fayoum-lake.jpg"),
    heroImageAlt: "A turquoise desert lake at the Fayoum Oasis",
    cardImage: T("fayoum-safari.jpg"),
    body: [
      "Not every great day in Egypt is a temple. These trips swap stone for open desert — dune driving, desert lakes, waterfalls and Bedouin tea — an easy change of pace within a couple of hours of Cairo.",
      "They're private and door-to-door, and they pair well with a classic sightseeing day.",
    ],
    metaTitle: "Egypt Desert & Oasis Day Adventures | Fair Egypt Tours",
    metaDescription: "Private desert adventures from Cairo — a 4x4 Fayoum Oasis day trip and a Giza beach-buggy safari. Dunes, lakes, waterfalls and the pyramids, with door-to-door transfers.",
  },
  {
    slug: "alexandria-day-tours",
    name: "Alexandria Day Tours",
    type: "Day Tour",
    destination: "Alexandria",
    intro:
      "Private day trips to Egypt's Mediterranean city — the Catacombs of Kom el-Shoqafa, Pompey's Pillar, the Qaitbay Citadel and the seafront, with a guide, lunch and comfortable transfers from Cairo.",
    heroImage: D("alexandria/hero.jpg"),
    heroImageAlt: "The Mediterranean seafront at Alexandria",
    cardImage: D("alexandria/card.jpg"),
    body: [
      "Alexandria is a different Egypt — sea air, a long curving corniche, and Greek and Roman history beneath a busy port. It makes an easy, rewarding day trip from Cairo.",
      "Our Alexandria tours are private and guided, with lunch by the Mediterranean and door-to-door transfers each way.",
    ],
    metaTitle: "Alexandria Day Tours from Cairo (Private) | Fair Egypt Tours",
    metaDescription: "Private Alexandria day tours from Cairo — the Catacombs of Kom el-Shoqafa, Pompey's Pillar and the Qaitbay Citadel on the Mediterranean. Guide and lunch included.",
  },
];
