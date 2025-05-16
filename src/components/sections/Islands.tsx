import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import FadeIn from '../animations/FadeIn';

const islands = [
	{
		name: 'Volcano Island',
		description:
			'A volcanic land of lava rivers, obsidian, and natural forges. Team bonus: Fire resistance.',
		color: 'from-orange-500 via-red-600 to-yellow-400',
		glow: 'rgba(255, 90, 54, 0.2)',
		imagePath: 'https://placehold.co/320x384?text=Volcano+Island', // originally: /fire-island.jpg
		icon: '🌋',
	},
	{
		name: 'Ice/Snow Island',
		description:
			'Frozen glaciers, icy caves, and hidden treasures. Team bonus: Slower hunger and freeze immunity.',
		color: 'from-blue-300 via-blue-500 to-cyan-400',
		glow: 'rgba(90, 209, 255, 0.2)',
		imagePath: 'https://placehold.co/320x384?text=Ice+Island', // originally: /ice-island.jpg
		icon: '❄️',
	},
	{
		name: 'Desert Island',
		description:
			'Endless dunes, rare oases, and ancient ruins. Team bonus: Water efficiency and heat resistance.',
		color: 'from-yellow-400 via-amber-500 to-orange-300',
		glow: 'rgba(255, 225, 86, 0.2)',
		imagePath: 'https://placehold.co/320x384?text=Desert+Island', // originally: /desert-island.jpg
		icon: '🏜️',
	},
	{
		name: 'Mushroom Island',
		description:
			'Giant mushrooms, mystical plants, and secret caves. Team bonus: Regeneration and unique foods.',
		color: 'from-purple-400 via-pink-400 to-fuchsia-400',
		glow: 'rgba(179, 108, 255, 0.2)',
		imagePath: 'https://placehold.co/320x384?text=Mushroom+Island', // originally: /mushroom-island.jpg
		icon: '🍄',
	},
	{
		name: 'Crystal/Magic Island',
		description:
			'Glowing crystals, magical energies, and rare artifacts. Team bonus: Magic buffs and faster XP.',
		color: 'from-indigo-400 via-cyan-400 to-teal-300',
		glow: 'rgba(90, 255, 198, 0.2)',
		imagePath: 'https://placehold.co/320x384?text=Crystal+Island', // originally: /crystal-island.jpg
		icon: '💎',
	},
];

export default function Islands() {
	// Generate random particle data only on client after mount to avoid hydration errors
	const [particles, setParticles] = useState<Array<{
		top: string;
		left: string;
		width: string;
		height: string;
		background: string;
	}>>([]);

	useEffect(() => {
		const isleTypes = [
			'fire',
			'ice',
			'desert',
			'mushroom',
			'crystal',
		];
		const generated = Array.from({ length: 15 }, () => {
			const type = isleTypes[Math.floor(Math.random() * isleTypes.length)];
			return {
				top: `${Math.random() * 100}%`,
				left: `${Math.random() * 100}%`,
				width: `${Math.random() * 80 + 20}px`,
				height: `${Math.random() * 80 + 20}px`,
				background: `var(--isle-${type})`,
			};
		});
		setParticles(generated);
	}, []);

	return (
		<section
			id="islands"
			className="section-full relative overflow-hidden"
		>
			{/* Island-themed background */}
			<div className="absolute inset-0 z-0">
				<div className="absolute inset-0 bg-gradient-to-b from-[#1a1e2d] to-[#101424]"></div>
				{/* Decoration particles */}
				{particles.map((particle, i) => (
					<motion.div
						key={i}
						className="absolute rounded-full opacity-20"
						style={{
							top: particle.top,
							left: particle.left,
							width: particle.width,
							height: particle.height,
							background: particle.background,
							filter: 'blur(5px)',
						}}
						animate={{
							y: [0, Math.random() * 30 - 15],
							opacity: [0.1, 0.3, 0.1],
						}}
						transition={{
							repeat: Infinity,
							repeatType: 'reverse',
							duration: Math.random() * 5 + 5,
						}}
					/>
				))}
			</div>

			<div className="container mx-auto px-4 relative z-10 h-full flex flex-col justify-center py-16">
				<div className="text-center mb-16">
					<FadeIn>
						<h2 className="text-4xl md:text-5xl font-bold text-white section-headline">
							The Five Themed Islands
						</h2>
					</FadeIn>
					<FadeIn delay={0.2}>
						<p className="text-xl text-gray-200 max-w-3xl mx-auto">
							Explore five unique islands, each with their own elemental
							theme, challenges, and resources.
						</p>
					</FadeIn>
				</div>

				{/* Custom grid: 3 top, 2 bottom, centered */}
				<div className="flex flex-col items-center gap-10">
					<div className="flex flex-wrap justify-center gap-8 w-full">
						{islands.slice(0, 3).map((island, idx) => (
							<IslandCard key={island.name} island={island} index={idx} />
						))}
					</div>
					<div className="flex flex-wrap justify-center gap-8 w-full">
						{islands.slice(3).map((island, idx) => (
							<IslandCard key={island.name} island={island} index={idx + 3} />
						))}
					</div>
				</div>
			</div>
		</section>
	);
}

function IslandCard({ island, index }: { island: { name: string; description: string; color: string; glow: string; imagePath: string; icon: string }; index: number }) {
	return (
		<motion.div
			className="relative overflow-hidden w-72 sm:w-80 h-96 rounded-2xl flex flex-col justify-end group border border-white/10 transition-transform duration-150 hover:scale-105"
			initial={{ opacity: 0, y: 40 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, amount: 0.2 }}
			transition={{ duration: 0.5, delay: 0.1 * index }}
			style={{ boxShadow: `0 4px 12px -2px ${island.glow}` }}
		>
			{/* Island background image */}
			<div
				className="absolute inset-0 bg-cover bg-center z-0 transition-transform duration-300 ease-out group-hover:scale-105 group-hover:rotate-1"
				style={{ backgroundImage: `url(${island.imagePath})` }}
			/>

			{/* Gradient overlay */}
			<div
				className={`absolute inset-0 bg-gradient-to-t ${island.color} opacity-60 z-10`}
			></div>

			{/* Content */}
			<div className="relative z-20 p-6">
				<div className="flex items-center gap-3 mb-2">
					<span className="text-2xl">{island.icon}</span>
					<h3 className="text-2xl font-bold text-white">
						{island.name}
					</h3>
				</div>
				<p className="text-white/90 mb-4 min-h-[80px]">
					{island.description}
				</p>
				<motion.button
					className="py-2 px-4 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white font-semibold hover:bg-white/20 transition-colors"
					whileHover={{ scale: 1.08 }}
					whileTap={{ scale: 0.96 }}
				>
					Explore Island
				</motion.button>
			</div>
		</motion.div>
	);
}
