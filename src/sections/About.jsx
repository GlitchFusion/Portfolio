import { useState } from "react";
import { motion } from "framer-motion";
import DevWrapper from "../components/DevWrapper";
import pfp from "../assets/images/pfp.jpg";

const aboutBgVariants = {
	default: {
		background: "radial-gradient(circle at top, #000000, #000000)",
	},
	ai: {
		background: "radial-gradient(circle at center, #120b1f, #050508)",
	},
	cyber: {
		background: "radial-gradient(circle at center, #0b1a14, #050508)",
	},
};

const About = ({ dev }) => {
	const [bg, setBg] = useState("default");

	return (
		<motion.section
			id="about"
			animate={bg}
			variants={aboutBgVariants}
			transition={{ duration: 0.6, ease: "easeInOut" }}
			className="relative min-h-screen flex items-center justify-center px-6 text-text-dark"
		>
			<DevWrapper name="About.Section" dev={dev}>
				<div className="w-full max-w-5xl flex flex-col md:flex-row items-center justify-center gap-12">
					{/* IMAGE */}
					<DevWrapper name="About.Image" dev={dev}>
						<motion.div
							initial={{ opacity: 0, x: -20 }}
							whileInView={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.8 }}
							className="flex justify-center"
						>
							<div className="w-64 h-64 rounded-2xl overflow-hidden border border-border bg-bg-surface shadow-[0_0_40px_rgba(0,0,0,0.6)]">
								<img
									src={pfp}
									alt="Profile"
									className="w-full h-full object-cover"
								/>
							</div>
						</motion.div>
					</DevWrapper>

					{/* TEXT CARD */}
					<DevWrapper name="About.Card" dev={dev}>
						<motion.div
							initial={{ opacity: 0, x: 20 }}
							whileInView={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.8 }}
							className="w-full md:w-[520px] bg-bg-surface/40 backdrop-blur-md border border-border rounded-2xl p-8 space-y-6"
						>
							<h2 className="font-brand text-4xl tracking-wide">
								About <span className="text-accent">Me</span>
							</h2>

							<p className="text-text-muted leading-relaxed text-sm sm:text-base">
								I’m a B.Tech student and a self-taught web developer focused on
								building clean, responsive, and intuitive user interfaces.
							</p>

							<p className="text-text-muted leading-relaxed text-sm sm:text-base">
								I’m deeply interested in emerging technologies—particularly{" "}
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
								, and{" "}
								<span
									onMouseEnter={() => setBg("cyber")}
									onMouseLeave={() => setBg("default")}
									className="text-accent hover:cursor-pointer transition-colors"
								>
									Cybersecurity
								</span>
								.
							</p>

							<p className="text-text-muted leading-relaxed text-sm sm:text-base">
								My goal is to build secure, intelligent, full-stack systems that
								solve real-world problems.
							</p>
						</motion.div>
					</DevWrapper>
				</div>
			</DevWrapper>
		</motion.section>
	);
};

export default About;
