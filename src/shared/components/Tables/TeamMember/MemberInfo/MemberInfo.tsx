import React, { useEffect } from 'react';
import './MemberInfo.css';

interface MemberInfoProps {
    isOpen: boolean;
    onClose: () => void;
    member: {
        name: string;
        role: string;
        department: string;
        icon?: string;
        github?: string;
        linkedin?: string;
        bio?: string;
        skills?: string[];
        works?: Array<{
            type: 'image' | 'video';
            url: string;
            title: string;
            description?: string;
        }>;
    };
}

const MemberInfo: React.FC<MemberInfoProps> = ({ isOpen, onClose, member }) => {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    if (!isOpen) return null;

    const handleOverlayClick = (e: React.MouseEvent) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    return (
        <div className="member-info-overlay" onClick={handleOverlayClick}>
            <button className="close-button" onClick={onClose}>&times;</button>
            <div className="member-info-content" onClick={e => e.stopPropagation()}>
                <div className="member-info-inner">
                    <div className="member-info-header">
                        <img 
                            src={member.icon} 
                            alt={member.name} 
                            className="member-info-avatar"
                        />
                        <div className="member-info-title">
                            <h2>{member.name}</h2>
                            <p className="member-role">{member.role}</p>
                            <p className="member-department">{member.department}</p>
                        </div>
                    </div>
                    
                    {member.bio && (
                        <div className="member-bio">
                            <h3>About</h3>
                            <p>{member.bio}</p>
                        </div>
                    )}

                    {member.skills && (
                        <div className="member-skills">
                            <h3>Skills</h3>
                            <div className="skills-grid">
                                {member.skills.map(skill => (
                                    <span key={skill} className="skill-tag">{skill}</span>
                                ))}
                            </div>
                        </div>
                    )}

                    {member.works && (
                        <div className="member-works">
                            <h3>Portfolio</h3>
                            <div className="work-grid">
                                {member.works.map((work, index) => (
                                    <div key={index} className="work-item">
                                        {work.type === 'video' ? (
                                            <video 
                                                controls 
                                                src={work.url}
                                                title={work.title}
                                            />
                                        ) : (
                                            <img 
                                                src={work.url} 
                                                alt={work.title} 
                                                loading="lazy"
                                            />
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    <div className="member-social">
                        {member.github && (
                            <a href={member.github} target="_blank" rel="noopener noreferrer">
                                GitHub
                            </a>
                        )}
                        {member.linkedin && (
                            <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                                LinkedIn
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MemberInfo;