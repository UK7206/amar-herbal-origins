// ─────────────────────────────────────────────────────────
// Oils → Suppliers → [Country] page
// URL: /[locale]/oils/suppliers/[country]
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

  const title = `Castor Oil Supplier ${country.name} | Karanja Oil Exporter India | Amar Herbal Origins`;
  const description = `Premium castor oil and karanja oil exporter to ${country.name}. Cold-pressed, pharmaceutical & cosmetic grade. FSSAI, ISO 22000, GMP certified. Bulk B2B supply from Gujarat, India.`;
  const canonical = `https://amarherbalorigins.com/${locale}/oils/suppliers/${countrySlug}`;

  return {
    title,
    description,
    keywords: [
      `castor oil supplier ${country.name}`,
      `karanja oil exporter ${country.name}`,
      `cold pressed castor oil ${country.name}`,
      `herbal oil exporter India`,
      `industrial castor oil ${country.name}`,
      `pharmaceutical castor oil supplier`,
      `Gujarat oil exporter`,
    ],
    alternates: { canonical },
    openGraph: {
      title: `Castor Oil & Karanja Oil Supplier ${country.name} | Amar Herbal Origins`,
      description,
      url: canonical,
      siteName: 'Amar Herbal Origins',
      type: 'website',
    },
  };
}

export default async function OilsCountryPage({ params }: Props) {
  const { locale, country: countrySlug } = await params;
  const category = getCategoryBySlug('oils');
  const country = getCountryBySlug(countrySlug);
  if (!category || !country) notFound();

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Amar Herbal Origins',
    url: 'https://amarherbalorigins.com',
    description: `Herbal oil exporter to ${country.name} — castor oil, karanja oil, cold pressed grades`,
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+91-94084-65040',
      contactType: 'sales',
      availableLanguage: 'English',
    },
    areaServed: country.name,
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Herbal Oils for Export',
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
