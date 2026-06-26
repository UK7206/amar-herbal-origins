import type { Metadata } from 'next';
import Link from 'next/link';
import { buildAlternates, buildCanonical } from '@/lib/seo-helpers';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const canonical = buildCanonical(locale, '/private-label');
  return {
    title: 'Private Label Services India | Psyllium Husk, Spices, Herbs & Oils | Amar Herbal Origins',
    description:
      'Private label manufacturer from Gujarat, India. Launch your own brand of Psyllium Husk, Indian Spices, Herbs & Cold-Pressed Oils. Custom packaging, MOQ 500 kg. Organic available. ISO 22000 certified.',
    keywords: [
      'private label psyllium husk india',
      'private label herbal products india',
      'private label spices india',
      'custom label herbs manufacturer india',
      'private label isabgol',
      'custom label psyllium husk supplier',
      'oem herbal products india',
    ],
    alternates: { canonical, languages: buildAlternates('/private-label') },
    openGraph: {
      title: 'Private Label Services India | Psyllium Husk, Spices, Herbs & Oils | Amar Herbal Origins',
      description: 'Launch your own brand of Psyllium Husk, Spices & Herbs from India. Custom packaging, ISO 22000 certified. MOQ 500 kg.',
      url: canonical,
      siteName: 'Amar Herbal Origins',
      type: 'website',
    },
  };
}

const SERVICES = [
  { icon: '🏷️', title: 'Custom Label Design', desc: 'Your brand name, logo, and claims on premium packaging. Support for multilingual labels (English, German, French, Arabic, etc.).' },
  { icon: '📦', title: 'Flexible Packaging', desc: 'PP pouches, HDPE drums, glass jars, stick packs, teabag sachets, or bulk bags — all available in your custom branding.' },
  { icon: '🌿', title: 'Organic & Conventional', desc: 'Launch organic or conventional psyllium husk products. USDA/EU organic certifications provided with organic grade.' },
  { icon: '🔬', title: 'Quality Assured', desc: 'Full COA with every batch. Your QC team can specify additional testing requirements — we accommodate.' },
  { icon: '🚀', title: 'Fast Turnaround', desc: 'Label printing and packaging in 3–5 working days after artwork approval. Production lead time: 7–14 days.' },
  { icon: '📋', title: 'Regulatory Support', desc: 'We assist with product registration documentation for FDA, EFSA, TGA, Health Canada, and other regulatory authorities.' },
];

const PACK_FORMATS = [
  { format: 'Consumer Pouches', range: '100g, 200g, 500g, 1 kg', best: 'Retail & D2C brands' },
  { format: 'Bulk Bags (PP Woven)', range: '25 kg, 50 kg', best: 'Manufacturers, distributors' },
  { format: 'HDPE Drums', range: '25 kg, 50 kg', best: 'Pharma, nutraceuticals' },
  { format: 'Stick Packs / Sachets', range: '5g, 7g, 10g per stick', best: 'On-the-go supplement brands' },
  { format: 'IBC Tote Bags', range: '500 kg, 1000 kg', best: 'Large manufacturers' },
  { format: 'Custom formats', range: 'Per buyer specification', best: 'OEM projects' },
];

const STEPS = [
  { num: '01', title: 'Share Your Brief', desc: 'Tell us: product grade, desired packaging format, quantity, target market, and label requirements.' },
  { num: '02', title: 'Sample & Approval', desc: 'Receive a sample in your packaging format with proposed label artwork for approval.' },
  { num: '03', title: 'Final Production', desc: 'After your approval, production begins. Full QC at each stage.' },
  { num: '04', title: 'Shipment', desc: 'Your branded product is shipped with full export documentation and COA.' },
];

