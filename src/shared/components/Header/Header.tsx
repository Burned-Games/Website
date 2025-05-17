import React from 'react';
import './Header.css';

interface HeaderProps {
    title: string;
    subtitle: string;
    logoSrc?: string;
    logoAlt?: string;
}

const Header: React.FC<HeaderProps> = ({ title, subtitle, logoSrc, logoAlt }) => {
    return (
        <header className="game-header">
            <div className="header-content">
                {logoSrc && <img src={logoSrc} alt={logoAlt} className="header-logo" />}
                <div className="header-text">
                    <h1>{title}</h1>
                    <p>{subtitle}</p>
                </div>
            </div>
        </header>
    );
};

export default Header;