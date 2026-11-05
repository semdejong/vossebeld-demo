export default function SpecRows({ rows }: { rows: { label: string; text: string }[] }) {
  return (
    <div className="border-t border-basalt">
      {rows.map((row) => (
        <div key={row.label} className="grid grid-cols-12 gap-x-4 gap-y-1 border-b border-voeg py-4">
          <p className="col-span-12 font-mono text-[11px] tracking-[0.14em] uppercase sm:col-span-3">{row.label}</p>
          <p className="col-span-12 sm:col-span-9">{row.text}</p>
        </div>
      ))}
    </div>
  );
}
