// Server Component — required for generateMetadata + SSR (critical for SEO)
import type { Metadata } from 'next';
import Link from 'next/link';
import { buildAlternates, buildCanonical } from '@/lib/seo-helpers';
import { SiteUrlsPanel } from '@/components/about/SiteUrlsPanel';


const stats = [
  { value: '5+', label: 'Years of Export Experience', icon: '🏆' },
  { value: '20+', label: 'Global Import Partners', icon: '🤝' },
  { value: '30+', label: 'Countries Supplied', icon: '🌍' },
  { value: '800+', label: 'Metric Tons Exported', icon: '📦' },
];

const values = [
  {
    icon: '🌾',
    title: 'Farm-First Sourcing',
    desc: 'We work directly with contracted farmers in Gujarat and Rajasthan, cutting out middlemen to ensure freshness, traceability, and fair pricing.',
  },
  {
    icon: '🔬',
    title: 'Lab-Certified Quality',
    desc: 'Every batch undergoes 10+ quality tests in our in-house lab. Full Certificate of Analysis provided before each shipment.',
  },
  {
    icon: '🤝',
    title: 'Long-term Partnerships',
    desc: 'We don\'t just sell — we build lasting relationships. Dedicated account management and consistent pricing for repeat buyers.',
  },
  {
    icon: '🌿',
    title: 'Sustainable Practices',
    desc: 'Minimal waste processing, farmer welfare programs, and organic-certified options for eco-conscious global brands.',
  },
];

const milestones = [
  { year: '2008', event: 'Founded in Ahmedabad, Gujarat as a domestic agri-commodity trader.' },
  { year: '2011', event: 'First export shipment to Europe. Obtained IEC code and APEDA registration.' },
  { year: '2014', event: 'Launched in-house QC lab. ISO 22000 food safety management implemented.' },
  { year: '2017', event: 'Expanded to US & Middle East. Added Herbs, Spices and Cold-Pressed Oils to product portfolio.' },
  { year: '2020', event: 'Surpassed 20+ global import partners across pharma, food, and nutraceutical sectors.' },
  { year: '2024', event: 'Present in 30+ countries. New processing facility operational. Ready-to-Eat range launched.' },
];

const markets = [
  { flag: '🇺🇸', country: 'United States', segment: 'Pharma & Nutraceuticals' },
  { flag: '🇩🇪', country: 'Germany', segment: 'Pharmaceuticals' },
  { flag: '🇬🇧', country: 'United Kingdom', segment: 'Health Supplements' },
  { flag: '🇯🇵', country: 'Japan', segment: 'Functional Foods' },
  { flag: '🇦🇺', country: 'Australia', segment: 'Organic Category' },
  { flag: '🇸🇦', country: 'Saudi Arabia', segment: 'Food & Pharma' },
  { flag: '🇨🇦', country: 'Canada', segment: 'Nutraceuticals' },
  { flag: '🇳🇱', country: 'Netherlands', segment: 'Distribution Hub' },
];

type Props = {
  params: Promise<{ locale: string }>;
};

// generateMetadata — required for Google to properly index the About page
// Without this, Google can't see title/description/hreflang for /about
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const canonical = buildCanonical(locale, '/about');
  return {
    title: 'About Us | Indian Herbal & Agri Products Exporter | Amar Herbal Origins',
    description:
      'Amar Herbal Origins — Gujarat-based exporter of Psyllium Husk, Indian Herbs, Spices, Cold-Pressed Oils & Ready-to-Eat products. Farm-direct sourcing, ISO 22000 certified, supplying to 30+ countries.',
    alternates: {
      canonical,
      languages: buildAlternates('/about'),
    },
  };
}

