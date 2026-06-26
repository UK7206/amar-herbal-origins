import type { Metadata } from 'next';
import Link from 'next/link';
import { BLOG_POSTS } from '@/lib/blog-data';
import { buildAlternates, buildCanonical } from '@/lib/seo-helpers';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const canonical = buildCanonical(locale, '/psyllium/blog');
  return {
    title: 'Psyllium Husk B2B Blog & Import Guides | Amar Herbal Origins',
    description:
      'Expert B2B guides on importing psyllium husk from India. Learn about quality specifications, certifications (USDA Organic, ISO 22000), customs regulations, and market trends.',
    keywords: ['psyllium husk blog', 'import psyllium husk from india', 'psyllium husk exporter', 'isabgol wholesale blog'],
    alternates: { canonical, languages: buildAlternates('/psyllium/blog') },
    openGraph: {
      title: 'Psyllium Husk B2B Blog & Import Guides | Amar Herbal Origins',
      description: 'Expert B2B guides on importing psyllium husk from India. Quality specs, certifications, and global market trends.',
      url: canonical,
      siteName: 'Amar Herbal Origins',
      type: 'website',
    },
  };
}

const CAT_COLORS: Record<string, { color: string; bg: string; border: string }> = {
  'Export Guide':        { color: '#92400e', bg: 'rgba(146,64,14,0.08)',  border: 'rgba(146,64,14,0.2)' },
  'Market Intelligence': { color: '#b45309', bg: 'rgba(180,83,9,0.08)',  border: 'rgba(180,83,9,0.2)' },
  'Quality & Certs':    { color: '#15803d', bg: 'rgba(21,128,61,0.08)',  border: 'rgba(21,128,61,0.2)' },
  'Packaging':          { color: '#0369a1', bg: 'rgba(3,105,161,0.08)',  border: 'rgba(3,105,161,0.2)' },
  'Sourcing':           { color: '#0f766e', bg: 'rgba(15,118,110,0.08)', border: 'rgba(15,118,110,0.2)' },
};

