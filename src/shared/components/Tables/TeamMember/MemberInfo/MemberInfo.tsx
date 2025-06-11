import React, { useEffect, useState } from 'react';
import { config } from '../../../../../config/paths';
import assets from '../../../../../config/assets';
import { useTranslation } from '../../../../hooks/useTranslation';
import CloseButton from '../../../UI/CloseButton/CloseButton';
import './MemberInfo.css';

const LazyGallery = React.lazy(() => import('../../Gallery/Gallery'));

interface Member {
    id: string;
    name: string;
    role: string;
    department: string;
    icon?: string;
    github?: string;
    linkedin?: string;
    portfolio?: string;
    bio?: string;
    skills?: string[];
    roles?: string[];
    pics?: string[];
    picfoot?: string[];
    task?: string[];
    translations?: {
        [language: string]: {
            role?: string;
            department?: string;
            bio?: string;
            skills?: string[];
        };
    };
    works?: Array<{
        title: string;
        description?: string;
        image: string;
        type: 'image' | 'video';
    }>;
    detailedRoles?: Array<{
        title: string;
        description: string;
        media?: Array<{
            image: string;
            type: 'image' | 'video';
        }>;
    }>;
}

interface MemberInfoProps {
    member: Member;
    isOpen: boolean;
    onClose: () => void;
}

