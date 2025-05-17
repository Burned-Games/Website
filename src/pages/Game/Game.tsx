import React from 'react';
import Header from '../../shared/components/Header/Header';
import GLTFViewer from '../../shared/components/GLTFViewer/GLTFViewer';
import logo from '../../shared/images/TitleLogo40k.png';

const Game: React.FC = () => {
    const modelPath = `${process.env.PUBLIC_URL}/models/P_pipes_1/P_Pipes_1.gltf`;
    
    return (
        <div>
            {/* <Header 
                title="A new Warhammer 40.000 Title"
                subtitle="By Burned Games"
                logoSrc={logo}
                logoAlt="Warhammer Logo"
            /> */}
            <GLTFViewer
                modelPath={modelPath}
            />
        </div>
    );
};

export default Game;