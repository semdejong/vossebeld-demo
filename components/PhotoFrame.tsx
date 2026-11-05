import Image from "next/image";

export default function PhotoFrame({
  src,
  alt,
  width,
  height,
  caption,
  priority = false,
  sizes = "(max-width: 900px) 100vw, 900px",
  className = "",
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
  caption: string;
  priority?: boolean;
  sizes?: string;
  className?: string;
}) {
  return (
    <figure className={`max-w-[900px] border border-voeg bg-wit text-basalt ${className}`}>
      <div className="relative" style={{ aspectRatio: `${width} / ${height}` }}>
        <Image src={src} alt={alt} fill sizes={sizes} priority={priority} className="object-cover" />
      </div>
      <figcaption className="border-t border-voeg px-3 py-2 font-mono text-[11px] tracking-[0.14em] uppercase">
        {caption}
      </figcaption>
    </figure>
  );
}
