import type { Locale } from "./i18n";

// UI string dictionary for the site chrome. Content (tours, guides, posts) is
// translated per-record in the database; these are the fixed interface strings.
export type Dict = {
  nav: { tours: string; destinations: string; travelTips: string; blog: string; about: string; hotels: string };
  navChildren: { dayTours: string; travelPackages: string };
  cta: string;
  langLabel: string;
  footer: {
    heading: string; subscribe: string; emailPh: string;
    explore: string; company: string; contact: string;
    aboutUs: string; travelGuides: string; faq: string; backToTop: string;
    brand: string; rights: string;
  };
  home: {
    planTrip: string; quoteNote: string; destination: string; dates: string;
    travellers: string; whenPh: string; getQuote: string;
    destOptions: string[]; travOptions: string[];
    toursKicker: string; toursHeading: string; toursSub: string; viewAll: string; priceFrom: string;
    destStripKicker: string; destStripHeading: string; destStripSub: string; destExplore: string; destExploreAll: string;
    aboutKicker: string; aboutHeadingLead: string; aboutHeadingHl: string; aboutLede: string;
    howKicker: string; howHeading: string; howSub: string;
    promiseKicker: string; promiseBtn: string; alwaysIncl: string; optionalAddons: string;
    reviewsKicker: string; reviewsHeading: string; reviewsCount: string; verified: string;
    faqKicker: string; faqHeading: string; faqSub: string;
    ctaKicker: string; ctaFormTitle: string; yourName: string; namePh: string;
    waPhone: string; phonePh: string; sendReq: string; fine: string;
  };
  about: {
    crumb: string;
    metaTitle: string; metaDescription: string; ogTitle: string; ogDescription: string;
    storyKicker: string; storyHeading: string; browseTours: string;
    valuesKicker: string; valuesHeading: string; valuesSub: string;
  };
  links: { faq: string; booking: string; privacy: string; terms: string; cookies: string; legal: string; book: string };
  dest: {
    guide: string; metaIdeal: string; metaTours: string;
    why: string; planTitle: string; idealStay: string; region: string; toursWord: string; available: string; tailored: string;
    thingsKicker: string; thingsTitle: string; thingsSub: string;
    durationKicker: string; durationTitle: string; durationText: string; durationCta: string; weRecommend: string; toSee: string;
    stayKicker: string; stayTitle: string; staySub: string; stayReal: string;
    toursInKicker: string; toursInTitle: string; allTours: string;
    knowKicker: string; knowTitle: string; knowSub: string;
    knowGettingThere: string; knowWhenToGo: string; knowGuide: string; knowGuideText: string; knowHistory: string;
    pictures: string; faqKicker: string; faqTitle: string; faqSub: string; faqWhatsapp: string; ctaHeading: string;
  };
  tourType: { dayTour: string; package: string };
  tourPage: {
    overview: string; highlights: string; itinerary: string; itineraryDays: string; included: string;
    includedYes: string; includedNo: string; gallery: string;
    perPerson: string; duration: string; group: string; rating: string; languages: string; book: string; askWhatsapp: string;
    moreKicker: string; moreTitle: string; allTours: string;
  };
  catPage: { comingSoon: string; comingSoonText: string; getQuote: string };
  blog: {
    kicker: string; titleLead: string; titleEm: string; sub: string;
    readArticle: string; featured: string; detailKicker: string;
    keepPlanning: string; faq: string; readNext: string; moreTitle: string; allArticles: string;
    emptyTitle: string; emptyText: string; planTrip: string;
    cats: { All: string; Itineraries: string; Guides: string; Food: string; Tips: string };
  };
};

