import ContactForm from "@/components/ContactForm";
import Gallery from "@/components/Gallery";
import PhotoFrame from "@/components/PhotoFrame";
import { projects } from "@/lib/projects";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Kunstgras",
  description:
    "Kunstgras leveren en aanleggen, voor een kleine of grote tuin, schaduw, balkon of dakterras. Peter Vossebeld, hovenier in Haaksbergen.",
};

const photos = projects.filter((p) => p.category === "kunstgras");
const hero = photos.find((p) => p.src.endsWith("kunstgras008.jpg"))!;

export default function KunstgrasPage() {
  return (
    <main id="inhoud" className="flex-1">
      <section data-section="hero">
        <div className="mx-auto grid max-w-[1180px] grid-cols-12 items-end gap-8 px-5 py-12 lg:py-16">
          <div className="col-span-12 lg:col-span-6">
            <p className="font-mono text-[12px] tracking-[0.16em] uppercase">Kunstgras</p>
            <h1 className="mt-4 text-5xl font-extrabold">Een groen gazon, het hele jaar.</h1>
            <p className="mt-6">
              Heeft u geen tijd om het gazon te onderhouden, en wilt u niet meer maaien? Ligt de tuin in de schaduw, zodat gras niet gedijt? Of spelen de kinderen het gras stuk? Dan kan kunstgras de oplossing zijn. Er zijn varianten die nauwelijks nog van echt gras te onderscheiden zijn.
            </p>
            <Link href="#tuin-bespreken" data-cta="offerte" className="mt-6 inline-flex min-h-11 items-center bg-klinker px-5 font-semibold text-white">
              Kunstgras bespreken
            </Link>
          </div>
          <div className="col-span-12 lg:col-span-6">
            <PhotoFrame src={hero.src} alt={hero.alt} width={hero.width} height={hero.height} caption={hero.sheet} priority sizes="(max-width: 1024px) 100vw, 560px" />
          </div>
        </div>
      </section>

      <section data-section="aanleg" className="border-t border-voeg">
        <div className="mx-auto max-w-[1180px] px-5 py-16">
          <h2 className="max-w-[18ch] text-4xl">Levering en aanleg, klein of groot</h2>
          <div className="mt-6 max-w-[44rem] space-y-4">
            <p>
              Ik verzorg de complete levering en de aanleg. Of u nu een kleine of een grote tuin heeft, veel of weinig schaduw, een balkon of een dakterras. Kunstgras heeft geen probleem met te veel zon of juist te weinig. U kunt het hele jaar van een groen vlak genieten.
            </p>
            <p>
              Ik adviseer u over de aanleg, over het type kunstgras en over de garantie op de producten en de werkzaamheden. De voorwaarden van die garantie bespreek ik met u bij de keuze; die hangen af van het product. Met uw wensen als uitgangspunt zoek ik de passende invulling.
            </p>
          </div>
        </div>
      </section>

      <section data-section="galerij" className="border-t border-voeg bg-wit">
        <div className="mx-auto max-w-[1180px] px-5 py-16">
          <h2 className="text-4xl">Kunstgras in beeld</h2>
          <div className="mt-8">
            <Gallery photos={photos} showFilters={false} />
          </div>
        </div>
      </section>

      <ContactForm intro="Een gazon, een schaduwplek, een balkon of een dakterras? Vertel de maat ongeveer. Ik adviseer over het type en kom kijken." />
    </main>
  );
}
