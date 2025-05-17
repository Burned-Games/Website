import React from 'react';
import Header from '../../shared/components/Header/Header';
import TeamMember from '../../shared/components/TeamMember/TeamMember';

const About: React.FC = () => {
    return (
        <div>
            {/* <Header 
                title="About Us"
                subtitle="Meet the team"
            /> */}
            <TeamMember />
        </div>
    );
};

export default About;