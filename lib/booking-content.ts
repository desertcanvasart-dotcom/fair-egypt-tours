// Booking page — book a listed tour or request a custom, tailor-made trip.
// Strings are passed to the client form, so they live here per locale.
import type { Locale } from "./i18n";

export type BookingStrings = {
  crumb: string;
  metaTitle: string;
  metaDescription: string;
  ogTitle: string;
  ogDescription: string;
  heroKicker: string;
  heroTitleLead: string;
  heroTitleEm: string;
  heroSub: string;
  tabTour: string;
  tabCustom: string;
  tabTourHint: string;
  tabCustomHint: string;
  formTitle: string;
  tourLabel: string;
  tourPlaceholder: string;
  tripLabel: string;
  tripPh: string;
  nameLabel: string;
  namePh: string;
  emailLabel: string;
  emailPh: string;
  phoneLabel: string;
  phonePh: string;
  datesLabel: string;
  datesPh: string;
  travellersLabel: string;
  travellersPh: string;
  notesLabel: string;
  notesPh: string;
  submit: string;
  altContact: string;
  // WhatsApp message labels
  waIntro: string;
  waMode: string;
  waModeTour: string;
  waModeCustom: string;
  waTour: string;
  waTrip: string;
  waName: string;
  waEmail: string;
  waPhone: string;
  waDates: string;
  waTravellers: string;
  waNotes: string;
  // reassurance
  reassureTitle: string;
  reassure: string[];
  groupDayTours: string;
  groupPackages: string;
  // custom quote form
  placesLabel: string;
  placesPh: string;
  placesOptions: string[];
  daysLabel: string;
  daysOptions: string[];
  adultsLabel: string;
  childrenLabel: string;
  dateLabel: string;
  successTitle: string;
  successText: string;
};

const en: BookingStrings = {
  crumb: "Booking",
  metaTitle: "Book Your Egypt Trip — Tours & Custom Itineraries",
  metaDescription:
    "Book a Fair Egypt tour or request a custom, tailor-made Egypt itinerary. Tell us your dates and what you'd love to see, and get a clear, itemised quote with no obligation.",
  ogTitle: "Book Your Egypt Trip | Fair Egypt Tours",
  ogDescription:
    "Reserve a listed tour or design a custom Egypt itinerary. Honest, itemised pricing, a 20% deposit to confirm, and free cancellation up to 7 days before.",
  heroKicker: "Booking",
  heroTitleLead: "Book your trip,",
  heroTitleEm: "the fair way.",
  heroSub:
    "Reserve one of our tours or have us build a custom itinerary around your dates, budget and interests. Either way you'll get a clear, itemised quote with no obligation — a real person replies, usually within hours.",
  tabTour: "Book a tour",
  tabCustom: "Plan a custom trip",
  tabTourHint: "Pick one of our day tours or packages.",
  tabCustomHint: "Tell us your dream trip and we'll design it.",
  formTitle: "Tell us about your trip",
  tourLabel: "Which tour?",
  tourPlaceholder: "Select a tour…",
  tripLabel: "Your trip idea",
  tripPh: "e.g. 8 days: Cairo, a Nile cruise Luxor–Aswan, and a few days on the Red Sea.",
  nameLabel: "Your name",
  namePh: "e.g. Sarah",
  emailLabel: "Email",
  emailPh: "you@email.com",
  phoneLabel: "WhatsApp / Phone",
  phonePh: "+1 …",
  datesLabel: "Travel dates",
  datesPh: "e.g. 10–18 March, or flexible",
  travellersLabel: "Travellers",
  travellersPh: "e.g. 2 adults, 1 child",
  notesLabel: "Anything else? (optional)",
  notesPh: "Interests, must-sees, hotel level, dietary needs, accessibility…",
  submit: "Send my booking request",
  altContact: "Prefer to talk first? Message us on WhatsApp or email — details in the footer.",
  waIntro: "Hello Fair Egypt Tours! I'd like to request a booking:",
  waMode: "Type",
  waModeTour: "Book a listed tour",
  waModeCustom: "Custom trip",
  waTour: "Tour",
  waTrip: "Trip idea",
  waName: "Name",
  waEmail: "Email",
  waPhone: "WhatsApp/Phone",
  waDates: "Dates",
  waTravellers: "Travellers",
  waNotes: "Notes",
  reassureTitle: "What happens next",
  reassure: [
    "A real person from our local team replies, usually within a few hours.",
    "You get a clear, itemised quote — no hidden costs, no obligation.",
    "A 20% deposit confirms your booking; pay the balance on or before the day.",
    "Free cancellation up to 7 days before your tour.",
  ],
  groupDayTours: "Day Tours",
  groupPackages: "Travel Packages",
  placesLabel: "What would you like to visit?",
  placesPh: "Search destinations…",
  placesOptions: ["Cairo & the Pyramids", "Grand Egyptian Museum", "Islamic & Coptic Cairo", "Saqqara & Memphis", "Alexandria", "Luxor", "Valley of the Kings", "Karnak & Luxor temples", "Aswan", "Abu Simbel", "Philae Temple", "Nile cruise", "Fayoum", "Hurghada & the Red Sea", "Sharm El Sheikh", "Dahab", "White Desert", "Siwa Oasis", "Not sure yet — need advice"],
  daysLabel: "Trip length",
  daysOptions: ["Not sure yet", "1–3 days", "4–5 days", "6–8 days", "9–12 days", "2 weeks or more"],
  adultsLabel: "Adults",
  childrenLabel: "Children",
  dateLabel: "Preferred start date",
  successTitle: "Request received",
  successText: "Thanks! We've got your request and a real person from our team will reply soon — usually within a few hours.",
} as BookingStrings;

