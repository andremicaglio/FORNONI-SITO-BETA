import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Le foto e il catalogo restano sul CDN già usato da fornoni.it
    remotePatterns: [new URL("https://d3e7ilti5q92ri.cloudfront.net/**")],
    qualities: [60, 75, 85],
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
