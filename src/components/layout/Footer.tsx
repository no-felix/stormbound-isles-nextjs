import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import FadeIn from '../animations/FadeIn';

export default function Footer() {
  return (
    <footer className="relative pt-16 pb-10 overflow-hidden bg-gray-900 z-10">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-gradient-to-br from-[#5ad1ff] to-[#b36cff] opacity-5 blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-gradient-to-tl from-[#ff5a36] to-[#ffe156] opacity-5 blur-3xl"></div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <FadeIn direction="up" delay={0.1}>
            <div>
              <h3 className="text-xl font-bold mb-6 text-white">Stormbound Isles</h3>
              <p className="text-gray-400 mb-6">
                A Minecraft mod for version 1.21.1 built to support other mods like Create, Iris, and more, where five teams compete on five unique elemental islands.
              </p>
              <div className="flex gap-4">
                <Link 
                  href="https://github.com/no-felix/stormbound-isles" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <motion.div 
                    className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                    </svg>
                  </motion.div>
                </Link>
              </div>
            </div>
          </FadeIn>
          
          <FadeIn direction="up" delay={0.2}>
            <div>
              <h3 className="text-xl font-bold mb-6 text-white">Quick Links</h3>
              <nav className="space-y-4">
                <Link 
                  href="#features" 
                  className="block text-gray-400 hover:text-white transition-colors group"
                >
                  <span className="inline-flex items-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mr-2 opacity-60 group-hover:opacity-100 transition-opacity"></span>
                    Features
                  </span>
                </Link>
                <Link 
                  href="#islands" 
                  className="block text-gray-400 hover:text-white transition-colors group"
                >
                  <span className="inline-flex items-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-400 mr-2 opacity-60 group-hover:opacity-100 transition-opacity"></span>
                    Islands
                  </span>
                </Link>
                <Link 
                  href="#gameplay" 
                  className="block text-gray-400 hover:text-white transition-colors group"
                >
                  <span className="inline-flex items-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-400 mr-2 opacity-60 group-hover:opacity-100 transition-opacity"></span>
                    Gameplay
                  </span>
                </Link>
                <Link 
                  href="#download" 
                  className="block text-gray-400 hover:text-white transition-colors group"
                >
                  <span className="inline-flex items-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 mr-2 opacity-60 group-hover:opacity-100 transition-opacity"></span>
                    Download
                  </span>
                </Link>
                <Link 
                  href="https://github.com/no-felix/stormbound-isles" 
                  className="block text-gray-400 hover:text-white transition-colors group"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="inline-flex items-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mr-2 opacity-60 group-hover:opacity-100 transition-opacity"></span>
                    GitHub Repository
                  </span>
                </Link>
              </nav>
            </div>
          </FadeIn>
          
          <FadeIn direction="up" delay={0.3}>
            <div>
              <h3 className="text-xl font-bold mb-6 text-white">About The Mod</h3>
              <p className="text-gray-400 mb-4">
                Stormbound Isles is a Minecraft project for version 1.21.1 that brings team competition, unique elemental islands, and catastrophic events. The mod is designed for compatibility with popular Fabric mods like Create, Iris, Simple Voice Chat, Sodium, and more to enhance your gameplay experience.
              </p>
            </div>
          </FadeIn>
        </div>
        
        {/* Divider with gradient */}
        <div className="mt-16 mb-8 relative">
          <div className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent pointer-events-none" style={{top: 0}}></div>
        </div>
        
        {/* Copyright */}
        <div className="text-center mt-8">
          <FadeIn direction="up" delay={0.4}>
            <p className="text-gray-500">
              &copy; {new Date().getFullYear()} Stormbound Isles. All rights reserved.
            </p>
          </FadeIn>
        </div>
      </div>
    </footer>
  );
}
