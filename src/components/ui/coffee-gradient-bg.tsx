"use client";

import { motion } from "framer-motion";

export function CoffeeGradientBg() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden bg-[#0c0806]">
      {/* Deep Espresso Base Orb */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
          x: [0, 50, 0],
          y: [0, -50, 0]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[-20%] left-[-10%] w-[70%] h-[70%] rounded-full bg-[radial-gradient(circle,rgba(160,80,30,0.4)_0%,rgba(0,0,0,0)_70%)] blur-[100px]"
      />
      {/* Warm Caramel Mid Orb */}
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
          x: [0, -40, 0],
          y: [0, 60, 0]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[-20%] right-[-10%] w-[80%] h-[80%] rounded-full bg-[radial-gradient(circle,rgba(200,110,40,0.3)_0%,rgba(0,0,0,0)_70%)] blur-[120px]"
      />
      {/* Light Latte Steam Orb */}
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.1, 0.3, 0.1],
          x: [-30, 30, -30],
          y: [30, -30, 30]
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[20%] right-[20%] w-[50%] h-[50%] rounded-full bg-[radial-gradient(circle,rgba(240,180,120,0.2)_0%,rgba(0,0,0,0)_70%)] blur-[80px]"
      />
      
      {/* Grainy texture overlay for premium feel */}
      <div 
        className="absolute inset-0 opacity-[0.15] mix-blend-overlay pointer-events-none"
        style={{ backgroundImage: "url('https://grainy-gradients.vercel.app/noise.svg')" }}
      />
    </div>
  );
}
