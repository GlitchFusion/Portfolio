export default {
	darkMode: "class",
	content: ["./index.html", "./src/**/*.{js,jsx}"],
	theme: {
		extend: {
			fontFamily: {
				brand: ["Averia Libre", "serif"],
				title: ["Frijole", "serif"],
				hero: ["cursive"],
				about: ["Coming Soon"],
			},
			colors: {
				bg: {
					dark: "#000000",
					surface: "#0A0A0A",
				},
				text: {
					dark: "#EDEDED",
					muted: "#9CA3AF",
				},
				accent: "#3B82F6",
				border: "#1F2937",
			},
		},
	},
	plugins: [],
};
