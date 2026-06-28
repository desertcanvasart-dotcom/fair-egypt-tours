// Spanish & Portuguese translations of the home-page content (data layer).
// English stays editable from the dashboard / lib/data; these overlay for es/pt.
import type { Tour, Destination, Review } from "./data";
import type { HomeContent } from "./page-content";

export type HomeData = {
  hero: HomeContent["hero"];
  tours: Tour[];
  destinations: Destination[];
  steps: HomeContent["steps"];
  included: HomeContent["included"];
  stats: { b: string; label: string; suffix?: string }[];
  reviews: Review[];
  faqs: HomeContent["faqs"];
  promise: HomeContent["promise"];
  cta: HomeContent["cta"];
};

const TIMG = {
  giza: "https://images.unsplash.com/photo-1572252009286-268acec5ca0a?auto=format&fit=crop&w=900&q=80",
  luxor: "https://images.unsplash.com/photo-1568322445389-f64ac2515020?auto=format&fit=crop&w=900&q=80",
  aswan: "https://images.unsplash.com/photo-1539768942893-daf53e448371?auto=format&fit=crop&w=900&q=80",
  sea: "https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?auto=format&fit=crop&w=900&q=80",
};
const DIMG = {
  cairo: "https://images.unsplash.com/photo-1572252009286-268acec5ca0a?auto=format&fit=crop&w=800&q=80",
  luxor: "https://images.unsplash.com/photo-1568322445389-f64ac2515020?auto=format&fit=crop&w=800&q=80",
  aswan: "https://images.unsplash.com/photo-1539768942893-daf53e448371?auto=format&fit=crop&w=800&q=80",
  sea: "https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?auto=format&fit=crop&w=800&q=80",
};
const AV = (n: number) => `https://i.pravatar.cc/120?img=${n}`;

