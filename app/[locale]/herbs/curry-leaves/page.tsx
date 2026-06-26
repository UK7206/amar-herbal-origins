import type { Metadata } from 'next';
import { getCategoryBySlug } from '@/lib/category-data';
import { ProductDetailTemplate } from '@/components/category/ProductDetailTemplate';
import { notFound } from 'next/navigation';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: 'Curry Leaves Exporter India | Dried Curry Leaf Bulk Supplier | Amar Herbal Origins',
    description: 'Dried curry leaves exporter from India. Whole leaf & powder — FSSAI certified. Bulk B2B supply for food, haircare & Ayurveda. MOQ 50 kg. Free sample available.',
    keywords: ['curry leaves exporter India', 'dried curry leaves bulk supplier', 'curry leaf powder exporter', 'murraya koenigii supplier India'],
    alternates: { canonical: `https://amarherbalorigins.com/${locale}/herbs/curry-leaves` },
  };
}

export default async function CurryLeavesPage() {
  const category = getCategoryBySlug('herbs');
  const product = category?.products.find((p) => p.id === 'curry-leaves');
  if (!category || !product) notFound();
  return <ProductDetailTemplate category={category} product={product} />;
}
