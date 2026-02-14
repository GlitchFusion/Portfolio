import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import lang from "../data/lang";
import InfoBlock from "../components/InfoBlock";
import DevWrapper from "../components/DevWrapper";

const Languages = ({ dev }) => {
	const keys = Object.keys(lang);
	const [active, setActive] = useState(null);
	const data = active ? lang[active] : null;

	return (
		<section
			id="languages"
			className="relative min-h-screen text-text-dark px-6 py-14"
		>
			{/* CONTAINER */}
			<div className="w-full md:w-[60%] max-w-[1200px] mx-auto flex flex-col gap-10">
				{/* Title */}
				<DevWrapper name="Languages.Title" dev={dev}>
					<h1 className="text-4xl sm:text-5xl font-semibold tracking-wide">
						Global <span className="text-accent">coordinates</span>.
					</h1>
				</DevWrapper>

				{/* HEADER SELECTOR */}
				<DevWrapper name="Languages.Selector" dev={dev}>
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
										className="cursor-pointer px-8 py-6 group transition-all duration-300"
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
											className={`mt-2 text-xs tracking-widest transition-colors duration-300 ${
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
												className="h-[2px] bg-accent mt-4"
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
				</DevWrapper>

				{/* INTELLIGENCE PANEL */}
				<DevWrapper name="Languages.Panel" dev={dev}>
					<AnimatePresence mode="wait">
						{data ? (
							<motion.div
								key={active}
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								exit={{ opacity: 0, y: -10 }}
								transition={{ duration: 0.3 }}
								className="relative border border-border rounded-xl p-10 bg-bg-surface/30 backdrop-blur-md"
							>
								{/* Grid Overlay */}
								<div
									className="absolute inset-0 opacity-10 pointer-events-none 
										bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),
										linear-gradient(to_bottom,#1f2937_1px,transparent_1px)]
										bg-[size:50px_50px]"
								/>

								<div className="relative space-y-10">
									{/* Header */}
									<div className="flex justify-between items-center">
										<h2 className="text-2xl tracking-widest">{data.name}</h2>
										<span className="text-sm text-text-muted">
											{data.level}
										</span>
									</div>

									{/* Info Grid */}
									<div className="grid md:grid-cols-2 gap-12 text-sm leading-relaxed">
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
								className="relative border border-border rounded-xl py-20 bg-bg-surface/20 backdrop-blur-md flex items-center justify-center"
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
				</DevWrapper>
			</div>
		</section>
	);
};

export default Languages;
