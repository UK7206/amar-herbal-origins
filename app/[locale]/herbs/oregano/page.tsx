import type { Metadata } from 'next';
import { getCategoryBySlug } from '@/lib/category-data';
import { ProductDetailTemplate } from '@/components/category/ProductDetailTemplate';
import { notFound } from 'next/navigation';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: 'Dried Oregano Exporter India | Bulk Oregano Herb Supplier | Amar Herbal Origins',
    description: 'Premium dried oregano herb exporter from India. Whole, crushed & powder — FSSAI, ISO 22000 certified. Bulk B2B supply, MOQ 100 kg. Free sample available.',
    keywords: ['oregano herb exporter India', 'dried oregano bulk supplier', 'oregano leaves exporter Gujarat', 'oregano powder manufacturer India'],
    alternates: { canonical: `https://amarherbalorigins.com/${locale}/herbs/oregano` },
  };
}

export default async function OreganoPage() {
  const category = getCategoryBySlug('herbs');
  const product = category?.products.find((p) => p.id === 'oregano');
  if (!category || !product) notFound();
  return <ProductDetailTemplate category={category} product={product} />;
}
