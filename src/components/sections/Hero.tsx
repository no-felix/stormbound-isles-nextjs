"use client";

import React, { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import FloatingParticles from "@/components/FloatingParticles";
import Countdown from "@/components/Countdown";

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
            Four teams. Four elemental islands with unique buffs. Build, survive
            disasters, and control Totems to dominate the archipelago.
          </p>
          <div className="space-y-4 md:space-y-0 md:space-x-4 flex flex-col md:flex-row">
            {" "}
            <Link
              href="/download"
              className="px-8 py-4 bg-[var(--isle-ice)] text-black font-bold rounded-lg hover:bg-opacity-90 transition-all transform hover:-translate-y-1 text-center"
            >
              Play the Mod
            </Link>
            <Link
              href="/features"
              className="px-8 py-4 bg-transparent border-2 border-[var(--isle-ice)] text-white font-bold rounded-lg hover:bg-[var(--isle-ice)] hover:bg-opacity-10 transition-all transform hover:-translate-y-1 text-center"
            >
              See Features
            </Link>
          </div>
          {/* Updated Island List */}
          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2">
            <div className="flex items-center">
              <div className="w-2 h-2 rounded-full bg-[var(--isle-fire)]"></div>
              <span className="ml-2">Pyrothar</span>
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 rounded-full bg-[var(--isle-ice)]"></div>
              <span className="ml-2">Frostreign</span>
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 rounded-full bg-[var(--isle-desert)]"></div>
              <span className="ml-2">Sahrakir</span>
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 rounded-full bg-[var(--isle-mushroom)]"></div>
              <span className="ml-2">Auralis</span>
            </div>
          </div>
        </div>

        <div
          className={`w-full lg:w-1/2 mt-16 lg:mt-0 transition-all duration-1000 delay-300 ease-out ${
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
          }`}
        >
          <div className="relative w-full min-h-[260px] md:min-h-[360px] glass rounded-3xl overflow-hidden flex items-center">
            {/* Background layers (absolute) - keep decorative elements here */}
            <div
              className="absolute inset-0 bg-gradient-to-br from-[var(--background)]/80 to-[var(--background)]/60 backdrop-filter backdrop-blur-sm"
              aria-hidden
            >
              {/* Hexagonal Grid Background */}
              {hexagonalGrid}
            </div>

            {/* Main Content (relative) - allows the card to grow with content */}
            <div className="relative flex flex-col items-center justify-center p-12 md:p-16 gap-8 w-full h-full">
              {/* The "Coming Soon" title with animated typing effect */}{" "}
              <div className="text-center w-full">
                <div className="flex items-center justify-center gap-3 mb-6">
                  <div className="text-3xl md:text-4xl font-bold">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-[var(--isle-ice)] to-[var(--isle-crystal)]">
                      Launch Update
                    </span>
                  </div>
                  {/* Delayed badge */}
                  <div className="px-3 py-1 rounded-full bg-red-600 text-white text-xs font-semibold shadow-sm">
                    Delayed
                  </div>
                </div>

                <div className="flex justify-center items-center mb-4">
                  <span className="text-white/70 text-base mr-3">
                    Previously:{" "}
                    <span className="line-through text-white/40">
                      Aug 25, 2025 • 19:00 UTC+2
                    </span>
                  </span>
                </div>

                {/* New Launch Date & Time */}
                <div className="mt-2 mb-6">
                  <div className="text-lg font-semibold text-white/90 mb-2">
                    New Launch Date
                  </div>
                  <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[var(--isle-fire)] to-[var(--isle-ice)] mb-2">
                    September 8, 2025 • 19:00 UTC+2
                  </div>
                  <div className="text-sm text-white/60 mt-2 max-w-xl mx-auto">
                    We've had an unexpected delay — thank you for your patience.
                    We'll be ready to welcome you on the islands soon.
                  </div>
                </div>

                {/* Live countdown to the new launch */}
                <div className="flex justify-center">
                  <div className="inline-block rounded-2xl border-4 border-[var(--isle-ice)] bg-[var(--background)]/80 shadow-lg shadow-[var(--isle-ice)]/20 px-6 py-4">
                    <Countdown targetIso={"2025-09-08T17:00:00Z"} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Game stats - full width, sits below the hero columns */}
      <div className="container mx-auto px-4 mt-8">
        <div className="flex flex-col md:flex-row justify-around items-center gap-6 max-w-4xl mx-auto">
          <div className="text-center">
            <p className="text-3xl font-bold gradient-text">4</p>
            <p className="text-sm">Epic Realms</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold gradient-text">4</p>
            <p className="text-sm">Rival Teams</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold gradient-text">∞</p>
            <p className="text-sm">Possibilities</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
