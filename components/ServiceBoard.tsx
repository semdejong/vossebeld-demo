import { content } from "@/content";
import Link from "next/link";
import BondSwatch from "./BondSwatch";

export default function ServiceBoard() {
  return (
    <section data-section="diensten" className="scroll-mt-24">
      <div className="mx-auto max-w-[1180px] px-5 py-16 lg:py-24">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 lg:col-span-4">
            <p className="font-mono text-[11px] tracking-[0.16em] uppercase">Monsterbord · diensten</p>
            <h2 className="mt-3 text-4xl sm:text-5xl">Zes disciplines</h2>
            <p className="mt-4">
              Ontwerp, aanleg, onderhoud, renovatie, sierbestrating en kunstgras. U heeft aan mij één aanspreekpunt.
            </p>
          </div>
          <div className="col-span-12 border-t border-basalt lg:col-span-8">
            {content.services.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="grid min-h-20 grid-cols-12 items-center gap-3 border-b border-voeg py-3 hover:bg-wit sm:gap-4"
              >
                <BondSwatch bond={service.bond} className="col-span-3 h-14 border border-voeg sm:col-span-2" />
                <span className="col-span-9 font-display text-2xl font-bold sm:col-span-3">{service.title}</span>
                <span className="col-span-12 sm:col-span-7">{service.line}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
