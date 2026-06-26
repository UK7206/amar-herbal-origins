import type { Metadata } from 'next';
import { getCategoryBySlug } from '@/lib/category-data';
import { ProductDetailTemplate } from '@/components/category/ProductDetailTemplate';
import { notFound } from 'next/navigation';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: 'Castor Oil Exporter India | Pharmaceutical & Cosmetic Grade Bulk Supplier | Amar Herbal Origins',
    description: 'Cold pressed castor oil (Ricinus communis) exporter from Gujarat, India. Pharmaceutical, cosmetic & industrial grades. ISO 22000 certified. Bulk B2B supply, MOQ 200L.',
    keywords: ['castor oil exporter India', 'cold pressed castor oil bulk supplier', 'pharmaceutical grade castor oil India', 'castor oil cosmetic grade exporter', 'ricinus communis oil Gujarat'],
    alternates: { canonical: `https://amarherbalorigins.com/${locale}/oils/castor-oil` },
  };
}

export default async function CastorOilPage() {
  const category = getCategoryBySlug('oils');
  const product = category?.products.find((p) => p.id === 'castor-oil');
  if (!category || !product) notFound();
  return <ProductDetailTemplate category={category} product={product} />;
}
