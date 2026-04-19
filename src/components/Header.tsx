"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ShoppingBag } from "lucide-react";
import { useCart } from "@/context/CartContext";

const navLinks = [
  { label: "CAR TYRES", href: "/tyres/car" },
  { label: "MOTORSPORT", href: "/tyres/motorsport" },
  { label: "4X4 & SUV", href: "/tyres/4x4" },
  { label: "EV TYRES", href: "/tyres/ev" },
  { label: "ALL-SEASON", href: "/tyres/all-season" },
  { label: "WINTER TYRES", href: "/tyres/winter" },
  { label: "TYRE FINDER", href: "/tyre-finder" },
  { label: "ABOUT US", href: "/about" },
  { label: "CONTACT", href: "/contact" },
];

export default function Header() {
  const headerRef = useRef<HTMLElement>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { itemCount, setIsCartOpen } = useCart();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <header
        ref={headerRef}
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
          isScrolled || mobileOpen ? "bg-white" : "bg-transparent"
        }`}
      >
        <div className="max-w-[1720px] mx-auto px-6">
          <div className="flex items-center justify-between h-20 sm:h-24">
            
            {/* Left Nav (MENU) */}
            <div className="flex-1 flex justify-start">
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="min-h-[48px] px-4 -ml-4 font-mono text-[14px] leading-none uppercase tracking-[1.4px] text-black hover:opacity-75 transition-opacity flex items-center"
                aria-label={mobileOpen ? "CLOSE MENU" : "MENU"}
              >
                {mobileOpen ? "CLOSE" : "MENU"}
              </button>
            </div>

            {/* Center Logo */}
            <div className="flex-shrink-0 text-center">
              <Link href="/" className="inline-flex items-center justify-center min-h-[48px] px-6" aria-label="Rubber Tech Home">
                <span className="font-display text-black text-[24px] sm:text-[29px] leading-none uppercase tracking-widest block">
                  RUBBER TECH
                </span>
              </Link>
            </div>

            {/* Right Nav (SEARCH/BAG) */}
            <div className="flex-1 flex justify-end items-center gap-2 sm:gap-10">
              <Link
                href="/tyre-finder"
                className="hidden sm:inline-flex items-center justify-center min-h-[48px] px-4 font-mono text-[14px] leading-none uppercase tracking-[1.4px] text-black hover:opacity-75 transition-opacity"
              >
                SEARCH
              </Link>
              <button
                onClick={() => setIsCartOpen(true)}
                className="relative flex items-center justify-center min-h-[48px] px-4 -mr-4 font-mono text-[14px] leading-none uppercase tracking-[1.4px] text-black hover:opacity-75 transition-opacity group"
                aria-label="OPEN SHOPPING BAG"
              >
                <span className="hidden sm:block mr-3">BAG</span>
                <div className="relative">
                  <ShoppingBag size={20} strokeWidth={1.5} />
                  {itemCount > 0 && (
                    <span className="absolute -top-2 -right-2 bg-black text-white text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center animate-in zoom-in duration-300">
                      {itemCount}
                    </span>
                  )}
                </div>
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* Full-Screen Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-white flex flex-col transition-opacity duration-300 ease-in-out ${
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        aria-hidden={!mobileOpen}
      >
        <div className="flex-1 flex flex-col items-center justify-center pt-24 pb-12 overflow-y-auto">
          <nav className="flex flex-col items-center space-y-6 sm:space-y-8" aria-label="Main menu">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="font-mono text-[14px] sm:text-[16px] text-black uppercase tracking-[1.4px] hover:opacity-75 transition-opacity"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </>
  );
}

// FILE COMPLETE ✓
