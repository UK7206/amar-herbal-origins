import type { Metadata } from 'next';
import { getCategoryBySlug } from '@/lib/category-data';
import { ProductDetailTemplate } from '@/components/category/ProductDetailTemplate';
import { notFound } from 'next/navigation';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: 'Dried Mint Leaves Exporter India | Spearmint & Peppermint Supplier | Amar Herbal Origins',
    description: 'Premium dried mint leaves exporter from India. Spearmint, peppermint — whole leaf, crushed & powder. FSSAI, ISO 22000 certified. Bulk B2B supply, MOQ 100 kg.',
    keywords: ['dried mint leaves exporter India', 'spearmint supplier bulk India', 'peppermint leaves wholesale', 'mint powder exporter Gujarat'],
    alternates: { canonical: `https://amarherbalorigins.com/${locale}/herbs/mint` },
  };
}

export default async function MintPage() {
  const category = getCategoryBySlug('herbs');
  const product = category?.products.find((p) => p.id === 'mint');
  if (!category || !product) notFound();
  return <ProductDetailTemplate category={category} product={product} />;
}
