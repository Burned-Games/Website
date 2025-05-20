import React from 'react';
import { useNavigate } from 'react-router-dom';
import PageTitle from '../../shared/components/PageTitle/PageTitle';
import config from '../../config/config';
import './Home.css';

const Home: React.FC = () => {
    const navigate = useNavigate();

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
                    subtitle="Page & Game in development"
                    buttonText="Play Now"
                    onButtonClick={() => navigate(config.routes.downloads)}
                />
            </div>
        </div>
    );
};

export default Home;