import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const MainLayout = ({ children }) => {
	return (
		<div className="max-h-screen flex flex-col bg-bg-dark text-text-dark">
			<Navbar />

			<main className="flex-grow">{children}</main>

			<Footer />
		</div>
	);
};

export default MainLayout;
