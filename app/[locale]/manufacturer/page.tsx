import type { Metadata } from 'next';
import Link from 'next/link';
import { buildAlternates, buildCanonical } from '@/lib/seo-helpers';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const canonical = buildCanonical(locale, '/manufacturer');
  return {
    title: 'Herbal Products Manufacturer India | Psyllium Husk, Spices, Herbs & Oils | Amar Herbal Origins',
    description:
      'ISO 22000 certified manufacturer of Psyllium Husk (Isabgol), Indian Spices, Herbs, Cold-Pressed Oils & Ready-to-Eat products in Gujarat, India. In-house QC lab. Farm-direct sourcing. B2B export to 30+ countries.',
    keywords: [
      'herbal products manufacturer india',
      'psyllium husk manufacturer india',
      'psyllium husk manufacturer gujarat',
      'isabgol manufacturer india',
      'spices manufacturer india',
      'herbal extract manufacturer gujarat',
      'agri products manufacturer exporter india',
    ],
    alternates: { canonical, languages: buildAlternates('/manufacturer') },
    openGraph: {
      title: 'Herbal Products Manufacturer India | Amar Herbal Origins',
      description: 'ISO 22000 certified manufacturer of Psyllium Husk, Spices, Herbs & Oils in Gujarat. Farm-direct, in-house lab. B2B export to 30+ countries.',
      url: canonical,
      siteName: 'Amar Herbal Origins',
      type: 'website',
    },
  };
}

const SPECS = [
  { parameter: 'Purity Grade', value: '99.00% / 98.00% Min' },
  { parameter: 'Swelling Factor', value: '≥ 40 ml/g (Whole) / ≥ 50 ml/g (Powder)' },
  { parameter: 'Moisture Content', value: '10.00% Max' },
  { parameter: 'Total Ash', value: '4.00% Max' },
  { parameter: 'Acid Insoluble Ash', value: '1.00% Max' },
  { parameter: 'Mesh Size (Powder)', value: '40 to 100 Mesh' },
  { parameter: 'Heavy Metals', value: 'Below EU/USP limits' },
  { parameter: 'Microbiology', value: 'Meets USP / EP monograph' },
  { parameter: 'Pesticide Residues', value: 'Below EU MRL' },
  { parameter: 'Origin', value: 'Gujarat & Rajasthan, India' },
];

const FACILITY = [
  { icon: '🏭', title: 'Dedicated Processing Lines', desc: 'Separate lines for conventional and organic grades prevent cross-contamination.' },
  { icon: '🔬', title: 'In-House QC Laboratory', desc: 'Every batch tested for purity, moisture, ash, swell volume, and microbial counts before dispatch.' },
  { icon: '📦', title: 'Flexible Packaging', desc: '25 kg PP bags, 50 kg bags, HDPE drums, IBC totes, and custom private-label consumer packs.' },
  { icon: '🌾', title: 'Farm-Direct Sourcing', desc: 'Contracted farming network across Unjha, Mehsana, Sidhpur (Gujarat) and Jodhpur (Rajasthan).' },
  { icon: '📋', title: 'Full Documentation', desc: 'COA, MSDS, phytosanitary certificate, EUR 1, Halal/Kosher, organic certs per shipment.' },
  { icon: '🚢', title: 'Export Expertise', desc: 'FOB Mundra & Nhava Sheva. 7–14 day lead time. 5+ years of international export experience.' },
];

const FAQS = [
  {
    q: 'Where is your psyllium husk manufacturing facility located?',
    a: 'Our processing facility is located in Gujarat, India — the world\'s leading psyllium husk production region. We source raw material directly from contracted farms in Unjha, Mehsana, Sidhpur (Gujarat) and Jodhpur (Rajasthan).',
  },
  {
    q: 'What quality standards does your manufacturing process comply with?',
    a: 'Our manufacturing process is ISO 22000 certified and complies with FSSAI regulations. Product specifications meet USP (United States Pharmacopeia) and European Pharmacopoeia (Ph. Eur.) monograph requirements for Ispaghula Husk.',
  },
  {
    q: 'What is the production capacity and lead time?',
    a: 'We have sufficient production capacity to fulfill both small trial orders (500 kg) and large FCL orders (20–40 MT). Standard lead time post-order confirmation is 7–14 days for production and quality testing.',
  },
  {
    q: 'Do you manufacture both conventional and organic psyllium husk?',
    a: 'Yes. We maintain separate manufacturing lines for conventional and USDA/EU Organic certified psyllium husk to prevent any cross-contamination. Both grades are available with full certification documentation.',
  },
];

