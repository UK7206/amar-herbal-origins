import type { Metadata } from 'next';
import Link from 'next/link';
import { getCategoryBySlug } from '@/lib/category-data';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: 'Psyllium Husk Current Stock | Ready to Ship | Amar Herbal Origins',
    description: 'Check current psyllium husk stock availability — 99%, 98%, organic grades. Ready for immediate shipment. Contact for bulk pricing and stock confirmation.',
    alternates: { canonical: `https://amarherbalorigins.com/${locale}/psyllium/stock` },
  };
}

export default async function PsylliumStockPage({ params }: Props) {
  const { locale } = await params;
  const category = getCategoryBySlug('psyllium')!;
  const { colorTheme, colorLight } = category;

  const stocks = [
    { grade: 'Psyllium Husk 99%', qty: '50+ MT', status: 'In Stock', note: 'Immediate shipment available' },
    { grade: 'Psyllium Husk 98%', qty: '80+ MT', status: 'In Stock', note: 'Immediate shipment available' },
    { grade: 'Psyllium Husk Powder (40 mesh)', qty: '20 MT', status: 'In Stock', note: 'Ready to ship' },
    { grade: 'Psyllium Husk Powder (60 mesh)', qty: '15 MT', status: 'In Stock', note: 'Ready to ship' },
    { grade: 'Psyllium Husk 95%', qty: '30 MT', status: 'In Stock', note: '7–10 day processing' },
    { grade: 'Organic Psyllium Husk 99%', qty: '10 MT', status: 'Limited Stock', note: 'Contact for availability' },
    { grade: 'Psyllium Seeds', qty: '100+ MT', status: 'In Stock', note: 'Immediate shipment' },
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
            <span style={{ color: colorTheme, fontWeight: 600 }}>Stock Availability</span>
          </nav>
          <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700, color: colorTheme, marginBottom: '1rem' }}>
            📦 Psyllium Husk — Current Stock Availability
          </h1>
          <p style={{ color: '#4b5563', fontSize: '1.05rem', maxWidth: '620px', lineHeight: 1.75 }}>
            We maintain ready-stock of all major psyllium grades for immediate shipment from Mundra Port. Contact us via WhatsApp for real-time stock confirmation and pricing.
          </p>
        </div>
      </section>

      <section style={{ padding: '3rem 0' }}>
        <div className="container">
          <div style={{ background: '#fff9e6', border: '1px solid #fbbf24', borderRadius: '10px', padding: '0.875rem 1.25rem', marginBottom: '1.5rem', fontSize: '0.88rem', color: '#92400e', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            ⚠️ Stock levels shown are indicative. Confirm availability via WhatsApp before placing order.
          </div>

          <div style={{ background: 'white', borderRadius: '14px', overflow: 'hidden', border: '1px solid #e5e7eb', boxShadow: '0 1px 10px rgba(0,0,0,0.04)' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 2fr', background: colorTheme, padding: '0.875rem 1.25rem' }}>
              {['Product Grade', 'Quantity', 'Status', 'Notes'].map(h => (
                <div key={h} style={{ fontWeight: 700, color: 'white', fontSize: '0.82rem', textTransform: 'uppercase', letterSpacing: '0.06em' }}>{h}</div>
              ))}
            </div>
            {stocks.map((s, i) => (
              <div key={s.grade} style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 2fr', padding: '1rem 1.25rem', borderBottom: i < stocks.length - 1 ? '1px solid #f3f4f6' : 'none', background: i % 2 === 0 ? 'white' : '#fafafa' }}>
                <div style={{ fontWeight: 600, color: '#1a1a1a', fontSize: '0.9rem' }}>🌾 {s.grade}</div>
                <div style={{ fontWeight: 700, color: colorTheme, fontSize: '0.9rem' }}>{s.qty}</div>
                <div>
                  <span style={{ background: s.status === 'In Stock' ? '#dcfce7' : '#fef9c3', color: s.status === 'In Stock' ? '#15803d' : '#92400e', padding: '0.2rem 0.65rem', borderRadius: '50px', fontSize: '0.75rem', fontWeight: 700 }}>
                    {s.status}
                  </span>
                </div>
                <div style={{ color: '#6b7280', fontSize: '0.85rem' }}>{s.note}</div>
              </div>
            ))}
          </div>

          <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <a href="https://wa.me/919408465040" target="_blank" rel="noopener noreferrer" style={{ background: colorTheme, color: 'white', padding: '0.875rem 2rem', borderRadius: '10px', textDecoration: 'none', fontWeight: 700, fontSize: '0.95rem' }}>
              💬 Confirm Stock on WhatsApp
            </a>
            <a href="mailto:amarherbalorigins@gmail.com" style={{ background: 'white', color: colorTheme, border: `2px solid ${colorTheme}`, padding: '0.875rem 2rem', borderRadius: '10px', textDecoration: 'none', fontWeight: 700, fontSize: '0.95rem' }}>
              📧 Request Price List
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
