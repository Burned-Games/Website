import React from 'react';
import { useNavigate } from 'react-router-dom';
import PageTitle from '../../shared/components/Text/PageTitle/PageTitle';
import config from '../../config/config';
import assets from '../../config/assets';
import { useTranslation } from '../../shared/hooks/useTranslation';

const Engine: React.FC = () => {
    const navigate = useNavigate();
    const { t } = useTranslation();

    return (
        <div className="home-content">
            <div className="content-overlay">
                <PageTitle 
                    logoSrc={assets.images.coffeEngineLogo}
                    logoAlt="Game Logo"
                    subtitle={t.engine.subtitle}
                    buttonText={t.engine.playButton}
                    onButtonClick={() => navigate(config.routes.downloads)}
                />
            </div>
        </div>
    );
};

export default Engine;