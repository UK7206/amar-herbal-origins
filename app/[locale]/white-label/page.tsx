'use client';

import { useState } from 'react';
import Link from 'next/link';

const steps = [
  {
    number: '01',
    icon: '📋',
    title: 'Share Your Requirements',
    desc: 'Tell us your brand name, logo, packaging design preferences, product grade, and target quantity. We handle everything from there.',
  },
  {
    number: '02',
    icon: '🎨',
    title: 'We Design Your Packaging',
    desc: 'Our team creates custom packaging artwork featuring your brand logo, colours, label text, and any regulatory information you need.',
  },
  {
    number: '03',
    icon: '📦',
    title: 'Sample Dispatched to You',
    desc: 'We produce a physical sample with your custom packaging and ship it to you for approval before any bulk order is processed.',
  },
  {
    number: '04',
    icon: '✅',
    title: 'Sample Approval',
    desc: 'Review the sample carefully. If anything needs adjustment — design, product grade, packaging size — just let us know. We revise until you\'re 100% satisfied.',
  },
  {
    number: '05',
    icon: '🏭',
    title: 'Bulk Production & Export',
    desc: 'Once approved, we proceed with full-scale production, quality testing, and dispatch with all required export documentation.',
  },
];

const capabilities = [
  { icon: '🏷️', title: 'Custom Brand Logo', desc: 'Your logo printed in full colour on every pack — foil printing, embossing, or digital print options.' },
  { icon: '🎨', title: 'Bespoke Packaging Design', desc: 'Box, pouch, bag, or jar — we adapt to your preferred format with complete artwork customisation.' },
  { icon: '🌿', title: 'All Product Grades', desc: 'Psyllium Husk Whole, Powder, Organic, Seeds — any grade can be white-labelled under your brand.' },
  { icon: '📏', title: 'Flexible Pack Sizes', desc: 'From retail 100g pouches to bulk 25 kg export sacks — we match the pack size to your market.' },
  { icon: '🌍', title: 'Multi-Language Labels', desc: 'Labels in English, Arabic, German, French, Spanish, Japanese, or any language your market requires.' },
  { icon: '📄', title: 'Regulatory Compliance', desc: 'We include all required declarations, nutritional info, batch codes, and expiry dates per destination country norms.' },
  { icon: '🔬', title: 'Batch-Specific COA', desc: 'Every white-label shipment comes with a Certificate of Analysis so your customers trust your brand.' },
  { icon: '🤝', title: 'Low MOQ for Samples', desc: 'Sample runs available with low minimum quantities — start small, scale confidently.' },
];

const faqs = [
  {
    q: 'What is the minimum order for a white-label sample?',
    a: 'Sample orders have very low MOQs — typically 5–10 kg depending on the product grade. This allows you to evaluate quality and packaging before committing to bulk orders.',
  },
  {
    q: 'Can I use my own packaging design/artwork?',
    a: 'Absolutely. You can provide us with your ready artwork (PDF/AI format) or we can design it for you from scratch based on your brand guidelines.',
  },
  {
    q: 'How long does it take to receive the sample?',
    a: 'Once your packaging design is finalised, we produce and dispatch the sample within 5–10 business days. International courier delivery adds 3–7 days depending on your location.',
  },
  {
    q: 'What if I want changes after receiving the sample?',
    a: 'No problem at all. We revise the packaging or product specs based on your feedback and send a revised sample. We continue this process until you are fully satisfied.',
  },
  {
    q: 'Do you keep our brand details confidential?',
    a: 'Yes. We treat all client brand information, artwork, and business details with strict confidentiality. NDAs can be signed upon request.',
  },
  {
    q: 'What is the lead time for bulk production after sample approval?',
    a: 'Bulk production typically takes 10–20 business days after sample approval, depending on order size. Export documentation and shipping are arranged in parallel.',
  },
];

