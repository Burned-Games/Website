import React from 'react';
import PageTitle from '../../shared/components/PageTitle/PageTitle';
import './Home.css';

const Home: React.FC = () => {
    const handlePlayNow = () => {
        console.log('Play Now clicked!');
    };

    return (
        <div className="home-container">
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