import React, { useState } from 'react';
import './Gallery.css';

interface MediaItem {
    src: string;
    alt: string;
    caption?: string;
    type: 'image' | 'video' | 'gif';
}

interface GalleryProps {
    images: Array<MediaItem>;
    type: 'grid' | 'slider';
}

const Gallery: React.FC<GalleryProps> = ({ images, type }) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [selectedImage, setSelectedImage] = useState<number | null>(null);

    const getMediaType = (src: string): 'image' | 'video' | 'gif' => {
        const extension = src.split('.').pop()?.toLowerCase();
        switch (extension) {
            case 'mp4':
            case 'webm':
                return 'video';
            case 'gif':
                return 'gif';
            default:
                return 'image';
        }
    };

    const handleModalClick = (e: React.MouseEvent) => {
        // Don't close modal if clicking on video controls
        const target = e.target as HTMLElement;
        if (target.tagName === 'VIDEO' || target.closest('video')) {
            e.stopPropagation();
            return;
        }
        handleClose();
    };

    const renderMediaElement = (item: MediaItem, className: string, key?: React.Key, showControls = true) => {
        const mediaType = item.type || getMediaType(item.src);
        
        switch (mediaType) {
            case 'video':
                return (
                    <video 
                        key={key}
                        src={item.src} 
                        className={className}
                        controls={showControls}
                        loop
                        muted
                        preload="metadata"
                        autoPlay={true}
                        playsInline
                        onLoadedData={(e) => {
                            // Ensure video plays automatically
                            const video = e.target as HTMLVideoElement;
                            video.play().catch(() => {
                                // Fallback if autoplay fails due to browser policy
                                console.log('Autoplay was prevented');
                            });
                        }}
                    />
                );
            case 'gif':
                return (
                    <img 
                        key={key}
                        src={item.src} 
                        alt={item.alt} 
                        className={className}
                        loading="lazy"
                    />
                );
            default:
                return (
                    <img 
                        key={key}
                        src={item.src} 
                        alt={item.alt} 
                        className={className}
                        loading="lazy"
                    />
                );
        }
    };

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
                    {images.map((image, index) => {
                        const mediaType = image.type || getMediaType(image.src);
                        return (
                            <div 
                                key={index} 
                                className="gallery-item"
                                data-type={mediaType}
                                onClick={() => handleImageClick(index)}
                            >
                                {renderMediaElement(image, 'gallery-media', undefined, false)}
                                {image.caption && <span className="caption">{image.caption}</span>}
                            </div>
                        );
                    })}
                </div>

                {selectedImage !== null && (
                    <div className="modal" onClick={handleModalClick}>
                        <div className="modal-content">
                            <button className="close-button">
                                <svg 
                                    viewBox="0 0 24 24" 
                                    width="18" 
                                    height="18" 
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
                            {renderMediaElement(images[selectedImage], 'modal-image', undefined, true)}
                        </div>
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
                {renderMediaElement(images[currentSlide], 'slider-image', currentSlide, true)}
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