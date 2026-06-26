import type { Metadata } from 'next';
import { getCategoryBySlug } from '@/lib/category-data';
import { ProductDetailTemplate } from '@/components/category/ProductDetailTemplate';
import { notFound } from 'next/navigation';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: 'Amla Powder Exporter India | Indian Gooseberry Supplier | Amar Herbal Origins',
    description: 'Premium amla (Indian gooseberry) powder exporter from India. Rich in Vitamin C — FSSAI, ISO 22000, Halal, Kosher certified. Bulk B2B supply, MOQ 100 kg.',
    keywords: ['amla powder exporter India', 'Indian gooseberry powder supplier', 'amla exporter Gujarat', 'emblica officinalis supplier', 'dried amla bulk exporter'],
    alternates: { canonical: `https://amarherbalorigins.com/${locale}/herbs/amla` },
  };
}

export default async function AmlaPage() {
  const category = getCategoryBySlug('herbs');
  const product = category?.products.find((p) => p.id === 'amla');
  if (!category || !product) notFound();
  return <ProductDetailTemplate category={category} product={product} />;
}
