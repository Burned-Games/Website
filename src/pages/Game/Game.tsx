import React from 'react';
import GLTFViewer from '../../shared/components/Viewer/GLTFViewer/GLTFViewer';

const Game: React.FC = () => {
    const modelPath = `${process.env.PUBLIC_URL}/models/P_pipes_1/P_Pipes_1.gltf`;
    
    return (
        <div>
            <GLTFViewer
                modelPath={modelPath}
            />
        </div>
    );
};

export default Game;