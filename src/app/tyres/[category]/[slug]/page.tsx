import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getProductBySlug } from "@/data/products";
import Link from "next/link";

export async function generateMetadata({ params }: { params: { category: string; slug: string } }): Promise<Metadata> {
  const product = getProductBySlug(params.slug);
  if (!product) return { title: "Not Found" };
  return {
    title: product.seoTitle,
    description: product.seoDescription,
    alternates: { canonical: `https://rubber-tech.co.uk/tyres/${product.category}/${product.slug}` },
  };
}

export default function ProductLayout({ params }: { params: { category: string; slug: string } }) {
  const product = getProductBySlug(params.slug);
  if (!product || product.category !== params.category) notFound();

  return (
    <main className="bg-white min-h-screen pt-24 lg:pt-32" aria-label={`Nankang ${product.name}`}>
      {product.schema && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(product.schema) }} />
      )}

      {/* Breadcrumbs */}
      <div className="border-b border-black/10">
        <div className="max-w-[1720px] mx-auto px-6 py-6">
          <nav className="flex flex-wrap items-center gap-4 font-mono text-[12px] text-[#999999] uppercase tracking-[1.4px]">
            <Link href="/" className="hover:text-black transition-opacity">HOME</Link>
            <span>/</span>
            <Link href="/tyres" className="hover:text-black transition-opacity">TYRES</Link>
            <span>/</span>
            <Link href={`/tyres/${product.category}`} className="hover:text-black transition-opacity">{product.category}</Link>
            <span>/</span>
            <span className="text-black">{product.name}</span>
          </nav>
        </div>
      </div>

      <div className="max-w-[1720px] mx-auto px-6 py-20 lg:py-40">
        <div className="grid lg:grid-cols-2 gap-20 lg:gap-32">
          
          {/* Left: Sticky Image Gallery */}
          <div className="lg:pr-10">
            <div className="sticky top-40 bg-[#f8f8f8] border border-black/10 p-12 aspect-square flex items-center justify-center">
              {product.badge && (
                <div className="absolute top-8 left-8">
                  <span className="font-mono text-black text-[12px] uppercase tracking-[1.4px]">
                    [{product.badge}]
                  </span>
                </div>
              )}
              {/* Product Placeholder Graphic */}
              <div className="w-[85%] h-[85%] bg-white border border-black/10 rounded-full flex items-center justify-center relative shadow-sm">
                <span className="text-black/20 font-display text-4xl sm:text-6xl uppercase transform -rotate-12">{product.name}</span>
              </div>
            </div>
          </div>

          {/* Right: Product Details */}
          <div className="flex flex-col justify-center">
            <div className="mb-16">
              <div className="font-mono text-[#999999] text-[14px] uppercase tracking-[1.4px] mb-8">
                NANKANG • {product.subcategory || product.category}
              </div>
              <h1 className="font-display font-normal text-black uppercase leading-[1.0] mb-8" style={{ fontSize: "clamp(3rem, 6vw, 100px)" }}>
                {product.name}
              </h1>
              <p className="font-body text-[#999999] text-[16px] leading-[1.6] mb-12">
                {product.tagline}
              </p>
              <div className="font-mono text-black text-[14px] uppercase tracking-[1.4px] border border-black/20 px-6 py-3 inline-block mb-16">
                USAGE: {product.usageSplit}
              </div>
            </div>

            <div className="font-body text-[#999999] text-[16px] leading-[1.8] max-w-2xl mb-24">
              <p>{product.description}</p>
            </div>

            {/* Key Features */}
            <div className="mb-24">
              <h3 className="font-mono text-black text-[14px] uppercase tracking-[1.4px] mb-12">TECHNICAL FEATURES</h3>
              <ul className="space-y-6">
                {product.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-6">
                    <div className="w-[1px] h-[16px] bg-[#999999] mt-1" />
                    <span className="font-mono text-black text-[14px] uppercase tracking-[1.2px] leading-[1.6] max-w-xl">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Expert View */}
            <div className="border border-black/10 bg-[#fdfdfd] p-12 mb-24">
              <h3 className="font-mono text-black text-[14px] uppercase tracking-[1.4px] mb-8">
                EXPERT VIEW
              </h3>
              <p className="font-body text-[#666666] text-[16px] leading-[1.8]">
                "{product.expertView}"
              </p>
            </div>

            {/* CTA action block */}
            <div className="border border-black p-10 flex flex-col sm:flex-row items-center gap-8 justify-between sticky bottom-0 bg-white">
              <div>
                <div className="font-mono text-[#999999] text-[12px] uppercase tracking-[1.4px] mb-2">AVAILABILITY</div>
                <div className="font-mono text-black text-[18px] uppercase tracking-[1.4px]">
                  {product.priceFrom ? `FROM £${product.priceFrom}` : "POA"}
                </div>
              </div>
              
              <Link href="/tyre-finder" className="w-full sm:w-auto inline-flex items-center justify-center font-mono text-[14px] uppercase tracking-[1.4px] text-white bg-black border border-black rounded-[9999px] px-10 py-5 hover:bg-white hover:text-black transition-colors duration-300">
                VIEW SIZES & BUY
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom Data Table section */}
      <div className="border-t border-black/10 bg-white py-32 lg:py-48">
        <div className="max-w-[1720px] mx-auto px-6">
          <h2 className="font-display font-normal text-black uppercase leading-[1.0] mb-20" style={{ fontSize: "clamp(2rem, 5vw, 64px)" }}>
            SPECIFICATIONS
          </h2>
          
          <div className="overflow-x-auto">
            <table className="w-full text-left min-w-[800px]">
              <thead>
                <tr className="border-b border-black font-mono text-black text-[12px] uppercase tracking-[1.4px]">
                  <th className="py-6 px-4 font-normal">SIZE</th>
                  <th className="py-6 px-4 font-normal">LOAD</th>
                  <th className="py-6 px-4 font-normal">SPEED</th>
                  {product.category === "car" || product.category === "all-season" || product.category === "ev" ? (
                    <>
                      <th className="py-6 px-4 font-normal">FUEL</th>
                      <th className="py-6 px-4 font-normal">WET GRIP</th>
                      <th className="py-6 px-4 font-normal">NOISE</th>
                    </>
                  ) : (
                    <>
                      <th className="py-6 px-4 font-normal">SECTION WIDTH</th>
                      <th className="py-6 px-4 font-normal">OVERALL DIAMETER</th>
                      <th className="py-6 px-4 font-normal">RIM WIDTH</th>
                    </>
                  )}
                </tr>
              </thead>
              <tbody className="font-mono text-[#999999] text-[14px] uppercase tracking-[1.2px]">
                {product.sizes.map((size, index) => (
                  <tr key={index} className="border-b border-black/10 hover:bg-[#fafafa] transition-colors">
                    <td className="py-6 px-4 text-black">{size.size}</td>
                    <td className="py-6 px-4">{size.loadRating}</td>
                    <td className="py-6 px-4">{size.speedIndex}</td>
                    
                    {product.category === "car" || product.category === "all-season" || product.category === "ev" ? (
                      <>
                        <td className="py-6 px-4">{size.rrc || "-"}</td>
                        <td className="py-6 px-4">{size.wetGrip || "-"}</td>
                        <td className="py-6 px-4">{size.noiseDb ? `${size.noiseDb}DB (${size.noiseClass})` : "-"}</td>
                      </>
                    ) : (
                      <>
                        <td className="py-6 px-4">{size.sectionWidth ? `${size.sectionWidth}MM` : "-"}</td>
                        <td className="py-6 px-4">{size.overallDiameter ? `${size.overallDiameter}MM` : "-"}</td>
                        <td className="py-6 px-4">{size.rimWidth || "-"}</td>
                      </>
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  );
}

// FILE COMPLETE ✓
