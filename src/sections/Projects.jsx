import { useState, useEffect } from "react";
import { HiOutlineArrowSmLeft, HiOutlineArrowSmRight } from "react-icons/hi";
import projects from "../data/projects";

const Projects = () => {
	const [current, setCurrent] = useState(0);
	const [fade, setFade] = useState(true);
	const total = projects.length;

	const changeProject = (newIndex) => {
		setFade(false);
		setTimeout(() => {
			setCurrent(newIndex);
			setFade(true);
		}, 300);
	};

	const NextProject = () => {
		changeProject((current + 1) % total);
	};

	const PreviousProject = () => {
		changeProject(current === 0 ? total - 1 : current - 1);
	};

	useEffect(() => {
		const interval = setInterval(() => {
			NextProject();
		}, 5000);

		return () => clearInterval(interval);
	}, [current]);

	const project = projects[current];

	return (
		<div className="w-full flex flex-col items-center py-16 bg-bg-dark text-text-dark">
			<div className="flex flex-col md:flex-row items-center justify-between w-full max-w-6xl gap-12">
				{/* LEFT SIDE */}
				<div
					className={`md:w-1/2 space-y-6 transition-opacity duration-300 ${
						fade ? "opacity-100" : "opacity-0"
					}`}
				>
					<h2 className="text-4xl font-brand text-text-dark">{project.name}</h2>

					{/* Status Badge */}
					<span
						className={`mt-4 inline-block px-4 py-1 font-about rounded-full text-sm border
						${
							project.status === "completed"
								? "border-green-500 text-green-400"
								: project.status === "ongoing"
									? "border-yellow-500 text-yellow-400"
									: "border-blue-500 text-blue-400"
						}`}
					>
						{project.status === "planned" ? "Future Project" : project.status}
					</span>

					<p className="text-text-muted leading-relaxed">
						{project.description}
					</p>

					{/* Tech Tags */}
					<div className="flex flex-wrap gap-3">
						{project.tech.map((tech) => (
							<span
								key={tech}
								className="px-3 py-1 text-sm bg-bg-surface border border-border rounded-full text-text-muted hover:border-accent hover:text-accent transition cursor-pointer"
							>
								{tech}
							</span>
						))}
					</div>

					{/* View Live Button */}
					{project.hosted && project.live && (
						<a
							href={project.live}
							target="_blank"
							rel="noopener noreferrer"
							className="inline-block mt-4 px-6 py-2 bg-accent text-bg-dark rounded-lg font-semibold hover:bg-blue-500 transition"
						>
							View Live
						</a>
					)}

					{/* Navigation Buttons */}
					<div className="flex gap-4 pt-4">
						<button
							onClick={PreviousProject}
							className="p-2 border border-border rounded-lg hover:border-accent transition"
						>
							<HiOutlineArrowSmLeft className="w-6 h-6 text-text-dark" />
						</button>

						<button
							onClick={NextProject}
							className="p-2 border border-border rounded-lg hover:border-accent transition"
						>
							<HiOutlineArrowSmRight className="w-6 h-6 text-text-dark" />
						</button>
					</div>
				</div>

				{/* RIGHT SIDE */}
				<div
					className={`md:w-1/2 flex justify-center transition-opacity duration-300 ${
						fade ? "opacity-100" : "opacity-0"
					}`}
				>
					<div className="w-96 h-60 bg-bg-surface rounded-xl border border-border flex items-center justify-center shadow-xl overflow-hidden">
						{project.img ? (
							<img
								src={project.img}
								alt={project.name}
								className="w-full h-full object-cover"
							/>
						) : (
							<span className="text-7xl font-title text-accent">
								{project.name.charAt(0)}
							</span>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Projects;
