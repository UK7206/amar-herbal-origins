import type { Metadata } from 'next';
import { buildAlternates, buildCanonical } from '@/lib/seo-helpers';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const canonical = buildCanonical(locale, '/stock');

  return {
    title: 'Psyllium Husk Stock Availability | Ready to Ship | Amar Herbal Origins',
    description:
      'Check current psyllium husk & isabgol stock availability. Ready-to-ship inventory of 85%, 95%, 98%, and 99%+ purity grades. Fast dispatch from Gujarat, India.',
    keywords: [
      'psyllium husk stock India',
      'isabgol ready stock',
      'psyllium husk immediate availability',
      'ready to ship psyllium husk India',
    ],
    alternates: {
      canonical,
      languages: buildAlternates('/stock'),
    },
    openGraph: {
      title: 'Psyllium Husk Stock Availability | Amar Herbal Origins',
      description: 'Ready-to-ship psyllium husk stock. Multiple grades available. Fast dispatch from Gujarat.',
      url: canonical,
      siteName: 'Amar Herbal Origins',
      type: 'website',
    },
  };
}

export default function StockLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
