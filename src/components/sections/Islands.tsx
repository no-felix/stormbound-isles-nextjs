"use client";

import React, { useState } from "react";
import Link from "next/link";
import FloatingParticles from "@/components/FloatingParticles";

interface IslandData {
  id: string;
  name: string;
  description: string;
  color: string;
  features: string[];
}

const Islands: React.FC = () => {
  const [activeIsland, setActiveIsland] = useState<string>("volcano"); // Default to Volcano

  const islands: IslandData[] = [
    {
      id: "volcano",
      name: "Volcano Island",
      description:
        "A fiery landscape dominated by active volcanoes and rivers of molten lava. Creatures of flame and rock thrive in the intense heat.",
      color: "var(--isle-fire)",
      features: [
        "Active Volcanoes",
        "Lava Flows",
        "Fire Elementals",
        "Obsidian Caves",
      ],
    },
    {
      id: "ice",
      name: "Ice Island",
      description:
        "A realm of perpetual frost and towering glaciers. Ancient secrets are frozen within its icy depths, guarded by formidable frost beings.",
      color: "var(--isle-ice)",
      features: [
        "Glacial Peaks",
        "Frozen Tundra",
        "Ice Golems",
        "Aurora Borealis",
      ],
    },
    {
      id: "desert",
      name: "Desert Island",
      description:
        "Vast sun-scorched dunes stretch as far as the eye can see. Hidden oases and ancient ruins hold both peril and promise.",
      color: "var(--isle-desert)",
      features: [
        "Shifting Sands",
        "Ancient Ruins",
        "Desert Nomads",
        "Giant Scorpions",
      ],
    },
    {
      id: "mushroom",
      name: "Mushroom Island",
      description:
        "A bizarre and bioluminescent world of giant fungi and strange spores. The air hums with an otherworldly energy.",
      color: "var(--isle-mushroom)",
      features: [
        "Giant Mushrooms",
        "Bioluminescent Flora",
        "Spore Clouds",
        "Fungal Creatures",
      ],
    },
    {
      id: "crystal",
      name: "Crystal Island",
      description:
        "A land where massive, energy-infused crystals jut from the earth, creating a dazzling and dangerous environment.",
      color: "var(--isle-crystal)",
      features: [
        "Towering Crystals",
        "Energy Conduits",
        "Crystalline Golems",
        "Refracted Light Puzzles",
      ],
    },
  ];

  const activeIslandData =
    islands.find((island) => island.id === activeIsland) || islands[0];
  return (
    <section className="relative py-24">
      {/* Mixed elemental particles for Islands section */}
      <div className="absolute inset-0 pointer-events-none">
        <FloatingParticles
          count={40}
          connectLines={true}
          colors={[
            "var(--isle-fire)",
            "var(--isle-ice)",
            "var(--isle-desert)",
            "var(--isle-mushroom)",
            "var(--isle-crystal)",
          ]}
          connectDistance={80}
          opacityRange={{ min: 0.1, max: 0.4 }}
        />
      </div>

      {/* Content container */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold mb-6 gradient-text">
            The Five Elemental Islands
          </h2>
          <p className="text-xl text-gray-300">
            Explore the diverse and magical realms that make up the Stormbound
            Archipelago.
          </p>
        </div>{" "}
        <div className="relative z-10 flex flex-col lg:flex-row gap-8">
          {/* Island selector */}
          <div className="w-full lg:w-1/3">
            <div className="glass p-6 rounded-2xl">
              <h3 className="text-2xl font-bold mb-6">Choose an Island</h3>
              <div className="space-y-4">
                {islands.map((island) => (
                  <button
                    key={island.id}
                    onClick={() => setActiveIsland(island.id)}
                    className={`w-full text-left p-4 rounded-xl transition-all ${
                      activeIsland === island.id
                        ? "bg-white/10 shadow-lg"
                        : "bg-transparent hover:bg-white/5"
                    }`}
                  >
                    <div className="flex items-center">
                      <div
                        className="w-6 h-6 rounded-full mr-3"
                        style={{ backgroundColor: island.color }}
                      ></div>
                      <span className="font-bold">{island.name}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Island details */}
          <div className="w-full lg:w-2/3">
            <div
              className="glass p-6 rounded-2xl h-full transition-all duration-500 relative overflow-hidden"
              style={{
                borderColor: `${activeIslandData.color}40`,
                boxShadow: `0 4px 30px ${activeIslandData.color}30`,
              }}
            >
              {/* Background decoration */}
              <div
                className="absolute -right-20 -bottom-20 w-64 h-64 rounded-full opacity-20 blur-3xl"
                style={{ backgroundColor: activeIslandData.color }}
              ></div>

              <div className="relative z-10">
                <h3
                  className="text-3xl font-bold mb-4"
                  style={{ color: activeIslandData.color }}
                >
                  {activeIslandData.name}
                </h3>

                <p className="text-lg mb-8">{activeIslandData.description}</p>

                <div className="mb-6">
                  <h4 className="text-xl font-bold mb-4">Key Locations</h4>
                  <div className="grid grid-cols-2 gap-4">
                    {activeIslandData.features.map((feature) => (
                      <div key={feature} className="flex items-center">
                        <div
                          className="w-2 h-2 rounded-full mr-2"
                          style={{ backgroundColor: activeIslandData.color }}
                        ></div>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Link
                  href="/not-found"
                  className="mt-4 px-6 py-3 rounded-lg font-bold transition-all text-center block"
                  style={{
                    backgroundColor: `${activeIslandData.color}20`,
                    borderWidth: "2px",
                    borderColor: activeIslandData.color,
                  }}
                >
                  Explore {activeIslandData.name}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Islands;
