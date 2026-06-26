import type { Metadata } from 'next';
import { getCategoryBySlug } from '@/lib/category-data';
import { CategoryHubPage } from '@/components/category/CategoryHubPage';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const canonical = `https://amarherbalorigins.com/${locale}/herbs`;
  return {
    title: 'Indian Herbs Exporter | Moringa, Mint, Amla, Oregano Bulk Supplier | Amar Herbal Origins',
    description:
      'Premium Indian herbs exporter from Gujarat. Moringa powder, dried mint, oregano, amla, curry leaves — bulk B2B supply. FSSAI, ISO 22000, Halal certified. Ships to 30+ countries.',
    keywords: [
      'moringa powder exporter India',
      'dried herbs bulk supplier India',
      'herb exporter Gujarat',
      'moringa leaf powder wholesale',
      'mint leaves exporter India',
      'amla powder supplier India',
      'oregano herb exporter India',
      'curry leaves supplier bulk',
      'Indian herbs manufacturer exporter',
    ],
    alternates: {
      canonical,
      languages: {
        en: 'https://amarherbalorigins.com/en/herbs',
        'x-default': 'https://amarherbalorigins.com/en/herbs',
      },
    },
    openGraph: {
      title: 'Indian Herbs Exporter | Amar Herbal Origins',
      description: 'Premium moringa, mint, amla, oregano, curry leaves — bulk herbs export from Gujarat, India.',
      url: canonical,
      siteName: 'Amar Herbal Origins',
      type: 'website',
    },
  };
}

export default async function HerbsHubPage({ params }: Props) {
  const category = getCategoryBySlug('herbs')!;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Indian Herbs Products — Amar Herbal Origins',
    url: 'https://amarherbalorigins.com/en/herbs',
    itemListElement: category.products.map((product, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      item: {
        '@type': 'Product',
        name: product.name,
        description: product.description,
        brand: { '@type': 'Brand', name: 'Amar Herbal Origins' },
        countryOfOrigin: { '@type': 'Country', name: 'India' },
      },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <CategoryHubPage category={category} />
    </>
  );
}
