import React from 'react';
import Link from 'next/link';
import FadeIn from '../animations/FadeIn';
import Reveal from '../animations/Reveal';

const installSteps = [
	{
		number: '01',
		title: 'Install Fabric',
		description: 'Download and install Fabric Loader for Minecraft 1.21.1',
		link: 'https://fabricmc.net/use/installer/',
		color: 'from-orange-500 to-red-500',
		icon: '📥',
	},
	{
		number: '02',
		title: 'Download the Mod',
		description: 'Get the latest version of Stormbound Isles from GitHub',
		link: 'https://github.com/no-felix/stormbound-isles/releases',
		color: 'from-blue-400 to-cyan-400',
		icon: '💾',
	},
	{
		number: '03',
		title: 'Place in Mods Folder',
		description: 'Move the downloaded JAR file to your Minecraft mods folder',
		color: 'from-yellow-400 to-amber-400',
		icon: '📁',
	},
	{
		number: '04',
		title: 'Start Minecraft',
		description: 'Launch Minecraft and enjoy support for other mods like Create, Iris, and more!',
		color: 'from-purple-400 to-pink-400',
		icon: '🎮',
	},
];

export default function Download() {
	return (
		<section id="download" className="section-full relative overflow-hidden">
			{/* Dark gradient background */}
			<div className="absolute inset-0 bg-gradient-to-b from-[#1a1e2d] to-[#101424] z-0"></div>

			{/* Grid background across entire section */}
			<div className="grid-background"></div>

			<div className="container mx-auto px-4 relative z-10 h-full flex flex-col justify-center py-16">
				<div className="text-center mb-16">
					<FadeIn>
						<h2 className="text-4xl md:text-5xl font-bold text-white section-headline">
							Download & Install
						</h2>
					</FadeIn>
					<FadeIn delay={0.2}>
						<p className="text-lg sm:text-xl text-gray-200 max-w-3xl mx-auto">
							Get started with Stormbound Isles, built to support other mods like
							Create, Iris, and more, in just a few simple steps
						</p>
					</FadeIn>
				</div>

				<div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
					{/* Left side: Installation steps */}
					<div className="lg:col-span-3">
						<div className="relative">
							{/* Vertical timeline line */}
							<div className="absolute left-6 top-10 bottom-10 w-px bg-white/20 z-0 hidden md:block"></div>

							{/* Installation steps */}
							<div className="space-y-10 relative z-10">
								{installSteps.map((step, index) => (
									<FadeIn
										key={step.number}
										direction="right"
										delay={0.1 * index}
									>
										<div className="flex gap-6">
											<div className="flex-shrink-0">
												<div
													className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r shadow-lg text-white font-mono text-lg font-bold relative z-10 card-glass"
													style={{
														background: `linear-gradient(to right, var(--isle-${
															index === 0
																? 'fire'
																: index === 1
																? 'ice'
																: index === 2
																? 'desert'
																: index === 3
																? 'mushroom'
																: 'crystal'
														})80, transparent)`,
													}}
												>
													{step.number}
												</div>
											</div>
											<div>
												<div className="flex items-center gap-3 mb-2">
													<h3 className="text-xl font-bold text-white">
														{step.title}
													</h3>
													<span className="text-2xl">{step.icon}</span>
												</div>
												<p className="text-gray-300 mb-2">
													{step.description}
												</p>
												{step.link && (
													<Link
														href={step.link}
														target="_blank"
														rel="noopener noreferrer"
														className="text-blue-400 hover:text-blue-300 inline-flex items-center"
													>
														Visit Website
														<svg
															xmlns="http://www.w3.org/2000/svg"
															className="h-4 w-4 ml-1"
															fill="none"
															viewBox="0 0 24 24"
															stroke="currentColor"
														>
															<path
																strokeLinecap="round"
																strokeLinejoin="round"
																strokeWidth={2}
																d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
															/>
														</svg>
													</Link>
												)}
											</div>
										</div>
									</FadeIn>
								))}
							</div>
						</div>
					</div>

					{/* Right side: Download card */}
					<div className="lg:col-span-2">
						<Reveal>
							<div className="card-glass p-8">
								<div className="text-center mb-8">
									<div className="inline-block p-3 rounded-full mb-4 text-white text-3xl">
										⬇️
									</div>
									<h3 className="text-2xl font-bold text-white mb-2">
										Direct Download
									</h3>
									<p className="text-gray-300 mb-6">
										Get the latest version of Stormbound Isles
									</p>
								</div>

								<div className="space-y-4">
									<a
										href="https://github.com/no-felix/stormbound-isles/releases/latest"
										target="_blank"
										rel="noopener noreferrer"
										className="flex items-center justify-center w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
									>
										Download Latest Release
									</a>

									<a
										href="https://github.com/no-felix/stormbound-isles"
										target="_blank"
										rel="noopener noreferrer"
										className="flex items-center justify-center w-full py-3 px-4 bg-white/10 hover:bg-white/20 text-white font-medium rounded-lg transition-colors"
									>
										View Source Code
									</a>
								</div>

								<div className="mt-8 pt-6 border-t border-white/10">
									<div className="flex items-center justify-between">
										<div>
											<span className="text-sm text-gray-400">
												Latest Version
											</span>
											<p className="font-medium text-white">v1.2.0</p>
										</div>
										<div>
											<span className="text-sm text-gray-400">
												Minecraft Version
											</span>
											<p className="font-medium text-white">1.21.1</p>
										</div>
										<div>
											<span className="text-sm text-gray-400">
												Last Updated
											</span>
											<p className="font-medium text-white">
												May 15, 2025
											</p>
										</div>
									</div>
								</div>
							</div>
						</Reveal>
					</div>
				</div>
			</div>
		</section>
	);
}
