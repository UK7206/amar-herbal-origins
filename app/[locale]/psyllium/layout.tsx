import type { Metadata } from 'next';
import { getCategoryBySlug } from '@/lib/category-data';
import { CategoryNavigation } from '@/components/category/CategoryNavigation';

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export const metadata: Metadata = {
  title: {
    default: 'Psyllium Husk Exporter India | Amar Herbal Origins',
    template: '%s | Psyllium — Amar Herbal Origins',
  },
  description:
    'Leading psyllium husk (Isabgol) exporter & manufacturer from Gujarat, India. ISO 22000, USDA Organic, Halal, Kosher certified. Bulk B2B supply to 30+ countries.',
};

export default async function PsylliumLayout({ children, params }: Props) {
  const category = getCategoryBySlug('psyllium')!;

  return (
    <>
      <CategoryNavigation category={category} />
      <div style={{ flex: 1 }}>{children}</div>
    </>
  );
}
