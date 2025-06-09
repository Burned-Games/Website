import React, { useState } from 'react';
import FeatureCard, { EngineFeature } from './FeatureCard';
import FeatureModal from './FeatureModal';
import assets from '../../../../config/assets';
import { useTranslation } from '../../../hooks/useTranslation';
import './EngineFeaturesGrid.css';

const EngineFeaturesGrid: React.FC = () => {
    const { t } = useTranslation();
    const [selectedFeature, setSelectedFeature] = useState<EngineFeature | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Sample engine features - in a real app, these would come from props or API
    const features: EngineFeature[] = [
        {
            id: 'performance',
            title: 'High Performance',
            shortDescription: 'Optimized for modern hardware with advanced rendering techniques.',
            detailedDescription: `# Performance Optimization

**Coffee Engine** is built from the ground up with performance in mind. Our custom rendering pipeline leverages the latest graphics APIs to deliver exceptional frame rates.

## Key Features

- **Multi-threaded Rendering**: Parallel processing for better CPU utilization
- **Advanced Culling**: Intelligent occlusion and frustum culling
- **Memory Management**: Custom allocators for reduced garbage collection
- **Asset Streaming**: Dynamic loading for seamless open-world experiences

The engine consistently delivers *60+ FPS* on modern hardware while maintaining visual fidelity.`,
            imageSrc: assets.images.coffeEngineLogo,
            imageAlt: 'Performance optimization illustration'
        },
        {
            id: 'graphics',
            title: 'Advanced Graphics',
            shortDescription: 'Cutting-edge visual effects and modern rendering pipeline.',
            detailedDescription: `# Advanced Graphics Pipeline

Our rendering system supports the latest graphics techniques to create stunning visuals.

![Engine Graphics Showcase](${assets.images.coffeEngineLogo})

## Rendering Features

- **Physical-Based Rendering (PBR)**: Realistic material system
- **Real-time Ray Tracing**: Dynamic reflections and global illumination
- **Volumetric Lighting**: Atmospheric fog and god rays
- **Screen-Space Reflections**: High-quality mirror surfaces

### Post-Processing Stack

The engine includes a comprehensive post-processing pipeline:

- **Temporal Anti-Aliasing (TAA)**
- **Screen-Space Ambient Occlusion (SSAO)**
- **Bloom and HDR Tone Mapping**
- **Motion Blur and Depth of Field**

## How to Add Images in Markdown

You can easily add images to your feature descriptions using markdown syntax:

\`![Alt text](image-url)\`

Example:
\`![Engine Logo](${assets.images.coffeEngineLogo})\``,
            imageSrc: assets.images.coffeEngineLogo,
            imageAlt: 'Advanced graphics showcase'
        },
        {
            id: 'tools',
            title: 'Developer Tools',
            shortDescription: 'Comprehensive editor and debugging tools for efficient development.',
            detailedDescription: `# Developer Tools Suite

**Coffee Engine** comes with a full suite of development tools designed to streamline the game creation process.

## Editor Features

- **Visual Scene Editor**: Drag-and-drop level design
- **Material Editor**: Node-based shader creation
- **Animation Tools**: Timeline-based animation system
- **Asset Browser**: Organized asset management

## Debugging & Profiling

### Performance Profiler
Real-time performance monitoring with:
- CPU/GPU usage tracking
- Memory allocation analysis
- Frame time breakdown
- Draw call optimization

### Debug Console
Integrated console with:
- \`Live variable editing\`
- \`Command execution\`
- \`Log filtering and search\`

*All tools are designed with user experience in mind, making game development accessible to both beginners and professionals.*`,
            imageSrc: assets.images.coffeEngineLogo,
            imageAlt: 'Developer tools interface'
        },
        {
            id: 'cross-platform',
            title: 'Cross-Platform',
            shortDescription: 'Deploy to multiple platforms with a single codebase.',
            detailedDescription: `# Cross-Platform Development

Build once, deploy everywhere. **Coffee Engine** supports multiple platforms out of the box.

## Supported Platforms

- **Windows** (DirectX 11/12, Vulkan)
- **Linux** (OpenGL, Vulkan)
- **macOS** (Metal, OpenGL)
- **PlayStation** (Future release)
- **Xbox** (Future release)

## Platform Abstraction

Our engine provides:

### Unified Input System
Handle input from various devices:
- Keyboard and mouse
- Game controllers
- Touch screens (mobile)

### Audio System
Cross-platform audio with:
- **3D Spatial Audio**
- **Dynamic Range Compression**
- **Real-time Audio Processing**

### File System
Platform-agnostic file operations with automatic path conversion and asset packaging.`,
            imageSrc: assets.images.coffeEngineLogo,
            imageAlt: 'Cross-platform compatibility'
        }
    ];

    const handleSeeMore = (feature: EngineFeature) => {
        setSelectedFeature(feature);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setSelectedFeature(null);
    };

    return (
        <div className="engine-features-container">
            <div className="engine-features-header">
                <h2 className="engine-features-title">Engine Features</h2>
                <p className="engine-features-subtitle">
                    Discover the powerful capabilities of Coffee Engine
                </p>
            </div>
            
            <div className="engine-features-grid">
                {features.map((feature) => (
                    <FeatureCard
                        key={feature.id}
                        feature={feature}
                        onSeeMore={() => handleSeeMore(feature)}
                    />
                ))}
            </div>
            
            <FeatureModal
                feature={selectedFeature}
                isOpen={isModalOpen}
                onClose={handleCloseModal}
            />
        </div>
    );
};

export default EngineFeaturesGrid;