const en: Dict = {
  nav: { tours: "Tours", destinations: "Destinations", travelTips: "Travel Tips", blog: "Blog", about: "About", hotels: "Hotels" },
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
  home: {
    planTrip: "Plan your trip", quoteNote: "Get a fair, itemised quote — no obligation.",
    destination: "Destination", dates: "Dates", travellers: "Travellers", whenPh: "When?", getQuote: "Get my fair quote",
    destOptions: ["Cairo & Giza", "Luxor", "Aswan", "Red Sea & Coast", "Custom plan"],
    travOptions: ["2 adults", "1 adult", "Family", "Group"],
    toursKicker: "Featured Tours", toursHeading: "Fair-priced trips, fully organised.",
    toursSub: "Every tour shows its real price up front, with a clear list of what's included.", viewAll: "View all tours", priceFrom: "from",
    destStripKicker: "Destinations", destStripHeading: "Explore Egypt, region by region.",
    destStripSub: "Browse by place — we handle routing, timing, and comfort behind the scenes.", destExplore: "Explore", destExploreAll: "Explore all destinations",
    aboutKicker: "About Fair Egypt Tours", aboutHeadingLead: "A fair price should still come with ", aboutHeadingHl: "real care.",
    aboutLede: "We're a local, Egypt-based team who believe affordable doesn't have to mean careless. We explain what's included, what's optional, and what might change the price — before you ever commit. Then we plan every day around timing, comfort, and a realistic travel flow.",
    howKicker: "How It Works", howHeading: "A fair trip in three simple steps.", howSub: "No pushy sales, no confusing packages. Just tell us what you want.",
    promiseKicker: "Total Transparency", promiseBtn: "Get my itemised quote", alwaysIncl: "Always included", optionalAddons: "Optional add-ons",
    reviewsKicker: "Traveller Reviews", reviewsHeading: "Real trips, real travellers.", reviewsCount: "· 2,140+ verified reviews", verified: "Verified",
    faqKicker: "Good To Know", faqHeading: "Questions, answered honestly.", faqSub: "Can't find what you need? Message us — a real person replies.",
    ctaKicker: "Get Started", ctaFormTitle: "Request a fair quote", yourName: "Your name", namePh: "e.g. Sarah",
    waPhone: "WhatsApp / Phone", phonePh: "+20 ...", sendReq: "Send my request", fine: "No deposit · No hidden costs · No obligation",
  },
  about: {
    crumb: "About",
    metaTitle: "About Us — Fair, Local, Honest Egypt Travel",
    metaDescription: "Fair Egypt Tours is a local, Egypt-based team offering affordable, carefully planned tours with licensed guides, private transport, and honest, itemised pricing. Learn our story and what 'fair' means to us.",
    ogTitle: "About Fair Egypt Tours",
    ogDescription: "A local, Egypt-based team. Affordable tours, licensed guides, private transport, and honest pricing — here's our story.",
    storyKicker: "Our Story", storyHeading: "A fair price should still come with care.", browseTours: "Browse our tours",
    valuesKicker: "What “Fair” Means", valuesHeading: "Four promises behind every trip.",
    valuesSub: "The brand should never say “cheap.” It says clear, balanced, respectful, and well-arranged.",
  },
  links: { faq: "FAQ", booking: "Booking", privacy: "Privacy Policy", terms: "Terms & Conditions", cookies: "Cookie Policy", legal: "Legal", book: "Book a trip" },
  dest: {
    guide: "Travel Guide", metaIdeal: "Ideal stay: {v}", metaTours: "{n} tours",
    why: "Why {name}", planTitle: "Plan your {name} stay", idealStay: "Ideal stay", region: "Region", toursWord: "Tours", available: "{n} available", tailored: "Ask for a tailored plan",
    thingsKicker: "Things to do", thingsTitle: "The experiences that define {name}.", thingsSub: "The places and moments worth building your days around.",
    durationKicker: "Suggested duration", durationTitle: "How long should you stay?", durationText: "Rushing {name} is the most common mistake. Give it room to breathe — early starts, unhurried visits, and softer evenings make the whole trip more rewarding.", durationCta: "Plan it day by day", weRecommend: "We recommend", toSee: "to see it without rushing",
    stayKicker: "Where to stay", stayTitle: "Pick the base that fits your trip.", staySub: "Where you stay quietly shapes the whole experience — here's how each area feels, plus stays we'd actually book.", stayReal: "Where to actually stay in {name}",
    toursInKicker: "Tours in {name}", toursInTitle: "Fair-priced trips, better arranged.", allTours: "All tours",
    knowKicker: "Good to know", knowTitle: "The practical details that matter.", knowSub: "Small decisions — timing, routing, and where you base yourself — make the biggest difference.",
    knowGettingThere: "Getting there", knowWhenToGo: "When to go", knowGuide: "Why a local guide", knowGuideText: "In {name}, a licensed local guide ties the sites into one story — handling timing, routing, and the context that turns separate stops into a real understanding of the place.", knowHistory: "A little history",
    pictures: "{name} in pictures", faqKicker: "FAQ", faqTitle: "Questions before {name}.", faqSub: "Can't find it here? Message us — a real person replies, usually within a few hours.", faqWhatsapp: "Ask on WhatsApp", ctaHeading: "Tell us your dates — we'll shape the right {name} stay.",
  },
  tourType: { dayTour: "Day Tour", package: "Travel Package" },
  tourPage: {
    overview: "Overview", highlights: "Highlights", itinerary: "Itinerary", itineraryDays: "Day-by-day itinerary", included: "What's included",
    includedYes: "Included", includedNo: "Optional / not included", gallery: "Gallery",
    perPerson: "/ person", duration: "Duration", group: "Group", rating: "Rating", languages: "Languages", book: "Book / get a quote", askWhatsapp: "Ask on WhatsApp",
    moreKicker: "More tours", moreTitle: "You might also like.", allTours: "All tours",
  },
  catPage: { comingSoon: "Tours coming soon", comingSoonText: "We're finalising the {name}. Tell us your dates and we'll put together a custom plan.", getQuote: "Get a fair quote" },
  blog: {
    kicker: "Blog", titleLead: "Stories & guides from", titleEm: "the ground.",
    sub: "Itineraries, practical guides, food, and honest advice — written by our local team to help you travel Egypt better.",
    readArticle: "Read article", featured: "Featured", detailKicker: "Blog",
    keepPlanning: "Keep planning your trip", faq: "Frequently asked questions", readNext: "Read next", moreTitle: "More from the blog.", allArticles: "All articles",
    emptyTitle: "New stories coming soon", emptyText: "We're rewriting our Egypt travel guides from scratch. Check back shortly — or tell us your dates and we'll help you plan directly.", planTrip: "Plan your trip",
    cats: { All: "All", Itineraries: "Itineraries", Guides: "Guides", Food: "Food", Tips: "Tips" },
  },
};

