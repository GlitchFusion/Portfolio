import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import lang from "../data/lang";
import InfoBlock from "../components/InfoBlock";

const Languages = () => {
	const keys = Object.keys(lang);
	const [active, setActive] = useState(null);
	const data = active ? lang[active] : null;

	return (
		<section
			id="languages"
			className="relative min-h-screen bg-bg-dark text-text-dark px-6 py-28"
		>
			{/* CONTAINER */}
			<div className="w-full md:w-[60%] max-w-[1200px] mx-auto space-y-20">
				{/* Title */}
				<h1 className="text-4xl sm:text-5xl font-semibold tracking-wide">
					Global <span className="text-accent">coordinates</span>.
				</h1>

				{/* HEADER SELECTOR */}
				<div className="relative border border-border rounded-xl overflow-hidden bg-bg-surface/40 backdrop-blur-md">
					{/* Grid Overlay */}
					<div
						className="absolute inset-0 opacity-20 pointer-events-none 
            bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),
                linear-gradient(to_bottom,#1f2937_1px,transparent_1px)]
            bg-[size:50px_50px]"
					/>

					{/* Equal Sections */}
					<div className="relative grid grid-cols-1 md:grid-cols-2 divide-x divide-border">
						{keys.map((key) => {
							const item = lang[key];
							const isActive = active === key;

							return (
								<div
									key={key}
									onClick={() => setActive(active === key ? null : key)}
									className="cursor-pointer px-10 py-10 group transition-all duration-300"
								>
									{/* Top Row */}
									<div className="flex justify-between items-center">
										<span
											className={`text-lg font-semibold transition-colors duration-300 ${
												isActive
													? "text-accent"
													: "text-text-muted group-hover:text-text-dark"
											}`}
										>
											{item.code}
										</span>

										<span className="text-xs text-text-muted tracking-wide">
											{item.city}
										</span>
									</div>

									{/* Coordinates */}
									<div
										className={`mt-3 text-xs tracking-widest transition-colors duration-300 ${
											isActive
												? "text-text-dark"
												: "text-text-muted/40 group-hover:text-text-muted"
										}`}
									>
										{item.coords}
									</div>

									{/* Active underline */}
									{isActive && (
										<motion.div
											layoutId="active-line"
											className="h-[2px] bg-accent mt-6"
											transition={{
												type: "spring",
												stiffness: 300,
												damping: 25,
											}}
										/>
									)}
								</div>
							);
						})}
					</div>
				</div>

				{/* INTELLIGENCE PANEL */}
				<AnimatePresence mode="wait">
					{data ? (
						<motion.div
							key={active}
							initial={{ opacity: 0, y: 30 }}
							animate={{ opacity: 1, y: 0 }}
							exit={{ opacity: 0, y: -20 }}
							transition={{ duration: 0.35 }}
							className="relative border border-border rounded-xl p-12 bg-bg-surface/30 backdrop-blur-md"
						>
							{/* Grid Overlay */}
							<div
								className="absolute inset-0 opacity-10 pointer-events-none 
                bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),
                    linear-gradient(to_bottom,#1f2937_1px,transparent_1px)]
                bg-[size:50px_50px]"
							/>

							<div className="relative space-y-14">
								{/* Header */}
								<div className="flex justify-between items-center">
									<h2 className="text-2xl tracking-widest">{data.name}</h2>
									<span className="text-sm text-text-muted">{data.level}</span>
								</div>

								{/* Info Grid */}
								<div className="grid md:grid-cols-2 gap-16 text-sm leading-relaxed">
									<InfoBlock title="PROFICIENCY" value={data.proficiency} />
									<InfoBlock title="RESEARCH FOCUS" value={data.research} />
									<InfoBlock title="STRATEGIC VALUE" value={data.strategic} />
									<InfoBlock title="MARKET RATIONALE" value={data.market} />
									<InfoBlock title="CURRENT FOCUS" value={data.focus} />
									<InfoBlock title="CULTURAL CONTEXT" value={data.culture} />
								</div>
							</div>
						</motion.div>
					) : (
						/* DEFAULT EMPTY STATE */
						<motion.div
							key="empty"
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							className="relative border border-border rounded-xl py-24 bg-bg-surface/20 backdrop-blur-md flex items-center justify-center"
						>
							{/* Grid Overlay */}
							<div
								className="absolute inset-0 opacity-10 pointer-events-none 
                bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),
                    linear-gradient(to_bottom,#1f2937_1px,transparent_1px)]
                bg-[size:50px_50px]"
							/>

							<p className="relative text-text-muted text-sm tracking-widest uppercase">
								Select a coordinate to view intelligence
							</p>
						</motion.div>
					)}
				</AnimatePresence>
			</div>
		</section>
	);
};

export default Languages;
