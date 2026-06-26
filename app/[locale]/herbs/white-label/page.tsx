import type { Metadata } from 'next';
import { getCategoryBySlug } from '@/lib/category-data';
import { CategoryWhiteLabel } from '@/components/category/CategoryWhiteLabel';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: 'Herbs White Label & Private Label Services | Amar Herbal Origins',
    description: 'White label & private label herb products — moringa, mint, amla, oregano, curry leaves. Custom packaging from 100 kg MOQ. FSSAI, ISO certified. Ships worldwide.',
    alternates: { canonical: `https://amarherbalorigins.com/${locale}/herbs/white-label` },
  };
}

export default async function HerbsWhiteLabelPage() {
  const category = getCategoryBySlug('herbs')!;
  return <CategoryWhiteLabel category={category} />;
}
