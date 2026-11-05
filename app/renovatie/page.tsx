import ContactForm from "@/components/ContactForm";
import Gallery from "@/components/Gallery";
import { projects } from "@/lib/projects";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Tuinrenovatie",
  description:
    "Tuinrenovatie van een kleine aanpassing tot een ingrijpende verandering. Bestaande elementen kunnen blijven. Peter Vossebeld, Haaksbergen.",
};

const photos = projects.filter((p) => p.category === "renovatie");

export default function RenovatiePage() {
  return (
    <main id="inhoud" className="flex-1">
      <section data-section="hero">
        <div className="mx-auto max-w-[1180px] px-5 py-12 lg:py-16">
          <p className="font-mono text-[12px] tracking-[0.16em] uppercase">Renovatie</p>
          <h1 className="mt-4 max-w-[16ch] text-5xl font-extrabold">De tuin opnieuw, met wat goed is gebleven.</h1>
          <p className="mt-6 max-w-[42rem]">
            Bent u uitgekeken op de tuin? Soms volstaat een kleine aanpassing, soms is een ingrijpende verandering nodig. Is uw smaak anders dan die van de vorige bewoners, of wilt u een siertuin? Of het nu om de beplanting gaat of om het complete ontwerp: ik voer de renovatie voor u uit.
          </p>
          <Link href="#tuin-bespreken" data-cta="offerte" className="mt-6 inline-flex min-h-11 items-center bg-klinker px-5 font-semibold text-white">
            Renovatie bespreken
          </Link>
        </div>
      </section>

      <section data-section="aanpak" className="border-t border-voeg bg-wit">
        <div className="mx-auto max-w-[1180px] px-5 py-16">
          <h2 className="text-4xl">Eerst een degelijk ontwerp</h2>
          <div className="mt-8 max-w-[44rem] space-y-4">
            <p>
              Iedere tuinrenovatie begint met een degelijk ontwerp. Net als bij een nieuwe tuin breng ik uw wensen in kaart. Welke bestaande elementen wilt u houden? Een terras, een boom, een schutting, een pad.
            </p>
            <p>
              We kijken ook naar het onderhoud dat u daarna wilt. De tuin moet aansluiten bij uw voorkeur, niet bij een tekening die u vervolgens niet kunt bijhouden.
            </p>
            <p>
              Zodra het ontwerp af is, kom ik langs om het te bespreken en de offerte aan te bieden. Daarin ziet u de werkzaamheden en de kosten.
            </p>
          </div>
        </div>
      </section>

      <section data-section="galerij" className="border-t border-voeg">
        <div className="mx-auto max-w-[1180px] px-5 py-16">
          <h2 className="text-4xl">Renovatie in beeld</h2>
          <div className="mt-8">
            <Gallery photos={photos} showFilters={false} />
          </div>
        </div>
      </section>

      <ContactForm intro="Wat wilt u houden, en wat mag anders? Beschrijf de tuin kort. Ik kom het ontwerp en de offerte met u bespreken." />
    </main>
  );
}
