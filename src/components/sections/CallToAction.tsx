"use client";

import React from "react";
import Link from "next/link";
import FloatingParticles from "@/components/FloatingParticles";

const CallToAction: React.FC = () => {
  return (
    <section className="relative py-24">
      {/* Crystal-themed floating particles for CTA section */}
      <div className="absolute inset-0 pointer-events-none">
        <FloatingParticles
          count={25}
          connectLines={false}
          colors={["var(--isle-crystal)"]}
          opacityRange={{ min: 0.2, max: 0.5 }}
          speedRange={{ min: 0.1, max: 0.4 }}
        />
      </div>

      {/* Content container */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="glass p-12 rounded-3xl overflow-hidden">
          {/* Background decoration */}
          <div className="absolute inset-0 z-0">
            <div className="absolute -right-20 -top-20 w-96 h-96 rounded-full opacity-20 blur-[80px] bg-[var(--isle-fire)]"></div>
            <div className="absolute -left-20 -bottom-20 w-96 h-96 rounded-full opacity-20 blur-[80px] bg-[var(--isle-ice)]"></div>
          </div>

          <div className="relative z-20 flex flex-col lg:flex-row items-center justify-between">
            <div className="w-full lg:w-2/3 mb-8 lg:mb-0">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
                Join the Adventure Today
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl">
                Begin your journey across the mystical Stormbound Isles. Forge
                your destiny, discover ancient powers, and become a legend in
                this magical realm.
              </p>
            </div>

            <div className="w-full lg:w-1/3 flex flex-col space-y-4">
              {" "}
              <Link
                href="https://github.com/no-felix/stormbound-isles/releases"
                className="px-8 py-4 bg-[var(--isle-fire)] text-white font-bold rounded-lg hover:bg-opacity-90 transition-all transform hover:-translate-y-1 text-center"
              >
                Download Mod
              </Link>
              <Link
                href="video"
                className="px-8 py-4 bg-transparent border-2 border-white/20 text-white font-bold rounded-lg hover:bg-white/10 transition-all transform hover:-translate-y-1 text-center"
              >
                Watch Gameplay
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
