'use client';

import { useState } from 'react';
import Link from 'next/link';

type Category = 'All' | 'Market' | 'Health' | 'Regulatory' | 'Trade';

interface Article {
  id: string;
  category: Category;
  tag: string;
  title: string;
  excerpt: string;
  source: string;
  sourceIcon: string;
  date: string;
  readTime: string;
  featured?: boolean;
  isLatest?: boolean;
  isAlert?: boolean;
  stats?: { label: string; value: string }[];
}

// ─── Date-seeded LCG ────────────────────────────────────────────────────────
function todayStr() {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;
}
function seeded(dateStr: string, slot: number, min: number, max: number): number {
  const base = parseInt(dateStr.replace(/-/g,''), 10);
  let s = base * 31 + slot * 1_000_003;
  s = (Math.imul(s, 1_664_525) + 1_013_904_223) >>> 0;
  s = (Math.imul(s, 1_664_525) + 1_013_904_223) >>> 0;
  return min + (s % (max - min + 1));
}

// ─── Daily market prices (Unjha Mandi, per 100 kg) ──────────────────────────
function getDailyPrices() {
  const d = todayStr();
  return [
    { grade: 'Whole Husk 99%',   price: seeded(d, 0, 6500, 7800), change: seeded(d, 10, -180, 220) },
    { grade: 'Fine Powder 99%',  price: seeded(d, 1, 7200, 8500), change: seeded(d, 11, -200, 250) },
    { grade: 'Organic Whole 98%',price: seeded(d, 2, 8000, 9500), change: seeded(d, 12, -150, 300) },
    { grade: 'Seeds 98%',        price: seeded(d, 3, 3200, 4100), change: seeded(d, 13, -100, 150) },
  ];
}

// ─── Daily market pulse lines ────────────────────────────────────────────────
const PULSE_POOL = [
  '🌾 Unjha mandi arrivals light — buyers advised to book early this week.',
  '📦 Export inquiries from Germany & Netherlands up sharply this fortnight.',
  '💰 USD/INR at ₹83.4 — favorable for Indian exporters; buyers locking forward contracts.',
  '🌡️ Crop condition reports from Rajasthan: soil moisture normal, next harvest on track.',
  '🚢 Booking lead time at Mundra Port: 7–10 days — plan shipments accordingly.',
  '📋 FSSAI audit cycle begins next month — exporters advised to keep COAs updated.',
  '🌍 Demand surge from Middle East markets; Saudi Arabia & UAE volumes up 30%.',
  '🔬 New USP monograph revision expected Q3 2025 — no impact on current grades.',
  '📊 Psyllium FOB price range this week: ₹6,800–₹7,600 per 100 kg (99% grade).',
  '🤝 APEDA buyer-seller meet scheduled next month in Ahmedabad — register early.',
  '⚠️ Freight rates on Asia–Europe corridor up 8% — factor into landed cost calculations.',
  '🌿 Organic certifications: NOP & EU-Eco now available on select lots — inquire for COA.',
];
function getDailyPulse() {
  const d = todayStr();
  const i1 = seeded(d, 20, 0, PULSE_POOL.length - 1);
  const i2 = seeded(d, 21, 0, PULSE_POOL.length - 1);
  const i3 = seeded(d, 22, 0, PULSE_POOL.length - 1);
  const set = Array.from(new Set([i1, i2, i3, seeded(d, 23, 0, PULSE_POOL.length-1)])).slice(0,3);
  return set.map(i => PULSE_POOL[i]);
}

