import { Metadata } from "next";

export const metadata: Metadata = {
  title: "FITTING & SERVICES | RUBBER TECH",
  description: "Nationwide fitting partners and luxury wheel care services.",
};

export default function FittingPage() {
  return (
    <main className="bg-white min-h-screen pt-40 pb-32">
      <div className="max-w-[1720px] mx-auto px-6">
        <div className="max-w-4xl">
          <div className="font-mono text-[#999999] text-[14px] uppercase tracking-[1.4px] mb-8">SERVICES</div>
          <h1 className="font-display font-normal text-black uppercase leading-[1.0] mb-16" style={{ fontSize: "clamp(3rem, 8vw, 110px)" }}>
            PRECISION <br/> FITTING.
          </h1>

          <div className="grid md:grid-cols-2 gap-16 mb-24">
            <div>
              <h2 className="font-mono text-black text-[16px] uppercase tracking-[1.4px] mb-6 border-b border-black/10 pb-4">AUTHOURISED PARTNERS</h2>
              <p className="font-body text-[#999999] text-[16px] leading-[1.8]">
                We partner with select high-end tyre fitting centres across the United Kingdom who specialise in luxury and performance vehicles. These partners are equipped with touch-less mounting equipment to ensure your rims remain in pristine condition.
              </p>
            </div>
            <div>
              <h2 className="font-mono text-black text-[16px] uppercase tracking-[1.4px] mb-6 border-b border-black/10 pb-4">MOBILE SERVICE</h2>
              <p className="font-body text-[#999999] text-[16px] leading-[1.8]">
                In select postcodes, we offer a dedicated mobile fitting service. Our vans are equipped with the latest Hunter balancing technology, bringing the tyre shop directly to your driveway or office.
              </p>
            </div>
          </div>

          <div className="border border-black/10 p-12 bg-[#fcfcfc]">
            <h3 className="font-mono text-black text-[14px] uppercase tracking-[1.4px] mb-8">SERVICE PRICING</h3>
            <div className="space-y-6">
              {[
                { item: "STANDARD MOUNT & BALANCE", price: "£20.00 / TYRE" },
                { item: "HIGH-PERFORMANCE MOUNT", price: "£35.00 / TYRE" },
                { item: "NITROGEN INFLATION", price: "£5.00 / TYRE" },
                { item: "HUNTER ROAD FORCE BALANCE", price: "£15.00 / TYRE" },
              ].map((s) => (
                <div key={s.item} className="flex justify-between items-center border-b border-black/5 pb-4">
                  <span className="font-mono text-[12px] text-black uppercase">{s.item}</span>
                  <span className="font-mono text-[12px] text-[#999999] tracking-tighter">{s.price}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
