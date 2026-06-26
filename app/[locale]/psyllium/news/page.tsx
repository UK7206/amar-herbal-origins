import type { Metadata } from 'next';
import Link from 'next/link';
import { getCategoryBySlug } from '@/lib/category-data';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: 'Psyllium Husk News & Market Updates | Amar Herbal Origins',
    description: 'Latest psyllium husk industry news, market trends, export updates, and crop reports from Amar Herbal Origins — Gujarat\'s leading psyllium exporter.',
    alternates: { canonical: `https://amarherbalorigins.com/${locale}/psyllium/news` },
  };
}

export default async function PsylliumNewsPage({ params }: Props) {
  const { locale } = await params;
  const category = getCategoryBySlug('psyllium')!;
  const { colorTheme, colorLight } = category;

  const news = [
    {
      date: 'June 2025',
      title: 'Psyllium Husk Global Demand Rises 18% in 2025',
      summary: 'Increasing health consciousness and fiber supplement market growth drove a significant uptick in global psyllium husk import volumes in H1 2025, with USA, Germany, and UK leading demand.',
      tag: 'Market Update',
    },
    {
      date: 'May 2025',
      title: 'India Psyllium Crop 2025 Season: Strong Harvest Expected',
      summary: 'The 2025 Rabi crop season in Sidhpur, Gujarat shows excellent psyllium yield projections with favorable weather. Prices expected to remain stable through Q3 2025.',
      tag: 'Crop Report',
    },
    {
      date: 'April 2025',
      title: 'New EU Organic Certification Achieved for 2025 Season',
      summary: 'Amar Herbal Origins received renewed EU Organic certification for our psyllium husk processing facility, enabling continued export to European organic supplement brands.',
      tag: 'Certification',
    },
    {
      date: 'March 2025',
      title: 'Psyllium Husk Export from India Crosses 50,000 MT Mark',
      summary: 'APEDA data confirms record psyllium husk exports from India in FY 2024-25, with Gujarat accounting for 88% of total volume. USA and Germany are the top 2 destinations.',
      tag: 'Industry Data',
    },
    {
      date: 'February 2025',
      title: 'FDA Dietary Fiber Labeling: Impact on Psyllium Husk Demand in USA',
      summary: 'The updated FDA dietary fiber definition continues to boost psyllium inclusion in American food products. Amar Herbal Origins reports 25% increase in US buyer inquiries.',
      tag: 'Regulatory',
    },
    {
      date: 'January 2025',
      title: 'Amar Herbal Origins Expands to 3 New Export Markets in 2025',
      summary: 'We are pleased to announce new export partnerships in Vietnam, Indonesia, and Poland — adding to our existing 30+ country presence for psyllium husk supply.',
      tag: 'Company News',
    },
  ];

  const tagColors: Record<string, { bg: string; text: string }> = {
    'Market Update': { bg: '#dbeafe', text: '#1d4ed8' },
    'Crop Report': { bg: '#dcfce7', text: '#15803d' },
    'Certification': { bg: '#fef9c3', text: '#92400e' },
    'Industry Data': { bg: '#f3e8ff', text: '#7e22ce' },
    'Regulatory': { bg: '#fee2e2', text: '#b91c1c' },
    'Company News': { bg: `${colorTheme}20`, text: colorTheme },
  };

  return (
    <main style={{ fontFamily: "'Inter', sans-serif", color: '#1a1a1a' }}>
      <section style={{ background: `linear-gradient(135deg, ${colorTheme}15, ${colorTheme}05)`, padding: '3.5rem 0 2.5rem', borderBottom: `3px solid ${colorTheme}20` }}>
        <div className="container">
          <nav style={{ fontSize: '0.82rem', color: '#6b7280', marginBottom: '1.25rem' }}>
            <Link href={`/${locale}`} style={{ color: '#6b7280', textDecoration: 'none' }}>Home</Link>
            <span style={{ margin: '0 0.4rem' }}>›</span>
            <Link href={`/${locale}/psyllium`} style={{ color: '#6b7280', textDecoration: 'none' }}>Psyllium</Link>
            <span style={{ margin: '0 0.4rem' }}>›</span>
            <span style={{ color: colorTheme, fontWeight: 600 }}>News</span>
          </nav>
          <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700, color: colorTheme, marginBottom: '1rem' }}>
            📰 Psyllium Husk — News & Market Updates
          </h1>
          <p style={{ color: '#4b5563', fontSize: '1.05rem', maxWidth: '580px', lineHeight: 1.75 }}>
            Stay updated on psyllium husk market trends, crop reports, regulatory changes, and export news from India's leading supplier.
          </p>
        </div>
      </section>

      <section style={{ padding: '3rem 0' }}>
        <div className="container" style={{ maxWidth: '860px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {news.map(item => {
              const tc = tagColors[item.tag] || { bg: '#f3f4f6', text: '#374151' };
              return (
                <div key={item.title} style={{ background: 'white', borderRadius: '14px', padding: '1.5rem', border: `1px solid ${colorTheme}18`, boxShadow: '0 1px 8px rgba(0,0,0,0.04)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem', flexWrap: 'wrap' }}>
                    <span style={{ background: tc.bg, color: tc.text, padding: '0.25rem 0.75rem', borderRadius: '50px', fontSize: '0.72rem', fontWeight: 700 }}>{item.tag}</span>
                    <span style={{ color: '#9ca3af', fontSize: '0.8rem' }}>{item.date}</span>
                  </div>
                  <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.25rem', fontWeight: 700, color: '#1a1a1a', marginBottom: '0.5rem', lineHeight: 1.3 }}>{item.title}</h2>
                  <p style={{ color: '#6b7280', fontSize: '0.9rem', lineHeight: 1.7 }}>{item.summary}</p>
                </div>
              );
            })}
          </div>

          <div style={{ marginTop: '2.5rem', background: colorLight, borderRadius: '12px', padding: '1.5rem', border: `1px solid ${colorTheme}22`, textAlign: 'center' }}>
            <p style={{ fontWeight: 600, color: colorTheme, marginBottom: '0.5rem' }}>📬 Get Psyllium Market Updates by Email</p>
            <p style={{ color: '#6b7280', fontSize: '0.88rem', marginBottom: '1rem' }}>Subscribe to receive monthly psyllium price updates and crop reports.</p>
            <a href="mailto:amarherbalorigins@gmail.com?subject=Subscribe: Psyllium Market Updates" style={{ background: colorTheme, color: 'white', padding: '0.65rem 1.5rem', borderRadius: '8px', textDecoration: 'none', fontWeight: 700, fontSize: '0.9rem' }}>Subscribe via Email</a>
          </div>
        </div>
      </section>
    </main>
  );
}
