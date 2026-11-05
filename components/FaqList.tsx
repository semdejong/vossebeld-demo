export default function FaqList({ items }: { items: { q: string; a: string }[] }) {
  return (
    <div className="border-t border-basalt">
      {items.map((item) => (
        <details key={item.q} className="border-b border-voeg">
          <summary className="flex min-h-11 cursor-pointer items-center py-3 font-display text-xl font-bold">
            {item.q}
          </summary>
          <p className="max-w-[44rem] pb-4">{item.a}</p>
        </details>
      ))}
    </div>
  );
}
