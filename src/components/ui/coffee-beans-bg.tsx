"use client";

import { useRef, useMemo, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import * as THREE from "three";

function FloatingBeans({ count = 150 }) {
  const mesh = useRef<THREE.InstancedMesh>(null);
  const dummy = useMemo(() => new THREE.Object3D(), []);
  
  // Mathematically create a coffee bean shape by deforming a sphere
  const beanGeometry = useMemo(() => {
    // Need higher resolution to deform smoothly
    const geo = new THREE.SphereGeometry(0.5, 32, 32);
    geo.scale(1, 1.4, 0.8); // Flatten into an ellipsoid
    
    const posAttribute = geo.attributes.position;
    const v = new THREE.Vector3();
    for (let i = 0; i < posAttribute.count; i++) {
      v.fromBufferAttribute(posAttribute, i);
      
      // Carve the classic coffee bean "crack" along the center
      const crackWidth = 0.15;
      if (v.z > 0 && Math.abs(v.x) < crackWidth) {
        // Deeper in the exact center, fading to the edges
        const depth = (crackWidth - Math.abs(v.x)) / crackWidth;
        // Taper the crack off at the top and bottom of the bean
        const yTaper = Math.max(0, 1 - Math.abs(v.y) / 0.6);
        v.z -= depth * 0.3 * yTaper;
        
        // Slightly pinch the sides of the crack inwards
        v.x -= Math.sign(v.x) * depth * 0.05 * yTaper;
      }
      posAttribute.setXYZ(i, v.x, v.y, v.z);
    }
    geo.computeVertexNormals();
    return geo;
  }, []);
  
  // Pre-calculate random positions, rotations, and movement factors for each bean
  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
      const t = Math.random() * 100;
      const factor = 10 + Math.random() * 20; // Radius of movement
      const speed = (0.005 + Math.random() / 200) * 1.25; // Increased by 25%
      // Spread out across the screen space
      const xFactor = -30 + Math.random() * 60;
      const yFactor = -30 + Math.random() * 60;
      
      // Initial Z position
      const zOffset = Math.random() * Math.PI * 2;
      const zSpeed = (0.5 + Math.random() * 0.5) * 1.25; // Increased by 25%
      
      // Random starting rotations
      const initRotX = Math.random() * Math.PI * 2;
      const initRotY = Math.random() * Math.PI * 2;
      const initRotZ = Math.random() * Math.PI * 2;
      
      const rotSpeedX = (Math.random() * 0.5 - 0.25) * 1.25; // Increased by 25%
      const rotSpeedY = (Math.random() * 0.5 - 0.25) * 1.25; // Increased by 25%
      const rotSpeedZ = (Math.random() * 0.5 - 0.25) * 1.25; // Increased by 25%

      temp.push({ 
        t, factor, speed, xFactor, yFactor, 
        zOffset, zSpeed, 
        initRotX, initRotY, initRotZ, 
        rotSpeedX, rotSpeedY, rotSpeedZ 
      });
    }
    return temp;
  }, [count]);

  useFrame(() => {
    if (!mesh.current) return;
    
    particles.forEach((particle, i) => {
      // Advance time for this particle
      let { 
        t, factor, speed, xFactor, yFactor, 
        zOffset, zSpeed,
        initRotX, initRotY, initRotZ,
        rotSpeedX, rotSpeedY, rotSpeedZ 
      } = particle;
      t = particle.t += speed;
      
      const s = Math.cos(t);

      // Deep Z-axis travel
      const dynamicZ = -3 + Math.sin(t * zSpeed * 0.2 + zOffset) * 22;

      // Organic, wandering X/Y movement (breaking the perfect circular orbit)
      // Using multiple overlapping sine/cosine waves with different frequencies
      // based on the bean's unique initial rotations to create chaotic, string-free drifting
      const dynamicX = xFactor + 
                       Math.sin(t * 0.3 + initRotY) * factor * 0.5 + 
                       Math.cos(t * 0.1 + initRotZ) * factor * 0.3;
                       
      const dynamicY = yFactor + 
                       Math.cos(t * 0.2 + initRotX) * factor * 0.5 + 
                       Math.sin(t * 0.15 + initRotY) * factor * 0.3;

      dummy.position.set(dynamicX, dynamicY, dynamicZ);
      
      // Randomize the scale of each bean slightly
      const scaleBase = 0.8 + (i % 3) * 0.1;
      dummy.scale.set(scaleBase + s * 0.05, scaleBase + s * 0.05, scaleBase + s * 0.05);
      
      // Turbulent, non-linear tumbling rotation
      // Adds sine wave oscillation to the rotation so they tumble and change spin direction naturally
      dummy.rotation.set(
        initRotX + t * rotSpeedX + Math.sin(t * 0.2 + initRotZ) * 1.5,
        initRotY + t * rotSpeedY + Math.cos(t * 0.3 + initRotX) * 2.0,
        initRotZ + t * rotSpeedZ + Math.sin(t * 0.25 + initRotY) * 1.5
      );
      
      dummy.updateMatrix();
      mesh.current!.setMatrixAt(i, dummy.matrix);
    });
    
    mesh.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={mesh} args={[beanGeometry, null as any, count]}>
      {/* Rich, glossy dark roasted coffee bean material */}
      <meshStandardMaterial 
        color="#2a1205" 
        roughness={0.4} 
        metalness={0.1} 
        envMapIntensity={1.5}
      />
    </instancedMesh>
  );
}

export function CoffeeBeansBg() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#140a05] to-[#050201] overflow-hidden pointer-events-none">
      <Canvas 
        camera={{ position: [0, 0, 20], fov: 60 }} 
        className="w-full h-full opacity-80"
        dpr={[1, 1.5]}
        performance={{ min: 0.5 }}
      >
        <ambientLight intensity={0.5} />
        {/* Warm amber rim lighting */}
        <directionalLight position={[10, 10, 5]} intensity={3} color="#ffad5c" />
        {/* Subtle cool fill light */}
        <pointLight position={[-10, -10, -5]} intensity={1} color="#6688cc" />
        
        {/* Provides realistic reflections on the glossy beans */}
        {/* On extremely low-end devices, we could even drop the Environment, but let's keep it for visual fidelity */}
        <Environment preset="city" />
        
        <FloatingBeans count={isMobile ? 50 : 150} />
      </Canvas>
      {/* Dark vignette overlay to keep text readable */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0)_0%,rgba(0,0,0,0.8)_100%)]" />

      {/* Top and bottom fade to blend with page background */}
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#0a0a0a] to-[#0a0a0a00] pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#0a0a0a] to-[#0a0a0a00] pointer-events-none" />
    </div>
  );
}
