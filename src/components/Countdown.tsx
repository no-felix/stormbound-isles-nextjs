"use client";

import React, { useEffect, useState } from "react";

interface CountdownProps {
  targetIso: string; // ISO date string in UTC or local
}

const pad = (n: number) => String(n).padStart(2, "0");

const Countdown: React.FC<CountdownProps> = ({ targetIso }) => {
  const target = new Date(targetIso).getTime();
  const [now, setNow] = useState(Date.now());

  useEffect(() => {
    const t = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(t);
  }, []);

  const diff = Math.max(0, target - now);
  const seconds = Math.floor(diff / 1000) % 60;
  const minutes = Math.floor(diff / (1000 * 60)) % 60;
  const hours = Math.floor(diff / (1000 * 60 * 60)) % 24;
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));

  return (
    <div className="mt-4 flex items-center justify-center gap-3 text-sm text-white/90">
      <div className="flex flex-col items-center">
        <span className="text-xl font-bold">{pad(days)}</span>
        <span className="uppercase text-xs text-white/60">days</span>
      </div>
      <div className="text-white/40">:</div>
      <div className="flex flex-col items-center">
        <span className="text-xl font-bold">{pad(hours)}</span>
        <span className="uppercase text-xs text-white/60">hrs</span>
      </div>
      <div className="text-white/40">:</div>
      <div className="flex flex-col items-center">
        <span className="text-xl font-bold">{pad(minutes)}</span>
        <span className="uppercase text-xs text-white/60">min</span>
      </div>
      <div className="text-white/40">:</div>
      <div className="flex flex-col items-center">
        <span className="text-xl font-bold">{pad(seconds)}</span>
        <span className="uppercase text-xs text-white/60">sec</span>
      </div>
    </div>
  );
};

export default Countdown;
