'use client';

import Button from '@/components/ui/Button';
import { useLanguage } from '@/lib/LanguageContext';

export default function CTASection() {
  const { t } = useLanguage();

  return (
    <section id="cta" className="w-full bg-aimy-background">
      <div className="max-w-[1440px] mx-auto px-6 md:px-[120px] py-20">
        <div className="text-center mb-8">
          <h2 className="text-heading mb-8 font-bounded">
            <span className="text-aimy-text-white">{t.cta.text1}</span>
            <span className="text-aimy-accent">{t.cta.text2}</span>
          </h2>
        </div>
        <div className="text-center">
          <Button variant="primary" size="medium" className="rounded-[26px] text-aimy-text-white shadow-[0_4px_20px_rgba(255,255,255,0.3)]">
            {t.cta.button}
          </Button>
        </div>
      </div>
    </section>
  );
}
