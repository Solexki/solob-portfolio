import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { ParticleText } from "./ParticleText";

export const SceneCanvas: React.FC = () => {
  return (
    <Canvas
      camera={{ position: [0, 0, 500], fov: 75 }}
      style={{ width: "100vw", height: "100vh", background: "#000" }}
    >
      <ambientLight intensity={0.5} />
      <ParticleText text="Solob.dev" />
      <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={2} />
    </Canvas>
  );
};
