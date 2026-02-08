import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const MainLayout = ({ children }) => {
	return (
		<div className="min-h-screen flex flex-col bg-bg-dark text-text-dark">
			<Navbar />

			{/* Main content grows to push footer down */}
			<main className="flex-grow pt-20">{children}</main>

			<Footer />
		</div>
	);
};

export default MainLayout;
