"use client";

import React from "react";
import Link from "next/link";
import Layout from "@/components/layout/Layout";
import FloatingParticles from "@/components/FloatingParticles";

export default function DownloadPlaceholder(): React.ReactElement {
  const GITHUB_PROFILE = {
    login: "no-felix",
    name: "Felix",
    avatar_url: "https://avatars.githubusercontent.com/u/69461004?v=4",
    html_url: "https://github.com/no-felix",
    public_repos: 5,
    followers: 4,
    location: "Germany",
    created_at: "2020-08-10T10:49:07Z",
  };

  return (
    <Layout>
      <div className="fixed inset-0 pointer-events-none" aria-hidden="true">
        <FloatingParticles
          count={18}
          connectLines={false}
          colors={["var(--isle-ice)", "var(--isle-crystal)"]}
          opacityRange={{ min: 0.06, max: 0.18 }}
          speedRange={{ min: 0.02, max: 0.08 }}
        />
      </div>

      <main
        className="relative py-24 px-4 sm:py-32 md:py-40 overflow-x-hidden"
        role="main"
      >
        <div className="container mx-auto relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 gradient-text">
              Downloads — Coming Soon
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 mb-8">
              This page will host the official mod download and a small
              installer for players and server operators. For now the mod
              artifacts are being prepared — check back soon or explore the
              islands.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              <div className="p-6 bg-slate-800/30 rounded-xl border border-slate-700">
                <div className="text-3xl mb-2">⬇️</div>
                <div className="font-semibold text-white">Mod Download</div>
                <div className="text-sm text-gray-400">
                  Official mod jar & installer (coming soon)
                </div>
              </div>
              <div className="p-6 bg-slate-800/30 rounded-xl border border-slate-700">
                <div className="text-3xl mb-2">🧩</div>
                <div className="font-semibold text-white">Mod Tools</div>
                <div className="text-sm text-gray-400">
                  Utilities for servers and pack authors
                </div>
              </div>
              <div className="p-6 bg-slate-800/30 rounded-xl border border-slate-700">
                <div className="text-3xl mb-2">📚</div>
                <div className="font-semibold text-white">Modding Docs</div>
                <div className="text-sm text-gray-400">
                  Installation notes and basic modding guides
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/download"
                className="inline-block px-6 py-3 bg-[var(--isle-crystal)] text-black font-bold rounded-lg hover:opacity-90 transition"
              >
                Download Mod (soon)
              </Link>
              <Link
                href="/"
                className="inline-block px-6 py-3 border-2 border-[var(--isle-ice)] text-white rounded-lg hover:bg-white/5 transition"
              >
                Explore Islands
              </Link>
            </div>

            {/* GitHub profile promotion card */}
            <div className="mt-8 max-w-md mx-auto bg-slate-800/40 border border-slate-700 rounded-xl p-4 flex items-center gap-4">
              <img
                src={GITHUB_PROFILE.avatar_url}
                alt={`${GITHUB_PROFILE.name} avatar`}
                className="w-16 h-16 rounded-full object-cover border-2 border-[var(--isle-crystal)]"
              />
              <div className="text-left">
                <a
                  href={GITHUB_PROFILE.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-white block"
                >
                  {GITHUB_PROFILE.name} ({GITHUB_PROFILE.login})
                </a>
                <div className="text-sm text-gray-400">
                  Location: {GITHUB_PROFILE.location}
                </div>
                <div className="text-sm text-gray-400">
                  Repos: {GITHUB_PROFILE.public_repos} • Followers:{" "}
                  {GITHUB_PROFILE.followers}
                </div>
              </div>
            </div>

            <div className="mt-10 text-sm text-gray-500">
              Tip: This page will host the mod JAR and a small installer. If you
              run a server, you'll find a lightweight setup guide here when
              available.
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
