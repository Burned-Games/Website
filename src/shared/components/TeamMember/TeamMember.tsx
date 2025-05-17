import React from 'react';
import members from '../../data/members.json';
import './TeamMember.css';
import { config } from '../../../config/paths';

const Card = ({ name, role, department, icon, github, linkedin }: {
    name: string;
    role: string;
    department: string;
    icon?: string;
    github?: string;
    linkedin?: string;
}) => {
    const defaultIcon = `${config.basePath}${config.icons.defaultAvatar}`;
    const memberIcon = icon ? `${config.basePath}${icon}` : defaultIcon;

    return (
        <div className="team-member-card">
            <div className="team-member-icon">
                <img 
                    src={memberIcon} 
                    alt={`${name}`} 
                />
            </div>
            <div className="team-member-info">
                <h3>{name}</h3>
                <p className="role">{role}</p>
                <p className="department">{department}</p>
                <div className="social-links">
                    {github && (
                        <a href={github} target="_blank" rel="noopener noreferrer">
                        </a>
                    )}
                    {linkedin && (
                        <a href={linkedin} target="_blank" rel="noopener noreferrer">
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
};

const TeamMember: React.FC = () => {
    // Group members by department
    const departments = {
        Code: members.filter(m => m.department === 'Code'),
        Design: members.filter(m => m.department === 'Design'),
        Art: members.filter(m => m.department === 'Art')
    };

    return (
        <div className="team-container">
            {Object.entries(departments).map(([dept, members]) => (
                <div key={dept} className="department-section">
                    <div className="department-header">
                        <h2>{dept}</h2>
                        <span className="member-count">
                            {members.length} members
                        </span>
                    </div>
                    <div className="team-grid">
                        {members.map((member, index) => (
                            <Card key={`${dept}-${index}`} {...member} />
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default TeamMember;