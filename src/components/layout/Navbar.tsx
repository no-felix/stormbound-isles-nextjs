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

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [active, setActive] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);

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

  const handleNav = (id: string) => {
    setIsMenuOpen(false);
    scrollToSection(id);
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-glass shadow-lg backdrop-blur-md' : 'bg-transparent'}`} style={{ height: 'var(--navbar-height)' }}>
      <div className="container mx-auto px-4 flex items-center justify-between h-full">
        {/* Logo and branding */}
        <div className="font-bold text-xl text-white cursor-pointer" onClick={() => handleNav('hero')}>
          Stormbound Isles
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
