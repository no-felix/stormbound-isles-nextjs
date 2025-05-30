"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Layout from "@/components/layout/Layout";
import FloatingParticles from "@/components/FloatingParticles";
import { useGitHubData } from "@/hooks/useGitHubData";

export default function DeveloperHubPage() {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const {
    data: githubData,
    loading: githubLoading,
    error: githubError,
  } = useGitHubData();

  useEffect(() => {
    // Trigger animation after component mounts
    setIsVisible(true);
  }, []);

  // live GitHub data with static development stats
  const devStats = {
    totalCommits: githubData?.totalCommits ?? 50,
    lastCommit: githubData?.lastCommit ?? "Loading...",
    openIssues: githubData?.openIssues ?? 1,
    stars: githubData?.stars ?? 0,
    forks: githubData?.forks ?? 0,
    currentPhase: "Core Systems",
    progressPercent: 80,
    nextMilestone: "Disaster System v1.0",
  };

  return (
    <Layout>
      {/* Developer-themed floating particles */}
      <div className="fixed inset-0 pointer-events-none" aria-hidden="true">
        <FloatingParticles
          count={30}
          connectLines={true}
          colors={["var(--isle-crystal)", "var(--isle-ice)"]}
          opacityRange={{ min: 0.1, max: 0.3 }}
          speedRange={{ min: 0.05, max: 0.2 }}
        />
      </div>

      <main
        className="relative py-16 px-4 sm:py-20 md:py-24 overflow-x-hidden"
        role="main"
      >
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto lg:max-w-6xl">
            {/* Header Section */}
            <motion.header
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-center mb-12 sm:mb-16"
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 gradient-text animate-gradient">
                Developer Hub
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-2xl lg:max-w-3xl mx-auto leading-relaxed">
                Follow the development journey, contribute to the project, and
                be the first to experience the elemental chaos.
              </p>
            </motion.header>

            {/* Live Development Status */}
            <motion.section
              initial={{ opacity: 0, scale: 0.95 }}
              animate={
                isVisible
                  ? { opacity: 1, scale: 1 }
                  : { opacity: 0, scale: 0.95 }
              }
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="relative glass rounded-xl sm:rounded-2xl p-6 sm:p-8 mb-8 sm:mb-12 overflow-hidden"
              aria-labelledby="dev-status-heading"
            >
              {/* Background decoration */}
              <div className="absolute inset-0 z-0" aria-hidden="true">
                <div className="absolute -right-8 -top-8 sm:-right-10 sm:-top-10 w-48 h-48 sm:w-64 sm:h-64 rounded-full opacity-10 blur-[60px] sm:blur-[80px] bg-[var(--isle-crystal)]"></div>
                <div className="absolute -left-8 -bottom-8 sm:-left-10 sm:-bottom-10 w-48 h-48 sm:w-64 sm:h-64 rounded-full opacity-10 blur-[60px] sm:blur-[80px] bg-[var(--isle-ice)]"></div>
              </div>

              <div className="relative z-10">
                <div className="flex items-center justify-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                  <div
                    className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-[var(--isle-crystal)] animate-pulse"
                    aria-hidden="true"
                  ></div>
                  <span className="text-[var(--isle-crystal)] font-semibold text-base sm:text-lg">
                    {githubLoading
                      ? "Fetching Status..."
                      : "Development Active"}
                  </span>
                  <div
                    className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-[var(--isle-crystal)] animate-pulse"
                    aria-hidden="true"
                  ></div>
                </div>

                {/* GitHub Error Display */}
                {githubError && (
                  <div className="text-center mb-4 p-3 bg-red-900/20 border border-red-500/30 rounded-lg">
                    <p className="text-red-300 text-sm">
                      ⚠️ Unable to fetch live GitHub data: {githubError}
                    </p>
                  </div>
                )}

                <div className="text-center mb-6 sm:mb-8">
                  <h2
                    id="dev-status-heading"
                    className="text-xl sm:text-2xl md:text-3xl font-bold gradient-text mb-3 sm:mb-4"
                  >
                    {devStats.currentPhase}
                  </h2>
                  <p className="text-gray-300 text-base sm:text-lg">
                    Foundation complete, working on disasters and advanced
                    mechanics
                  </p>
                </div>

                {/* Enhanced Development Stats Grid */}
                <fieldset className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-4 sm:mb-6">
                  <legend className="sr-only">Development statistics</legend>
                  <div className="text-center p-3 sm:p-4 bg-slate-800/30 rounded-lg">
                    <div
                      className="text-xl sm:text-2xl font-bold text-[var(--isle-fire)]"
                      aria-label={`${devStats.totalCommits} commits`}
                    >
                      {githubLoading ? "..." : devStats.totalCommits}
                    </div>
                    <div className="text-xs sm:text-sm text-gray-400">
                      Commits
                    </div>
                  </div>
                  <div className="text-center p-3 sm:p-4 bg-slate-800/30 rounded-lg">
                    <div
                      className="text-xl sm:text-2xl font-bold text-[var(--isle-crystal)]"
                      aria-label={`${devStats.stars} stars`}
                    >
                      {githubLoading ? "..." : devStats.stars}
                    </div>
                    <div className="text-xs sm:text-sm text-gray-400">
                      Stars
                    </div>
                  </div>
                  <div className="text-center p-3 sm:p-4 bg-slate-800/30 rounded-lg">
                    <div
                      className="text-xl sm:text-2xl font-bold text-[var(--isle-ice)]"
                      aria-label={`${devStats.openIssues} open issues`}
                    >
                      {githubLoading ? "..." : devStats.openIssues}
                    </div>
                    <div className="text-xs sm:text-sm text-gray-400">
                      Issues
                    </div>
                  </div>
                  <div className="text-center p-3 sm:p-4 bg-slate-800/30 rounded-lg">
                    <div className="text-xl sm:text-2xl font-bold text-[var(--isle-desert)]">
                      {githubLoading ? "..." : devStats.forks}
                    </div>
                    <div className="text-xs sm:text-sm text-gray-400">
                      Forks
                    </div>
                  </div>
                </fieldset>

                {/* Progress Bar */}
                <div className="relative mb-3 sm:mb-4">
                  {/* Hidden progress element for accessibility */}
                  <progress
                    className="sr-only"
                    value={devStats.progressPercent}
                    max={100}
                    aria-label={`Development progress: ${devStats.progressPercent}% complete`}
                  />

                  {/* Visual progress bar */}
                  <div className="w-full h-2 sm:h-3 bg-slate-800/60 rounded-full overflow-hidden">
                    {/* Animated progress fill */}
                    <motion.div
                      initial={{ width: 0 }}
                      animate={
                        isVisible
                          ? { width: `${devStats.progressPercent}%` }
                          : { width: 0 }
                      }
                      transition={{ duration: 2, delay: 0.5, ease: "easeOut" }}
                      className="h-full bg-gradient-to-r from-[var(--isle-crystal)] via-[var(--isle-ice)] to-[var(--isle-fire)] rounded-full"
                    />
                  </div>
                  <div className="flex justify-between mt-2 text-xs sm:text-sm text-gray-400">
                    <span>Phase Start</span>
                    <span className="font-medium text-[var(--isle-crystal)]">
                      Next: {devStats.nextMilestone}
                    </span>
                    <span>Phase Complete</span>
                  </div>
                </div>

                {/* Recent Commits Section */}
                {githubData?.recentCommits &&
                  githubData.recentCommits.length > 0 && (
                    <div className="mt-6 p-4 bg-slate-800/30 rounded-lg">
                      <h4 className="text-sm font-semibold text-white mb-3 flex items-center gap-2">
                        <span
                          className="text-[var(--isle-crystal)]"
                          aria-hidden="true"
                        >
                          📝
                        </span>
                        Recent Commits
                      </h4>
                      <div className="space-y-2 max-h-32 overflow-y-auto">
                        {githubData.recentCommits.slice(0, 3).map((commit) => (
                          <div
                            key={commit.sha}
                            className="flex items-start gap-2 text-xs"
                          >
                            <span className="text-[var(--isle-ice)] mt-0.5">
                              •
                            </span>
                            <div className="min-w-0 flex-1">
                              <p className="text-gray-300 truncate">
                                {commit.commit.message}
                              </p>
                              <p className="text-gray-500 text-xs">
                                {new Date(
                                  commit.commit.author.date
                                ).toLocaleDateString()}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
              </div>
            </motion.section>

            {/* Main Action Grid */}
            <div className="grid gap-6 sm:gap-8 lg:grid-cols-2 mb-8 sm:mb-12">
              {/* GitHub Integration */}
              <motion.section
                initial={{ opacity: 0, x: -30 }}
                animate={
                  isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }
                }
                transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                whileHover={{
                  y: -4,
                  scale: 1.01,
                  transition: { duration: 0.3, ease: "easeOut" },
                }}
                className="group glass rounded-xl sm:rounded-2xl p-6 sm:p-8 cursor-pointer focus-within:ring-2 focus-within:ring-[var(--isle-crystal)] focus-within:ring-offset-2 focus-within:ring-offset-slate-900"
                aria-labelledby="github-section-heading"
              >
                <div className="flex items-start gap-2 sm:gap-3 md:gap-4 mb-4 sm:mb-6">
                  <div className="p-2 sm:p-3 bg-[var(--isle-crystal)]/20 rounded-lg border border-[var(--isle-crystal)]/30 flex-shrink-0">
                    <span
                      className="text-xl sm:text-2xl md:text-3xl"
                      aria-hidden="true"
                    >
                      ⚡
                    </span>
                  </div>
                  <div className="min-w-0 flex-1 overflow-hidden">
                    <h3
                      id="github-section-heading"
                      className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-white mb-1 break-words"
                    >
                      Follow Development
                    </h3>
                    <p className="text-gray-400 text-xs sm:text-sm md:text-base truncate">
                      Last commit: {devStats.lastCommit}
                    </p>
                  </div>
                </div>

                <p className="text-gray-300 text-xs sm:text-sm md:text-base mb-4 sm:mb-6 leading-relaxed">
                  Watch the code evolve in real-time. Star the repository to get
                  notified of major updates and releases.
                </p>

                <fieldset className="space-y-2 sm:space-y-3">
                  <legend className="sr-only">GitHub repository links</legend>
                  <Link
                    href="https://github.com/no-felix/stormbound-isles"
                    className="flex items-center gap-2 sm:gap-3 text-gray-300 p-2 sm:p-3 bg-slate-800/30 rounded-lg group-hover:bg-slate-700/40 transition-colors min-w-0 hover:text-white"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span
                      className="text-[var(--isle-crystal)] text-sm sm:text-base md:text-lg flex-shrink-0"
                      aria-hidden="true"
                    >
                      ⭐
                    </span>
                    <span className="font-medium text-xs sm:text-sm md:text-base min-w-0 flex-1 truncate">
                      Star & Watch Repository
                    </span>
                    <span className="px-2 py-1 bg-[var(--isle-crystal)]/20 text-[var(--isle-crystal)] text-xs rounded-full flex-shrink-0">
                      {githubLoading ? "..." : `${devStats.stars} stars`}
                    </span>
                  </Link>
                  <Link
                    href="https://github.com/no-felix/stormbound-isles/commits"
                    className="flex items-center gap-2 sm:gap-3 text-gray-300 p-2 sm:p-3 bg-slate-800/30 rounded-lg group-hover:bg-slate-700/40 transition-colors min-w-0 hover:text-white"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span
                      className="text-[var(--isle-ice)] text-sm sm:text-base md:text-lg flex-shrink-0"
                      aria-hidden="true"
                    >
                      📝
                    </span>
                    <span className="font-medium text-xs sm:text-sm md:text-base min-w-0 flex-1 truncate">
                      View Recent Commits
                    </span>
                    <span className="px-2 py-1 bg-[var(--isle-ice)]/20 text-[var(--isle-ice)] text-xs rounded-full flex-shrink-0">
                      Live
                    </span>
                  </Link>
                  <Link
                    href="https://github.com/no-felix/stormbound-isles/issues"
                    className="flex items-center gap-2 sm:gap-3 text-gray-300 p-2 sm:p-3 bg-slate-800/30 rounded-lg group-hover:bg-slate-700/40 transition-colors min-w-0 hover:text-white"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span
                      className="text-[var(--isle-fire)] text-sm sm:text-base md:text-lg flex-shrink-0"
                      aria-hidden="true"
                    >
                      🐛
                    </span>
                    <span className="font-medium text-xs sm:text-sm md:text-base min-w-0 flex-1 truncate">
                      Report Issues & Suggestions
                    </span>
                    <span className="px-2 py-1 bg-[var(--isle-fire)]/20 text-[var(--isle-fire)] text-xs rounded-full flex-shrink-0">
                      {githubLoading ? "..." : `${devStats.openIssues} open`}
                    </span>
                  </Link>
                </fieldset>
              </motion.section>

              {/* Beta Testing & Community */}
              <motion.section
                initial={{ opacity: 0, x: 30 }}
                animate={
                  isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }
                }
                transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                whileHover={{
                  y: -4,
                  scale: 1.01,
                  transition: { duration: 0.3, ease: "easeOut" },
                }}
                className="group glass rounded-xl sm:rounded-2xl p-6 sm:p-8 cursor-pointer focus-within:ring-2 focus-within:ring-[var(--isle-fire)] focus-within:ring-offset-2 focus-within:ring-offset-slate-900"
                aria-labelledby="beta-section-heading"
              >
                <div className="flex items-start gap-2 sm:gap-3 md:gap-4 mb-4 sm:mb-6">
                  <div className="p-2 sm:p-3 bg-[var(--isle-fire)]/20 rounded-lg border border-[var(--isle-fire)]/30 flex-shrink-0">
                    <span
                      className="text-xl sm:text-2xl md:text-3xl"
                      aria-hidden="true"
                    >
                      🚀
                    </span>
                  </div>
                  <div className="min-w-0 flex-1 overflow-hidden">
                    <h3
                      id="beta-section-heading"
                      className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-white mb-1 break-words"
                    >
                      Be First to Play
                    </h3>
                    <p className="text-gray-400 text-xs sm:text-sm md:text-base truncate">
                      Monthly or bi-monthly updates
                    </p>
                  </div>
                </div>

                <p className="text-gray-300 text-xs sm:text-sm md:text-base mb-4 sm:mb-6 leading-relaxed">
                  Join the inner circle and get early access to development
                  builds, beta tests, and exclusive behind-the-scenes updates.
                </p>

                <fieldset className="space-y-2 sm:space-y-3">
                  <legend className="sr-only">
                    Beta testing and community options
                  </legend>
                  <div className="flex items-center gap-2 sm:gap-3 text-gray-300 p-2 sm:p-3 bg-slate-800/30 rounded-lg group-hover:bg-slate-700/40 transition-colors min-w-0">
                    <span
                      className="text-[var(--isle-mushroom)] text-sm sm:text-base md:text-lg flex-shrink-0"
                      aria-hidden="true"
                    >
                      🧪
                    </span>
                    <span className="font-medium text-xs sm:text-sm md:text-base min-w-0 flex-1 truncate">
                      Beta Testing Program
                    </span>
                    <span className="px-2 py-1 bg-[var(--isle-crystal)]/20 text-[var(--isle-crystal)] text-xs rounded-full flex-shrink-0">
                      Planning
                    </span>
                  </div>
                  <div className="flex items-center gap-2 sm:gap-3 text-gray-300 p-2 sm:p-3 bg-slate-800/30 rounded-lg group-hover:bg-slate-700/40 transition-colors min-w-0">
                    <span
                      className="text-[var(--isle-desert)] text-sm sm:text-base md:text-lg flex-shrink-0"
                      aria-hidden="true"
                    >
                      💬
                    </span>
                    <span className="font-medium text-xs sm:text-sm md:text-base min-w-0 flex-1 truncate">
                      Community Discord
                    </span>
                    <span className="px-2 py-1 bg-[var(--isle-fire)]/20 text-orange-300 text-xs rounded-full flex-shrink-0">
                      Soon
                    </span>
                  </div>
                  <div className="flex items-center gap-2 sm:gap-3 text-gray-300 p-2 sm:p-3 bg-slate-800/30 rounded-lg group-hover:bg-slate-700/40 transition-colors min-w-0">
                    <span
                      className="text-[var(--isle-crystal)] text-sm sm:text-base md:text-lg flex-shrink-0"
                      aria-hidden="true"
                    >
                      📧
                    </span>
                    <span className="font-medium text-xs sm:text-sm md:text-base min-w-0 flex-1 truncate">
                      Release Notifications
                    </span>
                    <span className="px-2 py-1 bg-[var(--isle-fire)]/20 text-orange-300 text-xs rounded-full flex-shrink-0">
                      Soon
                    </span>
                  </div>
                </fieldset>
              </motion.section>
            </div>

            {/* Development Roadmap */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
              className="glass rounded-xl sm:rounded-2xl p-6 sm:p-8 mb-8 sm:mb-12"
              aria-labelledby="roadmap-heading"
            >
              <h3
                id="roadmap-heading"
                className="text-xl sm:text-2xl font-bold gradient-text mb-4 sm:mb-6 text-center"
              >
                Development Roadmap
              </h3>

              <ol
                className="space-y-3 sm:space-y-4"
                aria-label="Development milestones"
              >
                <li className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 bg-[var(--isle-crystal)]/10 border-l-4 border-[var(--isle-crystal)] rounded-lg">
                  <span
                    className="text-[var(--isle-crystal)] text-lg sm:text-xl mt-0.5 flex-shrink-0"
                    aria-hidden="true"
                  >
                    ✅
                  </span>
                  <div className="min-w-0 flex-1">
                    <div className="font-semibold text-white text-sm sm:text-base">
                      Core Systems Architecture
                    </div>
                    <div className="text-xs sm:text-sm text-gray-400 mt-1">
                      Game manager, command system, data structures, team
                      management
                    </div>
                  </div>
                </li>

                <li className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 bg-[var(--isle-fire)]/10 border-l-4 border-[var(--isle-fire)] rounded-lg">
                  <span
                    className="text-[var(--isle-fire)] text-lg sm:text-xl mt-0.5 flex-shrink-0"
                    aria-hidden="true"
                  >
                    🔄
                  </span>
                  <div className="min-w-0 flex-1">
                    <div className="font-semibold text-white text-sm sm:text-base">
                      Disaster System Development
                    </div>{" "}
                    <div className="text-xs sm:text-sm text-gray-400 mt-1">
                      Dynamic events, environmental challenges, and
                      island-specific disasters
                    </div>
                  </div>
                </li>

                <li className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 bg-slate-800/30 border-l-4 border-slate-600 rounded-lg">
                  <span
                    className="text-gray-500 text-lg sm:text-xl mt-0.5 flex-shrink-0"
                    aria-hidden="true"
                  >
                    ⏳
                  </span>
                  <div className="min-w-0 flex-1">
                    <div className="font-semibold text-gray-300 text-sm sm:text-base">
                      Island Generation & Mechanics
                    </div>
                    <div className="text-xs sm:text-sm text-gray-400 mt-1">
                      Five elemental islands with unique buffs and environmental
                      features
                    </div>
                  </div>
                </li>

                <li className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 bg-slate-800/30 border-l-4 border-slate-600 rounded-lg">
                  <span
                    className="text-gray-500 text-lg sm:text-xl mt-0.5 flex-shrink-0"
                    aria-hidden="true"
                  >
                    ⏳
                  </span>
                  <div className="min-w-0 flex-1">
                    <div className="font-semibold text-gray-300 text-sm sm:text-base">
                      Alpha Release & Testing
                    </div>
                    <div className="text-xs sm:text-sm text-gray-400 mt-1">
                      First playable version with core features and beta testing
                      program
                    </div>
                  </div>
                </li>
              </ol>
            </motion.section>

            {/* Technical Setup */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 1, ease: "easeOut" }}
              className="glass rounded-xl sm:rounded-2xl p-6 sm:p-8 mb-8 sm:mb-12"
              aria-labelledby="setup-heading"
            >
              <h3
                id="setup-heading"
                className="text-xl sm:text-2xl font-bold gradient-text mb-4 sm:mb-6 text-center"
              >
                Prepare Your Setup
              </h3>

              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <h4 className="text-base sm:text-lg font-semibold text-white mb-3 sm:mb-4 flex items-center gap-2">
                    <span className="text-[var(--isle-ice)]" aria-hidden="true">
                      🛠️
                    </span>{" "}
                    Prerequisites
                  </h4>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-center gap-2 text-sm sm:text-base">
                      <span
                        className="text-[var(--isle-crystal)] text-xs sm:text-sm"
                        aria-hidden="true"
                      >
                        ✓
                      </span>{" "}
                      Minecraft 1.21.1
                    </li>
                    <li className="flex items-center gap-2 text-sm sm:text-base">
                      <span
                        className="text-[var(--isle-crystal)] text-xs sm:text-sm"
                        aria-hidden="true"
                      >
                        ✓
                      </span>{" "}
                      Fabric Loader
                    </li>
                    <li className="flex items-center gap-2 text-sm sm:text-base">
                      <span
                        className="text-[var(--isle-crystal)] text-xs sm:text-sm"
                        aria-hidden="true"
                      >
                        ✓
                      </span>{" "}
                      Java 21+
                    </li>
                    <li className="flex items-center gap-2 text-sm sm:text-base">
                      <span
                        className="text-[var(--isle-fire)] text-xs sm:text-sm"
                        aria-hidden="true"
                      >
                        ⚡
                      </span>{" "}
                      4GB+ RAM (recommended)
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-base sm:text-lg font-semibold text-white mb-3 sm:mb-4 flex items-center gap-2">
                    <span
                      className="text-[var(--isle-desert)]"
                      aria-hidden="true"
                    >
                      ⚙️
                    </span>{" "}
                    Development Build
                  </h4>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start gap-2 text-sm sm:text-base">
                      <span
                        className="text-gray-500 text-xs sm:text-sm mt-0.5 flex-shrink-0"
                        aria-hidden="true"
                      >
                        ○
                      </span>
                      <span>Clone repository</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm sm:text-base">
                      <span
                        className="text-gray-500 text-xs sm:text-sm mt-0.5 flex-shrink-0"
                        aria-hidden="true"
                      >
                        ○
                      </span>
                      <span>
                        Run{" "}
                        <code className="bg-slate-800 px-1 rounded text-xs sm:text-sm">
                          ./gradlew build
                        </code>
                      </span>
                    </li>
                    <li className="flex items-start gap-2 text-sm sm:text-base">
                      <span
                        className="text-gray-500 text-xs sm:text-sm mt-0.5 flex-shrink-0"
                        aria-hidden="true"
                      >
                        ○
                      </span>
                      <span>
                        Test with{" "}
                        <code className="bg-slate-800 px-1 rounded text-xs sm:text-sm">
                          ./gradlew runClient
                        </code>
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.section>

            {/* Call to Action */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 1.2, ease: "easeOut" }}
              className="text-center"
            >
              <p className="text-gray-400 mb-4 sm:mb-6 text-base sm:text-lg">
                Ready to join the development journey?
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center max-w-md sm:max-w-none mx-auto">
                <Link
                  href="https://github.com/no-felix/stormbound-isles"
                  className="px-6 sm:px-8 py-3 sm:py-4 bg-[var(--isle-crystal)] text-black font-bold rounded-lg hover:bg-opacity-90 focus:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-[var(--isle-crystal)] focus:ring-offset-2 focus:ring-offset-slate-900 transition-all transform hover:-translate-y-1 focus:-translate-y-1 text-center text-sm sm:text-base"
                >
                  ⭐ Star on GitHub
                </Link>
                <Link
                  href="/"
                  className="px-6 sm:px-8 py-3 sm:py-4 bg-transparent border-2 border-[var(--isle-fire)] text-white font-bold rounded-lg hover:bg-[var(--isle-fire)] hover:bg-opacity-10 focus:bg-[var(--isle-fire)] focus:bg-opacity-10 focus:outline-none focus:ring-2 focus:ring-[var(--isle-fire)] focus:ring-offset-2 focus:ring-offset-slate-900 transition-all transform hover:-translate-y-1 focus:-translate-y-1 text-center text-sm sm:text-base"
                >
                  🏝️ Explore Islands
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
