import React, { useState, useEffect } from 'react';
import { useTranslation } from '../hooks/useTranslation';
import '../../styles/layout_theme.css'; // Actualizado path
import './Base.css';
import Navbar from '../components/Viewer/Navbar/Navbar';
import assets from '../../config/assets';

interface BaseLayoutProps {
    children: React.ReactNode;
    headerProps?: {
        title: string;
        subtitle: string;
        logoSrc?: string;
        logoAlt?: string;
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
    const [isMobile, setIsMobile] = useState(false);
    const [isSmallMobile, setIsSmallMobile] = useState(false);
    
    useEffect(() => {
        const checkMobile = () => {
            const width = window.innerWidth;
            const userAgent = /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
            
            setIsMobile(width <= 768 || userAgent);
            setIsSmallMobile(width <= 500);
        };
        
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    return (
        <div 
            className={`base ${isMobile ? 'mobile-optimized' : ''} ${className || ''}`}
            style={{
                '--global-background': `url(${isSmallMobile ? assets.images.gameBackgroundMobile : assets.images.gameBackground})`
            } as React.CSSProperties}
        >
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