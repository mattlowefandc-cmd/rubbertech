"use client";

import { useRef, useEffect, useState } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TyreSequence, { type TyreSequenceHandle } from "@/components/TyreSequence";
import { featuredProducts } from "@/data/products";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// =============================================================================
// SCENE 1 — HERO (Pinned Immersive Scroll)
// =============================================================================
function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const pinRef = useRef<HTMLDivElement>(null);
  const tyreRef = useRef<TyreSequenceHandle>(null);
  
  // Separate refs for mobile and desktop headlines to avoid dual-assignment bug
  const mobileH1Ref = useRef<HTMLHeadingElement>(null);
  const mobileH2Ref = useRef<HTMLHeadingElement>(null);
  const desktopH1Ref = useRef<HTMLHeadingElement>(null);
  const desktopH2Ref = useRef<HTMLHeadingElement>(null);
  const subcopyRef = useRef<HTMLParagraphElement>(null);
  const ctasRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || !pinRef.current) return;

    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=3000",
          pin: pinRef.current,
          scrub: prefersReducedMotion ? false : 1,
        }
      });

      // Animate tyre sequence alongside scroll
      const proxy = { frameIndex: 0 };
      tl.to(proxy, {
        frameIndex: 1,
        ease: "none",
        duration: 1,
        onUpdate: () => {
          tyreRef.current?.setScrubProgress(proxy.frameIndex);
        }
      }, 0);

      // Determine which headline refs to use based on viewport
      const isMobile = window.innerWidth < 640;
      const h1 = isMobile ? mobileH1Ref.current : desktopH1Ref.current;
      const h2 = isMobile ? mobileH2Ref.current : desktopH2Ref.current;

      // 0-20%: Headline 1 fades in from bottom
      tl.fromTo(h1, 
        { y: 40, opacity: 0 }, 
        { y: 0, opacity: 1, duration: 0.15 }, 
        0.05
      );

      // 25-40%: Headline 1 out, Headline 2 in
      tl.to(h1, { y: -40, opacity: 0, duration: 0.1 }, 0.25);
      tl.fromTo(h2,
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.15 },
        0.30
      );

      // 45-60%: Subcopy fades in
      tl.fromTo(subcopyRef.current,
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.15 },
        0.45
      );

      // 65-80%: CTAs fade in
      tl.fromTo(ctasRef.current,
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.15 },
        0.65
      );
      
      // 85-100%: Hold frame
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} id="hero" className="relative w-full bg-white" aria-label="Hero section">
      {/* Pinned section that stays in viewport */}
      <div ref={pinRef} className="h-screen w-full relative flex items-center justify-center overflow-hidden bg-white">
        
        {/* Transparent Tyre Sequence centered */}
        <div className="absolute inset-0 z-0 bg-white">
          <TyreSequence
            ref={tyreRef}
            mode="scrub"
            scrollProgress={0} 
            width={2000}
            height={1200}
            className="w-full h-full -translate-y-12 sm:translate-y-0"
          />
        </div>

        {/* Foreground Content */}
        <div className="absolute inset-0 z-10 w-full max-w-[1720px] mx-auto px-6 h-full flex flex-col justify-between py-20 sm:justify-end sm:pb-32 pointer-events-none">
          
          {/* Mobile Headlines (< 640px) */}
          <div className="relative z-20 sm:hidden">
            <div className="relative min-h-[100px]">
              <h1
                ref={mobileH1Ref}
                className="absolute top-0 left-0 font-display font-normal text-black uppercase leading-[1.0] opacity-0 pointer-events-auto break-words"
                style={{ fontSize: "clamp(1.5rem, 10vw, 160px)" }}
              >
                PRECISION<br />RUBBER
              </h1>
              <h2
                ref={mobileH2Ref}
                className="absolute top-0 left-0 font-display font-normal text-black uppercase leading-[1.0] opacity-0 pointer-events-auto break-words"
                style={{ fontSize: "clamp(1.4rem, 8vw, 120px)" }}
              >
                ENGINEERED FOR<br />PERFORMANCE
              </h2>
            </div>
          </div>

          {/* Desktop Headlines (>= 640px) */}
          <div className="max-w-7xl relative sm:block hidden">
            <h1
              ref={desktopH1Ref}
              className="absolute bottom-full mb-12 sm:mb-8 font-display font-normal text-black uppercase leading-[1.0] sm:-ml-2 pointer-events-auto break-words"
              style={{ 
                fontSize: "clamp(2rem, 8vw, 160px)", 
                letterSpacing: "-0.01em", 
                opacity: 0,
                textShadow: "0 0 15px rgba(255,255,255,0.9), 0 0 5px rgba(255,255,255,0.5)"
              }}
            >
              PRECISION
              <br />
              RUBBER
            </h1>

            <h2
              ref={desktopH2Ref}
              className="absolute bottom-full mb-12 sm:mb-8 font-display font-normal text-black uppercase leading-[1.0] sm:-ml-2 pointer-events-auto break-words"
              style={{ 
                fontSize: "clamp(1.8rem, 6vw, 120px)", 
                letterSpacing: "-0.01em", 
                opacity: 0,
                textShadow: "0 0 15px rgba(255,255,255,0.9), 0 0 5px rgba(255,255,255,0.5)"
              }}
            >
              ENGINEERED FOR
              <br />
              PERFORMANCE
            </h2>
          </div>

          <div className="max-w-7xl relative z-30">
            <p
              ref={subcopyRef}
              className="font-mono text-black text-[12px] sm:text-[16px] uppercase tracking-[1.4px] mt-6 sm:mt-4 opacity-0 pointer-events-auto"
              style={{ textShadow: "0 0 8px rgba(255,255,255,0.8)" }}
            >
              AUTHORISED NANKANG DEALER. FITTED IN WARWICK.
            </p>

            <div ref={ctasRef} className="mt-8 sm:mt-12 flex flex-wrap items-center gap-4 sm:gap-6 opacity-0 pointer-events-auto">
              <Link
                href="/tyre-finder"
                className="inline-flex items-center justify-center font-mono text-[13px] sm:text-[14px] uppercase tracking-[1.4px] text-white bg-black border border-black rounded-full px-8 py-4 sm:px-10 sm:py-5 hover:bg-transparent hover:text-black transition-colors duration-300 min-h-[48px] cursor-pointer"
              >
                FIND YOUR TYRES
              </Link>
              <Link
                href="/tyres"
                className="inline-flex items-center justify-center font-mono text-[13px] sm:text-[14px] uppercase tracking-[1.4px] text-black border border-[#999999] rounded-[6px] px-6 py-3 sm:px-8 sm:py-4 hover:border-black transition-colors duration-300 min-h-[48px] cursor-pointer"
              >
                DISCOVER RANGE
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      {/* Phantom spacing buffer equal to 3000px added automatically by ScrollTrigger pin */}
    </section>
  );
}

