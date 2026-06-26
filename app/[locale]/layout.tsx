import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from 'next/script';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/lib/routing';
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { VisitorTracker } from "@/components/layout/VisitorTracker";
import { WhatsAppFloat } from "@/components/layout/WhatsAppFloat";
import { StickyInquiryBar } from "@/components/layout/StickyInquiryBar";
import { buildAlternates } from '@/lib/seo-helpers';
import "../globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  // Fallback title — individual pages override this via generateMetadata()
  title: {
    // 58 chars — fits perfectly in Google's ~60-char display limit
    default: 'Psyllium Husk Exporter India | Amar Herbal Origins',
    // Sub-pages get:  "[Page Title] | Amar Herbal Origins"
    template: '%s | Amar Herbal Origins',
  },
  description:
    'Amar Herbal Origins — certified psyllium husk (Isabgol), herbs, spices & castor oil exporter from Gujarat, India. ISO 22000, USDA Organic, Halal, Kosher. Bulk B2B supply to 30+ countries. Free sample available.',
  keywords: [
    'psyllium husk exporter India',
    'psyllium husk exporter from India',
    'isabgol exporter Gujarat',
    'psyllium husk manufacturer India',
    'bulk psyllium husk supplier',
    'ispaghula husk exporter',
    'organic psyllium husk exporter',
    'indian herbal products exporter',
    'moringa powder exporter India',
    'castor oil exporter India',
    'spices exporter India',
    'herbs exporter India',
    'B2B herbal ingredients India',
    'USDA organic psyllium supplier',
    'private label psyllium husk',
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-snippet': -1, 'max-image-preview': 'large' },
  },
  icons: {
    icon: [
      { url: '/logo.png', type: 'image/png', sizes: '512x512' },
      { url: '/logo.png', type: 'image/png', sizes: '192x192' },
      { url: '/logo.png', type: 'image/png', sizes: '32x32' },
      { url: '/logo.png', type: 'image/png', sizes: '16x16' },
    ],
    apple: [
      { url: '/logo.png', type: 'image/png', sizes: '512x512' },
      { url: '/logo.png', type: 'image/png', sizes: '180x180' },
    ],
    shortcut: '/logo.png',
    other: [{ rel: 'mask-icon', url: '/logo.png' }],
  },
  openGraph: {
    title: 'Psyllium Husk Exporter India | Amar Herbal Origins',
    description:
      "Gujarat's certified psyllium husk (Isabgol) exporter & manufacturer. ISO 22000, USDA Organic, Halal, Kosher. Herbs, spices & oils. Bulk B2B supply to 30+ countries.",
    url: 'https://amarherbalorigins.com',
    siteName: 'Amar Herbal Origins',
    images: [
      {
        url: 'https://amarherbalorigins.com/og-home.jpg',
        width: 1200,
        height: 630,
        alt: 'Amar Herbal Origins — Psyllium Husk & Herbal Products Exporter from India',
      },
    ],
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Psyllium Husk Exporter India | Amar Herbal Origins',
    description:
      "Gujarat's certified psyllium husk exporter. ISO 22000, USDA Organic, Halal. Herbs, spices & oils. B2B bulk supply worldwide.",
    images: ['https://amarherbalorigins.com/og-home.jpg'],
    creator: '@Umang__Khunt',
    site: '@Umang__Khunt',
  },
  metadataBase: new URL('https://amarherbalorigins.com'),
  verification: {
    google: 'Yu02YaJZvKxWcsfHN1rlKYrm1tY4cQL-neYfZ-wCGik',
  },
};


