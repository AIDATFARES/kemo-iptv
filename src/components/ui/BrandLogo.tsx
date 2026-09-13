import React from "react";

export default function BrandLogo({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`flex items-center gap-2.5 select-none ${compact ? "scale-90 origin-left" : ""}`}>
      {/* Reflexsat Satellite / Signal Icon */}
      <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-blue-700 text-white shadow-sm shadow-blue-500/20 shrink-0">
        <svg
          className="w-5 h-5"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {/* Satellite Dish Body */}
          <path d="M4 10a7.5 7.5 0 0 0 10 10" />
          <path d="M4 15a2.5 2.5 0 0 0 5 5" />
          <path d="M14 4a10.5 10.5 0 0 1 6 6" />
          <path d="M12 2a13 13 0 0 1 10 10" />
          {/* Beam / Focus point */}
          <circle cx="9" cy="9" r="2.5" fill="currentColor" />
          <line x1="9" y1="9" x2="16" y2="2" />
        </svg>
      </div>

      {/* Brand Typography */}
      <div className="flex flex-col leading-none">
        <div className="flex items-center gap-1.5">
          <span className="text-[20px] sm:text-[22px] font-black tracking-tighter text-slate-900 font-sans">
            REFLEX<span className="text-blue-600">SAT</span>
          </span>
          <span className="bg-blue-50 text-blue-700 border border-blue-200/80 font-extrabold text-[9px] px-1.5 py-0.5 rounded tracking-wider uppercase">
            4K IPTV
          </span>
        </div>
        <span className="text-[9px] font-semibold tracking-widest text-slate-400 uppercase mt-0.5">
          Satellite-Grade Streams
        </span>
      </div>
    </div>
  );
}
