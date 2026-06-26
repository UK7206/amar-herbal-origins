// ─────────────────────────────────────────────────────────
// Psyllium Suppliers Hub page
// URL: /[locale]/psyllium/suppliers
// ─────────────────────────────────────────────────────────
import type { Metadata } from 'next';
import Link from 'next/link';
import { getCategoryBySlug } from '@/lib/category-data';
import { COUNTRIES } from '@/lib/countries-data';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: 'Indian Psyllium Husk Suppliers Worldwide | Bulk Isabgol Export | Amar Herbal Origins',
    description:
      'Leading Indian psyllium husk (Isabgol) supplier & exporter to USA, Germany, UK, UAE, Canada, and 30+ countries. Certified USDA Organic, ISO 22000, Halal, Kosher. Get B2B bulk quotes.',
    alternates: { canonical: `https://amarherbalorigins.com/${locale}/psyllium/suppliers` },
    openGraph: {
      title: 'Indian Psyllium Husk Suppliers Worldwide | Amar Herbal Origins',
      description: 'Bulk B2B supply of whole psyllium husk and powder. Exporting premium Gujarat-grown Isabgol to 30+ countries worldwide.',
      url: `https://amarherbalorigins.com/${locale}/psyllium/suppliers`,
      siteName: 'Amar Herbal Origins',
      type: 'website',
    },
  };
}

export default async function PsylliumSuppliersPage({ params }: Props) {
  const { locale } = await params;
  const category = getCategoryBySlug('psyllium')!;
  const { colorTheme, colorLight, emoji } = category;

  return (
    <main style={{ fontFamily: "'Inter', sans-serif", color: '#1a1a1a' }}>
      {/* Hero */}
      <section
        style={{
          background: `linear-gradient(135deg, ${colorTheme}15 0%, ${colorTheme}06 100%)`,
          padding: '3rem 0 2.5rem',
          borderBottom: `3px solid ${colorTheme}20`,
        }}
      >
        <div className="container">
          <nav style={{ marginBottom: '1.25rem', fontSize: '0.82rem', color: '#6b7280' }}>
            <Link href={`/${locale}`} style={{ color: '#6b7280', textDecoration: 'none' }}>Home</Link>
            <span style={{ margin: '0 0.4rem' }}>›</span>
            <Link href={`/${locale}/psyllium`} style={{ color: '#6b7280', textDecoration: 'none' }}>Psyllium</Link>
            <span style={{ margin: '0 0.4rem' }}>›</span>
            <span style={{ color: colorTheme, fontWeight: 600 }}>Suppliers</span>
          </nav>
          <h1
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
              fontWeight: 700,
              color: colorTheme,
              margin: '0 0 0.75rem',
            }}
          >
            {emoji} Indian Psyllium Husk Supplier — Global Export
          </h1>
          <p style={{ color: '#4b5563', fontSize: '1rem', maxWidth: '620px', lineHeight: 1.7 }}>
            Amar Herbal Origins exports premium grade whole psyllium husk (Isabgol), psyllium powder, and organic psyllium to buyers in 25+ countries. Select your country below for market-specific regulatory, shipping, and B2B ordering information.
          </p>
        </div>
      </section>

      {/* Country Grid */}
      <section style={{ padding: '3rem 0' }}>
        <div className="container">
          <h2
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: '1.7rem',
              fontWeight: 700,
              color: colorTheme,
              marginBottom: '1.5rem',
            }}
          >
            Select Your Destination Market
          </h2>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
              gap: '0.85rem',
            }}
          >
            {COUNTRIES.map((country) => (
              <Link
                key={country.slug}
                href={`/${locale}/psyllium/suppliers/${country.slug}`}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.6rem',
                  padding: '0.875rem 1.1rem',
                  background: colorLight,
                  borderRadius: '10px',
                  border: `1px solid ${colorTheme}20`,
                  textDecoration: 'none',
                  color: '#1a1a1a',
                  fontWeight: 600,
                  fontSize: '0.9rem',
                  transition: 'all 0.2s',
                }}
              >
                <span style={{ fontSize: '1.4rem' }}>{country.flag}</span>
                <span>{country.name}</span>
                <span style={{ marginLeft: 'auto', color: colorTheme, fontSize: '0.9rem' }}>→</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Products Quick Nav */}
      <section style={{ background: '#f9fafb', padding: '2.5rem 0' }}>
        <div className="container">
          <h2
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: '1.5rem',
              fontWeight: 700,
              color: colorTheme,
              marginBottom: '1.25rem',
            }}
          >
            Our Psyllium Products
          </h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
            {category.products.map((p) => (
              <Link
                key={p.id}
                href={`/${locale}/psyllium/products`}
                style={{
                  background: 'white',
                  border: `1.5px solid ${colorTheme}30`,
                  borderRadius: '8px',
                  padding: '0.5rem 1rem',
                  textDecoration: 'none',
                  color: colorTheme,
                  fontWeight: 600,
                  fontSize: '0.88rem',
                }}
              >
                {emoji} {p.name}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
