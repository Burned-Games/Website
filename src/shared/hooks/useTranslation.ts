import { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext';

export const useTranslation = () => {
    const { texts, language, setLanguage } = useContext(LanguageContext);
    return { t: texts, language, setLanguage };
};