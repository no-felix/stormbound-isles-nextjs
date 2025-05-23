"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { motion, useAnimate } from "framer-motion";
import Footer from "@/components/layout/Footer";
import GradientBackground from "@/components/ui/GradientBackground";
import ParticleBackground from "@/components/ui/ParticleBackground";

const FUNNY_MESSAGES = [
  "Oops! You've ventured into the void between islands.",
  "This path is still lost in the storm.",
  "Even the elements can't find this page.",
  "The island you're looking for has drifted away.",
  "This spell is still being crafted by our wizards.",
  "This feature is busy competing in Stormbound Isles.",
  "Our elemental spirits are still constructing this area.",
  "You found the secret island of missing pages!",
  "Looks like Sahur got here before you did.",
  "404: The wind blew this page away.",
  "You must have taken a wrong portal.",
  "This page is hiding behind a mushroom."
];

const ISLAND_EMOJIS = ["🏝️", "🌋", "❄️", "🏜️", "🍄", "💎"];

const SAHUR_IMAGES = [
  "/stormbound-isles-nextjs/sahur/normalsahur.webp",
  "/stormbound-isles-nextjs/sahur/sahurupsidedown.webp",
  "/stormbound-isles-nextjs/sahur/sahurhead.webp",
  "/stormbound-isles-nextjs/sahur/sahurexplaining.webp",
  "/stormbound-isles-nextjs/sahur/sahurlowquality.webp",
  "/stormbound-isles-nextjs/sahur/sahuruglymerch.png",
  "/stormbound-isles-nextjs/sahur/sahurdead.webp",
];

