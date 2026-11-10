import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
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
  async redirects() {
    return [
      { source: "/menus", destination: "/menu", permanent: true },
      { source: "/food-menu", destination: "/menu", permanent: true },
      { source: "/drinks-menu", destination: "/menu", permanent: true },
      { source: "/about-us", destination: "/about", permanent: true },
      { source: "/contact-us", destination: "/contact", permanent: true },
      { source: "/gallery-page", destination: "/gallery", permanent: true },
    ];
  },
};

export default nextConfig;
