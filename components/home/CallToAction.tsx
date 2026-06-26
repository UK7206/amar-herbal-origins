import { useTranslations } from 'next-intl';
import { Link } from '@/lib/routing';
import { ArrowRight, CheckCircle, Users, Award } from 'lucide-react';

export function CallToAction() {
  const t = useTranslations('hero');
  const commonT = useTranslations('common');

  const trustIndicators = [
    {
      icon: Users,
      title: '500+ Satisfied Clients',
      description: 'Trusted by businesses worldwide',
    },
    {
      icon: Award,
      title: 'Quality Certified',
      description: 'ISO 9001:2015 & GMP Compliant',
    },
    {
      icon: CheckCircle,
      title: '14+ Years Experience',
      description: 'Industry expertise you can rely on',
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Ready to Partner with Us?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get in touch today to discuss your psyllium husk requirements and
            discover how we can help your business grow.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {trustIndicators.map((indicator) => {
            const Icon = indicator.icon;
            return (
              <div
                key={indicator.title}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="text-green-600" size={24} />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {indicator.title}
                </h3>
                <p className="text-gray-600">{indicator.description}</p>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <Link
            href="/contact"
            className="inline-flex items-center space-x-2 bg-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-700 transition-colors shadow-lg hover:shadow-xl"
          >
            <span>{t('cta')}</span>
            <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    </section>
  );
}