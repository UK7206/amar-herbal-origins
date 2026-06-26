import type { Metadata } from 'next';
import { buildAlternates, buildCanonical } from '@/lib/seo-helpers';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const canonical = buildCanonical(locale, '/about');

  return {
    title: 'About Amar Herbal Origins | Psyllium Husk Exporters Since 2008 | Gujarat, India',
    description:
      'Learn about Amar Herbal Origins — Gujarat-based psyllium husk & isabgol exporter supplying pharma, food and nutraceutical companies in 30+ countries since 2008. Farm-direct, lab-certified.',
    keywords: [
      'about psyllium husk exporter India',
      'isabgol supplier Gujarat',
      'psyllium husk manufacturer India',
      'Amar Herbal Origins about',
      'psyllium husk company India',
    ],
    alternates: {
      canonical,
      languages: buildAlternates('/about'),
    },
    openGraph: {
      title: 'About Amar Herbal Origins | Psyllium Husk Exporters — Gujarat, India',
      description: 'Trusted psyllium husk exporter from Gujarat supplying 30+ countries. Farm-direct, lab-certified, APEDA registered.',
      url: canonical,
      siteName: 'Amar Herbal Origins',
      type: 'website',
    },
  };
}

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
