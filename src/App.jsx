import MainLayout from "./layouts/MainLayout";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Tools from "./sections/Tools";
import Contact from "./sections/Contact";
import Capablities from "./sections/Capablities";

function App() {
	return (
		<>
			<MainLayout>
				<Hero />
				<About />
				<Capablities />
				<Contact />
			</MainLayout>
		</>
	);
}

export default App;
