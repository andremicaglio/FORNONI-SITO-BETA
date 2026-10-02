// Contenuti ripresi da www.fornoni.it (Home, Noleggio, Servizi, Gallery, Contatti)

const CDN = "https://d3e7ilti5q92ri.cloudfront.net";
export const cdn = (file: string) => `${CDN}/${file}`;

export const company = {
  name: "Fornoni Rental Solutions",
  legalName: "Fornoni S.r.l.",
  tagline: "Noleggio e consulenza tecnica per l'edilizia",
  phoneDisplay: "030 711582",
  phoneHref: "tel:+39030711582",
  email: "info@fornoni.it",
  street: "Via Adige, 1A",
  postalCode: "25032",
  city: "Chiari",
  province: "BS",
  region: "Lombardia",
  geo: { lat: 45.5394824, lng: 9.9402564 },
  mapsUrl:
    "https://www.google.com/maps/place/Fornoni+Srl+-+Vendita,Noleggio+e+Assistenza+Macchine+e+Attrezzature+Edili/@45.5395814,9.9406587,18z/data=!4m6!3m5!1s0x47816b01968e2df9:0x5f74008cd0862aed!8m2!3d45.5394824!4d9.9402564",
  catalogUrl: cdn("Catalogo_Fornoni_Rental_Solutions_2024_COMP_6a71a12110.pdf"),
  logo: cdn("Fornoni_Logo_grigio_5fbca45a8e.png"),
  vat: "03612430987",
  rea: "548680",
  registry: "Brescia",
  shareCapital: "50.000 €",
  privacyUrl: "https://www.iubenda.com/privacy-policy/60331693",
  cookieUrl: "https://www.iubenda.com/privacy-policy/60331693/cookie-policy",
  social: {
    facebook: "https://www.facebook.com/FornoniMacchineEdili/",
    instagram: "https://www.instagram.com/fornonisrl/",
    linkedin: "https://www.linkedin.com/company/fornoni-srl-gruppo-emac/",
  },
} as const;

