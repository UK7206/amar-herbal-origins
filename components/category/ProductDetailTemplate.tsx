'use client';

import Link from 'next/link';
import Image from 'next/image';
import type { Category, Product } from '@/lib/category-data';

type Props = {
  category: Category;
  product: Product;
};

export function ProductDetailTemplate({ category, product }: Props) {
  const { colorTheme, colorLight, emoji, name: categoryName, slug: categorySlug } = category;
  const {
    name,
    botanicalName,
    description,
    image,
    specifications,
    moq,
    packaging,
    applications,
    keywords,
  } = product;

  const basePath = `/en/${categorySlug}`;

  return (
    <main>
      {/* ── Breadcrumb ── */}
      <div
        style={{
          background: '#fafafa',
          borderBottom: '1px solid #e5e7eb',
          padding: '0.75rem 0',
        }}
      >
        <div
          className="container"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            fontSize: '0.83rem',
            color: '#6b7280',
          }}
        >
          <Link href="/en" style={{ color: '#6b7280', textDecoration: 'none' }}>
            Home
          </Link>
          <span>›</span>
          <Link href={basePath} style={{ color: '#6b7280', textDecoration: 'none' }}>
            {categoryName}
          </Link>
          <span>›</span>
          <span style={{ color: colorTheme, fontWeight: 600 }}>{name}</span>
        </div>
      </div>

      {/* ── Hero / Overview ── */}
      <section
        style={{
          background: `linear-gradient(135deg, ${colorTheme}0d 0%, ${colorLight} 60%, white 100%)`,
          padding: '4rem 0',
          borderBottom: `1px solid ${colorTheme}1a`,
        }}
      >
        <div className="container">
          <div
            className="product-hero-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '4rem',
              alignItems: 'center',
            }}
          >
            {/* Image */}
            <div
              style={{
                background: colorLight,
                borderRadius: '20px',
                height: '380px',
                position: 'relative',
                overflow: 'hidden',
                border: `1px solid ${colorTheme}22`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Image
                src={image}
                alt={`${name} — ${botanicalName}`}
                fill
                style={{ objectFit: 'cover', borderRadius: '20px' }}
                priority
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).style.display = 'none';
                }}
              />
              <div style={{ fontSize: '6rem', position: 'relative', zIndex: 1 }}>{emoji}</div>
            </div>

            {/* Info */}
            <div>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  background: `${colorTheme}14`,
                  border: `1px solid ${colorTheme}33`,
                  borderRadius: '999px',
                  padding: '0.35rem 0.9rem',
                  marginBottom: '1rem',
                  fontSize: '0.78rem',
                  fontWeight: 600,
                  color: colorTheme,
                  textTransform: 'uppercase' as const,
                  letterSpacing: '0.08em',
                }}
              >
                {emoji} {categoryName}
              </div>

              <h1
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
                  fontWeight: 700,
                  color: '#1a1a1a',
                  lineHeight: 1.2,
                  marginBottom: '0.5rem',
                }}
              >
                {name}
              </h1>

              <p
                style={{
                  fontSize: '0.9rem',
                  color: '#9ca3af',
                  fontStyle: 'italic',
                  marginBottom: '1rem',
                }}
              >
                {botanicalName}
              </p>

              <p
                style={{
                  fontSize: '1rem',
                  color: '#4b5563',
                  lineHeight: 1.75,
                  marginBottom: '1.5rem',
                }}
              >
                {description}
              </p>

              {/* Quick MOQ info */}
              <div
                style={{
                  background: 'white',
                  borderRadius: '12px',
                  padding: '1.25rem',
                  border: `1px solid ${colorTheme}22`,
                  marginBottom: '1.5rem',
                }}
              >
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '0.75rem',
                  }}
                >
                  {[
                    { label: 'MOQ', value: moq.quantity },
                    { label: 'Lead Time', value: moq.leadTime },
                    { label: 'Sample', value: moq.samplePolicy.split(' ').slice(0, 3).join(' ') },
                    { label: 'Payment', value: moq.paymentTerms },
                  ].map((item) => (
                    <div key={item.label}>
                      <div
                        style={{
                          fontSize: '0.72rem',
                          fontWeight: 700,
                          color: '#9ca3af',
                          textTransform: 'uppercase',
                          letterSpacing: '0.08em',
                          marginBottom: '0.2rem',
                        }}
                      >
                        {item.label}
                      </div>
                      <div style={{ fontSize: '0.9rem', fontWeight: 600, color: '#1a1a1a' }}>
                        {item.value}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                <a
                  href="https://wa.me/919408465040"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    background: colorTheme,
                    color: 'white',
                    padding: '0.8rem 1.6rem',
                    borderRadius: '10px',
                    textDecoration: 'none',
                    fontWeight: 700,
                    fontSize: '0.92rem',
                  }}
                >
                  💬 Get Quote
                </a>
                <a
                  href="mailto:amarherbalorigins@gmail.com"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    color: colorTheme,
                    padding: '0.8rem 1.6rem',
                    borderRadius: '10px',
                    textDecoration: 'none',
                    fontWeight: 600,
                    fontSize: '0.92rem',
                    border: `2px solid ${colorTheme}`,
                  }}
                >
                  📧 Email Inquiry
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Specifications ── */}
      <section style={{ padding: '4rem 0' }}>
        <div className="container">
          <div
            className="product-specs-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '3rem',
            }}
          >
            {/* Specs Table */}
            <div>
              <h2
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: '1.8rem',
                  fontWeight: 700,
                  color: '#1a1a1a',
                  marginBottom: '1.5rem',
                }}
              >
                📋 Specifications
              </h2>
              <div
                style={{
                  background: 'white',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  border: `1px solid ${colorTheme}1a`,
                  boxShadow: '0 2px 15px rgba(0,0,0,0.05)',
                }}
              >
                {specifications.map((spec, i) => (
                  <div
                    key={spec.label}
                    style={{
                      display: 'grid',
                      gridTemplateColumns: '140px 1fr',
                      borderBottom: i < specifications.length - 1 ? '1px solid #f3f4f6' : 'none',
                    }}
                  >
                    <div
                      style={{
                        padding: '0.85rem 1rem',
                        background: i % 2 === 0 ? colorLight : 'white',
                        fontSize: '0.82rem',
                        fontWeight: 700,
                        color: colorTheme,
                        borderRight: `1px solid ${colorTheme}1a`,
                      }}
                    >
                      {spec.label}
                    </div>
                    <div
                      style={{
                        padding: '0.85rem 1rem',
                        background: i % 2 === 0 ? `${colorLight}88` : 'white',
                        fontSize: '0.9rem',
                        color: '#374151',
                      }}
                    >
                      {spec.value}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              {/* MOQ & Terms */}
              <h2
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: '1.8rem',
                  fontWeight: 700,
                  color: '#1a1a1a',
                  marginBottom: '1.5rem',
                }}
              >
                📦 MOQ & Terms
              </h2>
              <div
                style={{
                  background: colorLight,
                  borderRadius: '16px',
                  padding: '1.5rem',
                  border: `1px solid ${colorTheme}22`,
                  marginBottom: '2rem',
                }}
              >
                {[
                  { label: '🔢 Minimum Order', value: moq.quantity },
                  { label: '🧪 Sample Policy', value: moq.samplePolicy },
                  { label: '⏱️ Lead Time', value: moq.leadTime },
                  { label: '💳 Payment Terms', value: moq.paymentTerms },
                ].map((item) => (
                  <div
                    key={item.label}
                    style={{
                      display: 'flex',
                      flexDirection: 'column' as const,
                      marginBottom: '1rem',
                      paddingBottom: '1rem',
                      borderBottom: '1px solid rgba(0,0,0,0.06)',
                    }}
                  >
                    <span
                      style={{
                        fontSize: '0.78rem',
                        fontWeight: 700,
                        color: colorTheme,
                        textTransform: 'uppercase' as const,
                        letterSpacing: '0.06em',
                        marginBottom: '0.25rem',
                      }}
                    >
                      {item.label}
                    </span>
                    <span style={{ fontSize: '0.95rem', color: '#1a1a1a', fontWeight: 600 }}>
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>

              {/* Packaging */}
              <h2
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: '1.8rem',
                  fontWeight: 700,
                  color: '#1a1a1a',
                  marginBottom: '1.25rem',
                }}
              >
                🎁 Packaging Options
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column' as const, gap: '0.75rem' }}>
                {packaging.map((pkg) => (
                  <div
                    key={pkg.type}
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      background: 'white',
                      borderRadius: '10px',
                      padding: '0.85rem 1.25rem',
                      border: `1px solid ${colorTheme}1a`,
                    }}
                  >
                    <span style={{ fontWeight: 600, color: '#374151', fontSize: '0.92rem' }}>
                      {pkg.type}
                    </span>
                    <span
                      style={{
                        fontSize: '0.82rem',
                        color: colorTheme,
                        fontWeight: 600,
                        background: `${colorTheme}12`,
                        padding: '0.2rem 0.6rem',
                        borderRadius: '999px',
                      }}
                    >
                      {pkg.sizes}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Applications ── */}
      <section
        style={{
          background: '#fafafa',
          padding: '4rem 0',
          borderTop: '1px solid #e5e7eb',
          borderBottom: '1px solid #e5e7eb',
        }}
      >
        <div className="container">
          <h2
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: '1.8rem',
              fontWeight: 700,
              color: '#1a1a1a',
              marginBottom: '2rem',
              textAlign: 'center',
            }}
          >
            🔬 Applications & Use Cases
          </h2>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
              gap: '1rem',
              maxWidth: '900px',
              margin: '0 auto',
            }}
          >
            {applications.map((app) => (
              <div
                key={app}
                style={{
                  background: 'white',
                  borderRadius: '12px',
                  padding: '1rem 1.25rem',
                  border: `1px solid ${colorTheme}22`,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.6rem',
                  fontSize: '0.9rem',
                  color: '#374151',
                  fontWeight: 500,
                }}
              >
                <span style={{ color: colorTheme, fontWeight: 700 }}>✓</span>
                {app}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section
        style={{
          background: colorTheme,
          padding: '4rem 0',
        }}
      >
        <div className="container" style={{ textAlign: 'center' }}>
          <h2
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 'clamp(1.6rem, 3.5vw, 2.4rem)',
              fontWeight: 700,
              color: 'white',
              marginBottom: '0.75rem',
            }}
          >
            Ready to Source {name}?
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '1rem', marginBottom: '2rem' }}>
            Contact us for pricing, samples, and export documentation.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a
              href="https://wa.me/919408465040"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                background: 'white',
                color: colorTheme,
                padding: '0.9rem 2rem',
                borderRadius: '10px',
                textDecoration: 'none',
                fontWeight: 700,
                fontSize: '0.95rem',
              }}
            >
              💬 WhatsApp Now
            </a>
            <a
              href="mailto:amarherbalorigins@gmail.com"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                background: 'transparent',
                color: 'white',
                padding: '0.9rem 2rem',
                borderRadius: '10px',
                textDecoration: 'none',
                fontWeight: 700,
                fontSize: '0.95rem',
                border: '2px solid rgba(255,255,255,0.7)',
              }}
            >
              📧 Send Email
            </a>
          </div>
          <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.85rem', marginTop: '1.5rem' }}>
            📍 Gujarat, India &nbsp;|&nbsp; 📱 +91 94084 65040 &nbsp;|&nbsp; amarherbalorigins@gmail.com
          </p>
        </div>
      </section>

      {/* ── Back to category ── */}
      <section style={{ padding: '2rem 0', background: '#fafafa' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <Link
            href={basePath}
            style={{
              color: colorTheme,
              textDecoration: 'none',
              fontWeight: 600,
              fontSize: '0.95rem',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
            }}
          >
            ← Back to All {categoryName} Products
          </Link>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .product-hero-grid, .product-specs-grid {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
        }
      `}</style>
    </main>
  );
}
