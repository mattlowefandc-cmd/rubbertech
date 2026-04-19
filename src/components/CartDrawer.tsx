"use client";

import React, { useEffect, useRef } from "react";
import { X, ShoppingBag, Trash2, Plus, Minus, ArrowRight } from "lucide-react";
import { useCart } from "@/context/CartContext";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function CartDrawer() {
  const { items, removeItem, updateQuantity, subtotal, isCartOpen, setIsCartOpen, itemCount } = useCart();
  const drawerRef = useRef<HTMLDivElement>(null);

  // Close on Escape
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsCartOpen(false);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [setIsCartOpen]);

  // Lock scroll when open
  useEffect(() => {
    if (isCartOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isCartOpen]);

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsCartOpen(false)}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[9998]"
          />

          {/* Drawer */}
          <motion.div
            ref={drawerRef}
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-full max-w-[500px] bg-white z-[9999] shadow-2xl flex flex-col"
          >
            {/* Header */}
            <div className="p-8 border-b border-black/5 flex justify-between items-center bg-white">
              <div className="flex items-center gap-4">
                <ShoppingBag size={20} strokeWidth={1.5} />
                <h2 className="font-mono text-[14px] uppercase tracking-[2px]">YOUR SHOPPING BAG ({itemCount})</h2>
              </div>
              <button
                onClick={() => setIsCartOpen(false)}
                className="p-2 hover:bg-black/5 transition-colors group"
                aria-label="Close cart"
              >
                <X size={24} strokeWidth={1} className="group-hover:rotate-90 transition-transform duration-300" />
              </button>
            </div>

            {/* Scrollable Content */}
            <div className="flex-grow overflow-y-auto p-8 custom-scrollbar">
              {items.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center space-y-8">
                  <div className="w-24 h-24 rounded-full bg-[#fcfcfc] border border-black/5 flex items-center justify-center">
                    <ShoppingBag size={32} strokeWidth={1} className="text-[#999999]" />
                  </div>
                  <div>
                    <h3 className="font-display text-[24px] uppercase mb-4">ARCHIVE IS EMPTY</h3>
                    <p className="font-mono text-[#999999] text-[12px] uppercase tracking-[1px] max-w-[240px]">
                      YOUR CURRENT SELECTION IS VACANT. EXPLORE THE RANGE TO BEGIN.
                    </p>
                  </div>
                  <button
                    onClick={() => setIsCartOpen(false)}
                    className="font-mono text-[11px] uppercase tracking-[2px] border border-black px-10 py-4 hover:bg-black hover:text-white transition-all"
                  >
                    RETURN TO GALLERY
                  </button>
                </div>
              ) : (
                <div className="space-y-12">
                  {items.map((item) => (
                    <div key={`${item.id}-${item.size}`} className="flex gap-8 group">
                      {/* Placeholder Image */}
                      <div className="w-24 h-24 bg-[#fcfcfc] border border-black/5 flex-shrink-0 flex items-center justify-center relative overflow-hidden group-hover:bg-[#f5f5f5] transition-colors">
                        <span className="font-display text-black/5 text-[24px] uppercase font-bold tracking-tighter rotate-90">{item.name}</span>
                      </div>

                      <div className="flex-grow flex flex-col justify-between">
                        <div className="flex justify-between items-start">
                          <div>
                            <div className="font-mono text-[#999999] text-[10px] uppercase tracking-[1.4px] mb-1">
                              {item.category} // {item.id}
                            </div>
                            <h4 className="font-display text-[18px] uppercase leading-none group-hover:underline underline-offset-4 decoration-black/20">
                              {item.name}
                            </h4>
                            <div className="font-mono text-black text-[11px] uppercase tracking-[1px] mt-2 border-l border-black/10 pl-3">
                              SIZE: {item.size}
                            </div>
                          </div>
                          <div className="font-mono text-black text-[13px] uppercase">
                            £{item.price.toFixed(2)}
                          </div>
                        </div>

                        <div className="flex justify-between items-center mt-6">
                          <div className="flex items-center border border-black/10">
                            <button
                              onClick={() => updateQuantity(item.id, item.size, item.quantity - 1)}
                              className="p-2 hover:bg-black/5 transition-colors"
                            >
                              <Minus size={14} />
                            </button>
                            <span className="px-4 font-mono text-[13px]">{item.quantity}</span>
                            <button
                              onClick={() => updateQuantity(item.id, item.size, item.quantity + 1)}
                              className="p-2 hover:bg-black/5 transition-colors"
                            >
                              <Plus size={14} />
                            </button>
                          </div>
                          <button
                            onClick={() => removeItem(item.id, item.size)}
                            className="text-[#999999] hover:text-black transition-colors"
                            aria-label="Remove item"
                          >
                            <Trash2 size={16} strokeWidth={1.5} />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="p-8 border-t border-black/5 space-y-8 bg-white">
                <div className="space-y-4">
                  <div className="flex justify-between items-baseline">
                    <span className="font-mono text-[#999999] text-[12px] uppercase tracking-[2px]">SUBTOTAL ARCHIVE</span>
                    <span className="font-display text-[24px] uppercase text-black">£{subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between items-baseline">
                    <span className="font-mono text-[#999999] text-[10px] uppercase tracking-[1px]">SHIPPING ESTIMATE</span>
                    <span className="font-mono text-[#999999] text-[10px] uppercase tracking-[1px]">CALCULATED AT PROTOCOL</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-4">
                  <Link
                    href="/checkout"
                    onClick={() => setIsCartOpen(false)}
                    className="w-full bg-black text-white py-6 px-4 font-mono text-[13px] uppercase tracking-[2px] flex items-center justify-center gap-4 hover:bg-white hover:text-black border border-black transition-all group"
                  >
                    PROCEED TO CHECKOUT <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
                  </Link>
                </div>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
