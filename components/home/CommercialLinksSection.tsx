'use client';

import Link from 'next/link';

const COMMERCIAL_PAGES = [
  {
    href: '/en/psyllium',
    icon: '🌾',
    badge: 'Bestseller',
    title: 'Psyllium Husk Products',
    desc: 'Isabgol husk, powder & organic — farm-direct B2B bulk supply from Gujarat. ISO 22000, USDA Organic, FOB export.',
    color: '#92400e',
    accent: '#D97706',
    tags: ['Husk', 'Powder', 'Organic', 'Private Label'],
  },
  {
    href: '/en/herbs',
    icon: '🌿',
    badge: 'New',
    title: 'Herbs Export',
    desc: 'Moringa, mint, oregano, amla, curry leaves — lab-certified dried herbs in bulk for global buyers.',
    color: '#16a34a',
    accent: '#4ade80',
    tags: ['Moringa', 'Mint', 'Amla', 'Oregano'],
  },
  {
    href: '/en/spices',
    icon: '🌶️',
    badge: 'Popular',
    title: 'Spices & Seeds Export',
    desc: 'Turmeric, cumin, fenugreek, coriander, ajwain — authentic Gujarat spices for food, pharma & nutraceuticals.',
    color: '#b45309',
    accent: '#f59e0b',
    tags: ['Turmeric', 'Cumin', 'Fenugreek', 'Coriander'],
  },
  {
    href: '/en/oils',
    icon: '🫙',
    badge: 'New',
    title: 'Herbal Oils',
    desc: 'Cold pressed castor oil & karanja oil — pharmaceutical, cosmetic & industrial grade, bulk supply from India.',
    color: '#4d7c0f',
    accent: '#86efac',
    tags: ['Castor Oil', 'Karanja Oil', 'Cold Pressed'],
  },
  {
    href: '/en/ready-to-eat',
    icon: '🍽️',
    badge: 'New',
    title: 'Ready-to-Eat Snacks',
    desc: 'Gujarati khakhra — traditional snacks with white label & private label export. Custom flavors & branding.',
    color: '#c2410c',
    accent: '#fb923c',
    tags: ['Khakhra', 'White Label', 'Private Label'],
  },
  {
    href: '/en/packaging',
    icon: '📦',
    badge: 'Info',
    title: 'Packaging & Shipping',
    desc: 'All our products ship worldwide with complete export documentation — COA, MSDS, fumigation, phyto certificates.',
    color: '#374151',
    accent: '#9ca3af',
    tags: ['COA', 'FOB', 'Air & Sea', 'Docs Ready'],
  },
];

interface Props {
  locale: string;
}

export function CommercialLinksSection({ locale }: Props) {
  return (
    <section style={{ background: '#1C1204', padding: '5rem 0', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <div style={{
            display: 'inline-block',
            color: '#D97706', fontSize: '0.75rem',
            fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase',
            marginBottom: '1rem',
          }}>
            EXPLORE OUR PRODUCT RANGE
          </div>
          <h2 style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)',
            fontWeight: 700, color: 'white', marginBottom: '1rem', lineHeight: 1.2,
          }}>
            What Are You Looking For?
          </h2>
          <p style={{ color: '#9ca3af', maxWidth: '540px', margin: '0 auto', lineHeight: 1.7, fontSize: '0.95rem' }}>
            From psyllium husk to moringa, spices, oils, and snacks — all from one trusted Gujarat exporter with 30+ country reach.
          </p>
        </div>

        {/* Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 1fr))',
          gap: '1.25rem',
        }}>
          {COMMERCIAL_PAGES.map((page) => (
            <Link
              key={page.href}
              href={page.href}
              style={{
                textDecoration: 'none',
                display: 'flex',
                flexDirection: 'column',
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.07)',
                borderRadius: '16px',
                padding: '1.75rem',
                transition: 'all 0.25s',
                position: 'relative',
                overflow: 'hidden',
              }}
              className="commercial-link-card"
            >
              {/* Glow */}
              <div style={{
                position: 'absolute', top: 0, right: 0,
                width: '120px', height: '120px',
                background: `radial-gradient(circle, ${page.accent}18 0%, transparent 70%)`,
                pointerEvents: 'none',
              }} />

              {/* Icon + Badge */}
              <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '1rem' }}>
                <span style={{ fontSize: '2.2rem' }}>{page.icon}</span>
                <span style={{
                  background: `${page.accent}20`,
                  border: `1px solid ${page.accent}40`,
                  color: page.accent,
                  fontSize: '0.7rem', fontWeight: 700,
                  padding: '0.2rem 0.65rem', borderRadius: '50px',
                  letterSpacing: '0.08em', textTransform: 'uppercase' as const,
                }}>
                  {page.badge}
                </span>
              </div>

              {/* Title */}
              <h3 style={{ fontWeight: 700, fontSize: '1.05rem', color: 'white', marginBottom: '0.6rem', lineHeight: 1.3 }}>
                {page.title}
              </h3>

              {/* Description */}
              <p style={{ color: '#9ca3af', fontSize: '0.85rem', lineHeight: 1.65, marginBottom: '1.25rem', flex: 1 }}>
                {page.desc}
              </p>

              {/* Tags */}
              <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1rem' }}>
                {page.tags.map((tag) => (
                  <span key={tag} style={{
                    background: 'rgba(255,255,255,0.06)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    color: '#d1d5db',
                    fontSize: '0.72rem', padding: '0.2rem 0.6rem',
                    borderRadius: '4px', fontWeight: 500,
                  }}>
                    {tag}
                  </span>
                ))}
              </div>

              {/* Arrow */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', color: page.accent, fontSize: '0.85rem', fontWeight: 700 }}>
                Explore →
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom CTA */}
        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
          <Link
            href={`/${locale}/contact`}
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
              background: '#D97706', color: 'white',
              padding: '1rem 2.5rem', borderRadius: '50px',
              fontWeight: 700, textDecoration: 'none', fontSize: '1rem',
              transition: 'opacity 0.2s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.88')}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
          >
            Request a Free Quote →
          </Link>
          <div style={{ marginTop: '1rem', color: '#6b7280', fontSize: '0.82rem' }}>
            Response within 24 hours · Free sample available · No commitment required
          </div>
        </div>
      </div>

      <style>{`
        .commercial-link-card:hover {
          background: rgba(255,255,255,0.06) !important;
          border-color: rgba(217,119,6,0.35) !important;
          transform: translateY(-3px);
        }
      `}</style>
    </section>
  );
}
