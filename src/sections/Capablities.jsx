import { useState } from "react";
import Skills from "./Skills";
import Tools from "./Tools";
import Projects from "./Projects";

const Capablities = () => {
	const [activeTab, setActiveTab] = useState("projects");

	const tabs = [
		{ id: "tools", label: "Tools", component: <Tools /> },
		{ id: "projects", label: "Projects", component: <Projects /> },
		{ id: "skills", label: "Skills", component: <Skills /> },
	];

	return (
		<div id="capabilities" className="bg-bg-dark text-text-dark min-h-screen flex flex-col items-center py-16">
			{/* Tabs */}
			<div className="flex gap-12 border-border mb-16">
				{tabs.map((tab) => (
					<button
						key={tab.id}
						onClick={() => setActiveTab(tab.id)}
						className={`pb-3 text-lg font-semibold transition-all duration-300
              ${
								activeTab === tab.id
									? "text-accent border-b-2 border-accent"
									: "text-text-muted hover:text-text-dark"
							}
            `}
					>
						{tab.label}
					</button>
				))}
			</div>

			{/* Active Content */}
			<div className="w-full max-w-6xl transition-all duration-500">
				{tabs.find((tab) => tab.id === activeTab)?.component}
			</div>
		</div>
	);
};

export default Capablities;
