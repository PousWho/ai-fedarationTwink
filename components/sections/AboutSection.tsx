'use client';

import { useEffect, useState, useRef } from 'react';
import SectionDivider from './SectionDivider';
import { useLanguage } from '@/lib/LanguageContext';

export default function AboutSection() {
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  
  const features = [
    t.about.item1,
    t.about.item2,
    t.about.item3,
    t.about.item4,
    t.about.item5,
    t.about.item6,
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
      id="about" 
      className="w-full relative"
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-[60px] xl:px-[120px] py-20">
        <div className={`mb-16 transition-all duration-1000 ease-out ${
          isVisible 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 -translate-y-10'
        }`}>
          <SectionDivider label={t.about.title} className="justify-center" />
        </div>

        {/* Контейнер с эффектом жидкого стекла */}
        <div className="mx-auto max-w-[95%] backdrop-blur-xl backdrop-saturate-150 bg-white/10 border border-white/30 rounded-[24px] p-6 md:p-8 lg:p-12 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]">
          <h2 className={`text-heading text-aimy-purple mb-8 lg:mb-10 font-bounded transition-all duration-1000 ease-out delay-200 ${
            isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-6'
          }`}>
            {t.about.subtitle}
          </h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-10 lg:gap-x-16 gap-y-4 md:gap-y-6 list-disc list-outside pl-6 marker:text-aimy-accent">
            {features.map((feature, index) => (
              <li
                key={index}
                className={`text-body text-aimy-text-white font-guidy transition-all duration-700 ease-out ${
                  isVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-6'
                }`}
                style={{
                  transitionDelay: isVisible ? `${300 + index * 100}ms` : '0ms',
                }}
              >
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
