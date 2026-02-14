import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const MainLayout = ({ children, dev }) => {
	return (
		<div className="relative min-h-screen flex flex-col bg-bg-dark text-text-dark overflow-hidden">
			{/* CONTENT WRAPPER */}
			<div className="relative z-10 flex flex-col min-h-screen">
				<Navbar />
				<main className="flex-grow">{children}</main>
				<Footer />
			</div>
		</div>
	);
};

export default MainLayout;
