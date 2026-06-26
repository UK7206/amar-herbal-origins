import type { Metadata } from 'next';
import { getCategoryBySlug } from '@/lib/category-data';
import { CategoryNavigation } from '@/components/category/CategoryNavigation';
import { WhatsAppFloat } from '@/components/layout/WhatsAppFloat';

export const metadata: Metadata = {
  title: {
    default: 'Indian Herbs Exporter — Moringa, Mint, Amla | Amar Herbal Origins',
    template: '%s | Herbs — Amar Herbal Origins',
  },
  description:
    'Premium Indian herbs exporter from Gujarat. Moringa powder, dried mint, oregano, amla, curry leaves — bulk B2B supply, FSSAI & ISO 22000 certified.',
};

export default async function HerbsLayout({ children }: { children: React.ReactNode }) {
  const category = getCategoryBySlug('herbs')!;
  return (
    <>
      <CategoryNavigation category={category} />
      <div style={{ flex: 1 }}>{children}</div>
      <WhatsAppFloat message="Hi, I'm interested in your Indian herbs — please share pricing" />
    </>
  );
}
