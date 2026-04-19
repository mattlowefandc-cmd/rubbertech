import { Metadata } from "next";

export const metadata: Metadata = {
  title: "DELIVERY & RETURNS | RUBBER TECH",
  description: "Next-day UK delivery and hassle-free returns on all Nankang tyres.",
};

export default function DeliveryPage() {
  return (
    <main className="bg-white min-h-screen pt-40 pb-32">
      <div className="max-w-[1720px] mx-auto px-6">
        <div className="max-w-4xl">
          <div className="font-mono text-[#999999] text-[14px] uppercase tracking-[1.4px] mb-8">LOGISTICS</div>
          <h1 className="font-display font-normal text-black uppercase leading-[1.0] mb-16" style={{ fontSize: "clamp(3rem, 8vw, 110px)" }}>
            SPEED & <br/> PRECISION.
          </h1>

          <div className="space-y-24">
            <section>
              <h2 className="font-mono text-black text-[16px] uppercase tracking-[1.4px] mb-8 border-b border-black/10 pb-4">DELIVERY TIMEFRAMES</h2>
              <div className="grid sm:grid-cols-2 gap-12">
                <div>
                  <h3 className="font-mono text-black text-[12px] uppercase mb-2">MAINLAND UK</h3>
                  <p className="font-body text-[#999999] text-[14px] leading-relaxed">
                    Orders placed before 2PM are dispatched the same day for next working day delivery. 
                  </p>
                </div>
                <div>
                  <h3 className="font-mono text-black text-[12px] uppercase mb-2">HIGHLANDS & ISLANDS</h3>
                  <p className="font-body text-[#999999] text-[14px] leading-relaxed">
                    Please allow 3-5 working days for transit. Surcharges may apply based on postcode.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="font-mono text-black text-[16px] uppercase tracking-[1.4px] mb-8 border-b border-black/10 pb-4">RETURNS POLICY</h2>
              <p className="font-body text-[#999999] text-[16px] leading-[1.8] mb-8">
                We accept returns on all tyres within 14 days of delivery, provided the tyres remain un-mounted and in their original dispatch condition. Mounting a tyre to a wheel constitutes acceptance of the product and voids the return policy unless a manufacturing defect is identified.
              </p>
              <div className="border border-black/10 p-8 bg-[#fcfcfc]">
                <h4 className="font-mono text-black text-[12px] uppercase mb-4 tracking-[1.4px]">RETURN PROCESS</h4>
                <ol className="list-decimal pl-5 font-mono text-[12px] text-[#999999] space-y-4">
                  <li>EMAIL RETURNS@RUBBER-TECH.CO.UK WITH YOUR ORDER NUMBER</li>
                  <li>AWAIT COLLECTION SCHEDULE OR DROP-OFF INSTRUCTIONS</li>
                  <li>REFUND PROCESSED WITHIN 48 HOURS OF INSPECTION</li>
                </ol>
              </div>
            </section>
          </div>

        </div>
      </div>
    </main>
  );
}
