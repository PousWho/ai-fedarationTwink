'use client';

import { useEffect, useState, useRef } from 'react';
import Bubble from '@/components/ui/Bubble';
import { useLanguage } from '@/lib/LanguageContext';

export default function HeroSection() {
  const { t } = useLanguage();
  const titleLines = t.hero.title.split('\n');
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Используем Intersection Observer для запуска анимации при появлении секции
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            // Отключаем observer после первого срабатывания
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

  const benefits = [
    { text: t.hero.benefit1, width: 'w-[416px]', delay: 300 },
    { text: t.hero.benefit2, width: 'w-[416px]', delay: 450 },
    { text: t.hero.benefit3, width: 'w-[327px]', delay: 600 },
    { text: t.hero.benefit4, width: 'w-[231px]', delay: 750 },
  ];

  return (
    <section 
      ref={sectionRef}
      id="hero" 
      className="w-full relative overflow-hidden bg-aimy-background"
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-[120px] pt-[120px] pb-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="hero-text">
            <h1 
              className={`text-heading text-aimy-text-white mb-6 font-bounded drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)] transition-all duration-1000 ease-out ${
                isVisible 
                  ? 'opacity-100 translate-x-0' 
                  : 'opacity-0 -translate-x-10'
              }`}
            >
              {titleLines[0]}<br />{titleLines[1]}
            </h1>
            
            <p 
              className={`text-body text-aimy-text-white mb-8 font-guidy transition-all duration-1000 ease-out delay-200 ${
                isVisible 
                  ? 'opacity-100 translate-x-0' 
                  : 'opacity-0 -translate-x-10'
              }`}
            >
              {t.hero.subtitle}
            </p>
          </div>

          <div className="hero-benefits">
            <div className="relative flex flex-col items-center space-y-4">
              {benefits.map((benefit, index) => (
                <div 
                  key={index}
                  className={`flex justify-center transition-all duration-700 ease-out ${
                    isVisible 
                      ? 'opacity-100 translate-y-0' 
                      : 'opacity-0 translate-y-10'
                  }`}
                  style={{
                    transitionDelay: isVisible ? `${benefit.delay}ms` : '0ms',
                  }}
                >
                  <Bubble className={`rounded-[40px] ${benefit.width} h-[56px] p-0 flex items-center justify-center`}>
                    <span className="text-aimy-text-white text-text font-guidy text-center">
                      {benefit.text}
                    </span>
                  </Bubble>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
