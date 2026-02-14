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
				{devMode && <DashedLine label="Hero Section" />}
				<Hero devmode={setDevMode} dev={devMode} />
				{devMode && <DashedLine label="Hero Section" />}
				<About />
				{devMode && <DashedLine label="Hero Section" />}
				<Skills />
				{devMode && <DashedLine label="Hero Section" />}
				<Tools />
				{devMode && <DashedLine label="Hero Section" />}
				<Projects />
				{devMode && <DashedLine label="Hero Section" />}
				<Contact />
			</MainLayout>
		</>
	);
}

export default App;