/* ────────────────────────────── Spanish ────────────────────────────── */
const es: HomeData = {
  hero: {
    kicker: "Viajes a Egipto asequibles",
    titleLead: "Tours a Egipto asequibles,",
    titleEm: "planificados con esmero.",
    subtitle:
      "Precios justos, guías locales con licencia, transporte privado con aire acondicionado y atención humana real — desde tu primer mensaje hasta el último traslado.",
    chips: ["Pirámides y Guiza", "Luxor y Asuán", "Cruceros por el Nilo", "Mar Rojo"],
  },
  tours: [
    { place: "Guiza", rating: "4.9", duration: "Día completo · Privado", title: "Pirámides, Esfinge y Museo", price: "$45", img: TIMG.giza },
    { place: "Luxor", rating: "4.8", duration: "Día completo · Privado", title: "Valle de los Reyes y Karnak", price: "$60", img: TIMG.luxor },
    { place: "Asuán", rating: "5.0", duration: "Día completo · Amanecer", title: "Abu Simbel y paseo por el Nilo", price: "$70", img: TIMG.aswan },
    { place: "Mar Rojo", rating: "5.0", duration: "3–5 días · Media pensión", title: "Crucero por el Nilo y escapada a la costa", price: "$220", img: TIMG.sea },
  ],
  destinations: [
    { num: "01", count: "14 tours", name: "El Cairo y Guiza", sub: "Pirámides · Museo · El Cairo antiguo", img: DIMG.cairo },
    { num: "02", count: "9 tours", name: "Luxor", sub: "Valle de los Reyes · Karnak", img: DIMG.luxor },
    { num: "03", count: "7 tours", name: "Asuán", sub: "Abu Simbel · Nilo · Philae", img: DIMG.aswan },
    { num: "04", count: "11 tours", name: "Mar Rojo y costa", sub: "Hurgada · Buceo · Playa", img: DIMG.sea },
  ],
  steps: [
    { n: "1", title: "Cuéntanos tu plan", text: "Escríbenos tus fechas, presupuesto y lo que te encantaría ver. Te respondemos con consejos honestos en pocas horas." },
    { n: "2", title: "Recibe un presupuesto claro", text: "Un plan detallado con ruta, horarios y exactamente qué está incluido — y qué es opcional." },
    { n: "3", title: "Viaja con apoyo", text: "Tu guía y conductor se ocupan de todo, y seguimos disponibles durante todo el viaje." },
  ],
  included: {
    always: ["Guía privado con licencia", "Coche con A/A y conductor", "Recogida y regreso al hotel", "Agua embotellada", "Atención 24/7"],
    optional: ["Entradas a los sitios", "Almuerzo y comidas", "Paseos en camello y barco", "Paradas adicionales"],
  },
  stats: [
    { b: "12+", label: "Años guiando en Egipto" },
    { b: "2.140+", label: "Viajeros satisfechos" },
    { b: "4.9", suffix: "/5", label: "Valoración media" },
    { b: "0", label: "Costes ocultos, nunca" },
  ],
  reviews: [
    { quote: "El precio fue, sinceramente, el más bajo que encontramos, pero nada se sintió barato. Nuestro guía fue paciente con los niños y el coche estaba impecable. Tal como nos lo presupuestaron.", name: "Hannah Vogel", place: "Múnich, Alemania", tag: "Tour de un día en Guiza", avatar: AV(32) },
    { quote: "Lo que me convenció fue el presupuesto: cada coste detallado desde el principio. El día del tour no hubo sorpresas, y respondían mi WhatsApp en minutos.", name: "Diego Marchetti", place: "Bolonia, Italia", tag: "Luxor · 3 días", avatar: AV(12) },
    { quote: "Planificaron toda nuestra ruta de 8 días para que los trayectos nunca se sintieran apresurados. El amanecer en Abu Simbel fue inolvidable. Precio justo, gente genuinamente amable.", name: "Priya Raghunathan", place: "Singapur", tag: "El Cairo–Asuán · 8 días", avatar: AV(45) },
  ],
  faqs: [
    { q: "¿De verdad son más baratos sus precios? ¿Cuál es el truco?", a: "No hay truco. Mantenemos precios justos siendo locales y eliminando intermediarios — no recortando en guías, comodidad o atención. Cada presupuesto está detallado para que veas exactamente a dónde va tu dinero." },
    { q: "¿Es seguro Egipto para los turistas ahora mismo?", a: "Las principales zonas turísticas están bien establecidas y se visitan con seguridad todo el año. Tendrás un guía con licencia y un conductor privado contigo, y seguimos disponibles durante todo tu viaje." },
    { q: "¿Tengo que pagar todo por adelantado?", a: "No. La mayoría de los viajes se reservan con un pequeño depósito y el resto se abona antes o el mismo día. Siempre confirmamos las condiciones por escrito antes de que te comprometas." },
    { q: "¿Pueden crear un itinerario a medida para mis fechas?", a: "Por supuesto — es lo que mejor hacemos. Envíanos tus fechas, presupuesto e intereses, y diseñaremos un plan realista y cómodo a tu medida, con un precio claro." },
    { q: "¿Cuál es la mejor época del año para visitar Egipto?", a: "De octubre a abril es lo más cómodo para hacer turismo. El verano es más caluroso pero más tranquilo y económico — ajustamos los horarios a primera hora de la mañana para que siga siendo agradable." },
    { q: "¿Cómo me pongo en contacto más rápido?", a: "WhatsApp es lo más rápido — una persona real suele responder en pocas horas, a menudo minutos. También puedes llamar o escribir un correo; lo que prefieras." },
  ],
  promise: {
    heading: "Saber exactamente qué pagas.",
    text: "El mayor miedo al viajar de forma asequible son los costes ocultos y los tours apresurados. Por eso lo ponemos por escrito — cada presupuesto detalla qué está incluido y qué no.",
  },
  cta: {
    heading: "Dinos tus fechas — planificaremos un viaje justo.",
    text: "Envíanos un mensaje y recibe un presupuesto claro y detallado, sin compromiso. Te responden personas reales, normalmente en pocas horas.",
  },
};

