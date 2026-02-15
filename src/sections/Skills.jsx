import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import skills from "../data/skills";
import DevWrapper from "../components/DevWrapper";

const filters = [
	"All",
	"Frontend",
	"Backend",
	"AI/Data",
	"Database",
	"Infrastructure",
];

const Skills = ({ dev }) => {
	const [active, setActive] = useState("All");

	// Filtered skills
	const filteredSkills = useMemo(() => {
		if (active === "All") return skills;
		return skills.filter(
			(skill) => skill.section.toLowerCase() === active.toLowerCase()
		);
	}, [active]);

	return (
		<section
			id="skills"
			className="
				relative
				min-h-screen
				flex
				items-center
				justify-center
				text-text-dark
				px-6
			"
		>
			<div className="w-full md:w-[60%] max-w-[1200px] flex flex-col gap-14">

				{/* Title */}
				<DevWrapper name="Skills.Title" dev={dev}>
					<h1 className="text-4xl sm:text-5xl font-semibold tracking-wide">
						Core <span className="text-accent">capabilities</span>.
					</h1>
				</DevWrapper>

				{/* TOP: FILTER TAGS */}
				<DevWrapper name="Skills.Filters" dev={dev}>
					<div className="flex flex-wrap gap-4">
						{filters.map((filter) => {
							const isActive = active === filter;

							return (
								<button
									key={filter}
									onClick={() => setActive(filter)}
									className="relative px-5 py-2 text-sm tracking-wide rounded-full border border-border transition-all duration-300 group"
								>
									<span
										className={`relative z-10 transition-colors ${
											isActive
												? "text-bg-dark"
												: "text-text-muted group-hover:text-text-dark"
										}`}
									>
										{filter}
									</span>

									{isActive && (
										<motion.span
											layoutId="active-filter"
											className="absolute inset-0 bg-accent rounded-full"
											transition={{
												type: "spring",
												stiffness: 300,
												damping: 25,
											}}
										/>
									)}
								</button>
							);
						})}
					</div>
				</DevWrapper>

				{/* BOTTOM: SKILL CARDS */}
<DevWrapper name="Skills.Cards" dev={dev}>
	<AnimatePresence mode="wait">
		<motion.div
			key={active}
			initial={{ opacity: 0, y: 15 }}
			animate={{ opacity: 1, y: 0 }}
			exit={{ opacity: 0, y: -10 }}
			transition={{ duration: 0.35, ease: "easeInOut" }}
			className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6"
		>
			{filteredSkills.map((skill, index) => (
				<motion.div
					key={skill.name}
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{
						duration: 0.3,
						delay: index * 0.05,
						ease: "easeOut",
					}}
					whileHover={{ y: -4 }}
					className="
						group
						flex flex-col items-center justify-center
						gap-3
						p-6
						rounded-xl
						border border-border
						bg-bg-surface/40
						backdrop-blur-md
						transition-all duration-300
						hover:border-accent/50
						hover:bg-bg-surface/60
					"
				>
					<img
						src={skill.icon}
						alt={skill.name}
						className="w-8 h-8"
					/>

					<span className="text-sm text-text-muted group-hover:text-text-dark transition-colors">
						{skill.name}
					</span>
				</motion.div>
			))}
		</motion.div>
	</AnimatePresence>
</DevWrapper>

			</div>
		</section>
	);
};

export default Skills;
