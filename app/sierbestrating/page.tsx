import Bladwijzer from "@/components/Bladwijzer";
import BondSwatch from "@/components/BondSwatch";
import ContactForm from "@/components/ContactForm";
import FaqList from "@/components/FaqList";
import Gallery from "@/components/Gallery";
import PhotoFrame from "@/components/PhotoFrame";
import SpecRows from "@/components/SpecRows";
import type { BondId } from "@/content";
import { content } from "@/content";
import { projects } from "@/lib/projects";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sierbestrating Haaksbergen",
  description:
    "Sierbestrating in Haaksbergen, Twente en de Achterhoek. Van beton tot natuursteen. U kiest de tegels, Peter Vossebeld legt het straatwerk tot in de puntjes.",
};

const photos = projects.filter((p) => p.category === "sierbestrating");
const hero = photos.find((p) => p.src.endsWith("bestrating005.jpg")) ?? photos[0];
const detail = photos.find((p) => p.src.endsWith("bestrating006.jpg"))!;

const materialen = [
  {
    label: "Beton",
    text: "Strak in maat. Rustig van kleur, of een tint die bij de gevel past. Goed te leggen in halfsteens, keper of elleboog.",
  },
  {
    label: "Natuursteen",
    text: "Ongelijker en levendiger. Vaak in wildverband, als de maten het toelaten. De afwerking blijft tot in de puntjes.",
  },
  {
    label: "Uw tegel",
    text: "Alles daartussen bespreken we aan de hand van de tegel die u mooi vindt. Formaat, kleur en voeg bepalen de sfeer.",
  },
  {
    label: "Waar het komt",
    text: "Een pad, een terras of een oprit. Ook de aansluiting op gevel, border of gazon hoort bij het straatwerk.",
  },
];

const verbanden: { bond: BondId; title: string; text: string }[] = [
  {
    bond: "halfsteens",
    title: "Halfsteensverband",
    text: "De steen verspringt een halve lengte. Rustig om te zien, en een stevig verband voor een pad of een oprit.",
  },
  {
    bond: "keper",
    title: "Keperverband",
    text: "De visgraat. De stenen staan schuin op elkaar. Strak, en ook in een boog goed te leggen.",
  },
  {
    bond: "elleboog",
    title: "Elleboogverband",
    text: "De stenen liggen haaks op elkaar, als een elleboog. Een levendiger lijn dan halfsteens, zonder de schuine keper.",
  },
  {
    bond: "wildverband",
    title: "Wildverband",
    text: "Verschillende formaten door elkaar. Dat past bij grotere tegels en bij natuursteen, als de maten het toelaten.",
  },
];

const faq = [
  {
    q: "Kunt u ook alleen de bestrating doen?",
    a: "Ja. Een pad, een terras of een oprit kan los, zonder dat de rest van de tuin op de schop gaat. Ik kom kijken, u kiest de tegels, en ik leg het straatwerk.",
  },
  {
    q: "Kan ik zelf de tegels uitkiezen?",
    a: "Ja. U kiest de tegels die u mooi vindt. De rest kunt u aan mij overlaten: het zandbed, het verband, de opsluiting en de afwerking.",
  },
  {
    q: "Wat kost het?",
    a: "Dat hangt af van het aantal vierkante meters en van het materiaal, van beton tot natuursteen. Ik kom langs, bekijk de tuin en maak een heldere offerte. Daarin staan de werkzaamheden en de kosten. Een bedrag noemen zonder de situatie te zien, doe ik niet.",
  },
  {
    q: "Werkt u ook buiten Haaksbergen?",
    a: "Ja. Ik werk voornamelijk in Oost Nederland: Twente en de Achterhoek.",
  },
];

