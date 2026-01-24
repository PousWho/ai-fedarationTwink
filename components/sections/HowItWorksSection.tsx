'use client';

import Bubble from '@/components/ui/Bubble';
import SectionDivider from './SectionDivider';
import { useLanguage } from '@/lib/LanguageContext';

export default function HowItWorksSection() {
  const { t } = useLanguage();
  
  const steps = [
    { number: 1, text: t.howItWorks.step1 },
    { number: 2, text: t.howItWorks.step2 },
    { number: 3, text: t.howItWorks.step3 },
    { number: 4, text: t.howItWorks.step4 },
    { number: 5, text: t.howItWorks.step5 },
  ];

  return (
    <section id="how-it-works" className="w-full bg-aimy-background">
      <div className="max-w-[1440px] mx-auto px-6 md:px-[120px] py-20">
        <div className="mb-16">
          <SectionDivider label={t.howItWorks.title} className="justify-start" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {steps.slice(0, 3).map((step) => (
            <Bubble key={step.number} className="border border-aimy-accent bg-[#A057FF1A]">
              <div className="text-center">
                <div className="mb-4" aria-hidden="true">
                  <span className="text-aimy-accent text-heading font-bounded">{step.number}</span>
                </div>
                <p className="text-text text-aimy-text-white font-guidy">{step.text}</p>
              </div>
            </Bubble>
          ))}
        </div>
        <div className="flex justify-center gap-6">
          {steps.slice(3, 5).map((step) => (
            <Bubble key={step.number} className="border border-aimy-accent bg-[#A057FF1A]">
              <div className="text-center">
                <div className="mb-4" aria-hidden="true">
                  <span className="text-aimy-accent text-heading font-bounded">{step.number}</span>
                </div>
                <p className="text-text text-aimy-text-white font-guidy">{step.text}</p>
              </div>
            </Bubble>
          ))}
        </div>
      </div>
    </section>
  );
}
