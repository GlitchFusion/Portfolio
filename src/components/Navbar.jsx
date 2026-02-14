import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
	Home,
	User,
	Code2,
	Wrench,
	FolderKanban,
	Cpu,
	Languages,
} from "lucide-react";

const navItems = [
	{ name: "Home", icon: Home, href: "#hero" },
	{ name: "About", icon: User, href: "#about" },
	{ name: "AI Lab", icon: Cpu, href: "#ai-lab" },
	{ name: "Languages", icon: Languages, href: "#languages" },
	{ name: "Skills", icon: Code2, href: "#skills" },
	{ name: "Tools", icon: Wrench, href: "#tools" },
	{ name: "Projects", icon: FolderKanban, href: "#projects" },
];

const Navbar = ({ dev }) => {
	const [isOpen, setIsOpen] = useState(false);
	const [active, setActive] = useState("hero");

	// Smooth scroll
	useEffect(() => {
		document.documentElement.style.scrollBehavior = "smooth";
	}, []);

	// Active section detection
	useEffect(() => {
		const handleScroll = () => {
			navItems.forEach((item) => {
				const id = item.href.replace("#", "");
				const section = document.getElementById(id);
				if (!section) return;

				const rect = section.getBoundingClientRect();
				if (rect.top <= 200 && rect.bottom >= 200) {
					setActive(id);
				}
			});
		};

		window.addEventListener("scroll", handleScroll);
		handleScroll();

		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<>
			{/* Hover Trigger */}
			<div
				className="fixed top-0 left-0 h-full w-8 z-40"
				onMouseEnter={() => setIsOpen(true)}
			/>

			<AnimatePresence>
				{isOpen && (
					<motion.div
						initial={{ x: -100, opacity: 0 }}
						animate={{ x: 0, opacity: 1 }}
						exit={{ x: -100, opacity: 0 }}
						transition={{ duration: 0.35, ease: "easeOut" }}
						className="fixed bottom-8 left-6 z-50"
						onMouseLeave={() => setIsOpen(false)}
					>
						{/* Manual Dev Border */}
						<div
							className={`relative ${
								dev
									? "border border-dashed border-accent/60 rounded-2xl p-2"
									: ""
							}`}
						>
							{dev && (
								<span className="absolute -top-5 left-3 text-xs text-accent font-mono">
									Navbar.Dock
								</span>
							)}

							<nav
								className="
                  flex flex-col gap-1.5
                  px-3 py-3
                  rounded-2xl
                  bg-black/75
                  backdrop-blur-xl
                  border border-border
                  shadow-[0_12px_40px_rgba(0,0,0,0.6)]
                "
							>
								{navItems.map((item) => {
									const Icon = item.icon;
									const isActive = active === item.href.replace("#", "");

									return (
										<a
											key={item.name}
											href={item.href}
											className={`
                        relative
                        flex items-center gap-3
                        px-3 py-2.5
                        rounded-xl
                        text-sm tracking-wide
                        transition-all duration-300
                        ${
													isActive
														? "text-accent bg-bg-surface/60"
														: "text-text-muted hover:text-accent hover:bg-bg-surface/50"
												}
                      `}
										>
											{isActive && (
												<motion.span
													layoutId="active-pill"
													className="absolute inset-0 rounded-xl bg-accent/10"
													transition={{
														type: "spring",
														stiffness: 300,
														damping: 25,
													}}
												/>
											)}

											<Icon size={18} className="relative z-10" />
											<span className="relative z-10">{item.name}</span>
										</a>
									);
								})}
							</nav>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</>
	);
};

export default Navbar;
