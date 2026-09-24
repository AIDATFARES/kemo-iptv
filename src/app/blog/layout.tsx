import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kemo IPTV | IPTV Guides, Tutorials & 4K Streaming Tips",
  description:
    "Explore expert IPTV guides, player app tutorials, device setup tips, and buffering fixes. Learn how to optimize your 4K streaming experience with Kemo IPTV.",
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "Kemo IPTV | IPTV Guides, Tutorials & 4K Streaming Tips",
    description:
      "Explore expert IPTV guides, player app tutorials, device setup tips, and buffering fixes. Learn how to optimize your 4K streaming experience with Kemo IPTV.",
    url: "https://www.kemo-iptv.shop/blog",
    siteName: "Kemo IPTV",
    type: "website",
    images: [
      {
        url: "/blog/kemo-iptv-buying-guide.jpg",
        width: 1200,
        height: 630,
        alt: "Kemo IPTV Blog - 4K Streaming Tutorials & Guides",
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
