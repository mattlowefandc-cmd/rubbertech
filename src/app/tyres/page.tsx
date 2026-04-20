import { Metadata } from "next";
import Link from "next/link";
import { getProductsByCategory, TyreCategory } from "@/data/products";

export const metadata: Metadata = {
  title: "RANGE ARCHIVE | NANKANG AUTHORISED DEALERS",
  description: "Browse the complete Nankang tyre range. Performance, motorsport, 4x4, and EV solutions from Rubber Tech.",
};

export default async function AllTyresPage({ 
  searchParams 
}: { 
  searchParams: Promise<{ [key: string]: string | string[] | undefined }> 
}) {
  const resolvedSearchParams = await searchParams;
  const width = resolvedSearchParams.width as string;
  const profile = resolvedSearchParams.profile as string;
  const rim = resolvedSearchParams.rim as string;

  const isFiltered = !!(width || profile || rim);

  const categories: { key: TyreCategory; label: string; tag: string; dna: string }[] = [
    { 
      key: "motorsport", 
      label: "MOTORSPORT", 
      tag: "THE CIRCUIT FLAGSHIP",
      dna: "ENGINEERED FOR THERMAL CONSISTENCY AND MECHANICAL GRIP. THE BACKBONE OF UK CLUB RACING." 
    },
    { 
      key: "car", 
      label: "PERFORMANCE", 
      tag: "URBAN PRECISION",
      dna: "BALANCING NANOMATERIAL COMPOUNDS WITH ACOUSTIC REFINEMENT FOR THE MODERN DRIVER." 
    },
    { 
      key: "ev", 
      label: "ELECTRIC", 
      tag: "TORQUE MANAGEMENT",
      dna: "REINFORCED CARCASS ARCHITECTURE BUILT TO WITHSTAND DISRUPTIVE INSTANT TORQUE." 
    },
    { 
      key: "4x4", 
      label: "OFF-ROAD", 
      tag: "MUD TERRAIN DOMINANCE",
      dna: "AGGRESSIVE SHOULDER LUGS BUILT FOR THE HIGHEST SPECIFICATION UK OFF-ROAD ADVENTURES." 
    },
    { 
      key: "all-season", 
      label: "ALL-SEASON", 
      tag: "CLIMATE ADAPTATION",
      dna: "SIPED TREAD GEOMETRY DESIGNED TO EVACUATE SURFACE WATER AND MANAGE TEMPERATURE DROPS." 
    },
  ];

  return (
    <main className="bg-white min-h-screen pt-28 sm:pt-40 pb-20 sm:pb-32">
      <div className="max-w-[1720px] mx-auto px-6">
        
        {/* Header — Monumental Style */}
        <div className="mb-20 sm:mb-40 flex flex-col lg:flex-row justify-between items-end gap-8 sm:gap-12">
          <div className="max-w-4xl">
            <div className="font-mono text-[#999999] text-[12px] sm:text-[14px] uppercase tracking-[2px] mb-6 sm:mb-8">
              {isFiltered ? "FILTERED RESULTS" : "INVENTORY ARCHIVE"}
            </div>
            <h1 className="font-display font-normal text-black uppercase leading-[0.9] mb-8 sm:mb-12 tracking-tight sm:max-w-3xl" style={{ fontSize: "clamp(2.5rem, 9vw, 130px)" }}>
              {isFiltered ? "MATCHING SPEC" : "THE FULL RANGE"}
            </h1>
            <p className="font-mono text-[#111111] text-[12px] sm:text-[14px] uppercase tracking-[1.4px]">
              {isFiltered 
                ? `IDENTIFIED RESULTS FOR ${width}/${profile} R${rim}` 
                : "AUTHORISED UK SUPPLY // DIRECT FACTORY DISPATCH."}
            </p>
          </div>
          {!isFiltered && (
            <div className="hidden lg:block pb-4">
               <div className="font-mono text-black text-[12px] uppercase mb-4 tracking-[1.4px]">QUICK NAVIGATION</div>
               <nav className="flex flex-col gap-2 border-l border-black/10 pl-6">
                 {categories.map(c => (
                   <a key={c.key} href={`#${c.key}`} className="font-mono text-[#999999] text-[11px] uppercase tracking-[1px] hover:text-black transition-colors">{c.label}</a>
                 ))}
               </nav>
            </div>
          )}
        </div>

        {/* Categories Loop or Filtered Results */}
        <div className="space-y-32 sm:space-y-64">
          {categories.map((cat) => {
            let products = getProductsByCategory(cat.key);
            
            // Simple filter logic for demonstration
            if (isFiltered) {
              products = products.filter(p => p.sizes.some(s => s.size.includes(rim || "")));
            }
            
            if (products.length === 0) return null;

            return (
              <section key={cat.key} id={cat.key} className="scroll-mt-32">
                <div className="flex flex-col lg:flex-row gap-8 sm:gap-12 items-baseline justify-between mb-16 sm:mb-24 border-b border-black/20 pb-8 sm:pb-12">
                  <div className="max-w-2xl">
                    <div className="font-mono text-black text-[12px] sm:text-[14px] mb-3 sm:mb-4 tracking-[2px] uppercase underline underline-offset-8 decoration-black/20">{cat.tag}</div>
                    <h2 className="font-display font-normal text-black uppercase leading-[1.0] mb-6 sm:mb-8" style={{ fontSize: "clamp(1.8rem, 6vw, 90px)" }}>
                      {cat.label}
                    </h2>
                    <p className="font-mono text-[#999999] text-[11px] sm:text-[13px] uppercase tracking-[1.4px] leading-relaxed">
                      {cat.dna}
                    </p>
                  </div>
                  {!isFiltered && (
                    <Link href={`/tyres/${cat.key}`} className="inline-flex items-center justify-center font-mono text-black text-[14px] uppercase tracking-[1.4px] border border-black/20 px-8 py-3 hover:bg-black hover:text-white transition-all">
                      VIEW CATEGORY ARCHIVE
                    </Link>
                  )}
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-12 sm:gap-y-20">
                  {products.map((product) => (
                    <Link
                      key={product.id}
                      href={`/tyres/${product.category}/${product.slug}`}
                      className="group flex flex-col h-full bg-white relative cursor-pointer"
                    >
                      <div className="relative aspect-square w-full bg-[#fcfcfc] border border-black/10 flex items-center justify-center overflow-hidden transition-colors group-hover:bg-[#f5f5f5]">
                        {product.badge && (
                          <span className="absolute top-6 left-6 font-mono text-black text-[11px] uppercase tracking-[1.4px] z-10 border-b border-black/40 pb-1">
                            {product.badge}
                          </span>
                        )}
                        <div className="absolute inset-0 bg-[radial-gradient(#000_1px,transparent_0)] [background-size:20px_20px] opacity-[0.03]" />
                        <span className="font-display text-black/5 text-[90px] uppercase font-bold tracking-tighter absolute rotate-90 whitespace-nowrap">{product.name}</span>
                      </div>

                      <div className="pt-8 flex flex-col justify-between flex-grow">
                        <div>
                          <div className="font-mono text-[#999999] text-[11px] uppercase tracking-[2px] mb-4">
                            {product.subcategory || product.category} // SERIAL: {product.id}
                          </div>
                          <h3 className="font-display font-normal text-black text-[36px] uppercase mb-4 leading-none group-hover:underline underline-offset-4 decoration-black/20">
                            {product.name}
                          </h3>
                          <p className="font-body text-[#999999] text-[14px] leading-relaxed mb-8">
                            {product.tagline}
                          </p>
                        </div>

                        <div className="flex justify-between items-center border-t border-black/5 pt-6">
                           <div className="font-mono text-black text-[14px] uppercase tracking-[1.4px]">
                             £{product.priceFrom} <span className="text-[#999999] text-[10px]">INC VAT</span>
                           </div>
                           <div className="font-mono text-black text-[12px] uppercase tracking-[2px] font-bold group-hover:opacity-50 transition-opacity">EXPLORE {product.name}</div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </section>
            );
          })}
        </div>

      </div>
    </main>
  );
}
