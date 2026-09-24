import ResellerPageContent from "@/components/reseller/ResellerPageContent";

export const metadata = {
  title: "Kemo IPTV | IPTV Reseller Program – Credits & Xtream Panel",
  description:
    "Start your IPTV business with Kemo IPTV. Access our Xtream Codes control panel, no-expiry wholesale credits & 24/7 VIP support. Explore reseller plans today!",
  alternates: {
    canonical: "/reseller",
  },
  openGraph: {
    title: "Kemo IPTV | IPTV Reseller Program – Credits & Xtream Panel",
    description:
      "Start your IPTV business with Kemo IPTV. Access our Xtream Codes control panel, no-expiry wholesale credits & 24/7 VIP support. Explore reseller plans today!",
    url: "https://www.kemo-iptv.shop/reseller",
    siteName: "Kemo IPTV",
    type: "website",
    images: [
      {
        url: "/blog/kemo-best-iptv-players.jpg",
        width: 1200,
        height: 630,
        alt: "Kemo IPTV Official Reseller Panel Program",
      },
    ],
  },
};

export default function ResellerPage() {
  return (
    <main className="flex-grow pt-4">
      <ResellerPageContent />
    </main>
  );
}
