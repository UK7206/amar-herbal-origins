import type { MetadataRoute } from 'next';

/**
 * robots.ts — Controls crawler access for SEO & AI search tools
 *
 * Strategy:
 * - Allow all AI crawlers (GPTBot, PerplexityBot, ClaudeBot, etc.)
 *   so the site can be cited in ChatGPT, Perplexity, Gemini responses.
 * - Block /admin and /api routes from indexing.
 * - Reference sitemap for fast discovery of all 7 language variants.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // Standard search engines
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: ['/admin/', '/api/'],
      },
      {
        userAgent: 'Bingbot',
        allow: '/',
        disallow: ['/admin/', '/api/'],
      },
      // AI crawlers — ALLOW for GEO (Generative Engine Optimization)
      // These bots feed ChatGPT, Perplexity, Bing AI, and other LLMs
      {
        userAgent: 'GPTBot',        // OpenAI / ChatGPT
        allow: '/',
        disallow: ['/admin/', '/api/'],
      },
      {
        userAgent: 'PerplexityBot', // Perplexity AI
        allow: '/',
        disallow: ['/admin/', '/api/'],
      },
      {
        userAgent: 'ClaudeBot',     // Anthropic / Claude
        allow: '/',
        disallow: ['/admin/', '/api/'],
      },
      {
        userAgent: 'Applebot',      // Apple Intelligence / Siri
        allow: '/',
        disallow: ['/admin/', '/api/'],
      },
      {
        userAgent: 'anthropic-ai',  // Anthropic alternative UA
        allow: '/',
        disallow: ['/admin/', '/api/'],
      },
      {
        userAgent: 'CCBot',         // Common Crawl (training data)
        allow: '/',
        disallow: ['/admin/', '/api/'],
      },
      {
        userAgent: 'Google-Extended', // Google Gemini / Bard training
        allow: '/',
        disallow: ['/admin/', '/api/'],
      },
      // Default: allow all other crawlers
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/admin/', '/api/'],
      },
    ],
    sitemap: 'https://amarherbalorigins.com/sitemap.xml',
    host: 'https://amarherbalorigins.com',
  };
}
