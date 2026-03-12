import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',              // ← REQUIRED: Generates static HTML
  images: {
    unoptimized: true,           // ← REQUIRED: For static export
  },
  trailingSlash: true,
  typescript: {
    ignoreBuildErrors: true,     // ← Optional but recommended
  },
};

export default nextConfig;
