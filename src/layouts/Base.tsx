import React from 'react';
import '../styles/layout_theme.css';
import './Base.css';
import Navbar from '../shared/components/Navbar/Navbar';

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
                <p className="base-footer-text">
                    &copy; 2025 Burned Games - All rights reserved
                </p>
            </footer>
        </div>
    );
};

export default Base;