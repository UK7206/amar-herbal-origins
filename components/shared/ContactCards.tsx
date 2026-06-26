'use client';

interface ContactItem {
  icon: string;
  label: string;
  value: string;
  href: string;
  color: string;
}

interface Props {
  contacts: ContactItem[];
}

export function ContactCards({ contacts }: Props) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '2rem' }}>
      {contacts.map((c) => (
        <a
          key={c.label}
          href={c.href}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'flex',
            flexDirection: 'column',
            padding: '1.25rem',
            background: 'white',
            borderRadius: '14px',
            border: `1.5px solid ${c.color}33`,
            textDecoration: 'none',
            transition: 'all 0.2s',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = c.color;
            e.currentTarget.style.transform = 'translateY(-2px)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = `${c.color}33`;
            e.currentTarget.style.transform = 'translateY(0)';
          }}
        >
          <span style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{c.icon}</span>
          <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#9ca3af', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.25rem' }}>
            {c.label}
          </span>
          <span style={{ fontSize: '0.9rem', fontWeight: 600, color: c.color }}>{c.value}</span>
        </a>
      ))}
    </div>
  );
}