export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale} className={inter.variable}>
      <head>
        {/* Preconnect for Google Fonts — faster font loading globally */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* DNS prefetch for Google Translate CDN */}
        <link rel="dns-prefetch" href="https://translate.googleapis.com" />
        <link rel="dns-prefetch" href="https://translate.google.com" />
      </head>
      <body style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        {/* Organization JSON-LD — Fixed: removed invalid ExportAction type combo */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "@id": "https://amarherbalorigins.com/#organization",
              "name": "Amar Herbal Origins",
              "legalName": "Amar Herbal Origins",
              "alternateName": ["Amar Herbal", "Isabgol Exporter India", "Amar Herbal Origins Gujarat"],
              "url": "https://amarherbalorigins.com",
              "logo": {
                "@type": "ImageObject",
                "url": "https://amarherbalorigins.com/logo.png",
                "width": 512,
                "height": 512
              },
              "image": "https://amarherbalorigins.com/og-home.jpg",
              "description": "Amar Herbal Origins is a Amreli, Gujarat, India-based exporter and manufacturer of psyllium husk (Isabgol), herbs, spices, seeds, and agricultural products. GST registered (24ICIPP6678D1Z4), MSME/Udyam registered (UDYAM-GJ-02-0036891). Supplying bulk B2B to pharma, food, and nutraceutical industries in 30+ countries.",
              "foundingDate": "2026",
              "taxID": "24ICIPP6678D1Z4",
              "identifier": [
                { "@type": "PropertyValue", "name": "GST Number", "value": "24ICIPP6678D1Z4" },
                { "@type": "PropertyValue", "name": "Udyam Registration", "value": "UDYAM-GJ-02-0036891" },
                { "@type": "PropertyValue", "name": "MSME Category", "value": "Micro Enterprise, Manufacturing" }
              ],
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "SARDAR CHOK, Navi Haliyad",
                "addressLocality": "Haliyad Navi",
                "addressRegion": "Gujarat",
                "addressCountry": "IN",
                "postalCode": "365440"
              },
              "areaServed": [
                { "@type": "Country", "name": "United States" },
                { "@type": "Country", "name": "Germany" },
                { "@type": "Country", "name": "United Kingdom" },
                { "@type": "Country", "name": "Canada" },
                { "@type": "Country", "name": "Australia" },
                { "@type": "Country", "name": "United Arab Emirates" },
                { "@type": "Country", "name": "Saudi Arabia" },
                { "@type": "Country", "name": "Netherlands" },
                { "@type": "Country", "name": "France" },
                { "@type": "Country", "name": "Japan" },
                { "@type": "Country", "name": "South Korea" },
                { "@type": "Country", "name": "Singapore" },
                { "@type": "Country", "name": "Malaysia" },
                { "@type": "Country", "name": "Italy" },
                { "@type": "Country", "name": "Spain" },
                { "@type": "Country", "name": "Poland" },
                { "@type": "Country", "name": "Belgium" },
                { "@type": "Country", "name": "Sweden" },
                { "@type": "Country", "name": "Denmark" },
                { "@type": "Country", "name": "New Zealand" },
                { "@type": "Country", "name": "South Africa" },
                { "@type": "Country", "name": "Thailand" },
                { "@type": "Country", "name": "Vietnam" },
                { "@type": "Country", "name": "Indonesia" }
              ],
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Herbal Products Export Catalog — Amar Herbal Origins",
                "itemListElement": [
                  { "@type": "Product", "name": "Psyllium Husk Powder", "description": "98-99% purity psyllium husk powder, pharmaceutical & food grade, 40-100 mesh" },
                  { "@type": "Product", "name": "Whole Psyllium Husk", "description": "99% purity whole psyllium husk (Isabgol), high swell factor" },
                  { "@type": "Product", "name": "Organic Psyllium Husk", "description": "USDA NOP & EU Organic certified psyllium husk from Gujarat farms" },
                  { "@type": "Product", "name": "Psyllium Seeds", "description": "Raw Plantago ovata seeds from Gujarat, India" },
                  { "@type": "Product", "name": "Moringa Powder", "description": "Spray-dried moringa leaf powder, export grade" },
                  { "@type": "Product", "name": "Castor Oil", "description": "Cold-pressed castor oil, pharmaceutical and industrial grade" }
                ]
              },
              "knowsAbout": [
                "Psyllium Husk Export",
                "Isabgol Manufacturing",
                "Indian Herbal Products",
                "Agri Commodity Export",
                "B2B Herbal Ingredients",
                "USDA Organic Certification",
                "International Trade & Export Documentation",
                "Phytosanitary Certification",
                "APEDA Registered Exporter"
              ],
              "sameAs": [
                "https://www.facebook.com/share/1GkPXqWkRg/",
                "https://www.instagram.com/amar_herbal_origins",
                "https://www.linkedin.com/company/amar-herbal-origins/",
                "https://youtube.com/@amar_herbal_origins",
                "https://x.com/Umang__Khunt"
              ],
              "contactPoint": [
                {
                  "@type": "ContactPoint",
                  "telephone": "+91-94084-65040",
                  "contactType": "sales",
                  "email": "amarherbalorigins@gmail.com",
                  "areaServed": "Worldwide",
                  "availableLanguage": ["English", "Hindi", "Arabic"]
                },
                {
                  "@type": "ContactPoint",
                  "telephone": "+91-94084-65040",
                  "contactType": "customer service",
                  "areaServed": "Worldwide"
                }
              ]
            })
          }}
        />

        {/* Person JSON-LD — Founder E-E-A-T signal for Google & AI systems */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Umang Khunt",
              "jobTitle": "Founder & Director",
              "worksFor": {
                "@type": "Organization",
                "name": "Amar Herbal Origins",
                "url": "https://amarherbalorigins.com"
              },
              "url": "https://amarherbalorigins.com/en/about",
              "knowsAbout": [
                "Psyllium Husk Export",
                "Indian Herbal Products",
                "Agri Commodity Trading",
                "B2B Herbal Ingredients",
                "Gujarat Spices and Herbs",
                "Organic Certification",
                "International Trade & Export Documentation"
              ],
              "hasCredential": [
                {
                  "@type": "EducationalOccupationalCredential",
                  "name": "ISO 22000 Certified Operations",
                  "credentialCategory": "Food Safety Management"
                }
              ],
              "image": "https://amarherbalorigins.com/umang-khunt.jpg",
              "sameAs": [
                "https://www.linkedin.com/company/amar-herbal-origins/",
                "https://x.com/Umang__Khunt"
              ]
            })
          }}
        />

        {/* WebSite JSON-LD — enables Google Sitelinks Search Box */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Amar Herbal Origins",
              "url": "https://amarherbalorigins.com",
              "potentialAction": {
                "@type": "SearchAction",
                "target": {
                  "@type": "EntryPoint",
                  "urlTemplate": "https://amarherbalorigins.com/en/k?q={search_term_string}"
                },
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />

        {/* Product Schema — enables Google Shopping-like rich results for our key products */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": "Product",
                "name": "Psyllium Husk Powder",
                "description": "Premium psyllium husk powder, 98-99% purity, 40-100 mesh. ISO 22000 & FSSAI certified. Pharmaceutical and food grade. Available in bulk wholesale quantities for B2B export.",
                "brand": { "@type": "Brand", "name": "Amar Herbal Origins" },
                "manufacturer": {
                  "@type": "Organization",
                  "name": "Amar Herbal Origins",
                  "address": { "@type": "PostalAddress", "addressLocality": "Ahmedabad", "addressRegion": "Gujarat", "addressCountry": "IN" }
                },
                "countryOfOrigin": { "@type": "Country", "name": "India" },
                "category": "Herbal Ingredients / Dietary Fiber",
                "url": "https://amarherbalorigins.com/en/product",
                "offers": {
                  "@type": "Offer",
                  "priceCurrency": "USD",
                  "availability": "https://schema.org/InStock",
                  "seller": { "@type": "Organization", "name": "Amar Herbal Origins" }
                },
                "additionalProperty": [
                  { "@type": "PropertyValue", "name": "Purity", "value": "98-99%" },
                  { "@type": "PropertyValue", "name": "Mesh Size", "value": "40-100" },
                  { "@type": "PropertyValue", "name": "MOQ", "value": "1 Metric Ton" },
                  { "@type": "PropertyValue", "name": "Origin", "value": "Gujarat & Rajasthan, India" },
                  { "@type": "PropertyValue", "name": "Certification", "value": "ISO 22000, FSSAI, Halal, Kosher" }
                ]
              },
              {
                "@context": "https://schema.org",
                "@type": "Product",
                "name": "Whole Psyllium Husk",
                "description": "99% purity whole psyllium husk (Isabgol). High swell factor, natural cut. ISO 22000 certified. Ideal for health supplements, OTC fiber products and food applications.",
                "brand": { "@type": "Brand", "name": "Amar Herbal Origins" },
                "countryOfOrigin": { "@type": "Country", "name": "India" },
                "url": "https://amarherbalorigins.com/en/product",
                "offers": {
                  "@type": "Offer",
                  "priceCurrency": "USD",
                  "availability": "https://schema.org/InStock",
                  "seller": { "@type": "Organization", "name": "Amar Herbal Origins" }
                },
                "additionalProperty": [
                  { "@type": "PropertyValue", "name": "Purity", "value": "99%" },
                  { "@type": "PropertyValue", "name": "MOQ", "value": "1 Metric Ton" },
                  { "@type": "PropertyValue", "name": "Certification", "value": "ISO 22000, FSSAI, Halal, Kosher" }
                ]
              },
              {
                "@context": "https://schema.org",
                "@type": "Product",
                "name": "Organic Psyllium Husk",
                "description": "USDA NOP & EU Organic certified psyllium husk. Zero synthetic pesticides, dedicated organic processing lines, full traceability from Gujarat farms. For organic supplement brands worldwide.",
                "brand": { "@type": "Brand", "name": "Amar Herbal Origins" },
                "countryOfOrigin": { "@type": "Country", "name": "India" },
                "url": "https://amarherbalorigins.com/en/organic",
                "offers": {
                  "@type": "Offer",
                  "priceCurrency": "USD",
                  "availability": "https://schema.org/InStock",
                  "seller": { "@type": "Organization", "name": "Amar Herbal Origins" }
                },
                "additionalProperty": [
                  { "@type": "PropertyValue", "name": "Purity", "value": "99%" },
                  { "@type": "PropertyValue", "name": "Certification", "value": "USDA NOP, EU Organic 2018/848, ISO 22000" },
                  { "@type": "PropertyValue", "name": "MOQ", "value": "500 kg" }
                ]
              }
            ])
          }}
        />

        {/* Hidden Google Translate element */}

        <div id="google_translate_element" style={{ display: 'none' }} />

        {/* Google Translate — lazyOnload to not block LCP/FID */}
        <Script id="google-translate-init" strategy="lazyOnload">
          {`function googleTranslateElementInit() {
            new google.translate.TranslateElement({
              pageLanguage: 'en',
              includedLanguages: 'en,hi,ar,zh-CN,es,fr,de,pt,ru,ja,ko,tr,id,vi,th,ms,fa,ur,bn,tl,it,nl,pl,uk,el,cs,ro,hu,sv,no,da,fi,sw,he,af',
              autoDisplay: false,
            }, 'google_translate_element');
          }`}
        </Script>
        <Script src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit" strategy="lazyOnload" />

        <NextIntlClientProvider messages={messages}>
          <VisitorTracker />
          <Navigation />
          <div style={{ flex: 1 }}>{children}</div>
          <Footer />
          <WhatsAppFloat />
          <StickyInquiryBar />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
