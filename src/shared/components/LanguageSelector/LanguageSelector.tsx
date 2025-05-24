import React, { useState, useRef, useEffect } from 'react';
import { useTranslation } from '../../hooks/useTranslation';
import './LanguageSelector.css';

const LanguageSelector: React.FC = () => {
    const { language, setLanguage } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const languages = {
        en: { code: 'EN', name: 'English' },
        es: { code: 'ES', name: 'Español' },
        ca: { code: 'CA', name: 'Català' }
    };

    // Cerrar el dropdown cuando se hace clic fuera
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleLanguageSelect = (lang: string) => {
        setLanguage(lang);
        setIsOpen(false);
    };

    return (
        <div className="language-selector" ref={dropdownRef}>
            <button 
                className="language-button"
                onClick={() => setIsOpen(!isOpen)}
                aria-expanded={isOpen}
            >
                <span className="material-icons">translate</span>
                <span>{languages[language as keyof typeof languages].code}</span>
            </button>
            
            {isOpen && (
                <div className="language-dropdown" role="menu">
                    {Object.entries(languages).map(([code, { name }]) => (
                        <button
                            key={code}
                            className={`dropdown-item ${language === code ? 'active' : ''}`}
                            onClick={() => handleLanguageSelect(code)}
                            role="menuitem"
                        >
                            {name}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
};

export default LanguageSelector;