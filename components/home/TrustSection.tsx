export function TrustSection() {
  const certs = [
    {
      icon: '🏛️',
      title: 'FSSAI Certified',
      status: 'Available',
      statusType: 'green',
      desc: 'Food Safety & Standards Authority of India compliance for all our products.',
    },
    {
      icon: '📋',
      title: 'IEC Code',
      status: 'Available',
      statusType: 'green',
      desc: 'Import Export Code for legal international trade from India.',
    },
    {
      icon: '🔬',
      title: 'Certificate of Analysis',
      status: 'Available',
      statusType: 'green',
      desc: 'Third-party lab tested COA provided with every sample and bulk order.',
    },
    {
      icon: '✅',
      title: 'Lab Verified Quality',
      status: 'Every Batch',
      statusType: 'green',
      desc: 'Purity, moisture, and contamination testing done at NABL accredited labs.',
    },
  ];

  return (
    <section style={{ background: '#F5F0E8', padding: '5rem 0' }}>
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>

          {/* Founder's Slogan */}
          <div style={{
            display: 'inline-block',
            position: 'relative',
            marginBottom: '2.5rem',
            maxWidth: '680px',
          }}>
            <span style={{
              position: 'absolute',
              top: '-20px',
              left: '-10px',
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: '6rem',
              lineHeight: 1,
              color: '#D97706',
              opacity: 0.18,
              userSelect: 'none',
              pointerEvents: 'none',
            }}>"</span>
            <p style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 'clamp(1.25rem, 3vw, 1.75rem)',
              fontWeight: 600,
              fontStyle: 'italic',
              color: '#1C1204',
              lineHeight: 1.5,
              margin: 0,
              position: 'relative',
              zIndex: 1,
              paddingLeft: '0.5rem',
            }}>
              The most expensive thing in the world is{' '}
              <span style={{ color: '#D97706', fontStyle: 'italic' }}>trust.</span>
            </p>
            <div style={{
              width: '48px',
              height: '2px',
              background: '#D97706',
              margin: '1rem auto 0',
              borderRadius: '2px',
            }} />
          </div>

          <div className="section-label" style={{ marginBottom: '0.75rem' }}>WHY BUYERS TRUST US</div>
          <h2 className="section-heading">Built on Transparency</h2>
          <p style={{ color: '#6b7280', marginTop: '1rem', fontSize: '1.05rem', maxWidth: '520px', margin: '1rem auto 0' }}>
            Every claim we make is backed by documentation. No shortcuts, no compromises.
          </p>
        </div>

        {/* Cards grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.25rem', marginBottom: '2.5rem' }}>
          {certs.map(cert => (
            <div key={cert.title} className="card-light">
              <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>{cert.icon}</div>
              <h3 style={{ fontWeight: 700, fontSize: '1.05rem', marginBottom: '0.625rem', color: '#1a1a1a' }}>{cert.title}</h3>
              <div style={{ marginBottom: '0.875rem' }}>
                <span
                  className={cert.statusType === 'green' ? 'pill pill-green' : 'pill pill-amber'}
                >
                  {cert.status}
                </span>
              </div>
              <p style={{ color: '#6b7280', fontSize: '0.9rem', lineHeight: 1.6 }}>{cert.desc}</p>
            </div>
          ))}
        </div>

        {/* GEO: Industry Statistics — cited data points AI systems can reference */}
        <div
          style={{
            background: 'white',
            border: '1px solid #E5E0D8',
            borderRadius: '14px',
            padding: '1.75rem 2rem',
            marginBottom: '1.25rem',
          }}
        >
          <div
            style={{
              fontSize: '0.7rem',
              fontWeight: 700,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: '#9ca3af',
              marginBottom: '1.25rem',
              textAlign: 'center',
            }}
          >
            📊 India Psyllium Husk Industry — Key Facts
          </div>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
              gap: '1.5rem',
              textAlign: 'center',
            }}
          >
            {[
              { stat: '85%+', label: 'Global psyllium supply from India', source: 'APEDA' },
              { stat: '₹2,500 Cr', label: 'Annual psyllium export value', source: 'DGFT 2023' },
              { stat: '60+', label: 'Countries importing Indian psyllium', source: 'Commerce Ministry' },
              { stat: '99%', label: 'Max purity achievable — our benchmark', source: 'In-house QC Lab' },
            ].map((item) => (
              <div key={item.stat}>
                <div
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: '2rem',
                    fontWeight: 800,
                    color: '#D97706',
                    lineHeight: 1,
                    marginBottom: '0.3rem',
                  }}
                >
                  {item.stat}
                </div>
                <div style={{ color: '#374151', fontSize: '0.82rem', fontWeight: 600, marginBottom: '0.2rem' }}>
                  {item.label}
                </div>
                <div style={{ color: '#9ca3af', fontSize: '0.7rem' }}>Source: {item.source}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Banner */}
        <div style={{
          background: '#D97706',
          borderRadius: '12px',
          padding: '1.125rem 2rem',
          textAlign: 'center',
          color: 'white',
          fontWeight: 500,
          fontSize: '0.95rem',
        }}>
          ✓ Complete documentation provided with every order — COA, Phytosanitary, Invoice &amp; Packing List
        </div>
      </div>
    </section>
  );
}
