'use client';

import { useEffect, useState, useRef } from 'react';
import FuzzyText from '@/components/ui/FuzzyText/FuzzyText';
import { useLanguage } from '@/lib/LanguageContext';

export default function HeroSection() {
  const { t } = useLanguage();
  const titleLines = t.hero.title.split('\n');
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

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const benefits = [
    { text: t.hero.benefit1, width: 'w-full max-w-[416px]', delay: 300 },
    { text: t.hero.benefit2, width: 'w-full max-w-[416px]', delay: 450 },
    { text: t.hero.benefit3, width: 'w-full max-w-[327px]', delay: 600 },
    { text: t.hero.benefit4, width: 'w-full max-w-[231px]', delay: 750 },
  ];

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="w-full relative overflow-hidden"
    >
      {/* контент */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-10 lg:px-[60px] xl:px-[120px] pt-12 md:pt-[120px] pb-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="hero-text">
            <h1
              className={`text-heading text-aimy-text-white mb-6 font-bounded drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)] transition-all duration-1000 ease-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
            >
              {titleLines[0]}<br />
              {titleLines[1].includes('Aimy') ? (
                <>
                  {titleLines[1].split('Aimy')[0]}
                  <FuzzyText
                    fontSize="clamp(2rem, 8vw, 6rem)"
                    fontWeight={400}
                    fontFamily="inherit"
                    color="#FFFFFF"
                    baseIntensity={0.2}
                    hoverIntensity={0.5}
                    fuzzRange={30}
                    enableHover={true}
                    className="inline-block align-baseline"
                    
                  >
                    Aimy
                  </FuzzyText>
                  {titleLines[1].split('Aimy')[1]}
                </>
              ) : (
                titleLines[1]
              )}
            </h1>

            <p
              className={`text-body text-aimy-text-white mb-8 font-guidy transition-all duration-1000 ease-out delay-200 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
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
                  className={`flex justify-center transition-transform duration-700 ease-out ${
                    isVisible ? 'translate-y-0' : 'translate-y-10'
                  }`}
                  style={{ transitionDelay: isVisible ? `${benefit.delay}ms` : '0ms' }}
                >
                  <div className={`rounded-[40px] ${benefit.width} min-h-[56px] px-5 py-2 flex items-center justify-center backdrop-blur-xl backdrop-saturate-150 bg-white/10 border border-white/30 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] hover:bg-white/15 transition-all duration-300`}>
                    <span className={`text-aimy-text-white text-text font-guidy text-center transition-opacity duration-700 ease-out ${
                      isVisible ? 'opacity-100' : 'opacity-0'
                    }`}
                    style={{ transitionDelay: isVisible ? `${benefit.delay}ms` : '0ms' }}>
                      {benefit.text}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
