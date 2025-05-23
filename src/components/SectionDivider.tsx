'use client';

import React, { useId } from 'react';

interface SectionDividerProps {
  flip?: boolean;
  bgColorFrom: string;
  bgColorTo: string;
}

const SectionDivider: React.FC<SectionDividerProps> = ({ 
  flip = false, 
  bgColorFrom, 
  bgColorTo 
}) => {
  const uniqueId = useId(); // Use React's useId hook
  
  return (
    <div 
      className={`relative w-full h-24 overflow-hidden ${flip ? 'transform rotate-180' : ''}`}
      style={{
        zIndex: 10,
        marginTop: flip ? '-1px' : 0,
        marginBottom: !flip ? '-1px' : 0,
      }}
    >
      <svg 
        className="absolute w-full h-full" 
        preserveAspectRatio="none" 
        viewBox="0 0 1440 200" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id={uniqueId} x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style={{ stopColor: bgColorFrom }} />
            <stop offset="100%" style={{ stopColor: bgColorTo }} />
          </linearGradient>
        </defs>
        
        <path 
          fill={`url(#${uniqueId})`}
          d="M0,64L40,69.3C80,75,160,85,240,96C320,107,400,117,480,106.7C560,96,640,64,720,74.7C800,85,880,139,960,138.7C1040,139,1120,85,1200,74.7C1280,64,1360,96,1400,112L1440,128L1440,200L1400,200C1360,200,1280,200,1200,200C1120,200,1040,200,960,200C880,200,800,200,720,200C640,200,560,200,480,200C400,200,320,200,240,200C160,200,80,200,40,200L0,200Z"
        />
      </svg>
    </div>
  );
};

export default SectionDivider;
