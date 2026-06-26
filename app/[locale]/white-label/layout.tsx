import type { Metadata } from 'next';
import { buildAlternates, buildCanonical } from '@/lib/seo-helpers';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const canonical = buildCanonical(locale, '/white-label');

  return {
    title: 'White Label & Private Label Services India | Psyllium Husk, Spices, Herbs & Oils | Amar Herbal Origins',
    description:
      'White label & private label manufacturer from Gujarat, India. Custom branding for Psyllium Husk, Indian Spices, Herbs, Cold-Pressed Oils & Khakhra. ISO 22000 certified. Low MOQ. Multilingual labels. Free sample.',
    keywords: [
      'white label psyllium husk india',
      'private label herbal products india',
      'private label spices india',
      'white label herbs manufacturer india',
      'custom packaging herbal products india',
      'psyllium husk private label manufacturer',
      'private label isabgol supplier',
      'oem herbal manufacturer gujarat',
    ],
    alternates: {
      canonical,
      languages: buildAlternates('/white-label'),
    },
    openGraph: {
      title: 'White Label & Private Label Herbal Products India | Amar Herbal Origins',
      description: 'Custom branding & white label services for Psyllium Husk, Spices, Herbs & Oils from India. ISO 22000 certified. Low MOQ. Free sample.',
      url: canonical,
      siteName: 'Amar Herbal Origins',
      type: 'website',
    },
  };
}

export default function WhiteLabelLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