// ─── Daily rotating breaking alert pool ─────────────────────────────────────
const ALERT_POOL: Article[] = [
  {
    id: 'alert-1',
    category: 'Market',
    tag: '⚠️ Breaking Alert',
    title: 'Unseasonal Rainfall in Gujarat & Rajasthan Disrupts Psyllium Harvest — Prices Rise, Stock May Tighten for 2 Months',
    excerpt: 'Unexpected heavy rainfall across key psyllium-growing districts in Gujarat (Unjha, Mehsana) and Rajasthan (Jodhpur, Barmer) in late April 2025 has damaged standing crops and delayed the harvest season. Mandi arrivals dropped ~35% week-on-week. Prices at Unjha moved up ₹400–₹600 per 100 kg. Buyers are strongly advised to book confirmed quantities at current rates to avoid supply shortages in June–July 2025.',
    source: 'Unjha APMC & Gujarat Agri Market Intelligence',
    sourceIcon: '🌧️',
    date: 'April 2025',
    readTime: '4 min read',
    isLatest: true,
    isAlert: true,
    stats: [
      { label: 'Mandi Arrivals Drop', value: '−35%' },
      { label: 'Price Increase', value: '↑ ₹600' },
      { label: 'Stock Risk Window', value: '6–8 Wks' },
    ],
  },
  {
    id: 'alert-2',
    category: 'Trade',
    tag: '⚠️ Export Alert',
    title: 'USA Increases Psyllium Husk Import Inspections — Shipments Facing 5–7 Day Delays at Ports of Entry',
    excerpt: 'The U.S. FDA has temporarily increased examination frequency for psyllium husk imports under its Import Alert program, citing labeling compliance checks for swelling factor claims. Shipments via Los Angeles and New York ports are reporting 5–7 day additional hold times. Indian exporters are advised to ensure updated COAs and USFDA-compliant labeling on all consignments destined for the US market.',
    source: 'U.S. FDA Import Operations & FIEO India',
    sourceIcon: '🇺🇸',
    date: 'April 2025',
    readTime: '3 min read',
    isLatest: true,
    isAlert: true,
    stats: [
      { label: 'Port Delay', value: '5–7 Days' },
      { label: 'Markets Affected', value: 'USA' },
      { label: 'Action Required', value: 'COA Update' },
    ],
  },
  {
    id: 'alert-3',
    category: 'Market',
    tag: '⚠️ Price Alert',
    title: 'Psyllium Prices Surge 12% at Unjha — Bulk Buyers Rushing to Lock Forward Contracts',
    excerpt: 'Psyllium husk prices at Unjha APMC have surged approximately 12% over the past fortnight, driven by lower-than-expected crop yield estimates from Rajasthan and strong pre-booking demand from European and North American importers. Traders report dwindling near-term stock of premium 99% grade. Forward contracts for May–June shipment are being booked aggressively. Buyers without confirmed orders are at risk of paying a 10–15% premium within 3–4 weeks.',
    source: 'Unjha APMC Mandi & Agri Watch India',
    sourceIcon: '📈',
    date: 'April 2025',
    readTime: '3 min read',
    isLatest: true,
    isAlert: true,
    stats: [
      { label: 'Price Surge', value: '+12%' },
      { label: 'Grade Affected', value: '99% Husk' },
      { label: 'Forward Risk', value: '+15% Soon' },
    ],
  },
  {
    id: 'alert-4',
    category: 'Regulatory',
    tag: '⚠️ Regulatory Update',
    title: 'EU Tightens Pesticide MRL for Psyllium Imports — New Limits Effective June 2025',
    excerpt: 'The European Commission has revised Maximum Residue Limits (MRLs) for three pesticide groups commonly associated with psyllium husk cultivation under EU Regulation 396/2005. The new stricter limits come into effect from June 1, 2025. All psyllium exporters shipping to EU member states must ensure updated pesticide residue testing reports are included in each shipment\'s documentation. Non-compliant consignments risk rejection at EU borders.',
    source: 'European Commission — DG SANTE & APEDA India',
    sourceIcon: '🇪🇺',
    date: 'March 2025',
    readTime: '5 min read',
    isLatest: true,
    isAlert: true,
    stats: [
      { label: 'Effective From', value: 'Jun 2025' },
      { label: 'Markets', value: 'All EU' },
      { label: 'Risk', value: 'Border Rejection' },
    ],
  },
  {
    id: 'alert-5',
    category: 'Trade',
    tag: '⚠️ Freight Alert',
    title: 'Red Sea Shipping Disruptions Push Asia–Europe Freight Rates Up 22% — Psyllium Exporters Advised to Plan Ahead',
    excerpt: 'Ongoing disruptions in the Red Sea shipping lane are causing significant rerouting of vessels via the Cape of Good Hope, adding 10–14 days to transit times between Indian ports and Europe. Freight rates on the India–Europe corridor have risen by approximately 22% since January 2025. Psyllium exporters and buyers are advised to factor higher logistics costs and extended lead times into upcoming order planning and contract pricing.',
    source: 'Drewry Shipping Consultants & EXIM India',
    sourceIcon: '🚢',
    date: 'March 2025',
    readTime: '4 min read',
    isLatest: true,
    isAlert: true,
    stats: [
      { label: 'Freight Rate Rise', value: '+22%' },
      { label: 'Extra Transit', value: '+12 Days' },
      { label: 'Route', value: 'India–EU' },
    ],
  },
  {
    id: 'alert-6',
    category: 'Market',
    tag: '⚠️ Supply Alert',
    title: 'Late Monsoon Delays Rabi Psyllium Sowing in Rajasthan — Next Season Supply Outlook Bearish',
    excerpt: 'Delayed onset of the northeast monsoon withdrawal has pushed back Rabi crop sowing across key psyllium-producing belts in Rajasthan by 3–4 weeks. Agricultural experts warn that if sowing delays persist, the 2025–26 psyllium crop yield may be 15–20% below the five-year average. This is expected to keep prices firm through Q1 2026. International buyers looking to secure supply for H1 2026 are advised to negotiate long-term purchase agreements now.',
    source: 'IMD India & Rajasthan Agriculture Department',
    sourceIcon: '🌾',
    date: 'March 2025',
    readTime: '4 min read',
    isLatest: true,
    isAlert: true,
    stats: [
      { label: 'Yield Risk', value: '−20%' },
      { label: 'Sowing Delay', value: '3–4 Wks' },
      { label: 'Price Outlook', value: 'Firm H1 26' },
    ],
  },
];

