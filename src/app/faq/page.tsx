import { Metadata } from "next";
import { HelpCircle, ChevronRight } from "lucide-react";

export const metadata: Metadata = {
  title: "KNOWLEDGE ARCHIVE | RUBBER TECH",
  description: "Technical tyre inquiries, alignment data, and operational FAQs.",
};

const faqs = [
  {
    category: "PRODUCT ARCHITECTURE",
    items: [
      { q: "ARE ALL NANKANG TYRES ROAD LEGAL?", a: "YES. EVERY TYRE LISTED IN OUR ARCHIVE (EXCLUDING THE SL-1 FULL SLICK) IS FULLY ROAD LEGAL IN THE UK AND CARRIES NECESSARY E-MARKINGS AND EU LABELLING." },
      { q: "HOW FRESH IS THE RUBBER?", a: "WE OPERATE A FIRST-IN-FIRST-OUT INVENTORY PROTOCOL. MOST TYRES DISPATCHED HAVE BEEN MANUFACTURED WITHIN THE LAST 12 MONTHS. WE NEVER DISPATCH TYRES OLDER THAN 3 YEARS." },
    ]
  },
  {
    category: "MOTORSPORT DEBRIEF",
    items: [
      { q: "WHAT COLD PRESSURES SHOULD I START WITH FOR NS-2R?", a: "FOR MOST UK TRACKS ON A MID-WEIGHT CHASSIS (E.G., GOLF/CIVIC), WE RECOMMEND STARTING AT 26-28PSI COLD, TARGETING 32-34PSI HOT. ADJUST GRADUALLY BY 2PSI INCREMENTS." },
      { q: "CAN I DRIVE AR-1 IN THE RAIN?", a: "THE AR-1 IS ROAD LEGAL BUT DESIGNED FOR TRACK USE. ITS MINIMAL TREAD DEPTH MAKES IT SUSCEPTIBLE TO AQUAPLANING IN HEAVY SURFACE WATER. EXTREME CAUTION IS ADVISED." },
    ]
  },
  {
    category: "LOGISTICS NODES",
    items: [
      { q: "DO YOU OFFER INSTALLATION?", a: "WE DO NOT DIRECTLY INSTALL, BUT WE HAVE A NETWORK OF 'AUTHORISED PARTNERS' ACROSS THE UK VETTED FOR PRECISION CARE. SEE OUR FITTING ARCHIVE FOR LOCATIONS." },
      { q: "IS EUROPEAN SHIPPING AVAILABLE?", a: "CURRENTLY, WE ONLY ARCHITECT SHIPMENTS WITHIN THE UNITED KINGDOM. FOR INTERNATIONAL EXPORT, PLEASE CONTACT OUR LOGISTICS TEAM DIRECTLY." },
    ]
  }
];

export default function FAQPage() {
  return (
    <main className="bg-white min-h-screen pt-40 pb-32">
      <div className="max-w-[1720px] mx-auto px-6">
        
        {/* Header */}
        <div className="mb-40 max-w-4xl">
          <div className="font-mono text-[#999999] text-[14px] uppercase tracking-[2px] mb-8">KNOWLEDGE NODES</div>
          <h1 className="font-display font-normal text-black uppercase leading-[0.9] mb-12" style={{ fontSize: "clamp(3.5rem, 12vw, 180px)" }}>
            TECHNICAL <br/> QUERIES.
          </h1>
          <p className="font-mono text-black text-[14px] uppercase tracking-[1.4px] max-w-2xl leading-[1.8]">
            AN ARCHIVE OF FREQUENTLY ENCOUNTERED TECHNICAL AND OPERATIONAL SCENARIOS. IF YOUR QUERY IS UNRESOLVED, CONTACT OUR SPECIALIST BUFFER.
          </p>
        </div>

        {/* FAQ Grid */}
        <div className="space-y-40">
           {faqs.map((cat, i) => (
             <section key={i}>
                <div className="flex items-center gap-4 mb-12 border-b border-black pb-4">
                   <div className="p-3 bg-black text-white"><HelpCircle size={20} /></div>
                   <h2 className="font-mono text-black text-[16px] uppercase tracking-[2px]">{cat.category}</h2>
                </div>
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
                   {cat.items.map((item, j) => (
                     <div key={j} className="group cursor-pointer">
                        <div className="font-mono text-black text-[14px] uppercase tracking-[1.4px] mb-6 flex items-start gap-4 group-hover:text-[#999999] transition-colors">
                           <ChevronRight size={16} className="mt-1 flex-shrink-0" />
                           {item.q}
                        </div>
                        <p className="font-body text-[#999999] text-[16px] leading-[1.8] pl-8 border-l border-black/5 group-hover:border-black transition-all">
                           {item.a}
                        </p>
                     </div>
                   ))}
                </div>
             </section>
           ))}
        </div>

        {/* Contact Strip */}
        <div className="mt-40 bg-black text-white p-12 lg:p-24 flex flex-col lg:flex-row items-center justify-between gap-12">
           <div className="max-w-xl text-center lg:text-left">
              <h3 className="font-display text-[48px] uppercase leading-none mb-6">DIRECT INTERVENTION?</h3>
              <p className="font-mono text-white/50 text-[14px] uppercase tracking-[1.4px]">OUR TECHNICAL SPECIALISTS ARE SYNCED 09:00 - 18:00 DAILY.</p>
           </div>
           <Link href="/contact" className="inline-flex items-center justify-center font-mono text-[14px] uppercase tracking-[2px] text-black bg-white border border-white rounded-full px-16 py-6 hover:bg-transparent hover:text-white transition-all">
             TRANSMIT INQUIRY
           </Link>
        </div>

      </div>
    </main>
  );
}
