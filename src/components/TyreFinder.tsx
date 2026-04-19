"use client";

import { useState } from "react";
import Link from "next/link";

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
    setTimeout(() => {
      setVehicleFound(true);
      setIsSearching(false);
    }, 1200);
  };

  const handleSizeSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!width || !profile || !rim) return;
    window.location.href = `/tyres?width=${width}&profile=${profile}&rim=${rim}&speed=${speed}`;
  };

  return (
    <div className="w-full max-w-4xl mx-auto border border-black/10 bg-white overflow-hidden shadow-2xl">
      {/* Tabs */}
      <div className="flex border-b border-[#999999]/30">
        <button
          onClick={() => setActiveTab("reg")}
          className={`flex-1 py-5 text-[14px] font-mono uppercase tracking-[1.4px] transition-colors ${
            activeTab === "reg"
              ? "bg-black text-white"
              : "bg-transparent text-[#999999] hover:text-black"
          }`}
          aria-selected={activeTab === "reg"}
          role="tab"
        >
          SEARCH BY REG
        </button>
        <button
          onClick={() => setActiveTab("size")}
          className={`flex-1 py-5 text-[14px] font-mono uppercase tracking-[1.4px] transition-colors ${
            activeTab === "size"
              ? "bg-black text-white"
              : "bg-transparent text-[#999999] hover:text-black"
          }`}
          aria-selected={activeTab === "size"}
          role="tab"
        >
          SEARCH BY SIZE
        </button>
      </div>

      <div className="p-8 sm:p-16">
        {/* Reg Search Panel */}
        {activeTab === "reg" && (
          <div role="tabpanel" className="animate-fade-in-down">
            {!vehicleFound ? (
              <form onSubmit={handleRegSearch} className="max-w-xl mx-auto text-center">
                <p className="font-mono text-[#999999] text-[12px] uppercase tracking-[1.4px] mb-8">
                  ENTER REGISTRATION FOR EXACT SPECIFICATION
                </p>
                <div className="flex flex-col sm:flex-row gap-4 mb-6">
                  <div className="flex-1 relative">
                    <input
                      type="text"
                      value={regInput}
                      onChange={(e) => setRegInput(e.target.value.toUpperCase().slice(0, 8))}
                      placeholder="REGISTRATION"
                      className="w-full px-6 py-4 bg-transparent border border-black/20 focus:border-black text-black font-mono text-[18px] tracking-[2px] transition-all outline-none text-center uppercase placeholder:text-[#999999] rounded-none"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={isSearching}
                    className="flex items-center justify-center font-mono text-[14px] uppercase tracking-[1.4px] text-white bg-black border border-black px-8 py-4 hover:bg-transparent hover:text-black disabled:bg-[#f5f5f5] disabled:text-[#999999] disabled:border-[#e5e5e5] transition-colors duration-300 whitespace-nowrap rounded-none flex-shrink-0"
                  >
                    {isSearching ? "LOCATING..." : "SEARCH"}
                  </button>
                </div>
              </form>
            ) : (
              <div className="border border-black/10 p-8">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-12">
                  <div className="flex items-center gap-6">
                    <div className="font-mono text-[24px] tracking-[2px] text-black px-4 py-2 border border-black/20">
                      {regInput}
                    </div>
                    <div>
                      <h3 className="font-display text-black text-[28px] uppercase leading-none mb-2">BMW 320D M SPORT</h3>
                      <p className="font-mono text-[#999999] text-[12px] uppercase tracking-[1.4px]">2019 • F30 FACELIFT • 18&quot; WHEELS</p>
                    </div>
                  </div>
                  <button onClick={() => setVehicleFound(false)} className="font-mono text-[#999999] text-[12px] uppercase tracking-[1.4px] hover:text-black underline underline-offset-4">RESET VEHICLE</button>
                </div>
                
                <h4 className="font-mono text-black text-[14px] uppercase tracking-[1.4px] mb-6">
                  ORIGINAL EQUIPMENT SIZES IDENTIFIED
                </h4>
                
                <div className="grid sm:grid-cols-2 gap-4 border-b border-black/10 pb-8 mb-8">
                  <div className="border border-black/10 p-6 flex flex-col justify-center items-center">
                    <div className="font-mono text-[#999999] text-[12px] uppercase tracking-[1.4px] mb-2">FRONT AXLE</div>
                    <div className="font-display text-black text-[32px] tracking-wide">225/45 R18 91Y</div>
                  </div>
                  <div className="border border-black/10 p-6 flex flex-col justify-center items-center">
                    <div className="font-mono text-[#999999] text-[12px] uppercase tracking-[1.4px] mb-2">REAR AXLE</div>
                    <div className="font-display text-black text-[32px] tracking-wide">255/40 R18 95Y</div>
                  </div>
                </div>

                <div className="text-center">
                  <Link href="/tyres/car?size=225/45r18" className="inline-flex items-center justify-center font-mono text-[14px] uppercase tracking-[1.4px] text-white bg-black border border-black rounded-full px-8 py-4 hover:bg-transparent hover:text-black transition-colors duration-300">
                    VIEW MATCHING NANKANG TYRES
                  </Link>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Size Search Panel */}
        {activeTab === "size" && (
          <form onSubmit={handleSizeSearch} role="tabpanel" className="animate-fade-in-down">
            <p className="font-mono text-[#999999] text-[12px] uppercase tracking-[1.4px] mb-12 text-center max-w-xl mx-auto">
              SELECT EXACT TYRE DIMENSIONS FROM SIDEWALL.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
              {/* Width */}
              <div className="space-y-4">
                <label className="font-mono text-[#999999] text-[12px] uppercase tracking-[1.4px] block">WIDTH</label>
                <select 
                  value={width} 
                  onChange={(e) => setWidth(e.target.value)}
                  className="w-full bg-white border border-black/20 focus:border-black text-black font-mono px-4 py-4 outline-none appearance-none cursor-pointer rounded-none"
                  required
                >
                  <option value="">SELECT</option>
                  <option value="195">195</option>
                  <option value="205">205</option>
                  <option value="215">215</option>
                  <option value="225">225</option>
                  <option value="235">235</option>
                  <option value="245">245</option>
                  <option value="255">255</option>
                  <option value="265">265</option>
                </select>
              </div>
              
              {/* Profile */}
              <div className="space-y-4">
                <label className="font-mono text-[#999999] text-[12px] uppercase tracking-[1.4px] block">PROFILE</label>
                <select 
                  value={profile} 
                  onChange={(e) => setProfile(e.target.value)}
                  className="w-full bg-white border border-black/20 focus:border-black text-black font-mono px-4 py-4 outline-none appearance-none cursor-pointer rounded-none"
                  required
                >
                  <option value="">SELECT</option>
                  <option value="30">30</option>
                  <option value="35">35</option>
                  <option value="40">40</option>
                  <option value="45">45</option>
                  <option value="50">50</option>
                  <option value="55">55</option>
                  <option value="60">60</option>
                  <option value="65">65</option>
                </select>
              </div>
              
              {/* Rim */}
              <div className="space-y-4">
                <label className="font-mono text-[#999999] text-[12px] uppercase tracking-[1.4px] block">RIM</label>
                <select 
                  value={rim} 
                  onChange={(e) => setRim(e.target.value)}
                  className="w-full bg-white border border-black/20 focus:border-black text-black font-mono px-4 py-4 outline-none appearance-none cursor-pointer rounded-none"
                  required
                >
                  <option value="">SELECT</option>
                  <option value="15">15&quot;</option>
                  <option value="16">16&quot;</option>
                  <option value="17">17&quot;</option>
                  <option value="18">18&quot;</option>
                  <option value="19">19&quot;</option>
                  <option value="20">20&quot;</option>
                  <option value="21">21&quot;</option>
                  <option value="22">22&quot;</option>
                </select>
              </div>

              {/* Speed Rating */}
              <div className="space-y-4">
                <label className="font-mono text-[#999999] text-[12px] uppercase tracking-[1.4px] block">SPEED</label>
                <select 
                  value={speed} 
                  onChange={(e) => setSpeed(e.target.value)}
                  className="w-full bg-white border border-black/20 focus:border-black text-black font-mono px-4 py-4 outline-none appearance-none cursor-pointer rounded-none"
                >
                  <option value="">ANY</option>
                  <option value="H">H</option>
                  <option value="V">V</option>
                  <option value="W">W</option>
                  <option value="Y">Y</option>
                </select>
              </div>
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="inline-flex items-center justify-center font-mono text-[14px] uppercase tracking-[1.4px] text-white bg-black border border-black rounded-full px-12 py-4 hover:bg-white hover:text-black transition-colors duration-300 shadow-xl"
              >
                FIND INVENTORY
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

// FILE COMPLETE ✓
