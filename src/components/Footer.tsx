import Link from "next/link";

const footerRanges = [
  { label: "CAR TYRES", href: "/tyres/car" },
  { label: "MOTORSPORT TYRES", href: "/tyres/motorsport" },
  { label: "4X4 & SUV TYRES", href: "/tyres/4x4" },
  { label: "EV TYRES", href: "/tyres/ev" },
  { label: "ALL-SEASON TYRES", href: "/tyres/all-season" },
  { label: "WINTER TYRES", href: "/tyres/winter" },
  { label: "COMMERCIAL TYRES", href: "/tyres/commercial" },
];

const footerServices = [
  { label: "TYRE FINDER", href: "/tyre-finder" },
  { label: "FITTING & SERVICES", href: "/fitting" },
  { label: "ABOUT RUBBER TECH", href: "/about" },
  { label: "BLOG & ADVICE", href: "/blog" },
  { label: "FAQS", href: "/faq" },
  { label: "DELIVERY & RETURNS", href: "/delivery" },
  { label: "CONTACT US", href: "/contact" },
];

const popularModels = [
  { label: "NANKANG NS-2R", href: "/tyres/motorsport/ns-2r" },
  { label: "NANKANG AR-1", href: "/tyres/motorsport/ar-1" },
  { label: "NANKANG CR-S", href: "/tyres/motorsport/cr-s" },
  { label: "NANKANG AS-3", href: "/tyres/car/as-3" },
  { label: "NANKANG AS-2+", href: "/tyres/car/as-2plus" },
  { label: "NANKANG AT-5+", href: "/tyres/4x4/at-5plus" },
  { label: "NANKANG AW-8", href: "/tyres/all-season/aw-8" },
];

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Rubber Tech",
  description: "Authorised Nankang Tyre Dealers in the United Kingdom",
  url: "https://rubber-tech.co.uk",
  logo: "https://rubber-tech.co.uk/images/logo.svg",
  image: "https://rubber-tech.co.uk/images/og-image.jpg",
  priceRange: "££",
  areaServed: {
    "@type": "Country",
    name: "United Kingdom",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "09:00",
      closes: "17:00",
    },
  ],
  sameAs: ["https://rubber-tech.co.uk"],
};

