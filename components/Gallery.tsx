"use client";

import { categoryLabel, type ProjectCategory, type ProjectPhoto } from "@/lib/projects";
import Image from "next/image";
import { useEffect, useId, useRef, useState } from "react";

const filters: { id: "alles" | ProjectCategory; label: string }[] = [
  { id: "alles", label: "Alles" },
  { id: "tuinaanleg", label: "Tuinaanleg" },
  { id: "sierbestrating", label: "Sierbestrating" },
  { id: "kunstgras", label: "Kunstgras" },
  { id: "renovatie", label: "Renovatie" },
];

export default function Gallery({
  photos,
  showFilters = true,
  mosaic = false,
}: {
  photos: ProjectPhoto[];
  showFilters?: boolean;
  mosaic?: boolean;
}) {
  const [filter, setFilter] = useState<(typeof filters)[number]["id"]>("alles");
  const [index, setIndex] = useState<number | null>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const returnFocus = useRef<HTMLElement | null>(null);
  const wasOpen = useRef(false);
  const touchX = useRef<number | null>(null);
  const titleId = useId();

  const shown = filter === "alles" ? photos : photos.filter((p) => p.category === filter);
  const current = index === null ? null : shown[index];
  const useMosaic = mosaic && filter === "alles" && shown.length === 8;

  useEffect(() => {
    if (index === null) {
      if (wasOpen.current) returnFocus.current?.focus();
      wasOpen.current = false;
      return;
    }
    const justOpened = !wasOpen.current;
    wasOpen.current = true;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    if (justOpened) closeRef.current?.focus();
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setIndex(null);
      if (e.key === "ArrowRight") setIndex((i) => (i === null ? i : (i + 1) % shown.length));
      if (e.key === "ArrowLeft") setIndex((i) => (i === null ? i : (i - 1 + shown.length) % shown.length));
      if (e.key === "Tab" && dialogRef.current) {
        const nodes = [...dialogRef.current.querySelectorAll<HTMLElement>("button")];
        if (nodes.length === 0) return;
        const first = nodes[0];
        const last = nodes[nodes.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last?.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first?.focus();
        }
      }
    }
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [index, shown.length]);

  function openAt(i: number, el: HTMLElement) {
    returnFocus.current = el;
    setIndex(i);
  }

  return (
    <div>
      {showFilters ? (
        <div className="flex flex-wrap gap-2" role="tablist" aria-label="Filter projectfoto's">
          {filters.map((item) => {
            const selected = filter === item.id;
            return (
              <button
                key={item.id}
                type="button"
                role="tab"
                aria-selected={selected}
                className={`min-h-11 border px-3 ${selected ? "border-basalt bg-basalt text-wit" : "border-voeg bg-wit text-basalt"}`}
                onClick={() => {
                  setFilter(item.id);
                  setIndex(null);
                }}
              >
                {item.label}
              </button>
            );
          })}
        </div>
      ) : null}

      <p className="mt-4 font-mono text-[11px] tracking-[0.14em] uppercase">
        {shown.length} {shown.length === 1 ? "blad" : "bladen"}
        {filter !== "alles" ? ` · ${categoryLabel[filter].toLowerCase()}` : ""}
      </p>

      <div className={`mt-4 grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4 ${useMosaic ? "" : ""}`}>
        {shown.map((photo, i) => (
          <figure
            key={photo.src}
            className={`gallery-item border border-voeg bg-wit text-basalt ${useMosaic && i === 0 ? "md:col-span-2" : ""} ${useMosaic && i === 1 ? "md:col-span-2" : ""}`}
          >
            <button
              type="button"
              className="block w-full text-left"
              onClick={(e) => openAt(i, e.currentTarget)}
            >
              <span className="relative block aspect-[4/3] overflow-hidden">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes={i === 0 && useMosaic ? "(max-width: 768px) 100vw, 50vw" : "(max-width: 768px) 50vw, 25vw"}
                  className="object-cover"
                />
              </span>
              <span className="block border-t border-voeg px-2 py-2 font-mono text-[11px] tracking-[0.12em] uppercase">
                {photo.sheet}
              </span>
            </button>
          </figure>
        ))}
      </div>

      {current ? (
        <div
          className="fixed inset-0 z-[70] flex items-center justify-center bg-basalt p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby={titleId}
          onClick={(e) => {
            if (e.target === e.currentTarget) setIndex(null);
          }}
        >
          <div
            ref={dialogRef}
            className="flex w-full max-w-[940px] flex-col"
            onTouchStart={(e) => {
              touchX.current = e.changedTouches[0]?.clientX ?? null;
            }}
            onTouchEnd={(e) => {
              if (touchX.current === null) return;
              const dx = (e.changedTouches[0]?.clientX ?? touchX.current) - touchX.current;
              if (dx > 48) setIndex((i) => (i === null ? i : (i - 1 + shown.length) % shown.length));
              if (dx < -48) setIndex((i) => (i === null ? i : (i + 1) % shown.length));
              touchX.current = null;
            }}
          >
            <div className="mb-3 flex flex-wrap items-center gap-2">
              <button ref={closeRef} type="button" className="min-h-11 border border-wit px-3 text-wit" onClick={() => setIndex(null)}>
                Sluiten
              </button>
              <button
                type="button"
                className="min-h-11 border border-wit px-3 text-wit"
                onClick={() => setIndex((i) => (i === null ? i : (i - 1 + shown.length) % shown.length))}
              >
                Vorige
              </button>
              <button
                type="button"
                className="min-h-11 border border-wit px-3 text-wit"
                onClick={() => setIndex((i) => (i === null ? i : (i + 1) % shown.length))}
              >
                Volgende
              </button>
              <p id={titleId} className="ml-auto font-mono text-[11px] tracking-[0.14em] text-wit uppercase">
                {current.sheet}
              </p>
            </div>
            <img
              src={current.src}
              alt={current.alt}
              width={current.width}
              height={current.height}
              className="mx-auto h-auto w-auto max-h-[78vh] max-w-[min(900px,92vw)] border border-voeg"
            />
            <p className="mt-3 max-w-[900px] text-base text-wit">{current.alt}</p>
          </div>
        </div>
      ) : null}
    </div>
  );
}
