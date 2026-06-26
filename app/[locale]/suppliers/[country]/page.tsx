import { notFound } from 'next/navigation';
import Link from 'next/link';
import type { Metadata } from 'next';
import { COUNTRIES, getCountryBySlug, COUNTRY_SLUGS } from '@/lib/countries-data';
import { buildAlternates, buildCanonical } from '@/lib/seo-helpers';

type Props = {
  params: Promise<{ locale: string; country: string }>;
};

// ── Static params — pre-build all 25 countries × 7 locales ────────────────────
export async function generateStaticParams() {
  const params: { locale: string; country: string }[] = [];
  const locales = ['en', 'es', 'de', 'fr', 'ar', 'zh', 'ja'];
  for (const locale of locales) {
    for (const slug of COUNTRY_SLUGS) {
      params.push({ locale, country: slug });
    }
  }
  return params;
}

// ── SEO Metadata per country ──────────────────────────────────────────────────
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, country: slug } = await params;
  const data = getCountryBySlug(slug);
  if (!data) return {};

  const canonical = buildCanonical(locale, `/suppliers/${slug}`);
  const title = `Psyllium Husk & Indian Herbal Products Supplier in ${data.name} | Amar Herbal Origins`;
  const description = `Trusted B2B exporter supplying Psyllium Husk, Indian Spices, Herbs & Cold-Pressed Oils to ${data.name}. ISO certified, farm-direct from Gujarat, India. MOQ 1 MT. Request a free quote.`;

  return {
    title,
    description,
    keywords: data.primaryKeywords,
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: 'Amar Herbal Origins',
      type: 'website',
    },
    alternates: {
      canonical,
      languages: buildAlternates(`/suppliers/${slug}`),
    },
  };
}

