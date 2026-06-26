// Reusable hreflang helper for all page layouts
// Ensures every page signals its international variants to Google
// This is critical for ranking in USA, UK, Germany, UAE, Australia etc.

const BASE_URL = 'https://amarherbalorigins.com';
const LOCALES = ['en', 'es', 'de', 'fr', 'ar', 'zh', 'ja'] as const;
type Locale = typeof LOCALES[number];

/**
 * Build hreflang alternates object for a given page path.
 * Example: buildAlternates('/contact')
 * Returns: { 'en': '...com/en/contact', 'de': '...com/de/contact', ... }
 */
export function buildAlternates(path: string) {
  const languages: Record<string, string> = {};
  for (const locale of LOCALES) {
    languages[locale] = `${BASE_URL}/${locale}${path}`;
  }
  // x-default points to English — tells Google which is the "default" version
  languages['x-default'] = `${BASE_URL}/en${path}`;
  return languages;
}

/**
 * Build canonical URL for a specific locale + path.
 */
export function buildCanonical(locale: string, path: string) {
  return `${BASE_URL}/${locale}${path}`;
}