const es: Dict = {
  nav: { tours: "Tours", destinations: "Destinos", travelTips: "Consejos de viaje", blog: "Blog", about: "Nosotros", hotels: "Hoteles" },
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
  home: {
    planTrip: "Planifica tu viaje", quoteNote: "Recibe un presupuesto justo y detallado, sin compromiso.",
    destination: "Destino", dates: "Fechas", travellers: "Viajeros", whenPh: "¿Cuándo?", getQuote: "Pide mi presupuesto",
    destOptions: ["El Cairo y Guiza", "Luxor", "Asuán", "Mar Rojo y costa", "Plan a medida"],
    travOptions: ["2 adultos", "1 adulto", "Familia", "Grupo"],
    toursKicker: "Tours destacados", toursHeading: "Viajes a precio justo, totalmente organizados.",
    toursSub: "Cada tour muestra su precio real desde el principio, con una lista clara de lo que incluye.", viewAll: "Ver todos los tours", priceFrom: "desde",
    destStripKicker: "Destinos", destStripHeading: "Explora Egipto, región por región.",
    destStripSub: "Explora por lugar — nosotros nos encargamos de la ruta, los horarios y la comodidad entre bastidores.", destExplore: "Explorar", destExploreAll: "Explorar todos los destinos",
    aboutKicker: "Sobre Fair Egypt Tours", aboutHeadingLead: "Un precio justo también merece ", aboutHeadingHl: "un trato de verdad.",
    aboutLede: "Somos un equipo local, con base en Egipto, que cree que asequible no tiene por qué significar descuidado. Te explicamos qué está incluido, qué es opcional y qué podría cambiar el precio — antes de que te comprometas. Luego planificamos cada día pensando en los horarios, la comodidad y un ritmo de viaje realista.",
    howKicker: "Cómo funciona", howHeading: "Un viaje justo en tres sencillos pasos.", howSub: "Sin ventas agresivas ni paquetes confusos. Solo cuéntanos qué quieres.",
    promiseKicker: "Transparencia total", promiseBtn: "Pide mi presupuesto detallado", alwaysIncl: "Siempre incluido", optionalAddons: "Extras opcionales",
    reviewsKicker: "Opiniones de viajeros", reviewsHeading: "Viajes reales, viajeros reales.", reviewsCount: "· más de 2.140 opiniones verificadas", verified: "Verificada",
    faqKicker: "Bueno saberlo", faqHeading: "Preguntas, respondidas con honestidad.", faqSub: "¿No encuentras lo que buscas? Escríbenos — te responde una persona real.",
    ctaKicker: "Empieza ahora", ctaFormTitle: "Solicita un presupuesto justo", yourName: "Tu nombre", namePh: "p. ej. Sara",
    waPhone: "WhatsApp / Teléfono", phonePh: "+20 ...", sendReq: "Enviar mi solicitud", fine: "Sin depósito · Sin costes ocultos · Sin compromiso",
  },
  about: {
    crumb: "Nosotros",
    metaTitle: "Quiénes somos — Viajes a Egipto justos, locales y honestos",
    metaDescription: "Fair Egypt Tours es un equipo local, con base en Egipto, que ofrece tours asequibles y planificados con esmero, con guías con licencia, transporte privado y precios honestos y detallados. Conoce nuestra historia y qué significa «justo» para nosotros.",
    ogTitle: "Sobre Fair Egypt Tours",
    ogDescription: "Un equipo local, con base en Egipto. Tours asequibles, guías con licencia, transporte privado y precios honestos — esta es nuestra historia.",
    storyKicker: "Nuestra historia", storyHeading: "Un precio justo también merece cuidado.", browseTours: "Explora nuestros tours",
    valuesKicker: "Qué significa «justo»", valuesHeading: "Cuatro promesas detrás de cada viaje.",
    valuesSub: "La marca nunca debería decir «barato». Dice claro, equilibrado, respetuoso y bien organizado.",
  },
  links: { faq: "Preguntas frecuentes", booking: "Reservas", privacy: "Política de privacidad", terms: "Términos y condiciones", cookies: "Política de cookies", legal: "Legal", book: "Reserva tu viaje" },
  dest: {
    guide: "Guía de viaje", metaIdeal: "Estancia ideal: {v}", metaTours: "{n} tours",
    why: "Por qué {name}", planTitle: "Planifica tu estancia en {name}", idealStay: "Estancia ideal", region: "Región", toursWord: "Tours", available: "{n} disponibles", tailored: "Pide un plan a medida",
    thingsKicker: "Qué hacer", thingsTitle: "Las experiencias que definen {name}.", thingsSub: "Los lugares y momentos en torno a los que merece la pena organizar tus días.",
    durationKicker: "Duración sugerida", durationTitle: "¿Cuánto tiempo deberías quedarte?", durationText: "Apresurar {name} es el error más común. Dale espacio para respirar — madrugar, visitas sin prisa y tardes más tranquilas hacen que todo el viaje merezca más la pena.", durationCta: "Planifícalo día a día", weRecommend: "Recomendamos", toSee: "para verlo sin prisas",
    stayKicker: "Dónde alojarse", stayTitle: "Elige la base que encaja con tu viaje.", staySub: "Dónde te alojas moldea en silencio toda la experiencia — así se siente cada zona, más alojamientos que reservaríamos de verdad.", stayReal: "Dónde alojarse de verdad en {name}",
    toursInKicker: "Tours en {name}", toursInTitle: "Viajes a precio justo, mejor organizados.", allTours: "Ver todos los tours",
    knowKicker: "Bueno saberlo", knowTitle: "Los detalles prácticos que importan.", knowSub: "Las pequeñas decisiones — horarios, recorrido y dónde te alojas — marcan la mayor diferencia.",
    knowGettingThere: "Cómo llegar", knowWhenToGo: "Cuándo ir", knowGuide: "Por qué un guía local", knowGuideText: "En {name}, un guía local con licencia une los sitios en una sola historia — gestionando horarios, recorrido y el contexto que convierte paradas sueltas en una comprensión real del lugar.", knowHistory: "Un poco de historia",
    pictures: "{name} en imágenes", faqKicker: "Preguntas frecuentes", faqTitle: "Dudas antes de {name}.", faqSub: "¿No lo encuentras aquí? Escríbenos — te responde una persona real, normalmente en pocas horas.", faqWhatsapp: "Pregunta por WhatsApp", ctaHeading: "Dinos tus fechas — daremos forma a la estancia ideal en {name}.",
  },
  tourType: { dayTour: "Excursión de un día", package: "Paquete de viaje" },
  tourPage: {
    overview: "Resumen", highlights: "Lo más destacado", itinerary: "Itinerario", itineraryDays: "Itinerario día a día", included: "Qué incluye",
    includedYes: "Incluido", includedNo: "Opcional / no incluido", gallery: "Galería",
    perPerson: "/ persona", duration: "Duración", group: "Grupo", rating: "Valoración", languages: "Idiomas", book: "Reservar / pedir presupuesto", askWhatsapp: "Pregunta por WhatsApp",
    moreKicker: "Más tours", moreTitle: "También te puede gustar.", allTours: "Ver todos los tours",
  },
  catPage: { comingSoon: "Tours muy pronto", comingSoonText: "Estamos ultimando los {name}. Cuéntanos tus fechas y prepararemos un plan a medida.", getQuote: "Pide un presupuesto" },
  blog: {
    kicker: "Blog", titleLead: "Historias y guías desde", titleEm: "el terreno.",
    sub: "Itinerarios, guías prácticas, gastronomía y consejos honestos — escritos por nuestro equipo local para ayudarte a viajar mejor por Egipto.",
    readArticle: "Leer artículo", featured: "Destacado", detailKicker: "Blog",
    keepPlanning: "Sigue planificando tu viaje", faq: "Preguntas frecuentes", readNext: "Lee a continuación", moreTitle: "Más del blog.", allArticles: "Todos los artículos",
    emptyTitle: "Nuevas historias muy pronto", emptyText: "Estamos reescribiendo desde cero nuestras guías de viaje de Egipto. Vuelve pronto — o cuéntanos tus fechas y te ayudamos directamente.", planTrip: "Planifica tu viaje",
    cats: { All: "Todos", Itineraries: "Itinerarios", Guides: "Guías", Food: "Gastronomía", Tips: "Consejos" },
  },
};

