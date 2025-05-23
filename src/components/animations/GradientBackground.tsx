'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface GradientBackgroundProps {
  type?: 'radial' | 'linear';
  colorFrom?: string;
  colorTo?: string;
  className?: string;
  animate?: boolean;
}

/**
 * A reusable animated gradient background component
 */
export default function GradientBackground({
  type = 'linear',
  colorFrom = 'rgba(90,209,255,0.2)',
  colorTo = 'transparent',
  className = '',
  animate = true
}: Readonly<GradientBackgroundProps>) {
  
  // Instead of dynamic classes, use inline styles for gradients
  const gradientStyle = {
    background: type === 'radial'
      ? `radial-gradient(circle, ${colorFrom} 0%, ${colorTo} 100%)`
      : `linear-gradient(to bottom, ${colorFrom} 0%, ${colorTo} 100%)`
  };
    
  return (
    <motion.div
      className={`absolute inset-0 blur-3xl z-[5] ${className}`}
      style={gradientStyle}
      initial={animate ? { opacity: 0.6 } : {}}
      animate={animate ? { 
        opacity: [0.6, 0.8, 0.6],
      } : {}}
      transition={animate ? {
        duration: 4,
        repeat: Infinity,
        repeatType: 'reverse'
      } : {}}
    />
  );
}
