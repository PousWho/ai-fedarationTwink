'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import Field from '@/components/ui/Field';
import Textarea from '@/components/ui/Textarea';
import Icon from '@/components/ui/Icon';
import { useLanguage } from '@/lib/LanguageContext';

export default function ContactSection() {
  const { t } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error' | 'demo'>('idle');
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
    // Статический экспорт (GitHub Pages) — серверного /api/contact нет,
    // честно сообщаем, что в демо форма не отправляется
    if (process.env.NEXT_PUBLIC_STATIC_EXPORT === 'true') {
      setStatus('demo');
      return;
    }
    const form = e.currentTarget;
    const formData = new FormData(form);
    setIsSubmitting(true);
    setStatus('idle');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.get('name'),
          phone: formData.get('phone'),
          email: formData.get('email'),
          message: formData.get('message'),
          company: formData.get('company'),
        }),
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      setStatus('success');
      form.reset();
    } catch {
      setStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="w-full relative overflow-hidden">
      <div className="relative max-w-[1440px] mx-auto px-6 md:px-10 lg:px-[60px] xl:px-[120px] py-20">
        <div className="mb-12">
          <h2 className="text-heading text-aimy-text-white mb-4 font-bounded">
            {t.contact.title}
          </h2>
        </div>
        
        <div className="w-full max-w-[1200px] min-h-[562px] border border-aimy-text-white rounded-[12px] p-6 md:p-8 relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/9d758133354647b4de6ba7d09a4ce388f3b4d4c6.png"
              alt=""
              fill
              sizes="(max-width: 1200px) 100vw, 1200px"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-aimy-background/60" aria-hidden="true" />
          </div>
          <form className="space-y-6 relative z-10" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Field
                label={t.contact.name}
                name="name"
                type="text"
                autoComplete="name"
                maxLength={200}
                placeholder={t.contact.name}
                dark={true}
                required
              />
              <Field
                label={t.contact.phone}
                name="phone"
                type="tel"
                autoComplete="tel"
                maxLength={50}
                placeholder={t.contact.phone}
                dark={true}
                required
              />
            </div>

            <Field
              label={t.contact.email}
              name="email"
              type="email"
              autoComplete="email"
              maxLength={254}
              placeholder={t.contact.email}
              dark={true}
              required
            />

            <Textarea
              label={t.contact.question}
              name="message"
              maxLength={5000}
              placeholder={t.contact.question}
              dark={true}
              required
            />

            {/* Honeypot против ботов: скрыто от людей, автозаполняется спамерами */}
            <input
              type="text"
              name="company"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
              className="sr-only"
            />
            
            <div className="flex items-start gap-2">
              <input 
                type="checkbox" 
                id="privacy" 
                className="mt-1 w-4 h-4 accent-aimy-accent flex-shrink-0"
                required
              />
              <label htmlFor="privacy" className="text-small text-aimy-text-white font-guidy break-words">
                {t.contact.privacy} <Link href="/privacy" target="_blank" rel="noopener noreferrer" className="underline hover:opacity-80">{t.contact.privacyLink}</Link> {t.contact.privacyText}
              </label>
            </div>
            
            <div className="text-center">
              <Button variant="primary" size="medium" type="submit" disabled={isSubmitting} className="rounded-[12px]">
                {isSubmitting ? t.contact.submitting : t.contact.submit}
              </Button>
              {status === 'success' && (
                <p className="mt-4 text-small text-aimy-accent font-guidy" role="status">
                  {t.contact.success}
                </p>
              )}
              {status === 'error' && (
                <p className="mt-4 text-small text-aimy-error font-guidy" role="alert">
                  {t.contact.error}
                </p>
              )}
              {status === 'demo' && (
                <p className="mt-4 text-small text-aimy-accent font-guidy" role="status">
                  {t.contact.demoNote}
                </p>
              )}
            </div>
          </form>
        </div>

        {showScrollTop && (
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="fixed right-6 bottom-[calc(1.5rem+env(safe-area-inset-bottom))] w-12 h-12 backdrop-blur-xl backdrop-saturate-150 bg-aimy-button-primary/80 rounded-full flex items-center justify-center hover:bg-aimy-button-primary/90 transition-all z-50 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]"
            aria-label="Прокрутить наверх"
          >
            <Icon name="arrow-up" className="w-6 h-6 text-aimy-text-white" />
          </button>
        )}
      </div>
    </section>
  );
}
