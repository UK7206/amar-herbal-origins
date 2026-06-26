'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown } from 'lucide-react';
import type { Category, Product } from '@/lib/category-data';

type Props = {
  category: Category;
};

export function CategoryNavigation({ category }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest('.cat-products-dropdown')) {
        setProductsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const { colorTheme, colorLight, emoji, name, slug, products } = category;

  const basePath = `/en/${slug}`;

  return (
    <>
      <nav
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 50,
          background: 'white',
          borderBottom: scrolled
            ? `2px solid ${colorTheme}22`
            : '2px solid transparent',
          boxShadow: scrolled ? '0 2px 20px rgba(0,0,0,0.08)' : 'none',
          transition: 'all 0.3s ease',
        }}
      >
        <div
          className="container"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: '68px',
          }}
        >
          {/* Back to main + Logo */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <Link
              href="/en"
              style={{
                textDecoration: 'none',
                color: '#6b7280',
                fontSize: '0.8rem',
                fontWeight: 500,
                display: 'flex',
                alignItems: 'center',
                gap: '0.3rem',
                transition: 'color 0.2s',
                whiteSpace: 'nowrap',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = colorTheme)}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#6b7280')}
            >
              ← Amar Herbal
            </Link>

            <span style={{ color: '#d1d5db', fontSize: '1rem' }}>|</span>

            <Link
              href={basePath}
              style={{
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem',
              }}
            >
              <span style={{ fontSize: '1.3rem' }}>{emoji}</span>
              <span
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: '1.35rem',
                  fontWeight: 700,
                  color: colorTheme,
                }}
              >
                {name}
              </span>
            </Link>
          </div>

          {/* Desktop Nav */}
          <div
            className="cat-desktop-nav"
            style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}
          >
            {/* Products Dropdown */}
            {products.length > 0 && (
              <div className="cat-products-dropdown" style={{ position: 'relative' }}>
                <button
                  onClick={() => setProductsOpen(!productsOpen)}
                  style={{
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.3rem',
                    color: '#374151',
                    fontWeight: 500,
                    fontSize: '0.9rem',
                    padding: '0.4rem 0',
                    transition: 'color 0.2s',
                  }}
                  onMouseEnter={(e) =>
                    ((e.currentTarget as HTMLButtonElement).style.color = colorTheme)
                  }
                  onMouseLeave={(e) =>
                    ((e.currentTarget as HTMLButtonElement).style.color = '#374151')
                  }
                >
                  Products
                  <ChevronDown
                    size={15}
                    style={{
                      transform: productsOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                      transition: 'transform 0.2s',
                    }}
                  />
                </button>

                {productsOpen && (
                  <div
                    style={{
                      position: 'absolute',
                      top: 'calc(100% + 0.75rem)',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      background: 'white',
                      borderRadius: '12px',
                      boxShadow: '0 8px 30px rgba(0,0,0,0.12)',
                      border: `1px solid ${colorTheme}22`,
                      minWidth: '200px',
                      padding: '0.5rem',
                      zIndex: 100,
                    }}
                  >
                    {products.map((product) => (
                      <Link
                        key={product.id}
                        href={`${basePath}/${product.slug}`}
                        onClick={() => setProductsOpen(false)}
                        style={{
                          display: 'block',
                          padding: '0.65rem 1rem',
                          borderRadius: '8px',
                          textDecoration: 'none',
                          color: '#374151',
                          fontSize: '0.88rem',
                          fontWeight: 500,
                          transition: 'all 0.15s',
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.background = colorLight;
                          e.currentTarget.style.color = colorTheme;
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.background = 'transparent';
                          e.currentTarget.style.color = '#374151';
                        }}
                      >
                        {product.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            )}

            <Link
              href={`${basePath}/white-label`}
              style={{
                textDecoration: 'none',
                color: '#374151',
                fontWeight: 500,
                fontSize: '0.9rem',
                transition: 'color 0.2s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = colorTheme)}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#374151')}
            >
              White Label
            </Link>

            <Link
              href={`${basePath}/contact`}
              style={{
                textDecoration: 'none',
                color: '#374151',
                fontWeight: 500,
                fontSize: '0.9rem',
                transition: 'color 0.2s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = colorTheme)}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#374151')}
            >
              Inquiry
            </Link>

            <a
              href="https://wa.me/919408465040"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                background: colorTheme,
                color: 'white',
                padding: '0.5rem 1.1rem',
                borderRadius: '8px',
                textDecoration: 'none',
                fontWeight: 600,
                fontSize: '0.85rem',
                transition: 'opacity 0.2s',
                whiteSpace: 'nowrap',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.88')}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
            >
              Get Quote →
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="cat-mobile-toggle"
            style={{
              display: 'none',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '0.5rem',
              color: '#374151',
            }}
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
              borderTop: `2px solid ${colorTheme}22`,
              padding: '1rem 1.5rem 1.5rem',
            }}
          >
            {products.length > 0 && (
              <>
                <div
                  style={{
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    color: colorTheme,
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    marginBottom: '0.5rem',
                    marginTop: '0.5rem',
                  }}
                >
                  Products
                </div>
                {products.map((product) => (
                  <Link
                    key={product.id}
                    href={`${basePath}/${product.slug}`}
                    onClick={() => setIsOpen(false)}
                    style={{
                      display: 'block',
                      padding: '0.6rem 0',
                      color: '#374151',
                      fontWeight: 500,
                      textDecoration: 'none',
                      borderBottom: '1px solid #f3f4f6',
                      fontSize: '0.9rem',
                    }}
                  >
                    {product.name}
                  </Link>
                ))}
              </>
            )}

            <Link
              href={`${basePath}/white-label`}
              onClick={() => setIsOpen(false)}
              style={{
                display: 'block',
                padding: '0.75rem 0',
                color: '#374151',
                fontWeight: 500,
                textDecoration: 'none',
                borderBottom: '1px solid #f3f4f6',
              }}
            >
              White Label
            </Link>
            <Link
              href={`${basePath}/contact`}
              onClick={() => setIsOpen(false)}
              style={{
                display: 'block',
                padding: '0.75rem 0',
                color: '#374151',
                fontWeight: 500,
                textDecoration: 'none',
                borderBottom: '1px solid #f3f4f6',
              }}
            >
              Inquiry
            </Link>
            <a
              href="https://wa.me/919408465040"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                background: colorTheme,
                color: 'white',
                padding: '0.6rem 1.2rem',
                borderRadius: '8px',
                textDecoration: 'none',
                fontWeight: 600,
                fontSize: '0.88rem',
                marginTop: '1rem',
              }}
            >
              Get Quote →
            </a>
          </div>
        )}
      </nav>

      <style>{`
        @media (max-width: 768px) {
          .cat-desktop-nav { display: none !important; }
          .cat-mobile-toggle { display: block !important; }
        }
      `}</style>
    </>
  );
}
