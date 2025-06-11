import React from 'react';
import './EngineSection.css';

interface EngineSectionProps {
  title: string;
  description: string;
  background: string;
  onButtonClick?: () => void;
  buttonText?: string;
}

const EngineSection: React.FC<EngineSectionProps> = ({
  title,
  description,
  background,
  onButtonClick,
  buttonText,
}) => (
  <div
    style={{
      height: '600px',
      width: '100%',
      background,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: background === '#f5f5f5' ? '2rem' : undefined,
    }}
  >
    <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{title}</h2>
    <p style={{ fontSize: '1.25rem', maxWidth: '600px', textAlign: 'center', marginBottom: '2rem' }}>
      {description}
    </p>
    <button
      className="engine-section-btn"
      onClick={onButtonClick}
    >
      {buttonText}
    </button>
  </div>
);

export default EngineSection;
