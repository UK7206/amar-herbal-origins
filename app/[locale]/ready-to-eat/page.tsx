import type { Metadata } from 'next';
import { getCategoryBySlug } from '@/lib/category-data';
import { CategoryHubPage } from '@/components/category/CategoryHubPage';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: 'Gujarati Khakhra Exporter India | Ready-to-Eat Snacks Private Label | Amar Herbal Origins',
    description: 'Premium Gujarati khakhra & ready-to-eat snacks exporter from India. Private label, white label, custom flavors & packaging. FSSAI certified. Bulk export to 30+ countries.',
    keywords: ['khakhra exporter India', 'Gujarati khakhra bulk supplier', 'ready to eat Indian snacks exporter', 'khakhra private label India', 'khakhra white label manufacturer', 'Indian traditional snacks bulk export'],
    alternates: { canonical: `https://amarherbalorigins.com/${locale}/ready-to-eat` },
    openGraph: { title: 'Gujarati Khakhra Exporter | Amar Herbal Origins', description: 'Premium Gujarati khakhra — private label & bulk export worldwide.', url: `https://amarherbalorigins.com/${locale}/ready-to-eat`, siteName: 'Amar Herbal Origins', type: 'website' },
  };
}

export default async function RTEHubPage() {
  const category = getCategoryBySlug('ready-to-eat')!;
  return <CategoryHubPage category={category} />;
}
