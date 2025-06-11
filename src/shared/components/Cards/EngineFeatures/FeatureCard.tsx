import React from 'react';
import './FeatureCard.css';

export interface EngineFeature {
    id: string;
    title: string;
    shortDescription: string;
    imageSrc: string;
    imageAlt: string;
}

interface FeatureCardProps {
    feature: EngineFeature;
}

const FeatureCard: React.FC<FeatureCardProps & { children?: React.ReactNode }> = ({ feature, children }) => {
    return (
        <div className="feature-card">
            <div className="feature-card-content">
                <h3 className="feature-card-title">{feature.title}</h3>
                <p className="feature-card-description">{feature.shortDescription}</p>
                {feature.imageSrc && (
                  <div className="feature-card-image">
                    <img src={feature.imageSrc} alt={feature.imageAlt} />
                  </div>
                )}
                {children}
            </div>
        </div>
    );
};

export default FeatureCard;
