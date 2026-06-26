'use client';

import Link from 'next/link';
import { useState } from 'react';

type Tab = 'overview' | 'specifications' | 'usecases' | 'packaging';

const specs = [
  { param: 'Purity', spec: '99.5% min', method: 'AOAC Method' },
  { param: 'Moisture', spec: '12% max', method: 'Gravimetric' },
  { param: 'Ash Content', spec: '4% max', method: 'Muffle Furnace' },
  { param: 'Swelling Factor', spec: '≥ 40 ml/g', method: 'BP Method' },
  { param: 'Total Dietary Fiber', spec: '85% min', method: 'AOAC 991.43' },
  { param: 'Color', spec: 'Cream / Off-white', method: 'Visual' },
  { param: 'Odor', spec: 'Characteristic', method: 'Organoleptic' },
  { param: 'Salmonella', spec: 'Absent / 25g', method: 'ISO 6579' },
  { param: 'E. Coli', spec: 'Absent / g', method: 'ISO 16649' },
  { param: 'Heavy Metals (Pb)', spec: '≤ 0.5 ppm', method: 'ICP-MS' },
  { param: 'Mesh Size', spec: '40 / 60 / 80 / 100', method: 'Vibro-Separator' },
];

const useCases = [
  {
    icon: '💊',
    title: 'Pharmaceuticals',
    desc: 'Used as a laxative and digestive aid in tablets and capsules.',
    buyers: 'Pharma companies, supplement brands',
  },
  {
    icon: '🥗',
    title: 'Food Processing',
    desc: 'Added to bread, cereals and health foods as dietary fiber.',
    buyers: 'Food manufacturers, bakeries',
  },
  {
    icon: '🐄',
    title: 'Animal Feed',
    desc: 'Used in livestock feed for digestive health and gut motility.',
    buyers: 'Animal feed companies',
  },
  {
    icon: '💄',
    title: 'Cosmetics',
    desc: 'Used in skin care products as a thickening and binding agent.',
    buyers: 'Cosmetic manufacturers',
  },
];

const packagingOptions = [
  { label: '25 kg PP Bags', note: 'Standard', badge: 'Most Popular', badgeColor: '#D97706' },
  { label: '50 kg Jumbo Bags', note: 'Bulk Export', badge: 'FCL Ready', badgeColor: '#059669' },
  { label: 'Custom / Private Label', note: 'On Request', badge: 'Available', badgeColor: '#7c3aed' },
];

const shippingDocs = [
  'Certificate of Analysis (COA)',
  'Phytosanitary Certificate',
  'Commercial Invoice & Packing List',
  'Bill of Lading / Airway Bill',
  'FSSAI / APEDA Compliance Docs',
  'Country-specific docs on request',
];

