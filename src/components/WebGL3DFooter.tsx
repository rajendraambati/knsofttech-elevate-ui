import { useRef } from "react";
import { Text } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { Group } from "three";

const WebGL3DFooter = () => {
  const footerRef = useRef<Group>(null);

  useFrame((state) => {
    if (footerRef.current) {
      footerRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.1) * 0.01;
    }
  });

  const footerSections = [
    {
      title: "Services",
      links: ["AI & Data Analytics", "Cloud Solutions", "Digital Transformation", "Cybersecurity"],
      position: [-6, 0, 0]
    },
    {
      title: "Company", 
      links: ["About Us", "Careers", "Contact", "Blog"],
      position: [-2, 0, 0]
    },
    {
      title: "Resources",
      links: ["Documentation", "Case Studies", "White Papers", "Support"],
      position: [2, 0, 0]
    }
  ];

  return (
    <group ref={footerRef} position={[0, -15, 0]}>
      {/* Footer Background */}
      <mesh position={[0, 0, -0.1]}>
        <planeGeometry args={[20, 6]} />
        <meshPhysicalMaterial
          transparent
          opacity={0.05}
          roughness={0.1}
          metalness={0.1}
          transmission={0.9}
          thickness={0.1}
        />
      </mesh>

      {/* Company Logo and Description */}
      <group position={[-6, 2, 0]}>
        <Text
          position={[0, 0, 0.01]}
          fontSize={0.5}
          color="white"
          anchorX="left"
          font="/fonts/inter-bold.woff"
        >
          MCODE
        </Text>
        <Text
          position={[0, -0.8, 0.01]}
          fontSize={0.2}
          color="rgba(255, 255, 255, 0.7)"
          anchorX="left"
          anchorY="top"
          maxWidth={4}
          textAlign="left"
          font="/fonts/inter-regular.woff"
          lineHeight={1.4}
        >
          Transforming businesses through innovative AI solutions{"\n"}and expert digital transformation services.
        </Text>
      </group>

      {/* Footer Sections */}
      {footerSections.map((section, sectionIndex) => (
        <group key={section.title} position={section.position as [number, number, number]}>
          {/* Section Title */}
          <Text
            position={[0, 1.5, 0.01]}
            fontSize={0.3}
            color="white"
            anchorX="left"
            font="/fonts/inter-semibold.woff"
          >
            {section.title}
          </Text>

          {/* Section Links */}
          {section.links.map((link, linkIndex) => (
            <Text
              key={link}
              position={[0, 1 - (linkIndex * 0.4), 0.01]}
              fontSize={0.2}
              color="rgba(255, 255, 255, 0.7)"
              anchorX="left"
              font="/fonts/inter-regular.woff"
            >
              {link}
            </Text>
          ))}
        </group>
      ))}

      {/* Copyright */}
      <Text
        position={[0, -2.5, 0.01]}
        fontSize={0.2}
        color="rgba(255, 255, 255, 0.5)"
        anchorX="center"
        font="/fonts/inter-regular.woff"
      >
        © 2024 MCODE. All rights reserved.
      </Text>
    </group>
  );
};

export default WebGL3DFooter;