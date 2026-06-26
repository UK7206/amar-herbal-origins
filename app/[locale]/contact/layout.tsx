import type { Metadata } from 'next';
import { buildAlternates, buildCanonical } from '@/lib/seo-helpers';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const canonical = buildCanonical(locale, '/contact');

  return {
    title: 'Contact Psyllium Husk Supplier India | Free Sample & Pricing | Amar Herbal Origins',
    description:
      'Contact Amar Herbal Origins for psyllium husk wholesale pricing, free samples, and export inquiries. WhatsApp +91-94084-65040. 24-hour response. Minimum order 1 MT.',
    keywords: [
      'contact psyllium husk supplier India',
      'psyllium husk sample request',
      'isabgol wholesale inquiry',
      'psyllium husk export inquiry India',
      'buy psyllium husk bulk India',
    ],
    alternates: {
      canonical,
      languages: buildAlternates('/contact'),
    },
    openGraph: {
      title: 'Contact Amar Herbal Origins | Psyllium Husk Supplier India',
      description: 'Request free psyllium husk sample or get wholesale pricing. WhatsApp or email — 24-hour response guaranteed.',
      url: canonical,
      siteName: 'Amar Herbal Origins',
      type: 'website',
    },
  };
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
