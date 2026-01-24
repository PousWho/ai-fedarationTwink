'use client';

import OpportunityCard from '@/components/ui/OpportunityCard';
import SectionDivider from './SectionDivider';
import { useLanguage } from '@/lib/LanguageContext';

export default function FeaturesSection() {
  const { t } = useLanguage();
  
  const features = [
    { icon: '/images/Icon.png', ...t.features.feature1 },
    { icon: '/images/icon-2.png', ...t.features.feature2 },
    { icon: '/images/Icon-3.png', ...t.features.feature3 },
    { icon: '/images/icon-4.png', ...t.features.feature4 },
    { icon: '/images/icon-5.png', ...t.features.feature5 },
    { icon: '/images/icon-6.png', ...t.features.feature6 },
  ];

  return (
    <section id="features" className="w-full bg-aimy-background">
      <div className="max-w-[1440px] mx-auto px-6 md:px-[120px] py-20">
        <div className="mb-16">
          <SectionDivider label={t.features.title} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <OpportunityCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              items={feature.items}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
