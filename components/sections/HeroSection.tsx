'use client';

import Bubble from '@/components/ui/Bubble';
import { useLanguage } from '@/lib/LanguageContext';

export default function HeroSection() {
  const { t } = useLanguage();
  const titleLines = t.hero.title.split('\n');

  return (
    <section id="hero" className="w-full relative overflow-hidden bg-aimy-background">
      <div className="max-w-[1440px] mx-auto px-6 md:px-[120px] pt-[120px] pb-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="hero-text">
            <h1 className="text-heading text-aimy-text-white mb-6 font-bounded drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
              {titleLines[0]}<br />{titleLines[1]}
            </h1>
            
            <p className="text-body text-aimy-text-white mb-8 font-guidy">
              {t.hero.subtitle}
            </p>
          </div>

          <div className="hero-benefits">
            <div className="relative flex flex-col items-center space-y-4">
              {/* Первый ряд - одна широкая вкладка по центру */}
              <div className="flex justify-center">
                <Bubble className="rounded-[40px] w-[416px] h-[56px] p-0 flex items-center justify-center">
                  <span className="text-aimy-text-white text-text font-guidy text-center">
                    {t.hero.benefit1}
                  </span>
                </Bubble>
              </div>

              {/* Второй ряд - одна вкладка по центру */}
              <div className="flex justify-center">
                <Bubble className="rounded-[40px] w-[416px] h-[56px] p-0 flex items-center justify-center">
                  <span className="text-aimy-text-white text-text font-guidy text-center">
                    {t.hero.benefit2}
                  </span>
                </Bubble>
              </div>

              {/* Третий ряд - одна вкладка по центру */}
              <div className="flex justify-center">
                <Bubble className="rounded-[40px] w-[327px] h-[56px] p-0 flex items-center justify-center">
                  <span className="text-aimy-text-white text-text font-guidy text-center">
                    {t.hero.benefit3}
                  </span>
                </Bubble>
              </div>

              {/* Четвертый ряд - одна узкая вкладка по центру */}
              <div className="flex justify-center">
                <Bubble className="rounded-[40px] w-[231px] h-[56px] p-0 flex items-center justify-center">
                  <span className="text-aimy-text-white text-text font-guidy text-center">
                    {t.hero.benefit4}
                  </span>
                </Bubble>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
