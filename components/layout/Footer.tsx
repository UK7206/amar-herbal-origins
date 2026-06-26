'use client';

import Link from 'next/link';

export function Footer() {
  return (
    <footer style={{ background: '#1C1204', color: 'white', paddingTop: '4rem', paddingBottom: '2rem' }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '3rem',
          marginBottom: '3rem',
        }}>

          {/* Brand */}
          <div>
            <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.6rem', fontWeight: 700, marginBottom: '0.75rem' }}>
              Amar Herbal <span style={{ color: '#D97706', fontStyle: 'italic' }}>Origins</span>
            </div>
            <p style={{ color: '#9ca3af', fontSize: '0.88rem', lineHeight: 1.75, marginBottom: '1.25rem' }}>
              Gujarat-based exporter &amp; manufacturer of premium herbal products — Psyllium, Herbs, Spices, Oils &amp; Ready-to-Eat. Farm-direct, lab-certified, shipped worldwide.
            </p>

            {/* Certs strip */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.25rem' }}>
              {['ISO 22000', 'FSSAI', 'USDA Organic', 'Halal', 'Kosher'].map((cert) => (
                <span key={cert} style={{
                  background: 'rgba(255,255,255,0.06)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  color: '#d1d5db',
                  fontSize: '0.68rem', padding: '0.2rem 0.55rem',
                  borderRadius: '4px', fontWeight: 500,
                }}>
                  {cert}
                </span>
              ))}
            </div>

            {/* Social icons */}
            <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
              {/* YouTube */}
              <a
                href="https://youtube.com/@amar_herbal_origins?si=2aa5l-gM9kmKs7p7"
                target="_blank" rel="noopener noreferrer"
                title="Amar Herbal Origins on YouTube"
                style={{
                  display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                  width: '38px', height: '38px', borderRadius: '8px',
                  background: 'rgba(255,0,0,0.12)', border: '1px solid rgba(255,0,0,0.25)',
                  color: '#ff4444', transition: 'all 0.2s', flexShrink: 0,
                }}
                onMouseEnter={(e) => { e.currentTarget.style.background = '#FF0000'; e.currentTarget.style.color = 'white'; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(255,0,0,0.12)'; e.currentTarget.style.color = '#ff4444'; }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              </a>
              {/* WhatsApp */}
              <a
                href="https://wa.me/919408465040"
                target="_blank" rel="noopener noreferrer"
                title="Chat on WhatsApp"
                style={{
                  display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                  width: '38px', height: '38px', borderRadius: '8px',
                  background: 'rgba(37,211,102,0.12)', border: '1px solid rgba(37,211,102,0.25)',
                  color: '#25D366', transition: 'all 0.2s', flexShrink: 0,
                }}
                onMouseEnter={(e) => { e.currentTarget.style.background = '#25D366'; e.currentTarget.style.color = 'white'; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(37,211,102,0.12)'; e.currentTarget.style.color = '#25D366'; }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              </a>
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/company/amar-herbal-origins/"
                target="_blank" rel="noopener noreferrer"
                title="Amar Herbal Origins on LinkedIn"
                style={{
                  display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                  width: '38px', height: '38px', borderRadius: '8px',
                  background: 'rgba(10,102,194,0.12)', border: '1px solid rgba(10,102,194,0.25)',
                  color: '#0a66c2', transition: 'all 0.2s', flexShrink: 0,
                }}
                onMouseEnter={(e) => { e.currentTarget.style.background = '#0a66c2'; e.currentTarget.style.color = 'white'; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(10,102,194,0.12)'; e.currentTarget.style.color = '#0a66c2'; }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
              {/* Instagram */}
              <a
                href="https://www.instagram.com/amar_herbal_origins"
                target="_blank" rel="noopener noreferrer"
                title="Amar Herbal Origins on Instagram"
                style={{
                  display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                  width: '38px', height: '38px', borderRadius: '8px',
                  background: 'rgba(225,48,108,0.12)', border: '1px solid rgba(225,48,108,0.25)',
                  color: '#e1306c', transition: 'all 0.2s', flexShrink: 0,
                }}
                onMouseEnter={(e) => { e.currentTarget.style.background = '#e1306c'; e.currentTarget.style.color = 'white'; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(225,48,108,0.12)'; e.currentTarget.style.color = '#e1306c'; }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              </a>
              {/* X / Twitter */}
              <a
                href="https://x.com/Umang__Khunt"
                target="_blank" rel="noopener noreferrer"
                title="Umang Khunt on X (Twitter)"
                style={{
                  display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                  width: '38px', height: '38px', borderRadius: '8px',
                  background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)',
                  color: '#e5e7eb', transition: 'all 0.2s', flexShrink: 0,
                }}
                onMouseEnter={(e) => { e.currentTarget.style.background = '#000'; e.currentTarget.style.color = 'white'; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.08)'; e.currentTarget.style.color = '#e5e7eb'; }}
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.254 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
            </div>
          </div>


          {/* Product Categories */}
          <div>
            <h4 style={{ fontWeight: 600, marginBottom: '1.25rem', color: '#e5e7eb', fontSize: '0.9rem' }}>
              Product Categories
            </h4>
            {[
              { href: '/en/psyllium', label: '🌾 Psyllium Husk' },
              { href: '/en/herbs', label: '🌿 Herbs' },
              { href: '/en/spices', label: '🌶️ Spices & Seeds' },
              { href: '/en/oils', label: '🫙 Herbal Oils' },
              { href: '/en/ready-to-eat', label: '🍽️ Ready-to-Eat' },
              { href: '/en/packaging', label: '📦 Packaging Info' },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                style={{ display: 'block', color: '#9ca3af', textDecoration: 'none', marginBottom: '0.75rem', fontSize: '0.88rem', transition: 'color 0.2s' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#D97706')}
                onMouseLeave={(e) => (e.currentTarget.style.color = '#9ca3af')}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Key Markets */}
          <div>
            <h4 style={{ fontWeight: 600, marginBottom: '1.25rem', color: '#e5e7eb', fontSize: '0.9rem' }}>
              Key Export Markets
            </h4>
            {[
              { href: '/en/psyllium/suppliers/usa', label: '🇺🇸 USA' },
              { href: '/en/psyllium/suppliers/germany', label: '🇩🇪 Germany' },
              { href: '/en/psyllium/suppliers/uk', label: '🇬🇧 United Kingdom' },
              { href: '/en/psyllium/suppliers/uae', label: '🇦🇪 UAE / Dubai' },
              { href: '/en/psyllium/suppliers/australia', label: '🇦🇺 Australia' },
              { href: '/en/psyllium/suppliers/canada', label: '🇨🇦 Canada' },
              { href: '/en/psyllium/suppliers', label: 'All 25 Countries →' },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                style={{ display: 'block', color: '#9ca3af', textDecoration: 'none', marginBottom: '0.75rem', fontSize: '0.88rem', transition: 'color 0.2s' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#D97706')}
                onMouseLeave={(e) => (e.currentTarget.style.color = '#9ca3af')}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ fontWeight: 600, marginBottom: '1.25rem', color: '#e5e7eb', fontSize: '0.9rem' }}>
              Contact Us
            </h4>
            <div style={{ color: '#9ca3af', fontSize: '0.88rem', lineHeight: 2 }}>
              <div>📍 SARDAR CHOK, Navi Haliyad, Amreli, Gujarat — 365440</div>
              <div>📧 amarherbalorigins@gmail.com</div>
              <div style={{ marginBottom: '1.25rem' }}>📱 +91 94084 65040</div>
            </div>
            <a
              href="https://wa.me/919408465040"
              target="_blank" rel="noopener noreferrer"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                background: '#D97706', color: 'white',
                padding: '0.65rem 1.25rem', borderRadius: '8px',
                textDecoration: 'none', fontWeight: 600, fontSize: '0.88rem',
                transition: 'opacity 0.2s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.88')}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
            >
              💬 WhatsApp Us
            </a>
            <div style={{ marginTop: '0.85rem' }}>
              <Link
                href="/en/contact"
                style={{ color: '#9ca3af', textDecoration: 'none', fontSize: '0.85rem', transition: 'color 0.2s' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#D97706')}
                onMouseLeave={(e) => (e.currentTarget.style.color = '#9ca3af')}
              >
                Send Email Inquiry →
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom bar — GST & Udyam visible for E-E-A-T */}
        <div style={{
          borderTop: '1px solid rgba(255,255,255,0.08)',
          paddingTop: '1.5rem',
        }}>
          {/* Registration strip */}
          <div style={{
            display: 'flex', flexWrap: 'wrap', gap: '0.5rem',
            marginBottom: '1rem', alignItems: 'center',
          }}>
            {[
              { label: 'GST', value: '24ICIPP6678D1Z4' },
              { label: 'Udyam', value: 'UDYAM-GJ-02-0036891' },
              { label: 'MSME', value: 'Micro Enterprise · Manufacturing' },
            ].map((item) => (
              <span key={item.label} style={{
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.08)',
                color: '#6b7280', fontSize: '0.72rem',
                padding: '0.2rem 0.6rem', borderRadius: '4px',
              }}>
                <span style={{ color: '#9ca3af', fontWeight: 600 }}>{item.label}:</span>{' '}
                <span style={{ color: '#6b7280' }}>{item.value}</span>
              </span>
            ))}
          </div>

          <div style={{
            display: 'flex', justifyContent: 'space-between',
            alignItems: 'center', flexWrap: 'wrap', gap: '1rem',
          }}>
            <p style={{ color: '#4b5563', fontSize: '0.75rem', margin: 0 }}>
              © 2026 Amar Herbal Origins (Proprietor: Khunt Umang Pareshbhai) · SARDAR CHOK, Navi Haliyad, Amreli, Gujarat 365440, India
            </p>
            <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
              <Link href="/en/about" style={{ color: '#6b7280', fontSize: '0.82rem', textDecoration: 'none' }}>About Us</Link>
              <Link href="/en/contact" style={{ color: '#6b7280', fontSize: '0.82rem', textDecoration: 'none' }}>Contact</Link>
              <Link href="/en/packaging" style={{ color: '#6b7280', fontSize: '0.82rem', textDecoration: 'none' }}>Packaging</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}