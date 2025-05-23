"use client";

import React from "react";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: string;
  color: string;
  delay: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  icon,
  color,
  delay,
}) => {
  return (
    <div
      className="p-6 rounded-2xl glass hover:border-white/30 transition-all group"
      style={{ transitionDelay: `${delay * 150}ms` }}
    >
      <div
        className={`w-14 h-14 flex items-center justify-center rounded-xl mb-6 bg-opacity-20 transition-transform group-hover:scale-110`}
        style={{ backgroundColor: color }}
      >
        <span className="text-2xl">{icon}</span>
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </div>
  );
};

const Features: React.FC = () => {
  const features = [
    {
      title: "Elemental Arenas",
      description: "Volcano, Ice, Desert, Mushroom, and Crystal—each island changes how you play.",
      icon: "🏝️",
      color: "var(--isle-fire)",
      delay: 0,
    },
    {
      title: "Team Showdown",
      description: "Five teams battle for survival, strategy, and style.",
      icon: "🤝",
      color: "var(--isle-ice)",
      delay: 1,
    },
    {
      title: "Random Disasters",
      description: "Eruptions, storms, and more—adapt or be swept away.",
      icon: "🌪️",
      color: "var(--isle-desert)",
      delay: 2,
    },
    {
      title: "Jury & PvP Phases",
      description: "Impress the jury with your builds, then fight for dominance when protection ends.",
      icon: "⚖️",
      color: "var(--isle-mushroom)",
      delay: 3,
    },
    {
      title: "Unique Team Powers",
      description: "Each island grants special bonuses—master your element.",
      icon: "✨",
      color: "var(--isle-crystal)",
      delay: 4,
    },
    {
      title: "Creative Survival",
      description: "Build, defend, and conquer. Only the most creative and cunning will win.",
      icon: "🏡",
      color: "var(--isle-fire)",
      delay: 5,
    },
  ];

  return (
    <div className="container mx-auto px-4 py-24">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-4xl font-bold mb-6 gradient-text">What Makes Stormbound Isles Unique?</h2>
        <p className="text-xl text-gray-300">
          A new era of Minecraft competition—where creativity, teamwork, and chaos collide.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature) => (
          <FeatureCard
            key={feature.title}
            title={feature.title}
            description={feature.description}
            icon={feature.icon}
            color={feature.color}
            delay={feature.delay}
          />
        ))}
      </div>
    </div>
  );
};

export default Features;
