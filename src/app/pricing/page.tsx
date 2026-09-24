import PricingPageContent from "@/components/pricing/PricingPageContent";

export const metadata = {
  title: "Kemo IPTV | IPTV Subscription Plans & Pricing – From $4.20",
  description: "Discover flexible Kemo IPTV subscription plans from $4.20/mo. Get 50,000+ live 4K channels, zero contracts & instant delivery. Choose your plan today!",
  alternates: {
    canonical: "/pricing",
  },
  openGraph: {
    title: "Kemo IPTV | IPTV Subscription Plans & Pricing – From $4.20",
    description: "Discover flexible Kemo IPTV subscription plans from $4.20/mo. Get 50,000+ live 4K channels, zero contracts & instant delivery. Choose your plan today!",
    url: "https://www.kemo-iptv.shop/pricing",
    siteName: "Kemo IPTV",
    type: "website",
    images: [
      {
        url: "/blog/kemo-iptv-buying-guide.jpg",
        width: 1200,
        height: 630,
        alt: "Kemo IPTV Subscription Pricing & Plans 2026",
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
