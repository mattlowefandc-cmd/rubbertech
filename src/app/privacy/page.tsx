import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "PRIVACY POLICY | RUBBER TECH",
  description: "Privacy policy for Rubber Tech.",
};

export default function PrivacyPage() {
  return (
    <main className="bg-white min-h-screen pt-40 pb-32">
      <div className="max-w-[1720px] mx-auto px-6">
        <div className="max-w-3xl">
          
          <nav className="flex items-center gap-4 font-mono text-[12px] text-[#999999] uppercase tracking-[1.4px] mb-16">
            <Link href="/" className="hover:text-black transition-colors">HOME</Link>
            <span>/</span>
            <span className="text-black">PRIVACY POLICY</span>
          </nav>

          <h1 className="font-display font-normal text-black uppercase leading-[1.0] mb-16 border-b border-black/10 pb-8" style={{ fontSize: "clamp(2.5rem, 6vw, 80px)" }}>
            PRIVACY
          </h1>

          <div className="font-body text-[#111111] text-[16px] leading-[1.8] space-y-8">
            <p className="font-mono text-[12px] text-[#999999] uppercase tracking-[1.4px]">LAST UPDATED: {new Date().toLocaleDateString()}</p>
            
            <h2 className="font-mono text-black text-[16px] uppercase tracking-[1.4px] mt-12 mb-4">1. INTRODUCTION</h2>
            <p>
              Welcome to Rubber Tech. This privacy policy explains how we collect, use, and protect your personal information when you visit our website or purchase our products. We are committed to ensuring your privacy is protected in accordance with the UK General Data Protection Regulation (UK GDPR).
            </p>

            <h2 className="font-mono text-black text-[16px] uppercase tracking-[1.4px] mt-12 mb-4">2. DATA WE COLLECT</h2>
            <p>
              We may collect the following information:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Name and contact data (email address, telephone number)</li>
              <li>Delivery and billing addresses</li>
              <li>Vehicle registration details (if using our Tyre Finder)</li>
              <li>Transaction data and purchase history</li>
              <li>Technical data (IP address, browser type) via standard cookies</li>
            </ul>

            <h2 className="font-mono text-black text-[16px] uppercase tracking-[1.4px] mt-12 mb-4">3. HOW WE USE YOUR DATA</h2>
            <p>
              Your data is processed to fulfill your orders, provide customer support, and improve our services. We do not sell, distribute, or lease your personal information to third parties unless we have your explicit permission or are required by law to do so.
            </p>

            <h2 className="font-mono text-black text-[16px] uppercase tracking-[1.4px] mt-12 mb-4">4. DATA SECURITY</h2>
            <p>
              We are committed to ensuring that your information is secure. In order to prevent unauthorised access or disclosure, we have put in place suitable physical, electronic, and managerial procedures to safeguard and secure the information we collect online.
            </p>

            <div className="mt-24 p-8 border border-black/10 bg-[#f9f9f9]">
              <p className="font-mono text-[#999999] text-[12px] uppercase tracking-[1.4px] mb-4">QUESTIONS?</p>
              <p>Contact our Data Protection Officer at <a href="mailto:privacy@rubber-tech.co.uk" className="underline hover:text-[#999999]">privacy@rubber-tech.co.uk</a></p>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}
