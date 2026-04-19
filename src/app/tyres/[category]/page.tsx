import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProductsByCategory, TyreCategory } from "@/data/products";

export async function generateMetadata({ params }: { params: Promise<{ category: string }> }): Promise<Metadata> {
  const { category } = await params;
  const categoryStr = category.toLowerCase().replace("-", " ");
  return {
    title: `${categoryStr.toUpperCase()} TYRES | RUBBER TECH`,
    description: `Shop our range of Nankang ${categoryStr} tyres. Official UK supplier.`,
  };
}

const CATEGORY_DNA: Record<string, { title: string; techHeader: string; body: string }> = {
  car: {
    title: "PERFORMANCE & REFINEMENT",
    techHeader: "NANOMATERIAL COMPOUNDING",
    body: "The Rubber Tech car range is built around Nankang's newest nanomaterial compounds. We prioritise three key metrics: extreme wet grip (EU Label A-rating), acoustic suppression for luxury EV/ICE cabins, and longevity under typical UK driving conditions."
  },
  motorsport: {
    title: "THE CLUB RACING STANDARD",
    techHeader: "THERMAL CONTROL ARCHITECTURE",
    body: "Nankang dominates the UK track day and club racing scene for a reason. Our motorsport rubber is engineered for repeatable lap times, staying within its optimal thermal window even under extreme mechanical load. NS-2R, AR-1, and CR-S are the pillars of the paddock."
  },
  ev: {
    title: "THE ELECTRIC FUTURE",
    techHeader: "REINFORCED TORQUE OFFSET",
    body: "Electric Vehicles place unique, destructive levels of instant torque on tyres. Our EV range features a reinforced carcass specifically built to offset these forces, maintaining battery range through ultra-low rolling resistance without compromising on stopping power."
  },
  "4x4": {
    title: "TERRAIN DOMINANCE",
    techHeader: "EXTREME SHOULDER LUGS",
    body: "From green lanes to competitive off-roading, our 4x4 range is built for rugged durability. Aggressive shoulder patterns provide mechanical traction in deep mud while the central rib maintains on-road refinement for daily utility."
  },
  "all-season": {
    title: "YEAR-ROUND CERTAINTY",
    techHeader: "SIPED TREAD GEOMETRY",
    body: "UK weather is notoriously unpredictable. Our all-season tyres feature sophisticated siping that manages rapid surface water evacuation and maintains compound flexibility even as temperatures drop below 7°C."
  }
};

export default async function CategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const resolvedParams = await params;
  const category = resolvedParams.category.toLowerCase();
  
  const validCategories = ["car", "motorsport", "4x4", "suv", "ev", "commercial", "winter", "all-season", "motorcycle", "retro", "runflat"];
  if (!validCategories.includes(category)) {
    notFound();
  }

  const catKey = category as TyreCategory;
  const products = getProductsByCategory(catKey);
  const categoryTitle = category.toUpperCase().replace("-", " ");
  const dna = CATEGORY_DNA[category] || CATEGORY_DNA["car"];

  return (
    <main className="bg-white min-h-screen pt-40 pb-32">
      <div className="max-w-[1720px] mx-auto px-6">
        
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-4 font-mono text-[11px] text-[#999999] uppercase tracking-[1.4px] mb-16">
          <Link href="/" className="hover:text-black transition-colors">HOME</Link>
          <span>/</span>
          <Link href="/tyres" className="hover:text-black transition-colors">RANGE ARCHIVE</Link>
          <span>/</span>
          <span className="text-black">{categoryTitle}</span>
        </nav>

        {/* Category Header */}
        <div className="mb-40 flex flex-col lg:flex-row justify-between items-start gap-12">
          <div className="max-w-4xl">
            <div className="font-mono text-black text-[14px] uppercase tracking-[2px] mb-8 border-b border-black/10 pb-4 inline-block">{dna.title}</div>
            <h1 className="font-display font-normal text-black uppercase leading-[0.9] mb-12" style={{ fontSize: "clamp(3.5rem, 12vw, 180px)" }}>
              {categoryTitle}
            </h1>
            <p className="font-mono text-[#999999] text-[13px] uppercase tracking-[1.4px] max-w-2xl leading-[1.8]">
              {products.length} {products.length === 1 ? 'SPECIFICATION' : 'SPECIFICATIONS'} CURRENTLY IN ARCHIVE // AUTHORISED UK SUPPLY.
            </p>
          </div>
          <div className="bg-[#fcfcfc] border border-black/10 p-12 lg:p-16 max-w-xl">
             <div className="font-mono text-black text-[12px] uppercase mb-4 tracking-[1.4px] border-b border-black/10 pb-4 text-center">CATEGORY DNA</div>
             <h3 className="font-mono text-black text-[14px] mb-6 tracking-[1.4px]">{dna.techHeader}</h3>
             <p className="font-body text-[#999999] text-[15px] leading-relaxed italic border-l border-black/10 pl-6">
                &quot;{dna.body}&quot;
             </p>
          </div>
        </div>

        {/* Product Grid */}
        {products.length > 0 ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-24">
            {products.map((product) => (
              <Link
                key={product.id}
                href={`/tyres/${product.category}/${product.slug}`}
                className="group flex flex-col h-full bg-white transition-opacity hover:opacity-90"
              >
                {/* Asset Silhoutte */}
                <div className="relative aspect-square w-full bg-[#fcfcfc] border border-black/10 flex items-center justify-center p-8 overflow-hidden group-hover:bg-[#f5f5f5] transition-colors">
                  {product.badge && (
                    <span className="absolute top-6 left-6 font-mono text-black text-[11px] uppercase tracking-[1.4px] z-10 bg-white/80 px-2 py-1">
                      [{product.badge}]
                    </span>
                  )}
                  <div className="absolute inset-x-0 bottom-0 h-[1px] bg-black/5" />
                  
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-500 relative z-10" 
                  />
                  
                  <span className="font-display text-black/5 text-[90px] uppercase font-bold tracking-tighter absolute rotate-90 z-0">{product.name}</span>
                </div>

                <div className="pt-8 flex flex-col justify-between flex-grow">
                  <div>
                    <div className="font-mono text-[#999999] text-[11px] uppercase tracking-[2px] mb-4 text-center">
                       {product.subcategory || product.category} // SERIAL: {product.id}
                    </div>
                    <h3 className="font-display font-normal text-black text-[36px] uppercase mb-4 leading-none text-center">
                      {product.name}
                    </h3>
                    <p className="font-body text-[#999999] text-[14px] leading-relaxed text-center px-4">
                      {product.tagline}
                    </p>
                  </div>

                  <div className="mt-12 flex flex-col items-center gap-6">
                    <div className="font-mono text-black text-[14px] uppercase tracking-[1.4px] border-b border-black">
                      FROM £{product.priceFrom} <span className="text-[#999999]">INC VAT</span>
                    </div>
                    <div className="inline-flex items-center justify-center font-mono text-[11px] uppercase tracking-[2px] text-white bg-black border border-black rounded-full px-10 py-4 hover:bg-white hover:text-black transition-all">
                      INSPECT SPEC
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="border border-black/10 p-24 text-center">
             <div className="font-mono text-[#999999] text-[12px] uppercase mb-4 tracking-[2px]">ERROR ARCHIVE_MISSING</div>
             <p className="font-mono text-black text-[14px] uppercase tracking-[1.4px]">NO TYRES CURRENTLY LISTED IN THIS CATEGORY ARCHIVE.</p>
          </div>
        )}
      </div>
    </main>
  );
}
