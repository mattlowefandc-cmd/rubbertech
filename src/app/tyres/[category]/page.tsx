import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProductsByCategory, TyreCategory } from "@/data/products";

export async function generateMetadata({ params }: { params: { category: string } }): Promise<Metadata> {
  const categoryStr = params.category.toUpperCase().replace("-", " ");
  return {
    title: `${categoryStr} TYRES | RUBBER TECH`,
    description: `Shop our range of Nankang ${categoryStr} tyres. Official UK supplier.`,
  };
}

export default function CategoryPage({ params }: { params: { category: string } }) {
  // Validate category
  const validCategories = ["car", "motorsport", "4x4", "suv", "ev", "commercial", "winter", "all-season", "motorcycle", "retro", "runflat"];
  if (!validCategories.includes(params.category)) {
    notFound();
  }

  const catKey = params.category as TyreCategory;
  const products = getProductsByCategory(catKey);
  const categoryTitle = params.category.toUpperCase().replace("-", " ");

  return (
    <main className="bg-white min-h-screen pt-40 pb-32">
      <div className="max-w-[1720px] mx-auto px-6">
        
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-4 font-mono text-[12px] text-[#999999] uppercase tracking-[1.4px] mb-16">
          <Link href="/" className="hover:text-black transition-colors">HOME</Link>
          <span>/</span>
          <Link href="/tyres" className="hover:text-black transition-colors">TYRES</Link>
          <span>/</span>
          <span className="text-black">{categoryTitle}</span>
        </nav>

        {/* Header */}
        <div className="mb-32">
          <div className="font-mono text-[#999999] text-[14px] uppercase tracking-[1.4px] mb-8">CATEGORY</div>
          <h1 className="font-display font-normal text-black uppercase leading-[1.0] mb-8" style={{ fontSize: "clamp(3rem, 8vw, 110px)" }}>
            {categoryTitle}
          </h1>
          <p className="font-mono text-[#999999] text-[14px] uppercase tracking-[1.4px] max-w-2xl leading-[1.8]">
            {products.length} {products.length === 1 ? 'PRODUCT' : 'PRODUCTS'} AVAILABLE IN THIS CATEGORY. BUILT FOR SPECIFIC PERFORMANCE REQUIREMENTS.
          </p>
        </div>

        {/* Product Grid */}
        {products.length > 0 ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product) => (
              <Link
                key={product.id}
                href={`/tyres/${product.category}/${product.slug}`}
                className="group flex flex-col h-full border border-black/10 hover:border-black transition-colors duration-300 bg-white"
              >
                {/* Image Silhoutte */}
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
        ) : (
          <div className="border border-black/10 p-12 text-center">
            <p className="font-mono text-black text-[14px] uppercase tracking-[1.4px]">NO TYRES CURRENTLY LISTED IN THIS CATEGORY.</p>
          </div>
        )}
      </div>
    </main>
  );
}
