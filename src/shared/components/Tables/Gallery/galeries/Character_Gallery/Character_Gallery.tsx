import React from 'react';
import Gallery from '../../Gallery'; // Actualizado path
import { config } from '../../../../../../config/paths'; // Actualizado path

const Character_Gallery: React.FC = () => {
    const characters = [
        {
            src: `${config.basePath}/images/Concept1.webp`,
            alt: "Character Design 1",
            caption: "Space Marine Armor"
        },
        {
            src: `${config.basePath}/images/Concept2.webp`,
            alt: "Character Design 2",
            caption: "Heavy Weapons Loadout"
        },
        {
            src: `${config.basePath}/images/Concept3.webp`,
            alt: "Character Design 3",
            caption: "Combat Poses"
        },
        {
            src: `${config.basePath}/images/Concept1.webp`,
            alt: "Character Design 4",
            caption: "Helmet Variations"
        }
    ];

    return (
        <section className="gallery-section">
            <h2>Character Designs</h2>
            <Gallery images={characters} type="grid" />
        </section>
    );
};

export default Character_Gallery;