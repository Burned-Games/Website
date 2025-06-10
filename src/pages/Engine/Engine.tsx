import React from 'react';
import EngineFeaturesGrid from '../../shared/components/Cards/EngineFeatures/EngineFeaturesGrid';
import EngineHero from './EngineHero';
import assets from '../../config/assets';
import ImageComparisonSlider from '../../shared/components/ImageComparisonSlider';
import EngineSection from './EngineSection';

const Engine: React.FC = () => {

    return (
        <div className="engine-page">
            <div className="engine-hero">
                <EngineHero />
            </div>
            <div className="engine-content">
                <EngineFeaturesGrid />
                <EngineSection
                    title="Docs"
                    description="Explore the official Coffee Engine documentation to get started, find guides, and learn about all available features."
                    background="var(--color-background-secondary)"
                    buttonText="Docs"
                    onButtonClick={() => window.open('https://burned-games.github.io/Coffee-Engine/', '_blank')}
                />
                <EngineSection
                    title="Github"
                    description="Visit the Coffee Engine GitHub repository to view the source code."
                    background="var(--color-background-primary)"
                    buttonText="Github"
                    onButtonClick={() => window.open('https://github.com/Burned-Games/Coffee-Engine', '_blank')}
                />
            </div>
        </div>
    );
};

export default Engine;