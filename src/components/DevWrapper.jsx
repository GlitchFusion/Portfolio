const DevWrapper = ({ name, dev, children }) => {
	if (!dev) return children;

	return (
		<div className="relative my-6">
			{/* Border Container */}
			<div className="relative rounded-xl border border-dashed border-accent/50 p-6">
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
		</div>
	);
};

export default DevWrapper;
