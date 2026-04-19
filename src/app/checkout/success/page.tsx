import { Metadata } from "next";
import Link from "next/link";
import { CheckCircle, Package, ArrowRight, Printer } from "lucide-react";

export const metadata: Metadata = {
  title: "ORDER CONFIRMED | RUBBER TECH",
  description: "Your Rubber Tech order has been successfully architected.",
};

export default function SuccessPage() {
  return (
    <main className="bg-white min-h-screen pt-40 pb-32 flex flex-col items-center justify-center px-6">
      <div className="max-w-2xl w-full text-center">
        
        {/* Animated Check Icon */}
        <div className="relative w-32 h-32 mx-auto mb-12">
           <div className="absolute inset-0 bg-black rounded-full animate-ping opacity-10"></div>
           <div className="relative bg-black text-white w-full h-full rounded-full flex items-center justify-center shadow-2xl">
              <CheckCircle size={56} strokeWidth={1} />
           </div>
        </div>

        <div className="font-mono text-[#999999] text-[14px] uppercase tracking-[2.5px] mb-6">TRANSACTION_SUCCESSFUL</div>
        <h1 className="font-display text-black text-[56px] lg:text-[72px] uppercase leading-[0.9] mb-8">
           ORDER <br/> CONFIRMED.
        </h1>
        
        <p className="font-body text-[#999999] text-[18px] leading-relaxed mb-16 max-w-lg mx-auto">
           YOUR SELECTION HAS BEEN ARCHIVED AND TRANSMITTED TO OUR LOGISTICS HUB. A CONFIRMATION BLUEPRINT HAS BEEN SENT TO YOUR EMAIL.
        </p>

        <div className="grid sm:grid-cols-2 gap-6 mb-20 text-left">
           <div className="bg-[#fcfcfc] border border-black/10 p-8 flex flex-col justify-between">
              <div className="font-mono text-[#999999] text-[10px] uppercase tracking-[1.4px] mb-8">ORDER ID</div>
              <div className="font-mono text-black text-[16px] uppercase font-bold tracking-[1px]">RT-ARCH-99218</div>
           </div>
           <div className="bg-[#fcfcfc] border border-black/10 p-8 flex flex-col justify-between">
              <div className="font-mono text-[#999999] text-[10px] uppercase tracking-[1.4px] mb-8">EST. DISPATCH</div>
              <div className="font-mono text-black text-[16px] uppercase font-bold tracking-[1px]">NEXT WORKING DAY</div>
           </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 justify-center">
           <Link href="/tyres" className="h-[64px] px-12 bg-black text-white font-mono text-[13px] uppercase tracking-[2px] flex items-center justify-center gap-4 hover:bg-white hover:text-black border border-black transition-all group">
             RETURN TO INVENTORY <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
           </Link>
           <button className="h-[64px] px-12 bg-white text-black font-mono text-[13px] uppercase tracking-[2px] flex items-center justify-center gap-4 hover:bg-[#fcfcfc] border border-black/10 transition-all">
             <Printer size={18} /> PRINT RECEIPT
           </button>
        </div>

        <div className="mt-24 border-t border-black/5 pt-12 flex items-center justify-center gap-10">
           <div className="flex items-center gap-3 text-[#999999] font-mono text-[10px] uppercase tracking-[1.4px]">
              <Package size={14} /> TRACKING_ID: AUTO_ASSIGN
           </div>
           <div className="w-[1px] h-4 bg-black/10"></div>
           <Link href="/contact" className="text-[#999999] font-mono text-[10px] uppercase tracking-[1.4px] hover:text-black transition-colors">
              LOGISTICS SUPPORT
           </Link>
        </div>

      </div>
    </main>
  );
}
