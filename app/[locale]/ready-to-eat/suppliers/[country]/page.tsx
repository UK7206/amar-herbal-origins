// ─────────────────────────────────────────────────────────
// Ready-to-Eat → Suppliers → [Country] page
// URL: /[locale]/ready-to-eat/suppliers/[country]
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

  const title = `Khakhra Exporter ${country.name} | Indian Snacks Supplier | Amar Herbal Origins`;
  const description = `Premium Gujarati khakhra and Indian ready-to-eat snacks exporter to ${country.name}. FSSAI, GMP, Halal certified. Private label available. Bulk B2B supply from Gujarat, India.`;
  const canonical = `https://amarherbalorigins.com/${locale}/ready-to-eat/suppliers/${countrySlug}`;

  return {
    title,
    description,
    keywords: [
      `khakhra exporter ${country.name}`,
      `Indian snacks supplier ${country.name}`,
      `ready to eat food ${country.name}`,
      `gujarati snacks exporter`,
      `khakhra private label ${country.name}`,
      `Indian snacks bulk export`,
      `ready to eat manufacturer India`,
    ],
    alternates: { canonical },
    openGraph: {
      title: `Khakhra Exporter ${country.name} | Amar Herbal Origins`,
      description,
      url: canonical,
      siteName: 'Amar Herbal Origins',
      type: 'website',
    },
  };
}

export default async function ReadyToEatCountryPage({ params }: Props) {
  const { locale, country: countrySlug } = await params;
  const category = getCategoryBySlug('ready-to-eat');
  const country = getCountryBySlug(countrySlug);
  if (!category || !country) notFound();

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Amar Herbal Origins',
    url: 'https://amarherbalorigins.com',
    description: `Indian ready-to-eat snacks exporter to ${country.name} — khakhra, Gujarati snacks`,
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+91-94084-65040',
      contactType: 'sales',
      availableLanguage: 'English',
    },
    areaServed: country.name,
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Indian Ready-to-Eat Snacks for Export',
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
