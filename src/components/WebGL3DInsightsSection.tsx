import { useRef } from "react";
import { Text, Box } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { Group } from "three";

const WebGL3DInsightsSection = () => {
  const sectionRef = useRef<Group>(null);

  useFrame((state) => {
    if (sectionRef.current) {
      sectionRef.current.position.z = Math.sin(state.clock.elapsedTime * 0.3) * 0.2;
    }
  });

  const insights = [
    {
      title: "The Future of AI in Enterprise: 2025 Predictions",
      description: "Explore how artificial intelligence will reshape business operations and drive competitive advantage.",
      category: "AI & Analytics",
      date: "December 15, 2024",
      position: [-4, 0, 0]
    },
    {
      title: "Cloud Migration Success: Fortune 500 Transformations",
      description: "Key insights and best practices from successful large-scale cloud adoption projects.",
      category: "Cloud Strategy", 
      date: "December 10, 2024",
      position: [0, 0, 0]
    },
    {
      title: "Cybersecurity in 2025: Emerging Threats and Defense",
      description: "Stay ahead of evolving cyber threats with proactive security frameworks and tools.",
      category: "Security",
      date: "December 5, 2024", 
      position: [4, 0, 0]
    }
  ];

  return (
    <group ref={sectionRef} position={[0, -8, 0]}>
      {/* Section Header */}
      <Text
        position={[0, 3, 0]}
        fontSize={1}
        color="white"
        anchorX="center"
        anchorY="middle"
        maxWidth={15}
        textAlign="center"
        font="/fonts/inter-bold.woff"
      >
        Latest Insights
      </Text>

      <Text
        position={[0, 2, 0]}
        fontSize={0.4}
        color="rgba(255, 255, 255, 0.7)"
        anchorX="center"
        anchorY="middle"
        maxWidth={15}
        textAlign="center"
        font="/fonts/inter-regular.woff"
        lineHeight={1.4}
      >
        Stay ahead with our latest research, industry analysis, and technology trends{"\n"}that shape the future of digital transformation.
      </Text>

      {/* Insights Cards */}
      {insights.map((insight, index) => (
        <group key={index} position={insight.position as [number, number, number]}>
          {/* Card Background */}
          <mesh>
            <planeGeometry args={[3.5, 4]} />
            <meshPhysicalMaterial
              transparent
              opacity={0.1}
              roughness={0.1}
              metalness={0.1}
              transmission={0.9}
              thickness={0.1}
            />
          </mesh>

          {/* Article Image Placeholder */}
          <Box position={[0, 1.2, 0.01]} args={[3, 1.5, 0.05]}>
            <meshPhysicalMaterial
              transparent
              opacity={0.05}
              color="white"
            />
          </Box>

          {/* Category Badge */}
          <mesh position={[-1, 0.2, 0.02]}>
            <planeGeometry args={[1.5, 0.3]} />
            <meshPhysicalMaterial
              transparent
              opacity={0.2}
              color="#8b5cf6"
            />
          </mesh>
          <Text
            position={[-1, 0.2, 0.03]}
            fontSize={0.15}
            color="#8b5cf6"
            anchorX="center"
            anchorY="middle"
            font="/fonts/inter-medium.woff"
          >
            {insight.category}
          </Text>

          {/* Date */}
          <Text
            position={[1, 0.2, 0.02]}
            fontSize={0.12}
            color="rgba(255, 255, 255, 0.5)"
            anchorX="center"
            anchorY="middle"
            font="/fonts/inter-regular.woff"
          >
            {insight.date}
          </Text>

          {/* Title */}
          <Text
            position={[0, -0.3, 0.02]}
            fontSize={0.25}
            color="white"
            anchorX="center"
            anchorY="middle"
            maxWidth={3.2}
            textAlign="center"
            font="/fonts/inter-bold.woff"
            lineHeight={1.2}
          >
            {insight.title}
          </Text>

          {/* Description */}
          <Text
            position={[0, -1, 0.02]}
            fontSize={0.18}
            color="rgba(255, 255, 255, 0.7)"
            anchorX="center"
            anchorY="middle"
            maxWidth={3.2}
            textAlign="center"
            font="/fonts/inter-regular.woff"
            lineHeight={1.3}
          >
            {insight.description}
          </Text>

          {/* Read More Link */}
          <Text
            position={[0, -1.6, 0.02]}
            fontSize={0.2}
            color="#8b5cf6"
            anchorX="center"
            anchorY="middle"
            font="/fonts/inter-medium.woff"
          >
            Read More →
          </Text>
        </group>
      ))}
    </group>
  );
};

export default WebGL3DInsightsSection;