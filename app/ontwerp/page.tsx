import ContactForm from "@/components/ContactForm";
import PhotoFrame from "@/components/PhotoFrame";
import { content } from "@/content";
import { projects } from "@/lib/projects";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Tuinontwerp",
  description:
    "Tuinontwerp in Haaksbergen. Vrijblijvende kennismaking, schets, tekening met maatvoering en een heldere offerte. Peter Vossebeld, hovenier.",
};

const photo = projects.find((p) => p.src.endsWith("tuinaanleg014.jpg"))!;

const stappen = [
  {
    label: "Kennismaking",
    text: "Voordat u met mij in zee gaat, maak ik een afspraak voor een vrijblijvende kennismaking. We inventariseren uw wensen. Het gaat niet alleen om de praktische maten, het gaat ook om uw smaak.",
  },
  {
    label: "Stijl",
    text: "Er zijn verschillende stijlen denkbaar. Landelijk, romantisch, klassiek, strak en modern, of speels en levendig. We kiezen wat bij u en bij het huis past.",
  },
  {
    label: "Inmeten",
    text: "Daarna meet ik de tuin in en maak ik foto's. Met die informatie begin ik aan een eerste schets. Dat kost tijd. De kosten hangen af van de grootte van de tuin.",
  },
  {
    label: "Schets",
    text: "Wanneer de eerste schets is uitgewerkt, krijgt u die ter inzage. Dan kunnen we nog schuiven voordat het ontwerp vastligt.",
  },
  {
    label: "Definitief ontwerp",
    text: "Het definitieve ontwerp is een duidelijke tekening, inclusief maatvoering, en een voorstel voor de basisbeplanting.",
  },
  {
    label: "Offerte",
    text: "Alles staat in een offerte, zodat u exact weet welke werkzaamheden worden uitgevoerd en welke kosten daarbij horen.",
  },
];

export default function OntwerpPage() {
  return (
    <main id="inhoud" className="flex-1">
      <section data-section="hero">
        <div className="mx-auto grid max-w-[1180px] grid-cols-12 items-end gap-8 px-5 py-12 lg:py-16">
          <div className="col-span-12 lg:col-span-7">
            <p className="font-mono text-[12px] tracking-[0.16em] uppercase">Ontwerp · Haaksbergen</p>
            <h1 className="mt-4 text-5xl font-extrabold">Eerst de tuin tekenen.</h1>
            <p className="mt-6 max-w-[40rem]">
              Het ontwerp is vaak de eerste stap naar een aangelegde tuin. Ik teken wat u wilt, met maatvoering, en u ziet in de offerte welke werkzaamheden en kosten daarbij horen.
            </p>
            <Link href="#tuin-bespreken" data-cta="offerte" className="mt-6 inline-flex min-h-11 items-center bg-klinker px-5 font-semibold text-white">
              Tuin bespreken
            </Link>
          </div>
          <div className="col-span-12 lg:col-span-5">
            <PhotoFrame src={photo.src} alt={photo.alt} width={photo.width} height={photo.height} caption={photo.sheet} priority sizes="(max-width: 1024px) 100vw, 480px" />
          </div>
        </div>
      </section>

      <section data-section="werkwijze" className="border-t border-voeg">
        <div className="mx-auto max-w-[1180px] px-5 py-16">
          <h2 className="text-4xl">Van wens tot tekening</h2>
          <ol className="mt-8 border-t border-basalt">
            {stappen.map((step) => (
              <li key={step.label} className="grid grid-cols-12 gap-4 border-b border-voeg py-4">
                <p className="col-span-12 font-mono text-[11px] tracking-[0.14em] uppercase sm:col-span-3">{step.label}</p>
                <p className="col-span-12 sm:col-span-9">{step.text}</p>
              </li>
            ))}
          </ol>
          <p className="mt-8 font-mono text-[11px] tracking-[0.14em] uppercase">Stijlen</p>
          <ul className="mt-3 border-t border-basalt">
            {content.styles.map((style) => (
              <li key={style} className="border-b border-voeg py-3">{style}</li>
            ))}
          </ul>
        </div>
      </section>

      <ContactForm intro="Wilt u een tuin laten tekenen? Vertel kort de stijl en de grootte. De kennismaking is vrijblijvend." />
    </main>
  );
}
