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
    artstation?: string;
    bio?: string;
    skills?: string[];
    roles?: string[];
    pics?: string[];
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
        
        return member.pics.map((pic, index) => ({
            src: assets.dossier(member.id, pic),
            alt: `${member.name} - Image ${index + 1}`,
        }));
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
                                    >
                                        GitHub
                                    </a>
                                )}
                                {member.linkedin && (
                                    <a 
                                        href={member.linkedin} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                    >
                                        LinkedIn
                                    </a>
                                )}
                                {member.artstation && (
                                    <a 
                                        href={member.artstation} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                    >
                                        ArtStation
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
                            <h3 className="gallery-title">Portfolio</h3>
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