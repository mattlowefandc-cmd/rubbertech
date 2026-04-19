import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "COOKIE POLICY | RUBBER TECH",
  description: "Cookie usage policy for Rubber Tech.",
};

export default function CookiesPage() {
  return (
    <main className="bg-white min-h-screen pt-40 pb-32">
      <div className="max-w-[1720px] mx-auto px-6">
        <div className="max-w-3xl">
          
          <nav className="flex items-center gap-4 font-mono text-[12px] text-[#999999] uppercase tracking-[1.4px] mb-16">
            <Link href="/" className="hover:text-black transition-colors">HOME</Link>
            <span>/</span>
            <span className="text-black">COOKIE POLICY</span>
          </nav>

          <h1 className="font-display font-normal text-black uppercase leading-[1.0] mb-16 border-b border-black/10 pb-8" style={{ fontSize: "clamp(2.5rem, 6vw, 80px)" }}>
            COOKIES
          </h1>

          <div className="font-body text-[#111111] text-[16px] leading-[1.8] space-y-8">
            <p className="font-mono text-[12px] text-[#999999] uppercase tracking-[1.4px]">LAST UPDATED: {new Date().toLocaleDateString()}</p>
            
            <h2 className="font-mono text-black text-[16px] uppercase tracking-[1.4px] mt-12 mb-4">WHAT ARE COOKIES?</h2>
            <p>
              Cookies are small text files that are placed on your computer or mobile device when you browse websites. They are widely used to make websites work more efficiently and provide a better user experience.
            </p>

            <h2 className="font-mono text-black text-[16px] uppercase tracking-[1.4px] mt-12 mb-4">HOW WE USE COOKIES</h2>
            <p>We use cookies for the following purposes:</p>
            <ul className="list-disc pl-6 space-y-4">
              <li>
                <strong>Strictly Necessary Cookies:</strong> Essential for the website to function properly, such as preserving your session state or shopping basket.
              </li>
              <li>
                <strong>Analytical/Performance Cookies:</strong> We use Google Analytics to recognise and count visitor numbers and see how they navigate our site. This helps us improve the way our website works. These are toggled via our main cookie consent banner.
              </li>
              <li>
                <strong>Functionality Cookies:</strong> Used to recognise you when you return to our website (e.g., remembering your vehicle registration search history).
              </li>
            </ul>

            <h2 className="font-mono text-black text-[16px] uppercase tracking-[1.4px] mt-12 mb-4">MANAGING COOKIES</h2>
            <p>
              You can set your browser to refuse all or some browser cookies, or to alert you when websites set or access cookies. If you disable or refuse cookies, please note that some parts of this website may become inaccessible or not function properly.
            </p>

            <div className="mt-16 pt-8 border-t border-black/10">
              <button 
                className="font-mono text-[12px] text-white uppercase tracking-[1.4px] bg-black border border-black py-4 px-8 hover:bg-white hover:text-black transition-colors duration-300"
              >
                RESET COOKIE PREFERENCES
              </button>
            </div>

          </div>

        </div>
      </div>
    </main>
  );
}
