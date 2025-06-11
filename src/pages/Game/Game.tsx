import React, { useState, useEffect, useCallback } from 'react';
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
    const [selectedWeapon, setSelectedWeapon] = useState(0);
    
    const weapons = [
        { 
            name: t.game.ultramarine?.weapons.list.chainsword.name || 'Chainsword', 
            image: assets.images.weapons.chainsaw,
            key: 'chainsaw',
            description: t.game.ultramarine?.weapons.list.chainsword.description || 'Melee weapon. Area damage, heals the player based on number of enemies hit.'
        },
        { 
            name: t.game.ultramarine?.weapons.list.shotgun.name || 'Assault Shotgun', 
            image: assets.images.weapons.shotgun,
            key: 'shotgun',
            description: t.game.ultramarine?.weapons.list.shotgun.description || 'Short-range. Heavy spread, devastating in close combat.'
        },
        { 
            name: t.game.ultramarine?.weapons.list.bolter.name || 'Bolter Rifle', 
            image: assets.images.weapons.bolter,
            key: 'bolter',
            description: t.game.ultramarine?.weapons.list.bolter.description || 'Mid-range, versatile. Fires self-propelled explosive rounds.'
        }
    ];
    
    const nextWeapon = useCallback(() => {
        setSelectedWeapon((prev) => (prev + 1) % weapons.length);
    }, [weapons.length]);
    
    const prevWeapon = useCallback(() => {
        setSelectedWeapon((prev) => (prev - 1 + weapons.length) % weapons.length);
    }, [weapons.length]);
    
    useEffect(() => {
        const handleKeyPress = (event: KeyboardEvent) => {
            if (event.key === 'ArrowLeft') {
                prevWeapon();
            } else if (event.key === 'ArrowRight') {
                nextWeapon();
            }
        };
        
        window.addEventListener('keydown', handleKeyPress);
        
        return () => {
            window.removeEventListener('keydown', handleKeyPress);
        };
    }, [nextWeapon, prevWeapon]);
    
    return (
        <div className="game-page-container">
            
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
                        autoPlay={window.innerWidth > 768}
                        loop
                        muted
                        poster={assets.images.gameScreenshots.screenshot1}
                        playsInline
                        preload={window.innerWidth <= 768 ? "none" : "metadata"}
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
                            <h3 className="pillar-title">{t.game.pillars?.worldExploration.title}</h3>
                            <div className="pillar-text">
                                <p>{t.game.pillars?.worldExploration.description}</p>
                            </div>
                        </div>
                        
                        <div className="pillar-card">
                            <h3 className="pillar-title">{t.game.pillars?.diabloLike.title}</h3>
                            <div className="pillar-text">
                                <p>{t.game.pillars?.diabloLike.description}</p>
                            </div>
                        </div>
                        
                        <div className="pillar-card">
                            <h3 className="pillar-title">{t.game.pillars?.fastPaced.title}</h3>
                            <div className="pillar-text">
                                <p>{t.game.pillars?.fastPaced.description}</p>
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
                    <video
                        className="ultramarine-background-video"
                        autoPlay
                        loop
                        muted
                        playsInline
                        preload={window.innerWidth <= 768 ? "none" : "metadata"}
                    >
                        <source 
                            src={assets.videos.spaceMarine}
                            type="video/mp4" 
                        />
                    </video>
                    <h2 className="ultramarine-heading">{t.game.ultramarine?.heading}</h2>
                    
                    {/* Single Ultramarine Description Card */}
                    <div className="ultramarine-description">
                        <div className="ultramarine-main-card">
                            <h3>{t.game.ultramarine?.character.title}</h3>
                            <p>{t.game.ultramarine?.character.description}</p>
                        </div>
                    </div>
                    
                    {/* Weapons Section */}
                    <div className="weapons-section">
                        <h3 className="weapons-title">{t.game.ultramarine?.weapons.title}</h3>
                        <div className="weapon-selector">
                            <button className="weapon-arrow left" onClick={prevWeapon}>
                                <span>‹</span>
                            </button>
                            <div className="weapon-display">
                                <div className="weapon-image-container">
                                    <img 
                                        key={selectedWeapon}
                                        src={weapons[selectedWeapon].image} 
                                        alt={weapons[selectedWeapon].name}
                                        className="weapon-image"
                                    />
                                </div>
                                <div className="weapon-info">
                                    <h4 className="weapon-name">{weapons[selectedWeapon].name}</h4>
                                    <p className="weapon-description">{weapons[selectedWeapon].description}</p>
                                </div>
                            </div>
                            <button className="weapon-arrow right" onClick={nextWeapon}>
                                <span>›</span>
                            </button>
                        </div>
                        <div className="weapon-indicators">
                            {weapons.map((_, index) => (
                                <button 
                                    key={index}
                                    className={`weapon-indicator ${index === selectedWeapon ? 'active' : ''}`}
                                    onClick={() => setSelectedWeapon(index)}
                                />
                            ))}
                        </div>
                    </div>
                    
                    {/* Abilities Section */}
                    <div className="abilities-section">
                        <h3 className="abilities-title">{t.game.ultramarine?.abilities.title}</h3>
                        <table className="abilities-table">
                            <tbody>
                                <tr>
                                    <td>
                                        <div className="ability-card">
                                            <h4>{t.game.ultramarine?.abilities.list.dash.name}</h4>
                                            <p>{t.game.ultramarine?.abilities.list.dash.description}</p>
                                            <div className="ability-video">
                                                <video
                                                    className="ability-video-element"
                                                    autoPlay
                                                    loop
                                                    muted
                                                    playsInline
                                                    preload="metadata"
                                                    disablePictureInPicture
                                                    controlsList="nodownload nofullscreen noremoteplayback"
                                                >
                                                    <source 
                                                        src={assets.videos.abilities.dash}
                                                        type="video/mp4" 
                                                    />
                                                </video>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="ability-card">
                                            <h4>{t.game.ultramarine?.abilities.list.rifleSpecial.name}</h4>
                                            <p>{t.game.ultramarine?.abilities.list.rifleSpecial.description}</p>
                                            <div className="ability-video">
                                                <video
                                                    className="ability-video-element"
                                                    autoPlay
                                                    loop
                                                    muted
                                                    playsInline
                                                    preload="metadata"
                                                    disablePictureInPicture
                                                    controlsList="nodownload nofullscreen noremoteplayback"
                                                >
                                                    <source 
                                                        src={assets.videos.abilities.bolter}
                                                        type="video/mp4" 
                                                    />
                                                </video>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="ability-card">
                                            <h4>{t.game.ultramarine?.abilities.list.shotgunSpecial.name}</h4>
                                            <p>{t.game.ultramarine?.abilities.list.shotgunSpecial.description}</p>
                                            <div className="ability-video">
                                                <video
                                                    className="ability-video-element"
                                                    autoPlay
                                                    loop
                                                    muted
                                                    playsInline
                                                    preload="metadata"
                                                    disablePictureInPicture
                                                    controlsList="nodownload nofullscreen noremoteplayback"
                                                >
                                                    <source 
                                                        src={assets.videos.abilities.granade}
                                                        type="video/mp4" 
                                                    />
                                                </video>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="ability-card">
                                            <h4>{t.game.ultramarine?.abilities.list.armorSpecial.name}</h4>
                                            <p>{t.game.ultramarine?.abilities.list.armorSpecial.description}</p>
                                            <div className="ability-video">
                                                <video
                                                    className="ability-video-element"
                                                    autoPlay
                                                    loop
                                                    muted
                                                    playsInline
                                                    preload="metadata"
                                                    disablePictureInPicture
                                                    controlsList="nodownload nofullscreen noremoteplayback"
                                                >
                                                    <source 
                                                        src={assets.videos.abilities.armor}
                                                        type="video/mp4" 
                                                    />
                                                </video>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                
                <div 
                    className="game-separator"
                    style={{
                        backgroundImage: `url(${assets.images.separator})`
                    }}
                ></div>
                
                {/* Enemies Section */}
                {/* <div className="enemies-showcase">
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
                ></div> */}
                
                {/* Levels Section */}
                {/* <div className="levels-showcase reverse-layout">
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
                ></div> */}
                
                {/* Controls Section */}
                <div className="controls-wrapper">
                    <h2 className="controls-heading">{t.game.controls?.heading}</h2>
                    <div className="controls-image">
                        <img src={assets.images.controls} alt="Game Controls" />
                    </div>
                </div>
                
                <div 
                    className="game-separator"
                    style={{
                        backgroundImage: `url(${assets.images.separator})`
                    }}
                ></div>
                
                {/* Screenshots Section */}
                <div className="screenshots-wrapper">
                    <h2 className="screenshots-heading">{t.game.screenshots?.heading}</h2>
                    <div className="screenshots-gallery">
                        <Gallery 
                            images={[
                                {
                                    src: assets.images.gameScreenshots.game1,
                                    alt: t.game.altTexts?.gameScreenshot || 'Game Screenshot 1',
                                    type: 'image'
                                },
                                {
                                    src: assets.images.gameScreenshots.game2,
                                    alt: t.game.altTexts?.gameScreenshot || 'Game Screenshot 2',
                                    type: 'image'
                                },
                                {
                                    src: assets.images.gameScreenshots.game3,
                                    alt: t.game.altTexts?.gameScreenshot || 'Game Screenshot 3',
                                    type: 'image'
                                },
                                {
                                    src: assets.images.gameScreenshots.game4,
                                    alt: t.game.altTexts?.gameScreenshot || 'Game Screenshot 4',
                                    type: 'image'
                                },
                                {
                                    src: assets.images.gameScreenshots.game5,
                                    alt: t.game.altTexts?.gameScreenshot || 'Game Screenshot 5',
                                    type: 'image'
                                },
                                {
                                    src: assets.images.gameScreenshots.game6,
                                    alt: t.game.altTexts?.gameScreenshot || 'Game Screenshot 6',
                                    type: 'image'
                                }
                            ]}
                            type="grid"
                        />
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
            </div>
        </div>
    );
};

export default Game;