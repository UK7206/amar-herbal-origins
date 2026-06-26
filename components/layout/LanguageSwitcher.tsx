'use client';

import { useState, useRef, useEffect } from 'react';

const languages = [
  // ── Tier 1: Major B2B markets ──
  { code: 'en', gtCode: 'en|en', native: 'English', label: 'English', flag: '🇬🇧' },
  { code: 'hi', gtCode: 'en|hi', native: 'हिन्दी', label: 'Hindi', flag: '🇮🇳' },
  { code: 'ar', gtCode: 'en|ar', native: 'العربية', label: 'Arabic', flag: '🇸🇦' },
  { code: 'zh-CN', gtCode: 'en|zh-CN', native: '中文', label: 'Chinese', flag: '🇨🇳' },
  { code: 'es', gtCode: 'en|es', native: 'Español', label: 'Spanish', flag: '🇪🇸' },
  { code: 'fr', gtCode: 'en|fr', native: 'Français', label: 'French', flag: '🇫🇷' },
  { code: 'de', gtCode: 'en|de', native: 'Deutsch', label: 'German', flag: '🇩🇪' },
  { code: 'pt', gtCode: 'en|pt', native: 'Português', label: 'Portuguese', flag: '🇧🇷' },
  { code: 'ru', gtCode: 'en|ru', native: 'Русский', label: 'Russian', flag: '🇷🇺' },
  // ── Tier 2: Asia-Pacific & Middle East ──
  { code: 'ja', gtCode: 'en|ja', native: '日本語', label: 'Japanese', flag: '🇯🇵' },
  { code: 'ko', gtCode: 'en|ko', native: '한국어', label: 'Korean', flag: '🇰🇷' },
  { code: 'tr', gtCode: 'en|tr', native: 'Türkçe', label: 'Turkish', flag: '🇹🇷' },
  { code: 'id', gtCode: 'en|id', native: 'Indonesia', label: 'Indonesian', flag: '🇮🇩' },
  { code: 'vi', gtCode: 'en|vi', native: 'Tiếng Việt', label: 'Vietnamese', flag: '🇻🇳' },
  { code: 'th', gtCode: 'en|th', native: 'ภาษาไทย', label: 'Thai', flag: '🇹🇭' },
  { code: 'ms', gtCode: 'en|ms', native: 'Melayu', label: 'Malay', flag: '🇲🇾' },
  { code: 'fa', gtCode: 'en|fa', native: 'فارسی', label: 'Persian', flag: '🇮🇷' },
  { code: 'ur', gtCode: 'en|ur', native: 'اردو', label: 'Urdu', flag: '🇵🇰' },
  { code: 'bn', gtCode: 'en|bn', native: 'বাংলা', label: 'Bengali', flag: '🇧🇩' },
  { code: 'tl', gtCode: 'en|tl', native: 'Filipino', label: 'Filipino', flag: '🇵🇭' },
  // ── Tier 3: Europe ──
  { code: 'it', gtCode: 'en|it', native: 'Italiano', label: 'Italian', flag: '🇮🇹' },
  { code: 'nl', gtCode: 'en|nl', native: 'Nederlands', label: 'Dutch', flag: '🇳🇱' },
  { code: 'pl', gtCode: 'en|pl', native: 'Polski', label: 'Polish', flag: '🇵🇱' },
  { code: 'uk', gtCode: 'en|uk', native: 'Українська', label: 'Ukrainian', flag: '🇺🇦' },
  { code: 'el', gtCode: 'en|el', native: 'Ελληνικά', label: 'Greek', flag: '🇬🇷' },
  { code: 'cs', gtCode: 'en|cs', native: 'Čeština', label: 'Czech', flag: '🇨🇿' },
  { code: 'ro', gtCode: 'en|ro', native: 'Română', label: 'Romanian', flag: '🇷🇴' },
  { code: 'hu', gtCode: 'en|hu', native: 'Magyar', label: 'Hungarian', flag: '🇭🇺' },
  { code: 'sv', gtCode: 'en|sv', native: 'Svenska', label: 'Swedish', flag: '🇸🇪' },
  { code: 'no', gtCode: 'en|no', native: 'Norsk', label: 'Norwegian', flag: '🇳🇴' },
  { code: 'da', gtCode: 'en|da', native: 'Dansk', label: 'Danish', flag: '🇩🇰' },
  { code: 'fi', gtCode: 'en|fi', native: 'Suomi', label: 'Finnish', flag: '🇫🇮' },
  // ── Tier 4: Africa & Middle East ──
  { code: 'sw', gtCode: 'en|sw', native: 'Kiswahili', label: 'Swahili', flag: '🇰🇪' },
  { code: 'he', gtCode: 'en|he', native: 'עברית', label: 'Hebrew', flag: '🇮🇱' },
  { code: 'af', gtCode: 'en|af', native: 'Afrikaans', label: 'Afrikaans', flag: '🇿🇦' },
];

