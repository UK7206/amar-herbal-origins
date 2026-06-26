'use client';

import Link from 'next/link';

const certifications = [
  {
    icon: '🏛️',
    name: 'FSSAI',
    full: 'Food Safety and Standards Authority of India',
    desc: 'Mandatory food safety certification ensuring our processing facility meets all Indian food safety standards.',
    color: '#D97706',
  },
  {
    icon: '🌐',
    name: 'IEC Code',
    full: 'Import Export Code — DGFT India',
    desc: 'Government-issued Import Export Code authorizing us to conduct international trade from India.',
    color: '#059669',
  },
  {
    icon: '📜',
    name: 'APEDA',
    full: 'Agricultural & Processed Food Products Export Development Authority',
    desc: 'Registered exporter under APEDA ensuring compliance with Indian agricultural export guidelines.',
    color: '#7c3aed',
  },
  {
    icon: '⚗️',
    name: 'COA Per Batch',
    full: 'Certificate of Analysis',
    desc: 'Every batch ships with a full lab-tested COA covering purity, fiber, moisture, ash, and microbial counts.',
    color: '#0284c7',
  },
  {
    icon: '🌿',
    name: 'Organic Ready',
    full: 'USDA / EU Organic Compliant',
    desc: 'Our organic psyllium range is grown and processed under certified organic protocols. Documents available on request.',
    color: '#16a34a',
  },
  {
    icon: '☪️',
    name: 'Halal Ready',
    full: 'Halal Compliant Processing',
    desc: 'Processing and packaging facilities comply with Halal standards, catering to Middle East and Southeast Asian markets.',
    color: '#b45309',
  },
];

const labTests = [
  { test: 'Purity', standard: '≥ 99%', method: 'BP / USP' },
  { test: 'Swelling Factor', standard: '≥ 40 ml/g', method: 'BP 2023' },
  { test: 'Total Dietary Fiber', standard: '≥ 85%', method: 'AOAC 991.43' },
  { test: 'Moisture Content', standard: '≤ 12%', method: 'Karl Fischer' },
  { test: 'Ash Content', standard: '≤ 4%', method: 'USP <561>' },
  { test: 'Heavy Metals (Pb)', standard: '≤ 0.5 ppm', method: 'ICP-MS' },
  { test: 'Arsenic', standard: '≤ 0.5 ppm', method: 'ICP-MS' },
  { test: 'Total Plate Count', standard: '≤ 10⁵ CFU/g', method: 'USP <2021>' },
  { test: 'E. coli', standard: 'Absent / 10 g', method: 'ISO 16654' },
  { test: 'Salmonella', standard: 'Absent / 25 g', method: 'ISO 6579' },
];

const processSteps = [
  {
    step: '01',
    title: 'Farm Sourcing',
    desc: 'Seeds sourced directly from contracted farmers in Gujarat & Rajasthan. Soil quality and farming practices verified annually.',
    icon: '🌾',
  },
  {
    step: '02',
    title: 'Cleaning & Dehusking',
    desc: 'Multi-stage cleaning removes impurities. Mechanical dehusking at controlled temperatures preserves fiber integrity.',
    icon: '⚙️',
  },
  {
    step: '03',
    title: 'Grading & Sieving',
    desc: 'Husk graded to 40, 60, 80 or 100 mesh using precision vibro-separators. Each mesh tested before packaging.',
    icon: '🔬',
  },
  {
    step: '04',
    title: 'Lab Testing',
    desc: 'In-house QC lab tests every batch against 10+ parameters. Third-party lab verification available on request.',
    icon: '🧪',
  },
  {
    step: '05',
    title: 'COA Issuance',
    desc: 'Batch-specific Certificate of Analysis issued digitally. COA shared with buyer before shipment confirmation.',
    icon: '📋',
  },
  {
    step: '06',
    title: 'Export Clearance',
    desc: 'Full documentation: Phytosanitary certificate, commercial invoice, packing list, and bill of lading prepared.',
    icon: '🚢',
  },
];

const whyPoints = [
  { label: 'In-house QC Lab', icon: '🔬' },
  { label: 'Batch-level Traceability', icon: '🔗' },
  { label: 'Farm-direct Sourcing', icon: '🌾' },
  { label: 'Zero Adulteration Policy', icon: '🚫' },
  { label: 'Third-party Audit Ready', icon: '✅' },
  { label: '30+ Countries Supplied', icon: '🌍' },
];

