'use client';

import { useEffect, useState, useRef } from 'react';
import OpportunityCard from '@/components/ui/OpportunityCard';
import SectionDivider from './SectionDivider';
import { useLanguage } from '@/lib/LanguageContext';

export default function FeaturesSection() {
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  
  const features = [
    { icon: '/images/Icon.png', ...t.features.feature1 },
    { icon: '/images/icon-2.png', ...t.features.feature2 },
    { icon: '/images/Icon-3.png', ...t.features.feature3 },
    { icon: '/images/icon-4.png', ...t.features.feature4 },
    { icon: '/images/icon-5.png', ...t.features.feature5 },
    { icon: '/images/icon-6.png', ...t.features.feature6 },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      id="features" 
      className="w-full bg-aimy-background"
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-[120px] py-20">
        <div className={`mb-16 transition-all duration-1000 ease-out ${
          isVisible 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 -translate-y-10'
        }`}>
          <SectionDivider label={t.features.title} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`transition-all duration-700 ease-out ${
                isVisible 
                  ? 'opacity-100 translate-y-0 scale-100' 
                  : 'opacity-0 translate-y-10 scale-95'
              }`}
              style={{
                transitionDelay: isVisible ? `${200 + index * 100}ms` : '0ms',
              }}
            >
              <OpportunityCard
                icon={feature.icon}
                title={feature.title}
                items={feature.items}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
