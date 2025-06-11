import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import PageTitle from '../../shared/components/Text/PageTitle/PageTitle';
import Gallery from '../../shared/components/Tables/Gallery/Gallery';
import assets from '../../config/assets';
import { useTranslation } from '../../shared/hooks/useTranslation';
import './Enemies.css';

const Enemies: React.FC = () => {
    const navigate = useNavigate();
    const { t } = useTranslation();
    const [isMobile, setIsMobile] = useState(false);
    const [isSmallMobile, setIsSmallMobile] = useState(false);
    
    useEffect(() => {
        const checkMobile = () => {
            const width = window.innerWidth;
            const userAgent = /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
            
            setIsMobile(width <= 768 || userAgent);
            setIsSmallMobile(width <= 500);
        };
        
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);
    
    // Enemy images for gallery
    const enemyImages = [
        {
            src: assets.images.gameScreenshots.screenshot2,
            alt: "Enemy Type 1",
            caption: "Ork Warriors",
            type: 'image' as const
        },
        {
            src: assets.images.gameScreenshots.screenshot4,
            alt: "Enemy Type 2",
            caption: "Chaos Cultists",
            type: 'image' as const
        },
        {
            src: assets.images.gameScreenshots.screenshot1,
            alt: "Enemy Type 3",
            caption: "Demons",
            type: 'image' as const
        }
    ];

    // Enemy types data
    const enemyTypes = [
        {
            name: "Ork Warriors",
            description: "Brutales guerreros verdes con armas improvisadas y sed de batalla.",
            abilities: ["Ataque cuerpo a cuerpo", "Resistencia alta", "Ataques en grupo"]
        },
        {
            name: "Chaos Cultists",
            description: "Humanos corrompidos que sirven a los poderes del Caos.",
            abilities: ["Ataques a distancia", "Invocación de demonios", "Ataque psíquico"]
        },
        {
            name: "Demons",
            description: "Entidades del Warp que buscan destruir todo lo que tocan.",
            abilities: ["Teletransporte", "Inmunidad al miedo", "Ataques devastadores"]
        }
    ];
    
    return (
        <div 
            className={`enemies-page-container ${isMobile ? 'mobile-optimized' : ''}`}
            style={{
                '--enemies-background': `url(${isSmallMobile ? assets.images.gameBackgroundMobile : assets.images.gameBackground})`
            } as React.CSSProperties}
        >
            
            <div className="enemies-hero-section">
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
                    logoAlt="Game Logo"
                    subtitle={t.enemies.subtitle}
                />
                
                <div className="enemies-title">
                    <h1>{t.enemies.title}</h1>
                </div>
                
                <div className="enemies-description">
                    <p>{t.enemies.description}</p>
                </div>

                <div className="back-button-section">
                    <button className="back-btn" onClick={() => navigate('/game')}>
                        {t.enemies.backButton}
                    </button>
                </div>
            </div>

            <div 
                className="enemies-separator"
                style={{
                    backgroundImage: `url(${assets.images.separator})`
                }}
            ></div>

            <div className="enemies-main-content">
                {/* Enemy Types Section */}
                <div className="enemy-types-wrapper">
                    <h2 className="section-heading">{t.enemies.types.heading}</h2>
                    <div className="enemy-types-grid">
                        {enemyTypes.map((enemy, index) => (
                            <div key={index} className="enemy-type-card">
                                <div className="enemy-type-image">
                                    <img src={enemyImages[index]?.src} alt={enemy.name} />
                                </div>
                                <div className="enemy-type-info">
                                    <h3>{enemy.name}</h3>
                                    <p>{enemy.description}</p>
                                    <div className="enemy-abilities">
                                        <h4>Habilidades:</h4>
                                        <ul>
                                            {enemy.abilities.map((ability, abilityIndex) => (
                                                <li key={abilityIndex}>{ability}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                
                <div 
                    className="enemies-separator"
                    style={{
                        backgroundImage: `url(${assets.images.separator})`
                    }}
                ></div>
                
                {/* Enemy Abilities Section */}
                <div className="enemy-abilities-wrapper">
                    <h2 className="section-heading">{t.enemies.abilities.heading}</h2>
                    <div className="abilities-grid">
                        <div className="ability-card">
                            <h3>Combate Cuerpo a Cuerpo</h3>
                            <p>Los enemigos pueden realizar ataques devastadores en combate cercano, requiriendo estrategias de esquiva y contraataque.</p>
                        </div>
                        <div className="ability-card">
                            <h3>Ataques a Distancia</h3>
                            <p>Diversos tipos de armamento de largo alcance que requieren uso de cobertura y movimiento táctico.</p>
                        </div>
                        <div className="ability-card">
                            <h3>Poderes Psíquicos</h3>
                            <p>Habilidades sobrenaturales que pueden alterar el campo de batalla y requerir contramedidas especiales.</p>
                        </div>
                        <div className="ability-card">
                            <h3>Trabajo en Equipo</h3>
                            <p>Los enemigos coordinan ataques y utilizan tácticas de grupo para superar al jugador.</p>
                        </div>
                    </div>
                </div>
                
                <div 
                    className="enemies-separator"
                    style={{
                        backgroundImage: `url(${assets.images.separator})`
                    }}
                ></div>
                
                {/* Enemy Gallery */}
                <div className="enemy-gallery-wrapper">
                    <h2 className="section-heading">{t.enemies.gallery.heading}</h2>
                    <Gallery images={enemyImages} type="grid" />
                </div>
                
                <div 
                    className="enemies-separator"
                    style={{
                        backgroundImage: `url(${assets.images.separator})`
                    }}
                ></div>
                
                {/* Challenge Section */}
                <div className="enemy-challenge-wrapper">
                    <h2 className="section-heading">{t.enemies.challenge.heading}</h2>
                    <div className="challenge-content">
                        <p>{t.enemies.challenge.description}</p>
                        <button className="challenge-btn" onClick={() => navigate('/game')}>
                            {t.enemies.challenge.button}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Enemies;
