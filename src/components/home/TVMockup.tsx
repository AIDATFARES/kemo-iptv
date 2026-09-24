import Image from "next/image";

export default function TVMockup() {
  return (
    <div className="relative mx-auto w-full max-w-[1250px] flex items-center justify-center">
      {/* Background Ambient Glow Behind Mockup */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/15 via-indigo-500/15 to-blue-500/15 blur-[90px] rounded-full transform scale-110 pointer-events-none" />

      {/* Floating Animated Container */}
      <div
        className="relative z-10 w-full animate-fade-up opacity-0 [animation-delay:400ms] group"
      >
        <div className="animate-float w-full transition-transform duration-500 filter drop-shadow-[0_20px_40px_rgba(15,23,42,0.12)] group-hover:scale-[1.02]">
          <Image
            alt="Kemo IPTV 4K live streaming interface running across Smart TV, mobile phone, tablet and laptop simultaneously"
            title="Kemo IPTV Multi-Screen 4K Television Streaming Experience"
            className="h-auto w-full object-contain filter drop-shadow-[0_10px_25px_rgba(37,99,235,0.15)]"
            height={1000}
            priority
            sizes="(max-width: 1024px) 100vw, 60vw"
            src="/kemo-tv-mockup.webp"
            width={1800}
          />
        </div>
      </div>
    </div>
  );
}
