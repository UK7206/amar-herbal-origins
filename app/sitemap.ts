import type { MetadataRoute } from 'next';
import { COUNTRY_SLUGS } from '@/lib/countries-data';
import { BLOG_POSTS } from '@/lib/blog-data';

const BASE_URL = 'https://amarherbalorigins.com';
const LOCALES = ['en', 'de', 'fr', 'ar', 'es', 'zh', 'ja'] as const;
const PRIMARY_LOCALE = 'en';

// ── Route definitions ──────────────────────────────────────────────
// Main site static pages
const MAIN_ROUTES = [
  { path: '',            priority: 1.0,  freq: 'weekly'  },
  { path: '/about',      priority: 0.85, freq: 'monthly' },
  { path: '/contact',    priority: 0.9,  freq: 'monthly' },
  { path: '/packaging',  priority: 0.75, freq: 'monthly' },
  { path: '/white-label',priority: 0.8,  freq: 'monthly' },
  { path: '/quality',    priority: 0.8,  freq: 'monthly' },
  { path: '/news',       priority: 0.7,  freq: 'weekly'  },
  { path: '/stock',      priority: 0.7,  freq: 'weekly'  },
] as const;

// 🌾 Psyllium mini-site
const PSYLLIUM_ROUTES = [
  { path: '/psyllium',                 priority: 0.95, freq: 'weekly'  },
  { path: '/psyllium/products',        priority: 0.90, freq: 'weekly'  },
  { path: '/psyllium/white-label',     priority: 0.88, freq: 'monthly' },
  { path: '/psyllium/contact',         priority: 0.8,  freq: 'monthly' },
  { path: '/psyllium/quality',         priority: 0.82, freq: 'monthly' },
  { path: '/psyllium/organic',         priority: 0.82, freq: 'monthly' },
  { path: '/psyllium/exporter',        priority: 0.88, freq: 'monthly' },
  { path: '/psyllium/manufacturer',    priority: 0.88, freq: 'monthly' },
  { path: '/psyllium/private-label',   priority: 0.85, freq: 'monthly' },
  { path: '/psyllium/stock',           priority: 0.7,  freq: 'weekly'  },
  { path: '/psyllium/news',            priority: 0.7,  freq: 'weekly'  },
  { path: '/psyllium/suppliers',       priority: 0.85, freq: 'monthly' },
  { path: '/psyllium/blog',            priority: 0.75, freq: 'weekly'  },
] as const;

// 🌿 Herbs mini-site
const HERBS_ROUTES = [
  { path: '/herbs',               priority: 0.92, freq: 'weekly'  },
  { path: '/herbs/moringa',       priority: 0.88, freq: 'monthly' },
  { path: '/herbs/mint',          priority: 0.88, freq: 'monthly' },
  { path: '/herbs/amla',          priority: 0.88, freq: 'monthly' },
  { path: '/herbs/oregano',       priority: 0.88, freq: 'monthly' },
  { path: '/herbs/curry-leaves',  priority: 0.88, freq: 'monthly' },
  { path: '/herbs/white-label',   priority: 0.85, freq: 'monthly' },
  { path: '/herbs/contact',       priority: 0.8,  freq: 'monthly' },
  { path: '/herbs/suppliers',     priority: 0.88, freq: 'monthly' },
] as const;

// 🌶️ Spices mini-site
const SPICES_ROUTES = [
  { path: '/spices',             priority: 0.92, freq: 'weekly'  },
  { path: '/spices/turmeric',    priority: 0.88, freq: 'monthly' },
  { path: '/spices/cumin',       priority: 0.88, freq: 'monthly' },
  { path: '/spices/coriander',   priority: 0.88, freq: 'monthly' },
  { path: '/spices/fenugreek',   priority: 0.88, freq: 'monthly' },
  { path: '/spices/ajwain',      priority: 0.88, freq: 'monthly' },
  { path: '/spices/white-label', priority: 0.85, freq: 'monthly' },
  { path: '/spices/contact',     priority: 0.8,  freq: 'monthly' },
  { path: '/spices/suppliers',   priority: 0.88, freq: 'monthly' },
] as const;

// 🫙 Oils mini-site
const OILS_ROUTES = [
  { path: '/oils',              priority: 0.9,  freq: 'weekly'  },
  { path: '/oils/castor-oil',   priority: 0.88, freq: 'monthly' },
  { path: '/oils/karanja-oil',  priority: 0.88, freq: 'monthly' },
  { path: '/oils/white-label',  priority: 0.85, freq: 'monthly' },
  { path: '/oils/contact',      priority: 0.8,  freq: 'monthly' },
  { path: '/oils/suppliers',    priority: 0.88, freq: 'monthly' },
] as const;

// 🍘 Ready-to-Eat mini-site
const READY_TO_EAT_ROUTES = [
  { path: '/ready-to-eat',               priority: 0.88, freq: 'weekly'  },
  { path: '/ready-to-eat/khakhra',       priority: 0.85, freq: 'monthly' },
  { path: '/ready-to-eat/white-label',   priority: 0.82, freq: 'monthly' },
  { path: '/ready-to-eat/contact',       priority: 0.78, freq: 'monthly' },
  { path: '/ready-to-eat/suppliers',     priority: 0.85, freq: 'monthly' },
] as const;

