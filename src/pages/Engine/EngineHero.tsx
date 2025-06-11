import React from 'react';
import './EngineHero.css';
import assets from '../../config/assets';

const EngineHero: React.FC = () => {
    return (
        <div className="engine-hero">
            <div className="engine-hero-container">
                <div className="engine-hero-flex">
                    <div className="engine-hero-left">
                        <h1 className="engine-hero-title">Coffee Engine</h1>
                        <h2 className="engine-hero-subtitle">{'3D Cross-Platform Game Engine'}</h2>
                        <p className="engine-hero-description">
                            Multiplatform and Open Source Game Engine developed by Burned Games.
                        </p>
                    </div>
                    <div className="engine-hero-right">
                        <img src={assets.images.coffeEngineLogo} alt="Coffee Engine Logo" className="engine-hero-logo" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EngineHero;
