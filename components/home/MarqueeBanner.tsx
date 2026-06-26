export function MarqueeBanner() {
  const items = [
    '• Ships Worldwide',
    '• Sample Orders Open',
    '• Psyllium Husk (Whole)',
    '• Psyllium Husk Powder',
    '• Organic Grade Available',
    '• Psyllium Seeds',
    '• COA with Every Order',
    '• NABL Lab Tested',
    '• Private Label Ready',
    '• 100g Minimum Sample',
    '• 24hr Quote Response',
    '• From Gujarat, India',
  ];

  const allItems = [...items, ...items];

  return (
    <div className="marquee-wrapper">
      <div className="marquee-track">
        {allItems.map((item, i) => (
          <span
            key={i}
            style={{
              padding: '0 1.5rem',
              color: '#D97706',
              fontWeight: 500,
              fontSize: '0.875rem',
              whiteSpace: 'nowrap',
              fontFamily: "'Inter', sans-serif",
            }}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
