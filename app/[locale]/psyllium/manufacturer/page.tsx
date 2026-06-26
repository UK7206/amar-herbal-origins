import type { Metadata } from 'next';
import Link from 'next/link';
import { getCategoryBySlug } from '@/lib/category-data';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: 'Psyllium Husk Manufacturer India | Isabgol Processing Unit | Amar Herbal Origins',
    description: 'Psyllium husk manufacturer in Ahmedabad, Gujarat. In-house processing: whole husk, husk powder, organic grades. GMP, FSSAI, ISO 22000 certified manufacturing unit.',
    alternates: { canonical: `https://amarherbalorigins.com/${locale}/psyllium/manufacturer` },
  };
}

export default async function PsylliumManufacturerPage({ params }: Props) {
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
            <span style={{ color: colorTheme, fontWeight: 600 }}>Manufacturer</span>
          </nav>
          <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700, color: colorTheme, marginBottom: '1rem' }}>
            🏭 Psyllium Husk Manufacturer — Gujarat, India
          </h1>
          <p style={{ color: '#4b5563', fontSize: '1.05rem', maxWidth: '660px', lineHeight: 1.75, marginBottom: '2rem' }}>
            Amar Herbal Origins operates a GMP-certified psyllium processing facility in Ahmedabad, Gujarat. We process raw psyllium seed (Plantago ovata) into premium husk, husk powder, and organic grades — with full quality control at every stage.
          </p>
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
            <a href="https://wa.me/919408465040" target="_blank" rel="noopener noreferrer" style={{ background: colorTheme, color: 'white', padding: '0.75rem 1.75rem', borderRadius: '10px', textDecoration: 'none', fontWeight: 700 }}>💬 WhatsApp Us</a>
            <Link href={`/${locale}/psyllium/quality`} style={{ background: 'white', color: colorTheme, border: `2px solid ${colorTheme}`, padding: '0.75rem 1.75rem', borderRadius: '10px', textDecoration: 'none', fontWeight: 700 }}>🔬 Quality Standards</Link>
          </div>
        </div>
      </section>

      <section style={{ padding: '3rem 0' }}>
        <div className="container">
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.8rem', fontWeight: 700, color: colorTheme, marginBottom: '1.5rem' }}>Manufacturing Capabilities</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.25rem' }}>
            {[
              { icon: '⚙️', title: 'Processing Capacity', desc: 'Monthly processing capacity of 500+ MT. Scalable for large FCL orders with consistent quality output.' },
              { icon: '🌡️', title: 'Cleaning & Grading', desc: 'Multi-stage seed cleaning, husking, grading and sieving lines. 40 mesh to 100 mesh powder available.' },
              { icon: '🧪', title: 'In-House QC Lab', desc: 'Full analytical testing: purity, swelling factor, heavy metals, pesticide residues, microbiology. COA per batch.' },
              { icon: '📦', title: 'Packaging Lines', desc: '25 kg and 50 kg export bags, 1 kg retail packs, bulk containers. Custom private label packaging available.' },
              { icon: '🌿', title: 'Organic Processing', desc: 'Dedicated organic processing line. USDA NOP and EU Organic certified. No cross-contamination with conventional.' },
              { icon: '🏆', title: 'Certifications', desc: 'GMP, FSSAI, ISO 22000, Halal, Kosher, USDA Organic — all active and audited annually.' },
            ].map(item => (
              <div key={item.title} style={{ background: colorLight, borderRadius: '12px', padding: '1.5rem', border: `1px solid ${colorTheme}20` }}>
                <div style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>{item.icon}</div>
                <h3 style={{ fontWeight: 700, color: colorTheme, marginBottom: '0.5rem', fontSize: '1rem' }}>{item.title}</h3>
                <p style={{ color: '#4b5563', fontSize: '0.88rem', lineHeight: 1.65 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: '#f9fafb', padding: '3rem 0' }}>
        <div className="container">
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.8rem', fontWeight: 700, color: colorTheme, marginBottom: '1.25rem' }}>Product Range</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '1rem' }}>
            {[
              { name: 'Psyllium Husk 99%', detail: 'Pharmaceutical & food grade' },
              { name: 'Psyllium Husk 98%', detail: 'Standard export grade' },
              { name: 'Psyllium Husk Powder', detail: '40–100 mesh, various grades' },
              { name: 'Organic Psyllium Husk', detail: 'USDA / EU Organic certified' },
              { name: 'Psyllium Seeds', detail: 'Whole, cleaned & graded' },
            ].map(p => (
              <div key={p.name} style={{ background: 'white', border: `1.5px solid ${colorTheme}22`, borderRadius: '10px', padding: '1.25rem' }}>
                <div style={{ fontWeight: 700, color: '#1a1a1a', marginBottom: '0.3rem' }}>🌾 {p.name}</div>
                <div style={{ color: colorTheme, fontSize: '0.82rem', fontWeight: 600 }}>{p.detail}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '2.5rem 0', textAlign: 'center', background: colorTheme }}>
        <div className="container">
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.8rem', fontWeight: 700, color: 'white', marginBottom: '0.75rem' }}>Request a Factory Visit or Sample</h2>
          <p style={{ color: 'rgba(255,255,255,0.85)', marginBottom: '1.5rem' }}>We welcome buyer factory audits. Contact us to schedule a visit or request samples.</p>
          <a href="mailto:amarherbalorigins@gmail.com" style={{ background: 'white', color: colorTheme, padding: '0.875rem 2rem', borderRadius: '10px', textDecoration: 'none', fontWeight: 700 }}>📧 Email Us</a>
        </div>
      </section>
    </main>
  );
}
