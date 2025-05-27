"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { getVersionInfo, formatVersion } from "../lib/version";

const EMOJIS = [
  { emoji: "🌋", label: "Volcano", bgColor: "#ff5a36", particle: "🔥" },
  { emoji: "❄️", label: "Ice", bgColor: "#64b5f6", particle: "❄️" },
  { emoji: "🏜️", label: "Desert", bgColor: "#ffa726", particle: "☀️" },
  { emoji: "🍄", label: "Mushroom", bgColor: "#8bc34a", particle: "🍄" },
  { emoji: "💎", label: "Crystal", bgColor: "#5affc6", particle: "✨" },
  { emoji: "🔥", label: "Fire", bgColor: "#ff5722", particle: "🔥" },
  { emoji: "🌪️", label: "Disaster", bgColor: "#9e9e9e", particle: "💨" },
  { emoji: "🌊", label: "Flood", bgColor: "#2196f3", particle: "💧" },
  { emoji: "🪨", label: "Rock", bgColor: "#795548", particle: "🪨" },
  { emoji: "🌈", label: "Magic", bgColor: "#e91e63", particle: "✨" },
];

const MESSAGES = [
  "Lost in the Isles?",
  "Swept away by elemental chaos!",
  "Oops! This page fell into a volcano crater.",
  "Frozen solid in the ice biome.",
  "A giant mushroom blocked this URL!",
  "Blown away by a desert sandstorm!",
  "Crystallized by magical energy.",
  "Lost in the scorching desert dunes.",
  "A lava flow melted this page away!",
  "Buried under an avalanche of snow blocks.",
  "The crystal caves are too confusing...",
  "Mushroom spores clouded your vision.",
  "A TNT explosion destroyed this link!",
  "The PvP arena is closed for maintenance.",
  "Your team got eliminated early.",
  "Caught in a disaster event!",
  "The jury phase vote went wrong.",
  "Respawned at the wrong coordinates.",
  "Your base got raided while AFK.",
  "Fell into the void between islands.",
  "A griefer broke this page block by block.",
  "The server admin moved this content.",
  "Your inventory was too full to load this.",
  "A Creeper blew up the page cache.",
  "The mod crashed during loading.",
  "Connection timed out to this dimension.",
  "This chunk failed to generate properly.",
  "A redstone contraption went haywire.",
  "The Nether portal led to the wrong place.",
  "Your pickaxe broke before mining this data.",
];

const TIME_BASED_MESSAGES = {
  morning: [
    "Good morning! Still lost though...",
    "Early bird gets the 404 error.",
    "Morning coffee won't fix this URL.",
  ],
  afternoon: [
    "Afternoon adventure gone wrong!",
    "Lunch break turned into error break.",
    "The midday sun can't illuminate this page.",
  ],
  evening: [
    "Evening exploration ended here.",
    "Sunset doesn't make this less lost.",
    "Dinner time but the page is missing.",
  ],
  night: [
    "Lost in the dark of night...",
    "Even nocturnal mobs can't find this page.",
    "The moon is out but this page isn't.",
  ],
};

function getRandom<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

function getTimeOfDay(): string {
  const hour = new Date().getHours();
  if (hour >= 6 && hour < 12) return "morning";
  if (hour >= 12 && hour < 18) return "afternoon";
  if (hour >= 18 && hour < 22) return "evening";
  return "night";
}

function getRandomMessage(): string {
  const timeOfDay = getTimeOfDay();
  const shouldUseTimeBased = Math.random() < 0.3; // 30% chance for time-based message

  if (shouldUseTimeBased) {
    const timeMessages =
      TIME_BASED_MESSAGES[timeOfDay as keyof typeof TIME_BASED_MESSAGES];
    return getRandom(timeMessages);
  }

  return getRandom(MESSAGES);
}

