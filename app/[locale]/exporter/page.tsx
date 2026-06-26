import type { Metadata } from 'next';
import Link from 'next/link';
import { buildAlternates, buildCanonical } from '@/lib/seo-helpers';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const canonical = buildCanonical(locale, '/exporter');
  return {
    title: 'Herbal Products Exporter from India | Psyllium Husk, Spices, Herbs, Oils | Amar Herbal Origins',
    description:
      'Amar Herbal Origins — Gujarat-based exporter of Psyllium Husk, Indian Spices, Herbs, Cold-Pressed Oils & Ready-to-Eat foods. ISO 22000, FSSAI, APEDA certified. B2B bulk supply to 30+ countries. Free sample.',
    keywords: [
      'herbal products exporter india',
      'psyllium husk exporter india',
      'indian spices exporter',
      'herbs exporter india',
      'cold pressed oil exporter india',
      'isabgol exporter india',
      'agri products exporter gujarat',
      'bulk exporter india b2b',
    ],
    alternates: { canonical, languages: buildAlternates('/exporter') },
    openGraph: {
      title: 'Herbal Products Exporter from India | Amar Herbal Origins',
      description: 'Gujarat-based exporter of Psyllium Husk, Spices, Herbs & Oils. ISO 22000 certified. Bulk B2B supply to 30+ countries. Free sample available.',
      url: canonical,
      siteName: 'Amar Herbal Origins',
      type: 'website',
    },
  };
}

const CERTIFICATIONS = [
  { icon: '🏛️', label: 'ISO 22000', sub: 'Food Safety' },
  { icon: '🇮🇳', label: 'FSSAI', sub: 'Certified' },
  { icon: '🌿', label: 'USDA Organic', sub: 'Available' },
  { icon: '☪️', label: 'Halal', sub: 'Certified' },
  { icon: '✡️', label: 'Kosher', sub: 'Certified' },
  { icon: '📋', label: 'IEC Holder', sub: 'APEDA Reg.' },
];

const EXPORT_COUNTRIES = [
  { flag: '🇺🇸', name: 'USA' },
  { flag: '🇩🇪', name: 'Germany' },
  { flag: '🇬🇧', name: 'UK' },
  { flag: '🇦🇪', name: 'UAE' },
  { flag: '🇦🇺', name: 'Australia' },
  { flag: '🇨🇦', name: 'Canada' },
  { flag: '🇯🇵', name: 'Japan' },
  { flag: '🇫🇷', name: 'France' },
  { flag: '🇳🇱', name: 'Netherlands' },
  { flag: '🇸🇦', name: 'Saudi Arabia' },
  { flag: '🇸🇬', name: 'Singapore' },
  { flag: '🇰🇷', name: 'South Korea' },
];

const GRADES = [
  { name: 'Psyllium Husk Powder', purity: '98–99% Purity', mesh: '40–100 Mesh', use: 'Pharma, Nutraceuticals' },
  { name: 'Whole Psyllium Husk', purity: '99% Purity', mesh: 'Natural Cut', use: 'Food, Supplements' },
  { name: 'Organic Psyllium Husk', purity: '99% Purity', mesh: 'Whole / Powder', use: 'Organic Brands' },
  { name: 'Psyllium Seeds', purity: '98% Purity', mesh: 'Sorted & Cleaned', use: 'Seed Oil, Industry' },
  { name: 'Blonde Psyllium Husk', purity: '99% Purity', mesh: 'Premium Grade', use: 'Supplements, OTC' },
];

const PROCESS = [
  { step: '01', title: 'Send Enquiry', desc: 'Share your grade, quantity, and destination. We respond within 24 hours.' },
  { step: '02', title: 'Free Sample', desc: 'Receive a 100–500g sample with full COA for your lab testing.' },
  { step: '03', title: 'Quote & Terms', desc: 'Receive FOB / CIF pricing, payment terms, and shipping timeline.' },
  { step: '04', title: 'Production & QC', desc: 'Your order is produced to spec and tested batch-by-batch in our lab.' },
  { step: '05', title: 'Shipment & Docs', desc: 'Export documentation, COA, packing list, and tracking provided.' },
];

