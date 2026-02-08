// src/components/Socials.jsx
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const socials = [
	{
		name: "GitHub",
		link: "https://github.com/glitchfusion",
		icon: <FaGithub />,
	},
	{
		name: "LinkedIn",
		link: "https://www.linkedin.com/in/glitchfusion/",
		icon: <FaLinkedin />,
	},
	{
		name: "Email",
		link: "mailto:youremail@gmail.com",
		icon: <MdEmail />,
	},
];

const Socials = ({
	size = 20,
	gap = "gap-5",
	className = "",
	iconClass = "",
	showLabel = false,
}) => {
	return (
		<div className={`flex items-center ${gap} ${className}`}>
			{socials.map((social) => (
				<a
					key={social.name}
					href={social.link}
					target="_blank"
					rel="noopener noreferrer"
					aria-label={social.name}
					className={`flex items-center gap-2 transition hover:-translate-y-[1px] ${iconClass}`}
				>
					<span style={{ fontSize: size }}>{social.icon}</span>

					{showLabel && <span className="text-sm">{social.name}</span>}
				</a>
			))}
		</div>
	);
};

export default Socials;
