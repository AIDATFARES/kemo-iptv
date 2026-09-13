import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Reflexsat IPTV Blog & Streaming Insights 2026",
  description:
    "Explore in-depth 4K streaming tutorials, IPTV player reviews, device setup guides, and troubleshooting fixes from the Reflexsat IPTV engineering team.",
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "Reflexsat IPTV Blog & Streaming Insights 2026",
    description:
      "Explore in-depth 4K streaming tutorials, IPTV player reviews, and device setup guides from Reflexsat IPTV.",
    url: "https://www.reflexsat-iptv4k.shop/blog",
    siteName: "Reflexsat IPTV",
    type: "website",
    images: [
      {
        url: "/reflexsat-iptv-buying-guide.jpg",
        width: 1200,
        height: 630,
        alt: "Reflexsat IPTV Blog - 4K Streaming Tutorials & Guides",
      },
    ],
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
