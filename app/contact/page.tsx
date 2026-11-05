import ContactForm from "@/components/ContactForm";
import { content } from "@/content";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact met Peter Vossebeld, hovenier in Haaksbergen. Bel 06-10547298 of mail info@hoveniersbedrijfvossebeld.nl. Maatkamp 1, 7482 KC Haaksbergen.",
};

export default function ContactPage() {
  return (
    <main id="inhoud" className="flex-1">
      <section data-section="hero" className="mx-auto max-w-[1180px] px-5 pt-12">
        <p className="font-mono text-[12px] tracking-[0.16em] uppercase">{content.company.regionLabel}</p>
        <h1 className="mt-3 max-w-[16ch] text-5xl font-extrabold">Bel of mail gerust.</h1>
        <p className="mt-4 max-w-[40rem]">
          Heeft u interesse in een ontwerp, aanleg, onderhoud, renovatie, sierbestrating of kunstgras? Ik ben u graag van dienst. Bellen kan natuurlijk ook, op <span className="whitespace-nowrap">{content.contact.phoneDisplay}</span>.
        </p>
      </section>
      <ContactForm intro="Laat naam, telefoon en een korte toelichting achter. Op deze conceptsite wordt het formulier niet verstuurd: bel of mail, dan neem ik het zelf op." />
    </main>
  );
}
