'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Button from '@/components/ui/Button';
import Field from '@/components/ui/Field';
import Textarea from '@/components/ui/Textarea';
import Icon from '@/components/ui/Icon';
import { useLanguage } from '@/lib/LanguageContext';

export default function ContactSection() {
  const { t } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    // TODO: Implement form submission
    setTimeout(() => setIsSubmitting(false), 1000);
  };

  return (
    <section id="contact" className="w-full bg-aimy-background relative overflow-hidden">
      <div className="relative max-w-[1440px] mx-auto px-6 md:px-[120px] py-20">
        <div className="mb-12">
          <h2 className="text-heading text-aimy-text-white mb-4 font-bounded">
            {t.contact.title}
          </h2>
        </div>
        
        <div className="w-[1200px] h-[562px] border border-aimy-text-white rounded-[12px] p-8 relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/9d758133354647b4de6ba7d09a4ce388f3b4d4c6.png"
              alt=""
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-aimy-background/60" aria-hidden="true" />
          </div>
          <form className="space-y-6 relative z-10" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Field 
                label={t.contact.name} 
                type="text" 
                placeholder={t.contact.name} 
                dark={true}
                required
              />
              <Field 
                label={t.contact.phone} 
                type="tel" 
                placeholder={t.contact.phone} 
                dark={true}
                required
              />
            </div>
            
            <Field 
              label={t.contact.email} 
              type="email" 
              placeholder={t.contact.email} 
              dark={true}
              required
            />
            
            <Textarea
              label={t.contact.question}
              placeholder={t.contact.question}
              dark={true}
              required
            />
            
            <div className="flex items-start">
              <input 
                type="checkbox" 
                id="privacy" 
                className="mt-1 mr-2 w-4 h-4 accent-aimy-accent"
                required
              />
              <label htmlFor="privacy" className="text-small text-aimy-text-white font-guidy">
                {t.contact.privacy} <a href="#" className="underline hover:opacity-80">{t.contact.privacyLink}</a> {t.contact.privacyText}
              </label>
            </div>
            
            <div className="text-center">
              <Button variant="primary" size="medium" type="submit" disabled={isSubmitting} className="rounded-[12px]">
                {isSubmitting ? t.contact.submitting : t.contact.submit}
              </Button>
            </div>
          </form>
        </div>

        {showScrollTop && (
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="fixed bottom-8 right-8 w-12 h-12 bg-aimy-button-primary rounded-full flex items-center justify-center hover:bg-aimy-button-primary-hover transition-all z-50 shadow-lg"
            aria-label="Прокрутить наверх"
          >
            <Icon name="arrow-up" className="w-6 h-6 text-aimy-text-white" />
          </button>
        )}
      </div>
    </section>
  );
}
