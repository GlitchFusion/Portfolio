import { useEffect } from "react";

const Toast = ({ type = "success", message, onClose }) => {
	useEffect(() => {
		const timer = setTimeout(onClose, 3000);
		return () => clearTimeout(timer);
	}, [onClose]);

	return (
		<div
			className={`
        fixed bottom-6 right-6 z-[9999]
        px-6 py-4 rounded-lg
        shadow-lg
        text-sm font-medium
        flex items-center gap-3
        animate-fadeIn
        ${
					type === "success"
						? "bg-green-600/50 text-white"
						: "bg-red-600/50 text-white"
				}
      `}
		>
			{type === "success" ? "✅" : "❌"}
			{message}
		</div>
	);
};

export default Toast;
