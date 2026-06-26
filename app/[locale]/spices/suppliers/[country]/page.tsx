// ─────────────────────────────────────────────────────────
// Spices → Suppliers → [Country] page
// URL: /[locale]/spices/suppliers/[country]
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

  const title = `Indian Spices Supplier ${country.name} | Turmeric, Cumin, Fenugreek Exporter | Amar Herbal Origins`;
  const description = `Premium Indian spices exporter to ${country.name}. Turmeric powder, cumin seeds, fenugreek, coriander, ajwain — FSSAI, ISO 22000, Halal, Kosher certified. Bulk B2B supply. Free samples.`;
  const canonical = `https://amarherbalorigins.com/${locale}/spices/suppliers/${countrySlug}`;

  return {
    title,
    description,
    keywords: [
      `Indian spices supplier ${country.name}`,
      `turmeric powder exporter ${country.name}`,
      `cumin seeds supplier ${country.name}`,
      `fenugreek seeds exporter ${country.name}`,
      `coriander seeds bulk ${country.name}`,
      `ajwain supplier ${country.name}`,
      `spice manufacturer India export`,
      `Gujarat spices exporter`,
    ],
    alternates: { canonical },
    openGraph: {
      title: `Indian Spices Supplier ${country.name} | Amar Herbal Origins`,
      description,
      url: canonical,
      siteName: 'Amar Herbal Origins',
      type: 'website',
    },
  };
}

export default async function SpicesCountryPage({ params }: Props) {
  const { locale, country: countrySlug } = await params;
  const category = getCategoryBySlug('spices');
  const country = getCountryBySlug(countrySlug);
  if (!category || !country) notFound();

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Amar Herbal Origins',
    url: 'https://amarherbalorigins.com',
    description: `Indian spices exporter to ${country.name} — turmeric, cumin, fenugreek, coriander, ajwain`,
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+91-94084-65040',
      contactType: 'sales',
      availableLanguage: 'English',
    },
    areaServed: country.name,
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Indian Spices for Export',
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
