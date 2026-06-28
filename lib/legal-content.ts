// Legal pages — Privacy Policy, Terms & Conditions, Cookie Policy.
// Trading name "Fair Egypt Tours" with [LEGAL NAME] / [ADDRESS] / [REG. NO.]
// placeholders to be filled in. English, Spanish & Portuguese.
import type { Locale } from "./i18n";

export type LegalSection = { heading: string; paras?: string[]; bullets?: string[] };
export type LegalDoc = {
  slug: "privacy" | "terms" | "cookies";
  crumb: string;
  metaTitle: string;
  metaDescription: string;
  heroKicker: string;
  heroTitle: string;
  updated: string;
  intro: string;
  sections: LegalSection[];
};
export type LegalContent = { privacy: LegalDoc; terms: LegalDoc; cookies: LegalDoc };

const UPDATED = { en: "Last updated: 27 June 2026", es: "Última actualización: 27 de junio de 2026", pt: "Última atualização: 27 de junho de 2026" };

/* ───────────────────────────── English ───────────────────────────── */
const en: LegalContent = {
  privacy: {
    slug: "privacy",
    crumb: "Privacy Policy",
    metaTitle: "Privacy Policy",
    metaDescription:
      "How Fair Egypt Tours collects, uses, and protects your personal information when you enquire, book, or browse our website.",
    heroKicker: "Legal",
    heroTitle: "Privacy Policy",
    updated: UPDATED.en,
    intro:
      "This Privacy Policy explains how Fair Egypt Tours (“we”, “us”, “our”) collects, uses, and protects your personal information when you contact us, request a quote, make a booking, or browse this website. We only collect what we need to plan your trip and reply to you, and we never sell your data.",
    sections: [
      { heading: "Who we are", paras: ["Fair Egypt Tours is a local, Egypt-based tour operator trading as “Fair Egypt Tours”. The legal entity responsible for your data is [LEGAL NAME], registered at [ADDRESS], registration number [REG. NO.]. You can reach us at any time using the WhatsApp number or email address shown in this website's footer."] },
      { heading: "Information we collect", paras: ["We collect information you give us directly and a limited amount of technical information collected automatically."], bullets: ["Information you provide: your name, email address, phone or WhatsApp number, travel dates, party size, destinations and interests, and anything you include in your messages.", "Booking details: the tour or itinerary you request and any preferences or special requirements you share with us.", "Technical information: your device type, browser, approximate location (from your IP address), and how you use the site, collected through cookies and similar technologies."] },
      { heading: "How we use your information", paras: ["We use your information to:"], bullets: ["Reply to your enquiries and provide a clear, itemised quote.", "Plan, confirm and deliver your booking, including arranging guides, drivers, hotels and transport.", "Keep in touch about your trip before, during and after travel.", "Improve our website and services.", "Send you travel ideas or offers, only if you have asked us to.", "Meet our legal and accounting obligations."] },
      { heading: "Who we share it with", paras: ["To deliver your trip, we share only the details necessary with the local suppliers involved — such as your guide, driver, hotel or cruise operator. We also use trusted service providers (for example website hosting, analytics and messaging platforms) who process data on our behalf. We may disclose information where required by law. We never sell your personal information."] },
      { heading: "International transfers", paras: ["Your information may be processed in Egypt and in other countries where our service providers operate. Wherever it is processed, we take reasonable steps to keep it protected and handled in line with this policy."] },
      { heading: "How long we keep it", paras: ["We keep your information only as long as needed to answer your enquiry, deliver your trip, and meet legal or accounting requirements. After that, we delete or anonymise it."] },
      { heading: "Your rights", paras: ["Depending on where you live, you may have the right to access, correct, delete, or restrict the use of your personal information, to object to certain processing, and to withdraw consent for marketing at any time. To exercise any of these rights, contact us using the details in the footer and we will respond promptly."] },
      { heading: "Cookies", paras: ["This website uses cookies and similar technologies. You can read more in our Cookie Policy and control them through your browser settings."] },
      { heading: "Security", paras: ["We take reasonable technical and organisational measures to protect your information. No method of transmission over the internet is completely secure, but we work to keep your data safe."] },
      { heading: "Children", paras: ["This website is intended for adults. We do not knowingly collect personal information from children. Bookings that include children are made by the responsible adult travelling with them."] },
      { heading: "Changes to this policy", paras: ["We may update this Privacy Policy from time to time. The “last updated” date above shows the latest version, and significant changes will be reflected on this page."] },
      { heading: "Contact us", paras: ["If you have any questions about this policy or your data, contact us via the WhatsApp number or email address in this website's footer."] },
    ],
  },
  terms: {
    slug: "terms",
    crumb: "Terms & Conditions",
    metaTitle: "Terms & Conditions",
    metaDescription:
      "The terms that apply when you use the Fair Egypt Tours website and book a tour, including pricing, payment, deposits, cancellations and refunds.",
    heroKicker: "Legal",
    heroTitle: "Terms & Conditions",
    updated: UPDATED.en,
    intro:
      "These Terms & Conditions apply when you use this website and when you book a tour or custom itinerary with Fair Egypt Tours. Please read them carefully — by making a booking you agree to them. We will always confirm the specific details of your trip in writing before you pay anything.",
    sections: [
      { heading: "About these terms", paras: ["This website and the tours described on it are operated by Fair Egypt Tours, trading name of [LEGAL NAME], registered at [ADDRESS], registration number [REG. NO.]. In these terms, “we” and “us” means Fair Egypt Tours, and “you” means the person making the booking on behalf of everyone travelling."] },
      { heading: "Quotes and bookings", paras: ["Prices shown on the website are starting points. When you enquire, we send you a clear, itemised quote based on your dates, party size and choices. A quote is not a confirmed booking. Your booking is confirmed only once we have agreed the details in writing and received your deposit."] },
      { heading: "Prices and payment", paras: ["Every quote spells out what is included and what is optional. Most trips are confirmed with a deposit of 20% of the total, with the balance due on or before the day of the tour. You can pay by cash or card, in US dollars, euros or Egyptian pounds, as agreed. Optional extras (such as entry tickets, meals or activities) are charged only if you choose them."] },
      { heading: "Cancellations and refunds", paras: ["If you need to cancel, the following applies unless we have agreed different terms in writing for your trip:"], bullets: ["Cancel 7 or more days before the tour: full refund of any amounts paid, minus the 20% deposit.", "Cancel less than 7 days before the tour: the 20% deposit is non-refundable; any further amounts paid are refunded.", "No-show on the day: no refund.", "Multi-day packages with pre-paid hotels, cruises or flights may carry supplier terms we will explain in writing before you book."] },
      { heading: "Changes by you", paras: ["We will always try to accommodate changes to dates, timings or party size. We will let you know if a change affects the price or availability before confirming it."] },
      { heading: "Changes or cancellation by us", paras: ["Very occasionally we may need to change or cancel a tour for reasons beyond our control — such as weather, safety, site closures or other force majeure events. If that happens, we will offer you a reasonable alternative or a refund of amounts paid for the affected services. We are not liable for incidental costs such as flights or hotels booked separately."] },
      { heading: "Passports, visas, health and insurance", paras: ["You are responsible for holding a valid passport, the correct Egyptian visa, and any vaccinations or health requirements for your trip. We are glad to advise, but the responsibility rests with the traveller. We strongly recommend comprehensive travel insurance covering medical care, cancellation and your belongings."] },
      { heading: "Your conduct", paras: ["We ask that you treat guides, drivers, suppliers, sites and other travellers with respect, follow reasonable safety instructions, and respect local laws and customs. We may end a tour without refund if conduct puts the safety or enjoyment of others at risk."] },
      { heading: "Our responsibility", paras: ["We take reasonable care to plan and deliver your trip well and to work with trusted local suppliers. We are not liable for indirect or consequential losses, or for events outside our reasonable control. Nothing in these terms limits any liability that cannot be limited under applicable law."] },
      { heading: "Intellectual property", paras: ["The content of this website — text, images, design and branding — belongs to Fair Egypt Tours or its licensors and may not be copied or reused without permission."] },
      { heading: "Governing law", paras: ["These terms are governed by the laws of the Arab Republic of Egypt, and any disputes will be subject to the jurisdiction of the courts of [JURISDICTION], unless local law gives you other rights."] },
      { heading: "Contact us", paras: ["Questions about these terms or your booking? Contact us via the WhatsApp number or email address in this website's footer."] },
    ],
  },
  cookies: {
    slug: "cookies",
    crumb: "Cookie Policy",
    metaTitle: "Cookie Policy",
    metaDescription:
      "How and why Fair Egypt Tours uses cookies and similar technologies on this website, and how you can control them.",
    heroKicker: "Legal",
    heroTitle: "Cookie Policy",
    updated: UPDATED.en,
    intro:
      "This Cookie Policy explains how Fair Egypt Tours uses cookies and similar technologies on this website, the types we use, and how you can control them.",
    sections: [
      { heading: "What are cookies?", paras: ["Cookies are small text files placed on your device when you visit a website. They help the site work properly, remember your preferences, and understand how the site is used. Similar technologies such as local storage work in much the same way."] },
      { heading: "How we use cookies", paras: ["We keep our use of cookies modest. We use them to:"], bullets: ["Make the website work and keep it secure (essential cookies).", "Remember your preferences, such as your chosen language (English, Spanish or Portuguese).", "Understand how visitors use the site so we can improve it (analytics, in aggregate).", "Where used, measure the performance of any advertising — only with your consent where required."] },
      { heading: "Types of cookies we use", bullets: ["Essential: needed for the site to function and cannot be switched off.", "Preference: remember choices like language so your experience is consistent.", "Analytics: help us see which pages are useful, usually through privacy-respecting, aggregated data.", "Marketing: set only if you consent, to measure campaigns."] },
      { heading: "Managing cookies", paras: ["You can control or delete cookies through your browser settings, and set most browsers to block them. Blocking essential cookies may stop parts of the site from working. Where consent is required, you can change your choice at any time."] },
      { heading: "Third-party cookies", paras: ["Some cookies may be set by trusted third parties we use, such as analytics or messaging providers. Their use of data is governed by their own privacy policies."] },
      { heading: "Changes to this policy", paras: ["We may update this Cookie Policy as our website changes. The “last updated” date above shows the latest version."] },
      { heading: "Contact us", paras: ["Any questions about cookies? Contact us via the WhatsApp number or email address in this website's footer."] },
    ],
  },
};

