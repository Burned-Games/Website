import React from 'react';
import { useTranslation } from '../hooks/useTranslation';
import '../../styles/layout_theme.css'; // Actualizado path
import './Base.css';
import Navbar from '../components/Viewer/Navbar/Navbar';

interface BaseLayoutProps {
    children: React.ReactNode;
    headerProps?: {
        title: string;
        subtitle: string;
        logoSrc: string;
        logoAlt: string;
    };
    hideHeader?: boolean;
    className?: string;
}

const Base: React.FC<BaseLayoutProps> = ({
    children,
    headerProps,
    hideHeader = false,
    className
}) => {
    const { t } = useTranslation();

    return (
        <div className={`base ${className || ''}`}>
            <nav className="base-nav">
                <Navbar />
            </nav>
            
            <main className="base-content">
                {!hideHeader && headerProps && (
                    <header className="base-header">
                        <h1>{headerProps.title}</h1>
                        <p>{headerProps.subtitle}</p>
                    </header>
                )}
                {children}
            </main>
            
            <footer className="base-footer">
                <p className="base-footer-text">{t.footer.copyright}</p>
            </footer>
        </div>
    );
};

export default Base;