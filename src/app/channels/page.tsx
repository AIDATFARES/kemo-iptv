"use client";

import { 
  Baby, 
  Check, 
  Film, 
  Globe2, 
  Layers3, 
  Monitor, 
  Newspaper, 
  Trophy, 
  Tv, 
  Zap, 
  CirclePlay,
  Radio,
  Sparkles
} from "lucide-react";
import Link from "next/link";
import BrandMarquee from "@/components/home/BrandMarquee";

const categoryCards = [
  {
    icon: Trophy,
    title: "Live 4K Sports & PPV Networks",
    items: [
      "Premier League, UEFA Champions League, La Liga & Serie A",
      "NBA, NFL Sunday Ticket, UFC Fight Nights, Boxing & Formula 1",
      "Sky Sports, TNT Sports, beIN Sports, ESPN+, DAZN & PPV events"
    ],
    count: "12,500+ Live Feeds",
    tag: "MOST POPULAR"
  },
  {
    icon: Film,
    title: "Cinema & Premium Movies",
    items: [
      "Cinema premieres & 24/7 dedicated blockbuster networks",
      "Uncompressed 4K Ultra HD & 1080p high bitrate streaming",
      "HBO, Cinemax, Sky Cinema, Starz, Paramount+ & Daily VOD"
    ],
    count: "200,000+ Movies & Series"
  },
  {
    icon: Newspaper,
    title: "Global 24/7 Live News",
    items: [
      "24/7 continuous international breaking news channels",
      "National, regional, financial and real-time business coverage",
      "BBC News, CNN, Sky News, Fox News, CNBC, Bloomberg & more"
    ],
    count: "3,200+ News Feeds"
  },
  {
    icon: Baby,
    title: "Kids & Family Entertainment",
    items: [
      "Animated series, educational programming & family cinema",
      "Safe family-friendly networks with multi-language audio",
      "Disney Channel, Cartoon Network, Nickelodeon, Boomerang & CBeebies"
    ],
    count: "2,800+ Channels"
  },
  {
    icon: Monitor,
    title: "General Entertainment & Docs",
    items: [
      "Top-rated global dramas, reality TV & premium lifestyle shows",
      "US, UK, Canadian, Australian & European flagship channels",
      "Discovery, Nat Geo, History Channel, TLC, Bravo, AMC & ITV"
    ],
    count: "15,000+ Channels"
  },
  {
    icon: Globe2,
    title: "150+ Country Regional IPTV Packages",
    items: [
      "150+ international countries with localized audio and EPG",
      "Dedicated local sports, cultural networks & regional stations",
      "USA, UK, Canada, Europe, MENA, Latin America, Africa & Asia"
    ],
    count: "+50,000 Channels"
  },
  {
    icon: Layers3,
    title: "On-Demand TV Series & Boxsets",
    items: [
      "Complete season boxsets with automatic latest episode updates",
      "High-speed CDN servers with multi-language subtitle tracks",
      "Binge-worthy shows from Netflix, Apple TV+, Amazon Prime & HBO"
    ],
    count: "+120,000 Episodes"
  }
];

export default function ChannelsPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900 pt-6 sm:pt-8 pb-20 relative overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-10 relative z-10">
        
        {/* Header Banner */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-200/80 bg-blue-50 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-blue-700 mb-6">
            <Radio className="w-3.5 h-3.5 text-blue-600 animate-pulse" />
            <span>50,000+ CHANNELS · 200,000+ VODS · 150+ COUNTRIES</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Kemo IPTV <span className="text-blue-600">Channel Lineup</span>
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-base sm:text-lg text-slate-600 leading-relaxed">
            Browse our expansive channel directory featuring live sports, 4K movies, international news, and complete on-demand series.
            All streams are powered by our{" "}
            <Link href="/how-it-works" className="font-semibold text-blue-600 hover:text-blue-800 underline">
              anti-freeze 10.0 server network
            </Link>{" "}
            and work across all{" "}
            <Link href="/installation" className="font-semibold text-blue-600 hover:text-blue-800 underline">
              supported devices
            </Link>
            .
          </p>
          <p className="mt-3 text-xs sm:text-sm text-slate-500 max-w-xl mx-auto">
            Ready to subscribe? Choose your <Link href="/pricing" className="font-semibold text-blue-600 hover:underline">subscription plan</Link> or explore our <Link href="/reseller" className="font-semibold text-blue-600 hover:underline">reseller credits</Link>.
          </p>
        </div>

        {/* Category Cards Grid */}
        <section className="mb-20">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {categoryCards.map((category, index) => {
              const Icon = category.icon;

              return (
                <article
                  key={category.title}
                  className="relative flex flex-col rounded-2xl border border-slate-200 bg-slate-50/60 p-7 hover:bg-white hover:border-blue-300 hover:shadow-md transition-all duration-200"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center">
                      <Icon className="h-6 w-6" strokeWidth={2} />
                    </div>
                    {category.tag && (
                      <span className="rounded-full bg-blue-600 px-3 py-1 text-[10px] font-extrabold uppercase tracking-wider text-white">
                        {category.tag}
                      </span>
                    )}
                  </div>

                  <h2 className="text-xl font-bold text-slate-900 tracking-tight mb-3">
                    {category.title}
                  </h2>

                  <ul className="w-full space-y-2.5 mb-6 text-left">
                    {category.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600 leading-tight">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" strokeWidth={2.5} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="w-full mt-auto pt-4 border-t border-slate-200 flex items-center justify-between">
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">Content Pool</span>
                    <span className="text-xs font-bold text-slate-800">{category.count}</span>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        {/* Brand Logos Tape */}
        <section className="mb-20 rounded-2xl overflow-hidden border border-slate-200 py-6 bg-slate-50/40">
          <span className="block text-center text-xs font-bold tracking-widest text-slate-400 uppercase mb-4">
            Supported Global Networks & Feeds
          </span>
          <BrandMarquee />
        </section>

        {/* CTA Bottom Box */}
        <section className="bg-slate-50 rounded-3xl border border-slate-200 p-8 sm:p-12 text-center shadow-xs">
          <div className="max-w-2xl mx-auto">
            <div className="w-12 h-12 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center mx-auto mb-4">
              <CirclePlay className="w-6 h-6" />
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900">
              Ready to Stream 50,000+ Channels With Kemo IPTV?
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
              Order your Kemo IPTV subscription today and receive your M3U playlist and Xtream Codes login credentials on WhatsApp in minutes. Need help configuring your app? Follow our{" "}
              <Link href="/installation" className="text-blue-600 font-bold underline">
                device installation tutorials
              </Link>
              , browse our{" "}
              <Link href="/faq" className="text-blue-600 font-bold underline">
                FAQ
              </Link>
              , or{" "}
              <Link href="/contact" className="text-blue-600 font-bold underline">
                chat with 24/7 support
              </Link>
              .
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/pricing"
                className="btn-primary-kemo px-8 py-3.5 text-xs sm:text-sm font-extrabold uppercase tracking-wider"
              >
                View Subscription Plans
              </Link>
              <a
                href="https://wa.me/447882781998?text=Hello,%20I%20would%20like%20to%20request%20a%20free%20trial%20for%20Kemo%20IPTV."
                target="_blank"
                rel="noreferrer"
                className="btn-whatsapp-clean px-8 py-3.5 text-xs sm:text-sm font-extrabold uppercase tracking-wider"
              >
                Request 24h Free Trial
              </a>
            </div>
          </div>
        </section>

      </div>
    </main>
  );
}
