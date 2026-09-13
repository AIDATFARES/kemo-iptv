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
      {
        source: "/blog/how-to-choose-the-best-iptv-service-2026",
        destination: "/blog/best-iptv-service-buying-guide-2026",
        permanent: true,
      },
      {
        source: "/blog/best-iptv-players-2026",
        destination: "/blog/best-iptv-players",
        permanent: true,
      },
      {
        source: "/blog/how-to-watch-nba-games-live-2026",
        destination: "/blog/how-to-watch-nba-live-stream-iptv",
        permanent: true,
      },
      {
        source: "/blog/iptv-channel-switching-slow",
        destination: "/blog/fix-slow-iptv-channel-switching-zapping",
        permanent: true,
      },
      {
        source: "/blog/iptv-on-apple-tv",
        destination: "/blog/how-to-setup-iptv-on-apple-tv",
        permanent: true,
      },
      {
        source: "/blog/internet-speed-for-iptv",
        destination: "/blog/internet-speed-requirements-for-iptv",
        permanent: true,
      },
      {
        source: "/blog/iptv-on-firestick",
        destination: "/blog/how-to-install-setup-iptv-firestick",
        permanent: true,
      },
      {
        source: "/blog/best-iptv-setup-for-sports-streaming",
        destination: "/blog/best-iptv-sports-streaming-setup",
        permanent: true,
      },
      {
        source: "/blog/iptv-black-screen-but-audio-works",
        destination: "/blog/fix-iptv-black-screen-with-sound-audio",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

