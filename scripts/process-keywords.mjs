// Script to process 100K psyllium keywords and extract the best 5000 unique slugs
import { readFileSync, writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');

console.log('📖 Reading keywords file...');
const raw = readFileSync(join(ROOT, '100k_psyllium_keywords.txt'), 'utf-8');
const lines = raw.split('\n').map(l => l.trim()).filter(Boolean);
console.log(`✅ Total keywords found: ${lines.length.toLocaleString()}`);

// Priority keywords to prefer (intent-based scoring)
const HIGH_PRIORITY = [
  'supplier', 'exporter', 'wholesale', 'bulk', 'india', 'gujarat', 'rajasthan',
  'organic', 'manufacturer', 'price', 'buy', 'importer', 'factory', 'b2b',
  'constipation', 'cholesterol', 'weight loss', 'diabetes', 'gut health',
  'psyllium husk', 'isabgol', 'psyllium powder', 'psyllium fiber', 'blonde psyllium',
  'usa', 'uk', 'germany', 'australia', 'canada', 'uae', 'dubai', 'europe',
  'certification', 'fda', 'iso', 'organic certified', 'halal', 'kosher',
];

function scoreKeyword(kw) {
  const lower = kw.toLowerCase();
  let score = 0;
  for (const p of HIGH_PRIORITY) {
    if (lower.includes(p)) score += 2;
  }
  // Penalize very long keywords (less searchable)
  if (kw.length > 80) score -= 3;
  if (kw.length > 60) score -= 1;
  // Prefer medium length
  if (kw.length >= 20 && kw.length <= 55) score += 1;
  // Penalize keywords with "near me" / "online" / "reviews" - less B2B relevant
  if (lower.includes('near me')) score -= 1;
  if (lower.includes('reviews')) score -= 1;
  return score;
}

function toSlug(kw) {
  return kw
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim()
    .replace(/^-|-$/g, '');
}

console.log('🔄 Processing and deduplicating...');

// Deduplicate by slug
const slugMap = new Map(); // slug -> { keyword, score }

for (const kw of lines) {
  const slug = toSlug(kw);
  if (!slug || slug.length < 5) continue;
  const score = scoreKeyword(kw);
  const existing = slugMap.get(slug);
  if (!existing || score > existing.score) {
    slugMap.set(slug, { keyword: kw, slug, score });
  }
}

console.log(`✅ Unique slugs after dedup: ${slugMap.size.toLocaleString()}`);

// Sort by score descending, take top 5000
const sorted = [...slugMap.values()]
  .sort((a, b) => b.score - a.score)
  .slice(0, 5000);

console.log(`✅ Selected top 5,000 keywords`);
console.log(`   Score range: ${sorted[sorted.length-1].score} to ${sorted[0].score}`);

// Write output
const output = sorted.map(({ keyword, slug }) => ({ keyword, slug }));
writeFileSync(
  join(ROOT, 'lib', 'seo-keywords.json'),
  JSON.stringify(output, null, 2),
  'utf-8'
);

console.log('');
console.log('✅ Done! Written to lib/seo-keywords.json');
console.log(`   Total pages: ${output.length.toLocaleString()}`);
console.log('');
console.log('Sample keywords:');
output.slice(0, 5).forEach(k => console.log(`  /${k.slug}`));
