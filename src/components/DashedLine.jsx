const DashedLine = ({ label }) => {
	return (
		<div className="relative w-full my-5">
			{/* Dashed Line */}
			<div className="border-t border-dashed border-accent/40"></div>

			{/* Floating Label */}
			<span
				className="
					absolute -top-3 left-6
					px-1
					text-sm
					tracking-wide
					text-accent
					bg-bg-dark
				"
			>
				{label}
			</span>
		</div>
	);
};
export default DashedLine;
