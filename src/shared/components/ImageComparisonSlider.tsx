import React, { useRef, useState } from "react";
import "./ImageComparisonSlider.css";

interface ImageComparisonSliderProps {
  before: string;
  after: string;
  altBefore?: string;
  altAfter?: string;
  title?: string;
}

const ImageComparisonSlider: React.FC<ImageComparisonSliderProps> = ({ before, after, altBefore = "Before", altAfter = "After", title = "Image Comparison" }) => {
  const [sliderPos, setSliderPos] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleDrag = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    let percent = (x / rect.width) * 100;
    percent = Math.max(0, Math.min(100, percent));
    setSliderPos(percent);
  };

  return (
    <div className="image-comparison-slider-wrapper">
      <h3 className="image-comparison-slider-title">{title}</h3>
      <div className="image-comparison-slider" ref={containerRef} onMouseMove={e => e.buttons === 1 && handleDrag(e)}>
        <img
          src={after}
          alt={altAfter}
          className="image-after"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            zIndex: 1
          }}
        />
        <img
          src={before}
          alt={altBefore}
          className="image-before"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            zIndex: 2,
            clipPath: `inset(0 ${100 - sliderPos}% 0 0)`
          }}
        />
        <div
          className="slider-handle"
          style={{ left: `${sliderPos}%` }}
          onMouseDown={e => handleDrag(e)}
          draggable={false}
        >
          <span className="slider-bar">
            <span className="slider-bar-top" />
            <span className="slider-bar-bottom" />
          </span>
          <span className="slider-circle">
            <span className="slider-arrow slider-arrow-left" />
            <span className="slider-arrow slider-arrow-right" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default ImageComparisonSlider;
