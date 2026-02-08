import tools from "../data/tools";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "swiper/css";
import "swiper/css/navigation";

const Tools = () => {
	const handleMouseMove = (e, card) => {
		const rect = card.getBoundingClientRect();
		const x = e.clientX - rect.left - rect.width / 2;
		const y = e.clientY - rect.top - rect.height / 2;

		card.style.transform = `
			translate(${x * -0.05}px, ${y * -0.05}px)
		`;
	};

	const handleMouseLeave = (card) => {
		card.style.transform = "translate(0px, 0px)";
	};

	return (
		<section className="py-14 px-6 bg-bg-dark text-text-dark overflow-hidden">
			<div className="max-w-7xl mx-auto space-y-12 relative">
				<h2 className="text-2xl font-semibold">Tools</h2>

				{/* Navigation Buttons */}
				<button
					className="
            tools-prev
            absolute -left-4 top-1/2 -translate-y-1/2
            z-10
            p-2
            bg-bg-surface
            border border-border
            rounded-full
            hover:border-accent
            transition
          "
					aria-label="Previous tools"
				>
					<ChevronLeft size={20} />
				</button>

				<button
					className="
            tools-next
            absolute -right-4 top-1/2 -translate-y-1/2
            z-10
            p-2
            bg-bg-surface
            border border-border
            rounded-full
            hover:border-accent
            transition
          "
					aria-label="Next tools"
				>
					<ChevronRight size={20} />
				</button>

				<Swiper
					modules={[Autoplay, Navigation]}
					navigation={{
						prevEl: ".tools-prev",
						nextEl: ".tools-next",
					}}
					spaceBetween={24}
					slidesPerView={2}
					loop
					autoplay={{
						delay: 2400,
						disableOnInteraction: false,
					}}
					breakpoints={{
						640: { slidesPerView: 3 },
						768: { slidesPerView: 4 },
						1024: { slidesPerView: 5 },
					}}
					className="!overflow-visible py-6 will-change-transform"
				>
					{tools.map((tool) => (
						<SwiperSlide key={tool.name} className="!overflow-visible">
							<div
								onMouseMove={(e) => handleMouseMove(e, e.currentTarget)}
								onMouseLeave={(e) => handleMouseLeave(e.currentTarget)}
								className="
                  h-32
                  flex flex-col items-center justify-center gap-3
                  bg-bg-surface
                  border border-border
                  rounded-xl
                  shadow-sm
                  transition-transform duration-200 ease-out
                  will-change-transform
                "
							>
								<img
									src={tool.icon}
									alt={tool.name}
									className="w-10 h-10 pointer-events-none"
									loading="lazy"
								/>
								<span className="text-sm font-medium pointer-events-none">
									{tool.name}
								</span>
							</div>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</section>
	);
};

export default Tools;
