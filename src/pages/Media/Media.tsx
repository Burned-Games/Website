import React from 'react';
import Header from '../../shared/components/Header/Header';
import EnvironmentGallery from '../../galeries/Environment_Gallery/Environment_Gallery';
import CharacterGallery from '../../galeries/Character_Gallery/Character_Gallery';

const Media: React.FC = () => {
    return (
        <div className="media-page">
            {/* <Header 
                title="Media"
                subtitle="Screenshots and Videos"
            /> */}
            <CharacterGallery />
            <EnvironmentGallery />
        </div>
    );
};

export default Media;