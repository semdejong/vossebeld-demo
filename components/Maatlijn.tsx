export default function Maatlijn({ caption = "Maatlijn · schetsmatig, geen schaal van een tuin" }: { caption?: string }) {
  return (
    <div className="mt-8 max-w-sm">
      <div className="flex h-3 items-end border-b border-basalt" aria-hidden>
        {Array.from({ length: 8 }, (_, i) => (
          <span key={i} className={`flex-1 border-l border-basalt ${i % 2 === 0 ? "h-3" : "h-1.5"}`} />
        ))}
      </div>
      <p className="mt-1 font-mono text-[10px] tracking-[0.14em] uppercase">{caption}</p>
    </div>
  );
}