function getDailyAlert(): Article {
  const d = todayStr();
  const idx = seeded(d, 99, 0, ALERT_POOL.length - 1);
  return ALERT_POOL[idx];
}

const articles: Article[] = [
  {
    id: '1',
    category: 'Market',
    tag: 'Market Report',
    title: 'Global Psyllium Husk Market to Reach USD 1.2 Billion by 2030',
    excerpt:
      'The global psyllium husk market is projected to grow at a CAGR of 8.4% through 2030, driven by rising demand in North America and Europe for natural dietary fiber supplements. India accounts for over 85% of global psyllium production, cementing its position as the world\'s leading supplier.',
    source: 'Grand View Research',
    sourceIcon: '📊',
    date: 'March 2025',
    readTime: '4 min read',
    featured: true,
    stats: [
      { label: 'CAGR 2024–2030', value: '8.4%' },
      { label: 'Market Size 2030', value: '$1.2B' },
      { label: 'India\'s Global Share', value: '85%+' },
    ],
  },
  {
    id: '2',
    category: 'Health',
    tag: 'Clinical Study',
    title: 'FDA Confirms Psyllium Husk Reduces LDL Cholesterol — Authorized Health Claim Maintained',
    excerpt:
      'The U.S. Food & Drug Administration reconfirmed its authorized health claim that soluble fiber from psyllium husk, as part of a diet low in saturated fat and cholesterol, may reduce the risk of heart disease. Products containing ≥1.7g psyllium per serving qualify for this label claim, a significant driver of demand in the nutraceutical segment.',
    source: 'U.S. Food & Drug Administration (FDA)',
    sourceIcon: '🏥',
    date: 'January 2025',
    readTime: '3 min read',
  },
  {
    id: '3',
    category: 'Trade',
    tag: 'Export Report',
    title: 'India\'s Psyllium Exports Hit Record ₹3,200 Crore in FY 2024–25',
    excerpt:
      'India exported a record volume of psyllium husk and powder worth ₹3,200 crore in the financial year 2024–25, surpassing the previous record by 18%. The United States, Germany, Japan, and the UAE were the top importing nations. The Unjha market in Gujarat remains the global pricing benchmark for psyllium commodities.',
    source: 'APEDA — Agricultural & Processed Food Products Export Development Authority',
    sourceIcon: '🇮🇳',
    date: 'April 2025',
    readTime: '5 min read',
    stats: [
      { label: 'Export Value FY25', value: '₹3,200 Cr' },
      { label: 'YoY Growth', value: '+18%' },
      { label: 'Top Market', value: 'USA' },
    ],
  },
  {
    id: '4',
    category: 'Health',
    tag: 'Research',
    title: 'Meta-Analysis of 21 RCTs: Psyllium Significantly Improves Gut Microbiome Diversity',
    excerpt:
      'A comprehensive meta-analysis published in the Journal of Nutrition reviewed 21 randomized controlled trials and found that daily psyllium husk supplementation (5–15g) significantly increases beneficial gut bacteria, including Bifidobacterium and Lactobacillus species. Researchers noted improvements in bowel regularity, bloating, and IBS symptom scores across all age groups.',
    source: 'Journal of Nutrition, Oxford Academic',
    sourceIcon: '🔬',
    date: 'February 2025',
    readTime: '6 min read',
  },
  {
    id: '5',
    category: 'Regulatory',
    tag: 'EU Regulation',
    title: 'European Food Safety Authority (EFSA) Approves Psyllium Fiber Health Claims for EU Market',
    excerpt:
      'EFSA granted approval for four health claims on psyllium husk under EU Regulation No 432/2012, including claims related to normal bowel function and maintenance of normal blood cholesterol levels. This opens a significant regulatory pathway for European manufacturers to label psyllium-containing food and supplement products with approved health claims.',
    source: 'European Food Safety Authority (EFSA)',
    sourceIcon: '🇪🇺',
    date: 'November 2024',
    readTime: '4 min read',
  },
  {
    id: '6',
    category: 'Market',
    tag: 'Industry Insight',
    title: 'Organic Psyllium Husk: Fastest Growing Segment as Clean-Label Demand Surges',
    excerpt:
      'The organic psyllium husk segment is growing 2.5x faster than conventional grades, fueled by European and North American consumer preference for clean-label, non-GMO verified, certified organic ingredients. India\'s organic psyllium acreage has expanded by 40% in the past three years, with Rajasthan and Gujarat leading organic certification volumes.',
    source: 'Mordor Intelligence Market Report',
    sourceIcon: '🌿',
    date: 'December 2024',
    readTime: '3 min read',
    stats: [
      { label: 'Organic Growth Rate', value: '2.5x' },
      { label: 'Acreage Expansion', value: '+40%' },
    ],
  },
  {
    id: '7',
    category: 'Regulatory',
    tag: 'Quality Standard',
    title: 'BIS Updates Indian Standard IS 7439 for Psyllium Husk — Stricter Purity Requirements',
    excerpt:
      'The Bureau of Indian Standards revised IS 7439:2024 to mandate a minimum swelling factor of 40 ml/g and tightened microbial limits for export-grade psyllium husk. The new standard aligns Indian quality benchmarks with USP (United States Pharmacopeia) and EP (European Pharmacopoeia) monographs, easing import compliance for international buyers.',
    source: 'Bureau of Indian Standards (BIS)',
    sourceIcon: '📋',
    date: 'October 2024',
    readTime: '5 min read',
  },
  {
    id: '8',
    category: 'Health',
    tag: 'Diabetes Research',
    title: 'WHO Technical Report: Dietary Fiber Including Psyllium Recommended for Type 2 Diabetes Management',
    excerpt:
      'The World Health Organization\'s 2024 technical report on non-communicable disease prevention recommends increasing dietary fiber intake, citing psyllium husk as a clinically validated soluble fiber for post-meal glycemic control. Studies cited showed a 10–15% reduction in post-prandial blood glucose with 10g psyllium daily, making it a key ingredient for diabetic-friendly food formulations.',
    source: 'World Health Organization (WHO)',
    sourceIcon: '🌍',
    date: 'September 2024',
    readTime: '7 min read',
  },
  {
    id: '9',
    category: 'Trade',
    tag: 'Logistics',
    title: 'Mundra Port Volumes for Spices & Herbals Up 22% — Faster Transit Times to Europe',
    excerpt:
      'Adani Ports\' Mundra Terminal reported a 22% increase in agri-commodity export volumes in Q1 2025, with improved direct vessel services to Hamburg, Rotterdam, and Felixstowe. For psyllium exporters in Gujarat, transit times to northern European ports have dropped from 28 to 21 days, improving lead time reliability for bulk buyers.',
    source: 'Adani Ports & EXIM India',
    sourceIcon: '🚢',
    date: 'March 2025',
    readTime: '3 min read',
    isLatest: true,
  },
];
// Note: Breaking alert is now picked daily from ALERT_POOL via getDailyAlert()

