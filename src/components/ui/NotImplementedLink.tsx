'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface NotImplementedLinkProps {
  children: React.ReactNode;
  className?: string;
  buttonStyle?: 'primary' | 'secondary' | 'ghost';
  icon?: string;
}

/**
 * A button component that redirects to the 404 page
 * Used for features that aren't implemented yet
 */
export default function NotImplementedLink({
  children,
  className = '',
  buttonStyle = 'primary',
  icon
}: NotImplementedLinkProps) {
  const baseClasses = "px-6 py-3 rounded-full font-medium transition-all flex items-center gap-2";
  
  const styleClasses = {
    primary: "bg-[rgba(90,209,255,0.2)] text-[#5ad1ff] border border-[rgba(90,209,255,0.3)] hover:bg-[rgba(90,209,255,0.3)]",
    secondary: "bg-[rgba(255,255,255,0.05)] text-white/80 border border-[rgba(255,255,255,0.1)] hover:bg-[rgba(255,255,255,0.1)]",
    ghost: "text-white/70 hover:text-white hover:bg-white/5"
  };
  
  return (
    <Link href="/not-found" passHref>
      <motion.div
        className={`${baseClasses} ${styleClasses[buttonStyle]} ${className}`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.98 }}
      >
        {children}
        {icon && <span className="text-xl">{icon}</span>}
      </motion.div>
    </Link>
  );
}
