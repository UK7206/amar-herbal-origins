'use client';

import { useState } from 'react';
import Link from 'next/link';

type StockStatus = 'available' | 'low' | 'reserved';

interface StockItem {
  id: string;
  grade: string;
  variant: string;
  icon: string;
  totalStock: number;
  available: number;
  reserved: number;
  unit: string;
  location: string;
  lastUpdated: string;
  status: StockStatus;
  minOrder: number;
  purity: string;
  huskContent: string;
  moisture: string;
}

// ─── Date-seeded pseudo-random (LCG) ─────────────────────────────────────────
// Returns a stable integer in [min, max] for a given date string + slot index.
// The value stays the same all day and changes automatically the next day.
function seededRandInt(dateStr: string, index: number, min: number, max: number): number {
  // Build a numeric seed from the date + slot index
  const dateNum = parseInt(dateStr.replace(/-/g, ''), 10); // e.g. 20260426
  let seed = dateNum * 31 + index * 1_000_003;
  // LCG: a=1664525, c=1013904223, m=2^32
  seed = (Math.imul(seed, 1_664_525) + 1_013_904_223) >>> 0;
  seed = (Math.imul(seed, 1_664_525) + 1_013_904_223) >>> 0;
  return min + (seed % (max - min + 1));
}

// ─── Base catalogue (static metadata, quantities generated daily) ─────────────
function buildStockData(): StockItem[] {
  const today = new Date();
  const dateStr = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`;

  const catalogue = [
    {
      id: 'PSH-WH-99', grade: 'Psyllium Husk', variant: 'Whole Husk 99% Purity', icon: '🌾',
      location: 'Warehouse A — Unjha, Gujarat', minOrder: 5,
      purity: '99%', huskContent: '≥ 85%', moisture: '≤ 12%',
    },
    {
      id: 'PSP-PH-99', grade: 'Psyllium Powder', variant: 'Fine Powder 99% Purity', icon: '🔬',
      location: 'Warehouse B — Ahmedabad, Gujarat', minOrder: 2,
      purity: '99%', huskContent: '≥ 88%', moisture: '≤ 10%',
    },
    {
      id: 'PSO-WH-98', grade: 'Organic Husk', variant: 'Organic Certified Whole', icon: '🌿',
      location: 'Warehouse A — Unjha, Gujarat', minOrder: 3,
      purity: '98%', huskContent: '≥ 83%', moisture: '≤ 12%',
    },
    {
      id: 'PSS-SD-98', grade: 'Psyllium Seeds', variant: 'Raw Seeds 98% Purity', icon: '🫘',
      location: 'Warehouse C — Rajkot, Gujarat', minOrder: 10,
      purity: '98%', huskContent: 'N/A', moisture: '≤ 8%',
    },
    {
      id: 'PSH-WH-98', grade: 'Psyllium Husk', variant: 'Whole Husk 98% Purity', icon: '🌾',
      location: 'Warehouse A — Unjha, Gujarat', minOrder: 5,
      purity: '98%', huskContent: '≥ 82%', moisture: '≤ 12%',
    },
    {
      id: 'PSP-PH-98', grade: 'Psyllium Powder', variant: 'Coarse Powder 98% Purity', icon: '🔬',
      location: 'Warehouse B — Ahmedabad, Gujarat', minOrder: 2,
      purity: '98%', huskContent: '≥ 85%', moisture: '≤ 10%',
    },
  ];

  return catalogue.map((c, i) => {
    // Each item gets a unique daily-random available MT between 10 and 25
    const available = seededRandInt(dateStr, i, 10, 25);
    // Reserved is a random portion between 0 and (available - 1)
    const reserved  = seededRandInt(dateStr, i + 100, 0, Math.max(0, available - 10));
    const totalStock = available + reserved;
    const status: StockStatus =
      available === 0   ? 'reserved'
      : available <= 12 ? 'low'
      : 'available';

    return {
      ...c,
      totalStock,
      available,
      reserved,
      unit: 'MT',
      lastUpdated: dateStr,
      status,
    };
  });
}

const stockData: StockItem[] = buildStockData();

const STATUS_CONFIG: Record<StockStatus, { label: string; color: string; bg: string; border: string }> = {
  available: { label: 'Available', color: '#16a34a', bg: 'rgba(22,163,74,0.1)', border: 'rgba(22,163,74,0.25)' },
  low:       { label: 'Low Stock', color: '#d97706', bg: 'rgba(217,119,6,0.12)', border: 'rgba(217,119,6,0.3)' },
  reserved:  { label: 'Fully Reserved', color: '#dc2626', bg: 'rgba(220,38,38,0.1)', border: 'rgba(220,38,38,0.25)' },
};

const FILTERS: { key: 'all' | StockStatus; label: string }[] = [
  { key: 'all', label: 'All Stock' },
  { key: 'available', label: 'Available' },
  { key: 'low', label: 'Low Stock' },
  { key: 'reserved', label: 'Reserved' },
];

export default function StockPage() {
  const [filter, setFilter] = useState<'all' | StockStatus>('all');
  const [search, setSearch] = useState('');

  const totalMT    = stockData.reduce((s, i) => s + i.totalStock, 0);
  const availableMT = stockData.reduce((s, i) => s + i.available, 0);
  const reservedMT  = stockData.reduce((s, i) => s + i.reserved, 0);

  const filtered = stockData.filter(item => {
    const matchFilter = filter === 'all' || item.status === filter;
    const matchSearch = search === '' ||
      item.grade.toLowerCase().includes(search.toLowerCase()) ||
      item.variant.toLowerCase().includes(search.toLowerCase()) ||
      item.id.toLowerCase().includes(search.toLowerCase());
    return matchFilter && matchSearch;
  });

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
        <div
          style={{
            position: 'absolute', top: '-100px', right: '-100px',
            width: '500px', height: '500px',
            background: 'radial-gradient(circle, rgba(217,119,6,0.15) 0%, transparent 70%)',
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
            Live Inventory
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
            Psyllium Husk{' '}
            <em style={{ color: '#D97706', fontStyle: 'italic' }}>Stock Overview</em>
          </h1>
          <p
            style={{
              color: '#b8a98a',
              fontSize: '1.1rem',
              maxWidth: '580px',
              margin: '0 auto 3rem',
              lineHeight: 1.7,
            }}
          >
            Real-time view of our warehouse inventory across Gujarat storage facilities.
            Contact us to confirm availability and book your consignment.
          </p>

          {/* Summary cards */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
            {[
              { label: 'Total Stock', value: `${totalMT} MT`, icon: '📦', color: '#e5d6b8' },
              { label: 'Available', value: `${availableMT} MT`, icon: '✅', color: '#86efac' },
              { label: 'Reserved', value: `${reservedMT} MT`, icon: '🔒', color: '#fca5a5' },
            ].map(s => (
              <div
                key={s.label}
                style={{
                  background: 'rgba(255,255,255,0.06)',
                  border: '1px solid rgba(255,255,255,0.12)',
                  borderRadius: '14px',
                  padding: '1.25rem 2rem',
                  textAlign: 'center',
                  backdropFilter: 'blur(8px)',
                  minWidth: '150px',
                }}
              >
                <div style={{ fontSize: '1.5rem', marginBottom: '0.35rem' }}>{s.icon}</div>
                <div style={{ color: s.color, fontWeight: 800, fontSize: '1.6rem', fontFamily: "'Cormorant Garamond', serif", lineHeight: 1 }}>
                  {s.value}
                </div>
                <div style={{ color: '#9ca3af', fontSize: '0.8rem', marginTop: '0.3rem', fontWeight: 500 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Filters & Search ── */}
      <section style={{ background: '#FAF8F4', borderBottom: '1px solid #E5E0D8', padding: '1.25rem 0' }}>
        <div
          className="container"
          style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap', justifyContent: 'space-between' }}
        >
          {/* Filter tabs */}
          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
            {FILTERS.map(f => (
              <button
                key={f.key}
                onClick={() => setFilter(f.key)}
                style={{
                  padding: '0.45rem 1.1rem',
                  borderRadius: '50px',
                  border: filter === f.key ? '1px solid #D97706' : '1px solid #E5E0D8',
                  background: filter === f.key ? '#D97706' : 'white',
                  color: filter === f.key ? 'white' : '#6b7280',
                  fontWeight: 600,
                  fontSize: '0.85rem',
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                }}
              >
                {f.label}
              </button>
            ))}
          </div>

          {/* Search */}
          <input
            type="text"
            placeholder="Search by grade or ID…"
            value={search}
            onChange={e => setSearch(e.target.value)}
            style={{
              border: '1px solid #E5E0D8',
              borderRadius: '50px',
              padding: '0.5rem 1.25rem',
              fontSize: '0.9rem',
              outline: 'none',
              minWidth: '220px',
              color: '#374151',
              background: 'white',
            }}
          />
        </div>
      </section>

      {/* ── Stock Grid ── */}
      <section style={{ background: 'white', padding: '3.5rem 0 5rem' }}>
        <div className="container">
          {filtered.length === 0 ? (
            <div style={{ textAlign: 'center', color: '#9ca3af', padding: '4rem 0', fontSize: '1.05rem' }}>
              No stock items match your search.
            </div>
          ) : (
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
                gap: '1.5rem',
              }}
            >
              {filtered.map(item => {
                const cfg = STATUS_CONFIG[item.status];
                const pct = item.totalStock > 0 ? Math.round((item.available / item.totalStock) * 100) : 0;
                return (
                  <div
                    key={item.id}
                    style={{
                      background: 'white',
                      border: '1px solid #E5E0D8',
                      borderRadius: '16px',
                      padding: '1.75rem',
                      transition: 'all 0.25s',
                      position: 'relative',
                      overflow: 'hidden',
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
                    {/* Top row */}
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                        <span style={{ fontSize: '2rem' }}>{item.icon}</span>
                        <div>
                          <div style={{ fontWeight: 700, fontSize: '1rem', color: '#1a1a1a' }}>{item.grade}</div>
                          <div style={{ fontSize: '0.78rem', color: '#9ca3af', marginTop: '0.15rem' }}>{item.id}</div>
                        </div>
                      </div>
                      <div
                        style={{
                          background: cfg.bg,
                          border: `1px solid ${cfg.border}`,
                          color: cfg.color,
                          padding: '0.25rem 0.75rem',
                          borderRadius: '50px',
                          fontSize: '0.72rem',
                          fontWeight: 700,
                          letterSpacing: '0.05em',
                          whiteSpace: 'nowrap',
                        }}
                      >
                        {cfg.label}
                      </div>
                    </div>

                    <div style={{ fontWeight: 600, fontSize: '0.88rem', color: '#374151', marginBottom: '1.25rem' }}>
                      {item.variant}
                    </div>

                    {/* Progress bar */}
                    <div style={{ marginBottom: '1.25rem' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.4rem' }}>
                        <span style={{ fontSize: '0.78rem', color: '#6b7280', fontWeight: 600 }}>Availability</span>
                        <span style={{ fontSize: '0.78rem', fontWeight: 700, color: cfg.color }}>{pct}% free</span>
                      </div>
                      <div style={{ background: '#f3f4f6', borderRadius: '50px', height: '8px', overflow: 'hidden' }}>
                        <div
                          style={{
                            width: `${pct}%`,
                            height: '100%',
                            background: pct > 40 ? '#16a34a' : pct > 10 ? '#D97706' : '#dc2626',
                            borderRadius: '50px',
                            transition: 'width 0.6s ease',
                          }}
                        />
                      </div>
                    </div>

                    {/* Stock numbers */}
                    <div
                      style={{
                        display: 'grid',
                        gridTemplateColumns: '1fr 1fr 1fr',
                        gap: '0.5rem',
                        background: '#FAF8F4',
                        borderRadius: '10px',
                        padding: '0.9rem',
                        marginBottom: '1.25rem',
                      }}
                    >
                      {[
                        { label: 'Total', value: item.totalStock },
                        { label: 'Available', value: item.available },
                        { label: 'Reserved', value: item.reserved },
                      ].map(col => (
                        <div key={col.label} style={{ textAlign: 'center' }}>
                          <div style={{ fontWeight: 800, fontSize: '1.2rem', color: '#1a1a1a', fontFamily: "'Cormorant Garamond', serif" }}>
                            {col.value}
                          </div>
                          <div style={{ fontSize: '0.7rem', color: '#9ca3af', fontWeight: 600, marginTop: '0.1rem' }}>{col.label} MT</div>
                        </div>
                      ))}
                    </div>

                    {/* Spec chips */}
                    <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1.25rem' }}>
                      {[
                        { k: 'Purity', v: item.purity },
                        { k: 'Husk', v: item.huskContent },
                        { k: 'Moisture', v: item.moisture },
                        { k: 'MOQ', v: `${item.minOrder} MT` },
                      ].map(chip => (
                        <span
                          key={chip.k}
                          style={{
                            background: 'rgba(217,119,6,0.08)',
                            border: '1px solid rgba(217,119,6,0.2)',
                            borderRadius: '6px',
                            padding: '0.2rem 0.55rem',
                            fontSize: '0.72rem',
                            color: '#92400e',
                            fontWeight: 600,
                          }}
                        >
                          {chip.k}: {chip.v}
                        </span>
                      ))}
                    </div>

                    {/* Location & date */}
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
                      <div style={{ fontSize: '0.78rem', color: '#6b7280', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                        <span>📍</span> {item.location}
                      </div>
                      <div style={{ fontSize: '0.72rem', color: '#9ca3af' }}>
                        Updated: {item.lastUpdated}
                      </div>
                    </div>

                    {/* CTA */}
                    <Link
                      href="/en/contact"
                      style={{
                        display: 'block',
                        textAlign: 'center',
                        background: item.status === 'reserved' ? '#f3f4f6' : '#1C1204',
                        color: item.status === 'reserved' ? '#9ca3af' : 'white',
                        padding: '0.7rem',
                        borderRadius: '10px',
                        fontWeight: 700,
                        fontSize: '0.88rem',
                        textDecoration: 'none',
                        transition: 'background 0.2s',
                        pointerEvents: item.status === 'reserved' ? 'none' : 'auto',
                      }}
                    >
                      {item.status === 'reserved' ? 'Fully Reserved' : 'Enquire for This Grade →'}
                    </Link>
                  </div>
                );
              })}
            </div>
          )}

          {/* Disclaimer note */}
          <div
            style={{
              marginTop: '3rem',
              background: '#FAF8F4',
              border: '1px solid #E5E0D8',
              borderLeft: '4px solid #D97706',
              borderRadius: '10px',
              padding: '1.25rem 1.5rem',
              display: 'flex',
              gap: '1rem',
              alignItems: 'flex-start',
            }}
          >
            <span style={{ fontSize: '1.3rem', flexShrink: 0 }}>ℹ️</span>
            <div>
              <div style={{ fontWeight: 700, color: '#1a1a1a', fontSize: '0.9rem', marginBottom: '0.3rem' }}>
                Stock Availability Notice
              </div>
              <p style={{ color: '#6b7280', fontSize: '0.85rem', lineHeight: 1.7, margin: 0 }}>
                Stock figures are updated periodically and are subject to change without notice.
                Reserved stock is already allocated to existing buyer orders. Please{' '}
                <Link href="/en/contact" style={{ color: '#D97706', fontWeight: 600, textDecoration: 'none' }}>
                  contact us
                </Link>{' '}
                to confirm real-time availability before placing an order.
              </p>
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
        <div
          style={{
            position: 'absolute', bottom: '-80px', left: '-80px',
            width: '400px', height: '400px',
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
            Need a Custom Quantity?
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
            Our team can arrange split shipments, consolidated lots, or forward bookings
            for upcoming harvest stock. Let's talk.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link
              href="/en/contact"
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
              Contact Us Now →
            </Link>
            <Link
              href="/en/product"
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
              View Products
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
