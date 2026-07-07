import type { Metadata } from 'next';
import Link from 'next/link';
import { buildAlternates, buildCanonical } from '@/lib/seo-helpers';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const canonical = buildCanonical(locale, '/organic');
  return {
    title: 'Organic Psyllium Husk Exporter India 2026 | USDA NOP + EU Organic Certified | MOQ 500kg',
    description:
      'USDA NOP & EU Organic (2018/848) certified psyllium husk from Gujarat, India. Dedicated organic processing lines, full traceability. MOQ 500 kg. Free sample. B2B supply to supplement & health food brands in 30+ countries.',
    keywords: [
      'organic psyllium husk exporter india',
      'usda organic psyllium husk india',
      'eu organic psyllium husk supplier',
      'organic isabgol exporter',
      'certified organic psyllium husk bulk',
      'organic psyllium husk manufacturer india',
    ],
    alternates: { canonical, languages: buildAlternates('/organic') },
    openGraph: {
      title: 'Organic Psyllium Husk Exporter India | USDA NOP + EU Organic | Amar Herbal Origins',
      description: 'USDA & EU Organic certified psyllium husk from India. Dedicated organic lines, full traceability. MOQ 500 kg. Free sample.',
      url: canonical,
      siteName: 'Amar Herbal Origins',
      type: 'website',
    },
  };
}

const ORGANIC_CERTS = [
  { icon: '🌿', label: 'USDA NOP', sub: 'US Organic' },
  { icon: '🇪🇺', label: 'EU Organic', sub: '2018/848' },
  { icon: '🇮🇳', label: 'India Organic', sub: 'APEDA Certified' },
  { icon: '☯️', label: 'Non-GMO', sub: 'Declaration' },
  { icon: '🏛️', label: 'ISO 22000', sub: 'Food Safety' },
  { icon: '☪️', label: 'Halal', sub: 'Certified' },
];

const BENEFITS = [
  { icon: '🧪', title: 'Zero Synthetic Pesticides', desc: 'Grown without synthetic fertilizers, pesticides, or herbicides. Third-party residue testing with every batch.' },
  { icon: '🔗', title: 'Full Traceability', desc: 'Farm-to-port traceability documentation. Know exactly which farm your psyllium came from.' },
  { icon: '🏭', title: 'Dedicated Organic Lines', desc: 'Separate processing lines for organic grades ensure zero cross-contamination with conventional products.' },
  { icon: '📜', title: 'Valid Organic Certificates', desc: 'Current USDA NOP and EU Organic certificates provided with every shipment for your compliance records.' },
  { icon: '📊', title: 'Premium Purity', desc: '99%+ purity with full COA including heavy metals, pesticide residues, and microbiological analysis.' },
  { icon: '🌍', title: 'Global Market Acceptance', desc: 'USDA and EU certification accepted by health authorities in USA, UK, Germany, Australia, Canada, Japan, and 25+ markets.' },
];

const MARKETS = [
  { flag: '🇺🇸', name: 'USA', detail: 'USDA Organic supplements & health foods' },
  { flag: '🇩🇪', name: 'Germany', detail: 'EU Organic pharma & supplements' },
  { flag: '🇬🇧', name: 'UK', detail: 'Clean-label supplement brands' },
  { flag: '🇦🇺', name: 'Australia', detail: 'ACO Organic, TGA listed' },
  { flag: '🇨🇦', name: 'Canada', detail: 'CFIA recognized organic' },
  { flag: '🇫🇷', name: 'France', detail: 'EU Organic, parapharmacy' },
];

