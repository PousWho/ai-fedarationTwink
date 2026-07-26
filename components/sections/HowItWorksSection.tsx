'use client';

import { useEffect, useState, useRef } from 'react';
import Bubble from '@/components/ui/Bubble';
import SectionDivider from './SectionDivider';
import { useLanguage } from '@/lib/LanguageContext';

export default function HowItWorksSection() {
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  
  const steps = [
    { number: 1, text: t.howItWorks.step1 },
    { number: 2, text: t.howItWorks.step2 },
    { number: 3, text: t.howItWorks.step3 },
    { number: 4, text: t.howItWorks.step4 },
    { number: 5, text: t.howItWorks.step5 },
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
      id="how-it-works" 
      className="w-full relative"
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-[60px] xl:px-[120px] py-20">
        <div className={`mb-16 transition-all duration-1000 ease-out ${
          isVisible 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 -translate-y-10'
        }`}>
          <SectionDivider label={t.howItWorks.title} className="justify-start" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {steps.slice(0, 3).map((step, index) => (
            <div
              key={step.number}
              className={`transition-transform duration-700 ease-out ${
                isVisible 
                  ? 'translate-y-0 scale-100' 
                  : 'translate-y-10 scale-95'
              }`}
              style={{
                transitionDelay: isVisible ? `${200 + index * 150}ms` : '0ms',
              }}
            >
              <Bubble className="border border-aimy-accent bg-[#A057FF1A]">
                <div className={`text-center transition-opacity duration-700 ease-out ${
                  isVisible ? 'opacity-100' : 'opacity-0'
                }`}
                style={{
                  transitionDelay: isVisible ? `${200 + index * 150}ms` : '0ms',
                }}>
                  <div className="mb-4" aria-hidden="true">
                    <span className="text-aimy-accent text-heading font-bounded">{step.number}</span>
                  </div>
                  <p className="text-text text-aimy-text-white font-guidy">{step.text}</p>
                </div>
              </Bubble>
            </div>
          ))}
        </div>
        <div className="flex flex-col md:flex-row justify-center gap-6">
          {steps.slice(3, 5).map((step, index) => (
            <div
              key={step.number}
              className={`w-full md:w-1/3 transition-transform duration-700 ease-out ${
                isVisible 
                  ? 'translate-y-0 scale-100' 
                  : 'translate-y-10 scale-95'
              }`}
              style={{
                transitionDelay: isVisible ? `${650 + index * 150}ms` : '0ms',
              }}
            >
              <Bubble className="border border-aimy-accent bg-[#A057FF1A]">
                <div className={`text-center transition-opacity duration-700 ease-out ${
                  isVisible ? 'opacity-100' : 'opacity-0'
                }`}
                style={{
                  transitionDelay: isVisible ? `${650 + index * 150}ms` : '0ms',
                }}>
                  <div className="mb-4" aria-hidden="true">
                    <span className="text-aimy-accent text-heading font-bounded">{step.number}</span>
                  </div>
                  <p className="text-text text-aimy-text-white font-guidy">{step.text}</p>
                </div>
              </Bubble>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