export default function NotFound() {
  const [scope, animate] = useAnimate();  const [message, setMessage] = useState("");
  const [islandRotation, setIslandRotation] = useState(0);
  const [isCompassAnimating, setIsCompassAnimating] = useState(false);
  const [sahur, setSahur] = useState<{src: string; x: number; y: number; rotate: number; scale: number} | null>(null);
  
  // Generate Sahur image only on the client side
  useEffect(() => {
    // Setup Sahur
    const randomSahurSrc = SAHUR_IMAGES[Math.floor(Math.random() * SAHUR_IMAGES.length)];
    setSahur({
      src: randomSahurSrc,
      x: Math.random() * 80 + 10, // Keep Sahur somewhat within bounds initially
      y: Math.random() * 80 + 10,
      rotate: Math.random() * 360 - 180,
      scale: 0.8 + Math.random() * 0.4, // Random initial scale
    });
  }, []);

  // Set a random funny message and animations on mount
  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * FUNNY_MESSAGES.length);
    setMessage(FUNNY_MESSAGES[randomIndex]);

    // Start the island rotation animation
    setIslandRotation(Math.random() > 0.5 ? 360 : -360);

    // Animate the glowing effect
    const animateGlow = async () => {
      await animate(
        scope.current,
        { opacity: [0.7, 1, 0.7] },
        { duration: 2, repeat: Infinity }
      );
    };

    animateGlow();
  }, [animate, scope]);

  // Handle compass spin animation
  const handleCompassClick = () => {
    if (!isCompassAnimating) {
      setIsCompassAnimating(true);
      // Reset after animation completes
      setTimeout(() => setIsCompassAnimating(false), 1000);
    }
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow flex flex-col">
        <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden py-16 px-4">
          {/* Animated background */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#141824] to-[#1c2133] z-0" />
          <GradientBackground
            type="radial"
            colorFrom="rgba(90,209,255,0.4)"
            colorTo="rgba(179,108,255,0.02)"
            className="w-full h-full"
          />
            {/* Animated elements in the background */}
          <div className="absolute inset-0 overflow-hidden z-1">
            {/* Particle background */}
            <ParticleBackground 
              particleCount={50}
              colors={['#ffffff', '#5ad1ff', '#b36cff']}
              minSize={1}
              maxSize={2}
              minOpacity={0.1}
              maxOpacity={0.3}
              speed={0.5}
              showConnections={true}
              connectionDistance={120}
              connectionColor={'#5ad1ff'}
              connectionOpacity={0.15}
              connectionWidth={0.5}
            />
            
            {/* Floating islands */}
            {ISLAND_EMOJIS.map((emoji, i) => {
              // Calculate position to distribute emojis across the viewport
              const angle = (i / ISLAND_EMOJIS.length) * Math.PI * 2; // Distribute in a circle
              const radius = 30; // % of the viewport - smaller to keep emojis more visible
              const left = 50 + Math.cos(angle) * radius; // Center + offset
              const top = 50 + Math.sin(angle) * radius; // Center + offset

              return (
                <motion.div
                  key={`island-${emoji}-${i}`}
                  className="absolute text-4xl"
                  style={{
                    left: `${left}%`,
                    top: `${top}%`,
                  }}
                  animate={{
                    y: [0, -20, 0],
                    rotate: i % 2 === 0 ? 10 : -10,
                    opacity: [0.7, 1, 0.7],
                  }}
                  transition={{
                    y: {
                      duration: 4 + i,
                      repeat: Infinity,
                      repeatType: "reverse",
                    },
                    rotate: {
                      duration: 6,
                      repeat: Infinity,
                      repeatType: "reverse",
                    },
                    opacity: {
                      duration: 3,
                      repeat: Infinity,
                      repeatType: "reverse",
                    },
                  }}
                >
                  {emoji}
                </motion.div>
              );
            })}

            {/* Wandering Sahur */}
            {sahur && (
              <motion.img
                src={sahur.src}
                alt="A lost Sahur"
                className="absolute w-32 h-auto z-[5]" // z-index between dots/islands and content
                style={{
                  left: `${sahur.x}%`,
                  top: `${sahur.y}%`,
                  scale: sahur.scale,
                  rotate: sahur.rotate,
                }}
                animate={{
                  x: [`${sahur.x}%`, `${Math.random() * 80 + 10}%`, `${Math.random() * 80 + 10}%`, `${sahur.x}%`], // Wander horizontally
                  y: [`${sahur.y}%`, `${Math.random() * 80 + 10}%`, `${Math.random() * 80 + 10}%`, `${sahur.y}%`], // Wander vertically
                  rotate: [sahur.rotate, sahur.rotate + (Math.random() > 0.5 ? 20 : -20), sahur.rotate + (Math.random() > 0.5 ? -15 : 15), sahur.rotate],
                  opacity: [0, 0.7, 0.7, 0.7, 0], // Fade in, stay, fade out
                }}
                transition={{
                  duration: 20 + Math.random() * 10, // Longer duration for slow wandering
                  repeat: Infinity,
                  repeatDelay: 5 + Math.random() * 5, // Wait a bit before reappearing
                  ease: "easeInOut",
                  opacity: {
                    times: [0, 0.1, 0.8, 0.9, 1], // Control fade in/out timing
                    duration: 20 + Math.random() * 10,
                    repeat: Infinity,
                    repeatDelay: 5 + Math.random() * 5,
                  }
                }}
              />
            )}
          </div>
          
          {/* Content container */}
          <div className="relative z-10 text-center max-w-3xl mx-auto">
            {/* 404 animated text */}
            <motion.h1
              className="text-8xl font-bold mb-6"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              style={{
                backgroundImage: "var(--accent-gradient)",
                backgroundSize: "200% auto",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              404
            </motion.h1>

            {/* Lost island animation */}
            <motion.div
              className="mb-10 text-6xl"
              initial={{ scale: 0 }}
              animate={{
                scale: 1,
                rotate: islandRotation,
              }}
              transition={{
                scale: { duration: 0.5, type: "spring" },
                rotate: { duration: 20, repeat: Infinity, ease: "linear" },
              }}
            >
              🏝️
            </motion.div>

            {/* Message */}
            <motion.p
              className="text-xl text-white/80 mb-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              {message}
            </motion.p>

            {/* Navigation options */}
            <div className="flex flex-wrap justify-center gap-6">
              <Link href="/" passHref>
                <motion.div
                  className="px-6 py-3 rounded-full bg-[rgba(90,209,255,0.2)] text-[#5ad1ff] border border-[rgba(90,209,255,0.3)] font-medium hover:bg-[rgba(90,209,255,0.3)] transition-all flex items-center gap-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  <span>Return to Home</span>
                  <span className="text-xl">🏠</span>
                </motion.div>
              </Link>
              
              <motion.div
                className="px-6 py-3 rounded-full bg-[rgba(255,255,255,0.05)] text-white/80 border border-[rgba(255,255,255,0.1)] font-medium hover:bg-[rgba(255,255,255,0.1)] transition-all flex items-center gap-2 cursor-pointer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                onClick={handleCompassClick}
              >
                <span>Find My Way</span>
                <motion.span
                  className="text-xl"
                  animate={isCompassAnimating ? { rotate: 360 * 2 } : {}}
                  transition={{ duration: 1, ease: "backOut" }}
                >
                  🧭
                </motion.span>
              </motion.div>
            </div>
            
            {/* Glowing effect */}
            <motion.div
              ref={scope}
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vh] h-[60vh] rounded-full bg-gradient-radial from-[rgba(90,209,255,0.3)] to-transparent blur-3xl z-[-1]"
            />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
