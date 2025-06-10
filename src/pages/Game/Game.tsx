import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import PageTitle from '../../shared/components/Text/PageTitle/PageTitle';
import Gallery from '../../shared/components/Tables/Gallery/Gallery';
import config from '../../config/config';
import assets from '../../config/assets';
import { useTranslation } from '../../shared/hooks/useTranslation';
import './Game.css';

const Game: React.FC = () => {
    const navigate = useNavigate();
    const { t } = useTranslation();
    const [isMobile, setIsMobile] = useState(false);
    
    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth <= 768 || /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent));
        };
        
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);
    
    // Game screenshots for gallery
    const gameImages = [
        {
            src: assets.images.gameScreenshots.screenshot1,
            alt: "Game Screenshot 1",
        },
        {
            src: assets.images.gameScreenshots.screenshot2,
            alt: "Game Screenshot 2", 
        },
        {
            src: assets.images.gameScreenshots.screenshot3,
            alt: "Game Screenshot 3",
        },
        {
            src: assets.images.gameScreenshots.screenshot4,
            alt: "Game Screenshot 4",
        }
    ];
    
    return (
        <div 
            className="game-page-container"
            style={{
                '--game-background': `url(${assets.images.gameBackground})`
            } as React.CSSProperties}
        >
            
            <div className="game-hero-section">
                <div 
                    className="corner-decoration top-left"
                    style={{
                        '--corner-image': `url(${assets.images.corner})`
                    } as React.CSSProperties}
                ></div>
                <div 
                    className="corner-decoration top-right"
                    style={{
                        '--corner-image': `url(${assets.images.corner})`
                    } as React.CSSProperties}
                ></div>
                
                <PageTitle 
                    logoSrc={assets.images.gameLogo}
                    logoAlt="Coffee Engine Logo"
                    subtitle={t.game.subtitle}
                    onButtonClick={() => navigate(config.routes.downloads)}
                />
                
                <div className="game-catchphrase">
                    <h3>{t.game.catchphrase?.line1}</h3>
                    <h3>{t.game.catchphrase?.line2}</h3>
                </div>
                
                <div className="game-description">
                    <p>{t.game.mainDescription}</p>
                </div>
                
                <div className="game-video-section">
                    <video
                        className="game-cinematic"
                        controls
                        autoPlay={!isMobile}
                        loop
                        muted
                        poster={assets.images.gameScreenshots.screenshot1}
                        playsInline
                        preload={isMobile ? "none" : "metadata"}
                    >
                        <source 
                            src={assets.videos.gameSinopsis}
                            type="video/mp4" 
                        />
                        Your browser does not support the video tag.
                    </video>
                    <div className="video-caption">
                        <p>{t.game.videoCaption}</p>
                    </div>
                </div>
            </div>
            <div 
                className="game-separator"
                style={{
                    backgroundImage: `url(${assets.images.separator})`
                }}> 
            </div>
            <div className="game-main-content">
                {/* Game Pillars Section */}
                <div className="game-pillars-wrapper">
                    <h2 className="pillars-heading">{t.game.pillars?.heading}</h2>
                    <div className="pillars-grid">
                        <div className="pillar-card">
                            <div className="pillar-badge">
                                <span>{t.game.pillars?.worldExploration.title}</span>
                            </div>
                            <div className="pillar-text">
                                <p>{t.game.pillars?.worldExploration.description}</p>
                            </div>
                        </div>
                        
                        <div className="pillar-card">
                            <div className="pillar-badge">
                                <span>{t.game.pillars?.diabloLike.title}</span>
                            </div>
                            <div className="pillar-text">
                                <p>{t.game.pillars?.diabloLike.description}</p>
                            </div>
                        </div>
                        
                        <div className="pillar-card">
                            <div className="pillar-badge">
                                <span>{t.game.pillars?.fastPaced.title}</span>
                            </div>
                            <div className="pillar-text">
                                <p>{t.game.pillars?.fastPaced.description}</p>
                            </div>
                        </div>
                        
                        <div className="pillar-card">
                            <div className="pillar-badge">
                                <span>{t.game.pillars?.ownEngine.title}</span>
                            </div>
                            <div className="pillar-text">
                                <p>{t.game.pillars?.ownEngine.description}</p>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div 
                    className="game-separator"
                    style={{
                        backgroundImage: `url(${assets.images.separator})`
                    }}
                ></div>
                
                {/* Lore Section */}
                <div className="game-lore-wrapper">
                    <h2 className="lore-heading">{t.game.lore?.heading}</h2>
                    <div className="lore-text">
                        <p>{t.game.lore?.paragraph1}</p>
                        <p>{t.game.lore?.paragraph2}</p>
                    </div>
                </div>
                
                <div 
                    className="game-separator"
                    style={{
                        backgroundImage: `url(${assets.images.separator})`
                    }}
                ></div>
                
                {/* Ultramarine Section */}
                <div className="ultramarine-wrapper">
                    <h2 className="ultramarine-heading">{t.game.ultramarine?.heading}</h2>
                    <div className="ultramarine-layout">
                        <div className="ultramarine-picture">
                            <img src={assets.images.gameScreenshots.screenshot1} alt={t.game.altTexts?.ultramarineCharacter} />
                        </div>
                        <div className="ultramarine-details">
                            <div className="detail-block">
                                <h3>{t.game.ultramarine?.character.title}</h3>
                                <p>{t.game.ultramarine?.character.description}</p>
                            </div>
                            <div className="detail-block">
                                <h3>{t.game.ultramarine?.weapons.title}</h3>
                                <p>{t.game.ultramarine?.weapons.description}</p>
                            </div>
                            <div className="detail-block">
                                <h3>{t.game.ultramarine?.abilities.title}</h3>
                                <p>{t.game.ultramarine?.abilities.description}</p>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div 
                    className="game-separator"
                    style={{
                        backgroundImage: `url(${assets.images.separator})`
                    }}
                ></div>
                
                {/* Enemies Section */}
                <div className="enemies-showcase">
                    <div className="showcase-image">
                        <img src={assets.images.gameScreenshots.screenshot2} alt={t.game.altTexts?.gameEnemies} />
                    </div>
                    <div className="showcase-info">
                        <h2>{t.game.enemies?.heading}</h2>
                        <p>{t.game.enemies?.description}</p>
                        <button className="showcase-btn" onClick={() => navigate('/enemies')}>
                            {t.game.enemies?.button}
                        </button>
                    </div>
                </div>
                
                <div 
                    className="game-separator"
                    style={{
                        backgroundImage: `url(${assets.images.separator})`
                    }}
                ></div>
                
                {/* Levels Section */}
                <div className="levels-showcase reverse-layout">
                    <div className="showcase-info">
                        <h2>{t.game.levels?.heading}</h2>
                        <p>{t.game.levels?.description}</p>
                        <button className="showcase-btn" onClick={() => navigate('/levels')}>
                            {t.game.levels?.button}
                        </button>
                    </div>
                    <div className="showcase-image">
                        <img src={assets.images.gameScreenshots.screenshot3} alt={t.game.altTexts?.gameLevels} />
                    </div>
                </div>
                
                <div 
                    className="game-separator"
                    style={{
                        backgroundImage: `url(${assets.images.separator})`
                    }}
                ></div>
                
                {/* Controls Section */}
                <div className="controls-wrapper">
                    <h2 className="controls-heading">{t.game.controls?.heading}</h2>
                    <div className="controls-layout">
                        <div className="control-box">
                            <span className="control-key">WASD</span>
                            <span className="control-desc">{t.game.controls?.movement}</span>
                        </div>
                        <div className="control-box">
                            <span className="control-key">Mouse</span>
                            <span className="control-desc">{t.game.controls?.lookAround}</span>
                        </div>
                        <div className="control-box">
                            <span className="control-key">Left Click</span>
                            <span className="control-desc">{t.game.controls?.primaryAttack}</span>
                        </div>
                        <div className="control-box">
                            <span className="control-key">Right Click</span>
                            <span className="control-desc">{t.game.controls?.secondaryAttack}</span>
                        </div>
                        <div className="control-box">
                            <span className="control-key">Space</span>
                            <span className="control-desc">{t.game.controls?.jumpDodge}</span>
                        </div>
                        <div className="control-box">
                            <span className="control-key">Shift</span>
                            <span className="control-desc">{t.game.controls?.run}</span>
                        </div>
                        <div className="control-box">
                            <span className="control-key">E</span>
                            <span className="control-desc">{t.game.controls?.interact}</span>
                        </div>
                        <div className="control-box">
                            <span className="control-key">Tab</span>
                            <span className="control-desc">{t.game.controls?.inventory}</span>
                        </div>
                    </div>
                </div>
                
                <div 
                    className="game-separator"
                    style={{
                        backgroundImage: `url(${assets.images.separator})`
                    }}
                ></div>
                
                {/* Coffee Engine Section */}
                <div className="engine-showcase">
                    <div className="engine-layout">
                        <div className="engine-logo">
                            <img src={assets.images.coffeEngineLogo} alt="Coffee Engine" />
                        </div>
                        <div className="engine-details">
                            <h2>{t.game.coffeeEngine?.heading}</h2>
                            <p>{t.game.coffeeEngine?.description}</p>
                            <button className="showcase-btn" onClick={() => navigate(config.routes.engine)}>
                                {t.game.coffeeEngine?.button}
                            </button>
                        </div>
                    </div>
                </div>
                
                <div 
                    className="game-separator"
                    style={{
                        backgroundImage: `url(${assets.images.separator})`
                    }}
                ></div>
                
                {/* Screenshots Gallery */}
                <div className="screenshots-wrapper">
                    <h2 className="screenshots-heading">Screenshots</h2>
                    <Gallery images={gameImages} type="slider" />
                </div>
            </div>
        </div>
    );
};

export default Game;