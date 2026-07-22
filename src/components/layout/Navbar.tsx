"use client";

import React, { useState } from "react";
import {
  Navbar as AceternityNavbar,
  NavBody,
  NavItems,
  MobileNav,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
  NavbarButton,
} from "@/components/ui/aceternity/resizable-navbar";
import { Brand } from "@/components/shared/Brand";
import { mainNav, ctaNav } from "@/data/navigation";
import Link from "next/link";

import { useJoinModal } from "@/components/join/hooks/useJoinModal";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { openJoinModal } = useJoinModal();

  // Lock body scroll when mobile hamburger drawer is open
  React.useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  // Map our NavItem format to the format expected by aceternity NavItems
  const items = mainNav.map((item) => ({
    name: item.title,
    link: item.href,
  }));

  return (
    <div className="relative w-full">
      <AceternityNavbar>
        {/* Desktop Navigation */}
        <NavBody>
          <div className="mr-4">
            <Link href="/" className="z-20 flex items-center">
              <Brand size="md" variant="full" />
            </Link>
          </div>
          
          <NavItems items={items} />
          
          <div className="flex items-center gap-4">
            <NavbarButton 
              onClick={openJoinModal}
              variant="primary"
            >
              {ctaNav.title}
            </NavbarButton>
          </div>
        </NavBody>

        {/* Mobile Navigation Header & Drawer */}
        <MobileNav>
          <MobileNavHeader className="px-4 py-2 bg-[#0A0A0F]/90 backdrop-blur-xl border border-white/10 rounded-full my-2">
            <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center">
              <Brand size="sm" variant="full" />
            </Link>
            <div className="flex items-center gap-2">
              <button
                onClick={openJoinModal}
                className="px-3 py-1.5 rounded-full bg-sky-500/20 border border-sky-500/30 text-sky-300 text-xs font-semibold"
              >
                Join
              </button>
              <MobileNavToggle
                isOpen={isMobileMenuOpen}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              />
            </div>
          </MobileNavHeader>

          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
            className="top-16 p-6 bg-[#0A0A0F]/98 border border-white/15 backdrop-blur-2xl rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.9)] space-y-2 max-h-[85vh] overflow-y-auto"
          >
            <div className="text-[10px] font-mono font-bold tracking-widest text-neutral-500 uppercase px-3 pb-1">
              NAVIGATION
            </div>
            {items.map((item, idx) => (
              <a
                key={`mobile-link-${idx}`}
                href={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center justify-between min-h-[48px] px-3.5 py-2.5 rounded-xl text-sm font-semibold text-neutral-300 hover:text-white hover:bg-white/5 active:bg-white/10 transition-all duration-200"
              >
                <span>{item.name}</span>
                <span className="text-neutral-600 text-xs font-mono">→</span>
              </a>
            ))}

            <div className="pt-4 border-t border-neutral-800/80">
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  openJoinModal();
                }}
                className="w-full min-h-[48px] py-3 px-4 rounded-xl bg-white text-black font-bold text-sm shadow-xl flex items-center justify-center gap-2 active:scale-[0.98] transition-transform"
              >
                <span>{ctaNav.title}</span>
              </button>
            </div>
          </MobileNavMenu>
        </MobileNav>
      </AceternityNavbar>
    </div>
  );
}