const es: BookingStrings = {
  crumb: "Reservas",
  metaTitle: "Reserva tu viaje a Egipto — Tours e itinerarios a medida",
  metaDescription:
    "Reserva un tour de Fair Egypt o solicita un itinerario a medida por Egipto. Cuéntanos tus fechas y lo que te encantaría ver, y recibe un presupuesto claro y detallado, sin compromiso.",
  ogTitle: "Reserva tu viaje a Egipto | Fair Egypt Tours",
  ogDescription:
    "Reserva un tour de la lista o diseña un itinerario a medida por Egipto. Precios honestos y detallados, un depósito del 20 % para confirmar y cancelación gratis hasta 7 días antes.",
  heroKicker: "Reservas",
  heroTitleLead: "Reserva tu viaje,",
  heroTitleEm: "de forma justa.",
  heroSub:
    "Reserva uno de nuestros tours o pídenos que diseñemos un itinerario a medida según tus fechas, presupuesto e intereses. En cualquier caso recibirás un presupuesto claro y detallado, sin compromiso — te responde una persona real, normalmente en pocas horas.",
  tabTour: "Reservar un tour",
  tabCustom: "Planear un viaje a medida",
  tabTourHint: "Elige una de nuestras excursiones o paquetes.",
  tabCustomHint: "Cuéntanos tu viaje soñado y lo diseñamos.",
  formTitle: "Cuéntanos sobre tu viaje",
  tourLabel: "¿Qué tour?",
  tourPlaceholder: "Selecciona un tour…",
  tripLabel: "Tu idea de viaje",
  tripPh: "p. ej. 8 días: El Cairo, un crucero por el Nilo Luxor–Asuán y unos días en el Mar Rojo.",
  nameLabel: "Tu nombre",
  namePh: "p. ej. Sara",
  emailLabel: "Correo electrónico",
  emailPh: "tu@correo.com",
  phoneLabel: "WhatsApp / Teléfono",
  phonePh: "+34 …",
  datesLabel: "Fechas de viaje",
  datesPh: "p. ej. 10–18 de marzo, o flexible",
  travellersLabel: "Viajeros",
  travellersPh: "p. ej. 2 adultos, 1 niño",
  notesLabel: "¿Algo más? (opcional)",
  notesPh: "Intereses, imprescindibles, nivel de hotel, dieta, accesibilidad…",
  submit: "Enviar mi solicitud de reserva",
  altContact: "¿Prefieres hablar antes? Escríbenos por WhatsApp o correo — los datos están en el pie de página.",
  waIntro: "¡Hola Fair Egypt Tours! Me gustaría solicitar una reserva:",
  waMode: "Tipo",
  waModeTour: "Reservar un tour de la lista",
  waModeCustom: "Viaje a medida",
  waTour: "Tour",
  waTrip: "Idea de viaje",
  waName: "Nombre",
  waEmail: "Correo",
  waPhone: "WhatsApp/Teléfono",
  waDates: "Fechas",
  waTravellers: "Viajeros",
  waNotes: "Notas",
  reassureTitle: "Qué pasa después",
  reassure: [
    "Una persona real de nuestro equipo local responde, normalmente en pocas horas.",
    "Recibes un presupuesto claro y detallado — sin costes ocultos, sin compromiso.",
    "Un depósito del 20 % confirma tu reserva; el resto se paga el día del tour o antes.",
    "Cancelación gratuita hasta 7 días antes de tu tour.",
  ],
  groupDayTours: "Excursiones de un día",
  groupPackages: "Paquetes de viaje",
  placesLabel: "¿Qué te gustaría visitar?",
  placesPh: "Busca destinos…",
  placesOptions: ["El Cairo y las Pirámides", "Gran Museo Egipcio", "El Cairo islámico y copto", "Saqqara y Menfis", "Alejandría", "Luxor", "Valle de los Reyes", "Templos de Karnak y Luxor", "Asuán", "Abu Simbel", "Templo de File", "Crucero por el Nilo", "Fayoum", "Hurgada y el Mar Rojo", "Sharm el-Sheij", "Dahab", "Desierto Blanco", "Oasis de Siwa", "Aún no lo sé — necesito consejo"],
  daysLabel: "Duración del viaje",
  daysOptions: ["Aún no lo sé", "1–3 días", "4–5 días", "6–8 días", "9–12 días", "2 semanas o más"],
  adultsLabel: "Adultos",
  childrenLabel: "Niños",
  dateLabel: "Fecha de inicio preferida",
  successTitle: "Solicitud recibida",
  successText: "¡Gracias! Hemos recibido tu solicitud y una persona real de nuestro equipo te responderá pronto, normalmente en pocas horas.",
} as BookingStrings;

