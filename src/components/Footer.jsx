import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
	return (
		<footer className="mt-14 border-t border-border bg-bg-surface/50">
			<div className="max-w-7xl mx-auto px-6 py-6 flex flex-col gap-6">
				{/* Social Links */}
				<div className="flex flex-col sm:flex-row gap-4 text-sm text-text-muted">
					<a
						href="https://github.com/glitchfusion"
						target="_blank"
						rel="noopener noreferrer"
						className="flex items-center gap-2 hover:text-text-dark transition"
					>
						<FaGithub size={18} />
						GitHub
					</a>

					<a
						href="https://www.linkedin.com/in/glitch-fusion-39962a3a5/"
						target="_blank"
						rel="noopener noreferrer"
						className="flex items-center gap-2 hover:text-text-dark transition"
					>
						<FaLinkedin size={18} />
						LinkedIn
					</a>

					<a
						href="mailto:youremail@gmail.com"
						className="flex items-center gap-2 hover:text-text-dark transition"
					>
						<MdEmail size={18} />
						Gmail
					</a>
				</div>

				{/* Bottom */}
				<div className="pt-6 border-t border-border text-xs text-text-muted/50 flex flex-col sm:flex-row justify-between gap-1">
					<p>© {new Date().getFullYear()} GlitchFusion</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
