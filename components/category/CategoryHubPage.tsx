'use client';

import Link from 'next/link';
import Image from 'next/image';
import type { Category } from '@/lib/category-data';

type Props = {
  category: Category;
};

export function CategoryHubPage({ category }: Props) {
  const {
    name,
    slug,
    tagline,
    description,
    colorTheme,
    colorLight,
    emoji,
    products,
    certifications,
    whitelabelBenefits,
  } = category;

  const basePath = `/en/${slug}`;

  return (
    <main>
      {/* ── Hero ── */}
      <section
        style={{
          background: `linear-gradient(135deg, ${colorTheme}11 0%, ${colorLight} 50%, white 100%)`,
          padding: '5rem 0 4rem',
          borderBottom: `1px solid ${colorTheme}22`,
        }}
      >
        <div className="container">
          <div
            className="hub-hero-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '3rem',
              alignItems: 'center',
            }}
          >
            {/* Left: Text */}
            <div>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  background: `${colorTheme}14`,
                  border: `1px solid ${colorTheme}33`,
                  borderRadius: '999px',
                  padding: '0.4rem 1rem',
                  marginBottom: '1.5rem',
                }}
              >
                <span style={{ fontSize: '1.1rem' }}>{emoji}</span>
                <span
                  style={{
                    fontSize: '0.82rem',
                    fontWeight: 600,
                    color: colorTheme,
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                  }}
                >
                  Amar Herbal Origins
                </span>
              </div>

              <h1
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: 'clamp(2rem, 5vw, 3.2rem)',
                  fontWeight: 700,
                  color: '#1a1a1a',
                  lineHeight: 1.2,
                  marginBottom: '1rem',
                }}
              >
                {tagline}
              </h1>

              <p
                style={{
                  fontSize: '1.05rem',
                  color: '#4b5563',
                  lineHeight: 1.75,
                  marginBottom: '2rem',
                }}
              >
                {description}
              </p>

              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <a
                  href="https://wa.me/919408465040"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    background: colorTheme,
                    color: 'white',
                    padding: '0.85rem 2rem',
                    borderRadius: '10px',
                    textDecoration: 'none',
                    fontWeight: 700,
                    fontSize: '0.95rem',
                    transition: 'opacity 0.2s',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.88')}
                  onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
                >
                  💬 Get Quote on WhatsApp
                </a>
                <Link
                  href={`${basePath}/white-label`}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    padding: '0.85rem 2rem',
                    borderRadius: '10px',
                    textDecoration: 'none',
                    fontWeight: 600,
                    fontSize: '0.95rem',
                    border: `2px solid ${colorTheme}`,
                    color: colorTheme,
                    transition: 'all 0.2s',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = colorTheme;
                    e.currentTarget.style.color = 'white';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'transparent';
                    e.currentTarget.style.color = colorTheme;
                  }}
                >
                  White Label Services
                </Link>
              </div>
            </div>

            {/* Right: Hero Image */}
            <div
              style={{
                position: 'relative',
                borderRadius: '20px',
                overflow: 'hidden',
                height: '420px',
                boxShadow: `0 20px 60px ${colorTheme}25`,
                border: `1px solid ${colorTheme}22`,
              }}
            >
              <Image
                src={category.heroImage}
                alt={`${name} - Amar Herbal Origins`}
                fill
                style={{ objectFit: 'cover' }}
                priority
                onError={(e) => {
                  const img = e.currentTarget as HTMLImageElement;
                  img.style.display = 'none';
                }}
              />
              {/* Gradient overlay at bottom */}
              <div
                style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: '40%',
                  background: `linear-gradient(to top, ${colorTheme}88, transparent)`,
                }}
              />
              {/* Category label on image */}
              <div
                style={{
                  position: 'absolute',
                  bottom: '1.5rem',
                  left: '1.5rem',
                  color: 'white',
                  fontWeight: 700,
                  fontSize: '1.1rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                }}
              >
                <span style={{ fontSize: '1.5rem' }}>{emoji}</span>
                {name}
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* ── Products Grid ── */}
      <section style={{ padding: '5rem 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: 'clamp(1.8rem, 4vw, 2.6rem)',
                fontWeight: 700,
                color: '#1a1a1a',
                marginBottom: '0.75rem',
              }}
            >
              Our {name} Products
            </h2>
            <p style={{ color: '#6b7280', fontSize: '1rem' }}>
              Click on any product to view full specifications, MOQ, and packaging details
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
              gap: '2rem',
            }}
          >
            {products.map((product) => (
              <Link
                key={product.id}
                href={`${basePath}/${product.slug}`}
                style={{ textDecoration: 'none' }}
              >
                <div
                  style={{
                    background: 'white',
                    borderRadius: '16px',
                    overflow: 'hidden',
                    border: `1px solid ${colorTheme}1a`,
                    boxShadow: '0 2px 15px rgba(0,0,0,0.06)',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer',
                    height: '100%',
                  }}
                  onMouseEnter={(e) => {
                    const card = e.currentTarget as HTMLDivElement;
                    card.style.transform = 'translateY(-4px)';
                    card.style.boxShadow = `0 12px 40px ${colorTheme}22`;
                    card.style.borderColor = `${colorTheme}44`;
                  }}
                  onMouseLeave={(e) => {
                    const card = e.currentTarget as HTMLDivElement;
                    card.style.transform = 'translateY(0)';
                    card.style.boxShadow = '0 2px 15px rgba(0,0,0,0.06)';
                    card.style.borderColor = `${colorTheme}1a`;
                  }}
                >
                  {/* Image area */}
                  <div
                    style={{
                      height: '200px',
                      background: colorLight,
                      position: 'relative',
                      overflow: 'hidden',
                    }}
                  >
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      style={{ objectFit: 'cover' }}
                      onError={(e) => {
                        // Fallback if image not found
                        const img = e.currentTarget as HTMLImageElement;
                        img.style.display = 'none';
                      }}
                    />
                    <div
                      style={{
                        position: 'absolute',
                        inset: 0,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '4rem',
                      }}
                    >
                      {emoji}
                    </div>
                  </div>

                  {/* Card body */}
                  <div style={{ padding: '1.5rem' }}>
                    <h3
                      style={{
                        fontFamily: "'Cormorant Garamond', serif",
                        fontSize: '1.35rem',
                        fontWeight: 700,
                        color: '#1a1a1a',
                        marginBottom: '0.5rem',
                      }}
                    >
                      {product.name}
                    </h3>
                    <p
                      style={{
                        fontSize: '0.85rem',
                        color: '#6b7280',
                        fontStyle: 'italic',
                        marginBottom: '0.75rem',
                      }}
                    >
                      {product.botanicalName}
                    </p>
                    <p
                      style={{
                        fontSize: '0.9rem',
                        color: '#4b5563',
                        lineHeight: 1.6,
                        marginBottom: '1.25rem',
                      }}
                    >
                      {product.description.slice(0, 100)}…
                    </p>

                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span
                        style={{
                          fontSize: '0.8rem',
                          color: '#6b7280',
                          background: '#f3f4f6',
                          padding: '0.25rem 0.75rem',
                          borderRadius: '999px',
                        }}
                      >
                        MOQ: {product.moq.quantity}
                      </span>
                      <span style={{ color: colorTheme, fontWeight: 700, fontSize: '0.9rem' }}>
                        View Details →
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Certifications ── */}
      <section
        style={{
          background: '#fafafa',
          padding: '3rem 0',
          borderTop: '1px solid #e5e7eb',
          borderBottom: '1px solid #e5e7eb',
        }}
      >
        <div className="container" style={{ textAlign: 'center' }}>
          <p
            style={{
              fontSize: '0.78rem',
              fontWeight: 700,
              color: '#9ca3af',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              marginBottom: '1.25rem',
            }}
          >
            Certifications & Compliance
          </p>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: '0.75rem',
            }}
          >
            {certifications.map((cert) => (
              <span
                key={cert}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  background: 'white',
                  border: `1px solid ${colorTheme}33`,
                  color: colorTheme,
                  padding: '0.45rem 1rem',
                  borderRadius: '999px',
                  fontWeight: 600,
                  fontSize: '0.85rem',
                }}
              >
                ✓ {cert}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Choose Us ── */}
      <section style={{ padding: '5rem 0' }}>
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '4rem',
              alignItems: 'center',
            }}
            className="hub-why-grid"
          >
            <div>
              <h2
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: 'clamp(1.6rem, 3vw, 2.4rem)',
                  fontWeight: 700,
                  color: '#1a1a1a',
                  marginBottom: '1.25rem',
                }}
              >
                Why Source {name} from Amar Herbal Origins?
              </h2>
              <p style={{ color: '#4b5563', lineHeight: 1.75, marginBottom: '2rem' }}>
                We are a Gujarat-based exporter and manufacturer with direct farm connections,
                dedicated quality labs, and 10+ years of export experience to 30+ countries.
              </p>
              {[
                'Farm-to-export chain — no middlemen',
                'In-house quality testing lab',
                'Custom packaging & private labeling',
                'Free samples for qualified buyers',
                'Fast 7–14 day lead times',
                'Dedicated export documentation support',
              ].map((point) => (
                <div
                  key={point}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '0.75rem',
                    marginBottom: '0.85rem',
                  }}
                >
                  <span
                    style={{
                      color: colorTheme,
                      fontWeight: 700,
                      fontSize: '1rem',
                      flexShrink: 0,
                      marginTop: '1px',
                    }}
                  >
                    ✓
                  </span>
                  <span style={{ color: '#374151', fontSize: '0.95rem' }}>{point}</span>
                </div>
              ))}
            </div>

            <div
              style={{
                background: colorLight,
                borderRadius: '20px',
                padding: '2.5rem',
                border: `1px solid ${colorTheme}22`,
              }}
            >
              <h3
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: '1.5rem',
                  fontWeight: 700,
                  color: colorTheme,
                  marginBottom: '1.5rem',
                }}
              >
                Request a Free Sample
              </h3>
              <p style={{ color: '#4b5563', fontSize: '0.95rem', marginBottom: '1.5rem', lineHeight: 1.7 }}>
                Evaluate our quality before placing a bulk order. Samples available for all {name.toLowerCase()} products.
              </p>
              <a
                href="https://wa.me/919408465040"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  background: colorTheme,
                  color: 'white',
                  padding: '0.85rem 1.75rem',
                  borderRadius: '10px',
                  textDecoration: 'none',
                  fontWeight: 700,
                  fontSize: '0.95rem',
                  width: '100%',
                  justifyContent: 'center',
                }}
              >
                💬 Request Sample on WhatsApp
              </a>
              <a
                href="mailto:amarherbalorigins@gmail.com"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  color: colorTheme,
                  padding: '0.75rem 1.75rem',
                  borderRadius: '10px',
                  textDecoration: 'none',
                  fontWeight: 600,
                  fontSize: '0.9rem',
                  width: '100%',
                  justifyContent: 'center',
                  marginTop: '0.75rem',
                  border: `1.5px solid ${colorTheme}55`,
                }}
              >
                📧 Email Inquiry
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Internal links to other categories ── */}
      <section
        style={{
          background: '#1C1204',
          padding: '3rem 0',
        }}
      >
        <div className="container" style={{ textAlign: 'center' }}>
          <p
            style={{
              fontSize: '0.82rem',
              fontWeight: 600,
              color: '#9ca3af',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              marginBottom: '1.25rem',
            }}
          >
            Also Export From Amar Herbal Origins
          </p>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: '0.75rem',
            }}
          >
            {[
              { href: '/en/psyllium', label: '🌾 Psyllium Husk' },
              { href: '/en/herbs', label: '🌿 Herbs' },
              { href: '/en/spices', label: '🌶️ Spices & Seeds' },
              { href: '/en/oils', label: '🫙 Herbal Oils' },
              { href: '/en/ready-to-eat', label: '🍽️ Ready-to-Eat' },
            ]
              .filter((item) => !item.href.includes(`/${slug}`))
              .map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    padding: '0.55rem 1.25rem',
                    borderRadius: '999px',
                    textDecoration: 'none',
                    color: '#d1d5db',
                    fontSize: '0.9rem',
                    fontWeight: 500,
                    border: '1px solid rgba(255,255,255,0.1)',
                    transition: 'all 0.2s',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'rgba(255,255,255,0.08)';
                    e.currentTarget.style.color = 'white';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'transparent';
                    e.currentTarget.style.color = '#d1d5db';
                  }}
                >
                  {item.label}
                </Link>
              ))}
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .hub-why-grid {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
          .hub-hero-grid {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
        }
      `}</style>
    </main>
  );
}