/* ───────────────────────────── Spanish ───────────────────────────── */
const es: LegalContent = {
  privacy: {
    slug: "privacy",
    crumb: "Política de privacidad",
    metaTitle: "Política de privacidad",
    metaDescription:
      "Cómo Fair Egypt Tours recopila, usa y protege tu información personal cuando consultas, reservas o navegas por nuestra web.",
    heroKicker: "Legal",
    heroTitle: "Política de privacidad",
    updated: UPDATED.es,
    intro:
      "Esta Política de privacidad explica cómo Fair Egypt Tours («nosotros») recopila, usa y protege tu información personal cuando nos contactas, pides un presupuesto, haces una reserva o navegas por esta web. Solo recopilamos lo necesario para planificar tu viaje y responderte, y nunca vendemos tus datos.",
    sections: [
      { heading: "Quiénes somos", paras: ["Fair Egypt Tours es un operador turístico local, con base en Egipto, que opera bajo el nombre comercial «Fair Egypt Tours». La entidad legal responsable de tus datos es [LEGAL NAME], con domicilio en [ADDRESS] y número de registro [REG. NO.]. Puedes contactarnos en cualquier momento mediante el número de WhatsApp o el correo electrónico que aparecen en el pie de página de esta web."] },
      { heading: "Información que recopilamos", paras: ["Recopilamos información que nos facilitas directamente y una cantidad limitada de información técnica recogida automáticamente."], bullets: ["Información que facilitas: tu nombre, correo electrónico, número de teléfono o WhatsApp, fechas de viaje, número de personas, destinos e intereses, y todo lo que incluyas en tus mensajes.", "Datos de la reserva: el tour o itinerario que solicitas y cualquier preferencia o necesidad especial que nos compartas.", "Información técnica: tu tipo de dispositivo, navegador, ubicación aproximada (a partir de tu dirección IP) y cómo usas el sitio, recogida mediante cookies y tecnologías similares."] },
      { heading: "Cómo usamos tu información", paras: ["Usamos tu información para:"], bullets: ["Responder a tus consultas y ofrecerte un presupuesto claro y detallado.", "Planificar, confirmar y prestar tu reserva, incluida la organización de guías, conductores, hoteles y transporte.", "Mantenernos en contacto sobre tu viaje antes, durante y después.", "Mejorar nuestra web y nuestros servicios.", "Enviarte ideas de viaje u ofertas, solo si nos lo has pedido.", "Cumplir nuestras obligaciones legales y contables."] },
      { heading: "Con quién la compartimos", paras: ["Para prestar tu viaje, compartimos solo los datos necesarios con los proveedores locales implicados —como tu guía, conductor, hotel u operador de crucero—. También usamos proveedores de servicios de confianza (por ejemplo, alojamiento web, analítica y plataformas de mensajería) que tratan datos en nuestro nombre. Podemos divulgar información cuando lo exija la ley. Nunca vendemos tu información personal."] },
      { heading: "Transferencias internacionales", paras: ["Tu información puede tratarse en Egipto y en otros países donde operan nuestros proveedores de servicios. Dondequiera que se trate, adoptamos medidas razonables para mantenerla protegida y gestionada conforme a esta política."] },
      { heading: "Cuánto tiempo la conservamos", paras: ["Conservamos tu información solo el tiempo necesario para responder a tu consulta, prestar tu viaje y cumplir requisitos legales o contables. Después, la eliminamos o la anonimizamos."] },
      { heading: "Tus derechos", paras: ["Según donde residas, puedes tener derecho a acceder, corregir, eliminar o restringir el uso de tu información personal, a oponerte a ciertos tratamientos y a retirar el consentimiento para marketing en cualquier momento. Para ejercer cualquiera de estos derechos, contáctanos con los datos del pie de página y te responderemos sin demora."] },
      { heading: "Cookies", paras: ["Esta web usa cookies y tecnologías similares. Puedes leer más en nuestra Política de cookies y controlarlas desde la configuración de tu navegador."] },
      { heading: "Seguridad", paras: ["Adoptamos medidas técnicas y organizativas razonables para proteger tu información. Ningún método de transmisión por internet es completamente seguro, pero trabajamos para mantener tus datos a salvo."] },
      { heading: "Menores", paras: ["Esta web está dirigida a adultos. No recopilamos conscientemente información personal de menores. Las reservas que incluyen menores las realiza el adulto responsable que viaja con ellos."] },
      { heading: "Cambios en esta política", paras: ["Podemos actualizar esta Política de privacidad de vez en cuando. La fecha de «última actualización» de arriba indica la versión más reciente, y los cambios importantes se reflejarán en esta página."] },
      { heading: "Contacto", paras: ["Si tienes preguntas sobre esta política o tus datos, contáctanos mediante el número de WhatsApp o el correo electrónico del pie de página de esta web."] },
    ],
  },
  terms: {
    slug: "terms",
    crumb: "Términos y condiciones",
    metaTitle: "Términos y condiciones",
    metaDescription:
      "Los términos que se aplican al usar la web de Fair Egypt Tours y reservar un tour, incluidos precios, pago, depósitos, cancelaciones y reembolsos.",
    heroKicker: "Legal",
    heroTitle: "Términos y condiciones",
    updated: UPDATED.es,
    intro:
      "Estos Términos y condiciones se aplican cuando usas esta web y cuando reservas un tour o itinerario a medida con Fair Egypt Tours. Léelos con atención: al hacer una reserva los aceptas. Siempre confirmaremos los detalles concretos de tu viaje por escrito antes de que pagues nada.",
    sections: [
      { heading: "Sobre estos términos", paras: ["Esta web y los tours que se describen en ella son operados por Fair Egypt Tours, nombre comercial de [LEGAL NAME], con domicilio en [ADDRESS] y número de registro [REG. NO.]. En estos términos, «nosotros» significa Fair Egypt Tours, y «tú» significa la persona que hace la reserva en nombre de todos los viajeros."] },
      { heading: "Presupuestos y reservas", paras: ["Los precios que aparecen en la web son puntos de partida. Cuando consultas, te enviamos un presupuesto claro y detallado según tus fechas, número de personas y elecciones. Un presupuesto no es una reserva confirmada. Tu reserva se confirma solo cuando hemos acordado los detalles por escrito y hemos recibido tu depósito."] },
      { heading: "Precios y pago", paras: ["Cada presupuesto detalla qué está incluido y qué es opcional. La mayoría de los viajes se confirman con un depósito del 20 % del total, y el resto se abona el día del tour o antes. Puedes pagar en efectivo o con tarjeta, en dólares, euros o libras egipcias, según lo acordado. Los extras opcionales (como entradas, comidas o actividades) se cobran solo si los eliges."] },
      { heading: "Cancelaciones y reembolsos", paras: ["Si necesitas cancelar, se aplica lo siguiente salvo que hayamos acordado otras condiciones por escrito para tu viaje:"], bullets: ["Cancelar 7 días o más antes del tour: reembolso completo de lo pagado, menos el depósito del 20 %.", "Cancelar con menos de 7 días: el depósito del 20 % no es reembolsable; el resto de lo pagado se reembolsa.", "Ausencia el día del tour: sin reembolso.", "Los paquetes de varios días con hoteles, cruceros o vuelos pagados por adelantado pueden tener condiciones del proveedor que te explicaremos por escrito antes de reservar."] },
      { heading: "Cambios por tu parte", paras: ["Siempre intentaremos adaptar cambios de fechas, horarios o número de personas. Te avisaremos si un cambio afecta al precio o la disponibilidad antes de confirmarlo."] },
      { heading: "Cambios o cancelación por nuestra parte", paras: ["Muy de vez en cuando podemos tener que cambiar o cancelar un tour por motivos ajenos a nuestro control —como el clima, la seguridad, cierres de sitios u otros casos de fuerza mayor—. Si ocurre, te ofreceremos una alternativa razonable o el reembolso de lo pagado por los servicios afectados. No somos responsables de costes accesorios como vuelos u hoteles reservados por separado."] },
      { heading: "Pasaportes, visados, salud y seguro", paras: ["Eres responsable de tener un pasaporte válido, el visado egipcio correcto y las vacunas o requisitos de salud para tu viaje. Con gusto te asesoramos, pero la responsabilidad recae en el viajero. Recomendamos encarecidamente un seguro de viaje completo que cubra asistencia médica, cancelación y tus pertenencias."] },
      { heading: "Tu conducta", paras: ["Te pedimos que trates con respeto a guías, conductores, proveedores, sitios y otros viajeros, que sigas las instrucciones razonables de seguridad y que respetes las leyes y costumbres locales. Podemos finalizar un tour sin reembolso si la conducta pone en riesgo la seguridad o el disfrute de los demás."] },
      { heading: "Nuestra responsabilidad", paras: ["Ponemos un cuidado razonable en planificar y prestar bien tu viaje y en trabajar con proveedores locales de confianza. No somos responsables de pérdidas indirectas o derivadas, ni de hechos fuera de nuestro control razonable. Nada en estos términos limita una responsabilidad que no pueda limitarse según la ley aplicable."] },
      { heading: "Propiedad intelectual", paras: ["El contenido de esta web —textos, imágenes, diseño y marca— pertenece a Fair Egypt Tours o a sus licenciantes y no puede copiarse ni reutilizarse sin permiso."] },
      { heading: "Ley aplicable", paras: ["Estos términos se rigen por las leyes de la República Árabe de Egipto, y cualquier disputa estará sujeta a la jurisdicción de los tribunales de [JURISDICTION], salvo que la ley local te otorgue otros derechos."] },
      { heading: "Contacto", paras: ["¿Preguntas sobre estos términos o tu reserva? Contáctanos mediante el número de WhatsApp o el correo electrónico del pie de página de esta web."] },
    ],
  },
  cookies: {
    slug: "cookies",
    crumb: "Política de cookies",
    metaTitle: "Política de cookies",
    metaDescription:
      "Cómo y por qué Fair Egypt Tours usa cookies y tecnologías similares en esta web, y cómo puedes controlarlas.",
    heroKicker: "Legal",
    heroTitle: "Política de cookies",
    updated: UPDATED.es,
    intro:
      "Esta Política de cookies explica cómo Fair Egypt Tours usa cookies y tecnologías similares en esta web, los tipos que usamos y cómo puedes controlarlas.",
    sections: [
      { heading: "¿Qué son las cookies?", paras: ["Las cookies son pequeños archivos de texto que se guardan en tu dispositivo cuando visitas una web. Ayudan a que el sitio funcione correctamente, recuerdan tus preferencias y permiten entender cómo se usa. Tecnologías similares, como el almacenamiento local, funcionan de forma muy parecida."] },
      { heading: "Cómo usamos las cookies", paras: ["Mantenemos un uso moderado de las cookies. Las usamos para:"], bullets: ["Hacer que la web funcione y mantenerla segura (cookies esenciales).", "Recordar tus preferencias, como el idioma elegido (inglés, español o portugués).", "Entender cómo usan el sitio los visitantes para poder mejorarlo (analítica, de forma agregada).", "Cuando se usen, medir el rendimiento de cualquier publicidad, solo con tu consentimiento cuando sea necesario."] },
      { heading: "Tipos de cookies que usamos", bullets: ["Esenciales: necesarias para que el sitio funcione; no se pueden desactivar.", "De preferencia: recuerdan elecciones como el idioma para que tu experiencia sea coherente.", "Analíticas: nos ayudan a ver qué páginas son útiles, normalmente mediante datos agregados que respetan la privacidad.", "De marketing: se activan solo si das tu consentimiento, para medir campañas."] },
      { heading: "Gestionar las cookies", paras: ["Puedes controlar o eliminar las cookies desde la configuración de tu navegador, y configurar la mayoría de navegadores para bloquearlas. Bloquear las cookies esenciales puede impedir que partes del sitio funcionen. Cuando se requiera consentimiento, puedes cambiar tu elección en cualquier momento."] },
      { heading: "Cookies de terceros", paras: ["Algunas cookies pueden ser establecidas por terceros de confianza que usamos, como proveedores de analítica o mensajería. Su uso de los datos se rige por sus propias políticas de privacidad."] },
      { heading: "Cambios en esta política", paras: ["Podemos actualizar esta Política de cookies a medida que cambia nuestra web. La fecha de «última actualización» de arriba indica la versión más reciente."] },
      { heading: "Contacto", paras: ["¿Alguna pregunta sobre las cookies? Contáctanos mediante el número de WhatsApp o el correo electrónico del pie de página de esta web."] },
    ],
  },
};

