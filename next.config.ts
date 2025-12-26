import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "alfajermart.com",
      },
      {
        protocol: "https",
        hostname: "www.nutraj.com",
      },
      {
        protocol: "https",
        hostname: "dryfruithouse.com",
      },
      {
        protocol: "https",
        hostname: "cdn.shopify.com",
      },
    ],
  },
};

export default nextConfig;
