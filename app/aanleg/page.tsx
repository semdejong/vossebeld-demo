import ContactForm from "@/components/ContactForm";
import Doorsnede from "@/components/Doorsnede";
import Gallery from "@/components/Gallery";
import PhotoFrame from "@/components/PhotoFrame";
import { projects } from "@/lib/projects";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Tuinaanleg",
  description:
    "Tuinaanleg in vier fases: inmeten, grondwerk, bestrating en beplanting. Peter Vossebeld, hovenier in Haaksbergen, Twente en de Achterhoek.",
};

const wide = {
  src: "/img/header/header1_v1.jpg",
  alt: "Tuin in aanleg: zandbedden, jonge bomen en verse grond langs een haag.",
  width: 1950,
  height: 606,
};
const photos = projects.filter((p) => p.category === "tuinaanleg").slice(0, 8);

export default function AanlegPage() {
  return (
    <main id="inhoud" className="flex-1">
      <section data-section="hero">
        <div className="mx-auto grid max-w-[1180px] grid-cols-12 items-end gap-8 px-5 py-12 lg:py-16">
          <div className="col-span-12 lg:col-span-6">
            <p className="font-mono text-[12px] tracking-[0.16em] uppercase">Aanleg · vier fases</p>
            <h1 className="mt-4 text-5xl font-extrabold">De tuin, van de grond af aan.</h1>
            <p className="mt-6">
              Is het ontwerp klaar, het beplantingsplan afgerond en zijn de materialen uitgezocht, dan begint het echte werk. Ik verzorg de tuinaanleg van begin tot eind, volgens afspraak.
            </p>
            <p className="mt-4">
              Als u de tuin laat aanleggen, heeft u snel resultaat. Terras, beplanting en schutting worden op elkaar afgestemd.
            </p>
            <Link href="#tuin-bespreken" data-cta="offerte" className="mt-6 inline-flex min-h-11 items-center bg-klinker px-5 font-semibold text-white">
              Tuin bespreken
            </Link>
          </div>
          <div className="col-span-12 lg:col-span-6">
            <PhotoFrame src={wide.src} alt={wide.alt} width={wide.width} height={wide.height} caption="blad H · grondwerk" priority sizes="(max-width: 1024px) 100vw, 560px" />
          </div>
        </div>
      </section>

      <Doorsnede />

      <section data-section="galerij" className="border-t border-voeg">
        <div className="mx-auto max-w-[1180px] px-5 py-16">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2 className="text-4xl">Aanleg in beeld</h2>
            <Link href="/projecten" className="inline-flex min-h-11 items-center border border-basalt px-4">Alle projecten</Link>
          </div>
          <div className="mt-8">
            <Gallery photos={photos} showFilters={false} />
          </div>
        </div>
      </section>

      <ContactForm intro="Wilt u een tuin laten aanleggen? Vertel hoe de tuin er nu bij ligt. Ik kom kijken en werk van ontwerp naar offerte." />
    </main>
  );
}
