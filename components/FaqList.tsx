export default function FaqList({ items }: { items: { q: string; a: string }[] }) {
  return (
    <div className="border-t border-basalt">
      {items.map((item) => (
        <details key={item.q} className="group border-b border-voeg">
          <summary className="flex min-h-11 cursor-pointer items-center gap-3 py-3 font-display text-xl font-bold">
            <span aria-hidden className="mark-closed font-mono text-sm font-normal text-klinker">+</span>
            <span aria-hidden className="mark-open font-mono text-sm font-normal text-klinker">–</span>
            {item.q}
          </summary>
          <p className="max-w-[44rem] pb-4">{item.a}</p>
        </details>
      ))}
    </div>
  );
}
