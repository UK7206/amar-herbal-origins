import type { Metadata } from 'next';
import { getCategoryBySlug } from '@/lib/category-data';
import { CategoryHubPage } from '@/components/category/CategoryHubPage';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: 'Indian Spices Exporter | Turmeric, Cumin, Fenugreek Bulk Supplier | Amar Herbal Origins',
    description: 'Premium Indian spices exporter from Gujarat. Turmeric, cumin, fenugreek, coriander, ajwain — lab-certified, ISO 22000, Halal, Kosher. Bulk B2B export to 30+ countries.',
    keywords: ['turmeric powder exporter India', 'cumin seeds exporter Gujarat', 'fenugreek seeds supplier India', 'Indian spices manufacturer exporter', 'coriander seeds bulk supplier'],
    alternates: { canonical: `https://amarherbalorigins.com/${locale}/spices` },
    openGraph: { title: 'Indian Spices Exporter | Amar Herbal Origins', description: 'Premium spices from Gujarat — bulk B2B export worldwide.', url: `https://amarherbalorigins.com/${locale}/spices`, siteName: 'Amar Herbal Origins', type: 'website' },
  };
}

export default async function SpicesHubPage() {
  const category = getCategoryBySlug('spices')!;
  return <CategoryHubPage category={category} />;
}
