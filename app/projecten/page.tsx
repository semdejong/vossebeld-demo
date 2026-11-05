import BondSwatch from "@/components/BondSwatch";
import Gallery from "@/components/Gallery";
import type { BondId } from "@/content";
import { categoryLabel, projects, type ProjectCategory } from "@/lib/projects";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Projecten",
  description:
    "Foto's van tuinaanleg, sierbestrating, kunstgras en tuinrenovatie door Peter Vossebeld, hovenier in Haaksbergen.",
};

const groepen: { category: ProjectCategory; href: string; bond: BondId; line: string }[] = [
  { category: "tuinaanleg", href: "/aanleg", bond: "halfsteens", line: "Borders, paden, gazon en beplanting." },
  { category: "sierbestrating", href: "/sierbestrating", bond: "keper", line: "Klinkers, tegels, bogen en opsluiting." },
  { category: "kunstgras", href: "/kunstgras", bond: "blokverband", line: "Rollen, naden en groene vlakken." },
  { category: "renovatie", href: "/renovatie", bond: "wildverband", line: "Wat weggaat, en wat een nieuwe voorkant krijgt." },
];

export default function ProjectenPage() {
  return (
    <main id="inhoud" className="flex-1">
      <section data-section="projecten">
        <div className="mx-auto max-w-[1180px] px-5 py-12 lg:py-16">
          <p className="font-mono text-[12px] tracking-[0.16em] uppercase">Archief · {projects.length} foto&apos;s</p>
          <h1 className="mt-4 max-w-[16ch] text-5xl font-extrabold">Bladen van eigen werk.</h1>
          <p className="mt-6 max-w-[42rem]">
            Tuinaanleg, sierbestrating, kunstgras en renovatie. Ik beschrijf wat er op de foto staat. Geen adressen en geen namen. De bladen zijn genummerd per soort, niet op datum.
          </p>
          <p className="mt-4">
            <Link href="/contact#tuin-bespreken" data-cta="offerte" className="underline decoration-klinker underline-offset-4">
              Wilt u zoiets in uw tuin? Bespreek het met mij.
            </Link>
          </p>

          <div className="mt-10 border-t border-basalt" data-section="archief">
            {groepen.map((groep) => {
              const aantal = projects.filter((photo) => photo.category === groep.category).length;
              return (
                <div key={groep.category} className="grid grid-cols-12 items-center gap-3 border-b border-voeg py-4">
                  <BondSwatch bond={groep.bond} className="col-span-3 h-14 border border-voeg sm:col-span-2" />
                  <div className="col-span-9 sm:col-span-6">
                    <p className="font-display text-2xl font-bold">{categoryLabel[groep.category]}</p>
                    <p className="mt-1">{groep.line}</p>
                  </div>
                  <p className="col-span-6 font-mono text-[12px] tracking-[0.14em] uppercase sm:col-span-2">{aantal} bladen</p>
                  <Link href={groep.href} className="col-span-6 inline-flex min-h-11 items-center sm:col-span-2 sm:justify-end">
                    Bekijken
                  </Link>
                </div>
              );
            })}
          </div>

          <div className="mt-12">
            <Gallery photos={projects} />
          </div>
        </div>
      </section>
    </main>
  );
}
