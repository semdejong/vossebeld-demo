import ContactForm from "@/components/ContactForm";
import { content } from "@/content";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact met Peter Vossebeld, hovenier in Haaksbergen. Bel 06-10547298 of mail info@hoveniersbedrijfvossebeld.nl. Maatkamp 1, 7482 KC Haaksbergen.",
};

const meebrengen = [
  { label: "Plaats", text: "De plaats van de tuin. Ik werk voornamelijk in Twente en de Achterhoek." },
  { label: "Grootte", text: "Een globale maat is genoeg: stadstuin, achtertuin, of een perceel met oprit." },
  { label: "Werk", text: "Ontwerp, aanleg, onderhoud, renovatie, sierbestrating of kunstgras. Meer dan één mag." },
  { label: "Foto", text: "Een foto helpt, als u die bij de hand heeft. Meenemen in het gesprek kan ook." },
];

export default function ContactPage() {
  return (
    <main id="inhoud" className="flex-1">
      <section data-section="hero" className="mx-auto grid max-w-[1180px] grid-cols-12 gap-10 px-5 py-12 lg:py-16">
        <div className="col-span-12 lg:col-span-6">
          <p className="font-mono text-[12px] tracking-[0.16em] uppercase">{content.company.regionLabel}</p>
          <h1 className="mt-3 max-w-[12ch] text-5xl font-extrabold">Bel of mail gerust.</h1>
          <p className="mt-4 max-w-[40rem]">
            Heeft u interesse in een ontwerp, aanleg, onderhoud, renovatie, sierbestrating of kunstgras? Ik ben u graag van dienst. Bellen kan op <span className="whitespace-nowrap">{content.contact.phoneDisplay}</span>.
          </p>
          <div className="mt-8 border-t border-basalt">
            {meebrengen.map((item) => (
              <div key={item.label} className="grid grid-cols-12 gap-3 border-b border-voeg py-3">
                <p className="col-span-12 font-mono text-[11px] tracking-[0.14em] uppercase sm:col-span-3">{item.label}</p>
                <p className="col-span-12 sm:col-span-9">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
        <aside className="col-span-12 border border-basalt bg-wit lg:col-span-6">
          <p className="flex items-center justify-between border-b border-voeg px-4 py-2 font-mono text-[11px] tracking-[0.14em] uppercase">
            <span>Blad C · contact</span>
            <span>Haaksbergen</span>
          </p>
          <dl>
            <div className="grid grid-cols-12 gap-3 border-b border-voeg px-4 py-3">
              <dt className="col-span-4 font-mono text-[11px] tracking-[0.14em] uppercase">Naam</dt>
              <dd className="col-span-8">{content.company.owner}</dd>
            </div>
            <div className="grid grid-cols-12 gap-3 border-b border-voeg px-4 py-3">
              <dt className="col-span-4 font-mono text-[11px] tracking-[0.14em] uppercase">Bedrijf</dt>
              <dd className="col-span-8">{content.company.name}</dd>
            </div>
            <div className="grid grid-cols-12 gap-3 border-b border-voeg px-4 py-3">
              <dt className="col-span-4 font-mono text-[11px] tracking-[0.14em] uppercase">Adres</dt>
              <dd className="col-span-8">{content.contact.address}</dd>
            </div>
            <div className="grid grid-cols-12 gap-3 border-b border-voeg px-4 py-3">
              <dt className="col-span-4 font-mono text-[11px] tracking-[0.14em] uppercase">Telefoon</dt>
              <dd className="col-span-8">
                <a href={content.contact.phoneTel} data-cta="bellen" className="font-semibold underline decoration-klinker underline-offset-4">
                  {content.contact.phoneDisplay}
                </a>
              </dd>
            </div>
            <div className="grid grid-cols-12 gap-3 border-b border-voeg px-4 py-3">
              <dt className="col-span-4 font-mono text-[11px] tracking-[0.14em] uppercase">E-mail</dt>
              <dd className="col-span-8">
                <a href={`mailto:${content.contact.email}`} data-cta="mailen" className="break-words underline decoration-voeg underline-offset-4">
                  info@<wbr />hoveniersbedrijfvossebeld.nl
                </a>
              </dd>
            </div>
            <div className="grid grid-cols-12 gap-3 border-b border-voeg px-4 py-3">
              <dt className="col-span-4 font-mono text-[11px] tracking-[0.14em] uppercase">LinkedIn</dt>
              <dd className="col-span-8">
                <a href={content.contact.linkedin} className="underline decoration-voeg underline-offset-4" rel="noopener noreferrer">
                  Peter Vossebeld
                </a>
              </dd>
            </div>
            <div className="grid grid-cols-12 gap-3 border-b border-voeg px-4 py-3">
              <dt className="col-span-4 font-mono text-[11px] tracking-[0.14em] uppercase">Gebied</dt>
              <dd className="col-span-8">Voornamelijk Oost Nederland, Twente en de Achterhoek.</dd>
            </div>
            <div className="grid grid-cols-12 gap-3 px-4 py-3">
              <dt className="col-span-4 font-mono text-[11px] tracking-[0.14em] uppercase">Bereikbaar</dt>
              <dd className="col-span-8">{content.contact.hoursNote}</dd>
            </div>
          </dl>
          <p className="border-t border-voeg px-4 py-3">
            <Link href="/privacy" className="underline decoration-voeg underline-offset-4">
              Privacy van deze conceptsite
            </Link>
          </p>
        </aside>
      </section>
      <ContactForm intro="Laat naam, telefoon en een korte toelichting achter. Op deze conceptsite wordt het formulier niet verstuurd: bel of mail, dan neem ik het zelf op." />
    </main>
  );
}
