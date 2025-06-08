import React, { useEffect } from 'react';
import { config } from '../../../../../config/paths';
import assets from '../../../../../config/assets';
import './MemberInfo.css';

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
    useEffect(() => {
        // Crear e inyectar la fuente personalizada
        // const fontFace = new FontFace('DossierFont', `url(${assets.fonts.dossierTitle.woff2})`);
        // fontFace.load().then(() => {
        //     document.fonts.add(fontFace);
        // });

        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    if (!isOpen) return null;

    const defaultIcon = `${config.basePath}${config.icons.defaultAvatar}`;
    const memberIcon = member.icon ? `${config.basePath}/data/dossier/${member.id}/${member.icon}` : defaultIcon;
    
    return (
        <div className="member-info-overlay" onClick={onClose}>
            <div 
                className="member-info-content" 
                onClick={(e) => e.stopPropagation()}
                // style={{
                //     '--dossier-background-image': `url(${assets.images.dossierBackground})`,
                //     '--dossier-font': 'DossierFont, serif'
                // } as React.CSSProperties}
            >
                <div className="member-info-inner">
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
                    
                    <div className="dossier-header">
                        <div className="dossier-icon">
                        </div>
                        <div className="dossier-title-container">
                            <h1 className="dossier-title">Classified Personal Dossier</h1>
                            <div className="dossier-set-number">Set.No: 01</div>
                        </div>
                    </div>
                    
                    <div 
                        className="separator"
                        style={{
                            backgroundImage: `url(${assets.images.separator})`
                        }}
                    ></div>
                    
                    <div className="member-main-section">
                        <div className="member-left-section">
                            <div 
                                className="member-avatar-container"
                                style={{
                                    '--border-image': `url(${assets.images.borderMember})`
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
                                    '--card-name-image': `url(${assets.images.cardName})`
                                } as React.CSSProperties}
                            >
                                <h2>{member.name}</h2>
                            </div>
                            
                            <div className="member-department-box">
                                <p className="member-department">{member.department}</p>
                            </div>
                            
                            {member.roles && member.roles.length > 0 && (
                                <div className="member-roles">
                                    <h3>Roles</h3>
                                    <div className="roles-list">
                                        {member.roles.map((role, index) => (
                                            <span key={index} className="role-tag">
                                                {role}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            )}
                            
                            {member.bio && (
                                <div className="member-about">
                                    <h3>About</h3>
                                    <p className="member-bio">{member.bio}</p>
                                </div>
                            )}
                        </div>
                    </div>
                    
                    <div 
                        className="separator"
                        style={{
                            backgroundImage: `url(${assets.images.separator})`
                        }}
                    ></div>
                    
                    {member.detailedRoles && member.detailedRoles.length > 0 && (
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
                                                        />
                                                    ) : (
                                                        <video 
                                                            src={`${config.basePath}/data/dossier/${member.id}/${media.image}`}
                                                            controls
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
                    )}
                </div>
            </div>
        </div>
    );
};

export default MemberInfo;