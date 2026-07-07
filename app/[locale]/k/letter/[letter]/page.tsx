import seoKeywords from '@/lib/seo-keywords.json';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

type Props = {
  params: Promise<{ locale: string; letter: string }>;
};

// true = unknown letters render on-demand; generateStaticParams still pre-builds all in production
export const dynamicParams = true;

export async function generateStaticParams() {
  const letters = new Set<string>();
  for (const kw of seoKeywords as { keyword: string; slug: string }[]) {
    const firstChar = kw.keyword.trim().charAt(0).toUpperCase();
    const key = /[A-Z]/.test(firstChar) ? firstChar : '#';
    letters.add(key);
  }
  const locales = ['en', 'es', 'de', 'fr', 'ar', 'zh', 'ja'];
  const params: { locale: string; letter: string }[] = [];
  for (const locale of locales) {
    for (const letter of letters) {
      params.push({ locale, letter });
    }
  }
  return params;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, letter } = await params;
  const decoded = decodeURIComponent(letter).toUpperCase();
  return {
    title: `Psyllium Topics Starting With "${decoded}" | Amar Herbal Origins`,
    description: `Browse all psyllium husk export topics, grades, and specifications starting with the letter "${decoded}". B2B wholesale supplier from India.`,
    // Phase 2 fix: noindex non-English letter pages — no translated content, causes canonical conflicts
    robots: locale === 'en'
      ? { index: true, follow: true }
      : { index: false, follow: false },
  };
}

export default async function LetterPage({ params }: Props) {
  const { locale, letter } = await params;
  const decoded = decodeURIComponent(letter).toUpperCase();

  // Filter keywords for this letter
  const allKeywords = seoKeywords as { keyword: string; slug: string }[];
  const filtered = allKeywords
    .filter((kw) => {
      const firstChar = kw.keyword.trim().charAt(0).toUpperCase();
      const key = /[A-Z]/.test(firstChar) ? firstChar : '#';
      return key === decoded;
    })
    .sort((a, b) => a.keyword.localeCompare(b.keyword));

  if (filtered.length === 0) notFound();

  // All unique letters for navigation
  const allLetters = Array.from(
    new Set(
      allKeywords.map((kw) => {
        const c = kw.keyword.trim().charAt(0).toUpperCase();
        return /[A-Z]/.test(c) ? c : '#';
      })
    )
  ).sort((a, b) => {
    if (a === '#') return 1;
    if (b === '#') return -1;
    return a.localeCompare(b);
  });

  return (
    <main style={{ background: '#FAF8F4', minHeight: '100vh', padding: '5rem 0' }}>
      <style>{`
        .kw-link:hover { border-color: rgba(217,119,6,0.4) !important; color: #D97706 !important; background: #FFF9EF !important; }
        .nav-letter:hover { background: #D97706 !important; color: white !important; border-color: #D97706 !important; }
      `}</style>
      <div className="container">

        {/* ── Breadcrumbs ── */}
        <div style={{ marginBottom: '1.5rem' }}>
          <Link href={`/${locale}`} style={{ color: '#9ca3af', fontSize: '0.85rem', textDecoration: 'none' }}>
            Home
          </Link>
          <span style={{ color: '#6b7280', margin: '0 0.5rem', fontSize: '0.85rem' }}>›</span>
          <Link href={`/${locale}/k`} style={{ color: '#9ca3af', fontSize: '0.85rem', textDecoration: 'none' }}>
            Directory
          </Link>
          <span style={{ color: '#6b7280', margin: '0 0.5rem', fontSize: '0.85rem' }}>›</span>
          <span style={{ color: '#D97706', fontSize: '0.85rem' }}>Topics: {decoded}</span>
        </div>

        {/* ── Hero ── */}
        <div style={{ marginBottom: '3rem', maxWidth: '800px' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '80px',
              height: '80px',
              background: '#1C1204',
              color: '#D97706',
              borderRadius: '20px',
              fontSize: '3rem',
              fontFamily: "'Cormorant Garamond', serif",
              fontWeight: 700,
              marginBottom: '1.5rem',
            }}
          >
            {decoded}
          </div>
          <h1
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 'clamp(1.8rem, 4vw, 3rem)',
              fontWeight: 700,
              color: '#1C1204',
              lineHeight: 1.2,
              marginBottom: '1rem',
            }}
          >
            Topics starting with &quot;{decoded}&quot;{' '}
            <span style={{ color: '#D97706', fontStyle: 'italic' }}>({filtered.length} results)</span>
          </h1>
          <p style={{ color: '#6b7280', fontSize: '1rem', lineHeight: 1.7 }}>
            Browse all psyllium husk export topics, grades, and wholesale specifications starting with &quot;{decoded}&quot;.
          </p>
        </div>

        {/* ── Letter Navigation ── */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '0.5rem',
            background: 'white',
            padding: '1rem 1.25rem',
            borderRadius: '14px',
            border: '1px solid #E5E0D8',
            marginBottom: '3rem',
          }}
        >
          {allLetters.map((l) => (
            <Link
              key={l}
              href={`/${locale}/k/letter/${l}`}
              className={l === decoded ? '' : 'nav-letter'}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '38px',
                height: '38px',
                borderRadius: '8px',
                background: l === decoded ? '#1C1204' : '#FAF8F4',
                color: l === decoded ? '#D97706' : '#1C1204',
                fontWeight: 700,
                fontSize: '0.9rem',
                textDecoration: 'none',
                border: l === decoded ? '1px solid #1C1204' : '1px solid #E5E0D8',
                transition: 'all 0.2s',
              }}
            >
              {l}
            </Link>
          ))}
        </div>

        {/* ── Keywords Grid ── */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: '0.75rem',
            marginBottom: '4rem',
          }}
        >
          {filtered.map((kw) => (
            <Link
              key={kw.slug}
              href={`/${locale}/k/${kw.slug}`}
              className="kw-link"
              style={{
                display: 'block',
                color: '#374151',
                fontSize: '0.9rem',
                textDecoration: 'none',
                padding: '0.85rem 1.1rem',
                borderRadius: '10px',
                background: 'white',
                border: '1px solid #E5E0D8',
                transition: 'all 0.2s',
              }}
            >
              {kw.keyword}
            </Link>
          ))}
        </div>

        {/* ── Bottom Navigation ── */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
          <Link
            href={`/${locale}/k`}
            style={{
              background: '#1C1204',
              color: 'white',
              padding: '0.75rem 1.75rem',
              borderRadius: '50px',
              fontWeight: 600,
              textDecoration: 'none',
              fontSize: '0.9rem',
            }}
          >
            ← Back to Directory
          </Link>
          <Link
            href={`/${locale}/contact`}
            style={{
              background: '#D97706',
              color: 'white',
              padding: '0.75rem 1.75rem',
              borderRadius: '50px',
              fontWeight: 600,
              textDecoration: 'none',
              fontSize: '0.9rem',
            }}
          >
            Get a Quote →
          </Link>
        </div>
      </div>
    </main>
  );
}
