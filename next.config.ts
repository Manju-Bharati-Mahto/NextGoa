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
  async rewrites() {
    return [
      {
        source: '/faculty-of-hotel-management',
        destination: '/faculty/hotel-management',
      },
      {
        source: '/faculty-of-physiotherapy',
        destination: '/faculty/physiotherapy',
      },
      {
        source: '/faculty-of-nursing',
        destination: '/faculty/nursing',
      },
      {
        source: '/faculty-of-pharmacy',
        destination: '/faculty/pharmacy',
      },
      {
        source: '/faculty-of-management-studies',
        destination: '/faculty/management-studies',
      },
    ];
  },
  async redirects() {
    return [
      {
        source: '/faculty/hotel-management',
        destination: '/faculty-of-hotel-management',
        permanent: true,
      },
      {
        source: '/faculty/physiotherapy',
        destination: '/faculty-of-physiotherapy',
        permanent: true,
      },
      {
        source: '/faculty/nursing',
        destination: '/faculty-of-nursing',
        permanent: true,
      },
      {
        source: '/faculty/pharmacy',
        destination: '/faculty-of-pharmacy',
        permanent: true,
      },
      {
        source: '/faculty/management-studies',
        destination: '/faculty-of-management-studies',
        permanent: true,
      },
      {
        source: '/sitemap.xml',
        destination: '/sitemap_index.xml',
        permanent: true,
      },
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
        source: '/about/chancellors-message',
        destination: '/about#leadership',
        permanent: true,
      },
      {
        source: '/about/presidents-message',
        destination: '/about#leadership',
        permanent: true,
      },
      {
        source: '/about/vice-chancellor',
        destination: '/about#leadership',
        permanent: true,
      },
      {
        source: '/about/board-of-governors',
        destination: '/about#board-of-governors',
        permanent: true,
      },
      {
        source: '/study-abroad',
        destination: '/international/study-abroad',
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
        source: '/stories',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/stories/:slug*',
        destination: '/blog/:slug*',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
