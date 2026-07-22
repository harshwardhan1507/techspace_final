"use client";

import React from "react";
import Link from "next/link";
import { Brand } from "@/components/shared/Brand";
import { mainNav } from "@/data/navigation";
import { MessageCircle, Heart } from "lucide-react";
import { useJoinModal } from "@/components/join/hooks/useJoinModal";
import { DeveloperCredit } from "@/components/footer/DeveloperCredit";

const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

export default function Footer() {
  const { openJoinModal } = useJoinModal();

  return (
    <footer id="footer" aria-label="Footer" className="relative w-full bg-[#030305] border-t border-neutral-800/80 text-neutral-400">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 pb-12 border-b border-neutral-800/60">
          
          {/* Brand Info */}
          <div className="md:col-span-6 lg:col-span-5 space-y-4">
            <Link href="/" className="inline-block">
              <Brand size="md" variant="full" />
            </Link>
            <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed max-w-sm">
              The official student technology community of SRM University Sonipat. We build, learn, and innovate together through hands-on workshops, hackathons, and real-world projects.
            </p>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-6 lg:col-span-4">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-neutral-200 mb-4">
              Navigation
            </h4>
            <div className="grid grid-cols-2 gap-x-4 gap-y-2">
              {mainNav.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="inline-flex items-center min-h-[44px] text-xs sm:text-sm text-neutral-400 hover:text-white transition-colors duration-200"
                >
                  {item.title}
                </a>
              ))}
            </div>
          </div>

          {/* Connect & Social Hub */}
          <div className="md:col-span-12 lg:col-span-3 space-y-4">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-neutral-200">
              Community Hub
            </h4>
            <p className="text-xs text-neutral-400">
              Join our official WhatsApp community and follow our Instagram for event updates.
            </p>
            <div className="flex items-center gap-3 pt-1">
              <button
                onClick={openJoinModal}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 hover:bg-emerald-500/20 text-xs font-medium min-h-[44px] transition-colors cursor-pointer"
                aria-label="WhatsApp Community"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp</span>
              </button>
              <button
                onClick={openJoinModal}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-pink-500/10 border border-pink-500/20 text-pink-400 hover:bg-pink-500/20 text-xs font-medium min-h-[44px] transition-colors cursor-pointer"
                aria-label="Instagram Profile"
              >
                <InstagramIcon className="w-4 h-4" />
                <span>Instagram</span>
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Copyright & Developer Credit Row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <div className="flex items-center gap-1.5 text-center sm:text-left">
            <span>© {new Date().getFullYear()} TechSpace • SRM University</span>
            <span className="hidden md:inline">•</span>
            <span className="hidden md:inline-flex items-center gap-1">
              Built with <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500 inline" />
            </span>
          </div>

          {/* Interactive Developer Easter Egg */}
          <DeveloperCredit />
        </div>
      </div>
    </footer>
  );
}
