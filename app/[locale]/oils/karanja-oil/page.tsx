import type { Metadata } from 'next';
import { getCategoryBySlug } from '@/lib/category-data';
import { ProductDetailTemplate } from '@/components/category/ProductDetailTemplate';
import { notFound } from 'next/navigation';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: 'Karanja Oil Exporter India | Pongamia Oil Bulk Supplier | Amar Herbal Origins',
    description: 'Cold pressed karanja oil (Pongamia pinnata) exporter from India. Cosmetic, pharmaceutical & biofuel grade. ISO 22000 certified. Bulk B2B supply, MOQ 200L.',
    keywords: ['karanja oil exporter India', 'pongamia oil supplier bulk India', 'karanja oil cosmetic grade exporter', 'millettia pinnata oil exporter', 'karanja oil pharmaceutical grade India'],
    alternates: { canonical: `https://amarherbalorigins.com/${locale}/oils/karanja-oil` },
  };
}

export default async function KaranjaOilPage() {
  const category = getCategoryBySlug('oils');
  const product = category?.products.find((p) => p.id === 'karanja-oil');
  if (!category || !product) notFound();
  return <ProductDetailTemplate category={category} product={product} />;
}
