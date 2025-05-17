import React from 'react';
import './Base.css';
import Navbar from '../shared/components/Navbar/Navbar';
import Header from '../shared/components/Header/Header';

interface BaseProps {
    children: React.ReactNode;
    headerProps?: {
        title: string;
        subtitle: string;
        logoSrc?: string;
        logoAlt?: string;
    };
    hideHeader?: boolean;
}

const Base: React.FC<BaseProps> = ({ children, headerProps, hideHeader = false }) => {
    return (
        <div className="base">
            <nav className="base-nav">
                <Navbar />
            </nav>
            
            <div className="base-container">
                {!hideHeader && headerProps && (
                    <header className="base-header">
                        <Header 
                            title={headerProps.title}
                            subtitle={headerProps.subtitle}
                            logoSrc={headerProps.logoSrc}
                            logoAlt={headerProps.logoAlt}
                        />
                    </header>
                )}
                
                <main className="base-content">
                    {children}
                </main>
                
                <footer className="base-footer">
                    <p>&copy; 2025 Burned Games - Warhammer 40.000: The Last Marine</p>
                </footer>
            </div>
        </div>
    );
};

export default Base;