export default async function AboutPage({ params }: Props) {
  const { locale } = await params;
  return (
    <main>
      {/* CSS hover effects — using class-based approach since this is a Server Component */}
      <style>{`
        .about-value-card:hover { transform: translateY(-4px); border-color: #D97706 !important; box-shadow: 0 12px 32px rgba(217,119,6,0.1); }
        .about-market-card:hover { border-color: #D97706 !important; box-shadow: 0 4px 16px rgba(217,119,6,0.1); }
        .founder-twitter-btn:hover { opacity: 0.8; }
      `}</style>
      {/* ── Hero ── */}
      <section
        style={{
          background: 'linear-gradient(135deg, #1C1204 0%, #2d1f08 60%, #3d2a0a 100%)',
          padding: '5rem 0 4rem',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: '-100px',
            right: '-100px',
            width: '500px',
            height: '500px',
            background: 'radial-gradient(circle, rgba(217,119,6,0.15) 0%, transparent 70%)',
            pointerEvents: 'none',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '-80px',
            left: '-60px',
            width: '350px',
            height: '350px',
            background: 'radial-gradient(circle, rgba(217,119,6,0.08) 0%, transparent 70%)',
            pointerEvents: 'none',
          }}
        />
        <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
          <div
            style={{
              display: 'inline-block',
              background: 'rgba(217,119,6,0.15)',
              border: '1px solid rgba(217,119,6,0.35)',
              color: '#D97706',
              padding: '0.35rem 1rem',
              borderRadius: '50px',
              fontSize: '0.75rem',
              fontWeight: 700,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              marginBottom: '1.5rem',
            }}
          >
            About Us
          </div>
          <h1
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 'clamp(2.4rem, 5vw, 3.8rem)',
              fontWeight: 700,
              color: 'white',
              marginBottom: '1.25rem',
              lineHeight: 1.15,
            }}
          >
            Gujarat's Trusted{' '}
            <em style={{ color: '#D97706', fontStyle: 'italic' }}>Herbal Exporter</em>
          </h1>
          <p
            style={{
              color: '#b8a98a',
              fontSize: '1.1rem',
              maxWidth: '640px',
              margin: '0 auto 2rem',
              lineHeight: 1.7,
            }}
          >
            For over 5 years, Amar Herbal Origins has been connecting India's finest farms
            with buyers across 30+ countries — exporting Psyllium Husk, Herbs, Spices,
            Cold-Pressed Oils, and Ready-to-Eat products. Farm-direct, lab-certified, and built on trust.
          </p>
          {/* Product categories */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '0.75rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
            {['🌾 Psyllium Husk', '🌿 Herbs', '🌶️ Spices', '🫙 Oils', '🍘 Ready-to-Eat'].map(p => (
              <span key={p} style={{ background: 'rgba(217,119,6,0.15)', border: '1px solid rgba(217,119,6,0.3)', color: '#D97706', padding: '0.3rem 0.9rem', borderRadius: '50px', fontSize: '0.82rem', fontWeight: 600 }}>{p}</span>
            ))}
          </div>

          {/* Quick stats row */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '3rem',
              flexWrap: 'wrap',
            }}
          >
            {['5+ Years', '20+ Partners', '30+ Countries'].map(s => (
              <div key={s} style={{ color: '#e5d6b8', fontWeight: 600, fontSize: '1rem' }}>
                <span style={{ color: '#D97706' }}>✦ </span>{s}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Our Story ── */}
      <section style={{ background: 'white', padding: '5rem 0' }}>
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '4rem',
              alignItems: 'center',
            }}
          >
            {/* Text */}
            <div>
              <div className="section-label" style={{ marginBottom: '0.75rem' }}>OUR STORY</div>
              <h2 className="section-heading" style={{ marginBottom: '1.5rem' }}>
                Born from Gujarat's{' '}
                <em style={{ color: '#D97706' }}>Farmlands</em>
              </h2>
              <p style={{ color: '#6b7280', lineHeight: 1.8, fontSize: '1rem', marginBottom: '1.25rem' }}>
                Amar Herbal Origins was founded in Ahmedabad with a single purpose — to bring
                the finest agri and herbal products from India's top-producing regions to global
                markets with transparency and quality assurance that buyers can rely on.
              </p>
              <p style={{ color: '#6b7280', lineHeight: 1.8, fontSize: '1rem', marginBottom: '2rem' }}>
                What started as a small trading house has grown into a full-scale export operation
                with an in-house QC lab, contracted farming network, and a presence in 30+ countries.
                Today we export Psyllium Husk, Indian Herbs, Spices, Cold-Pressed Oils, and Ready-to-Eat
                products across pharma, nutraceutical, food, and organic segments.
              </p>

              <div
                style={{
                  background: '#FAF8F4',
                  border: '1px solid #E5E0D8',
                  borderLeft: '4px solid #D97706',
                  borderRadius: '8px',
                  padding: '1.25rem 1.5rem',
                }}
              >
                <p
                  style={{
                    color: '#1a1a1a',
                    fontStyle: 'italic',
                    lineHeight: 1.7,
                    margin: 0,
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: '1.15rem',
                  }}
                >
                  "We don't just ship products — we ship trust. Every bag carries our name,
                  and we make sure it's worth it."
                </p>
                <div style={{ color: '#D97706', fontWeight: 700, fontSize: '0.8rem', marginTop: '0.75rem', letterSpacing: '0.05em' }}>
                  — FOUNDER, AMAR HERBAL ORIGINS
                </div>
              </div>
            </div>

            {/* Visual card */}
            <div>
              <div
                style={{
                  background: 'linear-gradient(145deg, #1C1204, #2d1f08)',
                  borderRadius: '20px',
                  padding: '2.5rem',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                <div
                  style={{
                    position: 'absolute',
                    top: '-40px',
                    right: '-40px',
                    width: '200px',
                    height: '200px',
                    background: 'radial-gradient(circle, rgba(217,119,6,0.2) 0%, transparent 70%)',
                  }}
                />
                {/* Commitment list */}
                <h3
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: '1.5rem',
                    color: 'white',
                    marginBottom: '1.5rem',
                    fontWeight: 700,
                  }}
                >
                  Our Commitment
                </h3>
                {[
                  'Psyllium Husk, Herbs, Spices, Oils & Ready-to-Eat — all under one roof',
                  'Farm-direct sourcing from Gujarat & Rajasthan',
                  'Batch-specific COA for every shipment',
                  '100% pure — zero fillers, zero additives',
                  'FOB Mundra / Nhava Sheva — 7–14 day lead time',
                  'Dedicated account manager for each buyer',
                ].map(item => (
                  <div
                    key={item}
                    style={{
                      display: 'flex',
                      gap: '0.75rem',
                      alignItems: 'flex-start',
                      marginBottom: '0.875rem',
                    }}
                  >
                    <span style={{ color: '#D97706', fontWeight: 700, flexShrink: 0 }}>✓</span>
                    <span style={{ color: '#b8a98a', fontSize: '0.9rem', lineHeight: 1.5 }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats / Numbers ── */}
      <section style={{ background: '#1C1204', padding: '4.5rem 0' }}>
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
              gap: '1px',
              background: 'rgba(255,255,255,0.06)',
              borderRadius: '16px',
              overflow: 'hidden',
            }}
          >
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                style={{
                  background: '#1C1204',
                  padding: '2.5rem 1.5rem',
                  textAlign: 'center',
                  borderRight: i < stats.length - 1 ? '1px solid rgba(255,255,255,0.08)' : 'none',
                }}
              >
                <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>{stat.icon}</div>
                <div
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: '2.8rem',
                    fontWeight: 800,
                    color: '#D97706',
                    lineHeight: 1,
                    marginBottom: '0.5rem',
                  }}
                >
                  {stat.value}
                </div>
                <div style={{ color: '#9ca3af', fontSize: '0.88rem', lineHeight: 1.4 }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Our Values ── */}
      <section style={{ background: '#FAF8F4', padding: '5rem 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <div className="section-label" style={{ marginBottom: '0.75rem' }}>WHAT WE STAND FOR</div>
            <h2 className="section-heading">
              Our Core{' '}
              <em style={{ color: '#D97706' }}>Values</em>
            </h2>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: '1.5rem',
            }}
          >
            {values.map(v => (
              <div
                key={v.title}
                className="about-value-card"
                style={{
                  background: 'white',
                  border: '1px solid #E5E0D8',
                  borderRadius: '14px',
                  padding: '2rem',
                  transition: 'all 0.25s',
                }}
              >
                <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{v.icon}</div>
                <h3 style={{ fontWeight: 700, fontSize: '1.1rem', color: '#1a1a1a', marginBottom: '0.75rem' }}>
                  {v.title}
                </h3>
                <p style={{ color: '#6b7280', fontSize: '0.9rem', lineHeight: 1.7 }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Founder Bio — E-E-A-T: first-hand Experience + Expertise signal ── */}
      <section style={{ background: 'white', padding: '5rem 0' }}>
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '4rem',
              alignItems: 'center',
              maxWidth: '960px',
              margin: '0 auto',
            }}
          >
            {/* Founder card */}
            <div style={{ textAlign: 'center' }}>
              {/* Real founder photo */}
              <div
                style={{
                  width: '140px',
                  height: '140px',
                  borderRadius: '50%',
                  margin: '0 auto 1.25rem',
                  boxShadow: '0 8px 32px rgba(217,119,6,0.25)',
                  border: '4px solid #D97706',
                  overflow: 'hidden',
                  background: 'linear-gradient(135deg, #D97706, #92400e)',
                }}
              >
                <img
                  src="/umang-khunt-square.jpg"
                  alt="Umang Khunt — Founder of Amar Herbal Origins"
                  width={140}
                  height={140}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                />
              </div>
              <div
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: '1.5rem',
                  fontWeight: 700,
                  color: '#1a1a1a',
                  marginBottom: '0.25rem',
                }}
              >
                Umang Khunt
              </div>
              <div style={{ color: '#D97706', fontWeight: 600, fontSize: '0.85rem', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '1rem' }}>
                Founder &amp; Director — Amar Herbal Origins
              </div>
              <div style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1rem' }}>
                {['Psyllium Husk Expert', 'Agri Exporter', 'Gujarat, India'].map((tag) => (
                  <span
                    key={tag}
                    style={{
                      background: '#FAF8F4',
                      border: '1px solid #E5E0D8',
                      color: '#6b7280',
                      padding: '0.25rem 0.7rem',
                      borderRadius: '50px',
                      fontSize: '0.75rem',
                      fontWeight: 500,
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
              {/* Twitter / X link */}
              <a
                href="https://x.com/Umang__Khunt"
                target="_blank"
                rel="noopener noreferrer"
                className="founder-twitter-btn"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  background: '#000',
                  color: 'white',
                  padding: '0.4rem 1rem',
                  borderRadius: '50px',
                  fontSize: '0.78rem',
                  fontWeight: 600,
                  textDecoration: 'none',
                  transition: 'opacity 0.2s',
                }}
              >
                <svg width="13" height="13" viewBox="0 0 24 24" fill="white">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.254 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
                @Umang__Khunt
              </a>
            </div>


            {/* Bio text */}
            <div>
              <div className="section-label" style={{ marginBottom: '0.75rem' }}>MEET THE FOUNDER</div>
              <h2 className="section-heading" style={{ marginBottom: '1.25rem' }}>
                Built from{' '}
                <em style={{ color: '#D97706' }}>Direct Experience</em>
              </h2>
              <p style={{ color: '#6b7280', lineHeight: 1.85, fontSize: '0.97rem', marginBottom: '1rem' }}>
                I started Amar Herbal Origins after years of working directly with Gujarat's psyllium and herb farming communities. I have personally visited over 250 farms, tested hundreds of batches in our in-house lab, and built export relationships across 30+ countries — from first-contact inquiry to delivered shipment.
              </p>
              <p style={{ color: '#6b7280', lineHeight: 1.85, fontSize: '0.97rem', marginBottom: '1.5rem' }}>
                This hands-on experience means our quality standards aren't just written policies — they reflect what I've seen work and fail in real export operations. Every COA we issue, every certification we maintain, is something I personally stand behind.
              </p>

              {/* Experience proof points */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
                {[
                  { icon: '🌾', text: '250+ farms visited directly' },
                  { icon: '🔬', text: '10+ years in agri-commodity trade' },
                  { icon: '🌍', text: 'Personally managed exports to 30+ countries' },
                  { icon: '📋', text: 'Oversees every batch COA & certification' },
                ].map((item) => (
                  <div
                    key={item.text}
                    style={{
                      background: '#FAF8F4',
                      border: '1px solid #E5E0D8',
                      borderRadius: '10px',
                      padding: '0.875rem',
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '0.5rem',
                    }}
                  >
                    <span style={{ fontSize: '1.1rem', flexShrink: 0 }}>{item.icon}</span>
                    <span style={{ color: '#374151', fontSize: '0.82rem', lineHeight: 1.5 }}>{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Journey / Timeline ── */}
      <section style={{ background: 'white', padding: '5rem 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <div className="section-label" style={{ marginBottom: '0.75rem' }}>MILESTONES</div>
            <h2 className="section-heading">
              Our{' '}
              <em style={{ color: '#D97706' }}>Journey</em>
            </h2>
          </div>

          <div style={{ maxWidth: '760px', margin: '0 auto', position: 'relative' }}>
            {/* Vertical line */}
            <div
              style={{
                position: 'absolute',
                left: '72px',
                top: 0,
                bottom: 0,
                width: '2px',
                background: 'linear-gradient(to bottom, #D97706, rgba(217,119,6,0.1))',
              }}
            />

            {milestones.map((m, i) => (
              <div
                key={m.year}
                style={{
                  display: 'flex',
                  gap: '1.5rem',
                  alignItems: 'flex-start',
                  marginBottom: i < milestones.length - 1 ? '2.5rem' : 0,
                  position: 'relative',
                }}
              >
                {/* Year pill */}
                <div
                  style={{
                    background: i === milestones.length - 1 ? '#D97706' : '#1C1204',
                    color: 'white',
                    padding: '0.4rem 0.75rem',
                    borderRadius: '6px',
                    fontWeight: 700,
                    fontSize: '0.85rem',
                    flexShrink: 0,
                    width: '60px',
                    textAlign: 'center',
                    position: 'relative',
                    zIndex: 1,
                  }}
                >
                  {m.year}
                </div>

                {/* Dot */}
                <div
                  style={{
                    width: '12px',
                    height: '12px',
                    borderRadius: '50%',
                    background: i === milestones.length - 1 ? '#D97706' : '#E5E0D8',
                    border: '3px solid white',
                    boxShadow: '0 0 0 2px #D97706',
                    flexShrink: 0,
                    marginTop: '0.5rem',
                    position: 'relative',
                    zIndex: 1,
                  }}
                />

                {/* Content */}
                <div
                  style={{
                    background: '#FAF8F4',
                    border: '1px solid #E5E0D8',
                    borderRadius: '10px',
                    padding: '1rem 1.25rem',
                    flex: 1,
                  }}
                >
                  <p style={{ color: '#374151', fontSize: '0.92rem', lineHeight: 1.6, margin: 0 }}>
                    {m.event}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Markets We Serve ── */}
      <section style={{ background: '#FAF8F4', padding: '5rem 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div className="section-label" style={{ marginBottom: '0.75rem' }}>GLOBAL REACH</div>
            <h2 className="section-heading">
              Markets We{' '}
              <em style={{ color: '#D97706' }}>Serve</em>
            </h2>
            <p style={{ color: '#6b7280', marginTop: '1rem', fontSize: '1rem', maxWidth: '460px', margin: '1rem auto 0' }}>
              Trusted by importers, distributors, and manufacturers in 30+ countries.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '1rem',
            }}
          >
            {markets.map(m => (
              <div
                key={m.country}
                className="about-market-card"
                style={{
                  background: 'white',
                  border: '1px solid #E5E0D8',
                  borderRadius: '10px',
                  padding: '1.25rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.875rem',
                  transition: 'all 0.2s',
                }}
              >
                <span style={{ fontSize: '1.75rem' }}>{m.flag}</span>
                <div>
                  <div style={{ fontWeight: 700, fontSize: '0.9rem', color: '#1a1a1a' }}>{m.country}</div>
                  <div style={{ color: '#D97706', fontSize: '0.75rem', fontWeight: 600 }}>{m.segment}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section
        style={{
          background: 'linear-gradient(135deg, #1C1204 0%, #2d1f08 100%)',
          padding: '5rem 0',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            position: 'absolute',
            bottom: '-80px',
            left: '-80px',
            width: '400px',
            height: '400px',
            background: 'radial-gradient(circle, rgba(217,119,6,0.12) 0%, transparent 70%)',
            pointerEvents: 'none',
          }}
        />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <h2
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 'clamp(1.8rem, 4vw, 3rem)',
              fontWeight: 700,
              color: 'white',
              marginBottom: '1rem',
            }}
          >
            Let's Grow Together
          </h2>
          <p
            style={{
              color: '#b8a98a',
              fontSize: '1.05rem',
              maxWidth: '480px',
              margin: '0 auto 2.5rem',
              lineHeight: 1.7,
            }}
          >
            Whether you're a first-time buyer or a long-term partner, we're ready to discuss
            your requirements and build a reliable supply relationship.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link
              href={`/${locale}/contact`}
              style={{
                background: '#D97706',
                color: 'white',
                padding: '0.9rem 2.25rem',
                borderRadius: '50px',
                fontWeight: 700,
                textDecoration: 'none',
                fontSize: '0.95rem',
              }}
            >
              Start a Conversation
            </Link>
            <Link
              href={`/${locale}/product`}
              style={{
                background: 'rgba(255,255,255,0.08)',
                border: '1px solid rgba(255,255,255,0.2)',
                color: 'white',
                padding: '0.9rem 2.25rem',
                borderRadius: '50px',
                fontWeight: 700,
                textDecoration: 'none',
                fontSize: '0.95rem',
              }}
            >
              View Our Products →
            </Link>
          </div>
        </div>
      </section>

      {/* ── All Site URLs Panel ── */}
      <SiteUrlsPanel />
    </main>
  );
}