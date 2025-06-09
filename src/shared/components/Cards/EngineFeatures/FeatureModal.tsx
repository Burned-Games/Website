import React, { useEffect } from 'react';
import { EngineFeature } from './FeatureCard';
import './FeatureModal.css';

interface FeatureModalProps {
    feature: EngineFeature | null;
    isOpen: boolean;
    onClose: () => void;
}

const FeatureModal: React.FC<FeatureModalProps> = ({ feature, isOpen, onClose }) => {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    // Function to process markdown-like text
    const processMarkdown = (text: string): string => {
        if (!text) return '';
        
        return text
            // Convert **text** to <strong>text</strong>
            .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
            // Convert *text* to <em>text</em>
            .replace(/\*(.*?)\*/g, '<em>$1</em>')
            // Convert `code` to <code>code</code>
            .replace(/`(.*?)`/g, '<code>$1</code>')
            // Convert ![alt text](url) to <img alt="alt text" src="url" />
            .replace(/!\[(.*?)\]\((.*?)\)/g, '<img alt="$1" src="$2" style="max-width: 100%; height: auto; border-radius: var(--border-radius-md); margin: 1rem 0;" />')
            // Convert # Header to <h1>Header</h1>
            .replace(/^# (.*$)/gm, '<h1>$1</h1>')
            // Convert ## Header to <h2>Header</h2>
            .replace(/^## (.*$)/gm, '<h2>$1</h2>')
            // Convert ### Header to <h3>Header</h3>
            .replace(/^### (.*$)/gm, '<h3>$1</h3>')
            // Convert line breaks to paragraphs
            .split('\n\n')
            .map(paragraph => {
                const trimmed = paragraph.trim();
                if (trimmed.length === 0) return '';
                // Don't wrap in <p> if it's already a header or image
                if (trimmed.startsWith('<h') || trimmed.startsWith('<ul') || trimmed.startsWith('<ol') || trimmed.startsWith('<img')) {
                    return trimmed.replace(/\n/g, '<br>');
                }
                return `<p>${trimmed.replace(/\n/g, '<br>')}</p>`;
            })
            .filter(paragraph => paragraph.length > 0)
            .join('');
    };

    if (!isOpen || !feature) {
        return null;
    }

    return (
        <div className="feature-modal-overlay" onClick={onClose}>
            <div 
                className="feature-modal-content" 
                onClick={(e) => e.stopPropagation()}
            >
                <div className="feature-modal-header">
                    <div className="feature-modal-title-section">
                        <h2 className="feature-modal-title">{feature.title}</h2>
                        <p className="feature-modal-short-desc">{feature.shortDescription}</p>
                    </div>
                    <button 
                        className="feature-modal-close"
                        onClick={onClose}
                        aria-label="Close modal"
                    >
                        <svg 
                            viewBox="0 0 24 24" 
                            width="24" 
                            height="24" 
                            stroke="currentColor" 
                            fill="none"
                        >
                            <path 
                                strokeLinecap="round" 
                                strokeLinejoin="round" 
                                strokeWidth={2} 
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </button>
                </div>
                
                <div className="feature-modal-body">
                    <div 
                        className="feature-modal-description"
                        dangerouslySetInnerHTML={{ 
                            __html: processMarkdown(feature.detailedDescription) 
                        }}
                    />
                </div>
            </div>
        </div>
    );
};

export default FeatureModal;
