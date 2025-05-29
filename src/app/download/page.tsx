// src/app/download/page.tsx
import { Metadata } from "next";
import Layout from "@/components/layout/Layout";

export const metadata: Metadata = {
  title: "Download - Stormbound Isles",
  description: "Download and install the Stormbound Isles Minecraft mod",
};

export default function DownloadPage() {
  return (
    <Layout>
      <main className="container mx-auto px-4 py-8 sm:py-16">
        <div className="max-w-4xl mx-auto">
          {/* Header Section */}
          <header className="text-center mb-8 sm:mb-12">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              Download Stormbound Isles
            </h1>
            <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto">
              Gear up for adventure! Your construction site awaits.
            </p>
          </header>

          {/* Construction Notice */}
          <section
            className="relative bg-gradient-to-br from-amber-500/10 to-orange-600/10 rounded-xl p-6 sm:p-8 backdrop-blur-sm border-2 border-amber-500/30 mb-8 sm:mb-12 overflow-hidden"
            aria-labelledby="construction-notice"
          >
            {/* Construction stripes background */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-500/5 to-transparent transform -skew-y-1"></div>
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-amber-500 via-orange-500 to-amber-500"></div>

            <div className="relative z-10">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
                <div className="flex items-center gap-2 px-4 py-2 bg-amber-500/20 border border-amber-500/40 rounded-full text-amber-300 text-sm sm:text-base font-medium">
                  <span className="text-lg">🚧</span>{" "}
                  Under Construction{" "}
                  <span className="text-lg">🚧</span>
                </div>
              </div>

              <div className="text-center">
                <h2
                  id="construction-notice"
                  className="text-xl sm:text-2xl font-bold text-amber-200 mb-3"
                >
                  Building Something Amazing
                </h2>
                <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
                  Our construction crew is working around the clock!
                </p>
                <p className="text-slate-400 text-sm sm:text-base leading-relaxed italic">
                  Pre-release builds will be ready for download soon.
                </p>
              </div>
            </div>
          </section>

          {/* Main Content Grid */}
          <div className="grid gap-6 sm:gap-8 lg:grid-cols-2">
            {/* System Requirements - Toolbox Theme */}
            <section
              className="group bg-gradient-to-br from-slate-800/60 to-slate-900/60 rounded-xl p-6 sm:p-8 backdrop-blur-sm border border-slate-600/50 hover:border-slate-500/70 transition-all duration-300"
              aria-labelledby="system-requirements"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-blue-500/20 rounded-lg border border-blue-500/30">
                  <span className="text-2xl">🧰</span>
                </div>
                <h3
                  id="system-requirements"
                  className="text-xl sm:text-2xl font-bold text-white"
                >
                  Required Tools
                </h3>
              </div>

              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-slate-300 p-3 bg-slate-700/30 rounded-lg hover:bg-slate-700/50 transition-colors">
                  <span className="text-green-400 font-bold">✓</span>
                  <span className="font-medium">Minecraft 1.21</span>
                </li>
                <li className="flex items-center gap-3 text-slate-300 p-3 bg-slate-700/30 rounded-lg hover:bg-slate-700/50 transition-colors">
                  <span className="text-green-400 font-bold">✓</span>
                  <span className="font-medium">Fabric Loader</span>
                </li>
                <li className="flex items-center gap-3 text-slate-300 p-3 bg-slate-700/30 rounded-lg hover:bg-slate-700/50 transition-colors">
                  <span className="text-amber-400 font-bold">⚡</span>
                  <span className="font-medium">4GB+ RAM (recommended)</span>
                </li>
              </ul>
            </section>

            {/* Coming Soon - Blueprint Theme */}
            <section
              className="group bg-gradient-to-br from-slate-800/60 to-slate-900/60 rounded-xl p-6 sm:p-8 backdrop-blur-sm border border-slate-600/50 hover:border-slate-500/70 transition-all duration-300"
              aria-labelledby="download-sources"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-cyan-500/20 rounded-lg border border-cyan-500/30">
                  <span className="text-2xl">📋</span>
                </div>
                <h3
                  id="download-sources"
                  className="text-xl sm:text-2xl font-bold text-white"
                >
                  Blueprint Ready
                </h3>
              </div>

              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-slate-300 p-3 bg-slate-700/30 rounded-lg relative overflow-hidden">
                  <span className="text-slate-500 text-lg">📦</span>
                  <span className="font-medium">CurseForge Release</span>
                  <span className="ml-auto px-2 py-1 bg-amber-500/20 text-amber-300 text-xs rounded-full">
                    Soon
                  </span>
                </li>
                <li className="flex items-center gap-3 text-slate-300 p-3 bg-slate-700/30 rounded-lg relative overflow-hidden">
                  <span className="text-slate-500 text-lg">🚀</span>
                  <span className="font-medium">Modrinth Release</span>
                  <span className="ml-auto px-2 py-1 bg-amber-500/20 text-amber-300 text-xs rounded-full">
                    Soon
                  </span>
                </li>
                <li className="flex items-center gap-3 text-slate-300 p-3 bg-slate-700/30 rounded-lg relative overflow-hidden">
                  <span className="text-slate-500 text-lg">⚙️</span>
                  <span className="font-medium">GitHub Releases</span>
                  <span className="ml-auto px-2 py-1 bg-amber-500/20 text-amber-300 text-xs rounded-full">
                    Soon
                  </span>
                </li>
              </ul>
            </section>
          </div>

          {/* Progress Bar Section */}
          <section
            className="mt-8 sm:mt-12 bg-slate-800/40 rounded-xl p-6 sm:p-8 border border-slate-700/50"
            aria-labelledby="construction-progress"
          >
            <h3
              id="construction-progress"
              className="text-lg sm:text-xl font-bold text-white mb-4 text-center"
            >
              Construction Progress
            </h3>
            <div className="relative">
              <progress
                className="w-full h-4 bg-slate-700 rounded-full overflow-hidden [&::-webkit-progress-bar]:bg-slate-700 [&::-webkit-progress-bar]:rounded-full [&::-webkit-progress-value]:bg-gradient-to-r [&::-webkit-progress-value]:from-amber-500 [&::-webkit-progress-value]:to-orange-500 [&::-webkit-progress-value]:rounded-full [&::-moz-progress-bar]:bg-gradient-to-r [&::-moz-progress-bar]:from-amber-500 [&::-moz-progress-bar]:to-orange-500 [&::-moz-progress-bar]:rounded-full"
                value={25}
                max={100}
                aria-label="Construction progress: 25% complete"
              />
              <div className="flex justify-between mt-2 text-sm text-slate-400">
                <span>Foundation</span>
                <span className="font-medium text-amber-400">25% Complete</span>
                <span>Launch</span>
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <div className="text-center mt-8 sm:mt-12">
            <p className="text-slate-400 mb-4">
              Want to be notified when it&apos;s ready?
            </p>
            <a
              href="/signup"
              className="inline-block px-6 py-3 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2 focus:ring-offset-slate-900"
              aria-label="Subscribe for download notifications"
            >
              🔔 Notify Me
            </a>
          </div>
        </div>
      </main>
    </Layout>
  );
}
