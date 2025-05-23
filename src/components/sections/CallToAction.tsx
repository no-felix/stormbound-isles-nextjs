"use client";

import React from "react";

const CallToAction: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-24">
      <div className="glass p-12 rounded-3xl relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 z-0">
          <div className="absolute -right-20 -top-20 w-96 h-96 rounded-full opacity-20 blur-[80px] bg-[var(--isle-fire)]"></div>
          <div className="absolute -left-20 -bottom-20 w-96 h-96 rounded-full opacity-20 blur-[80px] bg-[var(--isle-ice)]"></div>
        </div>

        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between">
          <div className="w-full lg:w-2/3 mb-8 lg:mb-0">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
              Join the Adventure Today
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl">
              Begin your journey across the mystical Stormbound Isles. Forge
              your destiny, discover ancient powers, and become a legend in this
              magical realm.
            </p>
          </div>

          <div className="w-full lg:w-1/3 flex flex-col space-y-4">
            <a
              href="/not-found"
              className="px-8 py-4 bg-[var(--isle-fire)] text-white font-bold rounded-lg hover:bg-opacity-90 transition-all transform hover:-translate-y-1 text-center"
            >
              Download Now
            </a>
            <a
              href="/not-found"
              className="px-8 py-4 bg-transparent border-2 border-white/20 text-white font-bold rounded-lg hover:bg-white/10 transition-all transform hover:-translate-y-1 text-center"
            >
              Watch Gameplay
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
