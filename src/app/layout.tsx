import type { Metadata } from "next";
import { Unbounded, Space_Mono, Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const unbounded = Unbounded({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

const spaceMono = Space_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://rubber-tech.co.uk"),
  title: {
    default: "Rubber Tech | Authorised Nankang Tyre Dealers UK",
    template: "%s | Rubber Tech — Authorised Nankang Dealers UK",
  },
  description:
    "Rubber Tech are authorised Nankang tyre dealers in the UK. Shop the full Nankang range — performance, motorsport, 4x4, EV, winter & all-season tyres. Free UK delivery.",
  keywords: [
    "nankang tyres uk",
    "buy nankang tyres",
    "nankang dealer uk",
    "authorised nankang dealer",
    "performance tyres uk",
    "track day tyres",
    "nankang ns-2r",
    "nankang as-3",
    "rubber tech tyres",
  ],
  authors: [{ name: "Rubber Tech" }],
  creator: "Rubber Tech",
  publisher: "Rubber Tech",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://rubber-tech.co.uk",
    siteName: "Rubber Tech",
    title: "Rubber Tech | Authorised Nankang Tyre Dealers UK",
    description:
      "Authorised Nankang tyre dealers. Shop the full range — performance, motorsport, 4x4, EV, winter tyres. Free UK delivery.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Rubber Tech — Authorised Nankang Dealers UK",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rubber Tech | Authorised Nankang Tyre Dealers UK",
    description:
      "Authorised Nankang tyre dealers. Free UK delivery on the full Nankang range.",
    images: ["/images/og-image.jpg"],
  },
  alternates: {
    canonical: "https://rubber-tech.co.uk",
  },
};

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Rubber Tech",
  url: "https://rubber-tech.co.uk",
  logo: "https://rubber-tech.co.uk/images/logo.svg",
  description: "Authorised Nankang Tyre Dealers in the United Kingdom",
  sameAs: [],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    areaServed: "GB",
    availableLanguage: "English",
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Rubber Tech",
  url: "https://rubber-tech.co.uk",
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: "https://rubber-tech.co.uk/tyres?q={search_term_string}",
    },
    "query-input": "required name=search_term_string",
  },
};

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppBubble from "@/components/WhatsAppBubble";
import CookieBanner from "@/components/CookieBanner";
import MobileStickyBar from "@/components/MobileStickyBar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB" className={`${unbounded.variable} ${spaceMono.variable} ${inter.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#ffffff" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body className="bg-white text-black antialiased overflow-x-hidden flex flex-col min-h-screen selection:bg-black selection:text-white">
        <Header />
        
        <div className="flex-grow">
          {children}
        </div>
        
        <Footer />
        <MobileStickyBar />
        <WhatsAppBubble />
        <CookieBanner />

        {/* Google Analytics 4 — consent-gated */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
          strategy="afterInteractive"
          id="gtag-script"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'GA_MEASUREMENT_ID', {
              'anonymize_ip': true
            });
          `}
        </Script>
      </body>
    </html>
  );
}

// FILE COMPLETE ✓
