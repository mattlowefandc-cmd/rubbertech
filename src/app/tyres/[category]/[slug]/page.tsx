import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getProductBySlug } from "@/data/products";
import TyreSequence from "@/components/TyreSequence";

interface Props {
  params: { category: string; slug: string };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const product = getProductBySlug(params.slug);
  if (!product) return { title: "Product Not Found" };
  return {
    title: `${product.name.toUpperCase()} | RUBBER TECH`,
    description: product.seoDescription,
  };
}

export default function ProductPage({ params }: Props) {
  const product = getProductBySlug(params.slug);

  if (!product || product.category !== params.category) {
    notFound();
  }

  return (
    <main className="bg-white min-h-screen pt-40 pb-32">
      <div className="max-w-[1720px] mx-auto px-6">
        
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-4 font-mono text-[11px] text-[#999999] uppercase tracking-[1.4px] mb-16">
          <Link href="/" className="hover:text-black transition-colors">HOME</Link>
          <span>/</span>
          <Link href={`/tyres/${product.category}`} className="hover:text-black transition-colors">{product.category}</Link>
          <span>/</span>
          <span className="text-black">{product.name}</span>
        </nav>

        {/* Product Hero Grid */}
        <div className="grid lg:grid-cols-2 gap-20 items-start mb-40">
          
          {/* Left: Monumental Typography & Lead Copy */}
          <div className="lg:sticky lg:top-40">
            <div className="font-mono text-[#999999] text-[14px] uppercase tracking-[2px] mb-8">
              {product.subcategory || product.category} // {product.badge}
            </div>
            <h1 className="font-display font-normal text-black uppercase leading-[0.9] mb-12" style={{ fontSize: "clamp(4rem, 12vw, 200px)" }}>
              {product.name}
            </h1>
            <div className="max-w-xl">
               <p className="font-display text-black text-[28px] uppercase leading-tight mb-8">
                 {product.tagline}
               </p>
               <p className="font-body text-[#999999] text-[18px] leading-[1.8] mb-12">
                 {product.description}
               </p>
               
               <div className="grid grid-cols-2 gap-12 border-t border-black/10 pt-12">
                  <div>
                    <div className="font-mono text-black text-[12px] uppercase mb-4 tracking-[1.4px]">INTENDED USAGE</div>
                    <div className="font-display text-black text-[32px] uppercase">{product.usageSplit}</div>
                  </div>
                  <div>
                    <div className="font-mono text-black text-[12px] uppercase mb-4 tracking-[1.4px]">STARTING FROM</div>
                    <div className="font-display text-black text-[32px] uppercase">£{product.priceFrom}</div>
                  </div>
               </div>

               <div className="mt-20">
                  <Link href="/contact" className="inline-flex items-center justify-center font-mono text-[14px] uppercase tracking-[1.4px] text-white bg-black border border-black rounded-full px-16 py-6 hover:bg-white hover:text-black transition-colors duration-500 shadow-2xl">
                    ORDER THIS SPECIFICATION
                  </Link>
               </div>
            </div>
          </div>

          {/* Right: Immersive Asset Container */}
          <div className="w-full aspect-square bg-[#fcfcfc] border border-black/10 flex items-center justify-center relative overflow-hidden group">
             <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" 
                  style={{ backgroundImage: "linear-gradient(#000 1px, transparent 0), linear-gradient(90deg, #000 1px, transparent 0)", backgroundSize: "10% 10%", opacity: 0.03 }} />
             
             <TyreSequence mode="autoplay" width={700} height={700} className="relative z-10 scale-110 lg:scale-125" />
             
             {/* Technical Corner Marking */}
             <div className="absolute top-8 right-8 text-right">
                <div className="font-mono text-black text-[12px] uppercase tracking-[2px]">{product.id}</div>
                <div className="font-mono text-[#999999] text-[10px] uppercase">VERIFIED BATCH</div>
             </div>
          </div>

        </div>

        {/* Technical Data Table */}
        <div className="mb-40">
           <h2 className="font-mono text-black text-[16px] uppercase tracking-[2px] mb-12 border-b border-black pb-4">
             TECHNICAL ARCHIVE
           </h2>
           <div className="overflow-x-auto">
             <table className="w-full text-left font-mono">
               <thead>
                 <tr className="text-[#999999] text-[12px] uppercase tracking-[1px] border-b border-black/10">
                   <th className="py-6 font-normal">DIMENSION / SPEC</th>
                   <th className="py-6 font-normal">LOAD INDEX</th>
                   <th className="py-6 font-normal">SPEED</th>
                   <th className="py-6 font-normal">WET GRIP</th>
                   <th className="py-6 font-normal text-right">PRICE</th>
                 </tr>
               </thead>
               <tbody>
                 {product.sizes.map((s, i) => (
                   <tr key={i} className="border-b border-black/5 hover:bg-[#fcfcfc] transition-colors group">
                     <td className="py-8 text-black text-[15px]">{s.size}</td>
                     <td className="py-8 text-[#999999] text-[14px]">{s.loadRating}</td>
                     <td className="py-8 text-[#999999] text-[14px]">{s.speedIndex}</td>
                     <td className="py-8 text-black text-[14px]">{s.wetGrip || "A"}</td>
                     <td className="py-8 text-right font-display text-[18px] text-black">£{(product.priceFrom ?? 0) + (i * 10)}</td>
                   </tr>
                 ))}
               </tbody>
             </table>
           </div>
        </div>

        {/* Expert Review Section */}
        <div className="grid lg:grid-cols-2 gap-20">
           <div className="bg-black p-12 lg:p-24 text-white">
              <div className="font-mono text-white/50 text-[12px] uppercase mb-12">THE EXPERT DEBRIEF</div>
              <blockquote className="font-display text-white text-[32px] lg:text-[44px] uppercase leading-tight italic mb-12">
                &quot;{product.expertView.slice(0, 160)}...&quot;
              </blockquote>
              <div className="font-mono text-white text-[12px] uppercase tracking-[2px]">
                RUBBER TECH SPECIALIST TEAM
              </div>
           </div>
           
           <div className="flex flex-col justify-center">
              <h3 className="font-mono text-black text-[16px] uppercase tracking-[2px] mb-8">CORE PERFORMANCE PILLARS</h3>
              <ul className="space-y-6">
                {product.features.map(f => (
                   <li key={f} className="flex gap-6 items-start">
                     <div className="w-[1px] h-[24px] bg-black mt-2" />
                     <span className="font-body text-[#999999] text-[16px] leading-relaxed">{f}</span>
                   </li>
                ))}
              </ul>
           </div>
        </div>

      </div>
    </main>
  );
}