export default function QualityPage() {
  return (
    <main>
      {/* ── Hero ── */}
      <section
        style={{
          background: 'linear-gradient(135deg, #1C1204 0%, #2d1f08 60%, #3d2a0a 100%)',
          padding: '5rem 0 4rem',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: '-100px',
            right: '-100px',
            width: '500px',
            height: '500px',
            background: 'radial-gradient(circle, rgba(217,119,6,0.15) 0%, transparent 70%)',
            pointerEvents: 'none',
          }}
        />
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
            Quality & Certifications
          </div>
          <h1
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 'clamp(2.2rem, 5vw, 3.6rem)',
              fontWeight: 700,
              color: 'white',
              marginBottom: '1.25rem',
              lineHeight: 1.15,
            }}
          >
            Every Batch,{' '}
            <em style={{ color: '#D97706', fontStyle: 'italic' }}>Lab Verified</em>
          </h1>
          <p
            style={{
              color: '#b8a98a',
              fontSize: '1.1rem',
              maxWidth: '580px',
              margin: '0 auto 3rem',
              lineHeight: 1.7,
            }}
          >
            Our quality commitment starts at the farm and ends only when you receive a verified Certificate of Analysis with every shipment.
          </p>

          {/* Quick trust bar */}
          <div
            style={{
              display: 'flex',
              gap: '2rem',
              justifyContent: 'center',
              flexWrap: 'wrap',
            }}
          >
            {whyPoints.map(p => (
              <div
                key={p.label}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  color: '#e5d6b8',
                  fontSize: '0.88rem',
                  fontWeight: 500,
                }}
              >
                <span>{p.icon}</span>
                <span>{p.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Certifications ── */}
      <section style={{ background: '#FAF8F4', padding: '5rem 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <div className="section-label" style={{ marginBottom: '0.75rem' }}>COMPLIANCE</div>
            <h2 className="section-heading">
              Our Certifications &{' '}
              <em style={{ color: '#D97706' }}>Approvals</em>
            </h2>
            <p style={{ color: '#6b7280', marginTop: '1rem', fontSize: '1rem', maxWidth: '480px', margin: '1rem auto 0' }}>
              Registered, licensed, and audit-ready for pharma, food, and organic buyers worldwide.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '1.5rem',
            }}
          >
            {certifications.map(cert => (
              <div
                key={cert.name}
                style={{
                  background: 'white',
                  border: '1px solid #E5E0D8',
                  borderRadius: '14px',
                  padding: '1.75rem',
                  transition: 'all 0.25s',
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.transform = 'translateY(-4px)';
                  (e.currentTarget as HTMLElement).style.boxShadow = '0 12px 32px rgba(0,0,0,0.08)';
                  (e.currentTarget as HTMLElement).style.borderColor = '#D97706';
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
                  (e.currentTarget as HTMLElement).style.boxShadow = 'none';
                  (e.currentTarget as HTMLElement).style.borderColor = '#E5E0D8';
                }}
              >
                <div style={{ fontSize: '2.2rem', marginBottom: '0.75rem' }}>{cert.icon}</div>
                <div
                  style={{
                    display: 'inline-block',
                    background: `${cert.color}15`,
                    color: cert.color,
                    padding: '0.2rem 0.6rem',
                    borderRadius: '4px',
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    marginBottom: '0.5rem',
                    letterSpacing: '0.05em',
                  }}
                >
                  {cert.name}
                </div>
                <h3 style={{ fontWeight: 700, fontSize: '0.95rem', color: '#1a1a1a', marginBottom: '0.5rem' }}>
                  {cert.full}
                </h3>
                <p style={{ color: '#6b7280', fontSize: '0.88rem', lineHeight: 1.6 }}>
                  {cert.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Lab Test Parameters ── */}
      <section style={{ background: '#1C1204', padding: '5rem 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div
              style={{
                display: 'inline-block',
                background: 'rgba(217,119,6,0.15)',
                border: '1px solid rgba(217,119,6,0.3)',
                color: '#D97706',
                padding: '0.3rem 1rem',
                borderRadius: '50px',
                fontSize: '0.72rem',
                fontWeight: 700,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                marginBottom: '1rem',
              }}
            >
              Test Parameters
            </div>
            <h2
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)',
                fontWeight: 700,
                color: 'white',
                marginBottom: '1rem',
              }}
            >
              What We Test in Every Batch
            </h2>
            <p style={{ color: '#9ca3af', fontSize: '1rem', maxWidth: '480px', margin: '0 auto' }}>
              10+ parameters per batch. In-house QC lab + third-party accredited lab verification.
            </p>
          </div>

          <div
            style={{
              maxWidth: '780px',
              margin: '0 auto',
              borderRadius: '16px',
              overflow: 'hidden',
              border: '1px solid rgba(255,255,255,0.08)',
            }}
          >
            {/* Table header */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr 1fr',
                background: 'rgba(217,119,6,0.15)',
                padding: '0.9rem 1.5rem',
              }}
            >
              {['Test Parameter', 'Standard / Limit', 'Test Method'].map(h => (
                <div
                  key={h}
                  style={{
                    color: '#D97706',
                    fontWeight: 700,
                    fontSize: '0.78rem',
                    letterSpacing: '0.06em',
                    textTransform: 'uppercase',
                  }}
                >
                  {h}
                </div>
              ))}
            </div>

            {labTests.map((row, i) => (
              <div
                key={row.test}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr 1fr',
                  padding: '0.9rem 1.5rem',
                  background: i % 2 === 0 ? 'rgba(255,255,255,0.03)' : 'transparent',
                  borderTop: '1px solid rgba(255,255,255,0.05)',
                }}
              >
                <div style={{ color: 'white', fontSize: '0.9rem', fontWeight: 500 }}>{row.test}</div>
                <div style={{ color: '#D97706', fontSize: '0.9rem', fontWeight: 700 }}>{row.standard}</div>
                <div style={{ color: '#9ca3af', fontSize: '0.88rem' }}>{row.method}</div>
              </div>
            ))}
          </div>

          <p style={{ textAlign: 'center', color: '#6b7280', fontSize: '0.82rem', marginTop: '1.5rem' }}>
            All tests conducted per BP 2023 / USP / ISO standards. COA shared digitally before shipment.
          </p>
        </div>
      </section>

      {/* ── Quality Process ── */}
      <section style={{ background: 'white', padding: '5rem 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <div className="section-label" style={{ marginBottom: '0.75rem' }}>OUR PROCESS</div>
            <h2 className="section-heading">
              Farm to{' '}
              <em style={{ color: '#D97706' }}>Shipment</em>
            </h2>
            <p style={{ color: '#6b7280', marginTop: '1rem', fontSize: '1rem', maxWidth: '480px', margin: '1rem auto 0' }}>
              A six-step quality-controlled journey that guarantees every bag leaving our facility is export-ready.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '1.5rem',
            }}
          >
            {processSteps.map((step, i) => (
              <div
                key={step.step}
                style={{
                  background: '#FAF8F4',
                  border: '1px solid #E5E0D8',
                  borderRadius: '14px',
                  padding: '2rem',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                {/* Step number watermark */}
                <div
                  style={{
                    position: 'absolute',
                    top: '-0.5rem',
                    right: '1rem',
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: '5rem',
                    fontWeight: 800,
                    color: 'rgba(217,119,6,0.06)',
                    lineHeight: 1,
                    userSelect: 'none',
                  }}
                >
                  {step.step}
                </div>

                <div style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>{step.icon}</div>
                <div
                  style={{
                    display: 'inline-block',
                    background: 'rgba(217,119,6,0.1)',
                    color: '#92400e',
                    padding: '0.2rem 0.55rem',
                    borderRadius: '4px',
                    fontSize: '0.72rem',
                    fontWeight: 700,
                    marginBottom: '0.5rem',
                    letterSpacing: '0.05em',
                  }}
                >
                  STEP {step.step}
                </div>
                <h3 style={{ fontWeight: 700, fontSize: '1.05rem', color: '#1a1a1a', marginBottom: '0.5rem' }}>
                  {step.title}
                </h3>
                <p style={{ color: '#6b7280', fontSize: '0.88rem', lineHeight: 1.6 }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── COA Sample Banner ── */}
      <section
        style={{
          background: '#FAF8F4',
          borderTop: '1px solid #E5E0D8',
          borderBottom: '1px solid #E5E0D8',
          padding: '3.5rem 0',
        }}
      >
        <div className="container">
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '2rem',
            }}
          >
            <div>
              <div style={{ color: '#D97706', fontWeight: 700, fontSize: '0.78rem', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                Transparency Guarantee
              </div>
              <h3
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: '1.8rem',
                  fontWeight: 700,
                  color: '#1a1a1a',
                  marginBottom: '0.5rem',
                }}
              >
                Need a Sample COA Before Ordering?
              </h3>
              <p style={{ color: '#6b7280', fontSize: '0.95rem', maxWidth: '480px', lineHeight: 1.6 }}>
                We share COA from our latest batch upon request — no commitment required. See exactly what you're buying.
              </p>
            </div>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Link
                href="/en/contact"
                style={{
                  background: '#D97706',
                  color: 'white',
                  padding: '0.85rem 2rem',
                  borderRadius: '50px',
                  fontWeight: 700,
                  fontSize: '0.9rem',
                  textDecoration: 'none',
                  whiteSpace: 'nowrap',
                }}
              >
                Request Sample COA
              </Link>
              <a
                href="https://wa.me/919408465040?text=Hi, please share your latest COA for Psyllium Husk"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  background: 'white',
                  border: '2px solid #E5E0D8',
                  color: '#1a1a1a',
                  padding: '0.85rem 2rem',
                  borderRadius: '50px',
                  fontWeight: 700,
                  fontSize: '0.9rem',
                  textDecoration: 'none',
                  whiteSpace: 'nowrap',
                }}
              >
                💬 WhatsApp Us
              </a>
            </div>
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
        <div
          style={{
            position: 'absolute',
            bottom: '-80px',
            left: '-80px',
            width: '400px',
            height: '400px',
            background: 'radial-gradient(circle, rgba(217,119,6,0.12) 0%, transparent 70%)',
            pointerEvents: 'none',
          }}
        />
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
            Quality You Can Trust
          </h2>
          <p
            style={{
              color: '#b8a98a',
              fontSize: '1.05rem',
              maxWidth: '480px',
              margin: '0 auto 2.5rem',
              lineHeight: 1.7,
            }}
          >
            Join 20+ importers who rely on Amar Herbal Origins for consistent, lab-certified psyllium husk.
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
              Get a Quote
            </Link>
            <Link
              href="/en/product"
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
              View Products →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
