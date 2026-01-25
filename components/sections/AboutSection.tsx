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
      <div className="max-w-[1440px] mx-auto px-6 md:px-[120px] py-20">
        <div className={`mb-16 transition-all duration-1000 ease-out ${
          isVisible 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 -translate-y-10'
        }`}>
          <SectionDivider label={t.about.title} className="justify-center" />
        </div>

        {/* Контейнер с эффектом жидкого стекла */}
        <div className="mx-auto max-w-[95%] backdrop-blur-xl backdrop-saturate-150 bg-white/10 border border-white/30 rounded-[24px] p-6 md:p-8 lg:p-12 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-start">
            <div>
              <h2 className={`text-heading text-aimy-purple mb-8 font-bounded transition-all duration-1000 ease-out delay-200 ${
                isVisible 
                  ? 'opacity-100 translate-x-0' 
                  : 'opacity-0 -translate-x-10'
              }`}>
                {t.about.subtitle}
              </h2>
              <ul className="space-y-4 list-disc list-outside pl-6">
                {features.map((feature, index) => (
                  <li 
                    key={index} 
                    className={`text-body text-aimy-text-white font-guidy transition-all duration-700 ease-out ${
                      isVisible 
                        ? 'opacity-100 translate-x-0' 
                        : 'opacity-0 -translate-x-10'
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

            <div className={`w-full transition-all duration-1000 ease-out delay-300 ${
              isVisible 
                ? 'opacity-100 translate-x-0 scale-100' 
                : 'opacity-0 translate-x-10 scale-95'
            }`}>
              <div className="w-full bg-[#E5E5E5] rounded-[12px] aspect-video flex items-center justify-center" role="img" aria-label="Изображение системы">
                <span className="text-aimy-text-black text-small font-guidy opacity-50">
                  Изображение
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
