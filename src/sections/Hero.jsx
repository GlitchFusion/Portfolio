import { useState } from "react";
import { motion } from "framer-motion";
import Socials from "../components/Socials";
import DevWrapper from "../components/DevWrapper";

const Hero = ({ devmode, dev }) => {
	return (
		<motion.section
			id="hero"
			transition={{ duration: 0.6, ease: "easeInOut" }}
			className="relative min-h-screen flex items-center justify-center text-text-dark overflow-hidden px-6"
		>
			<div className="w-full max-w-4xl flex flex-col items-center gap-12 text-center">
				{/* ===== HERO CONTENT ===== */}
				<DevWrapper name="Hero.Content" dev={dev}>
					<motion.div
						initial={{ opacity: 0, y: 12 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, ease: "easeOut" }}
						className="space-y-6 flex flex-col items-center px-8 py-8"
					>
						<h1 className="font-title text-[2.8rem] sm:text-[3.4rem] leading-tight tracking-wide">
							Glitch<span className="text-accent">Fusion</span>
						</h1>

						<p className="font-hero text-text-muted text-sm sm:text-base tracking-wide">
							Coffee-fueled Developer · Quiet by nature
						</p>

						<p className="max-w-2xl text-text-muted text-sm sm:text-base leading-relaxed">
							Frontend developer and AI/ML enthusiast exploring intelligent,
							secure systems at the intersection of web and AI, loves music,
							focus, and curiosity.
						</p>

						<p className="inline-flex items-center px-6 py-3 rounded-full border border-border bg-bg-surface/60 backdrop-blur-md text-sm font-quotes text-text-muted tracking-wide">
							Write code. Stay curious. Improve daily.
						</p>

						<div className="flex items-center gap-6 pt-2">
							<Socials
								size={20}
								iconClass="text-text-muted hover:text-accent"
							/>
						</div>
					</motion.div>
				</DevWrapper>

				{/* ===== CTA SECTION ===== */}
				<DevWrapper name="Hero.CTA" dev={dev}>
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
						className="flex justify-center gap-6 py-4 px-2"
					>
						<a href="#projects">
							<button className="px-8 py-3 rounded-xl bg-gradient-to-r from-accent to-blue-500 text-white font-medium tracking-wide hover:scale-[1.02] active:scale-[0.98] transition-all duration-300">
								Explore Work
							</button>
						</a>

						<button
							className="px-8 py-3 rounded-xl border border-border bg-transparent text-text-muted font-medium tracking-wide hover:text-text-dark hover:border-accent/60 hover:bg-bg-surface/40 transition-all duration-300"
							onClick={() => devmode((prev) => !prev)}
						>
							{dev ? "Exit Dev Mode" : "Enter Dev Mode"}
						</button>
					</motion.div>
				</DevWrapper>
			</div>
		</motion.section>
	);
};

export default Hero;
