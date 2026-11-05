"use client";

import { content } from "@/content";
import { useState, type FormEvent } from "react";

const initial = {
  naam: "",
  telefoon: "",
  email: "",
  plaats: "",
  grootte: "",
  toelichting: "",
};

export default function ContactForm({
  intro = "Vertel kort wat u met de tuin wilt. Ik bel of mail u terug. Liever direct? Bel of mail gerust.",
}: {
  intro?: string;
}) {
  const [values, setValues] = useState(initial);
  const [werk, setWerk] = useState<string[]>([]);
  const [fotoNaam, setFotoNaam] = useState("");
  const [error, setError] = useState("");
  const [sent, setSent] = useState(false);

  function toggle(id: string) {
    setWerk((current) => (current.includes(id) ? current.filter((item) => item !== id) : [...current, id]));
  }

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!values.naam.trim() || !values.telefoon.trim() || !values.email.trim()) {
      setError("Vul uw naam, telefoon en e-mail in.");
      setSent(false);
      return;
    }
    if (werk.length === 0) {
      setError("Kies wat u wilt bespreken.");
      setSent(false);
      return;
    }
    setError("");
    setSent(true);
  }

  return (
    <section id="tuin-bespreken" data-section="contact" className="scroll-mt-24 bg-basalt text-wit">
      <div className="mx-auto grid max-w-[1180px] gap-10 px-5 py-16 lg:grid-cols-12 lg:py-20">
        <div className="lg:col-span-4">
          <p className="font-mono text-[11px] tracking-[0.16em] text-zandlaag uppercase">Contact</p>
          <h2 className="mt-3 text-4xl">Tuin bespreken</h2>
          <p className="mt-4">{intro}</p>
          <dl className="mt-8 space-y-4 text-base">
            <div>
              <dt className="font-mono text-[11px] tracking-[0.14em] text-zandlaag uppercase">Telefoon</dt>
              <dd className="mt-1">
                <a href={content.contact.phoneTel} data-cta="bellen" className="text-xl font-semibold underline decoration-voeg underline-offset-4">
                  {content.contact.phoneDisplay}
                </a>
              </dd>
            </div>
            <div>
              <dt className="font-mono text-[11px] tracking-[0.14em] text-zandlaag uppercase">E-mail</dt>
              <dd className="mt-1 break-words">
                <a href={`mailto:${content.contact.email}`} data-cta="mailen" className="underline decoration-voeg underline-offset-4">
                  {content.contact.email}
                </a>
              </dd>
            </div>
            <div>
              <dt className="font-mono text-[11px] tracking-[0.14em] text-zandlaag uppercase">Adres</dt>
              <dd className="mt-1">{content.contact.address}</dd>
            </div>
            <div>
              <dt className="font-mono text-[11px] tracking-[0.14em] text-zandlaag uppercase">Bereikbaar</dt>
              <dd className="mt-1">{content.contact.hoursNote}</dd>
            </div>
          </dl>
        </div>

        <form onSubmit={onSubmit} className="border border-white/20 bg-basalt p-4 sm:p-6 lg:col-span-8" noValidate>
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="block">
              <span className="font-mono text-[11px] tracking-[0.14em] uppercase">Naam</span>
              <input
                name="naam"
                autoComplete="name"
                value={values.naam}
                onChange={(e) => setValues({ ...values, naam: e.target.value })}
                className="mt-1 min-h-11 w-full border border-voeg bg-wit px-3 text-basalt"
              />
            </label>
            <label className="block">
              <span className="font-mono text-[11px] tracking-[0.14em] uppercase">Telefoon</span>
              <input
                name="telefoon"
                type="tel"
                autoComplete="tel"
                value={values.telefoon}
                onChange={(e) => setValues({ ...values, telefoon: e.target.value })}
                className="mt-1 min-h-11 w-full border border-voeg bg-wit px-3 text-basalt"
              />
            </label>
            <label className="block">
              <span className="font-mono text-[11px] tracking-[0.14em] uppercase">E-mail</span>
              <input
                name="email"
                type="email"
                autoComplete="email"
                value={values.email}
                onChange={(e) => setValues({ ...values, email: e.target.value })}
                className="mt-1 min-h-11 w-full border border-voeg bg-wit px-3 text-basalt"
              />
            </label>
            <label className="block">
              <span className="font-mono text-[11px] tracking-[0.14em] uppercase">Plaats</span>
              <input
                name="plaats"
                autoComplete="address-level2"
                value={values.plaats}
                onChange={(e) => setValues({ ...values, plaats: e.target.value })}
                className="mt-1 min-h-11 w-full border border-voeg bg-wit px-3 text-basalt"
              />
            </label>
          </div>

          <fieldset className="mt-5">
            <legend className="font-mono text-[11px] tracking-[0.14em] uppercase">Wat wilt u</legend>
            <div className="mt-2 grid gap-2 sm:grid-cols-2">
              {content.vorm.werkzaamheden.map((item) => (
                <label key={item.id} className="flex min-h-11 items-center gap-3 border border-white/20 px-3">
                  <input
                    type="checkbox"
                    className="h-5 w-5 accent-klinker"
                    checked={werk.includes(item.id)}
                    onChange={() => toggle(item.id)}
                  />
                  {item.label}
                </label>
              ))}
            </div>
          </fieldset>

          <label className="mt-5 block">
            <span className="font-mono text-[11px] tracking-[0.14em] uppercase">Globale tuingrootte</span>
            <input
              name="grootte"
              value={values.grootte}
              onChange={(e) => setValues({ ...values, grootte: e.target.value })}
              className="mt-1 min-h-11 w-full border border-voeg bg-wit px-3 text-basalt"
            />
            <span className="mt-1 block text-base text-zandlaag">Bijvoorbeeld een stadstuin, een achtertuin of een perceel met oprit.</span>
          </label>

          <label className="mt-4 block">
            <span className="font-mono text-[11px] tracking-[0.14em] uppercase">Toelichting</span>
            <textarea
              name="toelichting"
              rows={4}
              value={values.toelichting}
              onChange={(e) => setValues({ ...values, toelichting: e.target.value })}
              className="mt-1 w-full border border-voeg bg-wit px-3 py-2 text-basalt"
            />
          </label>

          <div className="mt-4">
            <p className="font-mono text-[11px] tracking-[0.14em] uppercase">Foto, optioneel</p>
            <label className="mt-2 inline-flex min-h-11 cursor-pointer items-center bg-wit px-4 text-basalt">
              <input
                name="foto"
                type="file"
                accept="image/*"
                className="sr-only"
                onChange={(e) => setFotoNaam(e.target.files?.[0]?.name ?? "")}
              />
              {fotoNaam || "Kies een foto"}
            </label>
          </div>

          {error ? (
            <p role="alert" className="mt-4 border-l-2 border-klinker bg-white/5 px-3 py-2">
              {error}
            </p>
          ) : null}

          <button type="submit" data-cta="offerte" className="mt-5 inline-flex min-h-11 items-center bg-klinker px-5 font-semibold text-white">
            Tuin bespreken
          </button>

          {sent ? (
            <div role="status" className="mt-5 border-2 border-klinker bg-wit p-4 text-basalt">
              <p className="font-display text-xl font-bold">Dit is een concept.</p>
              <p className="mt-2">
                Het formulier verstuurt niets{fotoNaam ? ` en de foto ${fotoNaam} is niet meegestuurd` : ""}. Bel{" "}
                <a href={content.contact.phoneTel} data-cta="bellen" className="font-semibold underline">
                  {content.contact.phoneDisplay}
                </a>{" "}
                of mail{" "}
                <a href={`mailto:${content.contact.email}`} data-cta="mailen" className="underline">
                  {content.contact.email}
                </a>
                . Dan bespreek ik uw tuin graag met u.
              </p>
            </div>
          ) : null}
        </form>
      </div>
    </section>
  );
}
