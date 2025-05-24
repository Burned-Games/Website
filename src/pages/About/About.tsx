import React from 'react';
import Header from '../../shared/components/Header/Header';
import TeamMember from '../../shared/components/TeamMember/TeamMember';
import { useTranslation } from '../../shared/hooks/useTranslation';

const About: React.FC = () => {
    const { t } = useTranslation();
    
    return (
        <div>
            <TeamMember />
        </div>
    );
};

export default About;