const FAQS = [
  {
    q: 'Is your organic psyllium husk USDA NOP certified?',
    a: 'Yes. Our organic psyllium husk is certified under the USDA National Organic Program (NOP). We provide valid USDA Organic certificates with every shipment for US buyer compliance.',
  },
  {
    q: 'Does your organic psyllium husk hold EU Organic certification?',
    a: 'Yes. We hold EU Organic certification under EU Regulation 2018/848, valid for distribution in all 27 EU member states. German, French, Dutch, and other EU buyers can use our certificate for their own organic product labeling.',
  },
  {
    q: 'What is the MOQ for organic psyllium husk?',
    a: 'MOQ for organic psyllium husk is 500 kg for trial orders and 1 MT for standard orders. FCL orders (20ft container ≈ 15–18 MT of organic grade) receive preferential pricing.',
  },
  {
    q: 'Is the organic psyllium processed separately from conventional grades?',
    a: 'Yes. Absolutely. We maintain dedicated, separate processing lines for organic psyllium husk. This ensures complete segregation from conventional grades and prevents cross-contamination. This is audited annually by our organic certification body.',
  },
  {
    q: 'Can your organic psyllium husk be used for private label organic supplement products?',
    a: 'Yes. Our certified organic psyllium is suitable for private label organic supplement products in all major markets. We provide full organic certification documentation for your own organic product registration and labeling.',
  },
];