export const nav = [
  { href: "/", label: "Home" },
  { href: "/noleggio", label: "Noleggio" },
  { href: "/servizi", label: "Servizi" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contatti", label: "Contatti" },
] as const;

export const images = {
  slider1: cdn("cropped_SLIDER_1_b39fd65480.jpg"),
  slider2: cdn("cropped_SLIDER_2_6ffb7769f2.jpg"),
  testata: cdn("cropped_cropped_TESTATA_b45d06d280.jpg"),
  testataNoleggio: cdn("cropped_TESTATA_4cff0ef4b0.jpg"),
  home1: cdn("home01_1_ca4d883473.jpeg"),
  home3: cdn("home01_3_352cffaee1.jpg"),
  noleggio1: cdn("NOLEGGIO_1_d95e2f6005.jpg"),
  noleggio1b: cdn("NOLEGGIO_1_eb701568d2.jpeg"),
  noleggio2: cdn("NOLEGGIO_2_62d6e71787.jpeg"),
  consulenza: cdn("Consulenza_Tecnica_6ab22f5da1.jpeg"),
  progettazione: cdn("Progettazione_tecnica_d84c8f2e9f.png"),
  assistenza: cdn("Assistenza_Tecnica_36cad775c2.jpeg"),
  gallery2: cdn("GALLERY_2_dee8e7c075.jpg"),
  gallery6: cdn("GALLERY_6_e467deb7bd.jpg"),
  gallery9: cdn("GALLERY_9_c63e0f80c8.JPG"),
  gallery12: cdn("GALLERY_12_8b415d6eed.jpg"),
  cantiere1: cdn("Whats_App_Image_2024_10_14_at_17_23_11_f8df8a55d7.jpeg"),
  cantiere2: cdn("Whats_App_Image_2024_11_05_at_14_23_03_1_0308e328af.jpeg"),
} as const;

export const heroSlides = [
  {
    title: "Noleggio macchinari all'avanguardia",
    subtitle: "Soluzioni efficienti per ogni esigenza di cantiere",
    image: images.slider1,
    href: "/noleggio",
  },
  {
    title: "Progettazione e installazione su misura",
    subtitle: "Dall'idea alla realizzazione con precisione e sicurezza",
    image: images.slider2,
    href: "/servizi#progettazione",
  },
  {
    title: "Assistenza tecnica immediata",
    subtitle: "Interventi rapidi per garantire la continuità del lavoro",
    image: images.testata,
    href: "/servizi#assistenza",
  },
] as const;

export const pillars = [
  {
    title: "Noleggio",
    text: "Ampia gamma di macchinari, attrezzature e strutture provvisionali per il settore edile.",
    image: images.noleggio1,
    href: "/noleggio",
  },
  {
    title: "Consulenza tecnica",
    text: "Team di esperti al vostro fianco per trovare le migliori soluzioni.",
    image: images.consulenza,
    href: "/servizi#consulenza",
  },
  {
    title: "Progettazione e installazione",
    text: "Elaborazione di progetti tecnici, realizzazione delle opere e messa in servizio di macchinari.",
    image: images.progettazione,
    href: "/servizi#progettazione",
  },
  {
    title: "Assistenza tecnica",
    text: "Meccanici e tecnici specializzati per manutenzioni e riparazioni.",
    image: images.assistenza,
    href: "/servizi#assistenza",
  },
] as const;

export const about = {
  title: "Chi siamo",
  paragraphs: [
    "La Fornoni Rental Solutions da oltre sessant'anni offre servizi di noleggio macchine ed attrezzature per l'edilizia.",
    "La nostra visione aziendale è di essere il punto di riferimento del settore, grazie all'insieme di giovani talenti, grinta e carisma.",
    "Valorizziamo la bellezza del lavoro svolto con passione ed etica, la collaborazione di squadra e la formazione continua.",
  ],
  values: ["Passione", "Etica", "Squadra", "Formazione continua"],
};

export const offer = {
  title: "Quali servizi offriamo",
  paragraphs: [
    "Offriamo servizi di noleggio, consulenza tecnica, progettazione, installazione ed assistenza.",
    "Da noi troverete una vasta gamma di prodotti accuratamente selezionati per rispondere a tutte le vostre esigenze di cantiere.",
  ],
};

export const process = {
  title: "Come lo facciamo",
  intro:
    "Il nostro obiettivo principale è ottenere risultati concreti soddisfacendo a pieno le vostre richieste, garantendo la massima professionalità e qualità di servizi, dalla scelta del prodotto, alla messa in opera ed alla sua manutenzione.",
  steps: [
    {
      title: "Scelta del prodotto",
      text: "I nostri consulenti tecnici del noleggio ti affiancano nella scelta della soluzione giusta, con un'offerta economica mirata.",
    },
    {
      title: "Messa in opera",
      text: "Progetti tecnici, montaggio e messa in servizio di macchine ed attrezzature, seguendo rigide procedure di sicurezza.",
    },
    {
      title: "Manutenzione",
      text: "Controlli periodici e assistenza in cantiere con officine mobili, per la rimessa in servizio nel minor tempo possibile.",
    },
  ],
};

export const stats = [
  { value: 80, suffix: " m", label: "Lunghezza massima dei bracci delle gru a torre" },
  { value: 4, suffix: " m", label: "Elevazione su trampoli delle gru per centri storici" },
  { value: 12, suffix: "", label: "Linee di prodotto a noleggio per il cantiere" },
  { value: 150, suffix: " kW", label: "Potenza massima dei gruppi elettrogeni" },
] as const;

export type RentalIcon =
  | "crane"
  | "castle"
  | "scaffold"
  | "formwork"
  | "hoist"
  | "fence"
  | "concrete"
  | "container"
  | "forklift"
  | "power"
  | "drill"
  | "tools";

export const rentalIntro = {
  title: "Noleggiare per ottimizzare",
  paragraphs: [
    "Scegliere di noleggiare significa innanzitutto dotarsi della soluzione giusta in ogni occasione, limitando i costi, gli sprechi e massimizzando l'efficienza.",
    "La Fornoni Rental Solutions è dotata di un parco noleggio in continua e costante evoluzione, sviluppato accuratamente per poter gestire tutte le necessità di cantiere.",
  ],
  claim: "Efficienza e flessibilità con Fornoni Rental Solutions",
};

export const rentals: {
  slug: string;
  title: string;
  short: string;
  text: string;
  icon: RentalIcon;
  spec?: string;
}[] = [
  {
    slug: "gru-a-torre",
    title: "Gru a torre tradizionali ed automontanti",
    short: "Gru a torre",
    text: "Gru con bracci da 5 mt a 80 mt, altezza variabile in base alle necessità del cantiere e possibilità d'installazione su carro di base o tirafondi.",
    icon: "crane",
    spec: "Bracci 5 – 80 m",
  },
  {
    slug: "gru-centri-storici",
    title: "Gru Gelco su trampoli e per centri storici",
    short: "Gru per centri storici",
    text: "Gru speciali per affrontare i cantieri più complessi. Possibilità di elevazione su trampoli fino a 4 mt di altezza, montaggio gru a torre mediante gabbia idraulica o elicottero.",
    icon: "castle",
    spec: "Trampoli fino a 4 m",
  },
  {
    slug: "ponteggi",
    title: "Ponteggi e strutture provvisionali",
    short: "Ponteggi",
    text: "Fornitura e posa di ponteggi a telai prefabbricati o mediante sistema multidirezionale. Le nostre strutture vengono realizzate seguendo rigide procedure di sicurezza e pensate per garantire la massima efficienza.",
    icon: "scaffold",
    spec: "Telai e multidirezionale",
  },
  {
    slug: "casseformi",
    title: "Casseformi e sistemi per solaio",
    short: "Casseformi",
    text: "Fornitura di prodotti all'avanguardia per la realizzazione di muri, setti, vani e solai in calcestruzzo. Da noi troverai inoltre un'ampia gamma di puntelli e sistemi di puntellazione.",
    icon: "formwork",
    spec: "Muri, setti, vani, solai",
  },
  {
    slug: "montacarichi",
    title: "Montacarichi e ponteggi autosollevanti",
    short: "Montacarichi",
    text: "I nostri montacarichi sono la scelta ideale per ottimizzare i vostri cantieri di costruzione e ristrutturazione. Aumentano la sicurezza ed ottimizzano le lavorazioni riducendo i tempi di realizzazione delle opere ed il carico di lavoro.",
    icon: "hoist",
    spec: "Costruzione e ristrutturazione",
  },
  {
    slug: "parapetti",
    title: "Parapetti per coperture",
    short: "Parapetti",
    text: "Fornitura e posa di parapetti per cordoli, solai e coperture. Il nostro parco noleggio è dotato di una vasta gamma per affrontare tutte le possibili condizioni.",
    icon: "fence",
    spec: "Cordoli, solai, coperture",
  },
  {
    slug: "calcestruzzo",
    title: "Macchine per la proiezione ed il trasporto di calcestruzzo e materiali",
    short: "Proiezione e trasporto materiali",
    text: "Una linea selezionata di macchinari per la miscelazione, il trasporto e la proiezione di intonaci, malte, colle, betoncini, massetti, sottofondi e calcestruzzo. Oltre al macchinario specifico per la vostra esigenza mettiamo a disposizione un team di specialisti per la messa in servizio e l'assistenza.",
    icon: "concrete",
    spec: "Intonaci, malte, massetti, cls",
  },
  {
    slug: "moduli-prefabbricati",
    title: "Box, monoblocchi, moduli prefabbricati e servizi igienici",
    short: "Box e moduli prefabbricati",
    text: "Ampio assortimento di moduli prefabbricati per la realizzazione di spazi ad uso ufficio/sala riunioni, mensa/spogliatoio, servizi igienici e magazzino.",
    icon: "container",
    spec: "Uffici, mense, magazzini",
  },
  {
    slug: "sollevatori-miniescavatori",
    title: "Sollevatori telescopici, miniescavatori e minipale, motocarriole",
    short: "Sollevatori e movimento terra",
    text: "Gamma completa di sollevatori telescopici, fissi e rotativi, miniescavatori, minipale e motocarriole. Tutti i nostri macchinari possono essere accessoriati con attrezzature specifiche come martelli demolitori, verricelli, ceste porta persone e molto altro.",
    icon: "forklift",
    spec: "Fissi e rotativi",
  },
  {
    slug: "gruppi-elettrogeni",
    title: "Gruppi elettrogeni",
    short: "Gruppi elettrogeni",
    text: "Fornitura di gruppi elettrogeni 220V da 4 a 12 kW e in versione 220V/380V da 25 a 150 kW.",
    icon: "power",
    spec: "4 – 150 kW",
  },
  {
    slug: "taglio-carotaggio",
    title: "Macchine per il taglio, il carotaggio e la lavorazione di superfici",
    short: "Taglio e carotaggio",
    text: "Le migliori attrezzature per il taglio, la perforazione e la lavorazione delle superfici in CA. Elettroutensili 220V/380V delle migliori marche, anche in versione ad alta frequenza.",
    icon: "drill",
    spec: "220V / 380V · Alta frequenza",
  },
  {
    slug: "attrezzature",
    title: "Attrezzature ed accessori per i cantieri",
    short: "Attrezzature e accessori",
    text: "Un ampio assortimento di accessori da cantiere. Scarica il nostro catalogo e scoprirai tanti altri prodotti da poter noleggiare.",
    icon: "tools",
    spec: "Catalogo completo",
  },
];

export const services = [
  {
    id: "consulenza",
    kicker: "Consulenza",
    tagline: "Soluzioni su misura per il tuo cantiere",
    title: "Consulenza tecnica",
    image: images.consulenza,
    paragraphs: [
      "Un team di esperti consulenti tecnici del noleggio ti saprà aiutare a trovare la soluzione ideale per il tuo cantiere.",
      "L'affiancamento nella scelta del prodotto giusto e una mirata offerta economica sono alla base del lavoro dei nostri C.T.N. che, grazie alla formazione continua e un'ampia conoscenza del settore, sapranno accompagnarti durante tutto il percorso di noleggio.",
    ],
    points: ["Scelta del prodotto giusto", "Offerta economica mirata", "Affiancamento per tutto il noleggio"],
  },
  {
    id: "progettazione",
    kicker: "Progettazione",
    tagline: "Progetti tecnici e installazioni sicure",
    title: "Servizio progettazione e installazione",
    image: images.progettazione,
    paragraphs: [
      "Un progetto ben realizzato è alla base di un lavoro dal risultato garantito!",
      "La Fornoni Rental Solutions da oltre sessant'anni è al servizio delle imprese edili nel montaggio di macchine ed attrezzature per l'edilizia. Il nostro parco noleggio vanta un'ampia gamma di prodotti all'avanguardia e attrezzature delle migliori marche.",
    ],
    points: ["Progetti tecnici", "Montaggio e installazione", "Messa in servizio dei macchinari"],
  },
  {
    id: "assistenza",
    kicker: "Assistenza",
    tagline: "Manutenzione rapida e affidabile",
    title: "Assistenza tecnica",
    image: images.assistenza,
    paragraphs: [
      "Per garantire la massima affidabilità il nostro parco è soggetto a rigidi controlli periodici.",
      "Il nostro reparto assistenza è sempre pronto ad intervenire in caso di guasto o malfunzionamento, garantendo la rimessa in servizio nel minor tempo possibile.",
      "Vi raggiungeremo direttamente in cantiere tramite le nostre officine mobili appositamente attrezzate, oppure effettueremo le lavorazioni presso le nostre officine specializzate.",
    ],
    points: ["Controlli periodici", "Officine mobili in cantiere", "Officine specializzate in sede"],
  },
] as const;

export const gallery = {
  title: "Esperienza e innovazione nei nostri lavori",
  subtitle: "Al servizio del tuo cantiere",
  items: [
    { src: images.gallery9, w: 1600, h: 1200, alt: "Cantiere allestito con le attrezzature Fornoni" },
    { src: images.gallery12, w: 1200, h: 1600, alt: "Gru a torre a noleggio in cantiere" },
    { src: images.slider1, w: 1632, h: 1352, alt: "Macchinari Fornoni al lavoro" },
    { src: images.gallery2, w: 1200, h: 1288, alt: "Strutture provvisionali in opera" },
    { src: images.cantiere1, w: 1600, h: 1200, alt: "Intervento in cantiere del team Fornoni" },
    { src: images.gallery6, w: 1200, h: 1600, alt: "Montaggio di attrezzature per l'edilizia" },
    { src: images.home3, w: 1920, h: 1440, alt: "Parco macchine Fornoni Rental Solutions" },
    { src: images.noleggio2, w: 1200, h: 1600, alt: "Macchinario a noleggio in cantiere" },
    { src: images.slider2, w: 1495, h: 1063, alt: "Installazione su misura in cantiere" },
    { src: images.noleggio1b, w: 1078, h: 1157, alt: "Attrezzature a noleggio pronte per il cantiere" },
    { src: images.cantiere2, w: 1079, h: 708, alt: "Assistenza tecnica Fornoni in cantiere" },
    { src: images.home1, w: 1024, h: 768, alt: "Lavori realizzati da Fornoni Rental Solutions" },
  ],
};
