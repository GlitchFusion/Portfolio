import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const MainLayout = ({ children }) => {
	return (
		<div className="min-h-screen bg-bg-dark text-text-dark">
			<Navbar />
			<main className="pt-20">{children}</main>
			<Footer />
		</div>
	);
};

export default MainLayout;
