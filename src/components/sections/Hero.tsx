import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Aurora from './Aurora';

export default function Hero() {
  const [showScroll, setShowScroll] = useState(true);

  useEffect(() => {
    const onScroll = () => {
      setShowScroll(window.scrollY < window.innerHeight * 0.1);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section id="hero" className="section-full min-h-screen flex flex-col justify-center items-center overflow-hidden relative">
      {/* Neue Aurora-Animation als Hintergrund */}
      <Aurora
        colorStops={["#3A29FF", "#FF94B4", "#FF3232"]}
        blend={0.5}
        amplitude={1.0}
        speed={0.5}
      />
      {/* Overlay to prevent accidental white flashes from canvas */}
      <div className="absolute inset-0 pointer-events-none z-10" style={{background: 'transparent'}} />
      {/* Content ohne Parallax-Wrapper */}
      <div className="w-full h-full flex flex-col items-center justify-center relative z-20 text-center min-h-screen">
        <motion.h1
          className="text-5xl md:text-7xl font-extrabold mb-4 text-[#dbeafe] drop-shadow-[0_4px_32px_rgba(37,99,235,0.5)]"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Stormbound Isles
        </motion.h1>
        <motion.p
          className="text-xl md:text-2xl max-w-2xl mx-auto mb-8 text-white/80"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Five elemental islands. One epic Minecraft mod. Compete, survive, and create in a world shaped by the elements.
        </motion.p>
        <motion.div
          className="flex flex-row items-center justify-center gap-4 w-full max-w-md mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Link href="#download">
            <motion.button
              className="w-[180px] px-4 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold text-lg whitespace-nowrap border-2 border-blue-600 hover:border-blue-700 shadow-md"
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.97 }}
            >
              Download Now
            </motion.button>
          </Link>
          <Link href="#features">
            <motion.button
              className="w-[180px] px-4 py-3 rounded-lg bg-white/10 border-2 border-blue-600 hover:bg-white/20 text-blue-200 font-semibold text-lg whitespace-nowrap shadow-md backdrop-blur-md transition-colors duration-200"
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.97 }}
            >
              Learn More
            </motion.button>
          </Link>
        </motion.div>
        {/* Scroll indicator bleibt außerhalb des Parallax-Containers */}
        <AnimatePresence>
          {showScroll && (
            <motion.div
              key="scroll-indicator"
              className="absolute left-1/2 -translate-x-1/2 z-30 pointer-events-none"
              style={{ bottom: "32px" }}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 40 }}
              transition={{ duration: 0.5, type: 'spring', bounce: 0.3 }}
            >
              <div className="flex flex-col items-center">
                <span className="text-[#4874ff] text-sm mb-2 drop-shadow-[0_2px_8px_rgba(90,209,255,0.18)]">Scroll to explore</span>
                <motion.svg
                  className="w-6 h-6 text-[#4874ff]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, repeatType: 'loop' }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 14l-7 7m0 0l-7-7m7 7V3"
                  />
                </motion.svg>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
