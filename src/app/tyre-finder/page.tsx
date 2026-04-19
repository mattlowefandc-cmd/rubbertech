import { Metadata } from "next";
import TyreFinder from "@/components/TyreFinder";
import { CheckCircle, Info, ShieldAlert } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Tyre Finder | Find Nankang Tyres By Reg or Size",
  description: "Use our DVLA-linked tyre finder to get the exact Nankang tyres for your vehicle. Enter your UK registration or tyre size.",
  alternates: {
    canonical: "https://rubber-tech.co.uk/tyre-finder",
  },
};

export default function TyreFinderPage() {
  return (
    <main className="pt-24 pb-20 bg-[#0d0d0d] min-h-screen" aria-labelledby="page-title">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h1 id="page-title" className="font-display font-black text-white text-4xl md:text-5xl uppercase mb-4">
            Find Your Exact <span className="text-[#E62020]">Nankang Fitment</span>
          </h1>
          <p className="text-white/60 text-lg">
            Enter your UK registration for instant OE-size matching, or search manually by width, profile, and rim size.
          </p>
        </div>

        {/* Finder Component */}
        <div className="mb-20">
          <TyreFinder />
        </div>

        {/* Info Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <div className="bg-[#111111] border border-white/5 rounded-2xl p-6">
            <CheckCircle className="text-[#E62020] mb-4" size={28} />
            <h3 className="font-display font-bold text-white text-xl uppercase mb-2">Guaranteed Fitment</h3>
            <p className="text-white/50 text-sm leading-relaxed">
              Our reg lookup taps into DVLA data to find your exact vehicle specifications. If in doubt, double-check your current tyre sidewalls.
            </p>
          </div>
          <div className="bg-[#111111] border border-white/5 rounded-2xl p-6">
            <Info className="text-[#E62020] mb-4" size={28} />
            <h3 className="font-display font-bold text-white text-xl uppercase mb-2">How to read your size</h3>
            <p className="text-white/50 text-sm leading-relaxed mb-4">
              Look for the numbers on your tyre sidewall looking like 225/40 R18 92Y.
            </p>
            <ul className="text-xs text-white/40 space-y-1">
              <li><strong className="text-white">225</strong> = Width (mm)</li>
              <li><strong className="text-white">40</strong> = Profile / Aspect Ratio</li>
              <li><strong className="text-white">18</strong> = Rim Diameter (inches)</li>
            </ul>
          </div>
          <div className="bg-[#111111] border border-white/5 rounded-2xl p-6">
            <ShieldAlert className="text-[#E62020] mb-4" size={28} />
            <h3 className="font-display font-bold text-white text-xl uppercase mb-2">Need Help?</h3>
            <p className="text-white/50 text-sm leading-relaxed mb-4">
              Not sure which Nankang model suits your driving style? Our team of specialists is here to help you choose the right pattern.
            </p>
            <Link href="/contact" className="text-[#E62020] text-sm font-semibold hover:underline">
              Contact an Expert →
            </Link>
          </div>
        </div>

      </div>
    </main>
  );
}

// FILE COMPLETE ✓
