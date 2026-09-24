import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kemo IPTV | 24/7 Support Desk – WhatsApp & Email Help",
  description:
    "Connect directly with the Kemo IPTV support team. Get 24/7 help with device setup, subscription activation, and technical questions on WhatsApp or email.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Kemo IPTV | 24/7 Support Desk – WhatsApp & Email Help",
    description:
      "Connect directly with the Kemo IPTV support team. Get 24/7 help with device setup, subscription activation, and technical questions on WhatsApp or email.",
    url: "https://www.kemo-iptv.shop/contact",
    siteName: "Kemo IPTV",
    type: "website",
    images: [
      {
        url: "/blog/kemo-best-iptv-players.jpg",
        width: 1200,
        height: 630,
        alt: "Kemo IPTV 24/7 VIP Support and Free Trial Helpdesk",
      },
    ],
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
