'use client';

import { useState, useEffect } from 'react';

const inputStyle = {
  width: '100%',
  padding: '0.75rem 1rem',
  border: '1.5px solid #E5E0D8',
  borderRadius: '8px',
  fontSize: '0.9rem',
  color: '#1a1a1a',
  background: '#FAF8F4',
  outline: 'none',
  transition: 'border-color 0.2s',
  boxSizing: 'border-box' as const,
};

const labelStyle = {
  display: 'block',
  fontSize: '0.82rem',
  fontWeight: 700,
  color: '#374151',
  marginBottom: '0.4rem',
  letterSpacing: '0.03em',
  textTransform: 'uppercase' as const,
};

const products = [
  // Psyllium
  'Psyllium Husk',
  'Psyllium Husk Powder',
  'Psyllium Seeds',
  'Organic Psyllium Husk',
  // Herbs
  'Moringa Powder',
  'Dried Mint',
  'Dried Oregano',
  'Curry Leaves',
  'Amla (Indian Gooseberry)',
  // Spices & Seeds
  'Turmeric Powder',
  'Cumin Seeds',
  'Ajwain (Carom) Seeds',
  'Fenugreek Seeds',
  'Coriander Seeds',
  // Oils
  'Castor Oil',
  'Karanja Oil',
  // Ready-to-Eat
  'Khakhra (Gujarati Snack)',
  // Other
  'Multiple Products',
  'Other / Custom Requirement',
];

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    country: '',
    product: '',
    quantity: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [focused, setFocused] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 600);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const res = await fetch('/api/enquiries', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', phone: '', company: '', country: '', product: '', quantity: '', message: '' });
        setTimeout(() => setSubmitStatus('idle'), 8000);
      } else {
        setSubmitStatus('error');
      }
    } catch {
      setSubmitStatus('error');
    }

    setIsSubmitting(false);
  };


  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const fieldStyle = (name: string) => ({
    ...inputStyle,
    borderColor: focused === name ? '#D97706' : '#E5E0D8',
    boxShadow: focused === name ? '0 0 0 3px rgba(217,119,6,0.1)' : 'none',
  });

  return (
    <div
      style={{
        background: 'white',
        border: '1px solid #E5E0D8',
        borderRadius: '16px',
        padding: '2.5rem',
        boxShadow: '0 4px 24px rgba(0,0,0,0.06)',
      }}
    >
      <h2
        style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: '1.8rem',
          fontWeight: 700,
          color: '#1a1a1a',
          marginBottom: '0.5rem',
        }}
      >
        Send an Enquiry
      </h2>
      <p style={{ color: '#6b7280', fontSize: '0.9rem', marginBottom: '2rem' }}>
        Fill in your details and we'll respond within 24 hours.
      </p>

      {submitStatus === 'success' && (
        <div
          style={{
            background: 'rgba(16,185,129,0.08)',
            border: '1px solid rgba(16,185,129,0.3)',
            borderRadius: '10px',
            padding: '1rem 1.25rem',
            marginBottom: '1.5rem',
            display: 'flex',
            gap: '0.75rem',
            alignItems: 'flex-start',
          }}
        >
          <span style={{ fontSize: '1.25rem' }}>✅</span>
          <div>
            <div style={{ fontWeight: 700, color: '#065f46', marginBottom: '0.2rem' }}>Enquiry Submitted Successfully!</div>
            <p style={{ color: '#047857', fontSize: '0.88rem', margin: 0 }}>
              Thank you! Your enquiry has been received. We will respond within 24 hours on your email or phone.
            </p>
          </div>
        </div>
      )}

      {submitStatus === 'error' && (
        <div
          style={{
            background: 'rgba(239,68,68,0.08)',
            border: '1px solid rgba(239,68,68,0.3)',
            borderRadius: '10px',
            padding: '1rem 1.25rem',
            marginBottom: '1.5rem',
          }}
        >
          <p style={{ color: '#991b1b', fontSize: '0.88rem', margin: 0 }}>
            Something went wrong. Please try again or WhatsApp us directly.
          </p>
        </div>
      )}

      <form onSubmit={handleSubmit}>
        {/* Row 1: Name + Company */}
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
          <div>
            <label style={labelStyle} htmlFor="name">Full Name *</label>
            <input
              id="name" type="text" name="name" required
              value={formData.name} onChange={handleChange}
              onFocus={() => setFocused('name')} onBlur={() => setFocused(null)}
              style={fieldStyle('name')} placeholder="John Smith"
            />
          </div>
          <div>
            <label style={labelStyle} htmlFor="company">Company Name</label>
            <input
              id="company" type="text" name="company"
              value={formData.company} onChange={handleChange}
              onFocus={() => setFocused('company')} onBlur={() => setFocused(null)}
              style={fieldStyle('company')} placeholder="Acme Corp"
            />
          </div>
        </div>

        {/* Row 2: Email + Phone */}
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
          <div>
            <label style={labelStyle} htmlFor="email">Email *</label>
            <input
              id="email" type="email" name="email" required
              value={formData.email} onChange={handleChange}
              onFocus={() => setFocused('email')} onBlur={() => setFocused(null)}
              style={fieldStyle('email')} placeholder="john@company.com"
            />
          </div>
          <div>
            <label style={labelStyle} htmlFor="phone">Phone / WhatsApp</label>
            <input
              id="phone" type="tel" name="phone"
              value={formData.phone} onChange={handleChange}
              onFocus={() => setFocused('phone')} onBlur={() => setFocused(null)}
              style={fieldStyle('phone')} placeholder="+1 234 567 8900"
            />
          </div>
        </div>

        {/* Row 3: Country + Product */}
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
          <div>
            <label style={labelStyle} htmlFor="country">Country</label>
            <input
              id="country" type="text" name="country"
              value={formData.country} onChange={handleChange}
              onFocus={() => setFocused('country')} onBlur={() => setFocused(null)}
              style={fieldStyle('country')} placeholder="United States"
            />
          </div>
          <div>
            <label style={labelStyle} htmlFor="product">Product Interest</label>
            <select
              id="product" name="product"
              value={formData.product} onChange={handleChange}
              onFocus={() => setFocused('product')} onBlur={() => setFocused(null)}
              style={{ ...fieldStyle('product'), appearance: 'auto' }}
            >
              <option value="">Select a product</option>
              {products.map(p => <option key={p} value={p}>{p}</option>)}
            </select>
          </div>
        </div>

        {/* Row 4: Quantity */}
        <div style={{ marginBottom: '1rem' }}>
          <label style={labelStyle} htmlFor="quantity">Estimated Quantity (MT/Month)</label>
          <input
            id="quantity" type="text" name="quantity"
            value={formData.quantity} onChange={handleChange}
            onFocus={() => setFocused('quantity')} onBlur={() => setFocused(null)}
            style={fieldStyle('quantity')} placeholder="e.g. 5 MT / 20 MT / Trial 500 kg"
          />
        </div>

        {/* Message */}
        <div style={{ marginBottom: '1.5rem' }}>
          <label style={labelStyle} htmlFor="message">Message *</label>
          <textarea
            id="message" name="message" required rows={5}
            value={formData.message} onChange={handleChange}
            onFocus={() => setFocused('message')} onBlur={() => setFocused(null)}
            style={{ ...fieldStyle('message'), resize: 'vertical' as const }}
            placeholder="Tell us your requirements — grade, mesh size, destination port, incoterm preference..."
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          style={{
            width: '100%',
            background: isSubmitting ? '#92400e' : '#D97706',
            color: 'white',
            border: 'none',
            padding: '1rem',
            borderRadius: '10px',
            fontWeight: 700,
            fontSize: '0.95rem',
            cursor: isSubmitting ? 'not-allowed' : 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.5rem',
            transition: 'all 0.2s',
            opacity: isSubmitting ? 0.8 : 1,
          }}
        >
          {isSubmitting ? (
            <>
              <div
                style={{
                  width: '18px',
                  height: '18px',
                  border: '2px solid rgba(255,255,255,0.4)',
                  borderTopColor: 'white',
                  borderRadius: '50%',
                  animation: 'spin 0.7s linear infinite',
                }}
              />
              Sending...
            </>
          ) : (
            '→ Send Enquiry'
          )}
        </button>
      </form>
    </div>
  );
}