import { Metadata } from "next";
import { Truck, PackageCheck, Zap, RotateCcw } from "lucide-react";

export const metadata: Metadata = {
  title: "DELIVERY & RETURNS | RUBBER TECH",
  description: "Next-day UK wide delivery and architectural returns protocol.",
};

export default function DeliveryPage() {
  return (
    <main className="bg-white min-h-screen pt-40 pb-32">
      <div className="max-w-[1720px] mx-auto px-6">
        
        {/* Header */}
        <div className="mb-40 max-w-4xl">
          <div className="font-mono text-[#999999] text-[14px] uppercase tracking-[2px] mb-8">GLOBAL LOGISTICS</div>
          <h1 className="font-display font-normal text-black uppercase leading-[0.9] mb-12" style={{ fontSize: "clamp(3.5rem, 12vw, 180px)" }}>
            SPEED & <br/> PRECISION.
          </h1>
          <p className="font-mono text-black text-[14px] uppercase tracking-[1.4px] max-w-2xl leading-[1.8]">
            WE OPERATE A DIRECT-FROM-PADDOCK PIPELINE. EVERY TYRE IS FRESH FROM CLIMATE-CONTROLLED STORAGE AND DISPATCHED VIA EXPRESS COURIER.
          </p>
        </div>

        {/* Shipment Protocols */}
        <div className="grid lg:grid-cols-2 gap-16 mb-40">
           <div className="space-y-12">
              <section>
                <div className="flex items-center gap-4 mb-6">
                   <div className="p-3 bg-black text-white"><Zap size={20} /></div>
                   <h2 className="font-mono text-black text-[16px] uppercase tracking-[2px]">EXPRESS PROTOCOL</h2>
                </div>
                <p className="font-body text-[#999999] text-[16px] leading-[1.8]">
                  Orders placed before 14:00 GMT are eligible for same-day dispatch. Our primary logistics partner is DPD, providing tracked, signature-required delivery to UK mainland addresses.
                </p>
              </section>

              <section>
                <div className="flex items-center gap-4 mb-6">
                   <div className="p-3 bg-black text-white"><PackageCheck size={20} /></div>
                   <h2 className="font-mono text-black text-[16px] uppercase tracking-[2px]">BATCH VERIFICATION</h2>
                </div>
                <p className="font-body text-[#999999] text-[16px] leading-[1.8]">
                  Every tyre undergoes a dual-point visual inspection and DOT code verification before it leaves our facility. We guarantee all rubber is within current factory freshness standards.
                </p>
              </section>
           </div>

           <div className="bg-[#fcfcfc] border border-black/10 p-12 lg:p-20 flex flex-col justify-center">
              <div className="font-mono text-black text-[12px] uppercase mb-8 border-b border-black/10 pb-4">ZONE ARCHIVE</div>
              <div className="space-y-6">
                 {[
                   { zone: "MAINLAND UK (STANDARD)", price: "£0.00", time: "NEXT WORKING DAY" },
                   { zone: "SCOTTISH HIGHLANDS", price: "£15.00", time: "2-3 WORKING DAYS" },
                   { zone: "NORTHERN IRELAND / ISLE OF MAN", price: "£25.00", time: "3-5 WORKING DAYS" },
                 ].map((z, i) => (
                   <div key={i} className="flex justify-between items-end border-b border-black/5 pb-4">
                      <div>
                        <div className="font-mono text-black text-[14px] uppercase">{z.zone}</div>
                        <div className="font-mono text-[#999999] text-[10px] tracking-[1px] mt-1">{z.time}</div>
                      </div>
                      <div className="font-mono text-black text-[14px]">{z.price}</div>
                   </div>
                 ))}
              </div>
           </div>
        </div>

        {/* Returns Section */}
        <div className="border border-black bg-white flex flex-col lg:flex-row shadow-2xl">
           <div className="lg:w-1/3 p-12 lg:p-20 bg-black text-white flex flex-col justify-center">
              <RotateCcw className="mb-8" size={48} strokeWidth={1} />
              <h2 className="font-display text-[48px] uppercase leading-[1.0] mb-8">RETURN <br/> ARCHIVE.</h2>
              <p className="font-mono text-white/50 text-[12px] uppercase tracking-[1px]">NODES OPERATING // 14-DAY WINDOW ACTIVE</p>
           </div>
           <div className="lg:w-2/3 p-12 lg:p-24 flex flex-col justify-center">
              <h3 className="font-mono text-black text-[18px] uppercase tracking-[2px] mb-8 border-b border-black/10 pb-4">RETRACTION PROTOCOL</h3>
              <p className="font-body text-[#999999] text-[17px] leading-[1.8] mb-12">
                We accept returns on all tyres within 14 days of delivery. To maintain the integrity of our inventory, tyres must remain un-mounted and in their original dispatch condition. Mounting a tyre to a wheel constitutes acceptance of the product and serial number allocation.
              </p>
              <div className="grid sm:grid-cols-2 gap-12">
                 <div>
                    <h4 className="font-mono text-black text-[13px] uppercase mb-4 tracking-[1.4px]">01 // INITIATE</h4>
                    <p className="font-mono text-[#999999] text-[11px] leading-relaxed">EMAIL RETURNS@RUBBER-TECH.CO.UK WITH YOUR ORDER REFERENCE AND SERIALS.</p>
                 </div>
                 <div>
                    <h4 className="font-mono text-black text-[13px] uppercase mb-4 tracking-[1.4px]">02 // EVALUATE</h4>
                    <p className="font-mono text-[#999999] text-[11px] leading-relaxed">OUR TEAM WILL EVALUATE THE REQUEST AND ISSUE A RETURN AUTHORISATION NUMBER.</p>
                 </div>
              </div>
              <div className="mt-16 text-center lg:text-left">
                <a href="mailto:returns@rubber-tech.co.uk" className="font-mono text-black text-[12px] border-b border-black pb-2 uppercase tracking-[2px] hover:opacity-50 transition-opacity">SEND INQUIRY PROTOCOL</a>
              </div>
           </div>
        </div>

      </div>
    </main>
  );
}
