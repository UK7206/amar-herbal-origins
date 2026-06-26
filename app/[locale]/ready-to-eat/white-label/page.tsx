import type { Metadata } from 'next';
import { getCategoryBySlug } from '@/lib/category-data';
import { CategoryWhiteLabel } from '@/components/category/CategoryWhiteLabel';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: 'Ready-to-Eat White Label & Private Label Services | Amar Herbal Origins',
    description: 'White label & private label ready-to-eat products — Khakhra and more. Custom branding, low MOQ. FSSAI, ISO certified. Ships worldwide from Gujarat, India.',
    alternates: { canonical: `https://amarherbalorigins.com/${locale}/ready-to-eat/white-label` },
  };
}

export default async function ReadyToEatWhiteLabelPage() {
  const category = getCategoryBySlug('ready-to-eat')!;
  return <CategoryWhiteLabel category={category} />;
}