// Psyllium blog articles (derived dynamically from master data)
const BLOG_SLUGS = BLOG_POSTS.map(post => post.slug);

// ── Helpers ────────────────────────────────────────────────────────
function buildAlternates(path: string): Record<string, string> {
  const languages: Record<string, string> = {};
  for (const locale of LOCALES) {
    languages[locale] = `${BASE_URL}/${locale}${path}`;
  }
  languages['x-default'] = `${BASE_URL}/${PRIMARY_LOCALE}${path}`;
  return languages;
}

type Freq = 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';

function pushRoutes(
  entries: MetadataRoute.Sitemap,
  routes: readonly { path: string; priority: number; freq: string }[],
  now: Date
) {
  for (const route of routes) {
    for (const locale of LOCALES) {
      entries.push({
        url: `${BASE_URL}/${locale}${route.path}`,
        lastModified: now,
        changeFrequency: route.freq as Freq,
        priority: locale === PRIMARY_LOCALE ? route.priority : +(route.priority - 0.1).toFixed(2),
        alternates: { languages: buildAlternates(route.path) },
      });
    }
  }
}

// ── Main sitemap export ────────────────────────────────────────────
export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];
  const now = new Date();

  // Main site pages
  pushRoutes(entries, MAIN_ROUTES, now);

  // All mini-sites
  pushRoutes(entries, PSYLLIUM_ROUTES, now);
  pushRoutes(entries, HERBS_ROUTES, now);
  pushRoutes(entries, SPICES_ROUTES, now);
  pushRoutes(entries, OILS_ROUTES, now);
  pushRoutes(entries, READY_TO_EAT_ROUTES, now);

  // Psyllium supplier country pages
  for (const slug of COUNTRY_SLUGS) {
    for (const locale of LOCALES) {
      entries.push({
        url: `${BASE_URL}/${locale}/psyllium/suppliers/${slug}`,
        lastModified: now,
        changeFrequency: 'monthly',
        priority: locale === PRIMARY_LOCALE ? 0.92 : 0.82,
        alternates: { languages: buildAlternates(`/psyllium/suppliers/${slug}`) },
      });
    }
  }

  // Herbs supplier country pages
  for (const slug of COUNTRY_SLUGS) {
    for (const locale of LOCALES) {
      entries.push({
        url: `${BASE_URL}/${locale}/herbs/suppliers/${slug}`,
        lastModified: now,
        changeFrequency: 'monthly',
        priority: locale === PRIMARY_LOCALE ? 0.9 : 0.8,
        alternates: { languages: buildAlternates(`/herbs/suppliers/${slug}`) },
      });
    }
  }

  // Spices supplier country pages
  for (const slug of COUNTRY_SLUGS) {
    for (const locale of LOCALES) {
      entries.push({
        url: `${BASE_URL}/${locale}/spices/suppliers/${slug}`,
        lastModified: now,
        changeFrequency: 'monthly',
        priority: locale === PRIMARY_LOCALE ? 0.9 : 0.8,
        alternates: { languages: buildAlternates(`/spices/suppliers/${slug}`) },
      });
    }
  }

  // Oils supplier country pages
  for (const slug of COUNTRY_SLUGS) {
    for (const locale of LOCALES) {
      entries.push({
        url: `${BASE_URL}/${locale}/oils/suppliers/${slug}`,
        lastModified: now,
        changeFrequency: 'monthly',
        priority: locale === PRIMARY_LOCALE ? 0.88 : 0.78,
        alternates: { languages: buildAlternates(`/oils/suppliers/${slug}`) },
      });
    }
  }

  // Ready-to-Eat supplier country pages
  for (const slug of COUNTRY_SLUGS) {
    for (const locale of LOCALES) {
      entries.push({
        url: `${BASE_URL}/${locale}/ready-to-eat/suppliers/${slug}`,
        lastModified: now,
        changeFrequency: 'monthly',
        priority: locale === PRIMARY_LOCALE ? 0.85 : 0.75,
        alternates: { languages: buildAlternates(`/ready-to-eat/suppliers/${slug}`) },
      });
    }
  }

  // Legacy /suppliers redirect pages (still indexed)
  for (const locale of LOCALES) {
    entries.push({
      url: `${BASE_URL}/${locale}/suppliers`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: locale === PRIMARY_LOCALE ? 0.8 : 0.7,
      alternates: { languages: buildAlternates('/suppliers') },
    });
  }

  // Psyllium blog index + articles
  for (const locale of LOCALES) {
    entries.push({
      url: `${BASE_URL}/${locale}/psyllium/blog`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: locale === PRIMARY_LOCALE ? 0.75 : 0.65,
      alternates: { languages: buildAlternates('/psyllium/blog') },
    });
  }
  for (const slug of BLOG_SLUGS) {
    for (const locale of LOCALES) {
      entries.push({
        url: `${BASE_URL}/${locale}/psyllium/blog/${slug}`,
        lastModified: now,
        changeFrequency: 'monthly',
        priority: locale === PRIMARY_LOCALE ? 0.72 : 0.62,
        alternates: { languages: buildAlternates(`/psyllium/blog/${slug}`) },
      });
    }
  }

  return entries;
}
