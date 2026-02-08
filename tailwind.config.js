export default {
	darkMode: "class",
	content: ["./index.html", "./src/**/*.{js,jsx}"],
	theme: {
		extend: {
			colors: {
				bg: {
					light: "#F8FAFC",
					dark: "#020617",
					surface: "#0F172A",
					hover: "#111827",
				},
				text: {
					light: "#020617",
					dark: "#E5E7EB",
					secondary: "#94A3B8",
					muted: "#64748B",
				},
				accent: {
					DEFAULT: "#3B82F6",
					hover: "#60A5FA",
				},
				border: {
					light: "#E2E8F0",
					dark: "#1E293B",
				},
			},
		},
	},
	plugins: [],
};
