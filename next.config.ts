import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
  images: {
    remotePatterns: [{ protocol: "https", hostname: "**" }],
  },
  // Demo's: nooit indexeren, op elke route.
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [{ key: "X-Robots-Tag", value: "noindex, nofollow" }],
      },
    ];
  },
  async redirects() {
    return [
      { source: "/index.php", destination: "/", permanent: true },
      { source: "/bedrijf.php", destination: "/over-peter", permanent: true },
      { source: "/diensten.php", destination: "/aanleg", permanent: true },
      { source: "/projecten.php", destination: "/projecten", permanent: true },
      { source: "/contact.php", destination: "/contact", permanent: true },
      { source: "/index.html", destination: "/", permanent: true },
    ];
  },
};

export default nextConfig;
