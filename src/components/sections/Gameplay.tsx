import React from 'react';
import { motion } from 'framer-motion';
import FadeIn from '../animations/FadeIn';
import Reveal from '../animations/Reveal';

const gameplayFeatures = [
	{
		title: 'Team-Based Competition',
		description:
			'Form alliances, coordinate strategies, and work together to overcome challenges and defeat other teams.',
		icon: '🤝',
		color: 'from-[#5ad1ff] via-[#b36cff] to-[#ff5a36]',
	},
	{
		title: 'Random Catastrophes',
		description:
			'Face unpredictable events like meteor showers, tsunamis, or invasions that can change the game dynamic.',
		icon: '🌋',
		color: 'from-[#ff5a36] via-[#ffe156] to-[#5ad1ff]',
	},
	{
		title: 'Resource Management',
		description:
			'Gather and manage limited resources to build, craft, and develop your island.',
		icon: '📦',
		color: 'from-[#ffe156] via-[#5affc6] to-[#b36cff]',
	},
	{
		title: 'Island Defense',
		description:
			'Set up traps, build walls, and create defenses to protect your base from raids.',
		icon: '🛡️',
		color: 'from-[#b36cff] via-[#5affc6] to-[#5ad1ff]',
	},
];

export default function Gameplay() {
	return (
		<section id="gameplay" className="section-full relative overflow-hidden">
			{/* Dark gradient background */}
			<div className="absolute inset-0 bg-gradient-to-b from-[#101424] to-[#1a1e2d] z-0"></div>

			{/* Interactive background elements */}
			<div className="absolute inset-0 z-0">
				{/* Background circles */}
				<motion.div
					className="absolute top-10 left-1/4 w-24 h-24 rounded-full bg-blue-500/20 blur-xl"
					animate={{ y: [0, -30, 0], opacity: [0.3, 0.5, 0.3] }}
					transition={{
						duration: 3,
						repeat: Infinity,
						repeatType: 'reverse',
					}}
				/>
				<motion.div
					className="absolute top-1/2 left-1/3 w-32 h-32 rounded-full bg-purple-500/20 blur-xl"
					animate={{ y: [0, 40, 0], opacity: [0.2, 0.4, 0.2] }}
					transition={{
						duration: 4,
						repeat: Infinity,
						repeatType: 'reverse',
					}}
				/>
				<motion.div
					className="absolute bottom-20 right-1/4 w-28 h-28 rounded-full bg-red-500/20 blur-xl"
					animate={{ x: [0, 30, 0], opacity: [0.2, 0.4, 0.2] }}
					transition={{
						duration: 3.5,
						repeat: Infinity,
						repeatType: 'reverse',
					}}
				/>
			</div>

			<div className="container mx-auto px-4 relative z-10 h-full flex flex-col justify-center">
				<div className="flex flex-col md:flex-row gap-12 items-center">
					<div className="md:w-1/2">
						<FadeIn direction="left">
							<h2 className="text-4xl md:text-5xl font-bold text-white section-headline">
								Exciting Teamplay
							</h2>
						</FadeIn>

						<FadeIn direction="left" delay={0.2}>
							<p className="text-xl text-gray-300 mb-8">
								Stormbound Isles offers a unique approach to Minecraft
								gameplay, focusing on team-based competition, resource
								management, and strategic interactions.
							</p>
						</FadeIn>

						<div className="space-y-6">
							{gameplayFeatures.map((feature, index) => (
								<FadeIn
									key={feature.title}
									direction="left"
									delay={0.1 * (index + 3)}
								>
									<div className="flex items-start gap-4">
										<div className="text-3xl mt-1">{feature.icon}</div>
										<div>
											<h3 className="text-xl font-bold text-white mb-1">
												{feature.title}
											</h3>
											<p className="text-gray-400">
												{feature.description}
											</p>
										</div>
									</div>
								</FadeIn>
							))}
						</div>
					</div>

					<div className="md:w-1/2">
						<Reveal>
							<div className="relative rounded-xl overflow-hidden shadow-2xl">
								{/* TODO: Replace <img> with <Image> from 'next/image' for better optimization */}
								<img
									src="https://placehold.co/600x400?text=Gameplay+Image"
									alt="Stormbound Isles Gameplay (placeholder)"
									className="w-full h-auto"
								/>
								{/* Original: /gameplay.jpg */}
								<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

								<div className="absolute bottom-0 left-0 right-0 p-6">
									<motion.div
										initial={{ opacity: 0, y: 20 }}
										animate={{ opacity: 1, y: 0 }}
										transition={{ delay: 0.5, duration: 0.6 }}
									>
										<a
											href="https://www.youtube.com/watch?v=xvFZjo5PgG0"
											target="_blank"
											rel="noopener noreferrer"
											className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-medium transition-colors"
										>
											<svg
												xmlns="http://www.w3.org/2000/svg"
												className="h-5 w-5"
												viewBox="0 0 20 20"
												fill="currentColor"
											>
												<path
													fillRule="evenodd"
													d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
													clipRule="evenodd"
												/>
											</svg>
											Watch Gameplay Video
										</a>
									</motion.div>
								</div>
							</div>
						</Reveal>
					</div>
				</div>
			</div>
		</section>
	);
}
