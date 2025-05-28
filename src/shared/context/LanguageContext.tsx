import React, { createContext, useContext, useState } from 'react';
import type { TranslationType } from '../types/translations';
import english from '../data/text/text_english.json';
import spanish from '../data/text/text_spanish.json';
import catalan from '../data/text/text_catalan.json';

const translations: Record<string, TranslationType> = {
    en: english as unknown as TranslationType,
    es: spanish as unknown as TranslationType,
    ca: catalan as unknown as TranslationType
};

interface LanguageContextType {
    texts: TranslationType;
    language: string;
    setLanguage: (lang: string) => void;
}

export const LanguageContext = createContext<LanguageContextType>({
    texts: english as unknown as TranslationType,
    language: 'en',
    setLanguage: () => {}
});

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [language, setLanguage] = useState('en');

    const value: LanguageContextType = {
        texts: translations[language],
        language,
        setLanguage
    };

    return (
        <LanguageContext.Provider value={value}>
            {children}
        </LanguageContext.Provider>
    );
};