const MemberInfo: React.FC<MemberInfoProps> = ({ member, isOpen, onClose }) => {
    const { language } = useTranslation();
    const [assetsLoaded, setAssetsLoaded] = useState(false);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
            setAssetsLoaded(true);
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    if (!isOpen) return null;

    const getDepartmentLogo = (department: string): string => {
        const departmentKey = department.toLowerCase();
        const logos = assets.images.departmentLogos;
        
        switch (departmentKey) {
            case 'code':
            case 'código':
            case 'codi':
                return logos.code;
            case 'production':
            case 'producción':
            case 'producció':
                return logos.production;
            case 'art':
            case 'arte':
                return logos.art;
            case 'design':
            case 'diseño':
            case 'disseny':
                return logos.design;
            default:
                return logos.code;
        }
    };

    const getDepartmentBanner = (department: string): string => {
        const departmentKey = department.toLowerCase();
        const banners = assets.images.departmentBanners;
        
        switch (departmentKey) {
            case 'code':
            case 'código':
            case 'codi':
                return banners.code;
            case 'production':
            case 'producción':
            case 'producció':
                return banners.production;
            case 'art':
            case 'arte':
                return banners.art;
            case 'design':
            case 'diseño':
            case 'disseny':
                return banners.design;
            default:
                return banners.code;
        }
    };

    const getTranslatedContent = () => {
        const translations = member.translations?.[language];
        return {
            role: translations?.role || member.role,
            department: translations?.department || member.department,
            bio: translations?.bio || member.bio,
            skills: translations?.skills || member.skills
        };
    };

    const translatedContent = getTranslatedContent();

    const defaultIcon = `${config.basePath}${config.icons.defaultAvatar}`;
    const memberIcon = member.icon ? `${config.basePath}/data/dossier/${member.id}/${member.icon}` : defaultIcon;
    
    const getGalleryImages = () => {
        if (!assetsLoaded || !member.pics || member.pics.length === 0) return [];
        
        return member.pics.map((pic, index) => {
            const src = assets.dossier(member.id, pic);
            const extension = pic.split('.').pop()?.toLowerCase();
            
            let type: 'image' | 'video' | 'gif' = 'image';
            if (extension === 'mp4' || extension === 'webm') {
                type = 'video';
            } else if (extension === 'gif') {
                type = 'gif';
            }
            
            // Get caption from picfoot array if available
            const caption = member.picfoot && member.picfoot[index] ? member.picfoot[index] : undefined;
            
            return {
                src,
                alt: `${member.name} - Media ${index + 1}`,
                type,
                caption
            };
        });
    };

    const galleryImages = getGalleryImages();
    
    const getDepartmentAssets = () => {
        if (!assetsLoaded) return { logo: '', banner: '' };
        
        const primaryDepartment = translatedContent.department.split(',')[0].trim();
        return {
            logo: getDepartmentLogo(primaryDepartment),
            banner: getDepartmentBanner(primaryDepartment)
        };
    };

    const departmentAssets = getDepartmentAssets();
    const primaryDepartment = translatedContent.department.split(',')[0].trim();
    
    const processText = (text: string): string => {
        if (!text) return '';
        
        return text
            .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
            .replace(/\*(.*?)\*/g, '<em>$1</em>')
            .split('\n\n')
            .map(paragraph => paragraph.trim())
            .filter(paragraph => paragraph.length > 0)
            .map(paragraph => `<p>${paragraph.replace(/\n/g, '<br>')}</p>`)
            .join('');
    };
    
    return (
        <div className="member-info-overlay" onClick={onClose}>
            <CloseButton
                onClick={onClose}
                size="lg"
                variant="default"
                className="member-info-close-button"
                ariaLabel="Cerrar dossier"
            />
            <div 
                className="member-info-content" 
                onClick={(e) => e.stopPropagation()}
                style={{
                    '--dossier-background-image': assetsLoaded ? `url(${assets.images.dossierBackground})` : 'none',
                } as React.CSSProperties}
            >
                <div className="member-info-inner">
                    {assetsLoaded && (
                        <>
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
                        </>
                    )}
                    
                    <div className="dossier-header">
                        <div className="dossier-icon">
                            {assetsLoaded && (
                                <div 
                                    className="department-banner"
                                    style={{
                                        backgroundImage: `url(${departmentAssets.banner})`
                                    }}
                                >
                                    <img 
                                        src={departmentAssets.logo} 
                                        alt={`${primaryDepartment} logo`}
                                        className="department-logo"
                                    />
                                    <p className="department-name">{primaryDepartment}</p>
                                </div>
                            )}
                        </div>
                        <div className="dossier-title-container">
                            <h1 className="dossier-title">Classified Personal Dossier</h1>
                            <div className="dossier-set-number">SET.NO:01</div>
                        </div>
                    </div>
                    
                    {assetsLoaded && (
                        <div 
                            className="separator"
                            style={{
                                backgroundImage: `url(${assets.images.separator})`
                            }}
                        ></div>
                    )}
                    
                    <div className="member-main-section">
                        <div className="member-left-section">
                            <div 
                                className="member-avatar-container"
                                style={{
                                    '--border-image': assetsLoaded ? `url(${assets.images.borderMember})` : 'none'
                                } as React.CSSProperties}
                            >
                                <img 
                                    src={memberIcon} 
                                    alt={member.name}
                                    className="member-info-avatar"
                                />
                            </div>
                            
                            <div className="member-social">
                                {member.github && (
                                    <a 
                                        href={member.github} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="social-button github"
                                        title="GitHub"
                                    >
                                        <svg viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                                        </svg>
                                    </a>
                                )}
                                {member.linkedin && (
                                    <a 
                                        href={member.linkedin} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="social-button linkedin"
                                        title="LinkedIn"
                                    >
                                        <svg viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                                        </svg>
                                    </a>
                                )}
                                {member.portfolio && (
                                    <a 
                                        href={member.portfolio} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="social-button portfolio"
                                        title="Portfolio"
                                    >
                                        <svg viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M20 6h-2.18c.11-.31.18-.65.18-1a2.996 2.996 0 0 0-5.5-1.65l-.5.67-.5-.68C10.96 2.54 10.05 2 9 2 7.34 2 6 3.34 6 5c0 .35.07.69.18 1H4c-1.11 0-2 .89-2 2v11c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zM9 4c.552 0 1 .448 1 1s-.448 1-1 1-1-.448-1-1 .448-1 1-1zm6 0c.552 0 1 .448 1 1s-.448 1-1 1-1-.448-1-1 .448-1 1-1zm5 15H4V8h2v2h2V8h8v2h2V8h2v11z"/>
                                        </svg>
                                    </a>
                                )}
                            </div>
                        </div>
                        
                        <div className="member-right-section">
                            <div 
                                className="member-name-box"
                                style={{
                                    '--card-name-image': assetsLoaded ? `url(${assets.images.cardName})` : 'none'
                                } as React.CSSProperties}
                            >
                                <h2>{member.name}</h2>
                            </div>
                            
                            {translatedContent.bio && (
                                <div className="member-about">
                                    <h3>About</h3>
                                    <div 
                                        className="member-bio"
                                        dangerouslySetInnerHTML={{ __html: processText(translatedContent.bio) }}
                                    />
                                </div>
                            )}
                            
                            {member.task && member.task.length > 0 && (
                                <div className="member-tasks">
                                    <h3>Task List</h3>
                                    <ul className="task-list">
                                        {member.task.map((task, index) => (
                                            <li key={index} className="task-item">
                                                {task}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                    </div>
                    
                    {assetsLoaded && (
                        <div 
                            className="separator"
                            style={{
                                backgroundImage: `url(${assets.images.separator})`
                            }}
                        ></div>
                    )}
                    
                    {galleryImages.length > 0 && assetsLoaded && (
                        <div className="member-gallery-section">
                            <h3 className="gallery-title">GALLERY</h3>
                            <React.Suspense fallback={<div>Loading gallery...</div>}>
                                <LazyGallery 
                                    images={galleryImages}
                                    type="grid"
                                />
                            </React.Suspense>
                        </div>
                    )}
                    
                    {member.detailedRoles && member.detailedRoles.length > 0 && assetsLoaded && (
                        <>
                            <div 
                                className="separator"
                                style={{
                                    backgroundImage: `url(${assets.images.separator})`
                                }}
                            ></div>
                            
                            <div className="role-section">
                                {member.detailedRoles.map((role, index) => (
                                    <div key={index} className="role-detail-box">
                                        <h3 className="role-detail-title">{role.title}</h3>
                                        <p className="role-description">{role.description}</p>
                                        
                                        {role.media && role.media.length > 0 ? (
                                            <div className="role-media">
                                                {role.media.map((media, mediaIndex) => (
                                                    <div key={mediaIndex} className="role-media-item">
                                                        {media.type === 'image' ? (
                                                            <img 
                                                                src={`${config.basePath}/data/dossier/${member.id}/${media.image}`}
                                                                alt={`${role.title} media ${mediaIndex + 1}`}
                                                                loading="lazy"
                                                            />
                                                        ) : (
                                                            <video 
                                                                src={`${config.basePath}/data/dossier/${member.id}/${media.image}`}
                                                                controls
                                                                preload="none"
                                                            />
                                                        )}
                                                    </div>
                                                ))}
                                            </div>
                                        ) : (
                                            <div className="role-media-placeholder">
                                                Media content will be added here
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default MemberInfo;