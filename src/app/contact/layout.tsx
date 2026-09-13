import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "24/7 VIP Customer Support & Free Trial | Reflexsat IPTV",
  description:
    "Contact Reflexsat IPTV 24/7 engineering support desk for technical setup assistance, billing questions, or to request your instant free 24-hour test account.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "24/7 VIP Customer Support & Free Trial | Reflexsat IPTV",
    description:
      "Contact Reflexsat IPTV 24/7 engineering support desk for technical setup assistance or free trials.",
    url: "https://www.reflexsat-iptv4k.shop/contact",
    siteName: "Reflexsat IPTV",
    type: "website",
    images: [
      {
        url: "/reflexsat-tv-mockup.webp",
        width: 1200,
        height: 630,
        alt: "Reflexsat IPTV 24/7 VIP Support and Free Trial Helpdesk",
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
