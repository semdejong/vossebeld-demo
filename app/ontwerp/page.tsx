import Bladwijzer from "@/components/Bladwijzer";
import ContactForm from "@/components/ContactForm";
import FaqList from "@/components/FaqList";
import Maatlijn from "@/components/Maatlijn";
import PhotoFrame from "@/components/PhotoFrame";
import SpecRows from "@/components/SpecRows";
import { content } from "@/content";
import { projects } from "@/lib/projects";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Tuinontwerp",
  description:
    "Tuinontwerp in Haaksbergen. Vrijblijvende kennismaking, schets, tekening met maatvoering, basisbeplanting en een heldere offerte. Peter Vossebeld, hovenier.",
};

const photo = projects.find((p) => p.src.endsWith("tuinaanleg014.jpg"))!;
const tweede = projects.find((p) => p.src.endsWith("tuinaanleg017.jpg"))!;

const stappen = [
  {
    label: "Kennismaking",
    text: "Voordat u met mij in zee gaat, maak ik een afspraak voor een vrijblijvende kennismaking. We inventariseren uw wensen. Het gaat niet alleen om de praktische maten, het gaat ook om uw smaak.",
  },
  {
    label: "Stijl",
    text: "Er zijn verschillende stijlen denkbaar. Landelijk, romantisch, klassiek, strak en modern, of speels en levendig. We kiezen wat bij u en bij het huis past. Een tuin hoeft niet in één hokje.",
  },
  {
    label: "Inmeten",
    text: "Daarna meet ik de tuin in en maak ik foto's. Met die informatie begin ik aan een eerste schets. Dat kost tijd. De ontwerpkosten hangen af van de grootte van de tuin.",
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
    text: "Alles staat in een offerte, zodat u exact weet welke werkzaamheden worden uitgevoerd en welke kosten daarbij horen. Daarna kan ik de tuin ook zelf aanleggen.",
  },
];

const opDeTekening = [
  { label: "Maatvoering", text: "Lengtes en breedtes van terras, pad, gazon en borders, zodat de verhoudingen vastliggen voordat er een schep de grond in gaat." },
  { label: "Basisbeplanting", text: "Een voorstel voor de beplanting die de tuin draagt: hagen, bomen, struiken en de eerste planten, elk met een plek op de tekening." },
  { label: "Verharding", text: "Waar u loopt en zit. Het terras en de paden horen op de tekening, ook als de tegelkeuze later volgt." },
  { label: "Wat blijft", text: "Een boom, een schutting of een bestaand vlak dat u wilt houden, teken ik mee. Anders verdwijnt het per ongeluk uit het plan." },
];

const faq = [
  {
    q: "Is de kennismaking vrijblijvend?",
    a: "Ja. We inventariseren uw wensen. U zit nog nergens aan vast.",
  },
  {
    q: "Wat kost een ontwerp?",
    a: "De ontwerpkosten hangen af van de grootte van de tuin. Ik noem geen bedrag voordat ik de tuin heb gezien. In de offerte ziet u de werkzaamheden en de kosten.",
  },
  {
    q: "Legt u de tuin daarna ook aan?",
    a: "Ja. U heeft aan mij één aanspreekpunt, van de eerste schets tot de laatste plant. De aanleg loopt in vier fases: inmeten, grondwerk, bestrating en tuinafscheiding, beplanting en gazon.",
  },
  {
    q: "Werkt u ook buiten Haaksbergen?",
    a: "Ja. Ik werk voornamelijk in Oost Nederland: Twente en de Achterhoek.",
  },
];