/* ──────────────────────────── Portuguese ──────────────────────────── */
const pt: HomeData = {
  hero: {
    kicker: "Viagens ao Egito acessíveis",
    titleLead: "Tours ao Egito acessíveis,",
    titleEm: "planejados com cuidado.",
    subtitle:
      "Preços justos, guias locais licenciados, transporte privado com ar-condicionado e apoio humano de verdade — da primeira mensagem ao último traslado.",
    chips: ["Pirâmides e Gizé", "Luxor e Assuã", "Cruzeiros pelo Nilo", "Mar Vermelho"],
  },
  tours: [
    { place: "Gizé", rating: "4.9", duration: "Dia inteiro · Privado", title: "Pirâmides, Esfinge e Museu", price: "$45", img: TIMG.giza },
    { place: "Luxor", rating: "4.8", duration: "Dia inteiro · Privado", title: "Vale dos Reis e Karnak", price: "$60", img: TIMG.luxor },
    { place: "Assuã", rating: "5.0", duration: "Dia inteiro · Nascer do sol", title: "Abu Simbel e passeio pelo Nilo", price: "$70", img: TIMG.aswan },
    { place: "Mar Vermelho", rating: "5.0", duration: "3–5 dias · Meia pensão", title: "Cruzeiro pelo Nilo e escapada ao litoral", price: "$220", img: TIMG.sea },
  ],
  destinations: [
    { num: "01", count: "14 passeios", name: "Cairo e Gizé", sub: "Pirâmides · Museu · Cairo Antigo", img: DIMG.cairo },
    { num: "02", count: "9 passeios", name: "Luxor", sub: "Vale dos Reis · Karnak", img: DIMG.luxor },
    { num: "03", count: "7 passeios", name: "Assuã", sub: "Abu Simbel · Nilo · Philae", img: DIMG.aswan },
    { num: "04", count: "11 passeios", name: "Mar Vermelho e litoral", sub: "Hurghada · Mergulho · Praia", img: DIMG.sea },
  ],
  steps: [
    { n: "1", title: "Conte-nos o seu plano", text: "Envie suas datas, orçamento e o que adoraria ver. Respondemos com conselhos honestos em poucas horas." },
    { n: "2", title: "Receba um orçamento claro", text: "Um plano detalhado com rota, horários e exatamente o que está incluído — e o que é opcional." },
    { n: "3", title: "Viaje com apoio", text: "Seu guia e motorista cuidam de tudo, e continuamos disponíveis durante toda a viagem." },
  ],
  included: {
    always: ["Guia privado licenciado", "Carro com ar e motorista", "Embarque e desembarque no hotel", "Água engarrafada", "Apoio 24/7"],
    optional: ["Ingressos dos sítios", "Almoço e refeições", "Passeios de camelo e barco", "Paradas extras"],
  },
  stats: [
    { b: "12+", label: "Anos guiando no Egito" },
    { b: "2.140+", label: "Viajantes satisfeitos" },
    { b: "4.9", suffix: "/5", label: "Avaliação média" },
    { b: "0", label: "Custos ocultos, nunca" },
  ],
  reviews: [
    { quote: "O preço foi, honestamente, o mais baixo que encontramos, mas nada pareceu barato. Nosso guia foi paciente com as crianças e o carro estava impecável. Exatamente como no orçamento.", name: "Hannah Vogel", place: "Munique, Alemanha", tag: "Passeio de um dia em Gizé", avatar: AV(32) },
    { quote: "O que me convenceu foi o orçamento: cada custo listado logo de início. No dia, não houve surpresa alguma, e responderam meu WhatsApp em minutos.", name: "Diego Marchetti", place: "Bolonha, Itália", tag: "Luxor · 3 dias", avatar: AV(12) },
    { quote: "Planejaram toda a nossa rota de 8 dias para que os trajetos nunca parecessem corridos. O nascer do sol em Abu Simbel foi inesquecível. Preço justo, gente genuinamente gentil.", name: "Priya Raghunathan", place: "Singapura", tag: "Cairo–Assuã · 8 dias", avatar: AV(45) },
  ],
  faqs: [
    { q: "Os preços são mesmo mais baratos — e qual é a pegadinha?", a: "Não há pegadinha. Mantemos preços justos por sermos locais e cortar intermediários — não cortando guias, conforto ou apoio. Cada orçamento é detalhado para você ver exatamente para onde vai o seu dinheiro." },
    { q: "O Egito é seguro para turistas neste momento?", a: "As principais áreas turísticas são bem estabelecidas e visitadas com segurança o ano todo. Você terá um guia licenciado e um motorista privado com você, e continuamos disponíveis durante toda a viagem." },
    { q: "Preciso pagar tudo adiantado?", a: "Não. A maioria das viagens é reservada com um pequeno depósito, e o restante é pago antes ou no próprio dia. Sempre confirmamos as condições por escrito antes de você se comprometer." },
    { q: "Vocês montam um itinerário sob medida para as minhas datas?", a: "Com certeza — é o que fazemos de melhor. Envie suas datas, orçamento e interesses, e desenhamos um plano realista e confortável em torno deles, com um preço claro." },
    { q: "Qual a melhor época do ano para visitar o Egito?", a: "De outubro a abril é o mais confortável para passear. O verão é mais quente, porém mais tranquilo e barato — ajustamos os horários para o início da manhã para continuar agradável." },
    { q: "Qual a forma mais rápida de falar com vocês?", a: "O WhatsApp é o mais rápido — uma pessoa real costuma responder em poucas horas, muitas vezes minutos. Você também pode ligar ou enviar e-mail; o que for melhor para você." },
  ],
  promise: {
    heading: "Saiba exatamente pelo que está pagando.",
    text: "O maior medo ao viajar de forma acessível são os custos ocultos e os passeios corridos. Por isso colocamos tudo por escrito — cada orçamento detalha o que está incluído e o que não está.",
  },
  cta: {
    heading: "Conte-nos suas datas — planejamos uma viagem justa.",
    text: "Envie uma mensagem e receba um orçamento claro e detalhado, sem compromisso. Pessoas reais respondem, normalmente em poucas horas.",
  },
};

export const homeTranslations: Record<"es" | "pt", HomeData> = { es, pt };
