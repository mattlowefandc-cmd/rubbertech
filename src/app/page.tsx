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
  
  // Animation Targets
  const headline1Ref = useRef<HTMLHeadingElement>(null);
  const headline2Ref = useRef<HTMLHeadingElement>(null);
  const subcopyRef = useRef<HTMLParagraphElement>(null);
  const ctasRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || !pinRef.current) return;

    // We use a context to clean up GSAP on unmount
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=3000", // 300vh scroll distance
          pin: pinRef.current,
          scrub: 1, // Smooth scrub
        }
      });

      // Animate a proxy value to drive the sequence frames alongside the scroll
      const proxy = { frameIndex: 0 };
      tl.to(proxy, {
        frameIndex: 1,
        ease: "none",
        duration: 1,
        onUpdate: () => {
          tyreRef.current?.setScrubProgress(proxy.frameIndex);
        }
      }, 0); // Runs from 0 to 1 over the whole timeline

      // 0-20%: Headline 1 fades in from bottom
      tl.fromTo(headline1Ref.current, 
        { y: 40, opacity: 0 }, 
        { y: 0, opacity: 1, duration: 0.15 }, 
        0.05
      );

      // 25-40%: Headline 1 out, Headline 2 in
      tl.to(headline1Ref.current, { y: -40, opacity: 0, duration: 0.1 }, 0.25);
      tl.fromTo(headline2Ref.current,
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
      
      // 85-100%: Hold frame (nothing animates)
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} id="hero" className="relative w-full bg-white" aria-label="Hero section">
      {/* Pinned section that stays in viewport */}
      <div ref={pinRef} className="h-screen w-full relative flex items-center justify-center overflow-hidden bg-white">
        
        {/* Transparent Tyre Sequence centered */}
        <div className="absolute inset-0 flex items-center justify-center scale-[1.3] lg:scale-[1.7] translate-y-10 lg:translate-y-20 z-0 bg-white">
          <TyreSequence
            ref={tyreRef}
            mode="scrub" // Fully controlled by GSAP
            scrollProgress={0} 
            width={1000}
            height={1000}
            className="pointer-events-none"
          />
        </div>

        {/* Foreground Content locked to absolute positioning so they overlap */}
        <div className="absolute inset-0 z-10 w-full max-w-[1720px] mx-auto px-6 h-full flex flex-col justify-end pb-24 lg:pb-32 pointer-events-none">
          <div className="max-w-7xl relative">
            
            <h1
              ref={headline1Ref}
              className="absolute bottom-full mb-8 font-display font-normal text-black uppercase leading-[1.0] -ml-2 pointer-events-auto"
              style={{ 
                fontSize: "clamp(3.5rem, 15vw, 240px)", 
                letterSpacing: "-0.01em", 
                opacity: 0,
              }}
            >
              PRECISION
              <br />
              RUBBER
            </h1>

            <h2
              ref={headline2Ref}
              className="absolute bottom-full mb-8 font-display font-normal text-black uppercase leading-[1.0] -ml-2 pointer-events-auto"
              style={{ 
                fontSize: "clamp(3.5rem, 10vw, 150px)", 
                letterSpacing: "-0.01em", 
                opacity: 0,
              }}
            >
              ENGINEERED FOR
              <br />
              PERFORMANCE
            </h2>

            <p
              ref={subcopyRef}
              className="font-mono text-black text-[16px] uppercase tracking-[1.4px] mt-4 opacity-0 pointer-events-auto"
            >
              AUTHORISED NANKANG DEALER. FITTED IN WARWICK.
            </p>

            <div ref={ctasRef} className="mt-8 sm:mt-12 flex flex-wrap items-center gap-6 opacity-0 pointer-events-auto">
              <Link
                href="/tyre-finder"
                className="inline-flex items-center justify-center font-mono text-[14px] uppercase tracking-[1.4px] text-white bg-black border border-black rounded-full px-8 py-4 hover:bg-transparent hover:text-black transition-colors duration-300"
              >
                FIND YOUR TYRES
              </Link>
              <Link
                href="/tyres"
                className="inline-flex items-center justify-center font-mono text-[14px] uppercase tracking-[1.4px] text-black border border-[#999999] rounded-[6px] px-6 py-3 hover:border-black transition-colors duration-300"
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
          className="relative group block w-full h-[60vh] min-h-[500px] border-b border-[#999999]/30 overflow-hidden"
        >
          {/* Subtle hover reveal for background */}
          <div className="absolute inset-0 bg-white group-hover:bg-[#f5f5f5] transition-colors duration-700" />

          <div className="relative z-10 w-full h-full max-w-[1720px] mx-auto px-6 flex flex-col justify-between py-16">
            <div className="font-mono text-[14px] text-black uppercase tracking-[1.4px] opacity-70">
              {String(idx + 1).padStart(2, "0")} — {range.label}
            </div>

            <div>
              <h2 className="font-display text-black uppercase leading-[1.0]" style={{ fontSize: "clamp(3rem, 8vw, 120px)" }}>
                {range.name}
              </h2>
              <p className="font-mono text-[#999999] text-[14px] uppercase tracking-[1.4px] mt-6 max-w-lg">
                {range.desc}
              </p>
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
      className="relative bg-white py-32 lg:py-48 border-b border-[#999999]/30"
      aria-labelledby="spotlight-heading"
    >
      <div className="max-w-[1720px] mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-20 items-center justify-between">
          
          <div className="w-full lg:w-1/2">
            <h2 className="font-mono text-[#999999] text-[14px] uppercase tracking-[1.4px] mb-8">
              FEATURED ENGINEERING
            </h2>
            <h3 id="spotlight-heading" className="font-display font-normal text-black uppercase leading-[1.0] mb-8"
              style={{ fontSize: "clamp(2.5rem, 6vw, 84px)" }}
            >
              {featured.name}
            </h3>
            
            <p className="font-body text-[#999999] text-[16px] leading-[1.6] max-w-md mb-12">
              {featured.description.slice(0, 260)}...
            </p>

            <ul className="space-y-4 mb-16">
              {featured.features.slice(0, 3).map((f) => (
                <li key={f} className="flex items-start gap-4">
                  <div className="w-[1px] h-[16px] bg-[#999999] mt-1" />
                  <span className="font-mono text-[14px] text-black uppercase tracking-[1.2px] leading-tight flex-1">{f}</span>
                </li>
              ))}
            </ul>

            <Link
              href={`/tyres/${featured.category}/${featured.slug}`}
              className="inline-flex items-center justify-center font-mono text-[14px] uppercase tracking-[1.4px] text-black bg-white border border-black rounded-full px-8 py-4 hover:bg-black hover:text-white transition-colors duration-300"
            >
              EXPLORE {featured.name}
            </Link>
          </div>

          <div className="w-full lg:w-1/2 h-[600px] bg-[#f5f5f5] flex items-center justify-center relative overflow-hidden">
             {/* Architectural aesthetic box behind tyre */}
             <div className="absolute right-0 top-0 w-[1px] h-full bg-[#999999]/30" />
             <div className="absolute right-0 bottom-0 w-full h-[1px] bg-[#999999]/30" />
             
             <TyreSequence mode="autoplay" scrollProgress={0} width={450} height={450} className="relative z-10 bg-white scale-110 lg:scale-125" />
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
    <section className="relative py-48 bg-white border-b border-[#999999]/30" aria-label="Tyre Finder">
      <div className="max-w-[1720px] mx-auto px-6 text-center flex flex-col items-center">
        
        <h2 className="font-display font-normal text-black uppercase leading-[1.0] mb-6"
            style={{ fontSize: "clamp(3rem, 8vw, 110px)" }}>
          FIND EXACT FITMENT
        </h2>
        <p className="font-mono text-[#999999] text-[14px] uppercase tracking-[1.4px] mb-16">
          ENTER REGISTRATION OR SEARCH BY SIZE INVENTORY.
        </p>

        <div className="w-full max-w-xl mx-auto flex flex-col sm:flex-row gap-4">
          <input
            type="text"
            value={regInput}
            onChange={(e) => setRegInput(e.target.value.toUpperCase().slice(0, 8))}
            placeholder="ENTER REG"
            className="flex-1 bg-white border border-[#999999] focus:border-black text-black font-mono text-[18px] tracking-[2px] uppercase text-center px-6 py-5 outline-none transition-colors duration-300 rounded-none placeholder:text-[#999999]"
            aria-label="Enter UK registration plate"
          />
          <Link
            href={`/tyre-finder${regInput ? `?reg=${regInput}` : ""}`}
            className="flex items-center justify-center font-mono text-[14px] uppercase tracking-[1.4px] text-white bg-black border border-black px-10 py-5 hover:bg-transparent hover:text-black transition-colors duration-300 whitespace-nowrap"
          >
            SEARCH
          </Link>
        </div>

        <div className="mt-24">
          <Link href="/tyre-finder" className="font-mono text-[#999999] text-[12px] uppercase tracking-[1.4px] hover:text-black transition-colors border-b border-[#999999] pb-1">
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
    <section className="bg-white py-40 border-b border-[#999999]/30">
      <div className="max-w-[1720px] mx-auto px-6">
        <h2 className="font-display text-black uppercase leading-[1.0] mb-24" style={{ fontSize: "clamp(2.5rem, 5vw, 72px)" }}>
          THE NANKANG SPECIALISTS
        </h2>
        <div className="grid lg:grid-cols-3 gap-x-16 gap-y-16">
          {pillars.map((item, i) => (
            <div key={i} className="border-l border-[#999999] pl-8">
              <h3 className="font-mono text-black text-[14px] uppercase tracking-[1.4px] mb-6">{item.title}</h3>
              <p className="font-mono text-[#999999] text-[12px] uppercase tracking-[1.2px] leading-[1.8] max-w-sm">
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
