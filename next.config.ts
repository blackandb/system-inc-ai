import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,

  poweredByHeader: false,

  compress: true,

  typedRoutes: false,

  images: {
    remotePatterns: [],
  },
};

export default nextConfig;
