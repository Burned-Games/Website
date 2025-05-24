import React, { useState } from 'react';
import members from '../../data/members/members.json';
import departments from '../../data/members/departments.json';
import MemberInfo from '../MemberInfo/MemberInfo';
import './TeamMember.css';
import { config } from '../../../config/paths';

interface FilterState {
  department: string | null;
  subcategory: string | null;
}

const Card = ({ member, onClick }: { 
    member: typeof members[0];
    onClick: () => void;
}) => {
    const defaultIcon = `${config.basePath}${config.icons.defaultAvatar}`;
    const memberIcon = member.icon ? `${config.basePath}${member.icon}` : defaultIcon;
    const department = departments.departments.find(
        d => d.name.toLowerCase() === member.department.toLowerCase()
    );

    return (
        <div 
            className="team-member-card" 
            onClick={onClick}
        >
            <div className="team-member-icon">
                <img src={memberIcon} alt={member.name} />
            </div>
            <div className="team-member-info">
                <h3>{member.name}</h3>
                <div className="team-member-tags">
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
                <div className="social-links">
                    {member.github && (
                        <a href={member.github} target="_blank" rel="noopener noreferrer">
                        </a>
                    )}
                    {member.linkedin && (
                        <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
};

const TeamMember: React.FC = () => {
    const [filter, setFilter] = useState<FilterState>({
        department: null,
        subcategory: null
    });
    const [selectedMember, setSelectedMember] = useState<typeof members[0] | null>(null);

    const filteredMembers = members
        .filter(member => {
            if (!filter.department) return true;
            
            const department = departments.departments.find(d => d.id === filter.department);
            if (!department) return false;

            const isDepartmentMatch = member.department.toLowerCase() === department.name.toLowerCase();
            if (!filter.subcategory) return isDepartmentMatch;

            const subcategory = department.subcategories.find(s => s.id === filter.subcategory);
            return isDepartmentMatch && member.role === subcategory?.name;
        })
        .sort((a, b) => a.name.localeCompare(b.name));

    return (
        <div className="team-container">
            <div className="filters-container">
                <div className="departments-filter">
                    <button
                        className={`filter-button ${!filter.department ? 'active' : ''}`}
                        onClick={() => setFilter({ department: null, subcategory: null })}
                    >
                        All Teams
                    </button>
                    {departments.departments.map(dept => (
                        <button
                            key={dept.id}
                            className={`filter-button ${filter.department === dept.id ? 'active' : ''}`}
                            onClick={() => setFilter({ department: dept.id, subcategory: null })}
                            style={{ 
                                '--department-color': dept.color,
                                borderColor: filter.department === dept.id ? dept.color : undefined
                            } as React.CSSProperties}
                        >
                            {dept.name}
                        </button>
                    ))}
                </div>
                
                {filter.department && (
                    <div className="subcategories-filter">
                        <button
                            className={`filter-button ${!filter.subcategory ? 'active' : ''}`}
                            onClick={() => setFilter(prev => ({ ...prev, subcategory: null }))}
                        >
                            All {departments.departments.find(d => d.id === filter.department)?.name}
                        </button>
                        {departments.departments
                            .find(d => d.id === filter.department)
                            ?.subcategories.map(sub => (
                                <button
                                    key={sub.id}
                                    className={`filter-button ${filter.subcategory === sub.id ? 'active' : ''}`}
                                    onClick={() => setFilter(prev => ({ ...prev, subcategory: sub.id }))}
                                >
                                    {sub.name}
                                </button>
                            ))}
                    </div>
                )}
            </div>

            <div className="team-grid">
                {filteredMembers.map((member) => (
                    <Card 
                        key={member.name}
                        member={member}
                        onClick={() => setSelectedMember(member)}
                    />
                ))}
            </div>

            {selectedMember && (
                <MemberInfo 
                    isOpen={!!selectedMember}
                    onClose={() => setSelectedMember(null)}
                    member={selectedMember}
                />
            )}
        </div>
    );
};

export default TeamMember;