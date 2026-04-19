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
        <div className="max-w-4xl">
          <div className="font-mono text-[#999999] text-[14px] uppercase tracking-[1.4px] mb-8">OUR STORY</div>
          <h1 className="font-display font-normal text-black uppercase leading-[1.0] mb-16" style={{ fontSize: "clamp(3rem, 8vw, 110px)" }}>
            PRECISION <br/> SINCE DAY ONE.
          </h1>

          <div className="font-body text-[#111111] text-[18px] lg:text-[22px] leading-[1.8] space-y-8">
            <p>
              Rubber Tech was built to streamline the supply of high-performance and motorsport rubber to drivers across the United Kingdom. We exist because we were fundamentally tired of the typical, overly complicated tyre purchasing process.
            </p>
            <p>
              As an official, authorised Nankang dealership, we hold direct relationships with the manufacturer. This allows us to guarantee the authenticity, age, and storage conditions of every single tyre we dispatch. From the globally renowned NS-2R track tyre to sophisticated EV applications.
            </p>
          </div>

          <div className="mt-24 grid sm:grid-cols-3 gap-8 border-t border-black/10 pt-16">
            <div>
              <div className="font-display text-black text-[48px] uppercase mb-4">100%</div>
              <div className="font-mono text-[#999999] text-[12px] uppercase tracking-[1.4px]">AUTHORISED SUPPLY</div>
            </div>
            <div>
              <div className="font-display text-black text-[48px] uppercase mb-4">UK</div>
              <div className="font-mono text-[#999999] text-[12px] uppercase tracking-[1.4px]">NATIONWIDE DELIVERY</div>
            </div>
            <div>
              <div className="font-display text-black text-[48px] uppercase mb-4">24/7</div>
              <div className="font-mono text-[#999999] text-[12px] uppercase tracking-[1.4px]">SECURE ORDERING</div>
            </div>
          </div>

          <div className="mt-32">
            <h2 className="font-mono text-black text-[16px] uppercase tracking-[1.4px] mb-8">NANKANG'S LEGACY</h2>
            <div className="border border-black p-8 sm:p-12">
              <p className="font-body text-[#666666] text-[16px] leading-[1.8]">
                Established in 1959, Nankang is the longest-standing tyre manufacturer in Taiwan. Dedicated to corporate motto "Integrity, Pragmatism, and Innovation", Nankang continuously creates performance upgrades and guarantees road safety. Over the past 60 years, they have expanded globally and achieved formidable racing pedigrees, heavily disrupting the motorsport establishment.
              </p>
            </div>
          </div>
          
          <div className="mt-20">
            <Link href="/tyre-finder" className="inline-flex items-center justify-center font-mono text-[14px] uppercase tracking-[1.4px] text-white bg-black border border-black rounded-full px-12 py-5 hover:bg-white hover:text-black transition-colors duration-300">
              SEARCH OUR INVENTORY
            </Link>
          </div>

        </div>
      </div>
    </main>
  );
}
