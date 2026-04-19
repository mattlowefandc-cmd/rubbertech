"use client";

import { useState } from "react";
import Link from "next/link";
import { Search, Loader2, CheckCircle, ArrowRight } from "lucide-react";

export default function TyreFinder() {
  const [activeTab, setActiveTab] = useState<"reg" | "size">("reg");
  const [regInput, setRegInput] = useState("");
  const [vehicleFound, setVehicleFound] = useState(false);
  const [isSearching, setIsSearching] = useState(false);
  
  // Size Selection State
  const [width, setWidth] = useState("");
  const [profile, setProfile] = useState("");
  const [rim, setRim] = useState("");
  const [speed, setSpeed] = useState("");

  const handleRegSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!regInput) return;
    setIsSearching(true);
    // Simulate DVLA lookup
    setTimeout(() => {
      setVehicleFound(true);
      setIsSearching(false);
    }, 1800);
  };

  const handleSizeSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!width || !profile || !rim) return;
    window.location.href = `/tyres?width=${width}&profile=${profile}&rim=${rim}&speed=${speed}`;
  };

  return (
    <div className="w-full max-w-5xl mx-auto border border-black/10 bg-white overflow-hidden shadow-[0_40px_100px_-20px_rgba(0,0,0,0.05)]">
      {/* Tab Switcher */}
      <div className="flex border-b border-black/10">
        <button
          onClick={() => { setActiveTab("reg"); setVehicleFound(false); }}
          className={`flex-1 py-6 text-[11px] font-mono uppercase tracking-[2px] transition-all relative ${
            activeTab === "reg" ? "text-black" : "text-[#999999] hover:text-black"
          }`}
        >
          FITMENT BY REGISTRATION
          {activeTab === "reg" && <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-black" />}
        </button>
        <button
          onClick={() => setActiveTab("size")}
          className={`flex-1 py-6 text-[11px] font-mono uppercase tracking-[2px] transition-all relative ${
            activeTab === "size" ? "text-black" : "text-[#999999] hover:text-black"
          }`}
        >
          FITMENT BY DIMENSIONS
          {activeTab === "size" && <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-black" />}
        </button>
      </div>

      <div className="p-10 sm:p-20">
        {/* Registration Panel */}
        {activeTab === "reg" && (
          <div className="animate-in fade-in duration-700">
            {!vehicleFound ? (
              <form onSubmit={handleRegSearch} className="max-w-xl mx-auto">
                <div className="text-center mb-12">
                   <div className="font-mono text-[#999999] text-[10px] uppercase tracking-[2px] mb-4">ARCHIVE_LOOKUP // DVLA_DIRECT</div>
                   <h3 className="font-display text-black text-[32px] uppercase leading-none">IDENTIFY VEHICLE</h3>
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
              <div className="animate-in slide-in-from-bottom-4 duration-700">
                <div className="flex flex-col lg:flex-row gap-12 items-center mb-16 px-6">
                  <div className="flex-1">
                     <div className="font-mono text-[#999999] text-[10px] uppercase tracking-[2px] mb-4 flex items-center gap-2">
                        <CheckCircle size={12} className="text-black" /> VEHICLE_VERIFIED_SUCCESS
                     </div>
                     <h3 className="font-display text-black text-[56px] uppercase leading-[0.9] mb-4">MERCEDES-BENZ <br/> E-CLASS (W213)</h3>
                     <p className="font-mono text-[#999999] text-[12px] uppercase tracking-[2.5px]">2022 // E220D AMG LINE // 19&quot; WHEEL PACK</p>
                  </div>
                  <div className="flex flex-col items-end gap-4">
                     <div className="font-mono text-black text-[24px] tracking-[4px] border border-black/20 p-4 bg-[#fcfcfc]">
                        {regInput}
                     </div>
                     <button onClick={() => setVehicleFound(false)} className="font-mono text-[#999999] text-[10px] uppercase tracking-[1px] hover:text-black border-b border-black/10">RESET SEARCH_QUERY</button>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-8 border-t border-black/10 pt-16">
                  <div className="bg-[#fcfcfc] border border-black/5 p-10 group hover:border-black transition-colors">
                    <div className="font-mono text-[#999999] text-[10px] uppercase tracking-[2px] mb-4">FRONT_AXLE // PRIMARY</div>
                    <div className="font-display text-black text-[36px] mb-4">245/40 R19 98Y</div>
                    <Link href="/tyres/car?size=245/40R19" className="font-mono text-black text-[12px] uppercase tracking-[1px] flex items-center gap-2 group-hover:gap-4 transition-all">
                       MATCHING INVENTORY <ArrowRight size={14} />
                    </Link>
                  </div>
                  <div className="bg-[#fcfcfc] border border-black/5 p-10 group hover:border-black transition-colors">
                    <div className="font-mono text-[#999999] text-[10px] uppercase tracking-[2px] mb-4">REAR_AXLE // STAGGERED</div>
                    <div className="font-display text-black text-[36px] mb-4">275/35 R19 100Y</div>
                    <Link href="/tyres/car?size=275/35R19" className="font-mono text-black text-[12px] uppercase tracking-[1px] flex items-center gap-2 group-hover:gap-4 transition-all">
                       MATCHING INVENTORY <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Dimension Panel */}
        {activeTab === "size" && (
          <form onSubmit={handleSizeSearch} className="animate-in fade-in duration-700">
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
                className="inline-flex items-center justify-center font-mono text-[12px] uppercase tracking-[2px] text-white bg-black border border-black rounded-full px-16 py-6 hover:bg-transparent hover:text-black transition-all shadow-xl"
              >
                IDENTIFY INVENTORY
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
