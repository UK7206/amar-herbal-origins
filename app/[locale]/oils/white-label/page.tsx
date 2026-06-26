import type { Metadata } from 'next';
import { getCategoryBySlug } from '@/lib/category-data';
import { CategoryWhiteLabel } from '@/components/category/CategoryWhiteLabel';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: 'Cold-Pressed Oils White Label & Private Label Services | Amar Herbal Origins',
    description: 'White label & private label cold-pressed oils — castor oil, karanja oil. Custom branding, low MOQ. FSSAI, ISO certified. Ships worldwide from Gujarat, India.',
    alternates: { canonical: `https://amarherbalorigins.com/${locale}/oils/white-label` },
  };
}

export default async function OilsWhiteLabelPage() {
  const category = getCategoryBySlug('oils')!;
  return <CategoryWhiteLabel category={category} />;
}
