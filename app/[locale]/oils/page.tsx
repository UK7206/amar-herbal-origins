import type { Metadata } from 'next';
import { getCategoryBySlug } from '@/lib/category-data';
import { CategoryHubPage } from '@/components/category/CategoryHubPage';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: 'Herbal Oils Exporter India | Castor Oil & Karanja Oil Bulk Supplier | Amar Herbal Origins',
    description: 'Cold pressed castor oil & karanja oil exporter from Gujarat, India. Pharmaceutical, cosmetic & industrial grade. Bulk B2B supply, ISO 22000 certified. Ships to 30+ countries.',
    keywords: ['castor oil exporter India', 'karanja oil supplier India', 'cold pressed castor oil bulk', 'ricinus communis oil exporter', 'pongamia oil exporter Gujarat'],
    alternates: { canonical: `https://amarherbalorigins.com/${locale}/oils` },
  };
}

export default async function OilsHubPage() {
  const category = getCategoryBySlug('oils')!;
  return <CategoryHubPage category={category} />;
}
