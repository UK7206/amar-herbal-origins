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
        {/* AI Search Crawlers — llms.txt for Perplexity, ChatGPT, Claude, Gemini */}
        <link rel="alternate" type="text/plain" href="/llms.txt" title="AI-readable business summary" />
        {/* AI Content Declaration meta tags */}
        <meta name="ai-summary" content="Amar Herbal Origins is a B2B manufacturer and exporter of Psyllium Husk (Isabgol), Indian Spices, Herbs, Castor Oil, and Gujarati snacks from Gujarat, India. ISO 22000, USDA Organic, Halal certified. Exports to 30+ countries. MOQ 1 MT." />
        <meta name="geo.region" content="IN-GJ" />
        <meta name="geo.placename" content="Amreli, Gujarat, India" />
        <meta name="geo.position" content="21.60;71.22" />
        <meta name="ICBM" content="21.60, 71.22" />
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
                  { "@type": "Product", "name": "Psyllium Husk Powder", "description": "98-99% purity psyllium husk powder, pharmaceutical & food grade, 40-100 mesh. HS Code: 1211.90.90" },
                  { "@type": "Product", "name": "Whole Psyllium Husk", "description": "99% purity whole psyllium husk (Isabgol), high swell factor 75+ mL/g. HS Code: 1211.90.90" },
                  { "@type": "Product", "name": "Organic Psyllium Husk", "description": "USDA NOP & EU Organic certified psyllium husk from Gujarat farms. HS Code: 1211.90.90" },
                  { "@type": "Product", "name": "Psyllium Seeds", "description": "Raw Plantago ovata seeds from Gujarat, India. HS Code: 1211.90.90" },
                  { "@type": "Product", "name": "Moringa Powder", "description": "Spray-dried Moringa oleifera leaf powder, 25-28% protein, bright green. HS Code: 2106.90.99" },
                  { "@type": "Product", "name": "Amla Powder", "description": "Dried Indian Gooseberry (Phyllanthus emblica) powder, 400+ mg/100g natural Vitamin C. HS Code: 0813.40.90" },
                  { "@type": "Product", "name": "Dried Mint", "description": "Dried spearmint and peppermint leaves, whole/crushed/powder. HS Code: 1211.90.50" },
                  { "@type": "Product", "name": "Curry Leaves", "description": "Dried Murraya koenigii leaves, whole/powder, rich in alkaloids. HS Code: 0910.99.90" },
                  { "@type": "Product", "name": "Dried Oregano", "description": "Origanum vulgare, whole/crushed/powder, high carvacrol. HS Code: 0910.99.90" },
                  { "@type": "Product", "name": "Turmeric Powder", "description": "Curcuma longa powder, 3-5% curcumin, bright yellow. HS Code: 0910.30.00" },
                  { "@type": "Product", "name": "Cumin Seeds", "description": "Cuminum cyminum whole seeds / powder from Gujarat. HS Code: 0909.31.00" },
                  { "@type": "Product", "name": "Coriander Seeds", "description": "Coriandrum sativum whole seeds / powder. HS Code: 0909.21.00" },
                  { "@type": "Product", "name": "Fenugreek Seeds", "description": "Trigonella foenum-graecum seeds / kasuri methi. HS Code: 1207.50.00" },
                  { "@type": "Product", "name": "Ajwain Seeds", "description": "Trachyspermum ammi carom seeds, 35-60% thymol. HS Code: 0909.21.00" },
                  { "@type": "Product", "name": "Castor Oil", "description": "Cold-pressed Ricinus communis oil, pharmaceutical (BP/USP), cosmetic & industrial grade, 85%+ ricinoleic acid. HS Code: 1515.30.00" },
                  { "@type": "Product", "name": "Karanja Oil", "description": "Cold-pressed Pongamia pinnata oil for biopesticides, cosmetics, biofuel. HS Code: 1515.90.40" },
                  { "@type": "Product", "name": "Khakhra", "description": "Traditional Gujarati crispy wheat flatbread snack, multiple flavors, private label available. HS Code: 1902.30.90" }
                ]
              },
              "knowsAbout": [
                "Psyllium Husk Export",
                "Isabgol Manufacturing",
                "Indian Herbal Products",
                "Moringa Powder Export",
                "Indian Spices Export",
                "Castor Oil Export India",
                "Karanja Oil Pongamia Export",
                "Turmeric Powder Export",
                "Cumin Seeds Export",
                "Fenugreek Seeds Export",
                "Agri Commodity Export",
                "B2B Herbal Ingredients",
                "USDA Organic Certification",
                "International Trade & Export Documentation",
                "Phytosanitary Certification",
                "APEDA Registered Exporter",
                "Cold Pressed Herbal Oils",
                "Ayurvedic Ingredients Export",
                "Ready-to-Eat Gujarati Snacks Export"
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

        {/* Speakable schema — tells AI search & voice assistants which content to cite/read aloud.
            Perplexity, Google SGE, and voice assistants use this to identify the most important
            descriptive text about this business. Critical for AEO (Answer Engine Optimization). */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              "speakable": {
                "@type": "SpeakableSpecification",
                "cssSelector": [
                  ".geo-entity-statement",      // GEOEntitySection main paragraph
                  ".page-hero-description",     // Hero descriptions on key pages
                  ".faq-answer",               // FAQ answers for voice Q&A
                  "h1",                         // Page H1 headings
                  ".speakable"                  // Any element explicitly marked
                ]
              },
              "name": "Amar Herbal Origins — Psyllium Husk Manufacturer & Exporter India",
              "description": "Amar Herbal Origins is a Gujarat, India-based B2B manufacturer and exporter of Psyllium Husk (Isabgol), Indian Spices, Herbs, Cold-Pressed Oils, and Gujarati Ready-to-Eat snacks. ISO 22000, FSSAI, USDA Organic, EU Organic, Halal, and Kosher certified. Exporting to 30+ countries. MOQ 1 MT. Free sample available.",
              "url": "https://amarherbalorigins.com/en",
              "primaryImageOfPage": { "@type": "ImageObject", "url": "https://amarherbalorigins.com/og-home.jpg" }
            })
          }}
        />

        {/* Product Schema — enables Google Product Snippets + Merchant Listings rich results */}
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
                "manufacturer": { "@type": "Organization", "name": "Amar Herbal Origins" },
                "countryOfOrigin": { "@type": "Country", "name": "India" },
                "url": "https://amarherbalorigins.com/en/product",
                "image": "https://amarherbalorigins.com/psyllium-powder.png",
                "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.8", "reviewCount": "14", "bestRating": "5" },
                "offers": { "@type": "Offer", "availability": "https://schema.org/InStock", "seller": { "@type": "Organization", "name": "Amar Herbal Origins" }, "hasMerchantReturnPolicy": { "@type": "MerchantReturnPolicy", "returnPolicyCategory": "https://schema.org/MerchantReturnFiniteReturnWindow", "merchantReturnDays": 30, "returnMethod": "https://schema.org/ReturnByMail", "returnFees": "https://schema.org/FreeReturn" }, "shippingDetails": { "@type": "OfferShippingDetails", "shippingRate": { "@type": "MonetaryAmount", "value": "0", "currency": "USD" }, "shippingDestination": { "@type": "DefinedRegion", "addressCountry": "US" }, "deliveryTime": { "@type": "ShippingDeliveryTime", "handlingTime": { "@type": "QuantitativeValue", "minValue": 7, "maxValue": 14, "unitCode": "DAY" }, "transitTime": { "@type": "QuantitativeValue", "minValue": 18, "maxValue": 28, "unitCode": "DAY" } } } }
              },
              {
                "@context": "https://schema.org",
                "@type": "Product",
                "name": "Whole Psyllium Husk",
                "description": "99% purity whole psyllium husk (Isabgol). High swell factor 75+ mL/g. Ideal for health supplements.",
                "brand": { "@type": "Brand", "name": "Amar Herbal Origins" },
                "countryOfOrigin": { "@type": "Country", "name": "India" },
                "url": "https://amarherbalorigins.com/en/product",
                "image": "https://amarherbalorigins.com/psyllium-whole.png",
                "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.9", "reviewCount": "11", "bestRating": "5" },
                "offers": { "@type": "Offer", "availability": "https://schema.org/InStock", "seller": { "@type": "Organization", "name": "Amar Herbal Origins" }, "hasMerchantReturnPolicy": { "@type": "MerchantReturnPolicy", "returnPolicyCategory": "https://schema.org/MerchantReturnFiniteReturnWindow", "merchantReturnDays": 30, "returnMethod": "https://schema.org/ReturnByMail", "returnFees": "https://schema.org/FreeReturn" }, "shippingDetails": { "@type": "OfferShippingDetails", "shippingRate": { "@type": "MonetaryAmount", "value": "0", "currency": "USD" }, "shippingDestination": { "@type": "DefinedRegion", "addressCountry": "US" }, "deliveryTime": { "@type": "ShippingDeliveryTime", "handlingTime": { "@type": "QuantitativeValue", "minValue": 7, "maxValue": 14, "unitCode": "DAY" }, "transitTime": { "@type": "QuantitativeValue", "minValue": 18, "maxValue": 28, "unitCode": "DAY" } } } }
              },
              {
                "@context": "https://schema.org",
                "@type": "Product",
                "name": "Organic Psyllium Husk",
                "description": "USDA NOP & EU Organic certified psyllium husk. Full traceability.",
                "brand": { "@type": "Brand", "name": "Amar Herbal Origins" },
                "countryOfOrigin": { "@type": "Country", "name": "India" },
                "url": "https://amarherbalorigins.com/en/organic",
                "image": "https://amarherbalorigins.com/psyllium-whole.png",
                "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.9", "reviewCount": "8", "bestRating": "5" },
                "offers": { "@type": "Offer", "availability": "https://schema.org/InStock", "seller": { "@type": "Organization", "name": "Amar Herbal Origins" }, "hasMerchantReturnPolicy": { "@type": "MerchantReturnPolicy", "returnPolicyCategory": "https://schema.org/MerchantReturnFiniteReturnWindow", "merchantReturnDays": 30, "returnMethod": "https://schema.org/ReturnByMail", "returnFees": "https://schema.org/FreeReturn" }, "shippingDetails": { "@type": "OfferShippingDetails", "shippingRate": { "@type": "MonetaryAmount", "value": "0", "currency": "USD" }, "shippingDestination": { "@type": "DefinedRegion", "addressCountry": "US" }, "deliveryTime": { "@type": "ShippingDeliveryTime", "handlingTime": { "@type": "QuantitativeValue", "minValue": 7, "maxValue": 14, "unitCode": "DAY" }, "transitTime": { "@type": "QuantitativeValue", "minValue": 18, "maxValue": 28, "unitCode": "DAY" } } } }
              },
              {
                "@context": "https://schema.org",
                "@type": "Product",
                "name": "Psyllium Seeds",
                "description": "Raw Plantago ovata seeds from Gujarat, India.",
                "brand": { "@type": "Brand", "name": "Amar Herbal Origins" },
                "countryOfOrigin": { "@type": "Country", "name": "India" },
                "image": "https://amarherbalorigins.com/product.jpg",
                "offers": { "@type": "Offer", "availability": "https://schema.org/InStock", "seller": { "@type": "Organization", "name": "Amar Herbal Origins" }, "hasMerchantReturnPolicy": { "@type": "MerchantReturnPolicy", "returnPolicyCategory": "https://schema.org/MerchantReturnFiniteReturnWindow", "merchantReturnDays": 30, "returnMethod": "https://schema.org/ReturnByMail", "returnFees": "https://schema.org/FreeReturn" }, "shippingDetails": { "@type": "OfferShippingDetails", "shippingRate": { "@type": "MonetaryAmount", "value": "0", "currency": "USD" }, "shippingDestination": { "@type": "DefinedRegion", "addressCountry": "US" }, "deliveryTime": { "@type": "ShippingDeliveryTime", "handlingTime": { "@type": "QuantitativeValue", "minValue": 7, "maxValue": 14, "unitCode": "DAY" }, "transitTime": { "@type": "QuantitativeValue", "minValue": 18, "maxValue": 28, "unitCode": "DAY" } } } }
              },
              {
                "@context": "https://schema.org",
                "@type": "Product",
                "name": "Moringa Powder",
                "description": "Spray-dried Moringa oleifera leaf powder. 25-28% protein. Bright green color. ISO 22000 & FSSAI certified. B2B bulk export from India.",
                "brand": { "@type": "Brand", "name": "Amar Herbal Origins" },
                "countryOfOrigin": { "@type": "Country", "name": "India" },
                "url": "https://amarherbalorigins.com/en/herbs/moringa",
                "image": "https://amarherbalorigins.com/psyllium-hero.png",
                "aggregateRating": {
                  "@type": "AggregateRating",
                  "ratingValue": "4.8",
                  "reviewCount": "7",
                  "bestRating": "5"
                },
                "offers": {
                  "@type": "Offer",
                  "price": "2500",
                  "priceCurrency": "USD",
                  "priceSpecification": {
                    "@type": "UnitPriceSpecification",
                    "price": "2500",
                    "priceCurrency": "USD",
                    "unitText": "MT",
                    "description": "FOB Mundra, per Metric Ton, minimum 100 kg"
                  },
                  "availability": "https://schema.org/InStock",
                  "seller": { "@type": "Organization", "name": "Amar Herbal Origins", "url": "https://amarherbalorigins.com" },
                  "hasMerchantReturnPolicy": {
                    "@type": "MerchantReturnPolicy",
                    "returnPolicyCategory": "https://schema.org/MerchantReturnFiniteReturnWindow",
                    "merchantReturnDays": 30,
                    "returnMethod": "https://schema.org/ReturnByMail",
                    "returnFees": "https://schema.org/FreeReturn"
                  },
                  "shippingDetails": {
                    "@type": "OfferShippingDetails",
                    "shippingRate": { "@type": "MonetaryAmount", "value": "0", "currency": "USD" },
                    "shippingDestination": { "@type": "DefinedRegion", "addressCountry": "US" },
                    "deliveryTime": {
                      "@type": "ShippingDeliveryTime",
                      "handlingTime": { "@type": "QuantitativeValue", "minValue": 7, "maxValue": 14, "unitCode": "DAY" },
                      "transitTime": { "@type": "QuantitativeValue", "minValue": 18, "maxValue": 28, "unitCode": "DAY" }
                    }
                  }
                },
                "additionalProperty": [
                  { "@type": "PropertyValue", "name": "Protein", "value": "25-28% per 100g" },
                  { "@type": "PropertyValue", "name": "MOQ", "value": "100 kg" },
                  { "@type": "PropertyValue", "name": "Certification", "value": "ISO 22000, FSSAI, Halal" }
                ]
              },
              {
                "@context": "https://schema.org",
                "@type": "Product",
                "name": "Turmeric Powder",
                "description": "Curcuma longa powder. 3-5% curcumin, bright yellow. FSSAI & ISO 22000 certified. B2B bulk export from Gujarat, India.",
                "brand": { "@type": "Brand", "name": "Amar Herbal Origins" },
                "countryOfOrigin": { "@type": "Country", "name": "India" },
                "url": "https://amarherbalorigins.com/en/spices/turmeric",
                "image": "https://amarherbalorigins.com/psyllium-hero.png",
                "aggregateRating": {
                  "@type": "AggregateRating",
                  "ratingValue": "4.8",
                  "reviewCount": "10",
                  "bestRating": "5"
                },
                "offers": {
                  "@type": "Offer",
                  "price": "1800",
                  "priceCurrency": "USD",
                  "priceSpecification": {
                    "@type": "UnitPriceSpecification",
                    "price": "1800",
                    "priceCurrency": "USD",
                    "unitText": "MT",
                    "description": "FOB Mundra, per Metric Ton, minimum 500 kg"
                  },
                  "availability": "https://schema.org/InStock",
                  "seller": { "@type": "Organization", "name": "Amar Herbal Origins", "url": "https://amarherbalorigins.com" },
                  "hasMerchantReturnPolicy": {
                    "@type": "MerchantReturnPolicy",
                    "returnPolicyCategory": "https://schema.org/MerchantReturnFiniteReturnWindow",
                    "merchantReturnDays": 30,
                    "returnMethod": "https://schema.org/ReturnByMail",
                    "returnFees": "https://schema.org/FreeReturn"
                  },
                  "shippingDetails": {
                    "@type": "OfferShippingDetails",
                    "shippingRate": { "@type": "MonetaryAmount", "value": "0", "currency": "USD" },
                    "shippingDestination": { "@type": "DefinedRegion", "addressCountry": "US" },
                    "deliveryTime": {
                      "@type": "ShippingDeliveryTime",
                      "handlingTime": { "@type": "QuantitativeValue", "minValue": 7, "maxValue": 14, "unitCode": "DAY" },
                      "transitTime": { "@type": "QuantitativeValue", "minValue": 18, "maxValue": 28, "unitCode": "DAY" }
                    }
                  }
                },
                "additionalProperty": [
                  { "@type": "PropertyValue", "name": "Curcumin", "value": "3-5%" },
                  { "@type": "PropertyValue", "name": "MOQ", "value": "500 kg" },
                  { "@type": "PropertyValue", "name": "Certification", "value": "ISO 22000, FSSAI, Halal" }
                ]
              }
            ])
          }}
        />

        {/* ItemList JSON-LD — tells Google about top blog posts for potential Sitelinks display */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ItemList",
              "name": "Amar Herbal Origins — Expert Guides for B2B Herbal Buyers",
              "description": "In-depth guides for global buyers of psyllium husk, castor oil, moringa, spices, and herbs from India",
              "url": "https://amarherbalorigins.com/en/blog",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Isabgol vs Psyllium Husk: Are They the Same?",
                  "url": "https://amarherbalorigins.com/en/blog/isabgol-vs-psyllium-husk-difference",
                  "description": "Isabgol and psyllium husk are the same product. Isabgol is the Hindi name for Plantago ovata husk. Complete guide for B2B buyers."
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "Psyllium Husk HS Code & Import Duties: Complete Guide",
                  "url": "https://amarherbalorigins.com/en/blog/psyllium-husk-hs-code-import-duties",
                  "description": "HS code 1211.90.90 — 0% import duty in USA, EU, UK, Canada, Australia. Complete guide for customs classification."
                },
                {
                  "@type": "ListItem",
                  "position": 3,
                  "name": "Castor Oil Manufacturer India: Cold-Pressed, Pharmaceutical & Cosmetic Grade",
                  "url": "https://amarherbalorigins.com/en/blog/castor-oil-manufacturer-india",
                  "description": "India produces 60%+ of global castor oil. Gujarat-based cold-pressed castor oil — BP/USP pharmaceutical grade. MOQ 200L."
                },
                {
                  "@type": "ListItem",
                  "position": 4,
                  "name": "Moringa Powder Exporter India: B2B Supplier Guide",
                  "url": "https://amarherbalorigins.com/en/blog/moringa-powder-exporter-india",
                  "description": "India exports 80% of world moringa supply. Spray-dried moringa leaf powder with 25-28% protein. ISO 22000, Organic certified."
                },
                {
                  "@type": "ListItem",
                  "position": 5,
                  "name": "Indian Spices Exporter: Turmeric, Cumin, Coriander & Fenugreek 2026",
                  "url": "https://amarherbalorigins.com/en/blog/indian-spices-exporter-india",
                  "description": "India exports 75%+ of world spices. Bulk turmeric, cumin, coriander, fenugreek, ajwain from Gujarat. ISO 22000, FSSAI certified."
                },
                {
                  "@type": "ListItem",
                  "position": 6,
                  "name": "Psyllium Husk Price 2026: Current Rates from India",
                  "url": "https://amarherbalorigins.com/en/blog/psyllium-husk-price-2026-india",
                  "description": "2026 psyllium husk FOB price: USD 1,100-2,100/MT. Unjha mandi rates, seasonal patterns, grade premiums explained."
                },
                {
                  "@type": "ListItem",
                  "position": 7,
                  "name": "How to Verify Psyllium Husk Suppliers in India",
                  "url": "https://amarherbalorigins.com/en/blog/how-to-find-verify-psyllium-husk-suppliers-india",
                  "description": "Due diligence checklist: verify IEC, APEDA, FSSAI, organic certificates before buying from any Indian psyllium supplier."
                }
              ]
            })
          }}
        />

        {/* DefinedTerm JSON-LD — AEO gold: explicitly tells AI engines what each product is.
            When Perplexity/ChatGPT is asked "what is isabgol?", "what is moringa?", "what is
            turmeric used for?", these schemas help associate the answer with Amar Herbal Origins. */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": "DefinedTerm",
                "name": "Isabgol",
                "alternateName": ["Psyllium Husk", "Ispaghula Husk", "Blond Psyllium", "Psyllium", "Ispaghol"],
                "description": "Isabgol is the Hindi and Urdu name for psyllium husk — the outer seed coat of Plantago ovata seeds. Isabgol, psyllium husk, and ispaghula husk are the same product. India, particularly Gujarat and Rajasthan, produces over 85% of the world supply. Used as a dietary fiber supplement in pharmaceuticals, food, and nutraceuticals. HS Code: 1211.90.90. 0% import duty in USA, EU, UK, Canada, and Australia.",
                "inDefinedTermSet": {
                  "@type": "DefinedTermSet",
                  "name": "Indian Herbal Export Glossary",
                  "hasDefinedTerm": [
                    { "@type": "DefinedTerm", "name": "Isabgol", "alternateName": "Psyllium Husk" },
                    { "@type": "DefinedTerm", "name": "Ispaghula Husk", "alternateName": "Psyllium Husk" },
                    { "@type": "DefinedTerm", "name": "Haldi", "alternateName": "Turmeric" },
                    { "@type": "DefinedTerm", "name": "Jeera", "alternateName": "Cumin Seeds" },
                    { "@type": "DefinedTerm", "name": "Methi", "alternateName": "Fenugreek Seeds" },
                    { "@type": "DefinedTerm", "name": "Amla", "alternateName": "Indian Gooseberry" },
                    { "@type": "DefinedTerm", "name": "Pudina", "alternateName": "Dried Mint" },
                    { "@type": "DefinedTerm", "name": "Kadi Patta", "alternateName": "Curry Leaves" },
                    { "@type": "DefinedTerm", "name": "Pongamia Oil", "alternateName": "Karanja Oil" },
                    { "@type": "DefinedTerm", "name": "FOB Mundra", "description": "Free On Board Mundra Port — the primary export port for psyllium husk and herbal products from Gujarat, India" },
                    { "@type": "DefinedTerm", "name": "Unjha APMC", "description": "Unjha Agricultural Produce Market Committee — world's largest psyllium husk (isabgol) trading market, located in North Gujarat, India" }
                  ]
                },
                "url": "https://amarherbalorigins.com/en/blog/isabgol-vs-psyllium-husk-difference"
              },
              {
                "@context": "https://schema.org",
                "@type": "DefinedTerm",
                "name": "Psyllium Husk",
                "alternateName": ["Isabgol", "Ispaghula Husk", "Plantago ovata husk", "Flohsamenschalen"],
                "description": "Psyllium husk is the outer seed coat of Plantago ovata, a plant cultivated primarily in Gujarat and Rajasthan, India. It is the world's leading natural dietary fiber supplement, used in FDA-approved OTC laxatives, cholesterol management products, IBS treatment, and food fiber enrichment. India produces 85%+ of global supply. Amar Herbal Origins is a Gujarat-based manufacturer and exporter of psyllium husk (Isabgol) supplying to 30+ countries.",
                "url": "https://amarherbalorigins.com/en/psyllium"
              },
              {
                "@context": "https://schema.org",
                "@type": "DefinedTerm",
                "name": "Moringa Powder",
                "alternateName": ["Moringa oleifera powder", "Drumstick powder", "Moringa leaf powder"],
                "description": "Moringa powder is made from spray-dried or drum-dried leaves of Moringa oleifera — the 'miracle tree'. It contains 25-28% protein per 100g dry weight, Vitamin A, Vitamin C, iron, and calcium. India produces 80%+ of world moringa supply. Used in nutritional supplements, superfoods, food fortification, and cosmetics. Amar Herbal Origins exports moringa leaf powder from Gujarat, India. HS Code: 2106.90.99. MOQ: 100 kg.",
                "url": "https://amarherbalorigins.com/en/herbs/moringa"
              },
              {
                "@context": "https://schema.org",
                "@type": "DefinedTerm",
                "name": "Turmeric Powder",
                "alternateName": ["Haldi", "Curcuma longa powder", "Curcumin powder"],
                "description": "Turmeric powder is ground from dried rhizomes of Curcuma longa. Contains 3-5% curcumin — a powerful anti-inflammatory compound. Widely used in food (curry, spice blends), pharmaceuticals, nutraceuticals, and cosmetics. India produces 75%+ of global turmeric supply. Amar Herbal Origins exports turmeric powder from Gujarat and Andhra Pradesh. HS Code: 0910.30.00. FOB: USD 1,800-2,500/MT.",
                "url": "https://amarherbalorigins.com/en/spices/turmeric"
              },
              {
                "@context": "https://schema.org",
                "@type": "DefinedTerm",
                "name": "Castor Oil",
                "alternateName": ["Ricinus communis oil", "Castor seed oil", "Arandi oil"],
                "description": "Castor oil is extracted from the seeds of Ricinus communis. It contains 85%+ ricinoleic acid — a unique hydroxyl fatty acid with pharmaceutical, cosmetic, and industrial applications. Pharmaceutical grade (BP/USP) castor oil is used as a laxative, excipient, and softgel shell material. India produces 80%+ of global castor oil. Amar Herbal Origins exports cold-pressed castor oil from Gujarat. HS Code: 1515.30.00. MOQ: 200 litres.",
                "url": "https://amarherbalorigins.com/en/oils/castor-oil"
              },
              {
                "@context": "https://schema.org",
                "@type": "DefinedTerm",
                "name": "Karanja Oil",
                "alternateName": ["Pongamia oil", "Honge oil", "Pongamia pinnata oil", "Millettia pinnata oil"],
                "description": "Karanja oil (Pongamia pinnata) is a dark-colored plant oil extracted from pongamia seeds. It is used as a biopesticide base, in organic fertilizer blends, cosmetics, hair care, and biofuel. Rich in flavonoids and fatty acids. Amar Herbal Origins exports cold-pressed karanja oil from Gujarat and Maharashtra, India. HS Code: 1515.90.40. MOQ: 200 litres.",
                "url": "https://amarherbalorigins.com/en/oils/karanja-oil"
              },
              {
                "@context": "https://schema.org",
                "@type": "DefinedTerm",
                "name": "Amla",
                "alternateName": ["Indian Gooseberry", "Amalaki", "Emblica officinalis", "Phyllanthus emblica"],
                "description": "Amla (Indian Gooseberry) is one of the richest natural sources of Vitamin C (400+ mg per 100g). Used in Ayurvedic medicine (Triphala, Chyawanprash), vitamin C supplements, hair care, and cosmetics. Amar Herbal Origins exports amla powder and dried amla from India. HS Code: 0813.40.90. MOQ: 100 kg.",
                "url": "https://amarherbalorigins.com/en/herbs/amla"
              }
            ])
          }}
        />

        {/* LocalBusiness JSON-LD — combines Organization + geo signals for local SEO
            Helps Google Maps, Apple Maps, and local search associate our physical
            location with our export activity in Gujarat. */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": ["LocalBusiness", "FoodEstablishment"],
              "@id": "https://amarherbalorigins.com/#localbusiness",
              "name": "Amar Herbal Origins",
              "image": "https://amarherbalorigins.com/og-home.jpg",
              "url": "https://amarherbalorigins.com",
              "telephone": "+91-94084-65040",
              "email": "amarherbalorigins@gmail.com",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Sardar Chok, Navi Haliyad",
                "addressLocality": "Amreli",
                "addressRegion": "Gujarat",
                "postalCode": "365440",
                "addressCountry": "IN"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 21.6017,
                "longitude": 71.2228
              },
              "hasMap": "https://maps.google.com/?q=Amreli,Gujarat,India",
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                  "opens": "09:00",
                  "closes": "18:00"
                }
              ],
              "priceRange": "$$",
              "currenciesAccepted": "USD, EUR, GBP, AED, INR",
              "paymentAccepted": "T/T Bank Transfer, LC at sight",
              "description": "Amar Herbal Origins is a Gujarat-based B2B manufacturer and exporter of Psyllium Husk (Isabgol), Indian Spices, Herbs, Cold-Pressed Oils. ISO 22000, FSSAI, USDA Organic, Halal certified. Exporting to 30+ countries.",
              "sameAs": [
                "https://www.facebook.com/share/1GkPXqWkRg/",
                "https://www.instagram.com/amar_herbal_origins",
                "https://www.linkedin.com/company/amar-herbal-origins/",
                "https://youtube.com/@amar_herbal_origins"
              ]
            })
          }}
        />

        {/* International Trade / Offer schema — signals to AI that we do B2B export.
            Perplexity and ChatGPT use this when answering:
            "Who supplies psyllium husk / moringa / turmeric / castor oil in bulk to [country]?" */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Offer",
              "name": "Bulk Herbal Products B2B Export — Amar Herbal Origins",
              "description": "Bulk B2B export from India: Psyllium Husk (Isabgol), Moringa Powder, Turmeric, Cumin, Coriander, Fenugreek, Ajwain, Amla, Mint, Curry Leaves, Oregano, Castor Oil, Karanja Oil, Khakhra. ISO 22000, USDA Organic, EU Organic, Halal, Kosher certified. FOB Mundra. Supply to 30+ countries.",
              "seller": {
                "@type": "Organization",
                "name": "Amar Herbal Origins",
                "@id": "https://amarherbalorigins.com/#organization"
              },
              "itemOffered": [
                { "@type": "Product", "name": "Psyllium Husk Powder 98%", "description": "98% purity, 40-100 mesh, pharmaceutical & food grade. ISO 22000, FSSAI, Halal certified. HS: 1211.90.90" },
                { "@type": "Product", "name": "Whole Psyllium Husk 99%", "description": "99% purity whole husk, high swell factor 75+ mL/g. HS: 1211.90.90" },
                { "@type": "Product", "name": "Organic Psyllium Husk", "description": "USDA NOP & EU Organic 2018/848 certified. MOQ 500 kg. HS: 1211.90.90" },
                { "@type": "Product", "name": "Psyllium Seeds", "description": "Raw Plantago ovata seeds from Gujarat, India. HS: 1211.90.90" },
                { "@type": "Product", "name": "Moringa Powder", "description": "Spray-dried Moringa oleifera leaf powder, 25-28% protein. MOQ 100 kg. HS: 2106.90.99" },
                { "@type": "Product", "name": "Amla Powder", "description": "Phyllanthus emblica (Indian Gooseberry) powder, 400+ mg/100g Vitamin C. MOQ 100 kg. HS: 0813.40.90" },
                { "@type": "Product", "name": "Dried Mint", "description": "Mentha spicata/piperita dried leaves/powder. MOQ 100 kg. HS: 1211.90.50" },
                { "@type": "Product", "name": "Curry Leaves", "description": "Dried Murraya koenigii leaves. MOQ 50 kg. HS: 0910.99.90" },
                { "@type": "Product", "name": "Dried Oregano", "description": "Origanum vulgare, high carvacrol. MOQ 100 kg. HS: 0910.99.90" },
                { "@type": "Product", "name": "Turmeric Powder", "description": "Curcuma longa, 3-5% curcumin, FSSAI & ISO 22000. MOQ 500 kg. HS: 0910.30.00" },
                { "@type": "Product", "name": "Cumin Seeds", "description": "Cuminum cyminum whole/powder, Gujarat origin. MOQ 500 kg. HS: 0909.31.00" },
                { "@type": "Product", "name": "Coriander Seeds", "description": "Coriandrum sativum whole/powder. MOQ 500 kg. HS: 0909.21.00" },
                { "@type": "Product", "name": "Fenugreek Seeds", "description": "Trigonella foenum-graecum seeds/kasuri methi. MOQ 500 kg. HS: 1207.50.00" },
                { "@type": "Product", "name": "Ajwain Seeds", "description": "Trachyspermum ammi carom seeds, 35-60% thymol. MOQ 500 kg. HS: 0909.21.00" },
                { "@type": "Product", "name": "Castor Oil", "description": "Cold-pressed Ricinus communis, pharmaceutical (BP/USP) & cosmetic grade, 85%+ ricinoleic acid. MOQ 200 L. HS: 1515.30.00" },
                { "@type": "Product", "name": "Karanja Oil", "description": "Cold-pressed Pongamia pinnata oil for biopesticides, cosmetics, biofuel. MOQ 200 L. HS: 1515.90.40" },
                { "@type": "Product", "name": "Khakhra", "description": "Gujarati crispy wheat flatbread, private label from 500 units. HS: 1902.30.90" }
              ],
              "priceCurrency": "USD",
              "eligibleRegion": [
                { "@type": "Country", "name": "United States" },
                { "@type": "Country", "name": "Germany" },
                { "@type": "Country", "name": "United Kingdom" },
                { "@type": "Country", "name": "United Arab Emirates" },
                { "@type": "Country", "name": "Australia" },
                { "@type": "Country", "name": "Canada" },
                { "@type": "Country", "name": "Netherlands" },
                { "@type": "Country", "name": "Saudi Arabia" },
                { "@type": "Country", "name": "Singapore" },
                { "@type": "Country", "name": "Japan" },
                { "@type": "Country", "name": "France" },
                { "@type": "Country", "name": "South Korea" },
                { "@type": "Country", "name": "Malaysia" },
                { "@type": "Country", "name": "Sweden" },
                { "@type": "Country", "name": "Denmark" },
                { "@type": "Country", "name": "New Zealand" },
                { "@type": "Country", "name": "South Africa" },
                { "@type": "Country", "name": "Indonesia" },
                { "@type": "Country", "name": "Thailand" },
                { "@type": "Country", "name": "Vietnam" }
              ],
              "availability": "https://schema.org/InStock",
              "deliveryLeadTime": {
                "@type": "QuantitativeValue",
                "minValue": 7,
                "maxValue": 14,
                "unitCode": "DAY"
              },
              "url": "https://amarherbalorigins.com/en/contact"
            })
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

        </NextIntlClientProvider>
      </body>
    </html>
  );
}
