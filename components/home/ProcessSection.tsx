import Link from 'next/link';

export function ProcessSection() {
  const steps = [
    {
      num: '01',
      title: 'Send Your Inquiry',
      desc: 'Contact us via WhatsApp, email, or our RFQ form with your product requirements.',
      tag: 'Within Minutes',
      icon: '💬',
    },
    {
      num: '02',
      title: 'Receive Custom Quote',
      desc: 'We send a detailed quote with pricing, MOQ, packaging options and product specifications.',
      tag: 'Within 24 Hours',
      icon: '📄',
    },
    {
      num: '03',
      title: 'Approve Sample',
      desc: 'We ship a lab-tested sample with full COA documentation for your quality verification.',
      tag: '3-5 Days Delivery',
      icon: '📦',
    },
    {
      num: '04',
      title: 'Bulk Order Ships',
      desc: 'After sample approval, bulk order is packed, documented and shipped to your destination.',
      tag: '7-14 Days',
      icon: '✈️',
    },
  ];

  return (
    <section style={{ background: '#F5F0E8', padding: '5rem 0' }}>
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <div className="section-label" style={{ marginBottom: '0.75rem' }}>SIMPLE PROCESS</div>
          <h2 className="section-heading">
            From Inquiry to<br />
            <em style={{ color: '#D97706' }}>Your Doorstep</em>
          </h2>
          <p style={{ color: '#6b7280', marginTop: '1rem', fontSize: '1.05rem', maxWidth: '520px', margin: '1rem auto 0' }}>
            We've made the entire export process simple and transparent. Here's exactly what happens after you contact us.
          </p>
        </div>

        {/* Steps */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem' }}>
          {steps.map((step, i) => (
            <div key={step.num} style={{ textAlign: 'center', position: 'relative' }}>
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div style={{
                  position: 'absolute',
                  top: '3rem',
                  right: '-25%',
                  width: '50%',
                  borderTop: '2px dashed rgba(217,119,6,0.4)',
                  zIndex: 0,
                }} />
              )}

              <div style={{ position: 'relative', zIndex: 1, marginBottom: '1.5rem' }}>
                {/* Icon floating above */}
                <div style={{ fontSize: '1.8rem', marginBottom: '0.75rem' }}>{step.icon}</div>
                {/* Numbered circle */}
                <div style={{
                  width: '3.5rem',
                  height: '3.5rem',
                  background: '#D97706',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto',
                  fontFamily: "'Cormorant Garamond', serif",
                  fontWeight: 700,
                  fontSize: '1.1rem',
                  color: 'white',
                  boxShadow: '0 4px 16px rgba(217,119,6,0.35)',
                }}>
                  {step.num}
                </div>
              </div>

              <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 700, fontSize: '1.3rem', marginBottom: '0.75rem', color: '#1a1a1a' }}>
                {step.title}
              </h3>
              <p style={{ color: '#6b7280', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '1rem' }}>
                {step.desc}
              </p>
              <span style={{
                display: 'inline-block',
                border: '1px solid #D97706',
                color: '#D97706',
                padding: '0.3rem 0.875rem',
                borderRadius: '50px',
                fontSize: '0.8rem',
                fontWeight: 600,
              }}>
                {step.tag}
              </span>
            </div>
          ))}
        </div>

        {/* CTA Box */}
        <div className="process-cta" style={{
          background: '#1C1204',
          borderRadius: '16px',
          padding: '2.5rem 3rem',
          marginTop: '4rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '2rem',
        }}>
          <div>
            <p style={{ color: '#9ca3af', fontSize: '0.875rem', marginBottom: '0.5rem' }}>READY TO START?</p>
            <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.8rem', fontWeight: 700, color: 'white', lineHeight: 1.2 }}>
              Ready to start your<br />
              <em style={{ color: '#D97706' }}>first sample order?</em>
            </h3>
            <p style={{ color: '#9ca3af', marginTop: '0.75rem', fontSize: '0.9rem' }}>
              Response guaranteed within 24 hours. No commitment required.
            </p>
          </div>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <Link href="/en/contact" className="btn-primary" style={{ fontSize: '0.95rem' }}>
              Request Sample Now →
            </Link>
            <a
              href="https://wa.me/919408465040?text=Hi, I want to order a psyllium husk sample"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline-light"
              style={{ fontSize: '0.95rem' }}
            >
              💬 WhatsApp Us Directly
            </a>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .process-cta {
            padding: 1.5rem !important;
            flex-direction: column !important;
            align-items: flex-start !important;
          }
          .process-cta > div:last-child {
            width: 100%;
          }
          .process-cta a, .process-cta a {
            width: 100%;
            justify-content: center;
            text-align: center;
          }
        }
      `}</style>
    </section>
  );
}
