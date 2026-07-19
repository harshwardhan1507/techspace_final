"use client";

import { useState, useEffect, useMemo, useRef } from "react";
import {
  Navbar as ResizableNavbarContainer,
  NavBody,
  MobileNav,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/aceternity/resizable-navbar";
import { mainNav, ctaNav } from "@/data/navigation";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useOutsideClick } from "@/hooks/use-outside-click";
import { Brand } from "@/components/shared/Brand";

import React from "react";

// Wrapper to intercept `visible` prop from vendor Navbar and forward to MobileNav,
// while safely providing a ref without passing `visible` to a native DOM element.
const MobileNavContainer = React.forwardRef<
  HTMLDivElement,
  { children: React.ReactNode; className?: string; visible?: boolean }
>(({ children, className, visible }, ref) => (
  <div ref={ref} className={className}>
    {React.Children.map(children, (child) =>
      React.isValidElement(child)
        ? React.cloneElement(child as React.ReactElement<{ visible?: boolean }>, { visible })
        : child
    )}
  </div>
));
MobileNavContainer.displayName = "MobileNavContainer";

// Extends vendor functionality without mutating the vendor component
// This adds active section highlighting via IntersectionObserver
function ActiveNavItems({
  items,
}: {
  items: { name: string; link: string; id: string }[];
}) {
  const [hovered, setHovered] = useState<number | null>(null);
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-20% 0px -80% 0px" }
    );

    items.forEach((item) => {
      if (item.id) {
        const el = document.getElementById(item.id);
        if (el) observer.observe(el);
      }
    });

    return () => observer.disconnect();
  }, [items]);

  return (
    <motion.div
      onMouseLeave={() => setHovered(null)}
      className="absolute inset-0 hidden flex-1 flex-row items-center justify-center space-x-2 text-sm font-medium transition duration-200 lg:flex lg:space-x-2"
    >
      {items.map((item, idx) => {
        const isActive = activeId === item.id;
        return (
          <a
            onMouseEnter={() => setHovered(idx)}
            className={cn(
              "relative px-4 py-2 transition-colors duration-200 rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
              isActive 
                ? "text-black dark:text-white font-semibold" 
                : "text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-neutral-100"
            )}
            key={`link-${idx}`}
            href={item.link}
            aria-current={isActive ? "page" : undefined}
          >
            {hovered === idx && (
              <motion.div
                layoutId="hovered-desktop"
                className="absolute inset-0 h-full w-full rounded-full bg-black/5 dark:bg-white/10"
              />
            )}
            {isActive && !hovered && (
              <motion.div
                layoutId="active-desktop"
                className="absolute inset-0 h-full w-full rounded-full bg-black/5 dark:bg-white/10"
              />
            )}
            <span className="relative z-20">{item.name}</span>
          </a>
        );
      })}
    </motion.div>
  );
}

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeId, setActiveId] = useState<string>("");
  const mobileNavRef = useRef<HTMLDivElement>(null);

  const items = useMemo(
    () =>
      mainNav.map((item) => ({
        name: item.title,
        link: item.href,
        id: item.href.replace("#", ""),
      })),
    []
  );

  // Focus trap and escape to close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsMobileMenuOpen(false);
      }
    };
    
    let handleTab: (e: KeyboardEvent) => void;

    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
      document.addEventListener("keydown", handleKeyDown);

      // Focus trap logic
      const focusableElements = mobileNavRef.current?.querySelectorAll<HTMLElement>(
        'a[href], button, textarea, input, select, [tabindex]:not([tabindex="-1"])'
      );

      if (focusableElements && focusableElements.length > 0) {
        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        handleTab = (e: KeyboardEvent) => {
          if (e.key === "Tab") {
            if (e.shiftKey) {
              if (document.activeElement === firstElement) {
                e.preventDefault();
                lastElement.focus();
              }
            } else {
              if (document.activeElement === lastElement) {
                e.preventDefault();
                firstElement.focus();
              }
            }
          }
        };
        document.addEventListener("keydown", handleTab);
      }
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
      document.removeEventListener("keydown", handleKeyDown);
      if (handleTab) {
        document.removeEventListener("keydown", handleTab);
      }
    };
  }, [isMobileMenuOpen]);

  useOutsideClick(mobileNavRef, () => setIsMobileMenuOpen(false));

  // Sync mobile active state
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-20% 0px -80% 0px" }
    );

    items.forEach((item) => {
      if (item.id) {
        const el = document.getElementById(item.id);
        if (el) observer.observe(el);
      }
    });

    return () => observer.disconnect();
  }, [items]);

  return (
    <nav aria-label="Main Navigation">
      <ResizableNavbarContainer className="fixed top-6 z-50">
        <NavBody>
          <a
            href="#hero"
            className="relative z-20 mr-4 flex items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-md"
            aria-label="TechSpace Home"
          >
            <Brand size="sm" variant="full" />
          </a>

          <ActiveNavItems items={items} />

          <div className="flex items-center gap-4 relative z-20">
            <NavbarButton 
              variant="primary" 
              href={ctaNav.href}
              className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              {ctaNav.title}
            </NavbarButton>
          </div>
        </NavBody>

        <MobileNavContainer ref={mobileNavRef} className="w-full flex justify-center">
          <MobileNav>
            <MobileNavHeader>
              <a
                href="#hero"
                className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-md"
                onClick={() => setIsMobileMenuOpen(false)}
                aria-label="TechSpace Home"
              >
                <Brand size="sm" variant="full" />
              </a>
              <MobileNavToggle
                isOpen={isMobileMenuOpen}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              />
            </MobileNavHeader>

            <MobileNavMenu
              isOpen={isMobileMenuOpen}
              onClose={() => setIsMobileMenuOpen(false)}
            >
              {items.map((item, idx) => {
                const isActive = activeId === item.id;
                return (
                  <a
                    key={`mobile-link-${idx}`}
                    href={item.link}
                    onClick={() => setIsMobileMenuOpen(false)}
                    aria-current={isActive ? "page" : undefined}
                    className={cn(
                      "relative block px-4 py-2 text-lg font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                      isActive
                        ? "text-black dark:text-white font-semibold bg-black/5 dark:bg-white/10 rounded-md"
                        : "text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-neutral-100"
                    )}
                  >
                    {item.name}
                  </a>
                );
              })}
              <div className="mt-4 flex w-full flex-col gap-4">
                <NavbarButton
                  onClick={() => setIsMobileMenuOpen(false)}
                  variant="primary"
                  className="w-full text-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  href={ctaNav.href}
                >
                  {ctaNav.title}
                </NavbarButton>
              </div>
            </MobileNavMenu>
          </MobileNav>
        </MobileNavContainer>
      </ResizableNavbarContainer>
    </nav>
  );
}
