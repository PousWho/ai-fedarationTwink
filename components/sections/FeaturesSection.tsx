'use client';

import { useEffect, useState, useRef } from 'react';
import OpportunityCard from '@/components/ui/OpportunityCard';
import SectionDivider from './SectionDivider';
import ElectricBorder from '@/components/ui/ElectricBorder/ElectricBorder';
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
      className="w-full relative"
    >
      <div className="max-w-[1440px] mx-auto px-0 sm:px-4 md:px-[120px] py-12 sm:py-16 md:py-20">
        <div className={`px-4 sm:px-6 mb-8 sm:mb-12 md:mb-16 transition-all duration-1000 ease-out ${
          isVisible 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 -translate-y-10'
        }`}>
          <SectionDivider label={t.features.title} />
        </div>

        {/* Контейнер с эффектом жидкого стекла и электрическим бордером */}
        <ElectricBorder
          color="#61F1F0"
          speed={1}
          chaos={0.12}
          borderRadius={24}
          className="mx-auto w-full sm:px-4 md:max-w-[95%] md:mx-auto backdrop-blur-xl backdrop-saturate-150 bg-white/10 rounded-none sm:rounded-[16px] md:rounded-[24px] shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] overflow-hidden"
        >
          <div className="p-4 sm:p-6 md:p-8 lg:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`w-full transition-transform duration-700 ease-out ${
                  isVisible 
                    ? 'translate-y-0 scale-100' 
                    : 'translate-y-10 scale-95'
                }`}
                style={{
                  transitionDelay: isVisible ? `${200 + index * 100}ms` : '0ms',
                }}
              >
                <OpportunityCard
                  icon={feature.icon}
                  title={feature.title}
                  items={feature.items}
                  className={`w-full transition-opacity duration-700 ease-out ${
                    isVisible ? 'opacity-100' : 'opacity-0'
                  }`}
                  style={{
                    transitionDelay: isVisible ? `${200 + index * 100}ms` : '0ms',
                  }}
                />
              </div>
            ))}
            </div>
          </div>
        </ElectricBorder>
      </div>
    </section>
  );
}
