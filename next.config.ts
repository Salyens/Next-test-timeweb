import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "media.cntraveler.com",
        port: "",
        pathname: "/photos/**",
        search: "",
      },
    ],
  },
  /* config options here */
};

export default nextConfig;
