'use client';

import { useEffect, useState, useRef } from 'react';
import Button from '@/components/ui/Button';
import SectionDivider from './SectionDivider';
import { useLanguage } from '@/lib/LanguageContext';

export default function PricingSection() {
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

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
      id="pricing" 
      className="w-full relative"
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-[120px] py-20">
        <div className={`mb-12 transition-all duration-1000 ease-out ${
          isVisible 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 -translate-y-10'
        }`}>
          <SectionDivider label={t.pricing.title} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className={`transition-all duration-700 ease-out h-full flex ${
            isVisible 
              ? 'opacity-100 translate-x-0 scale-100' 
              : 'opacity-0 -translate-x-10 scale-95'
          }`}
          style={{
            transitionDelay: isVisible ? '200ms' : '0ms',
          }}>
            <Button variant="secondary" size="large" className="w-full justify-center rounded-[26px] text-aimy-text-white h-full min-h-[80px]">
              {t.pricing.option1}
            </Button>
          </div>
          <div className={`transition-all duration-700 ease-out h-full flex ${
            isVisible 
              ? 'opacity-100 translate-x-0 scale-100' 
              : 'opacity-0 translate-x-10 scale-95'
          }`}
          style={{
            transitionDelay: isVisible ? '300ms' : '0ms',
          }}>
            <Button variant="secondary" size="large" className="w-full justify-center rounded-[26px] text-aimy-text-white h-full min-h-[80px]">
              {t.pricing.option2}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
