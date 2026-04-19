"use client";

import { MessageCircle } from "lucide-react";
import { useEffect, useState } from "react";

export default function WhatsAppBubble() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Delay appearance so it doesn't distract from the hero immediately
    const timer = setTimeout(() => setIsVisible(true), 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <a
      href="https://wa.me/[PHONE_PLACEHOLDER]"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className={`fixed bottom-24 right-4 lg:bottom-6 lg:right-6 z-40 bg-white border border-black rounded-full p-4 shadow-xl hover:bg-black hover:text-white hover:scale-105 transition-all duration-300 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <MessageCircle size={24} className="text-current" />
    </a>
  );
}

// FILE COMPLETE ✓
