import Link from "next/link";
import { Monitor, Layers, Film, Zap, Smartphone, Globe2, ShieldCheck, ArrowRight } from "lucide-react";

export default function ChannelCategories() {
  const topFeatures = [
    {
      icon: Monitor,
      title: "4K ULTRA HD IPTV STREAMING",
      desc: "Stream every channel and live sports event in crisp 4K, Full HD, and 60 FPS. Kemo IPTV anti-freeze server technology ensures fluid, buffer-free playback on every screen.",
      tags: ["4K UHD", "60 FPS", "ANTI-FREEZE"],
      href: "/how-it-works",
      linkText: "Learn about our streaming technology",
    },
    {
      icon: Layers,
      title: "50,000+ LIVE IPTV CHANNELS",
      desc: "Access over 50,000 live international channels covering premium sports, global news, kids' programming, and entertainment networks across 150+ countries.",
      tags: ["150+ COUNTRIES", "LIVE SPORTS", "NEWS & KIDS"],
      href: "/channels",
      linkText: "Explore complete channels list",
    },
    {
      icon: Film,
      title: "200,000+ VOD MOVIES & SERIES",
      desc: "Explore a massive on-demand IPTV library featuring blockbuster cinema premieres, full TV series boxsets, and multi-language audio and subtitle tracks.",
      tags: ["DAILY UPDATES", "MULTI-AUDIO", "VOD 4K"],
      href: "/channels",
      linkText: "Browse on-demand movie catalog",
    },
  ];

  const bottomFeatures = [
    {
      icon: Zap,
      title: "Instant IPTV Setup",
      desc: "Receive your M3U playlist and Xtream Codes credentials via WhatsApp within 5 minutes.",
    },
    {
      icon: Smartphone,
      title: "Universal Device Support",
      desc: "Stream Kemo IPTV seamlessly on Smart TVs, Firestick, Android, Apple TV, iOS, and PC.",
    },
    {
      icon: Globe2,
      title: "Global Server Network",
      desc: "Stream buffer-free worldwide with high-bandwidth European and North American CDN nodes.",
    },
    {
      icon: ShieldCheck,
      title: "99.9% Anti-Freeze Uptime",
      desc: "Load-balanced server clusters engineered to maintain 60 FPS stability during peak live sports.",
    },
  ];

  return (
    <section className="relative z-10 bg-white py-20 sm:py-24 border-b border-slate-200/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        
        {/* Heading */}
        <div className="mx-auto mb-14 max-w-4xl text-center">
          <span className="inline-block py-1.5 px-4 rounded-full bg-blue-50 text-blue-700 font-bold text-xs tracking-wider uppercase mb-4 border border-blue-200/80">
            Enterprise Streaming Infrastructure
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Why Choose <br className="hidden md:block" />
            <span className="text-blue-600">Kemo IPTV Service</span>
          </h2>
          <p className="mt-4 text-slate-600 text-base sm:text-lg max-w-2xl mx-auto">
            Engineered from the ground up for stability, speed, and premium variety. Explore our{" "}
            <Link href="/channels" className="font-semibold text-blue-600 hover:text-blue-800 underline decoration-blue-200 hover:decoration-blue-600">
              50,000+ live channel lineup
            </Link>
            , choose an affordable{" "}
            <Link href="/pricing" className="font-semibold text-blue-600 hover:text-blue-800 underline decoration-blue-200 hover:decoration-blue-600">
              IPTV subscription plan
            </Link>
            , or follow our simple{" "}
            <Link href="/installation" className="font-semibold text-blue-600 hover:text-blue-800 underline decoration-blue-200 hover:decoration-blue-600">
              device installation tutorials
            </Link>
            .
          </p>
        </div>

        {/* Feature Grid */}
        <div className="flex flex-col gap-5">
          
          {/* Top Row: 3 Large Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {topFeatures.map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <div 
                  key={idx} 
                  className="flex flex-col rounded-2xl bg-slate-50/60 border border-slate-200/90 p-7 sm:p-8 hover:bg-white hover:border-blue-300 hover:shadow-md transition-all duration-200 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center mb-5 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <Icon className="h-6 w-6" strokeWidth={2} />
                  </div>
                  <h3 className="mb-3 text-lg font-bold text-slate-900">{feature.title}</h3>
                  <p className="text-sm leading-relaxed text-slate-600 mb-4 flex-grow">
                    {feature.desc}
                  </p>
                  <Link
                    href={feature.href}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-800 mb-5 group-hover:translate-x-1 transition-transform"
                  >
                    <span>{feature.linkText}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                  <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-200/60">
                    {feature.tags.map((tag, tIdx) => (
                      <span key={tIdx} className="text-[10px] font-bold uppercase tracking-wider bg-white border border-slate-200 px-2.5 py-1 rounded-full text-slate-600">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom Row: 4 Small Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-2">
            {bottomFeatures.map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <div 
                  key={idx} 
                  className="flex flex-col rounded-xl bg-slate-50/50 border border-slate-200/80 p-5 hover:bg-white hover:border-blue-300 hover:shadow-xs transition-all duration-200 group"
                >
                  <div className="w-9 h-9 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center mb-3 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <Icon className="h-5 w-5" strokeWidth={2} />
                  </div>
                  <h4 className="text-sm font-bold text-slate-900 mb-1">{feature.title}</h4>
                  <p className="text-xs leading-relaxed text-slate-500">
                    {feature.desc}
                  </p>
                </div>
              );
            })}
          </div>

        </div>

        {/* Interlinking Strip */}
        <div className="mt-12 text-center text-xs sm:text-sm text-slate-600">
          Ready to cut the cord?{" "}
          <Link href="/pricing" className="font-bold text-blue-600 hover:text-blue-800 underline">
            Compare subscription prices
          </Link>{" "}
          or discover{" "}
          <Link href="/how-it-works" className="font-bold text-blue-600 hover:text-blue-800 underline">
            how easy it is to start streaming
          </Link>
          .
        </div>

      </div>
    </section>
  );
}