export default function Footer() {
  return (
    <footer className="bg-white border-t border-[#999999]/30" aria-label="Site footer">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />

      <div className="max-w-[1720px] mx-auto px-6 py-16 sm:py-24 lg:py-32">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-12 sm:gap-y-20">
          
          {/* Column 1 — About */}
          <div>
            <h3 className="font-mono text-black text-[13px] sm:text-[14px] uppercase tracking-[1.4px] mb-6 sm:mb-8">
              ABOUT RUBBER TECH
            </h3>
            <p className="font-body text-[#999999] text-[13px] sm:text-[16px] leading-[1.6] mb-6 sm:mb-8">
              Rubber Tech is an official authorised Nankang tyre dealer serving customers across the United Kingdom. We supply the full Nankang range with free mainland UK delivery.
            </p>
            <div className="space-y-3 sm:space-y-4">
              <a href="tel:[PHONE_PLACEHOLDER]" className="flex items-center gap-3 font-mono text-[12px] sm:text-[14px] text-[#999999] uppercase tracking-[1.4px] hover:text-black transition-colors duration-200 cursor-pointer">
                <span>[PHONE_PLACEHOLDER]</span>
              </a>
              <a href="mailto:info@rubber-tech.co.uk" className="flex items-center gap-3 font-mono text-[12px] sm:text-[14px] text-[#999999] uppercase tracking-[1.4px] hover:text-black transition-colors duration-200 cursor-pointer">
                <span>INFO@RUBBER-TECH.CO.UK</span>
              </a>
            </div>
            
            <div className="sr-only" itemScope itemType="https://schema.org/LocalBusiness">
              <span itemProp="name">Rubber Tech</span>
              <span itemProp="telephone">[PHONE_PLACEHOLDER]</span>
              <span itemProp="email">info@rubber-tech.co.uk</span>
              <div itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
                <span itemProp="addressCountry">GB</span>
              </div>
            </div>
          </div>

          {/* Column 2 — Tyre Ranges */}
          <div>
            <h3 className="font-mono text-black text-[13px] sm:text-[14px] uppercase tracking-[1.4px] mb-6 sm:mb-8">
              TYRE RANGES
            </h3>
            <ul className="space-y-3 sm:space-y-4">
              {footerRanges.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="font-mono text-[12px] sm:text-[14px] text-[#999999] uppercase tracking-[1.4px] hover:text-black transition-colors duration-200 cursor-pointer"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Popular Models */}
          <div>
            <h3 className="font-mono text-black text-[13px] sm:text-[14px] uppercase tracking-[1.4px] mb-6 sm:mb-8">
              POPULAR MODELS
            </h3>
            <ul className="space-y-3 sm:space-y-4">
              {popularModels.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="font-mono text-[12px] sm:text-[14px] text-[#999999] uppercase tracking-[1.4px] hover:text-black transition-colors duration-200 cursor-pointer"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 — Services & Info */}
          <div>
            <h3 className="font-mono text-black text-[13px] sm:text-[14px] uppercase tracking-[1.4px] mb-6 sm:mb-8">
              SERVICES & INFO
            </h3>
            <ul className="space-y-3 sm:space-y-4 mb-8 sm:mb-12">
              {footerServices.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="font-mono text-[12px] sm:text-[14px] text-[#999999] uppercase tracking-[1.4px] hover:text-black transition-colors duration-200 cursor-pointer"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            
            {/* Social Icons */}
            <div className="flex items-center gap-6">
              <a href="#" aria-label="Facebook" className="text-[#999999] hover:text-black transition-colors duration-200 cursor-pointer">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
              <a href="#" aria-label="Instagram" className="text-[#999999] hover:text-black transition-colors duration-200 cursor-pointer">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
              </a>
              <a href="#" aria-label="Twitter" className="text-[#999999] hover:text-black transition-colors duration-200 cursor-pointer">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
              </a>
              <a href="#" aria-label="YouTube" className="text-[#999999] hover:text-black transition-colors duration-200 cursor-pointer">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M2.5 7.1C2.5 7.1 2 9 2 12s.5 4.9.5 4.9S4.4 19 8.2 19c2.8 0 3.8.1 3.8.1s1-.1 3.8-.1c3.8 0 5.7-2.1 5.7-2.1s.5-1.9.5-4.9-.5-4.9-.5-4.9S19.6 5 15.8 5c-2.8 0-3.8-.1-3.8-.1s-1 .1-3.8 .1C4.4 5 2.5 7.1 2.5 7.1z"></path><path d="m9.6 15 6.2-3-6.2-3v6z"></path></svg>
              </a>
            </div>
          </div>
          
        </div>
      </div>

      {/* Bottom Legal */}
      <div className="border-t border-[#999999]/30">
        <div className="max-w-[1720px] mx-auto px-6 py-5 sm:py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6">
            <p className="font-mono text-[#999999] text-[11px] sm:text-[12px] uppercase tracking-[1.2px]">
              © {new Date().getFullYear()} RUBBER TECH. AUTHORISED NANKANG DEALER.
            </p>
            <div className="flex items-center gap-6 sm:gap-8">
              <Link href="/privacy" className="font-mono text-[#999999] text-[11px] sm:text-[12px] uppercase tracking-[1.2px] hover:text-black transition-colors duration-200 cursor-pointer">PRIVACY POLICY</Link>
              <Link href="/cookies" className="font-mono text-[#999999] text-[11px] sm:text-[12px] uppercase tracking-[1.2px] hover:text-black transition-colors duration-200 cursor-pointer">COOKIE SETTINGS</Link>
              <Link href="/terms" className="font-mono text-[#999999] text-[11px] sm:text-[12px] uppercase tracking-[1.2px] hover:text-black transition-colors duration-200 cursor-pointer">TERMS</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

// FILE COMPLETE ✓
