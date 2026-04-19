import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "BLOG & ADVICE | RUBBER TECH",
  description: "Technical tyre advice, motorsport news, and Nankang product updates.",
};

const posts = [
  {
    title: "NS-2R VS AR-1: WHICH COMPOUND DO YOU NEED?",
    date: "MARCH 12, 2026",
    category: "TECHNICAL",
    excerpt: "UNDERSTANDING THE PERFORMANCE GAP BETWEEN THE UK'S FAVOURITE TRACK DAY TYRE AND ITS SEMI-SLICK BIG BROTHER."
  },
  {
    title: "PREPARING YOUR EV FOR WINTER TRANSITIONS",
    date: "FEBRUARY 28, 2026",
    category: "GUIDE",
    excerpt: "HOW COLD TEMPERATURES AFFECT EV RANGE AND WHY THE AS-3 EV COMPOUND IS A GAME-CHANGER FOR TESLA OWNERS."
  },
  {
    title: "NANKANG CR-S: THE 2026 SEASON PREVIEW",
    date: "JANUARY 15, 2026",
    category: "NEWS",
    excerpt: "WE GO DEEP ON THE NEWEST SIZES JOINING THE CR-S LINEUP FOR THE UPCOMING TIME ATTACK SEASON."
  }
];

export default function BlogPage() {
  return (
    <main className="bg-white min-h-screen pt-40 pb-32">
      <div className="max-w-[1720px] mx-auto px-6">
        
        <div className="mb-32">
          <div className="font-mono text-[#999999] text-[14px] uppercase tracking-[1.4px] mb-8">EDITORIAL</div>
          <h1 className="font-display font-normal text-black uppercase leading-[1.0] mb-8" style={{ fontSize: "clamp(3rem, 8vw, 110px)" }}>
            BLOG & <br /> ADVICE.
          </h1>
          <p className="font-mono text-[#999999] text-[14px] uppercase tracking-[1.4px] max-w-2xl">
            TECHNICAL DEBRIEFS, MOTORSPORT NEWS, AND ARCHITECTURAL TYRE GUIDES.
          </p>
        </div>

        <div className="grid lg:grid-cols-1 gap-12">
          {posts.map((post) => (
            <article key={post.title} className="group border-t border-black/10 pt-16 pb-16 flex flex-col lg:flex-row gap-12 hover:bg-[#fcfcfc] transition-colors px-4 -mx-4 cursor-pointer">
              <div className="lg:w-1/4">
                <div className="font-mono text-black text-[12px] uppercase tracking-[2px] mb-2">{post.date}</div>
                <div className="font-mono text-[#999999] text-[10px] uppercase tracking-[1.4px]">[{post.category}]</div>
              </div>
              <div className="lg:w-3/4">
                <h2 className="font-display text-black text-[32px] sm:text-[48px] uppercase leading-[1.1] mb-6 group-hover:underline underline-offset-8">
                  {post.title}
                </h2>
                <p className="font-body text-[#999999] text-[16px] max-w-2xl leading-relaxed mb-8">
                  {post.excerpt}
                </p>
                <div className="font-mono text-black text-[12px] uppercase tracking-[1.4px] inline-block border-b border-black pb-1">
                  READ DEBRIEF
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>
    </main>
  );
}
