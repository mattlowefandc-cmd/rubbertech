import { Metadata } from "next";

export const metadata: Metadata = {
  title: "CONTACT | RUBBER TECH",
  description: "Get in touch with Rubber Tech for sizing, stock queries, or corporate accounts.",
};

export default function ContactPage() {
  return (
    <main className="bg-white min-h-screen pt-40 pb-32">
      <div className="max-w-[1720px] mx-auto px-6">
        
        <div className="mb-32">
          <div className="font-mono text-[#999999] text-[14px] uppercase tracking-[1.4px] mb-8">GLOBAL SUPPORT</div>
          <h1 className="font-display font-normal text-black uppercase leading-[1.0] mb-12" style={{ fontSize: "clamp(3.5rem, 12vw, 180px)" }}>
            DIRECT <br/> CONNECTION.
          </h1>
          <div className="w-full h-[1px] bg-black/10 mb-12" />
          <p className="font-mono text-black text-[14px] uppercase tracking-[1.4px] max-w-2xl leading-[1.8]">
            OUR SPECIALISTS ARE STANDING BY TO ASSIST WITH TECHNICAL FITMENT, STOCK AVAILABILITY, OR CORPORATE PROCUREMENT.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-20">
          
          {/* Aesthetic Form */}
          <div className="border border-black/10 p-12 lg:p-20 bg-[#fcfcfc]">
            <h2 className="font-mono text-black text-[14px] uppercase tracking-[2px] mb-12 border-b border-black/10 pb-6 text-center">
              INQUIRY PROTOCOL
            </h2>
            <form className="space-y-10" action="#" method="POST">
               <div className="grid sm:grid-cols-2 gap-8">
                 <div>
                   <label htmlFor="name" className="block font-mono text-[10px] text-[#999999] uppercase tracking-[2px] mb-4">IDENTIFICATION</label>
                   <input type="text" id="name" className="w-full bg-white border border-black/10 focus:border-black outline-none px-6 py-4 font-mono text-[14px] text-black transition-colors rounded-none" placeholder="FULL NAME" />
                 </div>
                 <div>
                   <label htmlFor="email" className="block font-mono text-[10px] text-[#999999] uppercase tracking-[2px] mb-4">CORRESPONDENCE</label>
                   <input type="email" id="email" className="w-full bg-white border border-black/10 focus:border-black outline-none px-6 py-4 font-mono text-[14px] text-black transition-colors rounded-none" placeholder="EMAIL ADDRESS" />
                 </div>
               </div>
               
               <div>
                 <label htmlFor="subject" className="block font-mono text-[10px] text-[#999999] uppercase tracking-[2px] mb-4">PURPOSE</label>
                 <select id="subject" className="w-full bg-white border border-black/10 focus:border-black outline-none px-6 py-4 font-mono text-[14px] text-black transition-colors appearance-none cursor-pointer rounded-none">
                   <option>GENERAL INQUIRY</option>
                   <option>TECHNICAL FITMENT DATA</option>
                   <option>STOCK LOGISTICS</option>
                   <option>CORPORATE PARTNERSHIP</option>
                 </select>
               </div>

               <div>
                 <label htmlFor="message" className="block font-mono text-[10px] text-[#999999] uppercase tracking-[2px] mb-4">MESSAGE BUFFER</label>
                 <textarea id="message" rows={6} className="w-full bg-white border border-black/10 focus:border-black outline-none px-6 py-4 font-mono text-[14px] text-black transition-colors resize-none rounded-none" placeholder="PLEASE DESCRIBE YOUR REQUIREMENTS..."></textarea>
               </div>

               <button type="submit" className="w-full font-mono text-[14px] text-white uppercase tracking-[1.4px] bg-black border border-black py-6 hover:bg-white hover:text-black transition-colors duration-500 rounded-full shadow-2xl">
                 TRANSMIT DATA
               </button>
            </form>
          </div>

          {/* Contact Details & Map Placeholder */}
          <div className="flex flex-col">
            <div className="grid sm:grid-cols-2 gap-12 mb-20">
               <div>
                 <h3 className="font-mono text-[#999999] text-[10px] uppercase tracking-[2px] mb-6 border-b border-black/5 pb-2">ELECTRONIC</h3>
                 <a href="mailto:info@rubber-tech.co.uk" className="font-display text-black text-[20px] uppercase hover:opacity-50 transition-opacity">INFO@RUBBER-TECH.CO.UK</a>
               </div>
               <div>
                 <h3 className="font-mono text-[#999999] text-[10px] uppercase tracking-[2px] mb-6 border-b border-black/5 pb-2">TELEPHONIC</h3>
                 <a href="tel:[PHONE_PLACEHOLDER]" className="font-display text-black text-[20px] uppercase hover:opacity-50 transition-opacity">[PHONE_PLACEHOLDER]</a>
               </div>
            </div>

            <div className="bg-[#f5f5f5] aspect-video w-full relative mb-12 border border-black/10 flex items-center justify-center p-12 overflow-hidden">
               {/* Abstract Grid Map Aesthetic */}
               <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: "radial-gradient(#000 1px, transparent 0)", backgroundSize: "40px 40px" }} />
               <div className="relative z-10 text-center">
                 <div className="font-display text-black text-[32px] uppercase mb-4 tracking-tighter">HQ ARCHIVE</div>
                 <address className="not-italic font-mono text-black text-[12px] leading-[2.2] uppercase tracking-[1px]">
                   RUBBER TECH LOGISTICS CENTRE<br/>
                   UNIT 1, AEROSPACE PARK, WARWICK<br/>
                   UNITED KINGDOM
                 </address>
               </div>
            </div>

            <div className="p-8 border border-black/5">
               <h4 className="font-mono text-black text-[12px] uppercase tracking-[1.4px] mb-4">SPECIFICATION HOURS</h4>
               <div className="flex justify-between items-center text-[#999999] font-mono text-[11px] border-b border-black/5 pb-3 mb-3">
                 <span>MON — FRI</span>
                 <span>09:00 — 18:00</span>
               </div>
               <div className="flex justify-between items-center text-[#999999] font-mono text-[11px]">
                 <span>SATURDAY</span>
                 <span>09:00 — 14:00</span>
               </div>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}
