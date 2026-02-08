import { useEffect, useState } from "react";
import { motion, useScroll } from "framer-motion";

const Navbar = () => {
	const { scrollY } = useScroll();
	const [hidden, setHidden] = useState(false);

	useEffect(() => {
		return scrollY.on("change", (latest) => {
			const prev = scrollY.getPrevious();
			if (latest > prev && latest > 80) setHidden(true);
			else setHidden(false);
		});
	}, [scrollY]);

	return (
		<motion.nav
			variants={{
				visible: { y: 0 },
				hidden: { y: "-100%" },
			}}
			animate={hidden ? "hidden" : "visible"}
			transition={{
				type: "spring",
				stiffness: 100,
				damping: 25,
				mass: 0.9,
			}}
			className="
        fixed top-0 left-0 w-full z-50
        bg-bg-dark/50 backdrop-blur-md
        px-10 py-4
        flex items-center justify-between
      "
		>
			{/* Logo */}
			<p className="font-brand text-[1.7rem] tracking-wide">
				<span className="text-text-dark">Glitch</span>
				<span className="text-accent">Fusion</span>
			</p>

			{/* Links */}
			<ul className="hidden md:flex gap-8 text-sm text-text-muted">
				{["About", "Tools", "Skills", "Projects", "Contact"].map((item) => (
					<li
						key={item}
						className="cursor-pointer hover:text-text-dark transition"
					>
						<a href={`#${item.toLowerCase()}`}>{item}</a>
					</li>
				))}
			</ul>
		</motion.nav>
	);
};

export default Navbar;