export default function SierbestratingPage() {
  return (
    <main id="inhoud" className="flex-1">
      <section data-section="hero">
        <div className="mx-auto grid max-w-[1180px] grid-cols-12 items-center gap-8 px-5 py-12 lg:py-16">
          <div className="col-span-12 lg:col-span-6">
            <p className="font-mono text-[12px] tracking-[0.16em] uppercase">Sierbestrating · Haaksbergen</p>
            <h1 className="mt-4 text-5xl font-extrabold sm:text-6xl">Bestrating die de tuin draagt.</h1>
            <p className="mt-6">
              De bestrating bepaalt voor een groot deel de sfeer. Het is geen losse strook steen: het terras en de paden horen bij de tuin, en vaak ook bij het huis. Ik denk met u mee over het materiaal, van beton tot natuursteen.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="#tuin-bespreken" data-cta="offerte" className="inline-flex min-h-11 items-center bg-klinker px-5 font-semibold text-white">
                Tuin bespreken
              </Link>
              <a href={content.contact.phoneTel} data-cta="bellen" className="inline-flex min-h-11 items-center border border-basalt px-4">
                {content.contact.phoneDisplay}
              </a>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-6">
            <PhotoFrame
              src={hero.src}
              alt={hero.alt}
              width={hero.width}
              height={hero.height}
              caption={hero.sheet}
              priority
              sizes="(max-width: 1024px) 100vw, 560px"
            />
          </div>
        </div>
      </section>

      <section data-section="sfeer" className="border-t border-voeg">
        <div className="mx-auto grid max-w-[1180px] grid-cols-12 gap-8 px-5 py-16">
          <div className="col-span-12 lg:col-span-4">
            <p className="font-mono text-[11px] tracking-[0.16em] uppercase">Sfeer</p>
            <h2 className="mt-3 text-4xl">Een verlengstuk van het huis</h2>
          </div>
          <div className="col-span-12 max-w-[44rem] space-y-4 lg:col-span-8">
            <p>
              Sierbestrating maakt deel uit van het interieur, of het is een verlengstuk ervan. Tuinbestrating is een sfeerbepalend element en draagt in hoge mate bij aan de uitstraling van de tuin.
            </p>
            <p>
              Graag adviseer ik u en denk ik mee over uw ideeën en over de materialen. Van beton tot natuursteen. U kiest de tegels die u mooi vindt en de rest kunt u aan mij overlaten. Het straatwerk krijgt aandacht, wordt vakkundig gelegd en tot in de puntjes afgewerkt.
            </p>
          </div>
        </div>
      </section>

      <section data-section="materialen" className="border-t border-voeg bg-wit">
        <div className="mx-auto grid max-w-[1180px] grid-cols-12 items-start gap-8 px-5 py-16">
          <div className="col-span-12 lg:col-span-5">
            <p className="font-mono text-[11px] tracking-[0.16em] uppercase">Materiaal · van beton tot natuursteen</p>
            <h2 className="mt-3 text-4xl">De steen die u mooi vindt</h2>
            <p className="mt-4">
              Eerst de sfeer, dan de tegel die u mooi vindt, dan het verband dat daarbij past.
            </p>
            <div className="mt-8">
              <PhotoFrame src={detail.src} alt={detail.alt} width={detail.width} height={detail.height} caption={detail.sheet} sizes="(max-width: 1024px) 100vw, 480px" />
            </div>
          </div>
          <div className="col-span-12 lg:col-span-7">
            <SpecRows rows={materialen} />
          </div>
        </div>
      </section>

      <section data-section="verbanden" className="border-t border-voeg">
        <div className="mx-auto max-w-[1180px] px-5 py-16">
          <p className="font-mono text-[11px] tracking-[0.16em] uppercase">Verbanden · opties</p>
          <h2 className="mt-3 max-w-[18ch] text-4xl">Hoe de stenen in elkaar grijpen</h2>
          <p className="mt-4 max-w-[42rem]">
            Dit zijn verbanden die ik met u kan doornemen. Het zijn geen verplichte keuzes: het verband volgt de tegel, de bocht en het gebruik. U kiest de tegels, ik leg ze in het verband dat bij de tuin past.
          </p>
          <div className="mt-8 border-t border-basalt">
            {verbanden.map((item) => (
              <div key={item.title} className="grid grid-cols-12 items-center gap-4 border-b border-voeg py-4">
                <BondSwatch bond={item.bond} className="col-span-12 h-24 border border-voeg sm:col-span-3" />
                <div className="col-span-12 sm:col-span-9">
                  <h3 className="text-2xl">{item.title}</h3>
                  <p className="mt-2">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section data-section="werkwijze" className="border-t border-voeg bg-basalt text-wit">
        <div className="mx-auto max-w-[1180px] px-5 py-16">
          <p className="font-mono text-[11px] tracking-[0.16em] uppercase">Werkwijze</p>
          <h2 className="mt-3 text-4xl">U kiest, ik leg</h2>
          <ol className="mt-8 border-t border-zandlaag">
            <li className="grid grid-cols-12 gap-4 border-b border-voeg py-4">
              <p className="col-span-12 font-mono text-[11px] tracking-[0.14em] uppercase sm:col-span-3">Advies</p>
              <p className="col-span-12 sm:col-span-9">Ik kom kijken en bespreek met u wat het pad of het terras moet kunnen: lopen, zitten, een auto, een bocht om de border.</p>
            </li>
            <li className="grid grid-cols-12 gap-4 border-b border-voeg py-4">
              <p className="col-span-12 font-mono text-[11px] tracking-[0.14em] uppercase sm:col-span-3">Uw keuze</p>
              <p className="col-span-12 sm:col-span-9">U kiest de tegels die u mooi vindt, van beton tot natuursteen.</p>
            </li>
            <li className="grid grid-cols-12 gap-4 border-b border-voeg py-4">
              <p className="col-span-12 font-mono text-[11px] tracking-[0.14em] uppercase sm:col-span-3">Aanleg</p>
              <p className="col-span-12 sm:col-span-9">Het zandbed, de opsluiting, het verband en de aansluiting op gevel, border of gazon. Afwerking tot in de puntjes.</p>
            </li>
            <li className="grid grid-cols-12 gap-4 border-b border-voeg py-4">
              <p className="col-span-12 font-mono text-[11px] tracking-[0.14em] uppercase sm:col-span-3">Offerte</p>
              <p className="col-span-12 sm:col-span-9">Vooraf een heldere offerte, zodat u de werkzaamheden en de kosten ziet. Geen bedrag voordat ik de tuin heb gezien.</p>
            </li>
          </ol>
        </div>
      </section>

      <section data-section="galerij" className="border-t border-voeg bg-wit">
        <div className="mx-auto max-w-[1180px] px-5 py-16">
          <p className="font-mono text-[11px] tracking-[0.16em] uppercase">Bladen · sierbestrating</p>
          <h2 className="mt-3 text-4xl">Veertien foto&apos;s van straatwerk</h2>
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

      <Bladwijzer current="/sierbestrating" />
      <ContactForm intro="Wilt u een terras, een pad of een oprit? Beschrijf kort de plek. Ik kom kijken en maak een heldere offerte." />
    </main>
  );
}
