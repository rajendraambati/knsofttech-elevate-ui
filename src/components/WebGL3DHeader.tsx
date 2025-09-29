import { useState, useRef } from "react";
import { Text, Html } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { Group, Vector3 } from "three";

const WebGL3DHeader = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const headerRef = useRef<Group>(null);

  useFrame((state) => {
    if (headerRef.current) {
      headerRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
    }
  });

  const menuItems = ["COMPANY", "FEATURES", "RESOURCES", "DOCS"];

  return (
    <group ref={headerRef} position={[0, 8, 0]}>
      {/* Glass Background Plane */}
      <mesh position={[0, 0, -0.1]}>
        <planeGeometry args={[20, 2]} />
        <meshPhysicalMaterial
          transparent
          opacity={0.1}
          roughness={0.1}
          metalness={0.1}
          transmission={0.9}
          thickness={0.1}
        />
      </mesh>

      {/* Logo */}
      <Text
        position={[-8, 0, 0]}
        fontSize={0.8}
        color="white"
        anchorX="left"
        font="/fonts/inter-bold.woff"
      >
        MCODE
      </Text>

      {/* Navigation Menu */}
      {menuItems.map((item, index) => (
        <Text
          key={item}
          position={[-2 + index * 1.5, 0, 0]}
          fontSize={0.3}
          color="rgba(255, 255, 255, 0.8)"
          anchorX="center"
          font="/fonts/inter-medium.woff"
        >
          {item}
        </Text>
      ))}

      {/* CTA Button */}
      <group position={[7, 0, 0]}>
        <mesh>
          <planeGeometry args={[2, 0.8]} />
          <meshPhysicalMaterial
            transparent
            opacity={0.2}
            roughness={0.1}
            metalness={0.1}
            transmission={0.8}
            thickness={0.1}
            color="white"
          />
        </mesh>
        <Text
          position={[0, 0, 0.01]}
          fontSize={0.25}
          color="white"
          anchorX="center"
          font="/fonts/inter-medium.woff"
        >
          SIGNING
        </Text>
      </group>
    </group>
  );
};

export default WebGL3DHeader;