import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "404 - PAGE NOT FOUND | RUBBER TECH",
};

export default function NotFound() {
  return (
    <main className="bg-white min-h-screen flex items-center justify-center pt-20 px-6">
      <div className="max-w-[1720px] w-full text-center">
        <div className="font-mono text-[#999999] text-[14px] uppercase tracking-[1.4px] mb-8 animate-fade-in">
          ERROR CODE: 404
        </div>
        
        <h1 className="font-display font-normal text-black uppercase leading-[1.0] mb-12" style={{ fontSize: "clamp(3rem, 15vw, 240px)" }}>
          OFF <br className="sm:hidden" /> TRACK
        </h1>

        <div className="max-w-xl mx-auto border-t border-black/10 pt-12">
          <p className="font-mono text-[#111111] text-[14px] uppercase tracking-[2px] mb-12 leading-[1.8]">
            THE REQUESTED COMPONENT OR PAGE ARCHIVE COULD NOT BE LOCATED ON THE RUBBER TECH SERVER.
          </p>
          
          <div className="flex flex-wrap items-center justify-center gap-6">
            <Link href="/" className="inline-flex items-center justify-center font-mono text-[14px] uppercase tracking-[1.4px] text-white bg-black border border-black rounded-full px-12 py-5 hover:bg-white hover:text-black transition-colors duration-300">
              RETURN TO PADDOCK
            </Link>
            <Link href="/tyre-finder" className="inline-flex items-center justify-center font-mono text-[14px] uppercase tracking-[1.4px] text-black border border-black/20 rounded-[6px] px-8 py-4 hover:border-black transition-colors duration-300">
              SEARCH INVENTORY
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
