import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "TERMS OF SERVICE | RUBBER TECH",
  description: "Terms and conditions for Rubber Tech.",
};

export default function TermsPage() {
  return (
    <main className="bg-white min-h-screen pt-40 pb-32">
      <div className="max-w-[1720px] mx-auto px-6">
        <div className="max-w-3xl">
          
          <nav className="flex items-center gap-4 font-mono text-[12px] text-[#999999] uppercase tracking-[1.4px] mb-16">
            <Link href="/" className="hover:text-black transition-colors">HOME</Link>
            <span>/</span>
            <span className="text-black">TERMS OF SERVICE</span>
          </nav>

          <h1 className="font-display font-normal text-black uppercase leading-[1.0] mb-16 border-b border-black/10 pb-8" style={{ fontSize: "clamp(2.5rem, 6vw, 80px)" }}>
            TERMS
          </h1>

          <div className="font-body text-[#111111] text-[16px] leading-[1.8] space-y-8">
            <p className="font-mono text-[12px] text-[#999999] uppercase tracking-[1.4px]">LAST UPDATED: {new Date().toLocaleDateString()}</p>
            
            <h2 className="font-mono text-black text-[16px] uppercase tracking-[1.4px] mt-12 mb-4">1. ACCEPTANCE OF TERMS</h2>
            <p>
              By accessing and using this website, you accept and agree to be bound by the terms and provisions of this agreement. Any participation in this service will constitute acceptance of this agreement.
            </p>

            <h2 className="font-mono text-black text-[16px] uppercase tracking-[1.4px] mt-12 mb-4">2. PRODUCT SPECIFICATIONS & FITMENT</h2>
            <p>
              While we make every effort to ensure the accuracy of the Tyre Finder tool and product specifications, it is ultimately the buyer's responsibility to verify that the ordered tyres are the correct size, load rating, and speed rating for their specific vehicle in accordance with the manufacturer's handbook.
            </p>
            
            <h2 className="font-mono text-black text-[16px] uppercase tracking-[1.4px] mt-12 mb-4">3. PRICING & PAYMENT</h2>
            <p>
              All prices include VAT at the standard UK rate unless stated otherwise. We reserve the right to modify prices without prior notice. Goods remain the property of Rubber Tech Ltd until paid for in full.
            </p>

            <h2 className="font-mono text-black text-[16px] uppercase tracking-[1.4px] mt-12 mb-4">4. DELIVERY</h2>
            <p>
              Free delivery applies to mainland UK only. Remote areas (including Highlands and Islands) may incur supplemental delivery charges. We aim to dispatch orders within 24 hours of cleared payment.
            </p>
            
            <h2 className="font-mono text-black text-[16px] uppercase tracking-[1.4px] mt-12 mb-4">5. RETURNS POLICY</h2>
            <p>
              We accept returns within 14 days of receipt, provided the tyres have not been mounted to a wheel, driven on, or damaged. Return shipping costs are the responsibility of the buyer unless the item dispatched was incorrect or defective.
            </p>

          </div>

        </div>
      </div>
    </main>
  );
}
