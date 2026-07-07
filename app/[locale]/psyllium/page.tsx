import type { Metadata } from 'next';
import { getCategoryBySlug } from '@/lib/category-data';
import { CategoryHubPage } from '@/components/category/CategoryHubPage';

type Props = { params: Promise<{ locale: string }> };

const META: Record<string, { title: string; description: string }> = {
  en: {
    title: 'Psyllium Husk Exporter India | Isabgol Manufacturer & Bulk Supplier | Amar Herbal Origins',
    description:
      'Leading psyllium husk (Isabgol) exporter & manufacturer from Gujarat, India. ISO 22000, USDA Organic, Halal, Kosher, FSSAI certified. 99% purity, farm-direct B2B bulk supply to pharma, food & nutraceutical industries in 30+ countries.',
  },
  de: {
    title: 'Psylliumschalen Exporteur Indien | Hersteller & Großhandel | Amar Herbal Origins',
    description:
      'Führender Psylliumschalen-Exporteur aus Gujarat, Indien. ISO 22000, USDA Bio, Halal zertifiziert. B2B-Großhandel an 30+ Länder. Kostenloses Muster anfordern.',
  },
  fr: {
    title: 'Exportateur Psyllium Inde | Fabricant & Fournisseur en Gros | Amar Herbal Origins',
    description:
      'Principal exportateur de psyllium du Gujarat, Inde. Certifié ISO 22000, USDA Bio, Halal. Fourniture en gros B2B à 30+ pays.',
  },
  ar: {
    title: 'مصدر قشر السيليوم من الهند | مصنع وموردون | أمار هيربال أوريجينز',
    description:
      'مصدر ومصنع رائد لقشر السيليوم من غوجارات، الهند. معتمد ISO 22000 وعضوي وحلال.',
  },
  es: {
    title: 'Exportador de Psyllium de India | Fabricante & Proveedor al Por Mayor | Amar Herbal Origins',
    description:
      'Exportador líder de cáscara de psyllium (Isabgol) de Gujarat, India. Certificado ISO 22000, USDA Orgánico, Halal. Suministro B2B a más de 30 países.',
  },
  zh: {
    title: '印度洋车前子壳出口商 | 制造商 & 批发供应商 | Amar Herbal Origins',
    description:
      '领先的洋车前子壳（Isabgol）出口商，来自印度古吉拉特邦。ISO 22000、USDA有机、清真认证。向30多个国家提供B2B批量供应。',
  },
  ja: {
    title: 'インドのサイリウムハスク輸出業者 | 製造・卸売サプライヤー | Amar Herbal Origins',
    description:
      'インド・グジャラート州のサイリウムハスク（イサブゴール）大手輸出業者。ISO 22000・USDAオーガニック・ハラール認証取得。30ヶ国以上にB2B一括供給。',
  },
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const m = META[locale] ?? META['en'];
  const canonical = `https://amarherbalorigins.com/${locale}/psyllium`;

  return {
    title: m.title,
    description: m.description,
    keywords: [
      'psyllium husk exporter India',
      'isabgol exporter Gujarat',
      'psyllium husk manufacturer India',
      'bulk psyllium husk supplier',
      'psyllium husk wholesale India',
      'psyllium husk 99% purity',
      'ispaghula husk supplier',
      'psyllium husk B2B export',
      'plantago ovata exporter',
      'psyllium husk pharmaceutical grade',
      'organic psyllium husk exporter',
      'private label psyllium husk',
    ],
    alternates: {
      canonical,
      languages: {
        en: 'https://amarherbalorigins.com/en/psyllium',
        de: 'https://amarherbalorigins.com/de/psyllium',
        fr: 'https://amarherbalorigins.com/fr/psyllium',
        ar: 'https://amarherbalorigins.com/ar/psyllium',
        'x-default': 'https://amarherbalorigins.com/en/psyllium',
      },
    },
    openGraph: {
      title: m.title,
      description: m.description,
      url: canonical,
      siteName: 'Amar Herbal Origins',
      images: [
        {
          url: 'https://amarherbalorigins.com/og-psyllium.jpg',
          width: 1200,
          height: 630,
          alt: 'Psyllium Husk Exporter India — Amar Herbal Origins',
        },
      ],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: m.title,
      description: m.description,
    },
  };
}

export default async function PsylliumHubPage({ params }: Props) {
  const category = getCategoryBySlug('psyllium')!;

  // JSON-LD Product Schema for SEO
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Psyllium Husk Products — Amar Herbal Origins',
    description: 'Premium psyllium husk products exported from Gujarat, India',
    url: 'https://amarherbalorigins.com/en/psyllium',
    itemListElement: category.products.map((product, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'Product',
        name: product.name,
        description: product.description,
        brand: { '@type': 'Brand', name: 'Amar Herbal Origins' },
        countryOfOrigin: { '@type': 'Country', name: 'India' },
        offers: {
          '@type': 'Offer',
          availability: 'https://schema.org/InStock',
          seller: { '@type': 'Organization', name: 'Amar Herbal Origins' },
        },
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <CategoryHubPage category={category} />
    </>
  );
}
