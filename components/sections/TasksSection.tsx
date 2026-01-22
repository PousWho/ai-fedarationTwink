'use client';

import Button from '@/components/ui/Button';
import SectionDivider from './SectionDivider';
import { useLanguage } from '@/lib/LanguageContext';

export default function TasksSection() {
  const { t } = useLanguage();

  return (
    <section id="tasks" className="w-full bg-aimy-background">
      <div className="max-w-[1440px] mx-auto px-6 md:px-[120px] py-20">
        <div className="mb-16">
          <SectionDivider label={t.tasks.title} className="justify-start" />
        </div>

        <div className="mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="space-y-4">
              <p className="text-body text-aimy-text-white font-guidy list-disc list-outside pl-6">
                {t.tasks.question1}
              </p>
              <p className="text-body text-aimy-text-white font-guidy list-disc list-outside pl-6">
                {t.tasks.question2}
              </p>
            </div>
            <div className="space-y-4">
              <p className="text-body text-aimy-text-white font-guidy list-disc list-outside pl-6">
                {t.tasks.question3}
              </p>
              <p className="text-body text-aimy-text-white font-guidy list-disc list-outside pl-6">
                {t.tasks.question4}
              </p>
            </div>
          </div>

          <div className="w-full bg-[#E5E5E5] rounded-[12px] p-8 mb-8" role="presentation">
            <div className="flex justify-between items-center">
              <span className="text-aimy-text-black text-body font-guidy flex-1 text-center">{t.tasks.dialog}</span>
              <span className="text-aimy-text-black text-body font-guidy flex-1 text-center">{t.tasks.ai}</span>
              <span className="text-aimy-text-black text-body font-guidy flex-1 text-center">{t.tasks.analytics}</span>
              <span className="text-aimy-text-black text-body font-guidy flex-1 text-center">{t.tasks.growth}</span>
            </div>
          </div>
        </div>

        <div className="text-center">
          <Button variant="primary" size="medium" className="rounded-[26px] text-aimy-text-white shadow-[0_4px_20px_rgba(255,255,255,0.3)]">
            {t.tasks.button}
          </Button>
        </div>
      </div>
    </section>
  );
}
