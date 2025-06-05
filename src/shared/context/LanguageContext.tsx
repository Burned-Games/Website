import React, { createContext, useState, useEffect } from 'react';
import type { TranslationType } from '../types/translations';
import { config } from '../../config/paths';

interface LanguageContextType {
    texts: TranslationType;
    language: string;
    setLanguage: (lang: string) => void;
    isLoading: boolean;
}

const defaultTranslations: TranslationType = {
    navigation: {
        home: 'Home',
        about: 'About',
        downloads: 'Downloads',
        media: 'Media',
        game: 'Game'
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
    setLanguage: () => {},
    isLoading: true
});

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [language, setLanguage] = useState('en');
    const [texts, setTexts] = useState<TranslationType>(defaultTranslations);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const loadTranslations = async () => {
            setIsLoading(true);
            try {
                const response = await fetch(`${config.basePath}/data/text/text_${language}.json`);
                if (!response.ok) {
                    throw new Error(`Failed to load translations for ${language}`);
                }
                const translations = await response.json();
                setTexts(translations);
            } catch (error) {
                console.error('Error loading translations:', error);
               
                setTexts(defaultTranslations);
            } finally {
                setIsLoading(false);
            }
        };

        loadTranslations();
    }, [language]);

    const value: LanguageContextType = {
        texts,
        language,
        setLanguage,
        isLoading
    };

    return (
        <LanguageContext.Provider value={value}>
            {children}
        </LanguageContext.Provider>
    );
};