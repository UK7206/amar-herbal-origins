import type { Metadata } from 'next';
import { getCategoryBySlug } from '@/lib/category-data';
import { ProductDetailTemplate } from '@/components/category/ProductDetailTemplate';
import { notFound } from 'next/navigation';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: 'Khakhra Exporter India | Gujarati Khakhra Private Label | Amar Herbal Origins',
    description: 'Premium Gujarati khakhra exporter from India. Plain, methi, jeera, ajwain, masala, whole wheat flavors. Private label & white label. FSSAI certified. MOQ 500 units.',
    keywords: ['khakhra exporter India', 'Gujarati khakhra bulk supplier', 'khakhra private label India', 'khakhra white label manufacturer', 'khakhra export ready packaging', 'methi khakhra exporter'],
    alternates: { canonical: `https://amarherbalorigins.com/${locale}/ready-to-eat/khakhra` },
  };
}

export default async function KhakhraPage() {
  const category = getCategoryBySlug('ready-to-eat');
  const product = category?.products.find((p) => p.id === 'khakhra');
  if (!category || !product) notFound();

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.description,
    brand: { '@type': 'Brand', name: 'Amar Herbal Origins' },
    countryOfOrigin: { '@type': 'Country', name: 'India' },
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
      priceCurrency: 'USD',
      seller: { '@type': 'Organization', name: 'Amar Herbal Origins' },
    },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ProductDetailTemplate category={category} product={product} />
    </>
  );
}
