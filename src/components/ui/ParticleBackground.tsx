'use client';

import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

export interface ParticleBackgroundProps {
  // Appearance
  particleCount?: number;
  colors?: string[];
  minSize?: number;
  maxSize?: number;
  minOpacity?: number;
  maxOpacity?: number;
  
  // Movement
  speed?: number;
  
  // Connection lines
  showConnections?: boolean;
  connectionDistance?: number;
  connectionColor?: string;
  connectionOpacity?: number;
  connectionWidth?: number;
  
  // Container
  className?: string;
}

interface Particle {
  x: number;
  y: number;
  size: number;
  color: string;
  velocity: {
    x: number;
    y: number;
  };
  opacity: number;
}

export default function ParticleBackground({
  particleCount = 30,
  colors = ['#5ad1ff', '#b36cff', '#5affc6', '#ff5a36', '#ffe156'],
  minSize = 1,
  maxSize = 4,
  minOpacity = 0.2,
  maxOpacity = 0.7,
  speed = 1,
  showConnections = true,
  connectionDistance = 100,
  connectionColor = '#5ad1ff',
  connectionOpacity = 0.2,
  connectionWidth = 0.5,
  className = ''
}: Readonly<ParticleBackgroundProps>) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particles = useRef<Particle[]>([]);
  const animationRef = useRef<number | undefined>(undefined);
  
  // Initialize particles
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Set canvas size
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    
    // Create particles
    particles.current = [];
    for (let i = 0; i < particleCount; i++) {
      particles.current.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * (maxSize - minSize) + minSize,
        color: colors[Math.floor(Math.random() * colors.length)],
        velocity: {
          x: (Math.random() - 0.5) * speed * 0.5,
          y: (Math.random() - 0.5) * speed * 0.5
        },
        opacity: Math.random() * (maxOpacity - minOpacity) + minOpacity
      });
    }
    
    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw connection lines first (so they appear behind particles)
      if (showConnections) {
        for (let i = 0; i < particles.current.length; i++) {
          const particle = particles.current[i];
          connectParticles(particle, particles.current, ctx);
        }
      }
      
      // Draw and update particles
      particles.current.forEach(particle => {
        // Update position
        particle.x += particle.velocity.x;
        particle.y += particle.velocity.y;
        
        // Boundary check
        if (particle.x < 0 || particle.x > canvas.width) {
          particle.velocity.x *= -1;
        }
        
        if (particle.y < 0 || particle.y > canvas.height) {
          particle.velocity.y *= -1;
        }
        
        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        // Convert opacity to hex for the color
        const opacityHex = Math.floor(particle.opacity * 255).toString(16).padStart(2, '0');
        ctx.fillStyle = particle.color + opacityHex;
        ctx.fill();
      });
      
      animationRef.current = requestAnimationFrame(animate);
    };
    
    // Draw connections between nearby particles
    const connectParticles = (particle: Particle, particles: Particle[], ctx: CanvasRenderingContext2D) => {
      for (const otherParticle of particles) {
        if (particle === otherParticle) continue;
        
        const distance = Math.sqrt(
          Math.pow(particle.x - otherParticle.x, 2) + 
          Math.pow(particle.y - otherParticle.y, 2)
        );
        
        if (distance < connectionDistance) {
          const opacity = (1 - distance / connectionDistance) * connectionOpacity;
          ctx.beginPath();
          
          // Generate a semi-transparent version of the connection color
          const colorWithOpacity = `${connectionColor}${Math.floor(opacity * 255).toString(16).padStart(2, '0')}`;
          
          ctx.strokeStyle = colorWithOpacity;
          ctx.lineWidth = connectionWidth;
          ctx.moveTo(particle.x, particle.y);
          ctx.lineTo(otherParticle.x, otherParticle.y);
          ctx.stroke();
        }
      }
    };
    
    // Start animation
    animate();
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [
    particleCount,
    JSON.stringify(colors),
    minSize,
    maxSize,
    minOpacity,
    maxOpacity,
    speed,
    showConnections,
    connectionDistance,
    connectionColor,
    connectionOpacity,
    connectionWidth
  ]);

  return (
    <motion.canvas
      ref={canvasRef}
      className={`absolute inset-0 w-full h-full pointer-events-none z-1 ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    />
  );
}
