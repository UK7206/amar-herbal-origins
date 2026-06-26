import type { Metadata } from 'next';
import { getCategoryBySlug } from '@/lib/category-data';
import { ProductDetailTemplate } from '@/components/category/ProductDetailTemplate';
import { notFound } from 'next/navigation';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: 'Cumin Seeds Exporter India | Jeera Bulk Supplier | Amar Herbal Origins',
    description: 'Premium cumin seeds (jeera) exporter from Gujarat, India. Machine cleaned, lab-certified, ISO 22000, Halal. Bulk B2B supply, MOQ 500 kg. Free sample.',
    keywords: ['cumin seeds exporter India', 'jeera exporter Gujarat', 'cumin seeds bulk supplier', 'cumin seeds manufacturer India', 'cuminum cyminum exporter'],
    alternates: { canonical: `https://amarherbalorigins.com/${locale}/spices/cumin` },
  };
}

export default async function CuminPage() {
  const category = getCategoryBySlug('spices');
  const product = category?.products.find((p) => p.id === 'cumin');
  if (!category || !product) notFound();
  return <ProductDetailTemplate category={category} product={product} />;
}
