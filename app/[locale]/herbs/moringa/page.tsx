import type { Metadata } from 'next';
import { getCategoryBySlug, getProductBySlug } from '@/lib/category-data';
import { ProductDetailTemplate } from '@/components/category/ProductDetailTemplate';
import { notFound } from 'next/navigation';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const canonical = `https://amarherbalorigins.com/${locale}/herbs/moringa`;
  return {
    title: 'Moringa Powder Exporter India | Bulk Moringa Leaf Powder Supplier | Amar Herbal Origins',
    description:
      'Premium moringa powder (Moringa oleifera) exporter from India. Bright green, lab-tested, FSSAI & ISO 22000 certified. Bulk B2B supply. MOQ 100 kg. Free sample available.',
    keywords: [
      'moringa powder exporter India',
      'moringa leaf powder bulk supplier',
      'moringa oleifera powder exporter',
      'dried moringa powder wholesale India',
      'organic moringa powder exporter India',
      'buy moringa powder bulk India',
    ],
    alternates: { canonical },
    openGraph: {
      title: 'Moringa Powder Exporter India | Amar Herbal Origins',
      description: 'Premium lab-tested moringa powder from Gujarat, India. Bulk B2B export.',
      url: canonical,
      siteName: 'Amar Herbal Origins',
      type: 'website',
    },
  };
}

export default async function MoringaPage({ params }: Props) {
  const category = getCategoryBySlug('herbs');
  const product = category?.products.find((p) => p.id === 'moringa-powder');
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
    additionalProperty: product.specifications.map((s) => ({
      '@type': 'PropertyValue',
      name: s.label,
      value: s.value,
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ProductDetailTemplate category={category} product={product} />
    </>
  );
}
