'use client';

import { useState } from 'react';
import Link from 'next/link';

const SITE_SECTIONS = [
  {
    title: '🏠 Main Site',
    color: '#D97706',
    urls: [
      { label: 'Homepage', path: '/en' },
      { label: 'About Us', path: '/en/about' },
      { label: 'Contact', path: '/en/contact' },
      { label: 'Packaging', path: '/en/packaging' },
      { label: 'Quality', path: '/en/quality' },
      { label: 'News', path: '/en/news' },
      { label: 'Stock', path: '/en/stock' },
      { label: 'White Label', path: '/en/white-label' },
    ],
  },
  {
    title: '🌾 Psyllium',
    color: '#92400e',
    urls: [
      { label: 'Psyllium Hub', path: '/en/psyllium' },
      { label: 'Products', path: '/en/psyllium/products' },
      { label: 'Exporter', path: '/en/psyllium/exporter' },
      { label: 'Manufacturer', path: '/en/psyllium/manufacturer' },
      { label: 'Organic', path: '/en/psyllium/organic' },
      { label: 'Private Label', path: '/en/psyllium/private-label' },
      { label: 'White Label', path: '/en/psyllium/white-label' },
      { label: 'Quality', path: '/en/psyllium/quality' },
      { label: 'Stock', path: '/en/psyllium/stock' },
      { label: 'News', path: '/en/psyllium/news' },
      { label: 'Blog', path: '/en/psyllium/blog' },
      { label: 'Suppliers', path: '/en/psyllium/suppliers' },
      { label: 'Contact', path: '/en/psyllium/contact' },
    ],
  },
  {
    title: '🌿 Herbs',
    color: '#16a34a',
    urls: [
      { label: 'Herbs Hub', path: '/en/herbs' },
      { label: 'Moringa Powder', path: '/en/herbs/moringa' },
      { label: 'Dried Oregano', path: '/en/herbs/oregano' },
      { label: 'Dried Mint', path: '/en/herbs/mint' },
      { label: 'Curry Leaves', path: '/en/herbs/curry-leaves' },
      { label: 'Amla (Indian Gooseberry)', path: '/en/herbs/amla' },
      { label: 'White Label', path: '/en/herbs/white-label' },
      { label: 'Contact', path: '/en/herbs/contact' },
      { label: 'Suppliers (All Countries)', path: '/en/herbs/suppliers' },
    ],
  },
  {
    title: '🌿 Herbs — Country Pages',
    color: '#15803d',
    urls: [
      { label: '🇺🇸 USA', path: '/en/herbs/suppliers/usa' },
      { label: '🇩🇪 Germany', path: '/en/herbs/suppliers/germany' },
      { label: '🇬🇧 UK', path: '/en/herbs/suppliers/uk' },
      { label: '🇦🇺 Australia', path: '/en/herbs/suppliers/australia' },
      { label: '🇨🇦 Canada', path: '/en/herbs/suppliers/canada' },
      { label: '🇦🇪 UAE', path: '/en/herbs/suppliers/uae' },
      { label: '🇸🇦 Saudi Arabia', path: '/en/herbs/suppliers/saudi-arabia' },
      { label: '🇳🇱 Netherlands', path: '/en/herbs/suppliers/netherlands' },
      { label: '🇫🇷 France', path: '/en/herbs/suppliers/france' },
      { label: '🇯🇵 Japan', path: '/en/herbs/suppliers/japan' },
      { label: '🇰🇷 South Korea', path: '/en/herbs/suppliers/south-korea' },
      { label: '🇸🇬 Singapore', path: '/en/herbs/suppliers/singapore' },
      { label: '🇲🇾 Malaysia', path: '/en/herbs/suppliers/malaysia' },
      { label: '🇮🇹 Italy', path: '/en/herbs/suppliers/italy' },
      { label: '🇪🇸 Spain', path: '/en/herbs/suppliers/spain' },
      { label: '🇵🇱 Poland', path: '/en/herbs/suppliers/poland' },
      { label: '🇧🇪 Belgium', path: '/en/herbs/suppliers/belgium' },
      { label: '🇸🇪 Sweden', path: '/en/herbs/suppliers/sweden' },
      { label: '🇩🇰 Denmark', path: '/en/herbs/suppliers/denmark' },
      { label: '🇳🇿 New Zealand', path: '/en/herbs/suppliers/new-zealand' },
      { label: '🇿🇦 South Africa', path: '/en/herbs/suppliers/south-africa' },
      { label: '🇹🇭 Thailand', path: '/en/herbs/suppliers/thailand' },
      { label: '🇻🇳 Vietnam', path: '/en/herbs/suppliers/vietnam' },
      { label: '🇮🇩 Indonesia', path: '/en/herbs/suppliers/indonesia' },
    ],
  },
  {
    title: '🌶️ Spices',
    color: '#b45309',
    urls: [
      { label: 'Spices Hub', path: '/en/spices' },
      { label: 'Turmeric Powder', path: '/en/spices/turmeric' },
      { label: 'Ajwain Seeds', path: '/en/spices/ajwain' },
      { label: 'Fenugreek Seeds', path: '/en/spices/fenugreek' },
      { label: 'Cumin Seeds', path: '/en/spices/cumin' },
      { label: 'Coriander Seeds', path: '/en/spices/coriander' },
      { label: 'White Label', path: '/en/spices/white-label' },
      { label: 'Contact', path: '/en/spices/contact' },
      { label: 'Suppliers (All Countries)', path: '/en/spices/suppliers' },
    ],
  },
  {
    title: '🌶️ Spices — Country Pages',
    color: '#92400e',
    urls: [
      { label: '🇺🇸 USA', path: '/en/spices/suppliers/usa' },
      { label: '🇩🇪 Germany', path: '/en/spices/suppliers/germany' },
      { label: '🇬🇧 UK', path: '/en/spices/suppliers/uk' },
      { label: '🇦🇺 Australia', path: '/en/spices/suppliers/australia' },
      { label: '🇨🇦 Canada', path: '/en/spices/suppliers/canada' },
      { label: '🇦🇪 UAE', path: '/en/spices/suppliers/uae' },
      { label: '🇸🇦 Saudi Arabia', path: '/en/spices/suppliers/saudi-arabia' },
      { label: '🇳🇱 Netherlands', path: '/en/spices/suppliers/netherlands' },
      { label: '🇫🇷 France', path: '/en/spices/suppliers/france' },
      { label: '🇯🇵 Japan', path: '/en/spices/suppliers/japan' },
      { label: '🇰🇷 South Korea', path: '/en/spices/suppliers/south-korea' },
      { label: '🇸🇬 Singapore', path: '/en/spices/suppliers/singapore' },
      { label: '🇲🇾 Malaysia', path: '/en/spices/suppliers/malaysia' },
      { label: '🇮🇹 Italy', path: '/en/spices/suppliers/italy' },
      { label: '🇪🇸 Spain', path: '/en/spices/suppliers/spain' },
      { label: '🇵🇱 Poland', path: '/en/spices/suppliers/poland' },
      { label: '🇧🇪 Belgium', path: '/en/spices/suppliers/belgium' },
      { label: '🇸🇪 Sweden', path: '/en/spices/suppliers/sweden' },
      { label: '🇩🇰 Denmark', path: '/en/spices/suppliers/denmark' },
      { label: '🇳🇿 New Zealand', path: '/en/spices/suppliers/new-zealand' },
      { label: '🇿🇦 South Africa', path: '/en/spices/suppliers/south-africa' },
      { label: '🇹🇭 Thailand', path: '/en/spices/suppliers/thailand' },
      { label: '🇻🇳 Vietnam', path: '/en/spices/suppliers/vietnam' },
      { label: '🇮🇩 Indonesia', path: '/en/spices/suppliers/indonesia' },
    ],
  },
  {
    title: '🫙 Oils',
    color: '#4d7c0f',
    urls: [
      { label: 'Oils Hub', path: '/en/oils' },
      { label: 'Castor Oil', path: '/en/oils/castor-oil' },
      { label: 'Karanja Oil', path: '/en/oils/karanja-oil' },
      { label: 'White Label', path: '/en/oils/white-label' },
      { label: 'Contact', path: '/en/oils/contact' },
      { label: 'Suppliers (All Countries)', path: '/en/oils/suppliers' },
    ],
  },
  {
    title: '🫙 Oils — Country Pages',
    color: '#3f6212',
    urls: [
      { label: '🇺🇸 USA', path: '/en/oils/suppliers/usa' },
      { label: '🇩🇪 Germany', path: '/en/oils/suppliers/germany' },
      { label: '🇬🇧 UK', path: '/en/oils/suppliers/uk' },
      { label: '🇦🇺 Australia', path: '/en/oils/suppliers/australia' },
      { label: '🇨🇦 Canada', path: '/en/oils/suppliers/canada' },
      { label: '🇦🇪 UAE', path: '/en/oils/suppliers/uae' },
      { label: '🇸🇦 Saudi Arabia', path: '/en/oils/suppliers/saudi-arabia' },
      { label: '🇳🇱 Netherlands', path: '/en/oils/suppliers/netherlands' },
      { label: '🇫🇷 France', path: '/en/oils/suppliers/france' },
      { label: '🇯🇵 Japan', path: '/en/oils/suppliers/japan' },
      { label: '🇰🇷 South Korea', path: '/en/oils/suppliers/south-korea' },
      { label: '🇸🇬 Singapore', path: '/en/oils/suppliers/singapore' },
      { label: '🇲🇾 Malaysia', path: '/en/oils/suppliers/malaysia' },
      { label: '🇮🇹 Italy', path: '/en/oils/suppliers/italy' },
      { label: '🇪🇸 Spain', path: '/en/oils/suppliers/spain' },
      { label: '🇵🇱 Poland', path: '/en/oils/suppliers/poland' },
      { label: '🇧🇪 Belgium', path: '/en/oils/suppliers/belgium' },
      { label: '🇸🇪 Sweden', path: '/en/oils/suppliers/sweden' },
      { label: '🇩🇰 Denmark', path: '/en/oils/suppliers/denmark' },
      { label: '🇳🇿 New Zealand', path: '/en/oils/suppliers/new-zealand' },
      { label: '🇿🇦 South Africa', path: '/en/oils/suppliers/south-africa' },
      { label: '🇹🇭 Thailand', path: '/en/oils/suppliers/thailand' },
      { label: '🇻🇳 Vietnam', path: '/en/oils/suppliers/vietnam' },
      { label: '🇮🇩 Indonesia', path: '/en/oils/suppliers/indonesia' },
    ],
  },
  {
    title: '🍽️ Ready-to-Eat',
    color: '#c2410c',
    urls: [
      { label: 'Ready-to-Eat Hub', path: '/en/ready-to-eat' },
      { label: 'Khakhra', path: '/en/ready-to-eat/khakhra' },
      { label: 'White Label', path: '/en/ready-to-eat/white-label' },
      { label: 'Contact', path: '/en/ready-to-eat/contact' },
      { label: 'Suppliers (All Countries)', path: '/en/ready-to-eat/suppliers' },
    ],
  },
  {
    title: '🍽️ Ready-to-Eat — Country Pages',
    color: '#9a3412',
    urls: [
      { label: '🇺🇸 USA', path: '/en/ready-to-eat/suppliers/usa' },
      { label: '🇩🇪 Germany', path: '/en/ready-to-eat/suppliers/germany' },
      { label: '🇬🇧 UK', path: '/en/ready-to-eat/suppliers/uk' },
      { label: '🇦🇺 Australia', path: '/en/ready-to-eat/suppliers/australia' },
      { label: '🇨🇦 Canada', path: '/en/ready-to-eat/suppliers/canada' },
      { label: '🇦🇪 UAE', path: '/en/ready-to-eat/suppliers/uae' },
      { label: '🇸🇦 Saudi Arabia', path: '/en/ready-to-eat/suppliers/saudi-arabia' },
      { label: '🇳🇱 Netherlands', path: '/en/ready-to-eat/suppliers/netherlands' },
      { label: '🇫🇷 France', path: '/en/ready-to-eat/suppliers/france' },
      { label: '🇯🇵 Japan', path: '/en/ready-to-eat/suppliers/japan' },
      { label: '🇰🇷 South Korea', path: '/en/ready-to-eat/suppliers/south-korea' },
      { label: '🇸🇬 Singapore', path: '/en/ready-to-eat/suppliers/singapore' },
      { label: '🇲🇾 Malaysia', path: '/en/ready-to-eat/suppliers/malaysia' },
      { label: '🇮🇹 Italy', path: '/en/ready-to-eat/suppliers/italy' },
      { label: '🇪🇸 Spain', path: '/en/ready-to-eat/suppliers/spain' },
      { label: '🇵🇱 Poland', path: '/en/ready-to-eat/suppliers/poland' },
      { label: '🇧🇪 Belgium', path: '/en/ready-to-eat/suppliers/belgium' },
      { label: '🇸🇪 Sweden', path: '/en/ready-to-eat/suppliers/sweden' },
      { label: '🇩🇰 Denmark', path: '/en/ready-to-eat/suppliers/denmark' },
      { label: '🇳🇿 New Zealand', path: '/en/ready-to-eat/suppliers/new-zealand' },
      { label: '🇿🇦 South Africa', path: '/en/ready-to-eat/suppliers/south-africa' },
      { label: '🇹🇭 Thailand', path: '/en/ready-to-eat/suppliers/thailand' },
      { label: '🇻🇳 Vietnam', path: '/en/ready-to-eat/suppliers/vietnam' },
      { label: '🇮🇩 Indonesia', path: '/en/ready-to-eat/suppliers/indonesia' },
    ],
  },
  {
    title: '🌾 Psyllium — Country Pages',
    color: '#78350f',
    urls: [
      { label: '🇺🇸 USA', path: '/en/psyllium/suppliers/usa' },
      { label: '🇩🇪 Germany', path: '/en/psyllium/suppliers/germany' },
      { label: '🇬🇧 UK', path: '/en/psyllium/suppliers/uk' },
      { label: '🇦🇺 Australia', path: '/en/psyllium/suppliers/australia' },
      { label: '🇨🇦 Canada', path: '/en/psyllium/suppliers/canada' },
      { label: '🇦🇪 UAE', path: '/en/psyllium/suppliers/uae' },
      { label: '🇸🇦 Saudi Arabia', path: '/en/psyllium/suppliers/saudi-arabia' },
      { label: '🇳🇱 Netherlands', path: '/en/psyllium/suppliers/netherlands' },
      { label: '🇫🇷 France', path: '/en/psyllium/suppliers/france' },
      { label: '🇯🇵 Japan', path: '/en/psyllium/suppliers/japan' },
      { label: '🇰🇷 South Korea', path: '/en/psyllium/suppliers/south-korea' },
      { label: '🇸🇬 Singapore', path: '/en/psyllium/suppliers/singapore' },
      { label: '🇲🇾 Malaysia', path: '/en/psyllium/suppliers/malaysia' },
      { label: '🇮🇹 Italy', path: '/en/psyllium/suppliers/italy' },
      { label: '🇪🇸 Spain', path: '/en/psyllium/suppliers/spain' },
      { label: '🇵🇱 Poland', path: '/en/psyllium/suppliers/poland' },
      { label: '🇧🇪 Belgium', path: '/en/psyllium/suppliers/belgium' },
      { label: '🇸🇪 Sweden', path: '/en/psyllium/suppliers/sweden' },
      { label: '🇩🇰 Denmark', path: '/en/psyllium/suppliers/denmark' },
      { label: '🇳🇿 New Zealand', path: '/en/psyllium/suppliers/new-zealand' },
      { label: '🇿🇦 South Africa', path: '/en/psyllium/suppliers/south-africa' },
      { label: '🇹🇭 Thailand', path: '/en/psyllium/suppliers/thailand' },
      { label: '🇻🇳 Vietnam', path: '/en/psyllium/suppliers/vietnam' },
      { label: '🇮🇩 Indonesia', path: '/en/psyllium/suppliers/indonesia' },
    ],
  },
];

