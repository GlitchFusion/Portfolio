import Socials from "./Socials";

const Footer = () => {
	return (
		<footer className="mt-14 border-t border-border bg-bg-surface/50">
			<div className="max-w-7xl mx-auto px-6 py-6 flex flex-col gap-6">
				{/* Social Links */}
				<div className="flex flex-col sm:flex-row gap-4 text-sm text-text-muted">
					<Socials
						size={18}
						gap="gap-4"
						showLabel
						iconClass="text-text-muted hover:text-text-dark"
					/>
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
