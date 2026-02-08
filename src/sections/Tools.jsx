import tools from "../data/tools";

const Tools = () => {
	return (
		<section className="py-10 px-6 bg-bg-dark text-text-dark">
			<div className="max-w-7xl mx-auto space-y-16">
				{/* Tools */}
				<div>
					<h2 className="text-2xl font-semibold mb-8">Tools</h2>
					<div className="flex flex-wrap gap-4">
						{tools.map((tool) => (
							<div
								key={tool.name}
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
									src={tool.icon}
									alt={tool.name}
									className="w-5 h-5"
									loading="lazy"
								/>
								<span>{tool.name}</span>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default Tools;