export default function NotFound() {
  const [mounted, setMounted] = useState(false);
  const [emojiObj, setEmojiObj] = useState(EMOJIS[0]);
  const [message, setMessage] = useState(MESSAGES[0]);
  const [lostTime, setLostTime] = useState(0);
  const [achievementState, setAchievementState] = useState<
    "hidden" | "showing" | "hiding"
  >("hidden");  const [particles, setParticles] = useState<
    Array<{ id: number; x: number; delay: number; drift: number }>
  >([]);

  const { version } = getVersionInfo();

  useEffect(() => {
    setMounted(true);
    setEmojiObj(getRandom(EMOJIS));
    setMessage(getRandomMessage());
    const achievementTimer = setTimeout(() => {
      setAchievementState("showing");
      setTimeout(() => {
        setAchievementState("hiding");
      }, 4000);
    }, 2000);

    return () => clearTimeout(achievementTimer);
  }, []);
  // Lost timer
  useEffect(() => {
    if (!mounted) return;
    const timer = setInterval(() => {
      setLostTime((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [mounted]); // Generate static particles on mount
  useEffect(() => {
    if (!mounted) return;
    const staticParticles = Array.from({ length: 12 }, (_, i) => ({
      id: i,
      x: Math.random() * 100, // 0-100% full width
      delay: Math.random() * 6, // Random delay 0-6s for more variety
      drift: (Math.random() - 0.5) * 60, // Random drift -30px to +30px
    }));
    setParticles(staticParticles);
  }, [mounted, emojiObj]); // Regenerate when emoji changes

  if (!mounted) {
    return <div className="min-h-screen bg-[#232946]" />;
  }
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center text-white px-4 relative overflow-hidden transition-colors duration-1000"
      style={{
        background: `linear-gradient(135deg, #181a20 0%, ${emojiObj.bgColor}20 100%)`,
      }}
    >
      {" "}
      {/* Floating Particles */}
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute text-xl pointer-events-none particle-float"
          style={
            {
              left: `${particle.x}%`,
              animationDelay: `${particle.delay}s`,
              "--drift-x": `${particle.drift}px`,
            } as React.CSSProperties
          }
        >
          {emojiObj.particle}
        </div>
      ))}{" "}
      {/* Achievement Toast */}
      {achievementState !== "hidden" && (
        <div
          className={`fixed top-4 right-4 bg-yellow-600 text-black px-6 py-3 rounded-lg shadow-lg z-50 ${
            achievementState === "hiding"
              ? "animate-slide-out"
              : "animate-slide-in"
          }`}
        >
          <div className="flex items-center gap-2">
            <span className="text-lg">🏆</span>
            <div>
              <div className="font-bold text-sm">Achievement Unlocked!</div>
              <div className="text-xs">Master of Getting Lost</div>
            </div>
          </div>
        </div>
      )}{" "}
      <div className="flex flex-col items-center z-10 relative max-w-2xl w-full">
        {/* Lost Timer */}
        <div className="mb-4 bg-black/30 px-3 py-1 rounded backdrop-blur-sm">
          <span className="text-xs text-gray-400">Lost for: {lostTime}s</span>
        </div>{" "}
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
        </h2>{" "}
        <p className="mb-8 text-lg text-center max-w-md opacity-80">
          Looks like you wandered off the server.
          <br />{" "}
          <span className="text-[var(--isle-mushroom)] font-semibold">
            Pro Tip:
          </span>{" "}
          Even the best Minecraft players get lost sometimes!
        </p>{" "}
        <Link
          href="/"
          className="px-8 py-4 bg-[var(--isle-crystal)] text-black font-bold rounded-lg shadow-lg hover:bg-[var(--isle-fire)] transition-colors text-lg"
        >
          Return to Base        </Link>
      </div>

      {/* Debug Version Info */}
      <div className="fixed bottom-4 right-4 text-xs text-gray-600 bg-black/20 backdrop-blur-sm px-2 py-1 rounded border border-gray-700">
        <span className="font-mono">build: {formatVersion(version)}</span>
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
        }        .subtle-glitch {
          position: relative;
          animation: subtle-glitch-anim 2.5s infinite steps(2, end);
        }        @keyframes subtle-glitch-anim {
          0% {
            text-shadow: none;
            opacity: 1;
            transform: translateX(0);
          }
          4.8% {
            text-shadow: 2px 0 #fff, -2px 0 #fff;
            opacity: 0.85;
            transform: translateX(-1px);
          }
          9.6% {
            text-shadow: -2px 0 #fff, 2px 0 #fff;
            opacity: 0.9;
            transform: translateX(1px);
          }
          14.4% {
            text-shadow: 1px 0 #fff, -1px 0 #fff;
            opacity: 0.95;
            transform: translateX(-0.5px);
          }
          19.2% {
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
          .animate-slide-in {
          animation: slideIn 0.3s ease-out;
        }
        @keyframes slideIn {
          from {
            transform: translateX(100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
          .animate-slide-out {
          animation: slideOut 0.3s ease-in forwards;
        }
        @keyframes slideOut {
          from {
            transform: translateX(0);
            opacity: 1;
          }
          to {
            transform: translateX(100%);
            opacity: 0;
          }
        }.particle-float {
          animation: particleRise 6s linear infinite;
          bottom: -10%;
        }        @keyframes particleRise {
          0% {
            transform: translateY(0) translateX(0) rotate(0deg) scale(0.8);
            opacity: 0;
          }
          10% {
            opacity: 0.7;
          }
          60% {
            opacity: 0.5;
          }
          90% {
            opacity: 0.2;
          }
          100% {
            transform: translateY(-120vh) translateX(var(--drift-x, 0px)) rotate(360deg) scale(1.2);
            opacity: 0;
          }        }
      `}</style>
    </div>
  );
}
