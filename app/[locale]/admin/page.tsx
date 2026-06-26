'use client';
import { useState, useEffect, useCallback } from 'react';

const ADMIN_KEY = 'amar-admin-2024';

type Enquiry = {
  id: string; name: string; email: string; phone?: string; company?: string;
  country?: string; product?: string; quantity?: string; message: string;
  timestamp: string; ip: string; status: string;
  purity?: string; swelling?: string; moisture?: string; application?: string;
  annualQty?: string; incoterms?: string; certs?: string; timeline?: string;
  sampleNeeded?: string;
};
type Visitor = {
  id: string; page: string; referrer: string; userAgent: string;
  ip: string; sessionId: string; timestamp: string;
};

function formatDate(iso: string) {
  return new Date(iso).toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' });
}

function getBrowser(ua: string) {
  if (ua.includes('Chrome')) return '🌐 Chrome';
  if (ua.includes('Firefox')) return '🦊 Firefox';
  if (ua.includes('Safari')) return '🍎 Safari';
  if (ua.includes('Edge')) return '🔷 Edge';
  return '❓ Other';
}

function getDevice(ua: string) {
  if (/Mobile|Android|iPhone/i.test(ua)) return '📱 Mobile';
  if (/Tablet|iPad/i.test(ua)) return '📟 Tablet';
  return '💻 Desktop';
}

const s = {
  card: {
    background: '#1a1a2e', border: '1px solid #2d2d44', borderRadius: 12,
    padding: '1.5rem', marginBottom: '1rem',
  } as React.CSSProperties,
  badge: (color: string) => ({
    display: 'inline-block', padding: '2px 10px', borderRadius: 20, fontSize: 11,
    fontWeight: 700, background: color + '22', color, border: `1px solid ${color}44`,
  }) as React.CSSProperties,
  btn: (color: string) => ({
    background: color, color: 'white', border: 'none', borderRadius: 8,
    padding: '0.5rem 1.25rem', fontWeight: 700, cursor: 'pointer', fontSize: 13,
  }) as React.CSSProperties,
};

