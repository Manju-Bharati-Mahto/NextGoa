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
  async redirects() {
    return [
      {
        source: '/about/vision-mission',
        destination: '/about#vision-mission',
        permanent: true,
      },
      {
        source: '/about/vision',
        destination: '/about#vision-mission',
        permanent: true,
      },
      {
        source: '/about/mission',
        destination: '/about#vision-mission',
        permanent: true,
      },
      {
        source: '/about/leadership',
        destination: '/about#leadership',
        permanent: true,
      },
      {
        source: '/about/accreditations-recognitions',
        destination: '/about#accreditations-recognitions',
        permanent: true,
      },
      {
        source: '/about/accreditations',
        destination: '/about#accreditations-recognitions',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
