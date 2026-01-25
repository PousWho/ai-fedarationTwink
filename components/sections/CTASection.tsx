'use client';

import { useEffect, useState, useRef } from 'react';
import Button from '@/components/ui/Button';
import { useLanguage } from '@/lib/LanguageContext';

export default function CTASection() {
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
      id="cta" 
      className="w-full relative"
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-[120px] py-20">
        <div className={`text-center mb-8 transition-all duration-1000 ease-out ${
          isVisible 
            ? 'opacity-100 translate-y-0 scale-100' 
            : 'opacity-0 translate-y-10 scale-95'
        }`}>
          <h2 className="text-heading mb-8 font-bounded">
            <span className="text-aimy-text-white">{t.cta.text1}</span>
            <span className="text-aimy-accent">{t.cta.text2}</span>
          </h2>
        </div>
        <div className={`text-center transition-all duration-700 ease-out delay-300 ${
          isVisible 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-10'
        }`}>
          <Button variant="primary" size="medium" className="rounded-[26px] text-aimy-text-white shadow-[0_4px_20px_rgba(255,255,255,0.3)]">
            {t.cta.button}
          </Button>
        </div>
      </div>
    </section>
  );
}
