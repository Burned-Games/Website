import React from 'react';
import './ThemeSelector.css';

const ThemeSelector: React.FC = () => {
    const [theme, setTheme] = React.useState(() => 
        document.documentElement.getAttribute('data-theme') || 'dark'
    );

    const toggleTheme = () => {
        const newTheme = theme === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', newTheme);
        setTheme(newTheme);
    };

    return (
        <div className="theme-selector">
            <button 
                className="theme-button"
                onClick={toggleTheme}
                aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            >
                <span className="material-icons">
                    {theme === 'dark' ? 'light_mode' : 'dark_mode'}
                </span>
            </button>
        </div>
    );
};

export default ThemeSelector;