'use client';

import Link from 'next/link';
import { ContactForm } from '@/components/contact/ContactForm';

const contactInfo = [
  {
    icon: '📱',
    label: 'Phone / WhatsApp',
    value: '+91 94084 65040',
    link: 'https://wa.me/919408465040',
    linkLabel: 'Chat on WhatsApp →',
  },
  {
    icon: '📧',
    label: 'Email',
    value: 'amarherbalorigins@gmail.com',
    link: 'mailto:amarherbalorigins@gmail.com',
    linkLabel: 'Send Email →',
  },
  {
    icon: '📍',
    label: 'Location',
    value: 'Ahmedabad, Gujarat, India',
    link: 'https://maps.google.com/?q=Ahmedabad,Gujarat,India',
    linkLabel: 'View on Map →',
  },
  {
    icon: '🕐',
    label: 'Business Hours',
    value: 'Mon–Sat: 9:00 AM – 6:30 PM IST',
    link: null,
    linkLabel: null,
  },
];

const socialLinks = [
  {
    name: 'Facebook',
    href: 'https://www.facebook.com/share/1GkPXqWkRg/',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/amar_herbal_origins?igsh=eGlybHQ0cXBwNmdm',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ),
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/company/amar-herbal-origins/',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
];

const products = [
  { emoji: '🌾', name: 'Psyllium Husk', href: '/en/psyllium', whatsapp: 'Psyllium Husk / Isabgol' },
  { emoji: '🌿', name: 'Herbs', href: '/en/herbs', whatsapp: 'Indian Herbs (Moringa, Mint, Amla, etc.)' },
  { emoji: '🌶️', name: 'Spices', href: '/en/spices', whatsapp: 'Spices (Cumin, Turmeric, Coriander, etc.)' },
  { emoji: '🫙', name: 'Cold-Pressed Oils', href: '/en/oils', whatsapp: 'Cold-Pressed Oils' },
  { emoji: '🍘', name: 'Ready-to-Eat', href: '/en/ready-to-eat', whatsapp: 'Ready-to-Eat Products' },
];

const faqs = [
  {
    q: 'What products do you export?',
    a: 'We export a wide range of agri-products — Psyllium Husk (Isabgol), Indian Herbs (Moringa, Mint, Amla, Oregano, Curry Leaves), Spices (Cumin, Turmeric, Coriander, Fenugreek, Ajwain), Cold-Pressed Oils, and Ready-to-Eat products like Khakhra.',
  },
  {
    q: 'What is the minimum order quantity?',
    a: 'MOQ varies by product. For psyllium husk: 1 MT. For herbs & spices: 100–500 kg. Sample/trial orders available. Contact us for custom arrangements.',
  },
  {
    q: 'Do you provide a Certificate of Analysis?',
    a: 'Yes. Every batch ships with a full COA covering purity, moisture, ash, and microbial parameters. We share it before shipment confirmation.',
  },
  {
    q: 'Can I get a free sample before ordering?',
    a: "Yes! We provide free samples for most products. WhatsApp us your address and product of interest — we'll dispatch within 2–3 working days.",
  },
];

export default function ContactPage() {
  return (
    <main>
      {/* ── Hero ── */}
      <section
        style={{
          background: 'linear-gradient(135deg, #1C1204 0%, #2d1f08 60%, #3d2a0a 100%)',
          padding: '5rem 0 4rem',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div style={{ position: 'absolute', top: '-100px', right: '-100px', width: '500px', height: '500px', background: 'radial-gradient(circle, rgba(217,119,6,0.15) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
          <div style={{ display: 'inline-block', background: 'rgba(217,119,6,0.15)', border: '1px solid rgba(217,119,6,0.35)', color: '#D97706', padding: '0.35rem 1rem', borderRadius: '50px', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '1.5rem' }}>
            Contact & Samples
          </div>
          <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(2.2rem, 5vw, 3.6rem)', fontWeight: 700, color: 'white', marginBottom: '1.25rem', lineHeight: 1.15 }}>
            Let's Talk{' '}
            <em style={{ color: '#D97706', fontStyle: 'italic' }}>Herbal Exports</em>
          </h1>
          <p style={{ color: '#b8a98a', fontSize: '1.1rem', maxWidth: '580px', margin: '0 auto 1.5rem', lineHeight: 1.7 }}>
            Looking for Psyllium Husk, Herbs, Spices, Oils or Ready-to-Eat products?
            Send us your requirements or request a free sample. We respond within 24 hours.
          </p>

          {/* Product pills */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '0.6rem', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
            {products.map(p => (
              <Link key={p.name} href={p.href} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)', color: '#e5d6b8', padding: '0.35rem 0.9rem', borderRadius: '50px', fontSize: '0.82rem', fontWeight: 600, textDecoration: 'none' }}>
                {p.emoji} {p.name}
              </Link>
            ))}
          </div>

          {/* Quick WhatsApp CTA */}
          <a
            href="https://wa.me/919408465040?text=Hi, I am interested in your herbal export products. Please share details."
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '0.6rem', background: '#25D366', color: 'white', padding: '0.85rem 2rem', borderRadius: '50px', fontWeight: 700, fontSize: '0.95rem', textDecoration: 'none' }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            WhatsApp Us Now
          </a>
        </div>
      </section>

      {/* ── Enquire by Product ── */}
      <section style={{ background: 'white', padding: '3.5rem 0', borderBottom: '1px solid #E5E0D8' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <div style={{ color: '#9ca3af', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>QUICK ENQUIRY</div>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.8rem', fontWeight: 700, color: '#1a1a1a' }}>
              What are you looking for?
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '1rem', maxWidth: '860px', margin: '0 auto' }}>
            {products.map(p => (
              <a
                key={p.name}
                href={`https://wa.me/919408465040?text=Hi, I am interested in ${p.whatsapp} bulk pricing and samples.`}
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem', background: '#FAF8F4', border: '1.5px solid #E5E0D8', borderRadius: '14px', padding: '1.5rem 1rem', textDecoration: 'none', transition: 'all 0.2s', textAlign: 'center' }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.borderColor = '#D97706';
                  (e.currentTarget as HTMLElement).style.background = 'rgba(217,119,6,0.05)';
                  (e.currentTarget as HTMLElement).style.transform = 'translateY(-3px)';
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.borderColor = '#E5E0D8';
                  (e.currentTarget as HTMLElement).style.background = '#FAF8F4';
                  (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
                }}
              >
                <span style={{ fontSize: '2rem' }}>{p.emoji}</span>
                <span style={{ fontWeight: 700, fontSize: '0.88rem', color: '#1a1a1a' }}>{p.name}</span>
                <span style={{ fontSize: '0.72rem', color: '#D97706', fontWeight: 600 }}>Enquire on WhatsApp →</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── Main Content: Form + Info ── */}
      <section style={{ background: '#FAF8F4', padding: '5rem 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem', alignItems: 'flex-start' }}>
            {/* Left: Form */}
            <ContactForm />

            {/* Right: Info */}
            <div>
              <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.8rem', fontWeight: 700, color: '#1a1a1a', marginBottom: '1.5rem' }}>
                Get in Touch
              </h2>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
                {contactInfo.map(info => (
                  <div key={info.label} style={{ background: 'white', border: '1px solid #E5E0D8', borderRadius: '12px', padding: '1.25rem 1.5rem', display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                    <div style={{ fontSize: '1.5rem', flexShrink: 0 }}>{info.icon}</div>
                    <div>
                      <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#D97706', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '0.2rem' }}>{info.label}</div>
                      <div style={{ fontWeight: 600, color: '#1a1a1a', fontSize: '0.95rem', marginBottom: info.link ? '0.35rem' : 0 }}>{info.value}</div>
                      {info.link && (
                        <a href={info.link} target={info.link.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer" style={{ color: '#D97706', fontWeight: 600, fontSize: '0.82rem', textDecoration: 'none' }}>
                          {info.linkLabel}
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Links */}
              <div style={{ marginBottom: '2rem' }}>
                <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#9ca3af', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>Follow Us</div>
                <div style={{ display: 'flex', gap: '0.75rem' }}>
                  {socialLinks.map(s => (
                    <a key={s.name} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.name}
                      style={{ width: '44px', height: '44px', background: 'white', border: '1.5px solid #E5E0D8', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#6b7280', textDecoration: 'none', transition: 'all 0.2s' }}
                      onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = '#D97706'; (e.currentTarget as HTMLElement).style.color = '#D97706'; (e.currentTarget as HTMLElement).style.background = 'rgba(217,119,6,0.06)'; }}
                      onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = '#E5E0D8'; (e.currentTarget as HTMLElement).style.color = '#6b7280'; (e.currentTarget as HTMLElement).style.background = 'white'; }}
                    >
                      {s.icon}
                    </a>
                  ))}
                </div>
              </div>

              {/* Why choose us */}
              <div style={{ background: '#1C1204', borderRadius: '14px', padding: '1.5rem' }}>
                <div style={{ color: '#D97706', fontWeight: 700, fontSize: '0.78rem', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '1rem' }}>Why Buyers Choose Us</div>
                {[
                  '24-hour response guarantee',
                  'Free sample available for all products',
                  'Dedicated account manager',
                  'COA shared before payment',
                  'Flexible MOQ across all categories',
                  'Ships to 30+ countries worldwide',
                ].map(item => (
                  <div key={item} style={{ display: 'flex', gap: '0.6rem', alignItems: 'center', marginBottom: '0.6rem' }}>
                    <span style={{ color: '#D97706', fontWeight: 700, flexShrink: 0 }}>✓</span>
                    <span style={{ color: '#b8a98a', fontSize: '0.88rem' }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Map Section ── */}
      <section style={{ background: 'white', padding: '0' }}>
        <div style={{ position: 'relative', height: '380px', overflow: 'hidden' }}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d235013.6862056571!2d72.41492787655634!3d23.019996000000008!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e848aba5bd449%3A0x4fcedd11614f6516!2sAhmedabad%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1681000000000!5m2!1sen!2sin"
            width="100%"
            height="380"
            style={{ border: 0, display: 'block', filter: 'grayscale(20%) contrast(1.05)' }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Amar Herbal Origins - Ahmedabad, Gujarat"
          />
          <div style={{ position: 'absolute', top: '50%', left: '2rem', transform: 'translateY(-50%)', background: '#1C1204', color: 'white', padding: '1.25rem 1.5rem', borderRadius: '12px', boxShadow: '0 8px 32px rgba(0,0,0,0.3)', minWidth: '220px' }}>
            <div style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>📍</div>
            <div style={{ fontWeight: 700, fontSize: '1rem', marginBottom: '0.25rem' }}>Amar Herbal Origins</div>
            <div style={{ color: '#b8a98a', fontSize: '0.85rem' }}>Ahmedabad, Gujarat, India</div>
            <a href="https://maps.google.com/?q=Ahmedabad,Gujarat,India" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block', marginTop: '0.75rem', color: '#D97706', fontSize: '0.8rem', fontWeight: 700, textDecoration: 'none' }}>
              Open in Maps →
            </a>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section style={{ background: '#FAF8F4', padding: '5rem 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div className="section-label" style={{ marginBottom: '0.75rem' }}>FAQ</div>
            <h2 className="section-heading">Common <em style={{ color: '#D97706' }}>Questions</em></h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.25rem', maxWidth: '900px', margin: '0 auto' }}>
            {faqs.map(faq => (
              <div key={faq.q} style={{ background: 'white', border: '1px solid #E5E0D8', borderRadius: '12px', padding: '1.5rem' }}>
                <div style={{ fontWeight: 700, color: '#1a1a1a', fontSize: '0.95rem', marginBottom: '0.75rem', lineHeight: 1.4 }}>{faq.q}</div>
                <p style={{ color: '#6b7280', fontSize: '0.88rem', lineHeight: 1.7, margin: 0 }}>{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section style={{ background: 'linear-gradient(135deg, #1C1204 0%, #2d1f08 100%)', padding: '4.5rem 0', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', bottom: '-60px', right: '-60px', width: '300px', height: '300px', background: 'radial-gradient(circle, rgba(217,119,6,0.12) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 700, color: 'white', marginBottom: '1rem' }}>
            Prefer a Direct Call?
          </h2>
          <p style={{ color: '#b8a98a', fontSize: '1rem', marginBottom: '2rem' }}>
            Reach us directly at{' '}
            <a href="tel:+919408465040" style={{ color: '#D97706', fontWeight: 700, textDecoration: 'none' }}>+91 94084 65040</a>
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="https://wa.me/919408465040" target="_blank" rel="noopener noreferrer" style={{ background: '#25D366', color: 'white', padding: '0.85rem 2rem', borderRadius: '50px', fontWeight: 700, textDecoration: 'none', fontSize: '0.9rem' }}>
              💬 WhatsApp
            </a>
            <a href="mailto:amarherbalorigins@gmail.com" style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.2)', color: 'white', padding: '0.85rem 2rem', borderRadius: '50px', fontWeight: 700, textDecoration: 'none', fontSize: '0.9rem' }}>
              📧 Email Us
            </a>
            <Link href="/en/psyllium" style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.2)', color: 'white', padding: '0.85rem 2rem', borderRadius: '50px', fontWeight: 700, textDecoration: 'none', fontSize: '0.9rem' }}>
              🌾 Psyllium Husk
            </Link>
            <Link href="/en/herbs" style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.2)', color: 'white', padding: '0.85rem 2rem', borderRadius: '50px', fontWeight: 700, textDecoration: 'none', fontSize: '0.9rem' }}>
              🌿 Herbs
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}