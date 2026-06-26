// ─────────────────────────────────────────────────────────
// Psyllium → Suppliers → [Country] page
// URL: /[locale]/psyllium/suppliers/[country]
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

  const title = `Psyllium Husk Supplier ${country.name} | Isabgol Exporter India | Amar Herbal Origins`;
  const description = `Premium psyllium husk (Isabgol) exporter to ${country.name}. 99% purity, FSSAI, ISO 22000, Halal, Kosher certified. Bulk B2B supply from Gujarat, India. Free samples available.`;
  const canonical = `https://amarherbalorigins.com/${locale}/psyllium/suppliers/${countrySlug}`;

  return {
    title,
    description,
    keywords: country.primaryKeywords,
    alternates: { canonical },
    openGraph: {
      title: `Psyllium Husk Supplier ${country.name} | Amar Herbal Origins`,
      description,
      url: canonical,
      siteName: 'Amar Herbal Origins',
      type: 'website',
    },
  };
}

export default async function PsylliumCountryPage({ params }: Props) {
  const { locale, country: countrySlug } = await params;
  const category = getCategoryBySlug('psyllium');
  const country = getCountryBySlug(countrySlug);
  if (!category || !country) notFound();

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Amar Herbal Origins',
    url: 'https://amarherbalorigins.com',
    description: `Psyllium husk (Isabgol) exporter to ${country.name} from Gujarat, India`,
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+91-94084-65040',
      contactType: 'sales',
      availableLanguage: 'English',
    },
    areaServed: country.name,
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Psyllium Products for Export',
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
