import MainLayout from "./layouts/MainLayout";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Tools from "./sections/Tools";
import Contact from "./sections/Contact";
import { useState } from "react";

import DashedLine from "./components/DashedLine";

function App() {
	const [devMode, setDevMode] = useState(false);

	return (
		<>
			<MainLayout dev={devMode}>
				{devMode && <DashedLine label="Hero" />}
				<Hero devmode={setDevMode} dev={devMode} />
				{devMode && <DashedLine label="About" />}
				<About dev={devMode} />
				{devMode && <DashedLine label="Skills" />}
				<Skills dev={devMode} />
				{devMode && <DashedLine label="Tools" />}
				<Tools dev={devMode} />
				{devMode && <DashedLine label="Projects" />}
				<Projects dev={devMode} />
				{devMode && <DashedLine label="Contact" />}
				<Contact dev={devMode} />
			</MainLayout>
		</>
	);
}

export default App;
