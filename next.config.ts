import type { NextConfig } from "next";
import createNextIntlPlugin from 'next-intl/plugin';
import path from 'path';

const withNextIntl = createNextIntlPlugin('./lib/i18n.ts');

// ============================================================
// 301 Redirects — Old psyllium URLs → New /psyllium/* URLs
// SEO safe: preserves rankings for all existing pages
// ============================================================
const LOCALES = ['en', 'de', 'fr', 'ar', 'zh', 'ja', 'es'];

function buildRedirects() {
  const redirects: {
    source: string;
    destination: string;
    permanent: boolean;
  }[] = [];

  const mappings = [
    { from: '/product',       to: '/psyllium/products' },
    { from: '/exporter',      to: '/psyllium/exporter' },
    { from: '/manufacturer',  to: '/psyllium/manufacturer' },
    { from: '/organic',       to: '/psyllium/organic' },
    { from: '/private-label', to: '/psyllium/private-label' },
    { from: '/white-label',   to: '/psyllium/white-label' },
    { from: '/suppliers',     to: '/psyllium/suppliers' },
    { from: '/quality',       to: '/psyllium/quality' },
    { from: '/blog',          to: '/psyllium/blog' },
    { from: '/news',          to: '/psyllium/news' },
    { from: '/stock',         to: '/psyllium/stock' },
  ];

  for (const locale of LOCALES) {
    for (const m of mappings) {
      // e.g. /en/product → /en/psyllium/products
      redirects.push({
        source: `/${locale}${m.from}`,
        destination: `/${locale}${m.to}`,
        permanent: true,
      });
    }

    // Country pages: /en/suppliers/usa → /en/psyllium/suppliers/usa
    redirects.push({
      source: `/${locale}/suppliers/:country`,
      destination: `/${locale}/psyllium/suppliers/:country`,
      permanent: true,
    });

    // Blog slugs: /en/blog/some-article → /en/psyllium/blog/some-article
    redirects.push({
      source: `/${locale}/blog/:slug`,
      destination: `/${locale}/psyllium/blog/:slug`,
      permanent: true,
    });
  }

  return redirects;
}

const nextConfig: NextConfig = {
  turbopack: {
    root: path.resolve(__dirname),
  },
  images: {
    remotePatterns: [
      { protocol: 'http', hostname: 'localhost' },
      { protocol: 'https', hostname: 'flagcdn.com' },
    ],
  },
  async redirects() {
    return buildRedirects();
  },
};

export default withNextIntl(nextConfig);
