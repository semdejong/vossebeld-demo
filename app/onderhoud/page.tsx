import ContactForm from "@/components/ContactForm";
import PhotoFrame from "@/components/PhotoFrame";
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
              Zoekt u een hovenier voor tuinonderhoud in Oost Nederland, en stelt u prijs op prettig contact en deskundigheid? Dan breng ik de tuin weer op orde.
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
          <h2 className="text-4xl">Wat ik uit handen neem</h2>
          <ul className="mt-8 border-t border-basalt sm:grid sm:grid-cols-2">
            {content.onderhoud.map((task) => (
              <li key={task} className="flex min-h-12 items-center gap-3 border-b border-voeg px-1">
                <span aria-hidden className="inline-block h-3.5 w-3.5 border border-basalt" />
                {task}
              </li>
            ))}
          </ul>
          <p className="mt-8 max-w-[42rem]">
            Ik werk voornamelijk in Oost Nederland (Twente en de Achterhoek). {content.contact.hoursNote}
          </p>
        </div>
      </section>

      <ContactForm intro="Welk onderhoud blijft liggen? Noem de tuin en de plaats. Dan bespreek ik met u wat ik kan overnemen." />
    </main>
  );
}
