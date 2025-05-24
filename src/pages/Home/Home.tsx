import React from 'react';
import { useNavigate } from 'react-router-dom';
import PageTitle from '../../shared/components/PageTitle/PageTitle';
import config from '../../config/config';
import { useTranslation } from '../../shared/hooks/useTranslation';
import './Home.css';

const Home: React.FC = () => {
    const navigate = useNavigate();
    const { t } = useTranslation();
    
    return (
        <div className="home-content">
            <video
                className="background-video"
                autoPlay
                loop
                muted
                playsInline
            >
                <source 
                    src={config.assets.videos.background}
                    type="video/mp4" 
                />
            </video>
            
            <div className="content-overlay">
                <PageTitle 
                    logoSrc={config.assets.images.gameLogo}
                    logoAlt="Game Logo"
                    subtitle={t.home.subtitle}
                    buttonText={t.home.playButton}
                    onButtonClick={() => navigate(config.routes.downloads)}
                />
            </div>
        </div>
    );
};

export default Home;