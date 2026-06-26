import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Custom Packaging Solutions | Bulk & Retail Packaging | Amar Herbal Origins',
  description:
    'Premium packaging for psyllium husk, herbs, spices, oils & ready-to-eat products. Bulk PP bags, retail pouches, private label custom packaging from Gujarat, India.',
};

const bulkOptions = [
  { icon: '🛄', label: '25 kg PP Woven Bags', desc: 'Standard export-grade polypropylene bags — industry preferred for B2B.' },
  { icon: '🪣', label: '50 kg HDPE Drums', desc: 'High-density polyethylene drums ideal for oils and fine powders.' },
  { icon: '📦', label: 'Jumbo Bags (1 MT)', desc: 'Flexible intermediate bulk containers (FIBC) for large shipments.' },
  { icon: '🧺', label: 'Jute & Paper Bags', desc: 'Eco-friendly natural fibre bags for organic-certified products.' },
];

const retailOptions = [
  { icon: '🫙', label: 'Retail Pouches', desc: '100g, 200g, 500g, 1 kg zip-lock stand-up pouches.' },
  { icon: '📫', label: 'Glass Jars', desc: 'Amber or clear glass with tamper-evident lids for premium herbs & oils.' },
  { icon: '🥃', label: 'HDPE / PET Bottles', desc: 'Food-grade plastic bottles for powders and oils.' },
  { icon: '📋', label: 'Blister & Sachet', desc: 'Single-serve sachets and blister packs for pharma-grade products.' },
  { icon: '🎁', label: 'Gift Boxes', desc: 'Premium branded gift-box packaging for high-value product sets.' },
  { icon: '🌿', label: 'Biodegradable Packs', desc: 'Compostable kraft paper pouches for eco-conscious brands.' },
];

const materials = [
  { title: 'Food-Grade PP (Polypropylene)', desc: 'Moisture-resistant, UV-stable, widely accepted in pharma and food export markets.' },
  { title: 'Multi-Layer Laminate Film', desc: 'Barrier-grade laminated films for long shelf life — ideal for powder products.' },
  { title: 'HDPE (High-Density Polyethylene)', desc: 'Rigid, chemically resistant — preferred for oils and liquid extracts.' },
  { title: 'Kraft Paper (Natural / Brown)', desc: 'Recyclable, breathable packaging — used for dried herbs and organic products.' },
  { title: 'Aluminium Foil Pouches', desc: 'Maximum freshness protection for spice powders and extracts.' },
  { title: 'Glass (Amber & Clear)', desc: 'Premium feel, UV protection for cold-pressed oils and herbal extracts.' },
];

const process = [
  { step: '01', title: 'Share Requirements', desc: 'Tell us your product, quantity, target market, and branding guidelines.' },
  { step: '02', title: 'Packaging Consultation', desc: 'Our team recommends the best material and format for your product.' },
  { step: '03', title: 'Design & Artwork', desc: 'We create or apply your custom label artwork with all regulatory info.' },
  { step: '04', title: 'Sample Dispatch', desc: 'Physical sample with your branding shipped for your approval.' },
  { step: '05', title: 'Bulk Production', desc: 'Full-scale packaging production with QC at every stage.' },
  { step: '06', title: 'Export & Shipping', desc: 'Packed, documented, and shipped worldwide with all required certifications.' },
];

const categories = [
  { emoji: '🌾', name: 'Psyllium Husk', href: '/en/psyllium/white-label', note: 'Whole, Powder, Organic, Seeds' },
  { emoji: '🌿', name: 'Herbs', href: '/en/herbs/white-label', note: 'Moringa, Mint, Amla, Oregano, Curry Leaves' },
  { emoji: '🌶️', name: 'Spices', href: '/en/spices/white-label', note: 'Cumin, Turmeric, Coriander, Fenugreek' },
  { emoji: '🫙', name: 'Cold-Pressed Oils', href: '/en/oils/white-label', note: 'Castor Oil, Karanja Oil' },
  { emoji: '🍘', name: 'Ready-to-Eat', href: '/en/ready-to-eat/white-label', note: 'Khakhra & Snacks' },
];