export default function OntwerpPage() {
  return (
    <main id="inhoud" className="flex-1">
      <section data-section="hero">
        <div className="mx-auto grid max-w-[1180px] grid-cols-12 items-center gap-8 px-5 py-12 lg:py-16">
          <div className="col-span-12 lg:col-span-7">
            <p className="font-mono text-[12px] tracking-[0.16em] uppercase">Ontwerp · Haaksbergen</p>
            <h1 className="mt-4 max-w-[14ch] text-5xl font-extrabold">Eerst de tuin tekenen.</h1>
            <p className="mt-6 max-w-[40rem]">
              Het ontwerp is vaak de eerste stap naar een aangelegde tuin. Ik teken wat u wilt, met maatvoering, en u ziet in de offerte welke werkzaamheden en kosten daarbij horen.
            </p>
            <p className="mt-4 max-w-[40rem]">
              U praat met mij. Van idee tot tuin blijft één lijn: de tekening en de aanleg komen uit dezelfde hand.
            </p>
            <Maatlijn caption="Maatlijn · de maten komen uit de tuin" />
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
          <p className="font-mono text-[11px] tracking-[0.16em] uppercase">Blad 1 · werkwijze</p>
          <h2 className="mt-3 text-4xl">Van wens tot tekening</h2>
          <div className="mt-8">
            <SpecRows rows={stappen} />
          </div>
        </div>
      </section>

      <section id="stijlen" data-section="stijlen" className="scroll-mt-24 border-t border-voeg bg-wit">
        <div className="mx-auto max-w-[1180px] px-5 py-16">
          <p className="font-mono text-[11px] tracking-[0.16em] uppercase">Blad 2 · stijl</p>
          <h2 className="mt-3 max-w-[16ch] text-4xl">Vijf richtingen, geen catalogus</h2>
          <p className="mt-4 max-w-[42rem]">
            Dit zijn de stijlen die we in de kennismaking langs kunnen lopen. Ze zijn een taal om uw smaak te benoemen. De tuin mag er tussenin vallen.
          </p>
          <div className="mt-8">
            <SpecRows rows={content.styles.map((style) => ({ label: style.name, text: style.text }))} />
          </div>
        </div>
      </section>

      <section data-section="tekening" className="border-t border-voeg">
        <div className="mx-auto grid max-w-[1180px] grid-cols-12 gap-10 px-5 py-16">
          <div className="col-span-12 lg:col-span-5">
            <p className="font-mono text-[11px] tracking-[0.16em] uppercase">Blad 3 · inhoud</p>
            <h2 className="mt-3 text-4xl">Wat er op de tekening staat</h2>
            <p className="mt-4">
              Het definitieve ontwerp is een werktekening, geen sfeerplaat. U kunt er de maten op nalezen, en het voorstel voor de basisbeplanting.
            </p>
            <p className="mt-4 font-mono text-[11px] tracking-[0.14em] uppercase">
              Ontwerpkosten · afhankelijk van de grootte van de tuin
            </p>
          </div>
          <div className="col-span-12 lg:col-span-7">
            <SpecRows rows={opDeTekening} />
          </div>
        </div>
      </section>

      <section data-section="voorbeelden" className="border-t border-voeg bg-wit">
        <div className="mx-auto max-w-[1180px] px-5 py-16">
          <p className="font-mono text-[11px] tracking-[0.16em] uppercase">Twee tuinen uit het werk</p>
          <h2 className="mt-3 max-w-[18ch] text-4xl">De stijl volgt het huis</h2>
          <p className="mt-4 max-w-[40rem]">
            Dit zijn tuinen die ik heb aangelegd. Op de tekening voor uw tuin staan uw maten.
          </p>
          <div className="mt-8 grid grid-cols-12 gap-8">
            <div className="col-span-12 lg:col-span-6">
              <PhotoFrame src={photo.src} alt={photo.alt} width={photo.width} height={photo.height} caption={photo.sheet} sizes="(max-width: 1024px) 100vw, 520px" />
            </div>
            <div className="col-span-12 lg:col-span-6">
              <PhotoFrame src={tweede.src} alt={tweede.alt} width={tweede.width} height={tweede.height} caption={tweede.sheet} sizes="(max-width: 1024px) 100vw, 520px" />
            </div>
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

      <Bladwijzer current="/ontwerp" />
      <ContactForm intro="Wilt u een tuin laten tekenen? Vertel kort de stijl en de grootte. De kennismaking is vrijblijvend." />
    </main>
  );
}
