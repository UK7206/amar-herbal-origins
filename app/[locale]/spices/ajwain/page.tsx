import type { Metadata } from 'next';
import { getCategoryBySlug } from '@/lib/category-data';
import { ProductDetailTemplate } from '@/components/category/ProductDetailTemplate';
import { notFound } from 'next/navigation';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: 'Ajwain Seeds Exporter India | Carom Seeds Bulk Supplier | Amar Herbal Origins',
    description: 'Premium ajwain (carom seeds) exporter from Gujarat, India. High thymol content, lab-certified, ISO 22000, Halal, Kosher. Bulk B2B supply, MOQ 500 kg.',
    keywords: ['ajwain seeds exporter India', 'carom seeds supplier bulk', 'trachyspermum ammi exporter', 'ajwain manufacturer Gujarat', 'carom seeds wholesale India'],
    alternates: { canonical: `https://amarherbalorigins.com/${locale}/spices/ajwain` },
  };
}

export default async function AjwainPage() {
  const category = getCategoryBySlug('spices');
  const product = category?.products.find((p) => p.id === 'ajwain');
  if (!category || !product) notFound();
  return <ProductDetailTemplate category={category} product={product} />;
}
