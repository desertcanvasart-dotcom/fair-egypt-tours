// Dedicated FAQ page content — conversational, answer-first, and self-contained
// for SEO + GEO (AI answer engines). English plus Spanish & Portuguese.
import type { Locale } from "./i18n";

export type FaqItem = { q: string; a: string };
export type FaqCategory = { title: string; items: FaqItem[] };
export type FaqPageContent = {
  crumb: string;
  metaTitle: string;
  metaDescription: string;
  ogTitle: string;
  ogDescription: string;
  heroKicker: string;
  heroTitleLead: string;
  heroTitleEm: string;
  heroSub: string;
  intro: string;
  ctaHeading: string;
  ctaText: string;
  ctaButton: string;
  categories: FaqCategory[];
};

const en: FaqPageContent = {
  crumb: "FAQ",
  metaTitle: "Egypt Travel FAQ — Visas, Safety, Costs & Booking Answered",
  metaDescription:
    "Honest answers to the most common Egypt travel questions: visas and entry, the best time to visit, safety, tipping, what to wear, the Grand Egyptian Museum, costs, and how booking with Fair Egypt Tours works.",
  ogTitle: "Egypt Travel FAQ | Fair Egypt Tours",
  ogDescription:
    "Visas, best time to visit, safety, tipping, the Grand Egyptian Museum, costs and booking — the questions first-time visitors to Egypt actually ask, answered clearly.",
  heroKicker: "Good to Know",
  heroTitleLead: "Egypt questions,",
  heroTitleEm: "answered honestly.",
  heroSub:
    "Everything first-time visitors ask us about travelling in Egypt — visas, the best time to go, safety, money, what to pack, and how booking works. Clear answers, no sales spin.",
  intro:
    "These are the questions travellers ask us most before visiting Egypt. If yours isn't here, message us on WhatsApp — a real person from our local team will answer.",
  ctaHeading: "Still have a question?",
  ctaText: "Tell us your dates and what you'd love to see. We'll reply with honest advice and a clear, itemised quote — no obligation.",
  ctaButton: "Plan my trip",
  categories: [
    {
      title: "Visas & getting in",
      items: [
        {
          q: "Do I need a visa to visit Egypt?",
          a: "Most visitors do. Travellers from the US, UK, EU, Canada, Australia and many other countries need a tourist visa for Egypt, which allows a stay of up to 30 days. You can apply online through the official Egypt e-Visa portal before you fly, or buy a visa on arrival at the airport. A single-entry e-Visa costs about US$30 and a multiple-entry one about US$65; a visa on arrival is also US$30 (as of March 2026). Your passport must be valid for at least six months from your arrival date. If you're unsure which option fits your nationality, just ask us and we'll point you the right way.",
        },
        {
          q: "Should I get the e-Visa or a visa on arrival?",
          a: "Both work. The e-Visa is the most relaxed option — you apply online a few days before travel, pay about US$30, and arrive with the paperwork already done. A visa on arrival is bought at a bank counter in the airport arrivals hall for the same US$30, but you'll need US dollars in cash and may have to queue. Holders of a valid Schengen, US or UK multiple-entry visa sometimes qualify for special rules, and arrivals at Luxor and Aswan airports can get a free 15-day visa during the summer. We'll confirm exactly what applies to your trip.",
        },
      ],
    },
    {
      title: "When to visit & getting around",
      items: [
        {
          q: "When is the best time to visit Egypt?",
          a: "October to April is the best time to visit Egypt for comfortable sightseeing, with daytime temperatures around 18–28°C (64–82°F) and cool evenings — ideal for the Pyramids, Luxor, Aswan and Nile cruises. May to September is much hotter, especially in the south, but it's also quieter and cheaper; we simply shift tours to early mornings so they stay enjoyable. Whatever your dates, we plan each day around the heat, not against it.",
        },
        {
          q: "How do I get around Egypt?",
          a: "For our travellers, getting around Egypt is simple: every tour includes a private, air-conditioned car with a driver, plus hotel pick-up and drop-off, so you never deal with taxis or crowded transport. Between cities, the most comfortable options are short domestic flights (Cairo to Luxor or Aswan takes about an hour) and Nile cruises between Luxor and Aswan. We arrange flights, transfers and cruises as part of your plan so the whole trip flows.",
        },
        {
          q: "How many days do I need in Egypt?",
          a: "A good first trip to Egypt is usually 7–10 days: a couple of days for Cairo and the Pyramids, a few days for Luxor and Aswan (often by Nile cruise), and a beach finish on the Red Sea if you have time. With 4–5 days you can still see the highlights of Cairo and one southern city. Tell us your dates and we'll build a realistic plan that doesn't rush you.",
        },
      ],
    },
    {
      title: "Money, tipping & costs",
      items: [
        {
          q: "What currency should I bring, and can I pay by card?",
          a: "Egypt's currency is the Egyptian Pound (EGP), and cash is still king for markets, tips and small cafés. Cards are accepted at hotels, bigger restaurants and the Grand Egyptian Museum, but it's wise to carry some cash. Many travellers bring US dollars — widely accepted and easy to exchange — and withdraw Egyptian pounds from airport ATMs as needed. Because we include or pre-arrange most tickets and transport, you'll carry far less cash than you might expect.",
        },
        {
          q: "How much should I tip in Egypt?",
          a: "Tipping — known locally as baksheesh — is part of everyday life in Egypt and always appreciated, but never forced. As a rough guide, US$10–20 per day for your guide, US$5–10 for your driver, and rounding up to about 10% in restaurants is generous and fair. We'll happily explain who to tip and when so you're never caught out, and there's never any pressure to tip more than you're comfortable with.",
        },
        {
          q: "Are your prices really cheaper — and are there hidden costs?",
          a: "Yes, and no. We keep prices fair by being a local Egyptian team and cutting out middlemen — not by cutting guides, comfort or support. Every quote is fully itemised, so you see exactly what's included (licensed guide, private A/C car, pick-ups, water) and what's optional (entry tickets, meals, activities). There are no hidden costs and no surprise add-ons on the day.",
        },
      ],
    },
    {
      title: "Health, safety & what to wear",
      items: [
        {
          q: "Is Egypt safe for tourists right now?",
          a: "For the main tourist areas — Cairo, Giza, Luxor, Aswan and the Red Sea resorts — Egypt is a well-established, welcoming destination visited safely year-round. You'll have a licensed guide and a private driver with you each day, and we stay reachable throughout your trip. As with any trip, we recommend checking your own government's current travel advice before you book, and using normal city sense in crowds and markets.",
        },
        {
          q: "Is Egypt safe for solo female travellers?",
          a: "Many women travel Egypt independently and on our tours every year and have a wonderful time. On an organised tour with a private guide and driver, you're accompanied through the day, which removes most hassle. Dressing modestly helps in conservative areas, and you can expect some attention or stares — persistent rather than dangerous. We're glad to pair solo female travellers with experienced guides and comfortable, well-located hotels.",
        },
        {
          q: "Can I drink the tap water in Egypt?",
          a: "It's best not to drink the tap water in Egypt — stick to bottled or filtered water, which is cheap and available everywhere. We include bottled water in the car on every tour, and we'd suggest avoiding ice and raw salads at places you don't trust. A reusable bottle with a built-in filter is a great backup if you'd rather not buy plastic.",
        },
        {
          q: "What should I wear in Egypt?",
          a: "Egypt is a mostly Muslim country, so modest, lightweight clothing that covers shoulders and knees is both respectful and cool in the heat. Women may want a scarf for visiting mosques, and everyone should bring comfortable walking shoes, sunglasses, a hat and strong sunscreen for the sites. Evenings on a Nile cruise can be cooler, so pack a light layer.",
        },
      ],
    },
    {
      title: "Sights & planning",
      items: [
        {
          q: "Is the Grand Egyptian Museum open, and do I need to book?",
          a: "Yes — the Grand Egyptian Museum (GEM) in Giza is fully open, having opened to the public in November 2025, and it now displays the complete Tutankhamun collection. Tickets must be booked online in advance for a timed slot (roughly EGP 1,450, about US$30, for foreign adults), as the on-site ticket office has closed. We book your GEM slot as part of any Cairo or Giza tour, so you walk straight in.",
        },
        {
          q: "Can you create a custom or tailor-made itinerary?",
          a: "Absolutely — custom Egypt itineraries are what we do best. Send us your dates, budget, interests and who's travelling, and we'll design a realistic, comfortable plan around them, from Cairo and the Pyramids to Luxor, Aswan, Abu Simbel, Nile cruises and the Red Sea. You'll get a clear, itemised quote with no obligation, and we'll adjust it until it feels right.",
        },
        {
          q: "How far in advance should I book my Egypt trip?",
          a: "For the popular season (October to April), it's best to book a few weeks to a couple of months ahead, especially for Nile cruises, Abu Simbel and good hotels, which fill up. Custom trips usually need a little lead time to lock in flights and guides. That said, we arrange shorter-notice trips too — message us with your dates and we'll tell you honestly what's still available.",
        },
      ],
    },
    {
      title: "Booking with Fair Egypt Tours",
      items: [
        {
          q: "What's included in your tours?",
          a: "Every Fair Egypt tour includes a licensed private guide, a modern air-conditioned car with a professional driver, hotel pick-up and drop-off, bottled water and 24/7 support. Entry tickets, meals, and extras like camel or boat rides are clearly listed as optional, so you only pay for what you want. Your quote spells all of this out before you commit.",
        },
        {
          q: "How do I pay, and what's your cancellation policy?",
          a: "Most trips are confirmed with a small 20% deposit, with the balance paid before or on the day — by cash or card, in US dollars, euros or Egyptian pounds. You can cancel free of charge up to 7 days before your tour for a full refund of what you've paid, minus the deposit; inside 7 days the deposit is non-refundable, and no-shows aren't refunded. We always confirm the exact terms in writing before you pay anything.",
        },
        {
          q: "How do I get in touch fastest?",
          a: "WhatsApp is the quickest way to reach us — a real person usually replies within a few hours, often minutes. You can also send a booking request through this site or email us, whatever suits you. However you get in touch, you'll deal with the same small local team from your first question to your final drop-off.",
        },
      ],
    },
  ],
};

