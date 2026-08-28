'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

export type Language = 'en' | 'es';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextType>({
  language: 'en',
  setLanguage: () => {},
  toggleLanguage: () => {},
});

export function LanguageProvider({ 
  children,
  initialLanguage,
}: { 
  children: React.ReactNode;
  initialLanguage?: Language;
}) {
  const pathname = usePathname();
  const isSpanishPath = pathname?.startsWith('/es') ?? false;
  const derivedLang: Language = initialLanguage || (isSpanishPath ? 'es' : 'en');
  
  const [language, setLanguageState] = useState<Language>(derivedLang);

  useEffect(() => {
    const isEs = pathname?.startsWith('/es') ?? false;
    if (isEs) {
      setLanguageState('es');
    } else {
      setLanguageState('en');
    }
    if (typeof document !== 'undefined') {
      document.documentElement.lang = isEs ? 'es' : 'en';
    }
  }, [pathname]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
  };

  const toggleLanguage = () => {
    const next = language === 'en' ? 'es' : 'en';
    setLanguage(next);
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
