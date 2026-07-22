"use client";

import React from "react";
import { Sparkles } from "lucide-react";

export function ModalHeader() {
  return (
    <div className="flex flex-col items-center text-center space-y-2.5 pb-2">
      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-[11px] font-mono font-bold tracking-widest text-sky-400 uppercase">
        <Sparkles className="w-3 h-3 text-sky-400" />
        <span>JOIN TECHSPACE</span>
      </div>

      <h2 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">
        Build. Learn. Collaborate.
      </h2>

      <p className="text-xs md:text-sm text-neutral-300 leading-relaxed max-w-md">
        Become part of a community where students learn together, build real projects,
        and grow through workshops, hackathons, and hands-on experiences.
      </p>
    </div>
  );
}
