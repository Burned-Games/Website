import React from 'react';
import { useTranslation } from '../../../hooks/useTranslation';
import config from '../../../../config/config';
import assets from '../../../../config/assets';
import './DTable.css';

interface SystemSpecs {
    cpu: string;
    gpu: string;
    vram: string;
    ram: string;
    storage: string;
    os: string;
}

interface SystemProps {
    type: 'windows' | 'linux';
    icon: string;
    specs: {
        minimum: SystemSpecs;
        recommended: SystemSpecs;
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
                <table className="specs-table">
                    <thead>
                        <tr>
                            <th>Hardware</th>
                            <th>Minimum</th>
                            <th>Recommended</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><strong>CPU</strong></td>
                            <td>{specs.minimum.cpu}</td>
                            <td>{specs.recommended.cpu}</td>
                        </tr>
                        <tr>
                            <td><strong>GPU</strong></td>
                            <td>{specs.minimum.gpu}</td>
                            <td>{specs.recommended.gpu}</td>
                        </tr>
                        <tr>
                            <td><strong>VRAM</strong></td>
                            <td>{specs.minimum.vram}</td>
                            <td>{specs.recommended.vram}</td>
                        </tr>
                        <tr>
                            <td><strong>RAM</strong></td>
                            <td>{specs.minimum.ram}</td>
                            <td>{specs.recommended.ram}</td>
                        </tr>
                        <tr>
                            <td><strong>Storage</strong></td>
                            <td>{specs.minimum.storage}</td>
                            <td>{specs.recommended.storage}</td>
                        </tr>
                        <tr>
                            <td><strong>OS</strong></td>
                            <td>{specs.minimum.os}</td>
                            <td>{specs.recommended.os}</td>
                        </tr>
                    </tbody>
                </table>
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