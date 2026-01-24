'use client';

import SectionDivider from './SectionDivider';
import { useLanguage } from '@/lib/LanguageContext';

export default function AboutSection() {
  const { t } = useLanguage();
  
  const features = [
    t.about.item1,
    t.about.item2,
    t.about.item3,
    t.about.item4,
    t.about.item5,
    t.about.item6,
  ];

  return (
    <section id="about" className="w-full bg-aimy-background">
      <div className="max-w-[1440px] mx-auto px-6 md:px-[120px] py-20">
        <div className="mb-16">
          <SectionDivider label={t.about.title} className="justify-center" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-heading text-aimy-purple mb-8 font-bounded">
              {t.about.subtitle}
            </h2>
            <ul className="space-y-4 list-disc list-outside pl-6">
              {features.map((feature, index) => (
                <li key={index} className="text-body text-aimy-text-white font-guidy">
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <div className="w-full">
            <div className="w-full bg-[#E5E5E5] rounded-[12px] aspect-video flex items-center justify-center" role="img" aria-label="Изображение системы">
              <span className="text-aimy-text-black text-small font-guidy opacity-50">
                Изображение
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
