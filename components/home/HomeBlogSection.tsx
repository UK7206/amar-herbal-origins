'use client';

import Link from 'next/link';

// Top blog posts to feature on homepage — chosen by GSC impression data
// These are the highest-impression pages that need authority flow from homepage
const FEATURED_POSTS = [
  {
    slug: 'isabgol-vs-psyllium-husk-difference',
    title: 'Isabgol vs Psyllium Husk: Are They the Same?',
    excerpt: 'The definitive 2026 answer — plus how to source bulk psyllium from India with full COA and certifications.',
    category: 'Sourcing',
    readTime: '5 min',
    color: '#92400e',
    bg: 'rgba(146,64,14,0.08)',
    border: 'rgba(146,64,14,0.18)',
    icon: '🌾',
  },
  {
    slug: 'psyllium-husk-vs-inulin-comparison',
    title: 'Psyllium Husk vs Inulin vs Guar Gum: Which Fiber Wins?',
    excerpt: 'Functional comparison for supplement formulators — cost, efficacy, and best application for each fiber.',
    category: 'Sourcing',
    readTime: '6 min',
    color: '#0369a1',
    bg: 'rgba(3,105,161,0.08)',
    border: 'rgba(3,105,161,0.18)',
    icon: '🔬',
  },
  {
    slug: 'pharmaceutical-grade-psyllium-husk-guide',
    title: 'Pharmaceutical Grade Psyllium Husk: USP, BP & Ph.Eur. Guide',
    excerpt: 'What "pharma grade" means, what testing is required, and how to verify compliance before buying.',
    category: 'Quality & Certs',
    readTime: '8 min',
    color: '#15803d',
    bg: 'rgba(21,128,61,0.08)',
    border: 'rgba(21,128,61,0.18)',
    icon: '📋',
  },
  {
    slug: 'psyllium-husk-fob-price-guide',
    title: 'Psyllium Husk FOB Price Guide 2026',
    excerpt: 'What drives psyllium export pricing from India, Unjha mandi rates, and how to get the best FOB deal.',
    category: 'Market Intelligence',
    readTime: '6 min',
    color: '#b45309',
    bg: 'rgba(180,83,9,0.08)',
    border: 'rgba(180,83,9,0.18)',
    icon: '💰',
  },
  {
    slug: 'psyllium-husk-coa-guide',
    title: 'Psyllium Husk COA Guide: What Every Buyer Must Check',
    excerpt: 'Swelling factor, heavy metals, microbiology — decode every number in a Certificate of Analysis.',
    category: 'Quality & Certs',
    readTime: '5 min',
    color: '#15803d',
    bg: 'rgba(21,128,61,0.08)',
    border: 'rgba(21,128,61,0.18)',
    icon: '✅',
  },
  {
    slug: 'how-to-import-psyllium-husk-from-india',
    title: 'How to Import Psyllium Husk from India [2026 Updated]',
    excerpt: 'Step-by-step: find a supplier, get documents right, handle customs clearance, and place your first order.',
    category: 'Export Guide',
    readTime: '7 min',
    color: '#92400e',
    bg: 'rgba(146,64,14,0.08)',
    border: 'rgba(146,64,14,0.18)',
    icon: '🚢',
  },
];

interface Props {
  locale: string;
}

export function HomeBlogSection({ locale }: Props) {
  return (
    <section style={{ background: '#FAF8F4', padding: '5rem 0', borderTop: '1px solid #E5E0D8' }}>
      <style>{`
        .blog-card-home:hover {
          border-color: rgba(217,119,6,0.4) !important;
          transform: translateY(-3px);
          box-shadow: 0 12px 32px rgba(0,0,0,0.08) !important;
        }
        .blog-read-link:hover { opacity: 0.75; }
      `}</style>
      <div className="container">
        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1.5rem', marginBottom: '3rem' }}>
          <div>
            <div style={{
              display: 'inline-block',
              color: '#D97706', fontSize: '0.75rem',
              fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase' as const,
              marginBottom: '0.75rem',
            }}>
              B2B EXPORT KNOWLEDGE BASE
            </div>
            <h2 style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)',
              fontWeight: 700, color: '#1C1204', lineHeight: 1.2, margin: 0,
            }}>
              Psyllium Husk{' '}
              <em style={{ color: '#D97706' }}>Buyer's Guides</em>
            </h2>
          </div>
          <Link
            href={`/${locale}/psyllium/blog`}
            className="blog-read-link"
            style={{
              color: '#D97706', fontWeight: 700, fontSize: '0.9rem',
              textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.35rem',
              whiteSpace: 'nowrap' as const,
            }}
          >
            View all articles →
          </Link>
        </div>

        {/* Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          gap: '1.25rem',
        }}>
          {FEATURED_POSTS.map((post) => (
            <Link
              key={post.slug}
              href={`/${locale}/psyllium/blog/${post.slug}`}
              className="blog-card-home"
              style={{
                display: 'flex',
                flexDirection: 'column' as const,
                background: 'white',
                border: '1px solid #E5E0D8',
                borderRadius: '16px',
                padding: '1.75rem',
                textDecoration: 'none',
                transition: 'all 0.25s',
                boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
              }}
            >
              {/* Icon + Category */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '1rem' }}>
                <span style={{
                  display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                  width: '38px', height: '38px', borderRadius: '10px',
                  background: post.bg, border: `1px solid ${post.border}`,
                  fontSize: '1.2rem', flexShrink: 0,
                }}>
                  {post.icon}
                </span>
                <span style={{
                  background: post.bg, border: `1px solid ${post.border}`,
                  color: post.color, padding: '0.2rem 0.65rem',
                  borderRadius: '50px', fontSize: '0.7rem', fontWeight: 700,
                }}>
                  {post.category}
                </span>
              </div>

              {/* Title */}
              <h3 style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: '1.15rem', fontWeight: 700,
                color: '#1C1204', lineHeight: 1.35,
                marginBottom: '0.65rem', flex: 1,
              }}>
                {post.title}
              </h3>

              {/* Excerpt */}
              <p style={{
                color: '#6b7280', fontSize: '0.85rem',
                lineHeight: 1.65, marginBottom: '1.25rem',
              }}>
                {post.excerpt}
              </p>

              {/* Footer */}
              <div style={{
                display: 'flex', alignItems: 'center',
                justifyContent: 'space-between',
                paddingTop: '1rem', borderTop: '1px solid #E5E0D8',
              }}>
                <span style={{ color: '#9ca3af', fontSize: '0.78rem' }}>
                  {post.readTime} read
                </span>
                <span style={{ color: '#D97706', fontWeight: 700, fontSize: '0.85rem' }}>
                  Read →
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom CTA */}
        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
          <Link
            href={`/${locale}/psyllium/blog`}
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
              background: '#1C1204', color: 'white',
              padding: '0.9rem 2.25rem', borderRadius: '50px',
              fontWeight: 700, textDecoration: 'none', fontSize: '0.95rem',
            }}
          >
            Browse All B2B Guides →
          </Link>
          <div style={{ marginTop: '1rem', color: '#9ca3af', fontSize: '0.82rem' }}>
            Export guides · Certification help · Price benchmarks · Sourcing tips
          </div>
        </div>
      </div>
    </section>
  );
}
