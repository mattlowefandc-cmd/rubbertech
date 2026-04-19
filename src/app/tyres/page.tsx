import { Metadata } from "next";
import Link from "next/link";
import { getProductsByCategory, TyreCategory } from "@/data/products";

export const metadata: Metadata = {
  title: "ALL NANKANG TYRES | RUBBER TECH",
  description: "Browse the complete Nankang tyre range. Shop performance, motorsport, 4x4, EV, winter, and all-season tyres from Rubber Tech, official UK dealers.",
};

export default function AllTyresPage() {
  const categories: { key: TyreCategory; label: string; desc: string }[] = [
    { key: "car", label: "PERFORMANCE", desc: "EVERYDAY PERFORMANCE AND ECONOMY." },
    { key: "motorsport", label: "MOTORSPORT", desc: "ROAD-LEGAL RACE FOCUS." },
    { key: "4x4", label: "OFF-ROAD", desc: "ALL-TERRAIN DOMINANCE." },
    { key: "all-season", label: "ALL-SEASON", desc: "YEAR-ROUND CLIMATE ADAPTATION." },
    { key: "ev", label: "ELECTRIC", desc: "OPTIMISED FOR EV TORQUE." },
  ];

  return (
    <main className="bg-white min-h-screen pt-40 pb-32 transition-colors">
      <div className="max-w-[1720px] mx-auto px-6">
        
        {/* Header */}
        <div className="mb-32">
          <div className="font-mono text-[#999999] text-[14px] uppercase tracking-[1.4px] mb-8">INVENTORY</div>
          <h1 className="font-display font-normal text-black uppercase leading-[1.0] mb-8" style={{ fontSize: "clamp(3rem, 8vw, 110px)" }}>
            THE COMPLETE RANGE
          </h1>
          <p className="font-mono text-[#999999] text-[14px] uppercase tracking-[1.4px] max-w-2xl leading-[1.8]">
            AUTHORISED UK SUPPLY OF THE FULL NANKANG LINEUP. SELECT A CATEGORY TO VIEW PATTERNS AND SPECIFICATIONS.
          </p>
        </div>

        {/* Categories Loop */}
        <div className="space-y-40">
          {categories.map((cat) => {
            const products = getProductsByCategory(cat.key);
            if (products.length === 0) return null;

            return (
              <section key={cat.key} id={cat.key} className="scroll-mt-32">
                <div className="flex flex-col sm:flex-row items-end justify-between mb-16 border-b border-black/10 pb-6">
                  <div>
                    <h2 className="font-display font-normal text-black uppercase leading-[1.0] mb-4" style={{ fontSize: "clamp(2rem, 5vw, 64px)" }}>
                      {cat.label}
                    </h2>
                    <p className="font-mono text-[#999999] text-[14px] uppercase tracking-[1.4px]">{cat.desc}</p>
                  </div>
                  <Link href={`/tyres/${cat.key}`} className="hidden sm:inline-block font-mono text-black text-[14px] uppercase tracking-[1.4px] hover:text-[#999999] transition-colors">
                    VIEW ALL
                  </Link>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                  {products.map((product) => (
                    <Link
                      key={product.id}
                      href={`/tyres/${product.category}/${product.slug}`}
                      className="group flex flex-col h-full border border-black/10 hover:border-black transition-colors duration-300 bg-white"
                    >
                      {/* Sparse Image Silhouette Placeholder */}
                      <div className="relative aspect-square w-full bg-[#fcfcfc] flex items-center justify-center p-8 border-b border-black/10">
                        {product.badge && (
                          <span className="absolute top-6 left-6 font-mono text-black text-[12px] uppercase tracking-[1.4px]">
                            [{product.badge}]
                          </span>
                        )}
                        <span className="font-display text-[#cccccc] text-[48px] uppercase tracking-widest">{product.name}</span>
                      </div>

                      <div className="p-8 flex-grow flex flex-col justify-between">
                        <div>
                          <div className="font-mono text-[#999999] text-[12px] uppercase tracking-[1.4px] mb-4">
                            {product.subcategory || product.category}
                          </div>
                          <h3 className="font-display font-normal text-black text-[32px] uppercase mb-4 leading-[1.0]">
                            {product.name}
                          </h3>
                          <p className="font-body text-[#999999] text-[14px] leading-[1.5]">
                            {product.tagline}
                          </p>
                        </div>

                        <div className="mt-12 flex flex-col items-start gap-4">
                          <div className="font-mono text-black text-[14px] uppercase tracking-[1.4px]">
                            {product.priceFrom ? `FROM £${product.priceFrom}` : "POA"}
                          </div>
                          <div className="inline-flex items-center justify-center font-mono text-[12px] uppercase tracking-[1.4px] text-black border border-black/20 rounded-[6px] px-6 py-2 group-hover:border-black group-hover:bg-black group-hover:text-white transition-colors">
                            EXPLORE
                          </div>
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

// FILE COMPLETE ✓
