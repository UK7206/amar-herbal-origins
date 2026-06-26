// Server Component — no 'use client' needed (pure display)
// E-E-A-T: Displays real GST and Udyam registration numbers in crawlable text
// This is visible to Google bot and AI training scrapers — critical for trust signals

export function ComplianceStrip() {
  const certs = [
    {
      id: 'gst',
      icon: '🏛️',
      label: 'GST Registered',
      value: '24ICIPP6678D1Z4',
      desc: 'Government of India',
    },
    {
      id: 'udyam',
      icon: '🏭',
      label: 'MSME / Udyam',
      value: 'UDYAM-GJ-02-0036891',
      desc: 'Micro Enterprise · Manufacturing',
    },
    {
      id: 'msme-type',
      icon: '⚙️',
      label: 'NIC Activity',
      value: '21003',
      desc: 'Ayurvedic / Herbal Pharma Manufacturing',
    },
    {
      id: 'origin',
      icon: '📍',
      label: 'Registered Address',
      value: 'Amreli, Gujarat',
      desc: 'SARDAR CHOK, Navi Haliyad — 365440',
    },
  ];

  return (
    <section
      aria-label="Business Registration & Compliance"
      itemScope
      itemType="https://schema.org/Organization"
      style={{
        background: '#FAF8F4',
        borderTop: '1px solid #E5E0D8',
        borderBottom: '1px solid #E5E0D8',
        padding: '1.25rem 0',
      }}
    >
      {/* Hidden machine-readable name for schema */}
      <span itemProp="name" style={{ display: 'none' }}>Amar Herbal Origins</span>
      <span itemProp="taxID" style={{ display: 'none' }}>24ICIPP6678D1Z4</span>

      <div className="container">
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}
        >
          {/* Label */}
          <span
            style={{
              fontSize: '0.7rem',
              fontWeight: 700,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: '#9ca3af',
              marginRight: '0.5rem',
              whiteSpace: 'nowrap',
            }}
          >
            Verified Exporter:
          </span>

          {certs.map((cert, i) => (
            <div
              key={cert.id}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                background: 'white',
                border: '1px solid #E5E0D8',
                borderRadius: '8px',
                padding: '0.35rem 0.75rem',
                fontSize: '0.78rem',
              }}
              title={cert.desc}
            >
              <span style={{ fontSize: '0.9rem' }}>{cert.icon}</span>
              <span style={{ color: '#6b7280', fontWeight: 500 }}>{cert.label}:</span>
              <span
                style={{ color: '#1a1a1a', fontWeight: 700, letterSpacing: '0.02em' }}
                itemProp={cert.id === 'gst' ? 'taxID' : undefined}
              >
                {cert.value}
              </span>
              {/* Separator */}
              {i < certs.length - 1 && (
                <span
                  style={{
                    color: '#D97706',
                    fontSize: '0.6rem',
                    marginLeft: '0.25rem',
                    display: 'none',
                  }}
                  aria-hidden="true"
                >
                  ·
                </span>
              )}
            </div>
          ))}
        </div>

        {/* Fully machine-readable hidden address for LocalBusiness schema */}
        <div
          itemProp="address"
          itemScope
          itemType="https://schema.org/PostalAddress"
          style={{ display: 'none' }}
        >
          <span itemProp="streetAddress">SARDAR CHOK, Navi Haliyad</span>
          <span itemProp="addressLocality">Haliyad Navi</span>
          <span itemProp="addressRegion">Gujarat</span>
          <span itemProp="postalCode">365440</span>
          <span itemProp="addressCountry">IN</span>
        </div>
      </div>
    </section>
  );
}
