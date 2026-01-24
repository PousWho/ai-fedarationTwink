'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import Icon from '@/components/ui/Icon';
import Logo from '@/components/ui/Logo';
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

  return (
    <header className="w-full sticky top-0 z-50 bg-gradient-animated border-b border-gray-700 overflow-x-hidden">
      <div className="max-w-[1440px] mx-auto px-6 md:px-[120px] py-3">
        <div className="flex items-start justify-between gap-4">
          <div className="flex flex-col">
            <div className="mb-2">
              <Logo />
            </div>
            <nav className="hidden md:flex items-center space-x-4 lg:space-x-6 xl:space-x-8" aria-label="Основная навигация">
              <Link href="#about" className="text-small text-aimy-text-white hover:opacity-80 transition-opacity font-guidy whitespace-nowrap">
                {t.nav.about}
              </Link>
              <Link href="#features" className="text-small text-aimy-text-white hover:opacity-80 transition-opacity font-guidy whitespace-nowrap">
                {t.nav.features}
              </Link>
              <Link href="#how-it-works" className="text-small text-aimy-text-white hover:opacity-80 transition-opacity font-guidy whitespace-nowrap">
                {t.nav.howItWorks}
              </Link>
              <Link href="#pricing" className="text-small text-aimy-text-white hover:opacity-80 transition-opacity font-guidy whitespace-nowrap">
                {t.nav.pricing}
              </Link>
              <Link href="#faq" className="text-small text-aimy-text-white hover:opacity-80 transition-opacity font-guidy whitespace-nowrap">
                {t.nav.faq}
              </Link>
            </nav>
          </div>

          <div className="hidden md:flex items-center space-x-2 lg:space-x-3 xl:space-x-4 flex-shrink-0 pt-1">
            <div className="relative" ref={languageMenuRef}>
              <div 
                className="flex items-center space-x-1 lg:space-x-2 text-aimy-text-white cursor-pointer whitespace-nowrap" 
                role="button" 
                tabIndex={0} 
                aria-label="Выбор языка"
                onClick={() => setLanguageMenuOpen(!languageMenuOpen)}
              >
                <Icon name="globe" className="w-4 h-4 flex-shrink-0" />
                <span className="text-small font-guidy">{t.header.language}</span>
                <Icon name="chevron-down" className="w-3 h-3 flex-shrink-0" />
              </div>
              {languageMenuOpen && (
                <div className="absolute top-full mt-2 right-0 bg-aimy-background border border-aimy-text-white rounded-[12px] shadow-lg z-50 min-w-[120px]">
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
                      "w-full px-4 py-2 text-left text-small font-guidy transition-colors rounded-b-[12px]",
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
              onClick={(e) => {
                e.preventDefault();
                const contactSection = document.getElementById('contact');
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              {t.header.contact}
            </Button>
            <Button variant="primary" size="small" className="whitespace-nowrap text-aimy-text-white">
              {t.header.register}
            </Button>
          </div>

          <button 
            className="md:hidden p-2 text-aimy-text-white hover:opacity-80 transition-opacity"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label="Открыть меню"
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
            className="md:hidden mt-4 pb-4 border-t border-aimy-text-white border-opacity-20"
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
              <Button variant="primary" size="medium" className="w-full">
                {t.header.register}
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
