import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  turbopack: {},
  webpack: (config, { dev, isServer }) => {
    if (dev && !isServer) {
      config.watchOptions = {
        poll: 1000, // Check for file changes every second
        aggregateTimeout: 300, // Delay rebuild slightly for stability
      };
    }
    return config;
  },
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
      {
        source: '/about/why-parul-university-goa',
        destination: '/about#who-we-are',
        permanent: true,
      },
      {
        source: '/about/who-we-are',
        destination: '/about#who-we-are',
        permanent: true,
      },
      {
        source: '/international/study-abroad',
        destination: '/study-abroad',
        permanent: true,
      },
      {
        source: '/why-goa',
        destination: '/about#why-goa',
        permanent: true,
      },
      {
        source: '/about/why-goa',
        destination: '/about#why-goa',
        permanent: true,
      },
      {
        source: '/alumni',
        destination: '/placements#alumni',
        permanent: true,
      },
      {
        source: '/placements/alumni',
        destination: '/placements#alumni',
        permanent: true,
      },
      {
        source: '/blog',
        destination: '/stories',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