export default function WhiteLabelPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <main>

      {/* ── Hero ── */}
      <section
        style={{
          background: 'linear-gradient(135deg, #1C1204 0%, #2d1f08 60%, #3d2a0a 100%)',
          padding: '5rem 0 4.5rem',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Decorative blobs */}
        <div style={{ position: 'absolute', top: '-80px', right: '-80px', width: '450px', height: '450px', background: 'radial-gradient(circle, rgba(217,119,6,0.18) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: '-60px', left: '-60px', width: '320px', height: '320px', background: 'radial-gradient(circle, rgba(217,119,6,0.1) 0%, transparent 70%)', pointerEvents: 'none' }} />

        <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
          <div
            style={{
              display: 'inline-block',
              background: 'rgba(217,119,6,0.15)',
              border: '1px solid rgba(217,119,6,0.35)',
              color: '#D97706',
              padding: '0.35rem 1rem',
              borderRadius: '50px',
              fontSize: '0.75rem',
              fontWeight: 700,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              marginBottom: '1.5rem',
            }}
          >
            Private Label &amp; White Labelling
          </div>

          <h1
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 'clamp(2.4rem, 5vw, 3.8rem)',
              fontWeight: 700,
              color: 'white',
              marginBottom: '1.25rem',
              lineHeight: 1.15,
            }}
          >
            Your Brand.{' '}
            <em style={{ color: '#D97706', fontStyle: 'italic' }}>Our Expertise.</em>
          </h1>

          <p
            style={{
              color: '#b8a98a',
              fontSize: '1.1rem',
              maxWidth: '620px',
              margin: '0 auto 2.5rem',
              lineHeight: 1.75,
            }}
          >
            Sell premium psyllium husk under your own brand name. We handle everything —
            custom packaging, logo printing, regulatory labels, and bulk export — while you
            focus on your market. Sample first, scale after approval.
          </p>

          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link
              href="/en/contact"
              style={{
                background: '#D97706',
                color: 'white',
                padding: '0.9rem 2.25rem',
                borderRadius: '50px',
                fontWeight: 700,
                textDecoration: 'none',
                fontSize: '0.95rem',
              }}
            >
              Start Your White Label Journey →
            </Link>
            <a
              href="https://wa.me/919408465040?text=Hi%2C%20I%20want%20to%20know%20more%20about%20white%20label%20services"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: 'rgba(255,255,255,0.08)',
                border: '1px solid rgba(255,255,255,0.2)',
                color: 'white',
                padding: '0.9rem 2.25rem',
                borderRadius: '50px',
                fontWeight: 700,
                textDecoration: 'none',
                fontSize: '0.95rem',
              }}
            >
              💬 WhatsApp Enquiry
            </a>
          </div>

          {/* Quick pills */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap', marginTop: '3rem' }}>
            {['✓ Sample Before Bulk', '✓ Custom Logo & Design', '✓ All Product Grades', '✓ Global Export Ready'].map(pill => (
              <div key={pill} style={{ color: '#e5d6b8', fontWeight: 600, fontSize: '0.9rem' }}>
                {pill}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How It Works ── */}
      <section style={{ background: 'white', padding: '5.5rem 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <div className="section-label" style={{ marginBottom: '0.75rem' }}>THE PROCESS</div>
            <h2 className="section-heading">
              How White Labelling{' '}
              <em style={{ color: '#D97706' }}>Works</em>
            </h2>
            <p style={{ color: '#6b7280', marginTop: '1rem', maxWidth: '500px', margin: '1rem auto 0', lineHeight: 1.7 }}>
              A simple 5-step journey from your idea to your branded product on the shelf.
            </p>
          </div>

          <div style={{ position: 'relative' }}>
            {/* Connector line (desktop) */}
            <div
              style={{
                position: 'absolute',
                top: '40px',
                left: '10%',
                right: '10%',
                height: '2px',
                background: 'linear-gradient(to right, #D97706, rgba(217,119,6,0.2))',
                zIndex: 0,
              }}
              className="step-line"
            />

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
                gap: '2rem',
                position: 'relative',
                zIndex: 1,
              }}
            >
              {steps.map((step) => (
                <div
                  key={step.number}
                  style={{
                    textAlign: 'center',
                    padding: '1.5rem 1rem',
                  }}
                >
                  {/* Number circle */}
                  <div
                    style={{
                      width: '56px',
                      height: '56px',
                      borderRadius: '50%',
                      background: 'linear-gradient(135deg, #D97706, #b45309)',
                      color: 'white',
                      fontWeight: 800,
                      fontSize: '1rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '0 auto 1rem',
                      boxShadow: '0 4px 20px rgba(217,119,6,0.35)',
                    }}
                  >
                    {step.number}
                  </div>
                  <div style={{ fontSize: '1.75rem', marginBottom: '0.75rem' }}>{step.icon}</div>
                  <h3 style={{ fontWeight: 700, fontSize: '1rem', color: '#1a1a1a', marginBottom: '0.6rem' }}>
                    {step.title}
                  </h3>
                  <p style={{ color: '#6b7280', fontSize: '0.875rem', lineHeight: 1.65 }}>
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <style>{`
          @media (max-width: 768px) { .step-line { display: none !important; } }
        `}</style>
      </section>

      {/* ── Sample First Banner ── */}
      <section
        style={{
          background: 'linear-gradient(135deg, #D97706 0%, #b45309 100%)',
          padding: '3.5rem 0',
        }}
      >
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '2rem', flexWrap: 'wrap' }}>
          <div>
            <div style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
              Our Sample-First Policy
            </div>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', fontWeight: 700, color: 'white', lineHeight: 1.2 }}>
              We always send a sample before any bulk order.
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.85)', marginTop: '0.75rem', fontSize: '1rem', lineHeight: 1.65 }}>
              No bulk commitment until you physically receive, test, and approve the sample with your branding.
            </p>
          </div>
          <Link
            href="/en/contact"
            style={{
              flexShrink: 0,
              background: 'white',
              color: '#D97706',
              padding: '0.9rem 2rem',
              borderRadius: '50px',
              fontWeight: 700,
              textDecoration: 'none',
              fontSize: '0.95rem',
              whiteSpace: 'nowrap',
            }}
          >
            Request a Sample →
          </Link>
        </div>
      </section>

      {/* ── Capabilities Grid ── */}
      <section style={{ background: '#FAF8F4', padding: '5.5rem 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <div className="section-label" style={{ marginBottom: '0.75rem' }}>WHAT WE OFFER</div>
            <h2 className="section-heading">
              Complete White Label{' '}
              <em style={{ color: '#D97706' }}>Capabilities</em>
            </h2>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '1.25rem',
            }}
          >
            {capabilities.map((cap) => (
              <div
                key={cap.title}
                style={{
                  background: 'white',
                  border: '1px solid #E5E0D8',
                  borderRadius: '14px',
                  padding: '1.75rem',
                  transition: 'all 0.25s',
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.transform = 'translateY(-4px)';
                  (e.currentTarget as HTMLElement).style.borderColor = '#D97706';
                  (e.currentTarget as HTMLElement).style.boxShadow = '0 12px 32px rgba(217,119,6,0.1)';
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
                  (e.currentTarget as HTMLElement).style.borderColor = '#E5E0D8';
                  (e.currentTarget as HTMLElement).style.boxShadow = 'none';
                }}
              >
                <div style={{ fontSize: '2rem', marginBottom: '0.875rem' }}>{cap.icon}</div>
                <h3 style={{ fontWeight: 700, fontSize: '1rem', color: '#1a1a1a', marginBottom: '0.5rem' }}>
                  {cap.title}
                </h3>
                <p style={{ color: '#6b7280', fontSize: '0.875rem', lineHeight: 1.65 }}>
                  {cap.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Choose Us for White Label ── */}
      <section style={{ background: '#1C1204', padding: '5rem 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div style={{ color: '#D97706', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
              WHY PARTNER WITH US
            </div>
            <h2
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
                fontWeight: 700,
                color: 'white',
              }}
            >
              Built for{' '}
              <em style={{ color: '#D97706' }}>Your Brand's Success</em>
            </h2>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '1.5rem',
            }}
          >
            {[
              { icon: '🏭', title: 'Vertically Integrated', body: 'From contracted farms to our own processing plant — full control over quality at every stage.' },
              { icon: '⚡', title: 'Fast Turnaround', body: 'Sample ready within 5–10 business days of design confirmation. No unnecessary delays.' },
              { icon: '🔒', title: 'Strict Confidentiality', body: 'Your brand, your business. We sign NDAs and never disclose client identities or brand details.' },
              { icon: '🌐', title: 'Export Expertise', body: '5+ years of international shipping experience. We handle documentation, phytosanitary, and customs clearance.' },
              { icon: '📊', title: 'Transparent Pricing', body: 'Clear cost breakdowns for packaging, production, and logistics — no hidden charges.' },
              { icon: '🔄', title: 'Iterative Approval', body: 'Unlimited sample revisions until you\'re 100% satisfied. We don\'t rush the approval process.' },
            ].map(item => (
              <div
                key={item.title}
                style={{
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  borderRadius: '14px',
                  padding: '2rem',
                  transition: 'all 0.25s',
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.borderColor = 'rgba(217,119,6,0.4)';
                  (e.currentTarget as HTMLElement).style.background = 'rgba(217,119,6,0.06)';
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.08)';
                  (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.04)';
                }}
              >
                <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>{item.icon}</div>
                <h3 style={{ color: 'white', fontWeight: 700, fontSize: '1.05rem', marginBottom: '0.6rem' }}>{item.title}</h3>
                <p style={{ color: '#9ca3af', fontSize: '0.875rem', lineHeight: 1.65 }}>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section style={{ background: 'white', padding: '5.5rem 0' }}>
        <div className="container" style={{ maxWidth: '780px' }}>
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <div className="section-label" style={{ marginBottom: '0.75rem' }}>FAQ</div>
            <h2 className="section-heading">
              Common{' '}
              <em style={{ color: '#D97706' }}>Questions</em>
            </h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {faqs.map((faq, i) => (
              <div
                key={i}
                style={{
                  border: `1px solid ${openFaq === i ? '#D97706' : '#E5E0D8'}`,
                  borderRadius: '12px',
                  overflow: 'hidden',
                  transition: 'border-color 0.2s',
                }}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  style={{
                    width: '100%',
                    textAlign: 'left',
                    padding: '1.25rem 1.5rem',
                    background: openFaq === i ? '#FFF8ED' : 'white',
                    border: 'none',
                    cursor: 'pointer',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    gap: '1rem',
                    transition: 'background 0.2s',
                  }}
                >
                  <span style={{ fontWeight: 600, fontSize: '0.95rem', color: '#1a1a1a', lineHeight: 1.5 }}>
                    {faq.q}
                  </span>
                  <span
                    style={{
                      color: '#D97706',
                      fontWeight: 700,
                      fontSize: '1.25rem',
                      flexShrink: 0,
                      transform: openFaq === i ? 'rotate(45deg)' : 'rotate(0deg)',
                      transition: 'transform 0.25s',
                      display: 'inline-block',
                    }}
                  >
                    +
                  </span>
                </button>
                {openFaq === i && (
                  <div
                    style={{
                      padding: '0 1.5rem 1.25rem',
                      background: '#FFF8ED',
                      color: '#6b7280',
                      fontSize: '0.9rem',
                      lineHeight: 1.75,
                    }}
                  >
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section
        style={{
          background: 'linear-gradient(135deg, #1C1204 0%, #2d1f08 100%)',
          padding: '5rem 0',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div style={{ position: 'absolute', bottom: '-80px', left: '-80px', width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(217,119,6,0.12) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <h2
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 'clamp(1.8rem, 4vw, 3rem)',
              fontWeight: 700,
              color: 'white',
              marginBottom: '1rem',
            }}
          >
            Ready to Launch Your Brand?
          </h2>
          <p
            style={{
              color: '#b8a98a',
              fontSize: '1.05rem',
              maxWidth: '520px',
              margin: '0 auto 2.5rem',
              lineHeight: 1.7,
            }}
          >
            Contact us today to discuss your white-label requirements. We'll guide you
            through the entire process — from design to delivery.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link
              href="/en/contact"
              style={{
                background: '#D97706',
                color: 'white',
                padding: '0.9rem 2.25rem',
                borderRadius: '50px',
                fontWeight: 700,
                textDecoration: 'none',
                fontSize: '0.95rem',
              }}
            >
              Get in Touch →
            </Link>
            <a
              href="https://wa.me/919408465040?text=Hi%2C%20I%20am%20interested%20in%20white%20label%20psyllium%20husk%20packaging"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: 'rgba(255,255,255,0.08)',
                border: '1px solid rgba(255,255,255,0.2)',
                color: 'white',
                padding: '0.9rem 2.25rem',
                borderRadius: '50px',
                fontWeight: 700,
                textDecoration: 'none',
                fontSize: '0.95rem',
              }}
            >
              💬 WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
