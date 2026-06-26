import { useTranslations } from 'next-intl';
import { Link } from '@/lib/routing';
import { Leaf, Shield, Truck, Award } from 'lucide-react';

export function ProductOverview() {
  const t = useTranslations('product');
  const commonT = useTranslations('common');

  const features = [
    {
      icon: Leaf,
      title: t('benefits.natural'),
      description: t('benefits.naturalDesc'),
    },
    {
      icon: Shield,
      title: t('benefits.quality'),
      description: t('benefits.qualityDesc'),
    },
    {
      icon: Award,
      title: t('benefits.certified'),
      description: t('benefits.certifiedDesc'),
    },
    {
      icon: Truck,
      title: t('benefits.reliable'),
      description: t('benefits.reliableDesc'),
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            {t('title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="bg-gradient-to-br from-green-50 to-white p-6 rounded-xl border border-green-100 hover:shadow-lg transition-shadow"
              >
                <div className="w-14 h-14 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="text-green-600" size={28} />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            );
          })}
        </div>

        <div className="bg-gradient-to-r from-green-600 to-green-800 rounded-2xl p-8 lg:p-12 text-white">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl lg:text-3xl font-bold mb-4">
                {t('overview')}
              </h3>
              <p className="text-green-100 text-lg leading-relaxed mb-6">
                {t('overviewText')}
              </p>
              <Link
                href="/product"
                className="inline-flex items-center space-x-2 bg-white text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors"
              >
                <span>{commonT('learnMore')}</span>
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/10 backdrop-blur rounded-lg p-4">
                <p className="text-green-100 text-sm mb-1">{t('specifications.purity')}</p>
                <p className="text-2xl font-bold">{t('specifications.purityValue')}</p>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-lg p-4">
                <p className="text-green-100 text-sm mb-1">{t('specifications.fiber')}</p>
                <p className="text-2xl font-bold">{t('specifications.fiberValue')}</p>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-lg p-4">
                <p className="text-green-100 text-sm mb-1">{t('specifications.moisture')}</p>
                <p className="text-2xl font-bold">{t('specifications.moistureValue')}</p>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-lg p-4">
                <p className="text-green-100 text-sm mb-1">{t('specifications.mesh')}</p>
                <p className="text-2xl font-bold">{t('specifications.meshValue')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}