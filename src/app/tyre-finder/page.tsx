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
    <main className="pt-40 pb-20 bg-white min-h-screen" aria-labelledby="page-title">
      <div className="max-w-[1720px] mx-auto px-6">
        
        {/* Header */}
        <div className="mb-24">
          <div className="font-mono text-[#999999] text-[14px] uppercase tracking-[1.4px] mb-8">FITMENT ENGINE</div>
          <h1 id="page-title" className="font-display font-normal text-black uppercase leading-[1.0] mb-8" style={{ fontSize: "clamp(3rem, 8vw, 110px)" }}>
            FIND YOUR <br /> EXACT FITMENT
          </h1>
          <p className="font-mono text-[#999999] text-[14px] uppercase tracking-[1.4px] max-w-2xl leading-[1.8]">
            ENTER YOUR UK REGISTRATION FOR INSTANT OE-SIZE MATCHING, OR SEARCH MANUALLY BY WIDTH, PROFILE, AND RIM SIZE.
          </p>
        </div>

        {/* Finder Component — Already Inverted in components/TyreFinder.tsx */}
        <div className="mb-32">
          <TyreFinder />
        </div>

        {/* Info Cards — Architectural Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-32">
          <div className="border border-black/10 p-10 bg-[#fcfcfc]">
            <CheckCircle className="text-black mb-8" size={32} strokeWidth={1.5} />
            <h3 className="font-mono text-black text-[16px] uppercase tracking-[1.4px] mb-6">Guaranteed Fitment</h3>
            <p className="font-body text-[#999999] text-[14px] leading-relaxed">
              Our reg lookup taps into DVLA data to find your exact vehicle specifications. If in doubt, double-check your current tyre sidewalls before ordering.
            </p>
          </div>
          <div className="border border-black/10 p-10 bg-[#fcfcfc]">
            <Info className="text-black mb-8" size={32} strokeWidth={1.5} />
            <h3 className="font-mono text-black text-[16px] uppercase tracking-[1.4px] mb-6">How to read your size</h3>
            <p className="font-body text-[#999999] text-[14px] leading-relaxed mb-6">
              Look for the numbers on your tyre sidewall looking like 225/45 R17 94W.
            </p>
            <ul className="space-y-2">
              <li className="font-mono text-[11px] text-black uppercase tracking-[1px] flex justify-between border-b border-black/5 pb-2">
                <span>WIDTH (MM)</span>
                <span className="text-[#999999]">225</span>
              </li>
              <li className="font-mono text-[11px] text-black uppercase tracking-[1px] flex justify-between border-b border-black/5 pb-2">
                <span>PROFILE (%)</span>
                <span className="text-[#999999]">45</span>
              </li>
              <li className="font-mono text-[11px] text-black uppercase tracking-[1px] flex justify-between border-b border-black/5 pb-2">
                <span>RIM (INCHES)</span>
                <span className="text-[#999999]">17</span>
              </li>
            </ul>
          </div>
          <div className="border border-black/10 p-10 bg-[#fcfcfc]">
            <ShieldAlert className="text-black mb-8" size={32} strokeWidth={1.5} />
            <h3 className="font-mono text-black text-[16px] uppercase tracking-[1.4px] mb-6">Need Help?</h3>
            <p className="font-body text-[#999999] text-[14px] leading-relaxed mb-10">
              Not sure which Nankang model suits your driving style? Our team of specialists is here to help you choose the right pattern.
            </p>
            <Link href="/contact" className="inline-flex items-center justify-center font-mono text-[12px] uppercase tracking-[1.4px] text-white bg-black border border-black px-8 py-3 hover:bg-transparent hover:text-black transition-colors duration-300">
              CONTACT AN EXPERT
            </Link>
          </div>
        </div>

      </div>
    </main>
  );
}
