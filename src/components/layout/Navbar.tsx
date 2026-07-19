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

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
            <NavbarButton as={Link} href={ctaNav.href} variant="primary">
              {ctaNav.title}
            </NavbarButton>
          </div>
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav>
          <MobileNavHeader>
            <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>
              <Brand size="sm" variant="full" />
            </Link>
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </MobileNavHeader>

          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
          >
            {items.map((item, idx) => (
              <a
                key={`mobile-link-${idx}`}
                href={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className="relative text-neutral-600 dark:text-neutral-300"
              >
                <span className="block">{item.name}</span>
              </a>
            ))}
            <div className="mt-4 flex w-full flex-col gap-4">
              <NavbarButton
                as={Link}
                href={ctaNav.href}
                variant="primary"
                className="w-full"
              >
                {ctaNav.title}
              </NavbarButton>
            </div>
          </MobileNavMenu>
        </MobileNav>
      </AceternityNavbar>
    </div>
  );
}
