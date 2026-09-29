import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Fully static site (no API routes, no per-request data) — export plain
  // HTML/CSS/JS so it can run on Render's free Static Site hosting instead
  // of a paid always-on Node service.
  output: "export",
  // Static export has no server to run Next's image-optimization API on,
  // so images are served as-is. Fine here — they're small local PNGs already.
  images: { unoptimized: true },
  // Emits `route/index.html` for every page instead of `route.html`, which
  // is what static hosts (Render, Netlify, GitHub Pages, ...) expect for
  // clean URLs to resolve without extra rewrite rules.
  trailingSlash: true,
};

export default nextConfig;
