"use client";

import { useEffect, useRef } from "react";

interface MatrixRainProps {
  color?: string;
  backgroundColor?: string;
  opacity?: number;
}

export function MatrixRain({ 
  color = "#4E85BF", 
  backgroundColor = "rgba(10, 10, 10, 0.1)",
  opacity = 0.8
}: MatrixRainProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let lastDrawTime = 0;
    const fps = 30;
    const fpsInterval = 1000 / fps;

    // Handle resize
    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Matrix characters
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789$+-*/=%\"'#&_(),.;:?!\\|{}<>[]^~";
    const fontSize = 14;
    const columns = Math.ceil(canvas.width / fontSize);

    // Array of drops - one per column
    const drops: number[] = new Array(columns).fill(1);

    const draw = (currentTime: number) => {
      animationFrameId = requestAnimationFrame(draw);

      const deltaTime = currentTime - lastDrawTime;
      if (deltaTime > fpsInterval) {
        lastDrawTime = currentTime - (deltaTime % fpsInterval);

        // Black background with slight opacity to create trail effect
        ctx.fillStyle = backgroundColor;
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.font = `${fontSize}px monospace`;
        ctx.textAlign = "center";

        for (let i = 0; i < drops.length; i++) {
          // Random character
          const text = chars[Math.floor(Math.random() * chars.length)];

          // Draw the character
          // Add a glowing effect to the head of the drop
          if (Math.random() > 0.9) {
            ctx.fillStyle = "#ffffff";
          } else {
            ctx.fillStyle = color;
          }
          
          ctx.fillText(text, i * fontSize + fontSize / 2, drops[i] * fontSize);

          // Reset drop to top randomly after it crosses the screen
          if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
            drops[i] = 0;
          }

          // Move drop down
          drops[i]++;
        }
      }
    };

    animationFrameId = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, [color, backgroundColor]);

  return (
    <canvas 
      ref={canvasRef} 
      className="absolute inset-0 w-full h-full" 
      style={{ opacity }}
    />
  );
}
