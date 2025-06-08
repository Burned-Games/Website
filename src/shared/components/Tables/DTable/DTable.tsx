import React from 'react';
import { useTranslation } from '../../../hooks/useTranslation';
import config from '../../../../config/config';
import assets from '../../../../config/assets';
import './DTable.css';

interface SystemProps {
    type: 'windows' | 'linux';
    icon: string;
    specs: {
        os: string;
        processor: string;
        memory: string;
        graphics: string;
        storage: string;
    };
    downloadUrl: string;
}

const SystemColumn: React.FC<SystemProps> = ({ type, icon, specs, downloadUrl }) => {
    const { t } = useTranslation();
    
    return (
        <div className="download-column">
            <div className="system-info">
                <img src={icon} alt={`${t.downloads.platforms[type]} icon`} className="system-icon" />
                <h3>{t.downloads.platforms[type]}</h3>
            </div>
            <div className="system-specs">
                <ul>
                    <li><strong>{t.downloads.systemSpecs.os}:</strong> {specs.os}</li>
                    <li><strong>{t.downloads.systemSpecs.processor}:</strong> {specs.processor}</li>
                    <li><strong>{t.downloads.systemSpecs.memory}:</strong> {specs.memory}</li>
                    <li><strong>{t.downloads.systemSpecs.graphics}:</strong> {specs.graphics}</li>
                    <li><strong>{t.downloads.systemSpecs.storage}:</strong> {specs.storage}</li>
                </ul>
            </div>
            <div className="download-action">
                <button 
                    className="download-button"
                    onClick={() => window.open(downloadUrl, '_blank')}
                >
                    {t.downloads.downloadButton}
                </button>
            </div>
        </div>
    );
};

const DTable: React.FC = () => {
    return (
        <div className="download-table">
            <SystemColumn 
                type="linux"
                icon={assets.images.linux}
                specs={config.downloads.linux.specs}
                downloadUrl={config.downloads.linux.downloadUrl}
            />
            <SystemColumn 
                type="windows"
                icon={assets.images.windows}
                specs={config.downloads.windows.specs}
                downloadUrl={config.downloads.windows.downloadUrl}
            />
        </div>
    );
};

export default DTable;