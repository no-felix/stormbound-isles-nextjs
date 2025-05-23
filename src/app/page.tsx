"use client";

import React from "react";
import Layout from "@/components/layout/Layout";
import Hero from "@/components/sections/Hero";
import Features from "@/components/sections/Features";
import Islands from "@/components/sections/Islands";
import CallToAction from "@/components/sections/CallToAction";
import SectionDivider from "@/components/SectionDivider";

export default function HomePage() {
  // Define section background colors for proper divider gradients
  const bgColors = {
    hero: "transparent", // Hero has gradient background from body
    features: "#1c2133",
    islands: "#141824",
    cta: "#1c2133",
  };

  return (
    <Layout>
      <main className="relative overflow-x-hidden">
        {/* Hero Section */}
        <section id="hero" className="relative min-h-screen">
          <Hero />
          {/* Divider between Hero and Features */}
          <SectionDivider
            bgColorFrom={bgColors.hero}
            bgColorTo={bgColors.features}
          />
        </section>

        {/* Features Section */}
        <section id="features" className="relative bg-[#1c2133]">
          <Features />
          {/* Divider between Features and Islands */}
          <SectionDivider
            bgColorFrom={bgColors.features}
            bgColorTo={bgColors.islands}
          />
        </section>

        {/* Islands Section */}
        <section id="islands" className="relative bg-[#141824]">
          <Islands />
          {/* Divider between Islands and CTA */}
          <SectionDivider
            bgColorFrom={bgColors.islands}
            bgColorTo={bgColors.cta}
          />
        </section>

        {/* CTA Section */}
        <section id="cta" className="relative bg-[#1c2133]">
          <CallToAction />
        </section>
      </main>
    </Layout>
  );
}
