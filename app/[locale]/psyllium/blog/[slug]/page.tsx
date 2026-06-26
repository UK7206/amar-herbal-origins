import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { BLOG_POSTS } from '@/lib/blog-data';
import { buildAlternates, buildCanonical } from '@/lib/seo-helpers';

type Props = { params: Promise<{ locale: string; slug: string }> };

export async function generateStaticParams() {
  const locales = ['en', 'de', 'fr', 'es', 'ar', 'zh', 'ja'];
  return BLOG_POSTS.flatMap(post =>
    locales.map(locale => ({ locale, slug: post.slug }))
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  const post = BLOG_POSTS.find(p => p.slug === slug);
  if (!post) return {};
  const canonical = buildCanonical(locale, `/psyllium/blog/${slug}`);
  return {
    title: `${post.title} | Amar Herbal Origins`,
    description: post.excerpt,
    keywords: post.keywords,
    alternates: { canonical, languages: buildAlternates(`/psyllium/blog/${slug}`) },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: canonical,
      siteName: 'Amar Herbal Origins',
      type: 'article',
      publishedTime: post.date,
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

/** Convert plain text body (paragraphs split by \n\n, **bold** markers) to JSX */
function renderBody(body: string) {
  return body.split('\n\n').map((para, i) => {
    // Check if it's a bold header line
    if (para.startsWith('**') && para.endsWith('**')) {
      return (
        <h3 key={i} style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.35rem', fontWeight: 700, color: '#1e1406', marginTop: '2rem', marginBottom: '0.75rem' }}>
          {para.slice(2, -2)}
        </h3>
      );
    }
    // Inline bold: replace **text** with <strong>
    const parts = para.split(/(\*\*[^*]+\*\*)/g);
    return (
      <p key={i} style={{ color: '#374151', lineHeight: 1.85, fontSize: '1rem', marginBottom: '1.25rem' }}>
        {parts.map((part, j) =>
          part.startsWith('**') && part.endsWith('**')
            ? <strong key={j} style={{ color: '#1a1a1a', fontWeight: 700 }}>{part.slice(2, -2)}</strong>
            : part
        )}
      </p>
    );
  });
}

export default async function PsylliumBlogPostPage({ params }: Props) {
  const { locale, slug } = await params;
  const post = BLOG_POSTS.find(p => p.slug === slug);
  if (!post) notFound();

  const postIndex = BLOG_POSTS.findIndex(p => p.slug === slug);
  const related = BLOG_POSTS.filter((_, i) => i !== postIndex).slice(0, 3);
  const colorTheme = '#92400e';
  const colorLight = '#fef3c7';

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    author: { '@type': 'Organization', name: 'Amar Herbal Origins' },
    publisher: {
      '@type': 'Organization',
      name: 'Amar Herbal Origins',
      logo: { '@type': 'ImageObject', url: 'https://amarherbalorigins.com/logo.png' },
    },
    keywords: post.keywords.join(', '),
    mainEntityOfPage: { '@type': 'WebPage', '@id': `https://amarherbalorigins.com/${locale}/psyllium/blog/${slug}` },
  };

  const clr = CAT_COLORS[post.category] ?? { color: '#6b7280', bg: '#f3f4f6', border: '#e5e7eb' };

  return (
    <main style={{ fontFamily: "'Inter', sans-serif", color: '#1a1a1a' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero */}
      <section style={{ background: 'linear-gradient(135deg, #2b1f0c 0%, #1e1406 100%)', padding: '4rem 0 3.5rem', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '-80px', right: '-80px', width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(146,64,14,0.15) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          {/* Breadcrumb */}
          <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
            <Link href={`/${locale}`} style={{ color: '#d9cbb0', fontSize: '0.82rem', textDecoration: 'none' }}>Home</Link>
            <span style={{ color: '#85755b', fontSize: '0.82rem' }}>›</span>
            <Link href={`/${locale}/psyllium`} style={{ color: '#d9cbb0', fontSize: '0.82rem', textDecoration: 'none' }}>Psyllium</Link>
            <span style={{ color: '#85755b', fontSize: '0.82rem' }}>›</span>
            <Link href={`/${locale}/psyllium/blog`} style={{ color: '#d9cbb0', fontSize: '0.82rem', textDecoration: 'none' }}>Blog</Link>
            <span style={{ color: '#85755b', fontSize: '0.82rem' }}>›</span>
            <span style={{ color: '#fbbf24', fontSize: '0.82rem', fontWeight: 600 }}>{post.category}</span>
          </div>

          <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
            <span style={{ background: clr.bg, border: `1px solid ${clr.border}`, color: '#fef3c7', padding: '0.25rem 0.75rem', borderRadius: '50px', fontSize: '0.72rem', fontWeight: 700 }}>{post.category}</span>
            <span style={{ color: '#d9cbb0', fontSize: '0.82rem' }}>{post.date} · {post.readTime}</span>
          </div>

          <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(1.8rem, 4vw, 3rem)', fontWeight: 700, color: 'white', lineHeight: 1.25, maxWidth: '800px', marginBottom: '1.5rem' }}>
            {post.title}
          </h1>
          <p style={{ color: '#d9cbb0', fontSize: '1.05rem', maxWidth: '680px', lineHeight: 1.7 }}>
            {post.excerpt}
          </p>
        </div>
      </section>

      {/* Article Body */}
      <section style={{ background: 'white', padding: '4rem 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr minmax(0, 720px) 1fr', gap: '0' }}>
            <div />
            <article>
              {renderBody(post.body)}

              {/* B2B Callout */}
              <div style={{ background: `${colorLight}40`, border: '1px solid rgba(146,64,14,0.18)', borderLeft: `4px solid ${colorTheme}`, borderRadius: '12px', padding: '1.75rem 2rem', margin: '2.5rem 0' }}>
                <div style={{ fontWeight: 700, fontSize: '1rem', color: colorTheme, marginBottom: '0.5rem' }}>
                  Need a certified B2B psyllium supplier from India?
                </div>
                <p style={{ color: '#6b7280', fontSize: '0.9rem', lineHeight: 1.65, marginBottom: '1rem' }}>
                  Amar Herbal Origins processes premium 99% purity whole husk and fine powders. We hold ISO 22000, USDA/EU Organic, Kosher, and Halal certifications.
                </p>
                <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                  <Link href={`/${locale}/psyllium/contact`} style={{ background: colorTheme, color: 'white', padding: '0.65rem 1.5rem', borderRadius: '50px', fontWeight: 700, textDecoration: 'none', fontSize: '0.88rem' }}>
                    Request B2B Quote
                  </Link>
                  <Link href={`/${locale}/psyllium/exporter`} style={{ background: 'white', border: `1px solid rgba(146,64,14,0.25)`, color: colorTheme, padding: '0.65rem 1.5rem', borderRadius: '50px', fontWeight: 600, textDecoration: 'none', fontSize: '0.88rem' }}>
                    Export Profile
                  </Link>
                </div>
              </div>

              {/* Tags */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: '2.5rem', paddingTop: '2rem', borderTop: '1px solid #e5e7eb' }}>
                <span style={{ color: '#9ca3af', fontSize: '0.82rem', fontWeight: 600 }}>TAGS:</span>
                {post.keywords.map(k => (
                  <span key={k} style={{ background: '#f9fafb', border: '1px solid #e5e7eb', padding: '0.25rem 0.75rem', borderRadius: '50px', fontSize: '0.78rem', color: '#4b5563' }}>{k}</span>
                ))}
              </div>
            </article>
            <div />
          </div>
        </div>
      </section>

      {/* Related Posts */}
      {related.length > 0 && (
        <section style={{ background: '#fafafa', padding: '4rem 0', borderTop: '1px solid #e5e7eb' }}>
          <div className="container">
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.75rem', fontWeight: 700, color: '#1a1a1a', marginBottom: '2rem' }}>
              Related Articles
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.25rem' }}>
              {related.map(r => {
                const rc = CAT_COLORS[r.category] ?? { color: '#6b7280', bg: '#f3f4f6', border: '#e5e7eb' };
                return (
                  <Link key={r.slug} href={`/${locale}/psyllium/blog/${r.slug}`} style={{ textDecoration: 'none' }}>
                    <div style={{ background: 'white', border: '1px solid #e5e7eb', borderRadius: '14px', padding: '1.5rem', height: '100%', boxSizing: 'border-box' }}>
                      <span style={{ background: rc.bg, border: `1px solid ${rc.border}`, color: rc.color, padding: '0.2rem 0.65rem', borderRadius: '50px', fontSize: '0.7rem', fontWeight: 700 }}>{r.category}</span>
                      <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.1rem', fontWeight: 700, color: '#1a1a1a', lineHeight: 1.35, margin: '0.75rem 0 0.5rem' }}>{r.title}</h3>
                      <span style={{ color: colorTheme, fontSize: '0.82rem', fontWeight: 600 }}>Read →</span>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* Back to Blog */}
      <section style={{ background: 'white', padding: '2.5rem 0', borderTop: '1px solid #e5e7eb', textAlign: 'center' }}>
        <Link href={`/${locale}/psyllium/blog`} style={{ color: colorTheme, fontWeight: 700, textDecoration: 'none', fontSize: '0.95rem' }}>
          ← Back to All Articles
        </Link>
      </section>
    </main>
  );
}
