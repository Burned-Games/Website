import React from 'react';
import './PageTitle.css';

interface PageTitleProps {
    title: string;
    subtitle?: string;
    buttonText?: string;
    onButtonClick?: () => void;
    logoSrc?: string;
    logoAlt?: string;
}

const PageTitle: React.FC<PageTitleProps> = ({ 
    title, 
    subtitle, 
    buttonText, 
    onButtonClick,
    logoSrc,
    logoAlt = 'Logo'
}) => {
    return (
        <div className="page-title-container">
            <div className="page-title-content">
                {logoSrc && (
                    <div className="page-title-logo">
                        <img src={logoSrc} alt={logoAlt} />
                    </div>
                )}
                <h1 className="page-title">{title}</h1>
                {subtitle && <p className="page-subtitle">{subtitle}</p>}
                {buttonText && onButtonClick && (
                    <button 
                        className="page-title-button"
                        onClick={onButtonClick}
                    >
                        {buttonText}
                    </button>
                )}
            </div>
        </div>
    );
};

export default PageTitle;