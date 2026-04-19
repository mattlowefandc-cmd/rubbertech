import { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQS | RUBBER TECH",
  description: "Frequently asked questions about Nankang tyres and fitment.",
};

export default function FAQPage() {
  const faqs = [
    { q: "ARE NANKANG TYRES ROAD LEGAL?", a: "YES, THE ENTIRE RANGE WE STOCK IS FULLY ROAD LEGAL IN THE UK AND CARRY THE NECESSARY EU TYRE LABELLING CERTIFICATIONS." },
    { q: "WHAT IS THE LIFESPAN OF AN NS-2R?", a: "FOR A SEMI-SLICK, THE NS-2R IS EXTREMELY DURABLE. ON TRACK, YOU CAN EXPECT SEVERAL HARD SESSIONS; ON THE ROAD, MANY USERS SEE 8,000+ MILES DEPENDING ON DRIVING STYLE." },
    { q: "DO YOU SHIP NATIONWIDE?", a: "YES, WE OFFER FREE NEXT-DAY DELIVERY ACROSS MAINLAND UK. FOR THE HIGHLANDS AND ISLANDS, A SMALL SURCHARGE MAY APPLY." },
    { q: "CAN YOU PROVIDE TECHNICAL CAMBER ADVICE?", a: "OUR TEAM RUNS NANKANG COMPOUNDS ON THEIR OWN TRACK CARS. WE CAN PROVIDE STARTING CAMBER AND PRESSURE SETTINGS FOR MOST POPULAR CHASSIS." },
  ];

  return (
    <main className="bg-white min-h-screen pt-40 pb-32">
      <div className="max-w-[1720px] mx-auto px-6">
        <div className="max-w-4xl">
          <div className="font-mono text-[#999999] text-[14px] uppercase tracking-[1.4px] mb-8">KNOWLEDGE BASE</div>
          <h1 className="font-display font-normal text-black uppercase leading-[1.0] mb-24" style={{ fontSize: "clamp(3rem, 8vw, 110px)" }}>
            QUERIES.
          </h1>

          <div className="space-y-12">
            {faqs.map((faq) => (
              <div key={faq.q} className="border-b border-black/10 pb-12">
                <h2 className="font-mono text-black text-[16px] uppercase tracking-[1.4px] mb-6">{faq.q}</h2>
                <p className="font-body text-[#999999] text-[16px] leading-[1.8]">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-32 p-12 border border-black bg-black text-white">
            <h3 className="font-mono text-[14px] uppercase tracking-[1.4px] mb-4">STILL UNSURE?</h3>
            <p className="font-body text-white/70 text-[16px] mb-8">Our specialists are available 24/7 via WhatsApp or Email for complex technical inquiries.</p>
            <a href="/contact" className="inline-block font-mono text-[12px] uppercase tracking-[1.4px] border-b border-white pb-2 hover:opacity-70 transition-opacity">SEND A DIRECT MESSAGE</a>
          </div>
        </div>
      </div>
    </main>
  );
}
