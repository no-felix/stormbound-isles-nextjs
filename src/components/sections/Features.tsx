import React, { useState, useEffect, useMemo } from 'react';
import FadeIn from '../animations/FadeIn';
import Reveal from '../animations/Reveal';
import { motion, useAnimation } from 'framer-motion';

const features = [
	{
		title: 'Elemental Realms',
		description:
			'Each a world of secrets and peril.',
		icon: '🏝️',
		color: 'from-orange-500 via-pink-500 to-blue-400',
		bgColor: 'bg-gradient-to-br from-orange-500/10 via-pink-500/10 to-blue-400/10'
	},
	{
		title: 'Forces Unleashed',
		description:
			'Unpredictable events shape every journey.',
		icon: '🌪️',
		color: 'from-blue-400 via-cyan-400 to-purple-500',
		bgColor: 'bg-gradient-to-br from-blue-400/10 via-cyan-400/10 to-purple-500/10'
	},
	{
		title: 'Elemental Gifts',
		description:
			'Every team, a unique power. Every island, a new fate.',
		icon: '✨',
		color: 'from-yellow-400 via-amber-400 to-orange-500',
		bgColor: 'bg-gradient-to-br from-yellow-400/10 via-amber-400/10 to-orange-500/10'
	},
	{
		title: 'The Reckoning',
		description:
			'Creativity and survival are rewarded in the end.',
		icon: '🏆',
		color: 'from-pink-400 via-purple-400 to-indigo-400',
		bgColor: 'bg-gradient-to-br from-pink-400/10 via-purple-400/10 to-indigo-400/10'
	},
	{
		title: 'The Clash',
		description:
			'When the calm breaks, only the bold endure.',
		icon: '⚔️',
		color: 'from-red-500 via-orange-500 to-yellow-400',
		bgColor: 'bg-gradient-to-br from-red-500/10 via-orange-500/10 to-yellow-400/10'
	},
	{
		title: 'Boundless Modding',
		description:
			'Crafted for discovery, compatible with legends.',
		icon: '🛠️',
		color: 'from-green-400 via-cyan-400 to-blue-400',
		bgColor: 'bg-gradient-to-br from-green-400/10 via-cyan-400/10 to-blue-400/10'
	},
];