export default async function PsylliumBlogIndexPage({ params }: Props) {
  const { locale } = await params;
  const featured = BLOG_POSTS[0];
  const rest = BLOG_POSTS.slice(1);
  const colorTheme = '#92400e';

  return (
    <main style={{ fontFamily: "'Inter', sans-serif", color: '#1a1a1a' }}>
      {/* CSS hover effects */}
      <style>{`
        .blog-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 16px 40px rgba(146,64,14,0.1);
          border-color: #92400e !important;
        }
      `}</style>

      {/* Hero */}
      <section style={{ background: 'linear-gradient(135deg, #2b1f0c 0%, #1e1406 100%)', padding: '4.5rem 0 3.5rem', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '-100px', right: '-100px', width: '500px', height: '500px', background: 'radial-gradient(circle, rgba(146,64,14,0.15) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
          <div style={{ display: 'inline-block', background: 'rgba(245,158,11,0.15)', border: '1px solid rgba(245,158,11,0.3)', color: '#f59e0b', padding: '0.35rem 1rem', borderRadius: '50px', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '1.25rem' }}>
            B2B Sourcing & Market Intelligence
          </div>
          <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(2.2rem, 5vw, 3.5rem)', fontWeight: 700, color: 'white', marginBottom: '1.25rem', lineHeight: 1.15 }}>
            Psyllium Husk{' '}
            <em style={{ color: '#fbbf24', fontStyle: 'italic' }}>Export Blog</em>
          </h1>
          <p style={{ color: '#d9cbb0', fontSize: '1.05rem', maxWidth: '600px', margin: '0 auto 2rem', lineHeight: 1.7 }}>
            Expert guides, quality specifications, certification insights, and shipping advice for global importers of Indian Isabgol.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
            {[`📋 ${BLOG_POSTS.length} B2B Articles`, '🌍 Exporting to 30+ Countries', '🔬 Certification & COA Guides'].map(p => (
              <span key={p} style={{ color: '#fef3c7', fontSize: '0.88rem', fontWeight: 600 }}>{p}</span>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: 'white', padding: '3.5rem 0 5rem' }}>
        <div className="container">
          {/* Featured Article */}
          <div style={{ background: '#1e1406', borderRadius: '20px', padding: '2.5rem', marginBottom: '3rem', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', top: '-60px', right: '-60px', width: '300px', height: '300px', background: 'radial-gradient(circle, rgba(146,64,14,0.2) 0%, transparent 70%)', pointerEvents: 'none' }} />
            <div style={{ position: 'relative', zIndex: 1 }}>
              <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', marginBottom: '1.25rem', flexWrap: 'wrap' }}>
                <span style={{ background: '#92400e', color: 'white', padding: '0.25rem 0.75rem', borderRadius: '50px', fontSize: '0.7rem', fontWeight: 700 }}>⭐ FEATURED</span>
                <CategoryChip category={featured.category} />
                <span style={{ color: '#d9cbb0', fontSize: '0.78rem' }}>{featured.date} · {featured.readTime}</span>
              </div>
              <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(1.5rem, 3vw, 2.1rem)', fontWeight: 700, color: 'white', marginBottom: '1rem', lineHeight: 1.3, maxWidth: '720px' }}>
                {featured.title}
              </h2>
              <p style={{ color: '#d9cbb0', lineHeight: 1.8, fontSize: '0.95rem', maxWidth: '680px', marginBottom: '2rem' }}>
                {featured.excerpt}
              </p>
              <Link href={`/${locale}/psyllium/blog/${featured.slug}`} style={{ display: 'inline-block', background: '#92400e', color: 'white', padding: '0.75rem 2rem', borderRadius: '50px', fontWeight: 700, textDecoration: 'none', fontSize: '0.9rem', border: '1px solid #92400e', transition: 'all 0.2s' }}>
                Read Article →
              </Link>
            </div>
          </div>

          {/* Article Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '1.5rem' }}>
            {rest.map(post => (
              <Link
                key={post.slug}
                href={`/${locale}/psyllium/blog/${post.slug}`}
                className="blog-card"
                style={{
                  textDecoration: 'none',
                  display: 'flex',
                  flexDirection: 'column',
                  background: 'white',
                  border: '1px solid #e5e7eb',
                  borderRadius: '16px',
                  padding: '1.75rem',
                  transition: 'all 0.25s',
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem', flexWrap: 'wrap', gap: '0.5rem' }}>
                  <CategoryChip category={post.category} />
                  <span style={{ color: '#9ca3af', fontSize: '0.72rem', fontWeight: 500 }}>{post.readTime}</span>
                </div>
                <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.2rem', fontWeight: 700, color: '#1a1a1a', lineHeight: 1.35, marginBottom: '0.875rem' }}>
                  {post.title}
                </h3>
                <p style={{ color: '#6b7280', fontSize: '0.88rem', lineHeight: 1.75, marginBottom: '1.25rem', flex: 1 }}>
                  {post.excerpt.length > 180 ? post.excerpt.slice(0, 180) + '…' : post.excerpt}
                </p>
                <div style={{ borderTop: '1px solid #f3f4f6', paddingTop: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ color: '#9ca3af', fontSize: '0.72rem' }}>{post.date}</span>
                  <span style={{ color: '#92400e', fontSize: '0.82rem', fontWeight: 700 }}>Read →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: 'linear-gradient(135deg, #1e1406 0%, #2b1f0c 100%)', padding: '4.5rem 0', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', fontWeight: 700, color: 'white', marginBottom: '1rem' }}>
            Looking for a Trusted Psyllium Supplier?
          </h2>
          <p style={{ color: '#d9cbb0', fontSize: '1.05rem', maxWidth: '500px', margin: '0 auto 2.5rem', lineHeight: 1.7 }}>
            Request custom specifications, bulk quotes, or sample shipments from our Gujarat facility.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href={`/${locale}/psyllium/contact`} style={{ background: '#92400e', color: 'white', padding: '0.9rem 2.25rem', borderRadius: '50px', fontWeight: 700, textDecoration: 'none', fontSize: '0.95rem' }}>
              Request B2B Quote
            </Link>
            <Link href={`/${locale}/psyllium/exporter`} style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.2)', color: 'white', padding: '0.9rem 2.25rem', borderRadius: '50px', fontWeight: 700, textDecoration: 'none', fontSize: '0.95rem' }}>
              Export Specifications
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

function CategoryChip({ category }: { category: string }) {
  const c = CAT_COLORS[category] ?? { color: '#6b7280', bg: '#f3f4f6', border: '#e5e7eb' };
  return (
    <span style={{ background: c.bg, border: `1px solid ${c.border}`, color: c.color, padding: '0.2rem 0.65rem', borderRadius: '50px', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.04em', whiteSpace: 'nowrap' }}>
      {category}
    </span>
  );
}
