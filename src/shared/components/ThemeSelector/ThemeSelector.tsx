import React from 'react';
import { useTheme } from '../../../providers/ThemeProvider';
import './ThemeSelector.css';

const ThemeSelector: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

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