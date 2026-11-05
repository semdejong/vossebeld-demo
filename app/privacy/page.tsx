import { content } from "@/content";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy",
  description: "Korte privacytekst van deze conceptwebsite voor Hoveniersbedrijf Vossebeld.",
};

const regels = [
  {
    label: "Wat dit is",
    text: `Dit is een conceptwebsite voor ${content.company.name}, gemaakt door Sleads. De site laat zien hoe een nieuwe site eruit kan zien. Hij is niet de administratie van het bedrijf.`,
  },
  {
    label: "Formulier",
    text: `Het formulier verstuurt niets en slaat niets op. Een foto die u kiest, wordt niet geüpload. Wilt u iets vragen, bel ${content.contact.phoneDisplay} of mail ${content.contact.email}.`,
  },
  {
    label: "Meting",
    text: "Op deze conceptsite staat een cookieloze demometing van paginabezoek, alleen voor Sleads. Die plaatst geen marketingcookies en volgt u niet over andere websites.",
  },
  {
    label: "Gegevens",
    text: `Adres, telefoon en e-mail op deze site zijn de gegevens van ${content.company.name}: ${content.contact.address}.`,
  },
];

export default function PrivacyPage() {
  return (
    <main id="inhoud" className="flex-1">
      <section data-section="privacy" className="mx-auto max-w-[820px] px-5 py-12 lg:py-16">
        <p className="font-mono text-[12px] tracking-[0.16em] uppercase">Privacy · concept</p>
        <h1 className="mt-3 text-5xl font-extrabold">Wat deze site wel en niet doet</h1>
        <p className="mt-4">Kort, omdat de site een concept is. Aanvragen worden hier niet opgeslagen.</p>
        <div className="mt-8 border-t border-basalt">
          {regels.map((regel) => (
            <div key={regel.label} className="grid gap-2 border-b border-voeg py-4 sm:grid-cols-12">
              <p className="font-mono text-[11px] tracking-[0.14em] uppercase sm:col-span-3">{regel.label}</p>
              <p className="sm:col-span-9">{regel.text}</p>
            </div>
          ))}
        </div>
        <p className="mt-8">
          <Link href="/contact" data-cta="offerte" className="inline-flex min-h-11 items-center underline decoration-klinker underline-offset-4">
            Naar contact
          </Link>
        </p>
      </section>
    </main>
  );
}
