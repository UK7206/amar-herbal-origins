import type { MetadataRoute } from 'next';

/**
 * robots.ts — Controls crawler access for SEO & AI search tools
 *
 * Strategy:
 * - Allow ALL AI crawlers (GPTBot, PerplexityBot, ClaudeBot, etc.)
 *   so the site can be cited in ChatGPT, Perplexity, Gemini, DuckDuckGo AI responses.
 * - International AI tools (Meta AI, DuckAssistBot, YouBot) explicitly allowed
 *   for maximum visibility in USA, EU, and Middle East AI searches.
 * - Block /admin and /api routes from indexing.
 * - Reference sitemap for fast discovery of all 7 language variants.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // ── Standard search engines ──────────────────────────────────────
      {
        userAgent: 'Googlebot',
        allow: ['/', '/en/', '/de/', '/fr/', '/ar/', '/es/', '/zh/', '/ja/'],
        disallow: ['/admin/', '/api/'],
      },
      {
        userAgent: 'Bingbot',
        allow: '/',
        disallow: ['/admin/', '/api/'],
      },
      {
        userAgent: 'Slurp',           // Yahoo Search
        allow: '/',
        disallow: ['/admin/', '/api/'],
      },
      {
        userAgent: 'DuckDuckBot',     // DuckDuckGo (popular in EU for privacy)
        allow: '/',
        disallow: ['/admin/', '/api/'],
      },
      {
        userAgent: 'Baiduspider',     // Baidu (China market)
        allow: '/',
        disallow: ['/admin/', '/api/'],
      },
      {
        userAgent: 'YandexBot',       // Yandex (Russia, CIS countries)
        allow: '/',
        disallow: ['/admin/', '/api/'],
      },

      // ── AI crawlers — ALLOW for GEO (Generative Engine Optimization) ──
      // These bots feed ChatGPT, Perplexity, Bing AI, Claude, Gemini, and other LLMs.
      // Blocking them prevents citation in AI-generated answers = lost international leads.
      {
        userAgent: 'GPTBot',              // OpenAI / ChatGPT web browsing
        allow: '/',
        disallow: ['/admin/', '/api/'],
      },
      {
        userAgent: 'OAI-SearchBot',       // OpenAI Search (ChatGPT search mode)
        allow: '/',
        disallow: ['/admin/', '/api/'],
      },
      {
        userAgent: 'PerplexityBot',       // Perplexity AI — heavily used in USA/UK
        allow: '/',
        disallow: ['/admin/', '/api/'],
      },
      {
        userAgent: 'ClaudeBot',           // Anthropic / Claude
        allow: '/',
        disallow: ['/admin/', '/api/'],
      },
      {
        userAgent: 'anthropic-ai',        // Anthropic alternative UA
        allow: '/',
        disallow: ['/admin/', '/api/'],
      },
      {
        userAgent: 'Applebot',            // Apple Intelligence / Siri (USA, UK, Australia)
        allow: '/',
        disallow: ['/admin/', '/api/'],
      },
      {
        userAgent: 'Google-Extended',     // Google Gemini / Bard training data
        allow: '/',
        disallow: ['/admin/', '/api/'],
      },
      {
        userAgent: 'DuckAssistBot',       // DuckDuckGo AI Assistant (popular in EU, privacy-focused)
        allow: '/',
        disallow: ['/admin/', '/api/'],
      },
      {
        userAgent: 'meta-externalagent', // Meta AI (Facebook, Instagram AI — Middle East, SE Asia)
        allow: '/',
        disallow: ['/admin/', '/api/'],
      },
      {
        userAgent: 'YouBot',              // You.com AI (used by professionals in USA)
        allow: '/',
        disallow: ['/admin/', '/api/'],
      },
      {
        userAgent: 'Bytespider',          // TikTok AI (popular in Middle East, SE Asia, Japan)
        allow: '/',
        disallow: ['/admin/', '/api/'],
      },
      {
        userAgent: 'cohere-ai',           // Cohere AI (used by enterprise B2B buyers)
        allow: '/',
        disallow: ['/admin/', '/api/'],
      },
      {
        userAgent: 'AI2Bot',              // Allen Institute for AI (academic citations)
        allow: '/',
        disallow: ['/admin/', '/api/'],
      },
      {
        userAgent: 'CCBot',               // Common Crawl (primary LLM training data source)
        allow: '/',
        disallow: ['/admin/', '/api/'],
      },
      {
        userAgent: 'FacebookBot',         // Meta / Facebook link preview + AI
        allow: '/',
        disallow: ['/admin/', '/api/'],
      },
      {
        userAgent: 'LinkedInBot',         // LinkedIn preview (critical for B2B discovery)
        allow: '/',
        disallow: ['/admin/', '/api/'],
      },
      {
        userAgent: 'Twitterbot',          // X/Twitter card previews
        allow: '/',
        disallow: ['/admin/', '/api/'],
      },

      // ── Default: allow all other crawlers ───────────────────────────
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
