import Link from 'next/link';
import type { Metadata } from 'next';
import { COUNTRIES } from '@/lib/countries-data';
import { buildAlternates, buildCanonical } from '@/lib/seo-helpers';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const canonical = buildCanonical(locale, '/suppliers');
  return {
    title: 'Indian Herbal Products Supplier by Country | Psyllium, Spices, Herbs, Oils | Amar Herbal Origins',
    description: 'Amar Herbal Origins exports Psyllium Husk, Indian Spices, Herbs, Cold-Pressed Oils & Khakhra to 25+ countries. Find your country-specific supplier page with certifications, shipping details & FAQs.',
    alternates: {
      canonical,
      languages: buildAlternates('/suppliers'),
    },
  };
}

// Group countries by region for better UX
const REGIONS = ['North America', 'Europe', 'Middle East', 'Asia-Pacific', 'Africa'];

export default async function SuppliersIndexPage({ params }: Props) {
  const { locale } = await params;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Psyllium Husk Supplier Countries — Amar Herbal Origins',
    description: 'International psyllium husk (Isabgol) export destinations served by Amar Herbal Origins',
    numberOfItems: COUNTRIES.length,
    itemListElement: COUNTRIES.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: `Psyllium Husk Supplier ${c.name}`,
      url: `https://amarherbalorigins.com/${locale}/suppliers/${c.slug}`,
    })),
  };

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* CSS hover — Server Component safe */}
      <style>{`
        .country-card:hover {
          border-color: #D97706 !important;
          box-shadow: 0 8px 24px rgba(217,119,6,0.12);
          transform: translateY(-2px);
        }
      `}</style>

      {/* ── Hero ── */}
      <section style={{
        background: 'linear-gradient(135deg, #1C1204 0%, #2d1f08 60%, #3d2a0a 100%)',
        padding: '5rem 0 4rem',
        position: 'relative',
        overflow: 'hidden',
        textAlign: 'center',
      }}>
        <div style={{
          position: 'absolute', top: '-80px', left: '50%', transform: 'translateX(-50%)',
          width: '600px', height: '600px',
          background: 'radial-gradient(circle, rgba(217,119,6,0.1) 0%, transparent 65%)',
          pointerEvents: 'none',
        }} />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{
            display: 'inline-block',
            background: 'rgba(217,119,6,0.15)', border: '1px solid rgba(217,119,6,0.35)',
            color: '#D97706', padding: '0.35rem 1rem', borderRadius: '50px',
            fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.12em',
            textTransform: 'uppercase', marginBottom: '1.5rem',
          }}>
            25 International Markets
          </div>
          <h1 style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 'clamp(2.2rem, 5vw, 3.8rem)',
            fontWeight: 700, color: 'white', lineHeight: 1.15, marginBottom: '1.25rem',
          }}>
            Psyllium Husk Supplier{' '}
            <em style={{ color: '#D97706' }}>By Country</em>
          </h1>
          <p style={{
            color: '#b8a98a', fontSize: '1.1rem', maxWidth: '600px',
            margin: '0 auto 3rem', lineHeight: 1.7,
          }}>
            Amar Herbal Origins exports premium psyllium husk (Isabgol) to 25+ countries worldwide. Select your country for market-specific pricing, certifications, and import information.
          </p>

          {/* Stats */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '3rem', flexWrap: 'wrap' }}>
            {['25+ Countries', 'ISO 22000 Certified', 'MOQ 1 MT', '7–14 Day Lead Time'].map(s => (
              <div key={s} style={{ color: '#e5d6b8', fontWeight: 600, fontSize: '0.9rem' }}>
                <span style={{ color: '#D97706' }}>✦ </span>{s}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Countries Grid by Region ── */}
      <section style={{ background: '#FAF8F4', padding: '5rem 0' }}>
        <div className="container">
          {REGIONS.map(region => {
            const regionCountries = COUNTRIES.filter(c => c.region === region);
            if (regionCountries.length === 0) return null;
            return (
              <div key={region} style={{ marginBottom: '4rem' }}>
                {/* Region header */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.75rem' }}>
                  <div className="section-label">{region.toUpperCase()}</div>
                  <div style={{ flex: 1, height: '1px', background: '#E5E0D8' }} />
                </div>

                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
                  gap: '1rem',
                }}>
                  {regionCountries.map(c => (
                    <Link
                      key={c.slug}
                      href={`/${locale}/suppliers/${c.slug}`}
                      className="country-card"
                      style={{
                        textDecoration: 'none',
                        display: 'block',
                        background: 'white',
                        border: '1px solid #E5E0D8',
                        borderRadius: '14px',
                        padding: '1.5rem',
                        transition: 'all 0.25s',
                        position: 'relative',
                        overflow: 'hidden',
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.875rem' }}>
                        <span style={{ fontSize: '2.2rem' }}>{c.flag}</span>
                        <span style={{
                          fontSize: '0.72rem', fontWeight: 700, color: '#D97706',
                          background: 'rgba(217,119,6,0.1)', padding: '0.2rem 0.6rem',
                          borderRadius: '50px', letterSpacing: '0.06em',
                        }}>
                          {c.currency}
                        </span>
                      </div>
                      <div style={{ fontWeight: 700, fontSize: '1rem', color: '#1C1204', marginBottom: '0.35rem' }}>
                        {c.name}
                      </div>
                      <div style={{ color: '#6b7280', fontSize: '0.8rem', marginBottom: '0.75rem', lineHeight: 1.4 }}>
                        {c.buyerSegments[0]} · {c.buyerSegments[1]}
                      </div>
                      <div style={{
                        display: 'inline-flex', alignItems: 'center', gap: '0.25rem',
                        color: '#D97706', fontSize: '0.82rem', fontWeight: 700,
                      }}>
                        View Supplier Info →
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ── Why Amar Herbal ── */}
      <section style={{ background: '#1C1204', padding: '5rem 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <div style={{
              display: 'inline-block', color: '#D97706', fontSize: '0.75rem',
              fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase',
              marginBottom: '1rem',
            }}>WHY AMAR HERBAL ORIGINS</div>
            <h2 style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)',
              fontWeight: 700, color: 'white',
            }}>
              Your Trusted Global Psyllium Supplier
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem' }}>
            {[
              { icon: '🌾', title: 'Farm-Direct Source', desc: 'Direct from contracted farmers in Gujarat & Rajasthan — no middlemen, best price.' },
              { icon: '🔬', title: 'Lab-Certified Quality', desc: '10+ quality tests per batch. Full COA with every shipment to every country.' },
              { icon: '📜', title: 'Global Certifications', desc: 'ISO 22000, USDA Organic, EU Organic, Halal, Kosher, HACCP — all major markets covered.' },
              { icon: '🚢', title: 'Export Experience', desc: '5+ years exporting to 30+ countries. Smooth customs clearance in all major markets.' },
            ].map(v => (
              <div key={v.title} style={{
                background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: '14px', padding: '1.75rem',
              }}>
                <div style={{ fontSize: '2rem', marginBottom: '0.875rem' }}>{v.icon}</div>
                <div style={{ fontWeight: 700, color: 'white', fontSize: '0.95rem', marginBottom: '0.5rem' }}>{v.title}</div>
                <p style={{ color: '#9ca3af', fontSize: '0.85rem', lineHeight: 1.6 }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{
        background: 'linear-gradient(135deg, #1C1204 0%, #2d1f08 100%)',
        padding: '5rem 0', textAlign: 'center',
        borderTop: '1px solid rgba(255,255,255,0.05)',
      }}>
        <div className="container">
          <h2 style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 'clamp(1.8rem, 4vw, 3rem)',
            fontWeight: 700, color: 'white', marginBottom: '1rem',
          }}>
            Don't See Your Country?
          </h2>
          <p style={{
            color: '#b8a98a', fontSize: '1.05rem', maxWidth: '480px',
            margin: '0 auto 2.5rem', lineHeight: 1.7,
          }}>
            We export to 30+ countries worldwide. Contact us for country-specific pricing, documentation, and logistics support.
          </p>
          <Link href={`/${locale}/contact`} style={{
            background: '#D97706', color: 'white', padding: '1rem 2.5rem',
            borderRadius: '50px', fontWeight: 700, textDecoration: 'none',
            fontSize: '1rem', display: 'inline-block',
          }}>
            Contact Our Export Team →
          </Link>
        </div>
      </section>
    </main>
  );
}
