import skills from "../data/skills";

const Skills = () => {
	return (
		<section className="py-10 px-6 bg-bg-dark text-text-dark">
			<div className="max-w-7xl mx-auto space-y-16">
				{/* Skills */}
				<div>
					<h2 className="text-2xl font-semibold mb-8">Skills</h2>
					<div className="flex flex-wrap gap-4">
						{skills.map((skill) => (
							<div
								key={skill.name}
								className="
                  flex items-center gap-3
                  px-4 py-2
                  bg-bg-surface
                  border border-border
                  rounded-md
                  text-sm
                  hover:border-accent
                  transition
                "
							>
								<img
									src={skill.icon}
									alt={skill.name}
									className="w-5 h-5"
									loading="lazy"
								/>
								<span>{skill.name}</span>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default Skills;
