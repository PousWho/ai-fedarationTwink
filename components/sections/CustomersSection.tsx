'use client';

import { useEffect, useState, useRef } from 'react';
import Bubble from '@/components/ui/Bubble';
import SectionDivider from './SectionDivider';
import { useLanguage } from '@/lib/LanguageContext';

export default function CustomersSection() {
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const customers = [t.customers.item1, t.customers.item2, t.customers.item3, t.customers.item4];

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
      id="customers" 
      className="w-full relative"
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-[60px] xl:px-[120px] py-20">
        <div className={`mb-16 transition-all duration-1000 ease-out ${
          isVisible 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 -translate-y-10'
        }`}>
          <SectionDivider label={t.customers.title} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {customers.map((customer, index) => (
            <div
              key={index}
              className={`transition-transform duration-700 ease-out ${
                isVisible 
                  ? 'translate-y-0 scale-100' 
                  : 'translate-y-10 scale-95'
              }`}
              style={{
                transitionDelay: isVisible ? `${200 + index * 100}ms` : '0ms',
              }}
            >
              <Bubble>
                <p className={`text-body text-aimy-text-white font-guidy text-center transition-opacity duration-700 ease-out ${
                  isVisible ? 'opacity-100' : 'opacity-0'
                }`}
                style={{
                  transitionDelay: isVisible ? `${200 + index * 100}ms` : '0ms',
                }}>
                  {customer}
                </p>
              </Bubble>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