// ── Page ──────────────────────────────────────────────────────────────────────
export default async function CountryPage({ params }: Props) {
  const { locale, country: slug } = await params;
  const data = getCountryBySlug(slug);
  if (!data) notFound();

  // JSON-LD: FAQPage + BreadcrumbList + Product schema
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: data.faqs.map(f => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `https://amarherbalorigins.com/${locale}` },
      { '@type': 'ListItem', position: 2, name: 'Suppliers by Country', item: `https://amarherbalorigins.com/${locale}/suppliers` },
      { '@type': 'ListItem', position: 3, name: `${data.name}`, item: `https://amarherbalorigins.com/${locale}/suppliers/${slug}` },
    ],
  };

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* ── Hero Section ── */}
      <section style={{
        background: 'linear-gradient(135deg, #1C1204 0%, #2d1f08 60%, #3d2a0a 100%)',
        padding: '5rem 0 4rem',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', top: '-100px', right: '-100px',
          width: '500px', height: '500px',
          background: 'radial-gradient(circle, rgba(217,119,6,0.12) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          {/* Breadcrumb */}
          <div style={{ marginBottom: '1.5rem' }}>
            <Link href={`/${locale}`} style={{ color: '#9ca3af', fontSize: '0.85rem', textDecoration: 'none' }}>Home</Link>
            <span style={{ color: '#6b7280', margin: '0 0.5rem', fontSize: '0.85rem' }}>›</span>
            <Link href={`/${locale}/suppliers`} style={{ color: '#9ca3af', fontSize: '0.85rem', textDecoration: 'none' }}>Countries</Link>
            <span style={{ color: '#6b7280', margin: '0 0.5rem', fontSize: '0.85rem' }}>›</span>
            <span style={{ color: '#D97706', fontSize: '0.85rem' }}>{data.name}</span>
          </div>

          {/* Country badge */}
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
            background: 'rgba(217,119,6,0.15)', border: '1px solid rgba(217,119,6,0.35)',
            color: '#D97706', padding: '0.35rem 1rem', borderRadius: '50px',
            fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.1em',
            textTransform: 'uppercase', marginBottom: '1.5rem',
          }}>
            <span style={{ fontSize: '1.2rem' }}>{data.flag}</span>
            {data.region} · B2B Export
          </div>

          <h1 style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 'clamp(2rem, 4.5vw, 3.4rem)',
            fontWeight: 700, color: 'white', lineHeight: 1.15,
            marginBottom: '1.25rem', maxWidth: '820px',
          }}>
            Psyllium Husk Supplier in{' '}
            <em style={{ color: '#D97706', fontStyle: 'italic' }}>{data.name}</em>
          </h1>

          <p style={{
            color: '#b8a98a', fontSize: '1.05rem', maxWidth: '640px',
            lineHeight: 1.75, marginBottom: '2.5rem',
          }}>
            {data.marketIntro}
          </p>

          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <Link href={`/${locale}/contact`} style={{
              background: '#D97706', color: 'white', padding: '0.9rem 2.25rem',
              borderRadius: '50px', fontWeight: 700, textDecoration: 'none',
              fontSize: '0.95rem', display: 'inline-block',
            }}>
              Request a Quote →
            </Link>
            <Link href={`/${locale}/product`} style={{
              background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.2)',
              color: 'white', padding: '0.9rem 2.25rem', borderRadius: '50px',
              fontWeight: 700, textDecoration: 'none', fontSize: '0.95rem', display: 'inline-block',
            }}>
              View Products
            </Link>
          </div>
        </div>
      </section>

      {/* ── Why Import from India Section ── */}
      <section style={{ background: 'white', padding: '5rem 0' }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '3.5rem', alignItems: 'start',
          }}>
            {/* Text */}
            <div>
              <div className="section-label" style={{ marginBottom: '0.75rem' }}>WHY SOURCE FROM INDIA</div>
              <h2 className="section-heading" style={{ marginBottom: '1.5rem' }}>
                Why {data.name} Buyers Import{' '}
                <em style={{ color: '#D97706' }}>Psyllium from India</em>
              </h2>
              <p style={{ color: '#6b7280', lineHeight: 1.8, fontSize: '1rem', marginBottom: '1.5rem' }}>
                {data.importReason}
              </p>
              <p style={{ color: '#6b7280', lineHeight: 1.8, fontSize: '1rem', marginBottom: '2rem' }}>
                Amar Herbal Origins is a Gujarat-based psyllium husk exporter with 5+ years of international trade experience. We supply directly from farms in Gujarat and Rajasthan — cutting out intermediaries to deliver the best price and quality to {data.name} buyers.
              </p>

              {/* Certifications required in this country */}
              <div style={{
                background: '#FAF8F4', border: '1px solid #E5E0D8',
                borderLeft: '4px solid #D97706', borderRadius: '8px', padding: '1.5rem',
              }}>
                <div style={{ fontWeight: 700, color: '#1C1204', marginBottom: '1rem', fontSize: '0.9rem', letterSpacing: '0.05em' }}>
                  KEY CERTIFICATIONS FOR {data.name.toUpperCase()} MARKET
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  {data.certifications.map(cert => (
                    <div key={cert} style={{ display: 'flex', alignItems: 'center', gap: '0.625rem', color: '#374151', fontSize: '0.9rem' }}>
                      <span style={{ color: '#D97706', fontWeight: 700, flexShrink: 0 }}>✓</span>
                      {cert}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Stats + Buyer Segments card */}
            <div>
              {/* Buyer segments */}
              <div style={{
                background: '#1C1204', borderRadius: '20px', padding: '2rem', marginBottom: '1.5rem',
              }}>
                <h3 style={{
                  fontFamily: "'Cormorant Garamond', serif", fontSize: '1.4rem',
                  color: 'white', marginBottom: '1.25rem', fontWeight: 700,
                }}>
                  Who Buys in {data.name}?
                </h3>
                {data.buyerSegments.map((seg, i) => (
                  <div key={seg} style={{
                    display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                    padding: '0.7rem 0',
                    borderBottom: i < data.buyerSegments.length - 1 ? '1px solid rgba(255,255,255,0.07)' : 'none',
                  }}>
                    <span style={{ color: '#e5d6b8', fontSize: '0.88rem' }}>{seg}</span>
                    <span style={{ color: '#D97706', fontSize: '0.75rem', fontWeight: 700 }}>BUYER</span>
                  </div>
                ))}
              </div>

              {/* Stats row */}
              <div style={{
                display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '1px', background: '#E5E0D8', borderRadius: '12px', overflow: 'hidden',
              }}>
                {[
                  { val: '1 MT', label: 'Min. Order' },
                  { val: '7–14d', label: 'Lead Time' },
                  { val: '30+', label: 'Countries' },
                ].map(s => (
                  <div key={s.label} style={{ background: '#FAF8F4', padding: '1.25rem', textAlign: 'center' }}>
                    <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.6rem', fontWeight: 800, color: '#D97706', lineHeight: 1 }}>{s.val}</div>
                    <div style={{ color: '#6b7280', fontSize: '0.75rem', marginTop: '0.25rem' }}>{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Product Range Section ── */}
      <section style={{ background: '#FAF8F4', padding: '5rem 0', borderTop: '1px solid #E5E0D8' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div className="section-label" style={{ marginBottom: '0.75rem' }}>WHAT WE SUPPLY</div>
            <h2 className="section-heading">
              Products We Export to{' '}
              <em style={{ color: '#D97706' }}>{data.name}</em>
            </h2>
          </div>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '1.25rem',
          }}>
            {[
              { name: 'Psyllium Husk Powder', spec: '40–100 Mesh · 98–99% Purity', desc: 'Ultra-fine powder for capsule filling, tablet manufacturing, functional food formulation.' },
              { name: 'Whole Psyllium Husk', spec: '99% Purity · High Swell Volume', desc: 'Premium blonde psyllium husk for health supplements, laxative preparations, and fiber products.' },
              { name: 'Organic Psyllium Husk', spec: 'USDA/EU Organic Certified', desc: 'Grown without synthetic pesticides. Certified for organic supplement and food manufacturing.' },
              { name: 'Psyllium Seeds', spec: 'Sorted & Cleaned · Non-GMO', desc: 'High-quality psyllium seeds for extraction, fermentation, and specialty applications.' },
            ].map(p => (
              <div key={p.name} style={{
                background: 'white', border: '1px solid #E5E0D8',
                borderRadius: '14px', padding: '1.75rem',
                transition: 'all 0.25s',
              }}>
                <div style={{
                  display: 'inline-block', background: 'rgba(217,119,6,0.1)',
                  color: '#D97706', padding: '0.3rem 0.75rem', borderRadius: '50px',
                  fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.08em',
                  marginBottom: '0.875rem',
                }}>
                  {p.spec}
                </div>
                <h3 style={{ fontWeight: 700, fontSize: '1.05rem', color: '#1C1204', marginBottom: '0.5rem' }}>
                  {p.name}
                </h3>
                <p style={{ color: '#6b7280', fontSize: '0.88rem', lineHeight: 1.6 }}>{p.desc}</p>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
            <Link href={`/${locale}/product`} style={{
              background: '#1C1204', color: 'white', padding: '0.9rem 2.25rem',
              borderRadius: '50px', fontWeight: 700, textDecoration: 'none', fontSize: '0.95rem',
              display: 'inline-block',
            }}>
              View Full Product Catalogue →
            </Link>
          </div>
        </div>
      </section>

      {/* ── Shipping & Logistics ── */}
      <section style={{ background: 'white', padding: '5rem 0', borderTop: '1px solid #E5E0D8' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '3rem', alignItems: 'center' }}>
            <div>
              <div className="section-label" style={{ marginBottom: '0.75rem' }}>SHIPPING & LOGISTICS</div>
              <h2 className="section-heading" style={{ marginBottom: '1.5rem' }}>
                Export to{' '}
                <em style={{ color: '#D97706' }}>{data.name}</em>
              </h2>
              <p style={{ color: '#6b7280', lineHeight: 1.8, fontSize: '1rem', marginBottom: '1.5rem' }}>
                {data.logistics}
              </p>
              <div style={{
                background: '#FAF8F4', border: '1px solid #E5E0D8',
                borderLeft: '4px solid #D97706', borderRadius: '8px', padding: '1.25rem 1.5rem',
              }}>
                <div style={{ fontWeight: 700, fontSize: '0.85rem', color: '#1C1204', marginBottom: '0.5rem' }}>
                  REGULATORY NOTE
                </div>
                <p style={{ color: '#4b5563', fontSize: '0.88rem', lineHeight: 1.6, margin: 0 }}>
                  {data.regulatoryNote}
                </p>
              </div>
            </div>
            <div style={{
              display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem',
            }}>
              {[
                { icon: '📦', title: 'Packaging Options', desc: '25 kg PP bags, HDPE drums, custom private label consumer packaging' },
                { icon: '🚢', title: 'Incoterms', desc: 'FOB, CIF, CFR — from Mundra or Nhava Sheva port' },
                { icon: '📋', title: 'Documentation', desc: 'COA, phytosanitary cert, COO, commercial invoice, packing list' },
                { icon: '⚡', title: 'Lead Time', desc: '7–14 days production + sea freight transit time' },
              ].map(item => (
                <div key={item.title} style={{
                  background: '#FAF8F4', border: '1px solid #E5E0D8',
                  borderRadius: '12px', padding: '1.25rem',
                }}>
                  <div style={{ fontSize: '1.75rem', marginBottom: '0.5rem' }}>{item.icon}</div>
                  <div style={{ fontWeight: 700, fontSize: '0.88rem', color: '#1C1204', marginBottom: '0.35rem' }}>{item.title}</div>
                  <div style={{ color: '#6b7280', fontSize: '0.8rem', lineHeight: 1.5 }}>{item.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ Section ── */}
      <section style={{ background: '#FAF8F4', padding: '5rem 0', borderTop: '1px solid #E5E0D8' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div className="section-label" style={{ marginBottom: '0.75rem' }}>FAQ</div>
            <h2 className="section-heading">
              {data.name} Buyer{' '}
              <em style={{ color: '#D97706' }}>Questions</em>
            </h2>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {data.faqs.map(faq => (
              <div key={faq.q} style={{
                background: 'white', borderRadius: '14px', padding: '1.75rem',
                border: '1px solid #E5E0D8',
              }}>
                <h3 style={{
                  fontFamily: "'Cormorant Garamond', serif", fontSize: '1.2rem',
                  fontWeight: 700, color: '#1C1204', marginBottom: '0.75rem',
                }}>
                  {faq.q}
                </h3>
                <p style={{ color: '#4b5563', lineHeight: 1.7, fontSize: '0.95rem' }}>{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Other Countries Internal Links ── */}
      <section style={{ background: 'white', padding: '4rem 0', borderTop: '1px solid #E5E0D8' }}>
        <div className="container">
          <div className="section-label" style={{ marginBottom: '0.75rem' }}>EXPLORE MORE</div>
          <h2 className="section-heading" style={{ marginBottom: '2rem' }}>
            Other <em style={{ color: '#D97706' }}>Markets We Serve</em>
          </h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.625rem' }}>
            {COUNTRIES.filter(c => c.slug !== slug).slice(0, 12).map(c => (
              <Link
                key={c.slug}
                href={`/${locale}/suppliers/${c.slug}`}
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
                  background: '#FAF8F4', border: '1px solid #E5E0D8',
                  color: '#374151', padding: '0.5rem 1rem', borderRadius: '50px',
                  fontSize: '0.85rem', textDecoration: 'none', fontWeight: 500,
                  transition: 'all 0.2s',
                }}
              >
                <span>{c.flag}</span>
                {c.name}
              </Link>
            ))}
            <Link
              href={`/${locale}/suppliers`}
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
                background: '#1C1204', border: '1px solid #1C1204',
                color: 'white', padding: '0.5rem 1rem', borderRadius: '50px',
                fontSize: '0.85rem', textDecoration: 'none', fontWeight: 600,
              }}
            >
              View All 25 Countries →
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{
        background: 'linear-gradient(135deg, #1C1204 0%, #2d1f08 100%)',
        padding: '5rem 0', textAlign: 'center',
      }}>
        <div className="container">
          <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>{data.flag}</div>
          <h2 style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 'clamp(1.8rem, 4vw, 3rem)',
            fontWeight: 700, color: 'white', marginBottom: '1rem',
          }}>
            Ready to Supply {data.name}?
          </h2>
          <p style={{
            color: '#b8a98a', fontSize: '1.05rem', maxWidth: '480px',
            margin: '0 auto 2.5rem', lineHeight: 1.7,
          }}>
            Get pricing, samples, and COA for {data.name} imports within 24 hours. No commitment required.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href={`/${locale}/contact`} style={{
              background: '#D97706', color: 'white', padding: '1rem 2.5rem',
              borderRadius: '50px', fontWeight: 700, textDecoration: 'none', fontSize: '1rem',
              display: 'inline-block',
            }}>
              Get a Free Quote →
            </Link>
            <Link href={`/${locale}/quality`} style={{
              background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.2)',
              color: 'white', padding: '1rem 2.5rem', borderRadius: '50px',
              fontWeight: 700, textDecoration: 'none', fontSize: '1rem', display: 'inline-block',
            }}>
              View Certifications
            </Link>
            <Link href={`/${locale}/exporter`} style={{
              background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.15)',
              color: '#b8a98a', padding: '1rem 2.5rem', borderRadius: '50px',
              fontWeight: 600, textDecoration: 'none', fontSize: '0.9rem', display: 'inline-block',
            }}>
              Export Guide →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