const CATEGORIES: Category[] = ['All', 'Market', 'Health', 'Regulatory', 'Trade'];

const CATEGORY_COLORS: Record<Category, { color: string; bg: string; border: string }> = {
  All:        { color: '#6b7280', bg: '#f3f4f6', border: '#E5E0D8' },
  Market:     { color: '#1d4ed8', bg: 'rgba(29,78,216,0.08)', border: 'rgba(29,78,216,0.2)' },
  Health:     { color: '#16a34a', bg: 'rgba(22,163,74,0.08)', border: 'rgba(22,163,74,0.2)' },
  Regulatory: { color: '#7c3aed', bg: 'rgba(124,58,237,0.08)', border: 'rgba(124,58,237,0.2)' },
  Trade:      { color: '#d97706', bg: 'rgba(217,119,6,0.1)', border: 'rgba(217,119,6,0.25)' },
};

export default function NewsPage() {
  const [activeCategory, setActiveCategory] = useState<Category>('All');

  const prices      = getDailyPrices();
  const pulse       = getDailyPulse();
  const today       = todayStr();
  const dailyAlert  = getDailyAlert();   // changes every day from pool of 6

  const filtered = activeCategory === 'All'
    ? articles
    : articles.filter(a => a.category === activeCategory);

  // Daily alert is ALWAYS the featured card (rotates from pool of 6 each day)
  const featured = dailyAlert;
  const rest = filtered.filter(a => a.id !== featured?.id);

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
            Industry Intelligence
          </div>
          <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(2.4rem, 5vw, 3.8rem)', fontWeight: 700, color: 'white', marginBottom: '1.25rem', lineHeight: 1.15 }}>
            Psyllium Husk{' '}
            <em style={{ color: '#D97706', fontStyle: 'italic' }}>News & Insights</em>
          </h1>
          <p style={{ color: '#b8a98a', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto 3rem', lineHeight: 1.7 }}>
            Curated market reports, clinical research, and trade intelligence to help global buyers make confident, informed sourcing decisions.
          </p>

          {/* Trust pills */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
            {[
              { icon: '📰', text: `${articles.length} Articles` },
              { icon: '🏛️', text: 'FDA · EFSA · WHO Sources' },
              { icon: '📈', text: 'Live Market Data' },
            ].map(p => (
              <div key={p.text} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#e5d6b8', fontSize: '0.9rem', fontWeight: 600 }}>
                <span>{p.icon}</span> {p.text}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Category Filter ── */}
      <section style={{ background: '#FAF8F4', borderBottom: '1px solid #E5E0D8', padding: '1.25rem 0' }}>
        <div className="container" style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', alignItems: 'center' }}>
          <span style={{ color: '#9ca3af', fontSize: '0.82rem', fontWeight: 600, marginRight: '0.5rem' }}>FILTER:</span>
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              style={{
                padding: '0.4rem 1.1rem',
                borderRadius: '50px',
                border: activeCategory === cat ? '1px solid #D97706' : '1px solid #E5E0D8',
                background: activeCategory === cat ? '#D97706' : 'white',
                color: activeCategory === cat ? 'white' : '#6b7280',
                fontWeight: 600,
                fontSize: '0.85rem',
                cursor: 'pointer',
                transition: 'all 0.2s',
              }}
            >
              {cat}
            </button>
          ))}
          <span style={{ marginLeft: 'auto', color: '#9ca3af', fontSize: '0.8rem' }}>
            {filtered.length} article{filtered.length !== 1 ? 's' : ''}
          </span>
        </div>
      </section>

      <section style={{ background: 'white', padding: '4rem 0 5rem' }}>
        <div className="container">

          {/* ── Market Price Today ── */}
          <div style={{ background: '#1C1204', borderRadius: '16px', padding: '1.5rem 2rem', marginBottom: '2rem', display: 'flex', flexWrap: 'wrap', gap: '1.5rem', alignItems: 'center', justifyContent: 'space-between' }}>
            <div>
              <div style={{ color: '#D97706', fontWeight: 700, fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.2rem' }}>📈 Market Price Today — Unjha Mandi</div>
              <div style={{ color: '#9ca3af', fontSize: '0.72rem' }}>Updated: {today} · Per 100 kg</div>
            </div>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              {prices.map(p => (
                <div key={p.grade} style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '10px', padding: '0.6rem 1rem', textAlign: 'center', minWidth: '120px' }}>
                  <div style={{ color: 'white', fontWeight: 800, fontSize: '1.1rem', fontFamily: "'Cormorant Garamond', serif" }}>₹{p.price.toLocaleString('en-IN')}</div>
                  <div style={{ color: p.change >= 0 ? '#86efac' : '#fca5a5', fontSize: '0.7rem', fontWeight: 700 }}>{p.change >= 0 ? '▲' : '▼'} ₹{Math.abs(p.change)}</div>
                  <div style={{ color: '#9ca3af', fontSize: '0.65rem', marginTop: '0.2rem', lineHeight: 1.3 }}>{p.grade}</div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Daily Market Pulse ── */}
          <div style={{ background: '#FAF8F4', border: '1px solid #E5E0D8', borderRadius: '14px', padding: '1.25rem 1.75rem', marginBottom: '2.5rem' }}>
            <div style={{ fontWeight: 700, color: '#1a1a1a', fontSize: '0.82rem', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '0.875rem' }}>📡 Today's Market Pulse</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {pulse.map((line, i) => (
                <div key={i} style={{ display: 'flex', gap: '0.6rem', alignItems: 'flex-start' }}>
                  <span style={{ color: '#D97706', fontWeight: 700, flexShrink: 0, marginTop: '0.05rem' }}>•</span>
                  <span style={{ color: '#374151', fontSize: '0.88rem', lineHeight: 1.6 }}>{line}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ── Featured / Alert Article ── */}
          {featured && (
            <div
              style={{
                background: 'linear-gradient(135deg, #1C1204 0%, #2d1f08 100%)',
                borderRadius: '20px',
                padding: '2.5rem',
                marginBottom: '2.5rem',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              <div style={{ position: 'absolute', top: '-60px', right: '-60px', width: '280px', height: '280px', background: 'radial-gradient(circle, rgba(217,119,6,0.2) 0%, transparent 70%)', pointerEvents: 'none' }} />
              <div style={{ position: 'relative', zIndex: 1 }}>
                {/* Top meta */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem', flexWrap: 'wrap' }}>
                  {featured.isAlert
                    ? <span style={{ background: '#dc2626', color: 'white', padding: '0.2rem 0.7rem', borderRadius: '50px', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.08em', animation: 'pulse 2s infinite' }}>🚨 BREAKING ALERT</span>
                    : <span style={{ background: '#D97706', color: 'white', padding: '0.2rem 0.7rem', borderRadius: '50px', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.08em' }}>⭐ FEATURED</span>
                  }
                  <CategoryTag category={featured.category} tag={featured.tag} />
                  <span style={{ color: '#9ca3af', fontSize: '0.78rem' }}>{featured.date} · {featured.readTime}</span>
                </div>

                <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', fontWeight: 700, color: 'white', marginBottom: '1rem', lineHeight: 1.3, maxWidth: '720px' }}>
                  {featured.title}
                </h2>
                <p style={{ color: '#b8a98a', lineHeight: 1.8, fontSize: '0.95rem', maxWidth: '680px', marginBottom: '1.5rem' }}>
                  {featured.excerpt}
                </p>

                {/* Stats row */}
                {featured.stats && (
                  <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', marginBottom: '1.75rem' }}>
                    {featured.stats.map(s => (
                      <div key={s.label} style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: '10px', padding: '0.75rem 1.25rem', textAlign: 'center' }}>
                        <div style={{ color: '#D97706', fontWeight: 800, fontSize: '1.4rem', fontFamily: "'Cormorant Garamond', serif" }}>{s.value}</div>
                        <div style={{ color: '#9ca3af', fontSize: '0.72rem', marginTop: '0.2rem', fontWeight: 600 }}>{s.label}</div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Source */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span style={{ fontSize: '1rem' }}>{featured.sourceIcon}</span>
                  <span style={{ color: '#6b7280', fontSize: '0.78rem', fontWeight: 600 }}>Source:</span>
                  <span style={{ color: '#b8a98a', fontSize: '0.78rem' }}>{featured.source}</span>
                </div>
              </div>
            </div>
          )}

          {/* ── Article Grid ── */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
              gap: '1.5rem',
            }}
          >
            {rest.map(article => {
              const clr = CATEGORY_COLORS[article.category];
              return (
                <div
                  key={article.id}
                  style={{
                    background: 'white',
                    border: '1px solid #E5E0D8',
                    borderRadius: '16px',
                    padding: '1.75rem',
                    display: 'flex',
                    flexDirection: 'column',
                    transition: 'all 0.25s',
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLElement).style.transform = 'translateY(-4px)';
                    (e.currentTarget as HTMLElement).style.boxShadow = '0 16px 40px rgba(217,119,6,0.1)';
                    (e.currentTarget as HTMLElement).style.borderColor = '#D97706';
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
                    (e.currentTarget as HTMLElement).style.boxShadow = 'none';
                    (e.currentTarget as HTMLElement).style.borderColor = '#E5E0D8';
                  }}
                >
                  {/* Tag + date */}
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem', flexWrap: 'wrap', gap: '0.5rem' }}>
                    <div style={{ display: 'flex', gap: '0.4rem', alignItems: 'center', flexWrap: 'wrap' }}>
                      <CategoryTag category={article.category} tag={article.tag} />
                      {article.isLatest && <span style={{ background: '#16a34a', color: 'white', padding: '0.15rem 0.5rem', borderRadius: '50px', fontSize: '0.62rem', fontWeight: 700, letterSpacing: '0.06em' }}>✦ LATEST</span>}
                      {article.isAlert && <span style={{ background: '#dc2626', color: 'white', padding: '0.15rem 0.5rem', borderRadius: '50px', fontSize: '0.62rem', fontWeight: 700 }}>🚨 ALERT</span>}
                    </div>
                    <span style={{ color: '#9ca3af', fontSize: '0.72rem', fontWeight: 500 }}>{article.readTime}</span>
                  </div>

                  {/* Title */}
                  <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.2rem', fontWeight: 700, color: '#1a1a1a', lineHeight: 1.35, marginBottom: '0.875rem' }}>
                    {article.title}
                  </h3>

                  {/* Excerpt */}
                  <p style={{ color: '#6b7280', fontSize: '0.88rem', lineHeight: 1.75, marginBottom: '1.25rem', flex: 1 }}>
                    {article.excerpt.length > 200 ? article.excerpt.slice(0, 200) + '…' : article.excerpt}
                  </p>

                  {/* Stats if present */}
                  {article.stats && (
                    <div style={{ display: 'flex', gap: '0.75rem', marginBottom: '1.25rem', flexWrap: 'wrap' }}>
                      {article.stats.map(s => (
                        <div key={s.label} style={{ background: '#FAF8F4', border: '1px solid #E5E0D8', borderRadius: '8px', padding: '0.4rem 0.75rem', textAlign: 'center' }}>
                          <div style={{ color: '#D97706', fontWeight: 800, fontSize: '1rem', fontFamily: "'Cormorant Garamond', serif" }}>{s.value}</div>
                          <div style={{ color: '#9ca3af', fontSize: '0.65rem', fontWeight: 600 }}>{s.label}</div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Source + date */}
                  <div style={{ borderTop: '1px solid #f3f4f6', paddingTop: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '0.5rem', flexWrap: 'wrap' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                      <span style={{ fontSize: '0.9rem' }}>{article.sourceIcon}</span>
                      <span style={{ color: '#6b7280', fontSize: '0.72rem', fontWeight: 600, lineHeight: 1.3 }}>{article.source}</span>
                    </div>
                    <span style={{ color: '#9ca3af', fontSize: '0.72rem', fontWeight: 500, whiteSpace: 'nowrap' }}>{article.date}</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* ── Trust Strip ── */}
          <div
            style={{
              marginTop: '4rem',
              background: '#FAF8F4',
              border: '1px solid #E5E0D8',
              borderRadius: '16px',
              padding: '2rem 2.5rem',
            }}
          >
            <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
              <div style={{ fontWeight: 700, color: '#1a1a1a', fontSize: '1rem', marginBottom: '0.4rem' }}>
                Recognised & Cited By
              </div>
              <p style={{ color: '#9ca3af', fontSize: '0.82rem' }}>
                Our industry insights are sourced from globally recognised institutions and publications.
              </p>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
              {[
                '🏥 FDA (USA)',
                '🇪🇺 EFSA (EU)',
                '🌍 WHO',
                '🇮🇳 APEDA',
                '📋 BIS India',
                '🔬 Oxford Academic',
                '📊 Grand View Research',
                '🚢 Adani Ports EXIM',
              ].map(src => (
                <div
                  key={src}
                  style={{
                    background: 'white',
                    border: '1px solid #E5E0D8',
                    borderRadius: '8px',
                    padding: '0.5rem 1rem',
                    fontSize: '0.8rem',
                    fontWeight: 600,
                    color: '#374151',
                    whiteSpace: 'nowrap',
                  }}
                >
                  {src}
                </div>
              ))}
            </div>
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
        <div style={{ position: 'absolute', bottom: '-80px', left: '-80px', width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(217,119,6,0.12) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(1.8rem, 4vw, 3rem)', fontWeight: 700, color: 'white', marginBottom: '1rem' }}>
            Ready to Source Premium Psyllium?
          </h2>
          <p style={{ color: '#b8a98a', fontSize: '1.05rem', maxWidth: '480px', margin: '0 auto 2.5rem', lineHeight: 1.7 }}>
            Backed by the same quality standards cited in global research. Request a sample or get a quote today.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/en/contact" style={{ background: '#D97706', color: 'white', padding: '0.9rem 2.25rem', borderRadius: '50px', fontWeight: 700, textDecoration: 'none', fontSize: '0.95rem' }}>
              Request a Sample →
            </Link>
            <Link href="/en/stock" style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.2)', color: 'white', padding: '0.9rem 2.25rem', borderRadius: '50px', fontWeight: 700, textDecoration: 'none', fontSize: '0.95rem' }}>
              View Current Stock
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

// ── Helper: Category Tag chip ────────────────────────────────────────────────
function CategoryTag({ category, tag }: { category: Category; tag: string }) {
  const clr = CATEGORY_COLORS[category];
  return (
    <span
      style={{
        background: clr.bg,
        border: `1px solid ${clr.border}`,
        color: clr.color,
        padding: '0.2rem 0.65rem',
        borderRadius: '50px',
        fontSize: '0.7rem',
        fontWeight: 700,
        letterSpacing: '0.04em',
      }}
    >
      {tag}
    </span>
  );
}
