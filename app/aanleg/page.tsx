import Bladwijzer from "@/components/Bladwijzer";
import ContactForm from "@/components/ContactForm";
import Doorsnede from "@/components/Doorsnede";
import Gallery from "@/components/Gallery";
import PhotoFrame from "@/components/PhotoFrame";
import { content } from "@/content";
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

const blad = ["tuinaanleg001.jpg", "tuinaanleg004.jpg", "tuinaanleg006.jpg", "tuinaanleg014.jpg", "tuinaanleg016.jpg", "tuinaanleg017.jpg", "tuinaanleg019.jpg", "tuinaanleg020.jpg", "tuinaanleg022.jpg", "tuinaanleg003.jpg", "tuinaanleg013.jpg", "tuinaanleg030.jpg"];
const photos = blad.map((file) => projects.find((p) => p.src.endsWith(file))).filter((p) => p !== undefined);

const faseFoto: Record<string, string | undefined> = {
  aarde: "tuinaanleg019.jpg",
  straat: "tuinaanleg020.jpg",
  groen: "tuinaanleg017.jpg",
};

const toelichting: Record<string, string> = {
  zand: "Dit is de laag onder alles. Ik meet waar het terras, het gazon en de paden komen. Die maten gaan de tekening op, en de rest van de aanleg schuift daarop.",
  aarde: "Bij een bestaande tuin gaan oude planten en het oude straatwerk eruit. De grond wordt bewerkt en klaargemaakt: glooien waar het moet, en een goede bemesting. Op de foto ligt de tuin open.",
  straat: "De paden en terrassen worden bestraat en de schuttingen geplaatst. Hier ziet u al hoe de verhoudingen worden. De steen legt vast wat op de tekening stond.",
  groen: "Tot slot wordt het (kunst)gras gelegd of gezaaid. Bomen, struiken en planten krijgen volgens het beplantingsplan een plek. Dan is de lijn van idee tot laatste plant rond.",
};

const faseTint: Record<string, string> = {
  zand: "var(--zandlaag)",
  aarde: "var(--aarde)",
  straat: "var(--klinker)",
  groen: "var(--turf)",
};

export default function AanlegPage() {
  return (
    <main id="inhoud" className="flex-1">
      <section data-section="hero">
        <div className="mx-auto grid max-w-[1180px] grid-cols-12 items-center gap-8 px-5 py-12 lg:py-16">
          <div className="col-span-12 lg:col-span-6">
            <p className="font-mono text-[12px] tracking-[0.16em] uppercase">Aanleg · vier fases</p>
            <h1 className="mt-4 text-5xl font-extrabold">De tuin, van de grond af aan.</h1>
            <p className="mt-6">
              Is het ontwerp klaar, het beplantingsplan afgerond en zijn de materialen uitgezocht, dan begint het echte werk. Ik verzorg de tuinaanleg van begin tot eind, volgens afspraak.
            </p>
            <p className="mt-4">
              Terras, beplanting en schutting worden op elkaar afgestemd. U ziet het werk groeien, fase voor fase, en u houdt één aanspreekpunt.
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

      <section data-section="fases" className="border-t border-voeg bg-wit">
        <div className="mx-auto max-w-[1180px] px-5 py-16">
          <p className="font-mono text-[11px] tracking-[0.16em] uppercase">Bladen · per laag</p>
          <h2 className="mt-3 max-w-[16ch] text-4xl">Wat u per fase ziet</h2>
          <p className="mt-4 max-w-[42rem]">
            De doorsnede hierboven is de volgorde. Hieronder staat dezelfde volgorde in het werk. Bij inmeten hoort de tekening: de maten van terras, gazon en paden.
          </p>
          <div className="mt-10 border-t border-basalt">
            {content.phases.map((phase) => {
              const file = faseFoto[phase.key];
              const shot = file ? projects.find((p) => p.src.endsWith(file)) : undefined;
              return (
                <article key={phase.key} className="grid grid-cols-12 gap-6 border-b border-voeg py-8">
                  <div className="col-span-12 lg:col-span-5">
                    <div className="mb-4 h-2 w-16" style={{ background: faseTint[phase.key] }} />
                    <p className="font-mono text-[11px] tracking-[0.14em] uppercase">{phase.name}</p>
                    <h3 className="mt-2 text-3xl">{phase.title}</h3>
                    <p className="mt-3">{toelichting[phase.key]}</p>
                  </div>
                  <div className="col-span-12 lg:col-span-7">
                    {shot ? (
                      <PhotoFrame src={shot.src} alt={shot.alt} width={shot.width} height={shot.height} caption={shot.sheet} sizes="(max-width: 1024px) 100vw, 640px" />
                    ) : (
                      <div className="border border-voeg bg-straatzand p-5">
                        <p className="font-mono text-[11px] tracking-[0.14em] uppercase">Deze laag staat op de tekening</p>
                        <p className="mt-3">
                          De maten van terras, gazon en paden staan op de tekening. Een sfeerfoto hoort bij de lagen die u buiten ziet.
                        </p>
                      </div>
                    )}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section data-section="galerij" className="border-t border-voeg">
        <div className="mx-auto max-w-[1180px] px-5 py-16">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="font-mono text-[11px] tracking-[0.16em] uppercase">{photos.length} bladen · tuinaanleg</p>
              <h2 className="mt-3 text-4xl">Aanleg in beeld</h2>
            </div>
            <Link href="/projecten" className="inline-flex min-h-11 items-center border border-basalt px-4">Alle projecten</Link>
          </div>
          <p className="mt-4 max-w-[40rem]">
            Borders, paden, gazon en een overkapping in opbouw. De bijschriften zeggen wat er te zien is.
          </p>
          <div className="mt-8">
            <Gallery photos={photos} showFilters={false} />
          </div>
        </div>
      </section>

      <Bladwijzer current="/aanleg" />
      <ContactForm intro="Wilt u een tuin laten aanleggen? Vertel hoe de tuin er nu bij ligt. Ik kom kijken en werk van ontwerp naar offerte." />
    </main>
  );
}
