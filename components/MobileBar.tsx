import { content } from "@/content";
import Link from "next/link";

export default function MobileBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 md:hidden" data-section="belbalk">
      <a
        href={content.contact.phoneTel}
        data-cta="bellen"
        className="inline-flex min-h-14 items-center justify-center bg-klinker px-3 text-center font-display text-base font-semibold text-white"
      >
        Bel Peter
      </a>
      <Link
        href="/contact#tuin-bespreken"
        data-cta="offerte"
        className="inline-flex min-h-14 items-center justify-center bg-basalt px-3 text-center font-display text-base font-semibold text-wit"
      >
        Tuin bespreken
      </Link>
    </div>
  );
}
