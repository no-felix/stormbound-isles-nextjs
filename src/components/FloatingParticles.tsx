"use client";

import React, { useEffect, useRef, useMemo } from "react";

interface Particle {
  x: number;
  y: number;
  size: number;
  color: string;
  opacity: number;
  speed: number;
  direction: number;
}

interface ParticleProps {
  colors?: string[];
  count?: number;
  sizeRange?: { min: number; max: number };
  speedRange?: { min: number; max: number };
  opacityRange?: { min: number; max: number };
  connectLines?: boolean;
  connectDistance?: number; // Optional, default 100
}

const FloatingParticles: React.FC<ParticleProps> = ({
  colors: initialColors = [
    "var(--isle-fire)",
    "var(--isle-ice)",
    "var(--isle-desert)",
    "var(--isle-mushroom)",
    "var(--isle-crystal)",
  ],
  count = 50,
  sizeRange = { min: 1, max: 5 },
  speedRange = { min: 0.1, max: 0.6 },
  opacityRange = { min: 0.1, max: 0.4 },
  connectLines = false,
  connectDistance = 100,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesArray = useRef<Particle[]>([]);

  const resolvedColors = useMemo(() => {
    if (typeof window === "undefined") {
      // Return a non-empty array with placeholders or default colors for SSR if needed,
      // or an empty array if client-side resolution is strictly required before any rendering.
      // For now, returning empty to ensure client-side resolution happens first.
      return [];
    }
    return initialColors
      .map((color) => {
        if (color.startsWith("var(")) {
          const match = /--[\w-]+/.exec(color);
          const cssVarName = match ? match[0] : null;
          if (cssVarName) {
            const resolved = getComputedStyle(document.documentElement)
              .getPropertyValue(cssVarName)
              .trim();
            return resolved || "#000000"; // Fallback if var is empty or not found
          }
          return "#000000"; // Fallback if var name extraction fails
        }
        return color; // Return as is if not a CSS variable string
      })
      .filter((color) => !!color && color.trim() !== ""); // Ensure no empty strings
  }, [initialColors]);

  useEffect(() => {
    if (resolvedColors.length === 0 && typeof window !== "undefined") {
      // This condition means colors are still being resolved or initialColors led to no resolvable colors.
      // We might want to wait or handle this case, but for now, if no colors, no particles.
      return;
    }
    if (resolvedColors.length === 0 && typeof window === "undefined") {
      // If SSR and no colors (as per useMemo logic), don't proceed.
      return;
    }

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;

    const initializeParticles = () => {
      particlesArray.current = [];
      const canvasWidth = window.innerWidth;
      const canvasHeight = window.innerHeight;
      canvas.width = canvasWidth;
      canvas.height = canvasHeight;

      if (resolvedColors.length === 0) return; // Don't initialize if no colors

      for (let i = 0; i < count; i++) {
        particlesArray.current.push({
          x: Math.random() * canvasWidth,
          y: Math.random() * canvasHeight,
          size: Math.random() * (sizeRange.max - sizeRange.min) + sizeRange.min,
          color:
            resolvedColors[Math.floor(Math.random() * resolvedColors.length)],
          opacity:
            Math.random() * (opacityRange.max - opacityRange.min) +
            opacityRange.min,
          speed:
            Math.random() * (speedRange.max - speedRange.min) + speedRange.min,
          direction: Math.random() * 360,
        });
      }
    };


    const updateAndDrawParticles = () => {
      const canvasWidth = canvas.width;
      const canvasHeight = canvas.height;
      ctx.clearRect(0, 0, canvasWidth, canvasHeight);

      // Draw connections first if enabled
      if (connectLines) {
        for (let i = 0; i < particlesArray.current.length; i++) {
          const p1 = particlesArray.current[i];
          for (let j = i + 1; j < particlesArray.current.length; j++) {
            const p2 = particlesArray.current[j];
            const dx = p1.x - p2.x;
            const dy = p1.y - p2.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < connectDistance) {
              ctx.save();
              ctx.globalAlpha = 0.15 * (1 - dist / connectDistance);
              ctx.strokeStyle = p1.color;
              ctx.beginPath();
              ctx.moveTo(p1.x, p1.y);
              ctx.lineTo(p2.x, p2.y);
              ctx.stroke();
              ctx.restore();
            }
          }
        }
      }

      // Draw and update particles
      particlesArray.current.forEach((particle) => {
        const radians = particle.direction * (Math.PI / 180);
        particle.x += Math.cos(radians) * particle.speed;
        particle.y += Math.sin(radians) * particle.speed;

        if (particle.x < 0 || particle.x > canvasWidth - particle.size) {
          particle.direction = 180 - particle.direction;
          particle.x = Math.max(
            0,
            Math.min(particle.x, canvasWidth - particle.size)
          );
        }
        if (particle.y < 0 || particle.y > canvasHeight - particle.size) {
          particle.direction = 360 - particle.direction;
          particle.y = Math.max(
            0,
            Math.min(particle.y, canvasHeight - particle.size)
          );
        }
        particle.direction = ((particle.direction % 360) + 360) % 360;

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2, false);
        ctx.globalAlpha = particle.opacity;
        ctx.fillStyle = particle.color;
        ctx.fill();
        ctx.closePath();
      });
      ctx.globalAlpha = 1;
      animationFrameId = requestAnimationFrame(updateAndDrawParticles);
    };

    const handleResize = () => {
      initializeParticles();
    };

    // Only initialize and start animation if we have resolved colors
    if (resolvedColors.length > 0) {
      initializeParticles();
      animationFrameId = requestAnimationFrame(updateAndDrawParticles);
      window.addEventListener("resize", handleResize);
    }

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
    };
  }, [resolvedColors, count, sizeRange, speedRange, opacityRange, connectDistance, connectLines]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-screen h-screen pointer-events-none"
      style={{ zIndex: 1 }}
      aria-hidden="true"
      tabIndex={-1}
    />
  );
};

export default FloatingParticles;
