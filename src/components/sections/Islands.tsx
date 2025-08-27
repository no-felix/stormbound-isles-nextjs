"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import FloatingParticles from "@/components/FloatingParticles";

interface IslandData {
  id: string;
  name: string;
  description: string;
  color: string;
  features: string[];
  emoji: string;
}

const Islands: React.FC = () => {
  const [activeIsland, setActiveIsland] = useState<string>("volcano");
  const islands: IslandData[] = [
    {
      id: "volcano",
      name: "Pyrothar",
      description:
        "A volcanic isle where players gain Fire Resistance while standing on their team's territory. Beware of meteors and fire showers that may strike during disasters.",
  color: "var(--isle-fire)", // #FF5555
      emoji: "🌋",
      features: [
        "Fire Resistance Buff",
        "Meteor Disasters",
        "Fire Shower Events",
        "Volcanic Terrain",
      ],
    },
    {
      id: "ice",
      name: "Frostreign",
      description:
        "An icy isle where players receive Resistance while standing on their team's territory. Blizzards and ice spikes threaten those who venture into this frozen realm.",
  color: "var(--isle-ice)", // #55FFFF
      emoji: "❄️",
      features: [
        "Resistance Buff",
        "Blizzard Disasters",
        "Ice Spike Events",
        "Frozen Wasteland",
      ],
    },
    {
      id: "desert",
      name: "Sahrakir",
      description:
        "A sun-scorched desert isle where players gain Speed while standing on their team's territory. Sandstorms and mirages create chaos across the dunes.",
  color: "var(--isle-desert)", // #FFFF55
      emoji: "🏜️",
      features: [
        "Speed Buff",
        "Sandstorm Disasters",
        "Mirage Events",
        "Desert Terrain",
      ],
    },
    {
      id: "auralis",
      name: "Auralis",
      description:
        "A mystical isle where players receive Regeneration while standing on their team's territory. Spore clouds and crystal storms sweep across this otherworldly landscape.",
  color: "var(--isle-mushroom)", // #FF55FF
      emoji: "🍄",
      features: [
        "Regeneration Buff",
        "Spore Disasters",
        "Crystal Storm Events",
        "Mystical Terrain",
      ],
    },
  ];

  const activeIslandData =
    islands.find((island) => island.id === activeIsland) || islands[0];

  // Memoize the particles to prevent regeneration
  const memoizedParticles = useMemo(
    () => (
      <div className="absolute inset-0 pointer-events-none">
        <FloatingParticles
          count={40}
          connectLines={true}
          colors={[
            "var(--isle-fire)",
            "var(--isle-ice)",
            "var(--isle-desert)",
            "var(--isle-mushroom)",
          ]}
          connectDistance={80}
          opacityRange={{ min: 0.1, max: 0.4 }}
        />
      </div>
    ),
    []
  ); // Empty dependency array means this will only be calculated once

  return (
    <section className="relative py-24">
      {/* Static particles that don't regenerate */}
      {memoizedParticles}

      {/* Subtle accent overlay that changes with active island */}
      <div
        className="absolute inset-0 transition-all duration-1000 opacity-5"
        style={{
          background: `radial-gradient(ellipse at center, ${activeIslandData.color}20 0%, transparent 70%)`,
        }}
      />

      {/* Content container */}
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold mb-6 gradient-text">
            The Four Elemental Islands
          </h2>
          <p className="text-xl text-gray-300">
            Explore the diverse and magical realms that make up the Stormbound
            Archipelago. Each island offers unique challenges and mystical
            powers.
          </p>
        </motion.div>

        <div className="relative z-10 flex flex-col lg:flex-row gap-8">
          {/* Enhanced Island selector with animations */}
          <motion.div
            className="w-full lg:w-1/3"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="glass p-6 rounded-2xl">
              <h3 className="text-2xl font-bold mb-6">Choose an Island</h3>
              <div className="space-y-4">
                {islands.map((island, index) => (
                  <motion.button
                    key={island.id}
                    onClick={() => setActiveIsland(island.id)}
                    className={`w-full text-left p-4 rounded-xl transition-all duration-300 relative overflow-hidden group ${
                      activeIsland === island.id
                        ? "bg-white/10 shadow-lg scale-105"
                        : "bg-transparent hover:bg-white/5"
                    }`}
                    whileHover={{
                      scale: 1.02,
                      transition: { duration: 0.2 },
                    }}
                    whileTap={{ scale: 0.98 }}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                    style={{
                      borderColor:
                        activeIsland === island.id
                          ? `${island.color}60`
                          : "transparent",
                      borderWidth: "2px",
                      boxShadow:
                        activeIsland === island.id
                          ? `0 4px 20px ${island.color}30`
                          : "none",
                    }}
                  >
                    {/* Animated background on hover */}
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{
                        background: `linear-gradient(45deg, ${island.color}10, transparent)`,
                      }}
                    />

                    <div className="flex items-center relative z-10">
                      <motion.div
                        className="w-8 h-8 rounded-full mr-3 flex items-center justify-center text-lg"
                        style={{
                          backgroundColor: `${island.color}20`,
                          border: `2px solid ${island.color}60`,
                        }}
                        whileHover={{
                          scale: 1.1,
                          rotate: 360,
                          transition: { duration: 0.5 },
                        }}
                      >
                        {island.emoji}
                      </motion.div>
                      <div>
                        <span className="font-bold block">{island.name}</span>
                        <span
                          className="text-sm opacity-70"
                          style={{ color: island.color }}
                        >
                          {island.features.length} unique areas
                        </span>
                      </div>
                    </div>

                    {/* Active indicator */}
                    {activeIsland === island.id && (
                      <motion.div
                        className="absolute right-3 top-1/2 transform -translate-y-1/2"
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          damping: 15,
                        }}
                      >
                        <div
                          className="w-2 h-2 rounded-full"
                          style={{
                            backgroundColor: island.color,
                            boxShadow: `0 0 10px ${island.color}`,
                          }}
                        />
                      </motion.div>
                    )}
                  </motion.button>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Enhanced Island details with smooth transitions */}
          <motion.div
            className="w-full lg:w-2/3"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <motion.div
              key={activeIsland} // Key for re-animation on island change
              className="glass p-8 rounded-2xl h-full relative overflow-hidden"
              style={{
                borderColor: `${activeIslandData.color}40`,
                boxShadow: `0 4px 30px ${activeIslandData.color}30`,
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {/* Animated background decoration */}
              <motion.div
                className="absolute -right-20 -bottom-20 w-64 h-64 rounded-full blur-3xl"
                style={{ backgroundColor: activeIslandData.color }}
                initial={{ opacity: 0.1, scale: 0.8 }}
                animate={{ opacity: 0.2, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              />

              {/* Floating particles specific to active island */}
              <motion.div
                className="absolute top-4 right-4 text-4xl"
                initial={{ opacity: 0, rotate: -180, scale: 0 }}
                animate={{ opacity: 0.3, rotate: 0, scale: 1 }}
                transition={{
                  duration: 0.6,
                  type: "spring",
                  stiffness: 200,
                }}
              >
                {activeIslandData.emoji}
              </motion.div>

              <div className="relative z-10">
                <motion.h3
                  className="text-3xl font-bold mb-4"
                  style={{ color: activeIslandData.color }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                >
                  {activeIslandData.name}
                </motion.h3>

                <motion.p
                  className="text-lg mb-8 text-gray-200"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                >
                  {activeIslandData.description}
                </motion.p>

                <motion.div
                  className="mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 }}
                >
                  <h4 className="text-xl font-bold mb-4 flex items-center">
                    <span
                      className="w-3 h-3 rounded-full mr-3"
                      style={{ backgroundColor: activeIslandData.color }}
                    />{" "}
                    Key Locations
                  </h4>
                  <div className="grid grid-cols-2 gap-4">
                    {activeIslandData.features.map((feature, index) => (
                      <motion.div
                        key={feature}
                        className="flex items-center p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors duration-200"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                          duration: 0.3,
                          delay: 0.4 + index * 0.1,
                        }}
                        whileHover={{
                          x: 5,
                          transition: { duration: 0.2 },
                        }}
                      >
                        <motion.div
                          className="w-2 h-2 rounded-full mr-3"
                          style={{ backgroundColor: activeIslandData.color }}
                          whileHover={{
                            scale: 1.5,
                            boxShadow: `0 0 10px ${activeIslandData.color}`,
                          }}
                        />
                        <span className="font-medium">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.6 }}
                >
                  <Link
                    href={`/islands/${activeIslandData.id}`}
                    className="group relative px-6 py-3 rounded-lg font-bold transition-all duration-300 text-center block overflow-hidden"
                    style={{
                      backgroundColor: `${activeIslandData.color}20`,
                      borderWidth: "2px",
                      borderColor: activeIslandData.color,
                    }}
                  >
                    {/* Animated background on hover */}
                    <span
                      className="absolute inset-0 translate-x-full group-hover:translate-x-0 transition-transform duration-300"
                      style={{ backgroundColor: `${activeIslandData.color}30` }}
                    />
                    <span className="relative z-10">
                      Explore {activeIslandData.name} ✨
                    </span>
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Islands;
