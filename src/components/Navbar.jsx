import { motion } from "framer-motion";

const Navbar = () => {
	return (
		<motion.nav
			initial={false}
			animate={{ y: 0 }}
			className="
        fixed top-0 left-0 w-full z-50
        bg-black/50 backdrop-blur-md
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
				{["About", "Capabilities", "Contact"].map((item) => (
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
