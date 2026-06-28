import type { Destination } from "./destinations";
import type { Locale } from "./i18n";

// Per-destination ES/PT overlays, keyed by slug. English stays the editable
// source; the page merges these via localize() with field-level fallback.
// Arrays merge element-wise, so translated thingsToDo/overview can omit the
// image/structural props and keep the English value.
export type DestinationOverlay = Partial<Destination>;

export const destinationsI18n: Record<string, Partial<Record<Locale, DestinationOverlay>>> = {
  /* ============================ CAIRO & GIZA ============================ */
  cairo: {
    es: {
      name: "El Cairo y Guiza",
      region: "Bajo Egipto",
      intro:
        "El Cairo y Guiza son donde empieza casi todo viaje a Egipto: las Pirámides de Guiza, de 4.500 años, y la Gran Esfinge se alzan en el borde occidental de la ciudad, y el Gran Museo Egipcio —el mayor museo del mundo dedicado a una sola civilización— abrió a su lado en noviembre de 2025. De dos a cuatro días bastan para ver los grandes hitos sin prisas.",
      summary:
        "El Cairo y Guiza combinan las Pirámides y la Gran Esfinge con el nuevo Gran Museo Egipcio y mil años de historia islámica y copta. Planifica de dos a cuatro días.",
      metaTitle: "Guía de El Cairo y Guiza: Pirámides y GEM | Fair Egypt Tours",
      metaDescription:
        "Planifica El Cairo y Guiza: las Pirámides y la Gran Esfinge, el nuevo Gran Museo Egipcio, Saqqara, la Ciudadela y Jan el-Jalili — con hoteles reales y consejos honestos de primera mano.",
      quickFacts: [
        { label: "Ideal para", value: "Viajeros primerizos" },
        { label: "Estancia ideal", value: "2–4 días" },
        { label: "Mejores meses", value: "Octubre–abril" },
        { label: "Imprescindible", value: "Pirámides + Gran Museo Egipcio" },
        { label: "Aeropuerto", value: "El Cairo Internacional (CAI)" },
      ],
      overview: [
        {
          heading: "¿Por qué visitar El Cairo y Guiza?",
          paras: [
            "El Cairo y Guiza reúnen la mayor concentración de sitios antiguos de Egipto. En el borde occidental de la ciudad, las pirámides de Keops, Kefrén y Micerino se alzan directamente del desierto a poca distancia de tu hotel, y el Gran Museo Egipcio exhibe ahora la colección completa de Tutankamón a dos kilómetros. Ninguna otra ciudad te permite estar junto a una maravilla de 4.500 años por la mañana y pasear por un bazar del siglo XIV esa misma tarde.",
            "Más allá de Guiza, la ciudad acumula época sobre época: la Pirámide Escalonada de Saqqara, donde se inventó la construcción de pirámides; la Ciudadela medieval de Salah al-Din; las antiguas iglesias del Cairo copto; y las callejuelas iluminadas de Jan el-Jalili. A los primerizos les decimos que traten El Cairo como el capítulo de apertura del viaje, no como una casilla que marcar de camino al Nilo.",
          ],
        },
        {
          heading: "¿Cuántos días necesitas?",
          paras: [
            "Dos días completos son el mínimo sensato para El Cairo y Guiza, y tres o cuatro lo hacen gratificante en lugar de apresurado. Un día cubre Guiza y el Gran Museo Egipcio; un segundo añade Saqqara y Menfis o El Cairo islámico y copto; un tercero deja sitio para el Museo Egipcio de Tahrir, Jan el-Jalili y un almuerzo sin prisas junto al Nilo.",
            "El error más común que vemos es intentar hacerlo todo en un único día sobrecargado. El tráfico de El Cairo es real, así que planificamos los días por geografía en lugar de por lista de deseos — agrupando los sitios del desierto y dejando la ciudad vieja, más caminable, para la tarde más fresca.",
          ],
        },
        {
          heading: "Cómo planificamos una estancia en El Cairo",
          paras: [
            "Organizamos los días de El Cairo en torno al ritmo, el calor, los horarios y dónde está tu hotel, no según una lista fija. Las primeras horas van a los sitios del desierto al aire libre antes del sol del mediodía; los museos y los paseos a la sombra por la ciudad vieja llenan la tarde; las noches se quedan suaves junto al río.",
            "Todo plan de varios días incluye un conductor privado y un guía egiptólogo con licencia, así que te ahorras el regateo de los taxis y obtienes el contexto que convierte monumentos sueltos en una sola historia conectada.",
          ],
        },
      ],
      history: [
        "Las pirámides de Guiza se construyeron durante la Cuarta Dinastía, hacia 2600–2500 a. C., como tumbas de los faraones Keops, Kefrén y Micerino. La Gran Pirámide de Keops fue la estructura humana más alta de la Tierra durante casi 4.000 años, y la Gran Esfinge ha custodiado la meseta desde entonces.",
        "Justo al sur, en Saqqara, se alza la Pirámide Escalonada de Zoser (hacia 2670 a. C.) — el edificio de piedra grande más antiguo del mundo y el prototipo del que evolucionaron las verdaderas pirámides. Los cercanos campos de Menfis fueron la primera capital de Egipto.",
        "El Cairo en sí es mucho más joven, fundado en 969 d. C. por la dinastía fatimí. Creció hasta convertirse en la mayor ciudad del mundo islámico medieval, y Salah al-Din (Saladino) la fortificó con la gran Ciudadela en la década de 1170, dejando el perfil de minaretes y madrasas que aún define el Cairo viejo.",
      ],
      gettingThere: [
        "El Aeropuerto Internacional de El Cairo (CAI) es la principal puerta de entrada, con vuelos directos desde la mayor parte de Europa, el Golfo y más allá. Está a unos 45–60 minutos de Guiza según el tráfico.",
        "Incluimos una recogida privada en el aeropuerto con cada plan de varios días, así que un conductor y un guía te reciben en llegadas — sin negociar taxis tras un vuelo largo.",
        "Dentro de la ciudad, un coche privado con conductor es con diferencia la forma más fácil de moverse, y las apps de transporte funcionan bien también. Como el tráfico de El Cairo puede tragarse una hora entre barrios, una ruta planificada por geografía ahorra tiempo real cada día; nosotros gestionamos todos los traslados entre sitios.",
      ],
      whereToStay: [
        { area: "Guiza / Pirámides", note: "Despierta con vistas a las pirámides y empieza lo más temprano y tranquilo en la meseta. Cuenta con un trayecto más largo hasta el centro de El Cairo para los museos y la ciudad vieja." },
        { area: "Zamalek (isla del Nilo)", note: "Frondosa, tranquila y llena de cafés, restaurantes y galerías — la opción para repetidores y noches más suaves junto al río." },
        { area: "Garden City / Centro", note: "Hoteles clásicos a orillas del Nilo y la base más céntrica, cerca del Museo Egipcio, el Cairo viejo y la corniche del río." },
        { area: "Nuevo Cairo / Aeropuerto", note: "Lo mejor para llegadas tardías o vuelos tempranos — práctico y moderno, pero con menos encanto para hacer turismo." },
      ],
      thingsToDo: [
        {
          title: "Gran Museo Egipcio (GEM)",
          text: "El Gran Museo Egipcio abrió junto a las pirámides en noviembre de 2025 y es el mayor museo arqueológico dedicado a una sola civilización. Exhibe la colección completa de Tutankamón —la máscara de oro, los sarcófagos anidados y más de 5.000 objetos— reunida por primera vez. La entrada es con hora reservada y debe comprarse en línea, así que aseguramos una franja matinal antes de que se llenen las salas de Tutankamón.",
        },
        {
          title: "Pirámides de Guiza y la Gran Esfinge",
          text: "Las tres grandes pirámides de Keops, Kefrén y Micerino y la Esfinge que las custodia tienen unos 4.500 años y siguen siendo la razón por la que la mayoría imagina Egipto. Puedes ir hasta el mirador panorámico, bajar al interior de la Gran Pirámide con una entrada limitada aparte y plantarte a los pies de la Esfinge. Empezamos en la puerta de la meseta a la hora de apertura para ganarle al calor y a los autobuses.",
        },
        {
          title: "Saqqara y la Pirámide Escalonada de Zoser",
          text: "Saqqara es el vasto cementerio de la antigua Menfis, a media hora al sur de Guiza y mucho más tranquilo que la meseta principal. Su pieza central, la Pirámide Escalonada de Zoser, es el edificio de piedra grande más antiguo del mundo, y el cercano Serapeum es un túnel excavado en la roca con dos docenas de sarcófagos de granito tallados de bloques únicos. Solemos combinar Saqqara con Guiza el mismo día para una mañana más tranquila y espaciada.",
        },
        {
          title: "Ciudadela de Salah al-Din",
          text: "La Ciudadela es una fortaleza medieval iniciada por Saladino en la década de 1170 sobre una colina que domina la ciudad, sede de los gobernantes de Egipto durante casi 700 años. Sus murallas ofrecen la vista gratuita más amplia de El Cairo, y en un día claro se distinguen las pirámides en el horizonte. Dentro está la Mezquita de alabastro de Mohamed Alí, cuyos dos minaretes se ven desde gran parte de la ciudad; cierra a las visitas durante las horas de oración, así que dejamos flexibilidad.",
        },
        {
          title: "Jan el-Jalili y El Cairo islámico",
          text: "Jan el-Jalili es un mercado en el corazón del Cairo medieval cuyas callejuelas cubiertas comercian desde el siglo XIV, rodeadas de mezquitas históricas y puertas antiguas. Vienes aquí a pasear, regatear por lámparas, especias y plata, y parar a tomar un té de menta en El Fishawy, un café forrado de espejos que sirve en el mismo callejón desde hace más de dos siglos. Está más animado y mejor al final de la tarde y por la noche, cuando refrescan las calles y se encienden los farolillos.",
        },
      ],
      bestTime:
        "Los mejores meses para El Cairo y Guiza son de octubre a abril, cuando las temperaturas diurnas rondan los 20–27 °C y los sitios al aire libre resultan cómodos. De mayo a septiembre hace calor, a menudo por encima de 35 °C, así que adelantamos el turismo a primera hora. Diciembre y enero son los más frescos y concurridos; marzo, abril, octubre y noviembre son el punto dulce de días cálidos y menos gente.",
      faqs: [
        { q: "¿Cuántos días debería pasar en El Cairo y Guiza?", a: "Dos días completos son el mínimo práctico y tres o cuatro son ideales. El primer día cubre las Pirámides y el Gran Museo Egipcio, el segundo añade Saqqara o El Cairo islámico y copto, y un tercer día deja sitio para Jan el-Jalili y el Museo Egipcio de Tahrir." },
        { q: "¿Hay que reservar el Gran Museo Egipcio con antelación?", a: "Sí. Desde su apertura en noviembre de 2025, el Gran Museo Egipcio usa entrada con hora reservada en línea, con un cupo diario de visitantes y sin venta en taquilla. Reservamos una franja matinal para que llegues a las salas de Tutankamón antes de que se llenen. Calcula cuatro o cinco horas para una visita completa." },
        { q: "¿Se puede entrar en las Pirámides de Guiza?", a: "Sí. Una entrada diaria limitada aparte permite subir por el estrecho pasadizo del interior de la Gran Pirámide de Keops hasta la cámara funeraria vacía. Las pirámides más pequeñas suelen ser más baratas de visitar por dentro. Las entradas se agotan, así que reservamos con antelación si entrar te importa." },
        { q: "¿Cuál es la mejor época del año para visitar El Cairo?", a: "De octubre a abril, cuando los días rondan los 20–27 °C y resultan cómodos para los sitios al aire libre. El verano (mayo–septiembre) supera a menudo los 35 °C, así que hacemos turismo temprano. Marzo, abril, octubre y noviembre equilibran buen tiempo con menos gente que el pico de diciembre–enero." },
        { q: "¿Es El Cairo seguro para los turistas?", a: "Las principales zonas turísticas —Guiza, los museos, Zamalek y la ciudad vieja— están muy vigiladas y se visitan habitualmente. Aplica la precaución normal de ciudad por el tráfico, las multitudes y los carteristas en mercados concurridos. Consulta la información de viaje actual de tu gobierno antes de reservar, y nuestros guías permanecen contigo durante todo el día." },
        { q: "¿Cómo llego del aeropuerto a las pirámides?", a: "El Aeropuerto Internacional de El Cairo está a unos 45–60 minutos de Guiza según el tráfico. Incluimos un conductor y un guía privados que te reciben en llegadas en cada plan de varios días, así que no hay regateo de taxis tras el vuelo." },
      ],
    },
    pt: {
      name: "Cairo e Gizé",
      region: "Baixo Egito",
      intro:
        "Cairo e Gizé são onde começa quase toda viagem ao Egito: as Pirâmides de Gizé, de 4.500 anos, e a Grande Esfinge erguem-se na borda oeste da cidade, e o Grande Museu Egípcio —o maior museu do mundo dedicado a uma única civilização— abriu ao lado delas em novembro de 2025. De dois a quatro dias cobrem os principais destaques sem pressa.",
      summary:
        "Cairo e Gizé combinam as Pirâmides e a Grande Esfinge com o novo Grande Museu Egípcio e mil anos de história islâmica e copta. Planeje de dois a quatro dias.",
      metaTitle: "Guia de Cairo e Gizé: Pirâmides e GEM | Fair Egypt Tours",
      metaDescription:
        "Planeje Cairo e Gizé: as Pirâmides e a Grande Esfinge, o novo Grande Museu Egípcio, Saqqara, a Cidadela e Khan el-Khalili — com hotéis reais e conselhos honestos em primeira mão.",
      quickFacts: [
        { label: "Ideal para", value: "Quem viaja pela primeira vez" },
        { label: "Estadia ideal", value: "2–4 dias" },
        { label: "Melhores meses", value: "Outubro–abril" },
        { label: "Marca registrada", value: "Pirâmides + Grande Museu Egípcio" },
        { label: "Aeroporto", value: "Cairo Internacional (CAI)" },
      ],
      overview: [
        {
          heading: "Por que visitar Cairo e Gizé?",
          paras: [
            "Cairo e Gizé reúnem a maior concentração de sítios antigos do Egito. Na borda oeste da cidade, as pirâmides de Quéops, Quéfren e Miquerinos erguem-se direto do deserto a poucos minutos do seu hotel, e o Grande Museu Egípcio agora exibe a coleção completa de Tutancâmon a dois quilômetros. Nenhuma outra cidade permite que você esteja ao lado de uma maravilha de 4.500 anos pela manhã e caminhe por um bazar do século XIV na mesma noite.",
            "Além de Gizé, a cidade empilha era sobre era: a Pirâmide de Degraus de Saqqara, onde se inventou a construção de pirâmides; a Cidadela medieval de Salah al-Din; as antigas igrejas do Cairo copta; e as vielas iluminadas de Khan el-Khalili. Aos viajantes de primeira viagem, dizemos para tratar o Cairo como o capítulo de abertura da viagem, não como um item a marcar a caminho do Nilo.",
          ],
        },
        {
          heading: "De quantos dias você precisa?",
          paras: [
            "Dois dias inteiros são o mínimo sensato para Cairo e Gizé, e três ou quatro o tornam gratificante em vez de corrido. Um dia cobre Gizé e o Grande Museu Egípcio; um segundo acrescenta Saqqara e Mênfis ou o Cairo islâmico e copta; um terceiro deixa espaço para o Museu Egípcio de Tahrir, Khan el-Khalili e um almoço sem pressa à beira do Nilo.",
            "O erro mais comum que vemos é tentar fazer tudo em um único dia sobrecarregado. O trânsito do Cairo é real, então planejamos os dias por geografia em vez de por lista de desejos — agrupando os sítios do deserto e deixando a cidade velha, mais caminhável, para a tarde mais fresca.",
          ],
        },
        {
          heading: "Como planejamos uma estadia no Cairo",
          paras: [
            "Organizamos os dias do Cairo em torno do ritmo, do calor, dos horários e de onde fica o seu hotel, não de uma lista fixa. As primeiras horas vão para os sítios do deserto ao ar livre antes do sol do meio-dia; museus e caminhadas à sombra pela cidade velha preenchem a tarde; as noites ficam suaves à beira do rio.",
            "Todo plano de vários dias inclui um motorista privado e um guia egiptólogo licenciado, então você dispensa a pechincha de táxi e ganha o contexto que transforma monumentos soltos em uma única história conectada.",
          ],
        },
      ],
      history: [
        "As pirâmides de Gizé foram construídas durante a Quarta Dinastia, por volta de 2600–2500 a.C., como túmulos dos faraós Quéops, Quéfren e Miquerinos. A Grande Pirâmide de Quéops foi a estrutura humana mais alta da Terra por quase 4.000 anos, e a Grande Esfinge guarda o planalto desde então.",
        "Logo ao sul, em Saqqara, ergue-se a Pirâmide de Degraus de Djoser (por volta de 2670 a.C.) — o mais antigo grande edifício de pedra do mundo e o protótipo do qual evoluíram as verdadeiras pirâmides. Os campos próximos de Mênfis foram a primeira capital do Egito.",
        "O Cairo em si é muito mais jovem, fundado em 969 d.C. pela dinastia fatímida. Cresceu até se tornar a maior cidade do mundo islâmico medieval, e Salah al-Din (Saladino) a fortificou com a grande Cidadela na década de 1170, deixando o horizonte de minaretes e madrassas que ainda define o Cairo Antigo.",
      ],
      gettingThere: [
        "O Aeroporto Internacional do Cairo (CAI) é o principal portão de entrada, com voos diretos da maior parte da Europa, do Golfo e além. Fica a cerca de 45–60 minutos de Gizé, dependendo do trânsito.",
        "Incluímos um traslado privado do aeroporto em cada plano de vários dias, então um motorista e um guia recebem você no desembarque — sem negociar táxi depois de um voo longo.",
        "Dentro da cidade, um carro privado com motorista é de longe a forma mais fácil de se locomover, e os aplicativos de transporte também funcionam bem. Como o trânsito do Cairo pode engolir uma hora entre bairros, uma rota planejada por geografia economiza tempo real a cada dia; nós cuidamos de todos os traslados entre os sítios.",
      ],
      whereToStay: [
        { area: "Gizé / Pirâmides", note: "Acorde com vista para as pirâmides e tenha o começo mais cedo e tranquilo no planalto. Conte com um trajeto mais longo até o centro do Cairo para os museus e a cidade velha." },
        { area: "Zamalek (ilha do Nilo)", note: "Arborizada, calma e cheia de cafés, restaurantes e galerias — a escolha para quem repete e para noites mais suaves à beira do rio." },
        { area: "Garden City / Centro", note: "Hotéis clássicos à beira do Nilo e a base mais central, perto do Museu Egípcio, do Cairo Antigo e do calçadão do rio." },
        { area: "Novo Cairo / Aeroporto", note: "Melhor para chegadas tardias ou voos cedo — prático e moderno, mas com menos charme para passear." },
      ],
      thingsToDo: [
        {
          title: "Grande Museu Egípcio (GEM)",
          text: "O Grande Museu Egípcio abriu ao lado das pirâmides em novembro de 2025 e é o maior museu arqueológico dedicado a uma única civilização. Exibe a coleção completa de Tutancâmon —a máscara de ouro, os sarcófagos aninhados e mais de 5.000 objetos— reunida pela primeira vez. A entrada é com horário marcado e deve ser comprada on-line, então garantimos um horário pela manhã antes de as galerias de Tutancâmon encherem.",
        },
        {
          title: "Pirâmides de Gizé e a Grande Esfinge",
          text: "As três grandes pirâmides de Quéops, Quéfren e Miquerinos e a Esfinge que as guarda têm cerca de 4.500 anos e ainda são o motivo pelo qual a maioria imagina o Egito. Você pode ir até o ponto panorâmico, descer ao interior da Grande Pirâmide com um ingresso limitado à parte e ficar aos pés da Esfinge. Começamos no portão do planalto no horário de abertura para vencer o calor e os ônibus.",
        },
        {
          title: "Saqqara e a Pirâmide de Degraus de Djoser",
          text: "Saqqara é o vasto cemitério da antiga Mênfis, a meia hora ao sul de Gizé e bem mais tranquilo que o planalto principal. Sua peça central, a Pirâmide de Degraus de Djoser, é o mais antigo grande edifício de pedra do mundo, e o Serapeum próximo é um túnel escavado na rocha com duas dúzias de sarcófagos de granito talhados de blocos únicos. Costumamos combinar Saqqara com Gizé no mesmo dia para uma manhã mais calma e espaçada.",
        },
        {
          title: "Cidadela de Salah al-Din",
          text: "A Cidadela é uma fortaleza medieval iniciada por Saladino na década de 1170 sobre uma colina acima da cidade, sede dos governantes do Egito por quase 700 anos. Suas muralhas oferecem a vista gratuita mais ampla do Cairo, e em um dia claro dá para distinguir as pirâmides no horizonte. Dentro fica a Mesquita de alabastro de Muhammad Ali, cujos dois minaretes são vistos de grande parte da cidade; ela fecha para visitas durante os horários de oração, então deixamos flexibilidade.",
        },
        {
          title: "Khan el-Khalili e o Cairo islâmico",
          text: "Khan el-Khalili é um mercado no coração do Cairo medieval cujas vielas cobertas comerciam desde o século XIV, cercadas por mesquitas históricas e portões antigos. Você vem aqui para passear, pechinchar por lamparinas, especiarias e prata, e parar para um chá de menta no El Fishawy, um café forrado de espelhos que serve no mesmo beco há mais de dois séculos. É mais movimentado e melhor no fim da tarde e à noite, quando as vielas esfriam e as lanternas se acendem.",
        },
      ],
      bestTime:
        "Os melhores meses para Cairo e Gizé são de outubro a abril, quando as temperaturas diurnas ficam em torno de 20–27 °C e os sítios ao ar livre são confortáveis. De maio a setembro faz calor, muitas vezes acima de 35 °C, então passamos os passeios para o início da manhã. Dezembro e janeiro são os mais frescos e movimentados; março, abril, outubro e novembro são o ponto ideal de dias quentes e menos gente.",
      faqs: [
        { q: "Quantos dias devo passar em Cairo e Gizé?", a: "Dois dias inteiros são o mínimo prático e três ou quatro são ideais. O primeiro dia cobre as Pirâmides e o Grande Museu Egípcio, o segundo acrescenta Saqqara ou o Cairo islâmico e copta, e um terceiro dia deixa espaço para Khan el-Khalili e o Museu Egípcio de Tahrir." },
        { q: "Preciso reservar o Grande Museu Egípcio com antecedência?", a: "Sim. Desde a abertura em novembro de 2025, o Grande Museu Egípcio usa entrada com horário marcado on-line, com um limite diário de visitantes e sem venda no local. Reservamos um horário pela manhã para você chegar às galerias de Tutancâmon antes de encherem. Reserve quatro a cinco horas para uma visita completa." },
        { q: "Dá para entrar nas Pirâmides de Gizé?", a: "Sim. Um ingresso diário limitado à parte permite subir a passagem estreita no interior da Grande Pirâmide de Quéops até a câmara funerária vazia. As pirâmides menores costumam ser mais baratas para entrar. Os ingressos esgotam, então reservamos com antecedência se entrar for importante para você." },
        { q: "Qual a melhor época do ano para visitar o Cairo?", a: "De outubro a abril, quando os dias ficam em torno de 20–27 °C e confortáveis para os sítios ao ar livre. O verão (maio–setembro) passa frequentemente dos 35 °C, então passeamos cedo. Março, abril, outubro e novembro equilibram bom tempo com menos gente que o pico de dezembro–janeiro." },
        { q: "O Cairo é seguro para turistas?", a: "As principais áreas turísticas —Gizé, os museus, Zamalek e a cidade velha— são bastante policiadas e visitadas com frequência. Vale a precaução normal de cidade com trânsito, multidões e batedores de carteira em mercados movimentados. Consulte as orientações de viagem atuais do seu governo antes de reservar, e nossos guias ficam com você ao longo de todo o dia." },
        { q: "Como vou do aeroporto às pirâmides?", a: "O Aeroporto Internacional do Cairo fica a cerca de 45–60 minutos de Gizé, dependendo do trânsito. Incluímos um motorista e um guia privados que recebem você no desembarque em cada plano de vários dias, então não há pechincha de táxi depois do voo." },
      ],
    },
  },
};
