import type { Metadata } from 'next';
import { getCategoryBySlug } from '@/lib/category-data';
import { CategoryWhiteLabel } from '@/components/category/CategoryWhiteLabel';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: 'Psyllium Husk White Label & Private Label Services | Amar Herbal Origins',
    description: 'White label & private label psyllium husk (Isabgol) — custom branding, packaging, low MOQ. FSSAI, ISO, USDA Organic certified. Ships worldwide from Gujarat, India.',
    alternates: { canonical: `https://amarherbalorigins.com/${locale}/psyllium/white-label` },
  };
}

export default async function PsylliumWhiteLabelPage() {
  const category = getCategoryBySlug('psyllium')!;
  return <CategoryWhiteLabel category={category} />;
}
