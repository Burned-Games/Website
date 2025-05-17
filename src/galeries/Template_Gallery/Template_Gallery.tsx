import React from 'react';
import Gallery from '../../shared/components/Gallery/Gallery';
import { config } from '../../config/paths';

const Template_Gallery: React.FC = () => {
    // Grid gallery (2x2)
    const gridImages = [
        {
            src: `${config.basePath}/images/example1.jpg`,
            alt: "Example 1",
            caption: "Caption 1"
        },
        // Add 3 more images for 2x2 grid
    ];

    // Slider gallery
    const sliderImages = [
        {
            src: `${config.basePath}/images/example1.jpg`,
            alt: "Example 1",
            caption: "Caption 1"
        },
        // Add more images for slider
    ];

    return (
        <div className="template-gallery">
            {/* Grid Gallery Example */}
            <section className="gallery-section">
                <h2>Grid Gallery (2x2)</h2>
                <Gallery images={gridImages} type="grid" />
            </section>

            {/* Slider Gallery Example */}
            <section className="gallery-section">
                <h2>Slider Gallery</h2>
                <Gallery images={sliderImages} type="slider" />
            </section>
        </div>
    );
};

export default Template_Gallery;