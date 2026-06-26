import type { MetadataRoute } from 'next';
import seoKeywords from '@/lib/seo-keywords.json';

const BASE_URL = 'https://amarherbalorigins.com';
const CHUNK_SIZE = 2500; // 2500 URLs per sitemap file (well under Google's 50,000 limit)

const keywords = seoKeywords as { keyword: string; slug: string }[];
const chunks = Math.ceil(keywords.length / CHUNK_SIZE);

// This generates /k/sitemap/0.xml, /k/sitemap/1.xml etc.
// Each contains 2500 keyword page URLs
export async function generateSitemaps() {
  return Array.from({ length: chunks }, (_, i) => ({ id: String(i) }));
}

export default async function sitemap(props: {
  id: Promise<string>;
}): Promise<MetadataRoute.Sitemap> {
  const id = Number(await props.id);
  const start = id * CHUNK_SIZE;
  const end = Math.min(start + CHUNK_SIZE, keywords.length);
  const now = new Date();

  return keywords.slice(start, end).map((kw) => ({
    url: `${BASE_URL}/en/k/${kw.slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.5,
  }));
}
