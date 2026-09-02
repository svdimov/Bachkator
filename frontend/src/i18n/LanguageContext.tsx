import { createContext, useContext, useState, useCallback, type ReactNode } from 'react';
import { translations, type Lang, type Translation } from './translations';

interface LanguageContextValue {
  lang: Lang;
  t: Translation;
  setLang: (lang: Lang) => void;
  toggleLang: () => void;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(() => {
    if (typeof window !== 'undefined') {
      const saved = window.localStorage.getItem('lang');
      if (saved === 'bg' || saved === 'en') return saved;
    }
    return 'bg';
  });

  const handleSetLang = useCallback((newLang: Lang) => {
    setLang(newLang);
    if (typeof window !== 'undefined') {
      window.localStorage.setItem('lang', newLang);
    }
  }, []);

  const toggleLang = useCallback(() => {
    handleSetLang(lang === 'bg' ? 'en' : 'bg');
  }, [lang, handleSetLang]);

  return (
    <LanguageContext.Provider value={{ lang, t: translations[lang], setLang: handleSetLang, toggleLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLang must be used within LanguageProvider');
  return ctx;
}
