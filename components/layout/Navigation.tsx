'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown } from 'lucide-react';
import { LanguageSwitcher } from './LanguageSwitcher';
import { SampleRequestModal } from './SampleRequestModal';

const CATEGORIES = [
  { emoji: '🌾', label: 'Psyllium Products', href: '/en/psyllium', color: '#92400e', desc: 'Husk, Powder, Organic' },
  { emoji: '🌿', label: 'Herbs',             href: '/en/herbs',    color: '#16a34a', desc: 'Moringa, Mint, Amla, Oregano' },
  { emoji: '🌶️', label: 'Spices & Seeds',   href: '/en/spices',   color: '#b45309', desc: 'Turmeric, Cumin, Fenugreek' },
  { emoji: '🫙', label: 'Herbal Oils',       href: '/en/oils',     color: '#4d7c0f', desc: 'Castor Oil, Karanja Oil' },
  { emoji: '🍽️', label: 'Ready-to-Eat',     href: '/en/ready-to-eat', color: '#c2410c', desc: 'Khakhra & Gujarati Snacks' },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const checkUrl = () => {
      const searchParams = new URLSearchParams(window.location.search);
      const hasRequestParam = searchParams.get('request-sample') === 'true' || searchParams.get('request') === 'sample';
      const hasRequestHash = window.location.hash === '#request-sample' || window.location.hash === '#sample-request';
      if (hasRequestParam || hasRequestHash) setModalOpen(true);
    };
    checkUrl();
    window.addEventListener('hashchange', checkUrl);
    return () => window.removeEventListener('hashchange', checkUrl);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setProductsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleCloseModal = () => {
    setModalOpen(false);
    if (typeof window !== 'undefined') {
      const searchParams = new URLSearchParams(window.location.search);
      let changed = false;
      if (searchParams.has('request-sample')) { searchParams.delete('request-sample'); changed = true; }
      if (searchParams.has('request')) { searchParams.delete('request'); changed = true; }
      const hasRequestHash = window.location.hash === '#request-sample' || window.location.hash === '#sample-request';
      const newHash = hasRequestHash ? '' : window.location.hash;
      if (changed || hasRequestHash) {
        const searchStr = searchParams.toString();
        const newUrl = window.location.pathname + (searchStr ? `?${searchStr}` : '') + newHash;
        window.history.replaceState(null, '', newUrl);
      }
    }
  };

  const navLinks = [
    { href: '/en/about', label: 'About' },
    { href: '/en/packaging', label: 'Packaging' },
    { href: '/en/contact', label: 'Inquiry' },
  ];

  return (
    <>
    <nav
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 100,
        background: 'white',
        borderBottom: scrolled ? '1px solid #E5E0D8' : '1px solid transparent',
        boxShadow: scrolled ? '0 2px 20px rgba(0,0,0,0.06)' : 'none',
        transition: 'all 0.3s ease',
      }}
    >
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '72px' }}>

        {/* Logo */}
        <Link href="/en" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
          <span className="nav-logo-text">
            Amar Herbal{' '}
            <span style={{ color: '#D97706', fontStyle: 'italic' }}>Origins</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="desktop-nav">

          {/* Products Mega-Dropdown */}
          <div ref={dropdownRef} style={{ position: 'relative' }}>
            <button
              onClick={() => setProductsOpen(!productsOpen)}
              className="nav-link-item"
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '0.3rem',
                padding: '0.4rem 0',
              }}
            >
              Products
              <ChevronDown
                size={14}
                style={{
                  transform: productsOpen ? 'rotate(180deg)' : 'rotate(0)',
                  transition: 'transform 0.2s',
                }}
              />
            </button>

            {productsOpen && (
              <div
                style={{
                  position: 'absolute',
                  top: 'calc(100% + 1rem)',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  background: 'white',
                  borderRadius: '16px',
                  boxShadow: '0 16px 60px rgba(0,0,0,0.14)',
                  border: '1px solid #f3f4f6',
                  padding: '1rem',
                  minWidth: '360px',
                  zIndex: 200,
                }}
              >
                <div
                  style={{
                    fontSize: '0.72rem',
                    fontWeight: 700,
                    color: '#9ca3af',
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                    padding: '0.25rem 0.75rem 0.75rem',
                  }}
                >
                  Product Categories
                </div>
                {CATEGORIES.map((cat) => (
                  <Link
                    key={cat.href}
                    href={cat.href}
                    onClick={() => setProductsOpen(false)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.85rem',
                      padding: '0.75rem',
                      borderRadius: '10px',
                      textDecoration: 'none',
                      transition: 'background 0.15s',
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.background = '#f9fafb')
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.background = 'transparent')
                    }
                  >
                    <div
                      style={{
                        width: '38px',
                        height: '38px',
                        borderRadius: '10px',
                        background: `${cat.color}14`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '1.1rem',
                        flexShrink: 0,
                      }}
                    >
                      {cat.emoji}
                    </div>
                    <div>
                      <div
                        style={{
                          fontWeight: 600,
                          color: '#1a1a1a',
                          fontSize: '0.9rem',
                          marginBottom: '0.1rem',
                        }}
                      >
                        {cat.label}
                      </div>
                      <div style={{ fontSize: '0.78rem', color: '#9ca3af' }}>
                        {cat.desc}
                      </div>
                    </div>
                    <span
                      style={{
                        marginLeft: 'auto',
                        color: cat.color,
                        fontSize: '0.85rem',
                        fontWeight: 700,
                      }}
                    >
                      →
                    </span>
                  </Link>
                ))}
              </div>
            )}
          </div>

          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="nav-link-item">
              {link.label}
            </Link>
          ))}

          <Link
            href="/en/contact"
            style={{
              background: 'linear-gradient(135deg, #D97706, #b45309)',
              color: 'white',
              padding: '0.55rem 1.2rem',
              borderRadius: '50px',
              fontWeight: 700,
              fontSize: '0.85rem',
              textDecoration: 'none',
              whiteSpace: 'nowrap',
              boxShadow: '0 2px 8px rgba(217,119,6,0.3)',
            }}
          >
            Get Quote
          </Link>

          <button
            onClick={() => setModalOpen(true)}
            className="btn-primary nav-request-btn"
          >
            Inquiry →
          </button>
          <LanguageSwitcher />
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          style={{ display: 'none', background: 'none', border: 'none', cursor: 'pointer', padding: '0.5rem' }}
          className="mobile-toggle"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div
          style={{
            background: 'white',
            borderTop: '1px solid #E5E0D8',
            padding: '1rem 1.5rem 1.5rem',
          }}
        >
          {/* Products section */}
          <button
            onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              width: '100%',
              padding: '0.75rem 0',
              background: 'none',
              border: 'none',
              borderBottom: '1px solid #f3f4f6',
              cursor: 'pointer',
              color: '#374151',
              fontWeight: 500,
              fontSize: '0.95rem',
            }}
          >
            Products
            <ChevronDown
              size={16}
              style={{
                transform: mobileProductsOpen ? 'rotate(180deg)' : 'rotate(0)',
                transition: 'transform 0.2s',
              }}
            />
          </button>

          {mobileProductsOpen && (
            <div style={{ paddingLeft: '0.5rem', marginBottom: '0.5rem' }}>
              {CATEGORIES.map((cat) => (
                <Link
                  key={cat.href}
                  href={cat.href}
                  onClick={() => setIsOpen(false)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    padding: '0.65rem 0',
                    color: '#374151',
                    textDecoration: 'none',
                    fontSize: '0.9rem',
                    fontWeight: 500,
                    borderBottom: '1px solid #f9fafb',
                  }}
                >
                  <span>{cat.emoji}</span>
                  {cat.label}
                </Link>
              ))}
            </div>
          )}

          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              style={{
                display: 'block',
                padding: '0.75rem 0',
                color: '#374151',
                fontWeight: 500,
                textDecoration: 'none',
                borderBottom: '1px solid #f3f4f6',
              }}
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}

          <Link
            href="/en/contact"
            onClick={() => setIsOpen(false)}
            style={{
              display: 'inline-flex',
              marginTop: '1rem',
              background: 'linear-gradient(135deg, #D97706, #b45309)',
              color: 'white',
              padding: '0.7rem 1.5rem',
              borderRadius: '50px',
              fontWeight: 700,
              fontSize: '0.9rem',
              textDecoration: 'none',
            }}
          >
            Get Quote →
          </Link>

          <button
            onClick={() => { setModalOpen(true); setIsOpen(false); }}
            className="btn-primary"
            style={{ marginTop: '0.75rem', display: 'inline-flex', border: 'none', cursor: 'pointer' }}
          >
            Inquiry →
          </button>
          <div style={{ marginTop: '1rem' }}>
            <LanguageSwitcher />
          </div>
        </div>
      )}

      <style>{`
        .desktop-nav {
          display: flex;
          align-items: center;
          gap: 1.5rem;
        }
        .nav-link-item {
          text-decoration: none;
          color: #4b5563;
          font-weight: 500;
          font-size: 0.9rem;
          transition: color 0.2s;
          white-space: nowrap;
        }
        .nav-link-item:hover { color: #D97706; }
        .nav-request-btn {
          font-size: 0.85rem !important;
          padding: 0.55rem 1.2rem !important;
          border: none;
          cursor: pointer;
          white-space: nowrap;
        }
        .nav-logo-text {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.5rem;
          font-weight: 700;
          color: #1a1a1a;
        }
        @media (max-width: 1200px) {
          .desktop-nav { gap: 1rem; }
          .nav-link-item { font-size: 0.82rem; }
          .nav-request-btn { font-size: 0.8rem !important; padding: 0.5rem 1rem !important; }
          .nav-logo-text { font-size: 1.35rem; }
        }
        @media (max-width: 992px) {
          .desktop-nav { gap: 0.7rem; }
          .nav-link-item { font-size: 0.78rem; }
        }
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-toggle { display: block !important; }
        }
      `}</style>
    </nav>

    <SampleRequestModal isOpen={modalOpen} onClose={handleCloseModal} />
    </>
  );
}