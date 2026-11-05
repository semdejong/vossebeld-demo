"use client";

import { content } from "@/content";
import { ctaType } from "@/lib/cta";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useState } from "react";
import LayerRule from "./LayerRule";

const services = content.services;

export default function SiteHeader() {
  const path = usePathname();
  const menuId = useId();
  const dienstenId = useId();
  const [open, setOpen] = useState(false);
  const [diensten, setDiensten] = useState(false);
  const onService = services.some((s) => s.href === path);

  useEffect(() => {
    setOpen(false);
    setDiensten(false);
  }, [path]);

  useEffect(() => {
    if (!open) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header data-section="header" className="sticky top-0 z-40 bg-wit">
      <div className="mx-auto flex max-w-[1180px] items-center gap-3 px-4 py-2.5 sm:px-5">
        <Link href="/" className="mr-auto flex shrink-0 items-center">
          <Image
            src={content.company.logo}
            alt="Hoveniersbedrijf Vossebeld"
            width={614}
            height={250}
            priority
            className="h-11 w-auto sm:h-14"
          />
        </Link>

        <nav aria-label="Hoofdmenu" className="hidden items-center gap-1 lg:flex">
          <div
            className="relative"
            onMouseEnter={() => setDiensten(true)}
            onMouseLeave={() => setDiensten(false)}
            onBlur={(e) => {
              if (!e.currentTarget.contains(e.relatedTarget as Node | null)) setDiensten(false);
            }}
          >
            <button
              type="button"
              className={`inline-flex min-h-11 items-center gap-2 border-b-2 px-3 ${onService ? "border-klinker" : "border-transparent"}`}
              aria-expanded={diensten}
              aria-controls={dienstenId}
              onClick={() => setDiensten((v) => !v)}
            >
              Diensten
              <span aria-hidden className="font-mono text-xs">{diensten ? "–" : "+"}</span>
            </button>
            {diensten ? (
              <div
                id={dienstenId}
                className="absolute top-full left-0 z-50 min-w-64 border border-voeg bg-wit py-1"
              >
                {services.map((s) => (
                  <Link
                    key={s.href}
                    href={s.href}
                    aria-current={path === s.href ? "page" : undefined}
                    className="flex min-h-11 items-center px-4 hover:bg-straatzand"
                  >
                    {s.title}
                  </Link>
                ))}
              </div>
            ) : null}
          </div>
          <Link href="/projecten" aria-current={path === "/projecten" ? "page" : undefined} className={`inline-flex min-h-11 items-center border-b-2 px-3 hover:bg-straatzand ${path === "/projecten" ? "border-klinker" : "border-transparent"}`}>
            Projecten
          </Link>
          <Link href="/over-peter" aria-current={path === "/over-peter" ? "page" : undefined} className={`inline-flex min-h-11 items-center border-b-2 px-3 hover:bg-straatzand ${path === "/over-peter" ? "border-klinker" : "border-transparent"}`}>
            Over Peter
          </Link>
          <Link href="/contact" aria-current={path === "/contact" ? "page" : undefined} className={`inline-flex min-h-11 items-center border-b-2 px-3 hover:bg-straatzand ${path === "/contact" ? "border-klinker" : "border-transparent"}`}>
            Contact
          </Link>
        </nav>

        <a
          href={content.contact.phoneTel}
          data-cta={ctaType(content.contact.phoneTel)}
          className="inline-flex min-h-11 items-center bg-klinker px-3 text-base font-semibold text-white sm:px-4"
        >
          {content.contact.phoneDisplay}
        </a>

        <button
          type="button"
          className="inline-flex min-h-11 items-center border border-basalt px-3 lg:hidden"
          aria-expanded={open}
          aria-controls={menuId}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "Sluiten" : "Menu"}
        </button>
      </div>

      {open ? (
        <nav id={menuId} aria-label="Mobiel menu" className="border-t border-voeg bg-wit px-4 py-2 lg:hidden">
          <p className="px-1 pt-3 font-mono text-[11px] tracking-[0.16em] uppercase">Diensten</p>
          {services.map((s) => (
            <Link key={s.href} href={s.href} aria-current={path === s.href ? "page" : undefined} className={`flex min-h-11 items-center border-b border-voeg px-1 ${path === s.href ? "border-l-2 border-l-klinker pl-3" : ""}`}>
              {s.title}
            </Link>
          ))}
          <Link href="/projecten" aria-current={path === "/projecten" ? "page" : undefined} className={`flex min-h-11 items-center border-b border-voeg px-1 ${path === "/projecten" ? "border-l-2 border-l-klinker pl-3" : ""}`}>Projecten</Link>
          <Link href="/over-peter" aria-current={path === "/over-peter" ? "page" : undefined} className={`flex min-h-11 items-center border-b border-voeg px-1 ${path === "/over-peter" ? "border-l-2 border-l-klinker pl-3" : ""}`}>Over Peter</Link>
          <Link href="/contact" aria-current={path === "/contact" ? "page" : undefined} className={`flex min-h-11 items-center px-1 ${path === "/contact" ? "border-l-2 border-l-klinker pl-3" : ""}`}>Contact</Link>
        </nav>
      ) : null}
      <LayerRule />
    </header>
  );
}
