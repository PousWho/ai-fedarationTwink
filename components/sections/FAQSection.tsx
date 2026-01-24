'use client';

import { useState } from 'react';
import Icon from '@/components/ui/Icon';
import SectionDivider from './SectionDivider';
import { useLanguage } from '@/lib/LanguageContext';
import { cn } from '@/lib/utils';

export default function FAQSection() {
  const { t } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqItems = [
    { question: t.faq.question1, answer: t.faq.answer1 },
    { question: t.faq.question2, answer: t.faq.answer2 },
    { question: t.faq.question3, answer: t.faq.answer3 },
  ];

  return (
    <section id="faq" className="w-full bg-aimy-background">
      <div className="max-w-[1440px] mx-auto px-6 md:px-[120px] py-20">
        <div className="mb-12">
          <SectionDivider label={t.faq.title} />
        </div>

        <div className="space-y-4" role="list">
          {faqItems.map((item, index) => (
            <div key={index} className="bg-aimy-purple rounded-[12px] overflow-hidden" role="listitem">
              <button
                className="w-full px-6 py-4 flex items-center justify-between text-left"
                onClick={() => toggleFAQ(index)}
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <h3 className="text-body text-aimy-text-white font-bounded font-normal">
                  {item.question}
                </h3>
                <Icon
                  name="chevron-down"
                  className={cn(
                    'w-5 h-5 text-aimy-text-white transition-transform flex-shrink-0',
                    openIndex === index && 'rotate-180'
                  )}
                />
              </button>
              {openIndex === index && (
                <div id={`faq-answer-${index}`} className="px-6 pb-4" role="region">
                  <p className="text-text text-aimy-text-white font-guidy">
                    {item.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
