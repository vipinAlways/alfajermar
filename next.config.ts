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
    ],
  },
};

export default nextConfig;
