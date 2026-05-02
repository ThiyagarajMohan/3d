import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment, ContactShadows, Float } from "@react-three/drei";

type Shape = "knot" | "sphere" | "cube" | "cone" | "torus" | "icosa";

function Geometry({ shape }: { shape: Shape }) {
  switch (shape) {
    case "sphere": return <sphereGeometry args={[1.4, 64, 64]} />;
    case "cube": return <boxGeometry args={[2, 2, 2]} />;
    case "cone": return <coneGeometry args={[1.4, 2.4, 48]} />;
    case "torus": return <torusGeometry args={[1.2, 0.45, 32, 100]} />;
    case "icosa": return <icosahedronGeometry args={[1.6, 0]} />;
    case "knot":
    default:
      return <torusKnotGeometry args={[1, 0.35, 200, 32]} />;
  }
}

export function ProductViewer({ shape, color }: { shape: Shape; color: string }) {
  return (
    <Canvas camera={{ position: [0, 0, 5.5], fov: 45 }} dpr={[1, 2]}>
      <ambientLight intensity={0.5} />
      <spotLight position={[6, 8, 6]} angle={0.4} intensity={2} color="#22d3ee" castShadow />
      <spotLight position={[-6, -2, -4]} angle={0.5} intensity={1.5} color="#ec4899" />
      <Suspense fallback={null}>
        <Float speed={1} rotationIntensity={0.4} floatIntensity={0.6}>
          <mesh castShadow>
            <Geometry shape={shape} />
            <meshStandardMaterial
              color={color}
              metalness={0.8}
              roughness={0.18}
              emissive={color}
              emissiveIntensity={0.15}
            />
          </mesh>
        </Float>
        <ContactShadows position={[0, -2, 0]} opacity={0.5} blur={2.4} scale={8} />
        <Environment preset="city" />
      </Suspense>
      <OrbitControls enablePan={false} minDistance={3.5} maxDistance={9} />
    </Canvas>
  );
}
