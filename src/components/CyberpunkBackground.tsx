import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, Sparkles } from '@react-three/drei';
import { Suspense } from 'react';

const InfiniteGrid = () => {
  return (
    <gridHelper
      args={[20, 20, '#7c3aed', '#4c1d95']}
      position={[0, -2, 0]}
    />
  );
};

const Scene = () => {
  return (
    <>
      {/* Lighting System */}
      <ambientLight intensity={0.3} />
      <directionalLight
        position={[10, 10, 5]}
        intensity={1}
        color="#8b5cf6"
        castShadow
      />
      <pointLight
        position={[-10, -10, -10]}
        intensity={0.5}
        color="#3b82f6"
      />
      <spotLight
        position={[0, 15, 0]}
        angle={0.3}
        penumbra={1}
        intensity={0.8}
        color="#a855f7"
        castShadow
      />

      {/* Environment */}
      <Environment preset="night" />

      {/* Grid Floor */}
      <InfiniteGrid />

      {/* Atmospheric Effects */}
      <Sparkles
        count={50}
        scale={[20, 10, 20]}
        size={2}
        speed={0.3}
        color="#8b5cf6"
      />

      {/* Camera Controls */}
      <OrbitControls
        enablePan={false}
        enableZoom={false}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 4}
        autoRotate
        autoRotateSpeed={0.5}
      />
    </>
  );
};

const CyberpunkBackground = () => {
  return (
    <div className="fixed inset-0 w-full h-screen bg-black overflow-hidden -z-10">
      <Canvas
        camera={{ position: [0, 8, 12], fov: 50 }}
        gl={{ antialias: true, alpha: true }}
        shadows
      >
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default CyberpunkBackground;