import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  compress: true,
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [360, 480, 640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 160, 240, 320],
    minimumCacheTTL: 31536000,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  async redirects() {
    return [
      // Article 1
      {
        source: "/blog/how-to-choose-the-best-iptv-service-2026",
        destination: "/blog/best-iptv-service-guide",
        permanent: true,
      },
      {
        source: "/blog/best-iptv-service-buying-guide-2026",
        destination: "/blog/best-iptv-service-guide",
        permanent: true,
      },
      // Article 2
      {
        source: "/blog/best-iptv-players-2026",
        destination: "/blog/best-iptv-players-apps-guide",
        permanent: true,
      },
      {
        source: "/blog/best-iptv-players",
        destination: "/blog/best-iptv-players-apps-guide",
        permanent: true,
      },
      // Article 3
      {
        source: "/blog/how-to-watch-nba-games-live-2026",
        destination: "/blog/watch-nba-live-stream-iptv",
        permanent: true,
      },
      {
        source: "/blog/how-to-watch-nba-live-stream-iptv",
        destination: "/blog/watch-nba-live-stream-iptv",
        permanent: true,
      },
      // Article 4
      {
        source: "/blog/iptv-channel-switching-slow",
        destination: "/blog/fix-slow-iptv-channel-switching",
        permanent: true,
      },
      {
        source: "/blog/fix-slow-iptv-channel-switching-zapping",
        destination: "/blog/fix-slow-iptv-channel-switching",
        permanent: true,
      },
      // Article 5
      {
        source: "/blog/iptv-on-apple-tv",
        destination: "/blog/how-to-setup-iptv-on-apple-tv-4k",
        permanent: true,
      },
      {
        source: "/blog/how-to-setup-iptv-on-apple-tv",
        destination: "/blog/how-to-setup-iptv-on-apple-tv-4k",
        permanent: true,
      },
      // Article 6
      {
        source: "/blog/internet-speed-for-iptv",
        destination: "/blog/internet-speed-for-iptv-streaming",
        permanent: true,
      },
      {
        source: "/blog/internet-speed-requirements-for-iptv",
        destination: "/blog/internet-speed-for-iptv-streaming",
        permanent: true,
      },
      // Article 7
      {
        source: "/blog/iptv-on-firestick",
        destination: "/blog/how-to-setup-iptv-on-amazon-firestick",
        permanent: true,
      },
      {
        source: "/blog/how-to-install-setup-iptv-firestick",
        destination: "/blog/how-to-setup-iptv-on-amazon-firestick",
        permanent: true,
      },
      // Article 8
      {
        source: "/blog/best-iptv-setup-for-sports-streaming",
        destination: "/blog/best-iptv-setup-for-sports-streaming-4k",
        permanent: true,
      },
      {
        source: "/blog/best-iptv-sports-streaming-setup",
        destination: "/blog/best-iptv-setup-for-sports-streaming-4k",
        permanent: true,
      },
      // Article 9
      {
        source: "/blog/iptv-black-screen-but-audio-works",
        destination: "/blog/fix-iptv-black-screen-with-audio",
        permanent: true,
      },
      {
        source: "/blog/fix-iptv-black-screen-with-sound-audio",
        destination: "/blog/fix-iptv-black-screen-with-audio",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