export default function AdminPage() {
  const [authed, setAuthed] = useState(false);
  const [pw, setPw] = useState('');
  const [tab, setTab] = useState<'enquiries' | 'visitors'>('enquiries');
  const [enquiries, setEnquiries] = useState<Enquiry[]>([]);
  const [visitors, setVisitors] = useState<Visitor[]>([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState('');
  const [expanded, setExpanded] = useState<string | null>(null);

  const fetchData = useCallback(async () => {
    setLoading(true);
    const headers = { 'x-admin-key': ADMIN_KEY };
    const [eRes, vRes] = await Promise.all([
      fetch('/api/enquiries', { headers }),
      fetch('/api/track', { headers }),
    ]);
    const eData = await eRes.json();
    const vData = await vRes.json();
    setEnquiries(eData.enquiries || []);
    setVisitors(vData.visitors || []);
    setLoading(false);
  }, []);

  useEffect(() => {
    const saved = sessionStorage.getItem('admin_auth');
    if (saved === ADMIN_KEY) { setAuthed(true); fetchData(); }
  }, [fetchData]);

  const login = () => {
    if (pw === 'amar2026' || pw === ADMIN_KEY) {
      sessionStorage.setItem('admin_auth', ADMIN_KEY);
      setAuthed(true); fetchData();
    } else alert('Wrong password!');
  };

  const updateStatus = async (id: string, status: string) => {
    await fetch('/api/enquiries', {
      method: 'PATCH', headers: { 'content-type': 'application/json', 'x-admin-key': ADMIN_KEY },
      body: JSON.stringify({ id, status }),
    });
    setEnquiries(prev => prev.map(e => e.id === id ? { ...e, status } : e));
  };

  // ── Login Screen ──
  if (!authed) return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh' }}>
      <div style={{ background: '#1a1a2e', border: '1px solid #2d2d44', borderRadius: 16, padding: '3rem', width: 380, textAlign: 'center' }}>
        <div style={{ fontSize: 48, marginBottom: '1rem' }}>🌿</div>
        <h1 style={{ color: '#D97706', fontSize: 22, fontWeight: 800, marginBottom: 8 }}>Admin Login</h1>
        <p style={{ color: '#94a3b8', fontSize: 14, marginBottom: '1.5rem' }}>Amar Herbal Origins Dashboard</p>
        <input
          type="password" placeholder="Enter admin password"
          value={pw} onChange={e => setPw(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && login()}
          style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: 8, border: '1.5px solid #2d2d44', background: '#0f0f0f', color: 'white', fontSize: 14, boxSizing: 'border-box', marginBottom: '1rem', outline: 'none' }}
        />
        <button onClick={login} style={{ ...s.btn('#D97706'), width: '100%', padding: '0.85rem' }}>
          Login →
        </button>

      </div>
    </div>
  );

  // ── Stats ──
  const newEnq = enquiries.filter(e => e.status === 'new').length;
  const todayStart = new Date(); todayStart.setHours(0, 0, 0, 0);
  const todayVisits = visitors.filter(v => new Date(v.timestamp) >= todayStart).length;
  const uniqueIPs = new Set(visitors.map(v => v.ip)).size;
  const topPages = visitors.reduce((acc: Record<string, number>, v) => { acc[v.page] = (acc[v.page] || 0) + 1; return acc; }, {});
  const topPagesSorted = Object.entries(topPages).sort((a, b) => b[1] - a[1]).slice(0, 5);

  const filteredEnq = enquiries.filter(e =>
    !search || [e.name, e.email, e.company, e.country, e.product].join(' ').toLowerCase().includes(search.toLowerCase())
  );
  const filteredVis = visitors.filter(v =>
    !search || [v.page, v.ip, v.userAgent].join(' ').toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ minHeight: '100vh', background: '#0f0f0f' }}>
      {/* Header */}
      <header style={{ background: '#1a1a2e', borderBottom: '1px solid #2d2d44', padding: '1rem 2rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <span style={{ fontSize: 28 }}>🌿</span>
          <div>
            <div style={{ fontWeight: 800, fontSize: 18, color: '#D97706' }}>Amar Herbal Origins</div>
            <div style={{ fontSize: 12, color: '#64748b' }}>Admin Dashboard</div>
          </div>
        </div>
        <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
          <button onClick={fetchData} style={s.btn('#334155')}>🔄 Refresh</button>
          <button onClick={() => { sessionStorage.removeItem('admin_auth'); setAuthed(false); }} style={s.btn('#dc2626')}>Logout</button>
        </div>
      </header>

      <div style={{ padding: '2rem', maxWidth: 1200, margin: '0 auto' }}>
        {/* Stats Row */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1rem', marginBottom: '2rem' }}>
          {[
            { label: 'Total Enquiries', value: enquiries.length, icon: '📩', color: '#D97706' },
            { label: 'New Enquiries', value: newEnq, icon: '🔔', color: '#f59e0b' },
            { label: "Today's Visits", value: todayVisits, icon: '👁️', color: '#22c55e' },
            { label: 'Unique Visitors', value: uniqueIPs, icon: '👤', color: '#3b82f6' },
            { label: 'Total Page Views', value: visitors.length, icon: '📊', color: '#a855f7' },
          ].map(stat => (
            <div key={stat.label} style={{ ...s.card, marginBottom: 0, textAlign: 'center', borderColor: stat.color + '33' }}>
              <div style={{ fontSize: 28 }}>{stat.icon}</div>
              <div style={{ fontSize: 32, fontWeight: 800, color: stat.color }}>{loading ? '…' : stat.value}</div>
              <div style={{ fontSize: 12, color: '#64748b', marginTop: 4 }}>{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Search + Tabs */}
        <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem', flexWrap: 'wrap', alignItems: 'center' }}>
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            <button onClick={() => setTab('enquiries')} style={{ ...s.btn(tab === 'enquiries' ? '#D97706' : '#1a1a2e'), border: '1px solid #2d2d44' }}>
              📩 Enquiries ({enquiries.length})
            </button>
            <button onClick={() => setTab('visitors')} style={{ ...s.btn(tab === 'visitors' ? '#3b82f6' : '#1a1a2e'), border: '1px solid #2d2d44' }}>
              👁️ Visitors ({visitors.length})
            </button>
          </div>
          <input
            placeholder={tab === 'enquiries' ? 'Search by name, email, country…' : 'Search by page, IP…'}
            value={search} onChange={e => setSearch(e.target.value)}
            style={{ flex: 1, minWidth: 200, padding: '0.6rem 1rem', borderRadius: 8, border: '1px solid #2d2d44', background: '#1a1a2e', color: 'white', fontSize: 13, outline: 'none' }}
          />
        </div>

        {/* ── ENQUIRIES TAB ── */}
        {tab === 'enquiries' && (
          <div>
            {loading && <p style={{ color: '#64748b', textAlign: 'center' }}>Loading…</p>}
            {!loading && filteredEnq.length === 0 && (
              <div style={{ ...s.card, textAlign: 'center', padding: '3rem' }}>
                <div style={{ fontSize: 48 }}>📭</div>
                <p style={{ color: '#64748b' }}>No enquiries yet. They appear here when visitors submit the contact form.</p>
              </div>
            )}
            {filteredEnq.map(e => (
              <div key={e.id} style={{ ...s.card, borderLeft: `3px solid ${e.status === 'new' ? '#f59e0b' : e.status === 'replied' ? '#22c55e' : '#475569'}` }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.75rem' }}>
                  <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', flexWrap: 'wrap' }}>
                    <span style={{ fontWeight: 700, fontSize: 16, color: '#e2e8f0' }}>{e.name}</span>
                    {e.company && <span style={{ color: '#94a3b8', fontSize: 13 }}>@ {e.company}</span>}
                    <span style={s.badge(e.status === 'new' ? '#f59e0b' : e.status === 'replied' ? '#22c55e' : '#64748b')}>
                      {e.status.toUpperCase()}
                    </span>
                  </div>
                  <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                    <span style={{ color: '#475569', fontSize: 12 }}>{formatDate(e.timestamp)}</span>
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '0.5rem', marginBottom: '0.75rem' }}>
                  {[
                    { label: '📧 Email', value: e.email },
                    e.phone && { label: '📱 Phone', value: e.phone },
                    e.country && { label: '🌍 Country', value: e.country },
                    e.product && { label: '📦 Product', value: e.product },
                    e.quantity && { label: '⚖️ Trial Qty', value: e.quantity },
                    e.purity && { label: '✨ Purity', value: e.purity },
                    e.swelling && { label: '💧 Swelling', value: e.swelling },
                    e.moisture && { label: '☁️ Moisture', value: e.moisture },
                    e.application && { label: '⚙️ Application', value: e.application },
                    e.annualQty && { label: '📅 Annual Qty', value: e.annualQty },
                    e.incoterms && { label: '🚢 Incoterms', value: e.incoterms },
                    e.certs && { label: '📜 Certs', value: e.certs },
                    e.timeline && { label: '⏱️ Timeline', value: e.timeline },
                    e.sampleNeeded && { label: '🎁 Sample?', value: e.sampleNeeded },
                    { label: '🌐 IP', value: e.ip },
                  ].filter(Boolean).map((item: any) => (
                    <div key={item.label} style={{ background: '#0f0f1a', borderRadius: 8, padding: '0.4rem 0.75rem' }}>
                      <div style={{ fontSize: 10, color: '#64748b', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}>{item.label}</div>
                      <div style={{ fontSize: 13, color: '#cbd5e1', marginTop: 2 }}>{item.value}</div>
                    </div>
                  ))}
                </div>

                {expanded === e.id && (
                  <div style={{ background: '#0f0f1a', borderRadius: 8, padding: '0.75rem 1rem', marginBottom: '0.75rem', fontSize: 13, color: '#cbd5e1', lineHeight: 1.7 }}>
                    💬 <strong>Message:</strong><br />{e.message}
                  </div>
                )}

                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', alignItems: 'center' }}>
                  <button onClick={() => setExpanded(expanded === e.id ? null : e.id)} style={s.btn('#334155')}>
                    {expanded === e.id ? '▲ Hide' : '▼ Message'}
                  </button>
                  <a href={`mailto:${e.email}`} style={{ ...s.btn('#1d4ed8'), textDecoration: 'none', display: 'inline-block' }}>✉️ Email</a>
                  {e.phone && <a href={`https://wa.me/${String(e.phone).replace(/\D/g, '')}`} target="_blank" rel="noopener noreferrer" style={{ ...s.btn('#16a34a'), textDecoration: 'none', display: 'inline-block' }}>💬 WhatsApp</a>}
                  <select
                    value={e.status}
                    onChange={ev => updateStatus(e.id, ev.target.value)}
                    style={{ background: '#0f0f1a', border: '1px solid #2d2d44', color: '#e2e8f0', borderRadius: 8, padding: '0.4rem 0.75rem', fontSize: 12, cursor: 'pointer' }}
                  >
                    <option value="new">🟡 New</option>
                    <option value="replied">🟢 Replied</option>
                    <option value="closed">⚫ Closed</option>
                  </select>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* ── VISITORS TAB ── */}
        {tab === 'visitors' && (
          <div>
            {/* Top Pages */}
            {topPagesSorted.length > 0 && (
              <div style={{ ...s.card, marginBottom: '1.5rem' }}>
                <div style={{ fontWeight: 700, color: '#D97706', marginBottom: '1rem', fontSize: 14, textTransform: 'uppercase', letterSpacing: '0.06em' }}>🔥 Top Pages</div>
                {topPagesSorted.map(([page, count]) => (
                  <div key={page} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                    <span style={{ color: '#cbd5e1', fontSize: 13, fontFamily: 'monospace' }}>{page}</span>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                      <div style={{ width: 100, height: 6, background: '#0f0f1a', borderRadius: 3, overflow: 'hidden' }}>
                        <div style={{ height: '100%', background: '#3b82f6', width: `${(count / visitors.length) * 100}%`, borderRadius: 3 }} />
                      </div>
                      <span style={{ color: '#3b82f6', fontWeight: 700, fontSize: 13, minWidth: 30, textAlign: 'right' }}>{count}</span>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {loading && <p style={{ color: '#64748b', textAlign: 'center' }}>Loading…</p>}
            {!loading && filteredVis.length === 0 && (
              <div style={{ ...s.card, textAlign: 'center', padding: '3rem' }}>
                <div style={{ fontSize: 48 }}>📡</div>
                <p style={{ color: '#64748b' }}>No visitor data yet. Visits are tracked automatically when people browse the site.</p>
              </div>
            )}

            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13 }}>
                <thead>
                  <tr style={{ background: '#1a1a2e', borderBottom: '1px solid #2d2d44' }}>
                    {['Time (IST)', 'Page', 'Device', 'Browser', 'Referrer', 'IP'].map(h => (
                      <th key={h} style={{ padding: '0.75rem 1rem', textAlign: 'left', color: '#64748b', fontWeight: 700, fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.05em', whiteSpace: 'nowrap' }}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {filteredVis.slice(0, 100).map((v, i) => (
                    <tr key={v.id} style={{ borderBottom: '1px solid #1a1a2e', background: i % 2 === 0 ? '#0f0f0f' : '#0d0d1a' }}>
                      <td style={{ padding: '0.6rem 1rem', color: '#94a3b8', whiteSpace: 'nowrap' }}>{formatDate(v.timestamp)}</td>
                      <td style={{ padding: '0.6rem 1rem', color: '#e2e8f0', fontFamily: 'monospace', maxWidth: 200, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{v.page}</td>
                      <td style={{ padding: '0.6rem 1rem', whiteSpace: 'nowrap' }}>{getDevice(v.userAgent)}</td>
                      <td style={{ padding: '0.6rem 1rem', whiteSpace: 'nowrap' }}>{getBrowser(v.userAgent)}</td>
                      <td style={{ padding: '0.6rem 1rem', color: '#64748b', maxWidth: 150, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{v.referrer || '—'}</td>
                      <td style={{ padding: '0.6rem 1rem', color: '#475569', fontFamily: 'monospace', fontSize: 12 }}>{v.ip}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {filteredVis.length > 100 && (
                <p style={{ color: '#475569', fontSize: 12, textAlign: 'center', padding: '1rem' }}>Showing latest 100 of {filteredVis.length} visits</p>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
