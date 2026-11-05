import Bladwijzer from "@/components/Bladwijzer";
import ContactForm from "@/components/ContactForm";
import PhotoFrame from "@/components/PhotoFrame";
import SpecRows from "@/components/SpecRows";
import { content } from "@/content";
import { projects } from "@/lib/projects";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Tuinonderhoud",
  description:
    "Tuinonderhoud in Haaksbergen, Twente en de Achterhoek. Bladruimen, snoeien, maaien, borders en bomen. Peter Vossebeld.",
};

const photo = projects.find((p) => p.src.endsWith("tuinaanleg016.jpg"))!;
const border = projects.find((p) => p.src.endsWith("tuinaanleg003.jpg"))!;

export default function OnderhoudPage() {
  return (
    <main id="inhoud" className="flex-1">
      <section data-section="hero">
        <div className="mx-auto grid max-w-[1180px] grid-cols-12 items-end gap-8 px-5 py-12 lg:py-16">
          <div className="col-span-12 lg:col-span-7">
            <p className="font-mono text-[12px] tracking-[0.16em] uppercase">Onderhoud · Twente en Achterhoek</p>
            <h1 className="mt-4 text-5xl font-extrabold">De tuin bijhouden.</h1>
            <p className="mt-6 max-w-[40rem]">
              Groen in de buurt en een goed onderhouden tuin zijn belangrijk. Niet alleen voor uw gezondheid en welzijn, ook voor de WOZ-waarde van de woning. Regelmatig onderhoud kost tijd. Gras maaien, struiken snoeien, bomen snoeien of een boom kappen vraagt bovendien vakkennis.
            </p>
            <p className="mt-4 max-w-[40rem]">
              Zoekt u een hovenier voor tuinonderhoud in Oost Nederland, en stelt u prijs op prettig contact en deskundigheid? Dan breng ik de tuin weer op orde. Een eenmalige beurt of werk dat terugkomt: dat spreken we af, en het staat in de offerte.
            </p>
            <Link href="#tuin-bespreken" data-cta="offerte" className="mt-6 inline-flex min-h-11 items-center bg-klinker px-5 font-semibold text-white">
              Onderhoud bespreken
            </Link>
          </div>
          <div className="col-span-12 lg:col-span-5">
            <PhotoFrame src={photo.src} alt={photo.alt} width={photo.width} height={photo.height} caption={photo.sheet} priority sizes="(max-width: 1024px) 100vw, 480px" />
          </div>
        </div>
      </section>

      <section data-section="werkzaamheden" className="border-t border-voeg bg-wit">
        <div className="mx-auto max-w-[1180px] px-5 py-16">
          <p className="font-mono text-[11px] tracking-[0.16em] uppercase">Werkstaat</p>
          <h2 className="mt-3 text-4xl">Wat ik uit handen neem</h2>
          <p className="mt-4 max-w-[42rem]">
            Dit is het onderhoud dat ik doe. U noemt wat blijft liggen, ik zeg wat ik kan overnemen.
          </p>
          <div className="mt-8">
            <SpecRows rows={content.onderhoud.map((item) => ({ label: item.task, text: item.text }))} />
          </div>
        </div>
      </section>

      <section data-section="seizoenen" className="border-t border-voeg">
        <div className="mx-auto grid max-w-[1180px] grid-cols-12 gap-10 px-5 py-16">
          <div className="col-span-12 lg:col-span-4">
            <p className="font-mono text-[11px] tracking-[0.16em] uppercase">Het jaar · geen kalender</p>
            <h2 className="mt-3 text-4xl">Het werk volgt de tuin</h2>
            <p className="mt-4">
              Er is geen vaste ronde die voor elke tuin hetzelfde is. Dit is hoe de taken zich meestal verdelen. Bellen of mailen kan het hele jaar.
            </p>
          </div>
          <div className="col-span-12 lg:col-span-8">
            <div className="border-t border-basalt">
              {content.seizoenen.map((seizoen) => (
                <div key={seizoen.label} className="grid grid-cols-12 border-b border-voeg">
                  <p className="col-span-12 px-1 py-4 font-display text-2xl font-bold sm:col-span-4">{seizoen.label}</p>
                  <p className="col-span-12 px-1 pb-4 sm:col-span-8 sm:py-4">{seizoen.text}</p>
                </div>
              ))}
            </div>
            <p className="mt-4 font-mono text-[11px] tracking-[0.12em] uppercase">
              {content.contact.hoursNote} Ik werk voornamelijk in Oost Nederland (Twente en de Achterhoek).
            </p>
          </div>
        </div>
      </section>

      <section data-section="waarom" className="border-t border-voeg bg-wit">
        <div className="mx-auto grid max-w-[1180px] grid-cols-12 items-center gap-8 px-5 py-16">
          <div className="col-span-12 lg:col-span-6">
            <PhotoFrame src={border.src} alt={border.alt} width={border.width} height={border.height} caption={border.sheet} sizes="(max-width: 1024px) 100vw, 520px" />
          </div>
          <div className="col-span-12 lg:col-span-6">
            <p className="font-mono text-[11px] tracking-[0.16em] uppercase">Welzijn en woning</p>
            <h2 className="mt-3 text-4xl">Een tuin die bijblijft</h2>
            <p className="mt-4">
              Een border die dichtgroeit of een gazon dat te lang blijft staan, haalt de tuin onderuit. Onderhoud houdt de verhoudingen vast die bij de aanleg zijn gemaakt.
            </p>
            <p className="mt-4">
              Is de tuin zelf aan vervanging toe, dan is onderhoud niet het antwoord. Dan begin ik bij een renovatie, met een degelijk ontwerp.
            </p>
            <Link href="/renovatie" className="mt-6 inline-flex min-h-11 items-center border border-basalt px-4">
              Naar renovatie
            </Link>
          </div>
        </div>
      </section>

      <Bladwijzer current="/onderhoud" />
      <ContactForm intro="Welk onderhoud blijft liggen? Noem de tuin en de plaats. Dan bespreek ik met u wat ik kan overnemen." />
    </main>
  );
}
