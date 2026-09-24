import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kemo IPTV | 50,000+ Channels & Live Sports Lineup",
  description:
    "Explore 50,000+ live IPTV channels from 150+ countries. Watch live 4K sports, PPV events, global news & 200,000+ VODs with Kemo IPTV. View the full lineup!",
  alternates: {
    canonical: "/channels",
  },
  openGraph: {
    title: "Kemo IPTV | 50,000+ Channels & Live Sports Lineup",
    description:
      "Explore 50,000+ live IPTV channels from 150+ countries. Watch live 4K sports, PPV events, global news & 200,000+ VODs with Kemo IPTV. View the full lineup!",
    url: "https://www.kemo-iptv.shop/channels",
    siteName: "Kemo IPTV",
    type: "website",
    images: [
      {
        url: "/blog/kemo-sports-streaming-setup.jpg",
        width: 1200,
        height: 675,
        alt: "Kemo IPTV 50,000+ Channels & Live Sports Lineup",
      },
    ],
  },
};

export default function ChannelsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
