import { useState } from "react";
import { motion } from "framer-motion";

const aboutBgVariants = {
	default: {
		background: "radial-gradient(circle at top, #000000, #000000)",
	},
	ai: {
		background: "radial-gradient(circle at center, #120b1f, #050508)",
	},
	language: {
		background: "radial-gradient(circle at center, #0b1a14, #050508)",
	},
};

const About = () => {
	const [bg, setBg] = useState("default");

	return (
		<motion.section
			id="about"
			animate={bg}
			variants={aboutBgVariants}
			transition={{ duration: 0.6, ease: "easeInOut" }}
			className="w-full py-24 px-6 text-text-dark"
		>
			<div className="max-w-4xl mx-auto">
				{/* Header */}
				<h2 className="font-brand text-3xl sm:text-4xl tracking-wide mb-10">
					About <span className="text-accent">Me</span>
				</h2>

				{/* Content */}
				<div className="font-about space-y-6 text-text-muted leading-relaxed text-sm sm:text-base">
					<p>
						I’m a B.Tech student and a self-taught web developer with a strong
						focus on front-end development and a growing interest in full-stack
						engineering. I enjoy building clean, responsive, and intuitive user
						interfaces, and I’m currently expanding my skill set by integrating
						scalable back-end systems with modern front-end applications.
					</p>

					<p>
						Beyond web development, I’m deeply interested in emerging
						technologies—particularly{" "}
						<span
							onMouseEnter={() => setBg("ai")}
							onMouseLeave={() => setBg("default")}
							className="text-accent hover:cursor-pointer transition-colors"
						>
							AI
						</span>
						,{" "}
						<span
							onMouseEnter={() => setBg("ai")}
							onMouseLeave={() => setBg("default")}
							className="text-accent hover:cursor-pointer transition-colors"
						>
							ML
						</span>
						, and Cybersecurity. I actively explore how AI/ML models and
						intelligent agents are designed, trained, and deployed, while also
						learning the principles that keep modern systems secure, performant,
						and reliable.
					</p>

					<p>
						I’m also passionate about language learning and am currently
						studying{" "}
						<span
							onMouseEnter={() => setBg("language")}
							onMouseLeave={() => setBg("default")}
							className="text-accent hover:cursor-pointer transition-colors"
						>
							German
						</span>{" "}
						and{" "}
						<span
							onMouseEnter={() => setBg("language")}
							onMouseLeave={() => setBg("default")}
							className="text-accent hover:cursor-pointer transition-colors"
						>
							Chinese
						</span>
						, driven by curiosity about global communication, diverse cultures,
						and the role language plays in technology and innovation.
					</p>

					<p>
						Driven by curiosity and long-term ambition, my goal is to become a
						versatile technologist capable of building complete full-stack
						applications, AI-powered systems, and secure solutions that solve
						real-world problems.
					</p>
				</div>
			</div>
		</motion.section>
	);
};

export default About;
