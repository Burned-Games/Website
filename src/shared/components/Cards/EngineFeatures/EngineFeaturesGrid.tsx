import FeatureCard, { EngineFeature } from './FeatureCard';
import assets from '../../../../config/assets';
import ImageComparisonSlider from '../../../components/ImageComparisonSlider';
import './EngineFeaturesGrid.css';

const EngineFeaturesGrid: React.FC = () => {

    // Sample engine features - in a real app, these would come from props or API
    const features: EngineFeature[] = [
        {
            id: 'rendering',
            title: 'Realistic Rendering',
            shortDescription: 'Advanced rendering techniques for stunning visuals.',
            imageSrc: '',
            imageAlt: 'Realistic rendering example'
        },
        {
            id: 'scripting',
            title: 'Lua Scripting',
            shortDescription: 'Flexible scripting with Lua for game logic and behavior.',
            imageSrc: "assets/images/engine/lua.webp",
            imageAlt: 'Lua scripting example'
        },
        {
            id: 'cross-platform',
            title: 'Cross-Platform',
            shortDescription: 'Deploy to multiple platforms with a single codebase.',
            imageSrc: "data/dossier/mario_dorado/mario_dorado10.webp",
            imageAlt: 'Cross-platform compatibility'
        },
        {
            id: 'ecs',
            title: 'ECS',
            shortDescription: 'Entity Component System architecture for better performance and flexibility.',
            imageSrc: "assets/images/engine/ecs.webp",
            imageAlt: 'ECS architecture diagram'
        }
    ];

    return (
        <div className="engine-features-container">
            <div className="engine-features-header">
                <h2 className="engine-features-title">Engine Features</h2>
                <p className="engine-features-subtitle">
                    Discover the powerful capabilities of Coffee Engine
                </p>
            </div>
            <div className="engine-features-grid custom-layout">
                <div className="feature-card-large">
                    <FeatureCard
                        key={features[0].id}
                        feature={{ ...features[0], imageSrc: '', imageAlt: '' }}
                    >
                        <div className="feature-card-large-sliders" style={{ width: '100%' }}>
                            <ImageComparisonSlider
                                before="assets/images/engine/nofog.webp"
                                after="assets/images/engine/fog.webp"
                                title="Fog"
                            />
                            <ImageComparisonSlider
                                before="assets/images/engine/bloom.webp"
                                after="assets/images/engine/nobloom.webp"
                                title="Bloom"
                            />
                            <ImageComparisonSlider
                                before="assets/images/engine/noshadows.webp"
                                after="assets/images/engine/shadows.webp"
                                title="Shadows"
                            />
                        </div>
                    </FeatureCard>
                </div>
                <div className="feature-card-row">
                    {features.slice(1, 4).map((feature) => (
                        <div className="feature-card-small" key={feature.id}>
                            <FeatureCard
                                feature={feature}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default EngineFeaturesGrid;
