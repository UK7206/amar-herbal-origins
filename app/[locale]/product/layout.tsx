import type { Metadata } from 'next';
import { buildAlternates, buildCanonical } from '@/lib/seo-helpers';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const canonical = buildCanonical(locale, '/product');

  return {
    title: 'Psyllium Husk (Isabgol) — Export Grade | 99.5% Purity | Amar Herbal Origins',
    description:
      'Buy export-grade psyllium husk & isabgol from India. 85%, 95%, 98%, 99%+ purity grades. Lab-certified (COA), NABL tested, FOB Mundra. Bulk wholesale for pharma, food, nutraceuticals.',
    keywords: [
      'psyllium husk wholesale India',
      'isabgol export grade',
      'psyllium husk 99% purity',
      'buy psyllium husk bulk',
      'psyllium husk pharmaceutical grade India',
      'isabgol manufacturer Gujarat',
      'psyllium husk FOB India',
      'psyllium husk COA',
    ],
    alternates: {
      canonical,
      languages: buildAlternates('/product'),
    },
    openGraph: {
      title: 'Psyllium Husk (Isabgol) Export Grade | 99.5% Purity | Amar Herbal Origins',
      description: 'Premium psyllium husk from Gujarat. Multiple grades, lab-certified, ships worldwide. FOB Mundra / CIF.',
      url: canonical,
      siteName: 'Amar Herbal Origins',
      type: 'website',
    },
  };
}

export default function ProductLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
