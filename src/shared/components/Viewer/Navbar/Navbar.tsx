import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useTranslation } from '../../../hooks/useTranslation';
import './Navbar.css';
import assets from '../../../../config/assets';
import LanguageSelector from '../../Buttons/LanguageSelector/LanguageSelector';
import ThemeSelector from '../../Buttons/ThemeSelector/ThemeSelector';

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
                <img src={assets.images.logoWebp} alt={t.general.altTexts.teamLogo} />
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
                        className={isActive('/game')}
                        onClick={() => handleNavigation('/game')}
                    >
                        {t.navigation.game}
                    </button>
                    <button 
                        className={isActive('/engine')}
                        onClick={() => handleNavigation('/engine')}
                    >
                        {t.navigation.engine}
                    </button>
                    <button 
                        className={isActive('/media')}
                        onClick={() => handleNavigation('/media')}
                    >
                        {t.navigation.media}
                    </button>
                    <button 
                        className={isActive('/about')}
                        onClick={() => handleNavigation('/about')}
                    >
                        {t.navigation.about}
                    </button>
                    <button 
                        className={isActive('/downloads')}
                        onClick={() => handleNavigation('/downloads')}
                    >
                        {t.navigation.downloads}
                    </button>
                </div>
                <ThemeSelector />
                <LanguageSelector />
            </div>
        </nav>
    );
};

export default Navbar;