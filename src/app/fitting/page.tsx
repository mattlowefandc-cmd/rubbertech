import { Metadata } from "next";
import Link from "next/link";
import { ShieldCheck, MapPin, Wrench, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "FITTING ARCHIVE | RUBBER TECH",
  description: "Nationwide authorised fitting partners and technical wheel care operations.",
};

const partners = [
  { name: "REVOLUTION WHEELS & TYRES", location: "WARWICK", spec: "TOUCHLESS MOUNTING // HUNTER BALANCING" },
  { name: "MIDLANDS PERFORMANCE PADDOCK", location: "BIRMINGHAM", spec: "MOTORSPORT ALIGNMENT // NITROGEN" },
  { name: "ELITE TYRES & CARE", location: "LONDON", spec: "LUXURY DETAILING // PRECISION FIT" },
  { name: "S-AUTO SPECIALISTS", location: "MANCHESTER", spec: "EV LOAD-RATING CALIBRATION" },
  { name: "COASTAL PERFORMANCE", location: "LIVERPOOL", spec: "4X4 ALL-TERRAIN EXPERTISE" },
];

export default function FittingPage() {
  return (
    <main className="bg-white min-h-screen pt-40 pb-32">
      <div className="max-w-[1720px] mx-auto px-6">
        
        {/* Header */}
        <div className="mb-40 max-w-4xl">
          <div className="font-mono text-[#999999] text-[14px] uppercase tracking-[2px] mb-8">OPERATIONAL INFRASTRUCTURE</div>
          <h1 className="font-display font-normal text-black uppercase leading-[0.9] mb-12" style={{ fontSize: "clamp(3.5rem, 12vw, 180px)" }}>
            PRECISION <br/> LOGISTICS.
          </h1>
          <p className="font-mono text-black text-[14px] uppercase tracking-[1.4px] max-w-2xl leading-[1.8]">
            WE DO NOT JUST SUPPLY RUBBER; WE ARCHITECT THE FITMENT. OUR PARTNER NETWORK IS RIGOROUSLY VETTED FOR HIGH-END VEHICLE CARE.
          </p>
        </div>

        {/* Core Pillars */}
        <div className="grid lg:grid-cols-4 gap-8 mb-40">
          {[
            { icon: ShieldCheck, title: "TOUCHLESS TECH", desc: "No metal-on-metal contact. Our partners use nylon-head mounting equipment to preserve individual rim finishes." },
            { icon: Wrench, title: "HUNTER ALIGNMENT", desc: "Precision balancing using Hunter Road Force technology to eliminate high-speed harmonic vibration." },
            { icon: MapPin, title: "UK WIDE REACH", desc: "A curated network of 50+ authorised fitting centres covering every major UK metropolitan hub." },
            { icon: Clock, title: "EXPRESS SLOTS", desc: "Priority booking slots for Rubber Tech customers, with most fittings completed within 45 minutes." },
          ].map((p, i) => (
            <div key={i} className="border border-black/10 p-10 bg-[#fcfcfc] flex flex-col justify-between">
              <p.icon className="text-black mb-8" size={32} strokeWidth={1.5} />
              <div>
                <h3 className="font-mono text-black text-[15px] uppercase tracking-[2px] mb-4">{p.title}</h3>
                <p className="font-body text-[#999999] text-[14px] leading-relaxed">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Partner Archive Table */}
        <div className="border border-black/10">
          <div className="bg-black text-white p-10 flex justify-between items-center">
            <h2 className="font-mono text-[14px] uppercase tracking-[2px]">AUTHORISED PARTNER ARCHIVE</h2>
            <div className="hidden md:block font-mono text-[10px] tracking-[2px] opacity-50">STATUS: ACTIVE // ALL NODES OPERATIONAL</div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left font-mono">
               <thead>
                 <tr className="border-b border-black/10 bg-[#f9f9f9]">
                   <th className="px-10 py-6 text-[12px] uppercase text-[#999999]">ESTABLISHMENT</th>
                   <th className="px-10 py-6 text-[12px] uppercase text-[#999999]">ZONE</th>
                   <th className="px-10 py-6 text-[12px] uppercase text-[#999999] hidden lg:table-cell">SPECIFICATION ARCHITECTURE</th>
                   <th className="px-10 py-6 text-[12px] uppercase text-[#999999] text-right">PROTOCOL</th>
                 </tr>
               </thead>
               <tbody>
                 {partners.map((p, i) => (
                   <tr key={i} className="border-b border-black/5 hover:bg-[#fcfcfc] transition-colors group">
                     <td className="px-10 py-8 text-black text-[14px] uppercase tracking-[1px]">{p.name}</td>
                     <td className="px-10 py-8 text-black text-[13px]">{p.location}</td>
                     <td className="px-10 py-8 text-[#999999] text-[12px] hidden lg:table-cell">{p.spec}</td>
                     <td className="px-10 py-8 text-right">
                        <button className="font-mono text-[10px] border border-black/20 px-4 py-2 hover:bg-black hover:text-white transition-all uppercase">SELECT NODE</button>
                     </td>
                   </tr>
                 ))}
               </tbody>
            </table>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-40 text-center bg-[#fcfcfc] border border-black/10 p-20">
          <h3 className="font-display text-black text-[32px] uppercase mb-8">NEED A MOBILE INTERVENTION?</h3>
          <p className="font-mono text-[#999999] text-[14px] mb-12 max-w-xl mx-auto uppercase tracking-[1px]">WE OFFER HIGH-END MOBILE FITTING FOR SELECT LONDON AND WEST MIDLANDS POSTCODES. ENTER REG TO CHECK AVAILABILITY.</p>
          <Link href="/tyre-finder" className="inline-flex items-center justify-center font-mono text-[12px] uppercase tracking-[2px] text-white bg-black border border-black rounded-full px-12 py-5 hover:bg-white hover:text-black transition-all">
            CHECK MOBILE COVERAGE
          </Link>
        </div>

      </div>
    </main>
  );
}
