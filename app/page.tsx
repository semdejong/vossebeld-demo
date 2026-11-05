import { content } from "@/content";
import ContactForm from "@/components/ContactForm";
import Doorsnede from "@/components/Doorsnede";
import Gallery from "@/components/Gallery";
import NameTag from "@/components/NameTag";
import PhotoFrame from "@/components/PhotoFrame";
import ServiceBoard from "@/components/ServiceBoard";
import TuinkeurList from "@/components/TuinkeurList";
import { featuredProjects, projects } from "@/lib/projects";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: { absolute: content.seo.title },
  description: content.seo.description,
};

const hero = projects.find((p) => p.src.endsWith("tuinaanleg016.jpg")) ?? featuredProjects[0];

export default function Home() {
  return (
    <main id="inhoud" className="flex-1">
      <section data-section="hero">
        <div className="mx-auto grid max-w-[1180px] grid-cols-12 items-end gap-8 px-5 py-12 lg:py-20">
          <div className="col-span-12 lg:col-span-7">
            <p className="font-mono text-[12px] tracking-[0.16em] uppercase">{content.company.regionLabel}</p>
            <h1 className="mt-4 max-w-[16ch] text-[2.6rem] leading-[1.02] font-extrabold sm:text-6xl">
              Van idee tot tuin. Eén hovenier, van schets tot laatste plant.
            </h1>
            <p className="mt-6 max-w-[40rem]">
              Ik ben Peter Vossebeld. Vanuit Haaksbergen ontwerp, leg ik aan en onderhoud ik tuinen, voornamelijk in Twente en de Achterhoek. U heeft aan mij één aanspreekpunt. Vooraf krijgt u een heldere offerte, zodat u weet welke werkzaamheden erin zitten en wat ze kosten.
            </p>
            <p className="mt-6 font-display text-3xl font-bold">
              <a href={content.contact.phoneTel} data-cta="bellen" className="underline decoration-klinker decoration-2 underline-offset-4">
                {content.contact.phoneDisplay}
              </a>
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4">
              <Link href="#tuin-bespreken" data-cta="offerte" className="inline-flex min-h-11 items-center bg-klinker px-5 font-semibold text-white">
                Tuin bespreken
              </Link>
              <Image src={content.tuinkeur.certified} alt="TuinKeur gecertificeerd" width={100} height={100} className="h-14 w-14" />
            </div>
          </div>
          <div className="col-span-12 lg:col-span-5">
            <PhotoFrame
              src={hero.src}
              alt={hero.alt}
              width={hero.width}
              height={hero.height}
              caption={hero.sheet}
              priority
              sizes="(max-width: 1024px) 100vw, 480px"
            />
          </div>
        </div>
      </section>

      <Doorsnede />
      <ServiceBoard />

      <section data-section="projecten" className="scroll-mt-24 border-t border-voeg">
        <div className="mx-auto max-w-[1180px] px-5 py-16 lg:py-24">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="font-mono text-[11px] tracking-[0.16em] uppercase">Projecten</p>
              <h2 className="mt-3 text-4xl sm:text-5xl">Werk uit eigen hand</h2>
            </div>
            <Link href="/projecten" className="inline-flex min-h-11 items-center border border-basalt px-4">
              Alle projecten
            </Link>
          </div>
          <p className="mt-4 max-w-[40rem]">
            Tuinaanleg, sierbestrating, kunstgras en renovatie. De foto&apos;s zijn van tuinen die ik zelf heb gemaakt.
          </p>
          <div className="mt-8">
            <Gallery photos={featuredProjects} mosaic />
          </div>
        </div>
      </section>

      <section data-section="tuinkeur" className="border-t border-voeg bg-wit">
        <div className="mx-auto max-w-[1180px] px-5 py-16 lg:py-24">
          <TuinkeurList />
        </div>
      </section>

      <section data-section="over-peter" className="scroll-mt-24">
        <div className="mx-auto grid max-w-[1180px] grid-cols-12 gap-8 px-5 py-16 lg:py-24">
          <div className="col-span-12 lg:col-span-4">
            <NameTag />
          </div>
          <div className="col-span-12 lg:col-span-8">
            <p className="font-mono text-[11px] tracking-[0.16em] uppercase">Over Peter</p>
            <h2 className="mt-3 text-4xl">Opgericht in 2013, in Haaksbergen</h2>
            <p className="mt-4 max-w-[42rem]">
              Na jarenlang te hebben gewerkt bij diverse hoveniers vond ik het tijd om op eigen benen te staan. Het vak spreekt me aan omdat ik werk met planten, met materialen, en vooral met mensen. Samen met u de wensen bespreken, een ontwerp maken en het daarna uitvoeren: dat is het werk.
            </p>
            <Link href="/over-peter" className="mt-6 inline-flex min-h-11 items-center border border-basalt px-4">
              Meer over Peter
            </Link>
          </div>
        </div>
      </section>

      <section data-section="onderhoud" className="border-t border-voeg bg-wit">
        <div className="mx-auto grid max-w-[1180px] grid-cols-12 gap-8 px-5 py-16 lg:py-24">
          <div className="col-span-12 lg:col-span-5">
            <p className="font-mono text-[11px] tracking-[0.16em] uppercase">Onderhoud</p>
            <h2 className="mt-3 text-4xl">Een tuin die bijblijft</h2>
            <p className="mt-4">
              Een goed onderhouden tuin doet iets met uw welzijn, en ook met de WOZ-waarde van de woning. Gras maaien, snoeien of een boom kappen vraagt tijd en vakkennis. Dat kan ik uit handen nemen.
            </p>
            <Link href="/onderhoud" className="mt-6 inline-flex min-h-11 items-center border border-basalt px-4">
              Onderhoud bekijken
            </Link>
          </div>
          <ul className="col-span-12 border-t border-basalt lg:col-span-7">
            {content.onderhoud.map((task) => (
              <li key={task} className="flex min-h-12 items-center gap-3 border-b border-voeg">
                <span aria-hidden className="inline-block h-3.5 w-3.5 border border-basalt" />
                {task}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <ContactForm />
    </main>
  );
}
