'use client';

import { useState } from 'react';
import Link from 'next/link';


const FAQS = [
  {
    question: 'What is psyllium husk and what is it used for?',
    answer:
      'Psyllium husk (also known as Isabgol or ispaghula husk) is the outer seed coat of Plantago ovata, a plant grown primarily in Gujarat and Rajasthan, India. It is a natural soluble dietary fiber used in pharmaceuticals (laxatives, cholesterol management), food products (fiber-enriched foods, gluten-free baking), and nutraceutical supplements. India produces over 85% of the world\'s supply.',
    learnMore: { href: '/en/blog/isabgol-vs-psyllium-husk-difference', label: 'Isabgol vs Psyllium Husk: Complete Guide →' },
  },
  {
    question: 'What is Isabgol — is it the same as psyllium husk?',
    answer:
      'Yes — Isabgol and psyllium husk are 100% the same product. "Isabgol" is the Hindi and Urdu name for the husk of Plantago ovata seeds. Western pharmaceutical markets use the term "psyllium husk" or "ispaghula husk" (UK). All three names refer to identical material. India — particularly Gujarat and Rajasthan — produces 85%+ of the global supply. Amar Herbal Origins exports this product under any labeling required by the buyer\'s market.',
    learnMore: { href: '/en/blog/isabgol-vs-psyllium-husk-difference', label: 'Full Isabgol vs Psyllium Guide →' },
  },
  {
    question: 'What is the minimum order quantity (MOQ) for psyllium husk?',
    answer:
      'Our standard MOQ is 1 Metric Ton (1,000 kg) for regular psyllium husk powder and whole husk. For USDA Organic certified psyllium husk, the MOQ is 500 kg. For private label or white-label packaging, the MOQ starts from 100 kg. Free samples are available before bulk orders.',
    learnMore: { href: '/en/blog/wholesale-bulk-psyllium-husk-india', label: 'Wholesale Procurement Guide →' },
  },
  {
    question: 'What certifications does Amar Herbal Origins hold?',
    answer:
      'Amar Herbal Origins is certified under ISO 22000 (food safety management), FSSAI (Indian food safety), USDA NOP Organic, EU Organic (2018/848), Halal, Kosher, and APEDA (Agricultural and Processed Food Products Export Development Authority). Full certificates and a Certificate of Analysis (COA) are provided with every shipment.',
    learnMore: { href: '/en/psyllium/blog/psyllium-husk-certifications-export', label: 'Certifications Guide: ISO, Halal, Organic →' },
  },
  {
    question: 'How to import psyllium husk from India to USA?',
    answer:
      'Importing psyllium husk from India to the USA is straightforward: (1) HS Code 1211.90.91 — 0% import duty under US MFN rate. (2) Required documents: Commercial Invoice, Packing List, Bill of Lading, Certificate of Origin (APEDA), Phytosanitary Certificate, Fumigation Certificate, COA. (3) FDA Prior Notice must be submitted before arrival. (4) Transit: 21–28 days via Mundra Port to US West or East Coast. Amar Herbal Origins handles all export documentation and can coordinate with your US customs broker.',
    learnMore: { href: '/en/psyllium/suppliers/usa', label: 'Psyllium Husk Supply to USA →' },
  },
  {
    question: 'Is psyllium husk from India FDA approved?',
    answer:
      'Psyllium husk has FDA GRAS (Generally Recognized As Safe) status and is the active ingredient in FDA-approved OTC laxative products like Metamucil. Indian psyllium husk exported by certified suppliers like Amar Herbal Origins is compliant with FDA 21 CFR Part 111 (dietary supplements) and 21 CFR Part 117 (food). We provide all FDA-required documentation including COA, phytosanitary certificate, and facility details.',
    learnMore: { href: '/en/psyllium/quality', label: 'Quality & Compliance Documentation →' },
  },
  {
    question: 'Can I get EU Organic certified psyllium husk from India to Germany?',
    answer:
      'Yes. Amar Herbal Origins holds EU Organic certification under Regulation 2018/848. German and EU buyers can import directly without re-certification. Import duty is 0% (EU Combined Nomenclature 1211 90 86). We provide: EU Organic Certificate, Certificate of Analysis, Phytosanitary Certificate, and EUR.1 Form. Transit time: 22–30 days via Mundra to Hamburg or Rotterdam.',
    learnMore: { href: '/en/organic', label: 'EU Organic Psyllium Husk →' },
  },
  {
    question: 'Is psyllium husk Halal certified — suitable for UAE and Saudi Arabia?',
    answer:
      'Yes. Psyllium husk is 100% plant-derived from Plantago ovata seeds — no animal ingredients and no alcohol in processing. Amar Herbal Origins is Halal certified (HFCE-compatible, aligned with UAE ESMA standard UAE.S 2055-1). We supply to UAE pharmacies, Saudi distributors, and GCC health food brands. Arabic labeling is available on request. Transit: 10–14 days from Mundra to Jebel Ali (Dubai).',
    learnMore: { href: '/en/psyllium/suppliers/uae', label: 'Psyllium Husk Supply to UAE →' },
  },
  {
    question: 'Can you supply psyllium husk to Australia with phytosanitary certificate?',
    answer:
      'Yes. A Government of India-issued Phytosanitary Certificate is provided with every plant-based shipment — mandatory for DAWR (Australian biosecurity) clearance. Import duty is 0% under the India-Australia ECTA (Economic Cooperation and Trade Agreement, 2022). Psyllium husk is FSANZ compliant (Standard 2.6.4) and suitable for TGA-regulated dietary supplement products. Transit: 14–21 days from Mundra to Melbourne or Sydney.',
    learnMore: { href: '/en/psyllium/suppliers/australia', label: 'Psyllium Husk Supply to Australia →' },
  },
  {
    question: 'What is the HS code for psyllium husk and what is the import duty?',
    answer:
      'International HS Code: 1211.90.90. Country-specific codes: USA = 1211.90.91, EU = 1211 90 86, UK = 1211 90 90, Canada = 1211.90.90, Australia = 1211.90.90. Import duty is 0% in the USA, all EU countries, UK, Canada, and Australia under MFN (Most Favoured Nation) rates. GCC countries (UAE, Saudi Arabia) charge 0–5% under Common External Tariff. Amar Herbal Origins provides full customs documentation to support smooth import clearance.',
    learnMore: { href: '/en/psyllium/blog/psyllium-husk-hs-code-import-duties', label: 'HS Code & Import Duties Guide →' },
  },
  {
    question: 'Psyllium husk vs inulin — which is better for fiber supplements?',
    answer:
      'Both are dietary fibers with different profiles. Psyllium husk (Isabgol) is a soluble/insoluble mixed fiber with an exceptional water-holding capacity (swell factor 45–75 mL/g). It is FDA-approved for cholesterol reduction and is the most clinically validated fiber for IBS, constipation, and blood sugar management. Inulin is a prebiotic fiber that specifically feeds beneficial gut bacteria (Bifidobacterium). For bulking fiber supplements and OTC laxatives, psyllium husk is preferred. For prebiotic/microbiome products, inulin is preferred. Many supplement brands combine both.',
    learnMore: { href: '/en/psyllium/blog/psyllium-husk-vs-inulin-comparison', label: 'Psyllium vs Inulin: Detailed Comparison →' },
  },
  {
    question: 'What documents are required to import psyllium husk from India?',
    answer:
      'Standard export documents from Amar Herbal Origins include: (1) Commercial Invoice, (2) Packing List, (3) Bill of Lading / Airway Bill, (4) Certificate of Origin (APEDA-issued), (5) Phytosanitary Certificate (Government of India, NPPO), (6) Fumigation Certificate, (7) Certificate of Analysis (COA) — batch-specific with full lab report, (8) Halal Certificate (if required), (9) Organic Certificate (USDA NOP / EU Organic, if applicable). We can also provide Health Certificate and SGS pre-shipment inspection on request.',
    learnMore: { href: '/en/psyllium/blog/psyllium-husk-certifications-export', label: 'Export Documentation Guide →' },
  },
  {
    question: 'How to verify that Amar Herbal Origins is a legitimate exporter?',
    answer:
      'You can independently verify us through Indian government portals: (1) GST: 24ICIPP6678D1Z4 — verify at gst.gov.in, (2) Udyam/MSME: UDYAM-GJ-02-0036891 — verify at udyamregistration.gov.in, (3) APEDA registration — verify at apeda.gov.in, (4) FSSAI licence — verify at foscos.fssai.gov.in. Our IEC (Import Export Code) from DGFT is available on verified business inquiry. We encourage all new buyers to verify before placing orders.',
    learnMore: { href: '/en/about', label: 'About Amar Herbal Origins →' },
  },
  {
    question: 'What is the FOB price of psyllium husk from India in 2026?',
    answer:
      'FOB Mundra prices in 2026: 85% grade = USD 1,400–1,600/MT; 95% grade = USD 1,600–1,900/MT; 98% grade powder = USD 1,800–2,200/MT; 99% whole husk = USD 2,000–2,500/MT; USDA Organic = USD 2,400–3,200/MT. Prices fluctuate with Unjha APMC mandi rates and seasonal crop availability (November–February harvest). Contact us for a live price quote — we update prices daily based on market rates.',
    learnMore: { href: '/en/blog/psyllium-husk-fob-price-guide', label: 'FOB Price & Logistics Guide →' },
  },
  {
    question: 'Which countries does Amar Herbal Origins export to?',
    answer:
      'We currently export to 30+ countries including the United States, Germany, United Kingdom, Australia, Canada, UAE, Saudi Arabia, Japan, Singapore, Netherlands, France, South Africa, Poland, Sweden, New Zealand, Thailand, Vietnam, and Indonesia. We handle all export documentation including phytosanitary, fumigation, and customs clearance.',
    learnMore: { href: '/en/suppliers', label: 'View Countries We Supply →' },
  },
  {
    question: 'What is the difference between psyllium husk powder and whole psyllium husk?',
    answer:
      'Whole psyllium husk consists of intact seed husks (99% purity) with a high swell factor, ideal for health supplements, OTC fiber products, and food applications. Psyllium husk powder is ground to 40–100 mesh (98–99% purity) and is used in pharmaceutical formulations, encapsulation, and food manufacturing. Both are available in pharmaceutical grade and food grade.',
    learnMore: { href: '/en/psyllium/products', label: 'View All Psyllium Grades →' },
  },
  {
    question: 'How long does it take to receive a shipment?',
    answer:
      'Standard lead time from order confirmation is 7–14 business days for existing stock. For custom or large orders, lead time may be 15–21 days. We ship FOB from Mundra and Nhava Sheva ports. Transit time varies by destination: approximately 18–25 days to Europe/USA, 10–14 days to UAE/Middle East, and 14–21 days to Australia/Southeast Asia.',
    learnMore: { href: '/en/blog/psyllium-husk-fob-price-guide', label: 'FOB Price & Logistics Guide →' },
  },
  {
    question: 'Do you offer private label or white-label psyllium husk packaging?',
    answer:
      'Yes. We offer full private label and white-label services from 100 kg MOQ. Services include custom packaging design, multilingual labeling (available in 30+ languages), various pack sizes (from 100g retail to 25 kg bulk bags), and full NDA signing. Your brand, our quality.',
    learnMore: { href: '/en/private-label', label: 'White Label & Private Label Services →' },
  },
  {
    question: 'How can I request a free sample of psyllium husk?',
    answer:
      'Free samples are available for all our products including psyllium husk powder, whole husk, organic psyllium, herbs, and spices. Simply contact us via the inquiry form or WhatsApp (+91 94084 65040). We ship samples worldwide — courier charges are extra. A Certificate of Analysis is included with every sample.',
    learnMore: { href: '/en/contact', label: 'Request a Free Sample →' },
  },
  {
    question: 'What payment terms do you offer for psyllium husk exports?',
    answer:
      'We accept Telegraphic Transfer (T/T), Letter of Credit (LC at sight), and for established clients, deferred payment terms. Standard terms are 30% advance and 70% against copy of shipping documents. For first-time buyers, 100% advance payment is required. We issue a proforma invoice with all order details before payment.',
  },
  {
    question: 'Can you supply USDA or EU Organic certified psyllium husk?',
    answer:
      'Yes. Amar Herbal Origins supplies USDA NOP and EU Organic (2018/848) certified psyllium husk from dedicated organic farming networks in Gujarat and Rajasthan. Organic psyllium is processed in separate organic-only production lines to prevent cross-contamination. Full organic certification documents are provided with every shipment.',
    learnMore: { href: '/en/organic', label: 'Organic Psyllium Husk Products →' },
  },
  {
    question: 'Who is Amar Herbal Origins and where are you located?',
    answer:
      'Amar Herbal Origins is a Gujarat-based B2B exporter of Psyllium Husk (Isabgol), Indian Spices, Herbs, Cold-Pressed Oils, and Gujarati Ready-to-Eat snacks. Registered under GST (24ICIPP6678D1Z4) and Udyam (UDYAM-GJ-02-0036891). FSSAI and APEDA certified. Registered address: Sardar Chok, Navi Haliyad, Amreli, Gujarat — 365440, India. We export to 30+ countries with farm-direct sourcing and full COA documentation.',
    learnMore: { href: '/en/about', label: 'About Amar Herbal Origins →' },
  },
  {
    question: 'Do you manufacture and export castor oil from India?',
    answer:
      'Yes. Amar Herbal Origins manufactures and exports cold-pressed Ricinus communis castor oil from Gujarat, India — the state that produces 70%+ of India\'s castor oil output. We supply pharmaceutical-grade (BP/USP) castor oil with 85%+ ricinoleic acid content, cosmetic-grade, and industrial-grade variants. All batches are tested and supplied with a full Certificate of Analysis. MOQ: 200 litres. Available in drums (200L) or IBC totes.',
    learnMore: { href: '/en/oils/castor-oil', label: 'Castor Oil Export from India →' },
  },
  {
    question: 'How do I find verified psyllium husk suppliers in India?',
    answer:
      'To verify an Indian psyllium husk supplier: (1) Check their GST number on gst.gov.in — it should be active and match their state. (2) Verify APEDA registration at apeda.gov.in — this confirms they are a licensed agricultural exporter. (3) Request their FSSAI license number and check it at foscos.fssai.gov.in. (4) Request a COA from a third-party lab (Eurofins, SGS, or NABL-certified lab). Amar Herbal Origins: GST 24ICIPP6678D1Z4, APEDA registered, Udyam UDYAM-GJ-02-0036891 — all publicly verifiable.',
    learnMore: { href: '/en/blog/how-to-find-verify-psyllium-husk-suppliers-india', label: 'How to Verify Indian Suppliers →' },
  },
  {
    question: 'How to buy psyllium husk in bulk wholesale quantities?',
    answer:
      'Bulk psyllium husk wholesale from India: (1) Determine grade needed — 85%, 95%, 98%, or 99% purity, whole husk or powder. (2) Contact Amar Herbal Origins via email or WhatsApp for a price quote (all prices on inquiry — negotiated B2B). (3) Request a free sample (100–200g) for quality testing before committing to bulk order. (4) Standard MOQ: 1 Metric Ton. Container loads (18–20 MT per 20-foot FCL) receive the best pricing. (5) Payment: 30% T/T advance, 70% against Bill of Lading copy. (6) Shipping: FOB Mundra or CIF your port.',
    learnMore: { href: '/en/blog/wholesale-bulk-psyllium-husk-india', label: 'Bulk Wholesale Psyllium Guide →' },
  },
  {
    question: 'Can I source private label psyllium husk with my own brand from India?',
    answer:
      'Yes. Amar Herbal Origins offers complete private label and white-label psyllium husk services. We handle: custom packaging design (pouches, bottles, bulk bags), multilingual label printing (30+ languages), FDA/EU/TGA-compliant label formats, various pack sizes (100g capsule fill → 25 kg bulk bag), and NDA/confidentiality agreement signing. MOQ for private label: 100 kg. Turnaround: 15–21 days after label artwork approval. Your brand, our certified quality.',
    learnMore: { href: '/en/private-label', label: 'Private Label Services →' },
  },
];

