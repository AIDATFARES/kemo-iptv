import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "50,000+ Live Channels & 200,000+ VODs | Reflexsat IPTV Catalog",
  description:
    "Explore the complete Reflexsat IPTV channel lineup. Over 50,000 premium live international sports, news, and entertainment channels in 4K & Full HD.",
  alternates: {
    canonical: "/channels",
  },
  openGraph: {
    title: "50,000+ Live Channels & 200,000+ VODs | Reflexsat IPTV Catalog",
    description:
      "Explore the complete Reflexsat IPTV channel lineup. Over 50,000 premium live international sports, news, and entertainment channels in 4K.",
    url: "https://www.reflexsat-iptv4k.shop/channels",
    siteName: "Reflexsat IPTV",
    type: "website",
    images: [
      {
        url: "/reflexsat-sports-streaming-setup.jpg",
        width: 1200,
        height: 675,
        alt: "Reflexsat IPTV 50,000+ Channels & Live Sports Lineup",
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
