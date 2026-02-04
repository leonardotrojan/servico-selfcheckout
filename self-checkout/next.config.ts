import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [{hostname: "u9a6wmr3as.ufs.sh"}]
  }
};

export default nextConfig;
