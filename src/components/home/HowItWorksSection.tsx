import Image from "next/image";
import Link from "next/link";
import { CreditCard, KeyRound, PlayCircle } from "lucide-react";

export default function HowItWorksSection() {
  const steps = [
    {
      num: "Step 01",
      icon: CreditCard,
      title: "1. Select Your Kemo IPTV Plan",
      desc: (
        <>
          Choose your preferred duration and simultaneous screen connections from our{" "}
          <Link href="/pricing" className="text-blue-600 font-semibold hover:underline">
            IPTV subscription plans
          </Link>
          . Enjoy instant automated activation, zero locked-in contracts, and immediate access to 50,000+ live channels and 200,000+ VODs.
        </>
      ),
      image: "/kemo-step-1.png",
      alt: "Select your Kemo IPTV subscription duration and connections",
    },
    {
      num: "Step 02",
      icon: KeyRound,
      title: "2. Receive Instant Setup Credentials",
      desc: (
        <>
          Within minutes of checkout, your personal M3U playlist link and Xtream Codes API credentials arrive directly in your WhatsApp and email. Have questions? Our{" "}
          <Link href="/contact" className="text-blue-600 font-semibold hover:underline">
            24/7 VIP support desk
          </Link>{" "}
          is always ready to assist.
        </>
      ),
      image: "/kemo-step-2.png",
      alt: "Receive instant Kemo IPTV Xtream Codes credentials and M3U playlist URL",
    },
    {
      num: "Step 03",
      icon: PlayCircle,
      title: "3. Connect Your IPTV App & Stream in 4K",
      desc: (
        <>
          Load your playlist into top IPTV players like IPTV Smarters Pro, TiviMate, or IBO Player using our{" "}
          <Link href="/installation" className="text-blue-600 font-semibold hover:underline">
            step-by-step installation guides
          </Link>
          . Start enjoying over{" "}
          <Link href="/channels" className="text-blue-600 font-semibold hover:underline">
            50,000+ live 4K channels
          </Link>{" "}
          and 200,000+ movies instantly.
        </>
      ),
      image: "/kemo-step-3.png",
      alt: "Start 4K live TV and sports streaming with Kemo IPTV on any device",
    },
  ];

  return (
    <section className="py-24 bg-slate-50/50 text-slate-900 border-b border-slate-200/80">
      <div className="max-w-[1240px] mx-auto px-5 sm:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block py-1.5 px-4 rounded-full bg-blue-50 text-blue-700 font-bold text-xs tracking-wider uppercase mb-4 border border-blue-200/80">
            Quick 5-Minute Setup
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            How to Start Streaming With <span className="text-blue-600">Kemo IPTV</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg mt-4 leading-relaxed max-w-2xl mx-auto">
            Get up and streaming in under 5 minutes. No satellite dishes, no technician visits, and no complicated hardware required.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="space-y-12 max-w-5xl mx-auto">
          {steps.map((step, idx) => {
            const isEven = idx % 2 === 1;
            const Icon = step.icon;
            return (
              <div
                key={idx}
                className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm hover:border-slate-300 hover:shadow-md transition-all duration-200"
              >
                <div className={`space-y-4 ${isEven ? "md:order-2" : "md:order-1"}`}>
                  <div className="inline-flex items-center gap-2">
                    <span className="bg-blue-600 text-white font-extrabold text-xs uppercase tracking-wider px-3.5 py-1 rounded-full">
                      {step.num}
                    </span>
                    <Icon className="w-5 h-5 text-blue-600" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900">{step.title}</h3>
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed">{step.desc}</p>
                  {idx === 0 && (
                    <a
                      href="#pricing"
                      className="inline-block text-xs font-bold uppercase tracking-wider text-blue-600 hover:text-blue-800"
                    >
                      View Pricing Plans &rarr;
                    </a>
                  )}
                  {idx === 2 && (
                    <Link
                      href="/installation"
                      className="inline-block text-xs font-bold uppercase tracking-wider text-blue-600 hover:text-blue-800"
                    >
                      Explore Installation Guides &rarr;
                    </Link>
                  )}
                </div>

                <div className={`overflow-hidden rounded-2xl border border-slate-100 ${isEven ? "md:order-1" : "md:order-2"}`}>
                  <Image
                    src={step.image}
                    alt={step.alt}
                    title={step.alt}
                    width={600}
                    height={380}
                    className="w-full h-64 object-cover hover:scale-102 transition-transform duration-300"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
