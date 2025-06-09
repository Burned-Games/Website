import React from 'react';
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
        <div className="game-page-container">
            <div className="game-hero-section">
                <PageTitle 
                    logoSrc={assets.images.gameLogo}
                    logoAlt="Coffee Engine Logo"
                    subtitle={t.game.subtitle}
                    // buttonText={t.game.playButton}
                    onButtonClick={() => navigate(config.routes.downloads)}
                />
                
                <div className="game-catchphrase">
                    <h3>The Last Space Marine stands between humanity and extinction</h3>
                </div>
                
                <div className="game-description">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                </div>
            </div>
            
            <div className="game-main-content">
                {/* Game Pillars Section */}
                <div className="game-pillars-wrapper">
                    <h2 className="pillars-heading">Game Pillars</h2>
                    <div className="pillars-grid">
                        <div className="pillar-card">
                            <div className="pillar-badge">
                                <span>World Exploration</span>
                            </div>
                            <div className="pillar-text">
                                <p>Explore a world full of challenges, enemies, and rewards. From the most desolate desert to the darkness of the Hive City, will you be able to survive as the last Space Marine?</p>
                            </div>
                        </div>
                        
                        <div className="pillar-card">
                            <div className="pillar-badge">
                                <span>Diablo-Like</span>
                            </div>
                            <div className="pillar-text">
                                <p>Our game features incredible world exploration combined with the fun and intense gameplay of Diablo, delivering a unique and unmatched experience.</p>
                            </div>
                        </div>
                        
                        <div className="pillar-card">
                            <div className="pillar-badge">
                                <span>Fast-Paced</span>
                            </div>
                            <div className="pillar-text">
                                <p>Thanks to the fast-paced gameplay, combat will be filled with frantic action that will put every player's skills to the test.</p>
                            </div>
                        </div>
                        
                        <div className="pillar-card">
                            <div className="pillar-badge">
                                <span>Own Game Engine</span>
                            </div>
                            <div className="pillar-text">
                                <p>This game is developed exclusively on our own game engine, which allows us great customization and optimization of the experience.</p>
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* Lore Section */}
                <div className="game-lore-wrapper">
                    <h2 className="lore-heading">The Universe</h2>
                    <div className="lore-text">
                        <p>In the distant future, humanity has spread across the galaxy, but now faces its darkest hour. Ancient evils have awakened, and civilizations crumble before unstoppable forces. As the last Space Marine of your chapter, you carry the weight of humanity's survival on your shoulders.</p>
                        <p>Explore forgotten worlds, uncover ancient secrets, and discover the truth behind the galaxy's destruction. Every choice you make will determine the fate of countless souls.</p>
                    </div>
                </div>
                
                {/* Ultramarine Section */}
                <div className="ultramarine-wrapper">
                    <h2 className="ultramarine-heading">The Ultramarine</h2>
                    <div className="ultramarine-layout">
                        <div className="ultramarine-picture">
                            <img src={assets.images.gameScreenshots.screenshot1} alt="Ultramarine Character" />
                        </div>
                        <div className="ultramarine-details">
                            <div className="detail-block">
                                <h3>Character</h3>
                                <p>A genetically enhanced super-soldier, the last of his kind. Enhanced strength, speed, and tactical awareness make him humanity's final hope.</p>
                            </div>
                            <div className="detail-block">
                                <h3>Weapons</h3>
                                <p>Wield devastating plasma weapons, chainswords, and ancient relics. Each weapon can be upgraded and customized for your playstyle.</p>
                            </div>
                            <div className="detail-block">
                                <h3>Abilities</h3>
                                <p>Master psychic powers, tactical skills, and combat techniques. Unlock new abilities as you progress through your journey.</p>
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* Enemies Section */}
                <div className="enemies-showcase">
                    <div className="showcase-image">
                        <img src={assets.images.gameScreenshots.screenshot2} alt="Game Enemies" />
                    </div>
                    <div className="showcase-info">
                        <h2>Face the Darkness</h2>
                        <p>Confront hordes of terrifying enemies, from corrupted cultists to ancient demons. Each enemy type requires different tactics and strategies to defeat.</p>
                        <button className="showcase-btn" onClick={() => navigate('/enemies')}>
                            Conócelos
                        </button>
                    </div>
                </div>
                
                {/* Levels Section */}
                <div className="levels-showcase reverse-layout">
                    <div className="showcase-info">
                        <h2>Explore Diverse Worlds</h2>
                        <p>Journey through varied environments, from desolate desert planets to the twisted corridors of hive cities. Each level presents unique challenges and secrets.</p>
                        <button className="showcase-btn" onClick={() => navigate('/levels')}>
                            Descúbrelos
                        </button>
                    </div>
                    <div className="showcase-image">
                        <img src={assets.images.gameScreenshots.screenshot3} alt="Game Levels" />
                    </div>
                </div>
                
                {/* Controls Section */}
                <div className="controls-wrapper">
                    <h2 className="controls-heading">Game Controls</h2>
                    <div className="controls-layout">
                        <div className="control-box">
                            <span className="control-key">WASD</span>
                            <span className="control-desc">Movement</span>
                        </div>
                        <div className="control-box">
                            <span className="control-key">Mouse</span>
                            <span className="control-desc">Look Around</span>
                        </div>
                        <div className="control-box">
                            <span className="control-key">Left Click</span>
                            <span className="control-desc">Primary Attack</span>
                        </div>
                        <div className="control-box">
                            <span className="control-key">Right Click</span>
                            <span className="control-desc">Secondary Attack</span>
                        </div>
                        <div className="control-box">
                            <span className="control-key">Space</span>
                            <span className="control-desc">Jump/Dodge</span>
                        </div>
                        <div className="control-box">
                            <span className="control-key">Shift</span>
                            <span className="control-desc">Run</span>
                        </div>
                        <div className="control-box">
                            <span className="control-key">E</span>
                            <span className="control-desc">Interact</span>
                        </div>
                        <div className="control-box">
                            <span className="control-key">Tab</span>
                            <span className="control-desc">Inventory</span>
                        </div>
                    </div>
                </div>
                
                {/* Coffee Engine Section */}
                <div className="engine-showcase">
                    <div className="engine-layout">
                        <div className="engine-logo">
                            <img src={assets.images.coffeEngineLogo} alt="Coffee Engine" />
                        </div>
                        <div className="engine-details">
                            <h2>Built with Coffee Engine</h2>
                            <p>Developed exclusively with our proprietary Coffee Engine, this game showcases cutting-edge technology, optimized performance, and unlimited creative possibilities. Experience the future of gaming engines.</p>
                            <button className="showcase-btn" onClick={() => navigate(config.routes.engine)}>
                                Coffee Engine
                            </button>
                        </div>
                    </div>
                </div>
                
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