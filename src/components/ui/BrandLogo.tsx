import React from "react";

export default function BrandLogo({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`flex items-center gap-2.5 select-none ${compact ? "scale-90 origin-left" : ""}`}>
      {/* Kemo IPTV Stream / Broadcast Icon */}
      <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-700 text-white shadow-sm shadow-blue-500/25 shrink-0">
        <svg
          className="w-5 h-5"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {/* Modern Play / Stream Signal */}
          <polygon points="6 3 20 12 6 21 6 3" fill="currentColor" fillOpacity="0.25" />
          <path d="M6 3v18l14-9-14-9z" />
          <path d="M19 5a8 8 0 0 1 0 14" strokeWidth="2" strokeLinecap="round" />
          <circle cx="6" cy="12" r="1.5" fill="currentColor" />
        </svg>
      </div>

      {/* Brand Typography */}
      <div className="flex flex-col leading-none">
        <div className="flex items-center gap-1.5">
          <span className="text-[20px] sm:text-[22px] font-black tracking-tight text-slate-900 font-sans">
            KEMO<span className="text-blue-600">IPTV</span>
          </span>
          <span className="bg-blue-50 text-blue-700 border border-blue-200/80 font-extrabold text-[9px] px-1.5 py-0.5 rounded tracking-wider uppercase">
            4K ULTRA HD
          </span>
        </div>
        <span className="text-[9px] font-semibold tracking-widest text-slate-400 uppercase mt-0.5">
          Premium Streaming Platform
        </span>
      </div>
    </div>
  );
}
