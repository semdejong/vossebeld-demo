export default function LayerRule({ tall = false }: { tall?: boolean }) {
  const h = tall ? "h-2" : "h-1";
  return (
    <div aria-hidden className="flex w-full flex-col">
      <div className={`${h} bg-turf`} />
      <div className={`${h} bg-klinker`} />
      <div className={`${h} bg-aarde`} />
      <div className={`${h} bg-zandlaag`} />
    </div>
  );
}
