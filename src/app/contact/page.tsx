import { Metadata } from "next";

export const metadata: Metadata = {
  title: "CONTACT | RUBBER TECH",
  description: "Get in touch with Rubber Tech for sizing, stock queries, or corporate accounts.",
};

export default function ContactPage() {
  return (
    <main className="bg-white min-h-screen pt-40 pb-32">
      <div className="max-w-[1720px] mx-auto px-6">
        
        <div className="font-mono text-[#999999] text-[14px] uppercase tracking-[1.4px] mb-8">SUPPORT</div>
        <h1 className="font-display font-normal text-black uppercase leading-[1.0] mb-24" style={{ fontSize: "clamp(3rem, 8vw, 110px)" }}>
          CONTACT US
        </h1>

        <div className="grid lg:grid-cols-2 gap-20">
          
          {/* Aesthetic Form (Not physically wired to a backend yet) */}
          <div className="border border-black/10 p-8 sm:p-12">
            <h2 className="font-mono text-black text-[16px] uppercase tracking-[1.4px] mb-12 border-b border-black/10 pb-6">
              SEND A MESSAGE
            </h2>
            <form className="space-y-8" action="#" method="POST">
               <div>
                 <label htmlFor="name" className="block font-mono text-[12px] text-black uppercase tracking-[1.4px] mb-4">FULL NAME</label>
                 <input type="text" id="name" className="w-full bg-[#fcfcfc] border border-black/20 focus:border-black outline-none px-6 py-4 font-mono text-[14px] text-black transition-colors" placeholder="ENTER NAME" />
               </div>
               <div>
                 <label htmlFor="email" className="block font-mono text-[12px] text-black uppercase tracking-[1.4px] mb-4">EMAIL ADDRESS</label>
                 <input type="email" id="email" className="w-full bg-[#fcfcfc] border border-black/20 focus:border-black outline-none px-6 py-4 font-mono text-[14px] text-black transition-colors" placeholder="ENTER EMAIL" />
               </div>
               <div>
                 <label htmlFor="subject" className="block font-mono text-[12px] text-black uppercase tracking-[1.4px] mb-4">SUBJECT</label>
                 <select id="subject" className="w-full bg-[#fcfcfc] border border-black/20 focus:border-black outline-none px-6 py-4 font-mono text-[14px] text-black transition-colors appearance-none cursor-pointer">
                   <option>GENERAL INQUIRY</option>
                   <option>STOCK AVAILABILITY</option>
                   <option>TECHNICAL FITMENT</option>
                   <option>ORDER STATUS</option>
                 </select>
               </div>
               <div>
                 <label htmlFor="message" className="block font-mono text-[12px] text-black uppercase tracking-[1.4px] mb-4">MESSAGE</label>
                 <textarea id="message" rows={5} className="w-full bg-[#fcfcfc] border border-black/20 focus:border-black outline-none px-6 py-4 font-mono text-[14px] text-black transition-colors resize-none" placeholder="HOW CAN WE HELP?"></textarea>
               </div>
               <button type="submit" className="w-full font-mono text-[14px] text-white uppercase tracking-[1.4px] bg-black border border-black py-5 hover:bg-white hover:text-black transition-colors duration-300">
                 SUBMIT RESPONSE
               </button>
            </form>
          </div>

          {/* Contact Details */}
          <div className="flex flex-col gap-12">
            <div>
              <h2 className="font-mono text-[#999999] text-[12px] uppercase tracking-[1.4px] mb-4">DIRECT EMAIL</h2>
              <a href="mailto:info@rubber-tech.co.uk" className="font-display text-black text-[24px] uppercase hover:opacity-70 transition-opacity">INFO@RUBBER-TECH.CO.UK</a>
            </div>
            
            <div className="w-full h-[1px] bg-black/10" />

            <div>
              <h2 className="font-mono text-[#999999] text-[12px] uppercase tracking-[1.4px] mb-4">TELEPHONE</h2>
              <a href="tel:[PHONE_PLACEHOLDER]" className="font-display text-black text-[24px] uppercase hover:opacity-70 transition-opacity">[PHONE_PLACEHOLDER]</a>
            </div>
            
            <div className="w-full h-[1px] bg-black/10" />

            <div>
              <h2 className="font-mono text-[#999999] text-[12px] uppercase tracking-[1.4px] mb-4">HQ LOCATION</h2>
              <address className="not-italic font-mono text-black text-[14px] leading-[2.0] uppercase">
                RUBBER TECH LTD<br/>
                UNIT 1, INDUSTRIAL PARK<br/>
                UNITED KINGDOM<br/>
                POSTCODE
              </address>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}
