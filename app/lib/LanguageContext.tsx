'use client';

import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from 'react';
import {
  LanguageCode,
  LANGUAGES,
  Translation,
  translations,
} from './translations';

interface LanguageContextType {
  language: LanguageCode;
  setLanguage: (code: LanguageCode) => void;
  t: Translation;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<LanguageCode>('en');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const stored = localStorage.getItem('site.language') as LanguageCode | null;
    if (stored && LANGUAGES.some((l) => l.code === stored)) {
      setLanguageState(stored);
      document.documentElement.setAttribute('lang', stored);
    }
  }, []);

  const setLanguage = (code: LanguageCode) => {
    setLanguageState(code);
    localStorage.setItem('site.language', code);
    document.documentElement.setAttribute('lang', code);
  };

  const t = translations[language];

  // Prevent hydration mismatch by using default language until mounted
  if (!mounted) {
    return (
      <LanguageContext.Provider
        value={{ language: 'en', setLanguage, t: translations.en }}
      >
        {children}
      </LanguageContext.Provider>
    );
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
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
