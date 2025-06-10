import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import PageTitle from '../../shared/components/Text/PageTitle/PageTitle';
import Gallery from '../../shared/components/Tables/Gallery/Gallery';
import assets from '../../config/assets';
import { useTranslation } from '../../shared/hooks/useTranslation';
import './Levels.css';

const Levels: React.FC = () => {
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
    
    // Level images for gallery
    const levelImages = [
        {
            src: assets.images.gameScreenshots.screenshot3,
            alt: "Desert Plains",
            caption: "Llanuras Desérticas",
            type: 'image' as const
        },
        {
            src: assets.images.gameScreenshots.screenshot1,
            alt: "Hive City",
            caption: "Ciudad Colmena",
            type: 'image' as const
        },
        {
            src: assets.images.gameScreenshots.screenshot4,
            alt: "Industrial Zone",
            caption: "Zona Industrial",
            type: 'image' as const
        }
    ];

    // Level environments data
    const levelEnvironments = [
        {
            name: "Llanuras Desérticas",
            description: "Vastos desiertos con ruinas antiguas y peligros ocultos bajo las arenas.",
            features: ["Tormentas de arena", "Ruinas explorable", "Enemigos ocultos", "Recursos escasos"]
        },
        {
            name: "Ciudad Colmena",
            description: "Complejos urbanos industriales con múltiples niveles y pasadiscos oscuros.",
            features: ["Múltiples niveles", "Laberintos urbanos", "Emboscadas enemigas", "Secretos ocultos"]
        },
        {
            name: "Zona Industrial",
            description: "Instalaciones manufactureras abandonadas llenas de maquinaria peligrosa.",
            features: ["Peligros ambientales", "Maquinaria activa", "Corredores estrechos", "Puntos estratégicos"]
        }
    ];
    
    return (
        <div 
            className={`levels-page-container ${isMobile ? 'mobile-optimized' : ''}`}
            style={{
                '--levels-background': `url(${isSmallMobile ? assets.images.gameBackgroundMobile : assets.images.gameBackground})`
            } as React.CSSProperties}
        >
            
            <div className="levels-hero-section">
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
                    subtitle={t.levels.subtitle}
                />
                
                <div className="levels-title">
                    <h1>{t.levels.title}</h1>
                </div>
                
                <div className="levels-description">
                    <p>{t.levels.description}</p>
                </div>

                <div className="back-button-section">
                    <button className="back-btn" onClick={() => navigate('/game')}>
                        {t.levels.backButton}
                    </button>
                </div>
            </div>

            <div 
                className="levels-separator"
                style={{
                    backgroundImage: `url(${assets.images.separator})`
                }}
            ></div>

            <div className="levels-main-content">
                {/* Level Environments Section */}
                <div className="level-environments-wrapper">
                    <h2 className="section-heading">{t.levels.environments.heading}</h2>
                    <div className="level-environments-grid">
                        {levelEnvironments.map((level, index) => (
                            <div key={index} className="level-environment-card">
                                <div className="level-environment-image">
                                    <img src={levelImages[index]?.src} alt={level.name} />
                                </div>
                                <div className="level-environment-info">
                                    <h3>{level.name}</h3>
                                    <p>{level.description}</p>
                                    <div className="level-features">
                                        <h4>Características:</h4>
                                        <ul>
                                            {level.features.map((feature, featureIndex) => (
                                                <li key={featureIndex}>{feature}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                
                <div 
                    className="levels-separator"
                    style={{
                        backgroundImage: `url(${assets.images.separator})`
                    }}
                ></div>
                
                {/* Level Features Section */}
                <div className="level-features-wrapper">
                    <h2 className="section-heading">{t.levels.features.heading}</h2>
                    <div className="features-grid">
                        <div className="feature-card">
                            <h3>Exploración Vertical</h3>
                            <p>Los niveles ofrecen múltiples alturas y plataformas que permiten exploración tridimensional completa.</p>
                        </div>
                        <div className="feature-card">
                            <h3>Secretos Ocultos</h3>
                            <p>Cada nivel contiene áreas secretas, armas especiales y mejoras de equipo para recompensar la exploración.</p>
                        </div>
                        <div className="feature-card">
                            <h3>Peligros Ambientales</h3>
                            <p>El entorno mismo presenta desafíos únicos que requieren estrategia y adaptación constante.</p>
                        </div>
                        <div className="feature-card">
                            <h3>Puntos Estratégicos</h3>
                            <p>Ubicaciones defensivas y ventajosas que pueden usarse tácticamente durante el combate.</p>
                        </div>
                    </div>
                </div>
                
                <div 
                    className="levels-separator"
                    style={{
                        backgroundImage: `url(${assets.images.separator})`
                    }}
                ></div>
                
                {/* Player Progression Section */}
                <div className="level-progression-wrapper">
                    <h2 className="section-heading">{t.levels.progression.heading}</h2>
                    <div className="progression-content">
                        <div className="progression-card">
                            <h3>Sistema de Progresión</h3>
                            <p>A medida que avanzas por los niveles, desbloquearás nuevas habilidades, armas y mejoras que te permitirán enfrentar desafíos más grandes.</p>
                        </div>
                        <div className="progression-card">
                            <h3>Dificultad Adaptativa</h3>
                            <p>Cada nivel presenta desafíos únicos que se adaptan a tu progreso, manteniendo la experiencia emocionante y equilibrada.</p>
                        </div>
                    </div>
                </div>
                
                <div 
                    className="levels-separator"
                    style={{
                        backgroundImage: `url(${assets.images.separator})`
                    }}
                ></div>
                
                {/* Level Gallery */}
                <div className="level-gallery-wrapper">
                    <h2 className="section-heading">{t.levels.gallery.heading}</h2>
                    <Gallery images={levelImages} type="grid" />
                </div>
                
                <div 
                    className="levels-separator"
                    style={{
                        backgroundImage: `url(${assets.images.separator})`
                    }}
                ></div>
                
                {/* Mission Section */}
                <div className="level-mission-wrapper">
                    <h2 className="section-heading">{t.levels.mission.heading}</h2>
                    <div className="mission-content">
                        <p>{t.levels.mission.description}</p>
                        <button className="mission-btn" onClick={() => navigate('/game')}>
                            {t.levels.mission.button}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Levels;
