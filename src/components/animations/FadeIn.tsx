import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface FadeInProps {
  children: ReactNode;
  direction?: 'up' | 'down' | 'left' | 'right';
  delay?: number;
  className?: string;
  duration?: number;
  once?: boolean;
}

export default function FadeIn({
  children,
  direction = 'up',
  delay = 0,
  className = '',
  duration = 0.5,
  once = true,
}: FadeInProps) {
  const [ref, inView] = useInView({
    triggerOnce: once,
    threshold: 0.1,
  });

  const directionMap = {
    up: { y: 40, x: 0 },
    down: { y: -40, x: 0 },
    left: { x: 40, y: 0 },
    right: { x: -40, y: 0 },
  };

  const variants = {
    hidden: {
      opacity: 0,
      ...directionMap[direction],
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        duration: duration,
        delay: delay,
        ease: 'easeOut',
      },
    },
  };

  return (
    <div ref={ref} className={className}>
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
