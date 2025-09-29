import { useRef } from "react";
import { Text, Box, Sphere } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { Group } from "three";

const WebGL3DHeroSection = () => {
  const heroRef = useRef<Group>(null);
  const robotRef = useRef<Group>(null);

  useFrame((state) => {
    if (heroRef.current) {
      heroRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.2) * 0.05;
    }
    if (robotRef.current) {
      robotRef.current.rotation.y = state.clock.elapsedTime * 0.3;
      robotRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.8) * 0.5;
    }
  });

  return (
    <group ref={heroRef} position={[0, 4, 0]}>
      {/* Pill Badge */}
      <group position={[0, 3, 0]}>
        <mesh>
          <capsuleGeometry args={[1.5, 0.3, 4, 8]} />
          <meshPhysicalMaterial
            transparent
            opacity={0.2}
            roughness={0.1}
            metalness={0.1}
            transmission={0.8}
            thickness={0.1}
            color="#8b5cf6"
          />
        </mesh>
        <Text
          position={[0, 0, 0.01]}
          fontSize={0.2}
          color="#8b5cf6"
          anchorX="center"
          font="/fonts/inter-medium.woff"
        >
          INTRODUCING AI
        </Text>
      </group>

      {/* Main Headlines */}
      <Text
        position={[0, 1.5, 0]}
        fontSize={1.2}
        color="white"
        anchorX="center"
        anchorY="middle"
        maxWidth={12}
        textAlign="center"
        font="/fonts/inter-bold.woff"
        lineHeight={1.1}
      >
        AI SOLUTIONS FOR{"\n"}DEVELOPERS
      </Text>

      {/* Sub-headline */}
      <Text
        position={[0, -0.5, 0]}
        fontSize={0.4}
        color="rgba(255, 255, 255, 0.7)"
        anchorX="center"
        anchorY="middle"
        maxWidth={12}
        textAlign="center"
        font="/fonts/inter-regular.woff"
        lineHeight={1.4}
      >
        the best way to reach humans instead of spam folders,{"\n"}clever transactional and marketing emails at scale.
      </Text>

      {/* CTA Buttons */}
      <group position={[0, -2, 0]}>
        {/* Documentation Button */}
        <group position={[-2, 0, 0]}>
          <mesh>
            <capsuleGeometry args={[1.5, 0.4, 4, 8]} />
            <meshPhysicalMaterial
              transparent
              opacity={0.2}
              roughness={0.1}
              metalness={0.1}
              transmission={0.8}
              thickness={0.1}
              color="#8b5cf6"
            />
          </mesh>
          <Text
            position={[0, 0, 0.01]}
            fontSize={0.25}
            color="#8b5cf6"
            anchorX="center"
            font="/fonts/inter-medium.woff"
          >
            Documentation &gt;
          </Text>
        </group>

        {/* Get Started Button */}
        <group position={[2, 0, 0]}>
          <mesh>
            <capsuleGeometry args={[1.5, 0.4, 4, 8]} />
            <meshPhysicalMaterial
              transparent
              opacity={0.9}
              roughness={0.1}
              metalness={0.1}
              color="white"
            />
          </mesh>
          <Text
            position={[0, 0, 0.01]}
            fontSize={0.25}
            color="black"
            anchorX="center"
            font="/fonts/inter-medium.woff"
          >
            Get Started &gt;
          </Text>
        </group>
      </group>

      {/* 3D Robot Element */}
      <group ref={robotRef} position={[6, 0, 2]}>
        {/* Glass Container */}
        <mesh>
          <boxGeometry args={[3, 3, 3]} />
          <meshPhysicalMaterial
            transparent
            opacity={0.1}
            roughness={0.1}
            metalness={0.1}
            transmission={0.9}
            thickness={0.1}
          />
        </mesh>
        
        {/* Robot Body */}
        <Box position={[0, 0, 0]} args={[1, 1.5, 1]}>
          <meshPhysicalMaterial
            color="#8b5cf6"
            metalness={0.8}
            roughness={0.2}
            emissive="#4c1d95"
            emissiveIntensity={0.3}
          />
        </Box>
        
        {/* Robot Head */}
        <Sphere position={[0, 1, 0]} args={[0.5]}>
          <meshPhysicalMaterial
            color="#a855f7"
            metalness={0.9}
            roughness={0.1}
            emissive="#7c3aed"
            emissiveIntensity={0.2}
          />
        </Sphere>

        {/* Eyes */}
        <Sphere position={[-0.2, 1.1, 0.4]} args={[0.1]}>
          <meshPhysicalMaterial
            color="#00ffff"
            emissive="#00ffff"
            emissiveIntensity={1}
          />
        </Sphere>
        <Sphere position={[0.2, 1.1, 0.4]} args={[0.1]}>
          <meshPhysicalMaterial
            color="#00ffff"
            emissive="#00ffff"
            emissiveIntensity={1}
          />
        </Sphere>

        {/* Front/End Labels */}
        <Text
          position={[1.2, 1, 0]}
          fontSize={0.3}
          color="#8b5cf6"
          anchorX="left"
          font="/fonts/inter-bold.woff"
        >
          Front
        </Text>
        <Text
          position={[1.2, -0.5, 0]}
          fontSize={0.5}
          color="#8b5cf6"
          anchorX="left"
          font="/fonts/inter-bold.woff"
        >
          End
        </Text>
      </group>
    </group>
  );
};

export default WebGL3DHeroSection;