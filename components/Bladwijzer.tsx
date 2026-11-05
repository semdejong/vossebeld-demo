import { content } from "@/content";
import Link from "next/link";
import BondSwatch from "./BondSwatch";

export default function Bladwijzer({ current }: { current: string }) {
  const items = content.services.filter((service) => service.href !== current);
  return (
    <section data-section="bladwijzer" className="border-t border-voeg">
      <div className="mx-auto max-w-[1180px] px-5 py-16">
        <p className="font-mono text-[11px] tracking-[0.16em] uppercase">Andere bladen</p>
        <h2 className="mt-3 text-3xl">De rest van het werk</h2>
        <p className="mt-3 max-w-[36rem]">Zelfde hovenier, ander onderdeel van de tuin. U hoeft het verhaal niet opnieuw te doen.</p>
        <div className="mt-8 grid border-t border-basalt sm:grid-cols-2">
          {items.map((service) => (
            <Link
              key={service.href}
              href={service.href}
              className="grid min-h-11 grid-cols-[3.5rem_1fr] items-center gap-3 border-b border-voeg py-4 sm:px-4 sm:odd:border-r sm:last:border-r-0"
            >
              <BondSwatch bond={service.bond} className="h-14 w-14 border border-voeg" />
              <span>
                <span className="block font-display text-xl font-bold">{service.title}</span>
                <span className="mt-1 block text-base">{service.line}</span>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