export default async function ManufacturerPage({ params }: Props) {
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
      <section style={{ background: 'linear-gradient(135deg, #1C1204 0%, #2d1f08 60%, #3d2a0a 100%)', padding: '5rem 0 4rem', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '-100px', right: '-100px', width: '500px', height: '500px', background: 'radial-gradient(circle, rgba(217,119,6,0.12) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ marginBottom: '1.5rem' }}>
            <Link href={`/${locale}`} style={{ color: '#9ca3af', fontSize: '0.85rem', textDecoration: 'none' }}>Home</Link>
            <span style={{ color: '#6b7280', margin: '0 0.5rem' }}>›</span>
            <span style={{ color: '#D97706', fontSize: '0.85rem' }}>Psyllium Husk Manufacturer India</span>
          </div>

          <div style={{ display: 'inline-block', background: 'rgba(217,119,6,0.15)', border: '1px solid rgba(217,119,6,0.35)', color: '#D97706', padding: '0.35rem 1rem', borderRadius: '50px', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '1.5rem' }}>
            Manufacturing · Gujarat, India
          </div>

          <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(2rem, 4.5vw, 3.4rem)', fontWeight: 700, color: 'white', marginBottom: '1.25rem', lineHeight: 1.2, maxWidth: '760px' }}>
            Psyllium Husk <em style={{ color: '#D97706' }}>Manufacturer</em> in Gujarat, India
          </h1>
          <p style={{ color: '#b8a98a', fontSize: '1.05rem', maxWidth: '620px', lineHeight: 1.75, marginBottom: '2.5rem' }}>
            ISO 22000 certified psyllium husk manufacturing facility. Farm-direct sourcing, in-house QC lab, 98–99% purity. Supplying pharmaceutical, nutraceutical, and food companies across 30+ countries with full COA documentation.
          </p>

          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <Link href={`/${locale}/contact`} style={{ background: '#D97706', color: 'white', padding: '0.9rem 2.25rem', borderRadius: '50px', fontWeight: 700, textDecoration: 'none', fontSize: '0.95rem' }}>
              Request Sample &amp; Quote →
            </Link>
            <Link href={`/${locale}/exporter`} style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.2)', color: 'white', padding: '0.9rem 2.25rem', borderRadius: '50px', fontWeight: 700, textDecoration: 'none', fontSize: '0.95rem' }}>
              Export Information
            </Link>
          </div>
        </div>
      </section>

      {/* ── Facility Features ── */}
      <section style={{ background: '#FAF8F4', padding: '5rem 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div className="section-label" style={{ marginBottom: '0.75rem' }}>OUR FACILITY</div>
            <h2 className="section-heading">
              Manufacturing <em style={{ color: '#D97706' }}>Capabilities</em>
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
            {FACILITY.map(f => (
              <div key={f.title} style={{ background: 'white', border: '1px solid #E5E0D8', borderRadius: '14px', padding: '2rem' }}>
                <div style={{ fontSize: '2.2rem', marginBottom: '1rem' }}>{f.icon}</div>
                <h3 style={{ fontWeight: 700, fontSize: '1rem', color: '#1a1a1a', marginBottom: '0.6rem' }}>{f.title}</h3>
                <p style={{ color: '#6b7280', fontSize: '0.88rem', lineHeight: 1.7, margin: 0 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Technical Specifications ── */}
      <section style={{ background: 'white', padding: '5rem 0', borderTop: '1px solid #E5E0D8' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div className="section-label" style={{ marginBottom: '0.75rem' }}>PRODUCT SPECIFICATIONS</div>
            <h2 className="section-heading">
              Technical <em style={{ color: '#D97706' }}>Quality Standards</em>
            </h2>
          </div>
          <div style={{ background: 'white', borderRadius: '20px', border: '1px solid #E5E0D8', overflow: 'hidden', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)', maxWidth: '760px', margin: '0 auto' }}>
            {SPECS.map((spec, i) => (
              <div key={spec.parameter} style={{ display: 'flex', justifyContent: 'space-between', padding: '1.1rem 2rem', borderBottom: i === SPECS.length - 1 ? 'none' : '1px solid #E5E0D8', background: i % 2 === 0 ? '#FAF8F4' : 'white', gap: '1rem' }}>
                <span style={{ fontWeight: 600, color: '#1C1204', fontSize: '0.93rem' }}>{spec.parameter}</span>
                <span style={{ color: '#374151', fontSize: '0.93rem', textAlign: 'right', fontWeight: 500 }}>{spec.value}</span>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '2rem' }}>
            <Link href={`/${locale}/contact`} style={{ display: 'inline-block', background: '#D97706', color: 'white', padding: '0.8rem 2rem', borderRadius: '50px', fontWeight: 700, textDecoration: 'none', fontSize: '0.9rem' }}>
              Request Full Technical Dossier →
            </Link>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section style={{ background: '#FAF8F4', padding: '5rem 0', borderTop: '1px solid #E5E0D8' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div className="section-label" style={{ marginBottom: '0.75rem' }}>MANUFACTURER FAQs</div>
            <h2 className="section-heading">Common <em style={{ color: '#D97706' }}>Questions</em></h2>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {FAQS.map(faq => (
              <div key={faq.q} style={{ background: 'white', border: '1px solid #E5E0D8', borderRadius: '14px', padding: '1.75rem' }}>
                <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.15rem', fontWeight: 700, color: '#1C1204', marginBottom: '0.75rem' }}>{faq.q}</h3>
                <p style={{ color: '#4b5563', lineHeight: 1.7, fontSize: '0.93rem', margin: 0 }}>{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Related Pages ── */}
      <section style={{ background: 'white', padding: '3rem 0', borderTop: '1px solid #E5E0D8' }}>
        <div className="container">
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center' }}>
            <span style={{ color: '#9ca3af', fontSize: '0.85rem', fontWeight: 600 }}>RELATED:</span>
            {[
              { href: `/${locale}/exporter`, label: '🚢 Psyllium Husk Exporter' },
              { href: `/${locale}/organic`, label: '🌿 Organic Psyllium' },
              { href: `/${locale}/private-label`, label: '🏷️ Private Label' },
              { href: `/${locale}/product`, label: '📦 All Products' },
              { href: `/${locale}/quality`, label: '🔬 Quality & Certs' },
            ].map(l => (
              <Link key={l.href} href={l.href} style={{ background: '#FAF8F4', border: '1px solid #E5E0D8', padding: '0.4rem 1rem', borderRadius: '50px', fontSize: '0.85rem', color: '#374151', fontWeight: 500, textDecoration: 'none' }}>
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ background: 'linear-gradient(135deg, #1C1204 0%, #2d1f08 100%)', padding: '5rem 0', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(1.8rem, 4vw, 3rem)', fontWeight: 700, color: 'white', marginBottom: '1rem' }}>
            Get a Manufacturing Quote
          </h2>
          <p style={{ color: '#b8a98a', fontSize: '1.05rem', maxWidth: '480px', margin: '0 auto 2.5rem', lineHeight: 1.7 }}>
            Tell us your grade, quantity, and destination. We'll respond with pricing and a sample within 24 hours.
          </p>
          <Link href={`/${locale}/contact`} style={{ background: '#D97706', color: 'white', padding: '1rem 2.5rem', borderRadius: '50px', fontWeight: 700, textDecoration: 'none', fontSize: '1rem', display: 'inline-block' }}>
            Contact Our Team →
          </Link>
        </div>
      </section>
    </main>
  );
}
