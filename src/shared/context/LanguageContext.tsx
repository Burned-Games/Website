import React, { createContext, useState, useEffect } from 'react';
import type { TranslationType } from '../types/translations';
import { data } from '../../config/data';

interface LanguageContextType {
    texts: TranslationType;
    language: string;
    setLanguage: (lang: string) => void;
}

const defaultTranslations: TranslationType = {
    navigation: {
        home: 'Home',
        about: 'About',
        downloads: 'Downloads',
        media: 'Media',
        game: 'Game',
        engine: 'Engine'
    },
    general: {
        company: 'Burned Games',
        loading: 'Loading...',
        close: 'Close',
        back: 'Back',
        altTexts: {
            teamLogo: 'Team Logo',
            gameLogo: 'Game Logo',
            defaultAvatar: 'Default Avatar'
        }
    },
    home: {
        title: 'Warhammer 40.000',
        subtitle: 'The Last Marine',
        description: '',
        playButton: 'Play Now'
    },
    about: {
        title: 'About',
        subtitle: 'Our Team',
        description: '',
        team: {
            title: 'Team',
            subtitle: 'Meet our developers'
        }
    },
    downloads: {
        title: 'Downloads',
        subtitle: 'Get the Game',
        description: '',
        platforms: {
            windows: 'Windows',
            linux: 'Linux'
        },
        systemSpecs: {
            os: 'OS',
            processor: 'Processor',
            memory: 'Memory',
            graphics: 'Graphics',
            storage: 'Storage'
        },
        downloadButton: 'Download',
        buttons: {
            download: 'Download',
            viewOnGithub: 'View on GitHub'
        }
    },
    media: {
        title: 'Media',
        subtitle: 'Screenshots and Videos',
        gallery: {
            characters: 'Characters',
            environments: 'Environments'
        }
    },
    game: {
        title: 'Game',
        subtitle: 'Warhammer 40.000: The Last Marine',
        description: '',
        features: {
            title: 'Features',
            items: []
        }
    },
    engine: {
        title: 'Game',
        subtitle: 'Warhammer 40.000: The Last Marine',
        description: '',
        playButton: 'Play Now',
        features: {
            title: 'Features',
            items: []
        }
    },
    footer: {
        copyright: '© 2024 Burned Games',
        rights: 'All rights reserved'
    },
    errors: {
        notFound: 'Page not found',
        general: 'An error occurred'
    }
};

export const LanguageContext = createContext<LanguageContextType>({
    texts: defaultTranslations,
    language: 'en',
    setLanguage: () => {}
});

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [language, setLanguage] = useState('en');
    const [texts, setTexts] = useState<TranslationType>(defaultTranslations);

    useEffect(() => {
        const loadTranslations = async () => {
            try {
                const translationUrl = data.translations(language);
                console.log('Loading translations from:', translationUrl);
                
                const response = await fetch(translationUrl);
                
                if (!response.ok) {
                    console.warn(`Translation file not found for language: ${language}. Status: ${response.status}`);
                    setTexts(defaultTranslations);
                    return;
                }

                const translations = await response.json();
                console.log('Loaded translations:', translations);
                
                // Verificar que las traducciones tienen la estructura esperada
                if (translations && typeof translations === 'object') {
                    setTexts(translations);
                } else {
                    console.warn('Invalid translation structure');
                    setTexts(defaultTranslations);
                }
            } catch (error) {
                console.error('Error loading translations:', error);
                setTexts(defaultTranslations);
            }
        };

        loadTranslations();
    }, [language]);

    const value: LanguageContextType = {
        texts,
        language,
        setLanguage
    };

    return (
        <LanguageContext.Provider value={value}>
            {children}
        </LanguageContext.Provider>
    );
};