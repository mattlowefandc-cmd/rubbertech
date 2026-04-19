"use client";

import React, { useState } from "react";
import { useCart } from "@/context/CartContext";
import { ShoppingBag, ChevronRight, Lock, CheckCircle, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function CheckoutPage() {
  const { items, subtotal, itemCount, clearCart } = useCart();
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate payment protocol
    setTimeout(() => {
      clearCart();
      router.push("/checkout/success");
    }, 2000);
  };

  if (itemCount === 0 && !isSubmitting) {
    return (
      <main className="bg-white min-h-screen pt-40 pb-32 flex flex-col items-center justify-center text-center px-6">
         <div className="w-24 h-24 rounded-full bg-[#fcfcfc] border border-black/5 flex items-center justify-center mb-8">
            <ShoppingBag size={32} strokeWidth={1} className="text-[#999999]" />
         </div>
         <h1 className="font-display text-[32px] uppercase mb-4">CHECKOUT ARCHIVE EMPTY</h1>
         <p className="font-mono text-[#999999] text-[12px] uppercase tracking-[1px] mb-12">
            YOU MUST HAVE ITEMS IN YOUR BAG TO INITIATE THE CHECKOUT PROTOCOL.
         </p>
         <Link href="/tyres" className="font-mono text-[11px] uppercase tracking-[2px] border border-black px-12 py-5 hover:bg-black hover:text-white transition-all">
            RETURN TO INVENTORY
         </Link>
      </main>
    );
  }

  return (
    <main className="bg-white min-h-screen pt-40 pb-32">
      <div className="max-w-[1720px] mx-auto px-6">
        
        <Link href="/tyres" className="inline-flex items-center gap-2 font-mono text-[11px] text-[#999999] uppercase tracking-[1.4px] mb-16 hover:text-black transition-colors">
          <ArrowLeft size={14} /> BACK TO INVENTORY
        </Link>

        <div className="grid lg:grid-cols-2 gap-20 items-start">
          
          {/* Left: Checkout Form */}
          <div className="space-y-16">
            <div>
              <h1 className="font-display text-[48px] uppercase leading-none mb-8">CHECKOUT <br/> PROTOCOL.</h1>
              <div className="flex items-center gap-4 text-[#999999] font-mono text-[10px] uppercase tracking-[2px]">
                 <Lock size={12} /> SECURE ENCRYPTED TRANSACTION // TLS 1.3
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-12">
              {/* Section 1: Contact */}
              <div className="space-y-8">
                <div className="font-mono text-black text-[12px] uppercase tracking-[2px] border-b border-black/10 pb-4">01 // CONTACT ARCHIVE</div>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="font-mono text-[#999999] text-[10px] uppercase tracking-[1px]">FIRST NAME</label>
                    <input required type="text" className="w-full bg-[#fcfcfc] border border-black/10 p-5 font-mono text-[14px] outline-none focus:border-black transition-colors" />
                  </div>
                  <div className="space-y-2">
                    <label className="font-mono text-[#999999] text-[10px] uppercase tracking-[1px]">LAST NAME</label>
                    <input required type="text" className="w-full bg-[#fcfcfc] border border-black/10 p-5 font-mono text-[14px] outline-none focus:border-black transition-colors" />
                  </div>
                </div>
                <div className="space-y-2">
                   <label className="font-mono text-[#999999] text-[10px] uppercase tracking-[1px]">EMAIL ADDRESS</label>
                   <input required type="email" className="w-full bg-[#fcfcfc] border border-black/10 p-5 font-mono text-[14px] outline-none focus:border-black transition-colors" />
                </div>
              </div>

              {/* Section 2: Shipping */}
              <div className="space-y-8">
                <div className="font-mono text-black text-[12px] uppercase tracking-[2px] border-b border-black/10 pb-4">02 // DELIVERY LOGISTICS</div>
                <div className="space-y-2">
                   <label className="font-mono text-[#999999] text-[10px] uppercase tracking-[1px]">STREET ADDRESS</label>
                   <input required type="text" className="w-full bg-[#fcfcfc] border border-black/10 p-5 font-mono text-[14px] outline-none focus:border-black transition-colors" />
                </div>
                <div className="grid sm:grid-cols-3 gap-6">
                  <div className="sm:col-span-2 space-y-2">
                    <label className="font-mono text-[#999999] text-[10px] uppercase tracking-[1px]">CITY</label>
                    <input required type="text" className="w-full bg-[#fcfcfc] border border-black/10 p-5 font-mono text-[14px] outline-none focus:border-black transition-colors" />
                  </div>
                  <div className="space-y-2">
                    <label className="font-mono text-[#999999] text-[10px] uppercase tracking-[1px]">POSTCODE</label>
                    <input required type="text" className="w-full bg-[#fcfcfc] border border-black/10 p-5 font-mono text-[14px] outline-none focus:border-black transition-colors uppercase" />
                  </div>
                </div>
              </div>

              {/* Section 3: Payment */}
              <div className="space-y-8">
                <div className="font-mono text-black text-[12px] uppercase tracking-[2px] border-b border-black/10 pb-4">03 // SETTLEMENT</div>
                <div className="p-8 border border-black bg-[#fcfcfc] flex items-center justify-between">
                   <div className="flex items-center gap-4">
                      <div className="w-10 h-6 bg-black rounded flex items-center justify-center font-mono text-white text-[8px] uppercase">VISA</div>
                      <span className="font-mono text-black text-[13px] uppercase tracking-[1px]">PAY BY CARD (MOCK)</span>
                   </div>
                   <div className="w-5 h-5 rounded-full border-4 border-black border-t-transparent animate-spin opacity-0"></div>
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full h-[80px] bg-black text-white font-mono text-[14px] uppercase tracking-[3px] flex items-center justify-center gap-4 hover:bg-white hover:text-black border border-black transition-all shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] disabled:opacity-50"
                >
                  {isSubmitting ? "VALIDATING TRANSACTION..." : `COMPLETE PURCHASE // £${subtotal.toFixed(2)}`}
                </button>
              </div>
            </form>
          </div>

          {/* Right: Order Summary */}
          <div className="lg:sticky lg:top-40">
             <div className="bg-[#fcfcfc] border border-black/10 p-12 lg:p-16">
                <h2 className="font-mono text-black text-[14px] uppercase tracking-[2px] mb-12 border-b border-black/10 pb-4">SUMMARY ARCHIVE</h2>
                <div className="space-y-8 mb-12 max-h-[400px] overflow-y-auto custom-scrollbar pr-4">
                   {items.map((item) => (
                     <div key={`${item.id}-${item.size}`} className="flex justify-between items-start gap-8">
                        <div>
                           <div className="font-display text-[16px] uppercase">{item.name}</div>
                           <div className="font-mono text-[#999999] text-[10px] uppercase tracking-[1px] mt-1">
                              {item.size} // QTY: {item.quantity}
                           </div>
                        </div>
                        <div className="font-mono text-black text-[14px]">
                           £{(item.price * item.quantity).toFixed(2)}
                        </div>
                     </div>
                   ))}
                </div>

                <div className="space-y-4 border-t border-black pb-8 pt-8">
                   <div className="flex justify-between font-mono text-[12px] text-[#999999] uppercase">
                      <span>GOODS SUBTOTAL</span>
                      <span>£{subtotal.toFixed(2)}</span>
                   </div>
                   <div className="flex justify-between font-mono text-[12px] text-[#999999] uppercase">
                      <span>SHIPPING (EXPRESS)</span>
                      <span className="text-black">FREE</span>
                   </div>
                   <div className="flex justify-between items-baseline pt-4">
                      <span className="font-mono text-black text-[14px] uppercase tracking-[2px] font-bold">TOTAL PAYABLE</span>
                      <span className="font-display text-[32px] text-black">£{subtotal.toFixed(2)}</span>
                   </div>
                   <p className="font-mono text-[#999999] text-[9px] uppercase tracking-[0.5px] text-right">INCLUDES £{(subtotal * 0.2).toFixed(2)} VALUED ADDED TAX (20%)</p>
                </div>

                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-black/5">
                   <div className="flex flex-col items-center p-4">
                      <CheckCircle size={16} className="mb-2" />
                      <span className="font-mono text-[9px] uppercase tracking-[1px] text-center">AUTHORISED SUPPLY</span>
                   </div>
                   <div className="flex flex-col items-center p-4">
                      <Zap size={16} className="mb-2" />
                      <span className="font-mono text-[9px] uppercase tracking-[1px] text-center">EXPRESS DISPATCH</span>
                   </div>
                </div>
             </div>
          </div>

        </div>

      </div>
    </main>
  );
}
