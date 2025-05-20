import React from 'react';
import config from '../../../config/config';
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

const SystemColumn: React.FC<SystemProps> = ({ type, icon, specs, downloadUrl }) => (
    <div className="download-column">
        <div className="system-info">
            <img src={icon} alt={`${type} icon`} className="system-icon" />
            <h3>{type.charAt(0).toUpperCase() + type.slice(1)}</h3>
        </div>
        <div className="system-specs">
            <ul>
                <li><strong>OS:</strong> {specs.os}</li>
                <li><strong>Processor:</strong> {specs.processor}</li>
                <li><strong>Memory:</strong> {specs.memory}</li>
                <li><strong>Graphics:</strong> {specs.graphics}</li>
                <li><strong>Storage:</strong> {specs.storage}</li>
            </ul>
        </div>
        <div className="download-action">
            <button 
                className="download-button"
                onClick={() => window.open(downloadUrl, '_blank')}
            >
                Download
            </button>
        </div>
    </div>
);

const DTable: React.FC = () => {
    return (
        <div className="download-table">
            <SystemColumn 
                type="linux"
                icon={config.downloads.linux.icon}
                specs={config.downloads.linux.specs}
                downloadUrl={config.downloads.linux.downloadUrl}
            />
            <SystemColumn 
                type="windows"
                icon={config.downloads.windows.icon}
                specs={config.downloads.windows.specs}
                downloadUrl={config.downloads.windows.downloadUrl}
            />
        </div>
    );
};

export default DTable;