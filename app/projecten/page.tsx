import Gallery from "@/components/Gallery";
import { projects } from "@/lib/projects";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Projecten",
  description:
    "Foto's van tuinaanleg, sierbestrating, kunstgras en tuinrenovatie door Peter Vossebeld, hovenier in Haaksbergen.",
};

export default function ProjectenPage() {
  return (
    <main id="inhoud" className="flex-1">
      <section data-section="projecten">
        <div className="mx-auto max-w-[1180px] px-5 py-12 lg:py-16">
          <p className="font-mono text-[12px] tracking-[0.16em] uppercase">Projecten · {projects.length} foto&apos;s</p>
          <h1 className="mt-4 max-w-[16ch] text-5xl font-extrabold">Bladen van eigen werk.</h1>
          <p className="mt-6 max-w-[42rem]">
            Tuinaanleg, sierbestrating, kunstgras en renovatie. Ik beschrijf wat er op de foto staat, geen adressen en geen namen. Klik een blad open om het groter te zien.
          </p>
          <p className="mt-4">
            <Link href="/contact#tuin-bespreken" data-cta="offerte" className="underline decoration-klinker underline-offset-4">
              Wilt u zoiets in uw tuin? Bespreek het met mij.
            </Link>
          </p>
          <div className="mt-10">
            <Gallery photos={projects} />
          </div>
        </div>
      </section>
    </main>
  );
}
