import type { Metadata } from 'next';
import Link from 'next/link';
import { getCategoryBySlug } from '@/lib/category-data';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: 'Psyllium Husk Products | All Grades & Variants | Amar Herbal Origins',
    description: 'Complete range of psyllium husk products — 99%, 98%, 95%, organic, husk powder, psyllium seeds. FSSAI, ISO 22000, Halal, Kosher certified. Bulk B2B export.',
    alternates: { canonical: `https://amarherbalorigins.com/${locale}/psyllium/products` },
  };
}

export default async function PsylliumProductsPage({ params }: Props) {
  const { locale } = await params;
  const category = getCategoryBySlug('psyllium')!;
  const { colorTheme, colorLight } = category;

  const products = [
    {
      name: 'Psyllium Husk 99%',
      slug: 'psyllium-husk',
      icon: '⭐',
      desc: 'Premium pharmaceutical-grade psyllium husk with 99% purity. USP/BP compliant. Ideal for nutraceutical and pharmaceutical applications.',
      uses: ['Fiber supplements', 'Pharmaceutical laxatives', 'Health food products'],
      moq: '1 MT',
    },
    {
      name: 'Psyllium Husk 98%',
      slug: 'psyllium-husk',
      icon: '🌾',
      desc: 'Standard export grade psyllium husk. 98% purity, excellent swelling factor (40+ mL/g). Most commonly exported grade worldwide.',
      uses: ['Dietary supplements', 'Food ingredients', 'Animal feed'],
      moq: '1 MT',
    },
    {
      name: 'Psyllium Husk Powder',
      slug: 'psyllium-husk-powder',
      icon: '🌀',
      desc: 'Finely ground psyllium husk powder in 40–100 mesh sizes. Perfect for formulations, protein bars, and functional food manufacturing.',
      uses: ['Protein bars', 'Gluten-free baking', 'Drink mixes', 'Capsule filling'],
      moq: '500 kg',
    },
    {
      name: 'Organic Psyllium Husk',
      slug: 'psyllium-husk',
      icon: '🌿',
      desc: 'USDA NOP and EU Organic certified psyllium husk. Farm-traceable from certified organic farms in Sidhpur, Gujarat.',
      uses: ['Organic supplements', 'Natural food brands', 'EU/US organic market'],
      moq: '500 kg',
    },
    {
      name: 'Psyllium Seeds',
      slug: 'psyllium-husk',
      icon: '🫘',
      desc: 'Whole cleaned psyllium seeds (Plantago ovata). Used for in-country husk processing or direct sale as natural fiber seeds.',
      uses: ['In-country processing', 'Direct seed supplement', 'Traditional medicine'],
      moq: '1 MT',
    },
  ];

  return (
    <main style={{ fontFamily: "'Inter', sans-serif", color: '#1a1a1a' }}>
      <section style={{ background: `linear-gradient(135deg, ${colorTheme}15, ${colorTheme}05)`, padding: '3.5rem 0 2.5rem', borderBottom: `3px solid ${colorTheme}20` }}>
        <div className="container">
          <nav style={{ fontSize: '0.82rem', color: '#6b7280', marginBottom: '1.25rem' }}>
            <Link href={`/${locale}`} style={{ color: '#6b7280', textDecoration: 'none' }}>Home</Link>
            <span style={{ margin: '0 0.4rem' }}>›</span>
            <Link href={`/${locale}/psyllium`} style={{ color: '#6b7280', textDecoration: 'none' }}>Psyllium</Link>
            <span style={{ margin: '0 0.4rem' }}>›</span>
            <span style={{ color: colorTheme, fontWeight: 600 }}>All Products</span>
          </nav>
          <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700, color: colorTheme, marginBottom: '1rem' }}>
            🌾 Psyllium Husk — Complete Product Range
          </h1>
          <p style={{ color: '#4b5563', fontSize: '1.05rem', maxWidth: '620px', lineHeight: 1.75 }}>
            From pharmaceutical-grade 99% husk to USDA organic certified grades and fine husk powder — we supply the complete psyllium range to buyers in 30+ countries.
          </p>
        </div>
      </section>

      <section style={{ padding: '3rem 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.5rem' }}>
            {products.map(product => (
              <div key={product.name} style={{ background: 'white', borderRadius: '14px', border: `1.5px solid ${colorTheme}22`, overflow: 'hidden', boxShadow: '0 2px 12px rgba(0,0,0,0.04)' }}>
                <div style={{ background: colorLight, padding: '1.5rem 1.5rem 1rem' }}>
                  <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>{product.icon}</div>
                  <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.25rem', fontWeight: 700, color: colorTheme, marginBottom: '0.5rem' }}>{product.name}</h2>
                  <p style={{ color: '#4b5563', fontSize: '0.88rem', lineHeight: 1.65 }}>{product.desc}</p>
                </div>
                <div style={{ padding: '1rem 1.5rem 1.5rem' }}>
                  <div style={{ marginBottom: '0.75rem' }}>
                    <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#9ca3af', textTransform: 'uppercase', letterSpacing: '0.06em' }}>Common Uses</span>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem', marginTop: '0.4rem' }}>
                      {product.uses.map(use => (
                        <span key={use} style={{ background: '#f3f4f6', color: '#374151', borderRadius: '6px', padding: '0.2rem 0.6rem', fontSize: '0.78rem', fontWeight: 500 }}>{use}</span>
                      ))}
                    </div>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <span style={{ fontSize: '0.82rem', color: '#6b7280' }}>MOQ: <strong style={{ color: colorTheme }}>{product.moq}</strong></span>
                    <Link href={`/${locale}/psyllium/contact`} style={{ background: colorTheme, color: 'white', padding: '0.45rem 1rem', borderRadius: '8px', textDecoration: 'none', fontWeight: 600, fontSize: '0.82rem' }}>Get Quote →</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: colorTheme, padding: '2.5rem 0', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.8rem', fontWeight: 700, color: 'white', marginBottom: '0.75rem' }}>Need a Custom Grade or Blend?</h2>
          <p style={{ color: 'rgba(255,255,255,0.85)', marginBottom: '1.5rem' }}>We accommodate custom particle sizes, moisture levels, and packaging. Contact us for custom specifications.</p>
          <a href="https://wa.me/919408465040" target="_blank" rel="noopener noreferrer" style={{ background: 'white', color: colorTheme, padding: '0.875rem 2rem', borderRadius: '10px', textDecoration: 'none', fontWeight: 700 }}>💬 Discuss Custom Requirements</a>
        </div>
      </section>
    </main>
  );
}
