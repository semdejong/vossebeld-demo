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
  title: "Kunstgras",
  description:
    "Kunstgras leveren en aanleggen, voor een kleine of grote tuin, schaduw, balkon of dakterras. Peter Vossebeld, hovenier in Haaksbergen.",
};

const photos = projects.filter((p) => p.category === "kunstgras");
const hero = photos.find((p) => p.src.endsWith("kunstgras008.jpg"))!;
const rol = photos.find((p) => p.src.endsWith("kunstgras005.jpg"))!;

const plekken = [
  { label: "Kleine tuin", text: "Een strook naast het pad of een vak dat te smal is om te maaien. Kunstgras maakt er een groen vlak van dat het hele jaar meedoet." },
  { label: "Grote tuin", text: "Een gazon dat u niet meer elke week wilt maaien. Ik lever en leg het, van de rol tot de aansluiting op terras en border." },
  { label: "Schaduw", text: "Ligt de tuin zo dat gras niet gedijt, dan heeft kunstgras daar geen last van. Te veel zon is evenmin een bezwaar." },
  { label: "Balkon", text: "Ook een balkon kan een groen vlak krijgen. Ik adviseer welk type daar past, en leg het aan." },
  { label: "Dakterras", text: "Hetzelfde geldt voor een dakterras. De maat en de ondergrond bekijk ik ter plekke, voordat ik een offerte maak." },
];

const faq = [
  {
    q: "Levert u het kunstgras ook, of alleen de aanleg?",
    a: "Ik verzorg de complete levering en de aanleg. U hoeft de rol niet zelf te regelen.",
  },
  {
    q: "Kan het op een balkon of een dakterras?",
    a: "Ja. Voor een kleine of grote tuin, bij schaduw, op een balkon of een dakterras. Ik kom kijken welke maat en welk type passen.",
  },
  {
    q: "Hoe zit het met de garantie?",
    a: "Ik adviseer u over de garantie op de producten en op de werkzaamheden. De voorwaarden hangen af van het product. Die bespreek ik met u bij de keuze.",
  },
  {
    q: "Wat kost kunstgras?",
    a: "Dat hangt af van de maat en van het type. Ik kom langs en maak een heldere offerte, zodat u de werkzaamheden en de kosten ziet. Een bedrag zonder de plek te zien, geef ik niet.",
  },
];

export default function KunstgrasPage() {
  return (
    <main id="inhoud" className="flex-1">
      <section data-section="hero">
        <div className="mx-auto grid max-w-[1180px] grid-cols-12 items-center gap-8 px-5 py-12 lg:py-16">
          <div className="col-span-12 lg:col-span-6">
            <p className="font-mono text-[12px] tracking-[0.16em] uppercase">Kunstgras · Haaksbergen</p>
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

      <section data-section="plekken" className="border-t border-voeg bg-wit">
        <div className="mx-auto max-w-[1180px] px-5 py-16">
          <p className="font-mono text-[11px] tracking-[0.16em] uppercase">Waar het ligt</p>
          <h2 className="mt-3 max-w-[18ch] text-4xl">Klein, groot, schaduw, balkon, dak</h2>
          <p className="mt-4 max-w-[42rem]">
            De plek bepaalt het type. Met uw wensen als uitgangspunt zoek ik de passende invulling, en daarna leg ik het zelf.
          </p>
          <div className="mt-8">
            <SpecRows rows={plekken} />
          </div>
        </div>
      </section>

      <section data-section="aanleg" className="border-t border-voeg">
        <div className="mx-auto grid max-w-[1180px] grid-cols-12 items-center gap-8 px-5 py-16">
          <div className="col-span-12 lg:col-span-6">
            <PhotoFrame src={rol.src} alt={rol.alt} width={rol.width} height={rol.height} caption={rol.sheet} sizes="(max-width: 1024px) 100vw, 560px" />
          </div>
          <div className="col-span-12 lg:col-span-6">
            <p className="font-mono text-[11px] tracking-[0.16em] uppercase">Aanleg</p>
            <h2 className="mt-3 text-4xl">Van rol tot aansluiting</h2>
            <div className="mt-4 space-y-4">
              <p>
                Ik verzorg de complete levering en de aanleg. De rol gaat de tuin in, en het vlak sluit aan op terras, pad en border. Die naad hoort net zo strak als de rest van het straatwerk.
              </p>
              <p>
                Ik adviseer u over de aanleg, over het type kunstgras en over de garantie op de producten en de werkzaamheden. De voorwaarden van die garantie bespreek ik met u bij de keuze; die hangen af van het product.
              </p>
            </div>
            <Link href="/sierbestrating" className="mt-6 inline-flex min-h-11 items-center border border-basalt px-4">
              Naar sierbestrating
            </Link>
          </div>
        </div>
      </section>

      <section data-section="galerij" className="border-t border-voeg bg-wit">
        <div className="mx-auto max-w-[1180px] px-5 py-16">
          <p className="font-mono text-[11px] tracking-[0.16em] uppercase">{photos.length} bladen · kunstgras</p>
          <h2 className="mt-3 text-4xl">Kunstgras in beeld</h2>
          <p className="mt-4 max-w-[40rem]">Acht foto’s van levering en aanleg: de rol, de naad op het terras, en het vlak als het klaar is.</p>
          <div className="mt-8">
            <Gallery photos={photos} showFilters={false} />
          </div>
        </div>
      </section>

      <section data-section="faq" className="border-t border-voeg">
        <div className="mx-auto max-w-[1180px] px-5 py-16">
          <h2 className="text-4xl">Vragen</h2>
          <div className="mt-6">
            <FaqList items={faq} />
          </div>
        </div>
      </section>

      <Bladwijzer current="/kunstgras" />
      <ContactForm intro="Een gazon, een schaduwplek, een balkon of een dakterras? Vertel de maat ongeveer. Ik adviseer over het type en kom kijken." />
    </main>
  );
}
