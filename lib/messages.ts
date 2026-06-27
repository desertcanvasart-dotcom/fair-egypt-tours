import type { Locale } from "./i18n";

// UI string dictionary for the site chrome. Content (tours, guides, posts) is
// translated per-record in the database; these are the fixed interface strings.
export type Dict = {
  nav: { tours: string; destinations: string; travelTips: string; blog: string; about: string };
  navChildren: { dayTours: string; travelPackages: string };
  cta: string;
  langLabel: string;
  footer: {
    heading: string; subscribe: string; emailPh: string;
    explore: string; company: string; contact: string;
    aboutUs: string; travelGuides: string; faq: string; backToTop: string;
    brand: string; rights: string;
  };
};

const en: Dict = {
  nav: { tours: "Tours", destinations: "Destinations", travelTips: "Travel Tips", blog: "Blog", about: "About" },
  navChildren: { dayTours: "Day Tours", travelPackages: "Travel Packages" },
  cta: "Get a fair quote",
  langLabel: "Language",
  footer: {
    heading: "Ready to see Egypt — fairly?", subscribe: "Subscribe", emailPh: "Your email for trip ideas",
    explore: "Explore", company: "Company", contact: "Contact",
    aboutUs: "About Us", travelGuides: "Travel Guides", faq: "FAQ", backToTop: "Back to top",
    brand: "Affordable Egypt travel with honesty, organisation, and genuine care.",
    rights: "All rights reserved.",
  },
};

const es: Dict = {
  nav: { tours: "Tours", destinations: "Destinos", travelTips: "Consejos de viaje", blog: "Blog", about: "Nosotros" },
  navChildren: { dayTours: "Excursiones de un día", travelPackages: "Paquetes de viaje" },
  cta: "Pide un presupuesto",
  langLabel: "Idioma",
  footer: {
    heading: "¿List@ para conocer Egipto, con precios justos?", subscribe: "Suscríbete", emailPh: "Tu correo para ideas de viaje",
    explore: "Explorar", company: "Empresa", contact: "Contacto",
    aboutUs: "Sobre nosotros", travelGuides: "Guías de viaje", faq: "Preguntas frecuentes", backToTop: "Volver arriba",
    brand: "Viajes a Egipto asequibles, con honestidad, organización y un trato cercano.",
    rights: "Todos los derechos reservados.",
  },
};

const pt: Dict = {
  nav: { tours: "Tours", destinations: "Destinos", travelTips: "Dicas de viagem", blog: "Blog", about: "Sobre nós" },
  navChildren: { dayTours: "Passeios de um dia", travelPackages: "Pacotes de viagem" },
  cta: "Peça um orçamento",
  langLabel: "Idioma",
  footer: {
    heading: "Pronto para conhecer o Egito, com preços justos?", subscribe: "Inscrever-se", emailPh: "Seu e-mail para ideias de viagem",
    explore: "Explorar", company: "Empresa", contact: "Contato",
    aboutUs: "Sobre nós", travelGuides: "Guias de viagem", faq: "Perguntas frequentes", backToTop: "Voltar ao topo",
    brand: "Viagens ao Egito acessíveis, com honestidade, organização e cuidado genuíno.",
    rights: "Todos os direitos reservados.",
  },
};

const dicts: Record<Locale, Dict> = { en, es, pt };

export function t(locale: Locale): Dict {
  return dicts[locale];
}