const es: FaqPageContent = {
  crumb: "Preguntas frecuentes",
  metaTitle: "Preguntas frecuentes sobre Egipto — Visados, seguridad, costes y reservas",
  metaDescription:
    "Respuestas honestas a las dudas más comunes sobre viajar a Egipto: visados y entrada, la mejor época para visitar, seguridad, propinas, qué llevar, el Gran Museo Egipcio, costes y cómo funciona reservar con Fair Egypt Tours.",
  ogTitle: "Preguntas frecuentes sobre Egipto | Fair Egypt Tours",
  ogDescription:
    "Visados, mejor época para ir, seguridad, propinas, el Gran Museo Egipcio, costes y reservas — las preguntas que de verdad se hacen quienes visitan Egipto por primera vez, respondidas con claridad.",
  heroKicker: "Bueno saberlo",
  heroTitleLead: "Dudas sobre Egipto,",
  heroTitleEm: "respondidas con honestidad.",
  heroSub:
    "Todo lo que nos preguntan quienes visitan Egipto por primera vez — visados, la mejor época para ir, seguridad, dinero, qué llevar y cómo funciona reservar. Respuestas claras, sin discurso de ventas.",
  intro:
    "Estas son las preguntas que más nos hacen los viajeros antes de visitar Egipto. Si la tuya no está aquí, escríbenos por WhatsApp — te responderá una persona real de nuestro equipo local.",
  ctaHeading: "¿Aún tienes alguna duda?",
  ctaText: "Cuéntanos tus fechas y lo que te encantaría ver. Te responderemos con consejos honestos y un presupuesto claro y detallado, sin compromiso.",
  ctaButton: "Planifica mi viaje",
  categories: [
    {
      title: "Visados y entrada",
      items: [
        {
          q: "¿Necesito visado para visitar Egipto?",
          a: "La mayoría de los visitantes sí. Los viajeros de EE. UU., Reino Unido, la UE, Canadá, Australia y muchos otros países necesitan un visado de turista para Egipto, que permite una estancia de hasta 30 días. Puedes solicitarlo en línea a través del portal oficial de e-Visa de Egipto antes de volar, o comprar un visado a la llegada en el aeropuerto. El e-Visa de entrada única cuesta unos 30 US$ y el de entradas múltiples unos 65 US$; el visado a la llegada también cuesta 30 US$ (a fecha de marzo de 2026). Tu pasaporte debe tener una validez de al menos seis meses desde la fecha de llegada. Si no sabes qué opción se ajusta a tu nacionalidad, pregúntanos y te orientamos.",
        },
        {
          q: "¿Mejor el e-Visa o el visado a la llegada?",
          a: "Ambos funcionan. El e-Visa es la opción más cómoda — lo solicitas en línea unos días antes de viajar, pagas unos 30 US$ y llegas con el trámite ya hecho. El visado a la llegada se compra en un mostrador bancario en la zona de llegadas del aeropuerto por los mismos 30 US$, pero necesitarás dólares en efectivo y puede que tengas que hacer cola. Quienes tengan un visado Schengen, estadounidense o británico de entradas múltiples válido a veces cumplen requisitos especiales, y quienes llegan a los aeropuertos de Luxor y Asuán pueden obtener un visado gratuito de 15 días en verano. Te confirmamos exactamente qué se aplica a tu viaje.",
        },
      ],
    },
    {
      title: "Cuándo ir y cómo moverse",
      items: [
        {
          q: "¿Cuál es la mejor época para visitar Egipto?",
          a: "De octubre a abril es la mejor época para visitar Egipto y hacer turismo con comodidad, con temperaturas diurnas de unos 18–28 °C y noches frescas — ideal para las Pirámides, Luxor, Asuán y los cruceros por el Nilo. De mayo a septiembre hace mucho más calor, sobre todo en el sur, pero también es más tranquilo y económico; simplemente adelantamos los tours a primera hora de la mañana para que sigan siendo agradables. Sean cuales sean tus fechas, planificamos cada día en función del calor, no contra él.",
        },
        {
          q: "¿Cómo me muevo por Egipto?",
          a: "Para nuestros viajeros, moverse por Egipto es sencillo: cada tour incluye un coche privado con aire acondicionado y conductor, además de recogida y regreso al hotel, así que nunca tienes que lidiar con taxis ni transporte abarrotado. Entre ciudades, las opciones más cómodas son los vuelos domésticos cortos (de El Cairo a Luxor o Asuán se tarda alrededor de una hora) y los cruceros por el Nilo entre Luxor y Asuán. Organizamos vuelos, traslados y cruceros como parte de tu plan para que todo el viaje fluya.",
        },
        {
          q: "¿Cuántos días necesito en Egipto?",
          a: "Un buen primer viaje a Egipto suele ser de 7 a 10 días: un par de días para El Cairo y las Pirámides, unos días para Luxor y Asuán (a menudo en crucero por el Nilo) y un cierre de playa en el Mar Rojo si tienes tiempo. Con 4 o 5 días aún puedes ver lo más destacado de El Cairo y una ciudad del sur. Cuéntanos tus fechas y diseñaremos un plan realista que no te haga ir con prisas.",
        },
      ],
    },
    {
      title: "Dinero, propinas y costes",
      items: [
        {
          q: "¿Qué moneda debo llevar y puedo pagar con tarjeta?",
          a: "La moneda de Egipto es la libra egipcia (EGP), y el efectivo sigue siendo el rey en mercados, propinas y cafés pequeños. Se aceptan tarjetas en hoteles, restaurantes grandes y el Gran Museo Egipcio, pero conviene llevar algo de efectivo. Muchos viajeros traen dólares estadounidenses — muy aceptados y fáciles de cambiar — y retiran libras egipcias en los cajeros del aeropuerto según lo necesiten. Como incluimos o gestionamos por adelantado la mayoría de las entradas y el transporte, llevarás mucho menos efectivo del que imaginas.",
        },
        {
          q: "¿Cuánto debo dar de propina en Egipto?",
          a: "La propina — conocida localmente como baksheesh — forma parte del día a día en Egipto y siempre se agradece, pero nunca es obligatoria. Como orientación, 10–20 US$ al día para tu guía, 5–10 US$ para tu conductor y redondear hasta alrededor del 10 % en los restaurantes es generoso y justo. Te explicamos con gusto a quién y cuándo dar propina para que nunca te pille por sorpresa, y nunca hay presión para dar más de lo que te resulte cómodo.",
        },
        {
          q: "¿De verdad son más baratos sus precios? ¿Hay costes ocultos?",
          a: "Sí y no. Mantenemos precios justos siendo un equipo local egipcio y eliminando intermediarios — no recortando en guías, comodidad o atención. Cada presupuesto está totalmente detallado, así que ves exactamente qué está incluido (guía con licencia, coche privado con A/A, recogidas, agua) y qué es opcional (entradas, comidas, actividades). No hay costes ocultos ni extras sorpresa el día del tour.",
        },
      ],
    },
    {
      title: "Salud, seguridad y qué vestir",
      items: [
        {
          q: "¿Es seguro Egipto para los turistas ahora mismo?",
          a: "En las principales zonas turísticas — El Cairo, Guiza, Luxor, Asuán y los resorts del Mar Rojo — Egipto es un destino consolidado y acogedor que se visita con seguridad todo el año. Cada día tendrás un guía con licencia y un conductor privado contigo, y seguimos disponibles durante todo tu viaje. Como en cualquier viaje, recomendamos consultar la información de viaje actual de tu gobierno antes de reservar y usar el sentido común habitual en multitudes y mercados.",
        },
        {
          q: "¿Es seguro Egipto para las mujeres que viajan solas?",
          a: "Muchas mujeres viajan por Egipto por su cuenta y en nuestros tours cada año y lo pasan estupendamente. En un tour organizado con guía y conductor privados, estás acompañada durante el día, lo que elimina la mayoría de las molestias. Vestir de forma modesta ayuda en zonas conservadoras, y puedes esperar algo de atención o miradas — persistentes más que peligrosas. Con gusto asignamos a las viajeras que van solas guías con experiencia y hoteles cómodos y bien ubicados.",
        },
        {
          q: "¿Puedo beber el agua del grifo en Egipto?",
          a: "Es mejor no beber el agua del grifo en Egipto — quédate con agua embotellada o filtrada, que es barata y se encuentra en todas partes. Incluimos agua embotellada en el coche en cada tour, y sugerimos evitar el hielo y las ensaladas crudas en lugares de los que no te fíes. Una botella reutilizable con filtro incorporado es una gran alternativa si prefieres no comprar plástico.",
        },
        {
          q: "¿Qué debo vestir en Egipto?",
          a: "Egipto es un país mayoritariamente musulmán, así que la ropa modesta y ligera que cubra hombros y rodillas es a la vez respetuosa y fresca con el calor. Las mujeres pueden querer un pañuelo para visitar mezquitas, y todos deberían llevar zapatos cómodos para caminar, gafas de sol, sombrero y un buen protector solar para los sitios. Las noches en un crucero por el Nilo pueden ser más frescas, así que lleva una capa ligera.",
        },
      ],
    },
    {
      title: "Lugares y planificación",
      items: [
        {
          q: "¿Está abierto el Gran Museo Egipcio y hay que reservar?",
          a: "Sí — el Gran Museo Egipcio (GEM) de Guiza está totalmente abierto, tras inaugurarse al público en noviembre de 2025, y ahora exhibe la colección completa de Tutankamón. Las entradas deben reservarse en línea con antelación para una franja horaria (alrededor de 1.450 EGP, unos 30 US$, para adultos extranjeros), ya que la taquilla física ha cerrado. Reservamos tu franja del GEM como parte de cualquier tour por El Cairo o Guiza, para que entres directamente.",
        },
        {
          q: "¿Pueden crear un itinerario personalizado o a medida?",
          a: "Por supuesto — los itinerarios a medida por Egipto son lo que mejor hacemos. Envíanos tus fechas, presupuesto, intereses y quién viaja, y diseñaremos un plan realista y cómodo a tu medida, desde El Cairo y las Pirámides hasta Luxor, Asuán, Abu Simbel, los cruceros por el Nilo y el Mar Rojo. Recibirás un presupuesto claro y detallado, sin compromiso, y lo ajustaremos hasta que te encaje del todo.",
        },
        {
          q: "¿Con cuánta antelación debo reservar mi viaje a Egipto?",
          a: "Para la temporada alta (de octubre a abril), conviene reservar con unas semanas o un par de meses de antelación, sobre todo para los cruceros por el Nilo, Abu Simbel y los buenos hoteles, que se llenan. Los viajes a medida suelen necesitar algo de margen para asegurar vuelos y guías. Dicho esto, también organizamos viajes con menos antelación — escríbenos con tus fechas y te diremos con honestidad qué sigue disponible.",
        },
      ],
    },
    {
      title: "Reservar con Fair Egypt Tours",
      items: [
        {
          q: "¿Qué incluyen sus tours?",
          a: "Cada tour de Fair Egypt incluye un guía privado con licencia, un coche moderno con aire acondicionado y conductor profesional, recogida y regreso al hotel, agua embotellada y atención 24/7. Las entradas, las comidas y los extras como paseos en camello o barco aparecen claramente como opcionales, así que solo pagas por lo que quieres. Tu presupuesto detalla todo esto antes de que te comprometas.",
        },
        {
          q: "¿Cómo se paga y cuál es su política de cancelación?",
          a: "La mayoría de los viajes se confirman con un pequeño depósito del 20 %, y el resto se abona antes o el mismo día — en efectivo o con tarjeta, en dólares, euros o libras egipcias. Puedes cancelar gratis hasta 7 días antes de tu tour para recibir el reembolso completo de lo pagado, menos el depósito; dentro de los 7 días el depósito no es reembolsable, y las ausencias no se reembolsan. Siempre confirmamos las condiciones exactas por escrito antes de que pagues nada.",
        },
        {
          q: "¿Cómo me pongo en contacto más rápido?",
          a: "WhatsApp es la forma más rápida de localizarnos — una persona real suele responder en pocas horas, a menudo minutos. También puedes enviar una solicitud de reserva a través de esta web o escribirnos un correo, lo que prefieras. Sea cual sea la vía, tratarás con el mismo pequeño equipo local desde tu primera pregunta hasta tu último traslado.",
        },
      ],
    },
  ],
};

