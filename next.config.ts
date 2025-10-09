import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "media.dodostatic.net",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "cdn.dodostatic.net",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "cdn.dribbble.com",
        pathname: "**",
      },
    ],
  },
};

export default nextConfig;
