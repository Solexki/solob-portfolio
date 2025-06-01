import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import React from "react";

const SYMBOLS = ["<", ">", "{", "}", "/", "*", "@", "#", "=", "+"];

function createTextTexture(char: string): THREE.Texture {
  const canvas = document.createElement("canvas");
  canvas.width = 64;
  canvas.height = 64;
  const ctx = canvas.getContext("2d")!;
  ctx.fillStyle = "#00ffd5";
  ctx.font = "40px monospace";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText(char, 32, 32);
  const texture = new THREE.CanvasTexture(canvas);
  texture.needsUpdate = true;
  return texture;
}

interface ParticleTextProps {
  text?: string;
}

export const ParticleText: React.FC<ParticleTextProps> = ({
  text = "Solob.dev",
}) => {
  const groupRef = useRef<THREE.Group>(null);

  const { positions, texture } = useMemo(() => {
    const canvas = document.createElement("canvas");
    canvas.width = 500;
    canvas.height = 200;
    const ctx = canvas.getContext("2d")!;
    ctx.fillStyle = "white";
    ctx.font = "bold 100px monospace";
    ctx.fillText(text, 20, 130);
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);

    const positions: number[] = [];
    for (let y = 0; y < imageData.height; y += 4) {
      for (let x = 0; x < imageData.width; x += 4) {
        const index = (y * imageData.width + x) * 4;
        if (imageData.data[index + 3] > 128) {
          const nx = x - canvas.width / 2;
          const ny = canvas.height / 2 - y;
          const nz = Math.random() * 20 - 10;
          positions.push(nx, ny, nz);
        }
      }
    }

    const texture = createTextTexture(
      SYMBOLS[Math.floor(Math.random() * SYMBOLS.length)]
    );
    return { positions: new Float32Array(positions), texture };
  }, [text]);

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.004;
      groupRef.current.rotation.x += 0.001;
    }
  });

  return (
    <group ref={groupRef}>
      <points>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        </bufferGeometry>
        <pointsMaterial
          size={8}
          sizeAttenuation
          map={texture}
          transparent
          alphaTest={0.5}
          depthWrite={false}
        />
      </points>
    </group>
  );
};
