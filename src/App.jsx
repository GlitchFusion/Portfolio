import MainLayout from "./layouts/MainLayout";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Tools from "./sections/Tools";
import Contact from "./sections/Contact";
import Languages from "./sections/Languages";
import { useState } from "react";

import DashedLine from "./components/DashedLine";

function App() {
	const [devMode, setDevMode] = useState(false);

	const pages = [
		{ id: "hero", component: <Hero devmode={setDevMode} dev={devMode} /> },
		{ id: "about", component: <About dev={devMode} /> },
		{ id: "skills", component: <Skills dev={devMode} /> },
		{ id: "tools", component: <Tools dev={devMode} /> },
		{ id: "projects", component: <Projects dev={devMode} /> },
		{ id: "contact", component: <Contact dev={devMode} /> },
		{ id: "languages", component: <Languages dev={devMode} /> },
	];

	return (
		<>
			<MainLayout dev={devMode}>
				{pages.map((page, index) => (
					<>
						{devMode && <DashedLine key={`line-${index}`} label={page.id} />}
						<div key={index}>{page.component}</div>
					</>
				))}
			</MainLayout>
		</>
	);
}

export default App;
