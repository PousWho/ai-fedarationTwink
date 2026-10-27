'use client';

import React, { createContext, useContext, useSyncExternalStore } from 'react';
import { Language, translations } from './translations';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (typeof translations)[Language];
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

function subscribeToLanguage(onChange: () => void) {
  window.addEventListener('storage', onChange);
  return () => window.removeEventListener('storage', onChange);
}

function getLanguage(): Language {
  return localStorage.getItem('language') === 'en' ? 'en' : 'ru';
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const language = useSyncExternalStore(subscribeToLanguage, getLanguage, () => 'ru' as Language);

  const setLanguage = (lang: Language) => {
    localStorage.setItem('language', lang);
    window.dispatchEvent(new StorageEvent('storage', { key: 'language', newValue: lang }));
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t: translations[language] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
