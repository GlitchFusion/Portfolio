const DevWrapper = ({ name, dev, children }) => {
	if (!dev) return children;

	return (
		<div className="relative group">
			<div className="absolute inset-0 border border-dashed border-accent/50 rounded-lg pointer-events-none"></div>

			{/* Label */}
			<span
				className="
                        absolute -top-3 left-4
                        px-2 py-0.5
                        text-xs
                        font-mono
                        tracking-wide
                        text-accent
                        bg-bg-dark
                        "
			>
				{name}
			</span>

			{children}
		</div>
	);
};

export default DevWrapper;