export default function Features() {
	const [activeFeature, setActiveFeature] = useState<number | null>(null);
	const backgroundControls = useAnimation();
	
	// Animate background elements at random intervals
	useEffect(() => {
		const interval = setInterval(() => {
			backgroundControls.start({
				filter: [
					'hue-rotate(0deg)',
					'hue-rotate(45deg)',
					'hue-rotate(90deg)',
					'hue-rotate(180deg)',
					'hue-rotate(270deg)',
					'hue-rotate(360deg)'
				],
				transition: {
					duration: 20,
					ease: "linear",
					repeat: Infinity,
				}
			});
		}, 500);
		
		return () => clearInterval(interval);
	}, [backgroundControls]);
	// Create stars for the starfield
	const stars = useMemo(() => {
		return Array.from({ length: 75 }).map((_, i) => ({
			id: `star-${i}`,
			size: Math.random() * 2 + 1,
			x: Math.random() * 100,
			y: Math.random() * 100,
			opacity: Math.random() * 0.5 + 0.3,
			delay: Math.random() * 5,
			duration: Math.random() * 3 + 2
		}));
	}, []);
	return (
		<section id="features" className="section-full relative overflow-hidden py-24">			{/* Main background gradient */}
			<div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-gray-900 to-black z-0"></div>
			
			{/* Starfield background */}
			<div className="absolute inset-0 z-1">
				{stars.map((star) => (
					<motion.div
						key={star.id}
						className="absolute rounded-full bg-white"
						style={{
							width: `${star.size}px`,
							height: `${star.size}px`,
							left: `${star.x}%`,
							top: `${star.y}%`,
							opacity: star.opacity
						}}
						animate={{
							opacity: [star.opacity, star.opacity * 1.5, star.opacity],
							scale: [1, 1.2, 1]
						}}
						transition={{
							duration: star.duration,
							delay: star.delay,
							repeat: Infinity,
							ease: "easeInOut"
						}}
					/>
				))}
			</div>
			
			{/* Elemental flow background */}
			<div className="absolute inset-0 overflow-hidden opacity-100 z-0">
				{/* Animated elemental waves */}				<motion.div 
					className="absolute inset-0 z-0"
					animate={backgroundControls}
				>
					{/* Fire element (top left) */}
					<div className="absolute -top-[20%] -left-[5%] w-[50%] h-[60%] bg-gradient-to-br from-red-500/40 via-orange-500/30 to-transparent rounded-full blur-3xl"></div>
					
					{/* Water element (top right) */}
					<div className="absolute -top-[15%] -right-[5%] w-[50%] h-[60%] bg-gradient-to-bl from-blue-500/40 via-cyan-500/30 to-transparent rounded-full blur-3xl"></div>
					
					{/* Earth element (bottom left) */}
					<div className="absolute -bottom-[15%] -left-[5%] w-[50%] h-[60%] bg-gradient-to-tr from-green-500/40 via-emerald-500/30 to-transparent rounded-full blur-3xl"></div>
					
					{/* Air element (bottom right) */}
					<div className="absolute -bottom-[20%] -right-[5%] w-[50%] h-[60%] bg-gradient-to-tl from-purple-500/40 via-indigo-500/30 to-transparent rounded-full blur-3xl"></div>
					
					{/* Center energy core (aether) */}
					<div className="absolute top-[35%] left-[35%] w-[30%] h-[30%] bg-gradient-to-r from-amber-400/50 via-pink-500/40 to-transparent rounded-full blur-3xl"></div>
					
					{/* Additional light beams - positioned to connect with orbs */}
					<div className="absolute top-0 left-[25%] w-[2px] h-[30%] bg-gradient-to-b from-orange-500/70 to-transparent blur-sm"></div>
					<div className="absolute top-0 right-[35%] w-[2px] h-[40%] bg-gradient-to-b from-blue-500/70 to-transparent blur-sm"></div>
					<div className="absolute bottom-0 left-[35%] w-[2px] h-[35%] bg-gradient-to-t from-green-500/70 to-transparent blur-sm"></div>
					<div className="absolute bottom-0 right-[25%] w-[2px] h-[45%] bg-gradient-to-t from-purple-500/70 to-transparent blur-sm"></div>
					
					{/* Small accent orbs - positioned at connection points */}
					<div className="absolute top-[20%] left-[25%] w-[15px] h-[15px] bg-amber-400/70 rounded-full blur-sm"></div>
					<div className="absolute top-[30%] right-[35%] w-[10px] h-[10px] bg-cyan-400/70 rounded-full blur-sm"></div>
					<div className="absolute bottom-[25%] left-[35%] w-[12px] h-[12px] bg-emerald-400/70 rounded-full blur-sm"></div>
					<div className="absolute bottom-[35%] right-[25%] w-[8px] h-[8px] bg-fuchsia-400/70 rounded-full blur-sm"></div>
				</motion.div>{/* Floating elemental runes/symbols */}
				<div className="absolute inset-0 z-10">					{[						{ id: "rune-fire", symbol: "⦿", x: "25%", y: "18%", size: "text-3xl", color: "text-red-500/70", animation: "floatSlow" },
						{ id: "rune-water", symbol: "◈", x: "75%", y: "22%", size: "text-4xl", color: "text-blue-500/70", animation: "floatMedium" },
						{ id: "rune-earth", symbol: "◯", x: "25%", y: "80%", size: "text-4xl", color: "text-green-500/70", animation: "floatFast" },
						{ id: "rune-air", symbol: "⟁", x: "75%", y: "78%", size: "text-3xl", color: "text-purple-500/70", animation: "floatSlow" },
						{ id: "rune-aether", symbol: "⁂", x: "50%", y: "50%", size: "text-4xl", color: "text-amber-500/70", animation: "floatMedium" },
						{ id: "rune-flame", symbol: "⦵", x: "35%", y: "35%", size: "text-3xl", color: "text-orange-500/70", animation: "floatFast" },
						{ id: "rune-ice", symbol: "⧗", x: "60%", y: "40%", size: "text-3xl", color: "text-teal-500/70", animation: "floatSlow" },
						{ id: "rune-nature", symbol: "◬", x: "40%", y: "65%", size: "text-3xl", color: "text-emerald-500/70", animation: "floatMedium" },
						{ id: "rune-storm", symbol: "⧊", x: "65%", y: "60%", size: "text-3xl", color: "text-indigo-500/70", animation: "floatFast" },
						{ id: "rune-arcane", symbol: "⚝", x: "50%", y: "30%", size: "text-3xl", color: "text-pink-500/70", animation: "floatMedium" },
					].map((rune) => {
						// Extract animation values based on type
						let yAnimation;
						if (rune.animation === "floatSlow") {
							yAnimation = [0, -15, 0];
						} else if (rune.animation === "floatMedium") {
							yAnimation = [0, -10, 0];
						} else {
							yAnimation = [0, -7, 0];
						}
						
						let rotateValue;
						if (rune.animation === "floatSlow") {
							rotateValue = 10;
						} else if (rune.animation === "floatMedium") {
							rotateValue = -5;
						} else {
							rotateValue = 15;
						}
						const rotateAnimation = [0, rotateValue, 0];
						
						let duration;
						if (rune.animation === "floatSlow") {
							duration = 8;
						} else if (rune.animation === "floatMedium") {
							duration = 6;
						} else {							duration = 4;
						}
							
						return (
							<motion.div
								key={rune.id}
								className={`absolute ${rune.size} ${rune.color} opacity-70 blur-[1px]`}
								style={{ left: rune.x, top: rune.y }}
								animate={{
									y: yAnimation,
									opacity: [0.4, 0.7, 0.4],
									scale: [1, 1.1, 1],
									rotate: rotateAnimation
								}}
								transition={{
									duration: duration,
									repeat: Infinity,
									ease: "easeInOut"
								}}
							>
								{rune.symbol}
							</motion.div>
						);
					})}
				</div>				{/* Subtle connection lines between elements */}
				<svg className="absolute inset-0 w-full h-full z-5 opacity-60" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080">
					<motion.path 
						d="M480,270 C680,350 880,200 1080,350 C1280,500 1480,350 1680,430" 
						stroke="url(#lineGradient1)" 
						strokeWidth="2" 
						fill="none"
						strokeDasharray="5,5"
						animate={{
							strokeDashoffset: [0, 100],
						}}
						transition={{
							duration: 20,
							repeat: Infinity,
							ease: "linear"
						}}
					/>
					<motion.path 
						d="M240,810 C440,710 640,860 840,710 C1040,560 1240,710 1440,630" 
						stroke="url(#lineGradient2)" 
						strokeWidth="2" 
						fill="none"
						strokeDasharray="5,5"
						animate={{
							strokeDashoffset: [0, -100],
						}}
						transition={{
							duration: 25,
							repeat: Infinity,
							ease: "linear"
						}}
					/>
					<motion.path 
						d="M240,500 C390,450 435,250 600,400 C765,550 900,650 1050,570 C1200,490 1350,530 1500,450" 
						stroke="url(#lineGradient3)" 
						strokeWidth="1.5" 
						fill="none"
						strokeDasharray="4,6"
						animate={{
							strokeDashoffset: [0, 150],
						}}
						transition={{
							duration: 30,
							repeat: Infinity,
							ease: "linear"
						}}
					/>
					<defs>
						<linearGradient id="lineGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
							<stop offset="0%" stopColor="rgba(239, 68, 68, 0.6)" />
							<stop offset="50%" stopColor="rgba(16, 185, 129, 0.6)" />
							<stop offset="100%" stopColor="rgba(59, 130, 246, 0.6)" />
						</linearGradient>
						<linearGradient id="lineGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
							<stop offset="0%" stopColor="rgba(139, 92, 246, 0.6)" />
							<stop offset="50%" stopColor="rgba(236, 72, 153, 0.6)" />
							<stop offset="100%" stopColor="rgba(245, 158, 11, 0.6)" />
						</linearGradient>
						<linearGradient id="lineGradient3" x1="0%" y1="0%" x2="100%" y2="0%">
							<stop offset="0%" stopColor="rgba(16, 185, 129, 0.6)" />
							<stop offset="50%" stopColor="rgba(245, 158, 11, 0.6)" />
							<stop offset="100%" stopColor="rgba(236, 72, 153, 0.6)" />
						</linearGradient>
					</defs>
				</svg>
			</div>

			{/* Content container */}
			<div className="container mx-auto px-4 relative z-10">
				{/* Section heading with animated underline */}
				<div className="text-center mb-16">
					<Reveal>
						<h2 className="text-5xl md:text-6xl font-bold text-white tracking-tight mb-4">
							Wonders
						</h2>
						<motion.div
							className="h-1 w-24 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full"
							initial={{ width: 0, opacity: 0 }}
							whileInView={{ width: 96, opacity: 1 }}
							transition={{ duration: 0.8, delay: 0.2 }}
							viewport={{ once: true }}
						/>
					</Reveal>
					<Reveal>
						<p className="text-gray-300 mt-4 max-w-2xl mx-auto text-lg">
							Discover the extraordinary features that make Stormbound Isles a unique adventure
						</p>
					</Reveal>
				</div>
				
				{/* Features grid with hover effects */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
					{features.map((feature, idx) => (
						<FadeIn key={feature.title} delay={0.1 * idx}>
							<motion.div
								className={`rounded-2xl p-1 overflow-hidden ${feature.bgColor} backdrop-blur-md`}
								whileHover={{ 
									scale: 1.03,
									boxShadow: `0 0 20px 2px rgba(${idx % 2 ? '138, 58, 185' : '24, 144, 255'}, 0.3)`
								}}
								transition={{ duration: 0.3 }}
								onHoverStart={() => setActiveFeature(idx)}
								onHoverEnd={() => setActiveFeature(null)}
							>
								<div className="bg-black/40 backdrop-blur-sm rounded-xl p-8 h-full flex flex-col relative z-10 border border-white/10">
									{/* Float animation for the icon */}
									<motion.div
										className={`text-6xl mb-6 bg-gradient-to-r ${feature.color} bg-clip-text text-transparent`}
										animate={{ 
											y: activeFeature === idx ? [0, -8, 0] : 0
										}}
										transition={{ 
											duration: 2,
											repeat: activeFeature === idx ? Infinity : 0,
											ease: "easeInOut"
										}}
									>
										{feature.icon}
									</motion.div>
									
									{/* Title with gradient text */}
									<h3 className={`text-2xl font-bold mb-3 bg-gradient-to-r ${feature.color} bg-clip-text text-transparent`}>
										{feature.title}
									</h3>
									
									{/* Description */}
									<p className="text-base text-gray-300 flex-grow">
										{feature.description}
									</p>
									
									{/* Animated learn more button */}
									<motion.div 
										className={`mt-6 flex items-center text-sm font-medium bg-gradient-to-r ${feature.color} bg-clip-text text-transparent`}
										whileHover={{ x: 5 }}
									>
										Discover more
										<svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
										</svg>
									</motion.div>
								</div>
							</motion.div>
						</FadeIn>
					))}
				</div>
				
				{/* Call to action */}
				<motion.div 
					className="mt-16 text-center"
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					viewport={{ once: true }}
				>
					<a href="#download" className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-black bg-gradient-to-r from-amber-400 via-orange-500 to-pink-500 hover:from-amber-500 hover:via-orange-600 hover:to-pink-600 transform transition duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
						Experience the Wonders
					</a>
				</motion.div>
			</div>
		</section>
	);
}
