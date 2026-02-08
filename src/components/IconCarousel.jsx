const IconCarousel = ({ items }) => {
	return (
		<div
			className="
        flex gap-6
        overflow-x-auto
        pb-4
        scrollbar-hide
      "
		>
			{items.map((item) => (
				<div
					key={item.name}
					className="
            min-w-[140px]
            h-[160px]
            flex flex-col items-center justify-center gap-4
            bg-bg-surface
            border border-border
            rounded-xl
            transition
            hover:-translate-y-1
            hover:border-accent
          "
				>
					<img
						src={item.icon}
						alt={item.name}
						className="w-12 h-12"
						loading="lazy"
						onError={(e) => {
							e.currentTarget.src =
								"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/devicon/devicon-original.svg";
						}}
					/>
					<span className="text-sm text-text-muted">{item.name}</span>
				</div>
			))}
		</div>
	);
};

export default IconCarousel;
