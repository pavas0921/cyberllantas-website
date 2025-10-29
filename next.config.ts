import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
    // ✅ permite cualquier imagen dentro de la carpeta /public
    localPatterns: [
      {
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