const FAQS = [
  {
    q: 'What is the minimum order quantity (MOQ) for psyllium husk exports?',
    a: 'Our standard MOQ is 1 Metric Ton (MT). For first-time buyers we can arrange trial shipments of 500 kg. Full container loads (FCL — 20ft ≈ 18–20 MT) receive preferential pricing.',
  },
  {
    q: 'What certifications do you provide with psyllium husk exports?',
    a: 'Every shipment comes with: Certificate of Analysis (COA), FSSAI certificate, ISO 22000 certification, Phytosanitary Certificate, Country of Origin Certificate (FIEO / APEDA), and Halal / Kosher certificates upon request.',
  },
  {
    q: 'Which countries do you export psyllium husk to?',
    a: 'We currently export to 30+ countries including USA, Germany, UK, UAE, Australia, Canada, Japan, France, Netherlands, Saudi Arabia, Singapore, South Korea, Italy, Spain, Poland, and more.',
  },
  {
    q: 'What shipping terms do you offer for psyllium husk exports?',
    a: 'We offer FOB (Free on Board) from Mundra or Nhava Sheva port. CIF (Cost, Insurance & Freight) and CFR are also available. Transit times range from 7 days (UAE) to 28 days (USA East Coast).',
  },
  {
    q: 'Can you supply USDA Organic certified psyllium husk for export?',
    a: 'Yes. We supply USDA NOP and EU Organic certified psyllium husk. Our organic range is processed in dedicated organic lines with full certification documentation provided.',
  },
];

