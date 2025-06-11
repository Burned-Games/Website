import React from 'react';
import { useNavigate } from 'react-router-dom';
import PageTitle from '../../shared/components/Text/PageTitle/PageTitle';
import config from '../../config/config';
import assets from '../../config/assets';
import { useTranslation } from '../../shared/hooks/useTranslation';
import './Home.css';

const Home: React.FC = () => {
    const navigate = useNavigate();
    const { t } = useTranslation();
    
    return (
        <div className="home-content">
            <iframe
                className="background-video"
                src="https://www.youtube.com/embed/pNp_OPTwnTo?autoplay=1&loop=1&mute=1&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&playlist=pNp_OPTwnTo"
                title="Background Video"
                allow="autoplay; encrypted-media"
                allowFullScreen
            />
            
            <div className="content-overlay">
                <PageTitle 
                    logoSrc={assets.images.gameLogo}
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