'use client';

import React from 'react';
import Layout from '@/components/layout/Layout';
import Hero from '@/components/sections/Hero';
import Features from '@/components/sections/Features';
import Islands from '@/components/sections/Islands';
import Gameplay from '@/components/sections/Gameplay';
import Download from '@/components/sections/Download';

export default function Home() {
  return (
    <Layout>
      <main className="relative overflow-hidden">
        <section id="hero" className="relative">
          <Hero />
        </section>
        
        <section id="features" className="relative pt-24 pb-36 bg-[#1c2133]">
          <Features />
        </section>
        
        <section id="islands" className="relative pt-24 pb-36 bg-[#141824]">
          <Islands />
        </section>
        
        <section id="gameplay" className="relative pt-24 pb-36 bg-[#1c2133]">
          <Gameplay />
        </section>
        
        <section id="download" className="relative pt-24 pb-36 bg-[#141824]">
          <Download />
        </section>
      </main>
    </Layout>
  );
}
