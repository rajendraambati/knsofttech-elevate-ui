import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, Sparkles, PerspectiveCamera } from '@react-three/drei';
import { Suspense } from 'react';
import WebGL3DHeader from './WebGL3DHeader';
import WebGL3DHeroSection from './WebGL3DHeroSection';
import WebGL3DCapabilitiesSection from './WebGL3DCapabilitiesSection';
import WebGL3DInsightsSection from './WebGL3DInsightsSection';
import WebGL3DFooter from './WebGL3DFooter';

const InfiniteGrid = () => {
  return (
    <gridHelper
      args={[100, 100, '#7c3aed', '#4c1d95']}
      position={[0, -20, 0]}
    />
  );
};

const Scene = () => {
  return (
    <>
      {/* Lighting System */}
      <ambientLight intensity={0.4} />
      <directionalLight
        position={[10, 10, 5]}
        intensity={1.2}
        color="#8b5cf6"
        castShadow
      />
      <pointLight
        position={[-10, -10, -10]}
        intensity={0.6}
        color="#3b82f6"
      />
      <spotLight
        position={[0, 25, 0]}
        angle={0.4}
        penumbra={1}
        intensity={1}
        color="#a855f7"
        castShadow
      />

      {/* Environment */}
      <Environment preset="night" />

      {/* Grid Floor */}
      <InfiniteGrid />

      {/* Atmospheric Effects */}
      <Sparkles
        count={80}
        scale={[30, 20, 30]}
        size={3}
        speed={0.2}
        color="#8b5cf6"
      />

      {/* 3D Components */}
      <WebGL3DHeader />
      <WebGL3DHeroSection />
      <WebGL3DCapabilitiesSection />
      <WebGL3DInsightsSection />
      <WebGL3DFooter />

      {/* Camera Controls */}
      <OrbitControls
        enablePan={true}
        enableZoom={true}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 6}
        autoRotate={false}
        autoRotateSpeed={0.3}
        maxDistance={25}
        minDistance={5}
      />
    </>
  );
};

const WebGLApp = () => {
  return (
    <div className="w-full h-screen bg-black overflow-hidden">
      <Canvas
        camera={{ position: [0, 12, 15], fov: 60 }}
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

export default WebGLApp;