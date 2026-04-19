"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { X } from "lucide-react";

const COOKIE_KEY = "rt-cookie-consent";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Show after 1s if no consent recorded
    const stored = localStorage.getItem(COOKIE_KEY);
    if (!stored) {
      const timer = setTimeout(() => setVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  function accept() {
    localStorage.setItem(COOKIE_KEY, "accepted");
    setVisible(false);
    // Enable GA4 after consent
    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag("consent", "update", {
        analytics_storage: "granted",
        ad_storage: "denied",
      });
    }
  }

  function decline() {
    localStorage.setItem(COOKIE_KEY, "declined");
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Cookie consent"
      aria-describedby="cookie-desc"
      className="fixed bottom-20 left-4 right-4 lg:left-auto lg:right-6 lg:bottom-6 lg:max-w-sm z-50 bg-white border border-[#999999]/30 rounded-[6px] overflow-hidden shadow-xl"
    >
      <div className="p-6">
        <div className="flex items-start gap-4 mb-6">
          <div className="flex-1">
            <h3 className="font-mono text-black text-[12px] uppercase tracking-[1.4px] mb-2">PRIVACY & COOKIES</h3>
            <p id="cookie-desc" className="font-body text-[#999999] text-[14px] leading-relaxed">
              We use analytics to improve performance. We do not sell data. View our{" "}
              <Link href="/cookies" className="text-black hover:underline underline-offset-4">
                Policy
              </Link>.
            </p>
          </div>
          <button
            onClick={decline}
            aria-label="Close cookie banner"
            className="flex-shrink-0 text-[#999999] hover:text-black transition-colors"
          >
            <X size={16} />
          </button>
        </div>
        <div className="flex gap-4">
          <button
            id="cookie-accept"
            onClick={accept}
            className="flex-1 font-mono text-[12px] uppercase tracking-[1.2px] text-white bg-black border border-black rounded-[6px] py-3 hover:bg-transparent hover:text-black transition-colors duration-300"
          >
            ACCEPT
          </button>
          <button
            id="cookie-decline"
            onClick={decline}
            className="flex-1 font-mono text-[12px] uppercase tracking-[1.2px] text-[#999999] bg-transparent border border-[#999999] rounded-[6px] py-3 hover:text-black hover:border-black transition-colors duration-300"
          >
            DECLINE
          </button>
        </div>
      </div>
    </div>
  );
}

// FILE COMPLETE ✓