export default async function ExporterPage({ params }: Props) {
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
        <div style={{ position: 'absolute', top: '-100px', right: '-100px', width: '500px', height: '500px', background: 'radial-gradient(circle, rgba(217,119,6,0.15) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          {/* Breadcrumb */}
          <div style={{ marginBottom: '1.5rem' }}>
            <Link href={`/${locale}`} style={{ color: '#9ca3af', fontSize: '0.85rem', textDecoration: 'none' }}>Home</Link>
            <span style={{ color: '#6b7280', margin: '0 0.5rem', fontSize: '0.85rem' }}>›</span>
            <span style={{ color: '#D97706', fontSize: '0.85rem' }}>Psyllium Husk Exporter India</span>
          </div>

          <div style={{ display: 'inline-block', background: 'rgba(217,119,6,0.15)', border: '1px solid rgba(217,119,6,0.35)', color: '#D97706', padding: '0.35rem 1rem', borderRadius: '50px', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '1.5rem' }}>
            B2B Export · Gujarat, India
          </div>

          <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(2rem, 4.5vw, 3.4rem)', fontWeight: 700, color: 'white', marginBottom: '1.25rem', lineHeight: 1.2, maxWidth: '800px' }}>
            Psyllium Husk Manufacturer &amp;{' '}
            <em style={{ color: '#D97706', fontStyle: 'italic' }}>Exporter from India</em>
          </h1>
          <p style={{ color: '#b8a98a', fontSize: '1.05rem', maxWidth: '640px', lineHeight: 1.75, marginBottom: '2rem' }}>
            Amar Herbal Origins is India's trusted psyllium husk (Isabgol) exporter — farm-direct from Gujarat &amp; Rajasthan, ISO 22000 certified, with full COA documentation. Supplying bulk B2B orders to pharma, nutraceutical, and food companies in 30+ countries.
          </p>

          {/* Country flags strip */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem', marginBottom: '2.5rem' }}>
            {EXPORT_COUNTRIES.map(c => (
              <span key={c.name} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem', background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.1)', padding: '0.3rem 0.75rem', borderRadius: '50px', fontSize: '0.78rem', color: '#e5d6b8', fontWeight: 500 }}>
                {c.flag} {c.name}
              </span>
            ))}
          </div>

          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <Link href={`/${locale}/contact`} style={{ background: '#D97706', color: 'white', padding: '0.9rem 2.25rem', borderRadius: '50px', fontWeight: 700, textDecoration: 'none', fontSize: '0.95rem' }}>
              Request a Quote →
            </Link>
            <a href="https://wa.me/919408465040?text=Hi, I need a quote for psyllium husk export" target="_blank" rel="noopener noreferrer" style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.2)', color: 'white', padding: '0.9rem 2.25rem', borderRadius: '50px', fontWeight: 700, textDecoration: 'none', fontSize: '0.95rem' }}>
              💬 WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      {/* ── Trust Stats ── */}
      <section style={{ background: '#1C1204', padding: '2.5rem 0', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '1px', background: 'rgba(255,255,255,0.06)', borderRadius: '12px', overflow: 'hidden' }}>
            {[
              { val: '5+', label: 'Years Exporting' },
              { val: '30+', label: 'Countries' },
              { val: '5K MT', label: 'Exported' },
              { val: '99%', label: 'Purity Grade' },
              { val: '24h', label: 'Response Time' },
            ].map(s => (
              <div key={s.label} style={{ background: '#1C1204', padding: '1.5rem', textAlign: 'center' }}>
                <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '2rem', fontWeight: 800, color: '#D97706', lineHeight: 1 }}>{s.val}</div>
                <div style={{ color: '#9ca3af', fontSize: '0.75rem', marginTop: '0.3rem' }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Certifications ── */}
      <section style={{ background: '#FAF8F4', padding: '4rem 0', borderTop: '1px solid #E5E0D8' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <div className="section-label" style={{ marginBottom: '0.75rem' }}>CERTIFICATIONS & COMPLIANCE</div>
            <h2 className="section-heading">
              Export-Ready <em style={{ color: '#D97706' }}>Documentation</em>
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '1rem' }}>
            {CERTIFICATIONS.map(c => (
              <div key={c.label} style={{ background: 'white', border: '1px solid #E5E0D8', borderRadius: '14px', padding: '1.5rem 1rem', textAlign: 'center' }}>
                <div style={{ fontSize: '2rem', marginBottom: '0.6rem' }}>{c.icon}</div>
                <div style={{ fontWeight: 700, fontSize: '0.95rem', color: '#1a1a1a' }}>{c.label}</div>
                <div style={{ color: '#D97706', fontSize: '0.75rem', fontWeight: 600, marginTop: '0.2rem' }}>{c.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Product Grades ── */}
      <section style={{ background: 'white', padding: '5rem 0', borderTop: '1px solid #E5E0D8' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div className="section-label" style={{ marginBottom: '0.75rem' }}>AVAILABLE GRADES</div>
            <h2 className="section-heading">
              Psyllium Husk <em style={{ color: '#D97706' }}>Product Range</em>
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
            {GRADES.map((g, i) => (
              <div key={g.name} style={{ background: i === 0 ? '#1C1204' : '#FAF8F4', border: `1px solid ${i === 0 ? 'transparent' : '#E5E0D8'}`, borderRadius: '16px', padding: '2rem' }}>
                <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.25rem', fontWeight: 700, color: i === 0 ? 'white' : '#1a1a1a', marginBottom: '1rem' }}>{g.name}</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  {[['Purity', g.purity], ['Mesh / Grade', g.mesh], ['Best For', g.use]].map(([k, v]) => (
                    <div key={k} style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.88rem' }}>
                      <span style={{ color: i === 0 ? '#9ca3af' : '#6b7280' }}>{k}</span>
                      <span style={{ color: i === 0 ? '#D97706' : '#D97706', fontWeight: 700 }}>{v}</span>
                    </div>
                  ))}
                </div>
                {i === 0 && (
                  <Link href={`/${locale}/contact`} style={{ display: 'inline-block', marginTop: '1.5rem', background: '#D97706', color: 'white', padding: '0.6rem 1.5rem', borderRadius: '50px', fontWeight: 700, textDecoration: 'none', fontSize: '0.85rem' }}>
                    Request Quote →
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Export Process ── */}
      <section style={{ background: '#FAF8F4', padding: '5rem 0', borderTop: '1px solid #E5E0D8' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div className="section-label" style={{ marginBottom: '0.75rem' }}>HOW IT WORKS</div>
            <h2 className="section-heading">
              Our Export <em style={{ color: '#D97706' }}>Process</em>
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
            {PROCESS.map((p, i) => (
              <div key={p.step} style={{ background: 'white', border: '1px solid #E5E0D8', borderRadius: '14px', padding: '1.75rem', position: 'relative' }}>
                <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '2.5rem', fontWeight: 800, color: 'rgba(217,119,6,0.15)', lineHeight: 1, marginBottom: '0.75rem' }}>{p.step}</div>
                <h3 style={{ fontWeight: 700, fontSize: '1rem', color: '#1a1a1a', marginBottom: '0.5rem' }}>{p.title}</h3>
                <p style={{ color: '#6b7280', fontSize: '0.88rem', lineHeight: 1.65, margin: 0 }}>{p.desc}</p>
                {i < PROCESS.length - 1 && (
                  <div style={{ position: 'absolute', right: '-0.75rem', top: '50%', transform: 'translateY(-50%)', color: '#D97706', fontWeight: 700, fontSize: '1.2rem', display: 'none' }}>›</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section style={{ background: 'white', padding: '5rem 0', borderTop: '1px solid #E5E0D8' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div className="section-label" style={{ marginBottom: '0.75rem' }}>FREQUENTLY ASKED</div>
            <h2 className="section-heading">Export <em style={{ color: '#D97706' }}>FAQs</em></h2>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {FAQS.map(faq => (
              <div key={faq.q} style={{ background: '#FAF8F4', border: '1px solid #E5E0D8', borderRadius: '14px', padding: '1.75rem' }}>
                <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.15rem', fontWeight: 700, color: '#1C1204', marginBottom: '0.75rem' }}>{faq.q}</h3>
                <p style={{ color: '#4b5563', lineHeight: 1.7, fontSize: '0.93rem', margin: 0 }}>{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Internal Links to Country Pages ── */}
      <section style={{ background: '#FAF8F4', padding: '4rem 0', borderTop: '1px solid #E5E0D8' }}>
        <div className="container">
          <div className="section-label" style={{ marginBottom: '0.75rem' }}>COUNTRY-SPECIFIC PAGES</div>
          <h2 className="section-heading" style={{ marginBottom: '2rem' }}>
            Explore by <em style={{ color: '#D97706' }}>Market</em>
          </h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
            {EXPORT_COUNTRIES.map(c => (
              <Link key={c.name} href={`/${locale}/suppliers/${c.name.toLowerCase().replace(/\s+/g, '-')}`} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', background: 'white', border: '1px solid #E5E0D8', padding: '0.5rem 1.1rem', borderRadius: '50px', fontSize: '0.85rem', color: '#374151', fontWeight: 500, textDecoration: 'none' }}>
                {c.flag} {c.name}
              </Link>
            ))}
            <Link href={`/${locale}/suppliers`} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', background: '#D97706', color: 'white', padding: '0.5rem 1.1rem', borderRadius: '50px', fontSize: '0.85rem', fontWeight: 600, textDecoration: 'none' }}>
              View All 25 Markets →
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ background: 'linear-gradient(135deg, #1C1204 0%, #2d1f08 100%)', padding: '5rem 0', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(1.8rem, 4vw, 3rem)', fontWeight: 700, color: 'white', marginBottom: '1rem' }}>
            Ready to Import Psyllium Husk?
          </h2>
          <p style={{ color: '#b8a98a', fontSize: '1.05rem', maxWidth: '500px', margin: '0 auto 2.5rem', lineHeight: 1.7 }}>
            Get pricing, samples, and COA documents within 24 hours. Trusted by buyers in 30+ countries.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href={`/${locale}/contact`} style={{ background: '#D97706', color: 'white', padding: '1rem 2.5rem', borderRadius: '50px', fontWeight: 700, textDecoration: 'none', fontSize: '1rem' }}>
              Contact Our Export Team →
            </Link>
            <Link href={`/${locale}/product`} style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.2)', color: 'white', padding: '1rem 2.5rem', borderRadius: '50px', fontWeight: 700, textDecoration: 'none', fontSize: '1rem' }}>
              View Products
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
