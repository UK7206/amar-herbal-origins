// ─────────────────────────────────────────────────────────
// Herbs → Suppliers → [Country] page
// URL: /[locale]/herbs/suppliers/[country]
// ─────────────────────────────────────────────────────────
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getCategoryBySlug } from '@/lib/category-data';
import { getCountryBySlug, COUNTRY_SLUGS } from '@/lib/countries-data';
import { CategoryCountrySupplierPage } from '@/components/category/CategoryCountrySupplierPage';

type Props = { params: Promise<{ locale: string; country: string }> };

export async function generateStaticParams() {
  return COUNTRY_SLUGS.map((country) => ({ country }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, country: countrySlug } = await params;
  const country = getCountryBySlug(countrySlug);
  if (!country) return {};

  const title = `Indian Herbs Supplier ${country.name} | Moringa, Amla, Curry Leaves Exporter | Amar Herbal Origins`;
  const description = `Premium Indian herbs exporter to ${country.name}. Moringa powder, amla, dried curry leaves, mint, oregano — FSSAI, ISO 22000, Halal certified. Bulk B2B supply. Free samples available.`;
  const canonical = `https://amarherbalorigins.com/${locale}/herbs/suppliers/${countrySlug}`;

  return {
    title,
    description,
    keywords: [
      `Indian herbs supplier ${country.name}`,
      `moringa powder exporter ${country.name}`,
      `amla powder supplier ${country.name}`,
      `dried herbs bulk ${country.name}`,
      `herbal powder exporter India`,
      `curry leaves supplier ${country.name}`,
      `mint leaves exporter ${country.name}`,
      `oregano supplier ${country.name}`,
    ],
    alternates: { canonical },
    openGraph: {
      title: `Indian Herbs Supplier ${country.name} | Amar Herbal Origins`,
      description,
      url: canonical,
      siteName: 'Amar Herbal Origins',
      type: 'website',
    },
  };
}

export default async function HerbsCountryPage({ params }: Props) {
  const { locale, country: countrySlug } = await params;
  const category = getCategoryBySlug('herbs');
  const country = getCountryBySlug(countrySlug);
  if (!category || !country) notFound();

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Amar Herbal Origins',
    url: 'https://amarherbalorigins.com',
    description: `Indian herbs exporter to ${country.name} — moringa, amla, curry leaves, mint, oregano`,
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+91-94084-65040',
      contactType: 'sales',
      availableLanguage: 'English',
    },
    areaServed: country.name,
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Indian Herbs for Export',
      itemListElement: category.products.map((p) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Product',
          name: p.name,
          description: p.description,
        },
      })),
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <CategoryCountrySupplierPage category={category} country={country} locale={locale} />
    </>
  );
}