function setGoogleTranslateCookie(value: string) {
  const domain = window.location.hostname;
  document.cookie = `googtrans=${value};path=/;domain=${domain}`;
  document.cookie = `googtrans=${value};path=/`;
}

export function LanguageSwitcher() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLang, setActiveLang] = useState(languages[0]);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const match = document.cookie.match(/googtrans=([^;]+)/);
    if (match) {
      const cookieCode = match[1].replace('/en/', '').replace('/', '');
      const found = languages.find(
        l => l.code === cookieCode || l.gtCode === `en|${cookieCode}`
      );
      if (found) setActiveLang(found);
    }
  }, []);

  useEffect(() => {
    const handleOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setIsOpen(false);
    };
    document.addEventListener('mousedown', handleOutside);
    return () => document.removeEventListener('mousedown', handleOutside);
  }, []);

  const switchLanguage = (lang: typeof languages[0]) => {
    setActiveLang(lang);
    setIsOpen(false);
    if (lang.code === 'en') {
      setGoogleTranslateCookie('/en/en');
      window.location.reload();
      return;
    }
    setGoogleTranslateCookie(`/en/${lang.code === 'zh-CN' ? 'zh-CN' : lang.code}`);
    const gWindow = window as unknown as Record<string, unknown>;
    if (typeof gWindow['doGTranslate'] === 'function') {
      (gWindow['doGTranslate'] as (v: string) => void)(lang.gtCode);
    } else {
      window.location.reload();
    }
  };

  return (
    <div ref={ref} style={{ position: 'relative' }}>
      {/* Trigger button */}
      <button
        onClick={() => setIsOpen(o => !o)}
        aria-label="Select language"
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.4rem',
          background: isOpen ? 'rgba(217,119,6,0.08)' : 'transparent',
          border: `1.5px solid ${isOpen ? '#D97706' : '#E5E0D8'}`,
          borderRadius: '50px',
          padding: '0.35rem 0.85rem',
          cursor: 'pointer',
          fontSize: '0.82rem',
          fontWeight: 600,
          color: isOpen ? '#D97706' : '#374151',
          transition: 'all 0.2s',
          whiteSpace: 'nowrap',
        }}
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <line x1="2" y1="12" x2="22" y2="12" />
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
        <span style={{ fontSize: '1rem' }}>{activeLang.flag}</span>
        <span>{activeLang.native}</span>
        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"
          style={{ transition: 'transform 0.2s', transform: isOpen ? 'rotate(180deg)' : 'none' }}>
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>

      {/* Dropdown */}
      {isOpen && (
        <div
          style={{
            position: 'absolute',
            top: 'calc(100% + 8px)',
            right: 0,
            background: 'white',
            border: '1px solid #E5E0D8',
            borderRadius: '14px',
            boxShadow: '0 12px 40px rgba(0,0,0,0.12)',
            minWidth: '220px',
            zIndex: 999,
            overflow: 'hidden',
            padding: '0.4rem',
            maxHeight: '480px',
            overflowY: 'auto',
          }}
        >
          <div style={{ padding: '0.4rem 0.75rem 0.5rem', fontSize: '0.68rem', fontWeight: 700, color: '#9ca3af', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
            Select Language
          </div>

          {languages.map(lang => {
            const active = lang.code === activeLang.code;
            return (
              <button
                key={lang.code}
                onClick={() => switchLanguage(lang)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.65rem',
                  width: '100%',
                  padding: '0.55rem 0.75rem',
                  background: active ? 'rgba(217,119,6,0.08)' : 'transparent',
                  border: 'none',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  textAlign: 'left',
                  transition: 'background 0.15s',
                }}
                onMouseEnter={e => { if (!active) (e.currentTarget as HTMLElement).style.background = '#FAF8F4'; }}
                onMouseLeave={e => { if (!active) (e.currentTarget as HTMLElement).style.background = 'transparent'; }}
              >
                <span style={{ fontSize: '1.3rem', flexShrink: 0, lineHeight: 1 }}>{lang.flag}</span>
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: active ? 700 : 500, fontSize: '0.88rem', color: active ? '#D97706' : '#1a1a1a' }}>
                    {lang.native}
                  </div>
                  <div style={{ fontSize: '0.7rem', color: '#9ca3af' }}>{lang.label}</div>
                </div>
                {active && (
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#D97706" strokeWidth="3">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                )}
              </button>
            );
          })}
        </div>
      )}

      <style>{`
        .goog-te-banner-frame,
        .skiptranslate { display: none !important; }
        body { top: 0 !important; }
        .goog-tooltip { display: none !important; }
        .goog-tooltip:hover { display: none !important; }
      `}</style>
    </div>
  );
}