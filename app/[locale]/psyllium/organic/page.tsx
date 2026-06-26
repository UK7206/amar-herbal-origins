import type { Metadata } from 'next';
import Link from 'next/link';
import { getCategoryBySlug } from '@/lib/category-data';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: 'Organic Psyllium Husk Supplier | USDA & EU Organic Certified | Amar Herbal Origins',
    description: 'Certified organic psyllium husk supplier from Gujarat, India. USDA NOP and EU Organic certified. 99% purity, farm-traceable, bulk B2B export worldwide.',
    alternates: { canonical: `https://amarherbalorigins.com/${locale}/psyllium/organic` },
  };
}

export default async function PsylliumOrganicPage({ params }: Props) {
  const { locale } = await params;
  const category = getCategoryBySlug('psyllium')!;
  const { colorTheme, colorLight } = category;

  return (
    <main style={{ fontFamily: "'Inter', sans-serif", color: '#1a1a1a' }}>
      <section style={{ background: `linear-gradient(135deg, #14532d15, #14532d05)`, padding: '3.5rem 0 2.5rem', borderBottom: `3px solid ${colorTheme}20` }}>
        <div className="container">
          <nav style={{ fontSize: '0.82rem', color: '#6b7280', marginBottom: '1.25rem' }}>
            <Link href={`/${locale}`} style={{ color: '#6b7280', textDecoration: 'none' }}>Home</Link>
            <span style={{ margin: '0 0.4rem' }}>›</span>
            <Link href={`/${locale}/psyllium`} style={{ color: '#6b7280', textDecoration: 'none' }}>Psyllium</Link>
            <span style={{ margin: '0 0.4rem' }}>›</span>
            <span style={{ color: '#16a34a', fontWeight: 600 }}>Organic</span>
          </nav>
          <div style={{ display: 'inline-block', background: '#dcfce7', border: '1px solid #86efac', color: '#15803d', padding: '0.3rem 1rem', borderRadius: '50px', fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.08em', marginBottom: '1rem' }}>
            🌿 USDA ORGANIC | EU ORGANIC CERTIFIED
          </div>
          <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700, color: colorTheme, marginBottom: '1rem' }}>
            🌾 Organic Psyllium Husk Supplier
          </h1>
          <p style={{ color: '#4b5563', fontSize: '1.05rem', maxWidth: '660px', lineHeight: 1.75, marginBottom: '2rem' }}>
            Farm-traceable organic psyllium husk from contracted organic farms in Sidhpur, Gujarat. USDA NOP and EU Organic certified. Dedicated organic processing line — no cross-contamination. Bulk B2B supply to 30+ countries.
          </p>
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
            <a href="https://wa.me/919408465040" target="_blank" rel="noopener noreferrer" style={{ background: colorTheme, color: 'white', padding: '0.75rem 1.75rem', borderRadius: '10px', textDecoration: 'none', fontWeight: 700 }}>💬 Request Organic Sample</a>
            <Link href={`/${locale}/psyllium/contact`} style={{ background: 'white', color: colorTheme, border: `2px solid ${colorTheme}`, padding: '0.75rem 1.75rem', borderRadius: '10px', textDecoration: 'none', fontWeight: 700 }}>📧 Get Pricing</Link>
          </div>
        </div>
      </section>

      <section style={{ padding: '3rem 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
            {[
              { icon: '🌿', title: 'USDA NOP Certified', desc: 'Our organic psyllium husk meets USDA National Organic Program standards — certificate available for all shipments.' },
              { icon: '🇪🇺', title: 'EU Organic Certified', desc: 'EU Organic certification (EC 834/2007 compliant) available. Suitable for European health supplement and food brands.' },
              { icon: '🌾', title: 'Farm Traceability', desc: 'Contracted organic farms in Sidhpur, Gujarat. Full traceability from seed to export — farm audit reports available.' },
              { icon: '🧪', title: 'Pesticide-Free COA', desc: 'Multi-residue pesticide panel testing by accredited third-party labs. Clean COA provided with every organic shipment.' },
              { icon: '📦', title: 'Organic Packaging', desc: 'Available in 25 kg food-grade paper bags, eco-friendly packaging, and retail pouches (100g–1 kg) for private label.' },
              { icon: '💰', title: 'Competitive Pricing', desc: 'Direct farm sourcing keeps organic premium at minimum. Best FOB pricing for regular organic psyllium buyers.' },
            ].map(item => (
              <div key={item.title} style={{ background: '#f0fdf4', borderRadius: '12px', padding: '1.5rem', border: '1px solid #86efac' }}>
                <div style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>{item.icon}</div>
                <h3 style={{ fontWeight: 700, color: '#15803d', marginBottom: '0.5rem', fontSize: '1rem' }}>{item.title}</h3>
                <p style={{ color: '#4b5563', fontSize: '0.88rem', lineHeight: 1.65 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: '#f9fafb', padding: '2.5rem 0' }}>
        <div className="container" style={{ maxWidth: '720px' }}>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.6rem', fontWeight: 700, color: colorTheme, marginBottom: '1.25rem' }}>Organic Psyllium Specifications</h2>
          <div style={{ background: 'white', borderRadius: '12px', overflow: 'hidden', border: '1px solid #e5e7eb' }}>
            {[
              ['Product', 'Organic Psyllium Husk (Plantago ovata)'],
              ['Purity', '99% (available in 98% also)'],
              ['Certification', 'USDA NOP, EU Organic, FSSAI, ISO 22000, Halal, Kosher'],
              ['Swelling Factor', 'Minimum 40 mL/g (USP standard)'],
              ['Moisture', 'Max 12%'],
              ['Ash Content', 'Max 4%'],
              ['Pesticide Residues', 'As per EU MRL — tested per shipment'],
              ['Packaging', '25 kg paper bags / custom retail packs'],
              ['MOQ', '500 kg (trial), 1 MT (standard)'],
              ['Lead Time', '7–14 days from order confirmation'],
            ].map(([label, value]) => (
              <div key={label} style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', borderBottom: '1px solid #f3f4f6', padding: '0.75rem 1.25rem' }}>
                <span style={{ fontWeight: 600, color: '#374151', fontSize: '0.88rem' }}>{label}</span>
                <span style={{ color: colorTheme, fontWeight: 500, fontSize: '0.88rem' }}>{value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
