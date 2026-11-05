/**
 * Bedrijfsgegevens en kleuren voor de demo van Hoveniersbedrijf Vossebeld.
 * Slug blijft gelijk: die hoort bij de Sleads demo-analytics tracker.
 */
export const content = {
  slug: "vossebeld-demo",

  company: {
    name: "Hoveniersbedrijf Vossebeld",
    owner: "Peter Vossebeld",
    tagline: "Van idee tot tuin",
    description:
      "Ik ben Peter Vossebeld, hovenier in Haaksbergen. Ontwerp, aanleg, onderhoud, renovatie, sierbestrating en kunstgras. Eén aanspreekpunt, van de eerste schets tot de laatste plant. TuinKeur gecertificeerd.",
    logo: "/logo_vossebeld_index.png",
    logoFooter: "/logo_vossebeld_footer.png",
    portrait: "/img/peter_vossebeld.png",
    city: "Haaksbergen",
    founded: "2013",
    region: "voornamelijk Oost Nederland (Twente en Achterhoek)",
    regionLabel: "Haaksbergen · Twente en Achterhoek",
  },

  colors: {
    primary: "#9a4a2c",
    primaryForeground: "#ffffff",
    accent: "#2e7d32",
    background: "#ece3cf",
    foreground: "#26292b",
    muted: "#d8c9a7",
    panel: "#fbf8f1",
    aarde: "#6b4330",
    zandlaag: "#e6d4a8",
    turf: "#3e5140",
  },

  seo: {
    title: "Hoveniersbedrijf Vossebeld | Hovenier in Haaksbergen",
    description:
      "Peter Vossebeld, hovenier in Haaksbergen. Ontwerp, aanleg, onderhoud, renovatie, sierbestrating en kunstgras in Twente en de Achterhoek. TuinKeur gecertificeerd. Van idee tot tuin.",
    lang: "nl",
  },

  contact: {
    phoneDisplay: "06-10547298",
    phoneTel: "tel:+31610547298",
    email: "info@hoveniersbedrijfvossebeld.nl",
    address: "Maatkamp 1, 7482 KC Haaksbergen",
    linkedin: "https://nl.linkedin.com/pub/peter-vossebeld/19/921/928",
    hoursNote: "Bel of mail gerust.",
  },

  tuinkeur: {
    mark: "/img/Tuinkeur.png",
    certified: "/img/tuinkeur_gecertificeerd_100.png",
    intro:
      "TuinKeur is een onafhankelijk keurmerk. Het schept duidelijkheid in het aanbod van hoveniers. Hoveniersbedrijf Vossebeld is TuinKeur gecertificeerd. Daarmee biedt ik u vijf zekerheden.",
    zekerheden: [
      {
        title: "Professionaliteit",
        text: "Een hovenier met het TuinKeur-keurmerk is gecheckt op ruim 120 punten. Het bedrijf en de bedrijfsvoering worden als geheel bekeken.",
      },
      {
        title: "Betrokkenheid",
        text: "U staat voorop. Dat merkt u aan de persoonlijke benadering, aan een heldere offerte die laat zien welke werkzaamheden erin zitten, en aan de algemene voorwaarden die daarbij horen.",
      },
      {
        title: "Vakbekwaamheid",
        text: "Ik heb de vakkennis om een aanvraag goed uit te voeren. Tijdens het werk, en ook daarna, kunt u op die kennis terugvallen.",
      },
      {
        title: "Service",
        text: "Ik kom mijn afspraken na. Na de aanleg mag u rekenen op nazorg.",
      },
      {
        title: "Kwaliteit",
        text: "Goede kwaliteit in het materiaal en in het werk. Loopt er iets niet zoals het moet, dan zet ik me in om het op te lossen. Komt u er met mij niet uit, dan bemiddelt TuinKeur.",
      },
    ],
  },

  services: [
    {
      href: "/ontwerp",
      title: "Ontwerp",
      bond: "tegelverband",
      line: "Vrijblijvende kennismaking, een schets en een tekening met maatvoering.",
    },
    {
      href: "/aanleg",
      title: "Aanleg",
      bond: "halfsteens",
      line: "Van inmeten tot de laatste plant, in vier fases, volgens afspraak.",
    },
    {
      href: "/onderhoud",
      title: "Onderhoud",
      bond: "elleboog",
      line: "Blad, onkruid, snoei, maaien en borders. Een tuin die bijblijft.",
    },
    {
      href: "/renovatie",
      title: "Renovatie",
      bond: "wildverband",
      line: "Van een kleine aanpassing tot een ingrijpende verandering. Eerst een degelijk ontwerp.",
    },
    {
      href: "/sierbestrating",
      title: "Sierbestrating",
      bond: "keper",
      line: "Van beton tot natuursteen. U kiest de tegels, ik werk het straatwerk af.",
    },
    {
      href: "/kunstgras",
      title: "Kunstgras",
      bond: "blokverband",
      line: "Complete levering en aanleg, ook bij schaduw, op een balkon of een dakterras.",
    },
  ],

  styles: ["Landelijk", "Romantisch", "Klassiek", "Strak en modern", "Speels en levendig"],

  phases: [
    {
      key: "zand",
      name: "Zand",
      title: "Inmeten",
      text: "Uw tuin wordt ingemeten, zodat bekend is waar het terras, het gazon en de eventuele paden komen.",
    },
    {
      key: "aarde",
      name: "Aarde",
      title: "Grondwerk",
      text: "Bij een bestaande tuin gaan oude planten en het oude straatwerk eruit. De grond wordt bewerkt en klaargemaakt. Denk aan glooien en een goede bemesting.",
    },
    {
      key: "straat",
      name: "Straatlaag",
      title: "Bestratingen en tuinafscheidingen",
      text: "De paden en terrassen worden bestraat en de schuttingen geplaatst. In deze fase ziet u al hoe de verhoudingen worden.",
    },
    {
      key: "groen",
      name: "Groen",
      title: "Beplanting en gazon",
      text: "Tot slot wordt het (kunst)gras gelegd of gezaaid. Bomen, struiken en planten krijgen volgens het beplantingsplan een plek.",
    },
  ],

  onderhoud: [
    "Bladruimen",
    "Onkruidvrij maken",
    "Heesters en struiken snoeien",
    "Bomen snoeien",
    "Bomen kappen",
    "Gras maaien",
    "Beplanten",
    "Border onderhoud",
  ],

  vorm: {
    werkzaamheden: [
      { id: "ontwerp", label: "Ontwerp" },
      { id: "aanleg", label: "Aanleg" },
      { id: "onderhoud", label: "Onderhoud" },
      { id: "renovatie", label: "Renovatie" },
      { id: "sierbestrating", label: "Sierbestrating" },
      { id: "kunstgras", label: "Kunstgras" },
    ],
  },
} as const;

export type BondId = (typeof content.services)[number]["bond"];
export type PhaseKey = (typeof content.phases)[number]["key"];
