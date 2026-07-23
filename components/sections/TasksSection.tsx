'use client';

import { useEffect, useState, useRef } from 'react';
import Button from '@/components/ui/Button';
import SectionDivider from './SectionDivider';
import { useLanguage } from '@/lib/LanguageContext';

export default function TasksSection() {
  const { t } = useLanguage();
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

  const questions = [
    { text: t.tasks.question1, delay: 200 },
    { text: t.tasks.question2, delay: 300 },
    { text: t.tasks.question3, delay: 400 },
    { text: t.tasks.question4, delay: 500 },
  ];

  const panelItems = [
    { text: t.tasks.dialog, delay: 600 },
    { text: t.tasks.ai, delay: 700 },
    { text: t.tasks.analytics, delay: 800 },
    { text: t.tasks.growth, delay: 900 },
  ];

  return (
    <section 
      ref={sectionRef}
      id="tasks" 
      className="w-full relative"
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-[120px] py-20">
        <div className={`mb-16 transition-all duration-1000 ease-out ${
          isVisible 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 -translate-y-10'
        }`}>
          <SectionDivider label={t.tasks.title} className="justify-start" />
        </div>

        {/* Контейнер с эффектом жидкого стекла */}
        <div className="mx-auto max-w-[95%] backdrop-blur-xl backdrop-saturate-150 bg-white/10 border border-white/30 rounded-[24px] p-6 md:p-8 lg:p-12 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]">
          <div className="mb-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-8">
              <div className="space-y-4">
                {questions.slice(0, 2).map((question, index) => (
                  <p 
                    key={index}
                    className={`text-body text-aimy-text-white font-guidy list-disc list-outside pl-6 transition-all duration-700 ease-out ${
                      isVisible 
                        ? 'opacity-100 translate-x-0' 
                        : 'opacity-0 -translate-x-10'
                    }`}
                    style={{
                      transitionDelay: isVisible ? `${question.delay}ms` : '0ms',
                    }}
                  >
                    {question.text}
                  </p>
                ))}
              </div>
              <div className="space-y-4">
                {questions.slice(2, 4).map((question, index) => (
                  <p 
                    key={index + 2}
                    className={`text-body text-aimy-text-white font-guidy list-disc list-outside pl-6 transition-all duration-700 ease-out ${
                      isVisible 
                        ? 'opacity-100 translate-x-0' 
                        : 'opacity-0 translate-x-10'
                    }`}
                    style={{
                      transitionDelay: isVisible ? `${question.delay}ms` : '0ms',
                    }}
                  >
                    {question.text}
                  </p>
                ))}
              </div>
            </div>

            <div 
              className={`w-full bg-[#E5E5E5] rounded-[12px] p-8 mb-8 transition-all duration-700 ease-out ${
                isVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-10'
              }`}
              style={{
                transitionDelay: isVisible ? '600ms' : '0ms',
              }}
              role="presentation"
            >
              <div className="flex justify-between items-center">
                {panelItems.map((item, index) => (
                  <span 
                    key={index}
                    className={`text-aimy-text-black text-body font-guidy flex-1 text-center transition-all duration-500 ease-out ${
                      isVisible 
                        ? 'opacity-100 scale-100' 
                        : 'opacity-0 scale-95'
                    }`}
                    style={{
                      transitionDelay: isVisible ? `${item.delay}ms` : '0ms',
                    }}
                  >
                    {item.text}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className={`text-center transition-all duration-700 ease-out ${
            isVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-10'
          }`}
          style={{
            transitionDelay: isVisible ? '1000ms' : '0ms',
          }}>
            <Button variant="primary" size="medium" className="rounded-[26px] text-aimy-text-white shadow-[0_4px_20px_rgba(255,255,255,0.3)]">
              {t.tasks.button}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
