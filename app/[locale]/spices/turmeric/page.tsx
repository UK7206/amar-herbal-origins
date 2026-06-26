// ─────────────────────────────────────────────────────────
// Turmeric Powder Product Page
// ─────────────────────────────────────────────────────────
import type { Metadata } from 'next';
import { getCategoryBySlug } from '@/lib/category-data';
import { ProductDetailTemplate } from '@/components/category/ProductDetailTemplate';
import { notFound } from 'next/navigation';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: 'Turmeric Powder Exporter India | Curcumin Rich Haldi Supplier | Amar Herbal Origins',
    description: 'Premium turmeric powder (haldi) exporter from Gujarat, India. 3–5% curcumin, lab-certified, ISO 22000, Halal, Kosher. Bulk B2B supply, MOQ 500 kg. Free sample.',
    keywords: ['turmeric powder exporter India', 'haldi exporter Gujarat', 'curcumin powder bulk supplier', 'organic turmeric powder India', 'turmeric manufacturer exporter'],
    alternates: { canonical: `https://amarherbalorigins.com/${locale}/spices/turmeric` },
  };
}

export default async function TurmericPage() {
  const category = getCategoryBySlug('spices');
  const product = category?.products.find((p) => p.id === 'turmeric');
  if (!category || !product) notFound();
  return <ProductDetailTemplate category={category} product={product} />;
}
