import type { Metadata } from 'next';
import { getCategoryBySlug } from '@/lib/category-data';
import { ProductDetailTemplate } from '@/components/category/ProductDetailTemplate';
import { notFound } from 'next/navigation';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: 'Coriander Seeds Exporter India | Dhania Bulk Supplier | Amar Herbal Origins',
    description: 'Premium coriander seeds (dhania) exporter from Gujarat, India. Machine cleaned, lab-certified, ISO 22000, Halal. Bulk B2B supply, MOQ 500 kg. Free sample.',
    keywords: ['coriander seeds exporter India', 'dhania exporter Gujarat', 'coriander seeds bulk supplier', 'coriandrum sativum exporter', 'coriander seeds manufacturer India'],
    alternates: { canonical: `https://amarherbalorigins.com/${locale}/spices/coriander` },
  };
}

export default async function CorianderPage() {
  const category = getCategoryBySlug('spices');
  const product = category?.products.find((p) => p.id === 'coriander');
  if (!category || !product) notFound();
  return <ProductDetailTemplate category={category} product={product} />;
}