// =============================================================================
// SCENE 2 — THE RANGES (White Theme)
// =============================================================================
function TyreRangeSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const ranges = [
    { name: "MOTORSPORT", desc: "NS-2R, AR-1, CR-S. ROAD-LEGAL RACE PERFORMANCE.", label: "COMPETITION", href: "/tyres/motorsport" },
    { name: "PERFORMANCE", desc: "AS-3. UNCOMPROMISING DAILY DYNAMICS.", label: "STREET", href: "/tyres/car" },
    { name: "OFF-ROAD", desc: "AT-5+. ALL-TERRAIN DOMINANCE.", label: "4X4 & SUV", href: "/tyres/4x4" },
  ];

  return (
    <section ref={sectionRef} id="tyre-ranges" className="bg-white w-full border-t border-[#999999]/30" aria-label="Tyre ranges">
      {ranges.map((range, idx) => (
        <Link
          key={range.name}
          href={range.href}
          className="relative group block w-full h-[50vh] sm:h-[60vh] min-h-[360px] sm:min-h-[500px] border-b border-[#999999]/30 overflow-hidden cursor-pointer"
        >
          {/* Subtle hover reveal for background */}
          <div className="absolute inset-0 bg-white group-hover:bg-[#f5f5f5] transition-colors duration-700" />

          <div className="relative z-10 w-full h-full max-w-[1720px] mx-auto px-6 flex flex-col justify-center sm:justify-between py-10 sm:py-16 gap-6 sm:gap-0">
            <div className="font-mono text-[12px] sm:text-[14px] text-black uppercase tracking-[1.4px] opacity-70">
              {String(idx + 1).padStart(2, "0")} — {range.label}
            </div>

            <div>
              <h2 className="font-display text-black uppercase leading-[1.0] break-words" style={{ fontSize: "clamp(1.8rem, 6vw, 90px)" }}>
                {range.name}
              </h2>
              <p className="font-mono text-[#999999] text-[11px] sm:text-[13px] uppercase tracking-[1.4px] mt-3 sm:mt-6 max-w-lg">
                {range.desc}
              </p>
            </div>

            {/* Arrow indicator on hover — premium directional cue */}
            <div className="hidden sm:flex justify-end items-center">
              <span className="font-mono text-[12px] text-black uppercase tracking-[1.4px] opacity-0 group-hover:opacity-60 transition-opacity duration-500 mr-4">EXPLORE</span>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-black opacity-0 group-hover:opacity-60 group-hover:translate-x-2 transition-all duration-500">
                <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>
        </Link>
      ))}
    </section>
  );
}

