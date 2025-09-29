import { useRef } from "react";
import { Text, Image } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { Group } from "three";

const WebGL3DCapabilitiesSection = () => {
  const sectionRef = useRef<Group>(null);

  useFrame((state) => {
    if (sectionRef.current) {
      sectionRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.02;
    }
  });

  const capabilities = [
    {
      title: "Cloud Solutions",
      description: "Accelerate innovation with scalable cloud infrastructure and migration services.",
      icon: "☁️",
      position: [-6, 0, 0]
    },
    {
      title: "Data & AI",
      description: "Transform decision-making with advanced analytics and artificial intelligence.",
      icon: "🤖",
      position: [-2, 0, 0]
    },
    {
      title: "Cybersecurity",
      description: "Protect your digital assets with comprehensive security solutions.",
      icon: "🔒",
      position: [2, 0, 0]
    },
    {
      title: "Digital Transformation",
      description: "Modernize operations and drive growth through digital innovation.",
      icon: "⚡",
      position: [-6, -3, 0]
    },
    {
      title: "Consulting",
      description: "Strategic guidance to optimize technology investments and outcomes.",
      icon: "💡",
      position: [-2, -3, 0]
    },
    {
      title: "Managed Services",
      description: "24/7 support and management to keep your systems running smoothly.",
      icon: "🛠️",
      position: [2, -3, 0]
    }
  ];

  return (
    <group ref={sectionRef} position={[0, -2, 0]}>
      {/* Section Header */}
      <Text
        position={[0, 2, 0]}
        fontSize={1}
        color="white"
        anchorX="center"
        anchorY="middle"
        maxWidth={15}
        textAlign="center"
        font="/fonts/inter-bold.woff"
      >
        Our Core Capabilities
      </Text>

      <Text
        position={[0, 1, 0]}
        fontSize={0.4}
        color="rgba(255, 255, 255, 0.7)"
        anchorX="center"
        anchorY="middle"
        maxWidth={15}
        textAlign="center"
        font="/fonts/inter-regular.woff"
        lineHeight={1.4}
      >
        Comprehensive technology solutions designed to transform your business{"\n"}operations and drive sustainable growth.
      </Text>

      {/* Capabilities Cards */}
      {capabilities.map((capability, index) => (
        <group key={capability.title} position={capability.position as [number, number, number]}>
          {/* Card Background */}
          <mesh>
            <planeGeometry args={[3.5, 2.5]} />
            <meshPhysicalMaterial
              transparent
              opacity={0.1}
              roughness={0.1}
              metalness={0.1}
              transmission={0.9}
              thickness={0.1}
            />
          </mesh>

          {/* Icon */}
          <Text
            position={[0, 0.8, 0.01]}
            fontSize={0.6}
            color="white"
            anchorX="center"
            anchorY="middle"
          >
            {capability.icon}
          </Text>

          {/* Title */}
          <Text
            position={[0, 0.3, 0.01]}
            fontSize={0.35}
            color="white"
            anchorX="center"
            anchorY="middle"
            maxWidth={3}
            textAlign="center"
            font="/fonts/inter-bold.woff"
          >
            {capability.title}
          </Text>

          {/* Description */}
          <Text
            position={[0, -0.4, 0.01]}
            fontSize={0.2}
            color="rgba(255, 255, 255, 0.7)"
            anchorX="center"
            anchorY="middle"
            maxWidth={3}
            textAlign="center"
            font="/fonts/inter-regular.woff"
            lineHeight={1.3}
          >
            {capability.description}
          </Text>
        </group>
      ))}
    </group>
  );
};

export default WebGL3DCapabilitiesSection;