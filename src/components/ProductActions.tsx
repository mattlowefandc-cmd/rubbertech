"use client";

import React, { useState } from "react";
import { useCart } from "@/context/CartContext";
import { Minus, Plus, ShoppingBag, Zap } from "lucide-react";
import { useRouter } from "next/navigation";

interface ProductActionsProps {
  product: {
    id: string;
    name: string;
    category: string;
    slug: string;
    priceFrom: number;
    sizes: { size: string; loadRating: string; speedIndex: string; wetGrip?: string }[];
  };
}

export default function ProductActions({ product }: ProductActionsProps) {
  const { addItem, setIsCartOpen } = useCart();
  const router = useRouter();
  
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]?.size || "");
  const [quantity, setQuantity] = useState(4); // Default to a full set
  const [isAdding, setIsAdding] = useState(false);

  const handleAddToCart = () => {
    setIsAdding(true);
    addItem({
      id: product.id,
      name: product.name,
      category: product.category,
      slug: product.slug,
      price: product.priceFrom, // Simplifying price logic for now
      size: selectedSize,
    }, quantity);

    setTimeout(() => {
      setIsAdding(false);
      setIsCartOpen(true);
    }, 600);
  };

  const handleBuyNow = () => {
    addItem({
      id: product.id,
      name: product.name,
      category: product.category,
      slug: product.slug,
      price: product.priceFrom,
      size: selectedSize,
    }, quantity);
    router.push("/checkout");
  };

  return (
    <div className="space-y-12">
      {/* Size Selector */}
      <div className="space-y-4">
        <label className="font-mono text-black text-[12px] uppercase tracking-[2px] block border-b border-black/5 pb-2">
          SELECT SPECIFICATION
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {product.sizes.map((s) => (
            <button
              key={s.size}
              onClick={() => setSelectedSize(s.size)}
              className={`p-4 border font-mono text-[13px] text-left transition-all ${
                selectedSize === s.size 
                ? "border-black bg-black text-white" 
                : "border-black/10 hover:border-black/30"
              }`}
            >
              <div className="uppercase tracking-[1px]">{s.size}</div>
              <div className={`text-[10px] mt-1 ${selectedSize === s.size ? "text-white/60" : "text-[#999999]"}`}>
                {s.loadRating}{s.speedIndex} // GRIP: {s.wetGrip || "A"}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Quantity & Actions */}
      <div className="flex flex-col sm:flex-row gap-6 items-center">
        {/* Quantity */}
        <div className="flex items-center border border-black/10 h-[64px]">
          <button 
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
            className="px-6 h-full hover:bg-black/5 transition-colors"
          >
            <Minus size={16} />
          </button>
          <span className="w-12 text-center font-mono text-[16px]">{quantity}</span>
          <button 
             onClick={() => setQuantity(quantity + 1)}
             className="px-6 h-full hover:bg-black/5 transition-colors"
          >
            <Plus size={16} />
          </button>
        </div>

        {/* Add to Cart */}
        <button
          onClick={handleAddToCart}
          disabled={isAdding}
          className="flex-1 w-full h-[64px] bg-white border border-black text-black font-mono text-[13px] uppercase tracking-[2px] flex items-center justify-center gap-4 hover:bg-black hover:text-white transition-all disabled:opacity-50"
        >
          {isAdding ? "ARCHIVING..." : (
            <>
              <ShoppingBag size={18} strokeWidth={1.5} />
              ADD TO BAG
            </>
          )}
        </button>

        {/* Buy Now */}
        <button
          onClick={handleBuyNow}
          className="flex-1 w-full h-[64px] bg-black border border-black text-white font-mono text-[13px] uppercase tracking-[2px] flex items-center justify-center gap-4 hover:bg-white hover:text-black transition-all shadow-xl group"
        >
          <Zap size={18} className="fill-white group-hover:fill-black transition-colors" />
          BUY NOW
        </button>
      </div>

      <div className="font-mono text-[#999999] text-[10px] uppercase tracking-[1px] text-center sm:text-left">
        INCLUSIVE OF VAT // ELIGIBLE FOR NEXT DAY DISPATCH BY 14:00
      </div>
    </div>
  );
}
