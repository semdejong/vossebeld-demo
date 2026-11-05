import type { Metadata, Viewport } from "next";
import { Atkinson_Hyperlegible, Bricolage_Grotesque, JetBrains_Mono } from "next/font/google";
import type { CSSProperties } from "react";
import { Suspense } from "react";
import "./globals.css";
import { content } from "@/content";
import SleadsBadge from "@/components/SleadsBadge";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import MobileBar from "@/components/MobileBar";
import LayerRule from "@/components/LayerRule";

const display = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  display: "swap",
});

const body = Atkinson_Hyperlegible({
  variable: "--font-atkinson",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

const mono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: content.seo.title,
    template: `%s · ${content.company.name}`,
  },
  description: content.seo.description,
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: { index: false, follow: false, noimageindex: true },
  },
  icons: content.company.logo ? { icon: content.company.logo } : undefined,
};

export const viewport: Viewport = { themeColor: content.colors.primary };

const TRACKER_SRC = "https://sleads-demo-analytics.vercel.app/t.js";
const TRACKER_ENDPOINT = "https://basic-tiger-117.convex.site/track";

const c = content.colors;
const themeVars = {
  "--brand": c.primary,
  "--brand-fg": c.primaryForeground,
  "--accent": c.accent,
  "--background": c.background,
  "--foreground": c.foreground,
  "--muted": c.muted,
  "--basalt": c.foreground,
  "--straatzand": c.background,
  "--voeg": c.muted,
  "--klinker": c.primary,
  "--merk": c.accent,
  "--wit": c.panel,
  "--aarde": c.aarde,
  "--zandlaag": c.zandlaag,
  "--turf": c.turf,
} as CSSProperties;

function HeaderFallback() {
  return (
    <div className="sticky top-0 z-40 bg-wit">
      <div className="h-[68px]" />
      <LayerRule />
    </div>
  );
}

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang={content.seo.lang}
      style={themeVars}
      className={`${display.variable} ${body.variable} ${mono.variable} h-full antialiased`}
    >
      <head>
        <script async src={TRACKER_SRC} data-demo={content.slug} data-endpoint={TRACKER_ENDPOINT} />
      </head>
      <body className="flex min-h-full flex-col pb-14 md:pb-0">
        <a href="#inhoud" className="skip-link">
          Naar inhoud
        </a>
        <Suspense fallback={<HeaderFallback />}>
          <SiteHeader />
        </Suspense>
        {children}
        <SiteFooter />
        <MobileBar />
        <SleadsBadge />
      </body>
    </html>
  );
}
