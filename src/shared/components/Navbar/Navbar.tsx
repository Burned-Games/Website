import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useTranslation } from '../../hooks/useTranslation';
import './Navbar.css';
import logo from '../../images/logo.webp';
import LanguageSelector from '../LanguageSelector/LanguageSelector';

const Navbar: React.FC = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { t } = useTranslation();

    const handleNavigation = (path: string) => {
        navigate(path);
        setIsMenuOpen(false);
    };

    const isActive = (path: string) => {
        return location.pathname === path ? 'nav-button active' : 'nav-button';
    };

    return (
        <nav className="navbar">
            <div 
                className="navbar-logo"
                onClick={() => handleNavigation('/')}
                role="button"
                tabIndex={0}
                style={{ cursor: 'pointer' }}
                onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                        handleNavigation('/')
                    }
                }}
            >
                <img src={logo} alt={t.general.altTexts.teamLogo} />
                <span className="company-name">{t.general.company}</span>
            </div>
            
            <div className="navbar-content">
                <button 
                    className={`menu-toggle ${isMenuOpen ? 'open' : ''}`}
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Toggle menu"
                >
                    <span className="arrow"></span>
                </button>

                <div className={`navbar-links ${isMenuOpen ? 'open' : ''}`}>
                    <button 
                        className={isActive('/')}
                        onClick={() => handleNavigation('/')}
                    >
                        {t.navigation.home}
                    </button>
                    <button 
                        className={isActive('/about')}
                        onClick={() => handleNavigation('/about')}
                    >
                        {t.navigation.about}
                    </button>
                    <button 
                        className={isActive('/game')}
                        onClick={() => handleNavigation('/game')}
                    >
                        {t.navigation.game}
                    </button>
                    <button 
                        className={isActive('/media')}
                        onClick={() => handleNavigation('/media')}
                    >
                        {t.navigation.media}
                    </button>
                    <button 
                        className={isActive('/downloads')}
                        onClick={() => handleNavigation('/downloads')}
                    >
                        {t.navigation.downloads}
                    </button>
                </div>
                <LanguageSelector />
            </div>
        </nav>
    );
};

export default Navbar;