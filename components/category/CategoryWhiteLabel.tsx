import Link from 'next/link';
import type { Category } from '@/lib/category-data';

type Props = {
  category: Category;
};

export function CategoryWhiteLabel({ category }: Props) {
  const { name, slug, tagline, colorTheme, colorLight, emoji, whitelabelBenefits, certifications } =
    category;

  const basePath = `/en/${slug}`;

  return (
    <main>
      {/* ── Hero ── */}
      <section
        style={{
          background: `linear-gradient(135deg, ${colorTheme}11 0%, ${colorLight} 60%, white 100%)`,
          padding: '5rem 0 4rem',
          borderBottom: `1px solid ${colorTheme}22`,
        }}
      >
        <div className="container">
          <div style={{ maxWidth: '700px' }}>
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
                fontSize: '0.78rem',
                fontWeight: 600,
                color: colorTheme,
                textTransform: 'uppercase' as const,
                letterSpacing: '0.08em',
              }}
            >
              {emoji} White Label Services
            </div>

            <h1
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: 'clamp(2rem, 5vw, 3rem)',
                fontWeight: 700,
                color: '#1a1a1a',
                lineHeight: 1.2,
                marginBottom: '1rem',
              }}
            >
              {name} White Label & Private Label Services
            </h1>

            <p
              style={{
                fontSize: '1.05rem',
                color: '#4b5563',
                lineHeight: 1.75,
                marginBottom: '2rem',
              }}
            >
              Build your own brand with our premium {name.toLowerCase()} products. We manufacture,
              you brand. Custom packaging, low MOQ, worldwide shipping from Gujarat, India.
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
                }}
              >
                💬 Start Your Brand Today
              </a>
              <a
                href="mailto:amarherbalorigins@gmail.com"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  color: colorTheme,
                  padding: '0.85rem 2rem',
                  borderRadius: '10px',
                  textDecoration: 'none',
                  fontWeight: 600,
                  fontSize: '0.95rem',
                  border: `2px solid ${colorTheme}`,
                }}
              >
                📧 Email Inquiry
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── How it works ── */}
      <section style={{ padding: '5rem 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: 'clamp(1.8rem, 4vw, 2.5rem)',
                fontWeight: 700,
                color: '#1a1a1a',
                marginBottom: '0.75rem',
              }}
            >
              How Our White Label Process Works
            </h2>
            <p style={{ color: '#6b7280', fontSize: '1rem' }}>
              Simple, transparent, and fast — from inquiry to delivery
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '1.5rem',
            }}
          >
            {[
              {
                step: '01',
                title: 'Send Inquiry',
                desc: 'WhatsApp or email us with your product, quantity, and branding requirements.',
              },
              {
                step: '02',
                title: 'Get Quote',
                desc: 'We send you a detailed price quote with MOQ, lead time, and packaging options.',
              },
              {
                step: '03',
                title: 'Approve Sample',
                desc: 'We send product samples for quality evaluation before full production.',
              },
              {
                step: '04',
                title: 'Design Label',
                desc: 'Share your artwork or we help design. We print and apply your brand label.',
              },
              {
                step: '05',
                title: 'Production',
                desc: 'Manufacturing, quality testing, and packing in your branded packaging.',
              },
              {
                step: '06',
                title: 'Ship Worldwide',
                desc: 'We handle export documentation and ship to your destination country.',
              },
            ].map((item) => (
              <div
                key={item.step}
                style={{
                  background: 'white',
                  borderRadius: '16px',
                  padding: '1.75rem 1.5rem',
                  border: `1px solid ${colorTheme}1a`,
                  boxShadow: '0 2px 15px rgba(0,0,0,0.05)',
                  position: 'relative',
                }}
              >
                <div
                  style={{
                    fontSize: '2rem',
                    fontFamily: "'Cormorant Garamond', serif",
                    fontWeight: 700,
                    color: `${colorTheme}33`,
                    marginBottom: '0.75rem',
                    lineHeight: 1,
                  }}
                >
                  {item.step}
                </div>
                <h3
                  style={{
                    fontSize: '1rem',
                    fontWeight: 700,
                    color: '#1a1a1a',
                    marginBottom: '0.5rem',
                  }}
                >
                  {item.title}
                </h3>
                <p style={{ fontSize: '0.88rem', color: '#6b7280', lineHeight: 1.6 }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Benefits ── */}
      <section
        style={{
          background: colorLight,
          padding: '5rem 0',
          borderTop: `1px solid ${colorTheme}22`,
          borderBottom: `1px solid ${colorTheme}22`,
        }}
      >
        <div className="container">
          <div
            className="wl-benefits-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '4rem',
              alignItems: 'center',
            }}
          >
            <div>
              <h2
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: 'clamp(1.6rem, 3.5vw, 2.4rem)',
                  fontWeight: 700,
                  color: '#1a1a1a',
                  marginBottom: '1.5rem',
                }}
              >
                What's Included in Our White Label Service
              </h2>
              {whitelabelBenefits.map((benefit) => (
                <div
                  key={benefit}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '0.75rem',
                    marginBottom: '1rem',
                  }}
                >
                  <div
                    style={{
                      width: '22px',
                      height: '22px',
                      borderRadius: '50%',
                      background: colorTheme,
                      color: 'white',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '0.7rem',
                      fontWeight: 700,
                      flexShrink: 0,
                      marginTop: '1px',
                    }}
                  >
                    ✓
                  </div>
                  <span style={{ color: '#374151', fontSize: '0.95rem' }}>{benefit}</span>
                </div>
              ))}
            </div>

            <div>
              {/* Inquiry form / contact card */}
              <div
                style={{
                  background: 'white',
                  borderRadius: '20px',
                  padding: '2.5rem',
                  border: `1px solid ${colorTheme}22`,
                  boxShadow: `0 8px 30px ${colorTheme}11`,
                }}
              >
                <h3
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: '1.6rem',
                    fontWeight: 700,
                    color: '#1a1a1a',
                    marginBottom: '0.5rem',
                  }}
                >
                  Start Your {name} Brand
                </h3>
                <p style={{ color: '#6b7280', fontSize: '0.9rem', marginBottom: '1.5rem' }}>
                  Contact us now — our team responds within 24 hours.
                </p>

                {[
                  {
                    icon: '💬',
                    label: 'WhatsApp (Fastest)',
                    value: '+91 94084 65040',
                    href: 'https://wa.me/919408465040',
                  },
                  {
                    icon: '📧',
                    label: 'Email',
                    value: 'amarherbalorigins@gmail.com',
                    href: 'mailto:amarherbalorigins@gmail.com',
                  },
                  {
                    icon: '📍',
                    label: 'Location',
                    value: 'Gujarat, India',
                    href: null,
                  },
                ].map((contact) => (
                  <div
                    key={contact.label}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '1rem',
                      marginBottom: '1.25rem',
                      paddingBottom: '1.25rem',
                      borderBottom: '1px solid #f3f4f6',
                    }}
                  >
                    <span style={{ fontSize: '1.4rem', flexShrink: 0 }}>{contact.icon}</span>
                    <div>
                      <div
                        style={{
                          fontSize: '0.75rem',
                          fontWeight: 700,
                          color: '#9ca3af',
                          textTransform: 'uppercase' as const,
                          letterSpacing: '0.08em',
                          marginBottom: '0.2rem',
                        }}
                      >
                        {contact.label}
                      </div>
                      {contact.href ? (
                        <a
                          href={contact.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{
                            color: colorTheme,
                            textDecoration: 'none',
                            fontWeight: 600,
                            fontSize: '0.95rem',
                          }}
                        >
                          {contact.value}
                        </a>
                      ) : (
                        <span style={{ color: '#374151', fontWeight: 600, fontSize: '0.95rem' }}>
                          {contact.value}
                        </span>
                      )}
                    </div>
                  </div>
                ))}

                <a
                  href="https://wa.me/919408465040"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.5rem',
                    background: colorTheme,
                    color: 'white',
                    padding: '0.9rem 1.5rem',
                    borderRadius: '10px',
                    textDecoration: 'none',
                    fontWeight: 700,
                    fontSize: '0.95rem',
                    width: '100%',
                  }}
                >
                  💬 Chat on WhatsApp →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Certifications ── */}
      <section style={{ padding: '3rem 0' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <p
            style={{
              fontSize: '0.78rem',
              fontWeight: 700,
              color: '#9ca3af',
              textTransform: 'uppercase' as const,
              letterSpacing: '0.1em',
              marginBottom: '1.25rem',
            }}
          >
            All Products Are Certified
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
                  background: `${colorTheme}0d`,
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

      {/* ── Internal navigation ── */}
      <section
        style={{ background: '#f9fafb', padding: '2rem 0', borderTop: '1px solid #e5e7eb' }}
      >
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
            ← View All {name} Products
          </Link>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .wl-benefits-grid {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
        }
      `}</style>
    </main>
  );
}
