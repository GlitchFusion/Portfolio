import Socials from "./Socials";
import DevWrapper from "./DevWrapper";

const Footer = ({ dev }) => {
	return (
		<DevWrapper name="Footer" dev={dev}>
			<footer className="border-t border-border bg-bg-surface">
				<div className="max-w-7xl mx-auto px-6 py-8 flex flex-col gap-8">
					{/* Social Links */}
					<DevWrapper name="Footer.Socials" dev={dev}>
						<div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 text-sm text-text-muted p-4">
							<Socials
								size={18}
								gap="gap-4"
								showLabel
								iconClass="text-text-muted hover:text-text-dark"
							/>
						</div>
					</DevWrapper>

					{/* Bottom */}
					<DevWrapper name="Footer.Bottom" dev={dev}>
						<div className="p-3 border-t border-border text-xs text-text-muted/50 flex flex-col sm:flex-row justify-between items-center gap-2">
							<p>© {new Date().getFullYear()} GlitchFusion</p>
						</div>
					</DevWrapper>
				</div>
			</footer>
		</DevWrapper>
	);
};

export default Footer;
