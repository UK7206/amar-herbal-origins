'use client';

import { useState, useEffect } from 'react';



const C = {
  cream:   '#FAF6EF',
  card:    '#FFFDF8',
  border:  '#E5D9C6',
  border2: '#CFC0A8',
  accent:  '#8B6F47',
  accent2: '#6B5230',
  text:    '#2C1F0E',
  muted:   '#7A6448',
  hint:    '#A8916E',
  chipBg:  '#F5EFE5',
};

// ─── Types ──────────────────────────────────────────
type ChipMap = Record<string, string[]>;
type Fields  = Record<string, string>;

// ─── Sub-components ─────────────────────────────────
function ChipGroup({
  id, options, multi, value, onChange,
}: {
  id: string; options: string[]; multi: boolean;
  value: string[]; onChange: (v: string[]) => void;
}) {
  const toggle = (opt: string) => {
    if (multi) {
      onChange(value.includes(opt) ? value.filter(v => v !== opt) : [...value, opt]);
    } else {
      onChange(value.includes(opt) ? [] : [opt]);
    }
  };
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '6px' }}>
      {options.map(opt => {
        const active = value.includes(opt);
        return (
          <button
            key={opt}
            type="button"
            onClick={() => toggle(opt)}
            style={{
              padding: '7px 18px',
              border: `0.5px solid ${active ? C.accent : C.border}`,
              borderRadius: '100px',
              fontSize: '12px',
              fontWeight: 400,
              letterSpacing: '0.03em',
              cursor: 'pointer',
              color: active ? C.card : C.muted,
              background: active ? C.accent : C.cream,
              transition: 'all 0.2s',
              fontFamily: "'Jost', sans-serif",
            }}
          >
            {opt}
          </button>
        );
      })}
    </div>
  );
}

function Field({ label, hint, children }: { label: string; hint?: string; children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: '1.25rem' }}>
      <label style={{
        display: 'block', fontSize: '11px', fontWeight: 500,
        letterSpacing: '0.1em', textTransform: 'uppercase',
        color: C.hint, marginBottom: '8px',
      }}>
        {label}
      </label>
      {children}
      {hint && <div style={{ fontSize: '11px', color: C.hint, marginTop: '5px', fontWeight: 300 }}>{hint}</div>}
    </div>
  );
}

const inputStyle: React.CSSProperties = {
  width: '100%',
  border: `0.5px solid ${C.border}`,
  borderRadius: '2px',
  padding: '12px 14px',
  fontSize: '14px',
  fontWeight: 300,
  color: C.text,
  background: C.cream,
  fontFamily: "'Jost', sans-serif",
  outline: 'none',
  boxSizing: 'border-box',
};

const selectStyle: React.CSSProperties = {
  ...inputStyle,
  cursor: 'pointer',
  appearance: 'auto',
};

// ─── Main Modal ──────────────────────────────────────
interface Props { isOpen: boolean; onClose: () => void; }

