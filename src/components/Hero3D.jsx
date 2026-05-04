import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Environment, OrbitControls } from "@react-three/drei";
function NeonKnot() {
    const ref = useRef(null);
    useFrame((_, delta) => {
        if (ref.current) {
            ref.current.rotation.x += delta * 0.2;
            ref.current.rotation.y += delta * 0.3;
        }
    });
    return (<Float speed={1.2} rotationIntensity={0.6} floatIntensity={1.2}>
      <mesh ref={ref} scale={1.6}>
        <torusKnotGeometry args={[1, 0.32, 220, 32]}/>
        <MeshDistortMaterial color="#22d3ee" emissive="#22d3ee" emissiveIntensity={0.6} roughness={0.15} metalness={0.9} distort={0.35} speed={1.5}/>
      </mesh>
    </Float>);
}
export function Hero3D() {
    return (<Canvas camera={{ position: [0, 0, 6], fov: 45 }} dpr={[1, 2]}>
      <color attach="background" args={["#000000"]}/>
      <ambientLight intensity={0.4}/>
      <pointLight position={[5, 5, 5]} intensity={2} color="#22d3ee"/>
      <pointLight position={[-5, -3, -5]} intensity={2} color="#ec4899"/>
      <Suspense fallback={null}>
        <NeonKnot />
        <Environment preset="city"/>
      </Suspense>
      <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.6}/>
    </Canvas>);
}
