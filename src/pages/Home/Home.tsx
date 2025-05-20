import React from 'react';
import { useNavigate } from 'react-router-dom';
import PageTitle from '../../shared/components/PageTitle/PageTitle';
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
                    src={`${process.env.PUBLIC_URL}/videos/background.mp4`} 
                    type="video/mp4" 
                />
            </video>
            
            <div className="content-overlay">
                <PageTitle 
                    logoSrc={`${process.env.PUBLIC_URL}/images/TLM_Logo.webp`}
                    logoAlt="Game Logo"
                    subtitle="Page & Game in development"
                    buttonText="Play Now"
                    onButtonClick={() => navigate('/downloads')}
                />
            </div>
        </div>
    );
};

export default Home;