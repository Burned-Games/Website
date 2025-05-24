import React, { createContext, useContext, useState } from 'react';
import english from '../data/text/text_english.json';
import spanish from '../data/text/text_spanish.json';
import catalan from '../data/text/text_catalan.json';

// Define the complete type structure matching your JSON
type TranslationType = {
    navigation: {
        home: string;
        about: string;
        downloads: string;
        media: string;
        game: string;
    };
    general: {
        company: string;
        loading: string;
        close: string;
        back: string;
        altTexts: {
            teamLogo: string;
            gameLogo: string;
            defaultAvatar: string;
        };
    };
    home: {
        subtitle: string;
        playButton: string;
    };
    about: {
        title: string;
        subtitle: string;
        teamSection: {
            title: string;
            allTeams: string;
            filters: {
                allDepartments: string;
                allMembers: string;
            };
        };
    };
    downloads: {
        title: string;
        subtitle: string;
        platforms: {
            windows: string;
            linux: string;
        };
        systemSpecs: {
            title: string;
            os: string;
            processor: string;
            memory: string;
            graphics: string;
            storage: string;
        };
        downloadButton: string;
    };
    media: {
        title: string;
        subtitle: string;
        sections: {
            characters: {
                title: string;
                subtitle: string;
            };
            environments: {
                title: string;
                subtitle: string;
            };
        };
        gallery: {
            previous: string;
            next: string;
            close: string;
            openFullscreen: string;
        };
    };
    game: {
        title: string;
        subtitle: string;
        loading: string;
    };
    memberInfo: {
        sections: {
            about: string;
            skills: string;
            portfolio: string;
        };
        social: {
            github: string;
            linkedin: string;
            portfolio: string;
        };
    };
    components: {
        header: {
            backToHome: string;
        };
        gallery: {
            viewLarger: string;
            loadingError: string;
            noImages: string;
        };
        table: {
            noData: string;
            loading: string;
        };
    };
    footer: {
        copyright: string;
        links: {
            privacy: string;
            terms: string;
            contact: string;
        };
    };
    errors: {
        general: string;
        notFound: string;
        loading: string;
        tryAgain: string;
    };
};

type LanguageContextType = {
    texts: TranslationType;
    language: string;
    setLanguage: (lang: string) => void;
};

const translations: Record<string, TranslationType> = {
    en: english as unknown as TranslationType,
    es: spanish as unknown as TranslationType,
    ca: catalan as unknown as TranslationType
};

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