// =============================================================================
// SCENE 3 — PRODUCT SPOTLIGHT
// =============================================================================
function ProductSpotlight() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const featured = featuredProducts.slice(0, 1)[0];

  return (
    <section
      ref={sectionRef}
      id="product-spotlight"
      className="relative bg-white py-20 sm:py-24 lg:py-48 border-b border-[#999999]/30"
      aria-labelledby="spotlight-heading"
    >
      <div className="max-w-[1720px] mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 sm:gap-20 items-center justify-between">
          
          <div className="w-full lg:w-1/2">
            <h2 className="font-mono text-[#999999] text-[12px] sm:text-[14px] uppercase tracking-[1.4px] mb-6 sm:mb-8">
              FEATURED ENGINEERING
            </h2>
            <h3 id="spotlight-heading" className="font-display font-normal text-black uppercase leading-[1.0] mb-6 sm:mb-8"
              style={{ fontSize: "clamp(1.6rem, 5vw, 64px)" }}
            >
              {featured.name}
            </h3>
            
            <p className="font-body text-[#999999] text-[14px] sm:text-[16px] leading-[1.6] max-w-md mb-10 sm:mb-12">
              {featured.description.slice(0, 260)}...
            </p>

            {/* High-End Technical Marquee */}
            <div className="relative w-full overflow-hidden mb-12 sm:mb-16 py-4 border-y border-[#999999]/20 group">
              <div className="flex whitespace-nowrap animate-marquee">
                {[...featured.features, ...featured.features].map((f, i) => (
                  <div key={i} className="flex items-center px-6 sm:px-8">
                    <div className="w-[1.5px] h-[12px] bg-black mr-4 sm:mr-6" />
                    <span className="font-mono text-[11px] sm:text-[13px] text-black uppercase tracking-[1.4px]">
                      {f}
                    </span>
                  </div>
                ))}
              </div>
              {/* Edge Fades for Premium look */}
              <div className="absolute inset-y-0 left-0 w-16 sm:w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
              <div className="absolute inset-y-0 right-0 w-16 sm:w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
            </div>

            <Link
              href={`/tyres/${featured.category}/${featured.slug}`}
              className="inline-flex items-center justify-center font-mono text-[13px] sm:text-[14px] uppercase tracking-[1.4px] text-black bg-white border border-black rounded-full px-8 py-4 hover:bg-black hover:text-white transition-colors duration-300 cursor-pointer"
            >
              EXPLORE {featured.name}
            </Link>
          </div>

          <div className="w-full lg:w-1/2 h-[300px] sm:h-[400px] lg:h-[600px] bg-[#f5f5f5] flex items-center justify-center relative overflow-hidden">
             {/* Architectural aesthetic box behind tyre */}
             <div className="absolute right-0 top-0 w-[1px] h-full bg-[#999999]/30" />
             <div className="absolute right-0 bottom-0 w-full h-[1px] bg-[#999999]/30" />
             
             <img 
               src={featured.image} 
               alt={featured.name} 
               className="relative z-10 w-full h-full object-contain scale-110 lg:scale-125 transition-transform duration-700 p-8 sm:p-12" 
             />
          </div>

        </div>
      </div>
    </section>
  );
}

