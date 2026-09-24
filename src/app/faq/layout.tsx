import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kemo IPTV | IPTV FAQ – Common Questions, Setup & Billing",
  description:
    "Find fast, helpful answers to common questions about Kemo IPTV. Learn about device compatibility, free trial activation, payment methods, and setup guides.",
  alternates: {
    canonical: "/faq",
  },
  openGraph: {
    title: "Kemo IPTV | IPTV FAQ – Common Questions, Setup & Billing",
    description:
      "Find fast, helpful answers to common questions about Kemo IPTV. Learn about device compatibility, free trial activation, payment methods, and setup guides.",
    url: "https://www.kemo-iptv.shop/faq",
    siteName: "Kemo IPTV",
    type: "website",
    images: [
      {
        url: "/blog/kemo-best-iptv-players.jpg",
        width: 1200,
        height: 630,
        alt: "Kemo IPTV Frequently Asked Questions & Device Compatibility",
      },
    ],
  },
};

export default function FAQLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
