import type { Metadata } from 'next';
import { getCategoryBySlug } from '@/lib/category-data';
import { CategoryWhiteLabel } from '@/components/category/CategoryWhiteLabel';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: 'Spices White Label & Private Label Services | Amar Herbal Origins',
    description: 'White label & private label Indian spices — cumin, turmeric, coriander, fenugreek, ajwain. Custom branding, low MOQ. FSSAI, ISO certified. Ships worldwide from Gujarat, India.',
    alternates: { canonical: `https://amarherbalorigins.com/${locale}/spices/white-label` },
  };
}

export default async function SpicesWhiteLabelPage() {
  const category = getCategoryBySlug('spices')!;
  return <CategoryWhiteLabel category={category} />;
}
