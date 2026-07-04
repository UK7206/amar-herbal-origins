import type { Metadata } from 'next';
import { Hero } from '@/components/home/Hero';
import { ComplianceStrip } from '@/components/home/ComplianceStrip';
import { TrustSection } from '@/components/home/TrustSection';
import { ProductsSection } from '@/components/home/ProductsSection';
import { WhyUsSection } from '@/components/home/WhyUsSection';
import { ProcessSection } from '@/components/home/ProcessSection';
import { FoundingPartnerSection } from '@/components/home/FoundingPartnerSection';
import { MarqueeBanner } from '@/components/home/MarqueeBanner';
import { CommercialLinksSection } from '@/components/home/CommercialLinksSection';
import { HomeFAQSection } from '@/components/home/HomeFAQSection';
import { GEOEntitySection } from '@/components/home/GEOEntitySection';

type Props = { params: Promise<{ locale: string }> };

const META: Record<string, { title: string; description: string }> = {
  en: {
    // 66 chars — leads with strongest keyword, fits Google's display limit
    title: 'Psyllium Husk Manufacturer & Exporter India | Amar Herbal Origins',
    description:
      "India's certified psyllium husk (Isabgol) manufacturer & B2B exporter from Gujarat. ISO 22000, USDA Organic, Halal. Spices, herbs & cold-pressed oils. MOQ 1 MT. Free sample. Ships to 30+ countries.",
  },
  es: {
    title: 'Exportador Productos Herbales India | Psyllium, Especias, Hierbas | Amar Herbal Origins',
    description:
      'Amar Herbal Origins — Exportador B2B de Gujarat, India. Psyllium Husk (Isabgol), Especias Indias, Hierbas y Aceites prensados en frío. Certificado ISO 22000, USDA Orgánico, Halal. 30+ países. Muestra gratis.',
  },
  de: {
    title: 'Kräuterprodukte Exporteur Indien | Psyllium, Gewürze, Kräuter | Amar Herbal Origins',
    description:
      'Amar Herbal Origins — B2B Exporteur aus Gujarat, Indien. Psylliumschalen (Isabgol), Indische Gewürze, Kräuter & kaltgepresste Öle. ISO 22000, USDA Bio, Halal zertifiziert. 30+ Länder. Kostenloses Muster.',
  },
  fr: {
    title: 'Exportateur Produits Herbaux Inde | Psyllium, Épices, Herbes | Amar Herbal Origins',
    description:
      'Amar Herbal Origins — Exportateur B2B du Gujarat, Inde. Psyllium (Isabgol), Épices Indiennes, Herbes & Huiles pressées à froid. Certifié ISO 22000, USDA Bio, Halal. 30+ pays. Échantillon gratuit.',
  },
  ar: {
    title: 'مصدر منتجات عشبية من الهند | سيليوم وتوابل وأعشاب | أمار هيربال أوريجينز',
    description:
      'أمار هيربال أوريجينز — مصدر B2B من غوجارات، الهند. قشر السيليوم (إسبغول)، التوابل الهندية، الأعشاب والزيوت المعصورة على البارد. معتمد ISO 22000، حلال، عضوي. 30+ دولة. اطلب عينة مجانية.',
  },
  zh: {
    title: '印度草本产品出口商 | 车前子壳、香料、草药 | Amar Herbal Origins',
    description:
      'Amar Herbal Origins — 印度古吉拉特邦B2B出口商。洋车前子壳(Isabgol)、印度香料、草药及冷压油。ISO 22000、USDA有机、清真认证。向30+国家供货。提供免费样品。',
  },
  ja: {
    title: 'インド ハーブ製品輸出業者 | サイリウム・スパイス・ハーブ | Amar Herbal Origins',
    description:
      'Amar Herbal Origins — インド・グジャラート州のB2B輸出業者。サイリウムハスク、インドスパイス、ハーブ、コールドプレスオイル。ISO 22000、USDA有機、ハラール認証。30カ国以上へ供給。無料サンプルあり。',
  },
};


export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const m = META[locale] ?? META['en'];
  const canonical = `https://amarherbalorigins.com/${locale}`;

  return {
    title: m.title,
    description: m.description,
    keywords: [
      'herbal products exporter india',
      'psyllium husk exporter india',
      'psyllium husk exporter from india',
      'psyllium husk manufacturer india',
      'isabgol exporter india',
      'indian spices exporter',
      'herbs exporter india',
      'cold pressed oil exporter india',
      'psyllium husk bulk supplier india',
      'psyllium husk manufacturer gujarat',
      'agri products exporter gujarat',
      'isabgol wholesale supplier',
      'psyllium husk B2B',
      'organic psyllium husk exporter',
      'private label herbal products india',
    ],
    alternates: {
      canonical,
      languages: {
        'en': 'https://amarherbalorigins.com/en',
        'es': 'https://amarherbalorigins.com/es',
        'de': 'https://amarherbalorigins.com/de',
        'fr': 'https://amarherbalorigins.com/fr',
        'ar': 'https://amarherbalorigins.com/ar',
        'zh': 'https://amarherbalorigins.com/zh',
        'ja': 'https://amarherbalorigins.com/ja',
        'x-default': 'https://amarherbalorigins.com/en',
      },
    },
    openGraph: {
      title: m.title,
      description: m.description,
      url: canonical,
      siteName: 'Amar Herbal Origins',
      images: [
        {
          url: 'https://amarherbalorigins.com/og-home.jpg',
          width: 1200,
          height: 630,
          alt: 'Amar Herbal Origins — Herbal Products Exporter India | Psyllium Husk, Spices & Herbs',
        },
      ],
      type: 'website',
      locale: locale === 'zh' ? 'zh_CN' : locale + '_' + (locale === 'en' ? 'US' : locale.toUpperCase()),
    },
    twitter: {
      card: 'summary_large_image',
      title: m.title,
      description: m.description,
      images: ['https://amarherbalorigins.com/og-home.jpg'],
    },
  };
}

export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  return (
    <main>
      <Hero />
      <ComplianceStrip />
      <TrustSection />
      <MarqueeBanner />
      <ProductsSection />
      <WhyUsSection />
      <CommercialLinksSection locale={locale} />
      <ProcessSection />
      <HomeFAQSection />
      <GEOEntitySection />
      <FoundingPartnerSection />
    </main>
  );
}
