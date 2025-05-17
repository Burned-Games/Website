import React from 'react';
import Gallery from '../../shared/components/Gallery/Gallery';
import { config } from '../../config/paths';

const Environment_Gallery: React.FC = () => {
    const environments = [
        {
            src: `${config.basePath}/images/Concept1.webp`,
            alt: "Environment Concept 1",
            caption: "Dystopian Cityscape"
        },
        {
            src: `${config.basePath}/images/Concept2.webp`,
            alt: "Environment Concept 2",
            caption: "Abandoned Factory"
        },
        {
            src: `${config.basePath}/images/Concept3.webp`,
            alt: "Environment Concept 3",
            caption: "Underground Bunker"
        }
    ];

    return (
        <section className="gallery-section">
            <h2>Environment Concepts</h2>
            <Gallery images={environments} type="slider" />
        </section>
    );
};

export default Environment_Gallery;