import { useState } from "react";
import { motion } from "framer-motion";
import Socials from "../components/Socials";
import pfp from "../assets/images/pfp.jpg";

const bgVariants = {
	default: {
		background: "radial-gradient(circle at top, #000000, #000000)",
	},
	coffee: {
		background: "radial-gradient(circle at top, #1a120c, #050508)",
	},
	music: {
		background: "radial-gradient(circle at center, #0b1a1f, #050508)",
	},
	ai: {
		background: "radial-gradient(circle at center, #120b1f, #050508)",
	},
};
const Hero = ({ devmode, dev }) => {
	const [bg, setBg] = useState("default");

	return (
		<motion.section
			id="hero"
			animate={bg}
			variants={bgVariants}
			transition={{ duration: 0.6, ease: "easeInOut" }}
			className="relative min-h-screen text-text-dark"
		>
			{/* Centered Container */}
			<div
				className="
				absolute
				top-1/2 left-1/2
				-translate-x-1/2 -translate-y-1/2
				w-full px-6
				"
			>
				<div
					className="
						max-w-4xl mx-auto
						grid grid-cols-1 md:grid-cols-2
						gap-8
						items-center
					"
				>
					{/* LEFT — TEXT */}
					<motion.div
						initial={{ opacity: 0, y: 12 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, ease: "easeOut" }}
						className="space-y-5"
					>
						<h1 className="font-title text-[2.6rem] sm:text-[3.2rem] leading-tight tracking-wide">
							Glitch<span className="text-accent">Fusion</span>
						</h1>

						<p className="font-hero text-text-muted text-sm sm:text-base tracking-wide">
							<span
								onMouseEnter={() => setBg("coffee")}
								onMouseLeave={() => setBg("default")}
								className="hover:cursor-pointer hover:text-accent transition-colors"
							>
								Coffee-fueled Developer
							</span>
							<span className="mx-3">·</span>
							Quiet by nature
						</p>

						<p className="max-w-md text-text-muted text-sm sm:text-base leading-relaxed">
							Frontend developer and AI/ML enthusiast exploring intelligent,
							secure systems at the intersection of web and{" "}
							<span
								onMouseEnter={() => setBg("ai")}
								onMouseLeave={() => setBg("default")}
								className="hover:cursor-pointer hover:text-accent transition-colors"
							>
								AI
							</span>
							, Loves{" "}
							<span
								onMouseEnter={() => setBg("music")}
								onMouseLeave={() => setBg("default")}
								className="hover:cursor-pointer hover:text-accent transition-colors"
							>
								music
							</span>
							, focus, and curiosity.
						</p>

						<div className="pt-2">
							<p
								className="
      						inline-flex items-center
      						px-5 py-2.5
      						rounded-full
      						border border-border
      						bg-bg-surface/60
      						backdrop-blur-md
      						text-sm
      						font-quotes
      						text-text-muted
      						tracking-wide
      						transition-all duration-300
      						hover:border-accent/40
      						hover:shadow-[0_0_20px_rgba(139,92,246,0.15)]
    						"
							>
								Write code. Stay curious. Improve daily.
							</p>
						</div>

						{/* Social Icons */}
						<div className="flex items-center gap-5 pt-2">
							<Socials
								size={20}
								className="pt-2"
								iconClass="text-text-muted hover:text-accent"
							/>
						</div>
					</motion.div>

					{/* RIGHT — IMAGE */}
					<motion.div
						initial={{ opacity: 0, scale: 0.96 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
						className="flex justify-center"
					>
						<div
							className="
                			w-52 h-52 sm:w-60 sm:h-60
                			rounded-2xl
                			overflow-hidden
                			border border-border
                			bg-bg-surface
                			shadow-[0_0_40px_rgba(0,0,0,0.6)]
              				"
						>
							<img
								src={pfp}
								alt="Coder aesthetic"
								className="w-full h-full object-cover"
							/>
						</div>
					</motion.div>

					{/* Bottom - Buttons */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
						className="mt-14 w-full flex justify-center gap-6"
					>
						<a href="#projects">
							<button
								className="
								px-8 py-3
								rounded-xl
								bg-gradient-to-r from-accent to-blue-500

								text-white
								font-medium
								tracking-wide
								hover:scale-[1.02]
								active:scale-[0.98]
								transition-all duration-300
								"
							>
								Explore Work
							</button>
						</a>

						<button
							className="
							px-8 py-3
							rounded-xl
							border border-border
							bg-transparent
							text-text-muted
							font-medium
							tracking-wide
							hover:text-text-dark
							hover:border-accent/60
							hover:bg-bg-surface/40
							transition-all duration-300
							"
							onClick={() => devmode((prev) => !prev)}
						>
							{dev ? "Exit Dev Mode" : "Enter Dev Mode"}
						</button>
					</motion.div>
				</div>
			</div>
		</motion.section>
	);
};

export default Hero;
