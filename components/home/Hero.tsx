'use client';

import Link from 'next/link';

const CATEGORIES = [
  { emoji: '🌾', label: 'Psyllium', href: '/en/psyllium', color: '#92400e', bg: '#fef3c7' },
  { emoji: '🌿', label: 'Herbs',    href: '/en/herbs',    color: '#16a34a', bg: '#f0fdf4' },
  { emoji: '🌶️', label: 'Spices',  href: '/en/spices',   color: '#b45309', bg: '#fffbeb' },
  { emoji: '🫙', label: 'Oils',     href: '/en/oils',     color: '#4d7c0f', bg: '#f7fee7' },
  { emoji: '🍽️', label: 'RTE',     href: '/en/ready-to-eat', color: '#c2410c', bg: '#fff7ed' },
];

export function Hero() {
  return (
    <section
      style={{
        background: 'linear-gradient(135deg, #F5F0E8 0%, #fdf8f0 60%, #ffffff 100%)',
        minHeight: '90vh',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        position: 'relative',
        paddingTop: '3rem',
        paddingBottom: '3rem',
      }}
    >
      {/* Decorative blobs */}
      <div style={{ position: 'absolute', top: '-10%', right: '-5%', width: '45vw', height: '45vw', borderRadius: '50%', background: 'rgba(217,119,6,0.05)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: '10%', left: '-8%', width: '30vw', height: '30vw', borderRadius: '50%', background: 'rgba(22,163,74,0.04)', pointerEvents: 'none' }} />

      <div className="container" style={{ width: '100%' }}>
        <div className="hero-inner">

          {/* ── Left column ── */}
          <div>
            {/* Badge */}
            <div style={{ marginBottom: '1.5rem' }}>
              <span style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                background: 'white', border: '1px solid #E5E0D8',
                padding: '0.5rem 1.125rem', borderRadius: '50px',
                fontSize: '0.875rem', fontWeight: 500, color: '#374151',
                boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
              }}>
                <span style={{ fontSize: '1rem' }}>🌿</span>
                Premium Herbal Products Exporter &amp; Manufacturer — Gujarat, India
              </span>
            </div>

            {/* H1 */}
            <h1 className="hero-heading" style={{ marginBottom: '1.25rem' }}>
              India's Trusted{' '}
              <span style={{ color: '#D97706' }}>Herbal</span>
              <br />
              <span style={{ fontStyle: 'italic' }}>&amp;</span>{' '}
              <span style={{ color: '#D97706' }}>Natural Products</span>{' '}
              Exporter
            </h1>

            {/* Sub-text */}
            <p style={{ fontSize: '1.05rem', color: '#4b5563', lineHeight: 1.75, marginBottom: '1.5rem', maxWidth: '520px' }}>
              Amar Herbal Origins — Gujarat's B2B exporter of Psyllium Husk, Herbs, Spices, Oils &amp; Ready-to-Eat products.
              Farm-direct sourcing, ISO 22000 &amp; USDA Organic certified, supplying to 30+ countries worldwide.
            </p>

            {/* Category pills */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem', marginBottom: '1.75rem' }}>
              {CATEGORIES.map((cat) => (
                <Link
                  key={cat.href}
                  href={cat.href}
                  style={{
                    display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
                    background: cat.bg, border: `1.5px solid ${cat.color}30`,
                    color: cat.color, padding: '0.45rem 1rem', borderRadius: '50px',
                    fontSize: '0.85rem', fontWeight: 600, textDecoration: 'none',
                    transition: 'all 0.2s',
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.background = cat.color; e.currentTarget.style.color = 'white'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = cat.bg; e.currentTarget.style.color = cat.color; }}
                >
                  {cat.emoji} {cat.label}
                </Link>
              ))}
            </div>

            {/* Certifications */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.75rem' }}>
              {[
                { icon: '🌿', label: 'USDA Organic' },
                { icon: '📜', label: 'ISO 22000' },
                { icon: '☪️', label: 'Halal' },
                { icon: '✡️', label: 'Kosher' },
                { icon: '🏛️', label: 'FSSAI' },
                { icon: '🌾', label: 'APEDA' },
              ].map((badge) => (
                <span key={badge.label} style={{
                  display: 'inline-flex', alignItems: 'center', gap: '0.35rem',
                  background: 'white', border: '1px solid #E5E0D8',
                  padding: '0.35rem 0.75rem', borderRadius: '50px',
                  fontSize: '0.8rem', fontWeight: 500, color: '#374151',
                  boxShadow: '0 1px 3px rgba(0,0,0,0.04)',
                }}>
                  <span>{badge.icon}</span>
                  {badge.label}
                </span>
              ))}
            </div>

            {/* Export flags */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '2rem', flexWrap: 'wrap' }}>
              <span style={{ fontSize: '0.85rem', color: '#6B7280', fontWeight: 500 }}>Exporting globally to:</span>
              <div style={{ display: 'flex', gap: '0.4rem', alignItems: 'center' }}>
                {['🇺🇸','🇩🇪','🇬🇧','🇦🇪','🇦🇺','🇨🇦','🇯🇵','🇸🇬','🇳🇱','🇿🇦'].map((flag, i) => (
                  <span key={i} style={{ fontSize: '1.2rem' }}>{flag}</span>
                ))}
                <span style={{ fontSize: '0.82rem', color: '#9ca3af', fontWeight: 500 }}>+20 more</span>
              </div>
            </div>

            {/* CTAs */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginBottom: '2rem' }}>
              <Link href="/en/contact" className="btn-primary" style={{ fontSize: '1rem', padding: '1rem 2rem' }}>
                Request Free Sample →
              </Link>
              <a
                href="https://wa.me/919408465040?text=Hi, I'm interested in your herbal products — please share pricing"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
                  background: '#25D366', color: 'white',
                  padding: '1rem 1.5rem', borderRadius: '50px',
                  fontWeight: 600, textDecoration: 'none', fontSize: '0.95rem',
                  transition: 'opacity 0.2s',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.88')}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
              >
                💬 WhatsApp Us
              </a>
            </div>
          </div>

          {/* ── Right column — Category cards ── */}
          <div className="hero-cards-col">
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '1rem',
            }}>
              {CATEGORIES.map((cat) => (
                <Link
                  key={cat.href}
                  href={cat.href}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    background: 'white',
                    borderRadius: '16px',
                    padding: '1.25rem',
                    textDecoration: 'none',
                    border: `1.5px solid ${cat.color}20`,
                    boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
                    transition: 'all 0.25s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-4px)';
                    e.currentTarget.style.boxShadow = `0 12px 36px ${cat.color}22`;
                    e.currentTarget.style.borderColor = `${cat.color}55`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.06)';
                    e.currentTarget.style.borderColor = `${cat.color}20`;
                  }}
                >
                  <div style={{
                    width: '44px', height: '44px', borderRadius: '12px',
                    background: cat.bg, display: 'flex',
                    alignItems: 'center', justifyContent: 'center',
                    fontSize: '1.4rem', marginBottom: '0.75rem',
                  }}>
                    {cat.emoji}
                  </div>
                  <span style={{ fontWeight: 700, color: '#1a1a1a', fontSize: '0.92rem', marginBottom: '0.2rem' }}>
                    {cat.label}
                  </span>
                  <span style={{ fontSize: '0.8rem', color: cat.color, fontWeight: 600, marginTop: 'auto' }}>
                    View Products →
                  </span>
                </Link>
              ))}

              {/* Last card — contact CTA */}
              <a
                href="https://wa.me/919408465040"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  background: '#1C1204',
                  borderRadius: '16px',
                  padding: '1.25rem',
                  textDecoration: 'none',
                  border: '1.5px solid rgba(255,255,255,0.06)',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
                  transition: 'all 0.25s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.background = '#2d1f06';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.background = '#1C1204';
                }}
              >
                <div style={{
                  width: '44px', height: '44px', borderRadius: '12px',
                  background: 'rgba(255,255,255,0.08)', display: 'flex',
                  alignItems: 'center', justifyContent: 'center',
                  fontSize: '1.4rem', marginBottom: '0.75rem',
                }}>
                  💬
                </div>
                <span style={{ fontWeight: 700, color: 'white', fontSize: '0.92rem', marginBottom: '0.2rem' }}>
                  Get Quote Now
                </span>
                <span style={{ fontSize: '0.8rem', color: '#D97706', fontWeight: 600, marginTop: 'auto' }}>
                  WhatsApp →
                </span>
              </a>
            </div>
          </div>

        </div>
      </div>

      <style>{`
        .hero-inner {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
        }
        .hero-heading {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(2rem, 4.5vw, 3.5rem);
          font-weight: 700;
          color: #1a1a1a;
          line-height: 1.15;
        }
        @media (max-width: 992px) {
          .hero-inner { gap: 2.5rem; }
        }
        @media (max-width: 768px) {
          .hero-inner {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
          .hero-cards-col {
            display: none;
          }
        }
      `}</style>
    </section>
  );
}