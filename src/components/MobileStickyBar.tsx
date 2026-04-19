"use client";

import Link from "next/link";
import { Search, Phone } from "lucide-react";

export default function MobileStickyBar() {
  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-[#999999]/30 pb-safe">
      <div className="flex">
        <Link 
          href="/tyre-finder"
          className="flex-1 flex flex-col items-center justify-center py-4 border-r border-[#999999]/30 hover:bg-[#f5f5f5] transition-colors"
        >
          <Search size={18} className="text-black mb-1" />
          <span className="font-mono text-[10px] uppercase tracking-[1.2px] text-black">SEARCH</span>
        </Link>
        
        <a 
          href="tel:[PHONE_PLACEHOLDER]"
          className="flex-1 flex flex-col items-center justify-center py-4 hover:bg-[#f5f5f5] transition-colors"
        >
          <Phone size={18} className="text-black mb-1" />
          <span className="font-mono text-[10px] uppercase tracking-[1.2px] text-black">CALL</span>
        </a>
      </div>
    </div>
  );
}

// FILE COMPLETE ✓
