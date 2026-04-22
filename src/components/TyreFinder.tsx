"use client";

import { useState } from "react";
import Link from "next/link";
import { Search, Loader2, CheckCircle, ArrowRight, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { getProductsBySize, type TyreProduct } from "@/data/products";

export default function TyreFinder() {
  const [activeTab, setActiveTab] = useState<"reg" | "size">("reg");
  const [regInput, setRegInput] = useState("");
  const [vehicleData, setVehicleData] = useState<any>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [isSearching, setIsSearching] = useState(false);
  
  // Size Selection State
  const [width, setWidth] = useState("");
  const [profile, setProfile] = useState("");
  const [rim, setRim] = useState("");
  const [speed, setSpeed] = useState("");

  const handleRegSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!regInput) return;
    setIsSearching(true);
    setErrorMsg(null);
    setVehicleData(null);

    try {
      const res = await fetch(`/api/vehicle?reg=${encodeURIComponent(regInput)}`);
      const data = await res.json();
      
      if (data.success) {
        setVehicleData(data.data);
      } else {
        setErrorMsg(data.error || "Vehicle not found.");
      }
    } catch (err) {
      setErrorMsg("Connection error. Please try again or search by size.");
    } finally {
      setIsSearching(false);
    }
  };

  const handleSizeSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!width || !profile || !rim) return;
    window.location.href = `/tyres?width=${width}&profile=${profile}&rim=${rim}&speed=${speed}`;
  };

  const SuggestedProducts = ({ size }: { size: string }) => {
    const products = getProductsBySize(size).slice(0, 3);
    if (products.length === 0) return null;

    return (
      <div className="mt-8 space-y-4">
        <div className="font-mono text-[9px] text-black/40 uppercase tracking-[1.5px]">COMPATIBLE_NANKANG_RANGE</div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {products.map((p) => (
            <Link 
              key={p.id} 
              href={`/tyres/${p.category}/${p.slug}`}
              className="group block p-4 bg-white border border-black/5 hover:border-black transition-all"
            >
              <div className="aspect-square mb-3 overflow-hidden bg-[#f9f9f9]">
                <img src={p.image} alt={p.name} className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500" />
              </div>
              <div className="font-display text-[14px] text-black uppercase mb-1">{p.name}</div>
              <div className="font-mono text-[9px] text-[#999999] uppercase tracking-[1px]">{p.subcategory || p.category}</div>
            </Link>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="w-full max-w-5xl mx-auto border border-black/10 bg-white overflow-hidden shadow-[0_40px_100px_-20px_rgba(0,0,0,0.05)]">
      {/* Tab Switcher */}
      <div className="flex border-b border-black/10">
        <button
          onClick={() => { setActiveTab("reg"); setVehicleData(null); setErrorMsg(null); }}
          className={`flex-1 py-6 text-[11px] font-mono uppercase tracking-[2px] transition-all relative ${
            activeTab === "reg" ? "text-black" : "text-[#999999] hover:text-black"
          }`}
        >
          FITMENT BY REGISTRATION
          {activeTab === "reg" && <motion.div layoutId="tab-underline" className="absolute bottom-0 left-0 right-0 h-[2px] bg-black" />}
        </button>
        <button
          onClick={() => setActiveTab("size")}
          className={`flex-1 py-6 text-[11px] font-mono uppercase tracking-[2px] transition-all relative ${
            activeTab === "size" ? "text-black" : "text-[#999999] hover:text-black"
          }`}
        >
          FITMENT BY DIMENSIONS
          {activeTab === "size" && <motion.div layoutId="tab-underline" className="absolute bottom-0 left-0 right-0 h-[2px] bg-black" />}
        </button>
      </div>

      <div className="p-8 sm:p-16 lg:p-20">
        <AnimatePresence mode="wait">
          {/* Registration Panel */}
          {activeTab === "reg" && (
            <motion.div 
              key="reg-panel"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
            >
              {!vehicleData ? (
                <form onSubmit={handleRegSearch} className="max-w-xl mx-auto">
                  <div className="text-center mb-12">
                     <div className="font-mono text-[#999999] text-[10px] uppercase tracking-[2px] mb-4">API_LOOKUP // DVLA_CONNECTED</div>
                     <h3 className="font-display text-black text-[32px] uppercase leading-none">IDENTIFY VEHICLE</h3>
                     {errorMsg && (
                        <motion.div 
                          initial={{ opacity: 0, scale: 0.95 }}
                          animate={{ opacity: 1, scale: 1 }}
                          className="mt-6 text-red-600 font-mono text-[11px] uppercase tracking-[1px] border border-red-200 bg-red-50 py-3 px-4 flex justify-between items-center"
                        >
                          {errorMsg}
                          <X size={14} className="cursor-pointer" onClick={() => setErrorMsg(null)} />
                        </motion.div>
                     )}
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-4">
                    <div className="flex-1 relative group">
                      <div className="absolute left-6 top-1/2 -translate-y-1/2 text-black/20 group-focus-within:text-black transition-colors">
                         <Search size={18} />
                      </div>
                      <input
                        type="text"
                        value={regInput}
                        onChange={(e) => setRegInput(e.target.value.toUpperCase().slice(0, 8))}
                        placeholder="ENTER REG"
                        className="w-full pl-14 pr-6 py-5 bg-[#fcfcfc] border border-black/10 focus:border-black text-black font-mono text-[20px] tracking-[4px] transition-all outline-none rounded-none uppercase placeholder:text-[#cccccc]"
                        required
                        autoFocus
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={isSearching}
                      className="flex items-center justify-center font-mono text-[12px] uppercase tracking-[2px] text-white bg-black border border-black px-10 py-5 hover:bg-white hover:text-black disabled:bg-[#f5f5f5] disabled:text-[#999999] disabled:border-black/5 transition-all flex-shrink-0"
                    >
                      {isSearching ? <Loader2 className="animate-spin" size={18} /> : "VALIDATE"}
                    </button>
                  </div>
                  <p className="mt-8 font-mono text-[10px] text-[#999999] text-center uppercase tracking-[1px]">UK SPECIFICATION VEHICLES ONLY // DATA ENCRYPTED</p>
                </form>
              ) : (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-12"
                >
                  <div className="flex flex-col lg:flex-row gap-8 items-start justify-between border-b border-black/5 pb-12">
                    <div className="flex-1">
                       <div className="font-mono text-[#999999] text-[10px] uppercase tracking-[2px] mb-4 flex items-center gap-2">
                          <CheckCircle size={12} className="text-black" /> VEHICLE_VERIFIED_SUCCESS
                       </div>
                       <h3 className="font-display text-black text-[56px] uppercase leading-[0.9] mb-4">
                         {vehicleData.make} <br className="hidden sm:block" /> {vehicleData.model}
                       </h3>
                       <div className="flex flex-wrap gap-x-6 gap-y-2">
                         <div className="font-mono text-[#999999] text-[12px] uppercase tracking-[2px]">YR: {vehicleData.year || "N/A"}</div>
                         {vehicleData.engineSize && (
                           <div className="font-mono text-[#999999] text-[12px] uppercase tracking-[2px]">ENG: {vehicleData.engineSize}</div>
                         )}
                         <div className="font-mono text-[#999999] text-[12px] uppercase tracking-[2px]">VR: {vehicleData.variant?.slice(0, 15) || "STD"}</div>
                       </div>
                    </div>
                    <div className="flex flex-col items-start lg:items-end gap-4 w-full sm:w-auto">
                       <div className="font-mono text-black text-[28px] tracking-[6px] border border-black/20 p-6 bg-[#fcfcfc] shadow-inner w-full sm:w-auto text-center font-bold">
                          {vehicleData.registration || regInput}
                       </div>
                       <button onClick={() => setVehicleData(null)} className="font-mono text-[#999999] text-[10px] uppercase tracking-[1px] hover:text-black border-b border-black/10 pb-1">START NEW SEARCH</button>
                    </div>
                  </div>
                  
                  <div className={`grid ${vehicleData.rearTyres ? 'md:grid-cols-2' : 'grid-cols-1'} gap-12`}>
                    {vehicleData.frontTyres && (
                      <div className="bg-[#fcfcfc] border border-black/5 p-8 sm:p-12 group hover:border-black transition-colors relative overflow-hidden">
                        <div className="relative z-10">
                          <div className="font-mono text-[#999999] text-[10px] uppercase tracking-[2px] mb-6">{vehicleData.frontTyres.label || "FRONT_AXLE // PRIMARY"}</div>
                          <div className="font-display text-black text-[42px] mb-6 leading-none">{vehicleData.frontTyres.size} {vehicleData.frontTyres.speed}</div>
                          
                          <Link href={`/tyres/car?size=${vehicleData.frontTyres.slug}`} className="font-mono text-black text-[12px] uppercase tracking-[1.5px] border-b border-black/20 pb-1 hover:border-black transition-colors inline-block mb-8">
                             SHOP FULL INVENTORY →
                          </Link>

                          <SuggestedProducts size={vehicleData.frontTyres.size} />
                        </div>
                      </div>
                    )}

                    {vehicleData.rearTyres && (
                      <div className="bg-[#fcfcfc] border border-black/5 p-8 sm:p-12 group hover:border-black transition-colors relative overflow-hidden">
                        <div className="relative z-10">
                          <div className="font-mono text-[#999999] text-[10px] uppercase tracking-[2px] mb-6">{vehicleData.rearTyres.label || "REAR_AXLE // STAGGERED"}</div>
                          <div className="font-display text-black text-[42px] mb-6 leading-none">{vehicleData.rearTyres.size} {vehicleData.rearTyres.speed}</div>
                          
                          <Link href={`/tyres/car?size=${vehicleData.rearTyres.slug}`} className="font-mono text-black text-[12px] uppercase tracking-[1.5px] border-b border-black/20 pb-1 hover:border-black transition-colors inline-block mb-8">
                             SHOP FULL INVENTORY →
                          </Link>

                          <SuggestedProducts size={vehicleData.rearTyres.size} />
                        </div>
                      </div>
                    )}
                  </div>
                </motion.div>
              )}
            </motion.div>
          )}

          {/* Dimension Panel */}
          {activeTab === "size" && (
            <motion.form 
              key="size-panel"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
              onSubmit={handleSizeSearch} 
              className=""
            >
              <div className="text-center mb-16">
                 <div className="font-mono text-[#999999] text-[10px] uppercase tracking-[2px] mb-4">DIMENSIONAL_ARRAY // MANUAL_ENTRY</div>
                 <h3 className="font-display text-black text-[32px] uppercase leading-none">SIDEWALL DATA</h3>
              </div>
              
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                {[
                  { label: "WIDTH", val: width, set: setWidth, opts: ["195", "205", "215", "225", "235", "245", "255", "265", "275", "285"] },
                  { label: "PROFILE", val: profile, set: setProfile, opts: ["30", "35", "40", "45", "50", "55", "60", "65", "70", "75"] },
                  { label: "RIM", val: rim, set: setRim, opts: ["15", "16", "17", "18", "19", "20", "21", "22", "23"] },
                  { label: "SPEED", val: speed, set: setSpeed, opts: ["H", "V", "W", "Y", "(Y)", "ANY"] },
                ].map((field) => (
                  <div key={field.label} className="space-y-4">
                    <label className="font-mono text-black text-[10px] uppercase tracking-[2px] block border-b border-black/5 pb-2">{field.label}</label>
                    <select 
                      value={field.val} 
                      onChange={(e) => field.set(e.target.value)}
                      className="w-full bg-[#fcfcfc] border border-black/10 focus:border-black text-black font-mono text-[16px] px-4 py-4 outline-none appearance-none cursor-pointer rounded-none transition-colors"
                      required
                    >
                      <option value="">SELECT</option>
                      {field.opts.map(o => <option key={o} value={o}>{o}{field.label === "RIM" ? '"' : ""}</option>)}
                    </select>
                  </div>
                ))}
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center font-mono text-[13px] uppercase tracking-[2px] text-white bg-black border border-black rounded-full px-16 py-6 hover:bg-transparent hover:text-black transition-all shadow-xl"
                >
                  IDENTIFY INVENTORY
                </button>
              </div>
            </motion.form>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
