import type { Metadata } from 'next';
import { getCategoryBySlug } from '@/lib/category-data';
import { ProductDetailTemplate } from '@/components/category/ProductDetailTemplate';
import { notFound } from 'next/navigation';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: 'Fenugreek Seeds Exporter India | Methi Bulk Supplier | Amar Herbal Origins',
    description: 'Premium fenugreek seeds (methi) exporter from Gujarat, India. Lab-certified, ISO 22000, Halal, Kosher certified. Bulk B2B supply, MOQ 500 kg. Free sample.',
    keywords: ['fenugreek seeds exporter India', 'methi seeds supplier Gujarat', 'fenugreek bulk supplier India', 'trigonella foenum-graecum exporter', 'fenugreek seed manufacturer India'],
    alternates: { canonical: `https://amarherbalorigins.com/${locale}/spices/fenugreek` },
  };
}

export default async function FenugreekPage() {
  const category = getCategoryBySlug('spices');
  const product = category?.products.find((p) => p.id === 'fenugreek');
  if (!category || !product) notFound();
  return <ProductDetailTemplate category={category} product={product} />;
}
