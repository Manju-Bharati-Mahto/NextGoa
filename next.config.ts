import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'goa.paruluniversity.ac.in',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.paruluniversity.ac.in',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
