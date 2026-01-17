"use client";

import { useRef, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { SHARED_NODES, CONNECTION_DISTANCE_HERO } from "./networkConfig";

function NetworkLines() {
  const linesRef = useRef(null);

  useFrame(() => {
    if (!linesRef.current) return;

    const time = performance.now() * 0.001;
    const currentPositions = [];

    for (let i = 0; i < SHARED_NODES.length; i++) {
      const node = SHARED_NODES[i];
      const x = node.x + Math.sin(time * node.speedX + node.phase) * 0.3;
      const y = node.y + Math.sin(time * node.speedY + node.phase) * 0.4;
      const z = node.z + Math.sin(time * 0.2 + node.phase) * 0.2;

      currentPositions.push({ x, y, z });
    }

    const linePositions = [];
    const lineColors = [];

    for (let i = 0; i < SHARED_NODES.length; i++) {
      for (let j = i + 1; j < SHARED_NODES.length; j++) {
        const dx = currentPositions[i].x - currentPositions[j].x;
        const dy = currentPositions[i].y - currentPositions[j].y;
        const dz = currentPositions[i].z - currentPositions[j].z;
        const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

        if (dist < CONNECTION_DISTANCE_HERO) {
          const opacity = 1 - dist / CONNECTION_DISTANCE_HERO;
          const colI = new THREE.Color(SHARED_NODES[i].color);
          const colJ = new THREE.Color(SHARED_NODES[j].color);

          linePositions.push(
            currentPositions[i].x, currentPositions[i].y, currentPositions[i].z,
            currentPositions[j].x, currentPositions[j].y, currentPositions[j].z
          );

          lineColors.push(
            colI.r * opacity, colI.g * opacity, colI.b * opacity,
            colJ.r * opacity, colJ.g * opacity, colJ.b * opacity
          );
        }
      }
    }

    linesRef.current.geometry.setAttribute(
      'position',
      new THREE.Float32BufferAttribute(linePositions, 3)
    );
    linesRef.current.geometry.setAttribute(
      'color',
      new THREE.Float32BufferAttribute(lineColors, 3)
    );
  });

  return (
    <lineSegments ref={linesRef}>
      <bufferGeometry />
      <lineBasicMaterial
        vertexColors
        transparent
        opacity={0.4}
        blending={THREE.AdditiveBlending}
      />
    </lineSegments>
  );
}

export default function ParticleField() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <div
      className="absolute inset-0 z-0 pointer-events-none"
      style={{
        width: '100%',
        height: '100%',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
      }}
    >
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75 }}
        style={{
          background: "transparent",
          width: '100%',
          height: '100%',
          position: 'absolute',
          top: 0,
          left: 0,
        }}
        dpr={[1, 1.5]}
        gl={{
          alpha: true,
          antialias: true,
          powerPreference: "default",
        }}
      >
        <NetworkLines />
      </Canvas>
    </div>
  );
}
