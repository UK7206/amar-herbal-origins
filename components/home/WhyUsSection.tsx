'use client';

export function WhyUsSection() {
  const features = [
    {
      icon: '🌱',
      title: 'Farm Direct Sourcing',
      desc: 'Direct relationships with 250+ farms in Gujarat & Rajasthan. Zero middlemen — maximum freshness and traceability.',
      tag: '250+ Farm Network',
    },
    {
      icon: '🔬',
      title: 'Lab Tested Every Batch',
      desc: 'All products tested at NABL accredited laboratories. Full COA provided with purity, moisture, and contamination data.',
      tag: 'NABL Accredited Labs',
    },
    {
      icon: '🌍',
      title: 'Exports to 30+ Countries',
      desc: 'USA, Germany, UAE, UK, Australia, Japan, Singapore and 23+ more. We handle all export docs and customs clearance.',
      tag: '30+ Countries',
    },
    {
      icon: '🏷️',
      title: 'White Label & Private Label',
      desc: 'Launch your own brand. Custom packaging, multilingual labels, MOQ from 100 kg. Full NDA available.',
      tag: 'From 100kg MOQ',
    },
    {
      icon: '🧪',
      title: 'Free Samples Available',
      desc: 'Test our quality before placing bulk orders. Samples available for all products. Courier charges extra.',
      tag: 'Samples Available',
    },
    {
      icon: '📋',
      title: 'Complete Documentation',
      desc: 'COA, MSDS, phytosanitary, fumigation, halal, kosher, organic certificates — we provide all required export docs.',
      tag: 'Zero Documentation Hassle',
    },
  ];

  const stats = [
    { num: '5+', label: 'Product Categories' },
    { num: '30+', label: 'Countries Served' },
    { num: '24hr', label: 'Quote Response Time' },
    { num: '100%', label: 'Doc Guarantee' },
  ];

  return (
    <section style={{ background: '#1C1204', padding: '5rem 0' }}>
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <div style={{
            fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.15em',
            textTransform: 'uppercase', color: '#D97706', marginBottom: '0.75rem',
          }}>
            WHY AMAR HERBAL ORIGINS
          </div>
          <h2 style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 'clamp(2rem, 4vw, 3.5rem)',
            fontWeight: 700, color: 'white', lineHeight: 1.15,
          }}>
            We Do Things{' '}
            <em style={{ color: '#D97706' }}>Differently</em>
          </h2>
          <p style={{
            color: '#9ca3af', marginTop: '1rem',
            fontSize: '1.05rem', maxWidth: '520px',
            margin: '1rem auto 0', lineHeight: 1.7,
          }}>
            Most Indian exporters cut corners. We built our entire process around one thing — your trust.
          </p>
        </div>

        {/* Feature cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '1.25rem',
          marginBottom: '4rem',
        }}>
          {features.map((feature) => (
            <div
              key={feature.title}
              style={{
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.07)',
                borderRadius: '16px',
                padding: '1.75rem',
                transition: 'all 0.25s',
                cursor: 'default',
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.background = 'rgba(255,255,255,0.06)';
                el.style.borderColor = 'rgba(217,119,6,0.3)';
                el.style.transform = 'translateY(-3px)';
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.background = 'rgba(255,255,255,0.03)';
                el.style.borderColor = 'rgba(255,255,255,0.07)';
                el.style.transform = 'translateY(0)';
              }}
            >
              <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>{feature.icon}</div>
              <h3 style={{ fontWeight: 700, fontSize: '1.1rem', color: 'white', marginBottom: '0.625rem' }}>
                {feature.title}
              </h3>
              <p style={{ color: '#9ca3af', fontSize: '0.9rem', lineHeight: 1.65, marginBottom: '1rem' }}>
                {feature.desc}
              </p>
              <span style={{
                background: 'rgba(217,119,6,0.2)',
                color: '#D97706',
                padding: '0.3rem 0.75rem',
                borderRadius: '50px',
                fontSize: '0.78rem',
                fontWeight: 600,
              }}>
                {feature.tag}
              </span>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '3.5rem' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
            gap: '2rem',
            textAlign: 'center',
          }}>
            {stats.map((stat) => (
              <div key={stat.label}>
                <div style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: 'clamp(2.5rem, 4vw, 4rem)',
                  fontWeight: 700,
                  color: '#D97706',
                  lineHeight: 1,
                }}>
                  {stat.num}
                </div>
                <div style={{ color: '#9ca3af', marginTop: '0.5rem', fontSize: '0.9rem' }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