export default async function OrganicPage({ params }: Props) {
  const { locale } = await params;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQS.map(f => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* ── Hero ── */}
      <section style={{ background: 'linear-gradient(135deg, #0d2210 0%, #1a3a1a 60%, #1f4020 100%)', padding: '5rem 0 4rem', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '-100px', right: '-100px', width: '500px', height: '500px', background: 'radial-gradient(circle, rgba(34,197,94,0.12) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ marginBottom: '1.5rem' }}>
            <Link href={`/${locale}`} style={{ color: '#86efac', fontSize: '0.85rem', textDecoration: 'none' }}>Home</Link>
            <span style={{ color: '#4ade80', margin: '0 0.5rem' }}>›</span>
            <span style={{ color: '#86efac', fontSize: '0.85rem' }}>Organic Psyllium Husk</span>
          </div>

          <div style={{ display: 'inline-block', background: 'rgba(34,197,94,0.15)', border: '1px solid rgba(34,197,94,0.4)', color: '#4ade80', padding: '0.35rem 1rem', borderRadius: '50px', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '1.5rem' }}>
            🌿 Certified Organic · USDA &amp; EU
          </div>

          <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(2rem, 4.5vw, 3.4rem)', fontWeight: 700, color: 'white', marginBottom: '1.25rem', lineHeight: 1.2, maxWidth: '800px' }}>
            Certified <em style={{ color: '#4ade80', fontStyle: 'italic' }}>Organic Psyllium Husk</em>{' '}
            Exporter from India
          </h1>
          <p style={{ color: '#bbf7d0', fontSize: '1.05rem', maxWidth: '640px', lineHeight: 1.75, marginBottom: '2.5rem' }}>
            USDA NOP &amp; EU Organic certified psyllium husk — grown without synthetic pesticides, processed in dedicated organic lines, fully traceable from Gujarat farms to your facility. Premium clean-label ingredient for supplement brands worldwide.
          </p>

          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <Link href={`/${locale}/contact`} style={{ background: '#16a34a', color: 'white', padding: '0.9rem 2.25rem', borderRadius: '50px', fontWeight: 700, textDecoration: 'none', fontSize: '0.95rem' }}>
              Request Organic Sample →
            </Link>
            <Link href={`/${locale}/exporter`} style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.2)', color: 'white', padding: '0.9rem 2.25rem', borderRadius: '50px', fontWeight: 700, textDecoration: 'none', fontSize: '0.95rem' }}>
              Export Information
            </Link>
          </div>
        </div>
      </section>

      {/* ── Certifications ── */}
      <section style={{ background: '#f0fdf4', padding: '4rem 0', borderTop: '1px solid #bbf7d0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <div className="section-label" style={{ marginBottom: '0.75rem', color: '#15803d' }}>ORGANIC CERTIFICATIONS</div>
            <h2 className="section-heading">
              Globally <em style={{ color: '#16a34a' }}>Recognized Organic</em> Standards
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '1rem' }}>
            {ORGANIC_CERTS.map(c => (
              <div key={c.label} style={{ background: 'white', border: '1px solid #bbf7d0', borderRadius: '14px', padding: '1.5rem 1rem', textAlign: 'center' }}>
                <div style={{ fontSize: '2rem', marginBottom: '0.6rem' }}>{c.icon}</div>
                <div style={{ fontWeight: 700, fontSize: '0.95rem', color: '#1a1a1a' }}>{c.label}</div>
                <div style={{ color: '#16a34a', fontSize: '0.75rem', fontWeight: 600, marginTop: '0.2rem' }}>{c.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Benefits ── */}
      <section style={{ background: 'white', padding: '5rem 0', borderTop: '1px solid #E5E0D8' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div className="section-label" style={{ marginBottom: '0.75rem' }}>WHY CHOOSE ORGANIC</div>
            <h2 className="section-heading">
              The <em style={{ color: '#D97706' }}>Organic Advantage</em>
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
            {BENEFITS.map(b => (
              <div key={b.title} style={{ background: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: '14px', padding: '2rem' }}>
                <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>{b.icon}</div>
                <h3 style={{ fontWeight: 700, fontSize: '1rem', color: '#1a1a1a', marginBottom: '0.6rem' }}>{b.title}</h3>
                <p style={{ color: '#374151', fontSize: '0.88rem', lineHeight: 1.7, margin: 0 }}>{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Target Markets ── */}
      <section style={{ background: '#FAF8F4', padding: '4rem 0', borderTop: '1px solid #E5E0D8' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <div className="section-label" style={{ marginBottom: '0.75rem' }}>EXPORT MARKETS</div>
            <h2 className="section-heading">
              Organic Markets <em style={{ color: '#D97706' }}>We Serve</em>
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem' }}>
            {MARKETS.map(m => (
              <div key={m.name} style={{ background: 'white', border: '1px solid #E5E0D8', borderRadius: '12px', padding: '1.25rem 1.5rem', display: 'flex', alignItems: 'center', gap: '0.875rem' }}>
                <span style={{ fontSize: '2rem' }}>{m.flag}</span>
                <div>
                  <div style={{ fontWeight: 700, fontSize: '0.95rem', color: '#1a1a1a' }}>{m.name}</div>
                  <div style={{ color: '#16a34a', fontSize: '0.75rem', fontWeight: 600 }}>{m.detail}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section style={{ background: 'white', padding: '5rem 0', borderTop: '1px solid #E5E0D8' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div className="section-label" style={{ marginBottom: '0.75rem' }}>ORGANIC BUYER FAQs</div>
            <h2 className="section-heading">Organic <em style={{ color: '#D97706' }}>Certification FAQs</em></h2>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {FAQS.map(faq => (
              <div key={faq.q} style={{ background: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: '14px', padding: '1.75rem' }}>
                <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.15rem', fontWeight: 700, color: '#1C1204', marginBottom: '0.75rem' }}>{faq.q}</h3>
                <p style={{ color: '#374151', lineHeight: 1.7, fontSize: '0.93rem', margin: 0 }}>{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ background: 'linear-gradient(135deg, #0d2210 0%, #1a3a1a 100%)', padding: '5rem 0', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(1.8rem, 4vw, 3rem)', fontWeight: 700, color: 'white', marginBottom: '1rem' }}>
            Source Certified Organic Psyllium
          </h2>
          <p style={{ color: '#bbf7d0', fontSize: '1.05rem', maxWidth: '500px', margin: '0 auto 2.5rem', lineHeight: 1.7 }}>
            Get organic certificate, COA, and sample within 48 hours. Trusted by organic supplement brands in 20+ countries.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href={`/${locale}/contact`} style={{ background: '#16a34a', color: 'white', padding: '1rem 2.5rem', borderRadius: '50px', fontWeight: 700, textDecoration: 'none', fontSize: '1rem' }}>
              Request Organic Sample →
            </Link>
            <Link href={`/${locale}/private-label`} style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.2)', color: 'white', padding: '1rem 2.5rem', borderRadius: '50px', fontWeight: 700, textDecoration: 'none', fontSize: '1rem' }}>
              Private Label Options
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
