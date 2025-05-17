import React, { Suspense, useRef } from 'react';
import { Canvas, useThree } from '@react-three/fiber';
import { OrbitControls, Environment, Stage, useGLTF } from '@react-three/drei';
import * as THREE from 'three';
import './GLTFViewer.css';

function Model({ path }: { path: string }) {
    const { scene } = useGLTF(path);
    const { camera, controls } = useThree();
    const sceneRef = useRef<THREE.Group>(null);

    React.useEffect(() => {
        if (sceneRef.current) {
            const box = new THREE.Box3().setFromObject(sceneRef.current);
            const size = box.getSize(new THREE.Vector3());
            const center = box.getCenter(new THREE.Vector3());

            // Center the model
            sceneRef.current.position.set(-center.x, -center.y, -center.z);

            const maxDim = Math.max(size.x, size.y, size.z);
            const perspectiveCamera = camera as THREE.PerspectiveCamera;
            const fov = perspectiveCamera.fov * (Math.PI / 180);
            const cameraZ = (maxDim * 0.5) / Math.tan(fov / 2);

            // Set fixed camera position
            camera.position.set(0, maxDim * 0.5, cameraZ * 0.8);
            camera.lookAt(0, 0, 0);
            camera.updateProjectionMatrix();

            // Lock camera distance
            if (controls) {
                const orbitControls = controls as any;
                orbitControls.target.set(0, 0, 0);
                orbitControls.minDistance = cameraZ * 0.8;
                orbitControls.maxDistance = cameraZ * 0.8; // Same as min to lock distance
                orbitControls.enableZoom = false; // Disable zoom completely
                orbitControls.update();
            }
        }
    }, [scene, camera, controls]);

    return <primitive ref={sceneRef} object={scene} />;
}

interface GLTFViewerProps {
    modelPath: string;
    backgroundColor?: string;
    cameraPosition?: [number, number, number];
    blur?: number;  // Add the blur property
}

const GLTFViewer: React.FC<GLTFViewerProps> = ({
    modelPath,
    backgroundColor = '#2b2b2b',
    blur = 0.5  // Add default value
}) => {
    return (
        <div className="gltf-viewer">
            <Canvas
                camera={{ 
                    fov: 45,
                    near: 0.1,
                    far: 1000,
                    position: [0, 2, 5]
                }}
                style={{ background: backgroundColor }}
            >
                <Suspense fallback={null}>
                    <Stage environment="forest" intensity={0.6}>
                        <Model path={modelPath} />
                    </Stage>
                    <Environment 
                        preset="forest"
                        background
                        blur={blur}    // Use the blur prop
                    />
                </Suspense>
                <OrbitControls 
                    autoRotate
                    autoRotateSpeed={0.5}
                    enableRotate={true}
                    enablePan={false}  // Disable panning
                    minPolarAngle={Math.PI * 0.3}
                    maxPolarAngle={Math.PI * 0.7}
                    makeDefault
                />
                <ambientLight intensity={0.5} />
                <directionalLight 
                    position={[10, 10, 5]} 
                    intensity={1} 
                    castShadow
                />
            </Canvas>
        </div>
    );
};

export default GLTFViewer;