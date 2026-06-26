import type { Metadata } from 'next';
import { buildAlternates, buildCanonical } from '@/lib/seo-helpers';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const canonical = buildCanonical(locale, '/quality');

  return {
    title: 'Quality Assurance & Certifications | Lab-Certified Herbal Products | Amar Herbal Origins',
    description:
      'Amar Herbal Origins quality standards: ISO 22000, FSSAI, APEDA certified. Every batch of Psyllium Husk, Spices & Herbs tested for purity, moisture, heavy metals, and microbial parameters. COA provided before shipment.',
    keywords: [
      'psyllium husk quality certification india',
      'herbal products quality india',
      'iso 22000 herbal exporter india',
      'fssai certified exporter india',
      'lab tested psyllium husk coa',
      'spices quality certification india',
    ],
    alternates: {
      canonical,
      languages: buildAlternates('/quality'),
    },
    openGraph: {
      title: 'Quality Assurance & Certifications | Amar Herbal Origins',
      description: 'ISO 22000, FSSAI certified. Lab-tested on every batch. Full COA provided before shipment for all products.',
      url: canonical,
      siteName: 'Amar Herbal Origins',
      type: 'website',
    },
  };
}

export default function QualityLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
