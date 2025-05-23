"use client";

import React, { useState, useEffect } from "react";
import Link from 'next/link';
import FloatingParticles from "@/components/FloatingParticles";

const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    // Trigger animation after component mounts
    setIsVisible(true);
  }, []);

  return (
    <>
      {/* Fixed position particles that cover the entire viewport */}
      <FloatingParticles
        count={100}
        connectLines={true}
      />

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
          <div className="space-y-4 md:space-y-0 md:space-x-4 flex flex-col md:flex-row">            <Link
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
            {" "}
            {/* Placeholder for a hero image - replace with your actual image */}
            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[var(--isle-fire)] via-[var(--isle-ice)] to-[var(--isle-mushroom)] opacity-50">
              <span className="text-2xl font-bold text-white">
                Will your team rule the elements?
              </span>
            </div>
            {/* Floating elements to create depth */}
            <div className="absolute top-1/4 left-1/4 w-16 h-16 rounded-xl bg-[var(--isle-fire)] opacity-60 animate-pulse"></div>
            <div
              className="absolute bottom-1/4 right-1/3 w-20 h-20 rounded-full bg-[var(--isle-ice)] opacity-60 animate-pulse"
              style={{ animationDelay: "1s" }}
            ></div>
            <div
              className="absolute top-1/3 right-1/4 w-12 h-12 rounded-lg bg-[var(--isle-crystal)] opacity-60 animate-pulse"
              style={{ animationDelay: "2s" }}
            ></div>
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
