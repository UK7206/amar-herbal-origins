import type { Metadata } from 'next';
import { buildAlternates, buildCanonical } from '@/lib/seo-helpers';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const canonical = buildCanonical(locale, '/news');

  return {
    title: 'Indian Herbal & Agri Products Industry News | Market Prices, Trade & Insights | Amar Herbal Origins',
    description:
      'Latest market intelligence on Psyllium Husk (Isabgol), Indian Spices & Herbs exports from India. Daily Unjha mandi prices, regulatory updates, global trade insights for B2B importers.',
    keywords: [
      'psyllium husk news india',
      'isabgol market update',
      'psyllium husk price today unjha',
      'indian spices export news',
      'herbal products export india news',
    ],
    alternates: {
      canonical,
      languages: buildAlternates('/news'),
    },
    openGraph: {
      title: 'Indian Herbal & Agri Products Industry News | Amar Herbal Origins',
      description: 'Daily market prices, regulatory updates, and B2B trade intelligence for Psyllium Husk, Spices & Herbs from India.',
      url: canonical,
      siteName: 'Amar Herbal Origins',
      type: 'website',
    },
  };
}

export default function NewsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
