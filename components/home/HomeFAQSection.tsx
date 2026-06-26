'use client';

import { useState } from 'react';

const FAQS = [
  {
    question: 'What is psyllium husk and what is it used for?',
    answer:
      'Psyllium husk (also known as Isabgol or ispaghula husk) is the outer seed coat of Plantago ovata, a plant grown primarily in Gujarat and Rajasthan, India. It is a natural soluble dietary fiber used in pharmaceuticals (laxatives, cholesterol management), food products (fiber-enriched foods, gluten-free baking), and nutraceutical supplements. India produces over 85% of the world\'s supply.',
  },
  {
    question: 'What is the minimum order quantity (MOQ) for psyllium husk?',
    answer:
      'Our standard MOQ is 1 Metric Ton (1,000 kg) for regular psyllium husk powder and whole husk. For USDA Organic certified psyllium husk, the MOQ is 500 kg. For private label or white-label packaging, the MOQ starts from 100 kg. Free samples are available before bulk orders.',
  },
  {
    question: 'What certifications does Amar Herbal Origins hold?',
    answer:
      'Amar Herbal Origins is certified under ISO 22000 (food safety management), FSSAI (Indian food safety), USDA NOP Organic, EU Organic (2018/848), Halal, Kosher, and APEDA (Agricultural and Processed Food Products Export Development Authority). Full certificates and a Certificate of Analysis (COA) are provided with every shipment.',
  },
  {
    question: 'Which countries does Amar Herbal Origins export to?',
    answer:
      'We currently export to 30+ countries including the United States, Germany, United Kingdom, Australia, Canada, UAE, Saudi Arabia, Japan, Singapore, Netherlands, France, South Africa, Poland, Sweden, New Zealand, Thailand, Vietnam, and Indonesia. We handle all export documentation including phytosanitary, fumigation, and customs clearance.',
  },
  {
    question: 'What is the difference between psyllium husk powder and whole psyllium husk?',
    answer:
      'Whole psyllium husk consists of intact seed husks (99% purity) with a high swell factor, ideal for health supplements, OTC fiber products, and food applications. Psyllium husk powder is ground to 40–100 mesh (98–99% purity) and is used in pharmaceutical formulations, encapsulation, and food manufacturing. Both are available in pharmaceutical grade and food grade.',
  },
  {
    question: 'How long does it take to receive a shipment?',
    answer:
      'Standard lead time from order confirmation is 7–14 business days for existing stock. For custom or large orders, lead time may be 15–21 days. We ship FOB from Mundra and Nhava Sheva ports. Transit time varies by destination: approximately 18–25 days to Europe/USA, and 10–15 days to Middle East and Southeast Asia.',
  },
  {
    question: 'Do you offer private label or white-label psyllium husk packaging?',
    answer:
      'Yes. We offer full private label and white-label services from 100 kg MOQ. Services include custom packaging design, multilingual labeling (available in 30+ languages), various pack sizes (from 100g retail to 25 kg bulk bags), and full NDA signing. Your brand, our quality.',
  },
  {
    question: 'How can I request a free sample of psyllium husk?',
    answer:
      'Free samples are available for all our products including psyllium husk powder, whole husk, organic psyllium, herbs, and spices. Simply contact us via the inquiry form or WhatsApp (+91 94084 65040). We ship samples worldwide — courier charges are extra. A Certificate of Analysis is included with every sample.',
  },
  {
    question: 'What is the price of psyllium husk from India?',
    answer:
      'Psyllium husk FOB price from India typically ranges from USD 1,800–USD 2,800 per metric ton depending on grade (85%, 95%, 98%, or 99% purity), quantity, and market conditions at Unjha APMC. Organic grades carry a 20–35% premium. Contact us for a current quotation — prices are updated based on live Unjha mandi rates.',
  },
  {
    question: 'What payment terms do you offer for psyllium husk exports?',
    answer:
      'We accept Telegraphic Transfer (T/T), Letter of Credit (LC at sight), and for established clients, deferred payment terms. Standard terms are 30% advance and 70% against copy of shipping documents. For first-time buyers, 100% advance payment is required. We issue a proforma invoice with all order details before payment.',
  },
  {
    question: 'What is Isabgol and how is it different from psyllium husk?',
    answer:
      'Isabgol is the Hindi/Urdu name for psyllium husk — they are the same product. Isabgol comes from the seeds of Plantago ovata. India — particularly Gujarat and Rajasthan — produces over 85% of the world supply. The term "psyllium" is used in Western pharmaceutical markets, while "Isabgol" is used in Indian and Middle Eastern markets.',
  },
  {
    question: 'Can you supply USDA or EU Organic certified psyllium husk?',
    answer:
      'Yes. Amar Herbal Origins supplies USDA NOP and EU Organic (2018/848) certified psyllium husk from dedicated organic farming networks in Gujarat and Rajasthan. Organic psyllium is processed in separate organic-only production lines to prevent cross-contamination. Full organic certification documents are provided with every shipment.',
  },
  {
    question: 'Who is Amar Herbal Origins and where are you located?',
    answer:
      'Amar Herbal Origins is a Gujarat-based B2B exporter of Psyllium Husk (Isabgol), Indian Spices, Herbs, Cold-Pressed Oils, and Gujarati Ready-to-Eat snacks. Registered under GST (24ICIPP6678D1Z4) and Udyam (UDYAM-GJ-02-0036891). FSSAI and APEDA certified. Registered address: Sardar Chok, Navi Haliyad, Amreli, Gujarat — 365440, India. We export to 30+ countries with farm-direct sourcing and full COA documentation.',
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