export function SiteUrlsPanel() {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState('');

  const totalUrls = SITE_SECTIONS.reduce((acc, s) => acc + s.urls.length, 0);

  const filtered = search.trim()
    ? SITE_SECTIONS.map((s) => ({
        ...s,
        urls: s.urls.filter(
          (u) =>
            u.label.toLowerCase().includes(search.toLowerCase()) ||
            u.path.toLowerCase().includes(search.toLowerCase())
        ),
      })).filter((s) => s.urls.length > 0)
    : SITE_SECTIONS;

  return (
    <section style={{ background: '#0f0a02', padding: '3rem 0' }}>
      <div className="container" style={{ textAlign: 'center' }}>
        {/* Toggle Button */}
        <button
          id="site-urls-toggle"
          onClick={() => setOpen(!open)}
          style={{
            background: open ? '#1a1007' : 'transparent',
            border: '1.5px solid rgba(217,119,6,0.4)',
            color: '#D97706',
            padding: '0.75rem 2rem',
            borderRadius: '50px',
            cursor: 'pointer',
            fontFamily: "'Inter', sans-serif",
            fontSize: '0.88rem',
            fontWeight: 600,
            letterSpacing: '0.05em',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.6rem',
            transition: 'all 0.2s',
          }}
        >
          <span style={{ fontSize: '1rem' }}>{open ? '✕' : '🗺️'}</span>
          {open ? 'Close Site Map' : `View All Website URLs (${totalUrls} pages)`}
          <span
            style={{
              display: 'inline-block',
              transform: open ? 'rotate(180deg)' : 'rotate(0deg)',
              transition: 'transform 0.2s',
              fontSize: '0.75rem',
            }}
          >
            ▼
          </span>
        </button>

        {/* Expandable Panel */}
        {open && (
          <div
            style={{
              marginTop: '2rem',
              background: '#160d02',
              borderRadius: '16px',
              border: '1px solid rgba(217,119,6,0.2)',
              overflow: 'hidden',
              textAlign: 'left',
            }}
          >
            {/* Header */}
            <div
              style={{
                padding: '1.25rem 1.5rem',
                borderBottom: '1px solid rgba(217,119,6,0.15)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '0.75rem',
              }}
            >
              <div>
                <span
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: '1.25rem',
                    fontWeight: 700,
                    color: '#D97706',
                  }}
                >
                  🗺️ Complete Site Map
                </span>
                <span
                  style={{
                    marginLeft: '0.75rem',
                    background: 'rgba(217,119,6,0.15)',
                    color: '#D97706',
                    padding: '0.2rem 0.6rem',
                    borderRadius: '50px',
                    fontSize: '0.75rem',
                    fontWeight: 700,
                  }}
                >
                  {totalUrls} pages
                </span>
              </div>

              {/* Search */}
              <input
                type="text"
                placeholder="Search pages..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                style={{
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(217,119,6,0.3)',
                  borderRadius: '8px',
                  color: '#e5d6b8',
                  padding: '0.45rem 0.9rem',
                  fontSize: '0.82rem',
                  outline: 'none',
                  fontFamily: "'Inter', sans-serif",
                  width: '200px',
                }}
              />
            </div>

            {/* Sections */}
            <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {filtered.map((section) => (
                <div key={section.title}>
                  {/* Section title */}
                  <div
                    style={{
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      letterSpacing: '0.1em',
                      color: section.color,
                      marginBottom: '0.65rem',
                      paddingBottom: '0.4rem',
                      borderBottom: `1px solid ${section.color}25`,
                    }}
                  >
                    {section.title}
                  </div>

                  {/* URL grid */}
                  <div
                    style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
                      gap: '0.4rem',
                    }}
                  >
                    {section.urls.map((url) => (
                      <Link
                        key={url.path}
                        href={url.path}
                        target="_blank"
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.5rem',
                          padding: '0.4rem 0.75rem',
                          borderRadius: '6px',
                          textDecoration: 'none',
                          color: '#b8a98a',
                          fontSize: '0.82rem',
                          fontWeight: 500,
                          transition: 'all 0.15s',
                          background: 'rgba(255,255,255,0.02)',
                          border: '1px solid transparent',
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.background = `${section.color}18`;
                          e.currentTarget.style.borderColor = `${section.color}40`;
                          e.currentTarget.style.color = section.color;
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.background = 'rgba(255,255,255,0.02)';
                          e.currentTarget.style.borderColor = 'transparent';
                          e.currentTarget.style.color = '#b8a98a';
                        }}
                      >
                        <span style={{ fontSize: '0.65rem', opacity: 0.5, flexShrink: 0 }}>▸</span>
                        <span>{url.label}</span>
                        <span
                          style={{
                            marginLeft: 'auto',
                            fontSize: '0.65rem',
                            opacity: 0.35,
                            fontFamily: 'monospace',
                            flexShrink: 0,
                          }}
                        >
                          ↗
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              ))}

              {filtered.length === 0 && (
                <div style={{ textAlign: 'center', color: '#6b7280', padding: '2rem', fontSize: '0.9rem' }}>
                  No pages found for "{search}"
                </div>
              )}
            </div>

            {/* Footer */}
            <div
              style={{
                padding: '0.875rem 1.5rem',
                borderTop: '1px solid rgba(217,119,6,0.12)',
                fontSize: '0.75rem',
                color: '#4b3a20',
                display: 'flex',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '0.5rem',
              }}
            >
              <span>All pages open in a new tab</span>
              <span>amarherbalorigins.com — {totalUrls} total pages indexed</span>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
