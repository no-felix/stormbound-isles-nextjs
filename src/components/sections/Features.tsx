import React from 'react';
import FadeIn from '../animations/FadeIn';
import Reveal from '../animations/Reveal';
import ParticleBackground from '@/components/animations/ParticleBackground';

const features = [
	{
		title: 'Elemental Realms',
		description:
			'Each a world of secrets and peril.',
		icon: '🏝️',
		color: 'from-orange-500 via-pink-500 to-blue-400',
	},
	{
		title: 'Forces Unleashed',
		description:
			'Unpredictable events shape every journey.',
		icon: '🌪️',
		color: 'from-blue-400 via-cyan-400 to-purple-500',
	},
	{
		title: 'Elemental Gifts',
		description:
			'Every team, a unique power. Every island, a new fate.',
		icon: '✨',
		color: 'from-yellow-400 via-amber-400 to-orange-500',
	},
	{
		title: 'The Reckoning',
		description:
			'Creativity and survival are rewarded in the end.',
		icon: '🏆',
		color: 'from-pink-400 via-purple-400 to-indigo-400',
	},
	{
		title: 'The Clash',
		description:
			'When the calm breaks, only the bold endure.',
		icon: '⚔️',
		color: 'from-red-500 via-orange-500 to-yellow-400',
	},
	{
		title: 'Boundless Modding',
		description:
			'Crafted for discovery, compatible with legends.',
		icon: '🛠️',
		color: 'from-green-400 via-cyan-400 to-blue-400',
	},
];

export default function Features() {
	return (
		<section id="features" className="section-full relative overflow-hidden">
			{/* Particles animated background */}
			<div className="absolute inset-0 z-0 pointer-events-none">				<ParticleBackground
					particleCount={300}
					colors={['#ffffff', '#ffffff']}
					minSize={2}
					maxSize={5}
					minOpacity={0.2}
					maxOpacity={0.7}
					speed={0.5}
					showConnections={true}
					connectionDistance={150}
					connectionColor={'#ffffff'}
					connectionOpacity={0.1}
					connectionWidth={0.5}
				/>
			</div>
			
			{/* Title is placed BEFORE the blur overlay in the DOM */}
			<div className="relative z-20 mb-12 text-center">
				<Reveal>
					<h2 className="text-4xl md:text-5xl font-bold text-white section-headline">
						Wonders
					</h2>
				</Reveal>
			</div>
			
			{/* Blur overlay */}
			<div className="absolute inset-0 z-10 pointer-events-none backdrop-blur-sm" style={{background: 'transparent'}} />
			
			<div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 z-10 relative">
				{features.map((feature, idx) => (
					<FadeIn key={feature.title} delay={0.1 * idx}>
						<div
							className={`rounded-xl p-8 bg-glass border border-glass-border shadow-lg flex flex-col items-center text-center h-full transition-transform duration-150 hover:scale-105`}
						>
							<div
								className={`text-5xl mb-4 bg-gradient-to-r ${feature.color} bg-clip-text text-transparent`}
							>
								{feature.icon}
							</div>
							<h3 className="text-2xl font-semibold mb-2">
								{feature.title}
							</h3>
							<p className="text-base text-foreground/80">
								{feature.description}
							</p>
						</div>
					</FadeIn>
				))}
			</div>
		</section>
	);
}