export function SampleRequestModal({ isOpen, onClose }: Props) {
  const [step, setStep]         = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const [fields, setFields] = useState<Fields>({
    company: '', name: '', role: '', email: '', phone: '',
    country: '', port: '', grade: '', moisture: '', specDetail: '',
    trialQty: '', annualQty: '', micro: '', pesticide: '',
    notes: '', source: '', sample: '',
  });

  const [chips, setChips] = useState<ChipMap>({
    'buyer-type':   [],
    'product-type': [],
    'purity':       [],
    'application':  [],
    'frequency':    [],
    'packaging':    [],
    'incoterms':    [],
    'certs':        [],
    'timeline':     [],
    'existing':     [],
  });

  // Lock body scroll when open
  useEffect(() => {
    if (isOpen) document.body.style.overflow = 'hidden';
    else        document.body.style.overflow = '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  // Detect mobile
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 600);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  const field = (k: string) => fields[k] ?? '';
  const setField = (k: string, v: string) => setFields(f => ({ ...f, [k]: v }));
  const setChip  = (k: string, v: string[]) => setChips(c => ({ ...c, [k]: v }));
  const getChips = (k: string) => chips[k]?.join(', ') || '—';

  const stepTitles = [
    '01 · Company Details', '02 · Product Specs',
    '03 · Quantity & Packaging', '04 · Quality & Certs', '05 · Final Details',
  ];


  const handleSubmit = async () => {
    setIsSubmitting(true);

    // Build enquiry payload from form fields
    const payload = {
      name: fields.name,
      email: fields.email,
      phone: fields.phone,
      company: fields.company,
      country: fields.country,
      product: getChips('product-type'),
      quantity: fields.trialQty ? `${fields.trialQty} MT` : '',
      purity: getChips('purity'),
      swelling: fields.swelling,
      moisture: fields.moisture,
      application: getChips('application'),
      annualQty: fields.annualQty ? `${fields.annualQty} MT` : '',
      incoterms: getChips('incoterms'),
      certs: getChips('certs'),
      timeline: getChips('timeline'),
      sampleNeeded: fields.sample,
      message: [
        `Role: ${fields.role || '—'}`,
        `Port: ${fields.port || '—'}`,
        `Buyer type: ${getChips('buyer-type')}`,
        `Frequency: ${getChips('frequency')}`,
        `Packaging: ${getChips('packaging')}`,
        `Micro: ${fields.micro || '—'}`,
        `Pesticide: ${fields.pesticide || '—'}`,
        `Existing supplier: ${getChips('existing')}`,
        `Source: ${fields.source || '—'}`,
        fields.notes ? `Notes: ${fields.notes}` : '',
      ].filter(Boolean).join('\n'),
    };

    try {
      await fetch('/api/enquiries', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(payload),
      });
    } catch (e) {
      console.warn('Enquiry submission failed', e);
    }

    setSubmitted(true);
    setIsSubmitting(false);
  };


  const BtnRow = ({ step: s, onNext, onBack }: { step: number; onNext?: () => void; onBack?: () => void }) => (
    <div style={{
      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      marginTop: '2rem', paddingTop: '1.5rem', borderTop: `0.5px solid ${C.border}`,
    }}>
      {onBack
        ? <button type="button" onClick={onBack} style={{ ...btnBase, background: 'transparent', border: `0.5px solid ${C.border2}`, color: C.muted }}>← Back</button>
        : <span />}
      {onNext && (
        <button type="button" onClick={onNext} style={{ ...btnBase, background: C.accent, color: C.card, border: 'none' }}>
          Continue →
        </button>
      )}
    </div>
  );

  const btnBase: React.CSSProperties = {
    fontFamily: "'Jost', sans-serif", fontSize: '12px', fontWeight: 500,
    letterSpacing: '0.12em', textTransform: 'uppercase',
    padding: '13px 32px', borderRadius: '2px', cursor: 'pointer', transition: 'all 0.2s',
  };

  const secTitle: React.CSSProperties = {
    fontFamily: "'Cormorant Garamond', serif", fontSize: '20px', fontWeight: 500,
    color: C.text, marginBottom: '1.5rem', paddingBottom: '12px',
    borderBottom: `0.5px solid ${C.border}`,
  };

  const grid2: React.CSSProperties = { display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: '14px' };
  const modalPad = isMobile ? '1.25rem' : '2.5rem';
  const cardPad  = isMobile ? '1.25rem' : '2.5rem';

  if (!isOpen) return null;

  return (
    <>
      {/* Load fonts */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;1,400;1,500&family=Jost:wght@300;400;500&display=swap" rel="stylesheet" />

      {/* Overlay */}
      <div
        onClick={onClose}
        style={{
          position: 'fixed', inset: 0,
          background: 'rgba(28,18,4,0.65)',
          backdropFilter: 'blur(4px)',
          zIndex: 1100,
          display: 'flex', alignItems: 'flex-start', justifyContent: 'center',
          overflowY: 'auto', padding: '2rem 1rem 3rem',
        }}
      >
        {/* Modal card */}
        <div
          onClick={e => e.stopPropagation()}
          style={{
            background: C.cream, maxWidth: '620px', width: '100%',
            borderRadius: '4px', position: 'relative',
            fontFamily: "'Jost', sans-serif", color: C.text,
            animation: 'fadeUp 0.3s ease',
          }}
        >
          {/* Close button */}
          <button
            onClick={onClose}
            style={{
              position: 'absolute', top: '1rem', right: '1rem',
              background: 'none', border: 'none', cursor: 'pointer',
              color: C.hint, fontSize: '1.2rem', lineHeight: 1, zIndex: 10,
            }}
            aria-label="Close"
          >
            ✕
          </button>

          {/* Header */}
          <div style={{ textAlign: 'center', padding: `2rem ${modalPad} 0` }}>
            <div style={{ fontSize: '10px', letterSpacing: '0.25em', textTransform: 'uppercase', color: C.hint, marginBottom: '14px', fontWeight: 400 }}>
              Premium Psyllium Exports · Gujarat, India
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', justifyContent: 'center', marginBottom: '18px' }}>
              <div style={{ flex: 1, maxWidth: '60px', height: '0.5px', background: C.border2 }} />
              <div style={{ width: '4px', height: '4px', borderRadius: '50%', background: C.accent, opacity: 0.5 }} />
              <div style={{ flex: 1, maxWidth: '60px', height: '0.5px', background: C.border2 }} />
            </div>
            <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '34px', fontWeight: 500, color: C.text, lineHeight: 1.2, marginBottom: '14px', fontStyle: 'italic' }}>
              Product Inquiry
            </div>
            <div style={{ fontSize: '13px', fontWeight: 300, color: C.muted, lineHeight: 1.8, maxWidth: '420px', margin: '0 auto' }}>
              Share your exact requirement and we will respond within 24 hours with a tailored proposal, COA, and sample offer.
            </div>
          </div>

          {/* Progress dots */}
          {!submitted && (
            <div style={{ padding: `1.5rem ${modalPad} 0`, textAlign: 'center' }}>
              <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginBottom: '12px' }}>
                {[1, 2, 3, 4, 5].map(i => (
                  <div key={i} style={{
                    height: '8px', borderRadius: '4px',
                    background: i < step ? C.accent : i === step ? C.accent : C.border,
                    opacity: i < step ? 0.4 : 1,
                    width: i === step ? '28px' : '8px',
                    transition: 'all 0.3s',
                  }} />
                ))}
              </div>
              <div style={{ fontSize: '11px', letterSpacing: '0.12em', color: C.hint, fontWeight: 400 }}>
                {stepTitles[step - 1]}
              </div>
            </div>
          )}

          {/* Card */}
          <div style={{
            background: C.card, border: `0.5px solid ${C.border}`,
            borderRadius: '4px', margin: isMobile ? '0.75rem' : '1.5rem', padding: cardPad,
            position: 'relative', overflow: 'hidden',
          }}>
            {/* Top accent line */}
            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '2px', background: `linear-gradient(90deg, transparent, ${C.accent}, transparent)`, opacity: 0.35 }} />

            {/* ─── STEP 1 ─── */}
            {!submitted && step === 1 && (
              <div>
                <div style={secTitle}>About your company</div>
                <Field label="Company name"><input style={inputStyle} placeholder="ABC Trading Co." value={field('company')} onChange={e => setField('company', e.target.value)} /></Field>
                <div style={grid2}>
                  <Field label="Your name"><input style={inputStyle} placeholder="John Smith" value={field('name')} onChange={e => setField('name', e.target.value)} /></Field>
                  <Field label="Designation"><input style={inputStyle} placeholder="Procurement Manager" value={field('role')} onChange={e => setField('role', e.target.value)} /></Field>
                </div>
                <div style={grid2}>
                  <Field label="Business email"><input style={inputStyle} type="email" placeholder="john@company.com" value={field('email')} onChange={e => setField('email', e.target.value)} /></Field>
                  <Field label="Phone / WhatsApp"><input style={inputStyle} placeholder="+1 555 000 0000" value={field('phone')} onChange={e => setField('phone', e.target.value)} /></Field>
                </div>
                <div style={grid2}>
                  <Field label="Destination country"><input style={inputStyle} placeholder="USA, Germany…" value={field('country')} onChange={e => setField('country', e.target.value)} /></Field>
                  <Field label="Port of discharge"><input style={inputStyle} placeholder="Hamburg / LA…" value={field('port')} onChange={e => setField('port', e.target.value)} /></Field>
                </div>
                <Field label="Type of buyer">
                  <ChipGroup id="buyer-type" options={['Manufacturer','Distributor','Retailer','Brand owner','Trader / Importer']} multi={false} value={chips['buyer-type']} onChange={v => setChip('buyer-type', v)} />
                </Field>
                <BtnRow step={1} onNext={() => setStep(2)} />
              </div>
            )}

            {/* ─── STEP 2 ─── */}
            {!submitted && step === 2 && (
              <div>
                <div style={secTitle}>Product specifications</div>
                <Field label="Product category">
                  <ChipGroup
                    id="product-type"
                    options={[
                      'Psyllium Husk','Psyllium Husk Powder','Psyllium Seeds',
                      'Moringa Powder','Dried Mint','Dried Oregano','Curry Leaves','Amla',
                      'Turmeric Powder','Cumin Seeds','Ajwain Seeds','Fenugreek Seeds','Coriander Seeds',
                      'Castor Oil','Karanja Oil',
                      'Khakhra (Ready-to-Eat)',
                    ]}
                    multi={true}
                    value={chips['product-type']}
                    onChange={v => setChip('product-type', v)}
                  />
                </Field>
                <div style={grid2}>
                  <Field label="Product form / grade">
                    <select style={selectStyle} value={field('grade')} onChange={e => setField('grade', e.target.value)}>
                      <option value="">Select…</option>
                      <option>Whole / Natural</option>
                      <option>Powder / Ground</option>
                      <option>Food grade</option>
                      <option>Pharmaceutical grade</option>
                      <option>Organic certified</option>
                      <option>Cold pressed (oils)</option>
                      <option>Not sure — advise</option>
                    </select>
                  </Field>
                  <Field label="Moisture / quality standard">
                    <select style={selectStyle} value={field('moisture')} onChange={e => setField('moisture', e.target.value)}>
                      <option value="">Select…</option>
                      <option>Standard (as per FSSAI)</option>
                      <option>Max 8% moisture</option>
                      <option>Max 10% moisture</option>
                      <option>No preference</option>
                    </select>
                  </Field>
                </div>
                <Field label="Specific requirement / grade details" hint="e.g. Psyllium 99% purity, Turmeric 5% curcumin, Castor oil pharmaceutical grade…">
                  <textarea
                    style={{ ...inputStyle, resize: 'vertical', minHeight: '75px', lineHeight: 1.7 }}
                    placeholder="Describe your exact quality requirement…"
                    value={field('specDetail')}
                    onChange={e => setField('specDetail', e.target.value)}
                  />
                </Field>
                <Field label="End use application">
                  <ChipGroup
                    id="application"
                    options={['Dietary supplements','Pharmaceutical','Food & beverage','Animal feed','Cosmetics / personal care','Industrial / B2B','Retail / private label','Export / trading']}
                    multi={true}
                    value={chips['application']}
                    onChange={v => setChip('application', v)}
                  />
                </Field>
                <BtnRow step={2} onNext={() => setStep(3)} onBack={() => setStep(1)} />
              </div>
            )}

            {/* ─── STEP 3 ─── */}
            {!submitted && step === 3 && (
              <div>
                <div style={secTitle}>Quantity & packaging</div>
                <div style={grid2}>
                  <Field label="Trial order qty" hint="Metric tonnes / kg / litres">
                    <input style={inputStyle} type="number" placeholder="e.g. 500" min="0" value={field('trialQty')} onChange={e => setField('trialQty', e.target.value)} />
                  </Field>
                  <Field label="Annual requirement" hint="Approx. per year">
                    <input style={inputStyle} type="number" placeholder="e.g. 5000" min="0" value={field('annualQty')} onChange={e => setField('annualQty', e.target.value)} />
                  </Field>
                </div>
                <Field label="Order frequency">
                  <ChipGroup id="frequency" options={['One-time','Monthly','Quarterly','Bi-annual','Annual']} multi={false} value={chips['frequency']} onChange={v => setChip('frequency', v)} />
                </Field>
                <Field label="Preferred packaging">
                  <ChipGroup id="packaging" options={['25 kg bags','50 kg bags','Jumbo bags (500–1000 kg)','Drums / IBC (oils)','Retail pouches (100g–1kg)','Custom / private label']} multi={true} value={chips['packaging']} onChange={v => setChip('packaging', v)} />
                </Field>
                <Field label="Preferred Incoterms">
                  <ChipGroup id="incoterms" options={['FOB','CIF','CFR','EXW','DDP','Open to suggestion']} multi={false} value={chips['incoterms']} onChange={v => setChip('incoterms', v)} />
                </Field>
                <BtnRow step={3} onNext={() => setStep(4)} onBack={() => setStep(2)} />
              </div>
            )}

            {/* ─── STEP 4 ─── */}
            {!submitted && step === 4 && (
              <div>
                <div style={secTitle}>Quality & certifications</div>
                <Field label="Required certifications">
                  <ChipGroup id="certs" options={['Organic (NOP / USDA)','EU Organic','ISO 9001','HACCP','FSSC 22000','Kosher','Halal','USP grade','EU Pharmacopoeia']} multi={true} value={chips['certs']} onChange={v => setChip('certs', v)} />
                </Field>
                <div style={grid2}>
                  <Field label="Microbiological standard">
                    <select style={selectStyle} value={field('micro')} onChange={e => setField('micro', e.target.value)}>
                      <option value="">Select…</option>
                      <option>Standard food grade</option><option>USP / Pharma grade</option>
                      <option>EU Pharmacopoeia</option><option>Not sure — advise</option>
                    </select>
                  </Field>
                  <Field label="Pesticide residue">
                    <select style={selectStyle} value={field('pesticide')} onChange={e => setField('pesticide', e.target.value)}>
                      <option value="">Select…</option>
                      <option>EU MRL compliant</option><option>US MRL compliant</option>
                      <option>Pesticide-free (tested)</option><option>Standard / flexible</option>
                    </select>
                  </Field>
                </div>
                <Field label="Additional notes for our team">
                  <textarea style={{ ...inputStyle, resize: 'vertical', minHeight: '90px', lineHeight: 1.7 }} placeholder="e.g. COA required, specific certifications, label design needs, special packing…" value={field('notes')} onChange={e => setField('notes', e.target.value)} />
                </Field>
                <BtnRow step={4} onNext={() => setStep(5)} onBack={() => setStep(3)} />
              </div>
            )}

            {/* ─── STEP 5 ─── */}
            {!submitted && step === 5 && (
              <div>
                <div style={secTitle}>Final details</div>
                <Field label="When do you need first shipment?">
                  <ChipGroup id="timeline" options={['ASAP (within 30 days)','1–3 months','3–6 months','6+ months (planning)']} multi={false} value={chips['timeline']} onChange={v => setChip('timeline', v)} />
                </Field>
                <Field label="Current supplier situation">
                  <ChipGroup id="existing" options={['Looking to switch','Need additional source','First time from India']} multi={false} value={chips['existing']} onChange={v => setChip('existing', v)} />
                </Field>
                <div style={grid2}>
                  <Field label="How did you find us?">
                    <select style={selectStyle} value={field('source')} onChange={e => setField('source', e.target.value)}>
                      <option value="">Select…</option>
                      <option>IndiaMart / TradeIndia</option><option>Alibaba</option>
                      <option>LinkedIn</option><option>Referral</option>
                      <option>Google search</option><option>Trade show</option><option>Other</option>
                    </select>
                  </Field>
                  <Field label="Free sample needed?">
                    <select style={selectStyle} value={field('sample')} onChange={e => setField('sample', e.target.value)}>
                      <option value="">Select…</option>
                      <option>Yes — before order confirmation</option>
                      <option>Yes — along with quotation</option>
                      <option>No — price first</option>
                      <option>Already have sample</option>
                    </select>
                  </Field>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '2rem', paddingTop: '1.5rem', borderTop: `0.5px solid ${C.border}` }}>
                  <button type="button" onClick={() => setStep(4)} style={{ ...btnBase, background: 'transparent', border: `0.5px solid ${C.border2}`, color: C.muted }}>← Back</button>
                  <button
                    type="button"
                    onClick={handleSubmit}
                    disabled={isSubmitting}
                    style={{ ...btnBase, background: C.accent, color: C.card, border: 'none', opacity: isSubmitting ? 0.7 : 1, minWidth: '160px' }}
                  >
                    {isSubmitting ? 'Submitting…' : 'Submit inquiry →'}
                  </button>
                </div>
              </div>
            )}

            {/* ─── THANK YOU ─── */}
            {submitted && (
              <div style={{ textAlign: 'center', padding: '1rem 0 0.5rem' }}>
                <div style={{ width: '56px', height: '56px', borderRadius: '50%', border: `0.5px solid ${C.border2}`, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem' }}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={C.accent} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                </div>
                <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '30px', fontWeight: 500, fontStyle: 'italic', color: C.text, marginBottom: '12px' }}>Inquiry received.</div>
                <div style={{ fontSize: '13px', fontWeight: 300, color: C.muted, lineHeight: 1.8, maxWidth: '380px', margin: '0 auto 2rem' }}>
                  Thank you for the detailed information. Our export specialist will review your requirement and respond personally within 24 hours.
                </div>
                <div style={{ textAlign: 'left', background: C.chipBg, border: `0.5px solid ${C.border}`, borderRadius: '4px', padding: '1.5rem', marginBottom: '2rem' }}>
                  <div style={{ fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase', color: C.hint, fontWeight: 500, marginBottom: '14px' }}>What happens next</div>
                  {[
                    { n: '1', t: 'Within 4 hours', d: '— Our team reviews your complete specification.' },
                    { n: '2', t: 'Within 24 hours', d: '— You receive a personalised quotation with COA, pricing, and lead time.' },
                    { n: '3', t: 'Free sample dispatch', d: '— We arrange a sample shipment at no cost before you commit.' },
                  ].map(item => (
                    <div key={item.n} style={{ display: 'flex', alignItems: 'flex-start', gap: '14px', marginBottom: '12px', fontSize: '13px' }}>
                      <div style={{ width: '22px', height: '22px', borderRadius: '50%', border: `0.5px solid ${C.border2}`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '10px', color: C.accent, flexShrink: 0, marginTop: '1px' }}>
                        {item.n}
                      </div>
                      <div style={{ color: C.muted, lineHeight: 1.6, fontWeight: 300 }}>
                        <strong style={{ color: C.text, fontWeight: 500 }}>{item.t}</strong> {item.d}
                      </div>
                    </div>
                  ))}
                </div>
                <button
                  onClick={onClose}
                  style={{
                    display: 'inline-flex', alignItems: 'center', gap: '10px',
                    background: C.accent, color: C.card, padding: '13px 28px',
                    borderRadius: '2px', fontFamily: "'Jost',sans-serif", fontSize: '12px',
                    fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase',
                    border: 'none', cursor: 'pointer',
                  }}
                >
                  ✓ Close
                </button>
              </div>
            )}

          </div>

          {/* Trust bar */}
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '12px', flexWrap: 'wrap', padding: `1rem ${modalPad} 1.5rem`, borderTop: `0.5px solid ${C.border}`, margin: `0 ${isMobile ? '0.75rem' : '1.5rem'}` }}>
            {['FSSAI Certified','COA Per Batch','5+ Years Export','30+ Countries'].map((t, i) => (
              <div key={t} style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '11px', color: C.hint, fontWeight: 400, letterSpacing: '0.05em' }}>
                {i > 0 && <div style={{ width: '3px', height: '3px', borderRadius: '50%', background: C.hint, opacity: 0.5 }} />}
                {t}
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </>
  );
}
