import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import PageTitle from '../../shared/components/Text/PageTitle/PageTitle';
import config from '../../config/config';
import assets from '../../config/assets';
import { useTranslation } from '../../shared/hooks/useTranslation';
import './Home.css';

const Home: React.FC = () => {
    const navigate = useNavigate();
    const { t } = useTranslation();
    const [isMobile, setIsMobile] = useState(false);
    const iframeRef = useRef<HTMLIFrameElement>(null);
    
    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth <= 768);
        };
        
        checkMobile();
        window.addEventListener('resize', checkMobile);
        
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    useEffect(() => {
        if (isMobile) {
            // Create a script to load YouTube API
            const script = document.createElement('script');
            script.src = 'https://www.youtube.com/iframe_api';
            script.async = true;
            document.head.appendChild(script);

            // Global YouTube API ready callback
            (window as any).onYouTubeIframeAPIReady = () => {
                if (iframeRef.current) {
                    const player = new (window as any).YT.Player(iframeRef.current, {
                        events: {
                            onReady: (event: any) => {
                                // Force play when ready
                                setTimeout(() => {
                                    event.target.playVideo();
                                }, 500);
                            },
                            onStateChange: (event: any) => {
                                // If paused, try to play again
                                if (event.data === (window as any).YT.PlayerState.PAUSED) {
                                    setTimeout(() => {
                                        event.target.playVideo();
                                    }, 100);
                                }
                            }
                        }
                    });
                }
            };

            // Fallback: try to interact with iframe directly
            const attemptAutoplay = () => {
                if (iframeRef.current && iframeRef.current.contentWindow) {
                    try {
                        iframeRef.current.contentWindow.postMessage(
                            '{"event":"command","func":"playVideo","args":""}', 
                            '*'
                        );
                    } catch (e) {
                    }
                }
            };

            // Try multiple times to ensure playback
            const intervals = [1000, 2000, 3000, 5000];
            const timeouts = intervals.map(delay => 
                setTimeout(attemptAutoplay, delay)
            );

            // Add touch/click listener to trigger play
            const handleUserInteraction = () => {
                attemptAutoplay();
                document.removeEventListener('touchstart', handleUserInteraction);
                document.removeEventListener('click', handleUserInteraction);
            };

            document.addEventListener('touchstart', handleUserInteraction, { passive: true });
            document.addEventListener('click', handleUserInteraction, { passive: true });

            return () => {
                timeouts.forEach(clearTimeout);
                document.removeEventListener('touchstart', handleUserInteraction);
                document.removeEventListener('click', handleUserInteraction);
                if (script.parentNode) {
                    script.parentNode.removeChild(script);
                }
            };
        }
    }, [isMobile]);

    const getYouTubeUrl = () => {
        const baseParams = "autoplay=1&loop=1&mute=1&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&playlist=pNp_OPTwnTo&disablekb=1&fs=0&cc_load_policy=0&color=white&enablejsapi=1";
        
        if (isMobile) {
            // Mobile specific parameters to force autoplay and hide controls
            const mobileParams = `${baseParams}&playsinline=1&widget_referrer=${encodeURIComponent(window.location.origin)}&origin=${encodeURIComponent(window.location.origin)}&start=0&end=0&version=3&autohide=1&theme=dark`;
            return `https://www.youtube.com/embed/pNp_OPTwnTo?${mobileParams}`;
        } else {
            return `https://www.youtube.com/embed/pNp_OPTwnTo?${baseParams}`;
        }
    };
    
    return (
        <div className="home-content">
            <iframe
                ref={iframeRef}
                className={isMobile ? "background-video mobile-video" : "background-video"}
                src={getYouTubeUrl()}
                title="Background Video"
                allow="autoplay; encrypted-media; fullscreen; accelerometer; gyroscope; picture-in-picture"
                allowFullScreen
                frameBorder="0"
                loading="eager"
                onLoad={() => {
                    if (isMobile && iframeRef.current) {
                        // Try to trigger autoplay after iframe loads
                        setTimeout(() => {
                            if (iframeRef.current?.contentWindow) {
                                iframeRef.current.contentWindow.postMessage(
                                    '{"event":"command","func":"playVideo","args":""}', 
                                    '*'
                                );
                            }
                        }, 500);
                    }
                }}
            />
            
            <div className="content-overlay">
                <PageTitle 
                    logoSrc={assets.images.gameLogo}
                    logoAlt="Game Logo"
                    subtitle={t.home.subtitle}
                    buttonText={t.home.playButton}
                    onButtonClick={() => navigate(config.routes.downloads)}
                />
            </div>
        </div>
    );
};

export default Home;