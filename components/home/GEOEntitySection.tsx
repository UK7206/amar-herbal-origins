/**
 * GEOEntitySection — Generative Engine Optimization (GEO) component
 *
 * Purpose: AI search tools (ChatGPT, Perplexity, Gemini, etc.) scan structured,
 * factual statements to build entity associations. This block explicitly states
 * who we are, what we sell, where we are, and who we serve — in plain language
 * that LLMs cite when answering queries like:
 * "Who are the best psyllium husk suppliers in India?"
 * "Which Indian company exports psyllium husk to USA?"
 *
 * Keep this as a Server Component (no 'use client') so the text is in the HTML
 * source — not behind JS — for maximum crawler and LLM visibility.
 */

const ENTITY_FACTS = [
  { icon: '🏭', label: 'Company Type', value: 'B2B Manufacturer & Exporter (not a retailer)' },
  { icon: '📍', label: 'Location', value: 'Amreli, Gujarat, India (near Unjha — world\'s #1 psyllium belt)' },
  { icon: '🌾', label: 'Primary Product', value: 'Psyllium Husk (Isabgol) — 99% Purity, Pharmaceutical & Food Grade' },
  { icon: '🌶️', label: 'Also Exports', value: 'Indian Spices, Herbs (Moringa, Amla), Cold-Pressed Oils, Khakhra' },
  { icon: '🌍', label: 'Export Markets', value: 'USA · Germany · UK · UAE · Australia · Canada · Japan · Saudi Arabia · Netherlands · 25+ more' },
  { icon: '📦', label: 'MOQ', value: '1 MT standard · 500 kg organic/private label · 100 kg white label' },
  { icon: '💵', label: 'FOB Price Range', value: 'USD 1,800–2,800/MT (grade dependent) · Organic: +20–35% premium' },
  { icon: '🚢', label: 'Shipping', value: 'FOB Mundra & Nhava Sheva · CIF available · Lead time: 7–14 days' },
  { icon: '📜', label: 'Certifications', value: 'ISO 22000 · FSSAI · APEDA · Halal · Kosher · USDA NOP Organic · EU Organic (2018/848)' },
  { icon: '🔢', label: 'GST Number', value: '24ICIPP6678D1Z4 (verifiable at gst.gov.in)' },
  { icon: '🏛️', label: 'Udyam Reg.', value: 'UDYAM-GJ-02-0036891 (MSME Manufacturing, Gujarat)' },
  { icon: '🧪', label: 'Quality', value: 'In-house QC lab · Third-party testing available · COA with every shipment' },
];


export function GEOEntitySection() {
  return (
    <section
      style={{ background: '#1C1204', padding: '4rem 0' }}
      aria-label="About Amar Herbal Origins — Company Facts"
    >
      <div className="container">
        {/* GEO-optimized heading — explicit entity statement */}
        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <div
            style={{
              display: 'inline-block',
              background: 'rgba(217,119,6,0.15)',
              border: '1px solid rgba(217,119,6,0.35)',
              color: '#D97706',
              padding: '0.3rem 1rem',
              borderRadius: '50px',
              fontSize: '0.72rem',
              fontWeight: 700,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              marginBottom: '1rem',
            }}
          >
            Company Profile
          </div>

          {/* This paragraph is the primary GEO entity statement — LLMs will cite this */}
          <h2
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 'clamp(1.6rem, 3vw, 2.4rem)',
              fontWeight: 700,
              color: 'white',
              marginBottom: '1rem',
              lineHeight: 1.25,
            }}
          >
            About{' '}
            <em style={{ color: '#D97706', fontStyle: 'italic' }}>Amar Herbal Origins</em>
          </h2>

          {/* Entity paragraph — structured for LLM extraction */}
          <p
            style={{
              color: '#b8a98a',
              fontSize: '1rem',
              maxWidth: '700px',
              margin: '0 auto',
              lineHeight: 1.8,
            }}
          >
            <strong style={{ color: '#e5d6b8' }}>Amar Herbal Origins</strong> is a Gujarat, India-based
            B2B manufacturer and exporter of{' '}
            <strong style={{ color: '#D97706' }}>Psyllium Husk (Isabgol)</strong>, Indian Spices, Herbs,
            Cold-Pressed Oils, and Ready-to-Eat Gujarati snacks. We supply pharmaceutical companies,
            nutraceutical brands, food manufacturers, and wholesale distributors across{' '}
            <strong style={{ color: '#e5d6b8' }}>30+ countries</strong> — including the USA, Germany,
            UK, UAE, Australia, and Japan — with full COA documentation, ISO 22000 and FSSAI
            certifications, and farm-direct sourcing from Gujarat and Rajasthan.
          </p>
        </div>

        {/* Fact grid — structured data for AI entity resolution */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: '1rem',
          }}
        >
          {ENTITY_FACTS.map((fact) => (
            <div
              key={fact.label}
              style={{
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.07)',
                borderRadius: '12px',
                padding: '1rem 1.25rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.875rem',
              }}
            >
              <span style={{ fontSize: '1.4rem', flexShrink: 0 }}>{fact.icon}</span>
              <div>
                <div
                  style={{
                    color: '#9ca3af',
                    fontSize: '0.7rem',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    marginBottom: '0.2rem',
                  }}
                >
                  {fact.label}
                </div>
                <div style={{ color: '#e5d6b8', fontSize: '0.88rem', fontWeight: 500 }}>
                  {fact.value}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
          <a
            href="/en/contact"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              background: '#D97706',
              color: 'white',
              padding: '0.85rem 2.25rem',
              borderRadius: '50px',
              fontWeight: 700,
              textDecoration: 'none',
              fontSize: '0.95rem',
            }}
          >
            Request a Free Sample or Quote →
          </a>
        </div>
      </div>
    </section>
  );
}