const pt: BookingStrings = {
  crumb: "Reservas",
  metaTitle: "Reserve sua viagem ao Egito — Passeios e itinerários sob medida",
  metaDescription:
    "Reserve um passeio da Fair Egypt ou solicite um itinerário sob medida pelo Egito. Conte-nos suas datas e o que adoraria ver, e receba um orçamento claro e detalhado, sem compromisso.",
  ogTitle: "Reserve sua viagem ao Egito | Fair Egypt Tours",
  ogDescription:
    "Reserve um passeio da lista ou crie um itinerário sob medida pelo Egito. Preços honestos e detalhados, um depósito de 20 % para confirmar e cancelamento gratuito até 7 dias antes.",
  heroKicker: "Reservas",
  heroTitleLead: "Reserve sua viagem,",
  heroTitleEm: "do jeito justo.",
  heroSub:
    "Reserve um dos nossos passeios ou peça que montemos um itinerário sob medida de acordo com suas datas, orçamento e interesses. De qualquer forma, você recebe um orçamento claro e detalhado, sem compromisso — uma pessoa real responde, normalmente em poucas horas.",
  tabTour: "Reservar um passeio",
  tabCustom: "Planejar uma viagem sob medida",
  tabTourHint: "Escolha um dos nossos passeios ou pacotes.",
  tabCustomHint: "Conte-nos a viagem dos sonhos e nós a montamos.",
  formTitle: "Conte-nos sobre sua viagem",
  tourLabel: "Qual passeio?",
  tourPlaceholder: "Selecione um passeio…",
  tripLabel: "Sua ideia de viagem",
  tripPh: "ex.: 8 dias: Cairo, um cruzeiro pelo Nilo Luxor–Assuã e alguns dias no Mar Vermelho.",
  nameLabel: "Seu nome",
  namePh: "ex.: Sara",
  emailLabel: "E-mail",
  emailPh: "voce@email.com",
  phoneLabel: "WhatsApp / Telefone",
  phonePh: "+55 …",
  datesLabel: "Datas da viagem",
  datesPh: "ex.: 10–18 de março, ou flexível",
  travellersLabel: "Viajantes",
  travellersPh: "ex.: 2 adultos, 1 criança",
  notesLabel: "Mais alguma coisa? (opcional)",
  notesPh: "Interesses, imperdíveis, nível de hotel, dieta, acessibilidade…",
  submit: "Enviar meu pedido de reserva",
  altContact: "Prefere conversar antes? Fale conosco no WhatsApp ou e-mail — os dados estão no rodapé.",
  waIntro: "Olá Fair Egypt Tours! Gostaria de solicitar uma reserva:",
  waMode: "Tipo",
  waModeTour: "Reservar um passeio da lista",
  waModeCustom: "Viagem sob medida",
  waTour: "Passeio",
  waTrip: "Ideia de viagem",
  waName: "Nome",
  waEmail: "E-mail",
  waPhone: "WhatsApp/Telefone",
  waDates: "Datas",
  waTravellers: "Viajantes",
  waNotes: "Notas",
  reassureTitle: "O que acontece depois",
  reassure: [
    "Uma pessoa real da nossa equipe local responde, normalmente em poucas horas.",
    "Você recebe um orçamento claro e detalhado — sem custos ocultos, sem compromisso.",
    "Um depósito de 20 % confirma sua reserva; o restante é pago no dia do passeio ou antes.",
    "Cancelamento gratuito até 7 dias antes do seu passeio.",
  ],
  groupDayTours: "Passeios de um dia",
  groupPackages: "Pacotes de viagem",
  placesLabel: "O que você gostaria de visitar?",
  placesPh: "Buscar destinos…",
  placesOptions: ["Cairo e as Pirâmides", "Grande Museu Egípcio", "Cairo islâmico e copta", "Saqqara e Mênfis", "Alexandria", "Luxor", "Vale dos Reis", "Templos de Karnak e Luxor", "Assuã", "Abu Simbel", "Templo de Philae", "Cruzeiro pelo Nilo", "Fayoum", "Hurghada e o Mar Vermelho", "Sharm El-Sheikh", "Dahab", "Deserto Branco", "Oásis de Siwa", "Ainda não sei — preciso de conselho"],
  daysLabel: "Duração da viagem",
  daysOptions: ["Ainda não sei", "1–3 dias", "4–5 dias", "6–8 dias", "9–12 dias", "2 semanas ou mais"],
  adultsLabel: "Adultos",
  childrenLabel: "Crianças",
  dateLabel: "Data de início preferida",
  successTitle: "Solicitação recebida",
  successText: "Obrigado! Recebemos sua solicitação e uma pessoa real da nossa equipe responderá em breve — normalmente em poucas horas.",
} as BookingStrings;

export const bookingContent: Record<Locale, BookingStrings> = { en, es, pt };
