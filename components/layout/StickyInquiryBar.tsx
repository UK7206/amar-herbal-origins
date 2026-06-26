'use client';

import { useState, useEffect } from 'react';

export function StickyInquiryBar() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    // Check if dismissed in this session
    if (sessionStorage.getItem('sib-dismissed') === '1') {
      setDismissed(true);
      return;
    }

    const handleScroll = () => {
      const scrolled = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
      if (scrolled > 0.25) setVisible(true);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDismiss = () => {
    setDismissed(true);
    sessionStorage.setItem('sib-dismissed', '1');
  };

  const handleRequestSample = () => {
    // Try to trigger the global SampleRequestModal if it exists, else go to contact
    const btn = document.querySelector<HTMLButtonElement>('[data-sample-modal-trigger]');
    if (btn) {
      btn.click();
    } else {
      window.location.href = '/en/psyllium/contact';
    }
  };

  if (dismissed || !visible) return null;

  return (
    <>
      {/* Backdrop for modal-like feel on mobile */}
      <div
        id="sticky-inquiry-bar"
        role="complementary"
        aria-label="Quick Inquiry Bar"
        style={{
          position: 'fixed',
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 998,
          background: 'linear-gradient(135deg, #1C1204 0%, #2d1f08 100%)',
          borderTop: '1px solid rgba(217,119,6,0.3)',
          boxShadow: '0 -8px 32px rgba(0,0,0,0.35)',
          padding: '0.85rem 1rem',
          display: 'flex',
          alignItems: 'center',
          gap: '0.6rem',
          animation: 'slideUpBar 0.35s cubic-bezier(0.34,1.56,0.64,1)',
        }}
      >
        <style>{`
          @keyframes slideUpBar {
            from { transform: translateY(100%); opacity: 0; }
            to   { transform: translateY(0);    opacity: 1; }
          }
          .sib-btn:hover { opacity: 0.88; transform: scale(1.03); }
          .sib-btn { transition: opacity 0.18s, transform 0.18s; }
        `}</style>

        {/* Left label — hidden on very small screens */}
        <div style={{ 
          flexShrink: 0,
          display: 'none',
          color: '#d9cbb0',
          fontSize: '0.72rem',
          fontWeight: 600,
          letterSpacing: '0.05em',
          textTransform: 'uppercase',
          whiteSpace: 'nowrap',
        }}
          className="sib-label"
        >
          Quick Contact
        </div>

        {/* Buttons row */}
        <div style={{ display: 'flex', gap: '0.5rem', flex: 1, justifyContent: 'center', flexWrap: 'nowrap' }}>
          {/* Request Sample */}
          <button
            onClick={handleRequestSample}
            className="sib-btn"
            aria-label="Request a free psyllium husk sample"
            style={{
              background: '#D97706',
              color: 'white',
              border: 'none',
              padding: '0.6rem 0.9rem',
              borderRadius: '8px',
              fontWeight: 700,
              fontSize: '0.78rem',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '0.35rem',
              whiteSpace: 'nowrap',
              flex: 1,
              justifyContent: 'center',
              maxWidth: '140px',
            }}
          >
            <span>📋</span>
            <span>Free Sample</span>
          </button>

          {/* WhatsApp */}
          <a
            href="https://wa.me/919408465040?text=Hi%2C%20I%27m%20interested%20in%20your%20psyllium%20husk%20products.%20Please%20share%20pricing."
            target="_blank"
            rel="noopener noreferrer"
            className="sib-btn"
            aria-label="Chat on WhatsApp with Amar Herbal Origins"
            style={{
              background: '#25D366',
              color: 'white',
              padding: '0.6rem 0.9rem',
              borderRadius: '8px',
              fontWeight: 700,
              fontSize: '0.78rem',
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
              gap: '0.35rem',
              whiteSpace: 'nowrap',
              flex: 1,
              justifyContent: 'center',
              maxWidth: '130px',
            }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="white" style={{ flexShrink: 0 }}>
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            <span>WhatsApp</span>
          </a>

          {/* Get Quote */}
          <a
            href="/en/contact"
            className="sib-btn"
            aria-label="Get a bulk quote for psyllium husk"
            style={{
              background: 'rgba(255,255,255,0.08)',
              border: '1px solid rgba(217,119,6,0.4)',
              color: '#f5e6c8',
              padding: '0.6rem 0.9rem',
              borderRadius: '8px',
              fontWeight: 700,
              fontSize: '0.78rem',
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
              gap: '0.35rem',
              whiteSpace: 'nowrap',
              flex: 1,
              justifyContent: 'center',
              maxWidth: '120px',
            }}
          >
            <span>📩</span>
            <span>Get Quote</span>
          </a>
        </div>

        {/* Dismiss button */}
        <button
          onClick={handleDismiss}
          aria-label="Dismiss inquiry bar"
          style={{
            flexShrink: 0,
            background: 'transparent',
            border: 'none',
            color: '#6b7280',
            fontSize: '1.1rem',
            cursor: 'pointer',
            padding: '0.25rem',
            lineHeight: 1,
          }}
        >
          ×
        </button>
      </div>
    </>
  );
}
