import ContactForm from "@/components/ContactForm";
import NameTag from "@/components/NameTag";
import PhotoFrame from "@/components/PhotoFrame";
import TuinkeurList from "@/components/TuinkeurList";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Over Peter Vossebeld",
  description:
    "Peter Vossebeld, hovenier in Haaksbergen. Opgericht in 2013, na jaren bij diverse hoveniers. TuinKeur gecertificeerd. Werkgebied Twente en Achterhoek.",
};

export default function OverPeterPage() {
  return (
    <main id="inhoud" className="flex-1">
      <section data-section="over-peter">
        <div className="mx-auto grid max-w-[1180px] grid-cols-12 gap-8 px-5 py-12 lg:py-16">
          <div className="col-span-12 lg:col-span-4">
            <NameTag />
          </div>
          <div className="col-span-12 lg:col-span-8">
            <p className="font-mono text-[12px] tracking-[0.16em] uppercase">Het bedrijf</p>
            <h1 className="mt-3 text-5xl font-extrabold">Ik ben Peter Vossebeld.</h1>
            <div className="mt-6 max-w-[44rem] space-y-4">
              <p>
                Mijn bedrijf, gevestigd in Haaksbergen, is opgericht in 2013. Na jarenlang te hebben gewerkt bij diverse hoveniers vond ik het tijd om op eigen benen te staan.
              </p>
              <p>
                Het hoveniersvak spreekt me aan omdat ik kan werken met planten, met diverse tuinmaterialen, en met name ook voor en met mensen. Samen met u de wensen voor een tuin bespreken en adviseren, een ontwerp maken, het uitvoeren, en uiteindelijk zien dat u tevreden bent: dat geeft mij voldoening.
              </p>
              <p>
                Ik werk met precisie en aandacht, zodat tuinaanleg of tuinonderhoud naar uw wensen wordt uitgevoerd. De werkzaamheden vinden voornamelijk plaats in Oost Nederland (Twente en de Achterhoek).
              </p>
            </div>
          </div>
        </div>
      </section>

      <section data-section="tuin" className="border-t border-voeg">
        <div className="mx-auto grid max-w-[1180px] grid-cols-12 items-center gap-8 px-5 py-12">
          <div className="col-span-12 lg:col-span-7">
            <PhotoFrame
              src="/img/header/header10.jpg"
              alt="Volle border met rode heesters, een bolvormige lamp en geschoren hagen."
              width={1950}
              height={606}
              caption="blad H · beplanting"
              sizes="(max-width: 900px) 100vw, 700px"
            />
          </div>
          <div className="col-span-12 lg:col-span-5">
            <p className="font-mono text-[11px] tracking-[0.16em] uppercase">Van idee tot tuin</p>
            <p className="mt-3">
              Eén hovenier, van de eerste schets tot de laatste plant. U hoeft het verhaal niet telkens opnieuw te doen.
            </p>
          </div>
        </div>
      </section>

      <section data-section="tuinkeur" className="border-t border-voeg bg-wit">
        <div className="mx-auto max-w-[1180px] px-5 py-16">
          <TuinkeurList compact />
        </div>
      </section>

      <ContactForm intro="Wilt u weten of ik iets voor uw tuin kan betekenen? Bel, mail, of laat hier een bericht achter. Het formulier op deze conceptsite verstuurt niets: bellen of mailen komt bij mij terecht." />
    </main>
  );
}
