import type { BondId } from "@/content";

const file: Record<BondId, { src: string; size: string; label: string }> = {
  tegelverband: { src: "/patterns/tegel.svg", size: "36px 18px", label: "Tegelverband" },
  halfsteens: { src: "/patterns/half.svg", size: "48px 32px", label: "Halfsteensverband" },
  wildverband: { src: "/patterns/wild.svg", size: "120px 64px", label: "Wildverband" },
  keper: { src: "/patterns/keper.svg", size: "72px 72px", label: "Keperverband" },
  blokverband: { src: "/patterns/blok.svg", size: "22px 22px", label: "Blokverband" },
  elleboog: { src: "/patterns/keper.svg", size: "64px 64px", label: "Elleboogverband" },
};

export default function BondSwatch({
  bond,
  className = "",
}: {
  bond: BondId;
  className?: string;
}) {
  const item = file[bond];
  if (bond === "elleboog") {
    return (
      <div role="img" aria-label={item.label} className={`relative overflow-hidden bg-straatzand ${className}`}>
        <div
          aria-hidden
          className="absolute top-1/2 left-1/2 h-[720px] w-[720px]"
          style={{
            backgroundImage: `url(${item.src})`,
            backgroundSize: "72px 72px",
            transform: "translate(-50%, -50%) rotate(45deg)",
          }}
        />
      </div>
    );
  }
  return (
    <div
      role="img"
      aria-label={item.label}
      className={`bg-straatzand ${className}`}
      style={{ backgroundImage: `url(${item.src})`, backgroundSize: item.size }}
    />
  );
}
