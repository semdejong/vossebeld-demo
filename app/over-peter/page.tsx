import ContactForm from "@/components/ContactForm";
import NameTag from "@/components/NameTag";
import PhotoFrame from "@/components/PhotoFrame";
import TuinkeurList from "@/components/TuinkeurList";
import { content } from "@/content";
import type { Metadata } from "next";
import Link from "next/link";

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

      <section data-section="lijn" className="border-t border-voeg bg-wit">
        <div className="mx-auto max-w-[1180px] px-5 py-16">
          <p className="font-mono text-[11px] tracking-[0.16em] uppercase">Eén lijn</p>
          <h2 className="mt-3 max-w-[16ch] text-4xl">Van de schets tot de laatste plant</h2>
          <p className="mt-4 max-w-[42rem]">
            U heeft aan mij één aanspreekpunt. Het ontwerp, de offerte, de aanleg en het onderhoud daarna lopen door dezelfde hand.
          </p>
          <div className="mt-8 border-t border-basalt sm:grid sm:grid-cols-4">
            {[
              { href: "/ontwerp", label: "Ontwerp", text: "Kennismaking, schets, tekening met maatvoering." },
              { href: "/aanleg", label: "Aanleg", text: "Vier fases, van inmeten tot de laatste plant." },
              { href: "/sierbestrating", label: "Straatwerk", text: "U kiest de tegels, ik werk het af." },
              { href: "/onderhoud", label: "Onderhoud", text: "Blad, snoei, maaien en borders." },
            ].map((item) => (
              <Link key={item.href} href={item.href} className="block border-b border-voeg py-4 sm:border-r sm:border-b-0 sm:px-4 sm:first:pl-0 sm:last:border-r-0">
                <span className="font-display text-2xl font-bold">{item.label}</span>
                <span className="mt-2 block">{item.text}</span>
              </Link>
            ))}
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

      <section data-section="bereik" className="border-t border-voeg">
        <div className="mx-auto grid max-w-[1180px] grid-cols-12 gap-8 px-5 py-16">
          <div className="col-span-12 lg:col-span-5">
            <p className="font-mono text-[11px] tracking-[0.16em] uppercase">Bereik</p>
            <h2 className="mt-3 text-4xl">Haaksbergen, en daaromheen</h2>
            <p className="mt-4">
              Het bedrijf is gevestigd aan {content.contact.address}. De werkzaamheden vinden voornamelijk plaats in Oost Nederland (Twente en de Achterhoek). {content.contact.hoursNote}
            </p>
          </div>
          <div className="col-span-12 border border-basalt bg-wit lg:col-span-7">
            <p className="border-b border-voeg px-4 py-2 font-mono text-[11px] tracking-[0.14em] uppercase">Blad B · bedrijf</p>
            <dl>
              {[
                ["Naam", content.company.owner],
                ["Bedrijf", content.company.name],
                ["Opgericht", content.company.founded],
                ["Adres", content.contact.address],
              ].map(([label, value]) => (
                <div key={label} className="grid grid-cols-12 gap-3 border-b border-voeg px-4 py-3">
                  <dt className="col-span-4 font-mono text-[11px] tracking-[0.14em] uppercase">{label}</dt>
                  <dd className="col-span-8">{value}</dd>
                </div>
              ))}
              <div className="grid grid-cols-12 gap-3 border-b border-voeg px-4 py-3">
                <dt className="col-span-4 font-mono text-[11px] tracking-[0.14em] uppercase">Telefoon</dt>
                <dd className="col-span-8">
                  <a href={content.contact.phoneTel} data-cta="bellen" className="underline decoration-klinker underline-offset-4">
                    {content.contact.phoneDisplay}
                  </a>
                </dd>
              </div>
              <div className="grid grid-cols-12 gap-3 px-4 py-3">
                <dt className="col-span-4 font-mono text-[11px] tracking-[0.14em] uppercase">LinkedIn</dt>
                <dd className="col-span-8">
                  <a href={content.contact.linkedin} className="underline decoration-voeg underline-offset-4" rel="noopener noreferrer">
                    Peter Vossebeld
                  </a>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      <ContactForm intro="Wilt u weten of ik iets voor uw tuin kan betekenen? Bel, mail, of laat hier een bericht achter. Het formulier op deze conceptsite verstuurt niets: bellen of mailen komt bij mij terecht." />
    </main>
  );
}
