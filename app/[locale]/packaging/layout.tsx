import type { Metadata } from 'next';
import { buildAlternates, buildCanonical } from '@/lib/seo-helpers';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const canonical = buildCanonical(locale, '/packaging');

  return {
    title: 'Psyllium Husk Packaging & Shipping | 25kg, 50kg Jumbo Bags | Amar Herbal Origins',
    description:
      'Psyllium husk & isabgol packaging options: 25 kg PP bags, 50 kg jumbo FIBC bags, private label. FOB Mundra / Nhava Sheva. FCL & LCL. 7–14 business day lead time.',
    keywords: [
      'psyllium husk packaging options',
      'isabgol bulk packaging',
      'psyllium husk 25kg bags',
      'psyllium husk jumbo bags export',
      'isabgol FOB shipping India',
      'psyllium husk private label packaging',
    ],
    alternates: {
      canonical,
      languages: buildAlternates('/packaging'),
    },
    openGraph: {
      title: 'Psyllium Husk Packaging & Shipping Options | Amar Herbal Origins',
      description: '25kg bags, 50kg FIBC jumbo bags, private label. FOB Mundra. 7–14 day lead time.',
      url: canonical,
      siteName: 'Amar Herbal Origins',
      type: 'website',
    },
  };
}

export default function PackagingLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
