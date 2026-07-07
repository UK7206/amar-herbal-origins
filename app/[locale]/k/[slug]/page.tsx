import seoKeywords from '@/lib/seo-keywords.json';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import type { Metadata } from 'next';
import { buildAlternates, buildCanonical } from '@/lib/seo-helpers';

type Props = {
  params: Promise<{ locale: string; slug: string }>;
};

// ── Next.js Dynamic Params Configuration for Programmatic SEO ─────────────────
// true = render on-demand if not pre-built (works in dev; production still uses generateStaticParams)
export const dynamicParams = true;

// ── Pre-generate ALL keyword pages at build time ──────────────────────────────
export async function generateStaticParams() {
  const params: { locale: string; slug: string }[] = [];

  // English: generate ALL 5000 keywords (primary SEO locale)
  for (const kw of seoKeywords as { keyword: string; slug: string }[]) {
    params.push({ locale: 'en', slug: kw.slug });
  }

  // Other locales: top 200 only (saves build time, captures main traffic)
  const otherLocales = ['es', 'de', 'fr', 'ar', 'zh', 'ja'];
  const topKeywords = (seoKeywords as { keyword: string; slug: string }[]).slice(0, 200);
  for (const locale of otherLocales) {
    for (const kw of topKeywords) {
      params.push({ locale, slug: kw.slug });
    }
  }

  return params;
}

// ── Dynamic metadata per keyword ──────────────────────────────────────────────
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  const kw = (seoKeywords as { keyword: string; slug: string }[]).find(k => k.slug === slug);
  if (!kw) return {};

  const title = toTitleCase(kw.keyword);
  const description = buildDescription(kw.keyword);
  const canonical = buildCanonical(locale, `/k/${slug}`);

  return {
    title: `${title} | Amar Herbal Origins`,
    description,
    keywords: [kw.keyword, 'psyllium husk exporter', 'isabgol supplier india', 'amar herbal origins'],
    // Phase 2 fix: noindex non-English /k/ pages to resolve 557 canonical conflicts in GSC.
    // These pages have no unique translated content — only English versions should be indexed.
    robots: locale === 'en'
      ? { index: true, follow: true }
      : { index: false, follow: false },
    openGraph: {
      title: `${title} | Amar Herbal Origins`,
      description,
      url: canonical,
      siteName: 'Amar Herbal Origins',
      type: 'website',
    },
    alternates: {
      canonical,
      languages: buildAlternates(`/k/${slug}`),
    },
  };
}

