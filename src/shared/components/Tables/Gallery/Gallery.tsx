import React, { useState } from 'react';
import './Gallery.css';

interface GalleryProps {
    images: Array<{
        src: string;
        alt: string;
        caption?: string;
    }>;
    type: 'grid' | 'slider';
}

const Gallery: React.FC<GalleryProps> = ({ images, type }) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [selectedImage, setSelectedImage] = useState<number | null>(null);

    const handleImageClick = (index: number) => {
        setSelectedImage(index);
    };

    const handleClose = () => {
        setSelectedImage(null);
    };

    const handlePrevious = () => {
        setCurrentSlide(current => 
            current === 0 ? images.length - 1 : current - 1
        );
    };

    const handleNext = () => {
        setCurrentSlide(current => 
            current === images.length - 1 ? 0 : current + 1
        );
    };

    if (type === 'grid') {
        return (
            <div className="gallery-container">
                <div className="gallery-grid">
                    {images.slice(0, 4).map((image, index) => (
                        <div 
                            key={index} 
                            className="gallery-item"
                            onClick={() => handleImageClick(index)}
                        >
                            <img src={image.src} alt={image.alt} />
                            {image.caption && <span className="caption">{image.caption}</span>}
                        </div>
                    ))}
                </div>

                {selectedImage !== null && (
                    <div className="modal" onClick={handleClose}>
                        <button className="close-button">
                            <svg 
                                viewBox="0 0 24 24" 
                                width="24" 
                                height="24" 
                                stroke="currentColor" 
                                fill="none"
                            >
                                <path 
                                    strokeLinecap="round" 
                                    strokeLinejoin="round" 
                                    strokeWidth={2} 
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>
                        <img 
                            src={images[selectedImage].src} 
                            alt={images[selectedImage].alt} 
                            className="modal-image"
                        />
                        {images[selectedImage].caption && (
                            <div className="modal-caption">
                                {images[selectedImage].caption}
                            </div>
                        )}
                    </div>
                )}
            </div>
        );
    }

    return (
        <div className="gallery-slider">
            <button 
                className="slider-button prev" 
                onClick={handlePrevious}
                aria-label="Previous image"
            >
                <svg 
                    viewBox="0 0 24 24" 
                    width="24" 
                    height="24" 
                    stroke="currentColor" 
                    fill="none"
                >
                    <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M15 19l-7-7 7-7"
                    />
                </svg>
            </button>
            
            <div className="slider-content">
                <img 
                    key={currentSlide}
                    src={images[currentSlide].src} 
                    alt={images[currentSlide].alt}
                    className="slider-image" 
                />
                {images[currentSlide].caption && (
                    <div className="slider-caption">
                        {images[currentSlide].caption}
                    </div>
                )}
            </div>

            <button 
                className="slider-button next" 
                onClick={handleNext}
                aria-label="Next image"
            >
                <svg 
                    viewBox="0 0 24 24" 
                    width="24" 
                    height="24" 
                    stroke="currentColor" 
                    fill="none"
                >
                    <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M9 5l7 7-7 7"
                    />
                </svg>
            </button>
        </div>
    );
};

export default Gallery;