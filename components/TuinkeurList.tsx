import { content } from "@/content";
import Image from "next/image";

export default function TuinkeurList({ compact = false }: { compact?: boolean }) {
  return (
    <div>
      <div className="flex flex-wrap items-end gap-6">
        <div className="max-w-[40rem]">
          <p className="font-mono text-[11px] tracking-[0.16em] text-merk uppercase">TuinKeur gecertificeerd</p>
          <h2 className="mt-3 text-4xl sm:text-5xl">Vijf zekerheden</h2>
          {!compact ? <p className="mt-4">{content.tuinkeur.intro}</p> : null}
        </div>
        <Image
          src={content.tuinkeur.mark}
          alt="Logo TuinKeur gecertificeerd"
          width={425}
          height={425}
          className="h-24 w-24 sm:h-28 sm:w-28"
        />
      </div>
      {compact ? <p className="mt-6 max-w-[44rem]">{content.tuinkeur.intro}</p> : null}
      <dl className="mt-8 border-t border-basalt">
        {content.tuinkeur.zekerheden.map((item) => (
          <div key={item.title} className="grid grid-cols-12 gap-x-6 border-b border-voeg py-4">
            <dt className="col-span-12 font-display text-xl font-bold sm:col-span-4">{item.title}</dt>
            <dd className="col-span-12 sm:col-span-8">{item.text}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
