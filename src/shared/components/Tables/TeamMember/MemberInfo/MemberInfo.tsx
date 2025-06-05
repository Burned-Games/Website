import React, { useEffect, useState } from 'react';
import { useTranslation } from '../../../../hooks/useTranslation';
import { config } from '../../../../../config/paths';
import './MemberInfo.css';

interface Member {
    name: string;
    role: string;
    department: string;
    icon?: string;
    github?: string;
    linkedin?: string;
    bio?: string;
    skills?: string[];
}

interface MemberInfoProps {
    member: Member;
    isOpen: boolean;
    onClose: () => void;
}

interface DepartmentsData {
    departments: Array<{
        id: string;
        name: string;
        color: string;
        subcategories: Array<{
            id: string;
            name: string;
        }>;
    }>;
}

const MemberInfo: React.FC<MemberInfoProps> = ({ member, isOpen, onClose }) => {
    const { language } = useTranslation();
    const [departments, setDepartments] = useState<DepartmentsData | null>(null);

    useEffect(() => {
        fetch(`${config.basePath}/data/members/departments.json`)
            .then(response => response.json())
            .then(data => setDepartments(data[language as keyof typeof data]))
            .catch(error => console.error('Error loading departments:', error));
    }, [language]);

    useEffect(() => {
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
    const memberIcon = member.icon ? `${config.basePath}${member.icon}` : defaultIcon;
    
    const department = departments?.departments.find(
        d => d.name.toLowerCase() === member.department.toLowerCase()
    );

    return (
        <div className="member-info-overlay" onClick={onClose}>
            <div className="member-info-modal" onClick={(e) => e.stopPropagation()}>
                <button className="close-button" onClick={onClose}>
                    ×
                </button>
                
                <div className="member-info-content">
                    <div className="member-info-header">
                        <div className="member-info-icon">
                            <img src={memberIcon} alt={member.name} />
                        </div>
                        <div className="member-info-basic">
                            <h2>{member.name}</h2>
                            <div className="member-info-tags">
                                <span 
                                    className="department-tag"
                                    style={{ 
                                        '--department-color': department?.color 
                                    } as React.CSSProperties}
                                >
                                    {member.department}
                                </span>
                                <span className="role-tag">{member.role}</span>
                            </div>
                        </div>
                    </div>

                    {member.bio && (
                        <div className="member-info-section">
                            <h3>About</h3>
                            <p>{member.bio}</p>
                        </div>
                    )}

                    {member.skills && member.skills.length > 0 && (
                        <div className="member-info-section">
                            <h3>Skills</h3>
                            <div className="skills-list">
                                {member.skills.map((skill, index) => (
                                    <span key={index} className="skill-tag">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    )}

                    <div className="member-info-social">
                        {member.github && (
                            <a 
                                href={member.github} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="social-link github"
                            >
                                <span>GitHub</span>
                            </a>
                        )}
                        {member.linkedin && (
                            <a 
                                href={member.linkedin} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="social-link linkedin"
                            >
                                <span>LinkedIn</span>
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MemberInfo;