export default function PackagingPage() {
  return (
    <main>
      {/* ── Hero ── */}
      <section style={{ background: 'linear-gradient(135deg, #1C1204 0%, #2d1f08 60%, #3d2a0a 100%)', padding: '5rem 0 4rem', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '-100px', right: '-100px', width: '500px', height: '500px', background: 'radial-gradient(circle, rgba(217,119,6,0.15) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
          <div style={{ display: 'inline-block', background: 'rgba(217,119,6,0.15)', border: '1px solid rgba(217,119,6,0.35)', color: '#D97706', padding: '0.35rem 1rem', borderRadius: '50px', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '1.5rem' }}>
            Packaging Solutions
          </div>
          <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(2.2rem, 5vw, 3.6rem)', fontWeight: 700, color: 'white', marginBottom: '1.25rem', lineHeight: 1.15 }}>
            Export-Grade Packaging for{' '}
            <em style={{ color: '#D97706', fontStyle: 'italic' }}>Every Product</em>
          </h1>
          <p style={{ color: '#b8a98a', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto 2.5rem', lineHeight: 1.7 }}>
            From bulk 25 kg PP bags to retail-ready branded pouches — we offer complete custom
            packaging for psyllium husk, herbs, spices, oils, and ready-to-eat products.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="https://wa.me/919408465040?text=Hi, I need custom packaging information for your products." target="_blank" rel="noopener noreferrer"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '0.6rem', background: '#25D366', color: 'white', padding: '0.85rem 2rem', borderRadius: '50px', fontWeight: 700, fontSize: '0.95rem', textDecoration: 'none' }}>
              💬 Discuss Packaging Needs
            </a>
            <Link href="/en/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.6rem', background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.25)', color: 'white', padding: '0.85rem 2rem', borderRadius: '50px', fontWeight: 700, fontSize: '0.95rem', textDecoration: 'none' }}>
              📧 Email Inquiry
            </Link>
          </div>
        </div>
      </section>

      {/* ── Packaged Products ── */}
      <section style={{ background: 'white', padding: '4rem 0', borderBottom: '1px solid #E5E0D8' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <div style={{ color: '#D97706', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>PRODUCTS WE PACKAGE</div>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(1.6rem, 3.5vw, 2.4rem)', fontWeight: 700, color: '#1a1a1a' }}>
              White Label Available for All Categories
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(190px, 1fr))', gap: '1rem', maxWidth: '960px', margin: '0 auto' }}>
            {categories.map(cat => (
              <Link key={cat.name} href={cat.href}
                style={{ display: 'flex', flexDirection: 'column', padding: '1.5rem', background: '#FAF8F4', border: '1.5px solid #E5E0D8', borderRadius: '14px', textDecoration: 'none', transition: 'all 0.2s' }}>
                <span style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>{cat.emoji}</span>
                <span style={{ fontWeight: 700, fontSize: '0.95rem', color: '#1a1a1a', marginBottom: '0.25rem' }}>{cat.name}</span>
                <span style={{ fontSize: '0.75rem', color: '#6b7280', lineHeight: 1.5 }}>{cat.note}</span>
                <span style={{ marginTop: '0.75rem', fontSize: '0.8rem', color: '#D97706', fontWeight: 600 }}>White Label →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Bulk Packaging ── */}
      <section style={{ background: '#FAF8F4', padding: '5rem 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div style={{ color: '#D97706', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>B2B EXPORT</div>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(1.6rem, 3.5vw, 2.4rem)', fontWeight: 700, color: '#1a1a1a', marginBottom: '0.75rem' }}>Bulk Packaging Options</h2>
            <p style={{ color: '#6b7280', fontSize: '1rem', maxWidth: '500px', margin: '0 auto' }}>Industry-standard formats accepted globally by pharma, food, and nutraceutical importers.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.25rem' }}>
            {bulkOptions.map(opt => (
              <div key={opt.label} style={{ background: 'white', borderRadius: '14px', padding: '1.75rem', border: '1px solid #E5E0D8', boxShadow: '0 2px 12px rgba(0,0,0,0.04)' }}>
                <div style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>{opt.icon}</div>
                <h3 style={{ fontWeight: 700, fontSize: '1rem', color: '#1a1a1a', marginBottom: '0.5rem' }}>{opt.label}</h3>
                <p style={{ color: '#6b7280', fontSize: '0.88rem', lineHeight: 1.6 }}>{opt.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Retail Packaging ── */}
      <section style={{ background: 'white', padding: '5rem 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div style={{ color: '#D97706', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>PRIVATE LABEL</div>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(1.6rem, 3.5vw, 2.4rem)', fontWeight: 700, color: '#1a1a1a', marginBottom: '0.75rem' }}>Retail & White Label Packaging</h2>
            <p style={{ color: '#6b7280', fontSize: '1rem', maxWidth: '520px', margin: '0 auto' }}>Custom-branded retail packs for your D2C, e-commerce, pharmacy, or health store distribution.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.25rem' }}>
            {retailOptions.map(opt => (
              <div key={opt.label} style={{ background: '#FAF8F4', borderRadius: '14px', padding: '1.75rem', border: '1px solid #E5E0D8' }}>
                <div style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>{opt.icon}</div>
                <h3 style={{ fontWeight: 700, fontSize: '1rem', color: '#1a1a1a', marginBottom: '0.5rem' }}>{opt.label}</h3>
                <p style={{ color: '#6b7280', fontSize: '0.88rem', lineHeight: 1.6 }}>{opt.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Materials ── */}
      <section style={{ background: '#FAF8F4', padding: '5rem 0', borderTop: '1px solid #E5E0D8' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div style={{ color: '#D97706', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>QUALITY MATERIALS</div>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(1.6rem, 3.5vw, 2.4rem)', fontWeight: 700, color: '#1a1a1a' }}>Packaging Materials We Use</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.25rem', maxWidth: '960px', margin: '0 auto' }}>
            {materials.map(mat => (
              <div key={mat.title} style={{ background: 'white', borderRadius: '14px', padding: '1.5rem', border: '1px solid #E5E0D8', display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#D97706', flexShrink: 0, marginTop: '6px' }} />
                <div>
                  <div style={{ fontWeight: 700, fontSize: '0.95rem', color: '#1a1a1a', marginBottom: '0.4rem' }}>{mat.title}</div>
                  <p style={{ color: '#6b7280', fontSize: '0.88rem', lineHeight: 1.6, margin: 0 }}>{mat.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Process ── */}
      <section style={{ background: 'white', padding: '5rem 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div style={{ color: '#D97706', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>HOW IT WORKS</div>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(1.6rem, 3.5vw, 2.4rem)', fontWeight: 700, color: '#1a1a1a' }}>Our Packaging Process</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1.25rem' }}>
            {process.map(p => (
              <div key={p.step} style={{ background: '#FAF8F4', borderRadius: '14px', padding: '1.5rem', border: '1px solid #E5E0D8', position: 'relative' }}>
                <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '2.5rem', fontWeight: 700, color: '#D9770622', lineHeight: 1, marginBottom: '0.5rem' }}>{p.step}</div>
                <h3 style={{ fontWeight: 700, fontSize: '0.95rem', color: '#1a1a1a', marginBottom: '0.5rem' }}>{p.title}</h3>
                <p style={{ color: '#6b7280', fontSize: '0.85rem', lineHeight: 1.6, margin: 0 }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ background: 'linear-gradient(135deg, #1C1204 0%, #2d1f08 100%)', padding: '5rem 0', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', bottom: '-60px', right: '-60px', width: '300px', height: '300px', background: 'radial-gradient(circle, rgba(217,119,6,0.12) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 700, color: 'white', marginBottom: '1rem' }}>
            Ready to Design Your Packaging?
          </h2>
          <p style={{ color: '#b8a98a', fontSize: '1rem', maxWidth: '480px', margin: '0 auto 2.5rem', lineHeight: 1.7 }}>
            Share your product and branding requirements. Our team will guide you through
            the packaging process and send a sample before bulk production.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="https://wa.me/919408465040?text=Hi, I want to discuss custom packaging for your products." target="_blank" rel="noopener noreferrer"
              style={{ background: '#25D366', color: 'white', padding: '0.9rem 2.25rem', borderRadius: '50px', fontWeight: 700, textDecoration: 'none', fontSize: '0.95rem' }}>
              💬 WhatsApp Now
            </a>
            <Link href="/en/contact" style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.2)', color: 'white', padding: '0.9rem 2.25rem', borderRadius: '50px', fontWeight: 700, textDecoration: 'none', fontSize: '0.95rem' }}>
              📧 Send Inquiry
            </Link>
            <Link href="/en/white-label" style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.2)', color: 'white', padding: '0.9rem 2.25rem', borderRadius: '50px', fontWeight: 700, textDecoration: 'none', fontSize: '0.95rem' }}>
              🏷️ White Label Services →
            </Link>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .container { padding-left: 1rem; padding-right: 1rem; }
        }
      `}</style>
    </main>
  );
}