"use client";

import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Stage, OrbitControls, useGLTF } from "@react-three/drei";

function HomeModel() {
  const { scene } = useGLTF("/result-optimized.glb");
  return <primitive object={scene} />;
}

useGLTF.preload("/result-optimized.glb");

export default function ModelViewer() {
  return (
    <Canvas camera={{ position: [0, 1.2, 4], fov: 45 }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 8, 3]} intensity={1.3} />
      <Suspense fallback={null}>
        <Stage environment={null} intensity={0.6} adjustCamera={false}>
          <HomeModel />
        </Stage>
      </Suspense>
      <OrbitControls
        enablePan={false}
        enableZoom={false}
        minPolarAngle={Math.PI / 2.8}
        maxPolarAngle={Math.PI / 1.6}
        autoRotate
        autoRotateSpeed={2}
      />
    </Canvas>
  );
}
