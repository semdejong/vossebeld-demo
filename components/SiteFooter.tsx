import { content } from "@/content";
import Image from "next/image";
import Link from "next/link";
import LayerRule from "./LayerRule";

export default function SiteFooter() {
  const { company, contact } = content;
  return (
    <footer data-section="footer" className="mt-auto bg-basalt text-wit">
      <div className="mx-auto grid max-w-[1180px] gap-10 px-5 py-12 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <Image
            src={company.logoFooter}
            alt=""
            width={217}
            height={100}
            className="h-12 w-auto"
          />
          <p className="mt-4 text-base leading-snug">{company.name}</p>
          <p className="mt-1 text-base">{contact.address}</p>
        </div>
        <div>
          <p className="font-mono text-[11px] tracking-[0.16em] uppercase text-zandlaag">Contact</p>
          <p className="mt-3">
            <a href={contact.phoneTel} data-cta="bellen" className="inline-flex min-h-11 items-center underline decoration-voeg underline-offset-4">
              {contact.phoneDisplay}
            </a>
          </p>
          <p className="mt-2">
            <a href={`mailto:${contact.email}`} data-cta="mailen" className="inline-flex min-h-11 items-center underline decoration-voeg underline-offset-4">
              info@<wbr />hoveniersbedrijfvossebeld.nl
            </a>
          </p>
          <p className="mt-3 text-base">{contact.hoursNote}</p>
        </div>
        <div>
          <p className="font-mono text-[11px] tracking-[0.16em] uppercase text-zandlaag">Werkgebied</p>
          <p className="mt-3 text-base">Ik werk voornamelijk in Oost Nederland (Twente en de Achterhoek).</p>
          <p className="mt-4">
            <a href={contact.linkedin} className="underline decoration-voeg underline-offset-4" rel="noopener noreferrer">
              LinkedIn
            </a>
          </p>
          <p className="mt-2">
            <Link href="/privacy" className="underline decoration-voeg underline-offset-4">Privacy</Link>
          </p>
        </div>
        <div>
          <p className="font-mono text-[11px] tracking-[0.16em] uppercase text-zandlaag">TuinKeur</p>
          <Image
            src={content.tuinkeur.certified}
            alt="TuinKeur gecertificeerd"
            width={100}
            height={100}
            className="mt-3 h-16 w-16"
          />
          <p className="mt-4 text-base">
            <a href="https://sleads.nl" target="_blank" rel="noopener noreferrer" className="underline decoration-voeg underline-offset-4">
              Concept door Sleads
            </a>
          </p>
        </div>
      </div>
      <LayerRule tall />
    </footer>
  );
}
