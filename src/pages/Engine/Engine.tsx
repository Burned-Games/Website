import React from 'react';
import { useNavigate } from 'react-router-dom';
import PageTitle from '../../shared/components/Text/PageTitle/PageTitle';
import EngineFeaturesGrid from '../../shared/components/Cards/EngineFeatures/EngineFeaturesGrid';
import config from '../../config/config';
import assets from '../../config/assets';
import { useTranslation } from '../../shared/hooks/useTranslation';

const Engine: React.FC = () => {
    const navigate = useNavigate();
    const { t } = useTranslation();

    return (
        <div className="engine-page">
            <div className="engine-hero">
                <div className="engine-hero-overlay">
                    <PageTitle 
                        logoSrc={assets.images.coffeEngineLogo}
                        logoAlt="Coffee Engine Logo"
                        subtitle={t.engine.subtitle}
                        buttonText={t.engine.playButton}
                        onButtonClick={() => navigate(config.routes.downloads)}
                    />
                </div>
            </div>
            
            <div className="engine-content">
                <EngineFeaturesGrid />
            </div>
        </div>
    );
};

export default Engine;