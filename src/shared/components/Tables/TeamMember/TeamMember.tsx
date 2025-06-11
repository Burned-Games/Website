import React, { useState, useEffect } from 'react';
import { useTranslation } from '../../../hooks/useTranslation';
import MemberInfo from './MemberInfo/MemberInfo';
import './TeamMember.css';
import { config } from '../../../../config/paths';

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
    pics?: string[];
    picfoot?: string[];
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
}

interface Department {
    id: string;
    name: string;
    color: string;
    subcategories: Array<{
        id: string;
        name: string;
    }>;
}

interface DepartmentsData {
    allTeams: string;
    departments: Department[];
}

interface FilterState {
    department: string | null;
    subcategory: string | null;
}

const Card = ({ member, onClick, departmentsData }: { 
    member: Member;
    onClick: () => void;
    departmentsData: DepartmentsData | null;
}) => {
    const { language } = useTranslation();
    
    // Función para obtener contenido traducido del miembro
    const getTranslatedMemberContent = () => {
        const translations = member.translations?.[language];
        return {
            role: translations?.role || member.role,
            department: translations?.department || member.department
        };
    };

    const translatedMember = getTranslatedMemberContent();
    
    const defaultIcon = `${config.basePath}${config.icons.defaultAvatar}`;
    const memberIcon = member.icon ? `${config.basePath}/data/dossier/${member.id}/${member.icon}` : defaultIcon;
    
    const primaryDepartmentName = parseDepartments(translatedMember.department)[0];
    const department = departmentsData?.departments.find(
        d => d.name.toLowerCase() === primaryDepartmentName.toLowerCase()
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
                        {primaryDepartmentName}
                    </span>
                    <span className="role-tag">{translatedMember.role}</span>
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

// Función para separar departamentos múltiples
const parseDepartments = (departmentString: string): string[] => {
    // Divide por comas y limpia espacios
    return departmentString.split(',').map(dept => dept.trim()).filter(dept => dept.length > 0);
};

// Función para verificar si un miembro pertenece a un departamento específico (usando traducción)
const memberBelongsToDepartment = (member: Member, departmentName: string, language: string): boolean => {
    const translations = member.translations?.[language];
    const department = translations?.department || member.department;
    const memberDepartments = parseDepartments(department);
    return memberDepartments.some(dept => dept.toLowerCase() === departmentName.toLowerCase());
};

const TeamMember: React.FC = () => {
    const { language } = useTranslation();
    const [filter, setFilter] = useState<FilterState>({
        department: null,
        subcategory: null
    });
    const [selectedMember, setSelectedMember] = useState<Member | null>(null);
    const [members, setMembers] = useState<Member[]>([]);
    const [departments, setDepartments] = useState<DepartmentsData | null>(null);

    // Función para obtener la lista de carpetas de dossiers
    const loadDossiersList = async (): Promise<string[]> => {
        try {
            // Primero intentamos cargar un archivo index que liste las carpetas
            const response = await fetch(`${config.basePath}/data/dossier/index.json`);
            if (response.ok) {
                const data = await response.json();
                return data.dossiers || [];
            }
        } catch (error) {
            console.log('No index.json found, trying to discover dossiers...');
        }

        // Si no hay index.json, intentamos descubrir las carpetas
        // Esto requerirá que mantengas manualmente una lista o uses un script de build
        return [];
    };

    // Función para cargar un dossier individual
    const loadDossier = async (dossierId: string): Promise<Member | null> => {
        try {
            const response = await fetch(`${config.basePath}/data/dossier/${dossierId}/${dossierId}.json`);
            if (!response.ok) {
                throw new Error(`Failed to load dossier for ${dossierId}`);
            }
            const data = await response.json();
            return {
                ...data,
                id: dossierId
            };
        } catch (error) {
            console.error(`Error loading dossier ${dossierId}:`, error);
            return null;
        }
    };

    // Función para separar roles múltiples en roles individuales
    const parseRoles = (roleString: string): string[] => {
        // Divide por comas y limpia espacios
        return roleString.split(',').map(role => role.trim()).filter(role => role.length > 0);
    };

    // Función para verificar si un miembro coincide con el filtro de subcategoría (usando traducción)
    const memberMatchesSubcategory = (member: Member, subcategoryName: string): boolean => {
        const translations = member.translations?.[language];
        const role = translations?.role || member.role;
        const memberRoles = parseRoles(role);
        return memberRoles.some(role => role === subcategoryName);
    };

    // Cargar todos los dossiers
    useEffect(() => {
        const loadAllDossiers = async () => {
            try {
                const dossierIds = await loadDossiersList();
                const memberPromises = dossierIds.map(id => loadDossier(id));
                const loadedMembers = await Promise.all(memberPromises);
                
                const validMembers = loadedMembers.filter((member): member is Member => member !== null);
                setMembers(validMembers);
            } catch (error) {
                console.error('Error loading dossiers:', error);
            }
        };

        loadAllDossiers();
    }, []);

    // Cargar departamentos
    useEffect(() => {
        fetch(`${config.basePath}/data/members/departments.json`)
            .then(response => response.json())
            .then(data => setDepartments(data[language as keyof typeof data]))
            .catch(error => console.error('Error loading departments:', error));
    }, [language]);

    const filteredMembers = members
        .filter(member => {
            if (!filter.department || !departments) return true;
            
            const department = departments.departments.find(d => d.id === filter.department);
            if (!department) return false;

            const isDepartmentMatch = memberBelongsToDepartment(member, department.name, language);
            if (!isDepartmentMatch) return false;

            if (!filter.subcategory) return true;

            const subcategory = department.subcategories.find(s => s.id === filter.subcategory);
            if (!subcategory) return false;

            return memberMatchesSubcategory(member, subcategory.name);
        })
        .sort((a, b) => a.name.localeCompare(b.name));

    if (!departments) {
        return <div></div>;
    }

    return (
        <div className="team-container">
            <div className="filters-container">
                <div className="departments-filter">
                    <button
                        className={`filter-button ${!filter.department ? 'active' : ''}`}
                        onClick={() => setFilter({ department: null, subcategory: null })}
                    >
                        {departments.allTeams}
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
                        key={member.id}
                        member={member}
                        onClick={() => setSelectedMember(member)}
                        departmentsData={departments}
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