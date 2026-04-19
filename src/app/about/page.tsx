import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "ABOUT | RUBBER TECH",
  description: "Rubber Tech is an official authorised Nankang tyre dealer serving customers across the United Kingdom.",
};

export default function AboutPage() {
  return (
    <main className="bg-white min-h-screen pt-40 pb-32">
      <div className="max-w-[1720px] mx-auto px-6">
        
        {/* Hero Section */}
        <div className="mb-40">
          <div className="font-mono text-[#999999] text-[14px] uppercase tracking-[1.4px] mb-8">THE ESTABLISHMENT</div>
          <h1 className="font-display font-normal text-black uppercase leading-[1.0] mb-12" style={{ fontSize: "clamp(3.5rem, 12vw, 180px)" }}>
            PRECISION <br className="hidden lg:block"/> ARCHITECTURE.
          </h1>
          <div className="w-full h-[1px] bg-black/10 mb-12" />
          <div className="flex flex-col lg:flex-row justify-between gap-12">
            <p className="font-mono text-black text-[14px] uppercase tracking-[1.4px] max-w-sm">
              AUTHORISED NANKANG DEALERSHIP SUPPLYING THE UNITED KINGDOM'S MOST DEMANDING DRIVERS.
            </p>
            <p className="font-body text-[#999999] text-[18px] max-w-2xl leading-[1.8]">
              Rubber Tech was founded on a singular premise: the acquisition of high-performance rubber should be as precise as the engineering of the tyres themselves. We have stripped away the friction of traditional tyre retail to provide a direct, specialist pipeline from Nankang’s laboratory to your vehicle.
            </p>
          </div>
        </div>

        {/* Pillars */}
        <div className="grid lg:grid-cols-3 gap-16 mb-40">
          {[
            { tag: "01", title: "DIRECT SUPPLY", desc: "No middle-men. We maintain direct relationships with Nankang, ensuring every tyre is fresh from the factory and stored in climate-controlled UK facilities." },
            { tag: "02", title: "TECHNICAL EDGE", desc: "Our staff are motorsport specialists. We don't just sell rubber; we provide alignment, pressure, and compound advice based on real-world track data." },
            { tag: "03", title: "NATIONWIDE REACH", desc: "Our logistics network covers the entire UK mainland with next-day certainty. From Penzance to Perth, we deliver the precision you require." }
          ].map(p => (
             <div key={p.tag} className="border border-black/10 p-12 hover:border-black transition-colors group">
               <div className="font-mono text-[#999999] text-[12px] mb-8 group-hover:text-black transition-colors">{p.tag} //</div>
               <h3 className="font-display text-black text-[32px] uppercase mb-6 leading-none">{p.title}</h3>
               <p className="font-body text-[#999999] text-[15px] leading-relaxed">{p.desc}</p>
             </div>
          ))}
        </div>

        {/* History Block */}
        <div className="bg-[#fcfcfc] border border-black/10 p-12 lg:p-24 flex flex-col lg:flex-row gap-20 items-center">
          <div className="flex-1">
            <h2 className="font-display text-black text-[64px] lg:text-[90px] uppercase leading-[0.9] mb-12">
              BORN ON <br/> THE CIRCUIT.
            </h2>
            <div className="font-body text-[#999999] text-[16px] leading-[2.0] max-w-xl space-y-6">
              <p>
                Our DNA is rooted in the high-stakes environment of UK club motorsport. We spent years in the paddocks of Silverstone, Brands Hatch, and Donington before launching Rubber Tech as a commercial entity.
              </p>
              <p>
                This heritage dictates everything we do. We understand that on the limit, the only thing that matters is the consistency of the contact patch. Whether you're commuting in a Tesla or chasing tenths in a BMW M3, we bring that same motorsport-grade scrutiny to your fitment.
              </p>
            </div>
          </div>
          <div className="w-full lg:w-1/3 aspect-[4/5] bg-white border border-black/10 flex items-center justify-center relative overflow-hidden">
             <div className="absolute inset-0 flex items-center justify-center opacity-10">
               <span className="font-display text-black text-[120px] rotate-90 tracking-widest">NANKANG</span>
             </div>
             <div className="relative z-10 p-12 text-center">
                <div className="font-mono text-black text-[14px] uppercase tracking-[2px] border border-black px-6 py-3">EST. 2021</div>
             </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-40 text-center">
          <h3 className="font-mono text-black text-[16px] uppercase tracking-[2px] mb-12">EXPERIENCE THE PRECISION</h3>
          <Link href="/tyres" className="inline-flex items-center justify-center font-mono text-[14px] uppercase tracking-[1.4px] text-white bg-black border border-black rounded-full px-16 py-6 hover:bg-white hover:text-black transition-colors duration-500">
            BROWSE THE INVENTORY
          </Link>
        </div>

      </div>
    </main>
  );
}
