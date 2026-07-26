'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import Icon from '@/components/ui/Icon';
import Logo from '@/components/ui/Logo';
import GooeyNav from '@/components/ui/GooeyNav/GooeyNav';
import { useLanguage } from '@/lib/LanguageContext';
import { cn } from '@/lib/utils';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [languageMenuOpen, setLanguageMenuOpen] = useState(false);
  const languageMenuRef = useRef<HTMLDivElement>(null);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (languageMenuRef.current && !languageMenuRef.current.contains(event.target as Node)) {
        setLanguageMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="w-full sticky top-0 z-50 backdrop-blur-xl backdrop-saturate-150 bg-aimy-header-footer/60 border-b border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] rounded-b-3xl">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-[60px] 2xl:px-[120px] py-2">
        <div className="flex items-center justify-between gap-4 lg:gap-6">
          <div className="flex-shrink-0">
            <Logo />
          </div>

          <nav className="hidden xl:flex flex-1 items-center justify-center min-w-0" aria-label="Основная навигация">
            <GooeyNav
              items={[
                { href: '#about', label: t.nav.about },
                { href: '#features', label: t.nav.features },
                { href: '#how-it-works', label: t.nav.howItWorks },
                { href: '#pricing', label: t.nav.pricing },
                { href: '#faq', label: t.nav.faq }
              ]}
              animationTime={600}
              particleCount={15}
              timeVariance={300}
              initialActiveIndex={0}
            />
          </nav>

          <div className="hidden xl:flex items-center gap-3 2xl:gap-4 flex-shrink-0">
            <div className="relative" ref={languageMenuRef}>
              <button
                type="button"
                className="flex items-center gap-1.5 text-aimy-text-white cursor-pointer whitespace-nowrap py-2"
                aria-haspopup="listbox"
                aria-expanded={languageMenuOpen}
                aria-label="Выбор языка"
                onClick={() => setLanguageMenuOpen(!languageMenuOpen)}
              >
                <Icon name="globe" className="w-4 h-4 flex-shrink-0" />
                <span className="text-small font-guidy">{t.header.language}</span>
                <Icon name="chevron-down" className="w-3 h-3 flex-shrink-0" />
              </button>
              {languageMenuOpen && (
                <div className="absolute top-full mt-2 right-0 backdrop-blur-xl backdrop-saturate-150 bg-aimy-background/70 border border-white/20 rounded-[12px] shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] z-50 min-w-[120px] overflow-hidden">
                  <button
                    onClick={() => {
                      setLanguage('ru');
                      setLanguageMenuOpen(false);
                    }}
                    className={cn(
                      "w-full px-4 py-2 text-left text-small font-guidy transition-colors",
                      language === 'ru'
                        ? "text-aimy-accent bg-aimy-header-footer"
                        : "text-aimy-text-white hover:bg-aimy-header-footer"
                    )}
                  >
                    РУС
                  </button>
                  <button
                    onClick={() => {
                      setLanguage('en');
                      setLanguageMenuOpen(false);
                    }}
                    className={cn(
                      "w-full px-4 py-2 text-left text-small font-guidy transition-colors",
                      language === 'en'
                        ? "text-aimy-accent bg-aimy-header-footer"
                        : "text-aimy-text-white hover:bg-aimy-header-footer"
                    )}
                  >
                    ENG
                  </button>
                </div>
              )}
            </div>
            <Button
              variant="secondary"
              size="small"
              className="whitespace-nowrap text-aimy-text-white"
              onClick={scrollToContact}
            >
              {t.header.contact}
            </Button>
            <Button
              variant="primary"
              size="small"
              className="whitespace-nowrap text-aimy-text-white"
              onClick={scrollToContact}
            >
              {t.header.register}
            </Button>
          </div>

          <button
            className="xl:hidden p-2 text-aimy-text-white hover:opacity-80 transition-opacity flex-shrink-0"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label={mobileMenuOpen ? 'Закрыть меню' : 'Открыть меню'}
          >
            <Icon
              name={mobileMenuOpen ? 'close' : 'menu'}
              className="w-6 h-6"
            />
          </button>
        </div>

        {mobileMenuOpen && (
          <nav
            id="mobile-menu"
            className="xl:hidden mt-2 pb-4 border-t border-white/20"
            aria-label="Мобильная навигация"
          >
            <div className="flex flex-col space-y-4 pt-4">
              <Link href="#about" className="text-small text-aimy-text-white hover:opacity-80 transition-opacity font-guidy" onClick={() => setMobileMenuOpen(false)}>
                {t.nav.about}
              </Link>
              <Link href="#features" className="text-small text-aimy-text-white hover:opacity-80 transition-opacity font-guidy" onClick={() => setMobileMenuOpen(false)}>
                {t.nav.features}
              </Link>
              <Link href="#how-it-works" className="text-small text-aimy-text-white hover:opacity-80 transition-opacity font-guidy" onClick={() => setMobileMenuOpen(false)}>
                {t.nav.howItWorks}
              </Link>
              <Link href="#pricing" className="text-small text-aimy-text-white hover:opacity-80 transition-opacity font-guidy" onClick={() => setMobileMenuOpen(false)}>
                {t.nav.pricing}
              </Link>
              <Link href="#faq" className="text-small text-aimy-text-white hover:opacity-80 transition-opacity font-guidy" onClick={() => setMobileMenuOpen(false)}>
                {t.nav.faq}
              </Link>

              <div className="flex items-center gap-2 pt-1" role="group" aria-label="Выбор языка">
                <Icon name="globe" className="w-4 h-4 text-aimy-text-white flex-shrink-0" />
                <button
                  onClick={() => setLanguage('ru')}
                  className={cn(
                    "px-3 py-1.5 rounded-[8px] text-small font-guidy transition-colors",
                    language === 'ru' ? "text-aimy-accent bg-white/10" : "text-aimy-text-white hover:bg-white/5"
                  )}
                >
                  РУС
                </button>
                <button
                  onClick={() => setLanguage('en')}
                  className={cn(
                    "px-3 py-1.5 rounded-[8px] text-small font-guidy transition-colors",
                    language === 'en' ? "text-aimy-accent bg-white/10" : "text-aimy-text-white hover:bg-white/5"
                  )}
                >
                  ENG
                </button>
              </div>

              <Button variant="secondary" size="medium" className="w-full" onClick={scrollToContact}>
                {t.header.contact}
              </Button>
              <Button variant="primary" size="medium" className="w-full" onClick={scrollToContact}>
                {t.header.register}
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
