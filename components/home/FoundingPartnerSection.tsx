import Link from 'next/link';

export function FoundingPartnerSection() {
  const benefits = [
    { icon: '💰', title: 'Exclusive Pricing', desc: 'Founding partners get locked-in wholesale rates before our pricing increases.' },
    { icon: '🏷️', title: 'Free Private Label Setup', desc: 'First 5 partners get free label design and packaging setup (worth ₹15,000).' },
    { icon: '🔬', title: 'Free Sample Kit', desc: 'Receive a complete grade comparison kit of all our psyllium products at no cost.' },
    { icon: '🤝', title: 'Priority Support', desc: 'Direct WhatsApp line with our export team. First priority on new product launches.' },
  ];

  return (
    <section style={{ background: '#F5F0E8', padding: '5rem 0' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <div className="section-label" style={{ marginBottom: '0.75rem' }}>EXCLUSIVE OPPORTUNITY</div>
          <h2 className="section-heading">
            Become a<br />
            <em style={{ color: '#D97706' }}>Founding Partner</em>
          </h2>
          <p style={{ color: '#6b7280', marginTop: '1rem', fontSize: '1.05rem', maxWidth: '560px', margin: '1rem auto 0' }}>
            We are launching soon and looking for our first global partners. Early buyers get exclusive benefits that won't be available later.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.25rem', marginBottom: '3rem' }}>
          {benefits.map(benefit => (
            <div key={benefit.title} className="card-light" style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '2rem', marginBottom: '0.875rem' }}>{benefit.icon}</div>
              <h3 style={{ fontWeight: 700, fontSize: '1rem', color: '#1a1a1a', marginBottom: '0.5rem' }}>{benefit.title}</h3>
              <p style={{ color: '#6b7280', fontSize: '0.88rem', lineHeight: 1.6 }}>{benefit.desc}</p>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center' }}>
          <Link href="/en/contact" className="btn-primary" style={{ fontSize: '1rem', padding: '1rem 2.5rem', marginRight: '1rem' }}>
            Apply as Founding Partner →
          </Link>
          <p style={{ color: '#6b7280', fontSize: '0.875rem', marginTop: '1rem' }}>
            Limited to first 10 global partners. No commitment required to apply.
          </p>
        </div>
      </div>
    </section>
  );
}
