import React from 'react';
import './FeatureCard.css';

export interface EngineFeature {
    id: string;
    title: string;
    shortDescription: string;
    detailedDescription: string;
    imageSrc: string;
    imageAlt: string;
}

interface FeatureCardProps {
    feature: EngineFeature;
    onSeeMore: () => void;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ feature, onSeeMore }) => {
    return (
        <div className="feature-card">
            <div className="feature-card-content">
                <h3 className="feature-card-title">{feature.title}</h3>
                <p className="feature-card-description">{feature.shortDescription}</p>
                <div className="feature-card-image">
                    <img src={feature.imageSrc} alt={feature.imageAlt} />
                </div>
                <button 
                    className="feature-card-button"
                    onClick={onSeeMore}
                    aria-label={`See more about ${feature.title}`}
                >
                    See more →
                </button>
            </div>
        </div>
    );
};

export default FeatureCard;
