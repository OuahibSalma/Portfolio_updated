
import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { translations } from '../localization/translations';

type Language = 'fr' | 'en';

type LanguageContextType = {
  language: Language;
  t: (key: string) => string;
  changeLanguage: (lang: Language) => void;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>(() => {
    const savedLanguage = localStorage.getItem('language');
    return (savedLanguage === 'en' ? 'en' : 'fr'); // Default to French
  });

  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  const t = (key: string): string => {
    // Get translations for current language
    const translationObj = translations[language];
    
    // Split the key by dots to allow nested keys like 'navbar.home'
    const keys = key.split('.');
    let result = translationObj;
    
    for (const k of keys) {
      // @ts-ignore: Necessary for dynamic key access
      if (result && result[k]) {
        // @ts-ignore: Necessary for dynamic key access
        result = result[k];
      } else {
        console.warn(`Translation key not found: ${key} for language: ${language}`);
        return key; // Return the key if translation not found
      }
    }
    
    return typeof result === 'string' ? result : key;
  };

  const changeLanguage = (lang: Language) => {
    setLanguage(lang);
  };

  return (
    <LanguageContext.Provider value={{ language, t, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
