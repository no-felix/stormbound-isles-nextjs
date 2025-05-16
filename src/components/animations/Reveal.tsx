import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface RevealProps {
  children: ReactNode;
  className?: string;
  width?: 'full' | 'partial';
  delay?: number;
  once?: boolean;
}

export default function Reveal({ 
  children, 
  className = '',
  width = 'full',
  delay = 0,
  once = true
}: RevealProps) {
  const [ref, inView] = useInView({
    triggerOnce: once,
    threshold: 0.1,
  });

  const variants = {
    hidden: { 
      opacity: 0,
      clipPath: width === 'full' 
        ? 'inset(0 100% 0 0)' 
        : 'inset(0 50% 0 0)' 
    },
    visible: { 
      opacity: 1,
      clipPath: 'inset(0 0 0 0)',
      transition: {
        duration: 0.8,
        delay: delay,
        ease: [0.25, 0.1, 0.25, 1], // cubic-bezier easing
      }
    }
  };

  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <motion.div
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        variants={variants}
      >
        {children}
      </motion.div>
    </div>
  );
}
