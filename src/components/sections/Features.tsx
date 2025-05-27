"use client";

import React from "react";
import { motion } from "framer-motion";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: string;
  delay: number;
  elementType: "fire" | "ice" | "desert" | "mushroom" | "crystal";
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  icon,
  delay,
  elementType,
}) => {
  const elementStyles = {
    fire: {
      cardClass: "fire-card",
      glowColor: "rgba(255, 87, 51, 0.4)",
      hoverGlow:
        "0 0 30px rgba(255, 87, 51, 0.6), 0 0 60px rgba(255, 87, 51, 0.3)",
      iconBg: "linear-gradient(135deg, #ff5722, #ff9800)",
      accent: "#ff5722",
    },
    ice: {
      cardClass: "ice-card",
      glowColor: "rgba(100, 181, 246, 0.4)",
      hoverGlow:
        "0 0 30px rgba(100, 181, 246, 0.6), 0 0 60px rgba(100, 181, 246, 0.3)",
      iconBg: "linear-gradient(135deg, #64b5f6, #81d4fa)",
      accent: "#64b5f6",
    },
    desert: {
      cardClass: "desert-card",
      glowColor: "rgba(255, 167, 38, 0.4)",
      hoverGlow:
        "0 0 30px rgba(255, 167, 38, 0.6), 0 0 60px rgba(255, 167, 38, 0.3)",
      iconBg: "linear-gradient(135deg, #ffa726, #ffb74d)",
      accent: "#ffa726",
    },
    mushroom: {
      cardClass: "mushroom-card",
      glowColor: "rgba(139, 195, 74, 0.4)",
      hoverGlow:
        "0 0 30px rgba(139, 195, 74, 0.6), 0 0 60px rgba(139, 195, 74, 0.3)",
      iconBg: "linear-gradient(135deg, #8bc34a, #aed581)",
      accent: "#8bc34a",
    },
    crystal: {
      cardClass: "crystal-card",
      glowColor: "rgba(90, 255, 198, 0.4)",
      hoverGlow:
        "0 0 30px rgba(90, 255, 198, 0.6), 0 0 60px rgba(90, 255, 198, 0.3)",
      iconBg: "linear-gradient(135deg, #5affc6, #26c6da)",
      accent: "#5affc6",
    },
  };

  const style = elementStyles[elementType];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{
        y: -6,
        scale: 1.01,
        transition: { duration: 0.3, ease: "easeOut" },
      }}
      transition={{ duration: 0.6, delay: delay * 0.1, ease: "easeOut" }}
      className={`relative group cursor-pointer ${style.cardClass}`}
    >
      {" "}
      {/* Background with glassmorphism */}
      <div
        className="absolute inset-0 rounded-3xl glass transition-all duration-500 group-hover:border-white/30"
        style={{
          boxShadow: `0 8px 32px ${style.glowColor}`,
        }}
      />
      {/* Hover glow effect */}
      <div
        className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          boxShadow: style.hoverGlow,
          background: `radial-gradient(circle at center, ${style.glowColor} 0%, transparent 70%)`,
        }}
      />
      {/* Card content */}
      <div className="relative z-10 p-8 h-full flex flex-col">
        {/* Icon with elemental styling */}
        <div className="relative mb-6">
          <div
            className="w-16 h-16 flex items-center justify-center rounded-2xl mb-2 relative overflow-hidden group-hover:scale-105 transition-transform duration-300"
            style={{
              background: style.iconBg,
              boxShadow: `0 4px 20px ${style.glowColor}`,
            }}
          >
            {/* Dark overlay for better emoji visibility */}
            <div className="absolute inset-0 bg-black/30 rounded-2xl" />

            {/* Shimmer effect - reduced opacity */}
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{
                background: `linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.15) 50%, transparent 70%)`,
                animation: "shimmer 2s infinite",
              }}
            />
            <span className="text-3xl relative z-10 drop-shadow-lg">
              {icon}
            </span>
          </div>

          {/* Floating particles effect */}
          <div
            className="absolute -top-2 -right-2 w-3 h-3 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500"
            style={{
              backgroundColor: style.accent,
              animation: "float 3s ease-in-out infinite",
              animationDelay: "0s",
            }}
          />
          <div
            className="absolute -bottom-1 -left-1 w-2 h-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500"
            style={{
              backgroundColor: style.accent,
              animation: "float 3s ease-in-out infinite reverse",
              animationDelay: "1s",
            }}
          />
        </div>

        {/* Title - no scaling to avoid blur */}
        <h3
          className="text-2xl font-bold mb-4 leading-tight transition-all duration-300"
          style={{
            background: `linear-gradient(135deg, white 0%, ${style.accent} 100%)`,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            textShadow: "none", // Remove text shadow to avoid blur
          }}
        >
          {title}
        </h3>

        {/* Description - improved readability */}
        <p className="text-gray-200 leading-relaxed flex-grow group-hover:text-white transition-colors duration-300">
          {description}
        </p>

        {/* Bottom accent line */}
        <div
          className="mt-6 h-1 rounded-full origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"
          style={{ backgroundColor: style.accent }}
        />
      </div>
    </motion.div>
  );
};

const Features: React.FC = () => {
  const features = [
    {
      title: "Elemental Arenas",
      description:
        "Volcano, Ice, Desert, Mushroom, and Crystal—each island changes how you play.",
      icon: "🏝️",
      color: "var(--isle-fire)",
      delay: 0,
      elementType: "fire" as const,
    },
    {
      title: "Team Showdown",
      description: "Five teams battle for survival, strategy, and style.",
      icon: "🤝",
      color: "var(--isle-ice)",
      delay: 1,
      elementType: "ice" as const,
    },
    {
      title: "Random Disasters",
      description: "Eruptions, storms, and more—adapt or be swept away.",
      icon: "🌪️",
      color: "var(--isle-desert)",
      delay: 2,
      elementType: "desert" as const,
    },
    {
      title: "Jury & PvP Phases",
      description:
        "Impress the jury with your builds, then fight for dominance when protection ends.",
      icon: "⚖️",
      color: "var(--isle-mushroom)",
      delay: 3,
      elementType: "mushroom" as const,
    },
    {
      title: "Unique Team Powers",
      description: "Each island grants special bonuses—master your element.",
      icon: "✨",
      color: "var(--isle-crystal)",
      delay: 4,
      elementType: "crystal" as const,
    },
    {
      title: "Creative Survival",
      description:
        "Build, defend, and conquer. Only the most creative and cunning will win.",
      icon: "🏡",
      color: "var(--isle-fire)",
      delay: 5,
      elementType: "fire" as const,
    },
  ];

  return (
    <div className="container mx-auto px-4 py-24">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-4xl font-bold mb-6 gradient-text">
          What Makes Stormbound Isles Unique?
        </h2>
        <p className="text-xl text-gray-300">
          A new era of Minecraft competition—where creativity, teamwork, and
          chaos collide.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {" "}
        {features.map((feature) => (
          <FeatureCard
            key={feature.title}
            title={feature.title}
            description={feature.description}
            icon={feature.icon}
            delay={feature.delay}
            elementType={feature.elementType}
          />
        ))}
      </div>
    </div>
  );
};

export default Features;