const pt: FaqPageContent = {
  crumb: "Perguntas frequentes",
  metaTitle: "Perguntas frequentes sobre o Egito — Vistos, segurança, custos e reservas",
  metaDescription:
    "Respostas honestas às dúvidas mais comuns sobre viajar ao Egito: vistos e entrada, a melhor época para visitar, segurança, gorjetas, o que levar, o Grande Museu Egípcio, custos e como funciona reservar com a Fair Egypt Tours.",
  ogTitle: "Perguntas frequentes sobre o Egito | Fair Egypt Tours",
  ogDescription:
    "Vistos, melhor época para ir, segurança, gorjetas, o Grande Museu Egípcio, custos e reservas — as perguntas que quem visita o Egito pela primeira vez realmente faz, respondidas com clareza.",
  heroKicker: "Bom saber",
  heroTitleLead: "Dúvidas sobre o Egito,",
  heroTitleEm: "respondidas com honestidade.",
  heroSub:
    "Tudo o que nos perguntam quem visita o Egito pela primeira vez — vistos, a melhor época para ir, segurança, dinheiro, o que levar e como funciona reservar. Respostas claras, sem discurso de vendas.",
  intro:
    "Estas são as perguntas que os viajantes mais nos fazem antes de visitar o Egito. Se a sua não estiver aqui, fale conosco no WhatsApp — uma pessoa real da nossa equipe local vai responder.",
  ctaHeading: "Ainda tem alguma dúvida?",
  ctaText: "Conte-nos suas datas e o que adoraria ver. Respondemos com conselhos honestos e um orçamento claro e detalhado, sem compromisso.",
  ctaButton: "Planejar minha viagem",
  categories: [
    {
      title: "Vistos e entrada",
      items: [
        {
          q: "Preciso de visto para visitar o Egito?",
          a: "A maioria dos visitantes precisa. Viajantes dos EUA, Reino Unido, União Europeia, Canadá, Austrália e muitos outros países precisam de um visto de turista para o Egito, que permite uma estadia de até 30 dias. Você pode solicitar on-line pelo portal oficial de e-Visa do Egito antes de voar, ou comprar um visto na chegada ao aeroporto. O e-Visa de entrada única custa cerca de US$ 30 e o de entradas múltiplas cerca de US$ 65; o visto na chegada também custa US$ 30 (em março de 2026). Seu passaporte deve ter validade de pelo menos seis meses a partir da data de chegada. Se não tiver certeza de qual opção serve para a sua nacionalidade, é só perguntar que orientamos você.",
        },
        {
          q: "É melhor o e-Visa ou o visto na chegada?",
          a: "Ambos funcionam. O e-Visa é a opção mais tranquila — você solicita on-line alguns dias antes da viagem, paga cerca de US$ 30 e chega com a papelada já pronta. O visto na chegada é comprado em um balcão bancário na área de desembarque do aeroporto pelos mesmos US$ 30, mas você vai precisar de dólares em dinheiro e talvez enfrente fila. Quem tem um visto Schengen, americano ou britânico de entradas múltiplas válido às vezes se enquadra em regras especiais, e quem chega aos aeroportos de Luxor e Assuã pode obter um visto gratuito de 15 dias no verão. Confirmamos exatamente o que se aplica à sua viagem.",
        },
      ],
    },
    {
      title: "Quando ir e como se locomover",
      items: [
        {
          q: "Qual a melhor época para visitar o Egito?",
          a: "De outubro a abril é a melhor época para visitar o Egito e passear com conforto, com temperaturas diurnas de cerca de 18–28 °C e noites amenas — ideal para as Pirâmides, Luxor, Assuã e os cruzeiros pelo Nilo. De maio a setembro faz muito mais calor, sobretudo no sul, mas também é mais tranquilo e barato; simplesmente passamos os passeios para o início da manhã para continuarem agradáveis. Sejam quais forem suas datas, planejamos cada dia de acordo com o calor, e não contra ele.",
        },
        {
          q: "Como me locomovo pelo Egito?",
          a: "Para os nossos viajantes, locomover-se pelo Egito é simples: cada passeio inclui um carro privado com ar-condicionado e motorista, além de embarque e desembarque no hotel, então você nunca precisa lidar com táxis ou transporte lotado. Entre cidades, as opções mais confortáveis são os voos domésticos curtos (do Cairo a Luxor ou Assuã leva cerca de uma hora) e os cruzeiros pelo Nilo entre Luxor e Assuã. Organizamos voos, traslados e cruzeiros como parte do seu plano para que toda a viagem flua.",
        },
        {
          q: "De quantos dias preciso no Egito?",
          a: "Uma boa primeira viagem ao Egito costuma ter de 7 a 10 dias: alguns dias para o Cairo e as Pirâmides, alguns dias para Luxor e Assuã (muitas vezes em cruzeiro pelo Nilo) e um fechamento de praia no Mar Vermelho, se houver tempo. Com 4 ou 5 dias você ainda vê os destaques do Cairo e de uma cidade do sul. Conte-nos suas datas e montamos um plano realista que não deixa você com pressa.",
        },
      ],
    },
    {
      title: "Dinheiro, gorjetas e custos",
      items: [
        {
          q: "Que moeda devo levar e posso pagar com cartão?",
          a: "A moeda do Egito é a libra egípcia (EGP), e o dinheiro em espécie ainda é rei em mercados, gorjetas e pequenos cafés. Cartões são aceitos em hotéis, restaurantes maiores e no Grande Museu Egípcio, mas é prudente levar algum dinheiro. Muitos viajantes trazem dólares americanos — amplamente aceitos e fáceis de trocar — e sacam libras egípcias nos caixas eletrônicos do aeroporto conforme a necessidade. Como incluímos ou organizamos antecipadamente a maioria dos ingressos e do transporte, você vai carregar bem menos dinheiro do que imagina.",
        },
        {
          q: "Quanto devo dar de gorjeta no Egito?",
          a: "A gorjeta — conhecida localmente como baksheesh — faz parte do dia a dia no Egito e é sempre apreciada, mas nunca obrigatória. Como referência, US$ 10–20 por dia para o seu guia, US$ 5–10 para o motorista e arredondar para cerca de 10 % nos restaurantes é generoso e justo. Explicamos com prazer a quem e quando dar gorjeta para você nunca ser pego de surpresa, e nunca há pressão para dar mais do que se sentir confortável.",
        },
        {
          q: "Os preços são mesmo mais baratos — e há custos ocultos?",
          a: "Sim e não. Mantemos preços justos por sermos uma equipe local egípcia e cortar intermediários — não cortando guias, conforto ou apoio. Cada orçamento é totalmente detalhado, então você vê exatamente o que está incluído (guia licenciado, carro privado com ar, embarques, água) e o que é opcional (ingressos, refeições, atividades). Não há custos ocultos nem adicionais surpresa no dia.",
        },
      ],
    },
    {
      title: "Saúde, segurança e o que vestir",
      items: [
        {
          q: "O Egito é seguro para turistas neste momento?",
          a: "Nas principais áreas turísticas — Cairo, Gizé, Luxor, Assuã e os resorts do Mar Vermelho — o Egito é um destino consolidado e acolhedor, visitado com segurança o ano todo. Todos os dias você terá um guia licenciado e um motorista privado com você, e continuamos disponíveis durante toda a viagem. Como em qualquer viagem, recomendamos consultar as orientações de viagem atuais do seu governo antes de reservar e usar o bom senso habitual em multidões e mercados.",
        },
        {
          q: "O Egito é seguro para mulheres que viajam sozinhas?",
          a: "Muitas mulheres viajam pelo Egito por conta própria e em nossos passeios todos os anos e têm uma experiência maravilhosa. Em um passeio organizado com guia e motorista privados, você está acompanhada ao longo do dia, o que elimina a maior parte do incômodo. Vestir-se de forma modesta ajuda em áreas conservadoras, e você pode esperar alguma atenção ou olhares — persistentes, mais do que perigosos. Temos prazer em designar a viajantes sozinhas guias experientes e hotéis confortáveis e bem localizados.",
        },
        {
          q: "Posso beber a água da torneira no Egito?",
          a: "É melhor não beber a água da torneira no Egito — fique com água engarrafada ou filtrada, que é barata e encontrada em todo lugar. Incluímos água engarrafada no carro em cada passeio, e sugerimos evitar gelo e saladas cruas em lugares de que você não confie. Uma garrafa reutilizável com filtro embutido é uma ótima alternativa se preferir não comprar plástico.",
        },
        {
          q: "O que devo vestir no Egito?",
          a: "O Egito é um país de maioria muçulmana, então roupas modestas e leves que cubram ombros e joelhos são ao mesmo tempo respeitosas e frescas no calor. As mulheres podem querer um lenço para visitar mesquitas, e todos devem levar sapatos confortáveis para caminhar, óculos de sol, chapéu e um bom protetor solar para os sítios. As noites em um cruzeiro pelo Nilo podem ser mais frias, então leve uma camada leve.",
        },
      ],
    },
    {
      title: "Pontos turísticos e planejamento",
      items: [
        {
          q: "O Grande Museu Egípcio está aberto e preciso reservar?",
          a: "Sim — o Grande Museu Egípcio (GEM) em Gizé está totalmente aberto, tendo sido inaugurado ao público em novembro de 2025, e agora exibe a coleção completa de Tutancâmon. Os ingressos precisam ser reservados on-line com antecedência para um horário marcado (cerca de 1.450 EGP, aproximadamente US$ 30, para adultos estrangeiros), pois a bilheteria física foi fechada. Reservamos o seu horário no GEM como parte de qualquer passeio pelo Cairo ou Gizé, para você entrar direto.",
        },
        {
          q: "Vocês criam um itinerário personalizado ou sob medida?",
          a: "Com certeza — itinerários sob medida pelo Egito são o que fazemos de melhor. Envie-nos suas datas, orçamento, interesses e quem viaja, e desenhamos um plano realista e confortável em torno disso, do Cairo e das Pirâmides a Luxor, Assuã, Abu Simbel, cruzeiros pelo Nilo e o Mar Vermelho. Você recebe um orçamento claro e detalhado, sem compromisso, e ajustamos até ficar do seu jeito.",
        },
        {
          q: "Com quanta antecedência devo reservar minha viagem ao Egito?",
          a: "Para a alta temporada (de outubro a abril), é melhor reservar com algumas semanas a um par de meses de antecedência, sobretudo para cruzeiros pelo Nilo, Abu Simbel e bons hotéis, que lotam. Viagens sob medida costumam precisar de um pouco de prazo para garantir voos e guias. Dito isso, também organizamos viagens de cima da hora — fale conosco com suas datas e dizemos com honestidade o que ainda está disponível.",
        },
      ],
    },
    {
      title: "Reservar com a Fair Egypt Tours",
      items: [
        {
          q: "O que está incluído nos seus passeios?",
          a: "Cada passeio da Fair Egypt inclui um guia privado licenciado, um carro moderno com ar-condicionado e motorista profissional, embarque e desembarque no hotel, água engarrafada e apoio 24/7. Ingressos, refeições e extras como passeios de camelo ou barco aparecem claramente como opcionais, então você só paga pelo que quer. Seu orçamento detalha tudo isso antes de você se comprometer.",
        },
        {
          q: "Como pago e qual é a política de cancelamento?",
          a: "A maioria das viagens é confirmada com um pequeno depósito de 20 %, e o restante é pago antes ou no próprio dia — em dinheiro ou cartão, em dólares, euros ou libras egípcias. Você pode cancelar gratuitamente até 7 dias antes do seu passeio para receber o reembolso integral do que pagou, menos o depósito; dentro de 7 dias o depósito não é reembolsável, e ausências não são reembolsadas. Sempre confirmamos as condições exatas por escrito antes de você pagar qualquer coisa.",
        },
        {
          q: "Qual a forma mais rápida de falar com vocês?",
          a: "O WhatsApp é a forma mais rápida de nos encontrar — uma pessoa real costuma responder em poucas horas, muitas vezes minutos. Você também pode enviar um pedido de reserva por este site ou nos mandar um e-mail, o que for melhor. Seja qual for o caminho, você vai tratar com a mesma pequena equipe local desde a primeira pergunta até o último traslado.",
        },
      ],
    },
  ],
};

export const faqContent: Record<Locale, FaqPageContent> = { en, es, pt };
