import PricingPageContent from "@/components/pricing/PricingPageContent";

export const metadata = {
  title: "Reflexsat IPTV Pricing & Plans 2026 | Premium 4K IPTV Subscription",
  description: "Browse affordable Reflexsat IPTV subscription plans. Stream 50,000+ live channels, 200,000+ VODs, and PPV sports with anti-freeze servers and instant multi-device setup.",
  alternates: {
    canonical: "/pricing",
  },
  openGraph: {
    title: "Reflexsat IPTV Pricing & Plans 2026 | Premium 4K IPTV Subscription",
    description: "Browse affordable Reflexsat IPTV subscription plans. Stream 50,000+ live channels, 200,000+ VODs, and PPV sports with anti-freeze servers.",
    url: "https://www.reflexsat-iptv4k.shop/pricing",
    siteName: "Reflexsat IPTV",
    type: "website",
    images: [
      {
        url: "/reflexsat-iptv-buying-guide.jpg",
        width: 1200,
        height: 630,
        alt: "Reflexsat IPTV Subscription Pricing & Plans 2026",
      },
    ],
  },
};

export default function PricingPage() {
  return (
    <main className="flex-grow pt-4">
      <PricingPageContent />
    </main>
  );
}
