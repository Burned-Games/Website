import React from 'react';
import PageTitle from '../../shared/components/PageTitle/PageTitle';
import './Home.css';

const Home: React.FC = () => {
    const handlePlayNow = () => {
        console.log('Play Now clicked!');
    };

    return (
        <div className="home-container">
            <video
                className="video-background"
                autoPlay
                loop
                muted
                playsInline
            >
                <source src={`${process.env.PUBLIC_URL}/videos/background.mp4`} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className="overlay"></div>
            <PageTitle 
                title="Warhammer 40,000"
                subtitle="The Last Marine"
                buttonText="Play Now"
                onButtonClick={handlePlayNow}
            />
        </div>
    );
};

export default Home;