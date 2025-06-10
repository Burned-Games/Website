import React from 'react';
import './CloseButton.css';

interface CloseButtonProps {
    onClick: () => void;
    size?: 'sm' | 'md' | 'lg';
    variant?: 'default' | 'minimal' | 'filled';
    className?: string;
    ariaLabel?: string;
    disabled?: boolean;
}

const CloseButton: React.FC<CloseButtonProps> = ({
    onClick,
    size = 'md',
    variant = 'default',
    className = '',
    ariaLabel = 'Close',
    disabled = false
}) => {
    return (
        <button
            className={`close-button close-button--${size} close-button--${variant} ${className}`}
            onClick={onClick}
            disabled={disabled}
            aria-label={ariaLabel}
            type="button"
        >
            <svg
                viewBox="0 0 24 24"
                width="24"
                height="24"
                stroke="currentColor"
                fill="none"
                className="close-button__icon"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                />
            </svg>
        </button>
    );
};

export default CloseButton;