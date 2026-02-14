import { motion } from "framer-motion";

const lab = [
	{
		title: "AI Systems Engineering",
		desc: "Designing robust pipelines for production ML workloads.",
	},
	{
		title: "Machine Learning Pipelines",
		desc: "End-to-end data processing, training, and deployment flows.",
	},
	{
		title: "Intelligent Agents",
		desc: "Autonomous systems that reason, plan, and execute tasks.",
	},
	{
		title: "Secure System Design",
		desc: "Building AI systems with security and privacy by default.",
	},
];

const AILab = () => {
	return (
		<section
			id="ai-lab"
			className="relative min-h-screen bg-bg-dark text-text-dark px-6 py-6 overflow-hidden"
		>
			{/* Diagonal Background Pattern */}
			<div className="absolute inset-0 opacity-[0.04] pointer-events-none bg-[linear-gradient(135deg,#ffffff_1px,transparent_1px)] bg-[size:40px_40px]" />

			<div className="relative w-full md:w-[60%] max-w-[1200px] mx-auto space-y-16">
				{/* Section Title */}
				<h1 className="text-4xl sm:text-5xl font-semibold tracking-wide">
					Intelligence by <span className="text-accent">design</span>.
				</h1>

				{/* Grid Layout */}
				<div className="grid md:grid-cols-2 gap-8">
					{lab.map((lab, index) => (
						<motion.div
							key={lab.title}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.4, delay: index * 0.08 }}
							viewport={{ once: true }}
							className="
								group
								relative
								p-8
								bg-bg-surface/40
								backdrop-blur-md
								border border-border
								rounded-xl
								transition-all duration-300
								hover:border-accent/40
								hover:bg-bg-surface/60
								hover:shadow-[0_10px_40px_rgba(0,0,0,0.6)]
							"
						>
							<h3 className="text-lg font-medium mb-3 tracking-wide group-hover:text-accent transition-colors">
								{lab.title}
							</h3>

							<p className="text-sm text-text-muted leading-relaxed">
								{lab.desc}
							</p>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
};

export default AILab;
