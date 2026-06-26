'use client';

import Link from 'next/link';

const CATEGORIES = [
  {
    emoji: '🌾',
    name: 'Psyllium Husk',
    href: '/en/psyllium',
    color: '#92400e',
    bg: '#fef3c7',
    border: '#d97706',
    desc: 'Isabgol husk, powder & organic — pharmaceutical & food grade B2B export.',
    highlights: ['99% Purity', 'USDA Organic', 'MOQ 500kg'],
    badge: 'Bestseller',
  },
  {
    emoji: '🌿',
    name: 'Herbs',
    href: '/en/herbs',
    color: '#16a34a',
    bg: '#f0fdf4',
    border: '#16a34a',
    desc: 'Moringa, mint, oregano, amla, curry leaves — bulk dried herb export.',
    highlights: ['5 Products', 'Lab Tested', 'MOQ 100kg'],
    badge: 'New',
  },
  {
    emoji: '🌶️',
    name: 'Spices & Seeds',
    href: '/en/spices',
    color: '#b45309',
    bg: '#fffbeb',
    border: '#d97706',
    desc: 'Turmeric, cumin, fenugreek, coriander, ajwain — authentic Gujarat spices.',
    highlights: ['5 Products', 'ISO 22000', 'MOQ 500kg'],
    badge: 'Popular',
  },
  {
    emoji: '🫙',
    name: 'Herbal Oils',
    href: '/en/oils',
    color: '#4d7c0f',
    bg: '#f7fee7',
    border: '#4d7c0f',
    desc: 'Cold pressed castor oil & karanja oil — cosmetic & pharmaceutical grade.',
    highlights: ['2 Products', 'Cold Pressed', 'MOQ 200L'],
    badge: 'New',
  },
  {
    emoji: '🍽️',
    name: 'Ready-to-Eat',
    href: '/en/ready-to-eat',
    color: '#c2410c',
    bg: '#fff7ed',
    border: '#c2410c',
    desc: 'Gujarati khakhra — private label, custom flavors, export-ready packaging.',
    highlights: ['White Label', 'FSSAI', 'MOQ 500 units'],
    badge: 'New',
  },
];

export function ProductsSection() {
  return (
    <section style={{ background: 'white', padding: '5rem 0' }}>
      <div className="container">

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <div style={{
            fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.15em',
            textTransform: 'uppercase', color: '#D97706', marginBottom: '0.75rem',
          }}>
            OUR PRODUCT CATEGORIES
          </div>
          <h2 style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: 700, color: '#1a1a1a', lineHeight: 1.2, marginBottom: '1rem',
          }}>
            5 Categories,{' '}
            <em style={{ color: '#D97706' }}>One Trusted Source</em>
          </h2>
          <p style={{ color: '#6b7280', fontSize: '1rem', maxWidth: '540px', margin: '0 auto', lineHeight: 1.7 }}>
            Farm-direct sourcing from Gujarat &amp; Rajasthan. Every product lab-tested, certified, and export-ready.
          </p>
        </div>

        {/* Categories grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(290px, 1fr))',
          gap: '1.5rem',
          marginBottom: '3rem',
        }}>
          {CATEGORIES.map((cat) => (
            <Link
              key={cat.href}
              href={cat.href}
              style={{ textDecoration: 'none', display: 'flex' }}
            >
              <div
                style={{
                  borderRadius: '16px',
                  border: `1.5px solid ${cat.color}20`,
                  background: 'white',
                  overflow: 'hidden',
                  transition: 'all 0.3s ease',
                  width: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  boxShadow: '0 2px 12px rgba(0,0,0,0.05)',
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLDivElement;
                  el.style.transform = 'translateY(-6px)';
                  el.style.boxShadow = `0 16px 48px ${cat.color}20`;
                  el.style.borderColor = `${cat.color}55`;
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLDivElement;
                  el.style.transform = 'translateY(0)';
                  el.style.boxShadow = '0 2px 12px rgba(0,0,0,0.05)';
                  el.style.borderColor = `${cat.color}20`;
                }}
              >
                {/* Top color strip + emoji */}
                <div style={{
                  background: cat.bg,
                  padding: '2rem 1.5rem 1.5rem',
                  display: 'flex',
                  alignItems: 'flex-start',
                  justifyContent: 'space-between',
                }}>
                  <div style={{ fontSize: '3rem', lineHeight: 1 }}>{cat.emoji}</div>
                  <span style={{
                    background: `${cat.color}18`,
                    border: `1px solid ${cat.color}33`,
                    color: cat.color,
                    fontSize: '0.7rem', fontWeight: 700,
                    padding: '0.2rem 0.65rem', borderRadius: '50px',
                    letterSpacing: '0.08em', textTransform: 'uppercase' as const,
                  }}>
                    {cat.badge}
                  </span>
                </div>

                {/* Content */}
                <div style={{ padding: '1.25rem 1.5rem 1.5rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
                  <h3 style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontWeight: 700, fontSize: '1.35rem',
                    color: '#1a1a1a', marginBottom: '0.5rem',
                  }}>
                    {cat.name}
                  </h3>
                  <p style={{ color: '#6b7280', fontSize: '0.88rem', lineHeight: 1.6, marginBottom: '1rem', flex: 1 }}>
                    {cat.desc}
                  </p>

                  {/* Highlights */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.25rem' }}>
                    {cat.highlights.map((h) => (
                      <span key={h} style={{
                        background: cat.bg,
                        border: `1px solid ${cat.color}25`,
                        color: cat.color,
                        fontSize: '0.75rem', fontWeight: 600,
                        padding: '0.2rem 0.6rem', borderRadius: '6px',
                      }}>
                        ✓ {h}
                      </span>
                    ))}
                  </div>

                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.35rem',
                    color: cat.color,
                    fontSize: '0.88rem',
                    fontWeight: 700,
                  }}>
                    Explore Products →
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div style={{ textAlign: 'center' }}>
          <Link
            href="/en/contact"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
              background: '#1C1204', color: 'white',
              padding: '0.875rem 2.5rem', borderRadius: '50px',
              fontWeight: 600, textDecoration: 'none', fontSize: '0.95rem',
              transition: 'all 0.2s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = '#2d1f06')}
            onMouseLeave={(e) => (e.currentTarget.style.background = '#1C1204')}
          >
            Request a Free Sample →
          </Link>
          <p style={{ marginTop: '0.75rem', color: '#9ca3af', fontSize: '0.82rem' }}>
            Free sample · COA provided · 24hr response · Ships worldwide
          </p>
        </div>
      </div>
    </section>
  );
}
