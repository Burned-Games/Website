import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './Navbar.css';
import logo from '../../images/logo.webp';

const Navbar: React.FC = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

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
                <img src={logo} alt="Team Logo" />
                <span className="company-name">Burned Games</span>
            </div>
            
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
                    Home
                </button>
                {/* <button 
                    className={isActive('/game')}
                    onClick={() => handleNavigation('/game')}
                >
                    Game
                </button>
                <button 
                    className={isActive('/media')}
                    onClick={() => handleNavigation('/media')}
                >
                    Media
                </button>
                <button 
                    className={isActive('/about')}
                    onClick={() => handleNavigation('/about')}
                >
                    About Us
                </button> */}
                <button 
                    className={isActive('/downloads')}
                    onClick={() => handleNavigation('/downloads')}
                >
                    Downloads
                </button>
            </div>
        </nav>
    );
};

export default Navbar;