"use client";

import { content } from "@/content";
import { useEffect, useRef, useState } from "react";

const tone: Record<string, { bg: string; fg: string }> = {
  groen: { bg: "var(--turf)", fg: "#fbf8f1" },
  straat: { bg: "var(--klinker)", fg: "#ffffff" },
  aarde: { bg: "var(--aarde)", fg: "#fbf8f1" },
  zand: { bg: "var(--zandlaag)", fg: "#26292b" },
};

const drawn = ["groen", "straat", "aarde", "zand"] as const;

export default function Doorsnede() {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold: 0.35 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const byKey = Object.fromEntries(content.phases.map((p) => [p.key, p]));

  return (
    <section data-section="proces" className="scroll-mt-24">
      <div className="mx-auto max-w-[1180px] px-5 py-16 lg:py-24">
        <p className="font-mono text-[11px] tracking-[0.16em] uppercase">Doorsnede · aanleg</p>
        <h2 className="mt-3 max-w-[14ch] text-4xl sm:text-5xl">Van idee tot tuin</h2>
        <p className="mt-4 max-w-[40rem]">
          Eerst een ontwerp, dan een offerte waarin u ziet welke werkzaamheden erin zitten en wat ze kosten. Daarna leg ik de tuin aan, laag voor laag.
        </p>

        <div className="mt-10 grid grid-cols-12 items-start gap-8 lg:gap-10">
          <div className="col-span-12 lg:col-span-7">
            <div ref={ref} className={`doorsnede border border-voeg bg-wit ${shown ? "is-in" : ""}`}>
              <div className="grid border-b border-voeg sm:grid-cols-5">
                <div className="border-b border-voeg p-4 sm:col-span-3 sm:border-r sm:border-b-0">
                  <p className="font-mono text-[11px] tracking-[0.16em] uppercase">Ontwerp</p>
                  <p className="mt-2">
                    Vrijblijvende kennismaking, uw stijl, inmeten en foto&apos;s. Eerst een schets ter inzage, daarna het definitieve ontwerp met maatvoering en een voorstel voor de basisbeplanting.
                  </p>
                </div>
                <div className="p-4 sm:col-span-2">
                  <p className="font-mono text-[11px] tracking-[0.16em] uppercase">Offerte</p>
                  <p className="mt-2">
                    U weet vooraf welke werkzaamheden worden uitgevoerd en welke kosten daarbij horen. De ontwerpkosten hangen af van de grootte van de tuin.
                  </p>
                </div>
              </div>

              <div>
                {drawn.map((key) => {
                  const phase = byKey[key];
                  const color = tone[key];
                  if (!phase) return null;
                  return (
                    <div key={key} className="layer flex min-h-14 border-b border-basalt/25 last:border-b-0" style={{ background: color.bg, color: color.fg }}>
                      <div className="flex w-24 shrink-0 items-center border-r border-white/25 px-3 font-mono text-[11px] tracking-[0.14em] uppercase sm:w-28">
                        {phase.name}
                      </div>
                      <div className="flex flex-1 items-center px-3 font-mono text-[12px] tracking-[0.12em] uppercase">
                        {phase.title}
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="flex justify-between gap-4 border-t border-voeg px-3 py-2 font-mono text-[11px] tracking-[0.14em] uppercase">
                <span>Blad A · doorsnede</span>
                <span>Onder naar boven</span>
              </div>
            </div>
          </div>

          <div className="col-span-12 lg:col-span-5">
            <p className="font-mono text-[11px] tracking-[0.16em] uppercase">Vier fases</p>
            <ol className="mt-3 border-t border-basalt">
              {content.phases.map((phase) => (
                <li key={phase.key} className="border-b border-voeg py-4">
                  <p className="flex items-center gap-3 font-mono text-[11px] tracking-[0.14em] uppercase">
                    <span aria-hidden className="h-px w-8 shrink-0" style={{ background: tone[phase.key]?.bg ?? "currentColor" }} />
                    {phase.name} · {phase.title}
                  </p>
                  <p className="mt-2">{phase.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
