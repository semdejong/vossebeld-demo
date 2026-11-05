import Bladwijzer from "@/components/Bladwijzer";
import ContactForm from "@/components/ContactForm";
import FaqList from "@/components/FaqList";
import Gallery from "@/components/Gallery";
import PhotoFrame from "@/components/PhotoFrame";
import SpecRows from "@/components/SpecRows";
import { projects } from "@/lib/projects";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Tuinrenovatie",
  description:
    "Tuinrenovatie van een kleine aanpassing tot een ingrijpende verandering. Bestaande elementen kunnen blijven. Peter Vossebeld, Haaksbergen.",
};

const photos = projects.filter((p) => p.category === "renovatie");
const hero = photos.find((p) => p.src.endsWith("tuindeuren002.jpg"))!;

const maten = [
  {
    label: "Kleine aanpassing",
    text: "Een border die anders moet, een pad dat knelt, een terras dat te klein is geworden. De rest van de tuin blijft liggen.",
  },
  {
    label: "Ingrijpend",
    text: "De indeling zelf klopt niet meer. Dan gaat het om grondwerk, bestrating en beplanting samen, met een tekening ervoor.",
  },
  {
    label: "Wat blijft",
    text: "Een terras, een boom, een schutting of een pad. In de kennismaking tekenen we aan wat u wilt houden, en wat weg mag.",
  },
  {
    label: "Onderhoud daarna",
    text: "We kijken ook naar het onderhoud dat u daarna wilt. De tuin moet aansluiten bij uw voorkeur, ook als de aanleg klaar is.",
  },
];

const faq = [
  {
    q: "Kan het bij een kleine aanpassing blijven?",
    a: "Ja. Soms volstaat een kleine aanpassing, soms is een ingrijpende verandering nodig. Dat zien we in de tuin, niet vanaf een foto alleen.",
  },
  {
    q: "Kunnen bestaande elementen blijven?",
    a: "Ja. Een terras, een boom, een schutting of een pad kan blijven. Dat leggen we vast in het ontwerp, zodat het niet per ongeluk sneuvelt.",
  },
  {
    q: "Begint een renovatie met een ontwerp?",
    a: "Ja. Iedere tuinrenovatie begint met een degelijk ontwerp. Zodra dat af is, kom ik langs om het te bespreken en de offerte aan te bieden.",
  },
  {
    q: "Wat kost een renovatie?",
    a: "Dat hangt af van wat er blijft en wat er verandert. Ik kom kijken en maak een heldere offerte. Daarin staan de werkzaamheden en de kosten. Een bedrag noemen zonder de tuin te zien, doe ik niet.",
  },
];

export default function RenovatiePage() {
  return (
    <main id="inhoud" className="flex-1">
      <section data-section="hero">
        <div className="mx-auto grid max-w-[1180px] grid-cols-12 items-center gap-8 px-5 py-12 lg:py-16">
          <div className="col-span-12 lg:col-span-7">
            <p className="font-mono text-[12px] tracking-[0.16em] uppercase">Renovatie · Haaksbergen</p>
            <h1 className="mt-4 max-w-[16ch] text-5xl font-extrabold">De tuin opnieuw, met wat goed is gebleven.</h1>
            <p className="mt-6 max-w-[42rem]">
              Bent u uitgekeken op de tuin? Is uw smaak anders dan die van de vorige bewoners, of wilt u een siertuin? Of het nu om de beplanting gaat of om het complete ontwerp: ik voer de renovatie voor u uit.
            </p>
            <p className="mt-4 max-w-[42rem]">
              De poort op de foto is een ingreep die de tuin een nieuwe voorkant geeft, terwijl de muur blijft staan.
            </p>
            <Link href="#tuin-bespreken" data-cta="offerte" className="mt-6 inline-flex min-h-11 items-center bg-klinker px-5 font-semibold text-white">
              Renovatie bespreken
            </Link>
          </div>
          <div className="col-span-12 lg:col-span-5">
            <PhotoFrame src={hero.src} alt={hero.alt} width={hero.width} height={hero.height} caption={hero.sheet} priority sizes="(max-width: 1024px) 100vw, 480px" />
          </div>
        </div>
      </section>

      <section data-section="aanpak" className="border-t border-voeg bg-wit">
        <div className="mx-auto grid max-w-[1180px] grid-cols-12 gap-10 px-5 py-16">
          <div className="col-span-12 lg:col-span-4">
            <p className="font-mono text-[11px] tracking-[0.16em] uppercase">Aanpak</p>
            <h2 className="mt-3 text-4xl">Eerst een degelijk ontwerp</h2>
            <p className="mt-4">
              Net als bij een nieuwe tuin breng ik uw wensen in kaart. Zodra het ontwerp af is, kom ik langs om het te bespreken en de offerte aan te bieden.
            </p>
            <Link href="/ontwerp" className="mt-6 inline-flex min-h-11 items-center border border-basalt px-4">
              Hoe een ontwerp loopt
            </Link>
          </div>
          <div className="col-span-12 lg:col-span-8">
            <SpecRows rows={maten} />
          </div>
        </div>
      </section>

      <section data-section="galerij" className="border-t border-voeg">
        <div className="mx-auto max-w-[1180px] px-5 py-16">
          <p className="font-mono text-[11px] tracking-[0.16em] uppercase">{photos.length} bladen · renovatie</p>
          <h2 className="mt-3 text-4xl">Renovatie in beeld</h2>
          <p className="mt-4 max-w-[42rem]">
            Een border die wordt leeggemaakt, een zandbed langs de gevel, en nieuwe poortdeuren in bestaand metselwerk. De foto’s laten het werk zien, geen adressen.
          </p>
          <div className="mt-8">
            <Gallery photos={photos} showFilters={false} />
          </div>
        </div>
      </section>

      <section data-section="faq" className="border-t border-voeg bg-wit">
        <div className="mx-auto max-w-[1180px] px-5 py-16">
          <h2 className="text-4xl">Vragen</h2>
          <div className="mt-6">
            <FaqList items={faq} />
          </div>
        </div>
      </section>

      <Bladwijzer current="/renovatie" />
      <ContactForm intro="Wat wilt u houden, en wat mag anders? Beschrijf de tuin kort. Ik kom het ontwerp en de offerte met u bespreken." />
    </main>
  );
}
