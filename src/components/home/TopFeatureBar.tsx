import Link from "next/link";
import { Tv, Film, ShieldCheck, Headphones } from "lucide-react";

export default function TopFeatureBar() {
  const highlights = [
    {
      icon: Tv,
      title: "+50,000 Channels",
      desc: "150+ Countries Live 4K",
      href: "/channels",
    },
    {
      icon: Film,
      title: "200,000+ VOD",
      desc: "Updated Daily with 4K Hits",
      href: "/channels",
    },
    {
      icon: ShieldCheck,
      title: "99.9% Uptime",
      desc: "Anti-Freeze 10.0 Servers",
      href: "/how-it-works",
    },
    {
      icon: Headphones,
      title: "24/7 VIP Support",
      desc: "Instant WhatsApp & Email",
      href: "/contact",
    },
  ];

  return (
    <div className="w-full">
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4 lg:grid-cols-4">
        {highlights.map((item, index) => {
          const Icon = item.icon;
          return (
            <Link
              key={index}
              href={item.href}
              className="bg-slate-50/80 border border-slate-200/80 rounded-2xl p-4 flex items-center gap-3.5 hover:border-blue-300 hover:bg-white hover:shadow-xs transition-all duration-200 group block"
            >
              <div className="p-2.5 rounded-xl bg-blue-100/80 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors shrink-0">
                <Icon className="w-5 h-5" strokeWidth={2.2} />
              </div>
              <div className="min-w-0">
                <p className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors leading-tight truncate">
                  {item.title}
                </p>
                <p className="text-[11px] text-slate-500 truncate mt-0.5">{item.desc}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
