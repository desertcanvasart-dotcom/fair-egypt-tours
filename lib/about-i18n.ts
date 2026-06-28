// Spanish & Portuguese translations of the About-page content (data layer).
// English stays editable from the dashboard; these overlay for es/pt.
import type { AboutContent } from "./page-content";
import { homeTranslations } from "./home-i18n";

const STORY_IMG =
  "https://images.unsplash.com/photo-1572252009286-268acec5ca0a?auto=format&fit=crop&w=1000&q=80";

const es: AboutContent = {
  hero: {
    kicker: "Quiénes somos",
    titleLead: "Asequible no tiene por qué significar",
    titleEm: "descuidado.",
    subtitle:
      "Somos un equipo local, con base en Egipto, que cree que un precio justo también merece un trato de verdad — lo que nos diferencia tanto de los operadores baratos como de las agencias de lujo sobrevaloradas.",
  },
  story: {
    paras: [
      "Fair Egypt Tours nació de una frustración sencilla: los viajeros se veían obligados a elegir entre viajes baratos que se sentían descuidados y agencias de lujo que cobraban una fortuna por los mismos lugares. Sabíamos que existía un punto medio mejor y más justo.",
      "Así que lo creamos. Un equipo local, precios detallados y transparentes, guías con licencia, transporte privado con aire acondicionado y atención humana real desde el primer mensaje hasta el último traslado. Precios más bajos nunca deberían significar mala comunicación, tours apresurados o costes ocultos.",
    ],
    image: STORY_IMG,
  },
  stats: homeTranslations.es.stats,
  values: [
    { title: "Somos locales", text: "Con base en Egipto, conocemos las rutas, los horarios, los guías, el tráfico y la comodidad que hacen que un viaje funcione." },
    { title: "Somos honestos", text: "Explicamos qué está incluido, qué es opcional y qué podría cambiar el precio — antes de que te comprometas." },
    { title: "Somos responsables", text: "Viajar de forma justa significa un trato justo para huéspedes, guías, conductores, proveedores y comunidades locales." },
    { title: "Cuidamos la calidad", text: "Asequible no significa descuidado. La comunicación, la puntualidad, la limpieza y el apoyo siguen importando." },
  ],
};

const pt: AboutContent = {
  hero: {
    kicker: "Quem somos",
    titleLead: "Acessível não precisa significar",
    titleEm: "descuidado.",
    subtitle:
      "Somos uma equipe local, baseada no Egito, que acredita que um preço justo também merece cuidado de verdade — o que nos diferencia tanto dos operadores baratos quanto das agências de luxo supervalorizadas.",
  },
  story: {
    paras: [
      "A Fair Egypt Tours começou com uma frustração simples: os viajantes eram obrigados a escolher entre viagens baratas que pareciam descuidadas e agências de luxo que cobravam uma fortuna pelos mesmos lugares. Sabíamos que havia um meio-termo melhor e mais justo.",
      "Então o criamos. Uma equipe local, preços detalhados e transparentes, guias licenciados, transporte privado com ar-condicionado e apoio humano de verdade, da primeira mensagem ao último traslado. Preços mais baixos nunca deveriam significar má comunicação, passeios corridos ou custos ocultos.",
    ],
    image: STORY_IMG,
  },
  stats: homeTranslations.pt.stats,
  values: [
    { title: "Somos locais", text: "Baseados no Egito, conhecemos as rotas, os horários, os guias, o trânsito e o conforto que fazem uma viagem dar certo." },
    { title: "Somos honestos", text: "Explicamos o que está incluído, o que é opcional e o que pode mudar o preço — antes de você se comprometer." },
    { title: "Somos responsáveis", text: "Viajar de forma justa significa tratamento justo para hóspedes, guias, motoristas, fornecedores e comunidades locais." },
    { title: "Entregamos qualidade", text: "Acessível não significa descuidado. Comunicação, pontualidade, limpeza e apoio continuam importando." },
  ],
};

export const aboutTranslations: Record<"es" | "pt", AboutContent> = { es, pt };