const FAQS = [
  {
    q: 'What is the minimum order quantity (MOQ) for private label psyllium husk?',
    a: 'Our MOQ for private label psyllium husk is 500 kg. For consumer retail packs (e.g., 500g pouches), this equals 1,000 units. For larger orders, we offer preferential per-unit pricing.',
  },
  {
    q: 'Can you design the label for our psyllium husk product?',
    a: 'Yes. We offer basic label design support at no charge. For complex multilingual designs (English, German, French, Arabic, etc.), we work with professional designers and can accommodate your brand guidelines.',
  },
  {
    q: 'Can I sell private label organic psyllium husk in the USA or EU?',
    a: 'Yes. Our USDA NOP and EU Organic certified organic psyllium husk is available for private label orders. We provide the organic certificate in your name or as a supporting certificate for your own organic product registration.',
  },
  {
    q: 'How long does it take to produce a private label order?',
    a: 'After artwork approval and payment, production takes 7–14 days. Label printing and packaging takes an additional 3–5 working days. Shipping time depends on your destination.',
  },
  {
    q: 'Do you sign NDA/NDAs for private label clients?',
    a: 'Yes. We routinely sign Non-Disclosure Agreements with private label clients and maintain strict confidentiality. We will not disclose your brand, product details, or sourcing relationship to any third party.',
  },
];