export default function ProductPage() {
  const [activeTab, setActiveTab] = useState<Tab>('overview');

  const tabs: { key: Tab; label: string }[] = [
    { key: 'overview', label: 'Overview' },
    { key: 'specifications', label: 'Specifications' },
    { key: 'usecases', label: 'Use Cases' },
    { key: 'packaging', label: 'Packaging & Shipping' },
  ];

  return (
    <main style={{ background: '#F9F6F1', minHeight: '100vh' }}>

      {/* ── Hero ── */}
      <section
        style={{
          background: 'linear-gradient(135deg, #1C1204 0%, #2d1f08 60%, #3d2a0a 100%)',
          padding: '4rem 0 3rem',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: '-80px',
            right: '-80px',
            width: '400px',
            height: '400px',
            background: 'radial-gradient(circle, rgba(217,119,6,0.15) 0%, transparent 70%)',
            pointerEvents: 'none',
          }}
        />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          {/* Breadcrumb */}
          <div style={{ color: '#9ca3af', fontSize: '0.85rem', marginBottom: '1.5rem' }}>
            <Link href="/en/product" style={{ color: '#9ca3af', textDecoration: 'none' }}>Products</Link>
            {' / '}
            <span style={{ color: '#D97706' }}>Isabgol (Psyllium Husk)</span>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '3rem',
              alignItems: 'center',
            }}
          >
            <div>
              <div
                style={{
                  display: 'inline-block',
                  background: 'rgba(217,119,6,0.15)',
                  border: '1px solid rgba(217,119,6,0.3)',
                  color: '#D97706',
                  padding: '0.3rem 0.85rem',
                  borderRadius: '50px',
                  fontSize: '0.72rem',
                  fontWeight: 700,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  marginBottom: '1rem',
                }}
              >
                Premium Export Grade
              </div>
              <h1
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: 'clamp(2rem, 4.5vw, 3.2rem)',
                  fontWeight: 700,
                  color: 'white',
                  lineHeight: 1.15,
                  marginBottom: '1rem',
                }}
              >
                Isabgol{' '}
                <em style={{ color: '#D97706', fontStyle: 'italic' }}>(Psyllium Husk)</em>
              </h1>
              <p style={{ color: '#b8a98a', fontSize: '1rem', lineHeight: 1.7, maxWidth: '480px', marginBottom: '2rem' }}>
                Farm-direct, lab-certified psyllium husk from Gujarat. Available in 85%, 95%, 98%, and 99%+
                purity grades with full batch COA.
              </p>
              <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                <Link
                  href="/en/contact"
                  style={{
                    background: '#D97706',
                    color: 'white',
                    padding: '0.8rem 1.75rem',
                    borderRadius: '50px',
                    fontWeight: 700,
                    fontSize: '0.9rem',
                    textDecoration: 'none',
                  }}
                >
                  Request Sample →
                </Link>
                <a
                  href="https://wa.me/919408465040?text=Hi, I need Psyllium Husk COA and pricing"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    background: 'rgba(255,255,255,0.08)',
                    border: '1px solid rgba(255,255,255,0.2)',
                    color: 'white',
                    padding: '0.8rem 1.75rem',
                    borderRadius: '50px',
                    fontWeight: 700,
                    fontSize: '0.9rem',
                    textDecoration: 'none',
                  }}
                >
                  💬 Get Pricing
                </a>
              </div>
            </div>

            {/* Trust badges */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '0.75rem',
              }}
            >
              {[
                { icon: '🔬', label: 'Lab Certified', sub: 'Every batch' },
                { icon: '📋', label: 'Full COA', sub: 'Before shipment' },
                { icon: '🚢', label: 'Ships Worldwide', sub: 'FOB / CIF' },
                { icon: '🌿', label: 'Farm Direct', sub: 'Gujarat sourced' },
              ].map(b => (
                <div
                  key={b.label}
                  style={{
                    background: 'rgba(255,255,255,0.05)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    borderRadius: '10px',
                    padding: '1rem',
                    textAlign: 'center',
                  }}
                >
                  <div style={{ fontSize: '1.5rem', marginBottom: '0.3rem' }}>{b.icon}</div>
                  <div style={{ color: 'white', fontWeight: 700, fontSize: '0.85rem' }}>{b.label}</div>
                  <div style={{ color: '#9ca3af', fontSize: '0.75rem' }}>{b.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Sticky Tab Bar ── */}
      <div
        style={{
          position: 'sticky',
          top: 0,
          background: 'white',
          borderBottom: '1px solid #E5E0D8',
          zIndex: 10,
          boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
        }}
      >
        <div className="container">
          <div style={{ display: 'flex', gap: '0', overflowX: 'auto' }}>
            {tabs.map(tab => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                style={{
                  padding: '1rem 1.5rem',
                  background: 'none',
                  border: 'none',
                  borderBottom: activeTab === tab.key ? '3px solid #D97706' : '3px solid transparent',
                  color: activeTab === tab.key ? '#D97706' : '#6b7280',
                  fontWeight: activeTab === tab.key ? 700 : 500,
                  fontSize: '0.9rem',
                  cursor: 'pointer',
                  whiteSpace: 'nowrap',
                  transition: 'all 0.2s',
                }}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── Tab Content ── */}
      <div className="container" style={{ padding: '3rem 1rem' }}>

        {/* OVERVIEW */}
        {activeTab === 'overview' && (
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '3rem',
              alignItems: 'flex-start',
            }}
          >
            {/* Left: content */}
            <div>
              <h2
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)',
                  fontWeight: 700,
                  color: '#1a1a1a',
                  marginBottom: '1.5rem',
                }}
              >
                About Isabgol (Psyllium Husk)
              </h2>
              <p style={{ color: '#4b5563', lineHeight: 1.8, marginBottom: '1.25rem', fontSize: '0.97rem' }}>
                Isabgol, commonly known as Psyllium Husk, is harvested from the <em>Plantago ovata</em> plant
                cultivated across Gujarat's fertile plains. Our Isabgol maintains a purity of 99.5%, making it
                one of the highest-grade exports from India. The seeds are processed using advanced cleaning
                and grading methods to ensure premium quality.
              </p>
              <p style={{ color: '#4b5563', lineHeight: 1.8, marginBottom: '1.25rem', fontSize: '0.97rem' }}>
                Rich in soluble fiber, Isabgol is renowned worldwide for its digestive health benefits. It acts
                as a gentle laxative, helps lower cholesterol, and supports heart health. The pure white-cream
                color and characteristic earthy aroma indicate superior quality and freshness.
              </p>
              <p style={{ color: '#4b5563', lineHeight: 1.8, marginBottom: '1.25rem', fontSize: '0.97rem' }}>
                Our sourcing partners have decades of experience in Psyllium cultivation. We offer varieties
                including 85%, 95%, 98%, and 99% purity grades depending on your requirements. The product
                undergoes rigorous quality testing at NABL-accredited laboratories before export.
              </p>
              <p style={{ color: '#4b5563', lineHeight: 1.8, fontSize: '0.97rem' }}>
                Ideal for pharmaceutical companies, food manufacturers, and nutraceutical brands. Available in
                husk, powder, and granule forms. Custom processing and private labeling options available for
                bulk orders.
              </p>
            </div>

            {/* Right: Quick Facts card */}
            <div
              style={{
                background: '#F9F6F1',
                border: '1px solid #E5E0D8',
                borderRadius: '16px',
                padding: '2rem',
                position: 'sticky',
                top: '80px',
              }}
            >
              <h3
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: '1.5rem',
                  fontWeight: 700,
                  color: '#1a1a1a',
                  marginBottom: '1.5rem',
                }}
              >
                Quick Facts
              </h3>
              {[
                { label: 'Botanical Name', value: 'Plantago ovata' },
                { label: 'Plant Family', value: 'Plantaginaceae' },
                { label: 'Harvest Season', value: 'March–April, Oct–Nov' },
                { label: 'Storage', value: 'Cool, dry place below 25°C' },
                { label: 'Shelf Life', value: '24 months' },
                { label: 'HS Code', value: '12119090' },
                { label: 'Origin', value: 'Gujarat & Rajasthan, India' },
                { label: 'Available Forms', value: 'Husk, Powder, Seeds' },
              ].map((f, i) => (
                <div
                  key={f.label}
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    padding: '0.75rem 0',
                    borderTop: i === 0 ? 'none' : '1px solid #E5E0D8',
                    gap: '1rem',
                  }}
                >
                  <span style={{ color: '#6b7280', fontSize: '0.88rem' }}>{f.label}</span>
                  <span style={{ color: '#1a1a1a', fontWeight: 700, fontSize: '0.88rem', textAlign: 'right' }}>{f.value}</span>
                </div>
              ))}

              <div style={{ marginTop: '1.5rem', borderTop: '1px solid #E5E0D8', paddingTop: '1.5rem' }}>
                <Link
                  href="/en/contact"
                  style={{
                    display: 'block',
                    textAlign: 'center',
                    background: '#D97706',
                    color: 'white',
                    padding: '0.85rem',
                    borderRadius: '50px',
                    fontWeight: 700,
                    fontSize: '0.9rem',
                    textDecoration: 'none',
                  }}
                >
                  Request Free Sample →
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* SPECIFICATIONS */}
        {activeTab === 'specifications' && (
          <div>
            <h2
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: 'clamp(1.6rem, 3vw, 2.2rem)',
                fontWeight: 700,
                color: '#1a1a1a',
                marginBottom: '2rem',
                textAlign: 'center',
              }}
            >
              Technical Specifications
            </h2>
            <div
              style={{
                borderRadius: '14px',
                overflow: 'hidden',
                border: '1px solid #E5E0D8',
                background: 'white',
                maxWidth: '860px',
                margin: '0 auto',
              }}
            >
              {/* Header */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr 1fr',
                  background: '#1C1204',
                  padding: '1rem 1.5rem',
                }}
              >
                {['Parameter', 'Specification', 'Test Method'].map(h => (
                  <div
                    key={h}
                    style={{
                      color: 'white',
                      fontWeight: 700,
                      fontSize: '0.85rem',
                      letterSpacing: '0.04em',
                    }}
                  >
                    {h}
                  </div>
                ))}
              </div>

              {/* Rows */}
              {specs.map((row, i) => (
                <div
                  key={row.param}
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr 1fr',
                    padding: '0.9rem 1.5rem',
                    background: i % 2 === 0 ? '#F9F6F1' : 'white',
                    borderTop: '1px solid #E5E0D8',
                  }}
                >
                  <div style={{ color: '#374151', fontSize: '0.92rem' }}>{row.param}</div>
                  <div style={{ color: '#1a1a1a', fontSize: '0.92rem', fontWeight: 700 }}>{row.spec}</div>
                  <div style={{ color: '#6b7280', fontSize: '0.88rem' }}>{row.method}</div>
                </div>
              ))}
            </div>
            <p
              style={{
                textAlign: 'center',
                color: '#9ca3af',
                fontSize: '0.82rem',
                marginTop: '1.25rem',
              }}
            >
              COA shared digitally before shipment confirmation • Third-party lab reports available on request
            </p>
          </div>
        )}

        {/* USE CASES */}
        {activeTab === 'usecases' && (
          <div>
            <h2
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)',
                fontWeight: 700,
                color: '#1a1a1a',
                marginBottom: '2.5rem',
                textAlign: 'center',
              }}
            >
              Industries We Serve
            </h2>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '1.25rem',
                maxWidth: '860px',
                margin: '0 auto',
              }}
            >
              {useCases.map(uc => (
                <div
                  key={uc.title}
                  style={{
                    background: 'white',
                    border: '1px solid #E5E0D8',
                    borderRadius: '14px',
                    padding: '1.75rem',
                    transition: 'all 0.25s',
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLElement).style.borderColor = '#D97706';
                    (e.currentTarget as HTMLElement).style.boxShadow = '0 8px 24px rgba(217,119,6,0.1)';
                    (e.currentTarget as HTMLElement).style.transform = 'translateY(-3px)';
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLElement).style.borderColor = '#E5E0D8';
                    (e.currentTarget as HTMLElement).style.boxShadow = 'none';
                    (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
                  }}
                >
                  <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{uc.icon}</div>
                  <h3
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: '1.3rem',
                      fontWeight: 700,
                      color: '#1a1a1a',
                      marginBottom: '0.5rem',
                    }}
                  >
                    {uc.title}
                  </h3>
                  <p style={{ color: '#6b7280', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '1rem' }}>
                    {uc.desc}
                  </p>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                    <span style={{ color: '#D97706', fontSize: '0.85rem' }}>🏷</span>
                    <span style={{ color: '#D97706', fontSize: '0.82rem', fontWeight: 600 }}>
                      Common buyers: {uc.buyers}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* PACKAGING & SHIPPING */}
        {activeTab === 'packaging' && (
          <div>
            <h2
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)',
                fontWeight: 700,
                color: '#1a1a1a',
                marginBottom: '2.5rem',
                textAlign: 'center',
              }}
            >
              Packaging & Shipping
            </h2>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '2.5rem',
                maxWidth: '900px',
                margin: '0 auto',
              }}
            >
              {/* Left: Packaging options */}
              <div>
                <h3
                  style={{
                    fontWeight: 700,
                    color: '#374151',
                    marginBottom: '1rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    fontSize: '0.82rem',
                  }}
                >
                  Packaging Options
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  {packagingOptions.map(pkg => (
                    <div
                      key={pkg.label}
                      style={{
                        background: 'white',
                        border: '1px solid #E5E0D8',
                        borderRadius: '10px',
                        padding: '1rem 1.25rem',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                      }}
                    >
                      <div>
                        <div style={{ fontWeight: 700, color: '#1a1a1a', fontSize: '0.95rem' }}>{pkg.label}</div>
                        <div style={{ color: '#9ca3af', fontSize: '0.8rem' }}>{pkg.note}</div>
                      </div>
                      <span
                        style={{
                          background: `${pkg.badgeColor}15`,
                          color: pkg.badgeColor,
                          padding: '0.2rem 0.65rem',
                          borderRadius: '50px',
                          fontSize: '0.72rem',
                          fontWeight: 700,
                          whiteSpace: 'nowrap',
                        }}
                      >
                        {pkg.badge}
                      </span>
                    </div>
                  ))}
                </div>

                <div
                  style={{
                    background: '#FAF8F4',
                    border: '1px solid #E5E0D8',
                    borderRadius: '10px',
                    padding: '1.25rem',
                    marginTop: '1.25rem',
                  }}
                >
                  <div style={{ fontWeight: 700, color: '#1a1a1a', fontSize: '0.9rem', marginBottom: '0.5rem' }}>
                    Incoterms Available
                  </div>
                  {['FOB Mundra / Nhava Sheva', 'CIF to any world port', 'FCL & LCL both available', 'Lead time: 7–14 business days'].map(t => (
                    <div key={t} style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.4rem', alignItems: 'center' }}>
                      <span style={{ color: '#D97706', fontWeight: 700, fontSize: '0.85rem' }}>✓</span>
                      <span style={{ color: '#6b7280', fontSize: '0.88rem' }}>{t}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right: Shipping docs */}
              <div>
                <h3
                  style={{
                    fontWeight: 700,
                    color: '#374151',
                    marginBottom: '1rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    fontSize: '0.82rem',
                  }}
                >
                  Export Documents Provided
                </h3>
                <div
                  style={{
                    background: 'white',
                    border: '1px solid #E5E0D8',
                    borderRadius: '12px',
                    padding: '1.5rem',
                  }}
                >
                  {shippingDocs.map((doc, i) => (
                    <div
                      key={doc}
                      style={{
                        display: 'flex',
                        gap: '0.75rem',
                        alignItems: 'center',
                        padding: '0.7rem 0',
                        borderTop: i === 0 ? 'none' : '1px solid #F3F0EC',
                      }}
                    >
                      <div
                        style={{
                          width: '28px',
                          height: '28px',
                          background: 'rgba(217,119,6,0.1)',
                          borderRadius: '50%',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0,
                          color: '#D97706',
                          fontWeight: 700,
                          fontSize: '0.75rem',
                        }}
                      >
                        ✓
                      </div>
                      <span style={{ color: '#374151', fontSize: '0.9rem' }}>{doc}</span>
                    </div>
                  ))}
                </div>

                <div style={{ marginTop: '1.25rem' }}>
                  <Link
                    href="/en/contact"
                    style={{
                      display: 'block',
                      textAlign: 'center',
                      background: '#1C1204',
                      color: 'white',
                      padding: '0.85rem',
                      borderRadius: '50px',
                      fontWeight: 700,
                      fontSize: '0.9rem',
                      textDecoration: 'none',
                      marginBottom: '0.75rem',
                    }}
                  >
                    Request Quote & Shipping Terms
                  </Link>
                  <a
                    href="https://wa.me/919408465040?text=Hi, I need Psyllium Husk shipping information"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'block',
                      textAlign: 'center',
                      background: '#25D366',
                      color: 'white',
                      padding: '0.85rem',
                      borderRadius: '50px',
                      fontWeight: 700,
                      fontSize: '0.9rem',
                      textDecoration: 'none',
                    }}
                  >
                    💬 WhatsApp for Fast Response
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* ── Trust Bar ── */}
      <section style={{ background: '#1C1204', padding: '2.5rem 0' }}>
        <div className="container">
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '3rem',
              flexWrap: 'wrap',
            }}
          >
            {[
              { icon: '🔬', label: 'Lab Certified' },
              { icon: '📦', label: 'Sample Orders' },
              { icon: '🌍', label: 'Ships Worldwide' },
              { icon: '📋', label: 'Full Documentation' },
            ].map(t => (
              <div
                key={t.label}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.6rem',
                  color: '#e5d6b8',
                  fontWeight: 600,
                  fontSize: '0.9rem',
                }}
              >
                <span style={{ fontSize: '1.2rem' }}>{t.icon}</span>
                {t.label}
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}