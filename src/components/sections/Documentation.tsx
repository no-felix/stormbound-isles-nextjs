'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useAnimate } from 'framer-motion';
import FadeIn from '@/components/animations/FadeIn';
import Reveal from '@/components/animations/Reveal';
import { useInView } from 'react-intersection-observer';
import DocumentationParticles from './DocumentationParticles';
import NotImplementedLink from '@/components/ui/NotImplementedLink';

const CONSTRUCTION_EMOJIS = ['🔨', '🛠️', '🔧', '📐', '📝', '✏️', '⚙️', '🧰', '👷', '📊', '📈'];

export default function Documentation() {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const [scope, animate] = useAnimate();
  const [emojis, setEmojis] = useState<Array<{id: number, emoji: string, x: number, y: number, rotation: number}>>([]);

  // Emoji animation effect
  useEffect(() => {
    if (inView) {
      // Add a new emoji every 800ms when section is in view
      const interval = setInterval(() => {
        if (emojis.length > 25) {
          // Limit the number of emojis
          setEmojis(prev => prev.slice(1));
        }
        
        // Each emoji gets a random direction of rotation
        const rotationDirection = Math.random() > 0.5 ? 360 : -360;
        
        setEmojis(prev => [
          ...prev, 
          {
            id: Date.now(),
            emoji: CONSTRUCTION_EMOJIS[Math.floor(Math.random() * CONSTRUCTION_EMOJIS.length)],
            x: Math.random() * 100,
            y: Math.random() * 100,
            rotation: rotationDirection
          }
        ]);
      }, 800);
      
      return () => clearInterval(interval);
    }
  }, [inView, emojis.length]);

  // Gradient animation for title
  useEffect(() => {
    if (inView) {
      const animation = async () => {
        await animate(scope.current, { backgroundPosition: '0% 50%' }, { duration: 0 });
        await animate(scope.current, { backgroundPosition: '100% 50%' }, { duration: 3, repeat: Infinity, repeatType: 'reverse' });
      };
      animation();
    }
  }, [inView, animate, scope]);
  return (
    <div className="w-full h-full relative" ref={ref}>
      {/* Background gradient */}
      <div className="absolute inset-0 w-full h-full bg-gradient-to-tr from-[#1a1e2d] via-[#2d3250] to-[#1c2133] opacity-50 z-0" />
      
      {/* Particles background */}
      <DocumentationParticles />
      
      {/* Floating emojis */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
        <AnimatePresence>
          {emojis.map(({ id, emoji, x, y, rotation }) => (
            <motion.div
              key={id}
              initial={{ 
                opacity: 0,
                scale: 0,
                x: `${x}%`, 
                y: `${y}%`,
                rotate: 0
              }}
              animate={{ 
                opacity: [0, 1, 1, 0],
                scale: [0, 1.5, 1.2, 0],
                y: `${y - 20}%`,
                rotate: rotation
              }}
              transition={{ 
                duration: 4,
                ease: "easeInOut",
                rotate: { duration: 4, ease: "linear" }
              }}
              className="absolute text-4xl"
              style={{ left: `${x}%`, top: `${y}%` }}
            >
              {emoji}
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
        {/* Content */}
      <div className="container mx-auto px-4 relative z-20 flex flex-col items-center justify-center h-full">
        <FadeIn delay={0.2} direction="up">
          <h2
            ref={scope}
            className="text-6xl md:text-7xl font-bold mb-6 text-center"
            style={{
              backgroundImage: 'var(--accent-gradient)',
              backgroundSize: '200% auto',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              display: 'inline-block'
            }}
          >
            Documentation
          </h2>
        </FadeIn>
        
        <Reveal delay={0.4}>
          <div className="mb-12 text-xl text-center max-w-3xl">
            <p className="text-white/80">
              Our comprehensive guides and documentation are currently under construction.
            </p>
          </div>
        </Reveal>
        
        {/* Construction animation */}
        <FadeIn delay={0.6} className="relative">
          <motion.div 
            className="relative bg-[rgba(255,255,255,0.05)] backdrop-blur-lg border border-[rgba(255,255,255,0.1)] p-8 rounded-2xl w-full max-w-2xl mb-8"
            initial={{ y: 20, opacity: 0 }}
            animate={{ 
              y: [20, 0, 5, 0], 
              opacity: 1,
              boxShadow: [
                'var(--glass-shadow)',
                '0 4px 20px rgba(90,209,255,0.2)',
                'var(--glass-shadow)'
              ]
            }}
            transition={{ 
              duration: 2, 
              repeat: Infinity, 
              repeatType: 'reverse', 
              repeatDelay: 1 
            }}
          >
            <div className="flex justify-between items-center mb-4">
              <div className="flex space-x-2">
                <span className="w-3 h-3 bg-red-500 rounded-full"></span>
                <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
                <span className="w-3 h-3 bg-green-500 rounded-full"></span>
              </div>
              <div className="text-white/50 text-xs">docs.stormbound-isles.com</div>
            </div>
            
            <div className="h-[300px] flex flex-col items-center justify-center text-center">
              <motion.div 
                className="text-6xl mb-6"
                animate={{ 
                  rotate: [0, 5, -5, 0],
                  scale: [1, 1.1, 1]
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity,
                  repeatType: 'reverse'
                }}
              >
                🏗️
              </motion.div>
              
              <h3 className="text-2xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-[#5ad1ff] to-[#5affc6]">
                Under Construction
              </h3>
              
              <p className="text-white/70 mb-6">
                We&apos;re building something amazing. Check back soon!
              </p>
              
              <div className="w-full h-4 bg-[rgba(255,255,255,0.1)] rounded-full overflow-hidden">
                <motion.div 
                  className="h-full bg-gradient-to-r from-[#5ad1ff] to-[#b36cff]"
                  initial={{ width: '0%' }}
                  animate={{ width: ['0%', '60%', '45%', '80%', '60%'] }}
                  transition={{ 
                    duration: 10, 
                    repeat: Infinity,
                    repeatType: 'reverse'
                  }}
                />
              </div>
            </div>
          </motion.div>
        </FadeIn>
          <FadeIn delay={0.8} direction="up">
          <div className="flex gap-4">
            <NotImplementedLink buttonStyle="primary" icon="📬">
              Subscribe for Updates
            </NotImplementedLink>
            <motion.a 
              href="https://github.com/no-felix/stormbound-isles" 
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full bg-[rgba(255,255,255,0.05)] text-white/80 border border-[rgba(255,255,255,0.1)] font-medium hover:bg-[rgba(255,255,255,0.1)] transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              View GitHub
            </motion.a>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
