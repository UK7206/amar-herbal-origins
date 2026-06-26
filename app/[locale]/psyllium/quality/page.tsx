import type { Metadata } from 'next';
import Link from 'next/link';
import { getCategoryBySlug } from '@/lib/category-data';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: 'Psyllium Husk Quality Standards | COA & Certifications | Amar Herbal Origins',
    description: 'Amar Herbal Origins psyllium husk quality: 99% purity, ISO 22000, FSSAI, Halal, Kosher, USDA Organic. In-house lab testing, third-party COA for every shipment.',
    alternates: { canonical: `https://amarherbalorigins.com/${locale}/psyllium/quality` },
  };
}

export default async function PsylliumQualityPage({ params }: Props) {
  const { locale } = await params;
  const category = getCategoryBySlug('psyllium')!;
  const { colorTheme, colorLight } = category;

  return (
    <main style={{ fontFamily: "'Inter', sans-serif", color: '#1a1a1a' }}>
      <section style={{ background: `linear-gradient(135deg, ${colorTheme}15, ${colorTheme}05)`, padding: '3.5rem 0 2.5rem', borderBottom: `3px solid ${colorTheme}20` }}>
        <div className="container">
          <nav style={{ fontSize: '0.82rem', color: '#6b7280', marginBottom: '1.25rem' }}>
            <Link href={`/${locale}`} style={{ color: '#6b7280', textDecoration: 'none' }}>Home</Link>
            <span style={{ margin: '0 0.4rem' }}>›</span>
            <Link href={`/${locale}/psyllium`} style={{ color: '#6b7280', textDecoration: 'none' }}>Psyllium</Link>
            <span style={{ margin: '0 0.4rem' }}>›</span>
            <span style={{ color: colorTheme, fontWeight: 600 }}>Quality Standards</span>
          </nav>
          <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700, color: colorTheme, marginBottom: '1rem' }}>
            🔬 Psyllium Husk Quality & Certifications
          </h1>
          <p style={{ color: '#4b5563', fontSize: '1.05rem', maxWidth: '660px', lineHeight: 1.75 }}>
            Every batch of psyllium husk we export is tested in our in-house QC lab and verified by accredited third-party laboratories. Full COA provided with every shipment — no exceptions.
          </p>
        </div>
      </section>

      <section style={{ padding: '3rem 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
            <div>
              <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.6rem', fontWeight: 700, color: colorTheme, marginBottom: '1.25rem' }}>Certifications</h2>
              {['FSSAI (Food Safety & Standards Authority of India)', 'ISO 22000:2018 Food Safety Management', 'GMP (Good Manufacturing Practice)', 'Halal Certified', 'Kosher Certified', 'USDA NOP Organic (organic grades)', 'EU Organic (organic grades)', 'APEDA (Agricultural & Processed Food Export Development Authority)', 'Phytosanitary Certificate (per shipment)', 'Certificate of Origin (per shipment)'].map(cert => (
                <div key={cert} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', marginBottom: '0.6rem', fontSize: '0.9rem', color: '#374151' }}>
                  <span style={{ color: colorTheme, fontWeight: 700, flexShrink: 0 }}>✅</span> {cert}
                </div>
              ))}
            </div>
            <div>
              <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.6rem', fontWeight: 700, color: colorTheme, marginBottom: '1.25rem' }}>Quality Parameters Tested</h2>
              <div style={{ background: colorLight, borderRadius: '12px', overflow: 'hidden', border: `1px solid ${colorTheme}20` }}>
                {[
                  ['Purity', '99%, 98%, 95%, 85% grades'],
                  ['Swelling Factor', 'Min 40 mL/g (USP)'],
                  ['Moisture', 'Max 12%'],
                  ['Ash Content', 'Max 4%'],
                  ['Heavy Metals', 'Pb, Cd, As, Hg — EU limits'],
                  ['Pesticide Residues', 'Multi-residue panel (400+ pesticides)'],
                  ['Aflatoxin', 'B1+B2+G1+G2 < 10 ppb'],
                  ['Total Plate Count', '< 10,000 CFU/g'],
                  ['E. Coli', 'Absent / 10g'],
                  ['Salmonella', 'Absent / 25g'],
                  ['Mesh Size', '40, 60, 80, 100 mesh'],
                ].map(([param, value]) => (
                  <div key={param} style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', borderBottom: '1px solid rgba(255,255,255,0.5)', padding: '0.65rem 1rem' }}>
                    <span style={{ fontWeight: 600, color: '#374151', fontSize: '0.85rem' }}>{param}</span>
                    <span style={{ color: colorTheme, fontWeight: 500, fontSize: '0.85rem' }}>{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ background: colorTheme, padding: '2.5rem 0', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.8rem', fontWeight: 700, color: 'white', marginBottom: '0.75rem' }}>Request a Sample with COA</h2>
          <p style={{ color: 'rgba(255,255,255,0.85)', marginBottom: '1.5rem' }}>We send pre-shipment samples with full Certificate of Analysis. WhatsApp to request.</p>
          <a href="https://wa.me/919408465040" target="_blank" rel="noopener noreferrer" style={{ background: 'white', color: colorTheme, padding: '0.875rem 2rem', borderRadius: '10px', textDecoration: 'none', fontWeight: 700 }}>💬 Request Sample + COA</a>
        </div>
      </section>
    </main>
  );
}