const FAQ_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQS.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  })),
};

export function HomeFAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section style={{ background: '#FAF8F4', padding: '5rem 0' }}>
      {/* FAQPage JSON-LD — enables Google FAQ rich results & AEO answer visibility */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }}
      />

      <div className="container">
        {/* Section header */}
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <div
            style={{
              fontSize: '0.75rem',
              fontWeight: 600,
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: '#D97706',
              marginBottom: '0.75rem',
            }}
          >
            FREQUENTLY ASKED QUESTIONS
          </div>
          <h2
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 'clamp(1.8rem, 3.5vw, 3rem)',
              fontWeight: 700,
              color: '#1a1a1a',
              lineHeight: 1.2,
              marginBottom: '1rem',
            }}
          >
            Everything You Need to{' '}
            <em style={{ color: '#D97706' }}>Know</em>
          </h2>
          <p
            style={{
              color: '#6b7280',
              fontSize: '1rem',
              maxWidth: '520px',
              margin: '0 auto',
              lineHeight: 1.7,
            }}
          >
            Common questions from our global B2B buyers — answered clearly and directly.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                style={{
                  background: 'white',
                  border: `1px solid ${isOpen ? '#D97706' : '#E5E0D8'}`,
                  borderRadius: '12px',
                  marginBottom: '0.75rem',
                  overflow: 'hidden',
                  transition: 'border-color 0.2s',
                  boxShadow: isOpen ? '0 4px 20px rgba(217,119,6,0.08)' : '0 1px 3px rgba(0,0,0,0.04)',
                }}
              >
                {/* Question */}
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  style={{
                    width: '100%',
                    background: 'none',
                    border: 'none',
                    padding: '1.25rem 1.5rem',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    gap: '1rem',
                    cursor: 'pointer',
                    textAlign: 'left',
                  }}
                >
                  <span
                    style={{
                      fontWeight: 700,
                      fontSize: '0.97rem',
                      color: isOpen ? '#D97706' : '#1a1a1a',
                      lineHeight: 1.45,
                      transition: 'color 0.2s',
                    }}
                  >
                    {faq.question}
                  </span>
                  <span
                    style={{
                      flexShrink: 0,
                      width: '28px',
                      height: '28px',
                      borderRadius: '50%',
                      background: isOpen ? '#D97706' : '#F5F0E8',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      transition: 'all 0.2s',
                    }}
                  >
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill={isOpen ? 'white' : '#D97706'}
                      style={{
                        transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                        transition: 'transform 0.25s',
                      }}
                    >
                      <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </button>

                {/* Answer */}
                {isOpen && (
                  <div
                    style={{
                      padding: '0 1.5rem 1.5rem',
                      borderTop: '1px solid #F5F0E8',
                    }}
                  >
                    <p
                      style={{
                        color: '#4b5563',
                        fontSize: '0.93rem',
                        lineHeight: 1.8,
                        margin: '1rem 0 0',
                      }}
                    >
                      {faq.answer}
                    </p>
                    {faq.learnMore && (
                      <Link
                        href={faq.learnMore.href}
                        style={{
                          display: 'inline-block',
                          marginTop: '0.75rem',
                          color: '#D97706',
                          fontSize: '0.82rem',
                          fontWeight: 700,
                          textDecoration: 'none',
                          letterSpacing: '0.02em',
                        }}
                      >
                        {faq.learnMore.label}
                      </Link>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
          <p style={{ color: '#6b7280', fontSize: '0.9rem', marginBottom: '1rem' }}>
            Have a specific question not listed here?
          </p>
          <a
            href="https://wa.me/919408465040?text=Hi, I have a question about your psyllium husk products"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              background: '#25D366',
              color: 'white',
              padding: '0.75rem 1.75rem',
              borderRadius: '50px',
              fontWeight: 600,
              textDecoration: 'none',
              fontSize: '0.9rem',
              transition: 'opacity 0.2s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.88')}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
          >
            💬 Ask on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
