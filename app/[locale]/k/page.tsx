import seoKeywords from '@/lib/seo-keywords.json';
import Link from 'next/link';
import type { Metadata } from 'next';
import { buildAlternates, buildCanonical } from '@/lib/seo-helpers';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const canonical = buildCanonical(locale, '/k');
  return {
    title: 'Indian Herbal & Agri Products Export Directory | Amar Herbal Origins',
    description:
      'Browse our complete B2B export directory — Psyllium Husk grades, Indian Spices, Herbs, Oils, international shipping routes, certifications, and wholesale specifications. Browse by topic letter.',
    // Phase 2 fix: only index English /k/ directory — non-English are duplicate, causing conflicts
    robots: locale === 'en'
      ? { index: true, follow: true }
      : { index: false, follow: false },
    alternates: {
      canonical,
      languages: buildAlternates('/k'),
    },
  };
}

export default async function DirectoryIndexPage({ params }: Props) {
  const { locale } = await params;

  // ── Build alphabet index (letter → count only — no heavy rendering) ──
  const letterCounts: Record<string, number> = {};
  for (const kw of seoKeywords as { keyword: string; slug: string }[]) {
    const firstChar = kw.keyword.trim().charAt(0).toUpperCase();
    const key = /[A-Z]/.test(firstChar) ? firstChar : '#';
    letterCounts[key] = (letterCounts[key] ?? 0) + 1;
  }

  const alphabet = Object.keys(letterCounts).sort((a, b) => {
    if (a === '#') return 1;
    if (b === '#') return -1;
    return a.localeCompare(b);
  });

  const totalKeywords = (seoKeywords as { keyword: string; slug: string }[]).length;

  return (
    <main style={{ background: '#FAF8F4', minHeight: '100vh', padding: '5rem 0' }}>
      <style>{`
        .dir-letter-card:hover { background: #1C1204 !important; border-color: #1C1204 !important; }
        .dir-letter-card:hover .letter-char { color: #D97706 !important; }
        .dir-letter-card:hover .letter-count { color: #9ca3af !important; }
        .dir-cta-link:hover { opacity: 0.9; }
      `}</style>
      <div className="container">

        {/* ── Breadcrumbs ── */}
        <div style={{ marginBottom: '1.5rem' }}>
          <Link href={`/${locale}`} style={{ color: '#9ca3af', fontSize: '0.85rem', textDecoration: 'none' }}>
            Home
          </Link>
          <span style={{ color: '#6b7280', margin: '0 0.5rem', fontSize: '0.85rem' }}>›</span>
          <span style={{ color: '#D97706', fontSize: '0.85rem' }}>Explore Directory</span>
        </div>

        {/* ── Hero ── */}
        <div style={{ marginBottom: '4rem', maxWidth: '800px' }}>
          <div
            style={{
              display: 'inline-block',
              background: 'rgba(217,119,6,0.1)',
              border: '1px solid rgba(217,119,6,0.25)',
              color: '#D97706',
              padding: '0.35rem 1rem',
              borderRadius: '50px',
              fontSize: '0.75rem',
              fontWeight: 700,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              marginBottom: '1.25rem',
            }}
          >
            SEO Directory Hub
          </div>
          <h1
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              fontWeight: 700,
              color: '#1C1204',
              lineHeight: 1.2,
              marginBottom: '1.5rem',
            }}
          >
            Psyllium Export Directory &{' '}
            <span style={{ color: '#D97706', fontStyle: 'italic' }}>Topics Index</span>
          </h1>
          <p style={{ color: '#6b7280', fontSize: '1.05rem', lineHeight: 1.7, marginBottom: '1rem' }}>
            Browse through our complete catalog of {totalKeywords.toLocaleString()}+ psyllium husk grades,
            international shipping routes, health applications, and global wholesale distribution channels.
          </p>
          <p style={{ color: '#9ca3af', fontSize: '0.9rem' }}>
            Select a letter below to explore topics in that category.
          </p>
        </div>

        {/* ── Stats Bar ── */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
            gap: '1rem',
            background: 'white',
            padding: '1.5rem 2rem',
            borderRadius: '16px',
            border: '1px solid #E5E0D8',
            marginBottom: '3rem',
            boxShadow: '0 4px 6px -1px rgba(0,0,0,0.02)',
          }}
        >
          {[
            { val: totalKeywords.toLocaleString(), label: 'Total Topics' },
            { val: String(alphabet.length), label: 'Categories' },
            { val: '30+', label: 'Countries Served' },
            { val: '5+', label: 'Years Exporting' },
          ].map((s) => (
            <div key={s.label} style={{ textAlign: 'center' }}>
              <div
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: '2rem',
                  fontWeight: 800,
                  color: '#D97706',
                  lineHeight: 1,
                }}
              >
                {s.val}
              </div>
              <div style={{ color: '#6b7280', fontSize: '0.8rem', marginTop: '0.25rem' }}>{s.label}</div>
            </div>
          ))}
        </div>

        {/* ── Letter Grid — each links to /k/letter/[letter] sub-page ── */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(100px, 1fr))',
            gap: '1rem',
          }}
        >
          {alphabet.map((letter) => (
            <Link
              key={letter}
              href={`/${locale}/k/letter/${letter}`}
              className="dir-letter-card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.35rem',
                background: 'white',
                border: '1px solid #E5E0D8',
                borderRadius: '16px',
                padding: '1.5rem 0.5rem',
                textDecoration: 'none',
                transition: 'all 0.2s',
                boxShadow: '0 2px 4px rgba(0,0,0,0.03)',
              }}
            >
              <span
                className="letter-char"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: '2.5rem',
                  fontWeight: 700,
                  color: '#1C1204',
                  lineHeight: 1,
                  transition: 'color 0.2s',
                }}
              >
                {letter}
              </span>
              <span
                className="letter-count"
                style={{
                  fontSize: '0.72rem',
                  color: '#9ca3af',
                  transition: 'color 0.2s',
                }}
              >
                {letterCounts[letter]} topics
              </span>
            </Link>
          ))}
        </div>

        {/* ── Bottom CTA ── */}
        <div
          style={{
            marginTop: '4rem',
            background: 'linear-gradient(135deg, #1C1204 0%, #2d1f08 100%)',
            borderRadius: '24px',
            padding: '3rem 2rem',
            textAlign: 'center',
          }}
        >
          <h2
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 'clamp(1.5rem, 3vw, 2.25rem)',
              fontWeight: 700,
              color: 'white',
              marginBottom: '0.75rem',
            }}
          >
            Ready to Order?
          </h2>
          <p style={{ color: '#b8a98a', marginBottom: '2rem', fontSize: '1rem' }}>
            Contact our export team for bulk pricing, samples, and COA documents.
          </p>
          <Link
            href={`/${locale}/contact`}
            className="dir-cta-link"
            style={{
              background: '#D97706',
              color: 'white',
              padding: '0.9rem 2.25rem',
              borderRadius: '50px',
              fontWeight: 700,
              textDecoration: 'none',
              fontSize: '0.95rem',
              display: 'inline-block',
              transition: 'opacity 0.2s',
            }}
          >
            Get a Free Quote →
          </Link>
        </div>
      </div>
    </main>
  );
}
