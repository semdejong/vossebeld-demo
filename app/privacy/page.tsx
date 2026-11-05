import { content } from "@/content";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy",
  description: "Korte privacytekst van deze conceptwebsite voor Hoveniersbedrijf Vossebeld.",
};

export default function PrivacyPage() {
  return (
    <main id="inhoud" className="flex-1">
      <section data-section="privacy" className="mx-auto max-w-[760px] px-5 py-12 lg:py-16">
        <p className="font-mono text-[12px] tracking-[0.16em] uppercase">Privacy</p>
        <h1 className="mt-3 text-5xl font-extrabold">Conceptsite</h1>
        <div className="mt-6 space-y-4">
          <p>
            Dit is een conceptwebsite voor {content.company.name}, gemaakt door Sleads. De site is bedoeld om te laten zien hoe een nieuwe site eruit kan zien. Hij is niet de administratie van het bedrijf.
          </p>
          <p>
            Het formulier op deze site verstuurt niets en slaat niets op. Een foto die u kiest, wordt niet geüpload. Wilt u iets vragen, bel {content.contact.phoneDisplay} of mail {content.contact.email}.
          </p>
          <p>
            Op deze conceptsite staat een cookieloze demometing van paginabezoek, alleen voor Sleads. Die plaatst geen marketingcookies en volgt u niet over andere websites.
          </p>
          <p>
            Adres, telefoon en e-mail op deze site zijn de gegevens van {content.company.name}: {content.contact.address}.
          </p>
          <p>
            <Link href="/contact" data-cta="offerte" className="underline decoration-klinker underline-offset-4">
              Naar contact
            </Link>
          </p>
        </div>
      </section>
    </main>
  );
}