// =============================================================================
// SCENE 4 — TYRE FINDER CTA
// =============================================================================
function TyreFinderCTA() {
  const [regInput, setRegInput] = useState("");

  return (
    <section className="relative py-24 sm:py-36 lg:py-48 bg-white border-b border-[#999999]/30" aria-label="Tyre Finder">
      <div className="max-w-[1720px] mx-auto px-6 text-center flex flex-col items-center">
        
        <h2 className="font-display font-normal text-black uppercase leading-[1.0] mb-4 sm:mb-6"
            style={{ fontSize: "clamp(1.8rem, 6vw, 84px)" }}>
          FIND EXACT FITMENT
        </h2>
        <p className="font-mono text-[#999999] text-[12px] sm:text-[14px] uppercase tracking-[1.4px] mb-10 sm:mb-16">
          ENTER REGISTRATION OR SEARCH BY SIZE INVENTORY.
        </p>

        <div className="w-full max-w-xl mx-auto flex flex-col sm:flex-row gap-3 sm:gap-4">
          <input
            type="text"
            value={regInput}
            onChange={(e) => setRegInput(e.target.value.toUpperCase().slice(0, 8))}
            placeholder="ENTER REG"
            className="flex-1 bg-white border border-[#999999] focus:border-black text-black font-mono text-[16px] sm:text-[18px] tracking-[2px] uppercase text-center px-6 py-4 sm:py-5 outline-none transition-colors duration-300 rounded-none placeholder:text-[#999999]"
            aria-label="Enter UK registration plate"
          />
          <Link
            href={`/tyre-finder${regInput ? `?reg=${regInput}` : ""}`}
            className="flex items-center justify-center font-mono text-[13px] sm:text-[14px] uppercase tracking-[1.4px] text-white bg-black border border-black px-8 sm:px-10 py-4 sm:py-5 hover:bg-transparent hover:text-black transition-colors duration-300 whitespace-nowrap cursor-pointer"
          >
            SEARCH
          </Link>
        </div>

        <div className="mt-16 sm:mt-24">
          <Link href="/tyre-finder" className="font-mono text-[#999999] text-[11px] sm:text-[12px] uppercase tracking-[1.4px] hover:text-black transition-colors duration-300 border-b border-[#999999] pb-1 cursor-pointer">
            OR SEARCH BY VEHICLE DIMENSIONS
          </Link>
        </div>
      </div>
    </section>
  );
}

// =============================================================================
// SCENE 5 — EXPERTISE
// =============================================================================
function ExpertiseSection() {
  const pillars = [
    {
      title: "AUTHORISED DEALER",
      desc: "OFFICIAL NANKANG SUPPLY CHAIN. EVERY TYRE IS GENUINE, COVERED BY THE MANUFACTURER ROAD HAZARD WARRANTY.",
    },
    {
      title: "UK INVENTORY",
      desc: "IMMEDIATE DISPATCH ACROSS THE UNITED KINGDOM. MOTORSPORT, CAR, AND COMMERCIAL BATCHES READY.",
    },
    {
      title: "TECHNICAL TEAM",
      desc: "EXPERT CAMBER AND COMPOUND ADVICE FROM SPECIALISTS WHO RUN NANKANG COMPOUND ON TRACK THEMSELVES.",
    },
  ];

  return (
    <section className="bg-white py-20 sm:py-24 lg:py-40 border-b border-[#999999]/30">
      <div className="max-w-[1720px] mx-auto px-6">
        <h2 className="font-display text-black uppercase leading-[1.0] mb-16 sm:mb-24" style={{ fontSize: "clamp(1.6rem, 4vw, 56px)" }}>
          THE NANKANG SPECIALISTS
        </h2>
        <div className="grid lg:grid-cols-3 gap-x-16 gap-y-12 sm:gap-y-16">
          {pillars.map((item, i) => (
            <div key={i} className="border-l border-[#999999] pl-6 sm:pl-8">
              <h3 className="font-mono text-black text-[13px] sm:text-[14px] uppercase tracking-[1.4px] mb-4 sm:mb-6">{item.title}</h3>
              <p className="font-mono text-[#999999] text-[11px] sm:text-[12px] uppercase tracking-[1.2px] leading-[1.8] max-w-sm">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// =============================================================================
// PAGE COMPOSITION
// =============================================================================
export default function HomePage() {
  return (
    <main id="main-content" className="bg-white">
      <HeroSection />
      <TyreRangeSection />
      <ProductSpotlight />
      <TyreFinderCTA />
      <ExpertiseSection />
    </main>
  );
}