/* ──────────────────────────── Portuguese ──────────────────────────── */
const pt: LegalContent = {
  privacy: {
    slug: "privacy",
    crumb: "Política de privacidade",
    metaTitle: "Política de privacidade",
    metaDescription:
      "Como a Fair Egypt Tours coleta, usa e protege suas informações pessoais quando você consulta, reserva ou navega no nosso site.",
    heroKicker: "Legal",
    heroTitle: "Política de privacidade",
    updated: UPDATED.pt,
    intro:
      "Esta Política de privacidade explica como a Fair Egypt Tours («nós») coleta, usa e protege suas informações pessoais quando você nos contata, pede um orçamento, faz uma reserva ou navega neste site. Coletamos apenas o necessário para planejar sua viagem e responder a você, e nunca vendemos seus dados.",
    sections: [
      { heading: "Quem somos", paras: ["A Fair Egypt Tours é uma operadora de turismo local, baseada no Egito, que atua sob o nome comercial «Fair Egypt Tours». A entidade legal responsável pelos seus dados é a [LEGAL NAME], com sede em [ADDRESS] e número de registro [REG. NO.]. Você pode nos contatar a qualquer momento pelo número de WhatsApp ou e-mail informados no rodapé deste site."] },
      { heading: "Informações que coletamos", paras: ["Coletamos informações que você nos fornece diretamente e uma quantidade limitada de informações técnicas coletadas automaticamente."], bullets: ["Informações que você fornece: seu nome, e-mail, número de telefone ou WhatsApp, datas de viagem, número de pessoas, destinos e interesses, e tudo o que incluir em suas mensagens.", "Detalhes da reserva: o passeio ou itinerário que você solicita e quaisquer preferências ou necessidades especiais que compartilhar conosco.", "Informações técnicas: o tipo de dispositivo, navegador, localização aproximada (a partir do seu endereço IP) e como você usa o site, coletadas por meio de cookies e tecnologias semelhantes."] },
      { heading: "Como usamos suas informações", paras: ["Usamos suas informações para:"], bullets: ["Responder às suas consultas e fornecer um orçamento claro e detalhado.", "Planejar, confirmar e realizar sua reserva, incluindo a organização de guias, motoristas, hotéis e transporte.", "Manter contato sobre sua viagem antes, durante e depois.", "Melhorar nosso site e nossos serviços.", "Enviar ideias de viagem ou ofertas, apenas se você tiver pedido.", "Cumprir nossas obrigações legais e contábeis."] },
      { heading: "Com quem compartilhamos", paras: ["Para realizar sua viagem, compartilhamos apenas os dados necessários com os fornecedores locais envolvidos — como seu guia, motorista, hotel ou operadora de cruzeiro. Também usamos prestadores de serviços de confiança (por exemplo, hospedagem do site, análise e plataformas de mensagens) que tratam dados em nosso nome. Podemos divulgar informações quando exigido por lei. Nunca vendemos suas informações pessoais."] },
      { heading: "Transferências internacionais", paras: ["Suas informações podem ser tratadas no Egito e em outros países onde nossos prestadores de serviços operam. Onde quer que sejam tratadas, adotamos medidas razoáveis para mantê-las protegidas e geridas de acordo com esta política."] },
      { heading: "Por quanto tempo guardamos", paras: ["Guardamos suas informações apenas pelo tempo necessário para responder à sua consulta, realizar sua viagem e cumprir exigências legais ou contábeis. Depois disso, nós as excluímos ou anonimizamos."] },
      { heading: "Seus direitos", paras: ["Dependendo de onde você mora, pode ter o direito de acessar, corrigir, excluir ou restringir o uso de suas informações pessoais, de se opor a certos tratamentos e de retirar o consentimento para marketing a qualquer momento. Para exercer qualquer desses direitos, contate-nos pelos dados no rodapé e responderemos prontamente."] },
      { heading: "Cookies", paras: ["Este site usa cookies e tecnologias semelhantes. Você pode ler mais na nossa Política de cookies e controlá-los pelas configurações do seu navegador."] },
      { heading: "Segurança", paras: ["Adotamos medidas técnicas e organizacionais razoáveis para proteger suas informações. Nenhum método de transmissão pela internet é completamente seguro, mas trabalhamos para manter seus dados protegidos."] },
      { heading: "Crianças", paras: ["Este site destina-se a adultos. Não coletamos conscientemente informações pessoais de crianças. Reservas que incluem crianças são feitas pelo adulto responsável que viaja com elas."] },
      { heading: "Alterações nesta política", paras: ["Podemos atualizar esta Política de privacidade de tempos em tempos. A data de «última atualização» acima mostra a versão mais recente, e mudanças importantes serão refletidas nesta página."] },
      { heading: "Fale conosco", paras: ["Se tiver dúvidas sobre esta política ou seus dados, contate-nos pelo número de WhatsApp ou e-mail no rodapé deste site."] },
    ],
  },
  terms: {
    slug: "terms",
    crumb: "Termos e condições",
    metaTitle: "Termos e condições",
    metaDescription:
      "Os termos que se aplicam ao usar o site da Fair Egypt Tours e reservar um passeio, incluindo preços, pagamento, depósitos, cancelamentos e reembolsos.",
    heroKicker: "Legal",
    heroTitle: "Termos e condições",
    updated: UPDATED.pt,
    intro:
      "Estes Termos e condições se aplicam quando você usa este site e quando reserva um passeio ou itinerário sob medida com a Fair Egypt Tours. Leia com atenção: ao fazer uma reserva, você os aceita. Sempre confirmaremos os detalhes específicos da sua viagem por escrito antes de você pagar qualquer coisa.",
    sections: [
      { heading: "Sobre estes termos", paras: ["Este site e os passeios nele descritos são operados pela Fair Egypt Tours, nome comercial da [LEGAL NAME], com sede em [ADDRESS] e número de registro [REG. NO.]. Nestes termos, «nós» significa Fair Egypt Tours, e «você» significa a pessoa que faz a reserva em nome de todos os viajantes."] },
      { heading: "Orçamentos e reservas", paras: ["Os preços exibidos no site são pontos de partida. Quando você consulta, enviamos um orçamento claro e detalhado com base nas suas datas, número de pessoas e escolhas. Um orçamento não é uma reserva confirmada. Sua reserva é confirmada apenas quando combinamos os detalhes por escrito e recebemos seu depósito."] },
      { heading: "Preços e pagamento", paras: ["Cada orçamento detalha o que está incluído e o que é opcional. A maioria das viagens é confirmada com um depósito de 20 % do total, e o restante é pago no dia do passeio ou antes. Você pode pagar em dinheiro ou cartão, em dólares, euros ou libras egípcias, conforme combinado. Extras opcionais (como ingressos, refeições ou atividades) são cobrados apenas se você os escolher."] },
      { heading: "Cancelamentos e reembolsos", paras: ["Se precisar cancelar, aplica-se o seguinte, salvo se tivermos combinado condições diferentes por escrito para a sua viagem:"], bullets: ["Cancelar 7 dias ou mais antes do passeio: reembolso integral dos valores pagos, menos o depósito de 20 %.", "Cancelar com menos de 7 dias: o depósito de 20 % não é reembolsável; os demais valores pagos são reembolsados.", "Ausência no dia: sem reembolso.", "Pacotes de vários dias com hotéis, cruzeiros ou voos pré-pagos podem ter condições do fornecedor que explicaremos por escrito antes de você reservar."] },
      { heading: "Alterações por você", paras: ["Sempre tentaremos acomodar mudanças de datas, horários ou número de pessoas. Avisaremos se uma mudança afetar o preço ou a disponibilidade antes de confirmá-la."] },
      { heading: "Alterações ou cancelamento por nós", paras: ["Muito ocasionalmente, podemos precisar mudar ou cancelar um passeio por motivos fora do nosso controle — como clima, segurança, fechamento de sítios ou outros eventos de força maior. Se isso acontecer, ofereceremos uma alternativa razoável ou o reembolso dos valores pagos pelos serviços afetados. Não somos responsáveis por custos acessórios, como voos ou hotéis reservados separadamente."] },
      { heading: "Passaportes, vistos, saúde e seguro", paras: ["Você é responsável por ter um passaporte válido, o visto egípcio correto e quaisquer vacinas ou exigências de saúde para a sua viagem. Temos prazer em orientar, mas a responsabilidade é do viajante. Recomendamos fortemente um seguro de viagem abrangente, que cubra assistência médica, cancelamento e seus pertences."] },
      { heading: "Sua conduta", paras: ["Pedimos que você trate guias, motoristas, fornecedores, sítios e outros viajantes com respeito, siga as instruções de segurança razoáveis e respeite as leis e costumes locais. Podemos encerrar um passeio sem reembolso se a conduta colocar em risco a segurança ou o bem-estar dos demais."] },
      { heading: "Nossa responsabilidade", paras: ["Temos cuidado razoável ao planejar e realizar bem sua viagem e ao trabalhar com fornecedores locais de confiança. Não somos responsáveis por perdas indiretas ou consequentes, nem por eventos fora do nosso controle razoável. Nada nestes termos limita qualquer responsabilidade que não possa ser limitada pela lei aplicável."] },
      { heading: "Propriedade intelectual", paras: ["O conteúdo deste site — textos, imagens, design e marca — pertence à Fair Egypt Tours ou aos seus licenciadores e não pode ser copiado ou reutilizado sem permissão."] },
      { heading: "Lei aplicável", paras: ["Estes termos são regidos pelas leis da República Árabe do Egito, e quaisquer disputas estarão sujeitas à jurisdição dos tribunais de [JURISDICTION], salvo se a lei local lhe conceder outros direitos."] },
      { heading: "Fale conosco", paras: ["Dúvidas sobre estes termos ou sua reserva? Contate-nos pelo número de WhatsApp ou e-mail no rodapé deste site."] },
    ],
  },
  cookies: {
    slug: "cookies",
    crumb: "Política de cookies",
    metaTitle: "Política de cookies",
    metaDescription:
      "Como e por que a Fair Egypt Tours usa cookies e tecnologias semelhantes neste site, e como você pode controlá-los.",
    heroKicker: "Legal",
    heroTitle: "Política de cookies",
    updated: UPDATED.pt,
    intro:
      "Esta Política de cookies explica como a Fair Egypt Tours usa cookies e tecnologias semelhantes neste site, os tipos que usamos e como você pode controlá-los.",
    sections: [
      { heading: "O que são cookies?", paras: ["Cookies são pequenos arquivos de texto colocados no seu dispositivo quando você visita um site. Eles ajudam o site a funcionar corretamente, lembram suas preferências e permitem entender como o site é usado. Tecnologias semelhantes, como o armazenamento local, funcionam de forma muito parecida."] },
      { heading: "Como usamos cookies", paras: ["Mantemos um uso modesto de cookies. Nós os usamos para:"], bullets: ["Fazer o site funcionar e mantê-lo seguro (cookies essenciais).", "Lembrar suas preferências, como o idioma escolhido (inglês, espanhol ou português).", "Entender como os visitantes usam o site para podermos melhorá-lo (análise, de forma agregada).", "Quando usados, medir o desempenho de qualquer publicidade — apenas com o seu consentimento, quando exigido."] },
      { heading: "Tipos de cookies que usamos", bullets: ["Essenciais: necessários para o site funcionar e não podem ser desativados.", "De preferência: lembram escolhas como o idioma para que sua experiência seja consistente.", "De análise: ajudam a ver quais páginas são úteis, geralmente por meio de dados agregados que respeitam a privacidade.", "De marketing: definidos apenas se você consentir, para medir campanhas."] },
      { heading: "Gerenciar cookies", paras: ["Você pode controlar ou excluir cookies pelas configurações do seu navegador e configurar a maioria dos navegadores para bloqueá-los. Bloquear cookies essenciais pode impedir que partes do site funcionem. Quando o consentimento for exigido, você pode mudar sua escolha a qualquer momento."] },
      { heading: "Cookies de terceiros", paras: ["Alguns cookies podem ser definidos por terceiros de confiança que usamos, como provedores de análise ou mensagens. O uso de dados por eles é regido por suas próprias políticas de privacidade."] },
      { heading: "Alterações nesta política", paras: ["Podemos atualizar esta Política de cookies à medida que nosso site muda. A data de «última atualização» acima mostra a versão mais recente."] },
      { heading: "Fale conosco", paras: ["Alguma dúvida sobre cookies? Contate-nos pelo número de WhatsApp ou e-mail no rodapé deste site."] },
    ],
  },
};

export const legalContent: Record<Locale, LegalContent> = { en, es, pt };
