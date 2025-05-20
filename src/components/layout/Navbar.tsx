'use client';

const navLinks = [
  { id: 'features', label: 'Wonders' },
  { id: 'islands', label: 'The Isles' },
  { id: 'gameplay', label: 'Trials' },
  { id: 'download', label: 'Begin' },
];

function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (el) {
    // Calculate navbar height to offset scrolling
    const navbar = document.querySelector('nav');
    const navbarHeight = navbar ? navbar.offsetHeight : 0;
    // Get the element's position relative to the document
    const rect = el.getBoundingClientRect();
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    // Calculate the absolute position and apply the navbar offset
    // Use the CSS variable for navbar height if available
    const cssNavbarHeight = getComputedStyle(document.documentElement).getPropertyValue('--navbar-height');
    const navbarOffset = cssNavbarHeight ? parseInt(cssNavbarHeight) : navbarHeight;
    const offsetPosition = scrollTop + rect.top - navbarOffset;
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
    // Set focus for accessibility
    el.setAttribute('tabindex', '-1');
    el.focus({ preventScroll: true });
  }
}

import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [active, setActive] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);
  
  // Animation values for the gradient text
  const gradientProgress = useMotionValue(0);
  const gradientPosition = useMotionValue(0);
  const textOpacity = useTransform(gradientProgress, [0, 1], [0, 1]);
  const whiteTextOpacity = useTransform(gradientProgress, [0, 1], [1, 0]);
  
  useEffect(() => {
    // Animate the gradient text when scroll state changes
    if (isScrolled) {
      // Animate to gradient text with random position
      const randomPosition = Math.random() * 100;
      animate(gradientPosition, randomPosition, { duration: 0.3 });
      animate(gradientProgress, 1, { duration: 0.5 });
    } else {
      // Animate back to white text
      animate(gradientProgress, 0, { duration: 0.5 });
    }
  }, [isScrolled, gradientProgress, gradientPosition]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      // Get navbar height for offset calculations
      const navbar = document.querySelector('nav');
      const navbarHeight = navbar ? navbar.offsetHeight : 0;
      const cssNavbarHeight = getComputedStyle(document.documentElement).getPropertyValue('--navbar-height');
      const offsetThreshold = (cssNavbarHeight ? parseInt(cssNavbarHeight) : navbarHeight) + 80;
      // Find active section - start from the end to prioritize later sections
      let found = false;
      for (let i = navLinks.length - 1; i >= 0; i--) {
        const section = document.getElementById(navLinks[i].id);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= offsetThreshold && rect.bottom > offsetThreshold) {
            setActive(navLinks[i].id);
            found = true;
            break;
          }
        }
      }
      if (!found) setActive('');
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // This useEffect adds a shimmer animation when the navbar sticks
  useEffect(() => {
    if (isScrolled) {
      // Shimmer effect when navbar becomes sticky
      const timeout = setTimeout(() => {
        const shimmerElement = document.querySelector('.navbar-title-shimmer');
        if (shimmerElement) {
          shimmerElement.classList.add('active');
          setTimeout(() => {
            shimmerElement.classList.remove('active');
          }, 700);
        }
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [isScrolled]);

  const handleNav = (id: string) => {
    setIsMenuOpen(false);
    scrollToSection(id);
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-glass shadow-lg backdrop-blur-md' : 'bg-transparent'}`} style={{ height: 'var(--navbar-height)' }}>      <div className="container mx-auto px-4 flex items-center justify-between h-full">
        {/* Logo and branding */}        <div className="font-bold text-xl relative cursor-pointer overflow-hidden" onClick={() => handleNav('hero')}>
          {/* Shimmer effect overlay */}
          <div className="navbar-title-shimmer absolute inset-0 z-20 pointer-events-none"></div>
          
          {/* White text layer */}
          <motion.span 
            className="absolute inset-0 text-white z-10"
            style={{ opacity: whiteTextOpacity }}
          >
            Stormbound Isles
          </motion.span>
            {/* Gradient text layer */}
          <motion.span 
            className={`gradient-text ${isScrolled ? 'animate-gradient' : ''}`}
            style={{ 
              opacity: textOpacity,
              backgroundPositionX: useTransform(
                gradientPosition, 
                value => `${value}%`
              )
            }}
          >
            Stormbound Isles
          </motion.span>
        </div>
        {/* Desktop nav */}
        <ul className="hidden md:flex gap-8">
          {navLinks.map(link => (
            <li key={link.id}>
              <button
                className={[
                  'text-lg font-medium px-3 py-2 rounded transition-colors',
                  'focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2',
                  'cursor-pointer',
                  active === link.id
                    ? 'text-accent bg-white/10'
                    : 'text-white hover:text-accent hover:bg-white/5'
                ].join(' ')}
                onClick={() => handleNav(link.id)}
                aria-current={active === link.id ? 'page' : undefined}
                tabIndex={0}
              >
                <span className="relative inline-block">
                  <span
                    className={[
                      active === link.id
                        ? 'underline underline-offset-4 decoration-accent'
                        : ''
                    ].join(' ')}
                  >
                    {link.label}
                  </span>
                  {active === link.id && (
                    <span
                      className="absolute -right-3 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-accent animate-pulse"
                      aria-hidden="true"
                    ></span>
                  )}
                </span>
              </button>
            </li>
          ))}
        </ul>
        {/* Mobile nav toggle */}
        <button className="md:hidden text-white focus:outline-none" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Menü öffnen/schließen">
          <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
      {/* Mobile nav menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-glass shadow-lg backdrop-blur-md z-40">
          <ul className="flex flex-col gap-2 p-4">
            {navLinks.map(link => (
              <li key={link.id}>
                <button
                  className={[
                    'w-full text-left text-lg font-medium px-3 py-2 rounded transition-colors',
                    'focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2',
                    'cursor-pointer',
                    active === link.id
                      ? 'text-accent bg-white/10'
                      : 'text-white hover:text-accent hover:bg-white/5'
                  ].join(' ')}
                  onClick={() => handleNav(link.id)}
                  aria-current={active === link.id ? 'page' : undefined}
                  tabIndex={0}
                >
                  <span className="relative inline-block">
                    <span
                      className={[
                        active === link.id
                          ? 'underline underline-offset-4 decoration-accent'
                          : ''
                      ].join(' ')}
                    >
                      {link.label}
                    </span>
                    {active === link.id && (
                      <span
                        className="absolute -right-3 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-accent animate-pulse"
                        aria-hidden="true"
                      ></span>
                    )}
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
