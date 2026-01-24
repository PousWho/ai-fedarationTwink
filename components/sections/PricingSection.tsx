'use client';

import Button from '@/components/ui/Button';
import SectionDivider from './SectionDivider';
import { useLanguage } from '@/lib/LanguageContext';

export default function PricingSection() {
  const { t } = useLanguage();

  return (
    <section id="pricing" className="w-full bg-aimy-background">
      <div className="max-w-[1440px] mx-auto px-6 md:px-[120px] py-20">
        <div className="mb-12">
          <SectionDivider label={t.pricing.title} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Button variant="secondary" size="large" className="w-full justify-center rounded-[26px] text-aimy-text-white">
            {t.pricing.option1}
          </Button>
          <Button variant="secondary" size="large" className="w-full justify-center rounded-[26px] text-aimy-text-white">
            {t.pricing.option2}
          </Button>
        </div>
      </div>
    </section>
  );
}
