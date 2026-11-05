export type ProjectCategory = "tuinaanleg" | "sierbestrating" | "kunstgras" | "renovatie";

export type ProjectPhoto = {
  src: string;
  alt: string;
  width: number;
  height: number;
  category: ProjectCategory;
  sheet: string;
  featured?: boolean;
};

export const categoryLabel: Record<ProjectCategory, string> = {
  tuinaanleg: "Tuinaanleg",
  sierbestrating: "Sierbestrating",
  kunstgras: "Kunstgras",
  renovatie: "Renovatie",
};

const L = 800;
const S = 600;
const P = 1067;

function photo(
  file: string,
  alt: string,
  width: number,
  height: number,
  category: ProjectCategory,
  sheet: string,
  featured?: boolean,
): ProjectPhoto {
  return {
    src: `/img/projecten/${file}`,
    alt,
    width,
    height,
    category,
    sheet: `blad ${sheet} · ${categoryLabel[category].toLowerCase()}`,
    featured,
  };
}

export const projects: ProjectPhoto[] = [
  photo("tuinaanleg_tuinaanleg001.jpg", "Terras met een houten bank tussen twee hoge plantenbakken, en een verlaagde tuin met borders en een schutting.", L, S, "tuinaanleg", "01", true),
  photo("tuinaanleg_tuinaanleg002.jpg", "Houten vlonder met een leuning, met beplanting en water eronder.", L, S, "tuinaanleg", "02"),
  photo("tuinaanleg_tuinaanleg003.jpg", "Border met siergras en rode heesters in een verhoogde bak.", L, S, "tuinaanleg", "03"),
  photo("tuinaanleg_tuinaanleg004.jpg", "Treden naar een terras, met borders aan weerszijden.", L, S, "tuinaanleg", "04"),
  photo("tuinaanleg_tuinaanleg005.jpg", "Twee jonge bomen in donkere bakken bij een trap naar de woning.", L, S, "tuinaanleg", "05"),
  photo("tuinaanleg_tuinaanleg006.jpg", "Grindtuin met rotsen, lage beplanting en een lantaarn.", L, S, "tuinaanleg", "06"),
  photo("tuinaanleg_tuinaanleg007.jpg", "Jonge bomen langs een pad bij een gevel, met een haag op de voorgrond.", L, S, "tuinaanleg", "07"),
  photo("tuinaanleg_tuinaanleg008.jpg", "Smalle border met jonge aanplant langs een gevel en een pad.", L, S, "tuinaanleg", "08"),
  photo("tuinaanleg_tuinaanleg009.jpg", "Haag en jonge bomen langs een pad bij een woning.", L, S, "tuinaanleg", "09"),
  photo("tuinaanleg_tuinaanleg010.jpg", "Border met heesters en een jonge boom langs een pad bij de gevel.", L, S, "tuinaanleg", "10"),
  photo("tuinaanleg_tuinaanleg011.jpg", "Pad langs een gevel, met een geschoren haag ervoor.", L, S, "tuinaanleg", "11"),
  photo("tuinaanleg_tuinaanleg012.jpg", "Verhoogde border met heesters langs een gevel.", L, S, "tuinaanleg", "12"),
  photo("tuinaanleg_tuinaanleg013.jpg", "Smal tegelpad tussen groene borders.", L, S, "tuinaanleg", "13"),
  photo("tuinaanleg_tuinaanleg014.jpg", "Strakke hagen en een klinkerpad tussen de borders.", L, S, "tuinaanleg", "14", true),
  photo("tuinaanleg_tuinaanleg015.jpg", "Grindstrook met stapstenen, siergras en een lantaarn langs een schutting.", L, S, "tuinaanleg", "15"),
  photo("tuinaanleg_tuinaanleg016.jpg", "Formele tuin met geschoren hagen, een prieelboog en een grindpad.", L, S, "tuinaanleg", "16", true),
  photo("tuinaanleg_tuinaanleg017.jpg", "Kleurige border met vaste planten en heesters.", L, S, "tuinaanleg", "17"),
  photo("tuinaanleg_tuinaanleg018.jpg", "Voortuin met een pad, een haag en een zitplek bij de gevel.", L, S, "tuinaanleg", "18"),
  photo("tuinaanleg_tuinaanleg019.jpg", "Grondwerk: open grond, hagen en een pad dat blijft liggen.", L, S, "tuinaanleg", "19"),
  photo("tuinaanleg_tuinaanleg020.jpg", "Nieuw klinkerpad in keperverband, met jonge hagen en een verse border.", L, S, "tuinaanleg", "20"),
  photo("tuinaanleg_tuinaanleg021.jpg", "Plantvak met een jonge boom tussen betontegels.", L, S, "tuinaanleg", "21"),
  photo("tuinaanleg_tuinaanleg022.jpg", "Gazon met een pad naar een tuinhuis.", L, S, "tuinaanleg", "22"),
  photo("tuinaanleg_tuinaanleg023.jpg", "Gazon met een schuur en hoge bomen langs de rand.", L, S, "tuinaanleg", "23"),
  photo("tuinaanleg_tuinaanleg024.jpg", "Houten overkapping in aanbouw, met staanders en liggers.", L, S, "tuinaanleg", "24"),
  photo("tuinaanleg_tuinaanleg025.jpg", "Houtskelet van een overkapping op een bestaand terras.", L, S, "tuinaanleg", "25"),
  photo("tuinaanleg_tuinaanleg026.jpg", "Binnenkant van een houten overkapping tijdens de opbouw.", L, S, "tuinaanleg", "26"),
  photo("tuinaanleg_tuinaanleg027.jpg", "Overkapping in aanbouw, met open zijden op een terras.", L, S, "tuinaanleg", "27"),
  photo("tuinaanleg_tuinaanleg028.jpg", "Overkapping met een ladder ertegen, de zijden nog open.", L, S, "tuinaanleg", "28"),
  photo("tuinaanleg_tuinaanleg029.jpg", "Houten overkapping van binnenuit, met zicht op een groene haag.", L, P, "tuinaanleg", "29"),
  photo("tuinaanleg_tuinaanleg030.jpg", "Afgewerkte houten overkapping met open zijden en een dak.", L, S, "tuinaanleg", "30"),

  photo("bestrating_bestrating001.jpg", "Klinkers in keperverband, deels gelegd op zand, met een kruiwagen ernaast.", L, S, "sierbestrating", "01"),
  photo("bestrating_bestrating002.jpg", "Hoekdetail van klinkers in halfsteensverband langs een gemetselde gevel.", L, S, "sierbestrating", "02"),
  photo("bestrating_bestrating003.jpg", "Pad in keperverband tussen een grindstrook en een haag, langs een gevel.", L, S, "sierbestrating", "03"),
  photo("bestrating_bestrating004.jpg", "Uitsparing in betontegels rond een regenpijp, strak tegen de gevel.", L, P, "sierbestrating", "04"),
  photo("bestrating_bestrating005.jpg", "Pad en oprit in lichte klinkers, met een gebogen opsluitband naar de voordeur.", L, P, "sierbestrating", "05"),
  photo("bestrating_bestrating006.jpg", "Detail van een gebogen keperverband in lichte klinkers, met een opsluitband.", L, P, "sierbestrating", "06", true),
  photo("bestrating_bestrating007.jpg", "Gebogen opsluiting van een terras in lichte klinkers langs een gevel.", L, P, "sierbestrating", "07"),
  photo("bestrating_bestrating008.jpg", "Grondwerk met kabels en een aansluitdoos, klaar om weggewerkt te worden.", L, S, "sierbestrating", "08"),
  photo("bestrating_bestrating009.jpg", "Zandbed met een rij opsluitbanden, langs een hoge haag.", L, S, "sierbestrating", "09"),
  photo("bestrating_bestrating010.jpg", "Rechte opsluitband op een zandbed, met grond ernaast.", L, P, "sierbestrating", "10"),
  photo("bestrating_bestrating011.jpg", "Grondwerk en een nieuwe opsluitband langs een bestaande gevel.", L, S, "sierbestrating", "11"),
  photo("bestrating_bestrating012.jpg", "Terras in aanleg: grote tegels worden uitgelegd op een zandbed.", L, S, "sierbestrating", "12"),
  photo("bestrating_bestrating013.jpg", "Detail van betontegels in wildverband, met een opsluiting langs de rand.", L, S, "sierbestrating", "13"),
  photo("bestrating_bestrating014.jpg", "Aangelegd terras van roodbruine tegels, met een donkere opsluitband.", L, S, "sierbestrating", "14", true),

  photo("kunstgras_kunstgras001.jpg", "Strook kunstgras langs een schutting met klimop, naast een tegelpad.", L, S, "kunstgras", "01", true),
  photo("kunstgras_kunstgras002.jpg", "Strak kunstgras tegen een houten schutting, met een tegelpad erlangs.", L, S, "kunstgras", "02"),
  photo("kunstgras_kunstgras003.jpg", "Kunstgras rond een trampoline, met een tegelpad naar de achtertuin.", L, S, "kunstgras", "03"),
  photo("kunstgras_kunstgras004.jpg", "Naad waar kunstgras aansluit op een terras van betontegels.", L, 601, "kunstgras", "04"),
  photo("kunstgras_kunstgras005.jpg", "Rol kunstgras die wordt uitgerold over een onderdoek, langs een border.", L, S, "kunstgras", "05"),
  photo("kunstgras_kunstgras006.jpg", "Kunstgras in aanleg langs een volle border, de rol nog deels open.", L, S, "kunstgras", "06"),
  photo("kunstgras_kunstgras007.jpg", "Strak kunstgrasveld tussen een tegelpad en een border.", L, P, "kunstgras", "07"),
  photo("kunstgras_kunstgras008.jpg", "Kunstgras langs een klinkerpad, met borders en een haag eromheen.", L, S, "kunstgras", "08", true),

  photo("tuinrenovatie_tuinrenovatie001.jpg", "Tuin in renovatie: oude beplanting, grind en kruiwagens op het pad.", L, S, "renovatie", "01"),
  photo("tuinrenovatie_tuinrenovatie002.jpg", "Border die wordt leeggemaakt, met blad, stronken en een kruiwagen.", L, S, "renovatie", "02"),
  photo("tuinrenovatie_tuinrenovatie003.jpg", "Zandbed met stelstenen langs een gevel, klaar voor de nieuwe laag.", L, S, "renovatie", "03"),
  photo("tuinrenovatie_tuindeuren001.jpg", "Nieuwe houten poortdeur tussen gemetselde penanten.", L, S, "renovatie", "04"),
  photo("tuinrenovatie_tuindeuren002.jpg", "Houten poortdeur met een stalen kruis, openstaand in een gemetselde muur.", L, S, "renovatie", "05", true),
];

export const featuredProjects = projects.filter((p) => p.featured);