export default async function PrivateLabelPage({ params }: Props) {
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
          <div style={{ marginBottom: '1.5rem' }}>
            <Link href={`/${locale}`} style={{ color: '#9ca3af', fontSize: '0.85rem', textDecoration: 'none' }}>Home</Link>
            <span style={{ color: '#6b7280', margin: '0 0.5rem' }}>›</span>
            <span style={{ color: '#D97706', fontSize: '0.85rem' }}>Private Label Psyllium Husk</span>
          </div>

          <div style={{ display: 'inline-block', background: 'rgba(217,119,6,0.15)', border: '1px solid rgba(217,119,6,0.35)', color: '#D97706', padding: '0.35rem 1rem', borderRadius: '50px', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '1.5rem' }}>
            🏷️ Private Label · MOQ 500 kg
          </div>

          <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(2rem, 4.5vw, 3.4rem)', fontWeight: 700, color: 'white', marginBottom: '1.25rem', lineHeight: 1.2, maxWidth: '800px' }}>
            Private Label <em style={{ color: '#D97706', fontStyle: 'italic' }}>Psyllium Husk</em>{' '}
            — Launch Your Own Brand
          </h1>
          <p style={{ color: '#b8a98a', fontSize: '1.05rem', maxWidth: '640px', lineHeight: 1.75, marginBottom: '2.5rem' }}>
            Source premium psyllium husk from India and launch it under your own brand. Custom packaging formats, multilingual labels, organic or conventional grade — complete private label service from Gujarat's trusted psyllium manufacturer.
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', marginBottom: '2.5rem' }}>
            {['MOQ: 500 kg', 'Organic Available', 'Custom Labels', 'FDA/EU Docs', '7–14 Day Lead Time'].map(t => (
              <span key={t} style={{ background: 'rgba(217,119,6,0.12)', border: '1px solid rgba(217,119,6,0.3)', color: '#D97706', padding: '0.3rem 0.85rem', borderRadius: '50px', fontSize: '0.8rem', fontWeight: 600 }}>{t}</span>
            ))}
          </div>

          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <Link href={`/${locale}/contact`} style={{ background: '#D97706', color: 'white', padding: '0.9rem 2.25rem', borderRadius: '50px', fontWeight: 700, textDecoration: 'none', fontSize: '0.95rem' }}>
              Start Your Private Label →
            </Link>
            <a href="https://wa.me/919408465040?text=Hi, I want to discuss private label psyllium husk" target="_blank" rel="noopener noreferrer" style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.2)', color: 'white', padding: '0.9rem 2.25rem', borderRadius: '50px', fontWeight: 700, textDecoration: 'none', fontSize: '0.95rem' }}>
              💬 WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      {/* ── Services ── */}
      <section style={{ background: '#FAF8F4', padding: '5rem 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div className="section-label" style={{ marginBottom: '0.75rem' }}>PRIVATE LABEL SERVICES</div>
            <h2 className="section-heading">
              Everything You Need to <em style={{ color: '#D97706' }}>Launch Your Brand</em>
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
            {SERVICES.map(s => (
              <div key={s.title} style={{ background: 'white', border: '1px solid #E5E0D8', borderRadius: '14px', padding: '2rem' }}>
                <div style={{ fontSize: '2.2rem', marginBottom: '1rem' }}>{s.icon}</div>
                <h3 style={{ fontWeight: 700, fontSize: '1rem', color: '#1a1a1a', marginBottom: '0.6rem' }}>{s.title}</h3>
                <p style={{ color: '#6b7280', fontSize: '0.88rem', lineHeight: 1.7, margin: 0 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Packaging Formats ── */}
      <section style={{ background: 'white', padding: '5rem 0', borderTop: '1px solid #E5E0D8' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div className="section-label" style={{ marginBottom: '0.75rem' }}>PACKAGING OPTIONS</div>
            <h2 className="section-heading">
              Available <em style={{ color: '#D97706' }}>Pack Formats</em>
            </h2>
          </div>
          <div style={{ background: 'white', borderRadius: '20px', border: '1px solid #E5E0D8', overflow: 'hidden', maxWidth: '800px', margin: '0 auto' }}>
            {PACK_FORMATS.map((p, i) => (
              <div key={p.format} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1rem', padding: '1.1rem 2rem', borderBottom: i === PACK_FORMATS.length - 1 ? 'none' : '1px solid #E5E0D8', background: i % 2 === 0 ? '#FAF8F4' : 'white', alignItems: 'center' }}>
                <span style={{ fontWeight: 600, color: '#1C1204', fontSize: '0.9rem' }}>{p.format}</span>
                <span style={{ color: '#D97706', fontSize: '0.85rem', fontWeight: 600 }}>{p.range}</span>
                <span style={{ color: '#6b7280', fontSize: '0.82rem' }}>{p.best}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Process ── */}
      <section style={{ background: '#FAF8F4', padding: '5rem 0', borderTop: '1px solid #E5E0D8' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div className="section-label" style={{ marginBottom: '0.75rem' }}>HOW IT WORKS</div>
            <h2 className="section-heading">
              Private Label <em style={{ color: '#D97706' }}>Process</em>
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
            {STEPS.map(s => (
              <div key={s.num} style={{ background: 'white', border: '1px solid #E5E0D8', borderRadius: '14px', padding: '1.75rem' }}>
                <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '2.5rem', fontWeight: 800, color: 'rgba(217,119,6,0.15)', lineHeight: 1, marginBottom: '0.75rem' }}>{s.num}</div>
                <h3 style={{ fontWeight: 700, fontSize: '1rem', color: '#1a1a1a', marginBottom: '0.5rem' }}>{s.title}</h3>
                <p style={{ color: '#6b7280', fontSize: '0.88rem', lineHeight: 1.65, margin: 0 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section style={{ background: 'white', padding: '5rem 0', borderTop: '1px solid #E5E0D8' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div className="section-label" style={{ marginBottom: '0.75rem' }}>PRIVATE LABEL FAQs</div>
            <h2 className="section-heading">Common <em style={{ color: '#D97706' }}>Questions</em></h2>
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

      {/* ── Related ── */}
      <section style={{ background: '#FAF8F4', padding: '3rem 0', borderTop: '1px solid #E5E0D8' }}>
        <div className="container">
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center' }}>
            <span style={{ color: '#9ca3af', fontSize: '0.85rem', fontWeight: 600 }}>RELATED:</span>
            {[
              { href: `/${locale}/white-label`, label: '🏷️ White Label Services' },
              { href: `/${locale}/organic`, label: '🌿 Organic Psyllium' },
              { href: `/${locale}/exporter`, label: '🚢 Export Information' },
              { href: `/${locale}/packaging`, label: '📦 Packaging Options' },
            ].map(l => (
              <Link key={l.href} href={l.href} style={{ background: 'white', border: '1px solid #E5E0D8', padding: '0.4rem 1rem', borderRadius: '50px', fontSize: '0.85rem', color: '#374151', fontWeight: 500, textDecoration: 'none' }}>
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
            Ready to Launch Your Psyllium Brand?
          </h2>
          <p style={{ color: '#b8a98a', fontSize: '1.05rem', maxWidth: '500px', margin: '0 auto 2.5rem', lineHeight: 1.7 }}>
            Share your packaging requirements and get a private label quote within 24 hours.
          </p>
          <Link href={`/${locale}/contact`} style={{ background: '#D97706', color: 'white', padding: '1rem 2.5rem', borderRadius: '50px', fontWeight: 700, textDecoration: 'none', fontSize: '1rem', display: 'inline-block' }}>
            Get Private Label Quote →
          </Link>
        </div>
      </section>
    </main>
  );
}
