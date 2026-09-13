import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Frequently Asked Questions | Reflexsat IPTV Service & Setup",
  description:
    "Find answers to common questions about Reflexsat IPTV subscriptions, device compatibility, anti-freeze technology, channel line-up, and payment methods.",
  alternates: {
    canonical: "/faq",
  },
  openGraph: {
    title: "Frequently Asked Questions | Reflexsat IPTV Service & Setup",
    description:
      "Find answers to common questions about Reflexsat IPTV subscriptions, device compatibility, and anti-freeze technology.",
    url: "https://www.reflexsat-iptv4k.shop/faq",
    siteName: "Reflexsat IPTV",
    type: "website",
    images: [
      {
        url: "/reflexsat-compatible-devices.webp",
        width: 1200,
        height: 630,
        alt: "Reflexsat IPTV Frequently Asked Questions & Device Compatibility",
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
