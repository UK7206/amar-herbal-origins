import type { Metadata } from 'next';
import Link from 'next/link';
import { getCategoryBySlug } from '@/lib/category-data';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: 'Psyllium Husk Exporter from India | Amar Herbal Origins',
    description: 'Amar Herbal Origins — certified psyllium husk (Isabgol) exporter from Gujarat, India. FOB Mundra, 30+ countries supplied, 99% purity, FSSAI & ISO 22000 certified.',
    alternates: { canonical: `https://amarherbalorigins.com/${locale}/psyllium/exporter` },
  };
}

export default async function PsylliumExporterPage({ params }: Props) {
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
            <span style={{ color: colorTheme, fontWeight: 600 }}>Exporter</span>
          </nav>
          <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700, color: colorTheme, marginBottom: '1rem' }}>
            🌾 Psyllium Husk Exporter from India
          </h1>
          <p style={{ color: '#4b5563', fontSize: '1.05rem', maxWidth: '660px', lineHeight: 1.75, marginBottom: '2rem' }}>
            Amar Herbal Origins is a leading psyllium husk (Isabgol) exporter based in Ahmedabad, Gujarat — the world's largest psyllium-producing region. We supply 30+ countries with consistent quality, full certifications, and competitive FOB pricing.
          </p>
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
            <a href="https://wa.me/919408465040" target="_blank" rel="noopener noreferrer" style={{ background: colorTheme, color: 'white', padding: '0.75rem 1.75rem', borderRadius: '10px', textDecoration: 'none', fontWeight: 700 }}>💬 WhatsApp Inquiry</a>
            <Link href={`/${locale}/psyllium/contact`} style={{ background: 'white', color: colorTheme, border: `2px solid ${colorTheme}`, padding: '0.75rem 1.75rem', borderRadius: '10px', textDecoration: 'none', fontWeight: 700 }}>📧 Send Inquiry</Link>
          </div>
        </div>
      </section>

      <section style={{ padding: '3rem 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.25rem' }}>
            {[
              { icon: '🏭', title: 'Manufacturing Hub', desc: 'Gujarat & Rajasthan — 85% of global psyllium supply originates here. Direct from farm to export.' },
              { icon: '✅', title: 'Certified Quality', desc: 'FSSAI, ISO 22000, GMP, Halal, Kosher, USDA Organic certified. Third-party lab COA with every shipment.' },
              { icon: '🚢', title: 'Global Shipping', desc: 'FOB Mundra / Nhava Sheva. 30+ countries served. 7–14 day lead time. LCL and FCL available.' },
              { icon: '📦', title: 'Flexible MOQ', desc: 'Trial orders from 500 kg. FCL orders from 18 MT. Custom packaging available.' },
              { icon: '🌾', title: '99% Purity Grades', desc: 'Whole husk, husk powder (40–100 mesh), organic, pharmaceutical grade — all available.' },
              { icon: '🤝', title: 'Dedicated Support', desc: 'Dedicated export manager, pre-shipment samples, and full documentation for customs clearance.' },
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

      <section style={{ background: '#f9fafb', padding: '2.5rem 0' }}>
        <div className="container">
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.6rem', fontWeight: 700, color: colorTheme, marginBottom: '1.25rem' }}>Countries We Export To</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
            {['🇺🇸 USA', '🇩🇪 Germany', '🇬🇧 UK', '🇦🇺 Australia', '🇨🇦 Canada', '🇦🇪 UAE', '🇸🇦 Saudi Arabia', '🇳🇱 Netherlands', '🇫🇷 France', '🇯🇵 Japan', '🇸🇬 Singapore', '🇿🇦 South Africa', '🇮🇹 Italy', '🇪🇸 Spain', '🇵🇱 Poland', '🇧🇪 Belgium'].map(c => (
              <span key={c} style={{ background: 'white', border: `1px solid ${colorTheme}25`, borderRadius: '8px', padding: '0.35rem 0.85rem', fontSize: '0.85rem', fontWeight: 600, color: '#374151' }}>{c}</span>
            ))}
            <span style={{ background: colorTheme, border: `1px solid ${colorTheme}`, borderRadius: '8px', padding: '0.35rem 0.85rem', fontSize: '0.85rem', fontWeight: 600, color: 'white' }}>+15 more</span>
          </div>
        </div>
      </section>

      <section style={{ padding: '2.5rem 0', textAlign: 'center', background: colorTheme }}>
        <div className="container">
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.8rem', fontWeight: 700, color: 'white', marginBottom: '0.75rem' }}>Ready to Import Psyllium Husk?</h2>
          <p style={{ color: 'rgba(255,255,255,0.85)', marginBottom: '1.5rem' }}>Get pricing, samples, and export documentation within 24 hours.</p>
          <a href="https://wa.me/919408465040" target="_blank" rel="noopener noreferrer" style={{ background: 'white', color: colorTheme, padding: '0.875rem 2rem', borderRadius: '10px', textDecoration: 'none', fontWeight: 700 }}>💬 WhatsApp Now</a>
        </div>
      </section>
    </main>
  );
}
