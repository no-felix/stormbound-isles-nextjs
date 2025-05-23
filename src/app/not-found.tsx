"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const EMOJIS = [
  { emoji: "🌋", label: "Volcano" },
  { emoji: "❄️", label: "Ice" },
  { emoji: "🏜️", label: "Desert" },
  { emoji: "🍄", label: "Mushroom" },
  { emoji: "💎", label: "Crystal" },
  { emoji: "🔥", label: "Fire" },
  { emoji: "🌪️", label: "Disaster" },
  { emoji: "🌊", label: "Flood" },
  { emoji: "🪨", label: "Rock" },
  { emoji: "🌈", label: "Magic" },
];

const MESSAGES = [
  "Lost in the Isles?",
  "Swept Away by Chaos!",
  "Oops! This page fell into a volcano.",
  "Frozen in the void. Page not found.",
  "A mushroom ate this page.",
  "Blown away by a magical storm!",
  "Crystallized into nothingness.",
  "Deserted! This page wandered off.",
  "Elemental mishap!",
  "You found a secret island... but not this page.",
];

function getRandom<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

export default function NotFound() {
  const [mounted, setMounted] = useState(false);
  const [emojiObj, setEmojiObj] = useState(EMOJIS[0]);
  const [message, setMessage] = useState(MESSAGES[0]);

  useEffect(() => {
    setMounted(true);
    setEmojiObj(getRandom(EMOJIS));
    setMessage(getRandom(MESSAGES));
  }, []);

  if (!mounted) {
    return <div className="min-h-screen bg-[#232946]" />;
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#181a20] text-white px-4">
      <div className="flex flex-col items-center z-10 relative">
        <div
          className="mb-6 text-[6rem] drop-shadow-lg animate-bounce-slow"
          aria-label={emojiObj.label}
        >
          {emojiObj.emoji}
        </div>
        <h1 className="text-7xl font-extrabold mb-4 drop-shadow-lg tracking-tight subtle-glitch">
          404
        </h1>
        <h2 className="text-2xl font-bold mb-2 italic text-gray-300">
          {message}
        </h2>
        <p className="mb-8 text-lg text-center max-w-md opacity-80">
          Looks like you wandered off the map.
          <br />
          <span className="text-[var(--isle-mushroom)] font-semibold">
            Tip:
          </span>{" "}
          Even the best explorers get lost sometimes!
        </p>
        <Link
          href="/"
          className="px-8 py-4 bg-[var(--isle-crystal)] text-black font-bold rounded-lg shadow-lg hover:bg-[var(--isle-fire)] transition-colors text-lg"
        >
          Return to the Isles
        </Link>
      </div>
      <style>{`
        .animate-bounce-slow {
          animation: bounce 2.5s infinite cubic-bezier(0.28, 0.84, 0.42, 1);
        }
        @keyframes bounce {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-24px);
          }
        }
        .subtle-glitch {
          position: relative;
          animation: subtle-glitch-anim 1.2s infinite steps(2, end);
        }
        @keyframes subtle-glitch-anim {
          0% {
            text-shadow: none;
            opacity: 1;
            transform: translateX(0);
          }
          10% {
            text-shadow: 2px 0 #fff, -2px 0 #fff;
            opacity: 0.85;
            transform: translateX(-1px);
          }
          20% {
            text-shadow: -2px 0 #fff, 2px 0 #fff;
            opacity: 0.9;
            transform: translateX(1px);
          }
          30% {
            text-shadow: 1px 0 #fff, -1px 0 #fff;
            opacity: 0.95;
            transform: translateX(-0.5px);
          }
          40% {
            text-shadow: none;
            opacity: 1;
            transform: translateX(0);
          }
          100% {
            text-shadow: none;
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </div>
  );
}
