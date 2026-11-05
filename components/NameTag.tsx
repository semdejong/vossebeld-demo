import { content } from "@/content";
import Image from "next/image";

export default function NameTag() {
  return (
    <div className="inline-flex items-end gap-3 border border-voeg bg-wit p-2">
      <Image
        src={content.company.portrait}
        alt="Portret van Peter Vossebeld"
        width={162}
        height={221}
        className="h-auto w-[72px]"
      />
      <div className="pr-3 pb-1">
        <p className="font-mono text-[11px] tracking-[0.16em] uppercase">Naam</p>
        <p className="font-display text-xl leading-none font-bold">Peter Vossebeld</p>
        <p className="mt-1 text-base">Hovenier · Haaksbergen</p>
      </div>
    </div>
  );
}
