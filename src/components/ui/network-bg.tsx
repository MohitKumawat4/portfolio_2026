"use client";

import { useMemo, useRef, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function Plexus({ count = 250 }) {
  const group = useRef<THREE.Group>(null);
  const maxDistance = 3.5;

  // Pre-calculate positions and lines for a static mesh that we will simply rotate.
  // This is highly performant compared to calculating distances every frame.
  const { positions, linePositions } = useMemo(() => {
    const pos = [];
    for (let i = 0; i < count; i++) {
      pos.push(new THREE.Vector3(
        (Math.random() - 0.5) * 25,
        (Math.random() - 0.5) * 25,
        (Math.random() - 0.5) * 25
      ));
    }
    
    const lines = [];
    for (let i = 0; i < count; i++) {
      for (let j = i + 1; j < count; j++) {
        if (pos[i].distanceTo(pos[j]) < maxDistance) {
          lines.push(pos[i].x, pos[i].y, pos[i].z);
          lines.push(pos[j].x, pos[j].y, pos[j].z);
        }
      }
    }
    
    const posArray = new Float32Array(pos.length * 3);
    for(let i=0; i<pos.length; i++) {
        posArray[i*3] = pos[i].x;
        posArray[i*3+1] = pos[i].y;
        posArray[i*3+2] = pos[i].z;
    }

    return { 
      positions: posArray,
      linePositions: new Float32Array(lines) 
    };
  }, [count]);

  useFrame((state) => {
    if (group.current) {
      group.current.rotation.y = state.clock.getElapsedTime() * 0.05;
      group.current.rotation.x = state.clock.getElapsedTime() * 0.02;
    }
  });

  return (
    <group ref={group}>
      <points>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[positions, 3]}
            count={positions.length / 3}
            array={positions}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial size={0.08} color="#6ba6e8" transparent opacity={0.9} sizeAttenuation />
      </points>
      <lineSegments>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[linePositions, 3]}
            count={linePositions.length / 3}
            array={linePositions}
            itemSize={3}
          />
        </bufferGeometry>
        <lineBasicMaterial color="#4E85BF" transparent opacity={0.25} />
      </lineSegments>
    </group>
  );
}

export function NetworkBg() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <div className="absolute inset-0 z-0 bg-[#02050a] overflow-hidden pointer-events-none">
      {/* Background radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(15,40,70,0.5)_0%,rgba(2,5,10,1)_80%)]" />
      
      {/* 3D Plexus Network */}
      <Canvas 
        camera={{ position: [0, 0, 18], fov: 60 }} 
        className="w-full h-full opacity-80"
        dpr={[1, 1.5]}
        performance={{ min: 0.5 }}
      >
        <Plexus count={isMobile ? 100 : 300} />
      </Canvas>
      
      {/* Premium film grain */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.15] mix-blend-overlay" />

      {/* Top and bottom fade to blend with page background */}
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#0a0a0a] to-[#0a0a0a00] pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#0a0a0a] to-[#0a0a0a00] pointer-events-none" />
    </div>
  );
}