const pt: Dict = {
  nav: { tours: "Tours", destinations: "Destinos", travelTips: "Dicas de viagem", blog: "Blog", about: "Sobre nós", hotels: "Hotéis" },
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
  home: {
    planTrip: "Planeje sua viagem", quoteNote: "Receba um orçamento justo e detalhado, sem compromisso.",
    destination: "Destino", dates: "Datas", travellers: "Viajantes", whenPh: "Quando?", getQuote: "Pedir meu orçamento",
    destOptions: ["Cairo e Gizé", "Luxor", "Assuã", "Mar Vermelho e litoral", "Plano sob medida"],
    travOptions: ["2 adultos", "1 adulto", "Família", "Grupo"],
    toursKicker: "Passeios em destaque", toursHeading: "Viagens com preço justo, totalmente organizadas.",
    toursSub: "Cada passeio mostra o preço real desde o início, com uma lista clara do que está incluído.", viewAll: "Ver todos os passeios", priceFrom: "a partir de",
    destStripKicker: "Destinos", destStripHeading: "Explore o Egito, região por região.",
    destStripSub: "Navegue por lugar — cuidamos da rota, dos horários e do conforto nos bastidores.", destExplore: "Explorar", destExploreAll: "Explorar todos os destinos",
    aboutKicker: "Sobre a Fair Egypt Tours", aboutHeadingLead: "Um preço justo também merece ", aboutHeadingHl: "cuidado de verdade.",
    aboutLede: "Somos uma equipe local, baseada no Egito, que acredita que acessível não precisa significar descuidado. Explicamos o que está incluído, o que é opcional e o que pode mudar o preço — antes de você se comprometer. Depois planejamos cada dia pensando em horários, conforto e um ritmo de viagem realista.",
    howKicker: "Como funciona", howHeading: "Uma viagem justa em três passos simples.", howSub: "Sem vendas insistentes nem pacotes confusos. É só nos contar o que você quer.",
    promiseKicker: "Transparência total", promiseBtn: "Pedir meu orçamento detalhado", alwaysIncl: "Sempre incluído", optionalAddons: "Adicionais opcionais",
    reviewsKicker: "Avaliações de viajantes", reviewsHeading: "Viagens reais, viajantes reais.", reviewsCount: "· mais de 2.140 avaliações verificadas", verified: "Verificada",
    faqKicker: "Bom saber", faqHeading: "Perguntas, respondidas com honestidade.", faqSub: "Não encontrou o que procura? Fale conosco — uma pessoa real responde.",
    ctaKicker: "Comece agora", ctaFormTitle: "Solicite um orçamento justo", yourName: "Seu nome", namePh: "ex.: Sara",
    waPhone: "WhatsApp / Telefone", phonePh: "+20 ...", sendReq: "Enviar minha solicitação", fine: "Sem depósito · Sem custos ocultos · Sem compromisso",
  },
  about: {
    crumb: "Sobre nós",
    metaTitle: "Quem somos — Viagens ao Egito justas, locais e honestas",
    metaDescription: "A Fair Egypt Tours é uma equipe local, baseada no Egito, que oferece passeios acessíveis e planejados com cuidado, com guias licenciados, transporte privado e preços honestos e detalhados. Conheça nossa história e o que «justo» significa para nós.",
    ogTitle: "Sobre a Fair Egypt Tours",
    ogDescription: "Uma equipe local, baseada no Egito. Passeios acessíveis, guias licenciados, transporte privado e preços honestos — esta é a nossa história.",
    storyKicker: "Nossa história", storyHeading: "Um preço justo também merece cuidado.", browseTours: "Conheça nossos passeios",
    valuesKicker: "O que significa «justo»", valuesHeading: "Quatro promessas por trás de cada viagem.",
    valuesSub: "A marca nunca deveria dizer «barato». Ela diz claro, equilibrado, respeitoso e bem organizado.",
  },
  links: { faq: "Perguntas frequentes", booking: "Reservas", privacy: "Política de privacidade", terms: "Termos e condições", cookies: "Política de cookies", legal: "Legal", book: "Reserve sua viagem" },
  dest: {
    guide: "Guia de viagem", metaIdeal: "Estadia ideal: {v}", metaTours: "{n} passeios",
    why: "Por que {name}", planTitle: "Planeje sua estadia em {name}", idealStay: "Estadia ideal", region: "Região", toursWord: "Passeios", available: "{n} disponíveis", tailored: "Peça um plano sob medida",
    thingsKicker: "O que fazer", thingsTitle: "As experiências que definem {name}.", thingsSub: "Os lugares e momentos em torno dos quais vale a pena organizar seus dias.",
    durationKicker: "Duração sugerida", durationTitle: "Quanto tempo você deve ficar?", durationText: "Apressar {name} é o erro mais comum. Dê espaço para respirar — começos cedo, visitas sem pressa e noites mais tranquilas tornam toda a viagem mais gratificante.", durationCta: "Planeje dia a dia", weRecommend: "Recomendamos", toSee: "para ver sem pressa",
    stayKicker: "Onde ficar", stayTitle: "Escolha a base que combina com sua viagem.", staySub: "Onde você fica molda silenciosamente toda a experiência — veja como cada área é, além de hospedagens que reservaríamos de verdade.", stayReal: "Onde ficar de verdade em {name}",
    toursInKicker: "Passeios em {name}", toursInTitle: "Viagens com preço justo, melhor organizadas.", allTours: "Ver todos os passeios",
    knowKicker: "Bom saber", knowTitle: "Os detalhes práticos que importam.", knowSub: "As pequenas decisões — horários, roteiro e onde você se hospeda — fazem a maior diferença.",
    knowGettingThere: "Como chegar", knowWhenToGo: "Quando ir", knowGuide: "Por que um guia local", knowGuideText: "Em {name}, um guia local licenciado une os sítios em uma só história — cuidando de horários, roteiro e do contexto que transforma paradas soltas em uma compreensão real do lugar.", knowHistory: "Um pouco de história",
    pictures: "{name} em imagens", faqKicker: "Perguntas frequentes", faqTitle: "Dúvidas antes de {name}.", faqSub: "Não encontrou aqui? Fale conosco — uma pessoa real responde, normalmente em poucas horas.", faqWhatsapp: "Pergunte no WhatsApp", ctaHeading: "Conte-nos suas datas — daremos forma à estadia ideal em {name}.",
  },
  tourType: { dayTour: "Passeio de um dia", package: "Pacote de viagem" },
  tourPage: {
    overview: "Visão geral", highlights: "Destaques", itinerary: "Itinerário", itineraryDays: "Itinerário dia a dia", included: "O que está incluído",
    includedYes: "Incluído", includedNo: "Opcional / não incluído", gallery: "Galeria",
    perPerson: "/ pessoa", duration: "Duração", group: "Grupo", rating: "Avaliação", languages: "Idiomas", book: "Reservar / pedir orçamento", askWhatsapp: "Pergunte no WhatsApp",
    moreKicker: "Mais passeios", moreTitle: "Você também pode gostar.", allTours: "Ver todos os passeios",
  },
  catPage: { comingSoon: "Passeios em breve", comingSoonText: "Estamos finalizando os {name}. Conte-nos suas datas e montaremos um plano sob medida.", getQuote: "Peça um orçamento" },
  blog: {
    kicker: "Blog", titleLead: "Histórias e guias direto", titleEm: "do local.",
    sub: "Itinerários, guias práticos, gastronomia e conselhos honestos — escritos pela nossa equipe local para ajudar você a viajar melhor pelo Egito.",
    readArticle: "Ler artigo", featured: "Destaque", detailKicker: "Blog",
    keepPlanning: "Continue planejando sua viagem", faq: "Perguntas frequentes", readNext: "Leia a seguir", moreTitle: "Mais do blog.", allArticles: "Todos os artigos",
    emptyTitle: "Novas histórias em breve", emptyText: "Estamos reescrevendo do zero nossos guias de viagem do Egito. Volte em breve — ou conte-nos suas datas e ajudamos você diretamente.", planTrip: "Planeje sua viagem",
    cats: { All: "Todos", Itineraries: "Itinerários", Guides: "Guias", Food: "Gastronomia", Tips: "Dicas" },
  },
};

const dicts: Record<Locale, Dict> = { en, es, pt };

export function t(locale: Locale): Dict {
  return dicts[locale];
}