// ── Page Component ────────────────────────────────────────────────────────────
export default async function KeywordPage({ params }: Props) {
  const { locale, slug } = await params;
  const kw = (seoKeywords as { keyword: string; slug: string }[]).find(k => k.slug === slug);
  if (!kw) notFound();

  const title = toTitleCase(kw.keyword);
  const content = buildContent(kw.keyword);
  const relatedKeywords = getRelatedKeywords(kw.keyword);
  
  const faqList = buildFaq(kw.keyword);
  const specsList = buildSpecs(kw.keyword);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqList.map(f => ({
      "@type": "Question",
      "name": f.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": f.a
      }
    }))
  };

  return (
    <main>
      {/* Dynamic JSON-LD FAQ Schema for Google Search Rich Snippets */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* ── Hero ── */}
      <section
        style={{
          background: 'linear-gradient(135deg, #1C1204 0%, #2d1f08 60%, #3d2a0a 100%)',
          padding: '5rem 0 4rem',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: '-100px',
            right: '-100px',
            width: '500px',
            height: '500px',
            background: 'radial-gradient(circle, rgba(217,119,6,0.12) 0%, transparent 70%)',
            pointerEvents: 'none',
          }}
        />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          {/* Breadcrumb */}
          <div style={{ marginBottom: '1.5rem' }}>
            <Link href={`/${locale}`} style={{ color: '#9ca3af', fontSize: '0.85rem', textDecoration: 'none' }}>Home</Link>
            <span style={{ color: '#6b7280', margin: '0 0.5rem', fontSize: '0.85rem' }}>›</span>
            <Link href={`/${locale}/product`} style={{ color: '#9ca3af', fontSize: '0.85rem', textDecoration: 'none' }}>Products</Link>
            <span style={{ color: '#6b7280', margin: '0 0.5rem', fontSize: '0.85rem' }}>›</span>
            <span style={{ color: '#D97706', fontSize: '0.85rem' }}>{title}</span>
          </div>

          <div
            style={{
              display: 'inline-block',
              background: 'rgba(217,119,6,0.15)',
              border: '1px solid rgba(217,119,6,0.35)',
              color: '#D97706',
              padding: '0.35rem 1rem',
              borderRadius: '50px',
              fontSize: '0.75rem',
              fontWeight: 700,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              marginBottom: '1.5rem',
            }}
          >
            B2B Psyllium Supplier · India
          </div>

          <h1
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 'clamp(1.8rem, 4vw, 3rem)',
              fontWeight: 700,
              color: 'white',
              marginBottom: '1.25rem',
              lineHeight: 1.2,
              maxWidth: '760px',
            }}
          >
            {title}
          </h1>
          <p
            style={{
              color: '#b8a98a',
              fontSize: '1.05rem',
              maxWidth: '620px',
              lineHeight: 1.7,
              marginBottom: '2.5rem',
            }}
          >
            {content.intro}
          </p>

          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <Link
              href={`/${locale}/contact`}
              style={{
                background: '#D97706',
                color: 'white',
                padding: '0.9rem 2.25rem',
                borderRadius: '50px',
                fontWeight: 700,
                textDecoration: 'none',
                fontSize: '0.95rem',
                display: 'inline-block',
              }}
            >
              Request a Quote →
            </Link>
            <Link
              href={`/${locale}/product`}
              style={{
                background: 'rgba(255,255,255,0.08)',
                border: '1px solid rgba(255,255,255,0.2)',
                color: 'white',
                padding: '0.9rem 2.25rem',
                borderRadius: '50px',
                fontWeight: 700,
                textDecoration: 'none',
                fontSize: '0.95rem',
                display: 'inline-block',
              }}
            >
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* ── Why Choose Amar Herbal ── */}
      <section style={{ background: 'white', padding: '5rem 0' }}>
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '3rem',
              alignItems: 'start',
            }}
          >
            <div>
              <div className="section-label" style={{ marginBottom: '0.75rem' }}>WHY CHOOSE US</div>
              <h2 className="section-heading" style={{ marginBottom: '1.5rem' }}>
                India's Trusted{' '}
                <em style={{ color: '#D97706' }}>Psyllium Exporter</em>
              </h2>
              <p style={{ color: '#6b7280', lineHeight: 1.8, fontSize: '1rem', marginBottom: '1.25rem' }}>
                {content.body1}
              </p>
              <p style={{ color: '#6b7280', lineHeight: 1.8, fontSize: '1rem', marginBottom: '2rem' }}>
                {content.body2}
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {[
                  '✓ Farm-direct from Gujarat & Rajasthan',
                  '✓ ISO 22000 & FSSAI Certified',
                  '✓ Full COA with every shipment',
                  '✓ MOQ: 1 MT — scalable to container loads',
                  '✓ FOB Mundra / Nhava Sheva — 7–14 day lead time',
                ].map(item => (
                  <div key={item} style={{ color: '#374151', fontSize: '0.95rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <span style={{ color: '#D97706', fontWeight: 700 }}>{item.substring(0, 1)}</span>
                    {item.substring(2)}
                  </div>
                ))}
              </div>
            </div>

            <div>
              {/* Grades card */}
              <div
                style={{
                  background: '#1C1204',
                  borderRadius: '20px',
                  padding: '2rem',
                  marginBottom: '1.5rem',
                }}
              >
                <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.4rem', color: 'white', marginBottom: '1.5rem', fontWeight: 700 }}>
                  Available Product Grades
                </h3>
                {[
                  { grade: 'Psyllium Husk Powder', purity: '98–99% Purity' },
                  { grade: 'Whole Psyllium Husk', purity: '99% Purity' },
                  { grade: 'Organic Psyllium Husk', purity: 'USDA Certified' },
                  { grade: 'Psyllium Seeds', purity: 'Sorted & Cleaned' },
                  { grade: 'Blonde Psyllium Husk', purity: 'Premium Grade' },
                ].map(p => (
                  <div
                    key={p.grade}
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      padding: '0.75rem 0',
                      borderBottom: '1px solid rgba(255,255,255,0.07)',
                    }}
                  >
                    <span style={{ color: '#e5d6b8', fontSize: '0.9rem' }}>{p.grade}</span>
                    <span style={{ color: '#D97706', fontSize: '0.8rem', fontWeight: 700 }}>{p.purity}</span>
                  </div>
                ))}
              </div>

              {/* Stats row */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(3, 1fr)',
                  gap: '1px',
                  background: '#E5E0D8',
                  borderRadius: '12px',
                  overflow: 'hidden',
                }}
              >
                {[
                  { val: '5+', label: 'Years Export' },
                  { val: '30+', label: 'Countries' },
                  { val: '5K MT', label: 'Exported' },
                ].map(s => (
                  <div key={s.label} style={{ background: '#FAF8F4', padding: '1.25rem', textAlign: 'center' }}>
                    <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.8rem', fontWeight: 800, color: '#D97706', lineHeight: 1 }}>{s.val}</div>
                    <div style={{ color: '#6b7280', fontSize: '0.75rem', marginTop: '0.25rem' }}>{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Technical Specifications Section ── */}
      <section style={{ background: '#FAF8F4', padding: '5rem 0', borderTop: '1px solid #E5E0D8' }}>
        <div className="container">
          <div className="section-label" style={{ marginBottom: '0.75rem' }}>PRODUCT SPECIFICATIONS</div>
          <h2 className="section-heading" style={{ marginBottom: '2.5rem' }}>
            Technical <em style={{ color: '#D97706' }}>Specifications & Quality</em>
          </h2>
          <div
            style={{
              background: 'white',
              borderRadius: '20px',
              border: '1px solid #E5E0D8',
              overflow: 'hidden',
              boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)',
              maxWidth: '800px',
              margin: '0 auto',
            }}
          >
            {specsList.map((spec, index) => (
              <div
                key={spec.parameter}
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  padding: '1.2rem 2rem',
                  borderBottom: index === specsList.length - 1 ? 'none' : '1px solid #E5E0D8',
                  background: index % 2 === 0 ? '#FAF8F4' : 'white',
                }}
              >
                <span style={{ fontWeight: 600, color: '#1C1204', fontSize: '0.95rem' }}>{spec.parameter}</span>
                <span style={{ color: '#374151', fontSize: '0.95rem', textAlign: 'right', fontWeight: 500 }}>{spec.value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ Section ── */}
      <section style={{ background: 'white', padding: '5rem 0', borderTop: '1px solid #E5E0D8' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <div className="section-label" style={{ marginBottom: '0.75rem', textAlign: 'center' }}>QUESTIONS & ANSWERS</div>
          <h2 className="section-heading" style={{ marginBottom: '3rem', textAlign: 'center' }}>
            Frequently Asked <em style={{ color: '#D97706' }}>Questions</em>
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {faqList.map(faq => (
              <div
                key={faq.q}
                style={{
                  background: '#FAF8F4',
                  borderRadius: '16px',
                  padding: '2rem',
                  border: '1px solid #E5E0D8',
                }}
              >
                <h3
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: '1.3rem',
                    fontWeight: 700,
                    color: '#1C1204',
                    marginBottom: '0.75rem',
                  }}
                >
                  {faq.q}
                </h3>
                <p style={{ color: '#4b5563', lineHeight: 1.7, fontSize: '0.95rem' }}>
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Related Keywords (Internal Links) ── */}
      <section style={{ background: '#FAF8F4', padding: '4rem 0', borderTop: '1px solid #E5E0D8' }}>
        <div className="container">
          <div className="section-label" style={{ marginBottom: '0.75rem' }}>EXPLORE MORE</div>
          <h2 className="section-heading" style={{ marginBottom: '2rem' }}>
            Related <em style={{ color: '#D97706' }}>Products & Topics</em>
          </h2>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '0.75rem',
            }}
          >
            {relatedKeywords.map(rk => (
              <Link
                key={rk.slug}
                href={`/${locale}/k/${rk.slug}`}
                className="seo-tag-link"
              >
                {toTitleCase(rk.keyword)}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section
        style={{
          background: 'linear-gradient(135deg, #1C1204 0%, #2d1f08 100%)',
          padding: '5rem 0',
          textAlign: 'center',
        }}
      >
        <div className="container">
          <h2
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 'clamp(1.8rem, 4vw, 3rem)',
              fontWeight: 700,
              color: 'white',
              marginBottom: '1rem',
            }}
          >
            Get a Free Quote Today
          </h2>
          <p style={{ color: '#b8a98a', fontSize: '1.05rem', maxWidth: '480px', margin: '0 auto 2.5rem', lineHeight: 1.7 }}>
            Contact our export team for pricing, samples, and COA documents. Response within 24 hours.
          </p>
          <Link
            href={`/${locale}/contact`}
            style={{
              background: '#D97706',
              color: 'white',
              padding: '1rem 2.5rem',
              borderRadius: '50px',
              fontWeight: 700,
              textDecoration: 'none',
              fontSize: '1rem',
              display: 'inline-block',
            }}
          >
            Contact Our Export Team →
          </Link>
        </div>
      </section>
    </main>
  );
}

// ── Helpers ───────────────────────────────────────────────────────────────────

function toTitleCase(str: string) {
  const stopWords = new Set(['a', 'an', 'the', 'and', 'or', 'for', 'of', 'in', 'on', 'at', 'to', 'with', 'by']);
  return str
    .split(' ')
    .map((w, i) => (i === 0 || !stopWords.has(w.toLowerCase()))
      ? w.charAt(0).toUpperCase() + w.slice(1)
      : w)
    .join(' ');
}

function buildDescription(kw: string): string {
  const base = toTitleCase(kw);
  return `Looking for ${base}? Amar Herbal Origins is India's trusted psyllium husk exporter — farm-direct from Gujarat, ISO certified, with full COA. Bulk B2B supply to 30+ countries. Request a free quote today.`;
}

function buildContent(kw: string) {
  const kl = kw.toLowerCase();

  const isOrganic = kl.includes('organic');
  const isWholesale = kl.includes('wholesale') || kl.includes('bulk');
  const isConstipation = kl.includes('constipation');
  const isCholesterol = kl.includes('cholesterol');
  const isWeight = kl.includes('weight') || kl.includes('slimming');
  const isGut = kl.includes('gut') || kl.includes('digestive') || kl.includes('ibs');
  const isDiabetes = kl.includes('diabetes') || kl.includes('blood sugar');
  const isPowder = kl.includes('powder');
  const isSupplier = kl.includes('supplier') || kl.includes('exporter') || kl.includes('manufacturer');

  let intro = `Amar Herbal Origins is a leading psyllium husk supplier and exporter from India, offering ${toTitleCase(kw)} to buyers worldwide. With farm-direct sourcing from Gujarat and Rajasthan, we deliver consistent quality, competitive pricing, and full documentation for every shipment.`;

  let body1 = `Our psyllium husk is processed in FSSAI-certified facilities and tested for purity (98–99%), moisture, heavy metals, and microbial counts. Every batch comes with a full Certificate of Analysis (COA), making it compliant for pharma, nutraceutical, food, and supplement applications globally.`;

  let body2 = `We supply to importers, distributors, and manufacturers in the USA, UK, Germany, Australia, Canada, UAE, and 25+ other countries. Minimum order starts at 1 MT with flexible packaging (PP bags, HDPE drums, custom labels) and FOB pricing from Mundra or Nhava Sheva port.`;

  if (isOrganic) {
    intro = `Amar Herbal Origins offers USDA-certified Organic Psyllium Husk — ideal for ${toTitleCase(kw)} requirements. Our organic range is grown without synthetic pesticides, processed in dedicated organic lines, and certified by accredited third-party bodies.`;
    body1 = `Our organic psyllium husk carries USDA NOP, EU Organic, and India Organic certifications. It is perfect for organic supplement brands, health food manufacturers, and retailers looking for clean-label, traceable ingredients.`;
  }

  if (isWholesale) {
    body2 = `We specialize in bulk B2B supply — from 1 MT trial orders to full FCL (20' and 40') container loads. Custom packaging, private labeling, and consolidation services available. Reach out for our current bulk price list.`;
  }

  if (isConstipation) {
    body1 = `Psyllium husk is clinically proven to relieve constipation by adding soluble fiber that softens stool and promotes regular bowel movements. Our pharmaceutical-grade psyllium husk powder (98–99% purity) is suitable for OTC laxative formulations, fiber supplements, and functional foods.`;
  }

  if (isCholesterol) {
    body1 = `Clinical studies show psyllium husk can reduce LDL cholesterol by 5–10% when taken regularly. Our premium blonde psyllium husk is used by nutraceutical and pharma companies globally in heart-health supplements and functional food formulations.`;
  }

  if (isGut) {
    body1 = `Psyllium husk is one of the most effective prebiotic fibers for gut health, IBS management, and microbiome support. Our high-purity psyllium husk is used by digestive health supplement brands across Europe, USA, and Australia.`;
  }

  if (isDiabetes) {
    body1 = `Psyllium husk helps regulate blood sugar by slowing glucose absorption. Our pharma-grade psyllium husk powder is used in diabetic supplement formulations and functional foods targeting glycemic control.`;
  }

  if (isSupplier) {
    intro = `Amar Herbal Origins — India's trusted ${toTitleCase(kw)}. We export premium psyllium husk (Isabgol) directly from farms in Gujarat and Rajasthan to 30+ countries worldwide, with full compliance documentation and competitive B2B pricing.`;
  }

  return { intro, body1, body2 };
}

function getRelatedKeywords(kw: string) {
  const allKeywords = seoKeywords as { keyword: string; slug: string }[];
  const words = kw.toLowerCase().split(' ');

  // Find keywords that share at least 2 meaningful words
  const scored = allKeywords
    .filter(k => k.keyword !== kw)
    .map(k => {
      const kWords = k.keyword.toLowerCase().split(' ');
      const overlap = words.filter(w => w.length > 4 && kWords.includes(w)).length;
      return { ...k, overlap };
    })
    .filter(k => k.overlap >= 2)
    .sort((a, b) => b.overlap - a.overlap)
    .slice(0, 16);

  return scored;
}

export function buildFaq(kw: string) {
  const title = toTitleCase(kw);
  return [
    {
      q: `What is the standard purity of ${title} exported by Amar Herbal Origins?`,
      a: `At Amar Herbal Origins, we supply premium quality ${title} with purity grades ranging from 98% to 99% depending on buyer requirements. Every consignment undergoes rigorous laboratory testing to verify the purity percentage.`,
    },
    {
      q: `What is the Minimum Order Quantity (MOQ) for bulk shipments?`,
      a: `Our standard Minimum Order Quantity (MOQ) for wholesale exports is 1 Metric Ton (MT). However, we also cater to smaller trial shipments and can scale up to full container loads (FCL) of 20ft or 40ft containers.`,
    },
    {
      q: `Do you provide a Certificate of Analysis (COA) for ${title}?`,
      a: `Yes, absolute transparency is our hallmark. We provide a comprehensive Certificate of Analysis (COA) with every shipment of ${title}, covering key physical, chemical, and microbiological specifications like moisture, ash content, and purity.`,
    },
    {
      q: `What are the payment and shipping terms for bulk exports?`,
      a: `We offer flexible shipping terms including FOB (Free on Board) from Mundra or Nhava Sheva port, CIF (Cost, Insurance, and Freight), and CFR. Payment terms are typically structured through secure Letter of Credit (L/C) or Telegraphic Transfer (T/T).`,
    }
  ];
}

export function buildSpecs(kw: string) {
  const kl = kw.toLowerCase();
  const isOrganic = kl.includes('organic');
  const isPowder = kl.includes('powder');
  
  return [
    { parameter: 'Purity Grade', value: isOrganic ? '99.00% Certified Organic' : '99.00% / 98.00% Min' },
    { parameter: 'Product Type', value: isPowder ? 'Psyllium Husk Powder (40 to 100 Mesh)' : 'Whole Psyllium Husk' },
    { parameter: 'Moisture Content', value: '10.00% Max' },
    { parameter: 'Total Ash', value: '4.00% Max' },
    { parameter: 'Acid Insoluble Ash', value: '1.00% Max' },
    { parameter: 'Swell Volume', value: isPowder ? 'Over 50 ml/g' : 'Over 40 ml/g' },
    { parameter: 'Origin', value: 'Gujarat & Rajasthan (India)' },
    { parameter: 'Certifications', value: isOrganic ? 'USDA Organic, EU Certified, ISO 22000, FSSAI' : 'ISO 22000, FSSAI, Halal, Kosher' },
  ];
}
