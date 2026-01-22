'use client';

import Link from 'next/link';
import Logo from '@/components/ui/Logo';
import TelegramIcon from '@/components/ui/TelegramIcon';
import { useLanguage } from '@/lib/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();
  const taglineLines = t.footer.tagline.split('\n');

  return (
    <footer className="w-full bg-gradient-animated border-t border-aimy-text-white border-opacity-20">
      <div className="max-w-[1440px] mx-auto px-6 md:px-[120px] py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1">
            <div className="mb-4">
              <Logo />
            </div>
            <p className="text-small text-aimy-text-white leading-relaxed opacity-80 font-guidy">
              {taglineLines[0]}<br />
              {taglineLines[1]}
            </p>
          </div>

          <nav aria-label="Основные разделы">
            <ul className="space-y-2">
              <li>
                <Link href="#about" className="text-small text-aimy-text-white hover:opacity-80 transition-opacity font-guidy">
                  {t.nav.about}
                </Link>
              </li>
              <li>
                <Link href="#features" className="text-small text-aimy-text-white hover:opacity-80 transition-opacity font-guidy">
                  {t.nav.features}
                </Link>
              </li>
              <li>
                <Link href="#how-it-works" className="text-small text-aimy-text-white hover:opacity-80 transition-opacity font-guidy">
                  {t.nav.howItWorks}
                </Link>
              </li>
              <li>
                <Link href="#pricing" className="text-small text-aimy-text-white hover:opacity-80 transition-opacity font-guidy">
                  {t.nav.pricing}
                </Link>
              </li>
              <li>
                <Link href="#faq" className="text-small text-aimy-text-white hover:opacity-80 transition-opacity font-guidy">
                  {t.nav.faq}
                </Link>
              </li>
            </ul>
          </nav>

          <nav aria-label="Юридическая информация">
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-small text-aimy-text-white hover:opacity-80 transition-opacity font-guidy">
                  {t.footer.legal1}
                </Link>
              </li>
              <li>
                <Link href="#" className="text-small text-aimy-text-white hover:opacity-80 transition-opacity font-guidy">
                  {t.footer.legal2}
                </Link>
              </li>
            </ul>
          </nav>

          <div>
            <h4 className="text-aimy-text-white text-subheading mb-4 font-bounded">{t.footer.social}</h4>
            <div className="flex items-center space-x-4">
              <Link 
                href="#" 
                className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:opacity-80 transition-opacity shadow-lg"
                aria-label="Telegram"
              >
                <TelegramIcon className="w-6 h-6 text-aimy-header-footer" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
