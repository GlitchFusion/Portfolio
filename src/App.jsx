import MainLayout from "./layouts/MainLayout";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Tools from "./sections/Tools";
import Contact from "./sections/Contact";

function App() {
	return (
		<>
			<MainLayout>
				<Hero />
				<About />
				<Tools />
				<Skills />
				<Projects />
				<Contact />
			</MainLayout>
		</>
	);
}

export default App;
