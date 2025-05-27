"use client";

import React, { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import FloatingParticles from "@/components/FloatingParticles";

const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [typingText, setTypingText] = useState<string>("");
  const [isDeleting, setIsDeleting] = useState<boolean>(false);
  const fullText = "kinda...";

  useEffect(() => {
    // Trigger animation after component mounts
    setIsVisible(true);
  }, []);
  // Typing animation effect
  useEffect(() => {
    const typingSpeed = 150; // Speed of typing in ms
    const deletingSpeed = 100; // Speed of deleting in ms
    const pauseDuration = 5000; // Pause time when fully typed/deleted (5 seconds)

    const typeText = () => {
      if (isDeleting) {
        // Deleting mode
        if (typingText.length === 0) {
          // When text is fully deleted, pause and switch to typing mode
          setTimeout(() => {
            setIsDeleting(false);
          }, pauseDuration);
          return;
        }

        // Delete one character
        const timeout = setTimeout(() => {
          setTypingText(typingText.slice(0, -1));
        }, deletingSpeed);
        return () => clearTimeout(timeout);
      } else {
        // Typing mode
        if (typingText === fullText) {
          // When text is fully typed, pause and switch to deleting mode
          setTimeout(() => {
            setIsDeleting(true);
          }, pauseDuration);
          return;
        }

        // Type one more character
        const timeout = setTimeout(() => {
          setTypingText(fullText.slice(0, typingText.length + 1));
        }, typingSpeed);
        return () => clearTimeout(timeout);
      }
    };

    const animationTimeout = typeText();
    return () => {
      if (animationTimeout) {
        animationTimeout();
      }
    };
  }, [typingText, isDeleting]);
  const memoizedParticles = useMemo(
    () => (
      <FloatingParticles
        count={100}
        connectLines={true}
        colors={["var(--isle-fire)"]}
      />
    ),
    []
  );

  const hexagonalGrid = useMemo(
    () => (
      <div className="absolute inset-0 opacity-20">
        {Array.from({ length: 20 }).map((_, i) => {
          // Generate a deterministic position using a fixed seed-like approach
          const posX = (i * 83) % 100;
          const posY = (i * 47) % 100;
          return (
            <div
              key={`hexagon-element-${i * 7}`}
              className="absolute w-32 h-32"
              style={{
                left: `${posX}%`,
                top: `${posY}%`,
                transform: "translate(-50%, -50%) rotate(30deg)",
                border: "1px solid rgba(255,255,255,0.1)",
                clipPath:
                  "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
              }}
            />
          );
        })}
      </div>
    ),
    []
  ); // Empty dependency array means this will only be calculated once

  return (
    <>
      {/* Fixed position particles that cover the entire viewport */}
      {memoizedParticles}

      {/* Content container */}
      <div className="container mx-auto px-4 min-h-screen flex flex-col lg:flex-row items-center justify-center py-16 relative z-10">
        <div
          className={`w-full lg:w-1/2 transition-all duration-1000 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {" "}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 gradient-text animate-gradient">
            Stormbound Isles
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-lg">
            Five teams. Five elemental islands. Build, survive, and outsmart
            chaos in the ultimate Minecraft showdown.
          </p>
          <div className="space-y-4 md:space-y-0 md:space-x-4 flex flex-col md:flex-row">
            {" "}
            <Link
              href="/not-found"
              className="px-8 py-4 bg-[var(--isle-ice)] text-black font-bold rounded-lg hover:bg-opacity-90 transition-all transform hover:-translate-y-1 text-center"
            >
              Play the Mod
            </Link>
            <Link
              href="/not-found"
              className="px-8 py-4 bg-transparent border-2 border-[var(--isle-ice)] text-white font-bold rounded-lg hover:bg-[var(--isle-ice)] hover:bg-opacity-10 transition-all transform hover:-translate-y-1 text-center"
            >
              See Features
            </Link>
          </div>
          {/* Updated Island List */}
          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2">
            <div className="flex items-center">
              <div className="w-2 h-2 rounded-full bg-[var(--isle-fire)]"></div>
              <span className="ml-2">Volcano</span>
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 rounded-full bg-[var(--isle-ice)]"></div>
              <span className="ml-2">Ice</span>
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 rounded-full bg-[var(--isle-desert)]"></div>
              <span className="ml-2">Desert</span>
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 rounded-full bg-[var(--isle-mushroom)]"></div>
              <span className="ml-2">Mushroom</span>
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 rounded-full bg-[var(--isle-crystal)]"></div>
              <span className="ml-2">Crystal</span>
            </div>
          </div>
        </div>

        <div
          className={`w-full lg:w-1/2 mt-16 lg:mt-0 transition-all duration-1000 delay-300 ease-out ${
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
          }`}
        >
          <div className="relative w-full h-[450px] glass rounded-3xl overflow-hidden">
            {/* Animated "Coming Soon" display with interactive elements */}
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--background)]/80 to-[var(--background)]/60 backdrop-filter backdrop-blur-sm">
              {/* Hexagonal Grid Background */}
              {hexagonalGrid}

              {/* Main Content with Creative Layout */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-8">
                {/* The "Coming Soon" title with animated typing effect */}{" "}
                <div className="mb-10">
                  <div className="text-3xl md:text-4xl font-bold relative inline-flex items-center">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-[var(--isle-ice)] to-[var(--isle-crystal)]">
                      Coming Soon
                    </span>{" "}
                    <div className="ml-2 inline-flex items-center">
                      <span className="text-white/70 text-xl">
                        {typingText}
                      </span>
                      <span
                        className="h-6 w-1.5 ml-0.5 bg-[var(--isle-crystal)] inline-block animate-blink"
                        style={{ boxShadow: "0 0 8px var(--isle-crystal)" }}
                      ></span>
                    </div>
                  </div>
                </div>
                {/* Island Badges - Simple representation of the 5 isles */}
                <div className="flex flex-wrap justify-center gap-4 mb-10">
                  {[
                    { name: "Volcano", color: "var(--isle-fire)" },
                    { name: "Ice", color: "var(--isle-ice)" },
                    { name: "Desert", color: "var(--isle-desert)" },
                    { name: "Mushroom", color: "var(--isle-mushroom)" },
                    { name: "Crystal", color: "var(--isle-crystal)" },
                  ].map((isle) => (
                    <div
                      key={`island-badge-${isle.name}`}
                      className="px-3 py-1 rounded-full flex items-center border"
                      style={{
                        borderColor: `${isle.color}33`,
                        background: `${isle.color}15`,
                      }}
                    >
                      <div
                        className="w-2 h-2 rounded-full mr-2"
                        style={{
                          backgroundColor: isle.color,
                          boxShadow: `0 0 8px ${isle.color}`,
                        }}
                      ></div>
                      <span className="text-xs font-medium">{isle.name}</span>
                    </div>
                  ))}
                </div>
                {/* Progress Section */}
                <div className="w-full max-w-xs">
                  {" "}
                  {/* Progress bar showing completion status */}
                  <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden mb-6">
                    <div
                      className="h-full bg-gradient-to-r from-[var(--isle-fire)] via-[var(--isle-ice)] to-[var(--isle-crystal)]"
                      style={{ width: "8%" }}
                    >
                      <div className="h-full w-full bg-white/10 animate-pulse-slow"></div>
                    </div>
                  </div>
                  {/* Development timeline */}{" "}
                  <div className="flex items-center justify-between">
                    <div className="text-center">
                      <div className="text-xs uppercase text-white/50">
                        Started
                      </div>
                      <div className="text-sm font-medium">Apr 2025</div>
                    </div>
                    <div className="text-center relative">
                      <div className="text-xs uppercase text-white/50">
                        Today
                      </div>
                      <div className="text-sm font-medium">May 2025</div>
                      <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-px h-4 bg-[var(--isle-ice)]"></div>
                    </div>
                    <div className="text-center">
                      <div className="text-xs uppercase text-white/50">
                        Release
                      </div>
                      <div className="text-sm font-medium">Aug 2026</div>
                    </div>
                  </div>
                </div>
                {/* Call to action link - signup for updates */}
                <Link
                  href="/not-found"
                  className="mt-10 px-6 py-2 bg-transparent border border-white/20 rounded-full text-sm hover:border-[var(--isle-ice)] hover:text-[var(--isle-ice)] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[var(--isle-ice)]/50"
                >
                  Sign up for launch notification
                </Link>
              </div>
            </div>
          </div>
          {/* Game stats - Updated to reflect 5 elemental isles */}{" "}
          <div className="flex justify-around mt-8">
            <div className="text-center">
              <p className="text-3xl font-bold gradient-text">5</p>
              <p className="text-sm">Epic Realms</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold gradient-text">5</p>
              <p className="text-sm">Rival Teams</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold gradient-text">∞</p>
              <p className="text-sm">Possibilities</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
