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
            {filteredEnq.map((e, idx) => (
              <div key={e.id} style={{
                background: '#1a1a2e',
                border: `1px solid ${e.status === 'new' ? '#f59e0b44' : e.status === 'replied' ? '#22c55e33' : '#2d2d44'}`,
                borderLeft: `4px solid ${e.status === 'new' ? '#f59e0b' : e.status === 'replied' ? '#22c55e' : '#475569'}`,
                borderRadius: 12,
                marginBottom: '1.25rem',
                overflow: 'hidden',
              }}>

                {/* ── Card Header ── */}
                <div style={{ padding: '1rem 1.5rem', background: '#0f0f1a', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.75rem' }}>
                  <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', flexWrap: 'wrap' }}>
                    <div style={{ width: 40, height: 40, borderRadius: '50%', background: '#D97706', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: 16, color: 'white', flexShrink: 0 }}>
                      {e.name?.charAt(0)?.toUpperCase() || '?'}
                    </div>
                    <div>
                      <div style={{ fontWeight: 800, fontSize: 17, color: '#f1f5f9' }}>{e.name || '—'}</div>
                      {e.company && <div style={{ fontSize: 13, color: '#94a3b8', marginTop: 2 }}>🏢 {e.company}</div>}
                    </div>
                    <span style={s.badge(e.status === 'new' ? '#f59e0b' : e.status === 'replied' ? '#22c55e' : '#64748b')}>
                      {e.status === 'new' ? '🔔 NEW' : e.status === 'replied' ? '✅ REPLIED' : '⚫ CLOSED'}
                    </span>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <div style={{ fontSize: 13, color: '#94a3b8', fontWeight: 600 }}>#{filteredEnq.length - idx}</div>
                    <div style={{ fontSize: 12, color: '#475569', marginTop: 2 }}>🕐 {formatDate(e.timestamp)} IST</div>
                  </div>
                </div>

                {/* ── Contact Info Section ── */}
                <div style={{ padding: '1rem 1.5rem', borderBottom: '1px solid #2d2d44' }}>
                  <div style={{ fontSize: 10, fontWeight: 800, color: '#D97706', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
                    📋 Contact Information
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '0.6rem' }}>
                    {/* Email */}
                    <div style={{ background: '#0f0f1a', borderRadius: 8, padding: '0.6rem 0.875rem', display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                      <span style={{ fontSize: 16, flexShrink: 0 }}>📧</span>
                      <div style={{ minWidth: 0 }}>
                        <div style={{ fontSize: 10, color: '#64748b', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Email</div>
                        <a href={`mailto:${e.email}`} style={{ fontSize: 13, color: '#60a5fa', textDecoration: 'none', wordBreak: 'break-all' }}>{e.email}</a>
                      </div>
                    </div>
                    {/* Phone */}
                    {e.phone && (
                      <div style={{ background: '#0f0f1a', borderRadius: 8, padding: '0.6rem 0.875rem', display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                        <span style={{ fontSize: 16, flexShrink: 0 }}>📱</span>
                        <div>
                          <div style={{ fontSize: 10, color: '#64748b', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Phone / WhatsApp</div>
                          <a href={`https://wa.me/${String(e.phone).replace(/\D/g, '')}`} target="_blank" rel="noopener noreferrer" style={{ fontSize: 13, color: '#4ade80', textDecoration: 'none' }}>{e.phone}</a>
                        </div>
                      </div>
                    )}
                    {/* Country */}
                    {e.country && (
                      <div style={{ background: '#0f0f1a', borderRadius: 8, padding: '0.6rem 0.875rem', display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                        <span style={{ fontSize: 16, flexShrink: 0 }}>🌍</span>
                        <div>
                          <div style={{ fontSize: 10, color: '#64748b', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Country</div>
                          <div style={{ fontSize: 13, color: '#e2e8f0', fontWeight: 600 }}>{e.country}</div>
                        </div>
                      </div>
                    )}
                    {/* IP */}
                    <div style={{ background: '#0f0f1a', borderRadius: 8, padding: '0.6rem 0.875rem', display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                      <span style={{ fontSize: 16, flexShrink: 0 }}>🌐</span>
                      <div>
                        <div style={{ fontSize: 10, color: '#64748b', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}>IP Address</div>
                        <div style={{ fontSize: 12, color: '#475569', fontFamily: 'monospace' }}>{e.ip}</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* ── Order Details Section ── */}
                {(e.product || e.quantity || e.purity || e.swelling || e.moisture || e.application || e.annualQty || e.incoterms || e.certs || e.timeline || e.sampleNeeded) && (
                  <div style={{ padding: '1rem 1.5rem', borderBottom: '1px solid #2d2d44' }}>
                    <div style={{ fontSize: 10, fontWeight: 800, color: '#a855f7', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
                      📦 Order & Product Specifications
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '0.6rem' }}>
                      {e.product && (
                        <div style={{ background: '#0f0f1a', borderRadius: 8, padding: '0.6rem 0.875rem' }}>
                          <div style={{ fontSize: 10, color: '#64748b', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 4 }}>Product Interest</div>
                          <div style={{ fontSize: 13, color: '#d8b4fe', fontWeight: 700 }}>📦 {e.product}</div>
                        </div>
                      )}
                      {e.quantity && (
                        <div style={{ background: '#0f0f1a', borderRadius: 8, padding: '0.6rem 0.875rem' }}>
                          <div style={{ fontSize: 10, color: '#64748b', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 4 }}>Trial Qty Required</div>
                          <div style={{ fontSize: 13, color: '#fbbf24', fontWeight: 700 }}>⚖️ {e.quantity}</div>
                        </div>
                      )}
                      {e.purity && (
                        <div style={{ background: '#0f0f1a', borderRadius: 8, padding: '0.6rem 0.875rem' }}>
                          <div style={{ fontSize: 10, color: '#64748b', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 4 }}>Husk Purity</div>
                          <div style={{ fontSize: 13, color: '#38bdf8', fontWeight: 700 }}>✨ {e.purity}</div>
                        </div>
                      )}
                      {e.swelling && (
                        <div style={{ background: '#0f0f1a', borderRadius: 8, padding: '0.6rem 0.875rem' }}>
                          <div style={{ fontSize: 10, color: '#64748b', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 4 }}>Swelling Factor</div>
                          <div style={{ fontSize: 13, color: '#fb7185', fontWeight: 700 }}>💧 {e.swelling}</div>
                        </div>
                      )}
                      {e.moisture && (
                        <div style={{ background: '#0f0f1a', borderRadius: 8, padding: '0.6rem 0.875rem' }}>
                          <div style={{ fontSize: 10, color: '#64748b', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 4 }}>Moisture (Max %)</div>
                          <div style={{ fontSize: 13, color: '#60a5fa', fontWeight: 700 }}>☁️ {e.moisture}</div>
                        </div>
                      )}
                      {e.application && (
                        <div style={{ background: '#0f0f1a', borderRadius: 8, padding: '0.6rem 0.875rem' }}>
                          <div style={{ fontSize: 10, color: '#64748b', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 4 }}>End Use Application</div>
                          <div style={{ fontSize: 13, color: '#34d399', fontWeight: 700 }}>⚙️ {e.application}</div>
                        </div>
                      )}
                      {e.annualQty && (
                        <div style={{ background: '#0f0f1a', borderRadius: 8, padding: '0.6rem 0.875rem' }}>
                          <div style={{ fontSize: 10, color: '#64748b', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 4 }}>Annual Requirement</div>
                          <div style={{ fontSize: 13, color: '#f43f5e', fontWeight: 700 }}>📅 {e.annualQty}</div>
                        </div>
                      )}
                      {e.incoterms && (
                        <div style={{ background: '#0f0f1a', borderRadius: 8, padding: '0.6rem 0.875rem' }}>
                          <div style={{ fontSize: 10, color: '#64748b', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 4 }}>Incoterms</div>
                          <div style={{ fontSize: 13, color: '#fbbf24', fontWeight: 700 }}>🚢 {e.incoterms}</div>
                        </div>
                      )}
                      {e.certs && (
                        <div style={{ background: '#0f0f1a', borderRadius: 8, padding: '0.6rem 0.875rem' }}>
                          <div style={{ fontSize: 10, color: '#64748b', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 4 }}>Certifications</div>
                          <div style={{ fontSize: 13, color: '#c084fc', fontWeight: 700 }}>📜 {e.certs}</div>
                        </div>
                      )}
                      {e.timeline && (
                        <div style={{ background: '#0f0f1a', borderRadius: 8, padding: '0.6rem 0.875rem' }}>
                          <div style={{ fontSize: 10, color: '#64748b', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 4 }}>First Shipment Timeline</div>
                          <div style={{ fontSize: 13, color: '#818cf8', fontWeight: 700 }}>⏱️ {e.timeline}</div>
                        </div>
                      )}
                      {e.sampleNeeded && (
                        <div style={{ background: '#0f0f1a', borderRadius: 8, padding: '0.6rem 0.875rem' }}>
                          <div style={{ fontSize: 10, color: '#64748b', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 4 }}>Free Sample Required?</div>
                          <div style={{ fontSize: 13, color: '#fb923c', fontWeight: 700 }}>🎁 {e.sampleNeeded}</div>
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {/* ── Message Section — always visible ── */}
                <div style={{ padding: '1rem 1.5rem', borderBottom: '1px solid #2d2d44' }}>
                  <div style={{ fontSize: 10, fontWeight: 800, color: '#38bdf8', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
                    💬 Message
                  </div>
                  <div style={{ background: '#0f0f1a', borderRadius: 8, padding: '1rem', fontSize: 14, color: '#cbd5e1', lineHeight: 1.8, whiteSpace: 'pre-wrap', wordBreak: 'break-word', border: '1px solid #1e293b' }}>
                    {e.message || <span style={{ color: '#475569', fontStyle: 'italic' }}>No message provided</span>}
                  </div>
                </div>

                {/* ── Actions Row ── */}
                <div style={{ padding: '0.875rem 1.5rem', display: 'flex', gap: '0.5rem', flexWrap: 'wrap', alignItems: 'center', background: '#0d0d1a' }}>
                  <a href={`mailto:${e.email}?subject=Re: Your Psyllium Husk Enquiry — Amar Herbal Origins`} style={{ ...s.btn('#1d4ed8'), textDecoration: 'none', display: 'inline-block', fontSize: 12 }}>
                    ✉️ Reply via Email
                  </a>
                  {e.phone && (
                    <a href={`https://wa.me/${String(e.phone).replace(/\D/g, '')}?text=Hi ${e.name}, thank you for your enquiry about ${e.product || 'psyllium husk'}. We are pleased to assist you.`} target="_blank" rel="noopener noreferrer" style={{ ...s.btn('#16a34a'), textDecoration: 'none', display: 'inline-block', fontSize: 12 }}>
                      💬 WhatsApp Reply
                    </a>
                  )}
                  <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <span style={{ fontSize: 11, color: '#475569' }}>Status:</span>
                    <select
                      value={e.status}
                      onChange={ev => updateStatus(e.id, ev.target.value)}
                      style={{ background: '#0f0f1a', border: '1px solid #2d2d44', color: '#e2e8f0', borderRadius: 8, padding: '0.35rem 0.75rem', fontSize: 12, cursor: 'pointer' }}
                    >
                      <option value="new">🟡 New</option>
                      <option value="replied">🟢 Replied</option>
                      <option value="closed">⚫ Closed</option>
                    </select>
                  </div>
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
